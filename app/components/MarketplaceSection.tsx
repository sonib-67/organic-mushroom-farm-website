"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShoppingBag,
  Sprout,
  Truck,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Package,
  Layers,
  Sparkles
} from "lucide-react";

interface MarketplaceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  badgeColor: string;
  priceTag: string;
  minOrder: string;
  dispatchTime: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaParam: string;
}

const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: "spawn-b2b",
    title: "Commercial F1 Grain Spawn (Seed)",
    category: "Certified Bio-Lab Seeds",
    badge: "Most Popular",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    priceTag: "₹90 - ₹140 / kg (Wholesale)",
    minOrder: "10 kg Minimum Batch",
    dispatchTime: "24 - 48 Hrs Express Dispatch",
    description:
      "First-generation master culture inoculated on high-protein wheat/sorghum grain. Fully sterile lab packing with 99.4% colonization guarantee.",
    highlights: [
      "Varieties: White Button, Oyster, Milky, Shiitake, Cordyceps",
      "Zero Trichoderma green mold contamination guarantee",
      "Refrigerated insulated foam courier packing across India",
      "Volume discounts on monthly recurring farm orders"
    ],
    ctaText: "Order Mushroom Spawn",
    ctaParam: "F1%20Spawn%20Order",
  },
  {
    id: "fresh-wholesale",
    title: "Fresh Harvest Wholesale Supply",
    category: "Farm Fresh Supply",
    badge: "Daily Harvest",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    priceTag: "₹120 - ₹180 / kg",
    minOrder: "50 kg Bulk Mandi / Hotel Supply",
    dispatchTime: "Same-Day Morning Pick & Ship",
    description:
      "Direct daily farm-harvested Button and Oyster mushrooms for hotels, restaurants, caterers, hypermarkets, and vegetable wholesalers.",
    highlights: [
      "Grade-A 35-50mm closed cup tight veil buttons",
      "Packed in 200g punnets or 5kg perforated corrugated crates",
      "Zero chemical bleach or artificial wash guarantee",
      "Cold-chain refrigerated transport direct to mandi"
    ],
    ctaText: "Inquire Fresh Wholesale",
    ctaParam: "Fresh%20Mushroom%20Wholesale",
  },
  {
    id: "dry-export",
    title: "Dry Mushroom & Powder Export",
    category: "Global Export & Nutraceuticals",
    badge: "International B2B",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    priceTag: "₹800 - ₹1,800 / kg (Export Grade)",
    minOrder: "25 kg Vacuum Sealed Bags",
    dispatchTime: "Global Air/Sea Freight Ready",
    description:
      "Solar and heat-pump dehydrated dry Oyster, Shiitake, Reishi, and Cordyceps fruit bodies with lab-tested bioactive polysaccharide & beta-glucan content.",
    highlights: [
      "Moisture content strictly <8% for 24-month shelf life",
      "FSSAI, APEDA & Phytosanitary certified for export",
      "Custom mesh powder formulation (60-120 mesh) available",
      "Export documentation (COO, COA, Lab Testing) support"
    ],
    ctaText: "Inquire Dry Export Trade",
    ctaParam: "Dry%20Mushroom%20Export%20Trade",
  },
];

export const MarketplaceSection = () => {
  return (
    <section id="marketplace" className="py-20 relative bg-slate-900/40 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShoppingBag size={14} />
            <span>B2B & Retail Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Commercial <span className="gradient-text">Spawn, Fresh & Dry Trade</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">
            Source certified high-yield lab spawn, procure bulk fresh mushrooms for hotels and retail chains, or trade export-grade dried mushrooms.
          </p>
        </div>

        {/* 3 Marketplace Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MARKETPLACE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-950/80 border border-purple-500/20 shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all hover:scale-[1.01]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 my-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Indicative Price:</div>
                  <div className="text-lg font-black text-purple-600 dark:text-purple-300">
                    {item.priceTag}
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>Min: {item.minOrder}</span>
                    <span>{item.dispatchTime}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20place%20an%20inquiry%20for%20${item.ctaParam}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <span>{item.ctaText}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
