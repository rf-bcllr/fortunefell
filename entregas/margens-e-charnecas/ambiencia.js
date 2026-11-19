/* River ambience, injected inside the game's IIFE. Uses the existing audio master. */
(() => {
  if (Snd._riverAmbInstalled) return;
  Snd._riverAmbInstalled = true;
  let river = null;
  const active = () => !!(Snd.ctx && Snd.gain && Snd.ctx.state === 'running' && G.opts.sound && G.state === 'play' && G.map?.id === 'highwoods_river' && !G.paint && !document.hidden);
  function dispose() {
    if (!river) return;
    const r = river; river = null;
    for (const source of r.sources) { try { source.stop(); } catch (_) {} }
    for (const node of r.nodes) { try { node.disconnect(); } catch (_) {} }
  }
  function makeRiver() {
    const c = Snd.ctx, length = Math.floor(c.sampleRate * 4);
    const buffer = c.createBuffer(1, length, c.sampleRate), samples = buffer.getChannelData(0);
    let brown = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      brown = (brown + .025 * white) / 1.025;
      samples[i] = brown * 2.4 + white * .18;
    }
    const source = c.createBufferSource(), high = c.createBiquadFilter(), low = c.createBiquadFilter(), bus = c.createGain();
    source.buffer = buffer; source.loop = true;
    high.type = 'highpass'; high.frequency.value = 180;
    low.type = 'lowpass'; low.frequency.value = 1900;
    bus.gain.setValueAtTime(0, c.currentTime);
    bus.gain.linearRampToValueAtTime(.07, c.currentTime + .7);
    source.connect(high); high.connect(low); low.connect(bus); bus.connect(Snd.gain);
    source.start();
    river = { ctx: c, bus, sources: new Set([source]), nodes: new Set([source, high, low, bus]), nextBird: c.currentTime + 3 + Math.random() * 4 };
  }
  function bird(r) {
    const c = r.ctx, start = c.currentTime, pitch = 1850 + Math.random() * 650;
    for (let i = 0; i < 2; i++) {
      const at = start + i * .16, o = c.createOscillator(), g = c.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(pitch + i * 160, at);
      o.frequency.exponentialRampToValueAtTime(pitch * 1.3, at + .045);
      o.frequency.exponentialRampToValueAtTime(pitch * .88, at + .11);
      g.gain.setValueAtTime(0, at);
      g.gain.linearRampToValueAtTime(.12, at + .018);
      g.gain.exponentialRampToValueAtTime(.0001, at + .12);
      o.connect(g); g.connect(r.bus); r.sources.add(o); r.nodes.add(o); r.nodes.add(g);
      o.onended = () => { r.sources.delete(o); r.nodes.delete(o); r.nodes.delete(g); o.disconnect(); g.disconnect(); };
      o.start(at); o.stop(at + .13);
    }
    r.nextBird = start + 8 + Math.random() * 9;
  }
  function syncRiver() {
    if (!active()) { dispose(); return; }
    if (river && river.ctx !== Snd.ctx) dispose();
    if (!river) makeRiver();
    if (Snd.ctx.currentTime >= river.nextBird) bird(river);
  }
  const previousTick = Snd.tickMusic;
  Snd.tickMusic = function (...args) { const result = previousTick.apply(this, args); syncRiver(); return result; };
  const previousSetOn = Snd.setOn;
  Snd.setOn = function (...args) { const result = previousSetOn.apply(this, args); syncRiver(); return result; };
  document.addEventListener('visibilitychange', syncRiver);
  window.addEventListener('pagehide', dispose);
})();
