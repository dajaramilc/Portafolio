import type { Metadata } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* Archivo lleva rótulo y cuerpo; el eje de ancho da los rótulos grabados
   del instrumento sin recurrir a versalitas. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
});

/* Martian Mono solo para valores medidos: cifras, dimensiones, conteos. */
const martianMono = Martian_Mono({
  variable: "--font-martian",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diegojaramillo.netlify.app"),
  title: "Diego Jaramillo — AI systems in production",
  description:
    "CTO at IKONICO. I build AI assistants, backends, and integrations that stay running in production: WhatsApp Cloud API, RAG over pgvector, NestJS and FastAPI. Medellín, Colombia.",
  keywords: [
    "desarrollador backend",
    "asistentes de IA",
    "WhatsApp Cloud API",
    "RAG",
    "pgvector",
    "NestJS",
    "FastAPI",
    "MCP",
    "Claude",
    "machine learning",
    "Medellín",
    "Colombia",
    "backend developer",
    "AI integration",
  ],
  authors: [{ name: "Diego Jaramillo" }],
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_CO",
    title: "Diego Jaramillo — AI systems in production",
    description:
      "CTO at IKONICO. AI assistants, backends, and integrations that stay running in production.",
    siteName: "Diego Jaramillo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Jaramillo — AI systems in production",
    description:
      "CTO at IKONICO. AI assistants, backends, and integrations that stay running in production.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${martianMono.variable}`}>
      <body>
        {children}
        {/* Asistente de IKONICO AI. El widget crea su propio iframe flotante;
            el dominio de esta pagina viaja como dato al backend, que solo
            responde si esta en la lista autorizada de la organizacion.
            El id va como data-org-id: es lo que lee widget.js. */}
        <Script
          id="ikonico-chat-script"
          src="https://ikonico-ai.pages.dev/widget.js"
          data-org-id="56bf664d-c180-4462-a530-837973e0a1a5"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
