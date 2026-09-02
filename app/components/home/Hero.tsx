"use client";
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle, ShieldCheck, Layers, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
  const features = [
    { text: "Complete Mushroom Farm Project Setup", link: "/articles/turnkey-mushroom-farm-setup-india" },
    { text: "Mushroom Farming Training Program" },
    { text: "Government Subsidy Documentation" },
    { text: "Technical Support India & Worldwide" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden section-padding"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-5 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 1, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          
          className="text-center md:text-left"
        >
          <div className="text-[10px] md:text-sm font-bold text-green-700 dark:text-green-500 uppercase tracking-[0.2em] mb-4 md:mb-6">
            Button, Oyster, Milky, Shiitake & More | Setup, Training & Business
            Support
          </div>
          <h1 className="text-[1.5rem] md:text-sm lg:text-xl font-bold dark:text-white text-slate-900 leading-tight mb-4 md:mb-5 tracking-tighter">
            <span className="gradient-text">
              Expert Mushroom Farming Training & Setup
            </span>{" "}
            <br />– Complete Solutions for All Mushroom Types
          </h1>
          <p className="text-[0.8125rem] md:text-sm dark:text-slate-400 text-slate-600 mb-5 md:mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-8 mb-6 dark:border-white/5 border-black/5 border-y py-2 md:py-2">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <CheckCircle size={16} className="text-primary-start" />
                {f.link ? (
                  <Link to={f.link} className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight hover:text-primary-start transition-colors">
                    {f.text}
                  </Link>
                ) : (
                  <span className="text-[13px] md:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {f.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mb-6 max-w-md mx-auto md:mx-0">
            <Link
              to="/training"
              className="group flex items-center justify-between p-3 rounded-2xl border border-purple-500/30 bg-linear-to-r from-purple-500/5 via-fuchsia-400/5 to-indigo-500/5 dark:from-purple-900/10 dark:via-fuchsia-900/10 dark:to-indigo-900/10 hover:from-purple-500/15 hover:via-fuchsia-400/15 hover:to-indigo-500/15 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300">
                  <Award size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Mushroom Cultivation Training
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    Comprehensive online & offline certification programs
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" />
            </Link>

            <Link
              to="/turnkey-projects"
              className="group flex items-center justify-between p-3 rounded-2xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/5 via-teal-400/5 to-cyan-500/5 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10 hover:from-emerald-500/15 hover:via-teal-400/15 hover:to-cyan-500/15 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                  <CheckCircle size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    Mushroom Farm Setup
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400">
                    Turnkey commercial farm setup & consultancy
                  </span>
                </div>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-5">
            <Link
              to="/enquiry"
              className="btn-primary w-full sm:w-auto px-6 min-h-[50px] rounded-xl text-sm shadow-2xl shadow-brand-blue/30 flex items-center justify-center font-bold bg-[#7b51f8] hover:bg-[#6841d8] text-white"
            >
              Enquiry Now
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto px-6 min-h-[50px] rounded-xl text-sm flex items-center justify-center font-medium"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:9203544140"
              className="btn-outline w-full sm:w-auto px-6 min-h-[50px] rounded-xl text-sm flex items-center justify-center font-medium"
            >
              Call Now: 9203544140
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6 pt-4">
            <div>
              <div className="text-sm md:text-xl font-bold dark:text-white text-slate-900">
                1.5k+
              </div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">
                Active Commercial Units
              </div>
            </div>
            <div>
              <div className="text-sm md:text-xl font-bold dark:text-white text-slate-900">
                98.91%
              </div>
              <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">
                Success Rate Globally
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mock (Glass Card) */}
        <motion.div
          initial={{ opacity: 1, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative glass rounded-[2.5rem] p-3 border-white/20 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="text-accent" />
                </div>
                <div>
                  <div className="dark:text-white text-slate-900 font-bold">
                    Turnkey Setup Project
                  </div>
                  <div className="text-xs text-slate-500">
                    Quality Certified Infrastructure
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                Active
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "Commercial Room Size",
                  value: "18 x 70 ft Standard",
                  icon: Layers,
                },
                {
                  label: "Annual High Yield",
                  value: "35,000+ kg",
                  icon: TrendingUp,
                },
                {
                  label: "Cooling Sys (India)",
                  value: "Daikin Industrial",
                  icon: Zap,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between dark:bg-white/5 bg-black/5 p-3 rounded-2xl border dark:border-white/5 border-black/5"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon
                      className="dark:text-slate-400 text-slate-600"
                      size={18}
                    />
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-sm dark:text-white text-slate-900 font-bold">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-3 rounded-3xl bg-linear-to-br from-white/10 to-transparent border dark:border-white/10 border-black/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold dark:text-slate-300 text-slate-700">
                  Phase 1 Commercial Cycle
                </span>
                <span className="text-[10px] text-accent font-bold">
                  LIVE PROGRESS
                </span>
              </div>
              <div className="h-2 w-full dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full gradient-bg"
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase">
                <span>Composting</span>
                <span>Pasteurization</span>
                <span>Cropping</span>
              </div>
            </div>
          </div>

          {/* Floating Small Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-3 rounded-2xl border-white/20 flex items-center gap-3 shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="text-green-500" size={16} />
            </div>
            <div className="pr-4">
              <div className="text-[10px] dark:text-slate-400 text-slate-600 font-bold uppercase">
                Global ROI Verified
              </div>
              <div className="text-xs dark:text-white text-slate-900 font-bold">
                120% Yearly Avg
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
