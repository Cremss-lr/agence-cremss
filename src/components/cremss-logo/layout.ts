export type Point = [x: number, y: number];
export type Size = { width: number; height: number };
export type LayoutMode = "horizontal" | "stacked";

export type Lockup = {
  viewBox: [x: number, y: number, width: number, height: number];
  /** Resting position of the glass. */
  glass: Point;
  /** Resting position of the wordmark. */
  word: Point;
  /** Where the glass sits alone, centred, before the letters come out. */
  glassStart: Point;
};

/** Spacing of the "Cremss – logo" frame in Figma (auto-layout gap, top padding of the text). */
const FIGMA_LOCKUP = { gap: 34, wordTop: 120 };
const STACK_GAP = 40;
const PADDING = 20;

export function computeLayout(mode: LayoutMode, glass: Size, word: Size): Lockup {
  if (mode === "stacked") {
    const width = Math.max(glass.width, word.width);
    const wordY = glass.height + STACK_GAP;
    const height = wordY + word.height;
    return {
      viewBox: [-PADDING, -PADDING, width + PADDING * 2, height + PADDING * 2],
      glass: [(width - glass.width) / 2, 0],
      word: [(width - word.width) / 2, wordY],
      glassStart: [0, (height - glass.height) / 2],
    };
  }

  const width = glass.width + FIGMA_LOCKUP.gap + word.width;
  return {
    viewBox: [-PADDING, -PADDING, width + PADDING * 2, glass.height + PADDING * 2],
    glass: [0, 0],
    word: [glass.width + FIGMA_LOCKUP.gap, FIGMA_LOCKUP.wordTop],
    glassStart: [(width - glass.width) / 2, 0],
  };
}
