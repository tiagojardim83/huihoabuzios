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
  <section id="faq" className="faq-premium">
    <div className="container-prose">
      <div className="faq-layout">
        <div className="faq-intro">
          <span className="eyebrow eyebrow-numbered text-accent reveal">
            <span className="eyebrow-number">08</span> Perguntas Frequentes
          </span>
          <h2 className="faq-title reveal">
            <span>Antes de</span>
            <span>molhar</span>
            <span>o remo</span>
          </h2>
          <p className="faq-description reveal">
            Tudo o que você precisa saber antes de viver sua primeira experiência com o Hui Hoa.
          </p>
          <a className="faq-contact-link reveal" href="#contato">
            Ainda com dúvidas? Fale com a equipe <span aria-hidden="true">↗</span>
          </a>
        </div>

        <Accordion type="single" collapsible className="faq-list">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              className="faq-item reveal"
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <AccordionTrigger className="faq-trigger hover:no-underline">
                <span className="faq-question">
                  <span className="faq-question-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="faq-question-text">{faq.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="faq-answer">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
