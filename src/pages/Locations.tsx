import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Truck, Globe, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const LocationsPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Contact & Locations | Organic Mushroom Farm Jabalpur" 
        description="Connect with India's leading Organic Mushroom Farm based in Jabalpur. Get lab-grade spawn, expert training, and fresh mushrooms. Pan-India shipping available." 
        keywords="Organic mushroom farm in Jabalpur, buy mushroom spawn MP, mushroom farming training India, Milky mushroom seeds online, MBA agripreneur Jabalpur"
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Global Headquarters</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Reach Out to <span className="gradient-text">Us</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Leading the mushroom revolution from the heart of India.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        {/* HQ Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-white/5">
                <MapPin size={160} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <MapPin className="text-primary-start" /> Corporate Office
            </h2>
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-slate-500 uppercase font-black text-xs tracking-widest mb-2">Office Address</p>
                <p className="text-white text-xl font-bold leading-relaxed">
                  Jabalpur, Madhya Pradesh,<br />
                  India - 482001
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-500 uppercase font-black text-xs tracking-widest mb-2">Connect via Phone</p>
                  <p className="text-white font-bold flex items-center gap-2"><Phone size={16} className="text-primary-start" /> +91-9203544140</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase font-black text-xs tracking-widest mb-2">Email Support</p>
                  <p className="text-white font-bold flex items-center gap-2"><Mail size={16} className="text-primary-start" /> support@organicmushroomfarm.shop</p>
                </div>
              </div>
              <div>
                <p className="text-slate-500 uppercase font-black text-xs tracking-widest mb-2">Operational Hours</p>
                <p className="text-white font-bold flex items-center gap-2"><Clock size={16} className="text-primary-start" /> Mon - Sat: 9:00 AM - 7:00 PM (IST)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Truck size={20} className="text-primary-start" /> Logistics Network
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Strategic location in Jabalpur allows us to offer <strong>Pan-India shipping</strong> for spawn, dried mushrooms, and equipment with reduced transit times.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border border-white/5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Globe size={20} className="text-primary-start" /> International Reach
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Global availability (USA, Australia, Europe) for our digital training courses and virtual technical consultancy.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Mini Contact */}
        <div className="space-y-8">
            <div className="gradient-bg p-10 rounded-[3rem] text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Visiting Us?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                    We welcome serious agripreneurs to our facility. Please book an appointment before visiting to ensure an expert is available for your consultation.
                </p>
                <a href="https://calendly.com/tanmaysomi/30min" target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all">
                    Book Appointment <ArrowRight size={18} />
                </a>
            </div>

            <div className="glass p-10 rounded-[3rem] border border-white/5">
                <h4 className="text-white font-bold mb-4">Why Jabalpur?</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                    Centrally located in India, Jabalpur is a hub for agricultural innovation in MP. Our farm utilizes the region's unique climate while serving as a strategic distribution point for North and South India alike.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
