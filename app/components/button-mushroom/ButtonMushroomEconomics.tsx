'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  PieChart,
  Calculator,
  Building,
  Sun,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const ButtonMushroomEconomics: React.FC = () => {
  const { openQuoteCalculatorModal } = useAppModals();
  const [modelType, setModelType] = useState<'seasonal' | 'commercial'>('commercial');

  return (
    <section className="py-12 sm:py-16 border-t dark:border-white/10 border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <PieChart size={13} /> Unit Financials & ROI
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-3">
            Commercial Button Mushroom Farming Economics in India
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Realistic cost breakdown, operational expenditure, and revenue projections comparing low-cost seasonal winter
            farming against commercial 365-day climate-controlled operations.
          </p>
        </div>

        {/* Model Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass p-1.5 rounded-2xl border dark:border-white/10 border-black/10 inline-flex gap-2">
            <button
              onClick={() => setModelType('commercial')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                modelType === 'commercial'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🏭 Climate-Controlled AC Facility (365 Days)
            </button>
            <button
              onClick={() => setModelType('seasonal')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                modelType === 'seasonal'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🛖 Seasonal Winter Farm (Nov – Feb)
            </button>
          </div>
        </div>

        {/* Dynamic Card Display */}
        {modelType === 'commercial' ? (
          <div className="glass p-6 sm:p-10 rounded-3xl border border-emerald-500/20 dark:border-emerald-500/20 shadow-2xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                  High-Output Commercial Scale
                </span>
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
                  2-Chamber Climate-Controlled Facility (2,500 Sq Ft)
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Estimated Annual Net Profit</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  ₹18 – ₹26 Lakhs
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Initial Capital Setup (CAPEX)
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">PUF Insulated Chamber (80mm):</span>
                    <span className="font-bold dark:text-white">₹7.5 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Chiller AHU & Fogger HVAC:</span>
                    <span className="font-bold dark:text-white">₹5.8 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Vertical 5-Tier GI Shelving:</span>
                    <span className="font-bold dark:text-white">₹2.4 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Generator & Electricals:</span>
                    <span className="font-bold dark:text-white">₹2.8 Lakhs</span>
                  </div>
                  <div className="pt-2 border-t dark:border-white/10 border-black/10 flex justify-between font-extrabold text-slate-900 dark:text-white">
                    <span>Total CAPEX:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">₹18.5 Lakhs</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Operating Cost Per Batch (OPEX)
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">15 Tons Ready Phase-II Compost:</span>
                    <span className="font-bold dark:text-white">₹75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Certified Master Spawn (110 kg):</span>
                    <span className="font-bold dark:text-white">₹14,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Pasteurized Casing Soil:</span>
                    <span className="font-bold dark:text-white">₹16,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Electricity & Labor (45 Days):</span>
                    <span className="font-bold dark:text-white">₹42,000</span>
                  </div>
                  <div className="pt-2 border-t dark:border-white/10 border-black/10 flex justify-between font-extrabold text-slate-900 dark:text-white">
                    <span>Total OPEX / Batch:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">₹1.47 Lakhs</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                  Yield & Revenue Realization
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Harvest Yield (20% conversion):</span>
                    <span className="font-bold dark:text-white">3,000 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Avg Wholesale Realization:</span>
                    <span className="font-bold dark:text-white">₹150 / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Gross Revenue / Batch:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">₹4.50 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Net Profit / Batch:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">₹3.03 Lakhs</span>
                  </div>
                  <div className="pt-2 border-t border-emerald-500/20 flex justify-between font-extrabold text-emerald-700 dark:text-emerald-400">
                    <span>Cropping Cycles / Year:</span>
                    <span>6 Cycles</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t dark:border-white/10 border-black/10">
              <span className="text-xs text-slate-500">
                * Eligible for 40%–50% NHB Capital Subsidy + 3% AIF Bank Loan Subvention.
              </span>
              <button
                onClick={() => openQuoteCalculatorModal()}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <span>Calculate Custom Commercial ROI</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          <div className="glass p-6 sm:p-10 rounded-3xl border dark:border-white/10 border-black/10 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 block mb-1">
                  Low-Capital Seasonal Model
                </span>
                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
                  Seasonal Thatched Shed / Bamboo Structure (600 Sq Ft)
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Winter Net Profit (4 Months)</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  ₹1.8 – ₹2.5 Lakhs
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Low CAPEX Setup
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Bamboo Hut + Straw Thatch:</span>
                    <span className="font-bold dark:text-white">₹45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Bamboo Vertical Racks:</span>
                    <span className="font-bold dark:text-white">₹18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Water Sprayer & Thermometers:</span>
                    <span className="font-bold dark:text-white">₹6,000</span>
                  </div>
                  <div className="pt-2 border-t dark:border-white/10 border-black/10 flex justify-between font-extrabold text-slate-900 dark:text-white">
                    <span>Total CAPEX:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">₹69,000</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Seasonal OPEX (2 Batches)
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">4 Tons Ready Compost:</span>
                    <span className="font-bold dark:text-white">₹22,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Grain Spawn (30 kg):</span>
                    <span className="font-bold dark:text-white">₹3,900</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Casing Soil & Polythene:</span>
                    <span className="font-bold dark:text-white">₹7,500</span>
                  </div>
                  <div className="pt-2 border-t dark:border-white/10 border-black/10 flex justify-between font-extrabold text-slate-900 dark:text-white">
                    <span>Total Season OPEX:</span>
                    <span className="text-emerald-600 dark:text-emerald-400">₹33,400</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
                  Harvest & Returns
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Total Harvest (2 Flushes):</span>
                    <span className="font-bold dark:text-white">750 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Selling Price:</span>
                    <span className="font-bold dark:text-white">₹140 – ₹180 / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-300">Total Revenue:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">₹1.20 Lakhs</span>
                  </div>
                  <div className="pt-2 border-t border-amber-500/20 flex justify-between font-extrabold text-emerald-600 dark:text-emerald-400">
                    <span>Net Profit / Season:</span>
                    <span>₹86,600+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400">
              * Best suited for farmers in North & Central India during natural ambient temperatures of 14°C to 22°C (November to February).
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
