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
  { src: frameCanoa, alt: "Canoa Hui Hoa" },
  { src: paddling, alt: "Regata Hui Hoa" },
  { src: frameSunsetRemo, alt: "Sunset Hui Hoa" },
  { src: vitoriaImg, alt: "Equipe Hui Hoa" },
  { src: huddle, alt: "Unidade Hui Hoa" },
  { src: teamBeach, alt: "Equipe na areia" },
  { src: hugTeam, alt: "Irmandade Hui Hoa" },
  { src: frameRemada, alt: "Remada Hui Hoa" },
  { src: sunset1, alt: "Nascer do sol" },
  { src: luan, alt: "Projeto Kids" },
  { src: sunset2, alt: "Horizonte" },
  { src: frameCanoa, alt: "Ao largo" },
];

export const Gallery = () => (
  <section id="galeria" className="py-16 md:py-24 bg-foreground text-background">
    <div className="container-prose">
      <div className="mb-14">
        <span className="eyebrow eyebrow-numbered text-accent reveal">
          <span className="eyebrow-number">06</span> Galeria
        </span>
        <h2 className="section-title reveal">
          Frames da nossa remada.
        </h2>
        <p className="reveal mt-4 text-background/60">
          Registros feitos por atletas e amigos da equipe.
        </p>
      </div>
    </div>

    <div className="gallery-full-grid">
      {photos.map((p, i) => (
        <figure
          key={i}
          className="photo-frame media-outline media-outline-dark reveal group relative overflow-hidden aspect-[3/5]"
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
  </section>
);
