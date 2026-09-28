import type { Lockup, Point } from "./layout";
import { numberedParts, part, type WaterRig } from "./scene";

/** Start time of each step of the intro, in milliseconds. Retime the sequence here. */
export const TIMELINE = {
  glass: 0,
  sugar: 900,
  limes: 1350,
  mint: 2000,
  ice: 3000,
  water: 4300,
  sprig: 5700,
  straw: 6900,
  stir: 7750,
  letters: 9350,
} as const;

export type IntroHandle = {
  /** Stops the intro and leaves the finished logo on screen. */
  cancel: () => void;
  /** Resolves `true` once the intro has played to the end, `false` if it was cancelled. */
  finished: Promise<boolean>;
};

export type IntroScene = {
  svg: SVGSVGElement;
  /** Layer holding the Figma drawing of the glass. */
  glass: SVGGElement;
  /** Layer holding the Figma drawing of the letters. */
  wordmark: SVGGElement;
  /** Position of each layer's own (0, 0) in the lockup. */
  glassOrigin: Point;
  wordOrigin: Point;
  lockup: Lockup;
  water: WaterRig | null;
};

type Pose = { x?: number; y?: number; r?: number; s?: number; sx?: number; sy?: number; o?: number };
type Key = readonly [time: number, pose: Pose, easing?: string];

const EASE = {
  pop: "cubic-bezier(.2,.8,.3,1)",
  fall: "cubic-bezier(.55,0,.9,.55)",
  slideIn: "cubic-bezier(.2,.7,.2,1)",
  float: "cubic-bezier(.4,0,.3,1)",
  jump: "cubic-bezier(.25,.6,.45,1)",
  arc: "cubic-bezier(.55,0,.75,1)",
} as const;

// Every keyframe uses the same transform function list so they interpolate cleanly.
function toKeyframe({ x = 0, y = 0, r = 0, s, sx = s ?? 1, sy = s ?? sx, o = 1 }: Pose): Keyframe {
  return { transform: `translate(${x}px, ${y}px) rotate(${r}deg) scale(${sx}, ${sy})`, opacity: o };
}

const hold = (until: number, pose: Pose): Key[] => [
  [0, pose],
  [until, pose],
];

/** Falls in from above the glass and bounces on landing. */
const drop = (t: number, { x = 0, y = -430, r = -30, landY = 0, landR = 0, duration = 540 } = {}): Key[] => [
  ...hold(t, { x, y, r, o: 0 }),
  [t + 40, { x, y: y + 20, r }, EASE.fall],
  [t + duration, { y: landY + 12, r: landR + 4 }, "ease-out"],
  [t + duration + 140, { y: landY - 5, r: landR - 2 }],
  [t + duration + 280, { y: landY, r: landR }],
];

/** Floats down side to side, like a leaf. */
const flutter = (t: number, direction = 1): Key[] => [
  ...hold(t, { x: -24 * direction, y: -430, r: -35 * direction, o: 0 }),
  [t + 40, { x: -24 * direction, y: -410, r: -30 * direction }],
  [t + 420, { x: 24 * direction, y: -200, r: 24 * direction }],
  [t + 780, { x: -12 * direction, y: -60, r: -12 * direction }],
  [t + 1060, {}],
];

/** Small shake while the straw stirs. */
const wiggle = (amplitude = 1, lag = 0): Key[] => [
  [TIMELINE.stir + lag, {}],
  [TIMELINE.stir + lag + 300, { x: 3 * amplitude, r: 5 * amplitude }],
  [TIMELINE.stir + lag + 600, { x: -3 * amplitude, r: -5 * amplitude }],
  [TIMELINE.stir + lag + 900, { x: 2 * amplitude, r: 3 * amplitude }],
  [TIMELINE.stir + lag + 1150, {}],
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/**
 * Plays the Cremss intro on a rendered <CremssLogo>: the glass appears, the ingredients
 * fall in, sparkling water fills it, the straw stirs, then the letters jump out.
 * Pieces are found by their Figma layer names; a missing layer is simply not animated.
 */
export function playIntro({ svg, glass, wordmark, glassOrigin, wordOrigin, lockup, water }: IntroScene): IntroHandle {
  const T = TIMELINE;
  const animations: Animation[] = [];

  const track = (element: Element | null | undefined, keys: Key[]) => {
    if (!element) return;
    const start = keys[0][0];
    const duration = Math.max(1, keys[keys.length - 1][0] - start);
    const frames = keys.map(([t, pose, easing = "ease-in-out"]) => ({
      ...toKeyframe(pose),
      offset: (t - start) / duration,
      easing,
    }));
    animations.push(element.animate(frames, { duration, delay: start, fill: "both" }));
  };

  // 1. The glass appears
  glass.querySelectorAll('[data-part^="verre-"]').forEach((piece) => {
    track(piece, [...hold(T.glass + 100, { y: 46, o: 0 }), [T.glass + 520, { y: -7 }, EASE.pop], [T.glass + 760, {}]]);
  });
  track(part(glass, "ombre"), [...hold(T.glass + 200, { sx: 0.3, o: 0 }), [T.glass + 760, {}]]);

  // 2. Ingredients fall in: cane sugar, lime, mint, ice
  track(part(glass, "sucre"), [...hold(T.sugar, { sy: 0 }), [T.sugar + 500, {}]]);
  track(part(glass, "citron-2"), [...drop(T.limes, { x: 20, r: -60 }), ...wiggle(0.8)]);
  track(part(glass, "citron-1"), [...drop(T.limes + 270, { x: -25, r: 45 }), ...wiggle(0.8, 80)]);
  numberedParts(glass, "menthe").forEach((leaf, i) => {
    track(leaf, [...flutter(T.mint + i * 170, i % 2 ? -1 : 1), ...wiggle(1, 40 * i)]);
  });
  numberedParts(glass, "glacon").forEach((cube, i) => {
    // cubes first settle low, then float up as the water rises
    const landR = 6 - i * 4;
    const rise = T.water + 300 + i * 120;
    track(cube, [
      ...drop(T.ice + i * 190, { r: -25 + i * 20, landY: 76, landR, duration: 500 }),
      [rise, { y: 76, r: landR }, EASE.float],
      [rise + 700, {}],
      ...wiggle(1.1, 60 * i),
    ]);
  });

  // 3. Sparkling water: stream, rising level, bubbles
  const pour = { fillStart: T.water + 180, fillEnd: T.water + 1150, streamOut: T.water + 1000 };
  const waterAt = (t: number) => {
    if (!water) return;
    // Empty until the pour (nothing may show while the glass is still fading in), hidden under the
    // sugar while the stream falls, then rising to the top.
    const level =
      t < T.water
        ? water.bottom
        : t < pour.fillStart
          ? lerp(water.bottom, water.start, (t - T.water) / (pour.fillStart - T.water))
          : lerp(water.start, water.top, easeInOut(clamp01((t - pour.fillStart) / (pour.fillEnd - pour.fillStart))));
    water.level.setAttribute("y", String(level));
    water.level.setAttribute("height", String(water.bottom - level));
    if (t < T.water || t > pour.streamOut + 230) {
      water.stream.setAttribute("height", "0");
      return;
    }
    const bottom = t < pour.fillStart ? lerp(water.streamTop, water.start, clamp01((t - T.water) / (pour.fillStart - T.water))) : level;
    const top = t > pour.streamOut ? lerp(water.streamTop, level, clamp01((t - pour.streamOut) / 220)) : water.streamTop;
    water.stream.setAttribute("x", String(water.streamX + Math.sin(t / 55) * 1.4));
    water.stream.setAttribute("y", String(top));
    water.stream.setAttribute("height", String(Math.max(0, bottom - top)));
  };

  numberedParts(glass, "bulle").forEach((bubble, i) => {
    const t = T.water + 300 + i * 110;
    track(bubble, [...hold(t, { y: 150, s: 0.3, o: 0 }), [t + 350, { x: 4, y: 70, s: 0.8 }], [t + 700, {}]]);
  });
  track(part(glass, "surface"), [...hold(T.water + 1000, { o: 0 }), [T.water + 1300, {}]]);
  water?.fizz.forEach((bubble, i) => {
    animations.push(
      bubble.animate(
        [
          { transform: "translate(0px, 0px)", opacity: 0 },
          { transform: "translate(4px, -70px)", opacity: 1, offset: 0.2 },
          { transform: "translate(-4px, -190px)", opacity: 1, offset: 0.8 },
          { transform: "translate(2px, -250px)", opacity: 0 },
        ],
        { duration: 2400 + ((i * 431) % 1400), delay: T.water + 250 + i * 250, iterations: Infinity, easing: "ease-in", fill: "both" },
      ),
    );
  });
  numberedParts(glass, "brin").forEach((leaf, i) => {
    track(leaf, [...flutter(T.sprig + i * 150, i === 1 ? -1 : 1), ...wiggle(0.6, 30 * i)]);
  });

  // 4. The straw goes in and stirs
  track(part(glass, "paille"), [
    ...hold(T.straw, { x: 110, y: -400, o: 0 }),
    [T.straw + 40, { x: 104, y: -378 }, EASE.slideIn],
    [T.straw + 650, {}],
    [T.stir, {}],
    [T.stir + 300, { r: 8 }],
    [T.stir + 600, { r: -7 }],
    [T.stir + 900, { r: 6 }],
    [T.stir + 1150, { r: -3 }],
    [T.stir + 1400, {}],
  ]);

  // 5. The glass slides into place and the letters jump out of it
  track(svg.querySelector("[data-role='glass-slide']"), [
    ...hold(T.letters, { x: lockup.glassStart[0], y: lockup.glassStart[1] }),
    [T.letters + 900, {}],
  ]);
  const mouth: Point = water
    ? [glassOrigin[0] + water.mouth[0], glassOrigin[1] + water.mouth[1]]
    : [glassOrigin[0] + 100, glassOrigin[1] + 75];
  numberedParts(wordmark, "lettre").forEach((letter, i) => {
    const box = letter.getBBox();
    const dx = mouth[0] - (wordOrigin[0] + box.x + box.width / 2);
    const dy = mouth[1] - (wordOrigin[1] + box.y + box.height / 2);
    const t = T.letters + 850 + i * 120;
    track(letter, [
      ...hold(t, { x: dx, y: dy, s: 0.15, o: 0 }),
      [t + 60, { x: dx, y: dy - 12, s: 0.3 }, EASE.jump],
      [t + 480, { x: dx * 0.45, y: dy * 0.45 - 170, r: -14, s: 0.85 }, EASE.arc],
      [t + 820, { y: -16, r: 5, s: 1.06 }, "ease-out"],
      [t + 1000, { r: -1, s: 0.98 }],
      [t + 1160, {}],
    ]);
  });
  numberedParts(wordmark, "bulle").forEach((bubble, i) => {
    const t = T.letters + 2100 + i * 150;
    track(bubble, [...hold(t, { s: 0, o: 0 }), [t + 320, { s: 1.25 }, "ease-out"], [t + 460, {}]]);
  });

  // The water level is an attribute, not a CSS property, so it is driven frame by frame.
  const startedAt = performance.now();
  waterAt(0);
  let frame = requestAnimationFrame(function tick(now) {
    const t = now - startedAt;
    waterAt(t);
    if (t < pour.fillEnd + 600) frame = requestAnimationFrame(tick);
  });

  const finite = animations.filter((animation) => animation.effect?.getTiming().iterations !== Infinity);
  const finished = Promise.all(finite.map((animation) => animation.finished)).then(
    () => true,
    () => false,
  );

  return {
    finished,
    cancel() {
      cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      if (water) {
        water.level.setAttribute("y", String(water.top));
        water.level.setAttribute("height", String(water.bottom - water.top));
        water.stream.setAttribute("height", "0");
      }
    },
  };
}
