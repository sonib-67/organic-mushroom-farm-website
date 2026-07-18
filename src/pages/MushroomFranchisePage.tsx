import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Award, CheckCircle2, DollarSign, Store, TrendingUp, Search, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { generateReviewSchema } from '../utils/seoSchemas';

export default function MushroomFranchisePage() {
  return (
    <>
      <SEO 
        title="Mushroom Franchise Opportunity | Low Investment, High ROI"
        description="Start a profitable mushroom franchise business with Organic Mushroom Farm. Complete turnkey setup, training, marketing support, and guaranteed ROI."
        keywords="mushroom franchise, organic farming franchise, low investment franchise, agriculture franchise india, mushroom business ROI"
      />
      <div className="pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center py-16 md:py-24 max-w-4xl mx-auto relative z-10">
            <div className="badge mx-auto mb-6">Pan India Franchise Program</div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tighter">
              Start Your Own <br/><span className="gradient-text">Mushroom Franchise</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-10 leading-relaxed">
              Join India's fastest-growing organic mushroom network. Low investment, rapid setup, high structural durability, and fully supported cold-chain & marketing workflows.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919203544140?text=I am interested in the Mushroom Franchise Opportunity" className="btn-primary px-10 py-4 rounded-full font-bold flex items-center gap-3 text-lg">
                <MessageCircle size={20} /> Get Franchise Details
              </a>
              <a href="tel:9203544140" className="px-8 py-4 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold hover:dark:bg-white/5 hover:bg-black/5 transition-colors flex items-center gap-2">
                <Phone size={18} /> Schedule a Call
              </a>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              { icon: DollarSign, title: "Low Capital Setup", desc: "Start with micro-investment setups spanning 1000 sq ft up to large commercial 10,000 sq ft industrial bounds." },
              { icon: Store, title: "Complete Cold Chain", desc: "We provide full structural planning and climate control installation (AC, Humidifier setups)." },
              { icon: ShieldCheck, title: "Guaranteed Support", desc: "From premium spawn supply to advanced buy-back support capabilities and market linkages." }
            ].map((b, i) => (
               <div key={i} className="glass p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 bg-gradient-to-br from-transparent to-primary-start/5 hover:border-primary-start/30 transition-colors">
                 <div className="w-16 h-16 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mb-6">
                   <b.icon size={32} />
                 </div>
                 <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">{b.title}</h3>
                 <p className="dark:text-slate-400 text-slate-600 leading-relaxed">{b.desc}</p>
               </div>
            ))}
          </div>

          {/* Franchise Model Grid */}
          <div className="glass p-8 md:p-16 rounded-[3.5rem] border dark:border-white/5 border-black/5 mb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-start/5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4 text-center tracking-tight">Our Franchise Models</h2>
              <p className="dark:text-slate-400 text-slate-600 text-center mb-12 max-w-2xl mx-auto">Choose an investment model tailored to your available physical space and capital parameters.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-black border dark:border-white/10 border-black/10 rounded-[2rem] p-8 md:p-12 shadow-xl">
                   <div className="text-[10px] uppercase font-black tracking-[0.2em] text-primary-start mb-2">Tier 1</div>
                   <h3 className="text-3xl font-bold dark:text-white text-slate-900 mb-6">Mini Commercial</h3>
                   <ul className="space-y-4 mb-8">
                     <li className="flex items-center gap-3 text-sm dark:text-slate-300 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-green-500 shrink-0" /> Required Space: 1,000 - 2,000 Sq Ft
                     </li>
                     <li className="flex items-center gap-3 text-sm dark:text-slate-300 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-green-500 shrink-0" /> Focus: Oyster & Milky Mushrooms
                     </li>
                     <li className="flex items-center gap-3 text-sm dark:text-slate-300 text-slate-700 font-medium">
                       <CheckCircle2 size={18} className="text-green-500 shrink-0" /> Yield Capability: ~ 200kg/month
                     </li>
                   </ul>
                   <a href="https://wa.me/919203544140" className="w-full block text-center py-4 rounded-xl border-2 border-primary-start text-primary-start font-bold hover:bg-primary-start hover:text-white transition-all">Get Quote</a>
                </div>
                
                <div className="bg-primary-start border dark:border-white/10 border-black/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 blur-3xl rounded-full pointer-events-none group-hover:scale-150 transition-transform"></div>
                   <div className="text-[10px] uppercase font-black tracking-[0.2em] text-white/80 mb-2">Tier 2</div>
                   <h3 className="text-3xl font-bold text-white mb-6">Industrial Plant</h3>
                   <ul className="space-y-4 mb-8">
                     <li className="flex items-center gap-3 text-sm text-white/90 font-medium">
                       <CheckCircle2 size={18} className="text-white shrink-0" /> Required Space: 5,000+ Sq Ft
                     </li>
                     <li className="flex items-center gap-3 text-sm text-white/90 font-medium">
                       <CheckCircle2 size={18} className="text-white shrink-0" /> Focus: Climate Controlled Button Mushrooms
                     </li>
                     <li className="flex items-center gap-3 text-sm text-white/90 font-medium">
                       <CheckCircle2 size={18} className="text-white shrink-0" /> Yield Capability: 20-30 Tons/Cycle
                     </li>
                   </ul>
                   <a href="https://wa.me/919203544140" className="w-full block text-center py-4 rounded-xl bg-white text-primary-start font-bold hover:bg-slate-50 transition-all">Setup Industrial Setup</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pb-24">
            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-8">Ready to grow your territory?</h2>
            <a href="https://wa.me/919203544140" className="btn-primary inline-flex px-12 py-5 rounded-full font-bold text-lg items-center gap-3">
              Apply via WhatsApp <ArrowRight />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
