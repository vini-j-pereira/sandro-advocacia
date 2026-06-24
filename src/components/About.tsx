"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  const tags = [
    "TCE/SC",
    "DIREITO PÚBLICO",
    "LICITAÇÕES",
    "CONTRATOS ADMINISTRATIVOS",
    "TRIBUNAL DE CONTAS",
  ];

  return (
    <section id="advogado" className="py-24 bg-brand-creme text-brand-navy border-b border-brand-navy/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded shadow-lg bg-brand-navy border border-brand-navy/10 overflow-hidden">
              <Image
                src="/sandro_fernandes_professional.png"
                alt="Sandro Ricardo Fernandes"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 300px, 340px"
                priority
              />
              
              {/* Subtle title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent text-center">
                <p className="text-white font-serif font-bold text-base tracking-wide">
                  Sandro Ricardo Fernandes
                  <span className="block text-[10px] text-brand-creme uppercase font-sans tracking-widest font-semibold mt-1">
                    Sócio Fundador
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs text-brand-red font-bold uppercase tracking-[0.2em] mb-2 block font-sans">
              Sócio Fundador
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy font-bold leading-tight mb-2 uppercase">
              Sandro Ricardo Fernandes
            </h2>
            <span className="text-sm text-brand-blue-steel font-serif tracking-wide block mb-6">
              Advogado — OAB/SC 16.175
            </span>
            <div className="h-[1.5px] w-12 bg-brand-red mb-6" />

            <div className="space-y-4 text-brand-navy font-serif font-light text-sm md:text-base leading-relaxed">
              <p>
                Advogado com mais de 35 anos de experiência, graduado em Direito
                pela Universidade Federal de Santa Catarina, com especialização em
                Direito Público (UNISUL) e em Licitações e Contratos
                Administrativos (Escola Mineira do Direito).
              </p>
              <p>
                Foi Auditor Fiscal de Controle Externo do TCE/SC, cargo em que se aposentou, tendo
                atuado como Assessor do Presidente do TCE para licitações, Secretário
                Municipal da Administração e da Receita, Controlador Geral do
                Município de Florianópolis, Diretor de Materiais e Serviços e
                Secretário Adjunto da Administração do Estado de Santa Catarina,
                além de Secretário Nacional de Políticas de Turismo.
              </p>
            </div>

            {/* Specialty Tags */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full border border-brand-blue-steel/40 text-[10px] md:text-xs font-bold text-brand-navy tracking-widest uppercase font-sans hover:bg-brand-navy hover:text-white transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
