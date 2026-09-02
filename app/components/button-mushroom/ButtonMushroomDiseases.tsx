'use client';

import React from 'react';
import {
  ShieldAlert,
  Bug,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ShieldCheck,
} from 'lucide-react';

export const ButtonMushroomDiseases: React.FC = () => {
  const diseases = [
    {
      name: 'Wet Bubble Disease (Mycogone perniciosa)',
      symptoms:
        'Deformed cauliflower-like fungal masses with amber-colored liquid droplets oozing on the cap surface. Foul decaying odor in severe cases.',
      cure: 'Strict casing soil pasteurization at 65°C for 4 hours. Cover infected spots with salt and a plastic cup before harvesting.',
      threat: 'High Threat',
    },
    {
      name: 'Dry Bubble Disease (Lecanicillium fungicola)',
      symptoms:
        'Light brown spots on caps that turn leathery, split, and dry up. Stem tilts and peels outward.',
      cure: 'Lower room humidity slightly to 85%. Drench affected patches with 0.5% salt/baking soda solution. Sanitize harvesting knives.',
      threat: 'Moderate Threat',
    },
    {
      name: 'Green Mold (Trichoderma aggressivum)',
      symptoms:
        'Dense emerald-green fungal patches spreading rapidly over casing and compost, completely choking white Agaricus mycelium.',
      cure: 'Ensure zero unfermented carbohydrates in compost. Maintain high conditioning temp (48°C–52°C) in tunnel to build antagonist actinomycetes.',
      threat: 'Severe Threat',
    },
    {
      name: 'Bacterial Blotch (Pseudomonas tolaasii)',
      symptoms:
        'Pale yellow to dark chocolate-brown slimy water-soaked lesions on the cap surface due to water sitting on caps for >2 hours.',
      cure: 'Never spray water with coarse nozzles during pinning. Run exhaust fans for 30 minutes after watering to dry cap surfaces.',
      threat: 'Moderate Threat',
    },
    {
      name: 'Sciarid & Phorid Mushroom Flies',
      symptoms:
        'Tiny black flies buzzing around bags; white legless maggots burrowing into mushroom stems and feeding on mycelium.',
      cure: 'Install 60-mesh nylon air filters on all air intake dampers, yellow sticky traps (1 per 100 sq ft), and LED insect electrocutors.',
      threat: 'High Threat',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t dark:border-white/10 border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-3">
            <ShieldAlert size={13} /> Biosecurity & Crop Protection
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-3">
            Pest & Disease Management in Button Mushroom Farms
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Prevention is 100x cheaper than cure. Learn how to identify and eradicate common fungal competitor molds,
            bacterial blotches, and fly infestations organically.
          </p>
        </div>

        {/* Disease Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {diseases.map((d, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-3xl border border-rose-500/20 dark:border-rose-500/20 bg-rose-500/[0.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                    {d.threat}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  {d.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  <strong className="dark:text-slate-200 text-slate-800">Symptoms: </strong>
                  {d.symptoms}
                </p>
              </div>

              <div className="pt-3 border-t border-rose-500/15 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <strong className="text-slate-700 dark:text-slate-200 font-bold">Protocol: </strong>
                {d.cure}
              </div>
            </div>
          ))}
        </div>

        {/* 5-Rule Biosecurity Box */}
        <div className="glass p-6 sm:p-8 rounded-3xl border dark:border-white/10 border-black/10 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-transparent">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
            <ShieldCheck size={16} /> 5 Golden Rules of Farm Biosecurity
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Foot-dips with 2% potassium permanganate or bleach at every chamber entry.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Strict one-way traffic flow: workers never enter spawn run rooms after visiting harvest rooms.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Fine mist sprayers (50 micron) — never drench casing with heavy high-pressure water drops.</span>
            </div>
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>Post-harvest chamber cook-out with live steam at 70°C for 12 hours before unloading spent compost.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
