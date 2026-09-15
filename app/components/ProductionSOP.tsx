"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ListOrdered,
  Layers,
  Sparkles,
  Flame,
  Sprout,
  Droplets,
  PackageCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

interface SOPStep {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: any;
  keyActions: string[];
  scientificPrinciple: string;
}

const SOP_STEPS: SOPStep[] = [
  {
    number: "01",
    title: "Phase-I Composting & Bunker Blending",
    subtitle: "Raw Material Pre-wetting & Biological Fermentation",
    duration: "14 - 18 Days",
    icon: Flame,
    keyActions: [
      "Blend wheat straw / paddy straw (1000 kg) with poultry manure (350 kg) & urea (15 kg).",
      "Ensure thorough pre-wetting to reach 72-75% moisture content without runoff.",
      "Execute automated aerobic bunker aeration with temperature peaks reaching 70-75°C."
    ],
    scientificPrinciple:
      "Thermophilic actinomycetes and fungi convert simple sugars into complex microbial protein while eliminating harmful pathogens and wild mold spores.",
  },
  {
    number: "02",
    title: "Phase-II Bulk Pasteurization",
    subtitle: "Thermal Sterilization & Ammonia Conditioning",
    duration: "6 - 7 Days",
    icon: ShieldCheck,
    keyActions: [
      "Load compost into insulated pasteurization tunnel with perforated aerated spigot floor.",
      "Peak Heat Pasteurization: Hold compost bed at 58°C - 60°C for strictly 6 to 8 hours.",
      "Conditioning Phase: Maintain 48°C - 52°C until free ammonia drops below 5 - 10 ppm."
    ],
    scientificPrinciple:
      "Selects for Scytalidium thermophilum biomass, which renders the compost exclusively selective for Agaricus bisporus mushroom mycelium growth.",
  },
  {
    number: "03",
    title: "Aseptic Inoculation & Spawning",
    subtitle: "Lab-Grade Grain Spawn Blending & Bagging",
    duration: "1 Day (Immediate)",
    icon: Sprout,
    keyActions: [
      "Cool compost rapidly down to 24°C before introducing living grain spawn.",
      "Spawn rate: Inoculate with 0.75% to 1.0% F1 certified grain spawn by compost weight.",
      "Pack into 10kg - 12kg polypropylene grow bags or load onto galvanized 5-tier racks."
    ],
    scientificPrinciple:
      "Uniform through-spawning ensures rapid, multi-point colonization that outcompetes competitor molds like Trichoderma green mold.",
  },
  {
    number: "04",
    title: "Dark Incubation (Spawn Run)",
    subtitle: "Vegetative Hyphal Colonization",
    duration: "12 - 15 Days",
    icon: Clock,
    keyActions: [
      "Maintain air temperature strictly at 23°C - 24°C and relative humidity at 85% - 90%.",
      "Keep grow chamber sealed in complete darkness with 100% internal air recirculation.",
      "Monitor bed probes to prevent bed core temperature from exceeding 27°C."
    ],
    scientificPrinciple:
      "Elevated CO2 concentrations (>8,000 ppm) stimulate vegetative hyphal growth across the entire substrate matrix.",
  },
  {
    number: "05",
    title: "Casing Application & Ruffling",
    subtitle: "Sterile Casing Soil Layering",
    duration: "8 - 10 Days",
    icon: Layers,
    keyActions: [
      "Apply 35mm - 40mm of steam-pasteurized peat moss / coir pith casing soil (pH 7.5 - 7.8).",
      "Mist with fine atomizing nozzles to saturate casing soil to 70% water-holding capacity.",
      "Execute shallow ruffling / scratching on Day 6 to ensure even mycelial knotting."
    ],
    scientificPrinciple:
      "Pseudomonas putida bacteria residing in casing soil stimulate primordial knotting (pinhead formation) through calcium signaling.",
  },
  {
    number: "06",
    title: "Fruiting Induction & Flushes",
    subtitle: "Thermal Shocking & 3-Flush Harvest Cycles",
    duration: "25 - 35 Days",
    icon: PackageCheck,
    keyActions: [
      "Air Shock: Drop room air temperature from 24°C down to 15°C - 16°C within 36 hours.",
      "Exhaust CO2 to <1,000 ppm and introduce fresh filtered air with 85% relative humidity.",
      "Harvest buttons at 35-50mm diameter. Collect Flush 1 (60%), Flush 2 (30%), and Flush 3 (10%)."
    ],
    scientificPrinciple:
      "Abrupt environmental change triggers the reproductive phase, transforming vegetative mycelium knots into commercial harvestable mushroom buttons.",
  },
];

export const ProductionSOP = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="production-sop" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ListOrdered size={14} />
            <span>Industrial Farm SOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Commercial Production <span className="gradient-text">Timeline & SOPs</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            From raw composting to post-harvest cold storage, follow our standardized commercial agronomy protocol followed by certified high-yield farms.
          </p>
        </div>

        {/* Step Navigation Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {SOP_STEPS.map((step, idx) => {
            const isCurrent = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-600/20 scale-[1.02]"
                    : "bg-white/5 dark:bg-slate-950/40 border-black/5 dark:border-white/10 hover:border-purple-500/40 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-purple-400">Step {step.number}</span>
                  <Icon size={16} className={isCurrent ? "text-purple-400" : "text-slate-500"} />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                  {step.title.split(":")[0]}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">{step.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-950/90 border border-purple-500/20 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Step Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 uppercase">
                    Step {SOP_STEPS[activeStep].number} of 06
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Duration: {SOP_STEPS[activeStep].duration}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  {SOP_STEPS[activeStep].title}
                </h3>
                <p className="text-sm font-medium text-purple-400 mt-1">
                  {SOP_STEPS[activeStep].subtitle}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Critical Action Items:
                </h4>
                <ul className="space-y-3">
                  {SOP_STEPS[activeStep].keyActions.map((action, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Scientific Principle & SOP Download */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-linear-to-br from-purple-950/40 to-slate-900/60 border border-purple-500/20 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase text-purple-400 tracking-wider">
                  Microbiological Principle
                </span>
                <h4 className="text-base font-bold text-white mt-1 mb-3">
                  Underlying Agronomy Science
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {SOP_STEPS[activeStep].scientificPrinciple}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20want%20the%20Complete%20Commercial%20Mushroom%20SOP%20Manual%20(PDF)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <span>Download Full SOP Manual (PDF)</span>
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

export default ProductionSOP;
