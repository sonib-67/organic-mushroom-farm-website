'use client';

import React from 'react';
import {
  Store,
  Utensils,
  Smartphone,
  Truck,
  Sun,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

export const BusinessPlanMarketing: React.FC = () => {
  const channels = [
    {
      icon: Utensils,
      title: 'HoReCa (Hotels, Restaurants & Catering)',
      margin: 'High (35% – 45%)',
      price: '₹140 – ₹180 / kg',
      volume: '30 – 100 kg / week per client',
      strategy:
        'Deliver fresh samples to Executive Chefs. Offer consistent daily 7:00 AM morning deliveries and weekly billing cycles. Chinese, Continental, and fine-dining restaurants require regular daily fresh supplies.',
      badge: 'B2B High Consistency',
    },
    {
      icon: Smartphone,
      title: 'Direct-to-Consumer (D2C) & Gated Societies',
      margin: 'Highest (50% – 65%)',
      price: '₹200 – ₹260 / kg',
      volume: '50 – 150 kg / week',
      strategy:
        'Form WhatsApp broadcast groups inside premium residential societies and tech parks. Offer pre-orders of freshly harvested organic punnets delivered within 2 hours of plucking.',
      badge: 'Maximum Margin',
    },
    {
      icon: Store,
      title: 'Modern Retail & Organic Stores',
      margin: 'Moderate to High (30% – 40%)',
      price: '₹160 – ₹210 / kg',
      volume: '100 – 300 kg / week',
      strategy:
        'Supply 200g sealed barcoded punnets with FSSAI certification and attractive organic branding to regional supermarket chains, Blinkit / Zepto dark stores, and organic boutiques.',
      badge: 'Branded Retail',
    },
    {
      icon: Truck,
      title: 'Local APMC Sabzi Mandi (Wholesale)',
      margin: 'Baseline (20% – 25%)',
      price: '₹80 – ₹120 / kg',
      volume: 'Unlimited bulk clearance',
      strategy:
        'Use local vegetable commission agents (Aadtiyas) as a secondary liquidation channel during high-flush production days to ensure zero inventory sitting in the farm.',
      badge: 'Zero Backlog Security',
    },
    {
      icon: Sun,
      title: 'Solar Dehydrated Dry Export & B2B Powder',
      margin: 'Very High (55% – 70%)',
      price: '₹800 – ₹1,400 / kg (Dry)',
      volume: 'Long shelf life (12 Months)',
      strategy:
        'Dehydrate surplus fresh flush using solar dryers. Package in airtight foil stand-up pouches for sale on Amazon, Flipkart, IndiaMART, or supply directly to Ayurvedic pharma & soup manufacturers.',
      badge: 'Zero Spoilage',
    },
  ];

  return (
    <section id="marketing" className="py-16 md:py-24 bg-black/[0.02] dark:bg-white/[0.02] border-t dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 mb-4">
            <Store size={13} /> Multi-Channel Sales System
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
            How to Sell 100% of Your Mushroom Harvest at Premium Rates
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Never depend on a single buyer. A robust 5-tier distribution channel guarantees high cash realization,
            insulates you from spot mandi crashes, and protects profit margins.
          </p>
        </div>

        {/* Marketing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="glass p-6 sm:p-7 rounded-3xl border dark:border-white/10 border-black/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2 group-hover:text-cyan-500 transition-colors">
                    {ch.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {ch.strategy}
                  </p>
                </div>

                <div className="pt-4 border-t dark:border-white/5 border-black/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Realization Rate:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{ch.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Net Profit Margin:</span>
                    <span className="font-bold dark:text-white text-slate-900">{ch.margin}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
