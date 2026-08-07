import { Counter } from "./Counter";

const cards = [
  { value: 143, suffix: "+", label: "Medalhas" },
  { value: 21, suffix: "", label: "Atletas ativos" },
  { value: 8, suffix: "", label: "Anos de história" },
  { value: 4, suffix: "", label: "Participações internacionais" },
  { value: 60, suffix: " mil+", label: "Visualizações mensais" },
  { value: 4, suffix: "x", label: "Treinos por semana" },
];

export const Numbers = () => (
  <section id="numeros" className="relative py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-[0.06] noise pointer-events-none" />
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />

    <div className="container-prose relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="eyebrow eyebrow-numbered text-accent reveal">
            <span className="eyebrow-number">02</span> Nossos Números
          </span>
          <h2 className="section-title reveal">
            Prova de<br />consistência.
          </h2>
        </div>
        <p className="reveal max-w-md text-primary-foreground/75 text-base">
          Cada número é resultado de anos de dedicação, treinos antes do sol nascer e uma
          comunidade que rema junta.
        </p>
      </div>

      <div className="number-grid grid-cols-2 md:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.label}
            className="number-card reveal p-8 md:p-10"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="font-display text-5xl md:text-7xl leading-none">
              <Counter to={c.value} suffix={c.suffix} />
            </div>
            <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-primary-foreground/70">
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
