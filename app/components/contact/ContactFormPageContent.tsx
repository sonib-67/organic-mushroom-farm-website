'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Phone,
  Mail,
  CheckCircle2,
  Sprout,
  BookOpen,
  Building2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Send,
  Loader2,
  Clock,
  Sparkles,
  MapPin,
  MessageCircle,
  FileText,
  TrendingUp,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const ContactFormPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal } = useAppModals();

  // Consultation & Inquiry State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: '',
    inquiryType: 'Turnkey Commercial Farm Setup',
    scale: 'Commercial Setup (500 - 2,000 Bags)',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 16) {
      setFormError('Please solve the security calculation: 10 + 6 = 16');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your full name and WhatsApp contact number.');
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Form Master Consultation Page',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Unable to submit inquiry. Please connect directly on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please connect directly via WhatsApp: +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const consultationPillars = [
    {
      icon: <BookOpen className="text-emerald-500" size={24} />,
      title: 'Expert Cultivation Training',
      desc: 'Master the exact biological science, pasteurization protocols, dark-room incubation, and contamination eradication through structured online video masterclasses or on-farm workshops.',
      link: '/training/online',
      linkText: 'Explore Courses',
    },
    {
      icon: <Sprout className="text-blue-500" size={24} />,
      title: 'Certified F1 Lab Master Spawn',
      desc: 'Source pristine, contamination-free F1 grain spawn for Oyster, Milky, and Button mushroom varieties, lab-produced with 99%+ biological vigor and delivered pan-India.',
      link: '/spawn-seeds',
      linkText: 'Order Lab Spawn',
    },
    {
      icon: <Building2 className="text-purple-500" size={24} />,
      title: 'Turnkey Commercial Farm Setup',
      desc: 'End-to-end commercial infrastructure planning, insulated shed design, automated humidity and fogging systems, vertical racking layout, and climate management.',
      link: '/services/turnkey-setup',
      linkText: 'View Turnkey Setup',
    },
    {
      icon: <TrendingUp className="text-amber-500" size={24} />,
      title: 'Bank DPR & NABARD Subsidy Advisory',
      desc: 'Get structured bank Detailed Project Reports (DPR), subsidy assistance under NHM / MIDH / Mudra schemes, and wholesale B2B market buyback advisory.',
      link: '/contact',
      linkText: 'Get Financial Advisory',
    },
  ];

  const faqs = [
    {
      q: 'How fast will an agronomist respond after submitting this inquiry form?',
      a: 'Our agri-tech specialists and technical farm coordinators review all inquiries in real-time and typically respond within 1 to 2 business hours via WhatsApp or phone call.',
    },
    {
      q: 'Can I request a custom DPR (Detailed Project Report) for bank loan subsidies?',
      a: 'Yes! We formulate comprehensive bank-grade Detailed Project Reports (DPR) tailored to your specific land area, state horticulture subsidies (NHM / MIDH / NABARD), and chosen mushroom varieties.',
    },
    {
      q: 'Do you offer site visits and on-location farm installation?',
      a: 'Yes, for commercial projects (500 to 10,000+ bags) and turnkey climate-controlled units, our senior technicians conduct on-site architectural audits and full machinery installations across India.',
    },
    {
      q: 'What is the fastest way to get urgent spawn orders or technical support?',
      a: 'You can directly connect with our dedicated WhatsApp Helpdesk at +91 9203544140 for immediate assistance with spawn stock availability, course access, and urgent disease diagnosis.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-emerald-500 transition-colors">
              Contact
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Consultation Form
            </span>
          </nav>
        </div>

        {/* Hero Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              <MessageSquare size={16} />
              <span>Agri-Tech Specialist Consultation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Take the First Step Towards a Profitable <span className="gradient-text font-black">Mushroom Farm Today!</span> 🍄
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mb-6">
              Starting a commercial mushroom farming business is one of the most rewarding and lucrative agricultural ventures you can choose. Whether you are a passionate beginner, a farmer looking to diversify, or an investor planning a large commercial facility, expert guidance is your secret to guaranteed success.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20an%20agronomist%20for%20starting%20a%20commercial%20mushroom%20farm."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Connect on WhatsApp (9203544140)
              </a>
              <a
                href="tel:9203544140"
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-xs"
              >
                <Phone size={15} /> Call Direct (+91 9203544140)
              </a>
            </div>
          </motion.div>
        </header>

        {/* Why Consult the Experts Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Risk Elimination
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Why Guess When You Can Consult the Experts?
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Mushroom cultivation is a precise biological science. Building a high-yield farm involves critical decisions—from selecting the right climate-friendly variety and planning your vertical infrastructure, to sourcing premium, contamination-free spawn and managing fresh air exchanges. A single miscalculation can lead to crop loss. Our team of agri-tech specialists eliminates the trial-and-error phase for you.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {consultationPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center mb-4 shadow-xs">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {pillar.desc}
                    </p>
                  </div>

                  <Link
                    href={pillar.link}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    {pillar.linkText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Master Lead Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Direct Expert Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Let’s Build Your Dream Mushroom Farm Together
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Don't let your agricultural startup remain just an idea. A quick conversation with our specialists gives you the exact roadmap, resources, and confidence you need to launch a high-profit farm.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Free preliminary project feasibility analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Direct wholesale spawn pricing & bulk logistics support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Personalized disease eradication and farm audit support</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Consultation Request Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our senior agronomist will contact you via WhatsApp or phone call within 1-2 hours.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20submitted%20a%20Consultation%20Form%20request%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp Directly
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    {formError && (
                      <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-[11px]">
                        {formError}
                      </div>
                    )}
                    <div>
                      <label className="block font-bold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">WhatsApp Contact Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9829XXXXXX"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-bold mb-1">City & State</label>
                        <input
                          type="text"
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          placeholder="e.g. Jaipur, Rajasthan"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Required Service</label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Turnkey Commercial Farm Setup">Turnkey Farm Setup</option>
                          <option value="Farming Training Masterclass">Farming Training</option>
                          <option value="Bulk F1 Spawn Supply">Bulk F1 Spawn Supply</option>
                          <option value="DPR & Subsidy Advisory">DPR & Subsidy Advisory</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Message or Farm Details (Optional)</label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your available space, budget, or preferred variety..."
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Calculation: 10 + 6 = ?</label>
                      <input
                        type="number"
                        required
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        placeholder="Enter 16"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Submit Consultation Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Common questions about consulting Organic Mushrooms Farm specialists.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm dark:text-white text-slate-900 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle size={16} className="text-emerald-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Speak with a Mushroom Farming Expert?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Contact Organic Mushrooms Farm today and let our agronomy team guide you to high-profit agricultural success.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20looking%20for%20Mushroom%20Farm%20Consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Consultation Desk (9203544140)
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <Mail size={16} /> Contact Us Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating & Sticky Elements */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const ContactFormPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <ContactFormPageInner />
    </ModalProvider>
  );
};
