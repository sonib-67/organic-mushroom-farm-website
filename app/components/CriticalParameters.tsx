"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Info,
  Layers,
  ArrowRight
} from "lucide-react";

interface PhaseParameter {
  id: string;
  name: string;
  stageNumber: string;
  duration: string;
  airTemp: string;
  bedTemp: string;
  humidity: string;
  co2: string;
  freshAir: string;
  light: string;
  casingMoisture: string;
  criticalNotes: string[];
}

const PHASES: PhaseParameter[] = [
  {
    id: "spawn-run",
    name: "Phase 1: Spawn Run (Mycelium Colonization)",
    stageNumber: "01",
    duration: "12 - 15 Days",
    airTemp: "22°C - 24°C",
    bedTemp: "24°C - 25°C",
    humidity: "85% - 90%",
    co2: "> 5,000 - 10,000 ppm",
    freshAir: "Zero (100% Recirculation)",
    light: "Complete Darkness (0 Lux)",
    casingMoisture: "Not Applicable",
    criticalNotes: [
      "High CO2 is essential to stimulate rapid vegetative mycelium hyphal network expansion.",
      "Keep grow room completely sealed in darkness; avoid introducing outside unsterilized air.",
      "Monitor bed temperature daily to prevent compost overheating (>28°C kills mycelium)."
    ],
  },
  {
    id: "case-run",
    name: "Phase 2: Case Run (Casing Layer Colonization)",
    stageNumber: "02",
    duration: "7 - 9 Days",
    airTemp: "23°C - 25°C",
    bedTemp: "24°C - 26°C",
    humidity: "88% - 92%",
    co2: "3,000 - 5,000 ppm",
    freshAir: "Low Recirculation",
    light: "Darkness (0 Lux)",
    casingMoisture: "65% - 70% Field Capacity",
    criticalNotes: [
      "Apply 35-40mm steam-pasteurized coir-pith/peat moss casing soil uniformly.",
      "Maintain consistent moisture via gentle misting without soaking through into compost.",
      "Mycelium should traverse 75-80% of the casing thickness before initiating air shocking."
    ],
  },
  {
    id: "pinning",
    name: "Phase 3: Pinhead Induction (Environmental Shocking)",
    stageNumber: "03",
    duration: "4 - 6 Days",
    airTemp: "14°C - 16°C",
    bedTemp: "16°C - 18°C",
    humidity: "88% - 92%",
    co2: "800 - 1,200 ppm",
    freshAir: "High Fresh Air Influx",
    light: "Low Indirect (50-100 Lux)",
    casingMoisture: "68% - 72%",
    criticalNotes: [
      "Thermal shock (drop air temp from 24°C down to 15°C within 36 hours) triggers pinning.",
      "Exhaust CO2 aggressively to drop levels below 1,200 ppm, signaling reproductive fruiting.",
      "Tiny white pinheads (primordia) emerge across the casing surface uniformly."
    ],
  },
  {
    id: "cropping",
    name: "Phase 4: Cropping & Harvest (Flush Development)",
    stageNumber: "04",
    duration: "25 - 35 Days (3 Flushes)",
    airTemp: "16°C - 18°C",
    bedTemp: "17°C - 19°C",
    humidity: "82% - 86%",
    co2: "1,000 - 1,500 ppm",
    freshAir: "Continuous Moderate Exchange",
    light: "Normal Ambient (100-200 Lux)",
    casingMoisture: "60% - 65%",
    criticalNotes: [
      "Harvest mushrooms when the veil is tight and cap reaches 35-50mm diameter before cap opens.",
      "Pick by gentle twisting motion to avoid damaging the underlying mycelial bed structure.",
      "Clean up dead stumps and fill depressions with pasteurized casing before flush 2 watering."
    ],
  },
];

export const CriticalParameters = () => {
  const [activePhase, setActivePhase] = useState<string>("pinning");

  const current = PHASES.find((p) => p.id === activePhase) || PHASES[0];

  return (
    <section id="critical-parameters" className="py-20 relative bg-slate-900/40 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Activity size={14} />
            <span>Precision Climate Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Critical Growth <span className="gradient-text">Parameters & SOPs</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Commercial mushroom cultivation requires strict microclimate accuracy across every development phase to guarantee maximum biological efficiency and prevent crop failure.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {PHASES.map((phase) => {
            const isSelected = activePhase === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-600/20 scale-[1.02]"
                    : "bg-white/5 dark:bg-slate-950/40 border-black/5 dark:border-white/10 hover:border-purple-500/40 hover:bg-white/10"
                }`}
              >
                <div>
                  <span className="text-[10px] font-black uppercase text-purple-400 tracking-wider">
                    Phase {phase.stageNumber} • {phase.duration}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1">
                    {phase.name.split(":")[1]?.trim() || phase.name}
                  </h4>
                </div>
                <div className="mt-3 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Air: {phase.airTemp}</span>
                  <ArrowRight size={12} className={isSelected ? "text-purple-400" : "text-slate-600"} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Dashboard */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-950/90 border border-purple-500/20 shadow-2xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase mb-2">
                <span>Phase {current.stageNumber} Microclimate Matrix</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {current.name}
              </h3>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-bold shrink-0">
              Optimal Duration: {current.duration}
            </div>
          </div>

          {/* 6 Key Environmental Factor Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {/* Air Temp */}
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Thermometer size={14} className="text-rose-400" />
                <span>Room Air Temp</span>
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {current.airTemp}
              </div>
            </div>

            {/* Bed Temp */}
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Thermometer size={14} className="text-orange-400" />
                <span>Substrate Bed</span>
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {current.bedTemp}
              </div>
            </div>

            {/* Relative Humidity */}
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Droplets size={14} className="text-blue-400" />
                <span>Relative Humidity</span>
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {current.humidity}
              </div>
            </div>

            {/* CO2 Levels */}
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Wind size={14} className="text-emerald-400" />
                <span>CO2 PPM</span>
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {current.co2}
              </div>
            </div>

            {/* Fresh Air */}
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Layers size={14} className="text-indigo-400" />
                <span>Fresh Air Influx</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                {current.freshAir}
              </div>
            </div>

            {/* Light */}
            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                <Sun size={14} className="text-amber-400" />
                <span>Light Intensity</span>
              </div>
              <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                {current.light}
              </div>
            </div>
          </div>

          {/* Operational SOP Bullet Points */}
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Info size={16} className="text-purple-400" />
              <span>Mandatory Operational Protocol</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {current.criticalNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CriticalParameters;
