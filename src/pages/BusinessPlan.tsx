import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, AlertCircle, CheckCircle, TrendingUp, Cpu, Rocket, Users, BadgeCheck, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const BusinessPlan = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Farming Business Plan India | Organic Mushroom Farm" 
        description="Explore our detailed mission, market strategy, and operational roadmap to becoming India's leading organic fungi hub. Learn about our hub-and-spoke farming model." 
      />

      {/* Hero Section */}
      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Strategic Roadmap</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Join the <span className="gradient-text">Fungi Revolution</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            Building a sustainable, tech-driven, and highly profitable ecosystem for organic mushroom cultivation in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass px-8 py-4 rounded-2xl border border-white/5">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Students Trained</div>
            </div>
            <div className="glass px-8 py-4 rounded-2xl border border-white/5">
              <div className="text-3xl font-bold text-white mb-1">5+ Tons</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Annual Production</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Overview & Vision */}
      <section className="section-padding grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="glass p-10 rounded-[3rem] border border-white/5">
          <div className="w-12 h-12 rounded-2xl bg-primary-start/20 flex items-center justify-center text-primary-start mb-6">
            <Target size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Business Overview</h2>
          <p className="text-slate-400 leading-relaxed">
            Organic Mushroom Farm stands at the intersection of agriculture and technology. As a premium producer, lab-grade spawn supplier, and educational hub, we are democratizing the high-value mushroom farming industry in India.
          </p>
        </div>
        <div className="glass p-10 rounded-[3rem] border border-white/5">
          <div className="w-12 h-12 rounded-2xl bg-primary-start/20 flex items-center justify-center text-primary-start mb-6">
            <Eye size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">The Vision</h2>
          <p className="text-slate-400 leading-relaxed italic">
            "To become the leading provider of organic fungi and sustainable farming education in India, empowering 10,000+ agripreneurs by 2030."
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-500/5 p-10 rounded-[3rem] border border-red-500/10">
            <div className="flex items-center gap-3 text-red-500 font-bold mb-6">
              <AlertCircle size={20} /> The Problem
            </div>
            <ul className="space-y-4 text-slate-400">
              <li>• Shortage of lab-grade, high-yield mushroom spawn (seeds) in local markets.</li>
              <li>• Heavy reliance on chemical pesticides in conventional mushroom farming.</li>
              <li>• Lack of professional, end-to-end technical training for new farmers.</li>
            </ul>
          </div>
          <div className="bg-primary-start/5 p-10 rounded-[3rem] border border-primary-start/10">
            <div className="flex items-center gap-3 text-primary-start font-bold mb-6">
              <CheckCircle size={20} /> Our Solution
            </div>
            <ul className="space-y-4 text-slate-400">
              <li>• 100% Organic substrate preparation using zero chemical intervention.</li>
              <li>• Laboratory-verified spawn production with stabilized hybrid genetics.</li>
              <li>• Comprehensive mentorship from facility setup to guaranteed buy-back.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Market Strategy */}
      <section className="section-padding bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Market Analysis & strategy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-black/40 border border-white/5">
              <TrendingUp className="text-primary-start mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Market Opportunity</h3>
              <p className="text-slate-500 text-sm">Rising demand for vegan protein and medicinal fungi in the post-pandemic wellness market. CAGR of 15% in India.</p>
            </div>
            <div className="p-8 rounded-3xl bg-black/40 border border-white/5">
              <Users className="text-primary-start mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Target Segments</h3>
              <p className="text-slate-500 text-sm">B2B (Hotels & Pharma), B2C (Health-conscious households), and B2G (Government training programs).</p>
            </div>
            <div className="p-8 rounded-3xl bg-black/40 border border-white/5">
              <BadgeCheck className="text-primary-start mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Competitive Edge</h3>
              <p className="text-slate-500 text-sm">Our 100% organic substrate and post-training lifetime support create an unmatched entry barrier for competitors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Plan */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Operational & technical plan</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-white font-bold">1</div>
                <div>
                  <h4 className="text-white font-bold mb-2">Cultivation Process</h4>
                  <p className="text-slate-400 text-sm">High-level SOPs covering everything from sterile inoculation to automated climate control management.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-white font-bold">2</div>
                <div>
                  <h4 className="text-white font-bold mb-2">Facility Infrastructure</h4>
                  <p className="text-slate-400 text-sm">Smart grow-rooms equipped with ultrasonic humidifiers, CO2 controllers, and HEPA filters.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-white font-bold">3</div>
                <div>
                  <h4 className="text-white font-bold mb-2">Scaling Roadmap</h4>
                  <p className="text-slate-400 text-sm">A systematic month-over-month production scaling model designed for maximum ROI in minimal space.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-start/20 blur-[120px] rounded-full" />
            <div className="glass p-10 rounded-[3rem] border border-white/10 relative z-10">
              <h3 className="text-xl font-bold text-white mb-6">Management & Leadership</h3>
              <p className="text-slate-400 mb-6 font-medium">Led by an <span className="text-white">MBA Agripreneur</span> with extensive expertise in bio-technology and supply chain management.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-primary-start" /> Sustainability Driven</div>
                <div className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-primary-start" /> Transparent Operations</div>
                <div className="flex items-center gap-3 text-slate-300 text-sm"><CheckCircle size={16} className="text-primary-start" /> Farmer Empowerment</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPlan;
