const effectCalls = { flame: 0, ripples: 0, sand: 0, cotton: 0, banks: 0 };
const drawFxBeforeAudit = drawPixelFx;
drawPixelFx = function (ctx, name, ...args) {
  effectCalls[name]++;
  return drawFxBeforeAudit(ctx, name, ...args);
};
const cottonBeforeAudit = drawCottonBreeze;
drawCottonBreeze = function (...args) {
  effectCalls.cotton++;
  return cottonBeforeAudit(...args);
};
const bankBeforeAudit = drawTerraceCloudBanks;
drawTerraceCloudBanks = function (...args) {
  if (args[1].id === 'terr') effectCalls.banks++;
  return bankBeforeAudit(...args);
};
window.audit={Art,G,Menu,Snd,loadMap,render,FA_bounds,BOSS_ART,newTimeSandShot,effectCalls};
