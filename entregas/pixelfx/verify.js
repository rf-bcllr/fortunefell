() => {
  window.freeze = true;
  const {Art,G,Menu,Snd,loadMap,render,FA_bounds,BOSS_ART,newTimeSandShot,effectCalls}=window.audit;
  const check=(v,msg)=>{if(!v)throw Error(msg)};
  const canvas=document.querySelector('canvas#game') || document.querySelector('canvas');
  const capture=()=>canvas.toDataURL().split(',')[1];
  Menu.close();Snd.setOn(false);G.state='play';G.fade=G.fadeTo=0;G.lock=false;
  const captures={};
  for(const [k,w,h] of [['flame',1600,43],['ripples',3760,32],['sand',640,16]]){
    const image=Art.get('pixelfx_'+k);
    check(image?.width===w && image.height===h,'atlas '+k);
  }
  for(const [id,x,y] of [['castle',0,0],['terr',475,145],['highwoods_river',230,200]]){
    loadMap(id);G.lock=false;G.tick=120;
    G.cam.x=x;G.cam.y=y;render();
    const first=capture();
    G.tick=144;render();
    check(first!==capture(),'animation '+id);
    captures[id]=first;
  }
  loadMap('gd');
  const boss=G.ents.find(e=>e.type==='boss'&&e.kind==='g');
  check(boss,'boss not present');
  const body=BOSS_ART.colossus(), b=FA_bounds(body);
  check(boss.core.x===boss.x-body.width/2+b.x+b.w/2 &&
    boss.core.y===boss.y-body.height+b.y+b.h/2,'center');
  G.cam.x=boss.x-160;G.cam.y=boss.y-280;
  boss.begin();
  for (let phase=1;phase<=2;phase++){
    for(const h of boss.hands){
      h.stage=2;
      check(boss.meleeAt({x:h.x-2,y:h.y-2,w:4,h:4}), 'hand phase '+phase);
    }
    for(let i=0;i<24;i++)boss.update();
    const {x,y}=boss.core;
    const shots=G.ents.filter(e=>typeof e.sandAge==='number');
    check(shots.length===phase*2 && shots.at(-1).x===x && shots.at(-1).y===y,'origin phase '+phase);
    render();
    captures['phase-'+phase]=capture();
    boss.core.stage=2;
    check(boss.meleeAt({x:x-2,y:y-2,w:4,h:4}),'core hit '+phase);
  }
  check(boss.done,'second phase');
  for(const [name,count] of Object.entries(effectCalls)) check(count>0,'effect never drawn: '+name);
  const shot=newTimeSandShot(60,60,0);
  shot.frozenT=10;
  shot.update();
  check(shot.frozenT===9 && shot.x===60 && shot.sandAge===0,'frozen sand animation');
  return {center:[boss.core.x,boss.core.y],bodyBounds:b,verified:['castle','terr','highwoods_river','gd'],phases:2,effectCalls,captures};
}
