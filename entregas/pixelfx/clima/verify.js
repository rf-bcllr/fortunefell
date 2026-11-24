() => {
  window.freeze=true;
  const {Art,G,Menu,Snd,loadMap,render,weatherAtlas,visibleWeather,hash2,TS,quietWeather}=window.audit;
  const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
  const canvas=document.querySelector('canvas#game')||document.querySelector('canvas');
  const shot=()=>canvas.toDataURL().split(',')[1];
  Menu.close();Snd.setOn(false);G.state='play';G.fade=G.fadeTo=0;G.lock=false;
  for(const [key,atlas] of Object.entries(weatherAtlas)) {
    const img=Art.get(key);
    assert(img?.width===atlas.w*atlas.columns,'failed atlas '+key);
  }
  const strike=190+Math.floor(hash2(0,17)*180)+24;
  const captures={};
  for (const map of ['eh','em','witch','ec','castle','im']){
    if(map==='witch') continue;
    loadMap(map); G.lock=false;
    if(map==='im'){
      const trees=G.map.deco.filter(d=>d.highwoodsLeafSource);
      assert(trees.length===2,'canopy emitters');
      G.cam.x=(trees[0].x-8)*TS;G.cam.y=85;
    } else {G.cam.x=260;G.cam.y=map==='em'?90:0;}
    G.tick=strike;
    visibleWeather.length=0;
    render();
    const bolts=visibleWeather.filter(x=>x.name==='pixelfx_ehrein_bolt');
    const leaves=visibleWeather.filter(x=>x.name==='pixelfx_canopy_leaves');
    assert(bolts.length===Number(map==='eh'||map==='em'),'bolt scope '+map);
    assert((leaves.length>0)===(map==='im'),'leaf scope '+map);
    if(map==='im'){
      const leaf=leaves[0];
      G.cam.x+=12;G.cam.y+=16;
      visibleWeather.length=0;
      render();
      assert(visibleWeather[0]?.x===leaf.x-12&&visibleWeather[0]?.y===leaf.y-16,'map-anchored leaves');
      G.cam.x-=12;G.cam.y-=16;
      render();
      captures['mata-alta']=shot();
    }
    if(map==='em'||map==='eh'){
      captures[map+'-raio']=shot();
      visibleWeather.length=0;G.tick=5;render();
      assert(visibleWeather.length===0,'between strikes');
      captures[map+'-ceu']=shot();
    }
  }
  return {atlases:weatherAtlas,weatherMaps:['eh','em','im'],interiors:['ec','castle'],mapAnchoring:true,reducedMotion:quietWeather.matches,captures};
}
