"use client";
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, RefreshCw, Clock, Gift, Check, HeadphonesIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { pixelTrackCustom } from '@/lib/utils/pixel';

export default function TrainingCancelClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams?.get('type') === "training_advanced" ? "training_advanced" : "training_basic";
  const isAdvancedTraining = type === "training_advanced";
  const isBasicTraining = type === "training_basic";

  useEffect(() => {
    pixelTrackCustom('PaymentCancel_Viewed', { course_type: type });
  }, [type]);

  const handleRetry = () => {
    router.push(`/training-checkout?type=${isAdvancedTraining ? 'advanced' : 'basic'}`);
  };

  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen flex items-center justify-center bg-transparent z-[99]">
      <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-rose-500/10 dark:opacity-20 opacity-30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      <div className="w-full max-w-lg mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 dark:bg-[#0c0c0c]/80 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border dark:border-white/10 border-black/10 shadow-2xl relative overflow-hidden text-center"
        >
          {isAdvancedTraining ? (
            <div>
              <motion.div 
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20"
              >
                <AlertCircle size={32} />
              </motion.div>
              <h2 className="text-2xl font-black dark:text-white text-slate-900 mb-1 tracking-tight">Advanced Registration Incomplete!</h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-500 mb-4">
                <Clock size={12} className="animate-pulse" /> Secure Spot (₹699 Only)
              </div>
              <p className="dark:text-slate-400 text-slate-500 text-sm mb-6 leading-relaxed">
                Your payment for the <strong>Advanced Commercial Cultivation Training</strong> was not completed.
              </p>
              
              <div className="text-left dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-4 sm:p-5 mb-6">
                <h3 className="text-xs font-bold dark:text-white text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Gift size={14} className="text-purple-500" /> What's Included in ₹699:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>All 4 Species</strong>: Button, Oyster, Milky, Cordyceps.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Commercial AC Setup</strong>: HVAC, Insulated panels, Layouts.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Bank DPR & Subsidy</strong>: Complete project report guide.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Business & Marketing</strong>: Selling to B2B, packaging, FSSAI.</span></li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-3">
                <button onClick={handleRetry} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] text-white font-bold py-3.5 px-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95">
                  <RefreshCw size={18} /> Pay ₹699 & Register Again
                </button>
                <button onClick={() => router.push('/training')} className="w-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all">
                  Back to Training Options
                </button>
              </div>
            </div>
          ) : isBasicTraining ? (
            <div>
              <motion.div 
                initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20"
              >
                <AlertCircle size={32} />
              </motion.div>
              <h2 className="text-2xl font-black dark:text-white text-slate-900 mb-1 tracking-tight">Basic Registration Incomplete!</h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-500 mb-4">
                <Clock size={12} className="animate-pulse" /> Complete Checkout (₹299 Only)
              </div>
              <p className="dark:text-slate-400 text-slate-500 text-sm mb-6 leading-relaxed">
                Your payment for the <strong>Basic Mushroom Cultivation Training</strong> was not completed.
              </p>
              
              <div className="text-left dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/5 border-black/5 rounded-2xl p-4 sm:p-5 mb-6">
                <h3 className="text-xs font-bold dark:text-white text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Gift size={14} className="text-blue-500" /> What's Included in ₹299:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Oyster & Button Focus</strong>: Simple, guided step-by-step growing manual.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Home scale setup</strong>: Easy setups in backyards or tiny rooms.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Substrate boiling & Prep</strong>: sterilization techniques.</span></li>
                  <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300"><Check className="text-green-500 shrink-0 mt-0.5" size={14} /><span><strong>Spawning, Bagging & Care</strong>: Packing bags without contamination.</span></li>
                </ul>
              </div>
              
              <div className="flex flex-col gap-3">
                <button onClick={handleRetry} className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] text-white font-bold py-3.5 px-4 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95">
                  <RefreshCw size={18} /> Pay ₹299 & Register Again
                </button>
                <button onClick={() => router.push('/training')} className="w-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 dark:text-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl text-sm transition-all">
                  Back to Training Options
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mb-3 tracking-tight">Payment Cancelled</h2>
              <button onClick={handleRetry} className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 text-white font-bold py-4 rounded-xl">
                Retry Payment
              </button>
            </div>
          )}

          <div className="pt-6 mt-6 border-t dark:border-white/10 border-black/5">
             <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-3 flex items-center justify-center gap-2">
               <HeadphonesIcon size={16} className="text-indigo-400" /> Need Help? Contact Support
             </h3>
             <a href="https://wa.me/919203544140?text=Hi,%20I%20am%20facing%20some%20issues%20with%20an%20online%20payment." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full dark:bg-white/5 bg-black/5 dark:text-white text-slate-900 text-sm font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                Contact Support
             </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
