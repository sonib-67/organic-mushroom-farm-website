import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, ClipboardList, TrendingUp, Landmark, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const SubsidyPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Farming Government Subsidy India | NHB & NABARD" 
        description="Learn about government subsidies for mushroom farming in India. Get support for NHB, MIDH, and Madhya Pradesh state horticulture schemes." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Financial Grants</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Government <span className="gradient-text">Subsidy Support</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Maximize your project ROI with up to 50% government subsidy across various national and state schemes.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* Major Schemes */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Landmark className="text-primary-start" /> National Schemes
          </h2>
          <div className="space-y-6">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 underline decoration-primary-start underline-offset-8 decoration-2">NHB (National Horticulture Board)</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">Best for Large-Scale Commercial Setups.</p>
              <div className="text-white font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" /> Up to 40% Project Subsidy
              </div>
              <p className="text-slate-500 text-sm">Focuses on high-tech cultivation units and cold storage integration. Subsidies are credit-linked and back-ended.</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 underline decoration-primary-start underline-offset-8 decoration-2">MIDH & RKVY</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">Mission for Integrated Development of Horticulture.</p>
              <div className="text-white font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" /> 35% to 50% Grants
              </div>
              <p className="text-slate-500 text-sm">Supports small to medium enterprise setups with focus on inclusive local development.</p>
            </div>
          </div>

          <div className="bg-primary-start/5 p-8 rounded-3xl border border-primary-start/10">
            <h2 className="text-white font-bold mb-4 flex items-center gap-3">
              <MapPin size={20} className="text-primary-start" /> Madhya Pradesh State Benefits
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Focus on <strong>Jabalpur district offices</strong> and local Horticulture Department branches for state-specific capital investment subsidies.
            </p>
            <p className="text-slate-400 text-xs italic">Includes special interest subvention on NABARD-refinanced agricultural loans.</p>
          </div>
        </div>

        {/* Requirements & Steps */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <FileText className="text-primary-start" /> Required Documents
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Aadhar Card / PAN", "Land Records / Lease Doc", "Detailed Project Report (DPR)", "Bank Account Details", "Training Certificate", "Registration Certificates"
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-400 text-sm glass px-4 py-3 rounded-xl border border-white/5">
                  <ShieldCheck size={14} className="text-primary-start" /> {doc}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <ClipboardList className="text-primary-start" /> Application Steps
            </h2>
            <div className="space-y-4">
              {[
                { title: "Registration", desc: "Online enrollment in the horticulture department portal." },
                { title: "DPR Submission", desc: "Drafting and submitting a bankable Detailed Project Report." },
                { title: "Field Verification", desc: "On-site inspection by agriculture officers to verify readiness." },
                { title: "Grant Sanction", desc: "Official approval and release of funds post construction." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white font-black text-xs">{i + 1}</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{step.title}</h4>
                    <p className="text-slate-500 text-xs italic leading-tight">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto gradient-bg p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Need Help with Your DPR?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
                A perfect Project Report is the key to getting your subsidy approved. Our experts draft bankable DPRs that meet NHB and MIDH standards.
            </p>
            <a href="tel:+919203544140" className="bg-white text-black px-12 py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 mx-auto w-fit hover:scale-105 transition-all">
                Call Now <ArrowRight size={18} />
            </a>
        </div>
      </section>
    </div>
  );
};

export default SubsidyPage;
