import whatsappIcon from "@/assets/whatsapp-icon-white.png";

export const WhatsAppFab = () => (
  <a
    href="https://wa.me/5522988392494?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Hui%20Hoa."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant hover:scale-110 transition-transform">
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7"
      />
    </span>
  </a>
);
