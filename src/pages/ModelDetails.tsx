import React from 'react';
import { motion } from 'motion/react';
import { Target, Layers, ShoppingCart, Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const ModelDetailsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Farming Model Details | High-Yield Infrastructure" 
        description="Detailed specifications for our recommended commercial mushroom farming models." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Technical Specifications</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Farming <span className="gradient-text">Model Build</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Engineered for high yield and complete climate precision.
          </p>
        </motion.div>
      </section>

      <section className="section-padding max-w-7xl mx-auto pt-0">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-6">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                     <Layers className="text-primary-start" size={24}/>
                     <div>
                         <h3 className="text-xl font-bold text-white">Infrastructure Requirements</h3>
                         <p className="text-slate-400 text-sm">Space, insulation, and rack designs.</p>
                     </div>
                </div>
                <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Insulated PUF Panels (80mm)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Vertical Galvanized Racking</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Epoxy coated seamless floors</li>
                </ul>
            </div>

            <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-6">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                     <ShoppingCart className="text-primary-start" size={24}/>
                     <div>
                         <h3 className="text-xl font-bold text-white">Estimated Yield</h3>
                         <p className="text-slate-400 text-sm">Production output per cycle.</p>
                     </div>
                </div>
                <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Up to 20% Biological Efficiency</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> 5 complete flush cycles per year</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Premium A-grade cap size ratio</li>
                </ul>
            </div>

            <div className="glass p-10 rounded-[3rem] border border-white/5 space-y-6">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                     <Clock className="text-primary-start" size={24}/>
                     <div>
                         <h3 className="text-xl font-bold text-white">Setup Time</h3>
                         <p className="text-slate-400 text-sm">Deployment & installation timeline.</p>
                     </div>
                </div>
                <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> 30-45 Days from foundation</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Structural commissioning (15 Days)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary-start"></div> Machinery mapping & calibration (7 Days)</li>
                </ul>
            </div>

            <div className="glass p-10 rounded-[3rem] border border-primary-start/20 space-y-6">
                <h3 className="text-2xl font-bold text-white">Ready for a detailed consultation?</h3>
                <p className="text-slate-400">Our engineering team can customize this model to fit your specific available space and budget.</p>
                <a href="/contact-form" className="btn-primary w-full py-4 rounded-xl font-bold inline-flex justify-center items-center gap-2">
                    Start Custom Project <ArrowRight size={18}/>
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ModelDetailsPage;
