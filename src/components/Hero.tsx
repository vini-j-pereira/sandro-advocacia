"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-brand-navy pt-28 pb-16 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute right-[3%] bottom-[5%] select-none pointer-events-none text-[15vw] md:text-[10vw] font-serif font-black uppercase text-white/[0.02] tracking-[0.2em] leading-none z-0 hidden md:block">
        DIREITO
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Terracotta/Red Accent Line Subtitle */}
            

            {/* Title */}
            <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-serif text-white tracking-wide leading-[1.25] mb-6 uppercase">
              Assessoria <br className="hidden xl:inline" />
              Jurídica com <br className="hidden xl:inline" />
              <span className="text-brand-blue-steel font-serif">Rigor Técnico e</span> <br className="hidden xl:inline" />
              Experiência <br className="hidden xl:inline" />
              Consolidada
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-xs md:text-base lg:text-sm xl:text-base text-brand-grey-300 font-serif leading-relaxed mb-6 lg:mb-8 max-w-2xl font-light">
              Soluções jurídicas seguras, éticas e eficazes nas relações com a
              Administração Pública, aliando profundo conhecimento técnico à
              experiência prática de quem viveu a gestão pública por dentro.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#servicos"
                className="px-8 py-3.5 bg-brand-red text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-creme hover:text-brand-navy transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Nossas Áreas
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contato"
                className="px-8 py-3.5 border border-white/20 bg-transparent text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all flex items-center justify-center"
              >
                Fale Conosco
              </a>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                <ul>
                  <li className="text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                    • Direito Administrativo
                  </li>
                  <li className="text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                    • Licitações
                  </li>
                  <li className="text-brand-red text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
                    • Contratos Administrativo
                  </li>
                </ul>
              </span>
            </div>
          </div>

          {/* Right Column: Unique Stats Layout */}
          <div className="lg:col-span-4 flex flex-col gap-12 items-start lg:items-end justify-center lg:text-right mt-8 lg:mt-0 lg:pr-8 relative">
            
            {/* Metric 1: 35+ Anos */}
            <div className="flex items-center gap-4 flex-row lg:flex-row-reverse">
              <div className="w-[2px] h-14 bg-brand-red flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-5xl md:text-6xl font-serif font-bold text-white leading-none">
                  35+
                </span>
                <span className="text-xs md:text-sm text-brand-grey-400 font-serif italic tracking-wide mt-1">
                  anos de experiência
                </span>
              </div>
            </div>

            {/* Metric 2: OAB/SC */}
            <div className="flex items-center gap-4 flex-row lg:flex-row-reverse">
              <div className="w-[2px] h-14 bg-brand-red flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white leading-none tracking-wide">
                  OAB/SC
                </span>
                <span className="text-xs md:text-sm text-brand-grey-400 font-sans tracking-[0.2em] mt-1 leading-none">
                  16.175
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
