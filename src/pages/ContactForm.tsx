import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, User, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { pixelTrackCustom } from '../utils/pixel';

const ContactFormPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        
        // Add a customized subject before sending
        const formData = new FormData(form);
        if (!formData.has('_subject')) {
            formData.append('_subject', 'New Expert Consultation Request from ' + formData.get('name'));
        }
        
        // Track the submission action explicitly
        pixelTrackCustom('ContactFormSubmitted', { page: '/contact-form' });
        pixelTrackCustom('HighIntentLead', { intent: 'Consultation' });

        try {
            const resp = await fetch('https://formsubmit.co/ajax/df116a35555567e9addd5cf3304c3af1', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!resp.ok) throw new Error('FormSubmit response not OK');
            
            pixelTrackCustom('FormSuccess', { form_id: 'contact_form', page: '/contact-form' });
            setSubmitted(true);
            form.reset();
        } catch (error) {
            console.error(error);
            pixelTrackCustom('FormError', { form_id: 'contact_form', error: String(error) });
            // Fallback for formsubmit
            form.submit();
        }
    };

    const webmcpSchema = {
        "@context": "https://webmcp.dev",
        "@type": "WebMCP",
        "tool": {
            "name": "mushroom_farm_consultation_form",
            "description": "Submit an expert consultation request for setting up custom mushroom farming setups, budgets, and farm capacities.",
            "inputSchema": {
                "type": "object",
                "properties": {
                    "name": { "type": "string", "description": "Full name of the inquirer" },
                    "phone": { "type": "string", "description": "WhatsApp or mobile contact number" },
                    "email": { "type": "string", "description": "Email address for communications" },
                    "location": { "type": "string", "description": "City and State of setup" },
                    "farmSize": { "type": "string", "description": "Farming size in square feet" },
                    "budget": { "type": "string", "enum": ["Under 1 Lakh", "1 - 5 Lakhs", "5 - 10 Lakhs", "10 Lakhs +"], "description": "Farming investment budget range" },
                    "message": { "type": "string", "description": "Detailed message or project query details" }
                },
                "required": ["name", "phone", "email", "location", "message"]
            }
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
             <SEO 
                title="Custom Mushroom Farming Project Consultation | Organic Mushroom Farm" 
                description="Get a consultation for your custom mushroom farming setup. Pan India service for oyster, button and milky mushroom cultivation." 
                schemas={[webmcpSchema]}
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
                         
                         <form 
                             action="https://formsubmit.co/df116a35555567e9addd5cf3304c3af1" 
                             method="POST" 
                             onSubmit={handleSubmit} 
                             className="relative z-10 space-y-6"
                             data-webmcp-tool="mushroom_farm_consultation_form"
                             data-webmcp-description="Expert consultation request for starting modular or commercial mushroom farms."
                         >
                             <div className="grid md:grid-cols-2 gap-6">
                                 <div className="space-y-3">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Full Name *</label>
                                     <div className="relative">
                                         <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                         <input 
                                             type="text" 
                                             name="name"
                                             required
                                             placeholder="Your Name"
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
                                              data-webmcp-property="phone"
                                              data-webmcp-description="WhatsApp or mobile phone number to receive training resources and estimates"
                                             required
                                             placeholder="Ex. 9876543210"
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
                                              data-webmcp-property="email"
                                              data-webmcp-description="Sender's active email address"
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
                                         data-webmcp-property="location"
                                         data-webmcp-description="Client's location (city and state)"
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
                                         data-webmcp-property="farmSize"
                                         data-webmcp-description="Required or planned room floor space area in square feet"
                                         placeholder="e.g., 2000 sq ft"
                                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                     />
                                 </div>
                                 <div className="space-y-3">
                                     <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1">Budget Range</label>
                                     <select 
                                         name="budget"
                                         data-webmcp-property="budget"
                                         data-webmcp-description="Target startup or commercial set up budget range"
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
                                     data-webmcp-property="message"
                                     data-webmcp-description="Custom queries, questions or details of requested services"
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
