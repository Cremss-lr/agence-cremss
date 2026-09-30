import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "accueil", label: "Accueil" },
  { id: "studio", label: "Studio" },
  { id: "services", label: "Services" },
  { id: "realisations", label: "Réalisations" },
  { id: "contact", label: "Contact" },
];
const MIN_THUMB = 90;
const BORDER = 3;

export function Scrollbar({ ready }: { ready: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const update = () => {
      const t = track.current, h = thumb.current;
      if (!t || !h) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - innerHeight;
      const range = t.clientHeight + BORDER * 2;
      const size = Math.max(MIN_THUMB, (innerHeight / doc.scrollHeight) * range);
      h.style.height = `${size}px`;
      h.style.transform = `translateY(${max > 0 ? (scrollY / max) * (range - size) : 0}px)`;
      const current = SECTIONS.filter(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? 1) <= innerHeight * 0.4);
      setActive(current.at(-1)?.id ?? SECTIONS[0].id);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  const scrollToPointer = (clientY: number) => {
    const t = track.current, h = thumb.current;
    if (!t || !h) return;
    const { top, height } = t.getBoundingClientRect();
    const ratio = (clientY - top - h.offsetHeight / 2) / (height - h.offsetHeight);
    scrollTo({ top: Math.min(1, Math.max(0, ratio)) * (document.documentElement.scrollHeight - innerHeight), behavior: "instant" });
  };

  return (
    <div inert={!ready} className={`pointer-events-none fixed top-[19dvh] right-6 bottom-[19dvh] z-50 hidden items-stretch gap-4 transition-[opacity,translate] duration-[900ms] ease-out lg:flex ${ready ? "opacity-100" : "translate-x-6 opacity-0"}`} style={{ transitionDelay: "450ms" }}>
      <ul className="flex flex-col items-end gap-[22px] pt-4.5">
        {SECTIONS.map(({ id, label }) => (
          <li key={id} className="pointer-events-auto">
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className="flex items-center gap-2.5 font-body text-body text-ink"
            >
              {label}
              <span
                className={`size-2.5 rounded-pill border-2 border-ink transition-colors duration-standard ${active === id ? "bg-mint" : "bg-transparent"}`}
              />
            </a>
          </li>
        ))}
      </ul>
      <div
        ref={track}
        aria-hidden="true"
        onPointerDown={(e) => scrollToPointer(e.clientY)}
        className="pointer-events-auto relative w-5 cursor-pointer rounded-pill border-[3px] border-ink bg-[repeating-linear-gradient(45deg,var(--color-coral)_0_12px,var(--color-white)_12px_24px)]"
      >
        <div
          ref={thumb}
          onPointerDown={(e) => {
            e.stopPropagation();
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => e.currentTarget.hasPointerCapture(e.pointerId) && scrollToPointer(e.clientY)}
          className="absolute -top-[3px] -left-[7px] w-7 cursor-grab rounded-pill border-[3px] border-ink bg-mint active:cursor-grabbing"
        />
      </div>
    </div>
  );
}
