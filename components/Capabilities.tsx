"use client";

import Section from "@/components/Section";
import { SPECTRUM } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

/* Solo lleva color el grupo que coincide con una etapa del camino del
   mensaje. El resto va con marca neutra: prestarle una longitud de onda a
   un grupo que no la significa rompe la leyenda de todo el sitio. */

export default function Capabilities() {
  const { t } = useLang();

  return (
    <Section
      id="capabilities"
      heading={t.capabilities.heading}
      lead={t.capabilities.lead}
      raised
    >
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
        {t.capabilities.groups.map((group) => {
          const w = group.wavelength ? SPECTRUM[group.wavelength] : null;
          return (
            <div
              key={group.title}
              className="station relative pl-5"
              style={w ? { ["--w" as string]: w } : undefined}
            >
              <h3
                className="engraved text-[1rem] font-semibold"
                style={{ color: w ?? "var(--ink)" }}
              >
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.9rem] leading-[1.6]"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
