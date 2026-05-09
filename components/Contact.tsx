"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, MapPin, CheckCircle } from "lucide-react";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "diegojaramillocalderon@gmail.com",
    href: "mailto:diegojaramillocalderon@gmail.com",
    color: "#22d3ee",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/diegojaramilloo",
    href: "https://www.linkedin.com/in/diegojaramilloo/",
    color: "#0ea5e9",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/dajaramilc",
    href: "https://github.com/dajaramilc",
    color: "#a78bfa",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+57 302-707-1405",
    href: "tel:+573027071405",
    color: "#34d399",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Medellín, Colombia (GMT-5)",
    href: null,
    color: "#fb923c",
  },
];

const inputBase = {
  backgroundColor: "#081222",
  borderColor: "rgba(255,255,255,0.08)",
  color: "#f1f5f9",
} as const;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);

    // Get your FREE access key at https://web3forms.com and replace the value below
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setSent(true);
      formRef.current?.reset();
    }
    setSending(false);
  }

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(34,211,238,0.06)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono tracking-[0.2em] uppercase block mb-3" style={{ color: "#22d3ee" }}>
            05 / Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-2 text-base" style={{ color: "#475569" }}>
            Have a project in mind? I respond within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {info.map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs font-mono mb-0.5" style={{ color: "#334155" }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:opacity-70 transition-opacity"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-white">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div
                className="h-full min-h-64 flex flex-col items-center justify-center rounded-2xl border p-10 text-center"
                style={{ backgroundColor: "#081222", borderColor: "rgba(34,211,238,0.15)" }}
              >
                <CheckCircle size={32} className="mb-3" style={{ color: "#22d3ee" }} />
                <h3 className="text-lg font-bold text-white mb-1">Message sent!</h3>
                <p className="text-sm" style={{ color: "#64748b" }}>
                  I&apos;ll get back to you within a few hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Replace YOUR_WEB3FORMS_KEY with your key from https://web3forms.com */}
                <input type="hidden" name="access_key" value="95caa18e-0422-4dcf-8721-0acd01a7c0eb" />
                <input type="hidden" name="subject" value="New contact from Portfolio" />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name",  label: "Name",  type: "text",  placeholder: "Your name"       },
                    { name: "email", label: "Email", type: "email", placeholder: "your@email.com"  },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-mono mb-1.5" style={{ color: "#334155" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        required
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200
                                   placeholder:text-slate-700"
                        style={inputBase}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1.5" style={{ color: "#334155" }}>
                    Project Type
                  </label>
                  <select
                    name="project_type"
                    required
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 cursor-pointer"
                    style={inputBase}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  >
                    <option value="" style={{ backgroundColor: "#081222" }}>Select a type…</option>
                    {["AI Chatbot", "API / Backend", "Automation", "Other"].map((v) => (
                      <option key={v} value={v} style={{ backgroundColor: "#081222" }}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1.5" style={{ color: "#334155" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all duration-200
                               placeholder:text-slate-700"
                    style={inputBase}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200
                             hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: "#22d3ee",
                    color: "#050d1a",
                    boxShadow: "0 0 24px rgba(34,211,238,0.2)",
                  }}
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
