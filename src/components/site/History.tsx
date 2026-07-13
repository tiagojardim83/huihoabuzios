import historyImg from "@/assets/bruno-e-sian.jpg";

const timeline = [
  { year: "2018", title: "Fundação", desc: "O Hui Hoa nasce em Búzios com um sonho coletivo." },
  { year: "2019", title: "Primeiras competições", desc: "Estreias em campeonatos regionais e estaduais." },
  { year: "2021", title: "Projeto Kids", desc: "Crianças de Búzios começam a remar gratuitamente aos sábados." },
  { year: "2023", title: "Competições nacionais", desc: "Presença em circuitos brasileiros de canoa havaiana." },
  { year: "2025", title: "Representações internacionais", desc: "Búzios navegando por eventos fora do Brasil." },
];

export const History = () => (
  <section id="historia" className="py-16 md:py-24 bg-background">
    <div className="container-prose">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-sm reveal">
            <img
              src={historyImg}
              alt="Bruno e Sian, atletas da Hui Hoa Búzios"
              loading="lazy"
              className="h-[520px] md:h-[680px] w-full object-cover photo-levels"
            />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <div className="font-display text-4xl">2018</div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/80">Onde tudo começou</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow text-primary reveal">
            <span className="h-px w-8 bg-primary" /> Nossa História
          </span>
          <h2 className="reveal font-display text-4xl md:text-6xl mt-6 text-balance uppercase">
            Uma equipe.<br />Um oceano.<br />
            <span className="text-primary">Uma comunidade.</span>
          </h2>
          <div className="reveal mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed max-w-xl">
            <p>
              Fundado em 2018, o <strong className="text-foreground">Hui Hoa Búzios</strong> nasceu
              com um propósito simples: reunir pessoas apaixonadas pelo mar através da canoa
              havaiana.
            </p>
            <p>
              Ao longo dos anos, tornou-se uma das equipes mais tradicionais da região, formando
              atletas, participando de competições em todo o Brasil e representando o país em
              eventos internacionais.
            </p>
            <p>
              Hoje o Hui Hoa é muito mais que um clube. É uma comunidade construída sobre respeito,
              disciplina, amizade e amor pelo oceano.
            </p>
          </div>

          <ol className="mt-14 relative border-l border-border pl-8 space-y-8">
            {timeline.map((t, i) => (
              <li key={t.year} className="reveal relative" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-primary/15" />
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <div className="font-display text-2xl text-primary">{t.year}</div>
                <div className="mt-1 font-semibold text-foreground">{t.title}</div>
                <div className="text-sm text-muted-foreground mt-1 max-w-md">{t.desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);
