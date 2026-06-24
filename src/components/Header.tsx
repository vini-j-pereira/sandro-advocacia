"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "O Escritório", href: "#inicio" },
    { label: "Áreas de Atuação", href: "#servicos" },
    { label: "Sócio Fundador", href: "#advogado" },
    { label: "Nossos Valores", href: "#valores" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-stretch bg-brand-creme shadow-md transition-all duration-300 border-b border-brand-navy/10 ${
        isScrolled ? "h-20" : "h-24"
      }`}
    >
      {/* Left Brand Block with diagonal cut */}
      <div
        className="bg-brand-red text-white flex items-center pl-6 pr-12 md:pl-10 md:pr-16 lg:pl-16 lg:pr-24 relative select-none transition-all duration-300"
        style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)" }}
      >
        <a href="#inicio" className="flex flex-col text-left py-2 font-serif">
          <span className="text-[13px] md:text-sm lg:text-[15px] font-bold uppercase tracking-[0.2em] leading-tight">
            Sandro
          </span>
          <span className="text-[13px] md:text-sm lg:text-[15px] font-bold uppercase tracking-[0.2em] leading-tight">
            Ricardo
          </span>
          <span className="text-[13px] md:text-sm lg:text-[15px] font-bold uppercase tracking-[0.2em] leading-tight">
            Fernandes
          </span>
          <span className="text-[7px] lg:text-[8px] font-sans font-bold uppercase tracking-[0.25em] mt-1 opacity-90 leading-none">
            Sociedade de Advocacia
          </span>
          <span className="text-[7px] lg:text-[8px] font-sans tracking-[0.1em] mt-1 opacity-75">
            OAB/SC 16.175
          </span>
        </a>
      </div>

      {/* Right Navigation / Controls */}
      <div className="flex-grow flex items-center justify-between px-6 md:px-8 lg:px-12">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-serif">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold text-brand-navy hover:text-brand-red uppercase tracking-widest transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-red font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-sm"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-brand-navy hover:text-brand-red focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-brand-creme border-b border-brand-navy/10 shadow-lg md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 font-serif">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold text-brand-navy hover:text-brand-red uppercase tracking-widest transition-colors py-2 border-b border-brand-navy/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-brand-navy text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-red transition-colors"
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
