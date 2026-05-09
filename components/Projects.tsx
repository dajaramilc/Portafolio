"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/projectsData";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-28 px-6" style={{ backgroundColor: "#050d1a" }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase block mb-3" style={{ color: "#22d3ee" }}>
              03 / Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 text-base"
            style={{ color: "#475569" }}
          >
            Real-world applications I&apos;ve built
          </motion.p>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300"
                style={{ backgroundColor: "#081222", borderColor: "rgba(255,255,255,0.06)" }}
                onClick={() => setSelected(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.accentColor}28`;
                  e.currentTarget.style.boxShadow = `0 12px 36px ${project.accentColor}0a`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Card header gradient */}
                <div className={`h-40 bg-gradient-to-br ${project.bgGradient} relative overflow-hidden`}>
                  {/* Decorative dots */}
                  <div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-40"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <div
                    className="absolute bottom-5 left-5 w-1.5 h-1.5 rounded-full opacity-20"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full border"
                      style={{
                        color: project.accentColor,
                        borderColor: `${project.accentColor}30`,
                        backgroundColor: `${project.accentColor}10`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#64748b" }}>
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          color: "#475569",
                          border: "1px solid rgba(255,255,255,0.06)",
                          backgroundColor: "rgba(255,255,255,0.02)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="flex items-center gap-1.5 text-xs font-semibold transition-opacity duration-200 hover:opacity-75"
                    style={{ color: project.accentColor }}
                  >
                    <ExternalLink size={11} />
                    Read more
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ backgroundColor: "rgba(5,13,26,0.88)", backdropFilter: "blur(10px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl rounded-2xl border overflow-hidden overflow-y-auto max-h-[88vh]"
              style={{
                backgroundColor: "#081222",
                borderColor: `${selected.accentColor}1e`,
                boxShadow: `0 30px 70px rgba(0,0,0,0.6), 0 0 50px ${selected.accentColor}08`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className={`h-28 bg-gradient-to-br ${selected.bgGradient} relative`}>
                <span
                  className="absolute bottom-4 left-5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    color: selected.accentColor,
                    borderColor: `${selected.accentColor}30`,
                    backgroundColor: `${selected.accentColor}10`,
                  }}
                >
                  {selected.category}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full transition-colors hover:bg-white/10"
                  style={{ color: "#64748b" }}
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-7 space-y-6">
                <h3 className="text-xl font-bold text-white">{selected.title}</h3>

                {[
                  { label: "The Challenge", body: selected.challenge },
                  { label: "The Solution",  body: selected.solution  },
                ].map(({ label, body }) => (
                  <div key={label}>
                    <h4
                      className="text-xs font-mono font-semibold uppercase tracking-wider mb-2"
                      style={{ color: selected.accentColor }}
                    >
                      {label}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                      {body}
                    </p>
                  </div>
                ))}

                <div>
                  <h4
                    className="text-xs font-mono font-semibold uppercase tracking-wider mb-2"
                    style={{ color: selected.accentColor }}
                  >
                    Tech Stack
                  </h4>
                  <p className="text-sm font-mono" style={{ color: "#64748b" }}>
                    {selected.tech}
                  </p>
                </div>

                <div>
                  <h4
                    className="text-xs font-mono font-semibold uppercase tracking-wider mb-3"
                    style={{ color: selected.accentColor }}
                  >
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selected.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#94a3b8" }}>
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: selected.accentColor }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div
                  className="flex flex-wrap gap-2 pt-4 border-t"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ color: "#64748b", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
