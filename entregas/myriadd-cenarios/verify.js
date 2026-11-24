() => {
 window.freeze=true;
 const {G,Menu,Snd,loadMap,render,LEVELS,TS,T_SOLID,Art,I,tickWorld,myriaddViews,cypressStyle,waterfallAtlas,waterCalls,myriaddFalls,hasGardenPaving}=window.audit;
 Menu.close();Snd.setOn(false);G.state='play';G.fade=G.fadeTo=0;
 const stats={},captures={};
 const fx=Art.get('myriadd_waterfall');
 for(const key of ['myriadd_cloud_wisps','myriadd_cloud_bank'])if(!Art.get(key))throw Error('Missing parallax layer '+key);
 if(!fx||fx.width!==waterfallAtlas.w*waterfallAtlas.columns||waterfallAtlas.frames!==60)throw Error('Waterfall atlas');
 for(const [id,cams] of [['garden',[0,1140,1570,2840]],['out',[0,540,1100,2280]],['terr',[0,290,480,830]]]){
  loadMap(id);G.lock=false;
  const m=G.map;
  waterCalls.length=0;
  if(!Art.get('myriadd_ledge_'+id))throw Error('Missing playable floor '+id);
  if(!Art.get(myriaddViews[id]))throw Error('Missing panorama '+id);
  const tree=m.deco.find(d=>d.kind==='tree'&&m.t[d.y*m.w+Math.floor(d.x)]===T_SOLID);
  if(!tree || !cypressStyle(m,tree))throw Error('Missing cypress '+id);
  const treeCam=Math.max(0,tree.x*TS-175);
  G.cam.x=treeCam;G.cam.y=tree.y*TS-146;
  render();captures[id+'-cipreste']=document.getElementById('game').toDataURL().split(',')[1];
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
  if(id==='garden'&&!waterCalls.some(call=>call.kind==='fall'))throw Error('No visible fall '+id);
  if(id==='garden'){
   const channels=m.deco.filter(item=>item.kind==='pond_bridge');
   if(!waterCalls.some(call=>call.kind==='surface'&&channels.every(bridge=>call.w===bridge.w*TS)))throw Error('Canal does not span bridge');
   if(hasGardenPaving(30)||!hasGardenPaving(110))throw Error('Garden paving crosses planted beds');
  }else for(const f of myriaddFalls(m)){
   if(id==='terr'&&!m.deco.some(d=>d.kind==='cloudplat'&&f.x>=d.x*TS&&f.x<d.x*TS+128&&f.y===d.y*TS+10))throw Error('Detached waterfall');
   if(id==='terr'){
     const pen=document.createElement('canvas').getContext('2d');
     const cam={x:f.x-120,y:f.y-44};
     for(let frame=0;frame<waterfallAtlas.frames;frame++){
       pen.clearRect(0,0,300,150);G.tick=2*frame;
       window.audit.drawMyriaddSpillways(pen,m,cam);
       if(pen.getImageData(90,0,80,44).data.some(n=>n))throw Error('Water above outlet '+frame);
       if(!pen.getImageData(115,48,32,36).data.some(n=>n))throw Error('Dry outlet '+frame);
     }
   }
   if(id==='out'&&(f.y>=0||runs.findLast(r=>r[0]*TS<=f.x)[1]!==m.h))throw Error('Fall misses chasm');
   G.cam.x=f.x-180;G.cam.y=Math.max(0,f.y-30);render();
   captures[id+'-cascade']=document.getElementById('game').toDataURL().split(',')[1];
   const ctx=document.createElement('canvas').getContext('2d');
   window.audit.drawWaterContact(ctx,m,{x:f.x-30,y:Math.max(0,f.y)-30},{x:f.x+4,y:Math.max(0,f.y)+20,vx:2});
   if(!ctx.getImageData(0,0,100,100).data.some(n=>n))throw Error('Missing splash');
  }
  stats[id].waterCalls=waterCalls.length;
 }
 loadMap('out');G.lock=false;G.dead=false;
 const p=G.player;
 Object.assign(p,{x:15*TS,y:16*TS,vx:0,vy:0,onGround:true});
 I.keys.ArrowRight=true;I.pressedSet.jump=true;
 let splash=false;
 for(let i=0;i<35;i++){
   G.tick++;tickWorld();I.flush();
   if(!p.onGround && p.inCascade && G.fx.some(f=>f.col==='#ddfaff')){
     splash=true;G.cam.x=p.x-180;G.cam.y=p.y-110;render();
     captures['out-salto-agua']=document.getElementById('game').toDataURL().split(',')[1];break;
   }
 }
 I.keys.ArrowRight=false;
 if(!splash)throw Error('No water impact during playable jump');
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
 const forest=LEVELS.im;
 if(cypressStyle(forest,forest.deco.find(d=>d.kind==='tree')))throw Error('Iomadh sprite overridden');
 const imgs=['royal_myriadd_grand','bridge_myriadd_2x','garden_bridge_railing','fountain_myriadd_2x'];
 return {stats,walked,waterfallFrames:waterfallAtlas.frames,art:Object.fromEntries(imgs.map(n=>[n,[Art.get(n)?.width,Art.get(n)?.height]])),captures};
}
