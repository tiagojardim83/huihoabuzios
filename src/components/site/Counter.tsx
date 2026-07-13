import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter = ({ to, duration = 1600, suffix = "", className }: CounterProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const run = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Desktop (mouse-capable): counting is triggered by hover instead of scroll.
    const hoverCapable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (hoverCapable) return;

    // Mobile/touch: replay the count-up every time the number enters the
    // viewport, resetting back to 0 when it scrolls out.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
          } else {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            setValue(0);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={() => {
        setValue(0);
        run();
      }}
    >
      {value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};
