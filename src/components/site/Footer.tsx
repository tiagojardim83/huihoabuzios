import { Instagram } from "lucide-react";
import logo from "@/assets/hui-hoa-logo-footer.png";
import whatsappIcon from "@/assets/whatsapp-icon-white.png";

export const Footer = () => (
  <footer className="bg-foreground text-background pt-20 pb-10">
    <div className="container-prose">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        <div className="md:col-span-6">
          <img
            src={logo}
            alt="Hui Hoa Búzios"
            loading="lazy"
            className="h-12 md:h-14 w-auto"
          />
          <p className="mt-4 max-w-md text-background/60 text-sm leading-relaxed">
            Equipe de canoa havaiana de Búzios. Comunidade, performance e oceano — desde 2018.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#historia" className="hover:text-accent transition-smooth">História</a></li>
            <li><a href="#experiencia" className="hover:text-accent transition-smooth">Experiência</a></li>
            <li><a href="#kids" className="hover:text-accent transition-smooth">Projeto Kids</a></li>
            <li><a href="#galeria" className="hover:text-accent transition-smooth">Galeria</a></li>
            <li><a href="#patrocinio" className="hover:text-accent transition-smooth">Patrocínio</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs tracking-[0.2em] uppercase text-background/50 mb-4">Fale com a gente</h3>
          <ul className="space-y-2 text-sm">
            <li>Praia do Canto, Armação dos Búzios - RJ</li>
            <li>huihoabuzios@gmail.com</li>
            <li className="flex items-center gap-2">
              <img src={whatsappIcon} alt="WhatsApp" width={14} height={14} className="w-[14px] h-[14px]" />
              <a
                href="https://wa.me/5522988392494"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
              >
                +55 (22) 98839-2494
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={whatsappIcon} alt="WhatsApp" width={14} height={14} className="w-[14px] h-[14px]" />
              <a
                href="https://wa.me/5522998796337"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-smooth"
              >
                +55 (22) 99879-6337
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/huihoa_buzios/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/15 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-background/50">
        <p>© {new Date().getFullYear()} Hui Hoa Búzios. Todos os direitos reservados.</p>
        <p>Feito com sal, sol e coração.</p>
      </div>
    </div>
  </footer>
);
