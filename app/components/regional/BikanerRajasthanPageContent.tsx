'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Building2,
  Sprout,
  Sun,
  Droplets,
  TrendingUp,
  CheckCircle2,
  Store,
  Truck,
  Award,
  DollarSign,
  Phone,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Calculator,
  ShieldCheck,
  Send,
  Loader2,
  Info,
  Layers,
  Thermometer,
  Zap,
  BookOpen,
  Boxes,
  HelpCircle,
  Scale,
  Sparkles,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const BikanerRajasthanPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCrop, setSelectedCrop] = useState<'milky' | 'oyster' | 'button'>('milky');
  const [roomAreaSqFt, setRoomAreaSqFt] = useState<number>(300);
  const { openConsultationModal, openQuickOrderModal, openQuoteCalculatorModal } = useAppModals();

  // Lead capture state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Bikaner, Rajasthan',
    cropInterest: 'Milky & Button Mushroom Setup in Bikaner',
    shedStatus: 'Have vacant room / shed / agricultural land',
    message: '',
  });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Dynamic calculations for Bikaner desert conditions
  // Multi-tier vertical farming (4-5 tiers) yields ~7 bags per 10 sq ft
  const bagCount = Math.round((roomAreaSqFt / 10) * 7);

  const getYieldPerMonth = () => {
    if (selectedCrop === 'milky') return Math.round(bagCount * 1.7); // kg per cycle
    if (selectedCrop === 'oyster') return Math.round(bagCount * 2.0);
    return Math.round(bagCount * 2.6); // Button
  };

  const getAvgPricePerKg = () => {
    if (selectedCrop === 'milky') return 240; // ₹/kg in Bikaner restaurants & organic shops
    if (selectedCrop === 'oyster') return 180;
    return 210; // Button
  };

  const estMonthlyYieldKg = getYieldPerMonth();
  const estMonthlyRevenue = estMonthlyYieldKg * getAvgPricePerKg();
  const estSubstrateCost = Math.round(bagCount * 42); // Wheat straw + spawn + bags
  const estNetProfit = Math.round(estMonthlyRevenue - estSubstrateCost - (roomAreaSqFt * 8)); // labor/cooling

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(captchaAnswer, 10) !== 9) {
      setFormError('Please answer the security question correctly (4 + 5 = 9).');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please enter your name and contact phone number.');
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
          source: 'Bikaner Rajasthan Regional Page',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Could not submit details. Please contact directly on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please WhatsApp us at +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

  const bikanerLocalities = [
    { name: 'Gangashahar & Bhinasar', type: 'High Vegetarian Retail & Local Mandi' },
    { name: 'Rani Bazar & Pawanpuri', type: 'Commercial Supply & Supermarkets' },
    { name: 'Jai Narayan Vyas Colony (JNVC)', type: 'Premium Household & Health Club Demand' },
    { name: 'Karni Nagar & Sadul Ganj', type: 'Direct Residential Deliveries' },
    { name: 'Lalgarh & Mukta Prasad Nagar', type: 'Semi-Urban Mushroom Production Hubs' },
    { name: 'Nokha & Deshnoke', type: 'Agri-Business & Spice Trader Integration' },
    { name: 'Kolayat & Lunkaransar', type: 'Canal Belt Low-Cost Straw Availability' },
    { name: 'Shri Dungargarh & Napasar', type: 'Expanding Dairy & Farming Micro-Units' },
  ];

  const seasonalMatrix = [
    {
      season: 'Summer (March to October)',
      temp: '32°C – 44°C (Peak Desert Heat)',
      variety: 'Milky Mushroom (Calocybe indica)',
      solution: 'Thrives in extreme 30°C–38°C temperatures. Perfect cash crop for Bikaner summers with basic shade netting and water misting.',
      tag: 'Summer Cash Crop',
      color: 'amber',
    },
    {
      season: 'Winter (November to February)',
      temp: '8°C – 22°C (Crisp Cool Desert Air)',
      variety: 'Button (Agaricus) & Oyster (Pleurotus)',
      solution: 'Natural ambient cold weather enables zero-AC production of high-value White Button and Oyster mushrooms, reducing power costs to near zero.',
      tag: 'Zero-AC Winter Gold',
      color: 'blue',
    },
    {
      season: 'Year-Round (All 365 Days)',
      temp: 'Controlled 16°C – 24°C',
      variety: 'Commercial Multi-Crop Rotation',
      solution: 'Insulated PUF panel shed with automated fogging and humidity controllers ensures continuous daily supply contracts to luxury heritage hotels.',
      tag: '365-Day High ROI',
      color: 'emerald',
    },
  ];

  const faqs = [
    {
      q: 'बीकानेर के गर्म और शुष्क मौसम में मशरूम की खेती कैसे संभव है?',
      a: 'मशरूम की खेती पूरी तरह से इंडोर (कमरे, शेड या बेसमेंट) में की जाती है। गर्मियों में बीकानेर के लिए मिल्की मशरूम (Milky Mushroom) सबसे उपयुक्त है क्योंकि यह 30°C से 38°C के तापमान में आसानी से बढ़ता है। वहीं सर्दियों (नवंबर से फरवरी) में बिना किसी एसी के बटन और ढींगरी (Oyster) मशरूम की बंपर पैदावार ली जा सकती है।',
    },
    {
      q: 'बीकानेर में मशरूम की खेती के लिए पानी की कितनी आवश्यकता होती है?',
      a: 'पारंपरिक फसलों (जैसे बाजरा, ग्वार या मूंगफली) की तुलना में मशरूम की खेती में 90% कम पानी लगता है। इसमें मिट्टी की सिंचाई नहीं होती, बल्कि केवल कमरे में नमी (Humidity 80-85%) बनाए रखने के लिए दिन में 2-3 बार हल्का फॉगिंग स्प्रे किया जाता है। इसलिए यह थार रेगिस्तान के लिए सबसे आदर्श सस्टेनेबल बिज़नेस है।',
    },
    {
      q: 'बीकानेर में मशरूम का मार्केट और बिक्री कहां होती है?',
      a: 'बीकानेर में 100% शुद्ध शाकाहारी आबादी का बड़ा बेस है। इसके अलावा नरेंद्र भवन, लक्ष्मी निवास पैलेस और हेरिटेज होटलों में रोजाना फ्रेश बटन और ओएस्टर मशरूम की भारी मांग है। स्थानीय सब्जी मंडी, रानी बाज़ार, पवनपुरी, गंगाशहर और जेएनवी कॉलोनी के सुपरमार्केट्स में ₹180 से ₹260 प्रति किलो का थोक व रिटेल भाव मिलता है।',
    },
    {
      q: 'बीकानेर में भूसा (Substrate) और स्पॉन (बीज) कहां से मिलेगा?',
      a: 'बीकानेर के नजदीकी नहरी इलाकों (श्रीगंगानगर, हनुमानगढ़, लूणकरणसर) से गेहूं का भूसा बेहद कम दाम पर उपलब्ध हो जाता है। हाई-यील्ड लैब टेस्टेड F1 स्पॉन (मशरूम बीज) Organic Mushrooms Farm द्वारा सीधे बीकानेर आपके पते पर सुपरफास्ट एक्सप्रेस कूरियर से डिलीवर किया जाता है।',
    },
    {
      q: 'क्या बीकानेर के कॉलेज स्टूडेंट्स या महिलाएं इसे पार्ट-टाइम शुरू कर सकते हैं?',
      a: 'बिल्कुल! 10x10 या 12x15 फीट के खाली कमरे में केवल ₹8,000 से ₹15,000 की लागत में 100-150 बैग से शुरुआत की जा सकती है। इसमें रोजाना केवल 1 से 1.5 घंटे की देखभाल की जरूरत होती है। हमारी ऑनलाइन ट्रेनिंग से आप घर बैठे पूरी प्रैक्टिकल तकनीक सीख सकते हैं।',
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
            <Link href="/cities/rajasthan/bikaner" className="hover:text-emerald-500 transition-colors">
              Rajasthan
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Bikaner Mushroom Farming
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Sun size={13} /> Desert Agri-Innovation Hub
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Droplets size={13} /> 90% Water-Saving Crop
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <MapPin size={13} /> Bikaner & Thar Region
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Transforming the Desert: Commercial{' '}
              <span className="gradient-text font-black">Mushroom Farming in Bikaner, Rajasthan</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              Discover how progressive farmers, youth, and agri-entrepreneurs in Bikaner are beating extreme Thar desert heat and water scarcity with high-yield indoor mushroom cultivation—generating 100%+ profit margins all 365 days a year.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <User size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">
                    Organic Mushrooms Farm Technical Team
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>2026 Commercial Guide</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>8 Min Comprehensive Read</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20from%20Bikaner%20and%20want%20to%20start%20mushroom%20farming.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md"
                >
                  <MessageCircle size={13} /> WhatsApp Bikaner Advisor
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Quick Highlights Metrics Strip */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 block mb-0.5">
                90% Less
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Water Consumption</span>
              <span className="text-[10px] text-slate-400">Zero water lost to evaporation</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 block mb-0.5">
                30°C–38°C
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Summer Milky Crop</span>
              <span className="text-[10px] text-slate-400">Loves Bikaner desert heat</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 block mb-0.5">
                Zero-AC
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Winter Button Farming</span>
              <span className="text-[10px] text-slate-400">Nov to Feb cold desert climate</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 block mb-0.5">
                ₹180–₹260
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Average Retail / Kg</span>
              <span className="text-[10px] text-slate-400">Huge vegetarian local demand</span>
            </div>
          </div>
        </section>

        {/* Main Content Body */}
        <article className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto space-y-12">
          {/* Executive Overview */}
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-5">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                When people think of agriculture in Bikaner, they picture drought-resistant crops like bajra, guar, and moth beans battling the relentless Thar desert sun. With summer temperatures exceeding 45°C, scarce rainfall, and sandy soil, open-field farming has always been fraught with extreme risk.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                However, a modern agricultural revolution is unfolding. Progressive farmers, educated youth, and entrepreneurs across Bikaner, Gangashahar, Nokha, and Lunkaransar are shifting indoors into controlled, vertical micro-farms. Mushroom farming has emerged as the ultimate high-return, climate-resilient enterprise tailored specifically for Rajasthan’s arid environment.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-1">
                  <Award size={16} /> Why Bikaner is Ready for a Mushroom Boom
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed m-0">
                  Because mushrooms are cultivated vertically indoors on agricultural residues (such as wheat straw / bhusa), they consume 90% less water than traditional crops, yield 4 to 6 continuous flushes, and provide immediate daily cash flow directly into local sabzi mandis, hotels, and vegetarian households.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Success in Bikaner */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Why Mushroom Farming Thrives in Bikaner&apos;s Desert Climate
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                The strategic, environmental, and commercial drivers transforming Rajasthan growers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <Droplets size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  1. The Ultimate Water-Smart Crop
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Water scarcity is the biggest bottleneck in Western Rajasthan. Traditional farming wastes thousands of liters through sandy soil percolation and solar evaporation. In mushroom farming, water is only used for air humidification and light bag misting inside enclosed rooms, wasting zero drops.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Sun size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  2. Smart Seasonal Crop Switching
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Bikaner growers capitalize on extreme seasons: In scorching summers (35°C+), heat-loving Milky Mushrooms flourish with minimal cooling. In crisp desert winters (Nov–Feb), growers produce premium White Button and Oyster mushrooms without expensive AC power bills.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Store size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  3. Massive Pure-Vegetarian Market
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Rajasthan has India&apos;s highest percentage of vegetarians. In Bikaner, locals actively seek rich, high-protein, organic mushroom dishes for weddings, family gatherings, and everyday cuisine. Demand far outpaces local supply, with major quantities currently imported from Haryana and Punjab.
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-md">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Building2 size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                  4. Heritage Tourism & Luxury Hotel Demand
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Bikaner is world-famous for its luxury heritage hotels, desert camps, and royal palaces (Laxmi Niwas Palace, Narendra Bhawan). These high-end culinary establishments require guaranteed daily fresh button and oyster mushrooms, commanding premium B2B contract pricing.
                </p>
              </div>
            </div>
          </section>

          {/* Seasonal Strategy Table */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Seasonal Cultivation Calendar for Bikaner & Rajasthan
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Maximize farm efficiency by rotating varieties to match Bikaner&apos;s natural temperature swings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {seasonalMatrix.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-900/70 backdrop-blur-md shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3 inline-block">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-1">{item.season}</h3>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                      {item.variety}
                    </div>
                    <div className="text-xs text-slate-400 mb-3">Ambient: {item.temp}</div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Bikaner Farm Profitability Calculator */}
          <section className="p-6 md:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-amber-500/5 to-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Calculator size={13} /> Bikaner Project Modeler
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Bikaner Mushroom Farm <span className="gradient-text font-black">ROI & Profit Calculator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Estimate your monthly yield, revenue, and net profit based on your available room or shed size.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Sliders and Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    1. Select Mushroom Variety:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'milky', label: 'Milky Mushroom', sub: 'Summer King' },
                      { id: 'oyster', label: 'Oyster / Dhingri', sub: 'Fast 25 Days' },
                      { id: 'button', label: 'White Button', sub: 'Winter & AC' },
                    ].map((crop) => (
                      <button
                        key={crop.id}
                        type="button"
                        onClick={() => setSelectedCrop(crop.id as any)}
                        className={`p-3 rounded-xl text-left transition-all border ${
                          selectedCrop === crop.id
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-xs font-bold block">{crop.label}</span>
                        <span className={`text-[10px] block ${selectedCrop === crop.id ? 'text-emerald-100' : 'text-slate-400'}`}>
                          {crop.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    <span>Available Room / Shed Size:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-black">
                      {roomAreaSqFt} Sq. Ft.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={roomAreaSqFt}
                    onChange={(e) => setRoomAreaSqFt(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>100 Sq. Ft. (Spare Room)</span>
                    <span>500 Sq. Ft. (Shed)</span>
                    <span>2,000 Sq. Ft. (Commercial)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Active Multi-Tier Bags:</span>
                    <strong className="dark:text-white text-slate-900">{bagCount} Bags</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Raw Material & Spawn Cost:</span>
                    <strong className="text-red-500 dark:text-red-400">₹{estSubstrateCost.toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Selling Price in Bikaner:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">₹{getAvgPricePerKg()} / kg</strong>
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-850 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  Financial Projection for Bikaner Facility
                </span>
                <h3 className="text-xl font-black dark:text-white text-slate-900 mb-6">
                  {roomAreaSqFt} Sq. Ft. Monthly Crop Output
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Estimated Harvested Yield</span>
                    <span className="text-base font-black text-emerald-600 dark:text-emerald-400">
                      {estMonthlyYieldKg.toLocaleString()} kg / cycle
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Gross Market Value</span>
                    <span className="text-base font-black dark:text-white text-slate-900">
                      ₹{estMonthlyRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Projected Net Monthly Profit
                    </span>
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      ₹{estNetProfit.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20calculated%20a%20${roomAreaSqFt}%20sqft%20mushroom%20farm%20in%20Bikaner%20with%20net%20profit%20of%20₹${estNetProfit}.%20Please%20guide%20me%20on%20shed%20setup%20and%20spawn.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle size={16} /> Get Blueprint on WhatsApp
                  </a>
                  <button
                    onClick={() => openConsultationModal()}
                    className="w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                  >
                    Book Bikaner Farm Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Local Market Demand in Bikaner Localities */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                Direct Supply Channels Across Bikaner District
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Where your harvested mushrooms will be distributed and sold with high profit margins.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {bikanerLocalities.map((loc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs"
                >
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-1">
                    <MapPin size={14} />
                    <span>{loc.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {loc.type}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Direct Lead Capture Form for Bikaner */}
          <section className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Bikaner Project Support
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Request Bikaner Turnkey Setup & Spawn Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fill out your details to receive customized shed blueprints, humidity management guides for desert climates, and lab-tested F1 grain spawn dispatched directly to Bikaner.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Free climate-tailored project consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Express doorstep spawn delivery to all Bikaner pincodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Online & offline practical training certification</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Request Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our senior Bikaner project advisor will contact you within 24 hours. For instant assistance, message on WhatsApp:
                    </p>
                    <a
                      href="https://wa.me/919203544140"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp (9203544140)
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-3 text-xs">
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
                        placeholder="e.g. Rameshwar Lal Sharma"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9829XXXXXX"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Your Location in Bikaner District</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Rani Bazar / Gangashahar / Nokha"
                        className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Check: 4 + 5 = ?</label>
                      <input
                        type="number"
                        required
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        placeholder="Enter 9"
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
                          <Send size={14} /> Submit Bikaner Consultation Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-4 py-1">
              <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                बीकानेर मशरूम फार्मिंग से जुड़े मुख्य सवाल (FAQs)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Frequently Asked Questions for prospective growers and students in Bikaner.
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

          {/* Final Call to Action */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center shadow-2xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Start Your High-Yield Mushroom Farm in Bikaner?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t let the desert climate hold you back. Get expert setup blueprints, climate-adapted F1 spawn, and personalized cultivation guidance from <strong>Organic Mushrooms Farm</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20from%20Bikaner%20and%20want%20to%20order%20spawn%20and%20start%20mushroom%20farming."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp Bikaner Advisor (9203544140)
              </a>
              <Link
                href="/training/online"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <BookOpen size={16} /> Enroll in Training Course
              </Link>
            </div>
          </div>
        </article>
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

export const BikanerRajasthanPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <BikanerRajasthanPageInner />
    </ModalProvider>
  );
};
