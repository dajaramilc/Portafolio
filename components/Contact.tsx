"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import Section from "@/components/Section";
import { SPECTRUM } from "@/lib/content";
import { useLang } from "@/components/LanguageProvider";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    /* Que el correo diga en qué idioma escribió la persona, para contestarle
       en el mismo. */
    data.set("from_language", lang);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(`Web3Forms respondió ${res.status}`);
      formRef.current?.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const c = t.contact;

  return (
    <Section id="contact" heading={c.heading} lead={c.lead} raised>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-16">
        {/* Canales */}
        <dl className="self-start">
          {c.channels.map((channel, i) => (
            <div
              key={channel.label}
              className="py-3"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)",
              }}
            >
              <dt
                className="engraved text-[0.76rem]"
                style={{ color: "var(--ink-mute)" }}
              >
                {channel.label}
              </dt>
              <dd className="mt-0.5 text-[0.88rem] break-words">
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="underline decoration-[var(--rule)] underline-offset-[5px] transition-colors hover:decoration-[var(--ink-soft)]"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <span style={{ color: "var(--ink-soft)" }}>
                    {channel.value}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        {/* Formulario */}
        <div>
          {status === "sent" ? (
            <div
              className="glass flex min-h-[18rem] flex-col items-center justify-center px-8 py-12 text-center"
              style={{ ["--w" as string]: SPECTRUM.resolve }}
            >
              <CheckCircle2
                size={30}
                style={{ color: SPECTRUM.resolve }}
                aria-hidden
              />
              <h3 className="mt-4 text-[1.1rem] font-semibold">
                {c.sentHeading}
              </h3>
              <p
                className="mt-1.5 text-[0.9rem]"
                style={{ color: "var(--ink-soft)" }}
              >
                {c.sentBody}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value="95caa18e-0422-4dcf-8721-0acd01a7c0eb"
              />
              <input
                type="hidden"
                name="subject"
                value="Nuevo contacto desde el portafolio"
              />
              {/* Trampa de bots de Web3Forms: invisible y fuera del tabulador. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span
                    className="engraved mb-1.5 block text-[0.78rem]"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {c.nameLabel}
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={c.namePlaceholder}
                    disabled={status === "sending"}
                    className="field-input"
                  />
                </label>

                <label className="block">
                  <span
                    className="engraved mb-1.5 block text-[0.78rem]"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {c.emailLabel}
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={c.emailPlaceholder}
                    disabled={status === "sending"}
                    className="field-input"
                  />
                </label>
              </div>

              <label className="block">
                <span
                  className="engraved mb-1.5 block text-[0.78rem]"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {c.typeLabel}
                </span>
                <select
                  name="project_type"
                  required
                  defaultValue=""
                  disabled={status === "sending"}
                  className="field-input cursor-pointer"
                >
                  <option value="" disabled>
                    {c.typePlaceholder}
                  </option>
                  {c.types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span
                  className="engraved mb-1.5 block text-[0.78rem]"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {c.messageLabel}
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={c.messagePlaceholder}
                  disabled={status === "sending"}
                  className="field-input resize-y"
                />
              </label>

              {status === "error" ? (
                <div
                  role="alert"
                  className="flex gap-3 rounded-xl px-4 py-3"
                  style={{
                    border: "1px solid rgba(238,242,251,0.28)",
                    background: "rgba(238,242,251,0.05)",
                  }}
                >
                  <AlertTriangle
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--ink)" }}
                    aria-hidden
                  />
                  <div>
                    <p className="text-[0.85rem] font-semibold">
                      {c.errorHeading}
                    </p>
                    <p
                      className="mt-0.5 text-[0.82rem] leading-relaxed"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {c.errorBody}
                    </p>
                  </div>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="cta-light w-full rounded-full py-3.5 text-sm font-semibold"
              >
                {status === "sending"
                  ? c.sending
                  : status === "error"
                    ? c.retry
                    : c.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
