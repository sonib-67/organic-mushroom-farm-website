import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Search, Send, FileText, CheckCircle2, TrendingUp, Users, Award, ShieldCheck, Heart, Zap, Phone, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function CareersPage() {
  const jobs = [
    {
      title: "Mushroom Farm Supervisor",
      location: "Jabalpur / Field",
      type: "Full-Time",
      experience: "2-4 Years in Agriculture",
      desc: "Manage commercial spawn run, fruiting cycles, labour coordination, and ensure high-yield metrics are met."
    },
    {
      title: "Digital Marketing Executive",
      location: "Remote / Pan India",
      type: "Full-Time",
      experience: "1-3 Years",
      desc: "Drive B2B leads, coordinate social media content, and manage agri-education campaigns."
    },
    {
      title: "Sales Executive (Franchise & Training)",
      location: "Hybrid",
      type: "Full-Time",
      experience: "1-2 Years B2B Sales",
      desc: "Handle daily inquiries, conduct virtual farm tours, and onboard new franchise partners."
    },
    {
      title: "Agriculture Internship Program",
      location: "On-site Farm",
      type: "Internship (3-6 Months)",
      experience: "Students / Freshers",
      desc: "Hands-on training in commercial compost making, pasteurization, and harvesting techniques."
    }
  ];

  return (
    <>
      <SEO 
        title="Careers | Jobs at Organic Mushroom Farm | Hiring Now"
        description="Join India's leading organic mushroom farm. We are hiring for Farm Supervisors, Sales Executives, Digital Marketing, and providing Agriculture Internships."
        keywords="agriculture jobs india, mushroom farm jobs, farming jobs, online agriculture internship, remote digital marketing jobs"
      />
      <div className="pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="text-center py-16 md:py-24 max-w-4xl mx-auto">
            <div className="badge mx-auto mb-6">Join Our Ecosystem</div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tighter">
              Grow Your Career in <span className="gradient-text">Sustainable Tech-Agriculture</span>
            </h1>
            <p className="text-lg md:text-xl dark:text-slate-400 text-slate-600 mb-10 leading-relaxed">
              We are revolutionizing the commercial mushroom ecosystem across India and the globe. Join the network powering thousands of agro-entrepreneurs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#open-positions" className="btn-primary px-8 py-3 rounded-full font-bold flex items-center gap-2">
                <Search size={18} /> View Open Positions
              </a>
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold flex items-center gap-2">
                <MessageCircle size={18} /> Chat with HR
              </a>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: TrendingUp, title: "Career Growth", desc: "Fast-track promotions based on performance, not tenure." },
              { icon: Zap, title: "Modern Tech", desc: "Work with advanced climate-controlled environment technology." },
              { icon: Heart, title: "Health First", desc: "Working in organic, clean environments focused on sustainability." },
              { icon: Users, title: "Excellent Culture", desc: "A tightly knit team driven by passion for agritech innovation." }
            ].map((b, i) => (
               <div key={i} className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 hover:-translate-y-2 transition-transform">
                 <b.icon className="text-primary-start mb-4" size={32} />
                 <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">{b.title}</h3>
                 <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">{b.desc}</p>
               </div>
            ))}
          </div>

          <div id="open-positions" className="mb-24 scroll-mt-32">
            <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-12 flex items-center gap-4">
              <Briefcase className="text-primary-start" size={40} /> Open Positions
            </h2>
            <div className="grid gap-6">
              {jobs.map((job, i) => (
                <div key={i} className="glass p-8 rounded-[2rem] border dark:border-white/5 border-black/5 hover:border-primary-start/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold dark:text-white text-slate-900 mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 rounded-lg dark:bg-white/5 bg-black/5 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                      <span className="px-3 py-1 rounded-lg dark:bg-white/5 bg-black/5 text-xs font-bold text-slate-500 uppercase tracking-wider">{job.type}</span>
                      <span className="px-3 py-1 rounded-lg dark:bg-white/5 bg-black/5 text-xs font-bold text-slate-500 uppercase tracking-wider">{job.experience}</span>
                    </div>
                    <p className="dark:text-slate-400 text-slate-600 max-w-2xl text-sm leading-relaxed">{job.desc}</p>
                  </div>
                  <div className="shrink-0 flex gap-4">
                    <a href={`https://wa.me/919203544140?text=I%20am%20interested%20in%20applying%20for%20the%20position%20of%20${encodeURIComponent(job.title)}`} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 group-hover:scale-105 transition-transform text-sm">
                      Apply Now <Send size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Apply Section */}
          <div className="glass grid md:grid-cols-2 rounded-[3.5rem] border dark:border-white/5 border-black/5 overflow-hidden mb-24">
             <div className="p-12 md:p-16 dark:bg-white/5 bg-black/5 flex flex-col justify-center">
               <h2 className="text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">Don't see a fit? Send your resume!</h2>
               <p className="dark:text-slate-400 text-slate-600 mb-8 leading-relaxed">
                 We are always on the lookout for talented individuals in agriculture, logistics, marketing, and sales. Submit your profile, and we'll reach out when an opportunity arises.
               </p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 font-medium text-sm dark:text-slate-300 text-slate-700">
                   <CheckCircle2 className="text-green-500" size={20} /> Field Executives & Labour
                 </li>
                 <li className="flex items-center gap-3 font-medium text-sm dark:text-slate-300 text-slate-700">
                   <CheckCircle2 className="text-green-500" size={20} /> Agronomy Specialists
                 </li>
               </ul>
             </div>
             <div className="p-12 md:p-16 flex items-center justify-center relative">
               <div className="absolute inset-0 bg-primary-start/10 blur-[100px] rounded-full"></div>
               <div className="w-full max-w-sm relative z-10 text-center">
                 <FileText size={64} className="text-primary-start mx-auto mb-6" />
                 <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-6">Drop your details on WhatsApp</h3>
                 <a href="https://wa.me/919203544140?text=Hi! I am looking for career opportunities and would like to share my resume." target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center px-8 py-4 rounded-full font-bold flex items-center gap-2">
                   <MessageCircle size={20} /> Share Resume on WhatsApp
                 </a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
}
