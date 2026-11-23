{
  const river=LEVELS.highwoods_river, deck=20*TS, caveX=88*TS+8, caveFloor=22*TS;
  river.deco=river.deco.filter(d=>d.kind!=='pond_bridge');
  carve(river,26,20,31,22);
  setT(river,26,21,31,21,T_ONEWAY);
  carve(river,79,13,98,23);
  setT(river,79,20,82,25,T_SOLID);
  setT(river,83,21,84,25,T_SOLID);
  setT(river,85,22,94,25,T_SOLID);
  setT(river,95,21,96,25,T_SOLID);
  setT(river,97,20,99,25,T_SOLID);
  const stash=river.ents.find(e=>e.type==='stash');
  stash.tx=88;stash.ty=22;
  const plant=river.ents.find(e=>e.kind==='plant');plant.tx=97;
  river.spawns.mill=[33,20];
  CHAPTERS.splice(CHAPTERS.findIndex(c=>c.n[0]==='Mata Alta')+1,0,{
    n:['Rio da Mata Alta · Moinho','High Woods River · Mill'],
    go(){warp({audienceDone:1,hasBow:1,mirante:1,auth_iomadh:1},['tempo'],'highwoods_river','mill');G.route.first='gilead';}
  });
  const art={};
  for(const [name,src] of Object.entries(RIVER_IMAGES)){art[name]=new Image();art[name].src=src;}
  function stamp(c,name,x,y,w,h){
    const img=art[name];
    if(img.complete&&img.naturalWidth){
      if(w===undefined)c.drawImage(img,Math.round(x),Math.round(y));
      else c.drawImage(img,Math.round(x),Math.round(y),w,h);
    }
  }
  function context(c,fn){
    c.save();c.imageSmoothingEnabled=false;
    c.translate(-Math.round(G.cam.x),-Math.round(G.cam.y));fn();c.restore();
  }
  function water(c,x,y,w,depth,t){
    const colors=['#759197','#65848d','#516f7b','#405c6d','#344e60'];
    c.save();
    for(let row=0;row<depth;row++){
      const band=4.99*row/Math.max(1,depth-1),n=Math.floor(band);
      c.fillStyle=colors[n];c.fillRect(x,y+row,w,1);
      if(n<4){
        c.fillStyle=colors[n+1];
        for(let col=(row&1)*2;col<w;col+=4)
          if((band-n)*4>(row&3))c.fillRect(x+col,y+row,1,1);
      }
    }
    // Most reflections belong near the surface; deeper water stays readable.
    for(let i=0;i<Math.max(4,Math.floor(w/12));i++){
      const length=3+i%5;
      const dx=Math.floor((i*37+t*(.35+(i%3)*.12))%Math.max(1,w-length));
      const dy=2+(i*7)%Math.max(1,Math.min(depth-3,11));
      c.fillStyle=i%4?'#91a9a6':'#c3c6ad';c.globalAlpha=.68;
      c.fillRect(x+dx,y+dy,length,1);
    }
    c.globalAlpha=.7;c.fillStyle='#bdcbbd';
    for(let i=0;i<w;i+=13)c.fillRect(x+i,y+(i%3),Math.min(5,w-i),1);
    c.restore();
  }
  function waterVeil(c,x,y,w,depth,t){
    // Only water-covered pixels tint a wading actor; this is not a new solid.
    c.save();c.globalAlpha=.17;c.fillStyle='#496f7a';c.fillRect(x,y+1,w,depth-1);
    c.globalAlpha=.48;c.fillStyle='#b2c8be';
    for(let i=0;i<w;i+=19){
      const dx=Math.floor((i+t*.35)%Math.max(1,w-5));
      c.fillRect(x+dx,y+1+(i%2),4,1);
    }
    c.restore();
  }
  ENT.riverMill=e=>Object.assign(e,{layer:0,draw(c){context(c,()=>{
    const t=G.tick>>1;
    water(c,26*TS,deck+14,6*TS,35,t);
    water(c,41*TS,deck+18,9*TS,38,t);
    stamp(c,'moinho',31*TS-48,deck+2-156,180,156);
    const wheel=art.roda;
    if(wheel.complete&&wheel.naturalWidth){
      c.save();c.translate(31*TS-23,deck-4);c.rotate(-(G.tick%600)*Math.PI/300);
      c.drawImage(wheel,-36,-36,72,72);c.restore();
      for(let i=0;i<8;i++){
        const f=(t+i*7)%28/28;
        c.fillStyle=i%2?'#b4c5bd':'#e2dbbd';c.fillRect(31*TS+2+Math.round(f*10),deck+15-Math.round(24*f*(1-f)),2,1);
      }
    }
    stamp(c,'ponte',41*TS-19,deck-99);
  });}});
  ENT.riverFall=e=>Object.assign(e,{layer:0,draw(c){context(c,()=>{
    stamp(c,'gruta',caveX-118,caveFloor-131);
    water(c,caveX-54,caveFloor-1,108,17,G.tick>>2);
  });}});
  ent(river,'riverVeil',88,22);
  ENT.riverVeil=e=>Object.assign(e,{layer:3,draw(c){context(c,()=>{
    const bridge=art.ponte;
    if(bridge.complete&&bridge.naturalWidth)c.drawImage(bridge,0,85,182,39,41*TS-19,deck-14,182,39);
    const t=G.tick>>1;
    waterVeil(c,26*TS,deck+14,6*TS,35,t);
    waterVeil(c,41*TS,deck+18,9*TS,38,t);
    waterVeil(c,caveX-54,caveFloor-1,108,17,t);
    const proximity=Math.min(1,Math.abs(G.player.x-caveX)/60);
    const curtain=art.corrente,lip=caveFloor-99,height=96;
    c.globalAlpha=.34+.66*proximity;
    if(curtain.complete&&curtain.naturalWidth){
      for(let i=0;i<73;i++){
        const edge=Math.min(i,72-i);
        c.globalAlpha=(.34+.66*proximity)*Math.min(1,(edge+1)/7);
        const h=height-(i%5===0?2:0),x=caveX-36+i,top=lip+Math.round(2*Math.sin(i*.07));
        const phase=(t*2+Math.floor(i/9))%76;
        for(let dy=0;dy<h;){
          const sy=(dy-phase+152)%76,n=Math.min(h-dy,76-sy);
          for(let j=0;j<n;j+=4){
            const spread=Math.round((i-36)*.10*((dy+j)/h)**2);
            const drift=Math.round(1.4*Math.sin((dy+j)*.055+t*.09+i*.03));
            c.drawImage(curtain,i,sy+j,1,Math.min(4,n-j),x+spread+drift,top+dy+j,1,Math.min(4,n-j));
          }
          dy+=n;
        }
      }
    }
    c.globalAlpha=1;
    stamp(c,'espuma',caveX-75,caveFloor-9);
    for(let i=0;i<18;i++){
      const f=(t+i*11)%32/32;
      c.fillStyle=i%3?'#acc9cd':'#eef0d9';c.globalAlpha=1-f;
      c.fillRect(caveX-46+(i*31)%92+Math.round((i%2?1:-1)*f*9),caveFloor-5-Math.round(38*f*(1-f)),2,2);
    }
  });}});
}
