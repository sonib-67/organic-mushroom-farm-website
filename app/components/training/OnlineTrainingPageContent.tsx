'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Laptop,
  Play,
  CheckCircle2,
  Award,
  BookOpen,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  Layers,
  Sprout,
  Users,
  Send,
  Loader2,
  TrendingUp,
  Store,
  Calendar,
  HelpCircle,
  FileText,
  BadgeCheck,
  Zap,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const OnlineTrainingPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'commercial' | 'turnkey'>('commercial');
  const [activeModuleTab, setActiveModuleTab] = useState<number>(0);

  const { openConsultationModal } = useAppModals();

  // Fast Lead & Enrollment State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    stateCity: '',
    courseSelected: 'Commercial Mushroom Masterclass (₹699)',
    preferredLanguage: 'Hindi & English Mixed',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 11) {
      setFormError('Please solve the security calculation: 6 + 5 = 11');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please provide your name and WhatsApp mobile number.');
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
          source: 'Online Mushroom Farming Training Page',
          message: `Interested in ${formData.courseSelected}. Preferred Language: ${formData.preferredLanguage}. Location: ${formData.stateCity}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Could not submit details. Please contact directly on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please connect directly via WhatsApp: +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const curriculumModules = [
    {
      title: 'Module 1: Commercial Biology & Variety Selection',
      desc: 'Understand the biological cycle of fungi. Complete deep-dive into Oyster (Dhingri), Milky (Calocybe indica), and White Button (Agaricus bisporus) varieties based on local state climate, room temperature, and budget.',
      points: [
        'Life cycle of mushrooms: Spores, Mycelium, Primordia to Fruiting Body',
        'Seasonal calendar: Summer heat crops vs winter ambient varieties',
        'Market demand analysis in local mandis, retail, and hotel chains',
      ],
    },
    {
      title: 'Module 2: Substrate Sourcing, Chopping & Sterilization',
      desc: 'Master wheat straw, paddy straw, and sugarcane bagasse processing. Learn both hot water thermal pasteurization and chemical sterilization without contamination.',
      points: [
        'Straw quality check, 2-3 inch chopping techniques, and moisture retention',
        'Hot water boiling protocol: 80°C for 60-90 minutes',
        'Chemical sterilization formulation with Carbendazim & Formalin',
      ],
    },
    {
      title: 'Module 3: Spawning Techniques & Bag Inoculation',
      desc: 'Scientific handling of pure F1 grain spawn. Learn sterile layer spawning vs through spawning, moisture verification, and bag sealing.',
      points: [
        'How to identify healthy, fresh, contaminant-free mycelium spawn',
        'Spawn rate calculation: 2% to 3% on wet substrate weight',
        'PP bag filling, aerobic perforation, and sterile rubber banding',
      ],
    },
    {
      title: 'Module 4: Dark Room Incubation & Mycelium Run',
      desc: 'How to manage the 12 to 18-day colonization stage. Maintaining 22°C-28°C dark room temperatures and preventing competitive pest infestation.',
      points: [
        'Optimum CO2 accumulation and light prevention during colonization',
        'Detecting early mycelium spread and preventing heat accumulation in core bags',
        'Sanitation routines to prevent flies and mites in the dark room',
      ],
    },
    {
      title: 'Module 5: Pinhead Induction & Fruiting Management',
      desc: 'Transform colonized white bags into heavy flushes. Unveiling light exposure, high humidity (85-90%), and fresh air exchange (FAE).',
      points: [
        'Bag opening / slitting techniques for maximum pinning surface',
        'Automated vs manual misting without soaking the mycelium',
        'Fresh air circulation: Balancing CO2 levels below 1000 ppm',
      ],
    },
    {
      title: 'Module 6: Button Mushroom Composting & Casing Soil',
      desc: 'Complete protocol for Agaricus bisporus. 28-day long composting vs 16-day short method with pasteurization tunnel and casing soil preparation.',
      points: [
        'Compost formulation: Wheat straw, poultry manure, urea, gypsum',
        'Casing soil pasteurization with steam/formalin and 3cm top layer application',
        'Ruffling, air flushing, and cold shock triggering for uniform button pinning',
      ],
    },
    {
      title: 'Module 7: Climate Control, Fogger & Shed Engineering',
      desc: 'Design low-cost, high-efficiency micro-farms using bamboo, thatch, or insulated PUF panels with temperature and humidity controllers.',
      points: [
        'High-pressure fogger nozzle layouts and digital hygrometer setup',
        'Exhaust fan placement and positive vs negative pressure airflow',
        'Multi-tier vertical racking to quadruple production in small rooms',
      ],
    },
    {
      title: 'Module 8: Disease, Green Mold & Pest Management',
      desc: 'Identify, isolate, and eradicate Trichoderma (green mold), cobweb mold, yellow blotch, sciarid flies, and phorid flies before they impact crop yield.',
      points: [
        'Preventive bio-security SOPs for commercial production units',
        'Spot treatment of localized contamination using salt and formalin swabs',
        'Sticky traps, insect nets, and hygienic footbath protocols',
      ],
    },
    {
      title: 'Module 9: Harvesting, Packaging & Cold Chain',
      desc: 'Exact harvesting techniques for zero base bruising. Perforated punnet packaging, moisture control, and 0-4°C cold room storage for 5-7 day shelf-life.',
      points: [
        'Twist-and-pull harvesting vs sharp knife base trim methods',
        'Food-grade breathable LDPE packaging and weight grading',
        'Sun drying & mechanical dehydration protocols for 10:1 dry oyster storage',
      ],
    },
    {
      title: 'Module 10: Direct B2B Marketing, FSSAI & Business Scaling',
      desc: 'Build guaranteed recurring buyers. How to supply local sabzi mandis, organic retail stores, direct households, luxury hotels, and export buyers.',
      points: [
        'FSSAI registration, organic certification, and branding blueprint',
        'Pricing strategies for wholesale (₹120-₹180/kg) vs retail (₹200-₹300/kg)',
        'Value-added mushroom powder, pickles, soup mixes, and wellness capsules',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Clock className="text-emerald-500" size={24} />,
      title: '100% Self-Paced Lifetime Access',
      desc: 'Watch HD practical lessons anytime from your smartphone, tablet, or laptop. Rewatch whenever you start a new crop cycle.',
    },
    {
      icon: <Laptop className="text-blue-500" size={24} />,
      title: 'Clear Step-by-Step Video Demonstrations',
      desc: 'No confusing academic theory. Watch real farm technicians perform boiling, spawning, humidity management, and harvest on camera.',
    },
    {
      icon: <MessageCircle className="text-[#25D366]" size={24} />,
      title: 'Direct WhatsApp Technical Support',
      desc: 'Stuck with room temperature or spotting mold? Send photos directly to our expert agronomists on WhatsApp for instant solutions.',
    },
    {
      icon: <Award className="text-amber-500" size={24} />,
      title: 'Certified Course Completion Certificate',
      desc: 'Receive an official, verifiable digital certificate from Organic Mushrooms Farm to help with bank loans and subsidies.',
    },
    {
      icon: <Sprout className="text-purple-500" size={24} />,
      title: 'Direct F1 Spawn Supply Guarantee',
      desc: 'Access our high-yield master spawn laboratory with priority doorstep express shipping to all pin codes across India.',
    },
    {
      icon: <TrendingUp className="text-rose-500" size={24} />,
      title: 'Mandi & B2B Buyer Connect',
      desc: 'Learn high-margin sales techniques and get connected with verified regional mushroom buyers, traders, and restaurant chains.',
    },
  ];

  const pricingTiers = [
    {
      id: 'basic',
      title: 'Basic Mushroom Starter Course',
      price: '₹299',
      originalPrice: '₹999',
      discount: '70% OFF',
      tag: 'For Hobbyists & Beginners',
      popular: false,
      features: [
        'Full Oyster & Milky Mushroom Cultivation Modules',
        'Substrate sterilization & spawning masterclasses',
        'PDF Recipe & Troubleshooting Handbooks (Hindi & English)',
        'Digital Certificate of Completion',
        'WhatsApp Student Support Group Access',
      ],
      ctaText: 'Enroll in Basic (₹299)',
    },
    {
      id: 'commercial',
      title: 'Commercial Masterclass (All 3 Varieties)',
      price: '₹699',
      originalPrice: '₹2,499',
      discount: '72% OFF',
      tag: 'Most Popular for Business Owners',
      popular: true,
      features: [
        'Everything in Basic Starter Course',
        'White Button Mushroom Composting & Casing System',
        'Low-Cost Shed & Automated Fogger Layout Blueprints',
        'Green Mold & Disease Eradication Masterclass',
        'Post-Harvest Dry Mushroom & Value Addition Training',
        'FSSAI, Branding & Mandi Marketing Masterclass',
        'Priority 1-on-1 WhatsApp Support with Senior Agronomist',
        '10% Discount on First Commercial F1 Spawn Order',
      ],
      ctaText: 'Enroll in Commercial Pro (₹699)',
    },
    {
      id: 'turnkey',
      title: 'Commercial Farm Turnkey Mentorship',
      price: '₹4,999',
      originalPrice: '₹12,000',
      discount: '58% OFF',
      tag: 'For Commercial Setup (500+ Sq Ft)',
      popular: false,
      features: [
        'Complete Commercial Masterclass Access',
        'Custom CAD/Engineering Shed Blueprints tailored to your site',
        '3 Video Call 1-on-1 Consultations with Head Cultivator',
        'Detailed Bank Project DPR & Subsidy Guidance',
        'Contract Buy-Back & Direct B2B Distribution Assistance',
        'Lifetime Dedicated Technical Farm Helpline',
      ],
      ctaText: 'Book Turnkey Mentorship',
    },
  ];

  const faqs = [
    {
      q: 'ऑनलाइन ट्रेनिंग के बाद मुझे क्या सर्टिफिकेट मिलेगा?',
      a: 'हां, पूरा ऑनलाइन वीडियो कोर्स पूरा करने पर आपको Organic Mushrooms Farm द्वारा वेरिफाइड डिजिटल कंप्लीशन सर्टिफिकेट (Digital Certificate) जारी किया जाता है। इसका उपयोग आप अपने एग्रीकल्चर प्रोफाइल, बैंक लोन या सरकारी सब्सिडी प्रोजेक्ट्स में कर सकते हैं।',
    },
    {
      q: 'क्या यह कोर्स बिल्कुल नए लोगों (Beginners) के लिए उपयुक्त है?',
      a: 'बिल्कुल! हमारा कोर्स विशेष रूप से उन लोगों के लिए बनाया गया है जिनका कोई पिछला कृषि या वैज्ञानिक अनुभव नहीं है। इसमें हिंदी और आसान भाषा में व्यावहारिक वीडियो द्वारा भूसा काटने से लेकर मशरूम तोड़ने और बेचने तक की पूरी प्रक्रिया दिखाई गई है।',
    },
    {
      q: 'कोर्स की वैलिडिटी और वीडियो देखने का समय क्या है?',
      a: 'यह 100% सेल्फ-पेस्ड (Self-Paced) कोर्स है और आपको लाइफटाइम एक्सेस मिलता है। आप जब चाहें, अपने मोबाइल फोन या लैपटॉप पर अपनी सुविधानुसार वीडियो कभी भी और कितनी भी बार देख सकते हैं।',
    },
    {
      q: 'ट्रेनिंग के बाद अगर मुझे कोई समस्या या बीमारी दिखे तो क्या सहायता मिलेगी?',
      a: 'हां! हमारे सभी एनरोल किए गए छात्रों को हमारा डायरेक्ट व्हाट्सएप हेल्पलाइन नंबर मिलता है। आप अपने कमरे, बैग्स या फसल की तस्वीरें भेजकर हमारे सीनियर कृषि वैज्ञानिकों से तुरंत समाधान प्राप्त कर सकते हैं।',
    },
    {
      q: 'क्या कोर्स में स्पॉन (बीज) और सामग्री खरीदने में मदद मिलती है?',
      a: 'जी हां, हमारे पास अपनी हाई-यील्ड F1 ग्रेन स्पॉन लैब है। ट्रेनिंग लेने वाले सभी छात्रों को प्राथमिकता के आधार पर लैब-टेस्टेड स्पॉन सीधे आपके घर या फार्म पर एक्सप्रेस कूरियर द्वारा भेजा जाता है।',
    },
    {
      q: 'पेमेंट कैसे करें और कोर्स का एक्सेस कब मिलेगा?',
      a: 'आप UPI, Google Pay, PhonePe, Paytm, नेट बैंकिंग या डेबिट कार्ड से सुरक्षित पेमेंट कर सकते हैं। पेमेंट पूरा होते ही तुरंत आपके व्हाट्सएप और ईमेल पर कोर्स का लॉगिन लिंक और स्टडी मैटेरियल भेज दिया जाता है।',
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
              Online Mushroom Farming Masterclass
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Laptop size={13} /> 100% Online & Self-Paced
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Award size={13} /> ISO & Farm Verified Certificate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Sparkles size={13} /> All 3 Commercial Varieties
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Master Mushroom Farming From Anywhere:{' '}
              <span className="gradient-text font-black">Join the Ultimate Online Video Masterclass</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              Learn the exact step-by-step scientific methods, substrate sterilization protocols, climate automation, contamination control, and high-margin B2B marketing strategies to launch a profitable mushroom enterprise from the comfort of your home.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Play size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">
                    10 Comprehensive HD Video Modules
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>Lifetime Access + Regular 2026 Updates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} />
                  <span>3,500+ Successful Students Across India</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20joining%20the%20Online%20Mushroom%20Training%20Program.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md"
                >
                  <MessageCircle size={14} /> WhatsApp Training Desk
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Benefits Grid */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              Why Learn Online with Organic Mushrooms Farm?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Save thousands on travel and physical workshop fees while getting real-world commercial farm insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Tabs & Syllabus Breakdown */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
                Complete 10-Module Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight">
                What You Will Actually Learn in This Course
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                From substrate boiling to commercial shed climate automation, FSSAI licensing, and bulk mandi distribution.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6">
              {/* Module Nav List */}
              <div className="lg:col-span-5 space-y-2">
                {curriculumModules.map((mod, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveModuleTab(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all border text-xs font-bold flex items-center justify-between gap-2 ${
                      activeModuleTab === idx
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate">{mod.title}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md shrink-0 ${activeModuleTab === idx ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                      Part {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Module Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <BookOpen size={15} /> Detailed Module Breakdown
                  </div>
                  <h3 className="text-xl font-black dark:text-white text-slate-900 mb-3">
                    {curriculumModules[activeModuleTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {curriculumModules[activeModuleTab].desc}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Key Practical Competencies Covered:
                    </span>
                    {curriculumModules[activeModuleTab].points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Includes video guide, downloadable SOP PDF & checklist
                  </span>
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20enroll%20in%20the%20Mushroom%20Training%20Course."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    Start This Module
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Enrollment Plans */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              Affordable Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight">
              Choose Your Online Training Package
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              One-time investment with lifetime benefits. Instant video login credentials upon payment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  tier.popular
                    ? 'border-emerald-500 bg-white dark:bg-slate-900 shadow-2xl relative scale-[1.02] ring-2 ring-emerald-500/20'
                    : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60'
                }`}
              >
                <div>
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                      Recommended
                    </div>
                  )}

                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                    {tier.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black dark:text-white text-slate-900 mb-3">
                    {tier.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl sm:text-4xl font-black dark:text-white text-slate-900">
                      {tier.price}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      {tier.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {tier.discount}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-white/5">
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20enroll%20in%20the%20${tier.title}%20(${tier.price}).%20Please%20send%20payment%20link.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-2 transition-all shadow-md ${
                      tier.popular
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-[1.02]'
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'
                    }`}
                  >
                    <MessageCircle size={15} /> {tier.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-slate-900/5 to-emerald-500/5 dark:bg-slate-900/80 backdrop-blur-md shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  Government & Bank Recognized
                </span>
                <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                  Earn Your Official Mushroom Cultivation Certificate
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Upon completing all course modules, receive an authentic, serial-numbered digital Certificate of Completion from <strong>Organic Mushrooms Farm</strong>. This credential validates your practical expertise and helps with NABARD loans, state subsidies, and commercial vendor tie-ups.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <BadgeCheck size={16} className="text-amber-500" />
                    <span>Unique Certificate ID & QR Verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <BadgeCheck size={16} className="text-amber-500" />
                    <span>Valid for Bank Project DPR Submissions</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <BadgeCheck size={16} className="text-amber-500" />
                    <span>Recognized by Commercial Hotel Suppliers</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <BadgeCheck size={16} className="text-amber-500" />
                    <span>Includes Official Grade & Farm Stamp</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-800 border-2 border-dashed border-amber-500/40 text-center shadow-md">
                <Award size={48} className="text-amber-500 mx-auto mb-3" />
                <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Preview Certificate</span>
                <h4 className="text-base font-black dark:text-white text-slate-900">
                  Certificate of Commercial Mushroom Cultivation
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  Issued to verified trainees demonstrating mastery in Oyster, Milky & Button mushroom production technology.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-[10px] text-slate-400 font-mono">
                  ISO 9001:2015 Compliant Training Standard
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Instant Access Registration
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Enroll in Online Mushroom Training Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fill in your details to get immediate course access, downloadable PDF blueprints, and WhatsApp support connection.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Instant WhatsApp link dispatch upon registration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Includes all video guides and troubleshooting manuals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>100% Satisfaction & Expert Advisory Support</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Enrollment Request Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our training coordinator will send your access details on WhatsApp. For instant activation, message us directly:
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20just%20submitted%20the%20training%20form%20for%20${encodeURIComponent(formData.name)}.%20Please%20send%20my%20course%20access.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Open WhatsApp (9203544140)
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleEnrollmentSubmit} className="space-y-3 text-xs">
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
                        placeholder="e.g. Rajesh Kumar"
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
                        <label className="block font-bold mb-1">Course Plan</label>
                        <select
                          value={formData.courseSelected}
                          onChange={(e) => setFormData({ ...formData, courseSelected: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="Commercial Mushroom Masterclass (₹699)">Commercial (₹699)</option>
                          <option value="Basic Mushroom Starter (₹299)">Basic (₹299)</option>
                          <option value="Turnkey Farm Mentorship (₹4,999)">Turnkey Mentorship</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold mb-1">City / State</label>
                        <input
                          type="text"
                          value={formData.stateCity}
                          onChange={(e) => setFormData({ ...formData, stateCity: e.target.value })}
                          placeholder="e.g. Bikaner / Pune"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Check: 6 + 5 = ?</label>
                      <input
                        type="number"
                        required
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        placeholder="Enter 11"
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
                          <Loader2 size={14} className="animate-spin" /> Enrolling...
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Submit & Get Course Access Link
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
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-6">
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              ऑनलाइन मशरूम ट्रेनिंग से जुड़े महत्वपूर्ण प्रश्न (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Frequently Asked Questions about our online video course, support, and certificates.
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
              Stop Guessing, Start Growing with Commercial Confidence
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Equip yourself with the exact scientific knowledge, humidity blueprints, disease prevention protocols, and direct advisory support from <strong>Organic Mushrooms Farm</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20enroll%20in%20the%20Commercial%20Mushroom%20Online%20Training."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> Enroll on WhatsApp (9203544140)
              </a>
              <Link
                href="/services/turnkey-setup"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <Sprout size={16} /> Explore Commercial Turnkey Setup
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

export const OnlineTrainingPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <OnlineTrainingPageInner />
    </ModalProvider>
  );
};
