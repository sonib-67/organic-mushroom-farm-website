import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, User, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const ContactFormPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [submitted, setSubmitted] = React.useState(false);

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
            // Fallback for formspree
            form.submit();
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
             <SEO 
                title="Custom Mushroom Farming Project Consultation | Organic Mushroom Farm" 
                description="Get a free consultation for your custom mushroom farming setup. Pan India service for oyster, button and milky mushroom cultivation." 
             />

             <section className="section-padding text-center">
                 <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="max-w-4xl mx-auto"
                 >
                     <div className="badge mx-auto mb-6">Expert Consultation</div>
                     <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                         Start Your <span className="gradient-text">Project</span>
                     </h1>
                     <p className="text-slate-400 text-lg leading-relaxed mb-10">
                         Fill out the form below. Our lead engineers & experts will get back to you to discuss your specific farming model.
                     </p>
                 </motion.div>
             </section>

             <section className="section-padding max-w-3xl mx-auto pt-0">
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
                        animate={{ opacity: 1, y: 0 }}
                        className="glass p-8 md:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden"
                     >
                         <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] bg-primary-start/10 blur-[100px] rounded-full pointer-events-none"></div>
                         
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
                                     <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Phone Number *</label>
                                     <div className="relative">
                                         <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                         <input 
                                             type="tel" 
                                             name="phone"
                                             required
                                             placeholder="+91 98765 43210"
                                             className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                         />
                                     </div>
                                 </div>
                             </div>
                             
                             <div className="grid md:grid-cols-2 gap-6">
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
                                 <div className="space-y-3">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">City / State *</label>
                                     <input 
                                         type="text" 
                                         name="location"
                                         required
                                         placeholder="e.g., Indore, Madhya Pradesh"
                                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                     />
                                 </div>
                             </div>

                             <div className="grid md:grid-cols-2 gap-6">
                                 <div className="space-y-3">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Farm Size (in sq. ft.)</label>
                                     <input 
                                         type="text" 
                                         name="farmSize"
                                         placeholder="e.g., 2000 sq ft"
                                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                     />
                                 </div>
                                 <div className="space-y-3">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Budget Range</label>
                                     <select 
                                         name="budget"
                                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-slate-300 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all appearance-none"
                                         style={{ backgroundImage: 'none' }}
                                     >
                                         <option value="Under 1 Lakh">Under ₹1 Lakh</option>
                                         <option value="1 - 5 Lakhs">₹1 Lakh - ₹5 Lakhs</option>
                                         <option value="5 - 10 Lakhs">₹5 Lakhs - ₹10 Lakhs</option>
                                         <option value="10 Lakhs +">Above ₹10 Lakhs</option>
                                     </select>
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

                             <div className="pt-4 space-y-4">
                                 <button type="submit" className="btn-primary w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
                                     Submit Form <Send size={18} />
                                 </button>
                                 <div className="relative flex items-center py-2">
                                    <div className="flex-grow border-t border-white/10"></div>
                                    <span className="flex-shrink-0 mx-4 text-slate-500 text-xs font-medium uppercase tracking-widest">Or</span>
                                    <div className="flex-grow border-t border-white/10"></div>
                                 </div>
                                 <a 
                                     href="https://wa.me/919203544140?text=Hi,%20I'm%20interested%20in%20a%20custom%20mushroom%20farming%20project." 
                                     target="_blank" 
                                     rel="noopener noreferrer" 
                                     className="w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-white bg-[#25D366] hover:bg-[#128C7E] transition-all"
                                 >
                                     Chat on WhatsApp
                                 </a>
                             </div>
                         </form>
                     </motion.div>
                 )}
             </section>
        </div>
    );
};

export default ContactFormPage;
