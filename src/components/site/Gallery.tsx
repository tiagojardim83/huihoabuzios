import paddling from "@/assets/paddling.jpg";
import sunset1 from "@/assets/sunset-1.jpg";
import sunset2 from "@/assets/sunset-2.jpg";
import huddle from "@/assets/huddle-mirage.jpg";
import vitoriaImg from "@/assets/huihoa-vitoria.webp";
import teamBeach from "@/assets/team-beach.jpg";
import hugTeam from "@/assets/hug-team.jpg";
import frameCanoa from "@/assets/frame-canoa-buzios.jpg";
import frameRemada from "@/assets/frame-remada.jpg";
import frameSunsetRemo from "@/assets/frame-sunset-remo.jpg";
import luan from "@/assets/luan.jpg";

const photos = [
  { src: frameCanoa, alt: "Canoa Hui Hoa", aspect: "aspect-[3/4]" },
  { src: paddling, alt: "Regata Hui Hoa", aspect: "aspect-square" },
  { src: frameSunsetRemo, alt: "Sunset Hui Hoa", aspect: "aspect-[4/5]" },
  { src: vitoriaImg, alt: "Equipe Hui Hoa", aspect: "aspect-[4/3]" },
  { src: huddle, alt: "Unidade Hui Hoa", aspect: "aspect-square" },
  { src: teamBeach, alt: "Equipe na areia", aspect: "aspect-[4/3]" },
  { src: hugTeam, alt: "Irmandade Hui Hoa", aspect: "aspect-[3/4]" },
  { src: frameRemada, alt: "Remada Hui Hoa", aspect: "aspect-[4/5]" },
  { src: sunset1, alt: "Nascer do sol", aspect: "aspect-square" },
  { src: luan, alt: "Projeto Kids", aspect: "aspect-[3/4]" },
  { src: sunset2, alt: "Horizonte", aspect: "aspect-[4/3]" },
];

export const Gallery = () => (
  <section id="galeria" className="py-16 md:py-24 bg-foreground text-background">
    <div className="container-prose">
      <div className="mb-14">
        <span className="eyebrow text-accent reveal">
          <span className="h-px w-8 bg-accent" /> Galeria
        </span>
        <h2 className="reveal font-display text-4xl md:text-6xl mt-6 uppercase text-background text-balance">
          Frames da nossa remada.
        </h2>
        <p className="reveal mt-4 text-background/60">
          Registros feitos por atletas e amigos da equipe.
        </p>
      </div>

      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 md:gap-6">
        {photos.map((p, i) => (
          <figure
            key={i}
            className={`reveal group relative overflow-hidden break-inside-avoid mb-4 md:mb-6 ${p.aspect}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover photo-levels transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
          </figure>
        ))}
      </div>
    </div>
  </section>
);
