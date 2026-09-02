'use client';

import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Rocket,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanMistakesAndRoadmap: React.FC = () => {
  const { openConsultationModal } = useAppModals();

  const mistakes = [
    {
      title: 'Starting Huge Without a Small Pilot Run',
      desc: 'Investing ₹10+ Lakhs on day one without understanding local humidity fluctuations and hygiene protocols. Always run a 200–500 bag pilot first.',
    },
    {
      title: 'Buying Cheap, Unverified Grain Spawn',
      desc: 'Saving ₹10/kg on uncertified local spawn that carries latent bacterial or Trichoderma mold spores, resulting in 100% crop collapse.',
    },
    {
      title: 'Inadequate Ventilation (CO2 Poisoning)',
      desc: 'Keeping the growing room completely sealed without timer-based exhaust fans. High CO2 results in long rubbery stems and tiny unusable caps.',
    },
    {
      title: 'Waiting for Harvest Day to Search for Buyers',
      desc: 'Fresh mushrooms have a 24-48 hour shelf-life. You must line up local hotel, restaurant, and mandi buyers 3 weeks BEFORE your first flush.',
    },
    {
      title: 'Skipping Systematic Pasteurization SOPs',
      desc: 'Rushing or poorly heating the straw substrate. Improperly pasteurized straw turns into a breeding ground for black and green competitor molds.',
    },
  ];

  const roadmapPhases = [
    {
      phase: '01',
      title: 'Mastery & Practical Training',
      duration: 'Week 1 – 2',
      focus:
        'Complete hands-on or structured online training covering substrate pasteurization, spawn inoculation, environmental triggers, and pest management.',
    },
    {
      phase: '02',
      title: 'Pilot Farm (200 – 500 Bags)',
      duration: 'Month 1 – 2',
      focus:
        'Set up a single room unit. Validate your local straw quality, test your foggers, master the fruiting cycle, and distribute fresh samples to local chefs and societies.',
    },
    {
      phase: '03',
      title: 'Commercial Scale & HoReCa Tie-Ups',
      duration: 'Month 3 – 6',
      focus:
        'Expand to 2,000–5,000 bags. Secure recurring daily morning delivery contracts with local restaurants, caterers, and residential society WhatsApp groups.',
    },
    {
      phase: '04',
      title: 'Zero-Waste Value Addition & Dry Export',
      duration: 'Month 6 – 12',
      focus:
        'Integrate solar dehydrators to convert surplus flushes into dried mushrooms, organic mushroom soup powder, and pickles for high-margin e-commerce sales.',
    },
    {
      phase: '05',
      title: 'Regional Hub & In-House Spawn Lab',
      duration: 'Year 1+',
      focus:
        'Scale up to a turnkey commercial farm with climate-controlled automated chambers, custom compost tunnels, and in-house laboratory spawn production.',
    },
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02] border-t dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mistakes Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/10 text-rose-500 border border-rose-500/20 mb-4">
              <AlertTriangle size={13} /> Risk Mitigation
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
              5 Costly Mistakes to Avoid as a Mushroom Entrepreneur
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              90% of beginner crop failures are completely preventable. Learn what NOT to do before spending a single rupee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mistakes.map((m, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-3xl border border-rose-500/20 dark:border-rose-500/20 bg-rose-500/[0.02] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-2">
                    <AlertTriangle size={15} /> Pitfall 0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Phase Growth Roadmap */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
              <Rocket size={13} /> 5-Stage Execution Framework
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
              The 5-Phase Scalable Growth Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Follow this structured phased progression to minimize cash risk, ensure positive cash flow from month one,
              and build a sustainable agribusiness enterprise.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {roadmapPhases.map((rp, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl md:rounded-3xl border dark:border-white/10 border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 font-black text-lg flex items-center justify-center shrink-0">
                    {rp.phase}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                        {rp.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {rp.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {rp.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
