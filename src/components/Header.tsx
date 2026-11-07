import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Rates', href: '#pricing' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'B2B Partners', href: '#partnership' },
    { label: 'Our Works', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element, clean display type) */}
        <a
          href="#home"
          className="text-lg md:text-xl font-extrabold tracking-tight text-[#0B1F3A] hover:text-[#174F91] transition-colors whitespace-nowrap shrink-0"
        >
          CEO TAILORING <span className="font-semibold text-[#174F91]">· ATEXCO TAGUM</span>
        </a>

        {/* Zone 2: Navigation Links (single-line, clean prose without badges) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#174F91] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#174F91] hover:bg-[#0B1F3A] rounded shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            Request Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#174F91] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 px-4 text-center font-bold text-sm uppercase tracking-wider text-white bg-[#174F91] hover:bg-[#0B1F3A] rounded shadow-sm"
              >
                Request a Price Quote
              </button>
            </div>
            <div className="pt-2 text-xs text-slate-500 text-center">
              Direct Desk: <a href="tel:09514556757" className="font-semibold text-slate-800 underline">09514556757</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
