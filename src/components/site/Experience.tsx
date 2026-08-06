import { Activity, Users, HeartPulse, Waves } from "lucide-react";
import bg from "@/assets/experience.jpg";

const items = [
  {
    icon: Activity,
    title: "Performance",
    desc: "Treinos para iniciantes e atletas experientes com foco em técnica e evolução.",
  },
  {
    icon: Users,
    title: "Comunidade",
    desc: "Pessoas que compartilham o mesmo estilo de vida — dentro e fora d'água.",
  },
  {
    icon: HeartPulse,
    title: "Saúde",
    desc: "Corpo e mente em equilíbrio, ao ar livre, com o mar como academia.",
  },
  {
    icon: Waves,
    title: "Natureza",
    desc: "O oceano como nosso maior parceiro — respeitado a cada remada.",
  },
];

export const Experience = () => (
  <section id="experiencia" className="experience-premium">
    <div className="experience-visual">
      <img
        src={bg}
        alt="Canoa Hui Hoa remando no mar de Búzios ao entardecer"
        loading="lazy"
        className="h-full w-full object-cover photo-levels"
      />
      <div className="experience-image-overlay" />

      <div className="experience-hero-content container-prose">
        <span className="eyebrow eyebrow-numbered text-accent reveal">
          <span className="eyebrow-number">03</span> Experiência
        </span>
        <div className="experience-title-row">
          <h2 className="experience-title reveal font-display text-4xl md:text-6xl lg:text-7xl uppercase text-balance">
            <span>Muito mais</span>
            <span>que remar.</span>
          </h2>
          <p className="experience-lead reveal">
            Corpo, técnica e comunidade em conexão constante com o oceano.
          </p>
        </div>
      </div>
    </div>

    <div className="experience-panel-wrap container-prose">
      <div className="experience-panel">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="experience-pillar reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="experience-pillar-top">
              <span className="experience-icon">
                <item.icon size={22} aria-hidden="true" />
              </span>
              <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
