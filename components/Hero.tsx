"use client";

import { useCallback, useId, useRef } from "react";
import Image from "next/image";
import { SPECTRUM, type Wavelength } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

/* El banco óptico.

   Un mensaje entra por la izquierda, cruza el prisma y sale resuelto en
   tres longitudes de onda. Las tres cosas que salen son las tres que el
   sistema de verdad hace: contestar, agendar, entregar la conversación.

   Coordenadas: el lienzo del SVG es 1200 × 400 estirado sobre la banda,
   y las placas ocupan el 34% derecho. Por eso los rayos terminan en
   x = 780 y los centros de las tres filas caen en y = 66.7, 200 y 333.3.
   El prisma va centrado en left-34% y mide 17.8rem de ancho: a la altura
   del haz, su cara izquierda cae en x = 341 (ahí termina el haz entrante) y
   la derecha en x = 474 (ahí nacen los rayos). Esa es toda la coordinación
   entre el dibujo y el HTML. */

const BEAM_END_X = 341;
const RAY_START_X = 474;
const RAY_END_X = 780;
const RAY_TARGETS = [66.7, 200, 333.3];

/* Curva de salida de todo el movimiento del banco. */
const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

interface Outcome {
  wavelength: Wavelength;
  title: string;
  body: string;
}

/* El prisma, con la foto de Diego en el centroide: el mensaje pasa por él.
   Se dibuja dos veces (escritorio y celular), así que los ids de los
   gradientes salen de useId — con ids repetidos, url(#id) resolvería al
   primero, que puede estar dentro de un bloque oculto y no pintar. */
function Prism({ className, photo }: { className: string; photo: string }) {
  const uid = useId().replace(/:/g, "");
  const face = `prism-face-${uid}`;
  const edge = `prism-edge-${uid}`;

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: "rotate(calc(var(--refract, 0) * 5deg))",
        transition: `transform 0.5s ${EASE_OUT}`,
      }}
    >
      <svg
        viewBox="0 0 120 108"
        aria-hidden
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id={face} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
          {/* El canto dispersa: recorre el espectro completo. Es el único
              lugar donde los seis colores van juntos, porque es donde se
              separan. */}
          <linearGradient id={edge} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={SPECTRUM.inbound} />
            <stop offset="22%" stopColor={SPECTRUM.recall} />
            <stop offset="44%" stopColor={SPECTRUM.resolve} />
            <stop offset="64%" stopColor={SPECTRUM.schedule} />
            <stop offset="84%" stopColor={SPECTRUM.handoff} />
            <stop offset="100%" stopColor={SPECTRUM.isolate} />
          </linearGradient>
        </defs>
        <path
          d="M60 6 L114 100 L6 100 Z"
          fill={`url(#${face})`}
          stroke={`url(#${edge})`}
          strokeWidth="1.4"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M60 17 L104 94"
          stroke="#ffffff"
          strokeOpacity="0.15"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Centroide del triángulo sobre un lienzo de 120 × 108. */}
      <Image
        src={photo}
        alt="Diego Jaramillo"
        width={160}
        height={160}
        priority
        className="absolute left-1/2 top-[63.6%] h-[54%] w-auto -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
        style={{
          aspectRatio: "1 / 1",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.2), 0 10px 26px -12px rgba(0,0,0,0.9)",
        }}
      />
    </div>
  );
}

function Plate({
  outcome,
  index,
  drift,
}: {
  outcome: Outcome;
  index: number;
  drift: boolean;
}) {
  const w = SPECTRUM[outcome.wavelength];
  /* Dos capas a propósito: `arrive-flare` termina en `transform: none`, y
     una animación gana sobre el estilo inline. Si la deriva viviera en el
     mismo elemento, la llegada la borraría al terminar. */
  return (
    <div
      className="arrive-flare h-full"
      style={{ animationDelay: `${0.62 + index * 0.11}s` }}
    >
      <div
        className="glass glass-specular flex h-full flex-col justify-center px-4 py-3"
        style={{
          ["--w" as string]: w,
          transform: drift
            ? `translateY(calc(var(--refract, 0) * ${(index - 1) * 5}px))`
            : undefined,
          transition: drift ? `transform 0.5s ${EASE_OUT}` : undefined,
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: w, boxShadow: `0 0 10px ${w}` }}
          />
          <span className="engraved text-[0.88rem] font-semibold">
            {outcome.title}
          </span>
        </div>
        <p
          className="mt-1.5 text-[0.8rem] leading-[1.5]"
          style={{ color: "var(--ink-soft)" }}
        >
          {outcome.body}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  const bench = useRef<HTMLDivElement>(null);

  /* Refracción: el prisma gira hacia el puntero y las placas lo acompañan.
     Se escribe en una variable CSS para no re-renderizar en cada movimiento. */
  const track = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const node = bench.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const y = (event.clientY - box.top) / box.height;
    node.style.setProperty("--refract", String((y - 0.5) * 2));
    node.style.setProperty("--mx", `${event.clientX - box.left}px`);
    node.style.setProperty("--my", `${event.clientY - box.top}px`);
  }, []);

  const release = useCallback(() => {
    bench.current?.style.setProperty("--refract", "0");
  }, []);

  const outcomes = t.hero.outcomes;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-x-clip pt-24 pb-12 sm:pt-28"
    >
      {/* Campo espectral: lo que el vidrio refracta. Sin esto el vidrio
          sería una tarjeta gris con desenfoque. */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="field field-drift"
          style={{
            top: "2%",
            left: "-8%",
            width: "36rem",
            height: "32rem",
            background: `radial-gradient(circle, ${SPECTRUM.inbound}4d, transparent 66%)`,
          }}
        />
        <div
          className="field field-drift"
          style={{
            bottom: "2%",
            left: "34%",
            width: "44rem",
            height: "36rem",
            background: `radial-gradient(circle, ${SPECTRUM.schedule}42, transparent 68%)`,
            animationDelay: "-7s",
          }}
        />
        <div
          className="field field-drift"
          style={{
            bottom: "-6%",
            right: "-6%",
            width: "40rem",
            height: "34rem",
            background: `radial-gradient(circle, ${SPECTRUM.isolate}47, transparent 68%)`,
            animationDelay: "-13s",
          }}
        />
        <div
          className="field"
          style={{
            bottom: "4%",
            right: "2%",
            width: "30rem",
            height: "24rem",
            background: `radial-gradient(circle, ${SPECTRUM.handoff}3d, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--bench) 94%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[78rem] px-5 sm:px-8">
        {/* ── La afirmación ── */}
        <div className="max-w-[47rem]">
          <h1 className="arrive-lift text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-[3.2rem] lg:text-[3.6rem]">
            {t.hero.claim}
          </h1>

          {/* Placa de identificación: va debajo, que es donde van las placas
              en un equipo de laboratorio. */}
          <div
            className="arrive-lift mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="engraved text-base font-semibold">
              {t.hero.name}
            </span>
            <span
              className="text-[0.84rem]"
              style={{ color: "var(--ink-soft)" }}
            >
              {t.hero.role}
            </span>
          </div>

          <p
            className="arrive-lift mt-5 max-w-[62ch] text-[0.96rem] leading-[1.65]"
            style={{ color: "var(--ink-soft)", animationDelay: "0.18s" }}
          >
            {t.hero.intro}
          </p>

          <div
            className="arrive-lift mt-7 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.26s" }}
          >
            <a
              href="#contact"
              className="cta-light rounded-full px-6 py-3 text-sm font-semibold"
            >
              {t.hero.primary}
            </a>
            <a
              href="#system"
              className="rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-white/[0.06]"
              style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        {/* ── La mesa ── */}
        <div
          ref={bench}
          onPointerMove={track}
          onPointerLeave={release}
          className="relative mt-9 sm:h-[17rem] lg:h-[19rem]"
          style={{ ["--refract" as string]: 0 }}
        >
          {/* Dibujo del banco: desde sm. */}
          <svg
            aria-hidden
            className="absolute inset-0 hidden h-full w-full sm:block"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <filter
                id="ray-glow"
                x="-20%"
                y="-60%"
                width="140%"
                height="220%"
              >
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* En coordenadas de usuario: una línea horizontal tiene un
                  bounding box de alto cero, y un gradiente en
                  objectBoundingBox sobre eso no se pinta. */}
              <linearGradient
                id="incoming"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="200"
                x2={BEAM_END_X}
                y2="200"
              >
                <stop
                  offset="0%"
                  stopColor={SPECTRUM.inbound}
                  stopOpacity="0"
                />
                <stop
                  offset="55%"
                  stopColor={SPECTRUM.inbound}
                  stopOpacity="0.85"
                />
                <stop offset="100%" stopColor={SPECTRUM.inbound} />
              </linearGradient>
            </defs>

            {/* Haz entrante. Sin filtro: la región de un filtro también se
                calcula sobre el bounding box de alto cero y se come el trazo.
                El halo es un segundo trazo ancho y tenue. */}
            <g className="arrive-draw">
              <line
                x1="0"
                y1="200"
                x2={BEAM_END_X}
                y2="200"
                pathLength="1"
                strokeDasharray="1"
                stroke="url(#incoming)"
                strokeWidth="7"
                strokeOpacity="0.22"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1="0"
                y1="200"
                x2={BEAM_END_X}
                y2="200"
                pathLength="1"
                strokeDasharray="1"
                stroke="url(#incoming)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </g>

            {/* Rayos dispersados: uno por detector, cada uno en su color. */}
            <g
              className="arrive-flare"
              style={{ animationDelay: "0.55s" }}
              filter="url(#ray-glow)"
            >
              {outcomes.map((outcome, i) => (
                <line
                  key={outcome.wavelength}
                  x1={RAY_START_X}
                  y1="200"
                  x2={RAY_END_X}
                  y2={RAY_TARGETS[i]}
                  stroke={SPECTRUM[outcome.wavelength]}
                  strokeWidth="1.5"
                  strokeOpacity="0.9"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>

            {/* Graduación de la mesa. */}
            <g stroke="var(--rule-soft)" strokeWidth="1">
              <line
                x1="0"
                y1="388"
                x2="1200"
                y2="388"
                vectorEffect="non-scaling-stroke"
              />
              {Array.from({ length: 13 }, (_, i) => (
                <line
                  key={i}
                  x1={i * 100}
                  y1="388"
                  x2={i * 100}
                  y2={i % 5 === 0 ? 366 : 378}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>
          </svg>

          {/* Rótulo del haz entrante. */}
          <div className="absolute left-0 top-1/2 hidden -translate-y-[3.6rem] sm:block">
            <div
              className="engraved text-[0.8rem] font-semibold"
              style={{ color: SPECTRUM.inbound }}
            >
              {t.hero.beamLabel}
            </div>
            <div
              className="mt-0.5 text-[0.76rem]"
              style={{ color: "var(--ink-mute)" }}
            >
              {t.hero.beamCaption}
            </div>
          </div>

          {/* Prisma de escritorio. Tres capas: la externa posiciona, la media
              anima la llegada y el prisma mismo refracta. */}
          <div
            className="absolute left-[34%] top-1/2 hidden sm:block"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="arrive-flare" style={{ animationDelay: "0.4s" }}>
              <Prism
                photo="/profile.jpeg"
                className="h-[13rem] w-[14.45rem] lg:h-[16rem] lg:w-[17.8rem]"
              />
            </div>
          </div>

          {/* Detectores de escritorio. */}
          <div className="absolute inset-y-0 right-0 z-10 hidden w-[34%] grid-rows-3 gap-3 sm:grid">
            {outcomes.map((outcome, i) => (
              <Plate
                key={outcome.wavelength}
                outcome={outcome}
                index={i}
                drift
              />
            ))}
          </div>

          {/* Celular: los rayos no caben y se quitan, pero el prisma y la
              foto se quedan — es la única cara de Diego en la página. El
              haz baja por el eje del prisma hasta los detectores. */}
          <div className="flex flex-col sm:hidden">
            <div className="flex items-baseline gap-2">
              <span
                className="engraved text-[0.8rem] font-semibold"
                style={{ color: SPECTRUM.inbound }}
              >
                {t.hero.beamLabel}
              </span>
              <span
                className="h-px flex-1"
                style={{
                  background: `linear-gradient(to right, ${SPECTRUM.inbound}, transparent)`,
                }}
              />
              <span
                className="text-[0.76rem]"
                style={{ color: "var(--ink-mute)" }}
              >
                {t.hero.beamCaption}
              </span>
            </div>

            <div className="flex justify-center py-4">
              <div className="arrive-flare" style={{ animationDelay: "0.4s" }}>
                <Prism
                  photo="/profile.jpeg"
                  className="h-[13rem] w-[14.45rem]"
                />
              </div>
            </div>

            <div className="grid gap-2.5">
              {outcomes.map((outcome, i) => (
                <Plate
                  key={outcome.wavelength}
                  outcome={outcome}
                  index={i}
                  drift={false}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
