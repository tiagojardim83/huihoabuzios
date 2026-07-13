import { useEffect, useState } from "react";
import { Menu, X, Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/hui-hoa-logo.png";

const links = [
  { href: "#historia", label: "História" },
  { href: "#numeros", label: "Números" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#kids", label: "Projeto Kids" },
  { href: "#galeria", label: "Galeria" },
  { href: "#patrocinio", label: "Patrocínio" },
  { href: "#faq", label: "FAQ" },
];

// Mobile menu labels match each section's kicker text exactly.
const menuLinks = [
  { href: "#historia", label: "Nossa História" },
  { href: "#numeros", label: "Nossos Números" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#kids", label: "Projeto Kids" },
  { href: "#competicoes", label: "Competições" },
  { href: "#galeria", label: "Galeria" },
  { href: "#patrocinio", label: "Patrocínio" },
  { href: "#faq", label: "Perguntas Frequentes" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dark = !scrolled && !open;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
          scrolled || open ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
      <nav
        className="container-prose flex items-center justify-between h-16 md:h-20"
        aria-label="Navegação principal"
      >
        <a
          href="#top"
          aria-label="Hui Hoa Búzios - Canoa Havaiana"
          className="flex items-center relative z-10"
        >
          <img
            src={logo}
            alt="Hui Hoa Canoa Havaiana"
            className="h-9 md:h-11 w-auto"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-smooth ${
                  dark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant={dark ? "onDark" : "hero"} size="default">
            <a href="https://wa.me/5522988392494" target="_blank" rel="noopener noreferrer">Quero Remar</a>
          </Button>
        </div>

        <button
          className={`lg:hidden relative z-10 p-2 transition-smooth ${dark ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      </header>

      {/* Premium full-screen mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-primary text-primary-foreground overflow-hidden transition-all duration-500 ease-smooth ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-[420px] h-[420px] rounded-full bg-primary-glow/20 blur-3xl" />

        <div className="relative h-full flex flex-col pt-24 pb-8 px-6">
          <ul className="flex-1 flex flex-col justify-center gap-1 -mt-8">
            {menuLinks.map((l, i) => (
              <li
                key={l.href}
                className={`border-b border-background/10 transition-all duration-500 ease-smooth ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-4"
                >
                  <span className="font-display text-3xl uppercase tracking-tight group-hover:text-accent transition-smooth">
                    {l.label}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-background/40 group-hover:text-accent transition-smooth">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`shrink-0 space-y-6 transition-all duration-500 ease-smooth ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? `${120 + menuLinks.length * 60}ms` : "0ms" }}
          >
            <Button asChild variant="ember" size="xl" className="w-full">
              <a
                href="https://wa.me/5522988392494"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Quero Remar <ArrowUpRight size={18} />
              </a>
            </Button>

            <div className="flex items-center justify-end pt-2">
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
      </div>
    </>
  );
};
