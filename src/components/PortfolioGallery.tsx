import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/content';

interface PortfolioGalleryProps {
  onSelectPortfolioItem: (title: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectPortfolioItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Jerseys', 'Printing', 'Heat Press', 'Tailoring', 'Machinery'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="works" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#174F91] mb-2">
            Production Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Our Works & Production Runs
          </h2>
          <div className="w-16 h-1 bg-[#174F91] rounded-full mx-auto my-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            A showcase of finished jerseys, printed fabrics, garment heat transfers, and high-speed workshop machinery.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0B1F3A] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-slate-900 rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white/80 group-hover:text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.description}
                </p>
                <div className="text-[11px] text-blue-200/80 mt-2 font-mono">
                  {item.spec}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[#0B1F3A]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full max-h-[65vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#174F91] mb-1">
                    {selectedItem.category} Showcase
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B1F3A]">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {selectedItem.description}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {selectedItem.spec}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectPortfolioItem(title);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#174F91] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider rounded shrink-0 shadow-sm transition-all"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
