import { Trophy, Medal, Flag, MapPin } from "lucide-react";

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

export const Competitions = () => (
  <section id="competicoes" className="py-16 md:py-24 bg-background">
    <div className="container-prose">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="eyebrow text-primary reveal">
            <span className="h-px w-8 bg-primary" /> Competições
          </span>
          <h2 className="reveal font-display text-4xl md:text-6xl mt-6 uppercase text-balance">
            Onde o Hui Hoa<br />já esteve.
          </h2>
        </div>
        <p className="reveal max-w-md text-muted-foreground">
          Do Rio de Janeiro aos circuitos internacionais, levamos o nome de Búzios para
          onde a canoa nos leva.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="reveal group relative border border-border p-7 rounded-sm hover:border-primary hover:shadow-elegant hover:-translate-y-1 transition-smooth bg-card"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold">
                {it.tag}
              </span>
              <it.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display text-xl md:text-2xl mt-8 uppercase leading-tight">
              {it.title}
            </h3>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-sm text-foreground">{it.result}</div>
              <div className="text-xs text-muted-foreground mt-1">{it.year}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
