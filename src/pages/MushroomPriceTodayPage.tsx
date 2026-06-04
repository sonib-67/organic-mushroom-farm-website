import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Activity, BarChart, ArrowRight, Table, MessageCircle, Phone, Info, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function MushroomPriceTodayPage() {
  const [activeTab, setActiveTab] = useState('wholesale');

  const prices = {
    wholesale: [
      { type: "Button Mushroom", min: "₹120", max: "₹180", avg: "₹150", trend: "+2%" },
      { type: "Oyster Mushroom", min: "₹150", max: "₹220", avg: "₹180", trend: "-1%" },
      { type: "Milky Mushroom", min: "₹250", max: "₹350", avg: "₹300", trend: "+5%" },
      { type: "Dry Oyster", min: "₹800", max: "₹1200", avg: "₹1000", trend: "0%" },
    ],
    retail: [
      { type: "Button Mushroom (200g)", min: "₹40", max: "₹60", avg: "₹50", trend: "+2%" },
      { type: "Oyster Mushroom (200g)", min: "₹60", max: "₹80", avg: "₹70", trend: "+0%" },
      { type: "Milky Mushroom (200g)", min: "₹80", max: "₹120", avg: "₹100", trend: "+1%" },
      { type: "Dry Oyster (100g)", min: "₹120", max: "₹200", avg: "₹150", trend: "0%" },
    ]
  };

  const statePrices = [
    { state: "Madhya Pradesh", button: "₹140/kg", oyster: "₹170/kg" },
    { state: "Maharashtra", button: "₹160/kg", oyster: "₹200/kg" },
    { state: "Delhi NCR", button: "₹130/kg", oyster: "₹160/kg" },
    { state: "Karnataka", button: "₹180/kg", oyster: "₹220/kg" },
    { state: "Punjab", button: "₹120/kg", oyster: "₹150/kg" },
  ];

  return (
    <>
      <SEO 
        title="Mushroom Price Today in India 2026 | Daily Wholesale & Retail Rates"
        description="Check today's real-time mushroom prices in India. Get daily wholesale and retail rates for Button, Oyster, Milky, and Dry mushrooms across states."
        keywords="mushroom price today, daily mushroom rate, wholesale button mushroom price, oyster mushroom price, dry mushroom rates"
      />
      <div className="pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center py-16 max-w-4xl mx-auto">
            <div className="badge mx-auto mb-6">Live Market Rates</div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tighter">
              Mushroom Price <span className="gradient-text">Today</span>
            </h1>
            <p className="text-lg dark:text-slate-400 text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Get the latest daily wholesale and retail pricing for premium commercial mushrooms across major Indian markets.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919203544140" className="btn-primary px-8 py-3 rounded-full font-bold flex items-center gap-2">
                <MessageCircle size={18} /> Bulk Order on WhatsApp
              </a>
              <a href="tel:9203544140" className="px-8 py-3 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold">
                <Phone size={18} className="inline mr-2" /> Call for Hotel Supply
              </a>
            </div>
          </div>

          {/* Pricing Tabs */}
          <div className="mb-20">
            <div className="flex justify-center mb-8">
              <div className="glass rounded-full p-1 border dark:border-white/10 border-black/10 inline-flex">
                <button 
                  onClick={() => setActiveTab('wholesale')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'wholesale' ? 'bg-primary-start text-white shadow-lg' : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'}`}
                >
                  Wholesale Rates (Per Kg)
                </button>
                <button 
                  onClick={() => setActiveTab('retail')}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'retail' ? 'bg-primary-start text-white shadow-lg' : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'}`}
                >
                  Retail Rates
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(activeTab === 'wholesale' ? prices.wholesale : prices.retail).map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 hover:border-primary-start/50 transition-colors">
                  <h3 className="font-bold dark:text-white text-slate-900 text-lg mb-4">{item.type}</h3>
                  <div className="text-3xl font-black gradient-text mb-4">{item.avg}</div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Min Rate:</span>
                      <span className="font-bold dark:text-slate-300 text-slate-700">{item.min}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Max Rate:</span>
                      <span className="font-bold dark:text-slate-300 text-slate-700">{item.max}</span>
                    </div>
                  </div>
                  <div className={`text-xs font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-1 ${item.trend.startsWith('+') ? 'bg-green-500/10 text-green-500' : item.trend.startsWith('-') ? 'bg-red-500/10 text-red-500' : 'bg-slate-500/10 text-slate-500'}`}>
                    <Activity size={12} /> Trend: {item.trend} today
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* State wise Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="glass p-8 rounded-[2.5rem] border dark:border-white/5 border-black/5">
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-8 flex items-center gap-3">
                <Table className="text-primary-start" /> State-wise Wholesale Rates
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b dark:border-white/10 border-black/10">
                      <th className="pb-4 text-[10px] font-black uppercase text-slate-500">State / Region</th>
                      <th className="pb-4 text-[10px] font-black uppercase text-slate-500">Button (Per Kg)</th>
                      <th className="pb-4 text-[10px] font-black uppercase text-slate-500">Oyster (Per Kg)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {statePrices.map((row, i) => (
                      <tr key={i}>
                        <td className="py-4 font-bold dark:text-white text-slate-900">{row.state}</td>
                        <td className="py-4 font-medium dark:text-slate-300 text-slate-700">{row.button}</td>
                        <td className="py-4 font-medium dark:text-slate-300 text-slate-700">{row.oyster}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-8 rounded-[2.5rem] border dark:border-white/5 border-black/5 bg-primary-start/5">
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-4 flex items-center gap-3">
                  <BarChart className="text-primary-start" /> Market Demand Analysis
                </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-4">
                  The demand for organic mushrooms is surging by 25% YoY in Indian Metros. Button mushrooms maintain a premium requirement in the hotel and restaurant segment, while Oyster mushrooms are dominating direct-to-consumer health segments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-green-500" /> High Restaurant Supply Demand
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-green-500" /> Export Potential Increasing
                  </div>
                </div>
              </div>
              <div className="glass p-8 rounded-[2.5rem] border border-blue-500/20 bg-blue-500/5">
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Want to setup bulk daily supply?</h3>
                <p className="text-sm dark:text-slate-400 text-slate-600 mb-6">We provide contracted, continuous high-quality B2B supply for hotels, restaurants, and cloud kitchens.</p>
                <a href="tel:9203544140" className="btn-primary w-full justify-center px-4 py-3 rounded-xl font-bold flex items-center gap-2 text-sm">
                  <Phone size={16} /> Contact Sales Team
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[3rem] border dark:border-white/5 border-black/5 text-center mt-12 bg-linear-to-b from-transparent to-primary-start/10">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Need Accurate Pricing for Your Area?</h2>
            <p className="dark:text-slate-400 text-slate-600 mb-8 max-w-xl mx-auto">Click below to message our sales desk on WhatsApp and get the exact current rates and delivery feasibility for your location.</p>
            <a href="https://wa.me/919203544140" className="btn-primary inline-flex px-10 py-4 rounded-full font-bold text-lg items-center gap-3">
              <MessageCircle size={24} /> Get Custom Quote
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
