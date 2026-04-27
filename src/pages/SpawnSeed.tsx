import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, TestTube, ThermometerSnowflake, ShieldCheck, ShoppingCart, CheckCircle2, FlaskConical, Box, Factory as FactoryIcon, Wind, ArrowRight, ChevronDown, ChevronUp, User, Mail, Send, Home } from 'lucide-react';
import SEO from '../components/SEO';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass border border-white/5 rounded-2xl mb-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left font-bold text-lg text-white hover:bg-white/5 transition-all"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-primary-start shrink-0" size={20} /> : <ChevronDown className="text-primary-start shrink-0" size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 pt-0 text-slate-400 border-t border-white/5"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SpawnSeedPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        try {
            await fetch('https://formspree.io/f/mwvazwnl', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error(error);
            form.submit();
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
             <SEO 
                 title="Premium Mushroom Spawn (Seed) Supplier | High Quality Spawn India"
                 description="Buy high-quality mushroom spawn (seed) for oyster, button, and milky mushrooms. Lab-tested, high yield, contamination-free spawn with nationwide delivery."
             />

             {/* 1. Hero Section */}
             <section className="section-padding text-center">
                 <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="max-w-4xl mx-auto"
                 >
                     <div className="badge mx-auto mb-6">Mushroom Spawn India</div>
                     <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                         Mushroom <span className="gradient-text">Spawn (Seed)</span>
                     </h1>
                     <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                         High-yield, lab-tested spawn for professional and beginner mushroom farmers.
                     </p>
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <a 
                             href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="btn-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                         >
                             <ShoppingCart size={18} /> Buy Now
                         </a>
                         <button 
                             onClick={() => document.getElementById('start-project')?.scrollIntoView({ behavior: 'smooth' })}
                             className="btn-outline px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                         >
                             Start Your Project
                         </button>
                     </div>
                 </motion.div>
             </section>

             {/* 2. What is Mushroom Spawn */}
             <section className="section-padding max-w-5xl mx-auto pt-0">
                  <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/5">
                      <div className="text-center mb-10">
                          <h2 className="text-3xl font-bold text-white mb-4">What is Mushroom Spawn?</h2>
                          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                              Mushroom spawn is exactly like the seed used for planting crops, but it consists of mycelium (the vegetative growth of fungi) propagated on a sterile base material. It is the powerhouse that inoculates your compost or substrate.
                          </p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                           {[
                               { title: "Grain Spawn", desc: "Mycelium grown on sterilized grains (like wheat or rye). Ideal for fast colonization in compost and straw." },
                               { title: "Sawdust Spawn", desc: "Mycelium grown on hardwood sawdust. Best suited for inoculating logs or outdoor beds." },
                               { title: "Plug Spawn", desc: "Small wooden dowels covered in mycelium. Perfect for long-term log cultivation." }
                           ].map((type, i) => (
                               <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 relative">
                                   <div className="w-10 h-10 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start mb-4">
                                       <Sprout size={20} />
                                   </div>
                                   <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                                   <p className="text-slate-400 text-sm leading-relaxed">{type.desc}</p>
                               </div>
                           ))}
                      </div>
                  </div>
             </section>

             {/* 3. Our Spawn Quality */}
             <section className="section-padding max-w-7xl mx-auto pt-0">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Spawn <span className="gradient-text">Quality</span></h2>
                      <p className="text-slate-400">Manufactured in ISO-certified cleanrooms for unmatched purity.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      {[
                          { icon: TestTube, text: "Strictly Lab Tested" },
                          { icon: Sprout, text: "High Yield Performance" },
                          { icon: Wind, text: "Fast Colonization" },
                          { icon: ShieldCheck, text: "Contamination-Free" },
                          { icon: FactoryIcon, text: "Commercial-Grade" }
                      ].map((feature, i) => (
                          <div key={i} className="glass p-6 rounded-2xl border border-white/5 text-center group hover:bg-white/5 transition-all">
                              <div className="w-12 h-12 mx-auto rounded-xl bg-primary-start/10 flex items-center justify-center text-primary-start group-hover:scale-110 transition-transform mb-4">
                                  <feature.icon size={24} />
                              </div>
                              <div className="text-white font-bold text-sm">{feature.text}</div>
                          </div>
                      ))}
                  </div>
             </section>

             {/* 4. Available Spawn Types */}
             <section className="section-padding max-w-5xl mx-auto pt-0">
                  <div className="grid md:grid-cols-3 gap-8">
                      <div className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col">
                          <h3 className="text-2xl font-bold text-white mb-3">Oyster Mushroom Spawn</h3>
                          <p className="text-slate-400 text-sm mb-6 flex-grow">Pleurotus species. Exceptionally fast-growing and adaptive to various temperatures. Perfect for beginners and experts alike.</p>
                          <ul className="space-y-2 mb-8">
                              <li className="flex items-center gap-2 text-slate-300 text-xs font-medium"><CheckCircle2 size={14} className="text-primary-start" /> Summer & Winter Strains</li>
                              <li className="flex items-center gap-2 text-slate-300 text-xs font-medium"><CheckCircle2 size={14} className="text-primary-start" /> First harvest in 21 days</li>
                          </ul>
                          <a 
                              href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-auto"
                          >
                              Bulk Order
                          </a>
                      </div>
                      <div className="glass p-8 rounded-[2rem] border border-primary-start/30 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-primary-start/10">
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full btn-primary text-[9px] font-black uppercase tracking-widest text-white shadow-xl">Best Seller</div>
                          <h3 className="text-2xl font-bold text-white mb-3">Button Mushroom Spawn</h3>
                          <p className="text-slate-400 text-sm mb-6 flex-grow">Agaricus bisporus. High-yielding F1 hybrids designed for controlled commercial setups ensuring large, firm white caps.</p>
                          <ul className="space-y-2 mb-8">
                              <li className="flex items-center gap-2 text-slate-300 text-xs font-medium"><CheckCircle2 size={14} className="text-primary-start" /> Up to 25% biological efficiency</li>
                              <li className="flex items-center gap-2 text-slate-300 text-xs font-medium"><CheckCircle2 size={14} className="text-primary-start" /> Disease resistant strain</li>
                          </ul>
                          <a 
                              href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-auto"
                          >
                              Bulk Order
                          </a>
                      </div>
                      <div className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col">
                          <h3 className="text-2xl font-bold text-white mb-3">Milky Mushroom Spawn</h3>
                          <p className="text-slate-400 text-sm mb-6 flex-grow">Calocybe indica. Tropical strain requiring high heat. Popular for its tremendous shelf life and meaty texture.</p>
                          <ul className="space-y-2 mb-8">
                              <li className="flex items-center gap-2 text-slate-300 text-xs font-medium"><CheckCircle2 size={14} className="text-primary-start" /> Thrives above 30°C</li>
                              <li className="flex items-center gap-2 text-slate-300 text-xs font-medium"><CheckCircle2 size={14} className="text-primary-start" /> Outstanding shelf life</li>
                          </ul>
                          <a 
                              href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-auto"
                          >
                              Bulk Order
                          </a>
                      </div>
                  </div>
             </section>

             {/* Bulk Order Highlight Section */}
             <section className="section-padding text-center pt-0">
                 <div className="max-w-4xl mx-auto p-12 rounded-[3rem] border border-primary-start/30 bg-primary-start/5 relative">
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Bulk Orders Available</h2>
                     <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                         Best pricing for commercial farms and large-scale growers. Ensure consistent supply for your operations.
                     </p>
                     <a 
                         href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="btn-primary px-10 py-4 rounded-xl text-lg font-bold inline-flex items-center justify-center gap-3"
                     >
                         Order Now <ArrowRight size={20} />
                     </a>
                 </div>
             </section>

             {/* 5. Why Choose Us */}
             <section className="section-padding bg-black/50 relative overflow-hidden">
                 <div className="max-w-5xl mx-auto px-4 relative z-10">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div>
                             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Partner <span className="gradient-text">With Us?</span></h2>
                             <p className="text-slate-400 text-lg mb-8">
                                 Your farm's success begins in our laboratory. We don't just sell spawn; we provide the foundation for your business.
                             </p>
                             <div className="space-y-6">
                                 <div className="flex items-start gap-4">
                                     <div className="w-12 h-12 rounded-xl bg-primary-start/10 flex items-center justify-center shrink-0">
                                         <FlaskConical size={24} className="text-primary-start" />
                                     </div>
                                     <div>
                                         <h4 className="text-white font-bold text-lg">Expert Production</h4>
                                         <p className="text-slate-400 text-sm">Maintained by mycologists ensuring zero genetic degradation.</p>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4">
                                     <div className="w-12 h-12 rounded-xl bg-primary-start/10 flex items-center justify-center shrink-0">
                                         <Sprout size={24} className="text-primary-start" />
                                     </div>
                                     <div>
                                         <h4 className="text-white font-bold text-lg">Fresh Batch Supply</h4>
                                         <p className="text-slate-400 text-sm">Spawn flows directly from incubator to you. No stale storage.</p>
                                     </div>
                                 </div>
                                 <div className="flex items-start gap-4">
                                     <div className="w-12 h-12 rounded-xl bg-primary-start/10 flex items-center justify-center shrink-0">
                                         <Box size={24} className="text-primary-start" />
                                     </div>
                                     <div>
                                         <h4 className="text-white font-bold text-lg">Bulk Availability</h4>
                                         <p className="text-slate-400 text-sm">Capacity to supply tonnes of consistent spawn for large units.</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="glass p-8 md:p-12 rounded-[3rem] border border-primary-start/20 text-center">
                              <h3 className="text-2xl font-bold text-white mb-4">Need Technical Support?</h3>
                              <p className="text-slate-300 mb-8">We don't just ship seeds. All our buyers have access to our technical helplines for guidance on spawning and incubation.</p>
                              <a href="tel:9203544140" className="btn-outline w-full py-4 rounded-xl font-bold flex justify-center items-center">
                                  Call Expert: 9203544140
                              </a>
                         </div>
                     </div>
                 </div>
             </section>

             {/* 6. Farming Compatibility */}
             <section className="section-padding max-w-5xl mx-auto">
                 <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Universal <span className="gradient-text">Compatibility</span></h2>
                     <p className="text-slate-400">Our strains are adapted to perform uniformly across all setups.</p>
                 </div>
                 <div className="grid md:grid-cols-3 gap-6">
                     <div className="glass p-8 rounded-[2rem] border border-white/5 text-center">
                         <Home size={32} className="text-primary-start mx-auto mb-4" />
                         <h4 className="text-white font-bold text-lg mb-2">Indoor Farming</h4>
                         <p className="text-slate-400 text-sm">Highly capable in seasonal rooms, bamboo huts, and modified spare rooms.</p>
                     </div>
                     <div className="glass p-8 rounded-[2rem] border border-white/5 text-center">
                         <Wind size={32} className="text-primary-start mx-auto mb-4" />
                         <h4 className="text-white font-bold text-lg mb-2">Polyhouse Farming</h4>
                         <p className="text-slate-400 text-sm">Thrives in naturally ventilated setups with basic evaporative cooling pads.</p>
                     </div>
                     <div className="glass p-8 rounded-[2rem] border border-white/5 text-center">
                         <FactoryIcon size={32} className="text-primary-start mx-auto mb-4" />
                         <h4 className="text-white font-bold text-lg mb-2">Commercial Units</h4>
                         <p className="text-slate-400 text-sm">Maximum potential unleashed in climate-controlled PUF panel bunkers.</p>
                     </div>
                 </div>
             </section>

             {/* 7. Call to Action Section */}
             <section className="section-padding text-center pt-0">
                 <div className="max-w-4xl mx-auto glass p-12 md:p-16 rounded-[4rem] border border-primary-start/20 shadow-2xl shadow-primary-start/5 relative overflow-hidden">
                     <div className="absolute inset-0 bg-primary-start/5"></div>
                     <div className="relative z-10">
                         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Start Mushroom Farming?</h2>
                         <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                             Secure your high-yield spawn today and experience unparalleled growth rates and cap quality.
                         </p>
                         <a 
                             href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="btn-primary px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 w-full sm:w-auto mx-auto"
                         >
                             Buy Spawn Now <ArrowRight size={20} />
                         </a>
                     </div>
                 </div>
             </section>

             {/* 8. FAQ Section */}
             <section className="section-padding max-w-3xl mx-auto pt-0">
                  <div className="text-center mb-12">
                      <div className="badge mx-auto mb-4">Support</div>
                      <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-4">
                      <FAQItem 
                          question="What is mushroom spawn?" 
                          answer={<p>Mushroom spawn is essentially the "seed" for mushrooms. It consists of sterilized material (usually wheat or rye grains) fully colonized by the living mycelium of a specific mushroom strain.</p>}
                      />
                      <FAQItem 
                          question="How should I store the spawn?" 
                          answer={<p>Spawn must be stored in a clean refrigerator strictly at 4°C (39°F) to pause its growth without killing the mycelium. Do not freeze the spawn. Avoid storing it near volatile chemicals.</p>}
                      />
                      <FAQItem 
                          question="What is the shelf life of the spawn?" 
                          answer={<p>When stored correctly at 4°C, Button and Oyster spawn can remain viable for 30 to 45 days. However, for maximum vigor, we recommend using it within 15 days of receipt.</p>}
                      />
                      <FAQItem 
                          question="How much spawn do I need?" 
                          answer={<p>The general golden rule is 0.5% to 1% of the wet weight of your substrate. For instance, if you have 100 kg of prepared wet compost, you will need approximately 500g to 1 kg of spawn.</p>}
                      />
                  </div>
             </section>

             {/* 10. Contact Form Section: Start Your Project */}
             <section id="start-project" className="section-padding max-w-3xl mx-auto pt-0">
                  {submitted ? (
                      <motion.div 
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="glass p-12 text-center rounded-[3rem] border border-white/10"
                      >
                          <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                             <CheckCircle2 size={40} />
                          </div>
                          <h2 className="text-3xl font-bold text-white mb-4">Request Received</h2>
                          <p className="text-slate-400">Thank you for your interest. One of our experts will contact you shortly using the provided details.</p>
                          <button 
                             onClick={() => setSubmitted(false)}
                             className="mt-8 btn-outline px-8 py-3 rounded-xl mx-auto block"
                          >
                             Submit Another Request
                          </button>
                      </motion.div>
                  ) : (
                      <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden"
                      >
                          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] bg-primary-start/10 blur-[100px] rounded-full pointer-events-none"></div>
                          
                          <div className="relative z-10 mb-8 text-center">
                              <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
                              <p className="text-slate-400">Fill out the form below. Our lead engineers & experts will get back to you to discuss your specific farming model.</p>
                          </div>

                          <form action="https://formspree.io/f/mwvazwnl" method="POST" onSubmit={handleSubmit} className="relative z-10 space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-3">
                                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name *</label>
                                  <div className="relative">
                                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                      <input 
                                          type="text" 
                                          name="name"
                                          required
                                          placeholder="John Doe"
                                          className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                      />
                                  </div>
                              </div>
                              <div className="space-y-3">
                                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Email Address *</label>
                                  <div className="relative">
                                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                      <input 
                                          type="email" 
                                          name="email"
                                          required
                                          placeholder="john@example.com"
                                          className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                      />
                                  </div>
                              </div>
                          </div>

                          <div className="space-y-3">
                              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Your Message *</label>
                              <textarea 
                                  name="message"
                                  required
                                  rows={6}
                                  placeholder="Tell us about how we can help you..."
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all resize-none"
                              ></textarea>
                          </div>

                          <div className="pt-4">
                              <button type="submit" className="btn-primary w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                                  Submit Form <Send size={18} />
                              </button>
                          </div>
                      </form>
                  </motion.div>
                  )}
             </section>

             {/* Footer CTA */}
             <div className="text-center py-10 border-t border-white/5 text-slate-500 font-medium">
                 "Order premium spawn today and boost your mushroom yield."
             </div>
        </div>
    );
};

export default SpawnSeedPage;
