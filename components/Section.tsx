/* Toda sección cuelga del mismo riel vertical. Es la regla del banco:
   un solo eje gobierna el borde izquierdo de la página completa. */

export default function Section({
  id,
  heading,
  lead,
  children,
  raised = false,
}: {
  id: string;
  heading: string;
  lead?: string;
  children: React.ReactNode;
  /** Las secciones alzadas van sobre la placa, no sobre la mesa. */
  raised?: boolean;
}) {
  return (
    <section
      id={id}
      className="relative px-5 py-16 sm:px-8 sm:py-20"
      style={raised ? { backgroundColor: "var(--bench-deep)" } : undefined}
    >
      <div className="mx-auto max-w-[78rem]">
        <div className="rail pl-6 sm:pl-9">
          <header className="relative mb-10 sm:mb-12">
            {/* Estación: la muesca donde el riel toca el título. */}
            <span
              aria-hidden
              className="absolute top-[0.8rem] -left-6 h-[7px] w-[7px] -translate-x-1/2 rounded-full sm:top-[1rem] sm:-left-9"
              style={{
                background: "var(--ink-soft)",
                boxShadow: `0 0 0 3px ${raised ? "var(--bench-deep)" : "var(--bench)"}, 0 0 0 4px var(--rule)`,
              }}
            />
            <h2 className="text-[1.75rem] font-semibold tracking-[-0.025em] sm:text-[2.15rem]">
              {heading}
            </h2>
            {lead ? (
              <p
                className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                {lead}
              </p>
            ) : null}
          </header>
          {children}
        </div>
      </div>
    </section>
  );
}
