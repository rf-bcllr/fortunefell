import { TAU } from "../../core/index.js";

export const meta = {
  name: "Pink Time Sand",
  desc: "Grains gathering around a bright pink bead.",
  tags: ["sand", "projectile", "loop"],
  size: [16, 16],
  origin: [8, 8],
  duration: 2,
  loop: true,
  fps: 20,
  options: {},
};

export function draw(p, t) {
  const orbit = t / meta.duration * TAU;
  p.rect(-3, -1, 7, 3, "#823963");
  p.rect(-2, -2, 5, 5, "#823963");
  p.rect(-2, -1, 4, 3, "#e986b1");
  p.rect(-1, -1, 2, 1, "#ffe5ec");
  for (let i = 0; i < 5; i++) {
    const angle = orbit * 3 + i * TAU / 5;
    const radius = 4 + Math.sin(orbit * 2 + i * 2) * 1.6;
    p.px(Math.cos(angle) * radius, Math.sin(angle) * radius,
      i % 2 ? "#d66b9f" : "#ffc3d7");
  }
}
