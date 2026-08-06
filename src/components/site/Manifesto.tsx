import {
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

type WaveLineProps = {
  text: string;
  startIndex: number;
};

const WaveLine = ({ text, startIndex }: WaveLineProps) => {
  const words = text.split(" ");

  return (
    <p className="manifesto-wave-line" aria-label={text}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          data-wave-word
          className="manifesto-wave-word"
          style={{ "--word-index": startIndex + index } as CSSProperties}
        >
          {word}{index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </p>
  );
};

export const Manifesto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = motionPreference.matches;
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || reducedMotionRef.current) return;
        section.classList.add("manifesto-wave-intro");
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", updateMotionPreference);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const resetWords = () => {
    const words = sectionRef.current?.querySelectorAll<HTMLElement>("[data-wave-word]");
    words?.forEach((word) => {
      word.style.removeProperty("transform");
      word.style.removeProperty("color");
    });
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || reducedMotionRef.current) return;

    const { clientX, clientY } = event;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const words = sectionRef.current?.querySelectorAll<HTMLElement>("[data-wave-word]");
      words?.forEach((word) => {
        const rect = word.getBoundingClientRect();
        const distanceX = rect.left + rect.width / 2 - clientX;
        const distanceY = rect.top + rect.height / 2 - clientY;
        const distance = Math.hypot(distanceX, distanceY);
        const influence = Math.max(0, 1 - distance / 270);

        if (influence === 0) {
          word.style.removeProperty("transform");
          word.style.removeProperty("color");
          return;
        }

        const lift = Math.cos(distance / 42) * 15 * influence;
        const tilt = Math.sin(distanceX / 65) * 1.6 * influence;
        const red = Math.round(255 + (23 - 255) * influence);
        const green = Math.round(255 + (60 - 255) * influence);

        word.style.transform = `translate3d(0, ${lift.toFixed(2)}px, 0) rotate(${tilt.toFixed(2)}deg)`;
        word.style.color = `rgb(${red} ${green} 255)`;
      });
      frameRef.current = null;
    });
  };

  const handlePointerLeave = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    resetWords();
  };

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="manifesto-interactive relative py-20 md:py-28 bg-accent overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl -z-0" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl -z-0" />

      <div className="container-prose relative">
        <span className="eyebrow eyebrow-numbered text-white reveal">
          <span className="eyebrow-number">01</span> Manifesto
        </span>

        <div className="manifesto-wave-copy mt-10 max-w-5xl font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05] tracking-tight text-white text-balance">
          <div className="reveal">
            <WaveLine text="O mar não muda quem somos." startIndex={0} />
          </div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <WaveLine text="Ele revela." startIndex={6} />
          </div>
          <div className="reveal mt-10" style={{ transitionDelay: "160ms" }}>
            <WaveLine text="Somos atletas." startIndex={8} />
            <WaveLine text="Somos amigos." startIndex={10} />
            <WaveLine text="Somos família." startIndex={12} />
            <WaveLine text="Somos Hui Hoa." startIndex={14} />
          </div>
        </div>
      </div>
    </section>
  );
};
