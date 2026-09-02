'use client';

import React from 'react';
import {
  Thermometer,
  Wind,
  Droplets,
  Gauge,
  Sun,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export const ButtonMushroomClimateTable: React.FC = () => {
  const stages = [
    {
      stage: 'Spawn Run (Vegetative)',
      compostTemp: '23°C – 25°C',
      airTemp: '22°C – 24°C',
      rh: '85% – 90%',
      co2: '> 5,000 ppm (High)',
      freshAir: 'Zero / Recirculation only',
      light: 'Total Darkness (0 Lux)',
      duration: '14 – 18 Days',
    },
    {
      stage: 'Casing Run (Colonization)',
      compostTemp: '24°C – 25°C',
      airTemp: '22°C – 23°C',
      rh: '88% – 92%',
      co2: '3,000 – 4,500 ppm',
      freshAir: 'Minimal / Intermittent',
      light: 'Total Darkness (0 Lux)',
      duration: '7 – 9 Days',
    },
    {
      stage: 'Pinhead Induction (Cold Shock)',
      compostTemp: '16°C – 18°C',
      airTemp: '15°C – 17°C',
      rh: '90% – 95%',
      co2: '800 – 1,100 ppm (Fresh Air)',
      freshAir: '4 – 6 Exchanges / Hour',
      light: 'Dark / Low ambient',
      duration: '4 – 6 Days',
    },
    {
      stage: 'Fruiting & Flush Harvesting',
      compostTemp: '16°C – 18°C',
      airTemp: '15°C – 17°C',
      rh: '85% – 90%',
      co2: '1,000 – 1,400 ppm',
      freshAir: '2 – 4 Exchanges / Hour',
      light: 'Dim work light only',
      duration: '25 – 35 Days',
    },
    {
      stage: 'End-of-Crop Cook-Out (Sanitization)',
      compostTemp: '70°C for 10–12 Hrs',
      airTemp: '68°C – 70°C',
      rh: '100% (Live Steam)',
      co2: 'N/A (Closed room)',
      freshAir: 'Zero / Sealed room',
      light: 'Dark',
      duration: '12 – 14 Hours',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t dark:border-white/10 border-black/10 bg-black/[0.01] dark:bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Activity size={13} /> Precision Micro-Climate Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-3">
            Stage-by-Stage Environmental Triggers Cheat Sheet
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Mushroom growing is an exact thermodynamic science. Use this reference chart to program your AHU chillers,
            foggers, and exhaust dampers for maximum biological yield.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="glass rounded-3xl border dark:border-white/10 border-black/10 overflow-hidden shadow-xl mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-black/5 dark:bg-white/5 border-b dark:border-white/10 border-black/10 text-slate-700 dark:text-slate-200 uppercase text-[11px] font-black tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Growth Stage</th>
                  <th className="p-4 sm:p-5">Compost Temp</th>
                  <th className="p-4 sm:p-5">Room Temp</th>
                  <th className="p-4 sm:p-5">Humidity (RH)</th>
                  <th className="p-4 sm:p-5">CO2 (PPM)</th>
                  <th className="p-4 sm:p-5">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-white/5 divide-black/5">
                {stages.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-emerald-500/[0.04] transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-bold dark:text-white text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>{row.stage}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-emerald-600 dark:text-emerald-400 font-semibold">
                      {row.compostTemp}
                    </td>
                    <td className="p-4 sm:p-5 dark:text-slate-200 text-slate-700 font-medium">
                      {row.airTemp}
                    </td>
                    <td className="p-4 sm:p-5 dark:text-slate-200 text-slate-700 font-medium">
                      {row.rh}
                    </td>
                    <td className="p-4 sm:p-5">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        {row.co2}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 dark:text-slate-400 text-slate-500 font-medium">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 px-2">
          <span>* Measured using high-accuracy calibrated NDIR CO2 sensors and PT100 soil probes.</span>
          <span>Source: Directorate of Mushroom Research (DMR Solan) & Commercial Farm SOPs</span>
        </div>
      </div>
    </section>
  );
};
