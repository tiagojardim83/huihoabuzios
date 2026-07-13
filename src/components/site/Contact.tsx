import { z } from "zod";
import { Instagram, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import whatsappIcon from "@/assets/whatsapp-icon-white.png";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  mensagem: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

export const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique os dados");
      return;
    }
    const mensagem = `Olá! Meu nome é ${data.nome}.\nE-mail: ${data.email}\nTelefone: ${data.telefone}\n\n${data.mensagem}`;
    window.open(`https://wa.me/5522998796337?text=${encodeURIComponent(mensagem)}`, "_blank", "noopener,noreferrer");
    form.reset();
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container-prose grid lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-2">
          <span className="eyebrow text-primary reveal">
            <span className="h-px w-8 bg-primary" /> Contato
          </span>
          <h2 className="reveal font-display text-4xl md:text-6xl mt-6 uppercase text-balance">
            Vamos<br />conversar?
          </h2>
          <p className="reveal mt-6 text-muted-foreground text-lg">
            Fale com a gente pelo formulário ou pelos canais abaixo. Respondemos rápido.
          </p>

          <ul className="reveal mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <span
                  role="img"
                  aria-label="WhatsApp"
                  className="block h-[18px] w-[18px] bg-current"
                  style={{
                    WebkitMaskImage: `url(${whatsappIcon})`,
                    maskImage: `url(${whatsappIcon})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
              </span>
              <div>
                <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">WhatsApp</div>
                <div className="flex flex-col gap-0.5">
                  <a
                    href="https://wa.me/5522988392494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-smooth"
                  >
                    +55 (22) 98839-2494
                  </a>
                  <a
                    href="https://wa.me/5522998796337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-smooth"
                  >
                    +55 (22) 99879-6337
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <Instagram size={18} />
              </span>
              <div>
                <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Instagram</div>
                <a
                  href="https://www.instagram.com/huihoa_buzios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-smooth"
                >
                  @huihoa_buzios
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">E-mail</div>
                <a href="mailto:huihoabuzios@gmail.com" className="font-medium hover:text-primary transition-smooth">
                  huihoabuzios@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <MapPin size={18} />
              </span>
              <div>
                <div className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Localização</div>
                <div>Praia do Canto, Armação dos Búzios - RJ</div>
              </div>
            </li>
          </ul>

          <div className="reveal mt-8 overflow-hidden rounded-sm border border-border aspect-[4/3]">
            <iframe
              title="Localização Hui Hoa Búzios"
              src="https://www.google.com/maps?q=Praia+do+Canto+Armação+dos+Búzios+RJ&output=embed"
              loading="lazy"
              className="h-full w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal lg:col-span-3 glass rounded-sm p-8 md:p-12 shadow-soft h-fit"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="nome" className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Nome</Label>
              <Input id="nome" name="nome" placeholder="Seu nome completo" className="mt-2 h-12 rounded-sm" maxLength={100} required />
            </div>
            <div>
              <Label htmlFor="email" className="text-xs tracking-[0.18em] uppercase text-muted-foreground">E-mail</Label>
              <Input id="email" name="email" type="email" placeholder="voce@email.com" className="mt-2 h-12 rounded-sm" maxLength={255} required />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="telefone" className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Telefone</Label>
              <Input id="telefone" name="telefone" type="tel" placeholder="+55 (22) 98839-2494" className="mt-2 h-12 rounded-sm" maxLength={20} required />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="mensagem" className="text-xs tracking-[0.18em] uppercase text-muted-foreground">Mensagem</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Quero fazer uma aula experimental / apoiar a equipe / saber mais..."
                className="mt-2 min-h-36 rounded-sm"
                maxLength={1000}
                required
              />
            </div>
          </div>

          <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto sm:min-w-[11rem]">
            Enviar mensagem <Send size={16} />
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Ao enviar, você será redirecionado para o WhatsApp da equipe Hui Hoa Búzios.
          </p>
        </form>
      </div>
    </section>
  );
};
