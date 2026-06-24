"use client";

import React from "react";
import { Check } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Triagem & Análise de Viabilidade",
      desc: "Análise técnica inicial do edital. Mapeamos os requisitos de habilitação e identificamos riscos ou exigências ilegais antes de avançar.",
    },
    {
      number: "02",
      title: "Preparação da Habilitação",
      desc: "Organização e saneamento de certidões, balanços e atestados técnicos, estruturando uma pasta de documentos sem falhas.",
    },
    {
      number: "03",
      title: "Envio & Sessão Pública",
      desc: "Suporte na formulação de lances e lances de desempate nos portais eletrônicos, evitando erros operacionais críticos.",
    },
    {
      number: "04",
      title: "Fase Recursal Administrativa",
      desc: "Elaboração técnica de recursos contra concorrentes inaptos ou contrarrazões para defender e homologar sua proposta.",
    },
    {
      number: "05",
      title: "Homologação & Gestão Contratual",
      desc: "Apoio pós-certame e assessoria jurídica na execução do contrato, incluindo reajustes e defesa contra penalidades públicas.",
    },
  ];

  return (
    <section id="processo" className="py-24 bg-brand-navy-950 border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs text-brand-gold font-bold uppercase tracking-[0.2em] block mb-2">
            Fluxo de Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight">
            Como Conduzimos sua Empresa nos Editais
          </h2>
          <div className="h-[2px] w-12 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-brand-navy-900/40 border border-white/5 shadow-sm hover:border-brand-gold/50 hover:bg-brand-navy-900/60 transition-all duration-300 flex flex-col justify-between card-shadow"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-serif text-brand-gold">
                    {step.number}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-brand-navy-950 flex items-center justify-center text-brand-gold border border-white/5">
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white font-serif mb-3 leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-brand-grey-300 leading-relaxed mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
