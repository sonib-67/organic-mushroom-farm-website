"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, Target, Award, CheckCircle2, DollarSign, Store, TrendingUp, Search, MessageCircle, Phone, ArrowRight, Activity } from "lucide-react";

export default function FranchiseClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { icon: DollarSign, title: "Low Capital Setup", desc: "Start with micro-investment setups spanning 1000 sq ft up to large commercial 10,000 sq ft industrial bounds." },
    { icon: Store, title: "Complete Cold Chain", desc: "We provide full structural planning and climate control installation (AC, Humidifier setups)." },
    { icon: ShieldCheck, title: "Guaranteed Support", desc: "From premium spawn supply to advanced buy-back support capabilities and market linkages." }
  ];

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[20%] w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000" />
        <div className="absolute bottom-[5%] right-[20%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <article className="max-w-5xl mx-auto px-4 relative z-10 space-y-8 pb-24">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Target className="w-3 h-3 text-violet-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Pan India Franchise Program</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Start Your Own <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Mushroom Franchise</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            Join India's fastest-growing organic mushroom network. Low investment, rapid setup, high structural durability, and fully supported cold-chain & marketing workflows. Perfect for <Link href="/turnkey-projects" className="text-violet-600 font-bold hover:underline">commercial growers</Link> who want assured support. Read our <Link href="/articles/commercial-mushroom-farm-setup-training" className="text-violet-600 font-bold hover:underline">setup guides</Link> to learn more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a href="https://wa.me/919203544140?text=I am interested in the Mushroom Franchise Opportunity" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold transition-all text-[10px] md:text-[11px] shadow-lg shadow-violet-500/25">
              <MessageCircle className="w-3.5 h-3.5" /> Get Franchise Details
            </a>
            <a href="tel:9203544140" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border dark:border-white/20 border-black/20 dark:text-white text-slate-900 rounded-full font-bold transition-all text-[10px] md:text-[11px]">
              <Phone className="w-3.5 h-3.5" /> Schedule a Call
            </a>
          </div>
        </header>

        {/* Value Propositions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[2rem] p-6 shadow-sm hover:border-violet-500/50 hover:-translate-y-1 transition-all group"
             >
               <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <b.icon className="w-5 h-5" />
               </div>
               <h2 className="text-[12px] md:text-[13px] font-bold dark:text-white text-slate-900 mb-2">{b.title}</h2>
               <p className="text-[9px] md:text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed">{b.desc}</p>
             </motion.div>
          ))}
        </section>

        {/* Franchise Model Grid */}
        <section className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-violet-500/5 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-[18px] md:text-[22px] font-bold dark:text-white text-slate-900 mb-2 text-center tracking-tight">Our Franchise Models</h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Choose an investment model tailored to your available physical space and capital parameters. If you lack space but have capital, consider our <Link href="/roi-calculator" className="text-violet-600 font-bold hover:underline">ROI Calculator</Link> to estimate returns.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tier 1 Model */}
              <div className="bg-black/5 dark:bg-black/40 border dark:border-white/10 border-black/10 rounded-[1.5rem] p-6 shadow-sm hover:border-violet-500/30 transition-colors">
                 <div className="text-[9px] uppercase font-black tracking-widest text-violet-500 mb-1">Tier 1</div>
                 <h3 className="text-[15px] md:text-[17px] font-bold dark:text-white text-slate-900 mb-4">Mini Commercial</h3>
                 <ul className="space-y-3 mb-6">
                   <li className="flex items-center gap-2 text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700 font-medium">
                     <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Required Space: 1,000 - 2,000 Sq Ft
                   </li>
                   <li className="flex items-center gap-2 text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700 font-medium">
                     <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Focus: <Link href="/mushroom-types/oyster" className="hover:underline">Oyster</Link> & Milky Mushrooms
                   </li>
                   <li className="flex items-center gap-2 text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700 font-medium">
                     <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Yield Capability: ~ 200kg/month
                   </li>
                 </ul>
                 <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center py-2.5 rounded-xl border border-violet-500/50 text-violet-600 dark:text-violet-400 font-bold hover:bg-violet-500/10 transition-colors text-[10px] md:text-[11px]">
                   Get Tier 1 Quote
                 </a>
              </div>
              
              {/* Tier 2 Model */}
              <div className="bg-violet-600 border dark:border-white/10 border-black/10 rounded-[1.5rem] p-6 shadow-lg relative overflow-hidden group">
                 <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform"></div>
                 <div className="text-[9px] uppercase font-black tracking-widest text-white/80 mb-1 relative z-10">Tier 2</div>
                 <h3 className="text-[15px] md:text-[17px] font-bold text-white mb-4 relative z-10">Industrial Plant</h3>
                 <ul className="space-y-3 mb-6 relative z-10">
                   <li className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-medium">
                     <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> Required Space: 5,000+ Sq Ft
                   </li>
                   <li className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-medium">
                     <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> Focus: Climate Controlled Button Mushrooms
                   </li>
                   <li className="flex items-center gap-2 text-[10px] md:text-[11px] text-white/90 font-medium">
                     <CheckCircle2 className="w-4 h-4 text-white shrink-0" /> Yield Capability: 20-30 Tons/Cycle
                   </li>
                 </ul>
                 <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center py-2.5 rounded-xl bg-white text-violet-600 font-bold hover:bg-white/90 transition-colors text-[10px] md:text-[11px] relative z-10">
                   Setup Industrial Plant
                 </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10 text-center shadow-sm relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-500/5 pointer-events-none" />
           <div className="relative z-10">
              <h2 className="text-[18px] md:text-[22px] font-bold dark:text-white text-slate-900 mb-3">Ready to grow your territory?</h2>
              <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 mb-6 max-w-xl mx-auto leading-relaxed">
                Connect with our franchise management team and let us assist you with end-to-end setups, spawn procurement, and commercial success. Let's build the largest <Link href="/mushroom-price-today" className="text-violet-600 font-bold hover:underline">premium mushroom supply</Link> network together.
              </p>
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-bold text-[11px] md:text-[12px] items-center gap-2 shadow-lg transition-transform hover:scale-105">
                Apply via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </a>
           </div>
        </section>
      </article>
    </>
  );
}
