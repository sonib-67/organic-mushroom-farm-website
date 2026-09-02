'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  ArrowRight,
  BookOpen,
  Layers,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  Info,
  Award,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const ContactPageContent: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Security & Anti-Spam State
  const [captcha, setCaptcha] = useState({ num1: 4, num2: 5 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 9) + 1,
      num2: Math.floor(Math.random() * 9) + 1,
    });
    setCaptchaAnswer('');
    setCaptchaError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(captchaAnswer, 10) !== captcha.num1 + captcha.num2) {
      setCaptchaError('Please answer the security math question correctly.');
      return;
    }

    setCaptchaError('');
    setSubmitting(true);
    setApiError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          location: formValues.location,
          message: formValues.message,
          subject: 'New Website Contact Request from ' + formValues.name,
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setApiError('');
      form.reset();
      generateCaptcha();
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      setApiError(error.message || 'Failed to submit enquiry. Please call or WhatsApp us.');
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'How can I contact Organic Mushroom Farm?',
      a: 'You can contact us by phone or WhatsApp at +91 9203544140 or email us at support@mushroomtraining.online.',
    },
    {
      q: 'Where is Organic Mushroom Farm located?',
      a: 'Our commercial farm and laboratory are located at Katangi Road, Jabalpur, Madhya Pradesh, India.',
    },
    {
      q: 'Do you provide mushroom farming training?',
      a: 'Yes, we provide both online self-paced courses (Basic ₹299, Commercial ₹699) and hands-on offline practical workshops (₹3000 / ₹6000) at our Jabalpur farm.',
    },
    {
      q: 'Can I get guidance for starting a new commercial farm?',
      a: 'Yes! We offer complete turnkey consultancy, project reports for bank loans (NABARD/MIDH), climate control HVAC blueprints, and ongoing agronomy support.',
    },
    {
      q: 'Do you supply certified spawn (seeds)?',
      a: 'Yes, we deliver pure, laboratory-certified F1 hybrid spawn for Button, Oyster, Milky, Shiitake, and Lion’s Mane across India.',
    },
    {
      q: 'Can I visit the mushroom farm before starting?',
      a: 'Farm visits are available with prior confirmation. Please call or WhatsApp us at +91 9203544140 to schedule your appointment before visiting.',
    },
    {
      q: 'How can I book an expert 1-on-1 consultation?',
      a: 'You can directly contact us on WhatsApp at +91 9203544140, book a slot via Calendly, or fill out the enquiry form on this page.',
    },
  ];

  const services = [
    {
      title: 'Mushroom Training Programs',
      desc: 'Learn practical indoor cultivation of Button, Oyster, and Milky mushrooms through online and on-farm workshops.',
      icon: BookOpen,
      href: '/training',
      linkText: 'Explore Training',
    },
    {
      title: 'Commercial Farm Setup',
      desc: 'Get expert guidance on growing room insulation, vertical racking systems, automated HVAC, and turnkey infrastructure.',
      icon: Layers,
      href: '/services',
      linkText: 'Explore Farm Setup',
    },
    {
      title: 'Turnkey Mushroom Projects',
      desc: 'End-to-end support for commercial producers, from DPR bank proposals to automated misting and commercial harvesting.',
      icon: ShieldCheck,
      href: '/turnkey-projects',
      linkText: 'Learn Turnkey Projects',
    },
    {
      title: 'Pure F1 Mushroom Spawn',
      desc: 'High-yield, contamination-free spawn for Button, Oyster, Milky, and medicinal mushroom varieties delivered Pan-India.',
      icon: Sprout,
      href: '/spawn-seed',
      linkText: 'Enquire About Spawn',
    },
    {
      title: 'Compost & Casing Setup',
      desc: 'Learn industrial composting formulas, pasteurization tunnel management, and quality casing soil preparation.',
      icon: TrendingUp,
      href: '/training',
      linkText: 'Explore Compost Solutions',
    },
    {
      title: 'On-Site Farm Consultation',
      desc: 'Invite our chief agronomist to your land for soil inspection, water testing, shed layout planning, and climate audit.',
      icon: Users,
      href: '/on-site-consultation',
      linkText: 'Book a Consultation',
    },
  ];

  const whyContact = [
    {
      title: 'Practical SOP Guidance',
      desc: 'Get real-world commercial parameters to avoid crop failure and contamination.',
    },
    {
      title: 'Structured Training Support',
      desc: 'Learn from seasoned growers with 12+ years of hands-on production experience.',
    },
    {
      title: 'Custom Project Planning',
      desc: 'Tailored designs matching your climate, available space, budget, and local market.',
    },
    {
      title: 'Subsidy & Bank Loan Help',
      desc: 'Assistance with MIDH, NHB, and NABARD government agricultural subsidy guidelines.',
    },
    {
      title: 'Direct Instant Communication',
      desc: 'Connect directly with our technical team via Phone or WhatsApp for rapid solutions.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} /> Get in Touch With Us
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Contact <span className="gradient-text font-black">Organic Mushroom Farm</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-8 leading-relaxed">
              Have questions about mushroom cultivation training, commercial farm setup, pure F1 spawn supply, or project consultation? Our agronomy team is here to assist your farming journey.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919203544140"
                className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md"
              >
                <Phone size={16} /> Call +91 9203544140
              </a>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20have%20an%20enquiry%20regarding%20mushroom%20farming%20training%20and%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="#enquiry-form"
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
              >
                <Mail size={16} /> Send Enquiry
              </a>
            </div>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone/WhatsApp Card */}
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-lg hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-1">Call or WhatsApp</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-black text-base mb-3">+91 9203544140</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  For quick assistance regarding mushroom farming, upcoming training batches, spawn availability, and project setups.
                </p>
              </div>
              <a
                href="https://wa.me/919203544140"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center gap-1 hover:underline uppercase tracking-wider"
              >
                Open WhatsApp <ArrowRight size={14} />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-lg hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-1">Email Us</h3>
                <p className="text-purple-600 dark:text-purple-400 font-bold text-xs sm:text-sm mb-3 break-all">
                  support@mushroomtraining.online
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Send us your detailed project blueprint, training requirements, or corporate B2B inquiries for our agronomy team.
                </p>
              </div>
              <a
                href="mailto:support@mushroomtraining.online"
                className="text-purple-600 dark:text-purple-400 font-bold text-xs flex items-center justify-center gap-1 hover:underline uppercase tracking-wider"
              >
                Send Direct Email <ArrowRight size={14} />
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-lg hover:-translate-y-1 transition-transform flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-1">Visit Our Farm</h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm mb-3">
                  Katangi, Jabalpur, MP, India
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Experience commercial mushroom farming in practice. Schedule an appointment before visiting our facility.
                </p>
              </div>
              <a
                href="#location"
                className="text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center justify-center gap-1 hover:underline uppercase tracking-wider"
              >
                View Map & Directions <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="enquiry-form" className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Tell Us How <span className="gradient-text font-black">We Can Help</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Fill out the enquiry form with your requirements, and our team will get back to you with syllabus details and schedules.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center rounded-3xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-xl"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-black dark:text-white text-slate-900 mb-2">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Organic Mushroom Farm! We have sent a confirmation copy to your email address. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl relative"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {apiError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-xs font-medium flex items-start gap-2">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{apiError}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        City / State *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. Bhopal, MP"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      How can we help you? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your requirements (e.g. Online course inquiry, Button farm setup, Spawn purchase)..."
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Anti-Spam Security Question */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/10">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Security Math Check: What is {captcha.num1} + {captcha.num2}? *
                    </label>
                    <input
                      required
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => {
                        setCaptchaAnswer(e.target.value);
                        if (captchaError) setCaptchaError('');
                      }}
                      className={`w-full bg-white dark:bg-slate-900 border ${
                        captchaError ? 'border-red-500' : 'border-slate-200 dark:border-white/10'
                      } rounded-lg px-3 py-2 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                      placeholder="Enter the correct sum"
                    />
                    {captchaError && <p className="text-red-500 text-[11px] mt-1 font-medium">{captchaError}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending Enquiry via Nodemailer...
                      </span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span> <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* Services Exploration Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Award size={12} /> Specialized Capabilities
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Explore Our <span className="gradient-text font-black">Mushroom Services</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md flex flex-col justify-between shadow-xs hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <service.icon size={22} />
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">{service.desc}</p>
                </div>
                <Link
                  href={service.href}
                  className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 hover:underline"
                >
                  {service.linkText} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-12 bg-emerald-500/5 dark:bg-emerald-500/[0.03] border-y border-emerald-500/10 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Why Contact Us?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Your Mushroom Farming Journey Starts With Scientific Ground-Level Mentorship
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {whyContact.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm dark:text-white text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="location" className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MapPin size={12} /> Farm Location
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Organic Mushroom Farm <span className="gradient-text font-black">Katangi, Jabalpur</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Katangi Road, Jabalpur, Madhya Pradesh 483105, India
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-white dark:bg-black p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117260.67137000781!2d79.74239857731737!3d23.303986377725838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a38435d79901%3A0xc312ecf9eb1d25c4!2sOrganic%20Mushroom%20Farm!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '1.25rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Organic Mushroom Farm Location Map"
            ></iframe>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-bold text-xs inline-flex items-center gap-1.5 hover:underline uppercase tracking-wider"
            >
              Get Google Maps Navigation Directions <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Contact & Support <span className="gradient-text font-black">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm dark:text-slate-200 text-slate-800"
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-emerald-500 shrink-0">Q:</span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                        isOpen ? 'rotate-180 text-emerald-500' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1 pl-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Elements (AI, Sticky buttons, Mobile Bottom Bar) */}
      <div className="floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px] z-[99999]">
        <div className="pointer-events-auto">
          <AIChatWidget />
        </div>
        <div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">
          <div className="hidden md:flex flex-col gap-3 items-start">
            <div className="w-[140px] md:w-auto">
              <StickyTrainingButton size="normal" />
            </div>
          </div>
          <div className="h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]">
            <StickyTrainingButton size="small" />
          </div>
        </div>
      </div>

      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
    </div>
  );
};
