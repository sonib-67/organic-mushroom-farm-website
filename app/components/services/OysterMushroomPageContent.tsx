'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sprout,
  CheckCircle2,
  TrendingUp,
  Phone,
  ArrowRight,
  ShoppingCart,
  BookOpen,
  Sparkles,
  ChevronDown,
  Clock,
  ShieldCheck,
  Flame,
  Award,
  Layers,
  Thermometer,
  Droplets,
  PackageCheck,
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const OysterMushroomPageContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const varieties = [
    {
      name: 'Pearl / Grey Oyster',
      scientific: 'Pleurotus ostreatus',
      temp: '18°C – 24°C',
      traits: 'Highest market demand, meaty texture, dense clusters.',
      color: 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20',
    },
    {
      name: 'White Florida Oyster',
      scientific: 'Pleurotus florida',
      temp: '22°C – 28°C',
      traits: 'Heat tolerant, fast spawn run, ideal for Indian summer/autumn.',
      color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
    },
    {
      name: 'Pink Flamingo Oyster',
      scientific: 'Pleurotus djamor',
      temp: '24°C – 32°C',
      traits: 'Vibrant tropical strain, exotic restaurant favourite, ultra fast fruiting.',
      color: 'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20',
    },
    {
      name: 'Golden / Yellow Oyster',
      scientific: 'Pleurotus citrinopileatus',
      temp: '20°C – 26°C',
      traits: 'Aromatic cashew-like aroma, delicate bouquets, premium pricing.',
      color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Substrate Chopping & Soaking',
      desc: 'Chop clean wheat or paddy straw into 2–3 inch pieces. Soak in clean water for 12–16 hours to ensure 65% moisture saturation.',
      icon: Layers,
    },
    {
      step: '02',
      title: 'Pasteurization / Sterilization',
      desc: 'Heat water pasteurization at 75°C–80°C for 90 minutes or cold lime-chemical wash (2% lime + carbendazim) to eliminate mold and weed fungi.',
      icon: Flame,
    },
    {
      step: '03',
      title: 'Layer Spawning (Beej Milana)',
      desc: 'Cool substrate below 28°C. Inoculate with 2%–3% pure grain spawn in clean PP bags (12x18 inch) in compact, air-free layers.',
      icon: PackageCheck,
    },
    {
      step: '04',
      title: 'Dark Room Spawn Running',
      desc: 'Incubate closed bags in a dark, clean room at 24°C–28°C with 70% humidity. Mycelium fully colonizes the bag in 15–18 days.',
      icon: Thermometer,
    },
    {
      step: '05',
      title: 'Fruiting Induction & Pinning',
      desc: 'Cut slits on colonized white bags. Provide indirect light, fresh air exchange, and 85%–90% relative humidity. Pinheads appear in 4–6 days.',
      icon: Droplets,
    },
    {
      step: '06',
      title: 'Harvesting & Multiple Flushes',
      desc: 'Harvest mature clusters by twisting at the base before caps curl up. Yields 3 flushes over 45 days (700g–1.2kg per dry kg straw).',
      icon: Sprout,
    },
  ];

  const economics = [
    { scale: 'Small Home Scale (50 Bags)', cost: '₹3,000 – ₹5,000', yield: '40 – 50 kg', profit: '₹4,000 – ₹8,000 / batch' },
    { scale: 'Semi-Commercial (200 Bags)', cost: '₹12,000 – ₹18,000', yield: '160 – 200 kg', profit: '₹18,000 – ₹28,000 / month' },
    { scale: 'Commercial Unit (500 Bags)', cost: '₹30,000 – ₹45,000', yield: '400 – 500 kg', profit: '₹45,000 – ₹70,000 / month' },
    { scale: 'Industrial Farm (2,000+ Bags)', cost: '₹1.2L – ₹1.8L', yield: '1,600 – 2,000 kg', profit: '₹1.5L – ₹2.5L+ / month' },
  ];

  const faqs = [
    {
      q: 'Why is Oyster Mushroom (Dhingri) the easiest for beginners to grow?',
      a: 'Oyster mushrooms have vigorous, aggressive mycelium that rapidly outcompetes competing mold. They don’t require complicated casing soil or heavy refrigeration, and give their first fresh harvest within 20–25 days of spawning.',
    },
    {
      q: 'How much space do I need to start Oyster mushroom cultivation?',
      a: 'You can start in a small 10x10 ft spare room, basement, garage, or terrace shed. With vertical hanging ropes or tier-racks, a 10x10 ft room can easily accommodate 150–200 bags.',
    },
    {
      q: 'What is the shelf life and selling price of fresh vs dry oyster mushrooms?',
      a: 'Fresh oyster mushrooms stay fresh for 3–5 days in cool storage (sold at ₹100–₹160/kg retail, ₹60–₹90/kg wholesale). Solar-dried oyster mushrooms have a 12-month shelf life and fetch ₹600–₹1,200/kg in gourmet and export markets.',
    },
    {
      q: 'Can I get certified Oyster spawn delivered to my state?',
      a: 'Yes! Organic Mushrooms Farm delivers high-yielding, contamination-free F1 hybrid grain spawn across Madhya Pradesh, UP, Maharashtra, Rajasthan, Bihar, Karnataka, Tamil Nadu, and all Indian states via fast express courier.',
    },
    {
      q: 'Do you offer comprehensive Oyster mushroom cultivation training?',
      a: 'Yes, we provide both online digital courses (₹299 Basic / ₹699 Commercial) with lifetime video access, and 3-to-5 day hands-on practical offline training at our Jabalpur commercial farm.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Sprout size={14} /> Commercial Mushroom Services & Agronomy
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Oyster Mushroom <span className="gradient-text font-black">Cultivation & Services</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              Why Oyster Mushrooms (Dhingri) are taking the agricultural and culinary world by storm: Fast 25-day harvest cycles, minimal investment, low infrastructure cost, high bioconversion, and unmatched culinary versatility.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/training"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <BookOpen size={16} /> Learn Oyster Training <ArrowRight size={14} />
              </Link>
              <Link
                href="/spawn-seed"
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md"
              >
                <ShoppingCart size={16} /> Buy Certified Spawn
              </Link>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Oyster%20Mushroom%20cultivation%20training%20and%20spawn."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </section>

        {/* Nutritional & Commercial Advantage Cards */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Nutritional Powerhouse</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                  Naturally low in calories, loaded with 20%–30% dry protein, essential B vitamins, potassium, iron, and lovastatin (cholesterol-lowering agent). The ideal high-protein plant-based meat substitute.
                </p>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 size={14} /> 100% Organic & Chemical-Free
              </span>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Grower’s Favorite Fungus</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                  Aggressive mycelium that beats common green mold easily. Gives first flush in just 20–25 days on simple wheat/paddy straw without requiring expensive AC chillers or compost tunnels.
                </p>
              </div>
              <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 size={14} /> Low Setup Cost • Fast ROI
              </span>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Dual Market Revenue</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                  Sell fresh mushrooms locally to restaurants, vegetable vendors, and organic markets (₹100–₹160/kg) or sun-dry and dehydrate for 1-year shelf life, powder, and export (₹600–₹1,200/kg).
                </p>
              </div>
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 size={14} /> Zero Crop Wastage
              </span>
            </div>
          </div>
        </section>

        {/* Popular Oyster Varieties Section */}
        <section className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
                <Award size={12} /> Species & Climate Fit
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                High-Yielding <span className="gradient-text font-black">Oyster Varieties</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
                Choose the right variety according to your regional temperature and market demand.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {varieties.map((v, i) => (
                <div
                  key={i}
                  className="p-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border mb-3 ${v.color}`}>
                      {v.temp}
                    </span>
                    <h4 className="text-base font-bold dark:text-white text-slate-900 mb-1">{v.name}</h4>
                    <p className="text-[11px] italic text-slate-400 mb-3">{v.scientific}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{v.traits}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={13} /> F1 Spawn In Stock
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6-Step Cultivation Process */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <ShieldCheck size={12} /> Standard Operating Procedures
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Oyster Cultivation <span className="gradient-text font-black">Step-by-Step Blueprint</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{s.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <s.icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Economics & Profit Table */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Cost vs Profit <span className="gradient-text font-black">Economics</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                Realistic financial returns based on commercial Indian standard straw and spawn conversion.
              </p>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[550px]">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4 font-bold">Farm Scale</th>
                    <th className="py-3 px-4 font-bold">Approx. Input Cost</th>
                    <th className="py-3 px-4 font-bold">Expected Fresh Yield</th>
                    <th className="py-3 px-4 font-bold">Estimated Monthly Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {economics.map((e, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-bold dark:text-white text-slate-900">{e.scale}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">{e.cost}</td>
                      <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400 font-medium">{e.yield}</td>
                      <td className="py-3.5 px-4 font-black text-emerald-600 dark:text-emerald-400">{e.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                * Profits calculated at conservative fresh selling price of ₹120/kg. Value-added dry sales yields higher returns.
              </p>
              <Link
                href="/training"
                className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shrink-0 hover:scale-105 transition-transform"
              >
                Enroll In Master Course
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Oyster Mushroom <span className="gradient-text font-black">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm dark:text-slate-200 text-slate-800"
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0">Q:</span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1 pl-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">
              Ready to Start Your Oyster Mushroom Setup?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Get certified high-yield F1 spawn, professional training modules, and turnkey room setup blueprints with Organic Mushrooms Farm.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/training"
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-xs md:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <BookOpen size={16} /> Explore Training Courses
              </Link>
              <a
                href="tel:+919203544140"
                className="px-8 py-4 rounded-2xl bg-emerald-950/60 border border-white/20 text-white font-black text-xs md:text-sm inline-flex items-center gap-2 hover:bg-emerald-950/80 transition-all"
              >
                <Phone size={16} /> Call +91 9203544140
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Elements */}
      <div className="floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px] z-[99999]">
        <div className="pointer-events-auto">
          <AIChatWidget />
        </div>
        <div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">
          <div className="hidden md:flex flex-col gap-3 items-start">
            <div className="w-[140px] md:w-auto">
              <StickyTrainingButton size="normal" />
            </div>
          </div>
          <div className="h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]">
            <StickyTrainingButton size="small" />
          </div>
        </div>
      </div>

      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
    </div>
  );
};
