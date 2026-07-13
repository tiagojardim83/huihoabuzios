import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  "Treinos",
  "Competições",
  "Eventos",
  "Produções de vídeo",
  "Redes sociais",
  "Projeto Social",
];

export const Sponsorship = () => (
  <section id="patrocinio" className="py-16 md:py-24 bg-background">
    <div className="container-prose">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <span className="eyebrow text-primary reveal">
            <span className="h-px w-8 bg-primary" /> Patrocínio
          </span>
          <h2 className="reveal font-display text-4xl md:text-6xl lg:text-7xl mt-6 uppercase text-balance">
            Sua marca<br />
            <span className="text-primary">navegando</span><br />
            conosco.
          </h2>
          <p className="reveal mt-8 text-foreground/75 text-lg leading-relaxed max-w-lg">
            Ao apoiar o Hui Hoa, sua empresa associa sua marca a esporte, saúde, qualidade de vida
            e uma comunidade extremamente engajada em Búzios e além.
          </p>

          <div className="reveal mt-10">
            <Button asChild variant="hero" size="xl" className="min-w-[11rem]">
              <a href="#contato">
                Apoiar o Hui Hoa <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="reveal grid sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <div key={p} className="glass rounded-sm p-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="font-medium">{p}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 p-8 bg-gradient-royal text-primary-foreground rounded-sm">
            <div className="font-display text-3xl uppercase tracking-tight">
              +60 mil visualizações mensais
            </div>
            <p className="mt-3 text-primary-foreground/80 text-sm">
              Alcance orgânico através de conteúdo autêntico produzido pelos atletas — em vídeos,
              regatas e no dia a dia da equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
