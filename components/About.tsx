"use client";

import Section from "@/components/Section";
import { useLang } from "@/components/LanguageProvider";

export default function About() {
  const { t } = useLang();

  return (
    <Section id="about" heading={t.about.heading}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div className="space-y-5">
          {t.about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="max-w-[68ch] text-[1rem] leading-[1.7]"
              style={{ color: i === 0 ? "var(--ink)" : "var(--ink-soft)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Valores medidos del instrumento, no tarjetas con iconos. */}
        <dl className="self-start">
          {t.about.facts.map((fact, i) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 py-3"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)",
              }}
            >
              <dt
                className="engraved shrink-0 text-[0.72rem]"
                style={{ color: "var(--ink-mute)" }}
              >
                {fact.label}
              </dt>
              <dd className="text-right text-[0.82rem] text-[var(--ink)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
