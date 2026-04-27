import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ExpertiseDetailsPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">
             <SEO 
                 title="Our Expertise | Organic Mushroom Farm"
                 description="Detailed insights into our precision engineering, expert training, and quality guarantee."
             />

             <section className="section-padding text-center">
                 <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="max-w-4xl mx-auto"
                 >
                     <div className="badge mx-auto mb-6">Our Core Value</div>
                     <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                         Bridging <span className="gradient-text">Technology</span> & Cultivation
                     </h1>
                     <p className="text-slate-400 text-lg leading-relaxed mb-10">
                         Discover how our expertise transforms traditional farming into a high-yield industrial powerhouse.
                     </p>
                 </motion.div>
             </section>

             <section className="section-padding max-w-5xl mx-auto pt-0 space-y-12">
                  <div className="glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-10 text-primary-start/5">
                           <Award size={160} />
                      </div>
                      <div className="flex flex-col md:flex-row gap-8 relative z-10">
                           <div className="shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-primary-start/20 flex items-center justify-center">
                                     <Award size={32} className="text-primary-start" />
                                </div>
                           </div>
                           <div>
                                <h2 className="text-3xl font-bold text-white mb-4">Precision Engineering</h2>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    Our turnkey builds employ sophisticated Internet of Things (IoT) sensors to continuously monitor and adjust climate conditions.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Automated CO2 Management:</strong> Smart exhaust systems automatically trigger when CO2 levels exceed optimal thresholds (e.g., &gt;1200ppm during spawn run, &lt;800ppm during cropping).</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Humidity Control:</strong> Ultrasonic humidifiers linked to precision hygrometers maintain the strict 85-90% relative humidity required for A-grade quality button mushrooms.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Thermal Efficiency:</strong> 80-100mm Polyurethane Foam (PUF) panels ensure complete thermal isolation, drastically reducing electrical operating costs.</span>
                                    </li>
                                </ul>
                           </div>
                      </div>
                  </div>

                  <div className="glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-10 text-primary-start/5">
                           <Users size={160} />
                      </div>
                      <div className="flex flex-col md:flex-row gap-8 relative z-10">
                           <div className="shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-primary-start/20 flex items-center justify-center">
                                     <Users size={32} className="text-primary-start" />
                                </div>
                           </div>
                           <div>
                                <h2 className="text-3xl font-bold text-white mb-4">Expert Training</h2>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    We bridge the knowledge gap through intensive, hands-on education programs.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Physical Training Center (Jabalpur):</strong> Immerse yourself in a fully operational commercial farm. Learn spawning, casing preparation, and harvesting techniques directly from seasoned growers.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Online Certification:</strong> Master the theoretical foundations—from compost biology to disease identification—through structured digital modules and live webinars.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Lifetime Support:</strong> Our training doesn't end after certification. Graduates receive ongoing consultation and troubleshooting access.</span>
                                    </li>
                                </ul>
                           </div>
                      </div>
                  </div>

                  <div className="glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-10 text-primary-start/5">
                           <ShieldCheck size={160} />
                      </div>
                      <div className="flex flex-col md:flex-row gap-8 relative z-10">
                           <div className="shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-primary-start/20 flex items-center justify-center">
                                     <ShieldCheck size={32} className="text-primary-start" />
                                </div>
                           </div>
                           <div>
                                <h2 className="text-3xl font-bold text-white mb-4">Quality Guarantee</h2>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    Our commitment to quality ensures long-term operational success and maximum yield.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>ISI-Grade Infrastructure:</strong> We construct our grow rooms using heavy-duty Galvanized Iron (GI) or Mild Steel (MS) racking structures, rated to support massive compost weights over decades of use.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Premium Hybrid Spawn:</strong> Our seeds possess exceptional genetic vigor, guaranteeing rapid mycelial colonization, disease resistance, and higher biological efficiency.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-slate-400">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Compliance Ready:</strong> Our materials and structural blueprints are fully compliant with government subsidy requirements (NHB/MIDH).</span>
                                    </li>
                                </ul>
                           </div>
                      </div>
                  </div>
             </section>
        </div>
    );
};

export default ExpertiseDetailsPage;
