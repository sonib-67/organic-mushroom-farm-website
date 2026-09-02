'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const ButtonMushroomFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can button mushrooms be grown without air conditioning in India?',
      a: 'Yes, but only during the natural winter months (November to February) in North and Central India when ambient temperatures stay between 14°C and 22°C. For commercial year-round production (365 days) across all Indian states, an insulated PUF panel room with an AHU chiller system is mandatory.',
    },
    {
      q: 'What is the standard yield of white button mushrooms per ton of compost?',
      a: 'With modern Phase-II pasteurized compost and high-vigor F1 hybrid spawn, commercial growers achieve a biological efficiency of 18% to 22%. That means 1 Ton (1,000 kg) of wet compost produces approximately 180 kg to 220 kg of fresh grade-A button mushrooms across 3 flushes.',
    },
    {
      q: 'Where do I get Phase-II pasteurized compost if I cannot build a bulk tunnel?',
      a: 'Commercial spawn and compost yards supply ready-spawned Phase-II pasteurized compost blocks (10 kg / 12 kg bags) delivered directly via trucks to your farm. This allows beginners to start growing immediately without building expensive composting infrastructure.',
    },
    {
      q: 'What is casing soil and can I grow button mushrooms without it?',
      a: 'No, button mushrooms cannot form fruit bodies without casing soil. Casing provides physical support, retains vital moisture without suffocating the compost, and contains beneficial bacteria (Pseudomonas putida) that stimulate mycelium to initiate pinhead formation.',
    },
    {
      q: 'How many days does one complete button mushroom cropping cycle take?',
      a: 'From spawning to the end of the 3rd harvest flush, a standard commercial cycle takes 45 to 50 days: 14–18 days for Spawn Run, 7–9 days for Casing Run, 5–6 days for Pinning, and 15–20 days for 3 sequential harvest flushes.',
    },
    {
      q: 'What are the bank subsidies available for commercial button mushroom setups?',
      a: 'The National Horticulture Board (NHB) provides 40% to 50% credit-linked capital subsidy (up to ₹20–₹50 Lakhs depending on unit size) for climate-controlled button mushroom units and spawn laboratories. Additional 3% interest subvention is provided under the Agriculture Infrastructure Fund (AIF).',
    },
    {
      q: 'How do I contact Organic Mushrooms Farm for certified spawn and turnkey setup?',
      a: 'You can call or WhatsApp our senior technical advisory desk at 9203544140, or use the interactive Quote Calculator and Consultation booking modals on this website.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t dark:border-white/10 border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <HelpCircle size={13} /> Common Queries & Answers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Essential facts about button mushroom farming, climate controls, compost sourcing, and profitability.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-emerald-500/40 shadow-md dark:bg-white/[0.04] bg-black/[0.03]'
                    : 'border-black/10 dark:border-white/10 hover:border-emerald-500/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base dark:text-white text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-black/5 dark:bg-white/5 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-500' : ''
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t dark:border-white/5 border-black/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
