import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Thermometer, Wind, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const CompostUnitSpecsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Compost Unit Specs | Phase-I & Phase-II Details" 
        description="Technical specifications for 2000-Bag and 3000-Bag compost units including Phase-I and Phase-II durations." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Compost Preparation</div>
          <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">
            Compost <span className="gradient-text">Unit Specs</span>
          </h1>
          <p className="dark:text-slate-400 text-slate-600 text-lg leading-relaxed mb-10">
            Engineered systems for optimized Phase-I & Phase-II cycles.
          </p>
        </motion.div>
      </section>

      <section className="section-padding max-w-7xl mx-auto pt-0">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-10 rounded-[3rem] border dark:border-white/5 border-black/5 space-y-6">
                <div className="flex items-center gap-4 border-b dark:border-white/5 border-black/5 pb-4">
                     <Layers className="text-primary-start" size={24}/>
                     <div>
                         <h3 className="text-xl font-bold dark:text-white text-slate-900">Bunker Dimensions</h3>
                         <p className="dark:text-slate-400 text-slate-600 text-sm">Spatial configuration for aeration.</p>
                     </div>
                </div>
                <ul className="space-y-3 dark:text-slate-300 text-slate-700">
                    <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div>2000-Bag Unit (20T):</span>
                        <span className="font-bold dark:text-white text-slate-900">14 x 30 ft System</span>
                    </li>
                    <li className="flex items-center justify-between">
                         <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div>3000-Bag Unit (30T):</span>
                         <span className="font-bold dark:text-white text-slate-900">14 x 40 ft System</span>
                    </li>
                </ul>
            </div>

            <div className="glass p-10 rounded-[3rem] border dark:border-white/5 border-black/5 space-y-6">
                <div className="flex items-center gap-4 border-b dark:border-white/5 border-black/5 pb-4">
                     <ShieldCheck className="text-primary-start" size={24}/>
                     <div>
                         <h3 className="text-xl font-bold dark:text-white text-slate-900">Cycle Timelines</h3>
                         <p className="dark:text-slate-400 text-slate-600 text-sm">Strict 15-day composting workflow.</p>
                     </div>
                </div>
                <ul className="space-y-3 dark:text-slate-300 text-slate-700">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> <strong>Phase-I:</strong> 8 days (Conditioning & pre-wet)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> <strong>Phase-II:</strong> 7 days (Pasteurization & conditioning)</li>
                </ul>
            </div>

            <div className="glass p-10 rounded-[3rem] border dark:border-white/5 border-black/5 space-y-6 md:col-span-2">
                <div className="flex items-center gap-4 border-b dark:border-white/5 border-black/5 pb-4">
                     <Thermometer className="text-primary-start" size={24}/>
                     <div>
                         <h3 className="text-xl font-bold dark:text-white text-slate-900">Required Machinery Config</h3>
                         <p className="dark:text-slate-400 text-slate-600 text-sm">Industrial-grade equipment included in the turnkey cost.</p>
                     </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                     <div>
                          <h4 className="text-lg font-bold dark:text-white text-slate-900 flex items-center gap-2 mb-3">
                              <Wind size={20} className="text-brand-purple"/> Centrifugal Blowers
                          </h4>
                          <p className="dark:text-slate-400 text-slate-600 text-sm">High-capacity grided floor aeration system ensuring proper O2 penetration during Phase-II pasteurization phase.</p>
                     </div>
                     <div>
                          <h4 className="text-lg font-bold dark:text-white text-slate-900 flex items-center gap-2 mb-3">
                               <Thermometer size={20} className="text-brand-purple"/> Precision Thermosensors
                          </h4>
                          <p className="dark:text-slate-400 text-slate-600 text-sm">Automated multipoint probing sensors linking directly to climate panels to monitor 57-60°C peak-heating thresholds.</p>
                     </div>
                </div>
            </div>

            <div className="glass p-10 rounded-[3rem] border border-primary-start/20 space-y-6 md:col-span-2 text-center">
                <h3 className="text-2xl font-bold dark:text-white text-slate-900">Start Building Your Compost Unit</h3>
                <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto">Skip the trial-and-error. Deploy proven infrastructure designed for large-scale mushroom farming success.</p>
                <Link to="/contact-form" className="btn-primary px-8 py-4 rounded-xl font-bold inline-flex justify-center items-center gap-2 mx-auto mt-4">
                    Get a Quote <ArrowRight size={18}/>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CompostUnitSpecsPage;
