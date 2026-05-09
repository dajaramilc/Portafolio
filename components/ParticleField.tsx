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

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function ParticleField() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 38 }, (_, i) => {
      const r = (offset: number) => seededRandom(i * 7 + offset);
      const colorRoll = r(0);
      const color =
        colorRoll < 0.15
          ? "rgba(34,211,238,0.35)"
          : colorRoll < 0.25
          ? "rgba(167,139,250,0.25)"
          : "rgba(148,163,184,0.12)";

      return {
        id: i,
        x: r(1) * 100,
        y: r(2) * 100,
        size: 1 + r(3) * 2.5,
        color,
        duration: 8 + r(4) * 14,
        delay: r(5) * -20,
        xDrift: (r(6) - 0.5) * 30,
        yRange: 20 + r(7) * 40,
      };
    });
  }, []);

  return (
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
          }}
          animate={{
            y: [-p.yRange / 2, p.yRange / 2, -p.yRange / 2],
            x: [-p.xDrift / 2, p.xDrift / 2, -p.xDrift / 2],
            opacity: [0.4, 1, 0.4],
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
  );
}
