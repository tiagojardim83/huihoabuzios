import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kidsImg from "@/assets/kids-2.jpg";

export const Kids = () => (
  <section id="kids" className="py-16 md:py-24 bg-secondary/50">
    <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="reveal order-2 lg:order-1">
        <span className="eyebrow text-accent">
          <span className="h-px w-8 bg-accent" /> Projeto Kids · Gratuito
        </span>
        <h2 className="font-display text-4xl md:text-6xl mt-6 uppercase text-balance">
          Formando<br />
          <span className="text-primary">atletas</span> e{" "}
          <span className="text-accent">cidadãos.</span>
        </h2>
        <div className="mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed">
          <p>
            Todos os sábados realizamos gratuitamente o <strong className="text-foreground">Projeto Kids</strong>,
            aberto às crianças de Búzios.
          </p>
          <p>
            Mais do que ensinar a remar, ensinamos respeito, disciplina, trabalho em equipe e
            conexão com o mar — valores que vão muito além da canoa.
          </p>
        </div>
        <div className="mt-10">
          <Button asChild variant="ember" size="xl">
            <a href="#patrocinio">
              Quero apoiar o projeto <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>

      <div className="reveal order-1 lg:order-2 relative">
        <div className="relative overflow-hidden rounded-sm shadow-elegant">
          <img
            src={kidsImg}
            alt="Crianças do Projeto Kids Hui Hoa Búzios"
            loading="lazy"
            className="w-full h-auto object-cover photo-levels"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 shadow-elegant hidden md:block">
          <div className="text-[11px] tracking-[0.2em] uppercase opacity-80">Todo sábado</div>
          <div className="font-display text-2xl mt-1">Praia do Canto · 8h</div>
        </div>
      </div>
    </div>
  </section>
);
