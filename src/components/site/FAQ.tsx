import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quem pode remar?", a: "Qualquer pessoa maior de 12 anos com disposição para se aventurar no mar. Recebemos iniciantes e atletas experientes." },
  { q: "Preciso ter experiência?", a: "Não. Toda semana recebemos novos remadores e ensinamos desde a técnica básica até o entrosamento com a equipe." },
  { q: "Qual a idade mínima?", a: "Para o grupo adulto, 12 anos. O Projeto Kids atende crianças a partir dos 7 anos, gratuitamente, todo sábado." },
  { q: "Onde acontecem os treinos?", a: "Nossa base é na Praia do Canto, em Armação dos Búzios - RJ. Treinamos 4 vezes por semana, sempre com o nascer do sol." },
  { q: "Quanto custa?", a: "A mensalidade cobre estrutura, canoas e acompanhamento técnico. Envie mensagem que compartilhamos os valores atualizados." },
  { q: "Preciso comprar equipamento?", a: "No começo, não. A equipe fornece canoas, remos e coletes. Com o tempo, muitos remadores adquirem o próprio remo." },
];

export const FAQ = () => (
  <section id="faq" className="py-16 md:py-24 bg-secondary/50">
    <div className="container-prose max-w-3xl">
      <div className="text-center mb-14">
        <span className="eyebrow text-primary reveal justify-center flex">
          <span className="h-px w-8 bg-primary" /> Perguntas Frequentes
        </span>
        <h2 className="reveal font-display text-4xl md:text-6xl mt-6 uppercase text-balance">
          Antes de<br />molhar o remo.
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="reveal bg-card border border-border rounded-sm px-6"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <AccordionTrigger className="text-left font-display text-lg md:text-xl uppercase tracking-tight hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
