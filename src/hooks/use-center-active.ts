import { useEffect, useRef, useState } from "react";

/**
 * On touch devices (no real :hover), toggles an "active" flag while the
 * element sits in a thin band around the viewport's vertical center —
 * simulating :hover as the user scrolls it into and out of that band.
 * On devices with a real pointer, this is a no-op (CSS :hover handles it).
 */
export const useCenterActive = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (hoverCapable) return;

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, active };
};
