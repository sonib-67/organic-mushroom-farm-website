'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Sprout,
  Play,
  Users,
  Home,
  Briefcase,
  ShieldCheck,
  Award,
  BookOpen,
  Zap,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Globe,
  TrendingUp,
  Clock,
  Target,
  FileCheck,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const AboutPageContent: React.FC = () => {
  const whatWeDo = [
    {
      title: 'Commercial Mushroom Production',
      desc: 'We produce premium quality button and oyster mushrooms using scientific organic methods in our state-of-the-art climate-controlled facility.',
      icon: Sprout,
    },
    {
      title: 'Online Mushroom Training',
      desc: 'Comprehensive digital modules for beginners and commercial growers. Start your journey with lifetime access, HD videos, and manuals.',
      icon: Play,
      price: '₹299 / ₹699',
    },
    {
      title: 'Offline Practical Training',
      desc: 'Intensive hands-on sessions at our commercial farm in Jabalpur, MP. Learn compost preparation, casing, harvesting, and pest control.',
      icon: Users,
      price: '₹3000 / ₹6000',
    },
    {
      title: 'Commercial Farm Setup',
      desc: 'Complete turnkey solutions from shed insulation and racking systems to automated HVAC climate control and global marketing support.',
      icon: Home,
    },
  ];

  const milestones = [
    {
      number: '12+',
      label: 'Years of Experience',
      desc: 'Pioneering organic cultivation, spawn lab research, and industrial setups.',
    },
    {
      number: '5,000+',
      label: 'Growers Trained',
      desc: 'Empowering agri-entrepreneurs across Pan-India, USA, and global regions.',
    },
    {
      number: '150+',
      label: 'Turnkey Farms Built',
      desc: 'Custom-designed AC button, oyster, and milky mushroom growing sheds.',
    },
    {
      number: '100%',
      label: 'Organic & Lab Tested',
      desc: 'Pure F1 hybrid spawn and chemical-free substrate pasteurization standards.',
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
              <Award size={14} /> Our Commercial Journey & Legacy
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              About <span className="gradient-text font-black">Organic Mushrooms Farm</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-8 leading-relaxed">
              India&apos;s leading mushroom ecosystem architect. Empowering modern farmers and global entrepreneurs through sustainable, high-yield organic cultivation, certified spawn, and complete turnkey setups.
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {milestones.map((m, i) => (
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

        {/* Who We Are: Mission & Vision */}
        <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Target size={12} /> Who We Are
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Our Mission & <span className="gradient-text font-black">Vision for Agriculture</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Mission Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-10 text-slate-900 dark:text-white">
                <Briefcase size={80} />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-black dark:text-white text-slate-900 mb-3 uppercase tracking-tight">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Our startup is dedicated to <strong className="dark:text-white text-slate-900">helping people launch commercial mushroom farming businesses</strong> with minimal financial risk and maximum precision. We bridge the gap between theoretical agricultural knowledge and real-world commercial success in Button, Oyster, and Milky mushroom production.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400">
                <CheckCircle2 size={16} /> 100% Practical & SOP-Driven Execution
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-10 text-slate-900 dark:text-white">
                <ShieldCheck size={80} />
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-black dark:text-white text-slate-900 mb-3 uppercase tracking-tight">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  We aim to lead the revolution in <strong className="dark:text-white text-slate-900">promoting organic agriculture, nutritional security, and self-employment</strong> across Madhya Pradesh, Pan-India, and international markets. Our vision is to make every grower a profitable global agri-entrepreneur through climate-controlled farming.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <MessageCircle size={15} /> WhatsApp Us
                </a>
                <a
                  href="tel:+919203544140"
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                >
                  <Phone size={15} /> +91 9203544140
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 md:py-16 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
                <Zap size={12} /> Core Operations
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Mushroom Operations & <span className="gradient-text font-black">Consultancy</span>
              </h2>
              <p className="dark:text-slate-400 text-slate-600 mt-2 max-w-2xl mx-auto text-xs sm:text-sm font-medium">
                End-to-end support for commercial Button, Oyster, and Milky mushroom projects across India and globally.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {whatWeDo.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <item.icon size={26} />
                    </div>
                    <h3 className="dark:text-white text-slate-900 font-bold text-sm md:text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    {item.price && (
                      <div className="text-base md:text-lg font-black gradient-text mb-3">
                        {item.price}
                      </div>
                    )}
                    <a
                      href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider hover:underline"
                    >
                      Enquire Now <ArrowRight size={13} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Award size={12} /> The Commercial Advantage
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Why Choose Us For <span className="gradient-text font-black">Turnkey Projects?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: 'Scientific Guidance',
                desc: 'ISO 9001 certified protocols, pure mother cultures, and agronomist mentorship for high yields.',
                icon: Award,
              },
              {
                title: 'Beginner Friendly',
                desc: 'Zero prior agriculture background required. Step-by-step training from basic room to industrial shed.',
                icon: BookOpen,
              },
              {
                title: 'Transparent Pricing',
                desc: 'Cost-effective blueprints, NABARD/MIDH government subsidy advice, and no hidden charges.',
                icon: Zap,
              },
              {
                title: 'Lifetime Support',
                desc: 'Dedicated community assistance, contamination troubleshooting, and spawn re-order support.',
                icon: ShieldCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xs flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <item.icon size={20} />
                </div>
                <h4 className="dark:text-white text-slate-900 font-bold text-sm mb-1.5">
                  {item.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Facility Spotlight: Jabalpur & Katangi Farm */}
        <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-black/30 border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg sm:text-xl font-black dark:text-white text-slate-900 mb-4 uppercase tracking-tight">
              Pioneering Commercial <span className="gradient-text font-black">Organic Mushrooms Farm Katangi</span> & Jabalpur
            </h3>
            <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto mb-6">
              Our commercial <strong className="dark:text-white text-slate-900">organic mushrooms farm in Katangi Road, Jabalpur</strong> serves as a benchmark model for aspiring growers across Central India and international visitors. We provide state-of-the-art climate-controlled grow rooms, automated misting systems, industrial compost pasteurization tunnels, and complete spawn lab facilities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/training"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold hover:scale-105 transition-all shadow-md"
              >
                Explore Training Programs
              </Link>
              <Link
                href="/spawn-seed"
                className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white text-xs font-bold transition-all"
              >
                Order Spawn / Seeds
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
