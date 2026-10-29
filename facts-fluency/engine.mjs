// Pure learning engine. No network, DOM, or storage access.
export const VERSION = 1;
export const DAY = 86400000;
export const OPS = ['add','sub','mul','div'];
export const SYMBOL = {add:'+',sub:'−',mul:'×',div:'÷'};
const names = {
 add:['Add 0','Add 1 or 2','Add equal numbers or numbers 1 apart','Add to 10 or add 10','More addition facts'],
 sub:['Subtract 0 or all','Subtract with 1 and 2','Subtract using doubles','Subtract using 10','More subtraction facts'],
 mul:['Multiply with 0 and 1','Multiply with 2 and 10','Multiply with 5','Multiply with 3, 4 and 11','More multiplication facts'],
 div:['Divide by 1; get 0 or 1','Divide using 2 and 10','Divide using 5','Divide using 3, 4 and 11','More division facts']
};
export function group(op,a,b){
 if(op==='add'||op==='sub'){
  if(a===0||b===0)return 0;
  if(a<=2||b<=2)return 1;
  if(Math.abs(a-b)<=1)return 2;
  if(a===10||b===10||a+b===10)return 3;
  return 4;
 }
 if(a<=1||b<=1)return 0;
 if([2,10].includes(a)||[2,10].includes(b))return 1;
 if(a===5||b===5)return 2;
 if([3,4,11].includes(a)||[3,4,11].includes(b))return 3;
 return 4;
}
export const ALL_FACTS=[];
for(const op of OPS)for(let a=0;a<=25;a++)for(let b=0;b<=25;b++){
 if(op==='div'&&a===0)continue; // a is divisor, b is quotient
 const x=op==='sub'?a+b:op==='div'?a*b:a;
 const y=op==='sub'||op==='div'?a:b;
 const answer=op==='add'?a+b:op==='mul'?a*b:b;
 ALL_FACTS.push({id:`${op}:${a}:${b}`,op,a,b,x,y,answer,module:`${op}-${group(op,a,b)}`});
}
export const FACTS=ALL_FACTS.filter(f=>f.a<=12&&f.b<=12);
export const BY_ID=Object.fromEntries(ALL_FACTS.map(f=>[f.id,f]));
export const MODULES=OPS.flatMap((op)=>names[op].map((name,i)=>({id:`${op}-${i}`,op,index:i,name,facts:FACTS.filter(f=>f.module===`${op}-${i}`)})));
export const BY_MODULE=Object.fromEntries(MODULES.map(m=>[m.id,m]));
export const equation=f=>`${f.x} ${SYMBOL[f.op]} ${f.y}`;
export function dayKey(now=Date.now()) { const d=new Date(now);return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; }
export function newRecord(){return {attempts:0,correct:0,run:0,fastRun:0,stage:0,days:[],due:0,last:0,lastGood:0,rewardDay:'',errors:0,assisted:0,lastSerial:0,retryAt:0};}
export function newProfile(name,id){return {id,name:name.slice(0,32),created:Date.now(),records:{},lessons:{},settings:{seconds:6},xp:0,daily:{},rounds:0,serial:0,recent:[]};}
export function status(r,seconds=6){
 if(!r?.attempts)return 'new';
 if(r.days.length>=3&&r.stage>=3&&r.run>=3&&(seconds===0||r.fastRun>=2))return 'retained';
 if(seconds>0&&r.run>=3&&r.fastRun>=2)return 'fluent';
 if(r.run>=3)return 'accurate';
 return 'learning';
}
export function check(raw,answer){return /^\d{1,3}$/.test(String(raw).trim())&&Number(raw)===answer;}
export function recordAttempt(profile,fact,{correct,assisted=false,seconds=Infinity,now=Date.now(),interrupted=false}){
 const r=profile.records[fact.id]??newRecord();profile.records[fact.id]=r;
 profile.serial=(profile.serial||0)+1;
 const today=dayKey(now),tooSoon=r.lastSerial>0&&profile.serial-r.lastSerial<3&&now-r.last<60000,qualified=correct&&!assisted&&!interrupted&&!tooSoon;
 const wasAccurate=r.run>=3,wasDue=now>=r.due;
 r.attempts++;r.last=now;r.lastSerial=profile.serial;if(correct)r.correct++;
 profile.recent=[...(profile.recent||[]),fact.id].slice(-12);
 if(assisted||interrupted)r.assisted++;
 if(!correct){r.errors++;r.run=0;r.fastRun=0;r.stage=0;r.days=[];r.due=now+5*60000;r.retryAt=profile.serial+3;}
 else if(qualified){
  r.run++;r.retryAt=0;
  if(wasAccurate&&profile.settings.seconds>0){r.fastRun=seconds<=profile.settings.seconds?r.fastRun+1:0;}
  // Advancement requires an actually due review on a different local date.
  if(wasDue&&!r.days.includes(today)){
   r.days.push(today);r.days=r.days.slice(-10);r.stage=Math.min(5,r.stage+1);
   r.due=now+[1,1,3,7,21,60][r.stage]*DAY;
  }
  r.lastGood=now;
 }else if(assisted){r.due=now+5*60000;r.retryAt=profile.serial+3;}
 let xp=0;
 if(qualified&&r.rewardDay!==today){xp=wasDue&&r.attempts>1?8:5;r.rewardDay=today;profile.xp+=xp;}
 profile.daily[today]??={attempts:0,independent:0};profile.daily[today].attempts++;if(qualified)profile.daily[today].independent++;
 const keys=Object.keys(profile.daily);for(const k of keys.slice(0,Math.max(0,keys.length-90)))delete profile.daily[k];
 return {xp,qualified,status:status(r,profile.settings.seconds)};
}
export function summary(profile,facts=FACTS,now=Date.now()){
 const counts={new:0,learning:0,accurate:0,fluent:0,retained:0,due:0};
 for(const f of facts){const r=profile.records[f.id];counts[status(r,profile.settings.seconds)]++;if(r?.attempts&&r.due<=now)counts.due++;}
 return counts;
}
export function recommend(profile){
 const focus=BY_MODULE[profile.focus];
 if(focus&&focus.facts.some(f=>(profile.records[f.id]?.run||0)<3))return focus;
 return MODULES.find(m=>m.facts.some(f=>(profile.records[f.id]?.run||0)<3))||MODULES.find(m=>m.facts.some(f=>status(profile.records[f.id],profile.settings.seconds)!=='retained'))||MODULES[0];
}
export function createSession(moduleId,mode='learn',profile=null){
 if(moduleId&&!Object.hasOwn(BY_MODULE,moduleId))throw Error('Unknown lesson.');
 const scope=moduleId?BY_MODULE[moduleId].facts:mode==='review'?ALL_FACTS:FACTS;
 return sessionFrom(scope,moduleId,mode,profile);
}
export function scopeFacts({ops=OPS,minimum=0,ceiling=12}={}){
 if(!Array.isArray(ops)||!ops.length||ops.some(op=>!OPS.includes(op))||!Number.isInteger(minimum)||minimum<0||minimum>15||!Number.isInteger(ceiling)||ceiling<1||ceiling>25||minimum>ceiling)throw Error('Choose at least one operation and a minimum from 0–15 that is no greater than the maximum from 1–25.');
 return ALL_FACTS.filter(f=>ops.includes(f.op)&&f.a>=minimum&&f.b>=minimum&&f.a<=ceiling&&f.b<=ceiling);
}
function sessionFrom(scope,moduleId,mode,profile){
 if(mode==='review')scope=scope.filter(f=>profile?.records[f.id]?.attempts&&profile.records[f.id].due<=Date.now());
 if(mode==='challenge')scope=scope.filter(f=>(profile?.records[f.id]?.run||0)>=3);
 const ops=OPS.filter(op=>scope.some(f=>f.op===op));
 // Rotate introductions toward the operation with least coverage, then interleave.
 const queues=ops.map(op=>({op,seen:scope.filter(f=>f.op===op&&profile?.records[f.id]?.attempts).length,items:scope.filter(f=>f.op===op&&!profile?.records[f.id]?.attempts)})).sort((a,b)=>a.seen-b.seen);
 const fresh=[];
 // Pause new introductions when unresolved facts would overload a small practice pool.
 const learningCount=scope.filter(f=>profile?.records[f.id]?.attempts&&(profile.records[f.id].run||0)<3).length;
 const newLimit=Math.max(0,Math.min(3,6-learningCount));
 while(fresh.length<newLimit&&queues.some(q=>q.items.length))for(const q of queues){if(q.items.length&&fresh.length<newLimit)fresh.push(q.items.shift().id);}
 return {moduleId,mode,number:0,correct:0,independent:0,xp:0,recent:[...(profile?.recent||[])],retry:[],responses:[],pool:scope.map(f=>f.id),introduced:fresh,limit:mode==='diagnostic'?12:10};
}
export function customSession(profile,{ops=OPS,minimum=0,ceiling=12,challenge=false}={}){
 // The selector is open practice, not a prerequisite-gated lesson.
 const session=sessionFrom(scopeFacts({ops,minimum,ceiling}),null,'practice',profile);
 session.mode=challenge?'challenge':'practice';
 session.custom={ops:[...new Set(ops)],minimum,ceiling,challenge};
 return session;
}
export function choose(profile,session,now=Date.now(),random=Math.random){
 if(session.priority&&session.number===0)return BY_ID[session.priority];
 if(session.mode==='diagnostic'){
  const op=OPS[Math.floor(session.number/3)%4];
  const pairs=[[1,2],[4,5],[8,7]],pair=pairs[session.number%3];
  return BY_ID[`${op}:${pair[0]}:${pair[1]}`];
 }
 const all=session.pool.map(id=>BY_ID[id]).filter(Boolean);
 const waiting=new Set(session.retry.filter(r=>r.at>session.number).map(r=>r.id));
 let eligible=all.filter(f=>!waiting.has(f.id)&&!(profile.records[f.id]?.retryAt>(profile.serial||0)+1&&now-profile.records[f.id].last<5*60000));
 // A deliberately tiny custom range may have no filler questions. Keep it
 // playable; recordAttempt still withholds independent credit for close repeats.
 if(session.custom&&session.mode!=='challenge'&&!eligible.length)eligible=all;
 const retry=session.mode==='challenge'?null:session.retry.find(r=>r.at<=session.number&&eligible.some(f=>f.id===r.id));
 if(retry){session.retry=session.retry.filter(r=>r!==retry);return BY_ID[retry.id];}
 let candidates=session.custom?eligible:eligible.filter(f=>profile.records[f.id]?.attempts||session.introduced.includes(f.id));
 if(session.mode==='review')candidates=candidates.filter(f=>profile.records[f.id]?.due<=now&&!session.responses.some(r=>r.id===f.id));
 if(session.mode==='challenge')candidates=candidates.filter(f=>(session.custom||(profile.records[f.id]?.run||0)>=3)&&!session.responses.some(r=>r.id===f.id));
 if(!candidates.length)return null;
 // Never silently turn an exhausted review or challenge into a new-fact lesson.
 const spaced=candidates.filter(f=>!session.recent.slice(-2).includes(f.id));
 if(spaced.length)candidates=spaced;
 else {const other=candidates.filter(f=>f.id!==session.recent.at(-1));if(other.length)candidates=other;}
 if(session.custom){
  const counts=Object.fromEntries(OPS.map(op=>[op,session.responses.filter(r=>BY_ID[r.id]?.op===op).length]));
  const least=Math.min(...candidates.map(f=>counts[f.op]));
  candidates=candidates.filter(f=>counts[f.op]===least);
 }
 const ranked=candidates.map(f=>{const r=profile.records[f.id],times=session.responses.filter(x=>x.id===f.id).length;
  // All selected facts can be drawn immediately. Randomize unseen facts;
  // cycle through previously attempted facts by recency, not mastery.
  if(session.custom)return {f,score:times*1e15+(r?.last||0)+random()*1e6};
  // Within this set, every eligible fact gets a turn before extra repetitions.
  const priority=!r?.attempts?0:r.due<=now?1:r.run<3?2:3;
  return {f,score:times*1e6+priority*10000+(r?.last||0)/1e11+(r?.run||0)+random()*0.5};
 }).sort((a,b)=>a.score-b.score);
 return ranked[0].f;
}
export function finishQuestion(session,fact,correct,qualified,xp){
 session.responses.push({id:fact.id,qualified});
 session.number++;if(correct)session.correct++;if(qualified)session.independent++;session.xp+=xp;
 session.recent.push(fact.id);session.recent=session.recent.slice(-12);
 if(!qualified&&!session.retry.some(r=>r.id===fact.id))session.retry.push({id:fact.id,at:session.number+2});
}
export function resetModule(profile,id){for(const f of BY_MODULE[id].facts)delete profile.records[f.id];delete profile.lessons[id];}
export function strategy(f){const result=strategyContent(f);const base=f.op==='sub'?strategyContent({...f,op:'add',x:f.a,y:f.b,answer:f.a+f.b}):f.op==='div'?strategyContent({...f,op:'mul',x:f.a,y:f.b,answer:f.a*f.b}):result;
 if((f.op==='add'||f.op==='mul')&&f.a!==f.b)result.steps=`You can swap the two numbers when you ${f.op==='add'?'add':'multiply'}. The answer stays the same.\n${result.steps}`;
 result.steps=result.steps.split('\n').filter((line,i,lines)=>i===0||line!==lines[i-1]).join('\n');
 return {...result,key:f.op+'-'+base.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')};}
function strategyContent(f){
 const {op,a,b,x,y,answer}=f;
 if(op==='sub')return {title:'Use addition to subtract',hint:`What number can you add to ${y} to get ${x}?`,steps:`Use this addition fact:\n${strategy({...f,op:'add',x:a,y:b,answer:a+b}).steps}\n${y} + ${b} = ${x}.\nSo ${x} − ${y} = ${b}.`,model:`${x} counters. Take away ${y}. ${b} remain.`};
 if(op==='div')return {title:'Use multiplication to divide',hint:`${y} times what number equals ${x}?`,steps:`Use this multiplication fact:\n${strategy({...f,op:'mul',x:a,y:b,answer:a*b}).steps}\n${y} × ${b} = ${x}.\nSo ${x} ÷ ${y} = ${b}.`,model:`${y} equal groups, with ${b} in each group.`};
 if(op==='add'){
  const big=Math.max(a,b),small=Math.min(a,b);
  if(small===0)return {title:'Add zero',hint:'Adding 0 means adding nothing.',steps:`Start with ${big}. Add no more.\n${big} + 0 = ${big}.`,model:`${big} counters and no extra counters.`};
  if(small<=2)return {title:'Count forward',hint:`Start at ${big}. Count forward ${small} ${small===1?'step':'steps'}.`,steps:`Start at ${big}.\n${Array.from({length:small},(_,i)=>`Add 1: ${big+i} + 1 = ${big+i+1}.`).join('\n')}\n${big} + ${small} = ${answer}.`,model:`${big} counters. Add ${small} more.`};
  if(a===b)return {title:'Add the same number twice',hint:`Say the addition fact for ${a} + ${a}.`,steps:`A double adds the same number twice.\n${a} counters and ${a} counters make ${answer} counters.\n${a} + ${a} = ${answer}.`,model:`${a} counters and ${a} more counters.`};
  if(Math.abs(a-b)===1)return {title:'Use a double, then add one',hint:`First find ${small} + ${small}. Then add 1.`,steps:`${small} + ${small} = ${2*small}.\n${big} is 1 more than ${small}. Add 1 more.\n${2*small} + 1 = ${answer}.\n${big} + ${small} = ${answer}.`,model:`Two groups of ${small}, and 1 extra counter.`};
  if(big===10)return {title:'Add to ten',hint:'Start at 10. Add the other number.',steps:`${small<10?'10 is 1 ten. Add '+small+' ones.':'Add another '+small+' to 10.'}\n10 + ${small} = ${answer}.`,model:`10 counters and ${small} more counters.`};
  if(big<10&&answer>=10){const gap=10-big;return {title:'Make ten first',hint:`Add ${gap} to ${big} to make 10. Then add what is left.`,steps:`Split ${small} into ${gap} and ${small-gap}.\n${big} + ${gap} = 10.\n10 + ${small-gap} = ${answer}.\n${big} + ${small} = ${answer}.`,model:`Start with ${big}. Add ${gap}, then add ${small-gap}.`};}
  if(big>10)return {title:'Split the bigger number',hint:`Split ${big} into 10 and ${big-10}. Add ${small} to the second part.`,steps:`${big} = 10 + ${big-10}.\n${big-10} + ${small} = ${answer-10}.\n10 + ${answer-10} = ${answer}.\n${big} + ${small} = ${answer}.`,model:`10 counters, ${big-10} counters, and ${small} more.`};
  return {title:'Count forward',hint:`Start at ${big}. Count forward ${small} steps.`,steps:`Start at ${big}. Count ${small} more:\n${Array.from({length:small},(_,i)=>big+i+1).join(', ')}.\n${big} + ${small} = ${answer}.`,model:`${big} counters and ${small} more counters.`};
 }
 const n=Math.max(a,b),k=Math.min(a,b);
 if(k===0)return {title:'Multiply by zero',hint:'A group with nothing in it adds no counters.',steps:`${a===0?'There are no groups.':`There are ${a} groups with 0 counters in each.`}\n${a} × ${b} = 0.`,model:'0 counters in total.'};
 if(k===1)return {title:'Multiply by one',hint:'One group has just the number in that group.',steps:`1 group of ${n} has ${n} counters.\n1 × ${n} = ${n}.`,model:`1 group of ${n} counters.`};
 if(k===2)return {title:'Add the number twice',hint:`Add ${n} to ${n}.`,steps:`2 groups of ${n} means ${n} + ${n}.\n${n} + ${n} = ${answer}.\n2 × ${n} = ${answer}.`,model:`2 groups of ${n} counters.`};
 if(a===10||b===10){const other=a===10?b:a;return {title:'Count groups of ten',hint:`Find ${other} groups of 10.`,steps:`${other} groups of 10 make ${answer}.\n${other} × 10 = ${answer}.`,model:`${other} groups of 10 counters.`};}
 if(k===5){const pairs=Math.floor(n/2),extra=n%2;return {title:'Count groups of five',hint:n<=6?`Count ${n} groups of 5.`:'Each pair of 5s makes 10. Pair up the groups.',steps:n<=6?`${n} × 5 means ${n} groups of 5.\n${Array.from({length:n},(_,i)=>(i+1)*5).join(', ')}.\n${n} × 5 = ${answer}.`:`5 + 5 = 10.\nPair the ${n} groups of 5 into ${pairs} groups of 10${extra?', with one group of 5 left over':''}.\n${pairs} × 10 = ${pairs*10}.${extra?`\n${pairs*10} + 5 = ${answer}.`:''}\n${n} × 5 = ${answer}.`,model:`${n} groups of 5 counters.`};}
 if(k===4)return {title:'Double twice',hint:`Add ${n} to itself. Then add that answer to itself.`,steps:`${n} + ${n} = ${n*2}.\n${n*2} + ${n*2} = ${answer}.\n4 × ${n} = ${answer}.`,model:`4 groups of ${n} counters.`};
 if(n>10)return {title:'Use ten groups first',hint:`Split ${n} into 10 and ${n-10}. Multiply each part by ${k}.`,steps:`10 × ${k} = ${10*k}.\n${n-10} × ${k} = ${(n-10)*k}.\n${10*k} + ${(n-10)*k} = ${answer}.\n${n} × ${k} = ${answer}.`,model:`10 groups of ${k}, then ${n-10} more groups of ${k}.`};
 if(n===9)return {title:'Use ten groups, then take away one group',hint:`Find 10 × ${k}. Then subtract ${k}.`,steps:`10 × ${k} = ${10*k}.\nTake away one group of ${k}.\n${10*k} − ${k} = ${answer}.\n9 × ${k} = ${answer}.`,model:`10 groups of ${k}, with one group taken away.`};
 if(n===8)return {title:'Double three times',hint:`Add ${k} to itself. Double that answer. Then double again.`,steps:`${k} + ${k} = ${2*k}.\n${2*k} + ${2*k} = ${4*k}.\n${4*k} + ${4*k} = ${8*k}.\n8 × ${k} = ${answer}.`,model:`8 groups of ${k}.`};
 const first=n>=5?5:2,rest=n-first;
 return {title:'Split the groups into two parts',hint:`Split ${n} into ${first} and ${rest}. Multiply each part by ${k}.`,steps:`${first} × ${k} = ${first*k}.\n${rest} × ${k} = ${rest*k}.\n${first*k} + ${rest*k} = ${answer}.\n${n} × ${k} = ${answer}.`,model:`${first} groups of ${k}, and ${rest} more groups of ${k}.`};
}
// Strict shape checks for imported, untrusted local backups.
export function validateBackup(data){
 if(!data||data.version!==VERSION||!Array.isArray(data.profiles)||data.profiles.length<1||data.profiles.length>50)throw Error('Not a Fact & Form backup.');
 const ids=new Set();
 const profiles=data.profiles.map(p=>{
  if(typeof p.id!=='string'||!/^p-[a-zA-Z0-9-]{3,80}$/.test(p.id)||ids.has(p.id)||typeof p.name!=='string'||!p.name.trim())throw Error('Invalid learner profile.');ids.add(p.id);
  const out=newProfile(p.name.trim(),p.id);out.settings.seconds=[0,2,3,4,6,10,15].includes(p.settings?.seconds)?p.settings.seconds:6;
  if(Object.hasOwn(BY_MODULE,p.focus))out.focus=p.focus;
  if(!Number.isSafeInteger(p.xp)||p.xp<0||p.xp>1e8)throw Error('Invalid XP.');out.xp=p.xp;
  for(const [id,r]of Object.entries(p.records||{})){
   if(!Object.hasOwn(BY_ID,id))continue;
   if(!r||typeof r!=='object')throw Error('Invalid fact record.');
   const nr=newRecord();
   for(const k of ['attempts','correct','run','fastRun','stage','due','last','lastGood','errors','assisted']){if(!Number.isSafeInteger(r[k])||r[k]<0||r[k]>1e15)throw Error('Invalid progress value.');nr[k]=r[k];}
   for(const k of ['lastSerial','retryAt']){if(r[k]!==undefined&&(!Number.isSafeInteger(r[k])||r[k]<0||r[k]>1e15))throw Error('Invalid practice history.');nr[k]=r[k]||0;}
   if(nr.correct>nr.attempts||nr.run>nr.correct||nr.fastRun>nr.run)throw Error('Inconsistent progress counts.');
   if(nr.stage>5||!Array.isArray(r.days)||r.days.length>10||r.days.some(d=>typeof d!=='string'||!/^\d{4}-\d{1,2}-\d{1,2}$/.test(d)))throw Error('Invalid review history.');
   nr.days=[...new Set(r.days)];nr.rewardDay=typeof r.rewardDay==='string'?r.rewardDay.slice(0,12):'';out.records[id]=nr;
  }
  out.rounds=Number.isInteger(p.rounds)&&p.rounds>=0?p.rounds:0;
  out.serial=Number.isSafeInteger(p.serial)&&p.serial>=0&&p.serial<=1e15?p.serial:0;
  out.serial=Math.max(out.serial,...Object.values(out.records).map(r=>r.lastSerial));
  out.recent=Array.isArray(p.recent)?p.recent.filter(id=>typeof id==='string'&&Object.hasOwn(BY_ID,id)).slice(-12):[];
  for(const m of MODULES)if(p.lessons?.[m.id]===true)out.lessons[m.id]=true;
  for(const [key,value]of Object.entries(p.lessons||{}))if(/^strategy:[a-z0-9:-]{1,120}$/.test(key)&&value===true)out.lessons[key]=true;
  for(const [date,d]of Object.entries(p.daily||{}))if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)&&Number.isInteger(d.attempts)&&d.attempts>=0&&Number.isInteger(d.independent)&&d.independent>=0&&d.independent<=d.attempts)out.daily[date]={attempts:d.attempts,independent:d.independent};
  return out;
 });
 return {version:VERSION,active:ids.has(data.active)?data.active:profiles[0].id,profiles};
}
