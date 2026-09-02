'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Home,
  TrendingUp,
} from 'lucide-react';

export const StickyTrainingButton = ({
  size = 'normal',
}: {
  size?: 'normal' | 'small';
}) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState<'region_select' | 'india_plans' | 'usa_plans'>('region_select');

  return (
    <>
      <button
        onClick={() => {
          setModalView('region_select');
          setShowModal(true);
        }}
        type="button"
        className={`relative overflow-hidden flex items-center justify-center rounded-full group transition-all backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.3)] border border-purple-400/40 dark:border-purple-300/30 bg-linear-to-r from-purple-500/10 via-fuchsia-400/10 to-indigo-500/10 dark:from-purple-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 hover:from-purple-500/20 hover:via-fuchsia-400/20 hover:to-indigo-500/20 dark:hover:from-purple-900/40 dark:hover:via-fuchsia-900/30 dark:hover:to-indigo-900/40 text-purple-950 dark:text-purple-100 cursor-pointer ${
          size === 'small' ? 'h-full w-full p-1.5' : 'h-9 w-full md:w-auto md:min-w-[140px] md:px-4'
        }`}
      >
        <div
          className={`font-bold z-10 flex items-center justify-center gap-1 leading-tight ${
            size === 'small' ? 'text-[11px] absolute inset-0 w-full' : 'text-[11px] md:text-[12px]'
          }`}
        >
          <BookOpen size={size === 'small' ? 12 : 14} className="shrink-0 text-purple-700 dark:text-purple-300" />
          <span>Join Training</span>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </button>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-4xl dark:bg-slate-950 bg-white border border-purple-500/20 rounded-[2rem] p-4 md:p-6 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {modalView === 'region_select' && (
                <div className="flex flex-col items-center">
                  <div className="text-center mb-5 pr-6 pl-6">
                    <h3 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                      Select <span className="gradient-text font-black">Your Region</span>
                    </h3>
                    <p className="dark:text-slate-400 text-slate-500 text-xs md:text-sm font-medium leading-tight mt-1">
                      Choose your location to view pricing and proceed to enrollment.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 w-full max-w-md mx-auto mb-5">
                    <button
                      type="button"
                      onClick={() => setModalView('india_plans')}
                      className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">🇮🇳</span>
                        <div>
                          <div className="text-sm md:text-base font-bold dark:text-white text-slate-900">
                            Join Training from India
                          </div>
                          <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                            (PAY IN ₹ INR)
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalView('usa_plans')}
                      className="flex items-center justify-between w-full p-4 rounded-2xl border-2 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">🇺🇸</span>
                        <div>
                          <div className="text-sm md:text-base font-bold dark:text-white text-slate-900">
                            Join Training from USA / International
                          </div>
                          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                            (PAY IN $ USD)
                          </div>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="dark:bg-white/[0.02] rounded-2xl p-4 w-full max-w-lg border border-slate-200 dark:border-white/5 mx-auto">
                    <h5 className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 text-center">
                      What You Will Learn:
                    </h5>
                    <ul className="space-y-3 text-sm">
                      {[
                        'Home & Commercial Farm Setup',
                        'Indoor Climate & Humidity Control',
                        'High-Yield Oyster & Button Cultivation',
                        'Certificate & Community Support',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 dark:text-slate-300 text-slate-600 font-medium">
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {modalView === 'india_plans' && (
                <>
                  <button
                    type="button"
                    onClick={() => setModalView('region_select')}
                    className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 flex items-center justify-center gap-1 text-[10px] uppercase font-bold cursor-pointer"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <div className="text-center mb-5 pr-6 pl-6 pt-6 md:pt-0">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full dark:bg-purple-500/10 bg-purple-500/5 text-purple-600 dark:text-purple-400 border border-purple-500/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                      <Sparkles size={12} /> Live Your Farming Dream
                    </div>
                    <h3 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 tracking-tight uppercase">
                      Select <span className="gradient-text font-black">Your Training Plan</span>
                    </h3>
                    <p className="dark:text-slate-400 text-slate-500 text-xs md:text-sm font-medium leading-tight mt-1">
                      Choose the plan that suits you best. Secure checkout with Razorpay.
                    </p>
                  </div>

                  {/* Quick Choice Buttons */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        router.push('/training-checkout?productType=training_basic&price=299');
                      }}
                      className="flex items-center justify-between p-2.5 md:p-3.5 rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                          <BookOpen size={14} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black tracking-wider text-blue-500">Basic</div>
                          <div className="text-xs md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Mushroom ₹299</div>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        router.push('/training-checkout?productType=training_advanced&price=699');
                      }}
                      className="flex items-center justify-between p-2.5 md:p-3.5 rounded-xl md:rounded-2xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all text-left group cursor-pointer ring-1 ring-purple-500/20"
                    >
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                          <Sparkles size={14} className="animate-pulse" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black tracking-wider text-purple-500">Advanced</div>
                          <div className="text-xs md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training ₹699</div>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
                    {/* Basic Card */}
                    <div className="flex flex-col p-4 rounded-2xl dark:bg-white/[0.02] border dark:border-white/5 border-slate-200">
                      <span className="bg-blue-500/10 text-blue-500 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full">
                        Beginner
                      </span>
                      <h3 className="text-base md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                        Basic Cultivation Training
                      </h3>
                      <div className="flex items-baseline gap-1.5 mb-4">
                        <span className="text-xl md:text-2xl font-black text-blue-500">₹299</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                        Perfect for students and hobbyists looking to grow mushrooms at a small home scale.
                      </p>

                      <div className="flex-1 mb-6">
                        <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">What's Included:</h5>
                        <ul className="space-y-2 text-xs">
                          {[
                            'Oyster & Button cultivation step-by-step tutorial.',
                            'Home Setup: Perfect climate parameters for rooms/backyards.',
                            'Substrate Preparation: Boiling, sterilization & bag packing.',
                            'Contamination Prevention: Simple hygiene controls.',
                          ].map((bullet, i) => (
                            <li key={i} className="flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium">
                              <CheckCircle2 size={13} className="text-blue-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          router.push('/training-checkout?productType=training_basic&price=299');
                        }}
                        className="w-full bg-slate-950 text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Join Mushroom Training <ArrowRight size={13} />
                      </button>
                    </div>

                    {/* Advanced Card */}
                    <div className="relative flex flex-col p-4 rounded-2xl dark:bg-purple-950/5 bg-purple-50/5 border-2 border-purple-500/80 shadow-[0_4px_25px_rgba(168,85,247,0.15)]">
                      <div className="absolute top-3 right-3 text-[10px] text-purple-500 font-extrabold tracking-widest uppercase flex items-center gap-0.5">
                        <Sparkles size={10} className="animate-pulse" /> RECOMMENDED
                      </div>
                      <span className="bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full">
                        Entrepreneur
                      </span>
                      <h3 className="text-base md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                        Advanced Commercial Training
                      </h3>
                      <div className="flex items-baseline gap-1.5 mb-4">
                        <span className="text-xl md:text-2xl font-black text-purple-500">₹699</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">One-Time Fee</span>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                        Ideal for entrepreneurs and farmers wanting to establish commercial operations and scale.
                      </p>

                      <div className="flex-1 mb-6">
                        <h5 className="text-[9px] font-black text-purple-400 uppercase tracking-widest mb-2.5">What's Included:</h5>
                        <ul className="space-y-2 text-xs">
                          {[
                            'Everything in Basic plus additional advanced guides.',
                            'Advanced Varieties: Milky, Oyster & Button Mushrooms.',
                            'Commercial Shed Setup: Layout design and low-cost shed options.',
                            'Automated Climate Systems: Foggers, AC, & humidity tools.',
                            'Disease Management: Green mold, flies & bacterial blotch treatment.',
                            'Marketing & Sales: Wholesale market selling, ads & social media.',
                            'Certified Certificate & active private community support.',
                          ].map((bullet, i) => (
                            <li key={i} className="flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium">
                              <CheckCircle2 size={13} className="text-purple-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          router.push('/training-checkout?productType=training_advanced&price=699');
                        }}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Join Mushroom Training <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {modalView === 'usa_plans' && (
                <>
                  <button
                    type="button"
                    onClick={() => setModalView('region_select')}
                    className="absolute top-4 left-4 md:top-6 md:left-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50 flex items-center justify-center gap-1 text-[10px] uppercase font-bold cursor-pointer"
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                  <div className="text-center mb-5 pr-6 pl-6 pt-6 md:pt-0">
                    <h3 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 tracking-tight">
                      Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Training Program</span>
                    </h3>
                  </div>

                  {/* Quick Choice USA Buttons */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        router.push('/usatraining?plan=basic');
                      }}
                      className="flex items-center justify-between p-2.5 md:p-3.5 rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                          <Home size={14} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black tracking-wider text-blue-500">Basic</div>
                          <div className="text-xs md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training $39</div>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        router.push('/usatraining?plan=advanced');
                      }}
                      className="flex items-center justify-between p-2.5 md:p-3.5 rounded-xl md:rounded-2xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all text-left group cursor-pointer ring-1 ring-cyan-500/20"
                    >
                      <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                          <TrendingUp size={14} className="animate-pulse" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] md:text-[10px] uppercase font-black tracking-wider text-cyan-500">Advanced</div>
                          <div className="text-xs md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight">Training $97</div>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-cyan-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
                    {/* Basic Card */}
                    <div className="flex flex-col p-4 rounded-2xl dark:bg-white/[0.02] border dark:border-white/5 border-slate-200">
                      <h3 className="text-base md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                        Basic Cultivation Mushroom Training
                      </h3>
                      <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mb-3">(Home Scale)</p>

                      <div className="flex items-baseline gap-1.5 mb-4">
                        <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">$39</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">(One-Time)</span>
                      </div>

                      <p className="text-xs font-semibold text-blue-500 mb-4 flex items-center gap-1.5">
                        <Home size={14} /> Ideal For: Beginners & Hobbyists
                      </p>

                      <div className="flex-1 mb-6">
                        <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Key Learnings:</h5>
                        <ul className="space-y-2 text-xs">
                          {[
                            'Oyster & Button mushroom home setup.',
                            'Substrate boiling & basic sterilization.',
                            'Simple temperature/humidity control.',
                          ].map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-600 font-medium">
                              <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          router.push('/usatraining?plan=basic');
                        }}
                        className="w-full bg-slate-950 text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Enroll Now <ArrowRight size={13} />
                      </button>
                    </div>

                    {/* Advanced Card */}
                    <div className="relative flex flex-col p-4 rounded-2xl dark:bg-blue-950/5 bg-blue-50/5 border-2 border-blue-500/80 shadow-[0_4px_25px_rgba(59,130,246,0.15)]">
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-md">
                        ⭐ Best Value
                      </div>
                      <h3 className="text-base md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                        Advanced Commercial Mushroom Training
                      </h3>
                      <p className="text-[10px] md:text-xs dark:text-slate-400 text-slate-600 font-medium mb-3">(Business Scale)</p>

                      <div className="flex items-baseline gap-1.5 mb-4">
                        <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">$97</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">(One-Time)</span>
                      </div>

                      <p className="text-xs font-semibold text-blue-500 mb-4 flex items-center gap-1.5">
                        <TrendingUp size={14} /> Ideal For: Entrepreneurs & Commercial Growers
                      </p>

                      <div className="flex-1 mb-6">
                        <h5 className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-2.5">Key Learnings:</h5>
                        <ul className="space-y-2 text-xs">
                          {[
                            'Farm layout, vertical racks & HVAC setup.',
                            'High-yield varieties + Pest management.',
                            "Sales strategies for US Farmer's Markets & local stores.",
                            'Certificate & Private Community Access.',
                          ].map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 dark:text-slate-300 text-slate-600 font-medium">
                              <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          router.push('/usatraining?plan=advanced');
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] py-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Enroll Now <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
