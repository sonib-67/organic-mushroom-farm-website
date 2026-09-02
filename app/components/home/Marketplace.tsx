'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, MessageCircle, Sparkles } from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const Marketplace: React.FC = () => {
  const { openQuickOrderModal, openConsultationModal } = useAppModals();

  const items = [
    {
      type: "Fast Order",
      title: "Mushroom Spawn (Seed)",
      desc: "Lab-grade certified F1 hybrid grain spawn.",
      price: "From ₹120/kg",
      actionType: "quick_order",
      to: "/spawn-seed",
    },
    {
      type: "Commercial B2B",
      title: "Fresh Organic Mushrooms",
      desc: "A-grade commercial button & oyster mushrooms.",
      price: "Live Market Rate",
      actionType: "consultation",
      category: "Spawn & Bulk Purchase",
    },
    {
      type: "Export Grade",
      title: "Dry Mushrooms Export",
      desc: "Solar-dehydrated, premium export quality.",
      price: "Wholesale Only",
      actionType: "consultation",
      category: "Spawn & Bulk Purchase",
    },
  ];

  return (
    <section id="market" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Global Market Linkage</div>
        <h2 className="mb-4 uppercase tracking-tight">
          Global{" "}
          <span className="gradient-text">Mushroom B2B Marketplace</span>
        </h2>
        <p className="max-w-xl mx-auto mb-5 font-medium">
          Connect directly with verified commercial buyers and sellers
          worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
          {items.map((ad, i) => {
            if (ad.actionType === 'quick_order') {
              return (
                <div
                  key={i}
                  className="glass p-4 rounded-2xl border dark:border-white/10 border-black/10 relative group cursor-pointer flex flex-col justify-between"
                  onClick={() => openQuickOrderModal({ variety: 'Button Mushroom' })}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-500">
                        {ad.type}
                      </div>
                      <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                        <Sparkles size={10} /> Instant Checkout
                      </span>
                    </div>
                    <h3 className="dark:text-white text-slate-900 mb-1 mt-3 tracking-tight font-bold text-lg">
                      {ad.title}
                    </h3>
                    <div className="text-[12px] text-slate-500 mb-4">
                      {ad.desc}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t dark:border-white/5 border-black/5">
                    <span className="dark:text-white text-slate-900 font-bold text-xs dark:bg-white/5 bg-black/5 px-3 py-1.5 rounded-xl">
                      {ad.price}
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
                    >
                      <ShoppingCart size={13} /> Quick Order
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={i}
                className="glass p-4 rounded-2xl border dark:border-white/10 border-black/10 relative group cursor-pointer flex flex-col justify-between"
                onClick={() => openConsultationModal({ category: ad.category })}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400">
                      {ad.type}
                    </div>
                  </div>
                  <h3 className="dark:text-white text-slate-900 mb-1 mt-3 tracking-tight font-bold text-lg">
                    {ad.title}
                  </h3>
                  <div className="text-[12px] text-slate-500 mb-4">
                    {ad.desc}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t dark:border-white/5 border-black/5">
                  <span className="dark:text-white text-slate-900 font-bold text-xs dark:bg-white/5 bg-black/5 px-3 py-1.5 rounded-xl">
                    {ad.price}
                  </span>
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <span>Get Trade Rates</span> <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

