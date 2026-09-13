"use client";

import Section from "@/components/Section";
import { SPECTRUM, isMeasured } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

/* Este bloque ocupa deliberadamente mucha más área que los demás
   proyectos. El rango se codifica por área, no por tamaño de titular:
   es el trabajo más grande, así que ocupa más mesa. */

export default function CaseStudy() {
  const { t } = useLang();
  const c = t.caseStudy;

  return (
    <Section id="system" heading={c.heading} raised>
      {/* Placa de cabecera */}
      <div className="glass glass-specular px-6 py-7 sm:px-9 sm:py-9">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="text-[1.9rem] font-semibold tracking-[-0.03em] sm:text-[2.4rem]">
            {c.name}
          </h3>
          <span className="text-[0.88rem]" style={{ color: "var(--ink-soft)" }}>
            {c.role}
          </span>
        </div>
        <p
          className="mt-2 max-w-[60ch] text-[1rem] leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          {c.tagline}
        </p>
      </div>

      {/* El camino del mensaje: la trayectoria óptica, etapa por etapa.
          La línea de color a la izquierda es el haz recorriendo el sistema. */}
      <div className="mt-12">
        <h4 className="engraved text-[0.95rem] font-semibold">
          {c.pathHeading}
        </h4>

        <ol className="relative mt-6 pl-0">
          {/* El haz que baja por las seis etapas. */}
          <span
            aria-hidden
            className="absolute left-[5px] top-2 bottom-2 w-px"
            style={{
              background: `linear-gradient(180deg, ${SPECTRUM.inbound}, ${SPECTRUM.recall}, ${SPECTRUM.resolve}, ${SPECTRUM.schedule}, ${SPECTRUM.handoff}, ${SPECTRUM.isolate})`,
            }}
          />
          {c.path.map((stage) => (
            <li
              key={stage.step}
              className="relative grid grid-cols-1 gap-x-6 gap-y-1 py-4 pl-7 sm:grid-cols-[8.5rem_minmax(0,1fr)]"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[1.35rem] h-[11px] w-[11px] rounded-full"
                style={{
                  background: SPECTRUM[stage.wavelength],
                  boxShadow: `0 0 0 4px var(--bench-deep), 0 0 14px ${SPECTRUM[stage.wavelength]}`,
                }}
              />
              <span
                className="engraved text-[0.9rem] font-semibold"
                style={{ color: SPECTRUM[stage.wavelength] }}
              >
                {stage.step}
              </span>
              <span
                className="max-w-[62ch] text-[0.9rem] leading-[1.6]"
                style={{ color: "var(--ink-soft)" }}
              >
                {stage.detail}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Problema y construcción */}
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        {/* Sin color: problema y construcción no son etapas de la leyenda. */}
        {[
          { heading: c.problemHeading, body: c.problem },
          { heading: c.builtHeading, body: c.built },
        ].map((block) => (
          <div key={block.heading} className="station relative pl-5">
            <h4 className="engraved text-[0.95rem] font-semibold">
              {block.heading}
            </h4>
            <p
              className="mt-3 max-w-[58ch] text-[0.95rem] leading-[1.7]"
              style={{ color: "var(--ink-soft)" }}
            >
              {block.body}
            </p>
          </div>
        ))}
      </div>

      {/* Medidas y salvaguardas */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-12">
        <div className="glass px-5 py-5">
          <h4 className="engraved mb-4 text-[0.8rem] font-semibold">
            {c.specHeading}
          </h4>
          <dl>
            {c.spec.map((row, i) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 py-[0.4rem]"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)",
                }}
              >
                <dt
                  className="text-[0.8rem]"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {row.label}
                </dt>
                <dd
                  className={`text-right text-[var(--ink)] ${
                    isMeasured(row.value)
                      ? "measured text-[0.78rem]"
                      : "text-[0.84rem]"
                  }`}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h4
            className="engraved text-[0.95rem] font-semibold"
            style={{ color: SPECTRUM.isolate }}
          >
            {c.guardHeading}
          </h4>
          <ul className="mt-4 space-y-3">
            {c.guards.map((guard) => (
              <li
                key={guard}
                className="flex gap-3 text-[0.9rem] leading-[1.6]"
                style={{ color: "var(--ink-soft)" }}
              >
                <span
                  aria-hidden
                  className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full"
                  style={{ background: SPECTRUM.isolate }}
                />
                {guard}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </Section>
  );
}
