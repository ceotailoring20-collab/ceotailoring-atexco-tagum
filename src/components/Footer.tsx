import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F3A] text-slate-300 border-t-4 border-[#174F91] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xl font-black text-white tracking-tight">
              CEO TAILORING <span className="text-blue-400 font-bold">· ATEXCO TAGUM</span>
            </h4>
            <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
              Sublimation Printing · Heat Press · Tailoring
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Industrial-grade sublimation roll printing up to 72 inches, precision flatbed heat press transfers, and custom athletic sportswear tailoring serving Tagum City, Panabo City, and Davao del Norte.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home Overview</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Facility</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Capabilities</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Printing Rates</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Instant Estimate Calculator</a></li>
              <li><a href="#partnership" className="hover:text-white transition-colors">B2B Subcontracting</a></li>
              <li><a href="#works" className="hover:text-white transition-colors">Production Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Locations</a></li>
            </ul>
          </div>

          {/* Direct Contact & Locations */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact & Facilities
            </h5>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="space-x-2">
                  <a href="tel:09514556757" className="text-white hover:text-blue-300 tabular-nums font-semibold">
                    0951 455 6757
                  </a>
                  <span>·</span>
                  <a href="tel:09516216321" className="text-white hover:text-blue-300 tabular-nums font-semibold">
                    0951 621 6321
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-blue-300">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <div><strong>Tagum Hub:</strong> New Visayan, Tagum City</div>
                  <div><strong>Panabo Hub:</strong> Rachoville, New Visayas, Panabo City</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 CEO Tailoring | Atexco Tagum. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Davao del Norte, Philippines</span>
            <span>·</span>
            <span>Built for professional garment production</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
