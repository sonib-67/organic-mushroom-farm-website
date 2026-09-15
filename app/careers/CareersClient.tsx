"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Briefcase, Search, MessageCircle, TrendingUp, Zap, Heart, Users, MapPin, Send, CheckCircle2, FileText } from "lucide-react";

const jobs = [
  {
    title: "Digital Marketing Executive",
    location: "Remote / Hybrid",
    type: "Full-Time",
    experience: "1-3 Years",
    desc: "Drive B2B leads, coordinate social media content, and manage agri-education campaigns.",
  },
  {
    title: "Sales Executive (Franchise & Training)",
    location: "Hybrid",
    type: "Full-Time",
    experience: "1-2 Years B2B Sales",
    desc: "Handle daily inquiries, conduct virtual farm tours, and onboard new franchise partners.",
  },
  {
    title: "Agriculture Internship Program",
    location: "On-site Farm",
    type: "Internship (3-6 Months)",
    experience: "Students / Freshers",
    desc: "Hands-on training in commercial compost making, pasteurization, and harvesting techniques.",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Fast-track promotions based on performance, not tenure." },
  { icon: Zap, title: "Modern Tech", desc: "Work with advanced climate-controlled environment technology." },
  { icon: Heart, title: "Health First", desc: "Working in organic, clean environments focused on sustainability." },
  { icon: Users, title: "Excellent Culture", desc: "A tightly knit team driven by passion for agritech innovation." },
];

export default function CareersClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Premium Background Effects (Glassmorphism, no black boxes) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <article className="max-w-5xl mx-auto px-4 relative z-10 space-y-8 pb-24">
        
        {/* Header Section */}
        <header className="text-center space-y-4 mb-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-50" />
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/10 dark:bg-white/[0.05] border dark:border-white/10 border-black/10 shadow-sm mx-auto mb-2">
            <Briefcase className="w-3 h-3 text-blue-500" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest dark:text-slate-300 text-slate-700">Join Our Ecosystem</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Grow Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Sustainable Tech-Agriculture</span>
          </h1>
          <p className="text-[10px] md:text-[11px] max-w-2xl mx-auto dark:text-slate-400 text-slate-600 leading-relaxed font-medium">
            We are revolutionizing the commercial mushroom ecosystem across India and the globe. Join the network powering thousands of agro-entrepreneurs and <Link href="/training" className="text-blue-600 font-bold hover:underline">commercial setups</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#open-positions" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all text-[10px] md:text-[11px] shadow-lg shadow-blue-500/25">
              <Search className="w-3.5 h-3.5" /> View Open Positions
            </a>
            <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border dark:border-white/20 border-black/20 dark:text-white text-slate-900 rounded-full font-bold transition-all text-[10px] md:text-[11px]">
              <MessageCircle className="w-3.5 h-3.5" /> Chat with HR
            </a>
          </div>
        </header>

        {/* Benefits Section */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-3xl p-5 shadow-sm hover:-translate-y-1 transition-transform group"
             >
               <b.icon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
               <h2 className="text-[11px] md:text-[12px] font-bold dark:text-white text-slate-900 mb-1.5">{b.title}</h2>
               <p className="text-[9px] md:text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed">{b.desc}</p>
             </motion.div>
          ))}
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="scroll-mt-32 pt-8">
          <h2 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-6 flex items-center gap-3">
            <Briefcase className="text-blue-500 w-6 h-6" /> Open Positions
          </h2>
          <div className="grid gap-4">
            {jobs.map((job, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[1.5rem] p-5 md:p-6 shadow-sm hover:border-blue-500/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="flex-1 space-y-3">
                  <h3 className="text-[14px] md:text-[16px] font-bold dark:text-white text-slate-900">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3"/> {job.location}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 leading-relaxed max-w-2xl">{job.desc}</p>
                </div>
                <div className="shrink-0 flex">
                  <a 
                    href={`https://wa.me/919203544140?text=I%20am%20interested%20in%20applying%20for%20the%20position%20of%20${encodeURIComponent(job.title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-[10px] shadow-md group-hover:scale-105"
                  >
                    Apply Now <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Apply Section */}
        <section className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm border dark:border-white/10 border-black/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="p-8 md:p-10 flex-1 dark:bg-white/[0.02] bg-black/[0.02]">
            <h2 className="text-[16px] md:text-[20px] font-bold dark:text-white text-slate-900 mb-3 tracking-tight">Don't see a fit? Send your resume!</h2>
            <p className="text-[10px] md:text-[11px] dark:text-slate-400 text-slate-600 mb-6 leading-relaxed">
              We are always on the lookout for talented individuals in agriculture, logistics, marketing, and sales. Submit your profile, and we'll reach out when an opportunity arises. You can also explore our <Link href="/equipment" className="text-blue-600 font-bold hover:underline">equipment operations</Link> or <Link href="/training" className="text-blue-600 font-bold hover:underline">agronomy programs</Link>.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 font-medium text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700">
                <CheckCircle2 className="text-green-500 w-4 h-4" /> Field Executives & Labour
              </li>
              <li className="flex items-center gap-2 font-medium text-[10px] md:text-[11px] dark:text-slate-300 text-slate-700">
                <CheckCircle2 className="text-green-500 w-4 h-4" /> Agronomy Specialists
              </li>
            </ul>
          </div>
          <div className="p-8 md:p-10 flex-1 flex flex-col items-center justify-center relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-t md:border-t-0 md:border-l border-black/10 dark:border-white/10">
            <div className="w-full max-w-sm relative z-10 text-center">
              <FileText className="w-10 h-10 text-blue-500 mx-auto mb-4 drop-shadow-md" />
              <h3 className="text-[12px] md:text-[14px] font-bold dark:text-white text-slate-900 mb-4">Drop your details on WhatsApp</h3>
              <a 
                href="https://wa.me/919203544140?text=Hi! I am looking for career opportunities and would like to share my resume." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-white/10 hover:bg-white/20 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border dark:border-white/20 border-black/20 text-slate-900 dark:text-white rounded-full font-bold transition-all text-[10px] md:text-[11px]"
              >
                <MessageCircle className="w-4 h-4" /> Share Resume on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </article>
    </>
  );
}
