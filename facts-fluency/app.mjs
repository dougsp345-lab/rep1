import {VERSION,FACTS,MODULES,BY_ID,BY_MODULE,OPS,SYMBOL,DAY,equation,dayKey,newProfile,status,check,recordAttempt,summary,recommend,createSession,choose,finishQuestion,resetModule,strategy,validateBackup} from './engine.mjs';
const $=id=>document.getElementById(id);
const KEY='fact-and-form-v1';
const id=()=>`p-${crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint32Array(4)),x=>x.toString(16)).join('-')}`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let blocked=false,warning='',db;
try{const raw=localStorage.getItem(KEY);db=raw?validateBackup(JSON.parse(raw)):null;}catch(e){blocked=true;warning='Saving is unavailable or existing data could not be read. Export a backup before closing. Import a valid backup to restore saving.';}
if(!db){const p=newProfile('My practice',id());db={version:VERSION,active:p.id,profiles:[p]};}
let session=null,current=null,assisted=false,interrupted=false,answered=false,started=0,showingLesson=false,resumeLesson=false;
const learner=()=>db.profiles.find(p=>p.id===db.active);
function notify(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('toast').classList.remove('show'),4500);}
function save(){if(blocked)return;try{localStorage.setItem(KEY,JSON.stringify(db));}catch(e){blocked=true;warning='Your browser cannot save progress. Keep this tab open and export a backup.';notify(warning);}}
function view(name){for(const v of ['home','practice','summary'])$(v+'View').hidden=v!==name;}
const opNames={add:'Addition',sub:'Subtraction',mul:'Multiplication',div:'Division'};
function renderHome(){
 view('home');session=null;current=null;
 $('profileSelect').replaceChildren(...db.profiles.map(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.name;return o;}));$('profileSelect').value=db.active;
 const p=learner(),s=summary(p),today=p.daily[dayKey()]?.independent||0;
 $('dueCount').textContent=s.due;$('retainedCount').textContent=s.retained;$('xpCount').textContent=p.xp;$('totalFacts').textContent=FACTS.length;
 $('reviewBtn').disabled=!s.due;
 $('sessionNote').textContent=warning||`${Math.min(10,today)} / 10 independent answers today · Level ${Math.floor(p.xp/100)+1} · Next: ${recommend(p).name}`;
 $('modules').innerHTML=OPS.map((op,oi)=>{
  return `<h3 class="module-section-title">${oi+1}. ${opNames[op]} <small>${FACTS.filter(f=>f.op===op).length} facts</small></h3>`+MODULES.filter(m=>m.op===op).map(m=>{
   const c=summary(p,m.facts),known=c.accurate+c.fluent+c.retained,percent=Math.round(100*known/m.facts.length);
   return `<article class="module-card"><div class="module-head"><span class="module-number">${SYMBOL[op]} ${m.index+1}</span><span class="module-tag">${c.due?c.due+' due':m.facts.length+' facts'}</span></div><h3>${m.name}</h3><p>${known} accurate or better · ${c.retained} retained</p><div class="bar" aria-label="${percent}% accurate"><i style="width:${percent}%"></i></div><div class="module-actions"><button class="button button-dark" data-play="${m.id}">Practice →</button><button class="button button-text" data-facts="${m.id}">Details</button><button class="button button-text" data-reset="${m.id}" aria-label="Reset ${opNames[op]} ${m.name}">Reset</button></div></article>`;
  }).join('');
 }).join('');
}
function explainModel(f){
 if(f.op==='add')return `<div class="dots-model" aria-label="${f.a} dots plus ${f.b} dots"><span>${'● '.repeat(f.a)||'0'}</span><b>+</b><span>${'● '.repeat(f.b)||'0'}</span></div>`;
 if(f.op==='mul'&&f.a*f.b>0)return `<div class="array-model" style="grid-template-columns:repeat(${f.b},1fr)" aria-label="${f.a} rows of ${f.b} dots">${'<span>●</span>'.repeat(f.a*f.b)}</div>`;
 return `<div class="part-model">${esc(strategy(f).model)}</div>`;
}
function showLesson(manual=false){
 const m=BY_MODULE[current.module],example=manual?current:(m.facts.find(f=>f.id!==current.id&&f.a>=2&&f.b>=2)||m.facts.find(f=>f.id!==current.id&&f.answer>=3&&f.answer<=6)||m.facts.find(f=>f.id!==current.id)||current),st=strategy(example);
 if(manual)assisted=true;
 showingLesson=true;resumeLesson=manual;$('questionArea').hidden=true;$('lesson').hidden=false;$('lessonStart').hidden=false;
 $('lesson').innerHTML=`<div class="eyebrow">${manual?'A STRATEGY WHEN YOU NEED IT':'UNDERSTAND → TRY → REMEMBER'}</div><h2>${st.title}</h2><p>${m.op==='add'?'Addition joins parts into a whole.':m.op==='sub'?'Subtraction finds the missing part.':m.op==='mul'?'Multiplication counts equal groups.':'Division undoes multiplication; the divisor cannot be zero.'}</p>${explainModel(example)}<h3>${equation(example)} = ${example.answer}</h3><p class="worked">${esc(st.steps).replaceAll('\n','<br>')}</p><p>You will now try a fact yourself. Take your time; fluency comes after accuracy.</p>`;
 $('lessonStart').textContent=manual?'Back to this fact →':'Try it myself →';$('lessonStart').focus();
}
function start(moduleId=null,mode='learn',target=null){
 const p=learner();
 if(mode==='review'&&!summary(p).due){notify('Nothing due yet. Choose a module to keep practicing.');return;}
 session=createSession(moduleId,mode,p);
 if(target){const others=BY_MODULE[moduleId].facts.filter(f=>f.id!==target).sort((a,b)=>(p.records[b.id]?.attempts||0)-(p.records[a.id]?.attempts||0)).slice(0,2).map(f=>f.id);session.pool=[target,...others];session.introduced=session.pool.filter(id=>!p.records[id]?.attempts);session.priority=target;}
 view('practice');next();
}
function next(){
 if(session.number>=session.limit)return finish();
 current=choose(learner(),session);assisted=false;interrupted=false;answered=false;showingLesson=false;
 const m=BY_MODULE[current.module],r=learner().records[current.id];
 $('practiceTitle').textContent=session.mode==='diagnostic'?'A quick starting-point check':session.mode==='review'?'Bring it back to mind':opNames[m.op]+': '+m.name;
 $('sessionProgress').max=session.limit;$('sessionProgress').value=session.number;$('sessionCount').textContent=`${session.number} / ${session.limit}`;
 $('modeLabel').textContent=session.mode==='diagnostic'?'12 FACTS · NOT A MASTERY TEST':session.mode==='review'?'SPACED REVIEW':'SHORT PRACTICE SET';
 $('strategyLabel').textContent=r?.run>=3&&learner().settings.seconds>0?'Accuracy first. Aim for comfortable recall; no countdown.':'Take your time. Accuracy comes first.';
 $('prompt').textContent='What is the missing number?';$('equation').textContent=equation(current)+' = ?';
 $('answerInput').value='';$('answerInput').disabled=false;$('submitBtn').disabled=false;$('nextBtn').hidden=true;$('feedback').textContent='';$('feedback').className='feedback';$('hintBtn').hidden=false;$('lessonBtn').hidden=false;
 $('questionArea').hidden=false;$('lesson').hidden=true;$('lessonStart').hidden=true;
 started=performance.now();
 if(!learner().lessons[m.id]&&session.mode!=='diagnostic')showLesson();else $('answerInput').focus();
}
function finish(){
 if(!session)return;view('summary');
 if(session.mode==='diagnostic'&&session.number){const missed=session.responses.find(r=>!r.qualified);learner().focus=missed?BY_ID[missed.id].module:session.number===12?'div-4':recommend(learner()).id;}
 learner().rounds++;save();
 const p=learner(),s=summary(p),accuracy=session.number?Math.round(100*session.correct/session.number):0;
 $('summaryContent').innerHTML=`<h1>${session.number?'A useful step forward.':'Ready when you are.'}</h1><p>${session.mode==='diagnostic'?'This short sample does not grant mastery to untested facts. Choose your recommended next module below.':'Your answers are saved. Small, spaced returns build lasting recall.'}</p><div class="summary-stats"><div><strong>${session.independent}</strong><span>independent answers</span></div><div><strong>${accuracy}%</strong><span>accuracy this set</span></div><div><strong>+${session.xp}</strong><span>learning XP</span></div></div><p><strong>Level ${Math.floor(p.xp/100)+1}</strong> · ${s.retained} / ${FACTS.length} facts retained · ${s.due} ready for review</p><p>${session.retry.length?'Facts needing another try will return in practice. ':''}You can stop here or continue. Returning on another day matters more than grinding XP.</p>`;
 if(session.mode==='diagnostic')$('summaryContent').insertAdjacentHTML('beforeend',`<p>Suggested starting point: <strong>${opNames[recommend(p).op]} — ${recommend(p).name}</strong>. This is a tentative recommendation from a small sample, not a placement certificate.</p>`);
 $('continueBtn').textContent=session.mode==='diagnostic'?'Start recommended module →':'Another short set →';$('continueBtn').focus();
}
function answer(e){
 e?.preventDefault();if(!session||!current||answered||showingLesson)return;
 const raw=$('answerInput').value.trim();
 if(!/^\d{1,3}$/.test(raw)){ $('feedback').className='feedback hint';$('feedback').textContent='Enter a whole number from 0 to 144.';return; }
 const ok=check(raw,current.answer),seconds=(performance.now()-started)/1000;
 const result=recordAttempt(learner(),current,{correct:ok,assisted,seconds,interrupted});
 finishQuestion(session,current,ok,result.qualified,result.xp);save();answered=true;
 $('answerInput').disabled=true;$('submitBtn').disabled=true;$('hintBtn').hidden=true;$('lessonBtn').hidden=true;
 $('feedback').className='feedback '+(ok?'good':'bad');
 $('feedback').textContent=ok?'Correct!':`Not yet. ${equation(current)} = ${current.answer}.\n${strategy(current).steps}\nRead the relationship once. This fact will return after other questions.`;
 $('nextBtn').hidden=false;$('nextBtn').textContent=session.number>=session.limit?'See this set’s progress →':'Next fact →';$('nextBtn').focus();
 $('sessionProgress').value=session.number;$('sessionCount').textContent=`${session.number} / ${session.limit}`;
}
function details(moduleId){
 const m=BY_MODULE[moduleId],p=learner(),s=summary(p,m.facts);
 $('factTitle').textContent=opNames[m.op]+': '+m.name;
 $('factContent').innerHTML=`<p>${m.facts.length} individually tracked prompts. Reversed facts are counted separately. Tap a fact for focused practice.</p><p>New ${s.new} · Learning ${s.learning} · Accurate ${s.accurate} · Fluent ${s.fluent} · Retained ${s.retained}</p><div class="fact-list">${m.facts.map(f=>{const r=p.records[f.id],label=status(r,p.settings.seconds),due=r?.attempts?(r.due<=Date.now()?'due now':new Date(r.due).toLocaleDateString()):'not introduced';return `<button class="fact-item" data-single="${f.id}"><strong>${equation(f)} = ?</strong><span>${label} · ${due}</span></button>`;}).join('')}</div>`;
 $('factDialog').showModal();
}
function manage(){ $('profileName').value=learner().name;$('fluencySeconds').value=learner().settings.seconds;$('statusMessage').textContent=warning||'Saved on this browser only. Back up periodically.';$('manageDialog').showModal(); }
function exportBackup(){const blob=new Blob([JSON.stringify({...db,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='fact-and-form-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('statusMessage').textContent='Backup downloaded. Keep it somewhere safe; it contains all learner profiles.';}
async function importBackup(file){
 if(file.size>5e6)return notify('Backup is too large.');
 try{const imported=validateBackup(JSON.parse(await file.text()));if(!confirm('Replace all local learner profiles with this backup? Export first if you want to keep the current records.'))return;
  db=imported;blocked=false;warning='';save();$('manageDialog').close();renderHome();notify('Backup restored.');
 }catch(e){$('statusMessage').textContent='Could not import: '+e.message;}
}
function guide(){
 $('guide').innerHTML=`<h3>The complete table, without invented facts.</h3><p>The requested total of 695 does not match the 0–12 tables. This app audits <strong>663 distinct facts</strong>: 169 additions, 169 inverse subtractions, 169 multiplications, and 156 valid divisions. Addends and factors run from 0 to 12, including both orders. Subtraction covers (a+b)−a=b, up to 24−12; division covers (d×q)÷d=q, with divisor 1–12 and quotient 0–12. Division by zero is excluded.</p><h3>20 small modules, four related operations.</h3><p>Addition and subtraction: zero → one/two → doubles and near doubles → friendly tens → remaining bridges. Multiplication and division: zero/one → twos/tens → fives → threes/fours/elevens → remaining products. Each fact belongs to exactly one module; inverse operations connect the families. All modules are open.</p><h3>Learn → retrieve → mix → return.</h3><p>A brief worked example introduces a strategy. Type the answer yourself; no multiple-choice guessing. Practice introduces at most three new facts per set, mixes familiar items, and returns missed facts after intervening items. Every answer has an exact key and every error has a specific worked correction. The question bank is finite by design; the practice is unlimited.</p><h3>Honest progress.</h3><p>Learning = introduced. Accurate = three consecutive independent correct answers. Fluent = accurate plus two subsequent recalls within your chosen target. Retained = at least three successful due reviews on different dates, at least three consecutive independent successes, and fluent recall (or accuracy-only mode). A hint, displayed solution, or interrupted question earns no independent mastery credit. Errors restart retention evidence for that fact. Retained does not mean permanent; due reviews keep checking.</p><p>No visible countdown and no penalty for taking time. Timing starts only with a visible question, and speed contributes only after accuracy. Set 4, 6, 10, or 15 seconds—or disable speed—in Settings. Typing speed is imperfect evidence of recall; adapt it to the learner.</p><h3>Progress worth coming back for.</h3><p>Ten-question rounds, personal levels, honest coverage, and small XP rewards make progress visible. XP is capped to one qualifying success per fact per day. No lives, competitive leaderboards, lost daily streaks, ads, or random loot. You can continue as long as useful, or stop without penalty. Due intervals grow roughly 1, 3, 7, 21, and 60 days; this scheduler and these thresholds are practical design choices, not a clinically validated or universally optimal algorithm.</p><h3>Your data stays here.</h3><p>Named learner profiles save in this browser; there is no account, IP identification, server backup, or automatic cross-device sync. Shared-device profiles are not password protected. Clearing browser data removes progress. Export/import moves all profiles to another browser. Reset a module from its card, or the current learner in Settings. GitHub may log normal website requests; this app adds no tracking.</p><h3>Design sources</h3><ul><li><a href="https://www.justinmath.com/fast-correct-answers-do-matter-in-mathematics/" target="_blank" rel="noopener">Justin Skycak: meaning, untimed competence, then fluency</a></li><li><a href="https://www.justinmath.com/the-math-academy-way-faq/" target="_blank" rel="noopener">Math Academy Way: worked examples and active practice</a></li><li><a href="https://ies.ed.gov/ncee/wwc/PracticeGuide/26" target="_blank" rel="noopener">WWC: systematic instruction and mathematics intervention</a></li></ul><p>Independent implementation; not affiliated with ALEKS, Math Academy, or Justin Skycak. <a href="DESIGN.md">Full design notes</a>.</p>`;
}
$('startBtn').onclick=()=>start(recommend(learner()).id);
$('reviewBtn').onclick=()=>start(null,'review');
$('diagnosticBtn').onclick=()=>start(null,'diagnostic');
$('modules').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.play)start(b.dataset.play);if(b.dataset.facts)details(b.dataset.facts);if(b.dataset.reset&&confirm('Reset this module for '+learner().name+'? Other modules and lifetime XP will stay unchanged.')){resetModule(learner(),b.dataset.reset);save();renderHome();notify('Module reset. Other modules were preserved.');}};
$('factContent').onclick=e=>{const b=e.target.closest('[data-single]');if(!b)return;const f=BY_ID[b.dataset.single];$('factDialog').close();start(f.module,'learn',f.id);};
$('answerForm').onsubmit=answer;$('nextBtn').onclick=next;
$('hintBtn').onclick=()=>{if(answered)return;assisted=true;$('feedback').className='feedback hint';$('feedback').textContent=strategy(current).hint;};
$('lessonBtn').onclick=()=>showLesson(true);
$('lessonStart').onclick=()=>{learner().lessons[current.module]=true;save();showingLesson=false;if(!resumeLesson)interrupted=false;$('lesson').hidden=true;$('lessonStart').hidden=true;$('questionArea').hidden=false;started=performance.now();$('answerInput').focus();};
$('finishBtn').onclick=finish;$('backBtn').onclick=()=>{save();renderHome();};
$('continueBtn').onclick=()=>{const old=session;if(old.mode==='diagnostic')start(recommend(learner()).id);else if(old.mode==='review'&&!summary(learner()).due)start(recommend(learner()).id);else start(old.moduleId,old.mode);};
$('summaryHomeBtn').onclick=renderHome;
$('keypad').onclick=e=>{const b=e.target.closest('[data-key]');if(!b||!current||showingLesson)return;const k=b.dataset.key;if(answered){if(k==='submit')next();return;}if(k==='submit'){answer();return;}const input=$('answerInput');input.value=k==='back'?input.value.slice(0,-1):(input.value+k).slice(0,3);};
$('profileSelect').onchange=e=>{db.active=e.target.value;save();renderHome();};
$('addProfile').onclick=()=>{const name=prompt('Name for this learner (saved only on this browser):');if(!name?.trim())return;if(db.profiles.length>=50)return notify('Maximum of 50 profiles.');const p=newProfile(name.trim(),id());db.profiles.push(p);db.active=p.id;save();renderHome();};
$('manageBtn').onclick=manage;$('closeManage').onclick=()=>$('manageDialog').close();$('closeFacts').onclick=()=>$('factDialog').close();
$('renameBtn').onclick=()=>{const name=$('profileName').value.trim();if(!name)return;learner().name=name.slice(0,32);save();$('statusMessage').textContent='Learner renamed.';renderHome();};
$('fluencySeconds').onchange=e=>{learner().settings.seconds=Number(e.target.value);for(const r of Object.values(learner().records))r.fastRun=0;save();$('statusMessage').textContent='Target updated. Speed evidence will be rebuilt using this target; accuracy and review history remain.';};
$('backupBtn').onclick=exportBackup;$('importFile').onchange=e=>{const file=e.target.files[0];if(file)importBackup(file);e.target.value='';};
$('resetAllBtn').onclick=()=>{const p=learner();if(confirm(`Reset ALL progress and XP for ${p.name}? Other learners will be preserved.`)){db.profiles[db.profiles.indexOf(p)]=newProfile(p.name,p.id);save();$('manageDialog').close();renderHome();notify('This learner’s progress was reset. A prior exported backup can restore it.');}};
$('deleteProfileBtn').onclick=()=>{const p=learner();if(!confirm(`Delete ${p.name} and all of their local progress? Export a backup first to make this recoverable.`))return;db.profiles=db.profiles.filter(x=>x.id!==p.id);if(!db.profiles.length)db.profiles.push(newProfile('My practice',id()));db.active=db.profiles[0].id;save();$('manageDialog').close();renderHome();};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&current&&!answered)interrupted=true;});
window.addEventListener('blur',()=>{if(current&&!answered)interrupted=true;});
window.addEventListener('storage',e=>{if(e.key!==KEY||!e.newValue)return;try{db=validateBackup(JSON.parse(e.newValue));renderHome();notify('Progress updated from another tab. Restart this set to continue.');}catch{notify('Another tab changed progress; export your backup before reloading.');}});
guide();renderHome();save();if(warning)notify(warning);
