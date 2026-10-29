/** Learning evidence and local-profile persistence. No network calls. */
export const STORAGE_KEY = 'phonics-path.v1';
export const DAY = 86400000;
const INTERVALS = [1, 3, 7, 14, 30];
const BAD_KEYS = new Set(['__proto__', 'prototype', 'constructor']);
const MAX_BYTES = 2_000_000;
const text = (value, max = 100) => typeof value === 'string' && value.length <= max && !BAD_KEYS.has(value);
const finite = (value, fallback = 0) => Number.isFinite(value) && value >= 0 ? value : fallback;
const unique = values => [...new Set(values)];
const dateKey = now => new Date(now).toISOString().slice(0, 10);
function uid() { return globalThis.crypto?.randomUUID?.() || `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`; }
function defaultStorage() { try { return globalThis.localStorage; } catch { return null; } }
function emptyProgress() {
  return {attempts:0, correct:0, assisted:0, independentCorrect:0, words:{}, readWords:[], spellWords:[], independentWords:[], days:[], lastPractised:0, firstPractised:0, delayedReadAt:0, due:0, level:0, status:'new', history:[], assessment:'combined', requiredWords:[], oralReady:false, oralWords:[]};
}
function emptyWord() { return {attempts:0,correct:0,errors:0,independent:0,read:0,spell:0,assisted:0,lastSeen:0,due:0,level:0,lastAdvanced:0}; }
export function createProfile(name = 'Learner 1') {
  const safeName = String(name).trim().slice(0,60) || 'Learner 1';
  return {id:uid(), name:safeName, created:Date.now(), settings:{voice:'',rate:0.8,adult:true,audioEnabled:true}, progress:{}, sessions:0};
}
export function freshStore() { const p=createProfile(); return {version:1,activeId:p.id,profiles:[p]}; }
function rejectUnsafe(value, depth=0) {
  if (depth>12) throw new Error('The progress file is too deeply nested.');
  if (value && typeof value==='object') {
    for(const key of Object.keys(value)) {
      if(BAD_KEYS.has(key)) throw new Error('The progress file contains an unsafe field.');
      rejectUnsafe(value[key],depth+1);
    }
  }
}
function stringList(value, max=500) {
  if(!Array.isArray(value) || value.length>max || value.some(v=>!text(v,100))) throw new Error('The progress file contains an invalid list.');
  return unique(value);
}
function boundedInteger(value, max=1e8) { return Math.min(max,Math.floor(finite(value))); }
function cleanWord(value) {
  if(!value || typeof value!=='object' || Array.isArray(value)) throw new Error('The progress file contains invalid word progress.');
  const out=emptyWord();
  for(const key of ['attempts','correct','errors','independent','read','spell','assisted']) out[key]=boundedInteger(value[key]);
  for(const key of ['lastSeen','due','lastAdvanced']) out[key]=Math.min(9e15,finite(value[key]));
  out.level=Math.min(5,boundedInteger(value.level));
  return out;
}
function cleanProgress(value) {
  if(!value || typeof value!=='object' || Array.isArray(value)) throw new Error('The progress file contains invalid lesson progress.');
  const out=emptyProgress();
  for(const key of ['attempts','correct','assisted','independentCorrect']) out[key]=boundedInteger(value[key]);
  for(const key of ['lastPractised','firstPractised','delayedReadAt','due']) out[key]=Math.min(9e15,finite(value[key]));
  for(const key of ['readWords','spellWords','independentWords']) out[key]=stringList(value[key]||[]);
  out.days=stringList(value.days||[],4000);
  out.oralWords=stringList(value.oralWords||[]);
  out.oralReady=value.oralReady===true && out.oralWords.length>=4;
  out.assessment=value.assessment==='reading'?'reading':'combined';
  out.requiredWords=stringList(value.requiredWords||[]);
  out.level=Math.min(5,boundedInteger(value.level));
  out.status=['new','learning','practised','secure'].includes(value.status)?value.status:'learning';
  if(!value.words || typeof value.words!=='object' || Array.isArray(value.words) || Object.keys(value.words).length>500) throw new Error('The progress file has an invalid word bank.');
  for(const [word,stats] of Object.entries(value.words)) {
    if(!text(word,100) || !word.trim()) throw new Error('The progress file has an invalid word.');
    out.words[word]=cleanWord(stats);
  }
  if(value.history!==undefined && (!Array.isArray(value.history) || value.history.length>100)) throw new Error('The progress history is invalid.');
  out.history=(value.history||[]).map(h=>{
    if(!h || !text(h.word,100) || !text(h.mode,30)) throw new Error('The progress history is invalid.');
    return {word:h.word,mode:h.mode,correct:h.correct===true,assisted:h.assisted===true,verified:h.verified===true,at:Math.min(9e15,finite(h.at))};
  });
  // Imported counters never substitute for the evidence required by this implementation.
  if(out.oralReady) out.status='practised';
  if(['practised','secure'].includes(out.status) && !out.oralReady && !hasBreadth(out)) out.status='learning';
  if(!out.delayedReadAt) out.delayedReadAt=Math.max(0,...out.history.filter(h=>h.mode==='read'&&h.verified&&h.correct&&h.at-out.firstPractised>=DAY).map(h=>h.at));
  if(out.status==='secure' && (!out.firstPractised || out.delayedReadAt-out.firstPractised<DAY)) out.status='practised';
  return out;
}
export function validateImport(input) {
  let raw;
  if(typeof input==='string') {
    if(input.length>MAX_BYTES) throw new Error('That progress file is too large (maximum 2 MB).');
    try { raw=JSON.parse(input); } catch { throw new Error('That file is not valid JSON progress data.'); }
  } else {
    try { if(JSON.stringify(input).length>MAX_BYTES) throw new Error('too large'); } catch { throw new Error('That progress file is invalid or too large.'); }
    raw=input;
  }
  rejectUnsafe(raw);
  if(!raw || raw.version!==1 || !Array.isArray(raw.profiles) || !raw.profiles.length || raw.profiles.length>50) throw new Error('Choose a Phonics Path version 1 progress file with 1–50 learners.');
  const ids=new Set();
  const profiles=raw.profiles.map(p=>{
    if(!p || !text(p.id,100) || !p.id.trim() || ids.has(p.id) || !text(p.name,60) || !p.name.trim()) throw new Error('The progress file contains invalid or duplicate learners.');
    ids.add(p.id);
    if(!p.progress || typeof p.progress!=='object' || Array.isArray(p.progress) || Object.keys(p.progress).length>500) throw new Error('The learner progress is invalid.');
    const progress={};
    for(const [id,stats] of Object.entries(p.progress)) {
      if(!/^[a-zA-Z0-9_-]{1,100}$/.test(id) || BAD_KEYS.has(id)) throw new Error('The progress file contains an invalid lesson identifier.');
      progress[id]=cleanProgress(stats);
    }
    return {id:p.id,name:p.name.trim(),created:finite(p.created,Date.now()),sessions:boundedInteger(p.sessions),settings:{voice:text(p.settings?.voice,200)?p.settings.voice:'',rate:Math.min(1.25,Math.max(0.5,finite(p.settings?.rate,0.8))),adult:p.settings?.adult!==false,audioEnabled:p.settings?.audioEnabled!==false},progress};
  });
  if(!text(raw.activeId,100) || !ids.has(raw.activeId)) throw new Error('The selected learner is missing from that file.');
  return {version:1,activeId:raw.activeId,profiles};
}
export function loadStore(storage=defaultStorage()) {
  if(!storage) return {store:freshStore(),warning:'Browser storage is unavailable. Export progress before closing this page.'};
  try {
    const value=storage.getItem(STORAGE_KEY);
    return {store:value?validateImport(value):freshStore(),warning:''};
  } catch {
    return {store:freshStore(),warning:'Saved progress could not be read. Your stored data has not been changed. Import a backup, or export this session before leaving.'};
  }
}
export function saveStore(store,storage=defaultStorage()) {
  try {
    if(!storage) throw new Error('unavailable');
    const clean=validateImport(store);
    storage.setItem(STORAGE_KEY,JSON.stringify(clean));
    return {ok:true,error:''};
  } catch { return {ok:false,error:'Progress could not be saved in this browser. Export a backup before closing the page.'}; }
}
export function resetLesson(profile,id) { delete profile.progress[id]; return profile; }
export function resetProfile(profile) { profile.progress={}; profile.sessions=0; return profile; }
function combinedBreadth(p) {
  const required=p.requiredWords||[];
  return p.independentCorrect>=Math.max(8,required.length) && p.independentWords.length>=4 && p.readWords.length>=2 && p.spellWords.length>=2 && required.every(word=>p.independentWords.includes(word));
}
function readingBreadth(p) {
  const required=p.requiredWords||[];
  const minimum=required.length?Math.min(6,required.length):6;
  const readCount=Object.values(p.words).reduce((total,w)=>total+w.read,0);
  return readCount>=Math.max(8,required.length) && p.readWords.length>=minimum && required.every(word=>p.readWords.includes(word));
}
function hasBreadth(p) { return p.assessment==='reading'?readingBreadth(p):combinedBreadth(p); }
function eligibleHistory(p) { return p.history.filter(h=>h.verified&&!h.assisted).slice(-10); }
function recentProficiency(p) { const h=eligibleHistory(p); return h.length>=8&&h.filter(x=>x.correct).length/h.length>=0.8; }
function advanceSpacing(item,now) {
  if(!item.lastAdvanced || now-item.lastAdvanced>=DAY) {
    item.level=Math.min(5,item.level+1);
    item.lastAdvanced=now;
    item.due=now+INTERVALS[Math.max(0,item.level-1)]*DAY;
  }
}
export function recordAttempt(profile,lessonId,word,mode,correct,{assisted=false,now=Date.now(),adultConfirmed=false,readingOnly=false,requiredWords}={}) {
  if(!/^[a-zA-Z0-9_-]{1,100}$/.test(lessonId)||BAD_KEYS.has(lessonId)||!text(word,100)||!word.trim()||!text(mode,30)) throw new Error('Invalid practice item.');
  now=finite(now,Date.now());
  const p=profile.progress[lessonId] ||= emptyProgress();
  const w=p.words[word] ||= emptyWord();
  if(requiredWords!==undefined) p.requiredWords=stringList(requiredWords);
  if(readingOnly && mode==='read') p.assessment='reading';
  if(['practised','secure'].includes(p.status) && !p.oralReady && !hasBreadth(p)) {p.status='learning';p.firstPractised=0;p.delayedReadAt=0;}
  const verified=!assisted&&(mode==='spell'||(mode==='read'&&adultConfirmed));
  p.attempts++; w.attempts++; p.lastPractised=now; w.lastSeen=now;
  if(correct) {p.correct++;w.correct++;}
  else {w.errors++;w.level=0;w.due=now;w.lastAdvanced=0;p.level=0;p.status='learning';p.firstPractised=0;p.delayedReadAt=0;p.oralReady=false;}
  if(assisted) {p.assisted++;w.assisted++;}
  if(correct&&verified) {
    p.independentCorrect++;w.independent++;
    if(!p.independentWords.includes(word)) p.independentWords.push(word);
    if(mode==='read') {w.read++;if(!p.readWords.includes(word))p.readWords.push(word);}
    if(mode==='spell') {w.spell++;if(!p.spellWords.includes(word))p.spellWords.push(word);}
    advanceSpacing(w,now);
  }
  if(correct && mode==='oral' && adultConfirmed && !assisted) {
    p.oralWords ||= [];
    if(!p.oralWords.includes(word))p.oralWords.push(word);
    if(p.oralWords.length>=4){p.oralReady=true;p.status='practised';}
    advanceSpacing(w,now);
  }
  const day=dateKey(now);if(!p.days.includes(day))p.days.push(day);
  p.history.push({word,mode,correct:correct===true,assisted:assisted===true,verified,at:now});
  if(p.history.length>100)p.history.splice(0,p.history.length-100);
  if(p.status==='new')p.status='learning';
  if(!readingOnly && combinedBreadth(p))p.assessment='combined';
  if(correct&&verified&&hasBreadth(p)&&recentProficiency(p)) {
    if(!p.firstPractised) {p.firstPractised=now;p.status='practised';}
    else if(mode==='read'&&adultConfirmed&&now-p.firstPractised>=DAY) {p.status='secure';p.delayedReadAt=now;}
    else if(p.status!=='secure')p.status='practised';
  }
  const practicedWords=Object.values(p.words);
  p.level=practicedWords.length?Math.min(...practicedWords.map(x=>x.level)):0;
  // Recognition and assisted answers do not push review dates into the future.
  const scheduled=practicedWords.filter(x=>x.due>0).map(x=>x.due);
  p.due=scheduled.length?Math.min(...scheduled):now;
  return profile;
}
export function statusOf(profile,id) { return profile.progress[id]?.status||'new'; }
export function dueLessons(profile,lessons,now=Date.now()) {
  return lessons.filter(l=>{const p=profile.progress[l.id];return p&&p.attempts>0&&p.due<=now;}).sort((a,b)=>profile.progress[a.id].due-profile.progress[b.id].due);
}
export function recommendLesson(profile,lessons,now=Date.now()) {
  const due=dueLessons(profile,lessons,now);
  if(due.length)return due[0];
  return lessons.find(l=>!['practised','secure'].includes(statusOf(profile,l.id)))||lessons[0]||null;
}
export function chooseWord(profile,lesson,{recent=[],now=Date.now(),rng=Math.random}={}) {
  const words=unique((lesson.words||[]).filter(w=>text(w,100)&&w.trim()));
  if(!words.length)return null;
  const excluded=recent.slice(-2);
  const candidates=words.filter(w=>!excluded.includes(w));
  const pool=candidates.length?candidates:words;
  const progress=profile.progress[lesson.id];
  const stats=progress?.words||{};
  const ranked=pool.map(word=>{
    const s=stats[word];
    const score=!s?100:(s.due<=now?70:0)+Math.min(30,s.errors*6)+((progress?.assessment==='reading'?s.read===0:s.independent===0)?20:0)+Math.min(20,(now-s.lastSeen)/DAY)+(s.errors>0&&s.due<=now?35:0);
    return {word,score:score+rng()*8};
  });
  ranked.sort((a,b)=>b.score-a.score);
  return ranked[0].word;
}
export function buildChoices(word,words,rng=Math.random) {
  const pool=unique(words).filter(w=>w!==word);
  // Similar-length orthographic competitors reduce trivial length-based guessing.
  pool.sort((a,b)=>Math.abs(a.length-word.length)-Math.abs(b.length-word.length));
  const close=pool.slice(0,Math.max(6,Math.min(pool.length,10)));
  for(let i=close.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[close[i],close[j]]=[close[j],close[i]];}
  const result=[word,...close.slice(0,3)];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
