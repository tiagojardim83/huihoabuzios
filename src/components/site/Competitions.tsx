import { useEffect, useRef } from "react";
import { Trophy, Medal, Flag, MapPin } from "lucide-react";
import competitionVideo from "@/assets/competicao.mp4";

const items = [
  {
    icon: Flag,
    tag: "Internacional",
    title: "Pan-Americano de Va'a",
    result: "Representação do Brasil",
    year: "2024",
  },
  {
    icon: Trophy,
    tag: "Nacional",
    title: "Circuito Brasileiro",
    result: "Pódios consecutivos",
    year: "2023 · 2024",
  },
  {
    icon: Medal,
    tag: "Estadual",
    title: "Copa Rio de Canoa Havaiana",
    result: "Campeão geral",
    year: "2023",
  },
  {
    icon: MapPin,
    tag: "Regional",
    title: "Etapa Búzios · Cabo Frio",
    result: "Anfitrião oficial",
    year: "Anual",
  },
];

export const Competitions = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
  <section id="competicoes" className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container-prose">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="eyebrow text-accent reveal">
            <span className="h-px w-8 bg-accent" /> Competições
          </span>
          <h2 className="reveal font-display text-4xl md:text-6xl mt-6 uppercase text-balance">
            Evolução em<br />cada remada.
          </h2>
        </div>
        <p className="reveal max-w-md text-primary-foreground/75 text-lg leading-relaxed">
          Representamos Búzios em cada remada. Do Rio de Janeiro aos maiores circuitos
          nacionais e internacionais, carregamos nossa cidade com orgulho, disciplina e
          espírito de equipe.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <p className="reveal text-primary-foreground/75 text-lg leading-relaxed">
          O Hui Hoa é um clube dedicado à formação de atletas de alta performance na
          canoa havaiana. Com treinos semanais focados em técnica, preparação física e
          desempenho competitivo, desenvolvemos remadores capazes de evoluir da iniciação
          esportiva aos principais campeonatos do Brasil e do exterior.
        </p>

        <div className="reveal relative h-[542px] md:h-auto md:aspect-video rounded-sm overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={competitionVideo}
            muted
            loop
            playsInline
            controls
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="reveal group relative border border-white/30 bg-transparent p-7 rounded-sm hover:border-white hover:-translate-y-1 transition-smooth"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold">
                {it.tag}
              </span>
              <it.icon size={20} className="text-white" />
            </div>
            <h3 className="font-display text-xl md:text-2xl mt-8 uppercase leading-tight text-white">
              {it.title}
            </h3>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-sm text-white">{it.result}</div>
              <div className="text-xs text-primary-foreground/60 mt-1">{it.year}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};
