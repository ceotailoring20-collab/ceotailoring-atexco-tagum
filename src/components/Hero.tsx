import React from 'react';
import { ArrowRight, Check, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenCalculator }) => {
  return (
    <section id="home" className="relative bg-[#0B1F3A] text-white overflow-hidden border-b-4 border-[#174F91]">
      {/* Background Graphic Overlay with High-Fidelity Facility Photography */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/src/assets/images/hero_sublimation_facility_1794019748863.jpg"
          alt="CEO Tailoring industrial sublimation facility in Tagum"
          className="w-full h-full object-cover object-center filter saturate-150 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0B1F3A]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-300 uppercase">
              <span>Tagum City & Panabo City</span>
              <span aria-hidden="true">·</span>
              <span>Davao del Norte Garment Facility</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white text-balance">
              YOUR DESIGN.<br />
              OUR PRINTING.<br />
              YOUR VISION.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              From continuous sublimation paper printing to pneumatic heat pressing and custom sportswear construction, CEO Tailoring | Atexco Tagum delivers industrial precision for tailoring shops, jersey makers, clubs, and individual clients.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#174F91] hover:bg-blue-700 rounded shadow-md hover:shadow-lg transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-100 bg-white/10 hover:bg-white/20 border border-slate-400/30 rounded backdrop-blur-sm transition-all"
              >
                <SlidersHorizontal className="w-4 h-4 text-blue-300" />
                <span>Calculate Rate</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Explore Services &darr;
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-700/50">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Dye-Fast High Density Inks
              </span>
              <span>·</span>
              <span>Customer-Supplied Fabric Welcomed</span>
              <span>·</span>
              <span>Roll-to-Roll & Panel Pressing</span>
            </div>
          </div>

          {/* Right Column: Industrial Specifications Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 border border-slate-700/70 rounded-lg p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              <div className="pb-4 mb-5 border-b border-slate-700/80">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                  Production Standards
                </div>
                <h3 className="text-xl font-bold text-white">
                  Industrial Print Specifications
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5 shrink-0 border border-blue-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Up to 72-Inch Continuous Paper Width</span>
                    <p className="text-xs text-slate-400 mt-0.5">High-speed Japanese wide-format heads capable of unbroken full-length layouts.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5 shrink-0 border border-blue-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Industrial Flatbed & Rotary Pressing</span>
                    <p className="text-xs text-slate-400 mt-0.5">Pneumatic hydraulic control for uniform temperature, pressure, and zero ink bleed.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5 shrink-0 border border-blue-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Customer Fabric Supply Welcomed</span>
                    <p className="text-xs text-slate-400 mt-0.5">Bring your preferred polyester textiles at only ₱90/piece printing and heat press.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5 shrink-0 border border-blue-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Full Custom Sportswear & Tailoring Line</span>
                    <p className="text-xs text-slate-400 mt-0.5">In-house pattern grading, sewing, rib-knit collars, and athletic uniform assembly.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-900/50 text-blue-400 mt-0.5 shrink-0 border border-blue-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">Subcontract B2B Wholesale Capacity</span>
                    <p className="text-xs text-slate-400 mt-0.5">Dedicated capacity buffering for local tailor shops facing seasonal backlogs.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                <span>Facility Desk Hotline</span>
                <a href="tel:09514556757" className="font-bold text-white hover:text-blue-300 transition-colors">
                  0951 455 6757
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
