import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ backgroundColor: "#081222", borderColor: "rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-xs text-center sm:text-left text-slate-700">
          Built with Next.js + Tailwind CSS · Designed &amp; developed by Diego Jaramillo · © 2026
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/dajaramilc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 hover:text-white transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/diegojaramilloo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:diegojaramillocalderon@gmail.com"
            aria-label="Email"
            className="text-slate-600 hover:text-white transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#"
          className="text-xs font-mono text-slate-700 hover:text-cyan-400 transition-colors duration-200 hidden sm:block"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
