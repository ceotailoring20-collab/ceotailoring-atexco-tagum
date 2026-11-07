import React from 'react';
import { CheckCircle2, Factory, Sparkles, Users } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Industrial Experience Stamp */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3]">
              <img
                src="/src/assets/images/about_garment_workshop_1794019748896.jpg"
                alt="CEO Tailoring production facility with cutting tables and sewing stations in Tagum"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg pointer-events-none" />
            </div>

            {/* Regional Hub Floating Stamp */}
            <div className="absolute -bottom-6 right-4 sm:-right-4 bg-[#0B1F3A] text-white p-5 rounded-lg border-2 border-[#174F91] shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Davao Region Production
              </div>
              <div className="text-xl sm:text-2xl font-black mt-0.5">
                Tagum & Panabo
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Full-Service In-House Capacity
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative & Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#174F91]">
              <span>Established Garment Production</span>
              <span aria-hidden="true">·</span>
              <span>Davao del Norte</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight leading-tight">
              About CEO Tailoring · Atexco Tagum
            </h2>

            <div className="w-16 h-1 bg-[#174F91] rounded-full" />

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                CEO Tailoring | Atexco Tagum provides sublimation printing, heat press, and tailoring services for customers and businesses looking for reliable printing and garment solutions.
              </p>
              <p>
                We work directly with individual customers, sportswear brands, tailoring shops, sports leagues, and garment businesses. We actively welcome business partnerships with shops that need an additional, dependable printing supplier for their production volume.
              </p>
              <p>
                Our core mission is to provide consistent, vibrant industrial printing and build long-term working relationships with our customers and subcontracting partners across Mindanao.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 mb-2 text-[#0B1F3A] font-bold text-base">
                  <Factory className="w-5 h-5 text-[#174F91]" />
                  <h4>Industrial Precision</h4>
                </div>
                <p className="text-sm text-slate-600 leading-normal">
                  High-DPI color fidelity and deep heat penetration engineered to endure rigorous athletic use and heavy washing.
                </p>
              </div>

              <div className="p-4 rounded-md bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2.5 mb-2 text-[#0B1F3A] font-bold text-base">
                  <Users className="w-5 h-5 text-[#174F91]" />
                  <h4>B2B Subcontracting</h4>
                </div>
                <p className="text-sm text-slate-600 leading-normal">
                  Flexible capacity support for local tailor shops and jersey makers experiencing machine maintenance or seasonal backlogs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
