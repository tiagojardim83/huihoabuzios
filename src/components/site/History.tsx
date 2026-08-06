import { useEffect, useRef, useState } from "react";
import historyImg from "@/assets/bruno-e-sian.jpg";

const timeline = [
  { year: "2018", title: "Fundação", desc: "O Hui Hoa nasce em Búzios com um sonho coletivo." },
  { year: "2019", title: "Primeiras competições", desc: "Estreias em campeonatos regionais e estaduais." },
  { year: "2021", title: "Projeto Kids", desc: "Crianças de Búzios começam a remar gratuitamente aos sábados." },
  { year: "2023", title: "Competições nacionais", desc: "Presença em circuitos brasileiros de canoa havaiana." },
  { year: "2025", title: "Representações internacionais", desc: "Búzios navegando por eventos fora do Brasil." },
];

export const History = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    const updateTimeline = () => {
      frame = null;

      const section = sectionRef.current;
      const list = timelineRef.current;
      if (!section || !list) return;

      const rect = list.getBoundingClientRect();
      const readingLine = window.innerHeight * 0.48;
      const progress = Math.min(1, Math.max(0, (readingLine - rect.top) / rect.height));
      const nextIndex = Math.min(timeline.length - 1, Math.floor(progress * timeline.length));

      section.style.setProperty("--history-progress", `${progress * 100}%`);
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const requestUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const activeMoment = timeline[activeIndex];

  return (
    <section ref={sectionRef} id="historia" className="history-premium section-air">
      <div className="container-prose">
        <header className="history-intro">
          <div>
            <span className="eyebrow text-primary reveal">Nossa História</span>
            <h2 className="history-heading reveal font-display uppercase">
              <span className="history-heading-line">Uma equipe.</span>
              <span className="history-heading-line">Um oceano.</span>
              <span className="history-heading-line history-heading-accent">Uma comunidade.</span>
            </h2>
          </div>

          <div className="history-intro-copy reveal">
            <p>
              Fundado em 2018, o <strong>Hui Hoa Búzios</strong> nasceu com um propósito simples:
              reunir pessoas apaixonadas pelo mar através da canoa havaiana.
            </p>
            <p>
              Hoje somos uma comunidade construída sobre respeito, disciplina, amizade e amor pelo
              oceano, formando atletas e levando Búzios cada vez mais longe.
            </p>
          </div>
        </header>

        <div className="history-stage">
          <aside className="history-visual-column">
            <div className="history-visual photo-frame reveal">
              <img
                src={historyImg}
                alt="Bruno e Sian, atletas da Hui Hoa Búzios"
                loading="lazy"
                className="photo-levels"
              />
              <div className="history-visual-shade" />
              <div className="history-visual-index">
                {String(activeIndex + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
              </div>
              <div className="history-visual-caption">
                <span className="history-visual-year">{activeMoment.year}</span>
                <span className="history-visual-title">{activeMoment.title}</span>
              </div>
            </div>
            <div className="history-scroll-note" aria-hidden="true">
              Continue rolando para percorrer a nossa história
            </div>
          </aside>

          <div className="history-timeline-shell">
            <ol ref={timelineRef} className="history-timeline">
              {timeline.map((moment, index) => (
                <li
                  key={moment.year}
                  className={`history-moment${index === activeIndex ? " is-active" : ""}${index < activeIndex ? " is-past" : ""}`}
                >
                  <span className="history-moment-dot" aria-hidden="true" />
                  <div className="history-moment-content">
                    <span className="history-moment-step">Capítulo {String(index + 1).padStart(2, "0")}</span>
                    <span className="history-moment-year">{moment.year}</span>
                    <h3>{moment.title}</h3>
                    <p>{moment.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
