// One deadline per question. Injected clock/scheduler make boundary cases testable.
export function createCountdown({now=()=>performance.now(),schedule=fn=>setInterval(fn,50),cancel=clearInterval,onTick=()=>{},onExpire=()=>{}}={}){
 let deadline=null,handle=null,duration=0,generation=0;
 const remaining=()=>deadline===null?0:Math.max(0,deadline-now());
 function stop(){generation++;if(handle!==null)cancel(handle);handle=null;deadline=null;}
 function start(seconds){
  if(!Number.isFinite(seconds)||seconds<=0)throw Error('A positive time limit is required.');
  stop();duration=seconds*1000;deadline=now()+duration;const token=generation;
  const tick=()=>{if(token!==generation)return;const ms=remaining();onTick(ms,ms/duration);if(ms===0){stop();onExpire();}};
  onTick(duration,1);handle=schedule(tick);
 }
 return {start,stop,remaining,get running(){return deadline!==null;}};
}
