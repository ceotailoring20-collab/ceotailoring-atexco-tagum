import React from 'react';
import { Check, Info, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingSectionProps {
  onSelectPlan: (planId: string, planName: string) => void;
  onOpenCalculator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onOpenCalculator,
}) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#174F91] mb-2">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Our Printing Rates
          </h2>
          <div className="w-16 h-1 bg-[#174F91] rounded-full mx-auto my-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            Sublimation Printing & Heat Press Services for Tagum City, Panabo City, and Davao del Norte
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isFeatured;
            return (
              <div
                key={plan.id}
                className={`relative rounded-lg flex flex-col transition-all duration-200 ${
                  isFeatured
                    ? 'border-2 border-[#174F91] bg-blue-50/20 shadow-lg -translate-y-1'
                    : 'border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300'
                } p-7 sm:p-8`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#174F91] text-white text-xs font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                    Complete Package
                  </div>
                )}

                <div className="text-center pb-6 mb-6 border-b border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#174F91] mb-2">
                    {plan.category}
                  </div>
                  <div className="flex items-baseline justify-center gap-1 text-[#0B1F3A]">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
                      ₱{plan.price}
                    </span>
                    <span className="text-slate-500 font-medium text-sm">
                      {plan.unit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    {plan.serviceType}
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="text-xs text-slate-600 mb-4 italic">
                    {plan.description}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#174F91] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectPlan(plan.id, plan.serviceType)}
                    className={`w-full py-3 px-4 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#174F91] text-white hover:bg-[#0B1F3A] shadow-sm'
                        : 'bg-slate-100 text-[#0B1F3A] hover:bg-[#174F91] hover:text-white border border-slate-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice Callout */}
        <div className="max-w-4xl mx-auto rounded-lg bg-slate-50 border-l-4 border-[#174F91] p-5 shadow-sm text-sm text-slate-700 flex items-start gap-3.5 mb-10">
          <Info className="w-5 h-5 text-[#174F91] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#0B1F3A] font-semibold">Important Production Notice: </strong>
            Final quotations may depend on fabric compatibility, fabric roll width, order volume, and detailed cutting specifications. Please contact our Tagum or Panabo desks for fabric testing and confirmation prior to production.
          </div>
        </div>

        {/* Quick Calculator Prompt */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenCalculator}
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <SlidersHorizontal className="w-4 h-4 text-blue-400" />
            <span>Launch Instant Estimate Calculator</span>
          </button>
        </div>
      </div>
    </section>
  );
};
