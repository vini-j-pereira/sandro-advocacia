"use client";

import React from "react";
import { FileSearch, ShieldAlert, FileText, Award, Scale, HelpCircle } from "lucide-react";

export default function Services() {
  const areasList = [
    "Assessoria e consultoria em licitações e contratos administrativos, com elaboração de pareceres, impugnações, recursos e representações",
    "Pareceres e recursos administrativos nas demais matérias de Direito Administrativo",
    "Ações judiciais em matéria de Direito Público, Administrativo e contencioso junto ao Poder Judiciário",
    "Defesa de administradores públicos e particulares junto ao Tribunal de Contas",
    "Consultoria preventiva e estratégica para gestores e empresas que contratam com o poder público.",
    "Direito de Família e Sucessões com consultoria e atuação judicial. Separação, divórcio, pensão alimentícia, inventário e partilha, etc",
  ];

  const getBorderClass = (idx: number) => {
    let classes = "border-b border-white/20 ";
    if (idx === 5) {
      classes = "border-b-0 ";
    }
    if (idx >= 4) {
      classes += "md:border-b-0 ";
    }
    if (idx % 2 === 0) {
      classes += "md:border-r ";
    }
    return classes;
  };

  return (
    <section id="servicos" className="py-24 bg-brand-blue-steel text-white border-b border-white/5 relative z-10">
      {/* Lex Watermark in Background */}
      <div className="absolute right-[5%] top-[10%] select-none pointer-events-none text-[15vw] font-serif font-black uppercase text-white/[0.03] tracking-[0.2em] leading-none z-0 hidden lg:block">
        LEX
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs text-white/85 font-bold uppercase tracking-[0.2em] block mb-2 font-sans">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight uppercase">
              Áreas de Atuação
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-sm md:text-base text-white/90 font-serif italic font-light leading-relaxed">
              Foco estratégico em demandas que envolvem as relações com a Administração Pública
            </p>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/20 rounded overflow-hidden bg-brand-blue-steel/10 backdrop-blur-sm">
          {areasList.map((area, index) => (
            <div
              key={index}
              className={`p-8 md:p-12 hover:bg-white/[0.03] transition-all duration-300 flex items-start gap-6 ${getBorderClass(
                index
              )}`}
            >
              {/* Number */}
              <span className="text-2xl font-serif text-white/40 flex-shrink-0 font-bold select-none leading-none mt-0.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Description */}
              <p className="text-sm md:text-base text-white font-serif font-light leading-relaxed">
                {area}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
