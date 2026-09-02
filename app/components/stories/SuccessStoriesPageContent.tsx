'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Quote,
  Star,
  Award,
  TrendingUp,
  UserCheck,
  ArrowRight,
  Sparkles,
  Calendar,
  Building2,
  Sprout,
  CheckCircle2,
  Users,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const SuccessStoriesPageContent: React.FC = () => {
  const stories = [
    {
      name: 'Rajesh Kumar',
      location: 'Jabalpur, Madhya Pradesh',
      tagline: 'The Local Farmer Pivot',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
      story:
        'A traditional wheat farmer from Madhya Pradesh who pivoted to Milky mushrooms during the harsh summer months. After attending our 15-day intensive practical training at our Jabalpur farm, Rajesh setup a small 500 bag unit that doubled his seasonal income in just one crop cycle.',
      achievement: '2x Increase in Seasonal Income',
      scale: '500 Bags Summer Unit',
      variety: 'Milky & Oyster Mushroom',
    },
    {
      name: 'Sneha Sharma',
      location: 'Delhi NCR',
      tagline: 'The Student Agripreneur',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      story:
        "A college student who utilized her apartment's balcony and vertical racking space to grow high-value medicinal mushrooms like Lion's Mane and Oyster. She now runs a successful D2C supplement and fresh produce brand while continuing her higher studies.",
      achievement: "Founded 'BrainFungi' D2C Brand",
      scale: 'Urban Micro-Farm',
      variety: "Lion's Mane & Fresh Oyster",
    },
    {
      name: 'Amit Singhal',
      location: 'Indore, Madhya Pradesh',
      tagline: 'The B2B Industrialist',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      story:
        'An ex-corporate professional who setup a fully climate-controlled 5-ton capacity Button mushroom unit. After our technical turnkey consultancy, HVAC engineering, and market linkage support, he now supplies premium produce to top-tier hotel chains and supermarkets across Central & North India.',
      achievement: '5-Ton Industrial Unit Setup',
      scale: 'Commercial Turnkey Facility',
      variety: 'White Button Mushroom',
    },
    {
      name: 'Vikram & Sunita Patel',
      location: 'Ahmedabad, Gujarat',
      tagline: 'Family Agro-Venture',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      story:
        'Started with our Commercial Master Training in 2023. Converted an unused 1200 sq ft shed into a multi-rack climate-controlled Oyster growing room. Today, they produce 150 kg fresh mushrooms every week with direct sales to local vegetable retail chains.',
      achievement: '₹1.8 Lakhs Monthly Revenue',
      scale: '1200 sq ft Shed Setup',
      variety: 'Grey & Pink Oyster',
    },
  ];

  const metrics = [
    { number: '5,000+', label: 'Trained Growers', desc: 'Across 28 Indian States & 15+ Countries' },
    { number: '150+', label: 'Commercial Setups', desc: 'Turnkey Sheds & AC Growing Units' },
    { number: '85%+', label: 'Success Rate', desc: 'Active commercial producers after SOP execution' },
    { number: '100%', label: 'Direct Support', desc: 'Lifetime technical & market linkage guidance' },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Navigation Header */}
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
              <Sparkles size={14} /> Real People • Real Proof • Real Returns
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Our <span className="gradient-text font-black">Success Stories</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-8 leading-relaxed">
              Discover how farmers, students, working professionals, and commercial investors across India and globally have built profitable mushroom businesses with our certified training and turnkey setups.
            </p>

            {/* Impact Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xs flex flex-col items-center justify-center text-center"
                >
                  <span className="text-2xl md:text-3xl font-black gradient-text mb-0.5">{m.number}</span>
                  <span className="text-xs font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1">
                    {m.label}
                  </span>
                  <span className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Stories List Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 md:space-y-12 mb-16">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl relative overflow-hidden"
            >
              {/* Header inside card */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-xs font-black uppercase tracking-widest mb-3">
                    <s.icon size={14} /> {s.tagline}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black dark:text-white text-slate-900 mb-1">
                    {s.name}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5 uppercase text-xs tracking-wider">
                    <Star size={13} className="text-amber-500 fill-amber-500" /> {s.location}
                  </p>
                </div>

                <div className="p-3 sm:px-5 sm:py-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 flex flex-col items-start sm:items-end">
                  <div className="flex gap-1 text-amber-500 mb-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-emerald-700 dark:text-emerald-400 font-black text-[11px] uppercase tracking-widest">
                    Verified Grower
                  </p>
                </div>
              </div>

              {/* Story Quote */}
              <div className="relative pt-2 mb-6">
                <Quote className="absolute -top-3 -left-3 text-slate-200 dark:text-white/5" size={50} />
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed relative z-10 font-medium italic">
                  &ldquo;{s.story}&rdquo;
                </p>
              </div>

              {/* Bottom Specs & Achievement Banner */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 pt-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-950/20 border border-purple-500/15 flex-1">
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-black tracking-widest mb-1">
                    Key Achievement
                  </p>
                  <p className="text-base sm:text-xl font-black text-purple-600 dark:text-purple-400 tracking-tight">
                    {s.achievement}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                      {s.scale}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {s.variety}
                    </span>
                  </div>
                </div>

                <Link
                  href="/training"
                  className="flex items-center justify-center gap-2 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 px-6 py-4 rounded-xl transition-all shadow-xs"
                >
                  Start Similar Setup <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xs sm:text-sm text-purple-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Book a 1-on-1 strategic consultation or enroll in our next commercial cultivation training batch to turn your space into a high-yielding mushroom farm.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://calendly.com/tanmaysomi/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-xs md:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <Calendar size={16} /> Book Consultation
              </a>
              <Link
                href="/training"
                className="px-8 py-4 rounded-2xl bg-purple-950/60 border border-white/20 text-white font-black text-xs md:text-sm inline-flex items-center gap-2 hover:bg-purple-950/80 transition-all"
              >
                View Training Plans <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Elements (AI, Sticky buttons, Mobile Bottom Bar) */}
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
