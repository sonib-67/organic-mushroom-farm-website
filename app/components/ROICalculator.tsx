"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  PieChart,
  Percent,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Download,
  Building
} from "lucide-react";

export const ROICalculator = () => {
  const [variety, setVariety] = useState<"button" | "oyster" | "milky">("button");
  const [capacity, setCapacity] = useState<number>(2000); // bags
  const [pricePerKg, setPricePerKg] = useState<number>(140); // INR
  const [cyclesPerYear, setCyclesPerYear] = useState<number>(6); // cycles

  // Yield estimates per bag in kg
  const yieldPerBag = variety === "button" ? 1.5 : variety === "oyster" ? 0.9 : 0.8;
  
  // Total Annual Yield
  const totalAnnualYield = capacity * yieldPerBag * cyclesPerYear;

  // Revenue
  const annualGrossRevenue = totalAnnualYield * pricePerKg;

  // CapEx (Infrastructure setup)
  const baseCapEx = variety === "button" ? 450 : variety === "oyster" ? 180 : 220; // INR per bag capacity
  const totalCapEx = capacity * baseCapEx;

  // OpEx per cycle per bag (Substrate + Spawn + Labor + Electricity)
  const opExPerBagPerCycle = variety === "button" ? 85 : variety === "oyster" ? 45 : 55;
  const annualOpEx = capacity * opExPerBagPerCycle * cyclesPerYear;

  // Net Profit
  const annualNetProfit = Math.max(0, annualGrossRevenue - annualOpEx);
  const monthlyNetProfit = Math.round(annualNetProfit / 12);
  const profitMarginPercent = annualGrossRevenue > 0 ? Math.round((annualNetProfit / annualGrossRevenue) * 100) : 0;

  // Break-even period (months)
  const breakEvenMonths = annualNetProfit > 0 ? Math.ceil((totalCapEx / annualNetProfit) * 12) : 0;

  // Estimated NHB / Govt subsidy (40%)
  const estimatedSubsidy = Math.round(totalCapEx * 0.4);

  return (
    <section id="roi-calculator" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator size={14} />
            <span>Interactive Financial Forecast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Commercial <span className="gradient-text">ROI & Profit Estimator</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Simulate your capital investment, recurring operational costs, annual production yield, and expected net profit with government subsidy calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Sliders & Inputs */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/80 border border-purple-500/20 shadow-2xl space-y-6">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center justify-between">
              <span>Farm Parameters</span>
              <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">
                Customizable
              </span>
            </h3>

            {/* Variety Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Select Mushroom Species
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "button", label: "Button", defaultPrice: 140 },
                  { id: "oyster", label: "Oyster", defaultPrice: 160 },
                  { id: "milky", label: "Milky", defaultPrice: 180 },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      setVariety(v.id as any);
                      setPricePerKg(v.defaultPrice);
                    }}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      variety === v.id
                        ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30"
                        : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-black/10"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Capacity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Farm Bag Capacity
                </label>
                <span className="text-sm font-black text-purple-600 dark:text-purple-400">
                  {capacity.toLocaleString()} Bags / Beds
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="500"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>500 Bags (Home/Small)</span>
                <span>5,000 Bags (Medium)</span>
                <span>10,000+ Bags (Commercial)</span>
              </div>
            </div>

            {/* Selling Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Wholesale Mandi Selling Price
                </label>
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                  ₹{pricePerKg} / kg
                </span>
              </div>
              <input
                type="range"
                min="90"
                max="300"
                step="10"
                value={pricePerKg}
                onChange={(e) => setPricePerKg(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>₹90/kg (Bulk Mandi)</span>
                <span>₹180/kg (Retail Chains)</span>
                <span>₹300/kg (Premium Direct)</span>
              </div>
            </div>

            {/* Crop Cycles Per Year */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Production Cycles Per Year
                </label>
                <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                  {cyclesPerYear} Harvest Cycles
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="8"
                step="1"
                value={cyclesPerYear}
                onChange={(e) => setCyclesPerYear(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>3 Cycles (Seasonal)</span>
                <span>6 Cycles (Standard AC)</span>
                <span>8 Cycles (High Speed)</span>
              </div>
            </div>

            {/* Subsidy Info Notice */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs flex items-start gap-2.5">
              <Sparkles size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-slate-700 dark:text-slate-300">
                <strong className="text-emerald-500 dark:text-emerald-400">NABARD / NHB Subsidy:</strong> Eligible for up to 40% - 50% capital subsidy (~₹{(estimatedSubsidy / 100000).toFixed(2)} Lakh) on cold-room and racking infrastructure.
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Financial Forecast Dashboard */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Stat Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-linear-to-br from-emerald-600/20 to-teal-900/40 border border-emerald-500/30 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Net Annual Profit
                  </span>
                  <TrendingUp size={20} className="text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  ₹{(annualNetProfit / 100000).toFixed(2)} <span className="text-lg font-bold text-emerald-400">Lakh</span>
                </div>
                <p className="text-xs text-emerald-200/80 mt-1">
                  ≈ ₹{monthlyNetProfit.toLocaleString()} / Month Net Earnings
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-linear-to-br from-purple-600/20 to-indigo-900/40 border border-purple-500/30 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    Break-Even Timeline
                  </span>
                  <Calendar size={20} className="text-purple-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white">
                  {breakEvenMonths} <span className="text-lg font-bold text-purple-400">Months</span>
                </div>
                <p className="text-xs text-purple-200/80 mt-1">
                  {profitMarginPercent}% Net Operational Margin
                </p>
              </div>
            </div>

            {/* Financial Breakdown Table Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-950/80 border border-purple-500/20 shadow-2xl space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-black/5 dark:border-white/10 pb-3">
                Financial Breakdown Summary
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Total Annual Harvest Yield</span>
                  <span className="font-black text-slate-900 dark:text-white">
                    {totalAnnualYield.toLocaleString()} kg / Year
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-black/5 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Gross Annual Revenue</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">
                    ₹{(annualGrossRevenue / 100000).toFixed(2)} Lakh
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-black/5 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Estimated CapEx (Turnkey Setup)</span>
                  <span className="font-black text-purple-600 dark:text-purple-400">
                    ₹{(totalCapEx / 100000).toFixed(2)} Lakh
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-t border-black/5 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400">Recurring Annual OpEx</span>
                  <span className="font-black text-rose-500 dark:text-rose-400">
                    ₹{(annualOpEx / 100000).toFixed(2)} Lakh
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5 px-3 rounded-xl bg-purple-500/10 border border-purple-500/20 border-t">
                  <span className="font-bold text-slate-900 dark:text-white">Net Annual Take-Home</span>
                  <span className="text-base font-black text-purple-600 dark:text-purple-300">
                    ₹{(annualNetProfit / 100000).toFixed(2)} Lakh
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20calculated%20ROI%20for%20a%20${capacity}%20bag%20${variety}%20mushroom%20farm.%20Please%20send%20detailed%20DPR%20quotation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <span>Request Custom DPR Quotation</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
