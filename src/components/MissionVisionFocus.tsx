"use client";

import React from "react";

export default function MissionVisionFocus() {
  const cards = [
    {
      subtitle: "Missão",
      title: "Nossa Missão",
      desc: "Prestar serviços jurídicos com elevado padrão de qualidade e excelência, pautados em pesquisa, experiência prática e compromisso com soluções seguras, éticas e eficazes.",
      borderColor: "border-t-brand-blue-steel/60",
    },
    {
      subtitle: "Visão",
      title: "Nossa Visão",
      desc: "Ser reconhecida como referência em advocacia de excelência, destacando-se pela confiança, solidez técnica e capacidade de oferecer soluções jurídicas inovadoras, éticas e eficazes.",
      borderColor: "border-t-brand-red",
    },
    {
      subtitle: "Foco",
      title: "Nossa Atuação",
      desc: "Atuação estratégica em demandas que envolvem as relações com a Administração Pública, com domínio de matérias complexas e entrega de soluções personalizadas de alto impacto. Também atuamos em Direito de Família e Sucessões, oferecendo soluções eficazes para questões patrimoniais, familiares e sucessórias.",
      borderColor: "border-t-brand-blue-steel/60",
    },
  ];

  return (
    <section className="py-24 bg-brand-navy border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-8 md:p-10 bg-brand-navy/60 border border-white/5 ${card.borderColor} border-t-2 rounded-b shadow-lg flex flex-col justify-start hover:bg-brand-navy/80 transition-all duration-300`}
            >
              <span className="text-[10px] text-brand-blue-steel font-bold uppercase tracking-[0.25em] mb-2 font-sans">
                {card.subtitle}
              </span>
              <h3 className="text-xl font-serif text-white font-bold mb-4 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm font-serif font-light text-brand-grey-300 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
