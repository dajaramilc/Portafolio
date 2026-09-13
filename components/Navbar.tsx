"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SPECTRUM, WAVELENGTH_ORDER, type Lang } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

const SECTIONS = [
  { key: "system", href: "#system" },
  { key: "work", href: "#work" },
  { key: "capabilities", href: "#capabilities" },
  { key: "services", href: "#services" },
] as const;

/* Conmutador de idioma de dos posiciones, con detente: no es un switch
   difuso, son dos posiciones marcadas y una queda encendida. */
function LangDetent({
  lang,
  setLang,
  label,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  label: string;
}) {
  const options: Lang[] = ["es", "en"];
  return (
    <div
      role="group"
      aria-label={label}
      className="relative flex items-center rounded-full p-0.5"
      style={{
        border: "1px solid var(--rule)",
        background: "rgba(3,5,10,0.5)",
      }}
    >
      {/* Posición encendida */}
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-transform duration-300"
        style={{
          left: "2px",
          transform: lang === "en" ? "translateX(100%)" : "translateX(0)",
          background: "rgba(238,242,251,0.14)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
        }}
      />
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className="engraved relative z-10 w-10 rounded-full py-1 text-[0.74rem] font-semibold uppercase transition-colors duration-200"
          style={{
            color: lang === option ? "var(--ink)" : "var(--ink-mute)",
            letterSpacing: "0.06em",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Con el cajón abierto no se hace scroll detrás, y Escape lo cierra. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Velo permanente: el vidrio solo aparece con scroll, y sin esto el
          texto de la barra choca con lo que pasa por debajo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, var(--bench) 30%, transparent)",
          opacity: scrolled ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        /* `relative` es necesario: el velo va en position:absolute y sin
           esto pintaría por encima del contenido de la barra. */
        className={`relative transition-all duration-300 ${scrolled ? "glass glass-bar" : ""}`}
        style={{
          borderRadius: 0,
          borderBottom: scrolled ? "1px solid var(--rule-soft)" : "none",
        }}
      >
        <nav className="mx-auto flex max-w-[78rem] items-center gap-4 px-5 py-3.5 sm:px-8">
          {/* Placa de identificación del instrumento. */}
          <a
            href="#home"
            className="engraved flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <span
              aria-hidden
              className="h-4 w-[3px] rounded-full"
              style={{
                background: `linear-gradient(180deg, ${WAVELENGTH_ORDER.map(
                  (w, i) =>
                    `${SPECTRUM[w]} ${(i * 100) / 6}% ${((i + 1) * 100) / 6}%`,
                ).join(", ")})`,
              }}
            />
            Diego Jaramillo
          </a>

          <ul className="ml-auto hidden items-center gap-7 md:flex">
            {SECTIONS.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="text-[0.82rem] transition-colors duration-200 hover:text-[var(--ink)]"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2.5 md:ml-0">
            <LangDetent lang={lang} setLang={setLang} label={t.nav.langLabel} />

            <a
              href="#contact"
              className="cta-light hidden rounded-full px-4 py-2 text-[0.82rem] font-semibold sm:block"
            >
              {t.nav.cta}
            </a>

            <button
              type="button"
              className="rounded-lg p-1.5 text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={t.nav.menu}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Cajón móvil */}
      {open && (
        <div
          className="glass glass-bar md:hidden"
          style={{ borderRadius: 0, borderTop: "1px solid var(--rule-soft)" }}
        >
          <ul className="mx-auto flex max-w-[78rem] flex-col px-5 py-2">
            {[...SECTIONS, { key: "contact", href: "#contact" } as const].map(
              ({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block border-b py-3.5 text-[0.95rem] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                    style={{ borderColor: "var(--rule-soft)" }}
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
