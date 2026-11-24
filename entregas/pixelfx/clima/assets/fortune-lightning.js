// The bolt (a branching path, a stepped leader, strokes that flicker frame by frame, light along the channel) and
// the rain (streaks with lit heads, splashes that throw droplets) are adapted from Sprite Fusion's open-source
// lightning (https://www.spritefusion.com/pixel-art-vfx/lightning), MIT License, Copyright (c) 2026 Hugo Duprez.
import { Rng, fit, WHITE } from "../../core/index.js";
import { clip, tree } from "./_lib.js";

export const meta = {
  name: "Éhrein distant lightning",
  desc: "Driving rain at two depths under a churning cloud deck; a forked bolt strikes in a double flash that lights the sky and the rain, then sheet lightning glows in the clouds.",
  tags: ["weather", "storm", "rain", "lightning", "thunder", "ambient", "loop"],
  size: [320, 180],
  origin: [160, 170],
  duration: 1.4,
  loop: false,
  fps: 30,
  bg: "sky",
  options: {
    palette: ["#09080f", "#121120", "#1b1a30", "#262541", "#363a5c", "#4f5d8c", "#7790c6", "#c2d6ff"],
    bolt: ["#2a1a6e", "#4835c2", "#6a6cff", "#78b8ff", "#c6ebff", "#ffffff"],
    seed: 5,
  },
};

// the strike: a stepped leader feels its way down, the first stroke, a restrike down the same channel
const T_LEAD = 2.62, T1 = 3.0, T2 = 3.3;
const BX0 = 62, BY0 = -136, BX1 = 52, BY1 = 3;
const F1 = [1, 0.62, 0.95, 0.4, 0.7, 0.22], F2 = [0.92, 0.5, 0.8, 0.3, 0.12];
const env = (t, t0, E) => {
  const i = Math.floor((t - t0) * 30 + 1e-3);
  return i >= 0 && i < E.length ? E[i] : 0;
};
const flashAt = (t) => Math.max(env(t, T1, F1), env(t, T2, F2));

export function draw(p, t, o) {
  const phase = Math.round((t + 2.6) * 30000) / 30000;
  if (phase <= T_LEAD) return;
  bolt(clip(p, meta), phase, o.seed, fit(o.bolt, 6));
}

function channel(S) {
  const R = new Rng(S * 31 + 1), P = tree(R, BX0, BY0, BX1, BY1, 0.26, 0.18), pts = P[0].pts, side = R.sign();
  [0.2, 0.38, 0.55].forEach((u, i) => {
    const k = Math.floor(u * (pts.length - 1)), [ax, ay] = pts[k], [bx, by] = pts[Math.min(pts.length - 1, k + 3)];
    const a = Math.atan2(by - ay, bx - ax) + (i % 2 ? -side : side) * R.range(0.6, 1.0), l = R.range(36, 56) * (1 - u * 0.45);
    P.push(...tree(R, ax, ay, ax + Math.cos(a) * l, ay + Math.sin(a) * l, 0.3, 0.5, 0.6, 1));
  });
  return P;
}

function bolt(q, t, S, V) {
  const P1 = channel(S);
  if (t < T1) {
    const reach = BY0 + (BY1 - BY0) * Math.pow(Math.floor(((t - T_LEAD) / (T1 - T_LEAD)) * 9) / 9, 1.25);
    for (const p of P1)
      for (let i = 0; i < p.pts.length - 1; i++) {
        const [ax, ay] = p.pts[i], [bx, by] = p.pts[i + 1];
        if (by > reach) break;
        q.line(ax, ay, bx, by, p.w >= 1 ? V[2] : V[1]);
        if (i % 4 === 0) q.glow(ax, ay, 6, V[3], 0.22 * p.w);
      }
    return;
  }
  // the restrike runs down the same channel, with fewer, shorter forks
  const P2 = [P1[0], ...tree(new Rng(S * 31 + 2), BX0, BY0, BX1, BY1, 0.3, 0.3).slice(1).filter((_, i) => i < 2)];
  const s = t >= T2 ? 2 : 1, a = t - (s === 2 ? T2 : T1), k = env(t, s === 2 ? T2 : T1, s === 2 ? F2 : F1), paths = s === 2 ? P2 : P1;
  if (k > 0) stroke(q, paths, k, V);
  else if (a < 0.5) {
    const g = 1 - a / 0.5;
    for (const p of paths) if (p.w >= 1) for (const [x, y] of p.pts) q.dot(x, y, V[1], g * 0.9);
  }
}

function stroke(q, paths, k, V) {
  for (const pass of [0, 1, 2])
    for (const p of paths) {
      const trunk = p.w >= 1;
      if (!trunk && (k < 0.4 || (pass === 0 && p.w < 0.5))) continue;
      for (let i = 0; i < p.pts.length - 1; i++) {
        const [ax, ay] = p.pts[i], [bx, by] = p.pts[i + 1], l = Math.max(1, Math.hypot(bx - ax, by - ay));
        for (let d = 0; d <= l; d += 0.5) {
          const x = ax + ((bx - ax) * d) / l, y = ay + ((by - ay) * d) / l;
          if (pass === 0) q.circle(x, y, trunk ? (k > 0.6 ? 2.3 : 1.7) : 1.2, k > 0.6 ? V[2] : V[1]);
          else if (pass === 1) q.circle(x, y, trunk ? (k > 0.6 ? 1.4 : 0.9) : 0.6, trunk ? V[4] : V[3]);
          else if (trunk) {
            q.px(x, y, k > 0.3 ? WHITE : V[4]);
            if (k > 0.85) q.px(x + 1, y, WHITE);
          } else if (p.w > 0.4 && k > 0.6) q.px(x, y, V[4]);
        }
        if (pass === 0 && i % 3 === 0) q.glow(ax, ay, trunk ? 18 : 8, V[3], (trunk ? 0.5 : 0.3) * k * p.w);
      }
    }
}

