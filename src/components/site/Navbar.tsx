import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = !scrolled && !open;

  return (
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
          className="flex items-center"
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
          className={`lg:hidden p-2 ${dark ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <ul className="container-prose py-6 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/85 hover:text-primary text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button asChild variant="hero" size="lg" className="w-full">
                <a href="https://wa.me/5522988392494" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Quero Remar</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
