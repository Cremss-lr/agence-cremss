export type SvgAsset = {
  /** Top-left corner of the drawing's viewBox. */
  x: number;
  y: number;
  width: number;
  height: number;
  /** Fill inherited from the root <svg> (Figma sets `fill="none"`). */
  fill?: string;
  /** Everything inside the root <svg>. */
  markup: string;
};

/** Reads an exported SVG file (as a raw string) so its content can be placed inside another <svg>. */
export function readSvg(raw: string): SvgAsset {
  const open = /<svg\b[^>]*>/.exec(raw);
  const viewBox = open?.[0].match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
  if (!open || !viewBox || viewBox.length !== 4) throw new Error("SVG asset has no viewBox");

  const [x, y, width, height] = viewBox;
  return {
    x,
    y,
    width,
    height,
    fill: open[0].match(/\sfill="([^"]+)"/)?.[1],
    markup: raw.slice(open.index + open[0].length, raw.lastIndexOf("</svg>")),
  };
}
