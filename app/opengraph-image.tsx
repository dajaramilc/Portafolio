import { ImageResponse } from "next/og";

export const alt = "Diego Jaramillo — Sistemas de IA en producción";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori no resuelve backdrop-filter, así que el vidrio se aproxima con
   capas planas: un canto encendido arriba y el espectro cruzando la mesa. */

const SPECTRUM = {
  inbound: "#FF4D2E",
  recall: "#FFB020",
  resolve: "#3DDC8A",
  schedule: "#37D6F0",
  handoff: "#6E7BFF",
  isolate: "#B15CFF",
};

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#05070E",
          backgroundImage:
            "radial-gradient(700px 460px at 12% 18%, rgba(255,77,46,0.20), transparent 66%), radial-gradient(760px 500px at 74% 42%, rgba(55,214,240,0.18), transparent 68%), radial-gradient(640px 460px at 96% 96%, rgba(177,92,255,0.20), transparent 68%)",
          padding: "68px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* El haz entrante, rotulado */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 120,
              height: 2,
              background: `linear-gradient(to right, transparent, ${SPECTRUM.inbound})`,
            }}
          />
          <div
            style={{
              color: SPECTRUM.inbound,
              fontSize: 20,
              letterSpacing: "0.02em",
            }}
          >
            Entra un mensaje
          </div>
          <div style={{ color: "#3A465E", fontSize: 18 }}>WhatsApp</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: "#EEF2FB",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              maxWidth: 960,
            }}
          >
            Construyo los sistemas que responden por tu negocio.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 30,
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 600, color: "#EEF2FB" }}>
              Diego Jaramillo
            </div>
            <div style={{ fontSize: 22, color: "#5F6D8A" }}>
              CTO de IKONICO · Medellín, Colombia
            </div>
          </div>
        </div>

        {/* Los tres detectores */}
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { label: "Responde", color: SPECTRUM.resolve },
            { label: "Agenda", color: SPECTRUM.schedule },
            { label: "Pasa a un humano", color: SPECTRUM.handoff },
          ].map((plate) => (
            <div
              key={plate.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 22px",
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#EEF2FB",
                fontSize: 22,
              }}
            >
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  backgroundColor: plate.color,
                }}
              />
              {plate.label}
            </div>
          ))}
        </div>

        {/* El espectro cierra la mesa */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 6,
            background: `linear-gradient(to right, ${Object.values(SPECTRUM).join(", ")})`,
          }}
        />
      </div>
    ),
    size,
  );
}
