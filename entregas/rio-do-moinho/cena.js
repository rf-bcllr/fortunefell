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
  function stamp(c,name,x,y){
    const img=art[name];
    if(img.complete&&img.naturalWidth)c.drawImage(img,x,y);
  }
  function context(c,fn){
    c.save();c.imageSmoothingEnabled=false;
    c.translate(-Math.round(G.cam.x),-Math.round(G.cam.y));fn();c.restore();
  }
  function water(c,x,y,w,depth,t){
    const colors=['#748d94','#577983','#456675','#3e596a','#374e60'];
    for(let row=0;row<depth;row++){
      const band=5*row/depth,n=Math.floor(band);
      c.fillStyle=colors[n];c.fillRect(x,y+row,w,1);
      if(n<4){
        c.fillStyle=colors[n+1];
        for(let col=(row%2)*2;col<w;col+=4)if((band-n)*4>(row%4))c.fillRect(x+col,y+row,1,1);
      }
    }
    for(let i=0;i<w/3;i++){
      const dx=(i*67+(t>>(1+i%3)))%(w-8),dy=(i*17)%depth;
      c.fillStyle=i%5?'#779293':'#c4bba7';c.fillRect(x+dx,y+dy,2+i%6,1);
      if((t+i*17)%73<3){c.fillStyle='#ffe1ac';c.fillRect(x+dx+1,y+dy-1,1,3);}
    }
  }
  ENT.riverMill=e=>Object.assign(e,{layer:0,draw(c){context(c,()=>{
    const t=G.tick>>1;
    water(c,26*TS,deck+14,6*TS,35,t);
    water(c,41*TS,deck+18,9*TS,38,t);
    stamp(c,'moinho',31*TS-32,deck-128);
    const wheel=art.roda;
    if(wheel.complete&&wheel.naturalWidth){
      c.save();c.translate(31*TS-23,deck-5);c.rotate((G.tick%480)*Math.PI/240);
      c.drawImage(wheel,-27,-27,54,54);c.restore();
      for(let i=0;i<12;i++){
        const f=(t+i*7)%24/24;
        c.fillStyle=i%2?'#b4c5bd':'#e2dbbd';c.fillRect(31*TS-31+i*2+Math.round(f*9),deck+15-Math.round(16*f*(1-f)),2,1);
      }
    }
    stamp(c,'ponte',41*TS-19,deck-99);
  });}});
  ENT.riverFall=e=>Object.assign(e,{layer:0,draw(c){context(c,()=>{
    stamp(c,'gruta',caveX-118,caveFloor-131);
    water(c,caveX-54,caveFloor-1,108,9,G.tick>>2);
  });}});
  ent(river,'riverVeil',88,22);
  ENT.riverVeil=e=>Object.assign(e,{layer:3,draw(c){context(c,()=>{
    const bridge=art.ponte;
    if(bridge.complete&&bridge.naturalWidth)c.drawImage(bridge,0,85,182,39,41*TS-19,deck-14,182,39);
    const t=G.tick>>1, proximity=Math.min(1,Math.abs(G.player.x-caveX)/60);
    const curtain=art.corrente,lip=caveFloor-99,height=96;
    c.globalAlpha=.26+.74*proximity;
    if(curtain.complete&&curtain.naturalWidth){
      for(let i=0;i<73;i++){
        const edge=Math.min(i,72-i);
        c.globalAlpha=(.26+.74*proximity)*Math.min(1,(edge+1)/7);
        const h=height-(i%5===0?2:0),x=caveX-36+i,top=lip+Math.round(2*Math.sin(i*.07));
        const phase=(t*2+Math.floor(i/9))%76;
        for(let dy=0;dy<h;){
          const sy=(dy+phase)%76,n=Math.min(h-dy,76-sy);
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
    for(let i=0;i<28;i++){
      const f=(t+i*11)%32/32;
      c.fillStyle=i%3?'#acc9cd':'#eef0d9';c.globalAlpha=1-f;
      c.fillRect(caveX-46+(i*31)%92+Math.round((i%2?1:-1)*f*9),caveFloor-5-Math.round(38*f*(1-f)),2,2);
    }
  });}});
}
