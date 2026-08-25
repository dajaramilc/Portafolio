import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diegojaramillo.netlify.app"),
  title: "Diego Jaramillo — Backend Developer & AI Integration Specialist",
  description:
    "Backend Developer specialized in Python, FastAPI, and AI integrations. Available for freelance projects. WhatsApp chatbots, REST APIs, OpenAI/Claude integrations.",
  keywords: [
    "backend developer",
    "python developer",
    "fastapi",
    "ai chatbot",
    "openai integration",
    "claude api",
    "freelance developer",
    "whatsapp bot",
    "web scraping",
    "automation",
    "colombia",
    "medellín",
  ],
  authors: [{ name: "Diego Jaramillo" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Diego Jaramillo — Backend Developer & AI Integration Specialist",
    description:
      "Backend Developer specialized in Python, FastAPI, and AI integrations. Available for freelance.",
    siteName: "Diego Jaramillo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Jaramillo — Backend Developer & AI Integration Specialist",
    description:
      "Backend Developer specialized in Python, FastAPI, and AI integrations. Available for freelance.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
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
