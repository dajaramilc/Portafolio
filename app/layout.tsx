import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diego Jaramillo — Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Jaramillo — Backend Developer & AI Integration Specialist",
    description:
      "Backend Developer specialized in Python, FastAPI, and AI integrations. Available for freelance.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
