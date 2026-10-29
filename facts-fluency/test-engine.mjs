import assert from 'node:assert/strict';
import {ALL_FACTS,FACTS,MODULES,BY_ID,BY_MODULE,OPS,DAY,newRecord,newProfile,check,status,recordAttempt,summary,createSession,customSession,scopeFacts,choose,finishQuestion,resetModule,validateBackup,strategy,recommend} from './engine.mjs';

let assertions=0;
const test=(name,fn)=>{fn();assertions++;console.log('PASS '+name);};
const base=new Date(2026,0,10,12).getTime();
const profile=()=>newProfile('Test learner','p-test-001');
// Isolated mastery tests simulate two intervening items; scheduler tests below
// independently exercise actual answer-by-answer spacing.
const attempt=(p,f,overrides={})=>{p.serial+=2;return recordAttempt(p,f,{correct:true,seconds:2,now:base,...overrides});};

test('Inventory is exhaustive, unique, correct, and 663 facts',()=>{
 assert.equal(FACTS.length,663);
 assert.equal(new Set(FACTS.map(f=>f.id)).size,663);
 assert.equal(new Set(FACTS.map(f=>`${f.op}:${f.x}:${f.y}`)).size,663);
 assert.deepEqual(OPS.map(op=>FACTS.filter(f=>f.op===op).length),[169,169,169,156]);
 for(const op of OPS)for(let a=0;a<=12;a++)for(let b=0;b<=12;b++){
  const f=BY_ID[`${op}:${a}:${b}`];
  if(op==='div'&&a===0){assert.equal(f,undefined);continue;}
  assert.ok(f,`missing ${op}:${a}:${b}`);
  const result=op==='add'?f.x+f.y:op==='sub'?f.x-f.y:op==='mul'?f.x*f.y:f.x/f.y;
  assert.equal(f.answer,result);
  assert.ok(f.answer>=0&&f.answer<=144);
  if(op==='div')assert.ok(f.y!==0);
  assert.ok(check(String(result),f.answer));
  assert.ok(!check(String(result+1),f.answer));
 }
});

test('Twenty nonempty, disjoint modules cover all facts exactly once',()=>{
 assert.equal(MODULES.length,20);
 const ids=MODULES.flatMap(m=>{assert.ok(m.facts.length>0);for(const f of m.facts)assert.equal(f.module,m.id);return m.facts.map(f=>f.id);});
 assert.equal(ids.length,663);assert.equal(new Set(ids).size,663);
});

test('Numeric entry rejects blank, expression, NaN, infinity, decimal and script injection',()=>{
 for(const invalid of ['', ' ', 'NaN', 'Infinity', '-1', '3.0', '1+2', '3e0', '<script>3</script>', '3 apples'])assert.equal(check(invalid,3),false,invalid);
 assert.equal(check(' 3 ',3),true);
 for(const f of FACTS)assert.equal(check(String(f.answer),f.answer),true);
});

test('Every fact has nonempty formula, model, title and actionable hint',()=>{
 for(const f of FACTS){const s=strategy(f);for(const k of ['title','hint','steps','model'])assert.equal(typeof s[k],'string',`${f.id} ${k}`);assert.ok(!Object.values(s).some(v=>/undefined|NaN/.test(v)));}
});

test('A long same-day run cannot earn retained; XP cannot be farmed on one fact',()=>{
 const p=profile(),f=BY_ID['mul:7:8'];
 for(let n=0;n<100;n++)attempt(p,f,{now:base+n*10000});
 assert.equal(p.records[f.id].stage,1);assert.equal(p.records[f.id].days.length,1);
 assert.equal(status(p.records[f.id]),'fluent');assert.equal(p.xp,5);
});

test('Hints and interruptions never count as independent retrieval or XP',()=>{
 const p=profile(),f=BY_ID['add:8:9'];
 for(let n=0;n<5;n++)assert.equal(attempt(p,f,{assisted:true,now:base+n*DAY}).qualified,false);
 for(let n=0;n<5;n++)assert.equal(attempt(p,f,{interrupted:true,now:base+(n+5)*DAY}).qualified,false);
 const r=p.records[f.id];assert.equal(r.run,0);assert.equal(r.stage,0);assert.equal(r.days.length,0);assert.equal(p.xp,0);assert.equal(status(r),'learning');
});

test('Accuracy first; fluency timing starts after three independent successes',()=>{
 const p=profile(),f=BY_ID['mul:6:7'];
 for(let n=0;n<3;n++)attempt(p,f,{seconds:2,now:base+n*10000});
 assert.equal(status(p.records[f.id]),'accurate');assert.equal(p.records[f.id].fastRun,0);
 attempt(p,f,{seconds:2,now:base+40000});attempt(p,f,{seconds:2,now:base+50000});
 assert.equal(status(p.records[f.id]),'fluent');
 attempt(p,f,{seconds:12,now:base+60000});assert.equal(status(p.records[f.id]),'accurate');
});

test('Retained requires three separate actually-due review dates',()=>{
 const p=profile(),f=BY_ID['div:8:7'];
 for(let n=0;n<5;n++)attempt(p,f,{now:base+n*10000});
 const r=p.records[f.id];
 attempt(p,f,{now:base+DAY+1000});assert.equal(r.stage,2);assert.equal(r.days.length,2);assert.notEqual(status(r),'retained');
 attempt(p,f,{now:base+2*DAY+1000});assert.equal(r.stage,2,'early review must not advance stage');
 attempt(p,f,{now:base+4*DAY+2000});assert.equal(r.stage,3);assert.equal(r.days.length,3);assert.equal(status(r),'retained');
 attempt(p,f,{correct:false,now:base+5*DAY});assert.equal(status(r),'learning');assert.equal(r.run,0);assert.equal(r.stage,0);assert.equal(r.days.length,0);assert.equal(r.errors,1);
});

test('Accuracy-only mode never labels a fact fluent',()=>{
 const p=profile(),f=BY_ID['sub:5:7'];p.settings.seconds=0;
 for(let n=0;n<5;n++)attempt(p,f,{seconds:60,now:base+n*10000});
 assert.equal(status(p.records[f.id],0),'accurate');
 attempt(p,f,{now:base+DAY+1000});attempt(p,f,{now:base+4*DAY+2000});
 assert.equal(status(p.records[f.id],0),'retained');
});

test('Module scheduling covers every fact across small sessions without immediate repeats',()=>{
 for(const m of MODULES){
  const p=profile();let serial=0;
  for(let round=0;round<m.facts.length*2&&m.facts.some(f=>!p.records[f.id]?.attempts);round++){
   const s=createSession(m.id,'learn',p);
   for(let i=0;i<10;i++){
    const f=choose(p,s,base+serial*10000,()=>0.5);
    assert.ok(f&&f.module===m.id);
    assert.notEqual(f.id,s.recent.at(-1),`immediate repeat ${m.id}`);
    const r=attempt(p,f,{now:base+serial++*10000});finishQuestion(s,f,true,r.qualified,r.xp);
   }
  }
  for(const f of m.facts)assert.ok(p.records[f.id]?.attempts,`uncovered ${f.id}`);
 }
});

test('Review prioritizes due facts; failed fact is queued after two intervening questions',()=>{
 const p=profile(),m=BY_MODULE['add-0'];
 for(const f of m.facts){p.records[f.id]={...newRecord(),attempts:5,run:5,fastRun:2,due:base+10*DAY};}
 const target=m.facts[8];p.records[target.id].due=base-1;
 const s=createSession(m.id,'review',p);assert.equal(choose(p,s,base,()=>0.5).id,target.id);
 finishQuestion(s,target,false,false,0);assert.equal(s.retry[0].at,3);
 for(let i=0;i<3;i++){const f=m.facts[i];finishQuestion(s,f,true,true,0);}
 assert.equal(choose(p,s,base,()=>0.5).id,target.id);
});

test('Diagnostic samples twelve valid facts across four operations',()=>{
 const s=createSession(null,'diagnostic',profile()),ops=[];
 for(let i=0;i<12;i++){const f=choose(profile(),s);assert.ok(f);ops.push(f.op);finishQuestion(s,f,true,true,0);}
 assert.deepEqual(ops,['add','add','add','sub','sub','sub','mul','mul','mul','div','div','div']);
});

test('Module reset leaves other modules and profiles untouched',()=>{
 const p=profile(),other=profile();p.lessons['add-0']=true;p.lessons['mul-0']=true;
 for(const f of FACTS)attempt(p,f);
 attempt(other,BY_ID['add:0:0']);const otherSnapshot=JSON.stringify(other),keep=JSON.stringify(p.records['mul:0:0']),xp=p.xp;
 resetModule(p,'add-0');
 for(const f of BY_MODULE['add-0'].facts)assert.equal(p.records[f.id],undefined);
 assert.equal(JSON.stringify(p.records['mul:0:0']),keep);assert.equal(p.lessons['add-0'],undefined);assert.equal(p.lessons['mul-0'],true);assert.equal(p.xp,xp);assert.equal(JSON.stringify(other),otherSnapshot);
});

test('Backup round-trip retains records; rejects malformed and duplicate identities',()=>{
 const p=profile();attempt(p,BY_ID['add:8:9']);const backup={version:1,active:p.id,profiles:[p]};
 const copy=validateBackup(JSON.parse(JSON.stringify(backup)));assert.deepEqual(copy.profiles[0].records,p.records);
 for(const invalid of [null,{}, {version:2,profiles:[p]}, {version:1,profiles:[]}, {version:1,profiles:[p,p]}, {version:1,profiles:[{...p,id:'__proto__'}]}, {version:1,profiles:[{...p,xp:-1}]}, {version:1,profiles:[{...p,xp:Infinity}]}])assert.throws(()=>validateBackup(invalid));
 for(const value of [-1,NaN,Infinity,'3']){const bad=structuredClone(backup);bad.profiles[0].records['add:8:9'].run=value;assert.throws(()=>validateBackup(bad));}
});

test('Summary accounts for every fact and due review',()=>{
 const p=profile();assert.deepEqual(summary(p),{new:663,learning:0,accurate:0,fluent:0,retained:0,due:0});attempt(p,FACTS[0]);const s=summary(p,FACTS,base+DAY+1);assert.equal(s.due,1);assert.equal(s.new,662);assert.equal(s.learning,1);
});

test('No regular practice set introduces more than three previously unseen facts',()=>{
 for(const m of MODULES){
  const p=profile(),s=createSession(m.id,'learn',p),seen=new Set();
  for(let i=0;i<40;i++){
   const f=choose(p,s,base+i*10000,()=>0.5);seen.add(f.id);
   const r=attempt(p,f,{correct:i%4!==0,assisted:i%7===0,now:base+i*10000});
   finishQuestion(s,f,i%4!==0,r.qualified,r.xp);
  }
  assert.ok(seen.size<=3,`${m.id}: ${seen.size} new facts`);
 }
});

test('Recommendation revisits remaining gaps after broad85% accuracy',()=>{
 const p=profile();
 for(const m of MODULES)for(const f of m.facts.slice(0,Math.ceil(m.facts.length*.85)))p.records[f.id]={...newRecord(),attempts:3,correct:3,run:3};
 const first=recommend(p);
 for(const f of first.facts)p.records[f.id]={...newRecord(),attempts:3,correct:3,run:3};
 assert.notEqual(recommend(p).id,first.id);
});

test('Diagnostic focus persists through backup and stops overriding after basic accuracy',()=>{
 const p=profile();p.focus='div-4';
 assert.equal(recommend(p).id,'div-4');
 const restored=validateBackup({version:1,active:p.id,profiles:[p]}).profiles[0];
 assert.equal(restored.focus,'div-4');assert.equal(recommend(restored).id,'div-4');
 for(const f of BY_MODULE['div-4'].facts)restored.records[f.id]={...newRecord(),attempts:3,correct:3,run:3};
 assert.equal(recommend(restored).id,'add-0');
});

test('Backup safely ignores prototype keys and rejects fractional counters',()=>{
 const malicious={version:1,profiles:[profile()]};malicious.profiles[0].records=JSON.parse('{"__proto__":'+JSON.stringify(newRecord())+',"constructor":'+JSON.stringify(newRecord())+'}');
 const imported=validateBackup(malicious);
 assert.equal(Object.getPrototypeOf(imported.profiles[0].records),Object.prototype);
 assert.equal(Object.keys(imported.profiles[0].records).length,0);
 const p=profile();attempt(p,FACTS[0]);p.records[FACTS[0].id].attempts=1.5;
 assert.throws(()=>validateBackup({version:1,profiles:[p]}));
});

test('All 1743 extended facts have correct answers, safe entry, and stable strategy keys',()=>{
 assert.equal(ALL_FACTS.length,1743);assert.equal(new Set(ALL_FACTS.map(f=>f.id)).size,1743);
 for(const f of ALL_FACTS){
  assert.equal(f.answer,f.op==='add'?f.x+f.y:f.op==='sub'?f.x-f.y:f.op==='mul'?f.x*f.y:f.x/f.y);
  assert.ok(check(String(f.answer),f.answer));assert.ok(f.answer<=400&&f.answer>=0);
  const s=strategy(f);assert.match(s.key,/^[a-z0-9-]+$/);assert.ok(s.steps.includes(String(f.answer)));
  for(const key of ['key','title','hint','steps','model'])assert.ok(s[key]&&!/undefined|NaN/.test(s[key]));
 }
});

test('Every displayed numeric equation in every worked strategy is arithmetically correct',()=>{
 let checked=0;
 for(const f of ALL_FACTS)for(const match of strategy(f).steps.matchAll(/(\d+)\s*([+×−÷])\s*(\d+)\s*=\s*(\d+)/g)){
  const [,aa,op,bb,cc]=match,a=Number(aa),b=Number(bb),c=Number(cc);
  assert.equal(op==='+'?a+b:op==='−'?a-b:op==='×'?a*b:a/b,c,`${f.id}: ${match[0]}`);checked++;
 }
 assert.ok(checked>=ALL_FACTS.length);
});

test('All 60 combinations and number limits have the exact intended inverse families',()=>{
 for(const ceiling of [5,10,12,20])for(let mask=1;mask<16;mask++){
  const ops=OPS.filter((_,i)=>mask&(1<<i)),scope=scopeFacts({ops,ceiling});
  const expected=ops.reduce((n,op)=>n+(op==='div'?ceiling*(ceiling+1):(ceiling+1)**2),0);
  assert.equal(scope.length,expected);assert.equal(new Set(scope.map(f=>f.id)).size,expected);
  for(const f of scope)assert.ok(ops.includes(f.op)&&f.a<=ceiling&&f.b<=ceiling);
  for(const f of ALL_FACTS)assert.equal(scope.includes(f),ops.includes(f.op)&&f.a<=ceiling&&f.b<=ceiling);
 }
 for(const bad of [{ops:[]},{ops:['bogus']},{ceiling:13},{ops:'add'},{ceiling:Infinity}])assert.throws(()=>scopeFacts(bad));
});

test('Every selected fact is eligible immediately for a new learner in both selector modes',()=>{
 for(const ceiling of [5,10,12,20])for(let mask=1;mask<16;mask++)for(const challenge of [false,true]){
  const ops=OPS.filter((_,i)=>mask&(1<<i)),p=profile(),s=customSession(p,{ops,ceiling,challenge}),scope=scopeFacts({ops,ceiling});
  assert.deepEqual(s.pool,scope.map(f=>f.id));
  // For each candidate, controlled random scores make it the first draw.
  for(const target of [scope[0],scope[Math.floor(scope.length/2)],scope.at(-1)]){
   let i=0;
   const drawn=choose(p,s,base,()=>scope[i++].id===target.id?0:0.99);
   assert.equal(drawn.id,target.id);
  }
 }
});

test('Selector draws more than three unfamiliar facts and balances all four operations',()=>{
 for(const challenge of [false,true]){
  const p=profile(),s=customSession(p,{ops:OPS,ceiling:12,challenge}),seen=new Set(),counts=Object.fromEntries(OPS.map(op=>[op,0]));
  for(let i=0;i<10;i++){
   const f=choose(p,s,base+i*1000,()=>0.5);assert.ok(f);assert.ok(!seen.has(f.id));seen.add(f.id);counts[f.op]++;
   const r=recordAttempt(p,f,{correct:true,now:base+i*1000});finishQuestion(s,f,true,r.qualified,r.xp);
  }
  assert.equal(seen.size,10);assert.ok(Math.max(...Object.values(counts))-Math.min(...Object.values(counts))<=1);
 }
});

test('Every extended fact is reachable without completing any lessons',()=>{
 const p=profile(),seen=new Set();let serial=0;
 for(let round=0;round<Math.ceil(ALL_FACTS.length/5)&&seen.size<ALL_FACTS.length;round++){
  const s=customSession(p,{ops:OPS,ceiling:20});
  for(let i=0;i<10;i++){
   const f=choose(p,s,base+serial*1000,()=>0.5);assert.ok(f);seen.add(f.id);
   const r=recordAttempt(p,f,{correct:true,now:base+serial++*1000});finishQuestion(s,f,true,r.qualified,r.xp);
  }
 }
 assert.equal(seen.size,ALL_FACTS.length);
});

test('Selector remains open even with many unresolved errors',()=>{
 const p=profile();
 for(const f of FACTS.slice(0,20))p.records[f.id]={...newRecord(),attempts:1,errors:1};
 const s=customSession(p,{ops:OPS,ceiling:12});
 assert.equal(s.pool.length,663);
 assert.ok(choose(p,s,base,()=>0.5));
});

test('Review ends when due facts finish rather than adding unrelated new facts',()=>{
 const p=profile(),f=FACTS[0];p.records[f.id]={...newRecord(),attempts:1,correct:1,run:1,due:base};
 const s=createSession(null,'review',p);assert.deepEqual(s.pool,[f.id]);assert.equal(choose(p,s,base).id,f.id);
 finishQuestion(s,f,true,true,0);assert.equal(choose(p,s,base),null);
 assert.equal(choose(profile(),createSession(null,'review',profile()),base),null);
});

test('Rapid immediate repetitions cannot create accuracy or fluency',()=>{
 const p=profile(),f=FACTS[0];
 for(let i=0;i<20;i++)recordAttempt(p,f,{correct:true,seconds:1,now:base+i*1000});
 assert.equal(p.records[f.id].run,1);assert.equal(p.records[f.id].fastRun,0);
 recordAttempt(p,f,{correct:true,seconds:1,now:base+DAY});assert.equal(p.records[f.id].run,2,'next-day recall is independent even without intervening app items');
});

test('Errors keep their delayed correction across rounds and backups',()=>{
 const p=profile(),f=BY_ID['mul:6:7'];
 recordAttempt(p,f,{correct:false,now:base});
 const restored=validateBackup({version:1,active:p.id,profiles:[p]}).profiles[0];
 const s=customSession(restored,{ops:['mul'],ceiling:12});
 assert.notEqual(choose(restored,s,base,()=>0.5)?.id,f.id);
 for(let i=0;i<3;i++){const filler=BY_ID[`mul:1:${i+2}`];recordAttempt(restored,filler,{correct:true,now:base+(i+1)*1000});}
 s.pool=[f.id];s.introduced=[];
 assert.equal(choose(restored,s,base+4000,()=>0.5).id,f.id);
});

test('Three new assisted facts can all be retried without a dead end',()=>{
 for(const correct of [true,false]){
  const p=profile(),s=createSession('add-0','learn',p);
  for(let i=0;i<15;i++){
   const f=choose(p,s,base+i*1000,()=>0.5);assert.ok(f,`dead end at ${i}`);
   const r=recordAttempt(p,f,{correct,assisted:true,now:base+i*1000});
   finishQuestion(s,f,correct,r.qualified,r.xp);
  }
 }
});

test('Six still-learning facts pause introductions; learning one opens one place',()=>{
 const p=profile(),m=BY_MODULE['mul-4'];
 for(const f of m.facts.slice(0,6))p.records[f.id]={...newRecord(),attempts:1,correct:1,run:1};
 const paused=createSession(m.id,'learn',p);assert.deepEqual(paused.introduced,[]);
 for(let i=0;i<10;i++){
  const f=choose(p,paused,base+i*1000,()=>0.5);assert.ok(f);assert.ok(p.records[f.id]?.attempts);
  const r=recordAttempt(p,f,{correct:false,now:base+i*1000});finishQuestion(paused,f,false,r.qualified,r.xp);
 }
 p.records[m.facts[0].id]={...newRecord(),attempts:3,correct:3,run:3};
 const reopened=createSession(m.id,'learn',p);assert.equal(reopened.introduced.length,1);
 assert.ok(!p.records[reopened.introduced[0]]?.attempts);
});

test('Old v1 backups and new strategy lessons retain compatible progress',()=>{
 const p=profile();attempt(p,BY_ID['mul:20:20']);p.lessons['strategy:mul-double:20']=true;
 p.settings.seconds=3;
 const restored=validateBackup({version:1,profiles:[p]}).profiles[0];
 assert.ok(restored.records['mul:20:20']);assert.equal(restored.lessons['strategy:mul-double:20'],true);assert.equal(restored.settings.seconds,3);
 delete p.serial;delete p.recent;
 for(const r of Object.values(p.records)){delete r.lastSerial;delete r.retryAt;}
 assert.doesNotThrow(()=>validateBackup({version:1,profiles:[p]}));
});

// Nonfatal audit probes: keep them visible until the owner fixes them.
const warnings=[];
{
 const p=profile();for(const m of MODULES)for(const f of m.facts.slice(0,Math.ceil(m.facts.length*.85)))p.records[f.id]={...newRecord(),attempts:3,run:3};
 const first=recommend(p);for(const f of first.facts)p.records[f.id]={...newRecord(),attempts:3,run:3};
 if(recommend(p).id===first.id)warnings.push('Recommendation remains on module0 after all modules cross85%, leaving later gaps without automatic targeting.');
 const malicious={version:1,profiles:[profile()]};malicious.profiles[0].records=JSON.parse('{"__proto__":'+JSON.stringify(newRecord())+'}');
 const imported=validateBackup(malicious);if(Object.getPrototypeOf(imported.profiles[0].records)!==Object.prototype)warnings.push('Import accepts __proto__ record and changes records prototype; use Object.hasOwn on BY_ID.');
}
console.log(JSON.stringify({tests:assertions,facts:FACTS.length,modules:MODULES.length,warnings},null,2));
