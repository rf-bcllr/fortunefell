() => {
 window.freeze=true;
 const {G,Menu,Snd,loadMap,render,LEVELS,TS,T_SOLID,Art,I,tickWorld,myriaddViews}=window.audit;
 Menu.close();Snd.setOn(false);G.state='play';G.fade=G.fadeTo=0;
 const stats={},captures={};
 for(const [id,cams] of [['garden',[0,1140,1570,2840]],['out',[0,540,1100,2280]],['terr',[0,290,480,830]]]){
  loadMap(id);G.lock=false;
  const m=G.map;
  if(!Art.get(myriaddViews[id]))throw Error('Missing panorama '+id);
  let hash=2166136261;
  for(const tile of m.t)hash=Math.imul(hash^tile,16777619);
  const runs=[];
  for(let tx=0;tx<m.w;tx++){
   let row=0;
   while(row<m.h && m.t[row*m.w+tx]!==T_SOLID)row++;
   if(runs.at(-1)?.[1]===row)continue;
   runs.push([tx,row]);
  }
  stats[id]={collisionHash:(hash>>>0).toString(16),w:m.w,h:m.h,runs,decor:m.deco.filter(d=>['pond_bridge','cloudplat','crop','pavilion_myriadd','fountain_myriadd'].includes(d.kind)),doors:m.ents.filter(e=>e.type==='door').map(e=>[e.x,e.y,e.to])};
  for(const cam of cams){
   G.cam.x=cam;G.cam.y=Math.max(0,Math.min(m.h*TS-225,(runs.findLast(([x,y])=>x*TS<=cam+150)?.[1]||16)*TS-153));
   G.tick=120;render();captures[id+'-'+cam]=document.getElementById('game').toDataURL().split(',')[1];
  }
 }
 loadMap('garden','west');G.lock=false;
 const bridges=G.map.deco.filter(d=>d.kind==='pond_bridge');
 if(G.ents.filter(e=>e.type==='gardenMemorial').length!==4)throw Error('Missing memorial');
 const walked=[];
 for(const bridge of bridges){
  G.player.x=(bridge.x-1)*TS;G.player.y=bridge.y*TS;
  G.player.vx=0;G.player.vy=0;
  I.keys.ArrowRight=true;
  for(let i=0;i<220&&G.player.x<(bridge.x+bridge.w+1)*TS;i++){
   G.tick++;tickWorld();
   if(G.player.y>bridge.y*TS+1)throw Error('Fell through bridge '+bridge.x);
   if(Math.abs(G.player.x-(bridge.x+5)*TS)<2) {
    render();
    captures['ponte-'+bridge.x]=document.getElementById('game').toDataURL().split(',')[1];
   }
  }
  I.keys.ArrowRight=false;
  if(G.player.x<(bridge.x+bridge.w)*TS)throw Error('Bridge crossing failed '+bridge.x);
  walked.push(bridge.x);
 }
 const imgs=['royal_myriadd_grand','bridge_myriadd_2x','garden_bridge_railing','fountain_myriadd_2x'];
 return {stats,walked,art:Object.fromEntries(imgs.map(n=>[n,[Art.get(n)?.width,Art.get(n)?.height]])),captures};
}
