import type { Point } from "./layout";

const SVG_NS = "http://www.w3.org/2000/svg";
const INK = "#1E3A3C";

/** A layer of the Figma drawing, found by its layer name. */
export function part(scope: Element, name: string) {
  return scope.querySelector<SVGGraphicsElement>(`[data-part="${name}"]`);
}

/** Layers named `prefix-1`, `prefix-2`… in number order. */
export function numberedParts(scope: Element, prefix: string) {
  const pattern = new RegExp(`^${prefix}-(\\d+)$`);
  return Array.from(scope.querySelectorAll<SVGGraphicsElement>(`[data-part^="${prefix}-"]`))
    .map((element) => ({ element, n: Number(pattern.exec(element.dataset.part ?? "")?.[1]) }))
    .filter(({ n }) => Number.isFinite(n))
    .sort((a, b) => a.n - b.n)
    .map(({ element }) => element);
}

function create<K extends keyof SVGElementTagNameMap>(tag: K, attributes: Record<string, string | number>) {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, String(value));
  return element;
}

export type WaterRig = {
  /** Rect of the clip that reveals the drink; its `y` is the water level. */
  level: SVGRectElement;
  stream: SVGRectElement;
  fizz: SVGCircleElement[];
  /** Level when the glass is full, and when the water starts rising (just above the sugar). */
  top: number;
  bottom: number;
  start: number;
  /** Centre of the glass opening, where the water pours in and the letters jump out. */
  mouth: Point;
  streamX: number;
  streamTop: number;
};

/**
 * Adds what the animation needs on top of the Figma drawing: a clip to fill the glass,
 * the water stream and the fizz bubbles. Measures the drawing so the effects follow it.
 * Safe to call again: elements already added are reused.
 */
export function rigWater(glass: SVGGElement, clipId: string): WaterRig | null {
  const drink = part(glass, "mojito");
  const front = part(glass, "verre-avant");
  if (!drink || !front) return null;

  const drinkBox = drink.getBBox();
  const glassBox = front.getBBox();
  const sugarBox = part(glass, "sucre")?.getBBox();

  const top = drinkBox.y - 10;
  const bottom = drinkBox.y + drinkBox.height + 10;
  const start = sugarBox ? sugarBox.y + sugarBox.height * 0.7 : bottom - 40;
  const mouth: Point = [glassBox.x + glassBox.width / 2, glassBox.y];

  let clip = glass.querySelector<SVGClipPathElement>("clipPath[data-role='water-clip']");
  if (!clip) {
    clip = create("clipPath", { id: clipId, clipPathUnits: "userSpaceOnUse", "data-role": "water-clip" });
    clip.append(create("rect", {}));
    glass.prepend(clip);
  }
  const level = clip.querySelector("rect")!;
  level.setAttribute("x", String(drinkBox.x - 20));
  level.setAttribute("width", String(drinkBox.width + 40));
  level.setAttribute("y", String(top));
  level.setAttribute("height", String(bottom - top));
  drink.setAttribute("clip-path", `url(#${clipId})`);

  const streamWidth = 12;
  let stream = glass.querySelector<SVGRectElement>("[data-role='stream']");
  if (!stream) {
    stream = create("rect", {
      "data-role": "stream",
      width: streamWidth,
      height: 0,
      rx: streamWidth / 2,
      fill: "#BCE3F0",
      "fill-opacity": 0.85,
      stroke: INK,
      "stroke-opacity": 0.35,
      "stroke-width": 2,
    });
    // behind the ingredients, in front of the back of the glass
    glass.insertBefore(stream, numberedParts(glass, "menthe")[0] ?? front);
  }

  let fizzGroup = glass.querySelector<SVGGElement>("[data-role='fizz']");
  if (!fizzGroup) {
    fizzGroup = create("g", { "data-role": "fizz", "clip-path": `url(#${clipId})` });
    for (let i = 0; i < 10; i++) {
      // spread evenly across the glass with a fixed, irregular pattern
      const spread = ((i * 7) % 10) / 9;
      fizzGroup.append(
        create("circle", {
          cx: glassBox.x + glassBox.width * (0.2 + spread * 0.6),
          cy: start - 12,
          r: 2.5 + ((i * 3) % 4),
          fill: "#FFFFFF",
          stroke: INK,
          "stroke-width": 2,
        }),
      );
    }
    glass.insertBefore(fizzGroup, part(glass, "surface") ?? front);
  }

  return {
    level,
    stream,
    fizz: Array.from(fizzGroup.querySelectorAll("circle")),
    top,
    bottom,
    start,
    mouth,
    streamX: mouth[0] - streamWidth / 2,
    streamTop: mouth[1] - 250,
  };
}
