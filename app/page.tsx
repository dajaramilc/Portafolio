import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudy />
        <Work />
        <Capabilities />
        <Services />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
