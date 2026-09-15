"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Flame,
  Wind,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Gauge,
  Factory
} from "lucide-react";

interface CompostUnit {
  id: string;
  name: string;
  tag: string;
  capacity: string;
  dimensions: string;
  batchYield: string;
  blowerRating: string;
  boilerSpec: string;
  idealFor: string;
  specifications: string[];
}

const COMPOST_UNITS: CompostUnit[] = [
  {
    id: "unit-2000",
    name: "2000-Bag Commercial Pasteurization Tunnel",
    tag: "Standard Commercial Scale",
    capacity: "18 - 20 Metric Tons Raw Compost / Batch",
    dimensions: "12 ft (W) × 30 ft (L) × 14 ft (H)",
    batchYield: "2,000 to 2,200 Polypropylene Grow Bags",
    blowerRating: "7.5 HP High-Static Backward Curved Blower (3,500 CFM)",
    boilerSpec: "100 kg/hr Wood/Pellet/Electric Steam Boiler",
    idealFor: "Farms producing 2,500 - 3,500 kg fresh button mushrooms per month.",
    specifications: [
      "100mm PUF Insulated Wall & Ceiling Panels (Density 40±2 kg/m³)",
      "High-density PVC Aerated Spigot Grate Floor with Plenum Chamber",
      "Automatic High-Static Variable Speed Centrifugal Blower",
      "4-Point PT100 Stainless Steel Temperature Sensor Telemetry",
      "Fresh Air / Recirculation Automated Modulating Damper Actuator",
      "Aseptic Inoculation & Outflow Discharge Doors with Silicone Gaskets"
    ],
  },
  {
    id: "unit-3000",
    name: "3000-Bag Industrial Pasteurization Tunnel",
    tag: "Industrial High-Volume Scale",
    capacity: "28 - 32 Metric Tons Raw Compost / Batch",
    dimensions: "14 ft (W) × 42 ft (L) × 15 ft (H)",
    batchYield: "3,000 to 3,500 Polypropylene Grow Bags",
    blowerRating: "12.5 HP Heavy-Duty Industrial Centrifugal Blower (6,000 CFM)",
    boilerSpec: "200 kg/hr High-Efficiency Automatic Steam Generator",
    idealFor: "Commercial projects supplying continuous daily wholesale hotel & export orders.",
    specifications: [
      "120mm Heavy-Duty PUF Insulated Panels with 0.6mm PPGI Steel Sheeting",
      "Reinforced Concrete Slotted Aerated Floor with High-Flow Nozzles",
      "Twin Dual-Stage Centrifugal Blowers with Redundancy Protection",
      "6-Channel Digital PLC Temperature & Differential Pressure Data Logger",
      "Steam Injection Manifold for Rapid Thermal Pasteurization to 60°C",
      "Integrated Winch & Pull-Grip Discharge Net System for Rapid Unloading"
    ],
  },
];

export const CompostUnits = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>("unit-2000");

  const current = COMPOST_UNITS.find((u) => u.id === selectedUnit) || COMPOST_UNITS[0];

  return (
    <section id="compost-units" className="py-20 relative bg-slate-900/40 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Factory size={14} />
            <span>Industrial Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Commercial <span className="gradient-text">Compost & Tunnel Units</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Turnkey Phase-II bulk pasteurization tunnels and composting bunkers designed for 99.4% pathogen sterilization and maximum mycelium selectivity.
          </p>
        </div>

        {/* Unit Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {COMPOST_UNITS.map((unit) => {
            const isSelected = selectedUnit === unit.id;
            return (
              <button
                key={unit.id}
                onClick={() => setSelectedUnit(unit.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-600/20 scale-[1.02]"
                    : "bg-white/5 dark:bg-slate-950/40 border-black/5 dark:border-white/10 hover:border-purple-500/40 hover:bg-white/10"
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                    {unit.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mt-1">
                    {unit.name}
                  </h3>
                </div>
                <div className="mt-3 text-xs font-bold text-purple-400 flex items-center justify-between">
                  <span>{unit.capacity}</span>
                  <ArrowRight size={14} className={isSelected ? "rotate-90 transition-transform" : ""} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Unit Details */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-950/90 border border-purple-500/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-2">
                  <span>{current.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {current.idealFor}
                </p>
              </div>

              {/* Specs Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="text-[11px] text-slate-500 mb-1">Tunnel Dimensions</div>
                  <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    {current.dimensions}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="text-[11px] text-slate-500 mb-1">Batch Bag Output</div>
                  <div className="text-xs sm:text-sm font-black text-purple-600 dark:text-purple-400">
                    {current.batchYield}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <div className="text-[11px] text-slate-500 mb-1">Blower Telemetry</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">
                    {current.blowerRating.split("(")[0]}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Key Technical Features & Automation:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Consultation & Turnkey Engineering */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-linear-to-br from-amber-950/30 via-slate-900/60 to-purple-950/30 border border-amber-500/20 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
                  <ShieldCheck size={16} />
                  <span>Turnkey Fabrication & Warranty</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Complete Civil, Electrical & Blower Installation
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our engineering team executes complete on-site civil fabrication, boiler steam piping, aerated floor grates, and PLC temperature telemetry with a 3-year structural guarantee.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(current.name)}.%20Please%20send%20civil%20drawings%20and%20quotation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <span>Get Tunnel Quotation & Civil Layout</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompostUnits;
