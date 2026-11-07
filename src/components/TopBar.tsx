import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const TopBar: React.FC = () => {
  return (
    <aside className="bg-[#0B1F3A] text-slate-300 border-b border-slate-700/60 text-xs py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
            <span>Tagum City & Panabo City, Davao del Norte</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
            <span>{BUSINESS_INFO.hours}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="text-slate-400 hidden md:inline">Hotlines:</span>
          <div className="flex items-center gap-3">
            {BUSINESS_INFO.phones.map((phone, idx) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
                title={`Call ${phone.formatted}`}
              >
                {idx === 0 && <Phone className="w-3 h-3 text-blue-400 shrink-0" aria-hidden="true" />}
                <span className="tabular-nums font-semibold">{phone.formatted}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
