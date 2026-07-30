import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const ExpertiseDetailsPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">
             <SEO 
                 title="Our Expertise | Organic Mushrooms Farm"
                 description="Detailed insights into our precision engineering, expert training, and quality guarantee."
             />

             <section className="section-padding text-center">
                 <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="max-w-4xl mx-auto"
                 >
                     <div className="badge mx-auto mb-6">Our Core Value</div>
                     <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">
                         Bridging <span className="gradient-text">Technology</span> & Cultivation
                     </h1>
                     <p className="dark:text-slate-400 text-slate-600 text-lg leading-relaxed mb-10">
                         See how we help you start and grow a successful commercial mushroom farm.
                     </p>
                 </motion.div>
             </section>

             <section className="section-padding max-w-5xl mx-auto pt-0 space-y-12">
                  <div className="glass p-10 rounded-[3rem] border dark:border-white/5 border-black/5 relative overflow-hidden">
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
                                <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Precision Engineering</h2>
                                <p className="dark:text-slate-300 text-slate-700 text-lg mb-6 leading-relaxed">
                                    Our farms use smart sensors to check and adjust the temperature and humidity automatically.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Automated CO2 Management:</strong> Smart exhaust systems automatically trigger when CO2 levels exceed optimal thresholds (e.g., &gt;1200ppm during spawn run, &lt;800ppm during cropping).</span>
                                    </li>
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Humidity Control:</strong> Special humidifiers keep the air moist, which is essential for growing high-quality mushrooms.</span>
                                    </li>
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Thermal Efficiency:</strong> 80-100mm Polyurethane Foam (PUF) panels ensure complete thermal isolation, drastically reducing electrical operating costs.</span>
                                    </li>
                                </ul>
                           </div>
                      </div>
                  </div>

                  <div className="glass p-10 rounded-[3rem] border dark:border-white/5 border-black/5 relative overflow-hidden">
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
                                <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Expert Training</h2>
                                <p className="dark:text-slate-300 text-slate-700 text-lg mb-6 leading-relaxed">
                                    We teach you everything you need to know with hands-on training.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Physical Training Center (Jabalpur):</strong> Learn directly on a working farm. Practice making beds, adding seeds, and harvesting.</span>
                                    </li>
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Online Certification:</strong> Learn the basics online, including how to make compost and identify diseases.</span>
                                    </li>
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Lifetime Support:</strong> Our training doesn't end after certification. Graduates receive ongoing consultation and troubleshooting access.</span>
                                    </li>
                                </ul>
                           </div>
                      </div>
                  </div>

                  <div className="glass p-10 rounded-[3rem] border dark:border-white/5 border-black/5 relative overflow-hidden">
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
                                <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Quality Guarantee</h2>
                                <p className="dark:text-slate-300 text-slate-700 text-lg mb-6 leading-relaxed">
                                    We use high-quality materials to make sure your farm lasts and produces a lot.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>ISI-Grade Infrastructure:</strong> We build strong metal shelves that can hold heavy mushroom beds for many years.</span>
                                    </li>
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
                                        <CheckCircle2 className="text-primary-start shrink-0 mt-1" size={18} />
                                        <span><strong>Premium Hybrid Spawn:</strong> Our high-quality seeds grow fast, resist diseases, and give a great harvest.</span>
                                    </li>
                                    <li className="flex items-start gap-3 dark:text-slate-400 text-slate-600">
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
