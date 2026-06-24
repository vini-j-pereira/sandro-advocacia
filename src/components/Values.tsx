"use client";

import React from "react";

export default function Values() {
  const valuesList = [
    {
      number: "01",
      title: "Ética",
      desc: "Atuar com integridade, transparência e respeito em todas as relações.",
    },
    {
      number: "02",
      title: "Excelência",
      desc: "Buscar continuamente a mais alta qualidade técnica na prestação dos serviços.",
    },
    {
      number: "03",
      title: "Compromisso",
      desc: "Dedicar-se com responsabilidade à defesa dos interesses dos clientes.",
    },
    {
      number: "04",
      title: "Segurança Jurídica",
      desc: "Oferecer orientações e soluções fundamentadas, seguras e consistentes.",
    },
    {
      number: "05",
      title: "Inovação",
      desc: "Adotar visão estratégica e atualizada para responder aos desafios jurídicos.",
    },
    {
      number: "06",
      title: "Confiança",
      desc: "Construir relacionamentos sólidos, pautados na credibilidade e na proximidade.",
    },
  ];

  return (
    <section id="valores" className="py-24 bg-brand-creme text-brand-navy border-b border-brand-navy/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-brand-red font-bold uppercase tracking-[0.2em] block mb-2 font-sans">
            Princípios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-navy font-bold leading-tight uppercase">
            Nossos Valores
          </h2>
          <div className="h-[1.5px] w-12 bg-brand-red mx-auto mt-4" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesList.map((val, index) => (
            <div
              key={index}
              className="p-8 bg-white/30 border border-brand-navy/5 rounded shadow-sm hover:bg-white/60 hover:shadow-md transition-all duration-300 flex flex-col justify-start"
            >
              {/* Number and Title Row */}
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-xl font-serif text-brand-red font-bold">
                  {val.number}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy font-sans">
                  {val.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-sm text-brand-navy/95 font-serif font-light leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
