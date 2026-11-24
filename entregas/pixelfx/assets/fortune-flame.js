// The tongue, lick, flame-puff, smoke and ember recipe is adapted from Sprite Fusion's open-source fire
// (https://www.spritefusion.com/pixel-art-vfx/fire), MIT License, Copyright (c) 2026 Hugo Duprez.
import { fit, mix, hex, rand, clamp } from "../../core/index.js";
import { noiseFor, hotFirst, burn } from "./_lib.js";

export const meta = {
  name: "Torch",
  desc: "A wall torch on an iron bracket: a licking flame leaping off a pitch-soaked wrap, licks and puffs torn off its tips, smoke, embers, a flickering light on the wall.",
  tags: ["fire", "torch", "prop", "light", "wall", "dungeon", "loop"],
  size: [72, 120],
  origin: [36, 94],
  duration: 2,
  loop: true,
  fps: 30,
  bg: "dark",
  options: {
    palette: ["#4a1712", "#8a1f17", "#c9281f", "#f2561d", "#ff8a2a", "#ffc23d", "#ffe26b", "#fff3a6", "#ffffff"],
    wood: ["#0e080a", "#24130f", "#3b2216", "#5a3520", "#8a5a34", "#b9884f"],
    iron: ["#0d0b12", "#1e1b26", "#363242", "#5b5566", "#8a8396"],
    seed: 4,
  },
};

const D = meta.duration, NL = noiseFor(D), BASE = -16;
// the flame: [x, y from the wrap's top, height share, half-width, back row?]
const TONGUES = [
  [-1.9, -1, 0.74, 2.0, 1],
  [2.1, -1, 0.7, 2.0, 1],
  [-3.4, 0.5, 0.42, 1.6, 0],
  [3.6, 0.5, 0.46, 1.6, 0],
  [0, 0, 1, 2.9, 0],
];

export function draw(p, t, o) {
  burn(p, t, TONGUES, {
    H: hotFirst(fit(o.palette, 9)), D, NL, S: o.seed, x: 0, y: BASE,
    height: 20, lean: 0.12, spread: 4, puffs: 10, licks: 5,
    smoke: 3, smokeSize: 1.8, smokeLife: [0.8, 1.4], embers: 5,
    glowR: 24, glow: 0.48, wind: 2,
  });
}
