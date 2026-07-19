import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hui-hero-2.mp4";
import sunset from "@/assets/sunset-1.jpg";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[90svh] w-full overflow-hidden text-white">
      {/* Background video with image poster fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          {...({ "webkit-playsinline": "true" } as Record<string, string>)}
          preload="auto"
          poster={sunset}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Royal blue institutional overlay */}
        <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />
      </div>

      <div className="container-prose relative z-10 flex min-h-[90svh] flex-col justify-end pb-10 md:pb-16 pt-28">
        <div className="max-w-4xl">
          <span className="eyebrow text-accent">
            <span className="h-px w-8 bg-accent" /> Hui Hoa Búzios · Desde 2018
          </span>

          <h1 className="text-display mt-6 text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-white text-balance">
            Remar é apenas
            <br />
            <span className="text-accent italic font-black not-italic">o começo.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Há mais de oito anos formando atletas, fortalecendo amizades e levando o nome de Búzios
            para competições nacionais e internacionais.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="ember" size="xl" className="w-full sm:w-auto min-w-[11rem]">
              <a href="https://wa.me/5522998796337" target="_blank" rel="noopener noreferrer">
                Comece a Remar <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl" className="w-full sm:w-auto min-w-[11rem]">
              <a href="#patrocinio">Seja um Patrocinador</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
