import React from 'react';
import { Phone, Check, Building2, Handshake, ArrowRight } from 'lucide-react';
import { B2B_BENEFITS, BUSINESS_INFO } from '../data/content';

interface B2BPartnershipProps {
  onOpenQuote: () => void;
}

export const B2BPartnership: React.FC<B2BPartnershipProps> = ({ onOpenQuote }) => {
  return (
    <section id="partnership" className="py-20 lg:py-28 bg-[#0B1F3A] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
              <Building2 className="w-4 h-4" />
              <span>B2B Subcontracting & Wholesale Supply</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Looking for a Reliable Printing Partner in Davao?
            </h2>

            <div className="w-16 h-1 bg-[#174F91] rounded-full" />

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Are you running a tailoring shop, jersey-making business, or garment production company in Tagum City, Panabo City, Davao City, or surrounding municipalities?
              </p>
              <p>
                Let us handle your large-format sublimation roll printing and heavy-duty heat pressing while you focus on sewing, garment finishing, and servicing your clients.
              </p>
              <p>
                CEO Tailoring | Atexco Tagum welcomes business partnerships, long-term subcontract agreements, and wholesale volume orders. Avoid expensive machine breakdowns, maintenance costs, and peak-season bottlenecks.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#174F91] hover:bg-blue-600 rounded shadow-md transition-all"
              >
                <span>Discuss a Subcontract Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/10 hover:bg-white/20 border border-slate-600 rounded transition-all"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call B2B Hotline</span>
              </a>
            </div>
          </div>

          {/* Right Column: Benefits Checklist & Direct Desk */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-700 rounded-lg p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                <Handshake className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Partner Benefits</h3>
              </div>

              <ul className="space-y-4 mb-8">
                {B2B_BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded bg-blue-900/60 text-blue-300 shrink-0 mt-0.5 border border-blue-500/20">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-md bg-blue-950/60 border border-blue-800/60 text-center">
                <div className="text-xs text-slate-300 font-medium mb-1">
                  Dedicated Wholesale Desk:
                </div>
                <a
                  href="tel:09514556757"
                  className="text-lg font-extrabold text-white hover:text-blue-300 transition-colors tabular-nums tracking-wide"
                >
                  0951 455 6757
                </a>
                <div className="text-[11px] text-blue-300 mt-1">
                  Speak directly with our Production Manager
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
