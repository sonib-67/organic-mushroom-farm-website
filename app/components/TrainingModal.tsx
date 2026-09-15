
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Home,
  TrendingUp,
  BookOpen,
  Award
} from "lucide-react";

interface TrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrainingModal = ({ isOpen, onClose }: TrainingModalProps) => {
  const router = useRouter();
  const [modalView, setModalView] = useState<"region_select" | "india_plans" | "usa_plans">("region_select");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 1, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative w-full max-w-4xl dark:bg-slate-950 bg-white border border-purple-500/20 rounded-[2rem] p-3 md:p-4 pb-12 md:pb-12 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50"
            aria-label="Close training modal"
          >
            <X size={18} />
          </button>

          {modalView === "region_select" && (
            <div className="flex flex-col items-center">
              <div className="text-center mb-5 pr-6 pl-6">
                <h3 className="text-xl md:text-xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                  Select <span className="gradient-text font-black">Your Region</span>
                </h3>
                <p className="dark:text-slate-400 text-slate-500 text-[10px] sm:text-xs md:text-sm font-medium leading-tight mt-1">
                  Choose your location to view pricing and proceed to enrollment.
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-5">
                <button
                  onClick={() => setModalView("india_plans")}
                  className="flex items-center justify-between w-full p-3 md:p-3 rounded-2xl border-2 border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">🇮🇳</span>
                    <div>
                      <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">Join Training from India</div>
                      <div className="text-[10px] md:text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">(PAY IN ₹ INR)</div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setModalView("usa_plans")}
                  className="flex items-center justify-between w-full p-3 md:p-3 rounded-2xl border-2 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl">🇺🇸</span>
                    <div>
                      <div className="text-sm md:text-sm font-bold dark:text-white text-slate-900">Join Training from USA / International</div>
                      <div className="text-[10px] md:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">(PAY IN $ USD)</div>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className=" dark:bg-white/[0.02] rounded-2xl p-3 w-full max-w-lg border border-slate-200 dark:border-white/5 mx-auto">
                <h5 className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 text-center">What You Will Learn:</h5>
                <ul className="space-y-3 text-sm">
                  {[
                    "Home & Commercial Farm Setup",
                    "Indoor Climate & Humidity Control",
                    "High-Yield Oyster & Button Cultivation",
                    "Certificate & Community Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 dark:text-slate-300 text-slate-600 font-medium">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {modalView === "india_plans" && (
            <>
              <button
                onClick={() => setModalView("region_select")}
                className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 flex items-center justify-center gap-1 text-[10px] uppercase font-bold"
              >
                <ArrowLeft size={14} /> Back
              </button>

              <div className="text-center mb-5 pr-6 pl-6 pt-6 md:pt-0">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full dark:bg-purple-500/10 bg-purple-500/5 text-purple-600 dark:text-purple-400 border border-purple-500/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                  <Sparkles size={12} /> Live Your Farming Dream
                </div>
                <h3 className="text-xl md:text-xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                  Select <span className="gradient-text font-black">Your Training Plan</span>
                </h3>
                <p className="dark:text-slate-400 text-slate-500 text-[10px] sm:text-xs md:text-sm font-medium leading-tight mt-1">
                  Choose the plan that suits you best. Secure checkout with Razorpay.
                </p>
              </div>

              {/* Quick Choice Buttons at the very top */}
              <div className="grid grid-cols-2 gap-1.5 xs:gap-2.5 md:gap-4 max-w-2xl mx-auto mb-6">
                <button
                  onClick={() => {
                    onClose();
                    router.push("/training-checkout?type=basic");
                  }}
                  className="flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden">
                    <div className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <Home size={11} className="xs:size-3.5 md:size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-blue-500">Basic</div>
                      <div className="text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Mushroom ₹299</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-blue-600 dark:text-blue-400 shrink-0 ml-1">
                    <span className="hidden sm:inline">Join</span>
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    router.push("/training-checkout?type=advanced");
                  }}
                  className="flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all text-left group/btn cursor-pointer ring-1 ring-purple-500/20"
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden">
                    <div className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                      <Sparkles size={11} className="xs:size-3.5 md:size-4 animate-pulse" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-purple-500">Advanced</div>
                      <div className="text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training ₹699</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-purple-600 dark:text-purple-400 shrink-0 ml-1">
                    <span className="hidden sm:inline">Join</span>
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Basic Card */}
                <div className="flex flex-col p-3 md:p-3 rounded-2xl dark:bg-white/[0.02]  border dark:border-white/5 border-slate-200">
                  <span className="badge bg-blue-500/10 text-blue-500 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full">
                    Beginner
                  </span>
                  <h3 className="text-sm md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                    Basic Cultivation Training
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-sm md:text-xl font-black gradient-text">₹299</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                    Perfect for students and hobbyists looking to grow mushrooms at a small home scale.
                  </p>

                  <div className="flex-1 mb-6">
                    <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">What's Included:</h5>
                    <ul className="space-y-2 text-xs">
                      {[
                        "**Oyster & Button** cultivation step-by-step tutorial.",
                        "**Home Setup**: Perfect climate parameters for rooms/backyards.",
                        "**Substrate Preparation**: Boiling, sterilization & bag packing.",
                        "**Contamination Prevention**: Simple hygiene controls."
                      ].map((bullet, i) => {
                        const parts = bullet.split("**");
                        return (
                          <li key={i} className="flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium">
                            <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-bold dark:text-white text-slate-900">{p}</strong> : p)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      router.push("/training-checkout?type=basic");
                    }}
                    className="w-full bg-slate-950 text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-3 rounded-xl text-sm font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1"
                  >
                    Join Mushroom Training <ArrowRight size={13} />
                  </button>
                </div>

                {/* Advanced Card */}
                <div className="relative flex flex-col p-3 md:p-3 rounded-2xl dark:bg-purple-950/5 bg-purple-50/5 border-2 border-purple-500/80 shadow-[0_4px_25px_rgba(168,85,247,0.15)]">
                  <div className="absolute top-3 right-3 text-[10px] text-purple-500 font-extrabold tracking-widest uppercase flex items-center gap-0.5">
                    <Sparkles size={10} className="animate-pulse" /> RECOMMENDED
                  </div>
                  <span className="badge bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full">
                    Entrepreneur
                  </span>
                  <h3 className="text-sm md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                    Advanced Commercial Training
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-sm md:text-xl font-black text-purple-500">₹699</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                    Ideal for entrepreneurs and farmers wanting to establish commercial operations and scale.
                  </p>

                  <div className="flex-1 mb-6">
                    <h5 className="text-[9px] font-black text-purple-400 uppercase tracking-widest mb-2.5">What's Included:</h5>
                    <ul className="space-y-2 text-xs">
                      {[
                        "**Everything in Basic** plus additional advanced guides.",
                        "**Advanced Varieties**: Milky (Summer), Oyster & Button Mushrooms.",
                        "**Commercial Shed Setup**: Layout design and low-cost shed options.",
                        "**Automated Climate Systems**: Foggers, AC, & humidity tools.",
                        "**Disease Management**: Treat green mold, flies & bacterial blotch.",
                        "**Marketing & Sales**: Tie-ups, wholesale market selling, ads & social media.",
                        "**Exclusive Perks**: Certified Certificate & active private community support."
                      ].map((bullet, i) => {
                        const parts = bullet.split("**");
                        return (
                          <li key={i} className="flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium">
                            <CheckCircle2 size={13} className="text-purple-500 shrink-0 mt-0.5" />
                            <span>
                              {parts.map((p, idx) => idx % 2 === 1 ? <strong key={idx} className="font-bold dark:text-white text-slate-900">{p}</strong> : p)}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      router.push("/training-checkout?type=advanced");
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] py-3 rounded-xl text-sm font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1"
                  >
                    Join Mushroom Training <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </>
          )}

          {modalView === "usa_plans" && (
            <>
              <button
                onClick={() => setModalView("region_select")}
                className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 flex items-center justify-center gap-1 text-[10px] uppercase font-bold"
              >
                <ArrowLeft size={14} /> Back
              </button>

              <div className="text-center mb-5 pr-6 pl-6 pt-6 md:pt-0">
                <h3 className="text-xl md:text-xl font-black dark:text-white text-slate-900 tracking-tight">
                  Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Training Program</span>
                </h3>
              </div>

              {/* Quick Choice USA Buttons at the very top */}
              <div className="grid grid-cols-2 gap-1.5 xs:gap-2.5 md:gap-4 max-w-2xl mx-auto mb-6">
                <button
                  onClick={() => {
                    onClose();
                    router.push("/usatraining?type=basic");
                  }}
                  className="flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group/btn cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden">
                    <div className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <Home size={11} className="xs:size-3.5 md:size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-blue-500">Basic</div>
                      <div className="text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training $39</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-blue-600 dark:text-blue-400 shrink-0 ml-1">
                    <span className="hidden sm:inline">Join</span>
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    router.push("/usatraining?type=advanced");
                  }}
                  className="flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all text-left group/btn cursor-pointer ring-1 ring-cyan-500/20"
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden">
                    <div className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                      <TrendingUp size={11} className="xs:size-3.5 md:size-4 animate-pulse" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-cyan-500">Advanced</div>
                      <div className="text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training $97</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-cyan-600 dark:text-cyan-400 shrink-0 ml-1">
                    <span className="hidden sm:inline">Join</span>
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Basic Card */}
                <div className="flex flex-col p-3 md:p-3 rounded-2xl dark:bg-white/[0.02]  border dark:border-white/5 border-slate-200">
                  <h3 className="text-sm md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                    Basic Cultivation Mushroom Training
                  </h3>
                  <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mb-3">(Home Scale)</p>
                  
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-sm md:text-xl font-black text-slate-900 dark:text-white">$39</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">(One-Time)</span>
                  </div>
                  <p className="text-xs font-semibold text-blue-500 mb-4 flex items-center gap-1.5">
                    <Home size={14} /> Ideal For: Beginners & Hobbyists
                  </p>

                  <div className="flex-1 mb-6">
                    <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Key Learnings:</h5>
                    <ul className="space-y-2 text-xs">
                      {[
                        "Oyster & Button mushroom home setup.",
                        "Substrate boiling & basic sterilization.",
                        "Simple temperature/humidity control."
                      ].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-600 font-medium">
                          <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      router.push("/usatraining?type=basic");
                    }}
                    className="w-full bg-slate-950 text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-3 rounded-xl text-sm font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1"
                  >
                    Enroll Now <ArrowRight size={13} />
                  </button>
                </div>

                {/* Advanced Card */}
                <div className="relative flex flex-col p-3 md:p-3 rounded-2xl dark:bg-blue-950/5 bg-blue-50/5 border-2 border-blue-500/80 shadow-[0_4px_25px_rgba(59,130,246,0.15)]">
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-md">
                    ⭐ Best Value
                  </div>
                  <h3 className="text-sm md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                    Advanced Commercial Mushroom Training
                  </h3>
                  <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mb-3">(Business Scale)</p>
                  
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-sm md:text-xl font-black text-slate-900 dark:text-white">$97</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">(One-Time)</span>
                  </div>
                  <p className="text-xs font-semibold text-blue-500 mb-4 flex items-center gap-1.5">
                    <TrendingUp size={14} /> Ideal For: Entrepreneurs & Commercial Growers
                  </p>

                  <div className="flex-1 mb-6">
                    <h5 className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2.5">Key Learnings:</h5>
                    <ul className="space-y-2 text-xs">
                      {[
                        "Farm layout, vertical racks & HVAC setup.",
                        "High-yield varieties + Pest management.",
                        "Sales strategies for US Farmer's Markets & local stores.",
                        "Certificate & Private Community Access."
                      ].map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-600 font-medium">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      router.push("/usatraining?type=advanced");
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-3 rounded-xl text-sm font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1"
                  >
                    Enroll Now <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TrainingModal;
