export const Manifesto = () => (
  <section id="manifesto" className="relative py-20 md:py-28 bg-accent overflow-hidden">
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl -z-0" />
    <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/[0.08] blur-3xl -z-0" />

    <div className="container-prose relative">
      <span className="eyebrow text-white reveal">
        <span className="h-px w-8 bg-white" /> Manifesto
      </span>

      <div className="mt-10 max-w-5xl font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1.05] tracking-tight text-white text-balance">
        <p className="reveal">O mar não muda quem somos.</p>
        <p className="reveal" style={{ transitionDelay: "80ms" }}>
          Ele revela.
        </p>
        <p className="reveal mt-10" style={{ transitionDelay: "160ms" }}>
          Somos atletas.
          <br />
          Somos amigos.
          <br />
          Somos família.
          <br />
          Somos Hui Hoa.
        </p>
      </div>
    </div>
  </section>
);
