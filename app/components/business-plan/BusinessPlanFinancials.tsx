'use client';

import React, { useState } from 'react';
import {
  IndianRupee,
  Calculator,
  TrendingUp,
  PieChart,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanFinancials: React.FC = () => {
  const { openQuoteCalculatorModal, openConsultationModal } = useAppModals();
  const [activeTier, setActiveTier] = useState<'small' | 'medium' | 'commercial'>('small');

  const models = {
    small: {
      name: 'Small Pilot Unit (Oyster / Milky)',
      area: '300 – 500 Sq Ft (Single Room / Shed)',
      bagCapacity: '800 – 1,000 Bags',
      capexTotal: '₹65,000 – ₹85,000',
      capexItems: [
        { item: 'Vertical Racks (Bamboo / Angle GI)', cost: '₹22,000' },
        { item: 'Exhaust Fans & Ventilation (2 units)', cost: '₹6,500' },
        { item: 'Ultrasonic Humidifier / Mist Fogger', cost: '₹12,500' },
        { item: 'Digital Hygrometer, Temp Meters & Lux Lights', cost: '₹3,500' },
        { item: 'Drum Boiler & Pasteurization Setup', cost: '₹8,500' },
        { item: 'Disinfection, Sprayers & Minor Fitments', cost: '₹12,000' },
      ],
      opexPerCycle: '₹28,000 – ₹35,000',
      opexItems: [
        { item: 'Wheat/Paddy Straw (2,500 kg @ ₹4/kg)', cost: '₹10,000' },
        { item: 'Lab-Grade F1 Spawn (150 kg @ ₹110/kg)', cost: '₹16,500' },
        { item: 'PP Bags, Rubber Bands, Disinfectants', cost: '₹3,500' },
        { item: 'Electricity & Water (Per cycle)', cost: '₹2,500' },
      ],
      monthlyYield: '400 – 550 kg Fresh Mushrooms',
      grossRevenue: '₹64,000 – ₹88,000 (@ ₹160/kg avg)',
      netMonthlyProfit: '₹32,000 – ₹48,000 / month',
      paybackPeriod: '3 to 4 Months',
      roiMargin: '48% – 55%',
    },
    medium: {
      name: 'Semi-Commercial Unit (Multi-Room)',
      area: '1,500 – 2,500 Sq Ft (Dedicated Shed / Farmhouse)',
      bagCapacity: '3,500 – 5,000 Bags',
      capexTotal: '₹2,80,000 – ₹3,80,000',
      capexItems: [
        { item: 'Heavy-Duty GI Slotted Channel Racks', cost: '₹1,20,000' },
        { item: 'Automated High-Pressure Fogging System', cost: '₹45,000' },
        { item: 'Heavy Industrial Exhausts & Air Filters', cost: '₹28,000' },
        { item: 'Commercial Chaff Cutter & Steam Tank', cost: '₹55,000' },
        { item: 'Cold Display Storage / Commercial Refrigerator', cost: '₹42,000' },
        { item: 'Solar Dehydrator Unit (15kg/batch)', cost: '₹35,000' },
      ],
      opexPerCycle: '₹1,15,000 – ₹1,40,000',
      opexItems: [
        { item: 'Straw Bulk Raw Material (10 Tons)', cost: '₹38,000' },
        { item: 'Certified Hybrid Spawn (600 kg @ ₹100/kg)', cost: '₹60,000' },
        { item: 'Consumables, Bags & Punnet Packaging', cost: '₹14,000' },
        { item: 'Labor (2 Workers) & Utility Power', cost: '₹28,000' },
      ],
      monthlyYield: '1,800 – 2,400 kg Fresh Harvest',
      grossRevenue: '₹2,70,000 – ₹3,60,000 (@ ₹150/kg avg)',
      netMonthlyProfit: '₹1,30,000 – ₹1,85,000 / month',
      paybackPeriod: '4 to 6 Months',
      roiMargin: '50% – 58%',
    },
    commercial: {
      name: 'Commercial Climate-Controlled Unit (Button / Exotic)',
      area: '4,000 – 8,000 Sq Ft (PUF Insulated Chambers)',
      bagCapacity: '10,000 – 15,000 Bags / Trays',
      capexTotal: '₹14,50,000 – ₹24,000,000',
      capexItems: [
        { item: 'Insulated PUF Sandwiched Wall Panels', cost: '₹5,50,000' },
        { item: 'Precision Chillers, AHU & Ducted Climate Unit', cost: '₹4,80,000' },
        { item: 'Multi-Tier Galvanized Heavy Dutch Racks', cost: '₹2,60,000' },
        { item: 'Digital PLC Climate & CO2 Automation Hub', cost: '₹1,20,000' },
        { item: 'Compost Bunker / Phase-I & II Pasteurized Tunnel', cost: '₹3,50,000' },
        { item: 'Packhouse, Nitrogen Sealer & Blast Chiller', cost: '₹1,80,000' },
      ],
      opexPerCycle: '₹3,80,000 – ₹5,20,000',
      opexItems: [
        { item: 'Ready Phase-II Pasteurized Compost (25 Tons)', cost: '₹1,60,000' },
        { item: 'F1 Master Grain Spawn & Casing Soil Peat', cost: '₹95,000' },
        { item: 'Industrial Electricity & HVAC Running', cost: '₹55,000' },
        { item: 'Permanent Skilled Farm Labor & Supervision', cost: '₹60,000' },
        { item: 'Branded Punnet Boxes & Transport Freight', cost: '₹35,000' },
      ],
      monthlyYield: '5,000 – 7,500 kg Certified Button Mushrooms',
      grossRevenue: '₹6,50,000 – ₹9,75,000 (@ ₹130/kg avg)',
      netMonthlyProfit: '₹2,60,000 – ₹4,20,000 / month',
      paybackPeriod: '10 to 14 Months (Eligible for 40% Subsidy)',
      roiMargin: '42% – 48%',
    },
  };

  const current = models[activeTier];

  return (
    <section id="financials" className="py-16 md:py-24 border-t dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
            <IndianRupee size={13} /> Realistic Financial Models & ROI
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
            Capital Investment, Operating Costs & Net Profit Analysis
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Detailed unit economics calculated on real market benchmarks across Indian states. Select a farm scale to
            view exact line-item breakdowns.
          </p>

          {/* Model Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            <button
              onClick={() => setActiveTier('small')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTier === 'small'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              Small Starter (500 sq ft)
            </button>
            <button
              onClick={() => setActiveTier('medium')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTier === 'medium'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              Semi-Commercial (2,000 sq ft)
            </button>
            <button
              onClick={() => setActiveTier('commercial')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeTier === 'commercial'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              Commercial Auto Setup (5,000+ sq ft)
            </button>
          </div>
        </div>

        {/* Selected Model Showcase Card */}
        <div className="glass p-6 sm:p-10 rounded-3xl border dark:border-white/10 border-black/10">
          {/* Header Summary */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b dark:border-white/10 border-black/10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-500">
                Selected Financial Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold dark:text-white text-slate-900 mt-1">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Space Requirement: <strong className="dark:text-slate-200 text-slate-700">{current.area}</strong> • Capacity: <strong className="dark:text-slate-200 text-slate-700">{current.bagCapacity}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => openQuoteCalculatorModal({ area: activeTier === 'small' ? 500 : activeTier === 'medium' ? 2000 : 5000 })}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <Calculator size={15} />
                <span>Adjust Live Parameters</span>
              </button>
            </div>
          </div>

          {/* Key KPI Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                One-Time CAPEX
              </span>
              <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                {current.capexTotal}
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">Fixed Infrastructure</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                Monthly Yield
              </span>
              <div className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">
                {current.monthlyYield}
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">Biological harvest</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                Net Monthly Profit
              </span>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {current.netMonthlyProfit}
              </div>
              <span className="text-[11px] text-emerald-600/80 font-bold mt-0.5 block">
                {current.roiMargin} Profit Margin
              </span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/5 dark:bg-white/5 border dark:border-white/5 border-black/5">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                Payback Horizon
              </span>
              <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">
                {current.paybackPeriod}
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">100% Capital Recovery</span>
            </div>
          </div>

          {/* Detailed Itemized Two-Column Breakdown */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* Left: CAPEX Breakdown */}
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border dark:border-white/5 border-black/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm sm:text-base font-bold dark:text-white text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span>One-Time Capital Expenditure (CAPEX)</span>
                </h4>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                {current.capexItems.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-2 border-b dark:border-white/5 border-black/5">
                    <span className="text-slate-600 dark:text-slate-300">{c.item}</span>
                    <span className="font-bold dark:text-slate-200 text-slate-900">{c.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: OPEX & Recurring Breakdown */}
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border dark:border-white/5 border-black/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm sm:text-base font-bold dark:text-white text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Recurring Operating Cost (OPEX per Cycle)</span>
                </h4>
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                {current.opexItems.map((o, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-2 border-b dark:border-white/5 border-black/5">
                    <span className="text-slate-600 dark:text-slate-300">{o.item}</span>
                    <span className="font-bold dark:text-slate-200 text-slate-900">{o.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
