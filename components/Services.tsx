"use client";

import Section from "@/components/Section";
import { SPECTRUM } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

export default function Services() {
  const { t } = useLang();

  return (
    <Section id="services" heading={t.services.heading} lead={t.services.lead}>
      <ul>
        {t.services.items.map((item, i) => {
          /* Color solo si el servicio es una etapa de la leyenda. */
          const w = item.wavelength ? SPECTRUM[item.wavelength] : null;
          return (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-x-10 gap-y-2 py-6 sm:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)",
              }}
            >
              <h3 className="flex items-start gap-3 text-[1rem] font-semibold leading-snug">
                <span
                  aria-hidden
                  className="mt-[0.45em] h-[7px] w-[7px] shrink-0 rounded-full"
                  style={
                    w
                      ? { background: w, boxShadow: `0 0 0 3px ${w}1f` }
                      : {
                          background: "var(--ink-mute)",
                          boxShadow: "0 0 0 3px rgba(154,168,196,0.12)",
                        }
                  }
                />
                {item.title}
              </h3>
              <p
                className="max-w-[64ch] text-[0.92rem] leading-[1.65] sm:pt-px"
                style={{ color: "var(--ink-soft)" }}
              >
                {item.body}
              </p>
            </li>
          );
        })}
      </ul>

      <a
        href="#contact"
        className="mt-10 inline-block rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-white/[0.06]"
        style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
      >
        {t.services.cta}
      </a>
    </Section>
  );
}
