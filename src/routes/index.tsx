import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Flame, Feather, Moon, Heart, Swords, Sparkles, Music, Pause } from "lucide-react";
import { GoldDust } from "@/components/GoldDust";
import { Reveal } from "@/components/Reveal";
import { DragonMark, WingDivider } from "@/components/DragonMark";

const gallery = ["/foto-1.png", "/foto-2.png", "/foto-3.png", "/foto-4.png", "/foto-5.png", "/foto-6.png"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mi Jinete de Dragón — Una carta de amor" },
      {
        name: "description",
        content:
          "Una carta de amor digital: nuestra historia, mis razones y una dedicatoria escrita para ti, entre fuego, alas y juramentos.",
      },
      { property: "og:title", content: "Mi Jinete de Dragón — Una carta de amor" },
      {
        property: "og:description",
        content:
          "Una carta de amor digital: nuestra historia, mis razones y una dedicatoria escrita para ti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoveLetter,
});

const timeline = [
  { year: "2024", title: "El día que nos conocimos", text: "Me sentia solo, un nuevo colegio, sin nadie con quien hablar hasta que te conoci." },
  { year: "2024", title: "El día que todo cambió", text: "Cuando nos comenzamos a acercar mas, que me dejabas darte besos en la mejilla era lo mejor." },
  { year: "2025", title: "Nuestra primera tormenta", text: "Cuando por culpa de ese reto se alejo nuestra amistad fue algo que me dolio mucho." },
  { year: "2026", title: "El juramento", text: "En el que apesar de todo, estaremos juntos." },
];

const reasons = [
  { icon: Feather, title: "Por tu valentía", text: "Como no te dejas mangonear de nadie y eres recta con lo que haces." },
  { icon: Swords, title: "Por cómo peleas por lo tuyo", text: "Nadie te quita lo que es tuyo." },
  { icon: Moon, title: "Por la calma que me das", text: "Me das una tranquilidad, paz y confort que en ningun otro lado consigo." },
  { icon: Heart, title: "Por tu forma de amar", text: "Tan unica y hermosa." },
  { icon: Flame, title: "Por el fuego que enciendes", text: "Como con un beso me haces sentir el chico mas feliz del mundo." },
  { icon: Sparkles, title: "Por ser mi hogar", text: "Siempre me siento seguro y tranquilo cuando estoy a tu lado." },
];

function LoveLetter() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <main className="relative overflow-x-hidden">
      {/* Reproductor de música (coloca tu archivo en public/musica.mp3) */}
      <audio ref={audioRef} src="/musica.mp3" loop preload="none" />
      <button
        onClick={toggleMusic}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-card/80 text-gold backdrop-blur transition-colors hover:bg-wine/60"
      >
        {playing ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
      </button>

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <GoldDust count={40} direction="up" />
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <DragonMark className="mx-auto w-56 text-gold/70 sm:w-72" />
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 font-display text-[0.7rem] tracking-[0.55em] text-gold-dim uppercase">
              Para ti, siempre
            </p>
          </Reveal>
          <Reveal delay={250}>
            <h1 className="gold-text mt-5 font-display text-5xl leading-[1.05] font-semibold sm:text-7xl">
              Mi jinete
              <span className="block">de dragón</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="mx-auto mt-7 max-w-xl font-script text-xl leading-relaxed text-bone/80 italic sm:text-2xl">
              «Preferiria perder esta guerra que vivir sin ti, y si eso signifca que tendre que demostrarte que valgo la pena una y otra vez, lo hare. Me diste tu corazon y lo conservare.»
            </p>
          </Reveal>
          <Reveal delay={550}>
            <a
              href="#historia"
              className="mt-10 inline-flex items-center gap-3 border border-gold/45 px-8 py-4 font-display text-xs tracking-[0.3em] text-gold uppercase transition-all duration-500 hover:border-gold hover:bg-wine/50 hover:tracking-[0.4em]"
            >
              <Flame className="h-4 w-4" />
              Comenzar nuestra historia
            </a>
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* ── TIMELINE ─────────────────────────── */}
      <section id="historia" className="relative px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle overline="Capítulo I" title="Nuestra historia" />
          </Reveal>

          <div className="relative mt-16 pl-10 sm:pl-0">
            <div className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent sm:left-1/2" />
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div
                  className={`relative mb-14 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-14 sm:text-right" : "sm:ml-auto sm:pl-14"
                  }`}
                >
                  <span
                    className={`absolute top-6 -left-[38px] grid h-4 w-4 place-items-center rounded-full border border-gold/60 bg-background sm:left-auto ${
                      i % 2 === 0 ? "sm:-right-[8px]" : "sm:-left-[8px]"
                    }`}
                    style={{ animation: "ember-pulse 4s ease-in-out infinite" }}
                  >
                    <Flame className="h-2.5 w-2.5 text-gold" />
                  </span>
                  <article className="ornament-frame p-7">
                    <p className="font-display text-xs tracking-[0.4em] text-gold-dim">{item.year}</p>
                    <h3 className="mt-3 font-display text-xl text-bone">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARTA ────────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionTitle overline="Capítulo II" title="Carta para ti" />
          </Reveal>
          <Reveal delay={150}>
            <div
              className="ornament-frame mt-14 px-7 py-14 sm:px-16"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 0%, oklch(0.26 0.06 20 / 60%), transparent 65%)",
              }}
            >
              <WingDivider className="mx-auto w-56 text-gold/60" />
              <div className="mt-10 space-y-6 font-script text-lg leading-[1.9] text-bone/85 sm:text-xl">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-none first-letter:text-gold">
                  Mi vida antes que llegaras estaba lleno de problemas familiares, sin ganas de estudiar, 0 amistades y una soledad inmensa, hasta que llegaste e iluminaste los dias mas oscuros que vivi.
                </p>
                <p>
                  Amo la forma como siempre le pones ganas a todas las cosas incluso si no quieres hacerlas, como eres tan valiente y respetuosa con todos, como siempre me haces sentir seguro y comodo a tu lado.
                </p>
                <p>
                  Por el momento, no creo que podamos ser pareja, pero aun asi, estar a tu lado, abrazarte y hablarte, me genera una felicidad inmensa.
                </p>
              </div>

              <div className="mt-14 flex flex-col items-center">
                <div
                  className="grid h-20 w-20 place-items-center rounded-full border border-gold/50"
                  style={{
                    background:
                      "radial-gradient(circle at 32% 28%, oklch(0.45 0.16 20), oklch(0.24 0.11 16))",
                    boxShadow: "0 12px 30px -12px oklch(0.32 0.12 16 / 90%)",
                  }}
                >
                  <Flame className="h-8 w-8 text-gold/80" />
                </div>
                <p className="mt-5 font-script text-2xl text-gold italic">Tu querido Luis</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GALERÍA ──────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionTitle overline="Capítulo III" title="Galería de momentos" />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 80}>
                <figure className="group ornament-frame relative aspect-4/5 overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_45px_-8px_var(--gold-dim)]">
                  <img
                    src={src}
                    alt={`Momento nuestro número ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "linear-gradient(to top, oklch(0.32 0.12 16 / 55%), transparent 60%)" }} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RAZONES ──────────────────────────── */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionTitle overline="Capítulo IV" title="Por qué eres mi hogar" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <article className="ornament-frame h-full p-8 transition-colors duration-500 hover:border-gold/50">
                  <r.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 font-display text-lg text-bone">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIERRE ───────────────────────────── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28 text-center">
        <GoldDust count={45} direction="down" />
        <div className="relative z-10 max-w-2xl">
          <Reveal>
            <WingDivider className="mx-auto w-64 text-gold/50" />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="gold-text mt-10 font-display text-4xl leading-tight font-semibold sm:text-6xl">
              Donde tú estés, ahí está mi hogar
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-xl font-script text-xl text-bone/75 italic">
              «Preferiria perder esta guerra que vivir sin ti, y si eso signifca que tendre que demostrarte que valgo la pena una y otra vez, lo hare. Me diste tu corazon y lo conservare.»
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mx-auto mt-12 w-40 gold-rule" />
            <p className="mt-6 font-script text-2xl text-gold">Tu querido Luis</p>
            <p className="mt-1 font-display text-[0.65rem] tracking-[0.45em] text-muted-foreground uppercase">
              11 · Agosto · 2026
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ overline, title }: { overline: string; title: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-[0.65rem] tracking-[0.5em] text-gold-dim uppercase">{overline}</p>
      <h2 className="mt-4 font-display text-3xl text-bone sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-6 w-32 gold-rule" />
    </div>
  );
}
