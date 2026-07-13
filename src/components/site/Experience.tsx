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
  <section id="experiencia" className="relative bg-background">
    <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
      <img
        src={bg}
        alt="Canoa Hui Hoa remando no mar de Búzios ao entardecer"
        loading="lazy"
        className="h-full w-full object-cover photo-levels"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 flex items-center">
        <div className="container-prose">
          <span className="eyebrow text-accent reveal">
            <span className="h-px w-8 bg-accent" /> Experiência
          </span>
          <h2 className="reveal font-display text-white text-5xl md:text-7xl lg:text-8xl mt-6 max-w-4xl uppercase text-balance">
            Muito mais<br />que remar.
          </h2>
        </div>
      </div>
    </div>

    <div className="container-prose -mt-24 relative z-10 pb-24 md:pb-36">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-sm overflow-hidden shadow-elegant">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="reveal group bg-card p-8 md:p-10 hover:bg-foreground hover:text-background transition-smooth"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <it.icon size={28} className="text-primary group-hover:text-accent transition-smooth" />
            <h3 className="font-display text-2xl mt-6 uppercase tracking-tight">{it.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
