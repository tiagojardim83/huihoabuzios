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
import kids2 from "@/assets/kids-2.jpg";

type Tile =
  | { type: "photo"; src: string; alt: string; span: string }
  | { type: "heading"; span: string };

const tiles: Tile[] = [
  { type: "photo", src: frameCanoa, alt: "Canoa Hui Hoa", span: "md:col-span-5 md:row-span-4" },
  { type: "photo", src: paddling, alt: "Regata Hui Hoa", span: "md:col-span-3 md:row-span-3" },
  { type: "photo", src: frameSunsetRemo, alt: "Sunset Hui Hoa", span: "md:col-span-4 md:row-span-4" },
  { type: "photo", src: vitoriaImg, alt: "Equipe Hui Hoa", span: "md:col-span-4 md:row-span-3" },
  { type: "heading", span: "md:col-span-4 md:row-span-3" },
  { type: "photo", src: huddle, alt: "Unidade Hui Hoa", span: "md:col-span-4 md:row-span-3" },
  { type: "photo", src: teamBeach, alt: "Equipe na areia", span: "md:col-span-5 md:row-span-3" },
  { type: "photo", src: hugTeam, alt: "Irmandade Hui Hoa", span: "md:col-span-3 md:row-span-4" },
  { type: "photo", src: frameRemada, alt: "Remada Hui Hoa", span: "md:col-span-4 md:row-span-3" },
  { type: "photo", src: sunset1, alt: "Nascer do sol", span: "md:col-span-4 md:row-span-3" },
  { type: "photo", src: kids2, alt: "Projeto Kids", span: "md:col-span-3 md:row-span-3" },
  { type: "photo", src: sunset2, alt: "Horizonte", span: "md:col-span-5 md:row-span-3" },
  { type: "photo", src: frameCanoa, alt: "Ao largo", span: "md:col-span-4 md:row-span-3" },
];

export const Gallery = () => (
  <section id="galeria" className="py-16 md:py-24 bg-foreground text-background">
    <div className="container-prose">
      <div className="mb-14 md:hidden">
        <span className="eyebrow text-accent reveal">
          <span className="h-px w-8 bg-accent" /> Galeria
        </span>
        <h2 className="reveal font-display text-4xl mt-6 uppercase text-background text-balance">
          Frames da nossa remada.
        </h2>
        <p className="reveal mt-4 text-background/60">
          Registros feitos por atletas e amigos da equipe.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-12 md:auto-rows-[90px] gap-4 md:gap-6 md:grid-flow-row-dense">
        {tiles.map((t, i) =>
          t.type === "heading" ? (
            <div
              key={i}
              className={`reveal hidden md:flex flex-col justify-center px-2 ${t.span}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="eyebrow text-accent">
                <span className="h-px w-8 bg-accent" /> Galeria
              </span>
              <h2 className="font-display text-4xl lg:text-6xl mt-4 uppercase text-background leading-[0.9]">
                Frames da<br />nossa<br />remada.
              </h2>
              <p className="mt-4 text-sm text-background/60 max-w-xs">
                Registros feitos por atletas e amigos da equipe.
              </p>
            </div>
          ) : (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-full ${t.span}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover photo-levels transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            </figure>
          )
        )}
      </div>
    </div>
  </section>
);
