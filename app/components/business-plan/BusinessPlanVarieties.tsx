'use client';

import React, { useState } from 'react';
import {
  Thermometer,
  Layers,
  IndianRupee,
  Activity,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanVarieties: React.FC = () => {
  const { openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'commercial' | 'exotic'>('all');

  const varieties = [
    {
      id: 'oyster',
      name: 'Oyster Mushroom (Dhingri)',
      botanical: 'Pleurotus ostreatus / florida',
      category: 'commercial',
      temp: '20°C – 30°C',
      humidity: '80% – 85%',
      substrate: 'Wheat Straw / Paddy Straw',
      cycle: '22 – 28 Days',
      investmentLevel: 'Low (₹25k – ₹1 Lakh)',
      difficulty: 'Beginner Friendly (★★★★★)',
      wholesaleRate: '₹100 – ₹140 / kg',
      retailRate: '₹180 – ₹250 / kg',
      dryValue: '₹800 – ₹1,200 / kg',
      highlight: 'Best for Beginners & Fast Cash Flow',
      description:
        'Zero AC requirement in temperate months. Low initial setup cost and fastest turnaround. Ideal for small rooms, shed setups, and local consumer deliveries.',
      badgeColor: 'bg-emerald-500/15 text-emerald-500 border-emerald-500/20',
    },
    {
      id: 'button',
      name: 'White Button Mushroom',
      botanical: 'Agaricus bisporus',
      category: 'commercial',
      temp: '14°C – 18°C (Fruiting) / 24°C (Spawn Run)',
      humidity: '85% – 90%',
      substrate: 'Compost (Straw + Poultry Manure + Gypsum)',
      cycle: '60 – 75 Days (Including Composting)',
      investmentLevel: 'Medium to High (₹3 Lakh – ₹25 Lakh+)',
      difficulty: 'Intermediate to Advanced (★★★☆☆)',
      wholesaleRate: '₹80 – ₹120 / kg',
      retailRate: '₹140 – ₹220 / kg',
      dryValue: 'Rarely dried (Sold fresh/canned)',
      highlight: '75%+ Indian Market Share',
      description:
        'Highest volume demand in Indian supermarkets, hotels, and marriage catering. Requires climate-controlled PUF panel chamber with chillers for year-round production.',
      badgeColor: 'bg-blue-500/15 text-blue-500 border-blue-500/20',
    },
    {
      id: 'milky',
      name: 'Milky Mushroom (Doodh Chhata)',
      botanical: 'Calocybe indica',
      category: 'commercial',
      temp: '28°C – 38°C',
      humidity: '80% – 85%',
      substrate: 'Paddy / Wheat Straw + Casing Soil',
      cycle: '40 – 50 Days',
      investmentLevel: 'Low to Moderate (₹50k – ₹2 Lakh)',
      difficulty: 'Moderate (★★★★☆)',
      wholesaleRate: '₹120 – ₹160 / kg',
      retailRate: '₹200 – ₹300 / kg',
      dryValue: 'Excellent Shelf-Life (5-7 days fresh)',
      highlight: 'Top Summer Crop in Tropical India',
      description:
        'Thrives in hot Indian summers when Button mushrooms cannot be grown naturally. High biological efficiency, crisp texture, and longer shelf-life without refrigeration.',
      badgeColor: 'bg-amber-500/15 text-amber-500 border-amber-500/20',
    },
    {
      id: 'shiitake',
      name: 'Shiitake Mushroom',
      botanical: 'Lentinula edodes',
      category: 'exotic',
      temp: '16°C – 22°C',
      humidity: '80% – 90%',
      substrate: 'Hardwood Sawdust + Wheat Bran',
      cycle: '75 – 90 Days',
      investmentLevel: 'Moderate to High',
      difficulty: 'Advanced (★★☆☆☆)',
      wholesaleRate: '₹400 – ₹700 / kg',
      retailRate: '₹800 – ₹1,200 / kg',
      dryValue: '₹2,500 – ₹4,000 / kg',
      highlight: 'Gourmet Asian Cuisine Favorite',
      description:
        'Highly prized culinary wood-decay mushroom with rich umami flavor and medicinal lentinan compounds. Sells at premium rates in high-end restaurants and 5-star hotels.',
      badgeColor: 'bg-purple-500/15 text-purple-500 border-purple-500/20',
    },
    {
      id: 'cordyceps',
      name: 'Cordyceps Militaris (Keeda Jadi)',
      botanical: 'Cordyceps militaris',
      category: 'exotic',
      temp: '18°C – 20°C (Sterile Lab Auto Chamber)',
      humidity: '75% – 85%',
      substrate: 'Sterilized Rice / Nutrient Broth',
      cycle: '60 – 70 Days',
      investmentLevel: 'High Lab Setup (₹5 Lakh – ₹20 Lakh)',
      difficulty: 'Expert Master Lab (★☆☆☆☆)',
      wholesaleRate: '₹60,000 – ₹1,20,000 / kg (Dry)',
      retailRate: '₹1.5 Lakh – ₹2.5 Lakh / kg (Dry)',
      dryValue: 'Highest value medicinal fungi in the world',
      highlight: 'Medicinal & Pharmaceutical Goldmine',
      description:
        'Cultivated in specialized sterile cleanrooms with strict spectrum LED lighting and HEPA positive-pressure ventilation. Used in premium stamina boosters, anti-aging, and oncology therapies.',
      badgeColor: 'bg-rose-500/15 text-rose-500 border-rose-500/20',
    },
  ];

  const filteredVarieties =
    selectedCategory === 'all'
      ? varieties
      : varieties.filter((v) => v.category === selectedCategory);

  return (
    <section id="varieties" className="py-16 md:py-24 border-t dark:border-white/10 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
            <Layers size={13} /> Step 1: Variety Selection
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight mb-4">
            Which Mushroom Variety Should You Grow in India?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Your choice depends on your geographic location, available budget, climate infrastructure, and target
            buyer segments (Local Sabzi Mandi vs 5-Star Hotels vs Export Market).
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              All Varieties ({varieties.length})
            </button>
            <button
              onClick={() => setSelectedCategory('commercial')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'commercial'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              Commercial Crops (Oyster / Button / Milky)
            </button>
            <button
              onClick={() => setSelectedCategory('exotic')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'exotic'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              High-Value Exotics (Shiitake / Cordyceps)
            </button>
          </div>
        </div>

        {/* Variety Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVarieties.map((item) => (
            <div
              key={item.id}
              className="glass p-6 rounded-3xl border dark:border-white/10 border-black/10 flex flex-col justify-between hover:border-emerald-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${item.badgeColor}`}
                  >
                    {item.highlight}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{item.cycle}</span>
                </div>

                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-1 group-hover:text-emerald-500 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs italic text-slate-500 dark:text-slate-400 mb-4">{item.botanical}</p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Specs Box */}
                <div className="space-y-2.5 py-4 border-y dark:border-white/5 border-black/5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Thermometer size={14} className="text-rose-500" /> Ideal Temp:
                    </span>
                    <span className="font-bold dark:text-white text-slate-900">{item.temp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Layers size={14} className="text-blue-500" /> Substrate:
                    </span>
                    <span className="font-semibold dark:text-slate-200 text-slate-800 text-right max-w-[60%] truncate">
                      {item.substrate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <IndianRupee size={14} className="text-emerald-500" /> Wholesale / Retail:
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      {item.wholesaleRate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Activity size={14} className="text-amber-500" /> Capital Req:
                    </span>
                    <span className="font-bold dark:text-slate-200 text-slate-800">{item.investmentLevel}</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-5 mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openQuoteCalculatorModal({ variety: item.name })}
                  className="flex-1 py-2 px-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-500 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1"
                >
                  <span>Check Cost</span>
                  <ArrowRight size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => openQuickOrderModal({ variety: item.name })}
                  className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-sm"
                >
                  <ShoppingBag size={13} />
                  <span>Get Spawn</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
