"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const whatsappNumber = "5548991161606";
      const text = `Olá Dr. Sandro Ricardo Fernandes, meu nome é ${formData.nome} da empresa ${formData.empresa}. Tenho interesse na assessoria de licitações. Contato: ${formData.whatsapp}. Detalhes: ${formData.mensagem}`;
      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      
      window.open(url, "_blank");
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-brand-red text-white border-b border-white/5 relative z-10 font-serif">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs text-brand-creme font-bold uppercase tracking-[0.2em] mb-2 block font-sans">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight mb-6 uppercase">
              Entre em Contato
            </h2>
            <div className="h-[1.5px] w-12 bg-brand-creme mb-6" />
            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8 max-w-lg font-serif font-light">
              Nossa equipe está à disposição para compreender a sua necessidade e apresentar as melhores alternativas jurídicas disponíveis.
            </p>

            <div className="space-y-4">
              {/* Phone item */}
              <a
                href="https://wa.me/5548991161606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded bg-brand-navy border border-white/5 hover:border-brand-creme/50 hover:bg-brand-navy/80 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded bg-brand-red flex items-center justify-center text-brand-creme border border-white/5">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-creme/75 uppercase font-semibold tracking-wider font-sans">
                    Telefone & WhatsApp
                  </p>
                  <p className="text-white font-bold text-sm md:text-base font-serif">
                    (48) 99116-1606
                  </p>
                </div>
              </a>

              {/* Email item */}
              <a
                href="mailto:sandroricardofernandes@gmail.com"
                className="flex items-center gap-4 p-4 rounded bg-brand-navy border border-white/5 hover:border-brand-creme/50 hover:bg-brand-navy/80 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded bg-brand-red flex items-center justify-center text-brand-creme border border-white/5">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-creme/75 uppercase font-semibold tracking-wider font-sans">
                    E-mail
                  </p>
                  <p className="text-white font-bold text-sm md:text-base font-serif">
                    sandroricardofernandes@gmail.com
                  </p>
                </div>
              </a>

              {/* Address item */}
              <div className="flex items-center gap-4 p-4 rounded bg-brand-navy border border-white/5 group">
                <div className="w-10 h-10 rounded bg-brand-red flex items-center justify-center text-brand-creme border border-white/5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-creme/75 uppercase font-semibold tracking-wider font-sans">
                    Localização
                  </p>
                  <p className="text-white font-bold text-sm md:text-base leading-snug font-serif">
                    Florianópolis — SC
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-7 bg-brand-navy border border-white/5 rounded p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-creme/30 flex items-center justify-center text-brand-creme mb-5">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-white font-bold mb-2">
                  Mensagem Redirecionada!
                </h3>
                <p className="text-xs md:text-sm text-brand-grey-300 max-w-sm mb-6 leading-relaxed font-serif">
                  Os dados foram formatados. Você foi redirecionado para o WhatsApp do Dr. Sandro Ricardo Fernandes para agilizar o seu atendimento.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded border border-white/10 bg-brand-navy text-white hover:bg-brand-navy/60 font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="nome"
                      className="text-[10px] text-brand-creme font-bold uppercase tracking-wider mb-2 font-sans"
                    >
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: João da Silva"
                      className="px-4 py-2.5 rounded border border-white/10 bg-brand-navy-950 text-white placeholder-brand-grey-600 focus:outline-none focus:border-brand-creme transition-all text-sm font-sans"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="empresa"
                      className="text-[10px] text-brand-creme font-bold uppercase tracking-wider mb-2 font-sans"
                    >
                      Nome da Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Ex: Construtora Alfa Ltda"
                      className="px-4 py-2.5 rounded border border-white/10 bg-brand-navy-950 text-white placeholder-brand-grey-600 focus:outline-none focus:border-brand-creme transition-all text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-[10px] text-brand-creme font-bold uppercase tracking-wider mb-2 font-sans"
                    >
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: joao@empresa.com"
                      className="px-4 py-2.5 rounded border border-white/10 bg-brand-navy-950 text-white placeholder-brand-grey-600 focus:outline-none focus:border-brand-creme transition-all text-sm font-sans"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="whatsapp"
                      className="text-[10px] text-brand-creme font-bold uppercase tracking-wider mb-2 font-sans"
                    >
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Ex: (48) 99116-1606"
                      className="px-4 py-2.5 rounded border border-white/10 bg-brand-navy-950 text-white placeholder-brand-grey-600 focus:outline-none focus:border-brand-creme transition-all text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label
                    htmlFor="mensagem"
                    className="text-[10px] text-brand-creme font-bold uppercase tracking-wider mb-2 font-sans"
                  >
                    Resumo da sua Demanda / Edital *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Informe o órgão público, número do edital ou restrições que gostaria de analisar..."
                    className="px-4 py-3 rounded border border-white/10 bg-brand-navy-950 text-white placeholder-brand-grey-600 focus:outline-none focus:border-brand-creme transition-all text-sm resize-none font-sans"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded bg-brand-creme text-brand-navy font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none cursor-pointer font-sans"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-brand-navy border-t-transparent animate-spin" />
                      Redirecionando para o WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
