import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertTriangle, Calculator, Briefcase, ArrowRight } from 'lucide-react';
import SEO from './SEO';
import { DetailPageContent } from '../data/services';

const DetailView: React.FC<{ data: DetailPageContent }> = ({ data }) => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title={data.metaTitle} 
        description={data.metaDescription} 
      />
      
      {/* Hero Header */}
      <section className="section-padding py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="badge mx-auto mb-6 flex items-center gap-2">
              <data.icon size={14} /> {data.title}
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {data.h1}
            </h1>
            <h2 className="text-lg md:text-2xl text-slate-400 mb-8 font-medium">
              {data.h2}
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Steps */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-primary-start" /> Step-by-Step Evolution
            </h3>
            <div className="space-y-6">
              {data.steps.map((step, i) => (
                <div key={i} className="glass p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-primary-start/5 transition-colors">
                    {i + 1}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed relative z-10">{step.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section className="bg-red-500/5 p-8 rounded-[2.5rem] border border-red-500/10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <AlertTriangle className="text-red-500" /> Common Pitfalls to Avoid
            </h3>
            <ul className="space-y-4">
              {data.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex gap-4 items-start text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          {/* Materials */}
          <div className="glass p-8 rounded-[2.5rem] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-primary-start" size={20} /> Required Assets
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.materials.map((m, i) => (
                <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-xs font-bold uppercase tracking-tight">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Cost Estimation */}
          <div className="glass p-8 rounded-[2.5rem] border border-primary-start/20 bg-primary-start/5">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Calculator className="text-primary-start" size={20} /> Cost Estimation
            </h3>
            <p className="text-slate-300 font-bold mb-4">{data.costEstimation}</p>
            <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest italic leading-tight">
              *Estimates are indicative and vary based on market conditions and scale.
            </p>
          </div>

          {/* CTA Card */}
          <div className="gradient-bg p-8 rounded-[2.5rem] text-white shadow-2xl">
            <h4 className="text-xl font-bold mb-4">Start Your Project Today</h4>
            <p className="text-white/80 text-sm mb-8 leading-relaxed">
              We provide mushroom farming training and services across all states of India. Let's build your success story.
            </p>
            <a 
              href="https://wa.me/919203544140" 
              className="w-full bg-white text-black py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
            >
              Consult an Expert <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
