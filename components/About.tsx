"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Globe, Zap } from "lucide-react";

const quickFacts = [
  { icon: MapPin,          text: "Based in Medellín, Colombia (GMT-5)", color: "#22d3ee" },
  { icon: GraduationCap,   text: "Systems Engineering @ EAFIT",          color: "#a78bfa" },
  { icon: Briefcase,       text: "Available for freelance projects",      color: "#34d399" },
  { icon: Globe,           text: "English · Spanish · French",            color: "#fb923c" },
  { icon: Zap,             text: "Avg response time: under 4 hours",      color: "#22d3ee" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <span
            className="text-xs font-mono tracking-[0.2em] uppercase block mb-3"
            style={{ color: "#22d3ee" }}
          >
            01 / About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-3 space-y-5"
          >
            {[
              <>
                I&apos;m a Systems Engineering student at{" "}
                <span className="text-white font-medium">
                  Universidad EAFIT (Medellín, Colombia)
                </span>{" "}
                with a strong background in software programming from SENA. I specialize in
                building backend systems and integrating AI into real-world business solutions.
              </>,
              <>
                Over the past year, I&apos;ve built production-ready applications including a
                hybrid messaging platform, an AI-powered job search engine, and an agricultural
                auctions platform with generative AI. I&apos;ve worked directly with companies
                like{" "}
                <span className="text-white font-medium">Magneto Empleos</span> on real client
                projects.
              </>,
              <>
                My focus is delivering clean, documented, production-grade code — and being the
                kind of developer clients actually want to work with again.
              </>,
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: "#94a3b8" }}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Quick facts card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.15 } } }}
            className="lg:col-span-2"
          >
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "#081222", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p className="text-xs font-mono font-medium mb-5" style={{ color: "#22d3ee" }}>
                Quick Facts
              </p>
              <ul className="space-y-4">
                {quickFacts.map(({ icon: Icon, text, color }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon size={14} className="mt-0.5 shrink-0" style={{ color }} />
                    <span className="text-sm" style={{ color: "#94a3b8" }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
