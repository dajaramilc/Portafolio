import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Diego Jaramillo — Backend Developer & AI Integration Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050d1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: 100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, zIndex: 1 }}>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              color: "#22d3ee",
              letterSpacing: "0.05em",
              marginBottom: 48,
              fontFamily: "monospace",
            }}
          >
            {"<DJ />"}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.05,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Diego Jaramillo
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#22d3ee",
              marginBottom: 40,
            }}
          >
            Backend Developer &amp; AI Integration Specialist
          </div>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 2,
              background: "rgba(34,211,238,0.4)",
              marginBottom: 40,
            }}
          />

          {/* Tech badges */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Python", "FastAPI", "OpenAI", "Claude API", "PostgreSQL", "Node.js"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 999,
                    fontSize: 15,
                    color: "#64748b",
                    fontFamily: "monospace",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            fontSize: 16,
            color: "#1e3a5f",
            fontFamily: "monospace",
          }}
        >
          diegojaramillo.netlify.app
        </div>

        {/* Right monogram */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 220,
            fontWeight: 900,
            color: "rgba(14,30,55,0.8)",
            lineHeight: 1,
            fontFamily: "monospace",
            letterSpacing: "-0.05em",
          }}
        >
          DJ
        </div>
      </div>
    ),
    size
  );
}
