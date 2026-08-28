const fs = require('fs');
let content = fs.readFileSync('src/pages/ContactForm.tsx', 'utf8');

// The sed command stripped exact "                            </div>" instances.
// We can just find places where it should be and inject them.
// Or we can just rebuild the form part from the inputs.

const top = content.split('<form')[0];
const bottom = `
                        <form 
                            action="/api/contact" 
                            method="POST" 
                            onSubmit={handleSubmit} 
                            className="relative z-10 space-y-6"
                            data-webmcp-tool="mushroom_farm_consultation_form"
                            data-webmcp-description="Expert consultation request for starting modular or commercial mushroom farms."
                        >
                            {/* HONEYPOT FIELD - DO NOT REMOVE */}
                            <input type="text" name="middleName" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

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
                                    <span>Submit Form</span> <Send size={18} />
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
                                    <span>Chat on WhatsApp</span>
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
`;

fs.writeFileSync('src/pages/ContactForm.tsx', top + bottom, 'utf8');
