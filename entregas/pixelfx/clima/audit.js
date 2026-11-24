const visibleWeather = [];
const drawWeatherBeforeAudit = drawWeatherFrame;
drawWeatherFrame = function(ctx, name, frame, x, y, scale) {
  visibleWeather.push({name, frame, x, y, scale});
  return drawWeatherBeforeAudit(ctx, name, frame, x, y, scale);
};
window.audit = {Art,G,Menu,Snd,loadMap,render,weatherAtlas,visibleWeather,hash2,TS,quietWeather};
