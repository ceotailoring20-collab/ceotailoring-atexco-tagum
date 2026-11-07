import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, Sliders, Sparkles } from 'lucide-react';

interface CalculatorProps {
  onApplyCalculation: (data: {
    service: string;
    quantity: number;
    estimatedCost: number;
    notes: string;
  }) => void;
}

type CalculationMode = 'roll' | 'our-fabric' | 'customer-fabric' | 'full-jersey';

export const QuoteCalculator: React.FC<CalculatorProps> = ({ onApplyCalculation }) => {
  const [mode, setMode] = useState<CalculationMode>('our-fabric');
  const [quantity, setQuantity] = useState<number>(50);
  const [needSewing, setNeedSewing] = useState<boolean>(false);
  const [targetPickup, setTargetPickup] = useState<'tagum' | 'panabo'>('tagum');

  const config = useMemo(() => {
    switch (mode) {
      case 'roll':
        return {
          title: 'Sublimation Roll Printing Only',
          unitLabel: 'Meters of continuous roll (72" width)',
          baseRate: 65,
          unitName: 'meters',
          minQty: 5,
          defaultStep: 5,
          maxSlider: 300,
          notes: 'Customer performs external heat pressing. 72" high-speed paper roll.'
        };
      case 'our-fabric':
        return {
          title: 'Printing + Heat Press (Our Fabric)',
          unitLabel: 'Pieces / Garment Panels (With CEO Fabric)',
          baseRate: 160,
          unitName: 'pieces',
          minQty: 10,
          defaultStep: 5,
          maxSlider: 300,
          notes: 'Includes CEO Tailoring tested sublimation polyester fabric + flatbed heat press.'
        };
      case 'customer-fabric':
        return {
          title: 'Printing + Heat Press (Customer Fabric)',
          unitLabel: 'Pieces / Panels (Customer Supplied Fabric)',
          baseRate: 90,
          unitName: 'pieces',
          minQty: 10,
          defaultStep: 5,
          maxSlider: 300,
          notes: 'Customer supplies compatible polyester textile panels. Subject to test swatch.'
        };
      case 'full-jersey':
        return {
          title: 'Full Custom Jersey with Sewing & Tailoring',
          unitLabel: 'Complete Tailored Jersey Tops',
          baseRate: 290,
          unitName: 'jerseys',
          minQty: 10,
          defaultStep: 5,
          maxSlider: 150,
          notes: 'Complete finished uniform: design transfer, fabric, pneumatic press, and tailor sewing.'
        };
    }
  }, [mode]);

  // Wholesale volume calculation
  const volumeDiscountPercent = useMemo(() => {
    if (quantity >= 150) return 0.08; // 8% wholesale incentive
    if (quantity >= 60) return 0.04;  // 4% tier
    return 0;
  }, [quantity]);

  const rawSubtotal = quantity * config.baseRate + (needSewing && mode !== 'full-jersey' && mode !== 'roll' ? quantity * 65 : 0);
  const discountAmount = Math.round(rawSubtotal * volumeDiscountPercent);
  const finalEstimate = rawSubtotal - discountAmount;

  const handleApply = () => {
    const summaryNotes = `Calculated Estimate: ${quantity} ${config.unitName} of ${config.title}. Pickup Branch: ${targetPickup === 'tagum' ? 'Tagum Main Facility' : 'Panabo Service Hub'}.${needSewing ? ' Includes sewing/tailoring assembly.' : ''}`;
    onApplyCalculation({
      service: config.title,
      quantity,
      estimatedCost: finalEstimate,
      notes: summaryNotes,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Instant Production Cost Calculator
          </h2>
          <div className="w-16 h-1 bg-[#174F91] rounded-full mx-auto my-4" />
          <p className="text-slate-300 text-base">
            Select your service type, configure your volume, and calculate your project budget in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-slate-800/80 border border-slate-700 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              1. Select Production Service Type
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setMode('our-fabric')}
                className={`p-3.5 rounded text-left transition-all border ${
                  mode === 'our-fabric'
                    ? 'border-blue-500 bg-blue-900/40 text-white ring-1 ring-blue-500'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Print + Heat Press</span>
                  <span className="text-xs font-extrabold text-blue-400 tabular-nums">₱160/pc</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Using OUR tested fabric</div>
              </button>

              <button
                type="button"
                onClick={() => setMode('customer-fabric')}
                className={`p-3.5 rounded text-left transition-all border ${
                  mode === 'customer-fabric'
                    ? 'border-blue-500 bg-blue-900/40 text-white ring-1 ring-blue-500'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Customer's Fabric</span>
                  <span className="text-xs font-extrabold text-blue-400 tabular-nums">₱90/pc</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Print + Press (Your fabric)</div>
              </button>

              <button
                type="button"
                onClick={() => setMode('roll')}
                className={`p-3.5 rounded text-left transition-all border ${
                  mode === 'roll'
                    ? 'border-blue-500 bg-blue-900/40 text-white ring-1 ring-blue-500'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Sublimation Roll</span>
                  <span className="text-xs font-extrabold text-blue-400 tabular-nums">₱65/meter</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Continuous 72" paper print only</div>
              </button>

              <button
                type="button"
                onClick={() => setMode('full-jersey')}
                className={`p-3.5 rounded text-left transition-all border ${
                  mode === 'full-jersey'
                    ? 'border-blue-500 bg-blue-900/40 text-white ring-1 ring-blue-500'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Full Tailored Jersey</span>
                  <span className="text-xs font-extrabold text-blue-400 tabular-nums">~₱290/pc</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Print + Fabric + Tailoring</div>
              </button>
            </div>

            {/* Quantity Slider and Input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Order Quantity ({config.unitName})
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="5"
                    max="2000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(5, Number(e.target.value) || 0))}
                    className="w-20 px-2.5 py-1 text-sm bg-slate-900 border border-slate-600 rounded text-right font-bold text-white focus:outline-none focus:border-blue-500 tabular-nums"
                  />
                  <span className="text-xs text-slate-400">{config.unitName}</span>
                </div>
              </div>

              <input
                type="range"
                min="5"
                max={config.maxSlider}
                step="5"
                value={Math.min(quantity, config.maxSlider)}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#174F91]"
              />

              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>5 {config.unitName}</span>
                <span>50 {config.unitName}</span>
                <span>100 {config.unitName}</span>
                <span>{config.maxSlider}+ {config.unitName}</span>
              </div>
            </div>

            {/* Optional Add-ons */}
            {(mode === 'our-fabric' || mode === 'customer-fabric') && (
              <div className="mb-6 p-4 rounded bg-slate-900/60 border border-slate-700/80">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needSewing}
                    onChange={(e) => setNeedSewing(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-800 border-slate-600"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Add Garment Tailoring & Sewing (+₱65/pc)
                    </span>
                    <p className="text-xs text-slate-400">
                      Include professional assembly, collar, and hem construction by our tailoring staff.
                    </p>
                  </div>
                </label>
              </div>
            )}

            {/* Target Branch Pickup */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                3. Preferred Branch Location
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTargetPickup('tagum')}
                  className={`py-2 px-3 rounded text-xs font-semibold text-center border transition-all ${
                    targetPickup === 'tagum'
                      ? 'border-blue-400 bg-blue-900/30 text-white'
                      : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:text-white'
                  }`}
                >
                  Tagum City Branch
                </button>
                <button
                  type="button"
                  onClick={() => setTargetPickup('panabo')}
                  className={`py-2 px-3 rounded text-xs font-semibold text-center border transition-all ${
                    targetPickup === 'panabo'
                      ? 'border-blue-400 bg-blue-900/30 text-white'
                      : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:text-white'
                  }`}
                >
                  Panabo City Branch
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Budget & Quote Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0B1F3A] to-slate-900 border-2 border-blue-600/40 rounded-lg p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Calculated Estimate
              </span>
              <span className="text-xs text-slate-400">Davao del Norte Rates</span>
            </div>

            <div className="space-y-3.5 mb-6 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Selected Service:</span>
                <span className="font-semibold text-white text-right text-xs sm:text-sm">
                  {config.title}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Volume Count:</span>
                <span className="font-semibold text-white tabular-nums">
                  {quantity} {config.unitName}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Base Unit Rate:</span>
                <span className="font-semibold text-white tabular-nums">
                  ₱{config.baseRate} / {config.unitName.replace(/s$/, '')}
                </span>
              </div>

              {needSewing && (
                <div className="flex justify-between items-center text-slate-300">
                  <span>Tailoring Assembly:</span>
                  <span className="font-semibold text-blue-300 tabular-nums">
                    +₱65 × {quantity}
                  </span>
                </div>
              )}

              {volumeDiscountPercent > 0 && (
                <div className="flex justify-between items-center text-emerald-400">
                  <span>Wholesale Tier Discount:</span>
                  <span className="font-semibold tabular-nums">
                    -₱{discountAmount.toLocaleString()} ({volumeDiscountPercent * 100}%)
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center text-slate-300 text-xs">
                <span>Pickup / Drop-off:</span>
                <span className="font-medium text-slate-200">
                  {targetPickup === 'tagum' ? 'Tagum City (New Visayan)' : 'Panabo City (Rachoville)'}
                </span>
              </div>
            </div>

            {/* Total Display */}
            <div className="pt-4 border-t border-slate-700 mb-6">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                Estimated Project Total
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                  ₱{finalEstimate.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">est. PHP</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                *Subject to fabric compatibility test & final order specifications.
              </p>
            </div>

            <button
              onClick={handleApply}
              className="w-full py-3.5 px-4 bg-[#174F91] hover:bg-blue-600 text-white rounded font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Apply to Official Quote Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
