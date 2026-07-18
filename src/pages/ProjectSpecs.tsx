import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Factory, Timer, TrendingUp, Cpu } from 'lucide-react';
import SEO from '../components/SEO';

const dummyData = {
  "rajesh-kumar": {
    name: "Rajesh Kumar",
    capacity: "500 Bags (Milky Mushroom)",
    space: "20ft x 15ft Shed",
    roi: "200% (First Cycle)",
    timeframe: "15 Days Training + 45 Days Cultivation",
    investment: "₹25,000 - ₹30,000",
    equipment: [
      "Substrate Pasteurization Drum",
      "Hygrometer & Thermometer",
      "Manual Foggers",
      "Exhaust Fans",
      "Bamboo Racks"
    ]
  },
  "sneha-sharma": {
    name: "Sneha Sharma",
    capacity: "250 Bags (Lion's Mane & Oyster)",
    space: "12ft x 10ft Balcony / Room",
    roi: "350% (High-value retail)",
    timeframe: "7 Days Training + 90 Days Cultivation",
    investment: "₹40,000 - ₹50,000 (With basic climate control)",
    equipment: [
      "Ultrasonic Humidifier",
      "Pre-fabricated Grow Tent",
      "Digital Temperature Controller",
      "HEPA Filter Setup",
      "Metal Wire Racks"
    ]
  },
  "amit-singhal": {
    name: "Amit Singhal",
    capacity: "5 Tons (White Button Mushroom)",
    space: "3 Grow Rooms (40ft x 15ft each)",
    roi: "Break-even in 14 Months",
    timeframe: "3 Months Setup + Continuous Cycle",
    investment: "₹35,00,000+",
    equipment: [
      "Industrial Chiller Unit (10 Ton)",
      "Automated Climate Control System (PLC)",
      "CO2 Sensors & Exhaust automation",
      "Phase 2 Compost Pasteurization Tunnel",
      "Industrial Humidifier"
    ]
  }
};

const ProjectSpecsPage = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? dummyData[id as keyof typeof dummyData] : dummyData["rajesh-kumar"];
  const specData = data || dummyData["rajesh-kumar"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title={`Project Specs: ${specData.name} | Organic Mushroom Farm`} 
        description={`Detailed project specifications, equipment used, and ROI for ${specData.name}'s mushroom farming setup.`} 
      />

      <section className="section-padding pt-0 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/success-stories" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Stories
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none">
              <Factory size={160} />
          </div>

          <div className="relative z-10">
            <div className="badge mb-6">Full Project Specs</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {specData.name}'s <span className="gradient-text">Setup</span>
            </h1>
            <p className="text-slate-400 text-lg mb-12">
              A comprehensive breakdown of the infrastructure, investment, and returns for this commercial mushroom operation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4 text-primary-start">
                  <Factory size={24} />
                  <h3 className="font-bold text-white text-xl">Capacity & Scale</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Production Capacity</p>
                    <p className="text-white font-bold">{specData.capacity}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Space Required</p>
                    <p className="text-white font-bold">{specData.space}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4 text-primary-start">
                  <TrendingUp size={24} />
                  <h3 className="font-bold text-white text-xl">Financials</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Estimated Investment</p>
                    <p className="text-white font-bold">{specData.investment}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black mb-1">Expected ROI</p>
                    <p className="text-green-400 font-bold">{specData.roi}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6 text-primary-start">
                <Cpu size={24} />
                <h3 className="font-bold text-white text-xl">Equipment & Infrastructure</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {specData.equipment.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle size={18} className="text-primary-start shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
               <div className="flex items-center gap-3 mb-4 text-primary-start">
                  <Timer size={24} />
                  <h3 className="font-bold text-white text-xl">Timeline</h3>
                </div>
                <p className="text-white font-bold text-lg">{specData.timeframe}</p>
            </div>
            
            <div className="mt-12 text-center">
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="gradient-bg px-10 py-5 rounded-2xl text-white font-black inline-flex items-center gap-3 hover:scale-105 transition-all outline-none">
                  Build a Similar Project <ArrowRight size={20} />
              </a>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectSpecsPage;
