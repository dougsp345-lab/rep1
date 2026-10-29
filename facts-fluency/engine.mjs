// Pure learning engine. No network, DOM, or storage access.
export const VERSION = 1;
export const DAY = 86400000;
export const OPS = ['add','sub','mul','div'];
export const SYMBOL = {add:'+',sub:'−',mul:'×',div:'÷'};
const names = {
 add:['Zero is unchanged','One and two more','Doubles & neighbours','Friendly tens','Bridge & combine'],
 sub:['Zero & the whole','Undo one and two','Undo doubles & neighbours','Undo friendly tens','Find the missing part'],
 mul:['Zero & one','Twos & tens','Fives','Threes, fours & elevens','Sixes through twelves'],
 div:['Zero & identity','Undo twos & tens','Undo fives','Undo 3, 4 & 11','Remaining quotients']
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
export const FACTS=[];
for(const op of OPS)for(let a=0;a<=12;a++)for(let b=0;b<=12;b++){
 if(op==='div'&&a===0)continue; // a is divisor, b is quotient
 const x=op==='sub'?a+b:op==='div'?a*b:a;
 const y=op==='sub'||op==='div'?a:b;
 const answer=op==='add'?a+b:op==='mul'?a*b:b;
 FACTS.push({id:`${op}:${a}:${b}`,op,a,b,x,y,answer,module:`${op}-${group(op,a,b)}`});
}
export const BY_ID=Object.fromEntries(FACTS.map(f=>[f.id,f]));
export const MODULES=OPS.flatMap((op)=>names[op].map((name,i)=>({id:`${op}-${i}`,op,index:i,name,facts:FACTS.filter(f=>f.module===`${op}-${i}`)})));
export const BY_MODULE=Object.fromEntries(MODULES.map(m=>[m.id,m]));
export const equation=f=>`${f.x} ${SYMBOL[f.op]} ${f.y}`;
export function dayKey(now=Date.now()) { const d=new Date(now);return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; }
export function newRecord(){return {attempts:0,correct:0,run:0,fastRun:0,stage:0,days:[],due:0,last:0,lastGood:0,rewardDay:'',errors:0,assisted:0};}
export function newProfile(name,id){return {id,name:name.slice(0,32),created:Date.now(),records:{},lessons:{},settings:{seconds:6},xp:0,daily:{},rounds:0};}
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
 const today=dayKey(now),qualified=correct&&!assisted&&!interrupted;
 const wasAccurate=r.run>=3,wasDue=now>=r.due;
 r.attempts++;r.last=now;if(correct)r.correct++;
 if(assisted||interrupted)r.assisted++;
 if(!correct){r.errors++;r.run=0;r.fastRun=0;r.stage=0;r.days=[];r.due=now+5*60000;}
 else if(qualified){
  r.run++;
  if(wasAccurate&&profile.settings.seconds>0){r.fastRun=seconds<=profile.settings.seconds?r.fastRun+1:0;}
  // Advancement requires an actually due review on a different local date.
  if(wasDue&&!r.days.includes(today)){
   r.days.push(today);r.days=r.days.slice(-10);r.stage=Math.min(5,r.stage+1);
   r.due=now+[1,1,3,7,21,60][r.stage]*DAY;
  }
  r.lastGood=now;
 }else if(assisted){r.due=Math.min(r.due||now,now+5*60000);}
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
 return MODULES.find(m=>m.facts.filter(f=>(profile.records[f.id]?.run||0)>=3).length/m.facts.length<0.85)||MODULES.find(m=>m.facts.some(f=>(profile.records[f.id]?.run||0)<3))||MODULES.find(m=>m.facts.some(f=>status(profile.records[f.id],profile.settings.seconds)!=='retained'))||MODULES[0];
}
export function createSession(moduleId,mode='learn',profile=null){
 const scope=moduleId?BY_MODULE[moduleId].facts:FACTS;
 const fresh=scope.filter(f=>!profile?.records[f.id]?.attempts).slice(0,3).map(f=>f.id);
 return {moduleId,mode,number:0,correct:0,independent:0,xp:0,recent:[],retry:[],responses:[],pool:scope.map(f=>f.id),introduced:fresh,limit:mode==='diagnostic'?12:10};
}
export function choose(profile,session,now=Date.now(),random=Math.random){
 if(session.priority&&session.number===0)return BY_ID[session.priority];
 if(session.mode==='diagnostic'){
  const op=OPS[Math.floor(session.number/3)%4];
  const pairs=[[1,2],[4,5],[8,7]],pair=pairs[session.number%3];
  return BY_ID[`${op}:${pair[0]}:${pair[1]}`];
 }
 const all=session.pool.map(id=>BY_ID[id]);
 const retry=session.retry.find(r=>r.at<=session.number&&!session.recent.slice(-2).includes(r.id));
 if(retry){session.retry=session.retry.filter(r=>r!==retry);return BY_ID[retry.id];}
 const waiting=new Set(session.retry.filter(r=>r.at>session.number).map(r=>r.id));
 const eligible=all.filter(f=>!waiting.has(f.id));
 const due=eligible.filter(f=>profile.records[f.id]?.attempts&&profile.records[f.id].due<=now);
 const learning=eligible.filter(f=>profile.records[f.id]?.attempts&&(profile.records[f.id].run<3||status(profile.records[f.id],profile.settings.seconds)==='accurate'));
 const introduced=eligible.filter(f=>session.introduced.includes(f.id));
 let candidates;
 if(due.length&&session.number%3!==2)candidates=due;
 else if(learning.length&&session.number%3!==2)candidates=learning;
 else if(introduced.length)candidates=introduced;
 else candidates=eligible.filter(f=>profile.records[f.id]?.attempts);
 if(!candidates.length)candidates=eligible.filter(f=>session.introduced.includes(f.id));
 if(!candidates.length)candidates=all.filter(f=>session.introduced.includes(f.id)||profile.records[f.id]?.attempts);
 if(!candidates.length)candidates=all.slice(0,3);
 if(session.mode==='review'&&due.length)candidates=due;
 const spaced=candidates.filter(f=>!session.recent.slice(-3).includes(f.id));
 if(spaced.length)candidates=spaced;
 else {const others=eligible.filter(f=>!session.recent.slice(-1).includes(f.id)&&(profile.records[f.id]?.attempts||session.introduced.includes(f.id)));if(others.length)candidates=others;}
 const ranked=candidates.map(f=>({f,score:(profile.records[f.id]?.run||0)*20+(profile.records[f.id]?.last||0)/1e12+random()*10})).sort((a,b)=>a.score-b.score);
 return ranked[0].f;
}
export function finishQuestion(session,fact,correct,qualified,xp){
 session.responses.push({id:fact.id,qualified});
 session.number++;if(correct)session.correct++;if(qualified)session.independent++;session.xp+=xp;
 session.recent.push(fact.id);session.recent=session.recent.slice(-12);
 if(!qualified&&!session.retry.some(r=>r.id===fact.id))session.retry.push({id:fact.id,at:session.number+3});
}
export function resetModule(profile,id){for(const f of BY_MODULE[id].facts)delete profile.records[f.id];delete profile.lessons[id];}
export function strategy(f){
 const {op,a,b,x,y,answer}=f;
 if(op==='sub')return {title:'Find the missing part',hint:`Think: ${y} + what = ${x}?`,steps:`${y} + ${b} = ${x}, so ${x} − ${y} = ${b}.\n${strategy({...f,op:'add',x:a,y:b,answer:a+b}).steps}`,model:`whole ${x} = part ${y} + missing part ${b}`};
 if(op==='div')return {title:'Undo a known product',hint:`Think: ${y} × what = ${x}?`,steps:`${y} × ${b} = ${x}, so ${x} ÷ ${y} = ${b}.\n${strategy({...f,op:'mul',x:a,y:b,answer:a*b}).steps}`,model:`${x} items shared into ${y} equal groups: ${b} in each`};
 if(op==='add'){
  const big=Math.max(a,b),small=Math.min(a,b);
  if(small===0)return {title:'Zero changes nothing',hint:'Adding no more leaves the same amount.',steps:`${big} + 0 = ${big}.`,model:`${big} items + no extra items`};
  if(small<=2)return {title:'Count on, not from one',hint:`Start at ${big} and count on ${small}.`,steps:`Count ${big} → ${Array.from({length:small},(_,i)=>big+i+1).join(' → ')}. So ${big} + ${small} = ${answer}.`,model:`start ${big} → move right ${small}`};
  if(a===b)return {title:'Use a double',hint:'Two equal groups: recall the double.',steps:`${a} + ${a} = 2 × ${a} = ${answer}.`,model:`two groups of ${a}`};
  if(Math.abs(a-b)===1)return {title:'Double, then one more',hint:`Use ${small} + ${small}, then add 1.`,steps:`${big} + ${small} = ${small} + ${small} + 1 = ${2*small} + 1 = ${answer}.`,model:`double ${small}, then one more`};
  if(big===10)return {title:'Build on ten',hint:'Ten is a full group; add the other part.',steps:`10 + ${small} = ${answer}.`,model:`one ten + ${small} ones`};
  if(big<10&&answer>=10){const gap=10-big;return {title:'Bridge through ten',hint:`${big} needs ${gap} to reach 10. Split ${small}.`,steps:`${big} + ${small} = ${big} + ${gap} + ${small-gap} = 10 + ${small-gap} = ${answer}.`,model:`${big} → 10 → ${answer}`};}
  if(big>10)return {title:'Separate ten and the ones',hint:`Split ${big} into 10 and ${big-10}.`,steps:`${big} + ${small} = 10 + (${big-10} + ${small}) = 10 + ${answer-10} = ${answer}.`,model:`ten + combined ones`};
  return {title:'Make a friendly pair',hint:`Combine the two parts; compare with 10.`,steps:`${a} + ${b} = ${answer}. ${answer} is ${10-answer} short of 10.`,model:`${a} items and ${b} more items`};
 }
 const n=Math.max(a,b),k=Math.min(a,b);
 if(k===0)return {title:'Zero groups',hint:'No groups means no items.',steps:`${a} × ${b} = 0.`,model:'empty array: zero items'};
 if(k===1)return {title:'One copy',hint:'One copy leaves the other factor unchanged.',steps:`1 × ${n} = ${n}.`,model:`one group of ${n}`};
 if(k===2)return {title:'Double',hint:`Double ${n}.`,steps:`2 × ${n} = ${n} + ${n} = ${answer}.`,model:`two rows of ${n}`};
 if(a===10||b===10){const other=a===10?b:a;return {title:'Groups of ten',hint:`${other} tens means ${other} × 10.`,steps:`${other} × 10 = ${answer}.`,model:`${other} tens`};}
 if(k===5)return {title:'Half of ten times',hint:`Multiply ${n} by 10, then halve.`,steps:`5 × ${n} = (10 × ${n}) ÷ 2 = ${n*10} ÷ 2 = ${answer}.`,model:`five rows of ${n}`};
 if(k===4)return {title:'Double twice',hint:`Double ${n}, then double again.`,steps:`4 × ${n} = 2 × (2 × ${n}) = 2 × ${n*2} = ${answer}.`,model:`four rows of ${n}`};
 if(n===11||n===12)return {title:'Ten groups and the rest',hint:`Split ${n} into 10 + ${n-10}.`,steps:`${n} × ${k} = 10 × ${k} + ${n-10} × ${k} = ${10*k} + ${(n-10)*k} = ${answer}.`,model:`${n} rows of ${k}`};
 if(n===9)return {title:'Ten groups minus one',hint:`Use 10 × ${k}, then subtract ${k}.`,steps:`9 × ${k} = 10 × ${k} − ${k} = ${10*k} − ${k} = ${answer}.`,model:`nine rows of ${k}`};
 if(n===8)return {title:'Double three times',hint:`Double ${k}, double again, then double once more.`,steps:`8 × ${k} = 2 × (2 × (2 × ${k})) = ${answer}.`,model:`eight rows of ${k}`};
 return {title:'Split into known groups',hint:`Split ${n} as ${n>=5?'5 + '+(n-5):'2 + '+(n-2)}.`,steps:n>=5?`${n} × ${k} = 5 × ${k} + ${n-5} × ${k} = ${5*k} + ${(n-5)*k} = ${answer}.`:`${n} × ${k} = 2 × ${k} + ${n-2} × ${k} = ${2*k} + ${(n-2)*k} = ${answer}.`,model:`${n} rows of ${k}`};
}
// Strict shape checks for imported, untrusted local backups.
export function validateBackup(data){
 if(!data||data.version!==VERSION||!Array.isArray(data.profiles)||data.profiles.length<1||data.profiles.length>50)throw Error('Not a Fact & Form backup.');
 const ids=new Set();
 const profiles=data.profiles.map(p=>{
  if(typeof p.id!=='string'||!/^p-[a-zA-Z0-9-]{3,80}$/.test(p.id)||ids.has(p.id)||typeof p.name!=='string'||!p.name.trim())throw Error('Invalid learner profile.');ids.add(p.id);
  const out=newProfile(p.name.trim(),p.id);out.settings.seconds=[0,4,6,10,15].includes(p.settings?.seconds)?p.settings.seconds:6;
  if(Object.hasOwn(BY_MODULE,p.focus))out.focus=p.focus;
  if(!Number.isSafeInteger(p.xp)||p.xp<0||p.xp>1e8)throw Error('Invalid XP.');out.xp=p.xp;
  for(const [id,r]of Object.entries(p.records||{})){
   if(!Object.hasOwn(BY_ID,id))continue;
   if(!r||typeof r!=='object')throw Error('Invalid fact record.');
   const nr=newRecord();
   for(const k of ['attempts','correct','run','fastRun','stage','due','last','lastGood','errors','assisted']){if(!Number.isSafeInteger(r[k])||r[k]<0||r[k]>1e15)throw Error('Invalid progress value.');nr[k]=r[k];}
   if(nr.correct>nr.attempts||nr.run>nr.correct||nr.fastRun>nr.run)throw Error('Inconsistent progress counts.');
   if(nr.stage>5||!Array.isArray(r.days)||r.days.length>10||r.days.some(d=>typeof d!=='string'||!/^\d{4}-\d{1,2}-\d{1,2}$/.test(d)))throw Error('Invalid review history.');
   nr.days=[...new Set(r.days)];nr.rewardDay=typeof r.rewardDay==='string'?r.rewardDay.slice(0,12):'';out.records[id]=nr;
  }
  out.rounds=Number.isInteger(p.rounds)&&p.rounds>=0?p.rounds:0;
  for(const m of MODULES)if(p.lessons?.[m.id]===true)out.lessons[m.id]=true;
  for(const [date,d]of Object.entries(p.daily||{}))if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)&&Number.isInteger(d.attempts)&&d.attempts>=0&&Number.isInteger(d.independent)&&d.independent>=0&&d.independent<=d.attempts)out.daily[date]={attempts:d.attempts,independent:d.independent};
  return out;
 });
 return {version:VERSION,active:ids.has(data.active)?data.active:profiles[0].id,profiles};
}
