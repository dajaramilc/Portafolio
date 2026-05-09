"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import ParticleField from "@/components/ParticleField";

const techBadges = [
  "Python", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "OpenAI", "Claude API",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#050d1a" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Floating particles */}
      <ParticleField />

      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 60%, #050d1a)" }}
      />

      {/* Ambient glows */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          top: "20%", left: "10%",
          width: 480, height: 480,
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          bottom: "20%", right: "10%",
          width: 360, height: 360,
          background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── Left ── */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Availability badge */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border"
              style={{
                color: "#22d3ee",
                borderColor: "rgba(34,211,238,0.22)",
                backgroundColor: "rgba(34,211,238,0.05)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for freelance
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.04] mb-4"
          >
            Hi, I&apos;m Diego
          </motion.h1>

          {/* H2 */}
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl font-semibold mb-5"
            style={{ color: "#22d3ee" }}
          >
            Backend Developer &amp; AI Integration Specialist
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            style={{ color: "#94a3b8" }}
          >
            I help businesses automate processes, build intelligent chatbots, and
            develop scalable APIs with Python and AI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-9"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110"
              style={{
                backgroundColor: "#22d3ee",
                color: "#050d1a",
                boxShadow: "0 0 24px rgba(34,211,238,0.22)",
              }}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold text-sm text-white border transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              View Projects
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full border cursor-default
                           transition-all duration-200
                           hover:border-cyan-400/30 hover:text-cyan-400"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "#475569",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative rings */}
            <div
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: "rgba(34,211,238,0.1)", transform: "scale(1.12)" }}
            />
            <div
              className="absolute inset-0 rounded-full border"
              style={{ borderColor: "rgba(167,139,250,0.07)", transform: "scale(1.26)" }}
            />

            {/* Circle */}
            <div
              className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 flex items-center justify-center"
              style={{
                borderColor: "rgba(255,255,255,0.07)",
                background: "linear-gradient(145deg, #0a1628 0%, #0d1f3c 100%)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Diego Jaramillo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ color: "#1e3a5f" }}
      >
        <span className="text-xs tracking-[0.22em] uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </div>
    </section>
  );
}
