"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  xDrift: number;
  yRange: number;
}

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function ParticleField() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const r = (o: number) => sr(i * 7 + o);
      const roll = r(0);
      const color =
        roll < 0.2
          ? "rgba(34,211,238,0.6)"
          : roll < 0.38
          ? "rgba(167,139,250,0.5)"
          : roll < 0.5
          ? "rgba(52,211,153,0.45)"
          : "rgba(148,163,184,0.2)";

      return {
        id: i,
        x: r(1) * 100,
        y: r(2) * 100,
        size: 1.5 + r(3) * 3.5,
        color,
        duration: 7 + r(4) * 12,
        delay: r(5) * -25,
        xDrift: (r(6) - 0.5) * 50,
        yRange: 30 + r(7) * 60,
      };
    });
  }, []);

  return (
    <>
      {/* ── Animated gradient blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 — cyan */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: "-10%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 120, 40, 0],
            y: [0, 80, 160, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Blob 2 — violet */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            bottom: "-15%",
            right: "-5%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.11) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, -100, -40, 0],
            y: [0, -60, -140, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: -8 }}
        />

        {/* Blob 3 — emerald */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            top: "40%",
            left: "40%",
            background:
              "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: -15 }}
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow:
                p.color.includes("34,211,238") || p.color.includes("167,139,250")
                  ? `0 0 ${p.size * 3}px ${p.color}`
                  : "none",
            }}
            animate={{
              y: [-p.yRange / 2, p.yRange / 2, -p.yRange / 2],
              x: [-p.xDrift / 2, p.xDrift / 2, -p.xDrift / 2],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
}
