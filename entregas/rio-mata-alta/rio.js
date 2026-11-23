// Revised river reach. Coordinates below use the engine's native tile grid.
{
  const m = LEVELS.highwoods_river;
  m.music = 'iomadh_wild';
  m.t.fill(T_EMPTY);
  m.deco.length = 0;
  for (const [first,last,row] of [[0,15,20],[16,23,21],[24,40,20],[41,49,23],[50,58,20],[59,66,19],[67,74,18],[75,81,20],[82,89,23],[90,99,20]]) {
    setT(m,first,row,last,m.h-1,T_SOLID);
  }
  // One full-width crossing by the mill. The far channel offers stepping ledges.
  deco(m,'pond_bridge',41,20,{w:9});
  setT(m,41,20,49,20,T_ONEWAY);
  for(const [first,last,row] of [[79,82,18],[85,89,16],[92,97,14]])setT(m,first,row,last,row,T_ONEWAY);
  for(const [kind,col,row] of [['tree',14,20],['bush',22,21],['tree',54,20],['bush',64,19],['tree',96,20]])deco(m,kind,col,row);
  for(const obj of m.ents){
    if(obj.type==='stash'){obj.tx=95;obj.ty=14;}
    if(obj.type==='riverFall'){obj.tx=85;obj.ty=22;}
  }
  ENT.riverFall=e=>Object.assign(e,{
    layer:0,
    draw(c){
      c.save();
      c.translate(-Math.round(G.cam.x),-Math.round(G.cam.y));
      const tick=Math.floor(G.tick/4);
      function pool(start,end,y){
        const x=start*TS,w=(end-start)*TS;
        c.globalAlpha=.38;
        for(const [dy,h,color] of [[0,2,'#80ada0'],[2,4,'#477e78'],[6,7,'#345f60'],[13,10,'#294d53']]){
          c.fillStyle=color;c.fillRect(x,y+dy,w,h);
        }
        for(let i=0;i<Math.floor(w/7);i++){
          const px=(i*43+Math.floor(tick/(2+i%3)))%(w-9);
          c.fillStyle=i%4?'#799598':'#c3bfab';
          c.fillRect(x+px,y+2+(i*7)%16,3+i%7,1);
        }
        c.globalAlpha=1;
      }
      pool(41,50,21*TS+4);
      pool(82,90,22*TS+1);
      // Short falls spill from the mossy bank into the second pool.
      const lip=82*TS-4,top=20*TS+1,base=22*TS+3;
      for(let i=0;i<15;i++){
        const bend=Math.floor(i/5);
        c.fillStyle=['#639e98','#83b5a7','#b3d1b7','#70a79d'][i%4];
        for(let y=0;y<base-top-bend;y++){
          const drift=Math.round(5*(1-Math.exp(-y/6)));
          c.fillRect(lip+i+drift,top+bend+y,1,1);
        }
        c.fillStyle='#d3dfbf';c.fillRect(lip+i+4,top+bend+(tick+i*7)%27,1,2);
      }
      for(let i=0;i<12;i++){
        c.fillStyle=i%3?'#a7cabb':'#d1dfc4';
        c.fillRect(lip+2*i,base-1-Math.floor(Math.sin(tick*.3+i)*2),3,1);
      }
      c.restore();
    }
  });
}
