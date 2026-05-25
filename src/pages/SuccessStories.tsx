import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Award, TrendingUp, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SuccessStoriesPage = () => {
  const stories = [
    {
      name: "Rajesh Kumar",
      location: "Jabalpur, MP",
      tagline: "The Local Farmer Pivot",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      story: "A traditional wheat farmer from Madhya Pradesh who pivoted to Milky mushrooms during the harsh summer months. After attending our 15-day intensive training, Rajesh setup a small 500 bag unit that doubled his seasonal income in just one cycle.",
      achievement: "2x Increase in Seasonal Income"
    },
    {
      name: "Sneha Sharma",
      location: "Delhi NCR",
      tagline: "The Student Agripreneur",
      icon: Award,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      story: "A college student who utilized her apartment's balcony and vertical space to grow high-value medicinal mushrooms like Lion's Mane. She now runs a successful D2C supplement brand while continuing her studies.",
      achievement: "Founded 'BrainFungi' D2C Brand"
    },
    {
      name: "Amit Singhal",
      location: "Indore, MP",
      tagline: "The B2B Industrialist",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      story: "An ex-corporate professional who setup a fully climate-controlled 5-ton capacity Button mushroom unit. After our technical consultancy and market linkage support, he now supplies premium produce to top-tier hotel chains across North India.",
      achievement: "5-Ton Industrial Unit Setup"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Success Stories | Mushroom Farming Training Results" 
        description="Read how our students and clients across India have built profitable mushroom farming businesses. From small balconies to 5-ton industrial units." 
      />

      <section className="section-padding text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="badge mx-auto mb-6">Client Testimonials</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Our <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Real people, real results. See how we help agripreneurs build sustainable wealth through fungi.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {stories.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col gap-12 glass p-8 lg:p-16 rounded-[4rem] border border-white/5`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-2">
              <div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-primary-start text-xs font-black uppercase tracking-widest mb-4`}>
                      <s.icon size={14} /> {s.tagline}
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2">{s.name}</h2>
                  <p className="text-slate-500 font-bold flex items-center gap-2 uppercase text-xs tracking-widest"><Star size={12} className="text-primary-end" /> {s.location}</p>
              </div>
              <div className="glass px-6 py-4 rounded-3xl border border-white/10">
                  <div className="flex gap-1 text-primary-start mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-white font-black text-xs uppercase tracking-widest italic whitespace-nowrap">Verified Success</p>
              </div>
            </div>

            <div className="relative pt-4">
                <Quote className="absolute -top-4 -left-4 text-white/5" size={60} />
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed relative z-10 font-medium italic">
                    "{s.story}"
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
              <div className="p-6 md:p-8 rounded-3xl bg-primary-start/5 border border-primary-start/10">
                  <p className="text-slate-500 text-[10px] uppercase font-black tracking-widest mb-2 italic">Key Achievement</p>
                  <p className="text-white text-xl md:text-2xl font-black tracking-tight">{s.achievement}</p>
              </div>

              <Link to={`/success-story/${s.name.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group bg-white/5 px-6 py-4 rounded-xl hover:bg-white/10 transition-colors">
                  Full Project Specs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Want to be our next success story?</h2>
            <a href="https://calendly.com/tanmaysomi/30min" target="_blank" rel="noopener noreferrer" className="gradient-bg px-12 py-5 rounded-2xl text-white font-black inline-flex items-center gap-3 hover:scale-105 transition-all">
                Book a Free Consultation <ArrowRight size={20} />
            </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
