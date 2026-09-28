import { useCallback, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState, type Ref } from "react";
import styles from "./CremssLogo.module.css";
import { playIntro, type IntroHandle } from "./intro";
import { computeLayout, type LayoutMode } from "./layout";
import { rigWater } from "./scene";
import { readSvg } from "./svg";
import glassFile from "./svg/cremss-verre.svg?raw";
import wordmarkFile from "./svg/cremss-texte.svg?raw";

// Exported from Figma, then optimised by `bun run svg`
const glass = readSvg(glassFile);
const wordmark = readSvg(wordmarkFile);
// Created once: React re-injects the markup whenever this object changes, which would wipe the animation effects.
const glassHtml = { __html: glass.markup };
const wordmarkHtml = { __html: wordmark.markup };

/** Below this width (px) of the space given to the logo, the wordmark goes under the glass. */
const STACK_BELOW = 560;

export type CremssLogoHandle = {
  /** Plays the intro again from the start. */
  replay: () => void;
};

export type CremssLogoProps = {
  ref?: Ref<CremssLogoHandle>;
  /** Play the intro as soon as the logo is on screen. Defaults to `true`. */
  autoPlay?: boolean;
  /** `"auto"` picks horizontal or stacked from the available width. */
  layout?: LayoutMode | "auto";
  /** Called when the intro has played to the end. */
  onComplete?: () => void;
  className?: string;
  /** Accessible name of the logo. */
  title?: string;
};

export function CremssLogo({ ref, autoPlay = true, layout = "auto", onComplete, className, title = "Cremss" }: CremssLogoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const glassRef = useRef<SVGGElement>(null);
  const wordmarkRef = useRef<SVGGElement>(null);
  const introRef = useRef<IntroHandle | null>(null);
  const onCompleteRef = useRef(onComplete);
  const clipId = `cremss-water-${useId().replace(/[^\w-]/g, "")}`;

  const [measuredMode, setMeasuredMode] = useState<LayoutMode>("horizontal");
  const mode = layout === "auto" ? measuredMode : layout;
  const lockup = useMemo(() => computeLayout(mode, glass, wordmark), [mode]);
  const glassOrigin: [number, number] = [lockup.glass[0] - glass.x, lockup.glass[1] - glass.y];
  const wordOrigin: [number, number] = [lockup.word[0] - wordmark.x, lockup.word[1] - wordmark.y];

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Follow the space the logo actually gets, not the viewport, so it also works in a sidebar or a card.
  useEffect(() => {
    const root = rootRef.current;
    if (layout !== "auto" || !root) return;
    const observer = new ResizeObserver(([entry]) => {
      setMeasuredMode(entry.contentRect.width < STACK_BELOW ? "stacked" : "horizontal");
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, [layout]);

  const [glassX, glassY] = glassOrigin;
  const [wordX, wordY] = wordOrigin;

  const play = useCallback(() => {
    const svg = svgRef.current;
    const glassLayer = glassRef.current;
    const wordmarkLayer = wordmarkRef.current;
    if (!svg || !glassLayer || !wordmarkLayer) return;

    introRef.current?.cancel();
    svg.style.visibility = "visible";
    const water = rigWater(glassLayer, clipId);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      introRef.current = null;
      onCompleteRef.current?.();
      return;
    }

    const intro = playIntro({
      svg,
      glass: glassLayer,
      wordmark: wordmarkLayer,
      glassOrigin: [glassX, glassY],
      wordOrigin: [wordX, wordY],
      lockup,
      water,
    });
    introRef.current = intro;
    intro.finished.then((completed) => {
      if (completed) onCompleteRef.current?.();
    });
  }, [clipId, lockup, glassX, glassY, wordX, wordY]);

  useImperativeHandle(ref, () => ({ replay: play }), [play]);

  // Layout effect so the first hidden frames of the intro are applied before the browser paints.
  useLayoutEffect(() => {
    if (autoPlay) play();
    else if (glassRef.current) rigWater(glassRef.current, clipId);
    return () => introRef.current?.cancel();
  }, [autoPlay, play, clipId]);

  return (
    <div ref={rootRef} className={className ? `${styles.root} ${className}` : styles.root}>
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox={lockup.viewBox.join(" ")}
        role="img"
        aria-label={title}
        style={autoPlay ? { visibility: "hidden" } : undefined}
      >
        <g transform={`translate(${lockup.glass.join(" ")})`}>
          <g data-role="glass-slide">
            {/* The drawings are the files exported from Figma; the animation adds its effects inside. */}
            <g
              ref={glassRef}
              transform={`translate(${-glass.x} ${-glass.y})`}
              fill={glass.fill}
              dangerouslySetInnerHTML={glassHtml}
            />
          </g>
        </g>
        <g
          ref={wordmarkRef}
          transform={`translate(${wordX} ${wordY})`}
          fill={wordmark.fill}
          dangerouslySetInnerHTML={wordmarkHtml}
        />
      </svg>
    </div>
  );
}
