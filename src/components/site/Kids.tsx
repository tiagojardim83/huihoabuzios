import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kidsImg from "@/assets/kids-2.jpg";

export const Kids = () => (
  <section id="kids" className="section-air bg-secondary/50">
    <div className="section-air-grid container-prose grid lg:grid-cols-2 lg:items-center gap-y-8">
      <div className="reveal order-1 lg:order-none lg:col-start-1 lg:row-start-1 min-w-0">
        <span className="eyebrow eyebrow-numbered text-accent">
          <span className="eyebrow-number">04</span> Projeto Kids · Gratuito
        </span>
        <h2 className="section-title text-primary">
          Formando<br />
          atletas e cidadãos
        </h2>
      </div>

      <div className="reveal order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 relative">
        <div className="photo-frame media-outline relative overflow-hidden">
          <img
            src={kidsImg}
            alt="Crianças do Projeto Kids Hui Hoa Búzios"
            loading="lazy"
            className="w-full h-auto object-cover photo-levels"
          />
        </div>
        <div className="kids-schedule card-outline">
          <div className="kids-schedule-label">Todo sábado</div>
          <div className="kids-schedule-value">Praia do Canto · 8h</div>
        </div>
      </div>

      <div className="reveal order-3 lg:order-none lg:col-start-1 lg:row-start-2 min-w-0">
        <div className="space-y-5 text-foreground/75 text-lg leading-relaxed">
          <p>
            Todos os sábados realizamos gratuitamente o <strong className="text-foreground">Projeto Kids</strong>,
            aberto às crianças de Búzios.
          </p>
          <p>
            Mais do que ensinar a remar, ensinamos respeito, disciplina, trabalho em equipe e
            conexão com o mar, valores que vão muito além da canoa.
          </p>
        </div>
        <div className="mt-10">
          <Button asChild variant="ember" size="xl" className="min-w-[11rem]">
            <a href="#patrocinio">
              Quero apoiar o projeto <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
