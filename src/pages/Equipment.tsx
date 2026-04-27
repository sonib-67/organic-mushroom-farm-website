import React from 'react';
import { motion } from 'motion/react';
import { Zap, Thermometer, ShieldCheck, Hammer, Box, FlaskConical, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const EquipmentPage = () => {
  const sections = [
    {
      title: "Core Infrastructure",
      icon: Zap,
      items: [
        { name: "Humidifiers & Foggers", desc: "Automated ultrasonic systems to maintain 80-90% relative humidity essential for pinning." },
        { name: "Temperature Control", desc: "Industrial AC units and high-speed exhaust fans for precise thermodynamic balance." },
        { name: "Racks & Shelves", desc: "Galvanized vertical racking systems designed to maximize cubic growth area." },
        { name: "LED Lighting", desc: "Balanced spectrum LED setups specifically for mushroom pinning induction." }
      ]
    },
    {
      title: "Cultivation Tools",
      icon: Hammer,
      items: [
        { name: "Pressure Sprayers", desc: "Fine-mist sprayer pumps for maintaining hydration without damaging mycelium." },
        { name: "Digital Hygrometers", desc: "Industrial-grade sensors for real-time monitoring of temp and moisture." },
        { name: "PP Bags & Trays", desc: "BPA-free polypropylene bags and wooden/plastic incubation trays." }
      ]
    },
    {
      title: "Raw Materials",
      icon: FlaskConical,
      items: [
        { name: "Lab-Tested Spawn", desc: "High-yield hybrid mushroom seeds (spawn) verified for genetic stability." },
        { name: "Quality Substrate", desc: "Premium wheat straw, paddy straw, and hardwood sawdust sourcing." },
        { name: "Sterilization Units", desc: "Industrial-grade autoclaves and chemical sterilization tanks for substrate prep." }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Mushroom Farming Equipment & Materials India" 
        description="Source the best mushroom farming equipment – humidifiers, temperature control systems, lab-grade spawn, and specialized cultivation tools." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Inventory & Equipment</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The <span className="gradient-text">Grow Tech</span> Stack
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Essential infrastructure and professional-grade materials required for industrial mushroom production.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {sections.map((section, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center text-primary-start border border-primary-start/20">
                <section.icon size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, i) => (
                <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-primary-start/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary-start transition-colors mb-6">
                    <Box size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto glass p-12 md:p-16 rounded-[4rem] border border-white/5 flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start shrink-0">
                <ShieldCheck size={48} />
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Industrial Setup Assistance</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Not sure which equipment to buy? We provide turnkey project assistance, sourcing high-quality machinery at wholesale rates for our students.
                </p>
                <div className="flex gap-4">
                    <a href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20a%20wholesale%20quote%20for%20mushroom%20farming%20equipment." target="_blank" rel="noopener noreferrer" className="gradient-bg px-8 py-4 rounded-xl text-white font-bold inline-flex items-center gap-2">
                        Get Wholesale Quote <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;
