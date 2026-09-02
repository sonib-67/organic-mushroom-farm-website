'use client';

import React from 'react';
import {
  TrendingUp,
  ShoppingBag,
  Building2,
  Utensils,
  Award,
  Zap,
  Globe2,
  CheckCircle2,
} from 'lucide-react';

export const ButtonMushroomWhyKing: React.FC = () => {
  const drivers = [
    {
      icon: ShoppingBag,
      title: 'Massive Retail Penetration',
      desc: 'Over 80% of urban Indian households recognize White Button mushrooms as standard "Mushroom". Present in every modern supermarket, Blinkit/Zepto quick-commerce store, and local mandi.',
      stat: '85% Shelf Share',
    },
    {
      icon: Utensils,
      title: 'Institutional HoReCa Dominance',
      desc: 'Standardized ingredient in Chinese wok dishes, pizza toppings (Domino’s, Pizza Hut), luxury buffet hotels, continental soups, and Indian shahi mushroom gravies.',
      stat: '₹140 – ₹200/kg B2B',
    },
    {
      icon: Building2,
      title: 'Year-Round Price Stability',
      desc: 'Unlike perishable green vegetables that crash in peak seasons, button mushrooms maintain steady wholesale prices throughout the year, especially in climate-controlled operations.',
      stat: '365 Days Stable Cash Flow',
    },
    {
      icon: Globe2,
      title: 'Industrial Processing & Canning',
      desc: 'Surplus flushes are easily processed into canned brine button mushrooms, mushroom pickles, and dried mushroom powder with 12–24 months shelf life.',
      stat: 'Zero Distress Sales',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t dark:border-white/10 border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
            <Award size={13} /> Commercial Market Dominance
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-3">
            Why Button Mushroom is the Undisputed King of Cash Crops
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            While Oyster and Milky mushrooms offer easy entry for home growers, White Button Mushroom (<em>Agaricus bisporus</em>)
            is the powerhouse that drives multi-crore commercial agribusinesses across India.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {drivers.map((d, idx) => {
            const Icon = d.icon;
            return (
              <div
                key={idx}
                className="glass p-6 rounded-3xl border dark:border-white/10 border-black/10 flex flex-col justify-between hover:border-emerald-500/30 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {d.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-md">
            !
          </div>
          <div>
            <h4 className="text-sm font-bold dark:text-white text-slate-900 mb-1">
              Key Technological Advantage for Indian Growers
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Earlier, button mushrooms were grown exclusively as a seasonal winter crop in North India (Himachal, Haryana, Punjab).
              With modern <strong>Insulated PUF Panel Chambers and Chiller HVAC units</strong>, farmers in Maharashtra, Madhya Pradesh,
              Gujarat, Karnataka, and Tamil Nadu now produce premium white button mushrooms 365 days a year with up to 6 cropping cycles annually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
