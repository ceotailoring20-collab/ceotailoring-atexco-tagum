import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#174F91] mb-2">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Our Garment & Printing Services
          </h2>
          <div className="w-16 h-1 bg-[#174F91] rounded-full mx-auto my-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            Reliable garment engineering, continuous sublimation printing, and industrial assembly under strict quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className={`bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#174F91] transition-all flex flex-col ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-52 bg-slate-800 overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 text-white text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm border border-slate-600">
                  SERVICE {service.number}
                </div>
                {service.badge && (
                  <div className="absolute top-3 right-3 bg-[#174F91] text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                    {service.badge}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-[#174F91] uppercase tracking-wider mb-1">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="border-t border-slate-100 pt-4 mb-6 space-y-2">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#0B1F3A] hover:text-white bg-slate-100 hover:bg-[#174F91] rounded border border-slate-200 hover:border-[#174F91] transition-all"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
