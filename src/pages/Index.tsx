import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [lang, setLang] = useState<'en' | 'ru'>('en');

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} onLanguageChange={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Music lang={lang} />
        <Shows lang={lang} />
        <Gallery lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
