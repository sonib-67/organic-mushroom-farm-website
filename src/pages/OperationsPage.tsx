import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Globe, Award, ShieldCheck, Sprout, Building, Users } from 'lucide-react';
import SEO from '../components/SEO';

const OperationsPage = ({ metaDesc }: { metaDesc?: string }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <SEO 
        title="Pan India & Global Operations | Organic Mushroom Farm" 
        description={metaDesc || "Our expert teams provide commercial mushroom training and farm setup India services across Maharashtra, MP, UP, Rajasthan, Gujarat, USA, UK, Canada, UAE, Europe and globally."} 
        keywords="mushroom training India, mushroom farm setup India, global mushroom farming consultancy, USA mushroom setup, Europe mushroom spawn"
      />

      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-primary-start/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 -z-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500 mb-8 justify-center">
          <a href="/" className="hover:text-primary-start transition-colors">Home</a>
          <span>/</span>
          <span className="dark:text-slate-300 text-slate-700 font-semibold">Operations</span>
        </div>

        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white/5 bg-black/5 dark:text-slate-300 text-slate-700 text-xs font-bold mb-6 border dark:border-white/10 border-black/10">
            <Globe size={14} className="text-primary-start animate-spin-slow" />
            <span>Pan India & Global Presence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold dark:text-white text-slate-900 mb-6 tracking-tight leading-tight">
            Our Operational <span className="gradient-text">Network & Reach</span>
          </h1>
          <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            From state-of-the-art regional consulting units across Indian provinces to custom industrial consulting for international growers in the USA, Australia, and Europe.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Domestic Network */}
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center text-primary-start mb-6">
                <Building size={24} />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Domestic Operations (Pan-India)</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-start to-primary-mid rounded-full mb-6"></div>
              
              <p className="dark:text-slate-300 text-slate-700 font-medium mb-6 leading-relaxed text-sm">
                Our teams provide <strong>mushroom training in India</strong> and <strong>farm setup services</strong> across major regions including Madhya Pradesh, Maharashtra, Uttar Pradesh, and Bihar. We aim to build a strong network of successful mushroom farms.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Serving Pan India Cities, Towns & Villages:</h4>
                <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed text-justify">
                  Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Allahabad, Howrah, Ranchi, Gwalior, Jabalpur, Coimbatore, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh, and many other cities, towns, and villages across India.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: International Operations */}
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Globe size={24} />
              </div>
              <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Global Reach & Consultancy</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-brand-purple rounded-full mb-6"></div>
              
              <p className="dark:text-slate-300 text-slate-700 font-medium mb-6 leading-relaxed text-sm">
                We offer professional consultancy services worldwide. Our standard procedures, high-yield methods, and climate control setups work effectively in any country.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Global Reach & International Mushroom Farming Consultancy:</h4>
                <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed text-justify">
                  USA, Australia, UK, Canada, UAE, Saudi Arabia, South Africa, Kenya, Nigeria, Europe, Germany, France, Italy, Spain, Netherlands, New Zealand, Singapore, Malaysia, Philippines, Vietnam, Japan, South Korea, and other farming hubs worldwide.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass p-6 rounded-3xl border border-white/5 text-center">
            <div className="w-10 h-10 rounded-full bg-primary-start/10 text-primary-start flex items-center justify-center mx-auto mb-4">
              <Sprout size={20} />
            </div>
            <h4 className="font-bold dark:text-white text-slate-900 text-base mb-2">Organic F1 Spawn</h4>
            <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed">
              Supplying high-efficiency F1 mother spawn seeds to extreme climates across domestic and global zones.
            </p>
          </div>
          <div className="glass p-6 rounded-3xl border border-white/5 text-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-bold dark:text-white text-slate-900 text-base mb-2">Turnkey Setups</h4>
            <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed">
              SOP-driven climate controls custom-engineered for region-specific seasonal temperature and humidity profiles.
            </p>
          </div>
          <div className="glass p-6 rounded-3xl border border-white/5 text-center">
            <div className="w-10 h-10 rounded-full bg-primary-start/10 text-primary-start flex items-center justify-center mx-auto mb-4">
              <Users size={20} />
            </div>
            <h4 className="font-bold dark:text-white text-slate-900 text-base mb-2">Linkage & Training</h4>
            <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed">
              Direct market mapping connections to distributors and high-standard scientific agricultural program consulting.
            </p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/5 text-center">
          <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 mb-4">Ready to Start Your Commercial Farm?</h3>
          <p className="dark:text-slate-400 text-slate-500 text-sm mb-8 max-w-xl mx-auto font-medium">
            Contact our specialist agri-tech consultancy team for custom global setup quotes or verified spawn order logistics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919203544140" className="btn-primary px-8 py-3 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg shadow-primary-start/20">
              WhatsApp Support
            </a>
            <a href="/contact" className="glass px-8 py-3 rounded-full font-bold text-xs dark:text-white text-slate-900 hover:bg-white/5 transition-all">
              Request Project Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;
