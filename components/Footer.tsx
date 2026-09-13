"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SPECTRUM, WAVELENGTH_ORDER } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

const LINKS = [
  {
    icon: Github,
    href: "https://github.com/dajaramilc",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/diegojaramilloo/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:diegojaramillocalderon@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-5 sm:px-8">
      {/* El espectro cierra la página: el haz se acaba aquí. */}
      <div
        className="mx-auto h-px max-w-[78rem]"
        style={{
          background: `linear-gradient(to right, ${WAVELENGTH_ORDER.map(
            (w) => `${SPECTRUM[w]}55`,
          ).join(", ")})`,
        }}
      />
      <div className="mx-auto flex max-w-[78rem] flex-col items-center justify-between gap-5 py-9 sm:flex-row">
        <p className="text-[0.75rem]" style={{ color: "var(--ink-mute)" }}>
          {t.footer.built} · © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          {LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-200 hover:!text-[var(--ink)]"
              style={{ color: "var(--ink-mute)" }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="text-[0.75rem] transition-colors duration-200 hover:text-[var(--ink-soft)]"
          style={{ color: "var(--ink-mute)" }}
        >
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
