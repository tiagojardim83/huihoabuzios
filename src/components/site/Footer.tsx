import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import logo from "@/assets/hui-hoa-logo-footer.png";

const footerLinks = [
  { href: "#historia", label: "História" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#kids", label: "Projeto Kids" },
  { href: "#galeria", label: "Galeria" },
  { href: "#patrocinio", label: "Patrocínio" },
];

const marqueeItems = Array.from({ length: 4 }, (_, index) => (
  <span className="footer-marquee-item" key={index}>
    Canoa Havaiana <span aria-hidden="true">✦</span>
  </span>
));

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-intro container-prose">
      <div className="footer-kicker">
        <span>Hui Hoa Búzios</span>
        <span>Desde 2018</span>
      </div>

      <div className="footer-intro-grid">
        <h2 className="footer-heading text-balance">
          O mar é o nosso<br />ponto de encontro.
        </h2>

        <div className="footer-cta">
          <p>
            Comunidade, performance e oceano. Venha remar com a gente na Praia do Canto,
            em Búzios.
          </p>
          <a
            href="https://wa.me/5522998796337"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-primary-link"
          >
            Quero remar <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-marquee" aria-label="Canoa Havaiana">
      <div className="footer-marquee-track">
        <div className="footer-marquee-group">{marqueeItems}</div>
        <div className="footer-marquee-group" aria-hidden="true">{marqueeItems}</div>
      </div>
    </div>

    <div className="footer-navigation container-prose">
      <nav aria-label="Navegação do rodapé">
        <span className="footer-label">Explore</span>
        <ul className="footer-links">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer-contact">
        <span className="footer-label">Fale com a gente</span>
        <a href="mailto:huihoabuzios@gmail.com">
          <Mail size={16} aria-hidden="true" /> huihoabuzios@gmail.com
        </a>
        <a
          href="https://www.instagram.com/huihoa_buzios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={16} aria-hidden="true" /> @huihoa_buzios
        </a>
      </div>
    </div>

    <div className="footer-brand" aria-hidden="true">
      <img src={logo} alt="" loading="lazy" />
    </div>

    <div className="footer-bottom container-prose">
      <p>© {new Date().getFullYear()} Hui Hoa Búzios</p>
      <a
        href="https://tgarden.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-credit"
      >
        Webdesign: TGarden_Studio
      </a>
      <p className="footer-location">Praia do Canto · Armação dos Búzios · RJ</p>
      <a href="#top">Voltar ao topo ↑</a>
    </div>
  </footer>
);
