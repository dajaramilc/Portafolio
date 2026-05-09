"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    color: "#22d3ee",
    description:
      "WhatsApp, Telegram, or web chatbots powered by OpenAI or Claude. Custom-trained for your business with memory, integrations, and multilingual support.",
  },
  {
    icon: Code2,
    title: "REST APIs & Backend",
    color: "#a78bfa",
    description:
      "Production-ready APIs with FastAPI or Flask. Authentication, database design, file handling, third-party integrations. Clean, documented, scalable.",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    color: "#34d399",
    description:
      "OpenAI, Claude, Gemini, vector embeddings, semantic search, RAG systems. I help you add intelligence to your existing product.",
  },
  {
    icon: Zap,
    title: "Automation & Scraping",
    color: "#fb923c",
    description:
      "Custom Python scripts to scrape data, automate workflows, integrate APIs, or migrate data between systems. Save hours of manual work.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6" style={{ backgroundColor: "#081222" }}>
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
            04 / Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What I Can Build For You</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, color, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#050d1a", borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}28`;
                e.currentTarget.style.boxShadow = `0 12px 36px ${color}0a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${color}12` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
                {description}
              </p>
              <a
                href="#contact"
                className="text-sm font-semibold transition-opacity duration-200 hover:opacity-70"
                style={{ color }}
              >
                Let&apos;s talk →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
