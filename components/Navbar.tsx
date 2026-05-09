"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? { backgroundColor: "rgba(5,13,26,0.88)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }
          : { backgroundColor: "transparent" }
      }
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-base font-bold text-white tracking-tight select-none">
          <span style={{ color: "#22d3ee" }}>{"<"}</span>
          DJ
          <span style={{ color: "#22d3ee" }}>{" />"}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm transition-colors duration-200 text-slate-400 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-full border transition-all duration-200 hover:bg-cyan-400/10 font-medium"
              style={{ borderColor: "rgba(34,211,238,0.35)", color: "#22d3ee" }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 border-t"
          style={{ backgroundColor: "rgba(5,13,26,0.96)", borderColor: "rgba(255,255,255,0.05)" }}
        >
          <ul className="flex flex-col gap-5 pt-5">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-base text-slate-300 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
