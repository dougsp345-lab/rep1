import test from 'node:test';
import assert from 'node:assert/strict';
import {STAGES,LESSONS} from '../dist/curriculum.js';
import {createProfile,chooseWord,recordAttempt,statusOf,validateImport} from '../dist/engine.js';
const nonempty=(v)=>typeof v==='string'&&v.trim().length>0;
const normalize=s=>s.normalize('NFKC').toLowerCase();
test('curriculum has distinct sequential lesson identifiers and valid stage references',()=>{
 assert.ok(Array.isArray(STAGES)&&STAGES.length>=9,'Expected readiness plus eight broad stages');
 assert.ok(Array.isArray(LESSONS)&&LESSONS.length>=90,'Expected comprehensive curriculum, not a partial sample');
 const stageIds=STAGES.map(s=>s.id);assert.equal(new Set(stageIds).size,stageIds.length);
 for(const s of STAGES){assert.ok(nonempty(s.title),`Stage ${s.id} needs a title`);assert.ok(nonempty(s.subtitle),`Stage ${s.id} needs a subtitle`);}
 const ids=LESSONS.map(l=>l.id);assert.equal(new Set(ids).size,ids.length,'Lesson IDs must be unique');
 LESSONS.forEach((l,i)=>{
  assert.match(l.id,/^[a-zA-Z0-9_-]{1,100}$/);assert.ok(stageIds.includes(l.stage),`${l.id}: unknown stage`);
  if(i)assert.ok(l.stage>=LESSONS[i-1].stage,`${l.id}: stages must follow their advertised sequence`);
  for(const key of ['title','code','rule','tip'])assert.ok(nonempty(l[key]),`${l.id}: missing ${key}`);
  for(const id of l.prerequisites||[])assert.ok(ids.indexOf(id)>=0&&ids.indexOf(id)<i,`${l.id}: prerequisite ${id} must exist earlier`);
 });
});
test('every lesson has usable words, examples and connected text',()=>{
 const earliestIds=new Set(LESSONS.filter(l=>l.stage===1).slice(0,3).map(l=>l.id));
 for(const l of LESSONS){
  assert.ok(Array.isArray(l.words),`${l.id}: words must be an array`);
  const normalized=l.words.map(normalize);assert.equal(new Set(normalized).size,normalized.length,`${l.id}: duplicate words`);
  const minimum=earliestIds.has(l.id)?3:4;
  assert.ok(l.words.length>=minimum,`${l.id}: expected at least ${minimum} words, got ${l.words.length}`);
  for(const word of l.words){assert.ok(nonempty(word)&&word.length<=100,`${l.id}: invalid word`);assert.ok(word===word.trim(),`${l.id}: whitespace around ${word}`);}
  assert.ok(Array.isArray(l.examples)&&l.examples.length>=2,`${l.id}: provide two modeled examples`);
  for(const e of l.examples){
   assert.ok(nonempty(e.word),`${l.id}: example needs word`);
   if(e.parts){assert.ok(e.parts.length&&e.parts.every(nonempty),`${l.id}: empty example segments`);assert.equal(normalize(e.parts.join('')),normalize(e.word),`${l.id}: segments must reconstruct ${e.word}`);}
  }
  assert.ok(Array.isArray(l.sentences)&&l.sentences.length>=1&&l.sentences.every(nonempty),`${l.id}: connected text missing`);
  for(const p of l.pseudowords||[]){assert.ok(nonempty(p.word)&&nonempty(p.guide),`${l.id}: transfer item needs adult pronunciation guidance`);}
 }
});
test('curriculum text contains no executable markup or accidental replacement placeholders',()=>{
 const raw=JSON.stringify({STAGES,LESSONS});
 assert.ok(!/<script\b|javascript:|\u0000/i.test(raw),'Curriculum contains unexpected executable or invalid text');
 assert.ok(!/\b(?:TODO|FIXME|INSERT_HERE|LOREM IPSUM)\b/.test(raw),'Curriculum contains unfinished placeholders');
});

test('every curriculum lesson can complete with no audio and all-bank checked reading',()=>{
 for(const lesson of LESSONS){
  const profile=createProfile(),recent=[];
  for(let i=0;i<200&&statusOf(profile,lesson.id)!=='practised';i++){
   const word=chooseWord(profile,lesson,{recent,now:1700000000000+i*1000,rng:()=>0});recent.push(word);
   recordAttempt(profile,lesson.id,word,lesson.stage===0?'oral':'read',true,{adultConfirmed:true,readingOnly:lesson.stage!==0,requiredWords:lesson.stage===0?undefined:lesson.words,now:1700000000000+i*1000});
  }
  assert.equal(statusOf(profile,lesson.id),'practised',`${lesson.id} must have a reachable practice threshold without audio`);
  if(lesson.stage!==0)assert.ok(lesson.words.every(word=>profile.progress[lesson.id].readWords.includes(word)),`${lesson.id}: all-bank coverage required`);
  const store={version:1,activeId:profile.id,profiles:[profile]};
  assert.equal(statusOf(validateImport(store).profiles[0],lesson.id),'practised',`${lesson.id}: progress must survive save/import`);
 }
});
