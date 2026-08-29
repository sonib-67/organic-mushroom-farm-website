import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, ArrowRight, BookOpen, Layers, ShieldCheck, Sprout, TrendingUp, Users, Info } from 'lucide-react';
import SEO from '../components/SEO';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Collapsible: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="glass border dark:border-white/5 border-black/5 mb-3 overflow-hidden rounded-2xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm dark:text-white text-slate-900 focus:outline-none"
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp size={18} className="text-primary-start" /> : <ChevronDown size={18} className="text-slate-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 1 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="p-5 pt-0 text-[14px] leading-relaxed dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-black/5"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [submitted, setSubmitted] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [captchaError, setCaptchaError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!executeRecaptcha) {
            setCaptchaError('reCAPTCHA not ready. Please try again.');
            return;
        }

        setCaptchaError('');
        setSubmitting(true);
        
        try {
            const token = await executeRecaptcha('contact_form');
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            
            if (!formData.has('_subject')) {
                formData.append('_subject', 'New Contact Request: ' + formData.get('name'));
            }

            formData.append('recaptchaToken', token);

            const resp = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (!resp.ok) {
                let errorMessage = 'Response not OK';
                try {
                    const errorData = await resp.json();
                    errorMessage = errorData.error || errorMessage;
                } catch (e) {
                    errorMessage = `Server Error: ${resp.status} ${resp.statusText}`;
                }
                setCaptchaError(errorMessage);
                throw new Error(errorMessage);
            }
            
            setSubmitted(true);
            form.reset();
        } catch (error: any) {
            console.error(error);
            setCaptchaError(error.message || 'Failed to submit form.');
        } finally {
            setSubmitting(false);
        }
    };

    const faqs = [
        {
            q: "How can I contact Organic Mushroom Farm?",
            a: "You can contact us by phone or WhatsApp at +91 9203544140 or email us at support@mushroomtraining.online."
        },
        {
            q: "Where is Organic Mushroom Farm located?",
            a: "Our location is Katangi, Jabalpur, Madhya Pradesh, India."
        },
        {
            q: "Do you provide mushroom farming training?",
            a: "Yes, information about our available mushroom training programs can be found on our Training page. You can also contact us directly for training-related enquiries."
        },
        {
            q: "Can I get guidance for starting a mushroom farm?",
            a: "Yes. You can contact us to discuss your mushroom farming requirements, project plans, infrastructure needs, and other related questions."
        },
        {
            q: "Do you provide mushroom farm setup services?",
            a: "You can contact us regarding mushroom farm setup and turnkey project requirements. Our team can discuss your project and provide relevant information."
        },
        {
            q: "Can I visit the mushroom farm?",
            a: "Farm visits may be available with prior confirmation. Please contact us before visiting so that we can confirm the schedule and availability."
        },
        {
            q: "How can I book a consultation?",
            a: "You can contact us through WhatsApp or phone at +91 9203544140 or submit the enquiry form on this page."
        }
    ];

    const services = [
        {
            title: "Mushroom Training",
            desc: "Learn the fundamentals and practical aspects of mushroom cultivation through our mushroom training programs.",
            icon: BookOpen,
            href: "/training",
            linkText: "Explore Training"
        },
        {
            title: "Mushroom Farm Setup",
            desc: "Planning to start a mushroom farm? Get guidance related to farm planning, infrastructure, production setup, and other project requirements.",
            icon: Layers,
            href: "/services",
            linkText: "Explore Farm Setup"
        },
        {
            title: "Turnkey Mushroom Project",
            desc: "Looking for complete support for your mushroom farming project? Contact us to discuss your project requirements and get suitable guidance.",
            icon: ShieldCheck,
            href: "/turnkey-projects",
            linkText: "Learn About Turnkey Projects"
        },
        {
            title: "Mushroom Spawn",
            desc: "Contact us for information about mushroom spawn availability, varieties, quantities, and requirements.",
            icon: Sprout,
            href: "/spawn-seed",
            linkText: "Enquire About Spawn"
        },
        {
            title: "Compost Unit",
            desc: "Learn about mushroom compost requirements and compost unit setup for mushroom cultivation.",
            icon: TrendingUp,
            href: "/services/compost-production",
            linkText: "Explore Compost Solutions"
        },
        {
            title: "Site Visit & Consultation",
            desc: "Get professional guidance based on your proposed mushroom farming project through site visit and consultation services.",
            icon: Users,
            href: "/on-site-consultation",
            linkText: "Book a Consultation"
        }
    ];

    const whyContact = [
        {
            title: "Practical Guidance",
            desc: "Get useful guidance to understand mushroom cultivation and plan your farming activities effectively."
        },
        {
            title: "Training Support",
            desc: "Learn mushroom cultivation through structured training designed for people interested in starting or improving mushroom farming."
        },
        {
            title: "Project Consultation",
            desc: "Discuss your mushroom farming project requirements and get guidance based on your proposed production setup."
        },
        {
            title: "Farm Setup Assistance",
            desc: "Get information and guidance related to mushroom farm infrastructure, growing rooms, equipment, and project planning."
        },
        {
            title: "Direct Communication",
            desc: "Connect directly with our team through phone, WhatsApp, or email for quick and convenient communication."
        }
    ];

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20">
             <SEO 
                title="Contact Organic Mushroom Farm | Mushroom Training & Project Consultation" 
                description="Contact Organic Mushroom Farm in Katangi, Jabalpur, Madhya Pradesh for mushroom training, farm setup, turnkey projects, spawn, compost and project consultation." 
             />

             {/* Hero Section */}
             <section className="section-padding text-center">
                 <motion.div 
                     initial={{ opacity: 1, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="max-w-4xl mx-auto"
                 >
                     <div className="badge mx-auto mb-6">Get in Touch With Us</div>
                     <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">
                         Contact <span className="gradient-text">Organic Mushroom Farm</span>
                     </h1>
                     <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
                         Have questions about mushroom farming, training, farm setup, spawn, compost, or project consultation? Our team is here to help you get the right information and guidance for your mushroom farming journey.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <a href="tel:+919203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">
                             <Phone size={18} /> Call Now
                         </a>
                         <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors w-full sm:w-auto">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" className="w-5 h-5" /> WhatsApp Us
                         </a>
                         <a href="#enquiry-form" className="btn-outline px-8 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">
                             <Mail size={18} /> Send an Enquiry
                         </a>
                     </div>
                 </motion.div>
             </section>

             {/* Contact Info Cards */}
             <section className="section-padding relative z-10 max-w-7xl mx-auto pt-0">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass p-8 rounded-3xl text-center border dark:border-white/5 border-black/5 hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 rounded-full dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mx-auto mb-6">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Call or WhatsApp Us</h3>
                        <p className="text-primary-start font-black text-lg mb-4">+91 9203544140</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                            For quick assistance regarding mushroom farming, training programs, project setup, consultation, and other services, contact us directly by phone or WhatsApp.
                        </p>
                        <a href="tel:+919203544140" className="text-primary-start font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                            Call / WhatsApp <ArrowRight size={16} />
                        </a>
                    </div>
                    
                    <div className="glass p-8 rounded-3xl text-center border dark:border-white/5 border-black/5 hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 rounded-full dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mx-auto mb-6">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Email Us</h3>
                        <p className="text-primary-start font-black text-sm mb-4">support@mushroomtraining.online</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                            For training enquiries, business enquiries, project requirements, and detailed information, you can contact us by email.
                        </p>
                        <a href="mailto:support@mushroomtraining.online" className="text-primary-start font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                            Send Email <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="glass p-8 rounded-3xl text-center border dark:border-white/5 border-black/5 hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 rounded-full dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mx-auto mb-6">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Visit Our Location</h3>
                        <p className="text-primary-start font-black text-sm mb-4">Katangi, Jabalpur, MP, India</p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                            If you would like to visit our farm or discuss a mushroom farming project in person, please contact us in advance to confirm availability and schedule a visit.
                        </p>
                        <a href="#location" className="text-primary-start font-bold text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                            Get Directions <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
             </section>

             {/* Form Section */}
             <section id="enquiry-form" className="section-padding bg-black/5 dark:bg-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">Tell Us How We Can Help</h2>
                        <p className="text-slate-600 dark:text-slate-400">Fill out the enquiry form with your requirements, and our team will get back to you with the relevant information.</p>
                    </div>

                    {submitted ? (
                        <motion.div 
                            initial={{ opacity: 1, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass p-12 text-center rounded-3xl border dark:border-white/10 border-black/10 shadow-xl bg-white dark:bg-transparent"
                        >
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4">Success!</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Thank you for contacting us! Your enquiry has been submitted successfully. Our team will get in touch with you shortly.</p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="btn-outline px-8 py-3 rounded-full mx-auto"
                            >
                                Submit Another Enquiry
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            
                            className="glass p-8 md:p-12 rounded-3xl border dark:border-white/10 border-black/10 bg-white dark:bg-transparent shadow-xl relative overflow-hidden"
                        >
                            <form 
                                action="/api/contact" 
                                method="POST" 
                                onSubmit={handleSubmit} 
                                className="relative z-10 space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest pl-1">Name</label>
                                        <input 
                                            type="text" 
                                            name="name"
                                            required
                                            placeholder="Your Full Name"
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest pl-1">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            required
                                            placeholder="Ex. 9876543210"
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest pl-1">Location</label>
                                        <input 
                                            type="text" 
                                            name="location"
                                            required
                                            placeholder="City, State"
                                            className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest pl-1">How can we help you? *</label>
                                    <textarea 
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Please describe your requirements..."
                                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3.5 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start focus:ring-1 focus:ring-primary-start transition-all resize-none"
                                    ></textarea>
                                </div>

                                {captchaError && (
                                    <p className="text-red-500 text-xs font-medium">{captchaError}</p>
                                )}

                                <div className="pt-2">
                                    <button 
                                        type="submit" 
                                        disabled={submitting}
                                        className="btn-primary w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {submitting ? (
                                            <span className="flex items-center">
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : (
                                            <>
                                                <span>Submit Enquiry</span> <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </div>
             </section>

             {/* Services Section */}
             <section className="section-padding max-w-7xl mx-auto">
                 <div className="text-center mb-12">
                     <div className="badge mx-auto mb-4">How Can We Help You?</div>
                     <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">Explore Our Mushroom Farming Services</h2>
                 </div>

                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {services.map((service, idx) => (
                         <div key={idx} className="glass p-8 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                             <div>
                                <div className="w-12 h-12 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mb-6">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                             </div>
                             <a href={service.href} className="text-[12px] font-bold uppercase tracking-widest text-primary-start flex items-center gap-2 hover:text-primary-mid transition-colors">
                                 {service.linkText} <ArrowRight size={14} />
                             </a>
                         </div>
                     ))}
                 </div>
             </section>

             {/* Why Contact Us */}
             <section className="section-padding bg-primary-start/5 dark:bg-primary-start/10 border-y border-primary-start/20">
                 <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight">Why Contact Us?</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Your Mushroom Farming Journey Starts With the Right Guidance</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyContact.map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start shrink-0 mt-1">
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold dark:text-white text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
             </section>

             {/* Visit Our Farm */}
             <section className="section-padding text-center">
                 <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">Visit Our Mushroom Farm</h2>
                     <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                        Experience Mushroom Farming in Practice. Want to understand mushroom farming beyond theory? <br className="hidden md:block" />
                        You can enquire about visiting our mushroom farming facility in Katangi, Jabalpur, Madhya Pradesh and learn more about mushroom cultivation and farm operations.
                        Please contact us in advance before planning your visit so that we can confirm availability and schedule.
                     </p>
                     <a href="/on-site-consultation" className="btn-primary px-8 py-3 rounded-full inline-flex items-center justify-center gap-2">
                         Book a Site Visit <ArrowRight size={18} />
                     </a>
                 </div>
             </section>

             {/* Find Us (Map) */}
             <section id="location" className="section-padding pt-0">
                 <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="badge mx-auto mb-4">Find Us</div>
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">
                            Organic Mushroom Farm
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Katangi, Jabalpur, Madhya Pradesh, India</p>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border dark:border-white/10 border-black/10 shadow-xl bg-white dark:bg-black p-2">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117260.67137000781!2d79.74239857731737!3d23.303986377725838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a38435d79901%3A0xc312ecf9eb1d25c4!2sOrganic%20Mushroom%20Farm!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="450" 
                            style={{ border: 0, borderRadius: '1.5rem' }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Organic Mushroom Farm Location Map"
                        ></iframe>
                    </div>
                    <div className="text-center mt-6">
                        <a href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic" target="_blank" rel="noopener noreferrer" className="text-primary-start font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                            Get Directions <ExternalLink size={16} />
                        </a>
                        <p className="text-slate-500 text-xs mt-4 max-w-lg mx-auto">For better local SEO, keep the same business name, location, and contact details consistently across your website and business listings.</p>
                    </div>
                 </div>
             </section>

             {/* FAQs Section */}
             <section className="section-padding bg-black/5 dark:bg-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="badge mx-auto mb-4">Frequently Asked Questions</div>
                        <h2 className="text-3xl font-bold dark:text-white text-slate-900 tracking-tight">Contact & Mushroom Farming FAQs</h2>
                    </div>
                    <div className="space-y-1">
                        {faqs.map((faq, idx) => (
                            <Collapsible key={idx} title={faq.q}>
                                <p>{faq.a}</p>
                            </Collapsible>
                        ))}
                    </div>
                </div>
             </section>

             {/* Bottom CTA */}
             <section className="section-padding relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <div className="w-16 h-16 bg-primary-start/20 rounded-full flex items-center justify-center text-primary-start mx-auto mb-6">
                        <Info size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight">Let's Build Your Mushroom Farming Project Together</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you are starting mushroom farming for the first time, looking for professional training, planning a new farm, or seeking project consultation, we are ready to hear from you. Have a question? Have a project idea? Let's talk.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <a href="tel:+919203544140" className="btn-primary px-8 py-3 rounded-full flex items-center justify-center gap-2">
                             <Phone size={18} /> Call Now
                         </a>
                         <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" className="w-5 h-5" /> WhatsApp Now
                         </a>
                    </div>
                </div>
             </section>
        </div>
    );
};

export default ContactPage;
