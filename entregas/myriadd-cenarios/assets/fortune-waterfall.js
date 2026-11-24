// The pool's caustic light (two warped sine nets, light where they cross zero) is adapted from Sprite Fusion's
// open-source bubbles (https://www.spritefusion.com/pixel-art-vfx/bubbles), MIT License, Copyright (c) 2026 Hugo Duprez.
import { fit, cycle, tileNoise, rand, clamp, smooth, ease, TAU, WHITE } from "../../core/index.js";
import { WATER } from "./_lib.js";

export const meta = {
  name: "Myriadd cloud waterfall",
  desc: "A sheet of water pours off an island and dissolves into the clouds.",
  tags: ["water", "waterfall", "cascade", "foam", "mist", "ambient", "loop"],
  size: [144, 136],
  origin: [72, 118],
  duration: 2,
  loop: true,
  fps: 30,
  bg: "ground",
  options: { palette: WATER, height: 92, width: 13, seed: 5 },
};

const D = meta.duration;

// half the sheet's width at depth d below the lip: it spreads a little as it falls
const halfW = (W, d, H) => W + 3.2 * Math.pow(clamp(d / H), 1.6);

// the falling sheet, in 1 px lanes. Lanes on the far side of the fall are dark and see-through, so the night shows
// between strands; the front lanes carry white dashes sliding down them, stretching as the water speeds up (the
// texture runs in fall time, √depth). The top is glassy and dark, and the lower third splits into strands that
// fan apart with gaps between, each lit down its left edge.
function sheet(p, C, ph, H, W, S) {
  for (let y = -H + 2; y <= -1; y++) {
    const d = y + 0.5 + H, v = d / H, s = Math.sqrt(d + 3), hw0 = halfW(W, d, H), split = smooth(0.56, 0.95, v), glass = 1 - smooth(4, 24, d);
    const wl = tileNoise(2, s * 1.4 - ph * 12, 0, 12, S + 2) * (0.4 + 1.8 * v), wr = tileNoise(11, s * 1.4 - ph * 12, 0, 12, S + 2) * (0.4 + 1.8 * v);
    const fan = split > 0 ? tileNoise(3, s * 0.8 - ph * 4, 0, 4, S + 61) * 1.6 : 0, sd = s * 1.5 - ph * 20, sb = s * 0.45 - ph * 6;
    for (let X = -W - 8; X <= W + 8; X++) {
      const x = X + 0.5, hw = hw0 + (x < 0 ? wl : wr), ax = Math.abs(x);
      if (ax > hw) continue;
      const e = ax / hw;
      let edge = false;
      if (split > 0) {
        const f = ((((x / (1 + 0.22 * split) + fan + 64) / 5.4) % 1) + 1) % 1;
        if (f > 1 - 0.46 * split) continue;
        edge = f < 0.2;
      }
      const dash = tileNoise(X * 1.618 + 0.31, sd, 0, 20, S);
      if (rand(X, S + 60) < 0.48 && e < 0.86 && !edge) {
        p.blend(x, y + 0.5, dash > 0.45 ? C[4] : glass > 0.5 ? C[3] : C[2], dash > 0.45 ? 0.7 : 0.42 + 0.15 * v);
        continue;
      }
      const broad = tileNoise(Math.floor((x + 40) / 3) * 2.7, sb, 0, 6, S + 1);
      let b = -0.34 + 0.46 * v + 0.3 * broad - glass * 0.5 + 0.35 * smooth(0.7, 1, e) * (x < 0 ? 1 : 0.3) - (x > 0 ? 0.12 * e : 0) + (edge ? 0.3 : 0);
      if (dash > 0.2 - 0.22 * v) b += 0.36 + 0.7 * (dash - 0.2);
      if (b > -0.2) p.px(X, y, b > 0.62 ? WHITE : b > 0.34 ? C[6] : b > 0.08 ? C[5] : C[4]);
      else p.blend(x, y + 0.5, C[3], 0.8);
    }
  }
  // strands peel off the edges and fall free
  cycle(ph * D, D, 16, S + 30, 0.4, (age, life, r) => {
    const side = r.sign(), d0 = r.range(14, H * 0.7), d = d0 + 50 * age + 260 * age * age, k = age / life;
    if (d > H - 6) return;
    const x = side * (halfW(W, d, H) + 1.5 + age * r.range(6, 16)), y = -H + d, len = 2 + 6 * k;
    p.line(x, y - len, x, y, (u) => (u > 0.7 ? C[6] : C[4]), 1 - k * 0.5);
  });
}

// the river sliding out of the notch between the boulders, seen from just above: flow lines sliding to the edge
function river(p, C, ph, H, W, S) {
  const top = -H - 6;
  p.shade(-W - 3, top, W + 3, -H, (x, y, out) => {
    const back = top + 1.5 + tileNoise(x * 0.3, 4, 0, 0, S + 62) * 1.5, v = (y - back) / (-H - back), hw = W + 2 - (1 - v) * 3;
    if (y < back || Math.abs(x) > hw) return;
    const n = tileNoise(x * 0.32, (y - top) * 0.7 - ph * 8, 0, 8, S + 3);
    out.c = n > 0.66 ? C[6] : n > 0.4 ? C[5] : v < 0.5 ? C[3] : C[4];
  });
}

// the curl over the edge: glassy blue as it rolls, a hard white line along the bend; its light on the stone
function curl(p, C, ph, H, W, S) {
  for (let x = -W; x <= W; x++) {
    const g = tileNoise(x * 0.45, ph * 4, 0, 4, S + 4);
    p.px(x, -H - 1, C[4]);
    p.px(x, -H, WHITE);
    p.px(x, -H + 1, g > 0.2 ? C[6] : C[5]);
  }
  p.glowLine(-W, -H, W, -H, 6, C[6], 0.18);
  p.glow(0, -H, 34, C[5], 0.2);
  // glints run along it
  cycle(ph * D, D, 4, S + 5, 0.36, (age, life, r) => {
    const k = Math.sin((Math.PI * age) / life), x = r.range(-W, W);
    if (k > 0.5) for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) p.px(x + dx, -H + dy, C[6]);
    p.glow(x, -H, 6, C[5], 0.4 * k);
  });
}

// mist: soft puffs rolled out of the churn that drift sideways along the pool, swell and thin, with a cool light
function mist(p, C, t, S, n, seed) {
  cycle(t, D, n, S + seed, (g) => g.range(1.8, 2.8), (age, life, r) => {
    const k = age / life, side = r.sign(), drift = ease.outCubic(k);
    const x = side * (r.range(3, 12) + drift * r.range(24, 48)), y = -r.range(2, 7) - k * r.range(3, 12);
    const rad = r.range(4, 6) + k * r.range(5, 9), a = r.range(0.2, 0.3) * Math.min(1, k / 0.12) * Math.pow(1 - k, 1.7);
    p.disc(x, y, rad, C[6], (d) => a * (1 - d * d));
    if (a > 0.05) p.glow(x, y, rad * 1.2, C[4], 0.35 * a);
  });
}

export function draw(p, t, o) {
  const C = fit(o.palette, 8), ph = t / D, H = o.height, W = o.width, S = o.seed, T = ph * TAU;
  river(p, C, ph, H, W, S);
  sheet(p, C, ph, H, W, S);
  curl(p, C, ph, H, W, S);
  // This cascade disappears into open cloud. No pool or impact ring.
  mist(p, C, t, S, 5, 21);
  // glints wink on the falling water and in the spray
  cycle(t, D, 12, S + 50, (g) => g.range(0.2, 0.4), (age, life, r) => {
    const k = Math.sin((Math.PI * age) / life), low = r.next() < 0.45, d = low ? H - r.range(4, 16) : r.range(12, H - 16);
    const x = low ? r.range(-W - 10, W + 10) : r.range(-0.8, 0.8) * halfW(W, d, H), y = -H + d - (age / life) * (low ? 6 : -10);
    p.px(x, y, WHITE);
    if (k > 0.55) for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) p.px(x + dx, y + dy, C[6]);
    if (k > 0.85 && r.next() < 0.5) for (const [dx, dy] of [[2, 0], [-2, 0], [0, 2], [0, -2]]) p.px(x + dx, y + dy, C[5]);
    p.glow(x, y, 5, C[5], 0.35 * k);
  });
  // fine spray hangs in the air off the foot, drifting up and out
  cycle(t, D, 34, S + 51, (g) => g.range(0.9, 1.6), (age, life, r) => {
    const k = age / life, side = r.sign(), x = side * (r.range(0, W + 6) + k * r.range(6, 22)) + Math.sin(age * 5 + r.range(0, TAU)) * 1.2, y = -r.range(3, 10) - k * r.range(10, 34);
    if (k > 0.7 && r.next() < (k - 0.7) * 3.3) return;
    p.px(x, y, k < 0.4 && r.next() < 0.5 ? WHITE : C[6]);
  });
  // light: down the sheet, a pool of it where the water lands, on the water around
  p.glowLine(0, -H + 6, 0, -8, 26, C[4], 0.12);
  p.glow(0, -5, 40, C[5], 0.32 + 0.05 * Math.sin(T * 2));
  p.glow(0, 4, 50, C[3], 0.14);
}
