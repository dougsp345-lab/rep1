import {VERSION,FACTS,ALL_FACTS,MODULES,BY_ID,BY_MODULE,OPS,SYMBOL,equation,dayKey,newProfile,status,check,recordAttempt,summary,recommend,createSession,customSession,scopeFacts,choose,finishQuestion,resetModule,strategy,validateBackup} from './engine.mjs';
const $=id=>document.getElementById(id);
const KEY='fact-and-form-v1';
const id=()=>`p-${crypto.randomUUID?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint32Array(4)),x=>x.toString(16)).join('-')}`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let blocked=false,warning='',db;
try{const raw=localStorage.getItem(KEY);db=raw?validateBackup(JSON.parse(raw)):null;}catch{blocked=true;warning='Progress could not be loaded. Do not clear this browser. Ask an adult to restore a saved backup. New answers cannot be saved here yet.';}
if(!db){const p=newProfile('My practice',id());db={version:VERSION,active:p.id,profiles:[p]};}
let session=null,current=null,assisted=false,interrupted=false,answered=false,started=0,showingLesson=false,correcting=false,lessonKey=null;
const learner=()=>db.profiles.find(p=>p.id===db.active);
const opNames={add:'Addition',sub:'Subtraction',mul:'Multiplication',div:'Division'};
const statusNames={new:'Not tried yet',learning:'Still learning',accurate:'Correct without help',fluent:'Correct and quick',retained:'Remembered on later days'};
let selectedOps=[...OPS],detailScope=null;
function notify(message){$('toast').textContent=message;$('toast').classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('toast').classList.remove('show'),5000);}
function showWarning(){$('saveWarning').hidden=!warning;$('saveWarning').textContent=warning;}
function save(){if(blocked)return;try{localStorage.setItem(KEY,JSON.stringify(db));}catch{blocked=true;warning='This browser cannot save your answers. Keep this page open. Ask an adult to download a backup in Settings.';showWarning();notify(warning);}}
function view(name){for(const v of ['home','practice','summary'])$(v+'View').hidden=v!==name;}
const taughtKey=f=>`strategy:${f.op}:${strategy(f).key}:${Math.max(f.a,f.b)>12?'20':'12'}`;
function mixConfig(){return {ops:[...selectedOps],ceiling:Number($('numberLimit').value),challenge:$('practiceKind').value==='challenge'};}
function updateMix(){
 for(const op of OPS)$('pick-'+op).setAttribute('aria-pressed',String(selectedOps.includes(op)));
 const config=mixConfig(),facts=selectedOps.length?scopeFacts(config):[],n=config.ceiling;
 $('challengeOptions').hidden=!config.challenge;
 const examples={add:`Addition: up to ${n} + ${n} = ${n*2}.`,sub:`Subtraction: up to ${n*2} − ${n} = ${n}.`,mul:`Multiplication: up to ${n} × ${n} = ${n*n}.`,div:`Division: up to ${n*n} ÷ ${n} = ${n}. Never divide by 0.`};
 $('rangeHelp').textContent=selectedOps.map(op=>examples[op]).join(' ');
 $('mixCount').textContent=!selectedOps.length?'Choose at least one: Add, Subtract, Multiply, or Divide.':`${facts.length} facts available now. Any of these facts can appear, even if you have not learned it yet. Up to 10 questions per round.`;
 $('mixStart').disabled=!selectedOps.length;
 $('mixDetails').disabled=!selectedOps.length;$('resetMix').disabled=!selectedOps.length;
}
function renderHome(){
 view('home');session=null;current=null;showingLesson=false;
 $('profileSelect').replaceChildren(...db.profiles.map(p=>{const o=document.createElement('option');o.value=p.id;o.textContent=p.name;return o;}));$('profileSelect').value=db.active;
 const p=learner(),s=summary(p,ALL_FACTS),today=p.daily[dayKey()]?.independent||0;
 $('dueCount').textContent=s.due;$('retainedCount').textContent=s.retained;$('xpCount').textContent=p.xp;$('totalFacts').textContent=FACTS.length;
 $('reviewBtn').disabled=!s.due;
 $('sessionNote').textContent=`${today} correct without help today · Level ${Math.floor(p.xp/100)+1}`;
 const core=summary(p),extra=summary(p,ALL_FACTS.filter(f=>f.a>12||f.b>12));
 $('coverageNote').textContent=`Facts answered correctly 3 times without help: ${core.accurate+core.fluent+core.retained} of 663 in the main lessons; ${extra.accurate+extra.fluent+extra.retained} of 1,080 extra facts using numbers up to 20.`;
 $('modules').innerHTML=OPS.map((op,oi)=>`<details class="operation-group" ${op==='add'?'open':''}><summary>${SYMBOL[op]} ${opNames[op]} <small>${FACTS.filter(f=>f.op===op).length} facts</small></summary><div class="module-grid">`+MODULES.filter(m=>m.op===op).map(m=>{
  const c=summary(p,m.facts),known=c.accurate+c.fluent+c.retained,percent=Math.round(100*known/m.facts.length);
  return `<article class="module-card"><div class="module-head"><span class="module-number">${oi+1}.${m.index+1}</span><span class="module-tag">${m.facts.length} facts</span></div><h3>${esc(m.name)}</h3><p>${known} of ${m.facts.length} answered correctly 3 times without help<br>${c.due} to review</p><div class="bar" aria-label="${percent}% answered correctly 3 times without help"><i style="width:${percent}%"></i></div><div class="module-actions"><button class="button button-dark" data-play="${m.id}" aria-label="Practice ${opNames[op]}: ${esc(m.name)}">Practice</button><button class="button button-text" data-facts="${m.id}" aria-label="See facts for ${opNames[op]}: ${esc(m.name)}">See facts</button></div></article>`;
 }).join('')+'</div></details>').join('');
 updateMix();showWarning();
}
function explainModel(f){
 if(f.op==='add'&&f.a<=12&&f.b<=12)return `<div class="dots-model" aria-label="${f.a} dots plus ${f.b} dots"><span aria-hidden="true">${'● '.repeat(f.a)||'0'}</span><b aria-hidden="true">+</b><span aria-hidden="true">${'● '.repeat(f.b)||'0'}</span></div>`;
 if(f.op==='mul'&&f.a*f.b>0&&f.a*f.b<=100)return `<div class="array-model" style="grid-template-columns:repeat(${f.b},1fr)" role="img" aria-label="${f.a} rows with ${f.b} dots in each row"><span class="sr-only">${f.a} rows with ${f.b} dots in each row</span>${'<span aria-hidden="true">●</span>'.repeat(f.a*f.b)}</div>`;
 return `<div class="part-model">${esc(strategy(f).model)}</div>`;
}
function showLesson(){
 assisted=true;showingLesson=true;lessonKey=taughtKey(current);const st=strategy(current);
 $('questionArea').hidden=true;$('lesson').hidden=false;$('lessonStart').hidden=false;
 $('lesson').innerHTML=`<div class="eyebrow">FIRST, WATCH HOW</div><h2>${esc(st.title)}</h2>${explainModel(current)}<p class="worked">${esc(st.steps).replaceAll('\n','<br>')}</p><p>Read each step. Then hide the answer and try it.</p>`;
 $('lessonStart').textContent='Hide the answer and try';$('lessonStart').focus();
}
function begin(newSession){session=newSession;session.startLevel=Math.floor(learner().xp/100)+1;session.quick=0;session.target=Number($('challengeSeconds').value);view('practice');next();}
function start(moduleId=null,mode='learn',target=null){
 const p=learner();if(mode==='review'&&!summary(p,ALL_FACTS).due){notify('No facts to review yet. You can learn more or choose your own practice.');return;}
 const s=createSession(moduleId,mode,p);
 if(target){const f=BY_ID[target],base=scopeFacts({ops:[f.op],ceiling:Math.max(f.a,f.b)>12?20:12});const others=base.filter(f=>f.id!==target).sort((a,b)=>(p.records[b.id]?.attempts||0)-(p.records[a.id]?.attempts||0)).slice(0,2).map(f=>f.id);s.pool=[target,...others];s.introduced=s.pool.filter(id=>!p.records[id]?.attempts);s.priority=target;s.focused=true;}
  begin(s);
}
function next(){
 if(!session||session.number>=session.limit)return finish();
 current=choose(learner(),session);if(!current)return finish();
 assisted=false;interrupted=false;answered=false;showingLesson=false;correcting=false;lessonKey=null;
 const m=BY_MODULE[current.module],r=learner().records[current.id];
 $('practiceTitle').textContent=session.mode==='diagnostic'?'Try 12 questions':session.mode==='review'?'Review your facts':session.custom?session.custom.ops.map(op=>opNames[op]).join(' + '):opNames[m.op]+': '+m.name;
 $('sessionProgress').max=session.limit;$('sessionProgress').value=session.number;$('sessionCount').textContent=`${session.number} / ${session.limit}`;
 $('modeLabel').textContent=session.mode==='diagnostic'?'A SHORT CHECK':session.mode==='challenge'?'QUICK PRACTICE':'PRACTICE';
 $('strategyLabel').textContent=session.mode==='challenge'?`Try to answer in ${session.target} seconds. A slower correct answer still counts as correct.`:'Take your time. Get the answer right first.';
 $('prompt').textContent='Type the answer.';$('equation').textContent=equation(current)+' = ?';
 $('answerInput').value='';$('answerInput').disabled=false;$('submitBtn').disabled=false;$('nextBtn').hidden=true;$('correctionBtn').hidden=true;$('feedback').textContent='';$('feedback').className='feedback';$('hintBtn').hidden=false;$('lessonBtn').hidden=false;
 $('questionArea').hidden=false;$('lesson').hidden=true;$('lessonStart').hidden=true;
 started=performance.now();
 if(!session.custom&&!learner().lessons[taughtKey(current)]&&!r?.attempts&&session.mode!=='diagnostic'&&session.mode!=='challenge')showLesson();else $('answerInput').focus();
}
function finish(){
 if(!session)return;view('summary');current=null;
 if(session.mode==='diagnostic'&&session.number){const missed=session.responses.find(r=>!r.qualified);if(missed)learner().focus=BY_ID[missed.id].module;}
 if(session.number)learner().rounds++;save();
 const p=learner(),level=Math.floor(p.xp/100)+1,accuracy=session.number?Math.round(100*session.correct/session.number):0;
 $('summaryContent').innerHTML=`<h1>${level>session.startLevel?'You reached level '+level+'!':session.number?'Practice finished!':'No questions to do here yet.'}</h1><p>${warning?esc(warning):'Your answers are saved in this browser.'}</p><div class="summary-stats"><div><strong>${session.independent}</strong><span>correct without help</span></div><div><strong>${session.correct} / ${session.number}</strong><span>correct on the first try</span></div><div><strong>+${session.xp}</strong><span>points</span></div></div>${session.mode==='challenge'?`<p>${session.quick} correct without help within ${session.target} seconds. This includes typing time. This round target does not change your progress target in Settings.</p>`:''}<p>Level ${level} · ${accuracy}% correct on the first try</p><p>${session.retry.length?'Some facts need more practice. You can try them again in the next round.':'You can do another round or stop here.'} Come back on another day to practice remembering.</p>`;
 if(session.mode==='diagnostic')$('summaryContent').insertAdjacentHTML('beforeend',`<p>This checked only ${session.number} facts. It does not show what you know about every fact.</p><p>Next lesson: <strong>${opNames[recommend(p).op]} — ${esc(recommend(p).name)}</strong>.</p>`);
 $('continueBtn').textContent=session.mode==='diagnostic'?'Go to the next lesson':'Do another round';$('continueBtn').focus();
}
function displayCorrection(){
 $('feedback').className='feedback bad';$('feedback').textContent=`The answer is ${current.answer}.\n${strategy(current).steps}`;
 $('correctionBtn').hidden=false;$('nextBtn').hidden=true;$('correctionBtn').focus();
}
function answer(e){
 e?.preventDefault();if(!session||!current||answered||showingLesson)return;
 const raw=$('answerInput').value.trim();
 if(!/^\d{1,3}$/.test(raw)){ $('feedback').className='feedback hint';$('feedback').textContent='Type a whole number, such as 0, 7, or 24.';return; }
 const ok=check(raw,current.answer),seconds=(performance.now()-started)/1000;
 if(correcting){answered=true;if(ok){learner().lessons[taughtKey(current)]=true;save();$('feedback').className='feedback good';$('feedback').textContent='Correct!';$('correctionBtn').hidden=true;$('nextBtn').hidden=false;$('nextBtn').focus();}else displayCorrection();}
 else {
  const result=recordAttempt(learner(),current,{correct:ok,assisted,seconds,interrupted});
  finishQuestion(session,current,ok,result.qualified,result.xp);
  if(result.qualified&&seconds<=session.target)session.quick++;
  if(ok&&lessonKey)learner().lessons[lessonKey]=true;
  save();answered=true;
  if(ok){$('feedback').className='feedback good';$('feedback').textContent='Correct!';$('nextBtn').hidden=false;$('nextBtn').focus();}else displayCorrection();
 }
 $('answerInput').disabled=true;$('submitBtn').disabled=true;$('hintBtn').hidden=true;$('lessonBtn').hidden=true;
 $('nextBtn').textContent=session.number>=session.limit?'See results':'Next';
 $('sessionProgress').value=session.number;$('sessionCount').textContent=`${session.number} / ${session.limit}`;
}
function details(moduleId=null){
 const m=moduleId?BY_MODULE[moduleId]:null,p=learner(),facts=m?m.facts:scopeFacts(mixConfig());detailScope={moduleId,ids:facts.map(f=>f.id)};
 $('factTitle').textContent=m?opNames[m.op]+': '+m.name:'Your selected facts';
 $('factContent').innerHTML=`<p>${facts.length} facts. Choose one to practice it. Each order counts separately: 3 + 4 and 4 + 3 are two questions.</p><details><summary>What do the progress labels mean?</summary><p>Correct without help: 3 correct answers without a hint. Correct and quick: then 2 answers within your time target. Remembered on later days: successful reviews on at least 3 different dates. These are practice records, not a promise that you will never forget.</p></details><div class="fact-list">${facts.map(f=>{const r=p.records[f.id],label=statusNames[status(r,p.settings.seconds)],due=r?.attempts?(r.due<=Date.now()?'review now':'review '+new Date(r.due).toLocaleDateString()):'';return `<button class="fact-item" data-single="${f.id}"><strong>${equation(f)} = ?</strong><span>${label}${due?' · '+due:''}</span></button>`;}).join('')}</div><div class="danger-zone"><button class="button button-danger" id="detailReset">Reset progress for these ${facts.length} facts</button><p>This does not remove points or progress for other facts.</p></div>`;
 $('detailReset').onclick=()=>resetSelected(detailScope.ids,m?.id);
 $('factDialog').showModal();
}
function resetSelected(ids,moduleId){
 if(!confirm(`Reset progress for these ${ids.length} facts for ${learner().name}? The same facts will also be reset in mixed practice. Other facts and points will stay. A backup is needed to undo this.`))return;
 if(moduleId)resetModule(learner(),moduleId);else for(const id of ids)delete learner().records[id];
 for(const f of ids.map(id=>BY_ID[id]))delete learner().lessons[taughtKey(f)];
 save();$('factDialog').close();renderHome();notify('The selected facts were reset. Other facts and points were kept.');
}
function manage(){ $('profileName').value=learner().name;$('fluencySeconds').value=learner().settings.seconds;$('statusMessage').textContent=warning||'Saved in this browser only. Download a backup to keep another copy.';$('manageDialog').showModal(); }
function exportBackup(){const blob=new Blob([JSON.stringify({...db,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='fact-and-form-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('statusMessage').textContent='Backup downloaded. It contains every learner on this browser.';}
async function importBackup(file){
 if(file.size>5e6)return notify('That file is too large. Choose a Fact & Form backup.');
 try{const imported=validateBackup(JSON.parse(await file.text()));if(!confirm('Replace every learner and their progress in this browser with this backup? Download a backup first if you want to keep the current progress.'))return;
  db=imported;blocked=false;warning='';save();$('manageDialog').close();renderHome();notify('Backup loaded.');
 }catch(e){$('statusMessage').textContent='Could not load the backup: '+e.message;}
}
function guide(){
 $('guide').innerHTML=`<h3>Teach first. Then practice remembering.</h3><p>A new strategy is shown step by step using the actual question. The learner hides the example and answers. This supported try earns no independent-learning credit. Later questions check recall without the example. Errors show a worked correction, followed by a supported retry and a later independent retry. This is explicit teaching, not discovery learning.</p><h3>Choose a suitable practice set</h3><p>The 20 lessons teach the core 0–12 fact families. The four operation buttons select any single operation or combination. Number limits of 5, 10, 12, and 20 apply to addends and factors, not to every number printed on the screen. Subtraction uses the inverse addition facts; division uses the inverse multiplication facts. Thus 12 + 12 = 24 and 144 ÷ 12 = 12 are included at 12. Division by zero and negative subtraction answers are excluded.</p><p>The core inventory has 663 questions: 169 additions, 169 subtractions, 169 multiplications, and 156 divisions. Each order is separately tracked. The extended 0–20 inventory has 1,743 questions. A fact has one progress record shared across lessons and mixed sets.</p><h3>Accuracy before speed</h3><p>Start with lessons or untimed practice. Guided lessons introduce no more than three new facts per round and revisit errors. Choose your practice makes every selected fact available immediately, regardless of prior learning. It starts with questions rather than a lesson; Help and worked corrections remain available. The optional speed goal also uses the entire selected set. Its 2–10 second target is optional; no countdown interrupts thinking and a slow correct answer is never marked wrong. Typing and motor speed affect response time. Settings can disable the progress speed target entirely.</p><h3>What progress means</h3><p>Correct without help: three consecutive independent correct answers. Correct and quick: also two subsequent answers within the chosen target. Remembered on later days: also successful due reviews on at least three dates (or without the speed condition in accuracy-only mode). Help and immediate corrections do not establish independent recall. An error schedules further practice. Changing the speed target resets only speed evidence. These labels and intervals are practical rules, not validated diagnoses or promises of permanent memory.</p><h3>Rewards and stopping</h3><p>Points are awarded at most once per fact per day for an unassisted success. Levels show accumulated practice, not mastery. There are no lives, penalty streaks, loot, ads, or leaderboards. Short rounds have a clear stopping point; unlimited further practice remains available.</p><h3>Experts informing this design</h3><ul><li><a href="https://www.justinmath.com/fast-correct-answers-do-matter-in-mathematics/">Justin Skycak</a>: competence before fluent retrieval.</li><li><a href="https://nifdi.org/store/product/theory/">Siegfried Engelmann and Douglas Carnine</a>: carefully designed, explicit teaching sequences.</li><li><a href="https://explicitinstruction.org/download/sample-chapter.pdf">Anita Archer and Charles Hughes</a>: concise models, supported practice, immediate feedback, then independent practice.</li><li><a href="https://www.aft.org/sites/default/files/Rosenshine.pdf">Barak Rosenshine</a>: small steps, checks, guided practice, and cumulative review.</li><li>John Sweller and Graham Cooper: worked examples and reduced unnecessary cognitive load.</li><li><a href="https://doi.org/10.1177/0031721718815666">Pooja Agarwal and Henry Roediger</a>: retrieval practice, spacing, and feedback.</li></ul><p>This is an independent, source-informed implementation, not Math Academy's algorithm or a field-tested Engelmann Direct Instruction program. No discovery-learning, Reddit, Department of Education, or social-emotional-learning framework is used as its instructional basis. <a href="AUDIT.md">Detailed audit and sources</a> · <a href="DESIGN.md">Design and testing notes</a>.</p><h3>Saving and resetting</h3><p>Profiles save only in this browser and are not password protected. No account or IP tracking is used. Clearing browser data removes progress. Export/import transfers all profiles; there is no automatic device sync. Individual fact sets can be reset in See facts. Settings resets one learner, leaving others alone. Resets are shared wherever the same facts appear. GitHub may keep ordinary website request logs; the app adds no analytics.</p>`;
}
$('startBtn').onclick=()=>start(recommend(learner()).id);
$('reviewBtn').onclick=()=>start(null,'review');$('diagnosticBtn').onclick=()=>start(null,'diagnostic');
$('modules').onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.play)start(b.dataset.play);if(b.dataset.facts)details(b.dataset.facts);};
for(const op of OPS)$('pick-'+op).onclick=()=>{selectedOps=selectedOps.includes(op)?selectedOps.filter(x=>x!==op):OPS.filter(x=>x===op||selectedOps.includes(x));updateMix();};
$('pickAll').onclick=()=>{selectedOps=[...OPS];updateMix();};$('numberLimit').onchange=updateMix;$('practiceKind').onchange=updateMix;
$('pickAddSub').onclick=()=>{selectedOps=['add','sub'];updateMix();};$('pickMulDiv').onclick=()=>{selectedOps=['mul','div'];updateMix();};
$('mixStart').onclick=()=>begin(customSession(learner(),mixConfig()));$('mixDetails').onclick=()=>details();$('resetMix').onclick=()=>resetSelected(scopeFacts(mixConfig()).map(f=>f.id));
$('factContent').onclick=e=>{const b=e.target.closest('[data-single]');if(!b)return;const f=BY_ID[b.dataset.single];$('factDialog').close();start(f.module,'learn',f.id);};
$('answerForm').onsubmit=answer;$('nextBtn').onclick=next;
$('correctionBtn').onclick=()=>{correcting=true;answered=false;assisted=true;$('feedback').textContent='Try the same question again.';$('feedback').className='feedback hint';$('correctionBtn').hidden=true;$('answerInput').disabled=false;$('answerInput').value='';$('submitBtn').disabled=false;started=performance.now();$('answerInput').focus();};
$('hintBtn').onclick=()=>{if(answered)return;assisted=true;$('feedback').className='feedback hint';$('feedback').textContent=strategy(current).hint;};
$('lessonBtn').onclick=showLesson;
$('lessonStart').onclick=()=>{showingLesson=false;interrupted=false;$('lesson').hidden=true;$('lessonStart').hidden=true;$('questionArea').hidden=false;started=performance.now();$('answerInput').focus();};
$('finishBtn').onclick=finish;$('backBtn').onclick=()=>{save();renderHome();};
$('continueBtn').onclick=()=>{
 const old=session;if(old.mode==='diagnostic')return start(recommend(learner()).id);
 if(old.mode==='review'&&!summary(learner(),ALL_FACTS).due)return start(recommend(learner()).id);
 const s=old.custom?customSession(learner(),old.custom):createSession(old.moduleId,old.mode,learner());
 if(old.focused){s.focused=true;s.pool=[...old.pool];s.introduced=s.pool.filter(id=>!learner().records[id]?.attempts);}
 // Preserve outstanding retries without showing an answer again immediately.
 s.retry=old.retry.filter(r=>s.pool.includes(r.id)).map(r=>({...r,at:Math.max(1,r.at-old.number)}));
 begin(s);
};
$('summaryHomeBtn').onclick=renderHome;
$('keypad').onclick=e=>{const b=e.target.closest('[data-key]');if(!b||!current||showingLesson)return;const k=b.dataset.key;if(answered){if(k==='submit'&&!$('nextBtn').hidden)next();return;}if(k==='submit'){answer();return;}const input=$('answerInput');input.value=k==='back'?input.value.slice(0,-1):(input.value+k).slice(0,3);};
$('profileSelect').onchange=e=>{db.active=e.target.value;save();renderHome();};
$('addProfile').onclick=()=>{$('newProfileName').value='';$('addDialog').showModal();$('newProfileName').focus();};
$('closeAdd').onclick=()=>$('addDialog').close();
function addLearner(){const name=$('newProfileName').value.trim();if(!name){$('newProfileName').focus();return;}if(db.profiles.length>=50)return notify('This browser already has 50 learners.');const p=newProfile(name,id());db.profiles.push(p);db.active=p.id;save();$('addDialog').close();renderHome();}
$('createProfileBtn').onclick=addLearner;$('newProfileName').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();addLearner();}};
$('manageBtn').onclick=manage;$('closeManage').onclick=()=>{$('manageDialog').close();if(!session)renderHome();};$('closeFacts').onclick=()=>$('factDialog').close();
$('renameBtn').onclick=()=>{const name=$('profileName').value.trim();if(!name)return;learner().name=name.slice(0,32);save();$('statusMessage').textContent='Name saved.';renderHome();};
$('fluencySeconds').onchange=e=>{learner().settings.seconds=Number(e.target.value);for(const r of Object.values(learner().records))r.fastRun=0;save();$('statusMessage').textContent='Time target changed. Correct answers and review history are kept. Quick answers will be checked again using the new target.';};
$('backupBtn').onclick=exportBackup;$('importFile').onchange=e=>{const file=e.target.files[0];if(file)importBackup(file);e.target.value='';};
$('resetAllBtn').onclick=()=>{const p=learner();if(confirm(`Reset all answers and points for ${p.name}? Other learners will not change. You need a backup to undo this.`)){db.profiles[db.profiles.indexOf(p)]=newProfile(p.name,p.id);save();$('manageDialog').close();renderHome();notify('This learner’s progress was reset.');}};
$('deleteProfileBtn').onclick=()=>{const p=learner();if(!confirm(`Delete ${p.name} and all their progress? Download a backup first if you want to keep it.`))return;db.profiles=db.profiles.filter(x=>x.id!==p.id);if(!db.profiles.length)db.profiles.push(newProfile('My practice',id()));db.active=db.profiles[0].id;save();$('manageDialog').close();renderHome();};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&current&&!answered)interrupted=true;});
window.addEventListener('blur',()=>{if(current&&!answered)interrupted=true;});
window.addEventListener('storage',e=>{if(e.key!==KEY)return;if(!e.newValue){blocked=true;warning='Saved progress was removed in another tab. Reload to start fresh, or download a backup of this tab first.';showWarning();return;}try{db=validateBackup(JSON.parse(e.newValue));renderHome();notify('Progress changed in another tab. Choose a new round.');}catch{blocked=true;warning='Another tab saved unreadable data. Download a backup before reloading.';showWarning();}});
guide();renderHome();save();
