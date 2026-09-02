'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Sprout,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  Thermometer,
  Droplets,
  Wind,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
  Send,
  Loader2,
  Building2,
  Hotel,
  Sun,
  Award,
  BookOpen,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const ThiruvananthapuramPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal } = useAppModals();

  // Consultation & Farm Setup Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Thiruvananthapuram / Kerala',
    variety: 'Oyster & Milky Mushroom Setup',
    scale: 'Commercial Setup (500 - 2,000 Bags)',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 14) {
      setFormError('Please solve the security check: 8 + 6 = 14');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your full name and contact number.');
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
          source: 'Thiruvananthapuram Kerala City Guide',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Unable to submit. Please contact us directly on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please WhatsApp directly at +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const keyAdvantages = [
    {
      icon: <Droplets className="text-blue-500" size={24} />,
      title: '1. Tropical High Humidity Advantage',
      desc: 'Thiruvananthapuram enjoys naturally high relative atmospheric humidity (75%–88%) for most of the year. This slashes your capital and electricity costs for industrial humidifiers and foggers.',
    },
    {
      icon: <Hotel className="text-emerald-500" size={24} />,
      title: '2. Premium Wellness & Tourism Market',
      desc: 'Supplying fresh organic Oyster and Milky mushrooms directly to Kovalam luxury beach resorts, Varkala wellness retreats, Technopark IT cafeterias, and high-end organic supermarkets across Trivandrum.',
    },
    {
      icon: <Layers className="text-amber-500" size={24} />,
      title: '3. Low-Cost Agricultural By-Products',
      desc: 'Abundant availability of local paddy straw, rubber-wood sawdust, and coconut coir by-products across southern Kerala provides virtually free, nutrient-rich substrate for high-density bags.',
    },
    {
      icon: <Building2 className="text-purple-500" size={24} />,
      title: '4. High-Yield Urban Vertical Space',
      desc: 'Solve Kerala’s land scarcity using vertical 4-tier hanging bags or bamboo racks. Transform a 100 to 1,000 sq. ft. rooftop shed, basement, or garage into a 4,000-bag daily harvesting hub.',
    },
  ];

  const varietiesForKerala = [
    {
      name: 'Oyster Mushroom (Dhingri / Chippi Koon)',
      temp: '20°C – 28°C',
      humidity: '80% – 88% (Natural in Kerala)',
      cycle: '21 – 25 Days',
      margin: '₹120 – ₹180 / kg wholesale (₹220+ retail)',
      features:
        'Fastest turnover, zero composting requirement. Grown directly on pasteurized paddy straw with up to 100% biological efficiency.',
      link: '/services/oyster-mushroom',
    },
    {
      name: 'Milky Mushroom (Pal Koon)',
      temp: '30°C – 38°C (Peak Summer Thriver)',
      humidity: '85% – 90%',
      cycle: '35 – 45 Days',
      margin: '₹140 – ₹200 / kg wholesale',
      features:
        'Thrives in warm coastal summer climate with unmatched 4–5 day shelf life without immediate chilling. Huge demand in South Indian cuisine.',
      link: '/services/milky-mushroom',
    },
  ];

  const faqs = [
    {
      q: 'Which mushroom varieties are most profitable in Thiruvananthapuram, Kerala?',
      a: 'Oyster Mushroom (Chippi Koon) and Milky Mushroom (Pal Koon) are the most profitable because they naturally align with Kerala’s warm, tropical, and highly humid climate without needing expensive air-conditioning plants.',
    },
    {
      q: 'How does high humidity in Trivandrum help reduce farm setup costs?',
      a: 'Unlike dry northern states where growers spend heavily on ultrasonic foggers and continuous water misting, coastal Kerala maintains 75%–85% humidity naturally. A basic micro-sprinkler system is sufficient to maintain optimal fruiting conditions.',
    },
    {
      q: 'Can I set up a commercial mushroom unit inside a residential house in Trivandrum?',
      a: 'Yes! Mushroom farming is completely indoor and produces no foul odor. You can convert a spare bedroom, terrace shade net, or empty warehouse in areas like Kazhakoottam, Sreekaryam, or Neyyattinkara into a productive vertical unit.',
    },
    {
      q: 'Do you deliver certified F1 Lab Spawn and technical training to Thiruvananthapuram?',
      a: 'Yes. Organic Mushrooms Farm delivers high-yielding, contamination-free F1 master grain spawn across Trivandrum via express courier in 2–4 days, backed by step-by-step video training and agronomist WhatsApp support.',
    },
    {
      q: 'Are government subsidies available for mushroom farming in Kerala?',
      a: 'Yes, State Horticulture Mission Kerala (SHM), State Agriculture Department, and NABARD provide 40% to 50% capital subsidies for commercial mushroom cultivation units and spawn production labs.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb */}
        <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-emerald-500 transition-colors">
              Cities
            </Link>
            <span>/</span>
            <span className="text-slate-500">Kerala</span>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Thiruvananthapuram
            </span>
          </nav>
        </div>

        {/* Hero Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              <MapPin size={16} />
              <span>Kerala Regional Agronomy & Startup Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Mushroom Farming in Thiruvananthapuram: <span className="gradient-text font-black">The High-Yield Cash Crop of Kerala's Capital</span> 🌴
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mb-6">
              Thiruvananthapuram (Trivandrum) is celebrated for its pristine coastlines, the bustling IT corridor of Technopark, and world-renowned Ayurvedic wellness retreats. For forward-thinking agri-entrepreneurs and urban growers, commercial mushroom cultivation has emerged as the ultimate low-cost, high-profit indoor agribusiness.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20from%20Thiruvananthapuram,%20Kerala.%20I%20want%20to%20start%20mushroom%20farming."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Connect with Kerala Agri Desk (9203544140)
              </a>
              <button
                onClick={() => openConsultationModal({ category: 'Thiruvananthapuram Farm Setup' })}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-xs"
              >
                <Phone size={15} /> Book Free Farm Consultation
              </button>
            </div>
          </motion.div>
        </header>

        {/* Why Thiruvananthapuram is the Perfect Farming Hub */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Regional Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                4 Key Reasons to Start Mushroom Farming in Thiruvananthapuram
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {keyAdvantages.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center mb-4 shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Varieties for Southern Kerala */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              Top Varieties
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Best Mushroom Varieties for Kerala Climate
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Cultivate these high-yield species with minimal cooling equipment in coastal and sub-tropical Kerala.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {varietiesForKerala.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-black dark:text-white text-slate-900 mb-2">{v.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{v.features}</p>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Optimal Temperature:</span>
                      <strong className="dark:text-white text-slate-900">{v.temp}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Relative Humidity:</span>
                      <strong className="dark:text-white text-slate-900">{v.humidity}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Harvest Cycle:</span>
                      <strong className="dark:text-white text-slate-900">{v.cycle}</strong>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400">Wholesale Realization:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{v.margin}</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href={v.link}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  View Complete Cultivation Process <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Capture & Setup Inquiry */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Turnkey Farm Setup • Trivandrum
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Launch Your High-Profit Mushroom Farm in Trivandrum
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Get certified F1 lab spawn, customized climate automation, buyback advisory, and technical mentoring from Organic Mushrooms Farm.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Pure F1 grain master spawn delivered across Kerala (2–4 days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Vertical racking & humidity design for dense urban plots</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>NABARD / SHM Kerala subsidy guidance & project reports (DPR)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Inquiry Successfully Sent!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our Kerala regional technical officer will contact you within 2 business hours.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20inquired%20for%20Mushroom%20Farm%20in%20Thiruvananthapuram%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Open WhatsApp Directly
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
                      <label className="block font-bold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Nair"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">WhatsApp Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9447XXXXXX"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-bold mb-1">Location / Area</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Kazhakoottam, Trivandrum"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Project Scale</label>
                        <select
                          value={formData.scale}
                          onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Home / Terrace (100 - 300 Bags)">Home / Terrace (100 - 300 Bags)</option>
                          <option value="Semi-Commercial (500 - 1,500 Bags)">Semi-Commercial (500 - 1,500 Bags)</option>
                          <option value="Commercial (2,000+ Bags)">Commercial (2,000+ Bags)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Calculation: 8 + 6 = ?</label>
                      <input
                        type="number"
                        required
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        placeholder="Enter 14"
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
                          <Send size={14} /> Request Setup Quotation & Guide
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
              Common questions about starting mushroom farming in Trivandrum and Kerala.
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

        {/* Bottom Action CTA */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Grow in God's Own Country?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Equip your farm with certified F1 lab spawn, customized humidity designs, and complete agronomist training for the Kerala market.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20Mushroom%20Spawn%20in%20Thiruvananthapuram."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Kerala Desk (9203544140)
              </a>
              <Link
                href="/training"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <BookOpen size={16} /> Explore Training Programs
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky & Modal Widgets */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const ThiruvananthapuramPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <ThiruvananthapuramPageInner />
    </ModalProvider>
  );
};
