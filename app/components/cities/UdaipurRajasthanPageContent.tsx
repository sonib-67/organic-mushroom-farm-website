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
  Trees,
  Utensils,
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

const UdaipurRajasthanPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal } = useAppModals();

  // Consultation & Setup Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Udaipur / Mewar Region',
    variety: 'Button & Oyster Mushroom Setup',
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
      setFormError('Please solve the security calculation: 8 + 6 = 14');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your full name and WhatsApp mobile number.');
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
          source: 'Udaipur Rajasthan Regional Mushroom Guide',
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

  const keyAdvantages = [
    {
      icon: <Thermometer className="text-blue-500" size={24} />,
      title: '1. The Aravalli Climate Advantage',
      desc: 'Unlike western Rajasthan’s harsh heat, Udaipur sits in the elevated Aravalli belt with cooler winters and temperate seasons. This drastically lowers electricity bills for chillers during Button mushroom season.',
    },
    {
      icon: <Utensils className="text-amber-500" size={24} />,
      title: '2. Massive Luxury Hospitality Market',
      desc: 'Udaipur is world-famous for 5-star heritage palaces, luxury destination-wedding resorts, and boutique cafes around Lake Pichola and Fateh Sagar that consume hundreds of kilos of fresh mushrooms daily at premium rates.',
    },
    {
      icon: <Droplets className="text-emerald-500" size={24} />,
      title: '3. Water-Saving & Space-Efficient Agribusiness',
      desc: 'In a state where water conservation is vital, indoor vertical mushroom farming uses 90% less water than open-field crops. Water is utilized solely for micro-misting and humidity maintenance.',
    },
    {
      icon: <TrendingUp className="text-purple-500" size={24} />,
      title: '4. Booming Health & Plant-Based Demand',
      desc: 'With a high concentration of health-conscious residents and vegetarian food culture, fresh Oyster, Milky, and Button mushrooms are fast-selling high-protein staples across local markets and supermarkets.',
    },
  ];

  const varietiesForUdaipur = [
    {
      name: 'White Button Mushroom (Agaricus bisporus)',
      season: 'November to February (Cool Winter Season)',
      temp: '14°C – 18°C during fruiting',
      humidity: '85% – 92%',
      cycle: '60 – 75 Days',
      margin: '₹140 – ₹220 / kg wholesale (₹280+ in Luxury Hotels)',
      features:
        'Highest demand in Udaipur 5-star hotels & wedding banquets. Thrives in seasonal winter rooms with minimal refrigeration load.',
      link: '/services/button-mushroom',
    },
    {
      name: 'Oyster Mushroom (Dhingri / Pleurotus)',
      season: 'Round the Year (Thrives Sept – April)',
      temp: '20°C – 28°C',
      humidity: '75% – 85%',
      cycle: '22 – 28 Days',
      margin: '₹120 – ₹180 / kg wholesale (₹240+ retail)',
      features:
        'Fastest turnover, grown on pasteurized local wheat straw (gehu bhusa). Excellent for local organic retail and dry powder processing.',
      link: '/services/oyster-mushroom',
    },
    {
      name: 'Milky Mushroom (Calocybe indica)',
      season: 'April to August (Peak Summer / Monsoon)',
      temp: '30°C – 38°C',
      humidity: '80% – 90%',
      cycle: '35 – 45 Days',
      margin: '₹150 – ₹200 / kg wholesale',
      features:
        'Naturally heat-tolerant, making it the perfect summer rotation crop for Rajasthan conditions with an impressive 4–5 day shelf life.',
      link: '/services/milky-mushroom',
    },
  ];

  const faqs = [
    {
      q: 'Why is Udaipur ideal for commercial mushroom cultivation in Rajasthan?',
      a: 'Udaipur offers a unique dual advantage: the cooler elevation of the Aravalli hills reduces seasonal cooling costs, while the massive hospitality and destination wedding industry provides a direct, high-margin market for fresh daily harvests.',
    },
    {
      q: 'How much space is needed to start a commercial mushroom farm in Udaipur?',
      a: 'You can start commercially in a 500 to 1,000 sq. ft. insulated room or shed using 4-tier vertical racks, accommodating 1,500 to 3,000 cultivation bags with substantial weekly yields.',
    },
    {
      q: 'Which raw materials are available locally in Udaipur and Mewar?',
      a: 'Wheat straw (Gehu ka bhusa) is abundantly available across Udaipur, Chittorgarh, and Rajsamand agricultural belts at very economical rates, making substrate costs minimal.',
    },
    {
      q: 'Do you deliver certified F1 Lab Spawn and technical support to Udaipur?',
      a: 'Yes! Organic Mushrooms Farm delivers pure, contamination-free F1 grain master spawn to Udaipur, Sukher, Hiran Magri, Fatehnagar, Mavli, and all Mewar districts via fast courier within 2 to 3 days.',
    },
    {
      q: 'Can I sell mushrooms directly to Udaipur resorts and hotels?',
      a: 'Yes, local heritage hotels and luxury resorts prefer local growers who can supply freshly harvested mushrooms daily without cold-chain delays from distant states.',
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
            <Link href="/cities" className="hover:text-emerald-500 transition-colors">
              Cities
            </Link>
            <span>/</span>
            <span className="text-slate-500">Rajasthan</span>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Udaipur
            </span>
          </nav>
        </div>

        {/* Hero Header */}
        <header className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4">
              <MapPin size={16} />
              <span>Mewar Region Agribusiness Blueprint</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Mushroom Farming in Udaipur: <span className="gradient-text font-black">A Royal Opportunity in the City of Lakes</span> 🏰
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mb-6">
              Udaipur is globally renowned for heritage palaces, luxury resorts, and vibrant tourism. Beyond its stunning lakes, indoor vertical mushroom farming has emerged as a high-margin, climate-smart, and water-efficient agribusiness for forward-thinking growers in the Mewar region.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20from%20Udaipur,%20Rajasthan.%20I%20want%20to%20start%20commercial%20mushroom%20farming."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Connect with Rajasthan Desk (9203544140)
              </a>
              <button
                onClick={() => openConsultationModal({ category: 'Udaipur Rajasthan Farm Setup' })}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-xs"
              >
                <Phone size={15} /> Book Free Farm Consultation
              </button>
            </div>
          </motion.div>
        </header>

        {/* 4 Key Natural & Market Advantages */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Regional Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                4 Reasons Why Udaipur is Ideal for Commercial Mushroom Farming
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

        {/* Recommended Varieties */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              Varieties for Udaipur
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Best Mushroom Varieties for Udaipur's Microclimate
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select the optimal species according to season to maintain continuous year-round cash flow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {varietiesForUdaipur.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-black dark:text-white text-slate-900 mb-2">{v.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{v.features}</p>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6">
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Best Season:</span>
                      <strong className="dark:text-white text-slate-900 text-right">{v.season}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Temperature:</span>
                      <strong className="dark:text-white text-slate-900">{v.temp}</strong>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-1.5">
                      <span className="text-slate-400">Crop Cycle:</span>
                      <strong className="dark:text-white text-slate-900">{v.cycle}</strong>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400">Market Price:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">{v.margin}</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href={v.link}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  View Cultivation Guide <ArrowRight size={13} />
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
                  Turnkey Commercial Setup • Udaipur
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Launch Your High-Profit Mushroom Farm in Udaipur
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Get high-yield certified F1 lab master spawn, custom insulated room blueprints, and technical agronomist mentorship from Organic Mushrooms Farm.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Pure F1 grain master spawn delivered to Udaipur in 2–3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Insulated indoor room schematics & automated fogger design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Direct supply advisory for luxury hotels, cafes & Mandi</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Inquiry Successfully Sent!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our Rajasthan technical coordinator will contact you within 2 business hours.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20inquired%20for%20Mushroom%20Farming%20in%20Udaipur%20Rajasthan%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
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
                        placeholder="e.g. Vikram Singh Ranawat"
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
                        placeholder="e.g. 9829XXXXXX"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-bold mb-1">Area / Tehsil</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Sukher / Hiran Magri"
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
                          <option value="Home / Trial Setup (100 - 300 Bags)">Home / Trial Setup (100 - 300 Bags)</option>
                          <option value="Semi-Commercial Setup (500 - 1,500 Bags)">Semi-Commercial Setup (500 - 1,500 Bags)</option>
                          <option value="Commercial Turnkey Farm (2,000+ Bags)">Commercial Turnkey Farm (2,000+ Bags)</option>
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
                          <Send size={14} /> Request Udaipur Setup Quotation & Guide
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
              Key questions on starting mushroom cultivation in Udaipur and Rajasthan.
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
              Ready to Start Your Farm in Udaipur?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Leverage Udaipur's unique hospitality demand and climate with certified F1 lab spawn, practical training, and complete farm blueprints.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20Mushroom%20Spawn%20in%20Udaipur%20Rajasthan."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Udaipur Desk (9203544140)
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

      {/* Floating CTAs & Modals */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const UdaipurRajasthanPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <UdaipurRajasthanPageInner />
    </ModalProvider>
  );
};
