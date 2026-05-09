"use client";

import { motion } from "framer-motion";
import { Server, Brain, Database, GitBranch, Zap } from "lucide-react";

const categories = [
  {
    icon: Server,
    title: "Backend Development",
    color: "#22d3ee",
    items: ["Python (FastAPI, Flask)", "Node.js (Express)", "REST APIs design", "JWT Authentication"],
  },
  {
    icon: Brain,
    title: "AI Integrations",
    color: "#a78bfa",
    items: ["OpenAI API (GPT-4, DALL-E)", "Anthropic Claude API", "Vector embeddings (BGE, OpenAI)", "LangChain basics"],
  },
  {
    icon: Database,
    title: "Databases",
    color: "#34d399",
    items: ["PostgreSQL", "MongoDB Atlas (Vector Search)", "SQLAlchemy", "Supabase"],
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    color: "#fb923c",
    items: ["Git / GitHub", "Docker basics", "AWS S3", "Linux / Bash"],
  },
  {
    icon: Zap,
    title: "Automation",
    color: "#f472b6",
    items: ["Web scraping (Selenium, BS4)", "WhatsApp Business API", "Custom Python scripts", "Workflow automation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6" style={{ backgroundColor: "#081222" }}>
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
            02 / Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(({ icon: Icon, title, color, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border cursor-default transition-all duration-300
                         hover:-translate-y-1"
              style={{ backgroundColor: "#050d1a", borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${color}28`;
                e.currentTarget.style.boxShadow = `0 0 24px ${color}0a`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${color}12` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-3">{title}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "#64748b" }}>
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
