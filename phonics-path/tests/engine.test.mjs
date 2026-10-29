import test from 'node:test';
import assert from 'node:assert/strict';
import {createProfile,freshStore,validateImport,loadStore,saveStore,recordAttempt,statusOf,resetLesson,resetProfile,dueLessons,recommendLesson,chooseWord,buildChoices,STORAGE_KEY,DAY} from '../dist/engine.js';
const start=Date.UTC(2026,0,1);
const words=['mat','sat','at','am','Sam','tam','mas','as'];
function practice(p,id='l001',now=start) {
 words.forEach((w,i)=>recordAttempt(p,id,w,i%2?'spell':'read',true,{adultConfirmed:true,now:now+i*1000}));
}
test('recognition success never certifies independent decoding',()=>{
 const p=createProfile();for(let i=0;i<30;i++)recordAttempt(p,'l001',words[i%words.length],'listen',true,{now:start+i});
 assert.equal(statusOf(p,'l001'),'learning');assert.equal(p.progress.l001.independentCorrect,0);
});
test('unverified read and assisted answers remain practice only',()=>{
 const p=createProfile();for(let i=0;i<20;i++)recordAttempt(p,'l001',words[i%words.length],i%2?'read':'spell',true,{assisted:i%2===0,now:start+i});
 assert.equal(statusOf(p,'l001'),'learning');assert.equal(p.progress.l001.independentCorrect,0);assert.equal(p.progress.l001.assisted,10);
});
test('varied reading and spelling require delayed adult-confirmed reading for secure',()=>{
 const p=createProfile();practice(p);assert.equal(statusOf(p,'l001'),'practised');
 recordAttempt(p,'l001','mat','read',true,{adultConfirmed:true,now:start+100000});assert.equal(statusOf(p,'l001'),'practised');
 recordAttempt(p,'l001','sat','spell',true,{now:start+2*DAY});assert.equal(statusOf(p,'l001'),'practised');
 recordAttempt(p,'l001','mat','read',true,{adultConfirmed:true,now:start+2*DAY+1000});assert.equal(statusOf(p,'l001'),'secure');
});
test('repeating one word cannot earn practised or secure',()=>{
 const p=createProfile();for(let i=0;i<20;i++)recordAttempt(p,'l001','mat',i%2?'spell':'read',true,{adultConfirmed:true,now:start+i*DAY});
 assert.equal(statusOf(p,'l001'),'learning');
});
test('incorrect answer returns secure skill to learning and makes word due',()=>{
 const p=createProfile();practice(p);recordAttempt(p,'l001','mat','read',true,{adultConfirmed:true,now:start+2*DAY});
 recordAttempt(p,'l001','mat','spell',false,{now:start+2*DAY+1});
 assert.equal(statusOf(p,'l001'),'learning');assert.equal(p.progress.l001.words.mat.due,start+2*DAY+1);
});
test('same-day answers cannot farm long spacing intervals',()=>{
 const p=createProfile();for(let i=0;i<50;i++)recordAttempt(p,'l001','mat','spell',true,{now:start+i*1000});
 assert.equal(p.progress.l001.words.mat.level,1);assert.equal(p.progress.l001.words.mat.due,start+DAY);
 recordAttempt(p,'l001','mat','spell',true,{now:start+DAY});assert.equal(p.progress.l001.words.mat.level,2);assert.equal(p.progress.l001.words.mat.due,start+4*DAY);
});
test('lesson and profile resets are isolated and preserve identity/settings',()=>{
 const p=createProfile('Ada'),other=createProfile('Ben');practice(p);practice(p,'l002');practice(other);
 const id=p.id;p.settings.rate=1;resetLesson(p,'l001');assert.equal(statusOf(p,'l001'),'new');assert.equal(statusOf(p,'l002'),'practised');assert.equal(statusOf(other,'l001'),'practised');
 resetProfile(p);assert.equal(p.id,id);assert.equal(p.name,'Ada');assert.equal(p.settings.rate,1);assert.deepEqual(p.progress,{});
});
test('import rejects duplicates, prototype keys, malformed data and excessive size',()=>{
 const s=freshStore();assert.throws(()=>validateImport('{broken'));assert.throws(()=>validateImport('x'.repeat(2_000_001)));
 assert.throws(()=>validateImport({...s,profiles:[s.profiles[0],s.profiles[0]]}));
 assert.throws(()=>validateImport('{"version":1,"profiles":[],"__proto__":{"polluted":true}}'));
 assert.throws(()=>validateImport({...s,activeId:'missing'}));assert.equal({}.polluted,undefined);
});
test('valid round trip retains profile settings and evidence',()=>{
 const s=freshStore();practice(s.profiles[0]);const clean=validateImport(JSON.stringify(s));assert.equal(clean.activeId,s.activeId);assert.equal(statusOf(clean.profiles[0],'l001'),'practised');
 const data={};const storage={getItem:k=>data[k]||null,setItem:(k,v)=>data[k]=v};assert.equal(saveStore(s,storage).ok,true);assert.equal(loadStore(storage).warning,'');assert.equal(loadStore(storage).store.profiles[0].name,'Learner 1');assert.ok(data[STORAGE_KEY]);
});
test('corrupt storage is not overwritten and quota errors are surfaced',()=>{
 const data='{broken';const storage={getItem:()=>data,setItem:()=>{throw Error('quota');}};
 assert.ok(loadStore(storage).warning);assert.equal(saveStore(freshStore(),storage).ok,false);assert.ok(loadStore(null).warning);
});
test('review selection respects due dates and word selection avoids last two',()=>{
 const p=createProfile();const lessons=[{id:'l001',words},{id:'l002',words}];recordAttempt(p,'l001','mat','spell',true,{now:start});
 assert.equal(dueLessons(p,lessons,start).length,0);assert.equal(recommendLesson(p,lessons,start+DAY).id,'l001');
 const chosen=chooseWord(p,lessons[0],{recent:['at','am'],now:start,rng:()=>0});assert.ok(!['at','am'].includes(chosen));assert.notEqual(chosen,'mat');
});
test('choice sets always contain answer exactly once and contain no duplicates',()=>{
 for(let i=0;i<100;i++){const choices=buildChoices('mat',['mat','sat','at','mat','am']);assert.equal(choices.length,4);assert.equal(choices.filter(w=>w==='mat').length,1);assert.equal(new Set(choices).size,choices.length);}
 assert.deepEqual(buildChoices('mat',['mat']),['mat']);
});

test('oral readiness is adult checked and separate from decoding evidence',()=>{
 const p=createProfile();for(let i=0;i<4;i++)recordAttempt(p,'l000',words[i],'oral',true,{adultConfirmed:true,now:start+i});
 assert.equal(p.progress.l000.oralReady,true);assert.equal(statusOf(p,'l000'),'practised');assert.equal(p.progress.l000.independentCorrect,0);
 const s={version:1,activeId:p.id,profiles:[p]};assert.equal(validateImport(s).profiles[0].progress.l000.oralReady,true);
 assert.equal(recommendLesson(p,[{id:'l000',stage:0},{id:'l001',stage:1}],start+100).id,'l001');
 recordAttempt(p,'l000','mat','oral',false,{adultConfirmed:true,now:start+DAY});assert.equal(p.progress.l000.oralReady,false);
});

test('secure evidence survives a full rolling-history replacement and reload',()=>{
 const p=createProfile();practice(p);recordAttempt(p,'l001','mat','read',true,{adultConfirmed:true,now:start+2*DAY});
 for(let i=0;i<110;i++)recordAttempt(p,'l001','mat','listen',true,{now:start+3*DAY+i});
 assert.equal(p.progress.l001.history.length,100);
 const s={version:1,activeId:p.id,profiles:[p]};assert.equal(statusOf(validateImport(s).profiles[0],'l001'),'secure');
});

test('explicit reading-only assessment allows ambiguous lessons to progress',()=>{
 const p=createProfile();
 words.forEach((w,i)=>recordAttempt(p,'l101',w,'read',true,{readingOnly:true,adultConfirmed:true,now:start+i*1000}));
 assert.equal(statusOf(p,'l101'),'practised');assert.equal(p.progress.l101.assessment,'reading');assert.equal(p.progress.l101.spellWords.length,0);
 recordAttempt(p,'l101','mat','read',true,{readingOnly:true,adultConfirmed:true,now:start+2*DAY});
 assert.equal(statusOf(p,'l101'),'secure');
 const s={version:1,activeId:p.id,profiles:[p]};assert.equal(statusOf(validateImport(s).profiles[0],'l101'),'secure');
});
test('read practice does not silently opt an ordinary lesson into reading-only assessment',()=>{
 const p=createProfile();words.forEach((w,i)=>recordAttempt(p,'l001',w,'read',true,{adultConfirmed:true,now:start+i*1000}));
 assert.equal(statusOf(p,'l001'),'learning');assert.equal(p.progress.l001.assessment,'combined');
});
test('reading-only mode still requires six distinct adult-checked words',()=>{
 const p=createProfile();for(let i=0;i<20;i++)recordAttempt(p,'l101',words[i%5],'read',true,{readingOnly:true,adultConfirmed:true,now:start+i*1000});
 assert.equal(statusOf(p,'l101'),'learning');
 for(let i=0;i<20;i++)recordAttempt(p,'l102',words[i%8],'read',true,{readingOnly:true,adultConfirmed:false,now:start+i*1000});
 assert.equal(statusOf(p,'l102'),'learning');
});
test('recognition-only practice reaches all words instead of cycling among three',()=>{
 const p=createProfile(),lesson={id:'l001',words},recent=[],seen=new Set();
 for(let i=0;i<8;i++){const word=chooseWord(p,lesson,{recent,now:start+i*1000,rng:()=>0});recent.push(word);seen.add(word);recordAttempt(p,lesson.id,word,'listen',true,{now:start+i*1000});}
 assert.equal(seen.size,8);assert.equal(statusOf(p,'l001'),'learning');
});
test('mixed rounds make eligible progress and missed words remain prioritized',()=>{
 const p=createProfile(),lesson={id:'l001',words},recent=[];
 for(let i=0;i<24;i++){const word=chooseWord(p,lesson,{recent,now:start+i*1000,rng:()=>0});recent.push(word);recordAttempt(p,lesson.id,word,['read','listen','spell','read'][i%4],true,{adultConfirmed:true,now:start+i*1000});}
 assert.equal(statusOf(p,'l001'),'practised');
 recordAttempt(p,lesson.id,'mat','read',false,{adultConfirmed:true,now:start+25000});
 assert.equal(chooseWord(p,lesson,{recent:[],now:start+26000,rng:()=>0}),'mat');
});

test('all-bank assessment cannot certify a broad lesson from a four-word subset',()=>{
 const p=createProfile(),required=[...words,'Pam','Pat'];
 for(let i=0;i<24;i++)recordAttempt(p,'l001',words[i%4],i%2?'spell':'read',true,{requiredWords:required,adultConfirmed:true,now:start+i*1000});
 assert.equal(statusOf(p,'l001'),'learning');
 required.forEach((word,i)=>recordAttempt(p,'l001',word,i%2?'spell':'read',true,{requiredWords:required,adultConfirmed:true,now:start+100000+i*1000}));
 assert.equal(statusOf(p,'l001'),'practised');
 const s={version:1,activeId:p.id,profiles:[p]};assert.deepEqual(validateImport(s).profiles[0].progress.l001.requiredWords,required);
});
test('reading-only coverage requires adult reading of every bank word, not prior spelling',()=>{
 const p=createProfile(),required=words;
 required.forEach((word,i)=>recordAttempt(p,'l001',word,'spell',true,{requiredWords:required,now:start+i*1000}));
 for(let i=0;i<12;i++)recordAttempt(p,'l001',required[i%6],'read',true,{requiredWords:required,readingOnly:true,adultConfirmed:true,now:start+100000+i*1000});
 assert.equal(statusOf(p,'l001'),'learning');assert.equal(p.progress.l001.assessment,'reading');
 required.slice(6).forEach((word,i)=>recordAttempt(p,'l001',word,'read',true,{requiredWords:required,readingOnly:true,adultConfirmed:true,now:start+200000+i*1000}));
 assert.equal(statusOf(p,'l001'),'practised');assert.equal(p.progress.l001.assessment,'reading');
});
test('a legitimate five-word lesson can complete without audio after eight checked readings',()=>{
 const p=createProfile(),required=['these','theme','eve','Pete','Steve'];
 for(let i=0;i<8;i++)recordAttempt(p,'l036',required[i%5],'read',true,{requiredWords:required,readingOnly:true,adultConfirmed:true,now:start+i*1000});
 assert.equal(statusOf(p,'l036'),'practised');
 recordAttempt(p,'l036','theme','read',true,{requiredWords:required,readingOnly:true,adultConfirmed:true,now:start+2*DAY});
 assert.equal(statusOf(p,'l036'),'secure');
});
test('audioEnabled setting defaults on and round-trips explicit off',()=>{
 const s=freshStore();assert.equal(s.profiles[0].settings.audioEnabled,true);s.profiles[0].settings.audioEnabled=false;
 assert.equal(validateImport(s).profiles[0].settings.audioEnabled,false);delete s.profiles[0].settings.audioEnabled;assert.equal(validateImport(s).profiles[0].settings.audioEnabled,true);
});
