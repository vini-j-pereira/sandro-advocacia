import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVisionFocus from "@/components/MissionVisionFocus";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-navy text-white overflow-x-hidden antialiased">
      {/* Header / Nav */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Sócio Fundador (About) */}
        <About />

        {/* Missão, Visão e Atuação */}
        <MissionVisionFocus />

        {/* Áreas de Atuação (Services) */}
        <Services />

        {/* Nossos Valores (Values) */}
        <Values />

        {/* Fale Conosco (Contact) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

