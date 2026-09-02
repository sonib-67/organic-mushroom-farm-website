'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const BusinessPlanFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much minimum investment is needed to start a mushroom farm in India?',
      a: 'A small pilot unit for Oyster or Milky mushrooms can be launched with an initial capital of ₹25,000 to ₹65,000 in a 300–500 sq ft room. For a semi-commercial setup (2,000 sq ft), investment is around ₹2.5 to ₹3.8 Lakhs. A commercial climate-controlled Button mushroom facility typically starts from ₹15 Lakhs onwards.',
    },
    {
      q: 'How much net monthly profit can I earn from 1,000 Oyster mushroom bags?',
      a: '1,000 Oyster bags produce approximately 450 kg to 550 kg of fresh harvest per cycle (45 days). At an average selling price of ₹160/kg, gross revenue is ₹72,000–₹88,000. After deducting substrate, spawn, electricity, and packaging costs (approx. ₹30,000), the net profit is around ₹42,000 to ₹55,000 per cycle.',
    },
    {
      q: 'Do I need agricultural land to start a mushroom farming business?',
      a: 'No. Mushroom cultivation is an indoor vertical farming practice. It requires zero fertile soil and can be conducted inside empty residential rooms, basements, garage sheds, warehouses, or farm outhouses using multi-tier vertical racks.',
    },
    {
      q: 'Which mushroom variety is best for a complete beginner in India?',
      a: 'Oyster Mushroom (Dhingri) is universally recommended for beginners because of its low setup cost, wide temperature tolerance (20°C–30°C), fast 22-day cropping turnaround, and resistance to diseases compared to compost-intensive Button mushrooms.',
    },
    {
      q: 'Is there a government subsidy for mushroom farming in India?',
      a: 'Yes. Under the National Horticulture Board (NHB) and Mission for Integrated Development of Horticulture (MIDH), capital subsidies of 40% to 50% are available for commercial mushroom production units, spawn laboratories, and compost facilities. Additional interest subvention is offered under the Agriculture Infrastructure Fund (AIF).',
    },
    {
      q: 'How do I market and sell my fresh mushrooms without getting exploited by middlemen?',
      a: 'Focus on a direct multi-channel model: 1) Secure daily morning supply contracts with local restaurants and hotels (HoReCa) at ₹140–₹180/kg; 2) Pre-sell 200g punnets directly to gated society WhatsApp groups at ₹200–₹250/kg; 3) Dehydrate any unsold flush using solar dryers to produce dry mushrooms (₹800–₹1,200/kg) with a 12-month shelf life.',
    },
    {
      q: 'How long does it take from spawning to the first harvest?',
      a: 'For Oyster mushrooms, the vegetative colonization (spawn run) takes 14 to 18 days in the dark. Once exposed to fresh air and humidity, pinheads emerge within 3–4 days and grow to harvestable size in 48–72 hours. Total time from bag preparation to harvest is around 22–26 days.',
    },
    {
      q: 'Can I do mushroom farming as a part-time venture alongside my existing job?',
      a: 'Yes. A small to medium setup (500–1,000 bags) requires only 1 to 2 hours of daily supervision in the morning and evening for misting, humidity checks, and harvesting. Automated timer-based foggers and exhausts make remote monitoring even easier.',
    },
    {
      q: 'How can I get high-yield certified F1 spawn delivered to my location?',
      a: 'Organic Mushrooms Farm supplies lab-certified F1 grain spawn packed in sterile master filter bags across all states in India with express delivery. You can order online via our instant Spawn Order modal or contact our helpline at 9203544140.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 border-t dark:border-white/10 border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
            <HelpCircle size={13} /> Common Queries & Answers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything you need to know about commercial feasibility, investment requirements, and profit margins.
          </p>
        </div>

        {/* Accordion Stack */}
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
