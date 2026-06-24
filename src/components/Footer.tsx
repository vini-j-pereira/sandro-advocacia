"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-12 relative z-10 font-serif">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side: Brand Signature */}
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Sandro Ricardo Fernandes
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-blue-steel mt-1 font-semibold">
            Sociedade de Advocacia
          </span>
        </div>

        {/* Right Side: Professional Details */}
        <div className="text-xs text-white/70 tracking-wider">
          OAB/SC 16.175 — © 2026 — Florianópolis, SC
        </div>
      </div>
    </footer>
  );
}
