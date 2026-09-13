"use client";

import Section from "@/components/Section";
import { SPECTRUM, isMeasured } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

export default function Work() {
  const { t } = useLang();

  return (
    <Section id="work" heading={t.work.heading} lead={t.work.lead}>
      <div>
        {t.work.projects.map((project, i) => {
          const w = project.wavelength ? SPECTRUM[project.wavelength] : null;
          return (
            <article
              key={project.id}
              className="grid grid-cols-1 gap-x-12 gap-y-6 py-10 lg:grid-cols-[minmax(0,1fr)_17rem]"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)",
              }}
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="engraved text-[1.3rem] font-semibold tracking-[-0.02em]">
                    {project.name}
                  </h3>
                  <span
                    className="text-[0.84rem]"
                    style={{ color: w ?? "var(--ink-soft)" }}
                  >
                    {project.kind}
                  </span>
                </div>

                <p
                  className="mt-2.5 max-w-[62ch] text-[0.95rem] leading-[1.6]"
                  style={{ color: "var(--ink)" }}
                >
                  {project.summary}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    { label: t.work.problemLabel, body: project.problem },
                    { label: t.work.builtLabel, body: project.built },
                  ].map((part) => (
                    <div key={part.label}>
                      <h4
                        className="engraved text-[0.78rem] font-semibold"
                        style={{ color: "var(--ink-mute)" }}
                      >
                        {part.label}
                      </h4>
                      <p
                        className="mt-2 text-[0.86rem] leading-[1.65]"
                        style={{ color: "var(--ink-soft)" }}
                      >
                        {part.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabla de especificación: valores medidos, no sopa de tags. */}
              <div className="self-start">
                <dl>
                  {project.spec.map((row, j) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-3 py-1.5"
                      style={{
                        borderTop:
                          j === 0 ? "none" : "1px solid var(--rule-soft)",
                      }}
                    >
                      <dt
                        className="text-[0.78rem]"
                        style={{ color: "var(--ink-mute)" }}
                      >
                        {row.label}
                      </dt>
                      <dd
                        className={`text-right text-[var(--ink)] ${
                          isMeasured(row.value)
                            ? "measured text-[0.76rem]"
                            : "text-[0.84rem]"
                        }`}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="graduated my-4" />

                <h4
                  className="engraved text-[0.78rem] font-semibold"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {t.work.stackLabel}
                </h4>
                <p
                  className="mt-1.5 text-[0.84rem] leading-[1.65]"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {project.stack.join(" · ")}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
