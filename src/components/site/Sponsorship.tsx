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
  <section id="patrocinio" className="section-air bg-background">
    <div className="container-prose">
        <div className="section-air-grid grid lg:grid-cols-2 items-center">
          <div className="min-w-0">
          <span className="eyebrow eyebrow-numbered text-primary reveal">
            <span className="eyebrow-number">07</span> Patrocínio
          </span>
          <h2 className="section-title reveal">
            Sua marca<br />
            <span className="text-primary">navegando</span><br />
            conosco
          </h2>
          <p className="reveal mt-8 text-foreground/75 text-lg leading-relaxed max-w-lg">
            Ao apoiar o Hui Hoa, sua empresa associa sua marca a esporte, saúde, qualidade de vida
            e uma comunidade extremamente engajada em Búzios e além.
          </p>

          <div className="reveal mt-10">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto min-w-[11rem]">
              <a href="#contato">
                Apoiar o Hui Hoa <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>

          <div>
          <div className="reveal grid sm:grid-cols-2 gap-3">
            {perks.map((p) => (
              <div key={p} className="card-outline card-outline-interactive p-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="font-medium">{p}</span>
              </div>
            ))}
          </div>

          <div className="sponsor-highlight reveal mt-8 p-8 text-primary-foreground">
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
