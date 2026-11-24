const waterCalls=[];
const drawFallBeforeAudit=drawMyriaddWaterfall;
drawMyriaddWaterfall=function(ctx,x,y,w,h,tick){
  if(x+w>=0&&x<400&&y+h>0&&y<225)waterCalls.push({kind:'fall',tick,x,y});
  return drawFallBeforeAudit(ctx,x,y,w,h,tick);
};
const drawSurfaceBeforeAudit=drawMyriaddCanalSurface;
drawMyriaddCanalSurface=function(ctx,x,y,w,tick,depth){
  if(x+w>=0&&x<400&&y>0&&y<225)waterCalls.push({kind:'surface',tick,x,y,w,depth});
  return drawSurfaceBeforeAudit(ctx,x,y,w,tick,depth);
};
window.audit={drawMyriaddSpillways,drawWaterContact,Art,G,Menu,Snd,loadMap,render,TS,LEVELS,T_SOLID,I,tickWorld,drawMyriaddPanorama,myriaddViews,cypressStyle,waterCalls,waterfallAtlas,myriaddFalls,hasGardenPaving};
