import { useEffect, useRef, useState } from "react";

/** Tells when a block scrolls into view, so its appear animation plays once. */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}
