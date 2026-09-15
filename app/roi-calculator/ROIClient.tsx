"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Sprout, 
  IndianRupee, 
  TrendingUp, 
  PieChart, 
  ArrowRight,
  Info,
  Calendar,
  Building2,
  Package
} from 'lucide-react';
import Link from 'next/link';

const MUSHROOM_DATA = {
  button: {
    name: 'Button Mushroom',
    desc: 'Commercial AC Setup (Year-round)',
    setupCostPerSqFt: 1500, // ₹
    yieldPerSqFtPerCycle: 4.5, // kg
    cyclesPerYear: 4,
    salePricePerKg: 140, // ₹
    productionCostPerKg: 85, // ₹
    icon: Package,
    color: 'from-blue-500 to-indigo-500'
  },
  oyster: {
    name: 'Oyster Mushroom',
    desc: 'Low-cost Structured Shed',
    setupCostPerSqFt: 300, // ₹
    yieldPerSqFtPerCycle: 2.0, // kg
    cyclesPerYear: 6,
    salePricePerKg: 120, // ₹
    productionCostPerKg: 50, // ₹
    icon: Sprout,
    color: 'from-green-500 to-emerald-500'
  },
  milky: {
    name: 'Milky Mushroom',
    desc: 'Polyhouse/Shed Setup',
    setupCostPerSqFt: 400, // ₹
    yieldPerSqFtPerCycle: 2.5, // kg
    cyclesPerYear: 5,
    salePricePerKg: 160, // ₹
    productionCostPerKg: 60, // ₹
    icon: Building2,
    color: 'from-yellow-400 to-orange-500'
  }
};

export default function ROIClient() {
  const [area, setArea] = useState<number>(1000);
  const [selectedVariety, setSelectedVariety] = useState<keyof typeof MUSHROOM_DATA>('button');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calc = useMemo(() => {
    const data = MUSHROOM_DATA[selectedVariety];
    const floorArea = isNaN(area) || area < 100 ? 100 : area;
    
    // Capital Expenditure
    const totalSetupCost = floorArea * data.setupCostPerSqFt;
    
    // Operational metrics
    const annualYield = floorArea * data.yieldPerSqFtPerCycle * data.cyclesPerYear;
    const monthlyYield = annualYield / 12;
    
    // Financials
    const annualRevenue = annualYield * data.salePricePerKg;
    const annualOpCost = annualYield * data.productionCostPerKg;
    const annualProfit = annualRevenue - annualOpCost;
    
    const monthlyRevenue = annualRevenue / 12;
    const monthlyProfit = annualProfit / 12;
    const monthlyOpCost = annualOpCost / 12;

    const profitMargin = (annualProfit / annualRevenue) * 100;
    const roiMonths = totalSetupCost / monthlyProfit;

    return {
      totalSetupCost,
      annualYield,
      monthlyYield,
      annualRevenue,
      annualProfit,
      monthlyRevenue,
      monthlyProfit,
      monthlyOpCost,
      profitMargin,
      roiMonths
    };
  }, [area, selectedVariety]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] bg-green-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 mb-4 shadow-sm">
            <Calculator className="w-3 h-3 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Financial Planner</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black dark:text-white text-slate-900 mb-3 tracking-tight uppercase">
            Mushroom Farm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-green-500">ROI Calculator</span>
          </h1>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto text-[11px] md:text-xs leading-relaxed">
            Estimate your setup costs, monthly revenue, and profit margins. Customize your projection based on farm size and mushroom variety.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[2rem] p-5 lg:p-7 shadow-sm"
            >
              <form 
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Inputs */}
                <div>
                  <label id="farm-area-label" htmlFor="farm-area-range-input" className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-2 block">
                    Farm Floor Area (Sq. Ft.)
                  </label>
                  <div className="relative">
                    <input 
                      id="farm-area-number-input"
                      type="number" 
                      min="100"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full text-xl md:text-2xl font-black bg-white/5 dark:bg-white/[0.02] border dark:border-white/10 border-black/10 rounded-2xl py-3 pl-4 pr-16 dark:text-white text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold dark:text-slate-500 text-slate-400 uppercase">sq ft</span>
                  </div>
                  <input 
                    id="farm-area-range-input"
                    aria-labelledby="farm-area-label"
                    aria-label="Farm Floor Area Range Slider"
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full mt-4 accent-emerald-500"
                  />
                  <div className="flex justify-between text-[9px] font-bold dark:text-slate-500 text-slate-400 mt-1 uppercase">
                    <span>100 sq ft</span>
                    <span>10,000+ sq ft</span>
                  </div>
                </div>

                {/* Variety Selection */}
                <div>
                  <label className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-2 block">
                    Mushroom Variety
                  </label>
                  <div className="grid gap-2">
                    {(Object.keys(MUSHROOM_DATA) as Array<keyof typeof MUSHROOM_DATA>).map((key) => {
                      const v = MUSHROOM_DATA[key];
                      const Icon = v.icon;
                      const isSelected = selectedVariety === key;
                      
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedVariety(key)}
                          className={`flex items-center gap-3 p-3 rounded-2xl border transition-all text-left group ${
                            isSelected 
                              ? 'bg-white/10 dark:bg-white/[0.05] border-emerald-500/50 ring-1 ring-emerald-500 shadow-sm' 
                              : 'bg-white/5 dark:bg-white/[0.02] border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${v.color} shadow-sm`}>
                            <Icon className="text-white w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-[11px] md:text-xs dark:text-white text-slate-900">{v.name}</div>
                            <div className="text-[9px] md:text-[10px] dark:text-slate-400 text-slate-500 mt-0.5">{v.desc}</div>
                          </div>
                          {isSelected && (
                            <div className="ml-auto w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Assumptions Box */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[2rem] p-5 shadow-sm"
            >
              <h3 className="text-[10px] font-bold dark:text-slate-300 text-slate-700 uppercase tracking-widest flex items-center gap-2 mb-3">
                <Info size={12} className="text-emerald-500" /> Model Assumptions
              </h3>
              <ul className="space-y-2 text-[9px] md:text-[10px] dark:text-slate-400 text-slate-600">
                <li className="flex justify-between items-center border-b dark:border-white/5 border-black/5 pb-1">
                  <span>Sale Price (avg)</span>
                  <span className="font-bold dark:text-white text-slate-900">₹{MUSHROOM_DATA[selectedVariety].salePricePerKg}/kg</span>
                </li>
                <li className="flex justify-between items-center border-b dark:border-white/5 border-black/5 pb-1">
                  <span>Production Cost (avg)</span>
                  <span className="font-bold dark:text-white text-slate-900">₹{MUSHROOM_DATA[selectedVariety].productionCostPerKg}/kg</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span>Harvest Cycles</span>
                  <span className="font-bold dark:text-white text-slate-900">{MUSHROOM_DATA[selectedVariety].cyclesPerYear}/year</span>
                </li>
              </ul>
              <div className="mt-3 p-2 rounded-xl bg-yellow-500/10 dark:bg-yellow-500/5 border border-yellow-500/20 text-[9px] text-yellow-600 dark:text-yellow-400 leading-relaxed">
                Estimation assumes standard multi-tier vertical rack utilization and optimal climate conditions. Real-world results may vary.
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={selectedVariety + area}
              className="relative p-[1px] rounded-[2.5rem] overflow-hidden shadow-xl h-full flex flex-col group"
            >
              {/* Premium Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 opacity-20 group-hover:opacity-40 transition-opacity duration-700 ease-in-out"></div>
              
              <div className="relative bg-white/80 dark:bg-[#050505]/80 backdrop-blur-2xl rounded-[2.5rem] p-5 lg:p-8 h-full flex flex-col border dark:border-white/5 border-black/5">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-80"></div>
                
                <div className="flex-1">
                  {/* Setup Cost Header */}
                  <div className="mb-8 text-center">
                    <div className="text-[10px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest mb-1 mt-2">Estimated Total Investment</div>
                    <div className="text-3xl lg:text-5xl font-black bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                      {formatCurrency(calc.totalSetupCost)}
                    </div>
                    <div className="text-[9px] md:text-[10px] font-semibold dark:text-slate-500 text-slate-400 mt-1">
                       (₹{MUSHROOM_DATA[selectedVariety].setupCostPerSqFt} per sq.ft setup cost)
                    </div>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    
                    {/* Monthly Profit */}
                    <div className="bg-white/40 dark:bg-white/[0.01] backdrop-blur-sm border dark:border-white/5 border-black/5 rounded-2xl p-4 hover:dark:bg-white/[0.03] hover:bg-black/[0.03] transition-colors relative overflow-hidden shadow-sm">
                      <div className="absolute right-0 top-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-[30px]"></div>
                      <div className="flex items-start gap-2 mb-1 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                          <TrendingUp size={12} />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest leading-tight">Est. Monthly Profit</div>
                          <div className="text-xl font-black dark:text-white text-slate-900 leading-none mt-1">{formatCurrency(calc.monthlyProfit)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Monthly Revenue */}
                    <div className="bg-white/40 dark:bg-white/[0.01] backdrop-blur-sm border dark:border-white/5 border-black/5 rounded-2xl p-4 hover:dark:bg-white/[0.03] hover:bg-black/[0.03] transition-colors relative overflow-hidden shadow-sm">
                      <div className="absolute right-0 top-0 w-20 h-20 bg-blue-500/10 rounded-full blur-[30px]"></div>
                      <div className="flex items-start gap-2 mb-1 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                          <IndianRupee size={12} />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold dark:text-slate-400 text-slate-500 uppercase tracking-widest leading-tight">Est. Monthly Revenue</div>
                          <div className="text-lg font-bold dark:text-slate-300 text-slate-700 leading-none mt-1">{formatCurrency(calc.monthlyRevenue)}</div>
                        </div>
                      </div>
                    </div>

                    {/* Monthly Op Cost */}
                    <div className="bg-white/40 dark:bg-white/[0.01] backdrop-blur-sm border dark:border-white/5 border-black/5 rounded-2xl p-3 hover:dark:bg-white/[0.03] hover:bg-black/[0.03] transition-colors shadow-sm">
                      <div className="text-[9px] font-bold dark:text-slate-500 text-slate-400 uppercase tracking-widest mb-1">Monthly Op. Cost</div>
                      <div className="text-sm font-bold dark:text-white text-slate-900">{formatCurrency(calc.monthlyOpCost)}</div>
                    </div>

                    {/* Monthly Yield */}
                    <div className="bg-white/40 dark:bg-white/[0.01] backdrop-blur-sm border dark:border-white/5 border-black/5 rounded-2xl p-3 hover:dark:bg-white/[0.03] hover:bg-black/[0.03] transition-colors shadow-sm">
                      <div className="text-[9px] font-bold dark:text-slate-500 text-slate-400 uppercase tracking-widest mb-1">Monthly Yield</div>
                      <div className="text-sm font-bold dark:text-white text-slate-900">{formatNumber(calc.monthlyYield)} kg <span className="text-[10px] font-medium dark:text-slate-500 text-slate-400">avg</span></div>
                    </div>

                  </div>
                  
                  {/* Performance Indicators */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 p-3 rounded-2xl bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/5 border-black/5 shadow-sm">
                    <div className="flex-1 flex items-center justify-center gap-2 border-b sm:border-b-0 sm:border-r border-black/10 dark:border-white/10 pb-2 sm:pb-0">
                      <PieChart className="text-indigo-400 shrink-0" size={16} />
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500 mb-0.5 leading-tight">Profit Margin</div>
                        <div className="text-sm font-black dark:text-white text-slate-900 leading-none">{calc.profitMargin.toFixed(1)}%</div>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-2">
                      <Calendar className="text-emerald-400 shrink-0" size={16} />
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500 mb-0.5 leading-tight">Capital Recovery</div>
                        <div className="text-sm font-black dark:text-white text-slate-900 leading-none">{Math.ceil(calc.roiMonths)} Months</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-20 blur-lg rounded-xl"></div>
                    <Link 
                      href="/training"
                      className="relative w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] text-[11px] md:text-xs text-white font-black tracking-widest py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 text-center uppercase"
                    >
                      Start Commercial Training <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
