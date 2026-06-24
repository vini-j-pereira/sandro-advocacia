"use client";

import React from "react";

export default function Stats() {
  const stats = [
    {
      value: "R$ 150B+",
      label: "Movimentados Anualmente",
      desc: "Em compras públicas no Brasil, gerando um mercado de grandes oportunidades corporativas.",
    },
    {
      value: "95%+",
      label: "Redução de Riscos",
      desc: "De desclassificações formais através da nossa análise rigorosa e saneamento prévio de documentos.",
    },
    {
      value: "35+ Anos",
      label: "Experiência Consolidada",
      desc: "De atuação dedicada do Dr. Sandro Ricardo Fernandes no Direito Público, Gestão Pública e Administrativo.",
    },
    {
      value: "100%",
      label: "Suporte Integrado",
      desc: "Acompanhamento integral, desde a triagem jurídica até a execução e fiscalização contratual.",
    },
  ];

  return (
    <section className="py-20 bg-brand-navy-950/40 border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded bg-brand-navy-900/40 border border-white/5 flex flex-col justify-start hover:border-brand-gold/30 hover:bg-brand-navy-900/60 transition-all duration-300 card-shadow"
            >
              {/* Stat Value */}
              <div className="text-3xl md:text-4xl font-bold font-serif text-white mb-2">
                {stat.value}
              </div>
              {/* Label */}
              <h4 className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-3">
                {stat.label}
              </h4>
              {/* Description */}
              <p className="text-xs md:text-sm text-brand-grey-300 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
