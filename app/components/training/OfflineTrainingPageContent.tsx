'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Building2,
  Sprout,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Award,
  Phone,
  MessageCircle,
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  FileText,
  BadgeCheck,
  Send,
  Loader2,
  Thermometer,
  Layers,
  Sparkles,
  ArrowRight,
  UserCheck,
  Eye,
  Zap,
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

const OfflineTrainingPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedBatch, setSelectedBatch] = useState<string>('Upcoming Weekend Batch (Saturday - Sunday)');
  const { openConsultationModal } = useAppModals();

  // Booking / Registration Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: '',
    attendees: '1 Person',
    preferredDates: 'Upcoming Saturday-Sunday Batch',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleBookingSubmit = async (e: React.FormEvent) => {
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
          source: 'Offline Practical Farm Workshop Registration',
          batchSelected: selectedBatch,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Could not submit booking. Please contact directly on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please connect directly via WhatsApp: +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const workshopHighlights = [
    {
      icon: <Sprout className="text-emerald-500" size={24} />,
      title: '100% Hands-On Practical Work',
      desc: 'No classroom theory lectures. You will physically cut straw, test moisture with the squeeze method, pasteurize substrate, inoculate F1 grain spawn, and seal cultivation bags with your own hands.',
    },
    {
      icon: <Building2 className="text-blue-500" size={24} />,
      title: 'Live Commercial Farm Tour',
      desc: 'Walk through real climate-controlled incubation rooms, automated fogger misting chambers, multi-tier racking systems, and Phase-II Button mushroom composting tunnels.',
    },
    {
      icon: <Eye className="text-purple-500" size={24} />,
      title: 'Identify Real Mold & Contaminants',
      desc: 'See live samples of Trichoderma (green mold), cobweb mold, and sciarid flies. Learn exact chemical swab treatments and physical bio-security protocols before making costly errors on your own farm.',
    },
    {
      icon: <UserCheck className="text-amber-500" size={24} />,
      title: '1-on-1 Business Plan Evaluation',
      desc: 'Sit with senior farm agronomists and project engineers to review your available room/land, local climate challenges, capital budget, and estimated monthly profit margins.',
    },
    {
      icon: <Award className="text-emerald-500" size={24} />,
      title: 'Verified Certificate of Completion',
      desc: 'Receive an official physical & digital training certificate from Organic Mushrooms Farm with verified registration number for bank loan DPR files and NABARD subsidies.',
    },
    {
      icon: <MessageCircle className="text-[#25D366]" size={24} />,
      title: 'Direct Farm-to-Farm Support',
      desc: 'Get priority lifetime WhatsApp direct agronomist support and wholesale discounted rates on high-yield F1 grain spawn directly from our master culture laboratory.',
    },
  ];

  const practicalModules = [
    {
      day: 'Day 1: Morning Session (09:30 AM - 01:30 PM)',
      title: 'Substrate Processing, Sterilization & Laboratory Spawning',
      topics: [
        'Raw material evaluation: Wheat straw, paddy straw, and sugarcane bagasse quality checks',
        'Physical chopping to optimal 2-3 inch fiber length and wetting protocols',
        'Hands-on thermal boiling (80°C hot water tank) vs chemical sterilization formulation',
        'Live moisture testing: Master the tactile palm-squeeze test (65% moisture calibration)',
        'Hands-on bag inoculation: Layer spawning vs thorough spawning with pure F1 grain spawn',
        'Bag perforation, aerobic gas exchange filter plugs, and hygienic sealing',
      ],
    },
    {
      day: 'Day 1: Afternoon Session (02:30 PM - 05:30 PM)',
      title: 'Dark Room Incubation, Climate Automation & Bio-Security',
      topics: [
        'Dark room environmental engineering: Maintaining 22°C-28°C and optimal CO2 accumulation',
        'Pinhead induction protocol: Light exposure, fresh air exchange (FAE), and 85-90% humidity',
        'Hands-on setup of automated digital hygrometers, timer relays, and high-pressure fogger misting nozzles',
        'Live disease lab: Spotting and eradicating Trichoderma green mold, cobweb, and bacterial blotch',
      ],
    },
    {
      day: 'Day 2: Full Day Commercial Mastery (10:00 AM - 05:00 PM)',
      title: 'Button Mushroom Composting, Harvesting & B2B Distribution',
      topics: [
        'White Button mushroom compost formulation: Long vs short method, nitrogen balancing, and casing soil preparation',
        'Casing soil application technique (3cm uniform layer) and cold-shock pinhead triggering',
        'Live harvesting workshop: Zero-bruising twist-and-pull technique vs root base knife trim',
        'Perforated punnet packaging, cold storage (0-4°C), and 10:1 solar dehydration processing',
        'Marketing blueprint: Securing wholesale sabzi mandi contracts, luxury hotel orders, and retail shelf placement',
        'Detailed DPR project report discussion for NABARD and MSME bank loans',
        'Distribution of printed SOP blueprints & Official Training Certificate ceremony',
      ],
    },
  ];

  const upcomingBatches = [
    {
      title: 'Upcoming Weekend Intensive Batch',
      days: 'Saturday & Sunday (2 Full Days)',
      timings: '10:00 AM – 05:00 PM',
      seats: 'Only 6 Seats Remaining',
      status: 'Fast Filling',
      includes: 'Hands-on practice, training kit, lunch & refreshments, printed handbook, official certificate',
    },
    {
      title: 'Mid-Week Commercial Batch',
      days: 'Wednesday & Thursday (2 Full Days)',
      timings: '10:00 AM – 05:00 PM',
      seats: '8 Seats Available',
      status: 'Open for Registration',
      includes: 'Hands-on practice, training kit, lunch & refreshments, printed handbook, official certificate',
    },
  ];

  const faqs = [
    {
      q: 'ऑफलाइन (Physical) ट्रेनिंग का क्या फायदा है जब ऑनलाइन कोर्स भी उपलब्ध है?',
      a: 'ऑनलाइन कोर्स थ्योरी और साइंस सीखने के लिए बेहतरीन है, लेकिन खेती में हाथों का व्यावहारिक अनुभव (Hands-on experience) सबसे ज्यादा महत्वपूर्ण होता है। ऑफलाइन ट्रेनिंग में आप खुद अपने हाथों से भूसा उबालते हैं, नमी चेक करते हैं, स्पॉन मिक्स करते हैं और असली कमर्शियल फार्म के ऑटोमेशन और तापमान को महसूस करते हैं। इससे गलतियों का रिस्क शून्य हो जाता है।',
    },
    {
      q: 'ट्रेनिंग फार्म का पता और लोकेशन कहां है?',
      a: 'हमारा मुख्य कमर्शियल रिसर्च फार्म और स्पॉन लैब वेस्टर्न/नॉर्दर्न बेल्ट में स्थित है। रजिस्ट्रेशन के बाद आपको पूरा Google Maps लोकेशन, नजदीकी रेलवे स्टेशन/बस स्टैंड से कैब रूट और दिशा-निर्देश व्हाट्सएप पर भेज दिए जाते हैं।',
    },
    {
      q: 'क्या बाहर से आने वाले प्रतिभागियों के लिए रुकने और खाने की व्यवस्था है?',
      a: 'ट्रेनिंग के दौरान दोनों दिन फार्म पर दोपहर का फ्रेश भोजन (Lunch), चाय और रिफ्रेशमेंट शामिल है। दूर से आने वाले छात्रों के लिए फार्म के पास किफायती होटल और लॉजिंग की लिस्ट व बुकिंग सहायता उपलब्ध कराई जाती है।',
    },
    {
      q: 'क्या ट्रेनिंग के बाद सरकारी बैंक लोन या सब्सिडी में सहायता मिलेगी?',
      a: 'जी हां! आपको ऑर्गेनिक मशरूम्स फार्म द्वारा ऑफिशियल वेरिफाइड ट्रेनिंग सर्टिफिकेट दिया जाता है, जिसे आप नाबार्ड (NABARD), मुद्रा (PMMY) या राज्य कृषि विभाग के बैंक प्रोजेक्ट (DPR) में अनिवार्य प्रमाण-पत्र के रूप में लगा सकते हैं।',
    },
    {
      q: 'क्या ट्रेनिंग में बटन, ऑयस्टर और मिल्की तीनों मशरूम सिखाए जाते हैं?',
      a: 'हां! 2-दिवसीय प्रैक्टिकल वर्कशॉप में ढींगरी (Oyster), मिल्की (Calocybe indica) और व्हाइट बटन (White Button) तीनों किस्मों की कम्पोस्टिंग, केसिंग, फ्रूटिंग और मार्केटिंग तकनीक लाइव सिखाई जाती है।',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/training" className="hover:text-emerald-500 transition-colors">
              Training
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Offline Practical Farm Training
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Users size={13} /> Hands-On Farm Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Building2 size={13} /> Live Commercial Setup
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Award size={13} /> Physical Farm Certification
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Get Hands-On: Why <span className="gradient-text font-black">Offline Practical Mushroom Farming Training</span> is the Ultimate Game-Changer
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              Step foot on a live, high-yield commercial mushroom facility. Experience pasteurization, automated humidity chambers, spawning techniques, disease eradication, and button composting with your own hands before investing your hard-earned capital.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">
                    2-Day Intensive Weekend & Weekday Batches
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>10:00 AM – 05:00 PM Practical Sessions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} />
                  <span>Small Batches (Max 15 Growers Per Group)</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20register%20for%20the%20Offline%20Practical%20Mushroom%20Training%20Workshop.%20Please%20send%20schedule%20and%20location."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md"
                >
                  <MessageCircle size={14} /> WhatsApp Workshop Desk
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Why Offline Matters - 6 Core Pillars */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              Tactile Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight">
              Why Physical Workshop Experience Beats Pure Theory
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Farming is fundamentally a hands-on business. Make beginner mistakes in our training lab rather than on your commercial crop.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Practical Schedule Breakdown */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
                Curriculum Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                2-Day Practical Hands-On Training Schedule
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Every hour is optimized for real farm action, substrate handling, and business strategy.
              </p>
            </div>

            <div className="space-y-6">
              {practicalModules.map((pm, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {pm.day}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 font-bold text-slate-700 dark:text-slate-300">
                      Live Practical Demo
                    </span>
                  </div>
                  <h3 className="text-lg font-black dark:text-white text-slate-900 mb-4">{pm.title}</h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {pm.topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Batch Calendar & Seat Booking */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2 inline-block">
              Limited Seats per Group
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Upcoming Live Offline Workshop Batches
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              To ensure personal attention and hands-on bag filling for every attendee, each batch is capped at 15 growers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingBatches.map((batch, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {batch.status}
                    </span>
                    <span className="text-[11px] font-black px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      {batch.seats}
                    </span>
                  </div>

                  <h3 className="text-xl font-black dark:text-white text-slate-900 mb-2">{batch.title}</h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-emerald-500" />
                      <span>{batch.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-emerald-500" />
                      <span>{batch.timings}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3 mb-6">
                    <strong className="dark:text-white text-slate-900">Included in Workshop:</strong> {batch.includes}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20reserve%20a%20seat%20for%20the%20${encodeURIComponent(batch.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageCircle size={15} /> Reserve Seat via WhatsApp (9203544140)
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Booking Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Practical Seat Reservation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Book Your Seat for the Next Offline Farm Workshop
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Submit your details to receive the farm location map, batch timing schedule, and step-by-step registration pass.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Includes training kit, live practical substrate, and spawn sample</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Fresh lunch & farm tea/refreshments provided for both days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Official physical completion certificate upon graduation</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Registration Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our training desk will WhatsApp you the exact farm address, gate pass, and directions.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20registered%20for%20offline%20training%20under%20the%20name%20${encodeURIComponent(formData.name)}.%20Please%20send%20farm%20location.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp (9203544140)
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3 text-xs">
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
                        placeholder="e.g. Surendra Singh"
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
                        <label className="block font-bold mb-1">Select Batch</label>
                        <select
                          value={selectedBatch}
                          onChange={(e) => setSelectedBatch(e.target.value)}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Weekend Batch (Saturday - Sunday)">Weekend Batch (Sat-Sun)</option>
                          <option value="Weekday Batch (Wednesday - Thursday)">Weekday Batch (Wed-Thu)</option>
                          <option value="Custom 1-on-1 VIP Mentorship">1-on-1 VIP Mentorship</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Your Home City / State</label>
                        <input
                          type="text"
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          placeholder="e.g. Jaipur / Delhi / Pune"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Check: 8 + 6 = ?</label>
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
                          <Loader2 size={14} className="animate-spin" /> Reserving...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Confirm Offline Workshop Reservation
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              ऑफलाइन फार्म ट्रेनिंग से जुड़े सामान्य प्रश्न (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Important questions about physical workshop batches, locations, lodging, and certificates.
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

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Experience Live Commercial Mushroom Farming?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Book your seat for the upcoming practical workshop batch. Learn from commercial growers with 10+ years of operational experience at <strong>Organic Mushrooms Farm</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20attend%20the%20Offline%20Mushroom%20Training%20Batch."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Training Desk (9203544140)
              </a>
              <Link
                href="/training/online"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <BookOpen size={16} /> Explore Online Video Course
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating & Sticky CTAs */}
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <AIChatWidget />
      <HomeModals />
      <Footer />
    </div>
  );
};

export const OfflineTrainingPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <OfflineTrainingPageInner />
    </ModalProvider>
  );
};
