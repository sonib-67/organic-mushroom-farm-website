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
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

const MangaloreKarnatakaPageInner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedTab, setSelectedTab] = useState<'climate' | 'varieties' | 'market' | 'economics'>('climate');
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();

  // Regional Calculator State
  const [roomAreaSqFt, setRoomAreaSqFt] = useState<number>(500);
  const [selectedCrop, setSelectedCrop] = useState<'milky' | 'oyster' | 'button'>('milky');

  // Lead capture state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Mangalore / Dakshina Kannada',
    cropInterest: 'Milky & Oyster Mushroom Commercial Setup',
    shedStatus: 'Have vacant room / shed / land',
    message: '',
  });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Dynamic calculations for Mangalore climate
  const bagCount = Math.round((roomAreaSqFt / 10) * 8); // 8 bags per 10 sq ft in multi-tier
  const getYieldPerMonth = () => {
    if (selectedCrop === 'milky') return Math.round(bagCount * 1.8); // kg per cycle/month
    if (selectedCrop === 'oyster') return Math.round(bagCount * 2.2);
    return Math.round(bagCount * 2.8); // Button
  };
  const getAvgPricePerKg = () => {
    if (selectedCrop === 'milky') return 240; // ₹/kg in Mangalore organic stores
    if (selectedCrop === 'oyster') return 180;
    return 220; // Button
  };
  const estMonthlyYieldKg = getYieldPerMonth();
  const estMonthlyRevenue = estMonthlyYieldKg * getAvgPricePerKg();
  const estSubstrateCost = Math.round(bagCount * 45); // Paddy straw + spawn per bag
  const estNetProfit = Math.round(estMonthlyRevenue * 0.58); // ~58% net margin in coastal regions

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
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          service: 'MANGALORE_FARM_SETUP',
          projectType: formData.cropInterest,
          message: `Mangalore Regional Inquiry: Crop=${formData.cropInterest}, ShedStatus=${formData.shedStatus}, Location=${formData.location}. Notes: ${formData.message}`,
          subject: `Mangalore Karnataka Mushroom Farm Inquiry from ${formData.name}`,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err: any) {
      setFormError(err.message || 'Could not submit inquiry. Please WhatsApp or call us directly at 9203544140.');
    } finally {
      setSubmitting(false);
    }
  };

  const localDeliveryHubs = [
    {
      region: 'Urban Mangalore City (ಕುಡ್ಲ ಮುಕ್ಯ ಜಾಗೆಲು)',
      hubs: ['Kadri', 'Hampankatta', 'Lalbagh', 'Kankanady', 'Bejai', 'Surathkal', 'Derebail', 'Bondel', 'Bunder'],
      demandProfile: 'High demand in premium organic supermarkets, star hotels, and cafes.',
    },
    {
      region: 'Educational & Coastal Twin Cities (ಕೈತಲ್ದ ಸಿಟಿಲು)',
      hubs: ['Udupi City', 'Manipal University Hub', 'Mulki', 'Bantwal', 'Moodbidri', 'Puttur'],
      demandProfile: 'Huge institutional & student youth consumption for protein-rich vegan diets.',
    },
    {
      region: 'Industrial & Outskirts Belts (ಇಂಡಸ್ಟ್ರಿಯಲ್ ಜಾಗೆಲು)',
      hubs: ['Baikampady Industrial Area', 'Ullal Coastal Belt', 'Konaje (Mangalore Univ)', 'Talapady', 'Bajpe Airport Belt'],
      demandProfile: 'Ideal low-cost land for vertical commercial mushroom sheds & bulk composting.',
    },
  ];

  const varietiesInMangalore = [
    {
      name: 'Milky Mushroom (ಕ್ಯಾಲೋಸೈಬ್ ಇಂಡಿಕಾ)',
      latin: 'Calocybe indica',
      badge: 'King of Coastal Summer',
      temp: '30°C – 38°C (High Heat Tolerant)',
      humidity: '80% – 85% RH (Natural Match)',
      cycle: '35 – 45 Days per Batch',
      margin: '₹220 – ₹280 / kg Retail',
      shelfLife: '7 – 10 Days at Room Temperature',
      whyHere:
        'Thrives naturally in Mangalore & Udupi summer months. Exceptional firm texture, high protein, and does not turn slimy in coastal humidity.',
    },
    {
      name: 'Oyster Mushroom (ಆಯಿಸ್ಟರ್ / ಚಿಪ್ಪು ಅಣಬೆ)',
      latin: 'Pleurotus spp. (Florida / Sajor-caju / Grey)',
      badge: 'Fastest Cashflow Cycle',
      temp: '22°C – 28°C (Monsoon & Winter)',
      humidity: '85% – 90% RH (Zero Humidifier Stress)',
      cycle: '20 – 25 Days to First Flush',
      margin: '₹160 – ₹220 / kg Wholesale & Retail',
      shelfLife: '3 – 5 Days Fresh (Can be Sun-Dried)',
      whyHere:
        'Coastal monsoons provide 90%+ natural humidity, drastically lowering electricity bills. High biological efficiency (80%–100%) on local paddy straw.',
    },
    {
      name: 'White Button Mushroom (ಬಟನ್ ಅಣಬೆ)',
      latin: 'Agaricus bisporus',
      badge: 'Highest Supermarket Volume',
      temp: '14°C – 18°C (PUF AC Insulated Shed)',
      humidity: '85% – 90% RH',
      cycle: '60 – 75 Days Multi-Flush',
      margin: '₹180 – ₹250 / kg High Volume B2B',
      shelfLife: '5 – 7 Days Cold Chain',
      whyHere:
        'Massive recurring purchase orders from luxury beach resorts, culinary hotels, and supermarket chains in Mangalore, Manipal, and Goa transit.',
    },
    {
      name: 'Exotic & Medicinal (Lion’s Mane / Shiitake / Reishi)',
      latin: 'Hericium / Lentinula / Ganoderma',
      badge: 'Ultra-Premium Wellness',
      temp: '18°C – 24°C (Controlled Cleanroom)',
      humidity: '85% – 95% RH',
      cycle: '60 – 90 Days Enriched Sawdust',
      margin: '₹1,500 – ₹3,500 / kg (Fresh & Dry Extract)',
      shelfLife: 'High Value Wellness Segment',
      whyHere:
        'Growing wellness, naturopathy, and health-conscious consumer base across coastal Karnataka seeking cognitive and immune health supplements.',
    },
  ];

  const whyMangalorePillars = [
    {
      icon: Droplets,
      title: '1. The Coastal Humidity Advantage',
      tuluTitle: 'ಕರಾವಳಿ ಹವಾಮಾನದ ಲಾಭ',
      desc: 'Coastal Karnataka experiences naturally high relative humidity (75%–90%) throughout most of the year. For mushroom cultivation, this natural moisture cuts humidifier power consumption by up to 60%, drastically slashing your monthly operational electricity bills.',
    },
    {
      icon: Sprout,
      title: '2. Abundant & Cheap Rice Straw Substrate',
      tuluTitle: 'ಕಮ್ಮಿ ಬೆಲೆಗ್ ತಿಕ್ಕುನ ಬತ್ತದ ಬೈ ಹುಲ್ಲು',
      desc: 'Dakshina Kannada, Udupi, and neighboring Shimoga agricultural belts produce massive quantities of fresh paddy straw. This raw material is readily available at nominal farm-gate prices, keeping production costs below ₹35–₹45 per bag.',
    },
    {
      icon: Store,
      title: '3. Booming B2B Hospitality & Student Market',
      tuluTitle: 'ಹೋಟೆಲ್‌ಲು ಬೊಕ್ಕ ಕಾಲೇಜ್ ಹಾಸ್ಟೆಲ್ ಬೇಡಿಕೆ',
      desc: 'With hundreds of luxury coastal beach resorts, multi-cuisine seafood restaurants, educational institutions in Manipal and Mangalore, and expanding organic grocery stores, regional fresh mushroom demand continuously outpaces local farm supply.',
    },
    {
      icon: Truck,
      title: '4. Prime Strategic Logistics Gateway',
      tuluTitle: 'ಬೆಂಗಳೂರು, ಗೋವಾ, ಕೇರಳಗ್ ಸುಲಭ ಸಾಗಾಟ',
      desc: 'Mangalore’s national highway (NH-66, NH-75) and Konkan railway corridors allow commercial growers to dispatch fresh mushrooms to Bangalore, Goa, Calicut, and Kannur in under 4 to 8 hours without cold chain spoilage.',
    },
    {
      icon: Layers,
      title: '5. High ROI on Minimal Land Footprint',
      tuluTitle: 'ಕಮ್ಮಿ ಜಾಗೆಡ್ ಮಲ್ಲ ಮಟ್ಟದ ಆದಾಯ',
      desc: 'Commercial mushroom farming is an indoor vertical farming system. A compact 500 to 1,000 sq ft shed with 4 to 5-tier racking accommodates 1,200 to 2,500 bags, yielding over 1,000 to 2,000 kg of fresh crop every month.',
    },
    {
      icon: DollarSign,
      title: '6. Karnataka Horticulture & NHB Subsidies',
      tuluTitle: 'ಕರ್ನಾಟಕ ತೋಟಗಾರಿಕೆ ಇಲಾಖೆ ಸಬ್ಸಿಡಿ',
      desc: 'Entrepreneurs setting up commercial mushroom units in Karnataka can avail 25% to 35% credit-linked capital investment subsidies under National Horticulture Board (NHB) and State Mission for Integrated Development of Horticulture (MIDH).',
    },
  ];

  const faqs = [
    {
      q: 'Why is Mangalore / Coastal Karnataka ideal for commercial mushroom farming?',
      a: 'Mangalore offers two major natural advantages: naturally high relative humidity (cutting humidification electricity costs) and low-cost abundance of paddy straw substrate from coastal & Malnad agricultural belts. Furthermore, the high density of luxury resorts, organic supermarkets, and student towns like Manipal creates an insatiable local B2B demand for fresh mushrooms.',
    },
    {
      q: 'Which mushroom variety is most profitable to grow in Mangalore during the hot summer?',
      a: 'Milky Mushroom (Calocybe indica) is the undisputed champion for Mangalore summers. It thrives in high temperatures between 30°C and 38°C, produces thick, meaty caps, and boasts an incredible room-temperature shelf life of 7 to 10 days, eliminating cold storage stress.',
    },
    {
      q: 'ಕುಡ್ಲಡ್ ಮಶ್ರೂಮ್ ಫಾರ್ಮ್ ಸುರು ಮಲ್ಪೆರೆ ನಮಕ್ ದಾದ ಮಾತಾ ಸೌಲಭ್ಯ ಬೋಡು? (What is needed to start a farm in Mangalore?)',
      a: 'ಕ್ಲೀನ್ ಆಯಿನ ಒಂಜಿ ರೂಮ್ ಅತ್ತಂಡ ಶೆಡ್ (500–1000 ಚದರ ಅಡಿ), ಹೈ-ಕ್ವಾಲಿಟಿ F1 ಸ್ಪಾನ್ (ಬೀಜ), ಬತ್ತದ ಬೈ (Paddy straw), ಹ್ಯುಮಿಡಿಟಿ ಕಂಟ್ರೋಲ್, ಬೊಕ್ಕ ಸರಿಯಾಯಿನ ಗಾಳಿ ಬರ್ಪುನ ಸಿಸ್ಟಮ್ ಬೋಡು. Organic Mushrooms Farm ಕಡೆಯಿಂದ ಸಂಪೂರ್ಣ ಕೃಷಿ ಟ್ರೈನಿಂಗ್ ಮತ್ತು ಟರ್ನ್‌ಕೀ ಸೆಟಪ್ ಸಪೋರ್ಟ್ ಒದಗಿಸಲಾಗುತ್ತದೆ.',
    },
    {
      q: 'How do I get high-yield mushroom spawn (seeds) delivered to Mangalore or Udupi?',
      a: 'We ship 100% pure F1 lab-tested grain spawn directly to Mangalore, Surathkal, Udupi, Bantwal, and Puttur via express courier and temperature-guarded transit. Dispatch is handled from Monday to Thursday to ensure spawn arrives active and unheated within 2 to 3 days.',
    },
    {
      q: 'What government subsidies are available for mushroom farming in Karnataka?',
      a: 'Under the National Horticulture Board (NHB) and Karnataka State Horticulture Department (MIDH), commercial growers can access 25% to 35% credit-linked back-ended capital subsidies for insulated cropping rooms, compost pasteurization units, and spawn laboratories.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services/turnkey-setup" className="hover:text-emerald-500 transition-colors">
              Turnkey Setup
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Mangalore, Karnataka Hub</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <MapPin size={14} /> Regional Agri-Business Guide • Coastal Karnataka
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-5xl mx-auto leading-tight">
              Mushroom Farming in <br />
              <span className="gradient-text font-black">Mangalore, Karnataka</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400 max-w-3xl mx-auto mb-3">
              ಮಂಗಳೂರಿನಲ್ಲಿ ವಾಣಿಜ್ಯ ಅಣಬೆ ಕೃಷಿ: ಫಾರ್ಮ್ ಸೆಟಪ್, F1 ಸ್ಪಾನ್ ಸಪ್ಲೈ & ಸಂಪೂರ್ಣ ತರಬೇತಿ
            </p>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              Why coastal Karnataka is rapidly emerging as South India&apos;s most profitable hub for organic mushroom cultivation. Leverage natural 85%+ humidity, cheap paddy straw, and booming coastal resort demand.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#mangalore-calculator"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-emerald-600/25"
              >
                <Calculator size={16} /> Mangalore Farm Profit Calculator <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20am%20from%20Mangalore/Karnataka%20and%20interested%20in%20commercial%20mushroom%20farm%20setup%20and%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp Regional Advisor
              </a>
              <a
                href="#enquiry-form"
                className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
              >
                <Building2 size={16} /> Request Setup Quote
              </a>
            </div>
          </motion.div>
        </section>

        {/* Quick Highlights Strip */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 block mb-0.5">
                85%–90%
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Natural Coastal RH</span>
              <span className="text-[10px] text-slate-400">Saves 60% Humidifier Power</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 block mb-0.5">
                ₹180–₹280
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Per Kg Market Rate</span>
              <span className="text-[10px] text-slate-400">Premium Coastal B2B Margins</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 block mb-0.5">
                30°C–38°C
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Milky Mushroom Climate</span>
              <span className="text-[10px] text-slate-400">Peak Summer High-Yield Variety</span>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center shadow-xs">
              <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 block mb-0.5">
                25%–35%
              </span>
              <span className="text-xs font-bold dark:text-white text-slate-800 block">Karnataka NHB Subsidy</span>
              <span className="text-[10px] text-slate-400">Capital Support for Commercial Sheds</span>
            </div>
          </div>
        </section>

        {/* Deep Regional Context Article */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 tracking-tight m-0">
                  Why Mangalore (Kudla) is the Next Agri-Business Goldmine
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-0">
                  Dakshina Kannada & Udupi: The strategic confluence of geography, hospitality, and climate.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                Mangalore (Mangaluru) is widely renowned for its pristine Arabian Sea coastline, thriving educational hubs, port commerce, and legendary culinary culture. However, beneath the bustling coastal trade, a high-value agricultural transformation is taking root across Dakshina Kannada.
              </p>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                With shrinking traditional agricultural land, rising urbanization, and an explosive shift toward healthy, protein-dense vegetarian and vegan diets, mushroom farming in Mangalore has emerged as one of the most scalable, high-margin agri-business opportunities in Karnataka.
              </p>

              {/* Tulu / Kannada Linguistic Accent Box */}
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm space-y-2">
                <div className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <Award size={16} /> ಕುಡ್ಲದ ಮಶ್ರೂಮ್ ಬಿಸಿನೆಸ್: ಕರಾವಳಿ ಕೃಷಿಕರಿಗೆ ಚಿನ್ನದ ಅವಕಾಶ
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  ಮಂಗಳೂರಿನ ಹವಾಮಾನವು (Mangalore&apos;s climate) ಆಯಿಸ್ಟರ್ ಮತ್ತು ಮಿಲ್ಕಿ ಮಶ್ರೂಮ್ ಕೃಷಿಗೆ ಅತ್ಯಂತ ಸೂಕ್ತವಾಗಿದೆ. ನೈಸರ್ಗಿಕ ತೇವಾಂಶ (Natural humidity) ಹೆಚ್ಚಿರುವುದರಿಂದ ವಿದ್ಯುತ್ ಖರ್ಚು ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಕದ್ರಿ, ಹಂಪನಕಟ್ಟೆ, ಲಾಲ್‌ಬಾಗ್, ಸುರತ್ಕಲ್ ಮತ್ತು ಮಣಿಪಾಲದ ಸಾವಯವ ಅಂಗಡಿಗಳು ಹಾಗೂ ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಲ್ಲಿ ನಿರಂತರ ಬೇಡಿಕೆ ಇದೆ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Regional Advantages */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <TrendingUp size={12} /> Regional Competitive Advantages
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              6 Reasons to Start Mushroom Farming in <span className="gradient-text font-black">Mangalore</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              Geographic, climatic, and commercial benefits unique to coastal Karnataka and the Dakshina Kannada district.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMangalorePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 md:p-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <pillar.icon size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                    {pillar.tuluTitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span>High Local Profit Potential</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suitable Commercial Varieties in Coastal Climate */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Sprout size={12} /> Variety Selection Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Which Mushroom Varieties <span className="gradient-text font-black">Thrive in Coastal Karnataka?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              Match your infrastructure budget to the natural climate cycle of Mangalore and Udupi for 365-day harvesting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {varietiesInMangalore.map((v, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {v.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{v.margin}</span>
                  </div>

                  <h3 className="text-xl font-black dark:text-white text-slate-900 mb-0.5">{v.name}</h3>
                  <span className="text-xs italic text-slate-400 block mb-4">{v.latin}</span>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {v.whyHere}
                  </p>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200 dark:border-white/10 text-xs">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Ideal Temperature</span>
                      <span className="font-semibold dark:text-white text-slate-900">{v.temp}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Relative Humidity</span>
                      <span className="font-semibold dark:text-white text-slate-900">{v.humidity}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Harvest Cycle</span>
                      <span className="font-semibold dark:text-white text-slate-900">{v.cycle}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold block">Shelf Life Stability</span>
                      <span className="font-semibold dark:text-white text-slate-900">{v.shelfLife}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={
                      v.name.includes('Milky')
                        ? '/services/milky-mushroom'
                        : v.name.includes('Oyster')
                        ? '/services/oyster-mushroom'
                        : v.name.includes('Button')
                        ? '/services/button-mushroom'
                        : '/spawn-seeds'
                    }
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    View Commercial Growing Guide <ArrowRight size={13} />
                  </Link>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20${encodeURIComponent(
                      v.name
                    )}%20spawn%20for%20Mangalore.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    <MessageCircle size={13} /> Order Spawn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Mangalore Farm Profitability Calculator */}
        <section id="mangalore-calculator" className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Calculator size={13} /> Economics & ROI Modeler
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Mangalore Mushroom Farm <span className="gradient-text font-black">Profit Calculator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Estimate your monthly bag capacity, fresh crop yield, recurring revenues, and net profits based on local Mangalore retail rates.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Select Target Crop for Mangalore:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'milky', label: 'Milky (Summer)' },
                      { id: 'oyster', label: 'Oyster (Fast)' },
                      { id: 'button', label: 'Button (AC Room)' },
                    ].map((crop) => (
                      <button
                        key={crop.id}
                        type="button"
                        onClick={() => setSelectedCrop(crop.id as any)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                          selectedCrop === crop.id
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100'
                        }`}
                      >
                        {crop.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    <span>Growing Shed Area (Sq. Ft.):</span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm font-black">
                      {roomAreaSqFt} Sq. Ft.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="3000"
                    step="50"
                    value={roomAreaSqFt}
                    onChange={(e) => setRoomAreaSqFt(parseInt(e.target.value, 10))}
                    className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>150 Sq. Ft. (Small Room)</span>
                    <span>1,000 Sq. Ft. (Commercial)</span>
                    <span>3,000 Sq. Ft. (Industrial)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span>Multi-Tier Bag Capacity:</span>
                    <strong className="dark:text-white text-slate-900">{bagCount} Bags (10kg each)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Local Market Rate in Mangalore:</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">
                      ₹{getAvgPricePerKg()} / kg avg
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Paddy Straw & Spawn Cost per Bag:</span>
                    <strong className="dark:text-white text-slate-900">~₹45 / bag</strong>
                  </div>
                </div>
              </div>

              {/* Output Card */}
              <div className="lg:col-span-6 bg-white dark:bg-slate-850 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  Estimated Coastal Economics
                </span>
                <h3 className="text-xl font-black dark:text-white text-slate-900 mb-6">
                  {roomAreaSqFt} Sq. Ft. {selectedCrop.toUpperCase()} Farm Projection
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Estimated Monthly Harvest Yield
                    </span>
                    <span className="text-base font-black text-emerald-600 dark:text-emerald-400">
                      {estMonthlyYieldKg.toLocaleString()} kg / mo
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Estimated Gross Revenue (Monthly)
                    </span>
                    <span className="text-base font-black dark:text-white text-slate-900">
                      ₹{estMonthlyRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Estimated Net Monthly Profit (~58%)
                    </span>
                    <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                      ₹{estNetProfit.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20calculated%20a%20${roomAreaSqFt}%20sqft%20${selectedCrop}%20farm%20in%20Mangalore%20with%20net%20profit%20of%20₹${estNetProfit}.%20Please%20guide%20me%20on%20setup.`}
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
                    Book Commercial Site Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Delivery & Target Hubs */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Truck size={12} /> Local Distribution Network
            </div>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Target Supply & Delivery Hubs in <span className="gradient-text font-black">Dakshina Kannada & Udupi</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              We provide pure F1 spawn supply and turnkey setup consulting across all urban, educational, and rural belts of coastal Karnataka.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {localDeliveryHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-3">
                  <MapPin size={16} />
                  <span>{hub.region}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {hub.hubs.map((h, hi) => (
                    <span
                      key={hi}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-3">
                  <strong>Market Dynamics:</strong> {hub.demandProfile}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Capture / Consultation Form */}
        <section id="enquiry-form" className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Start Your Mushroom Farm in <span className="gradient-text font-black">Mangalore</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Get turnkey shed design, F1 grain spawn supply, and expert hands-on training tailored for Dakshina Kannada.
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
                  ಧನ್ಯವಾದಗಳು! Request Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed max-w-md mx-auto">
                  Our Karnataka regional agri-consultant will contact you via WhatsApp / Call with farm layout blueprints, spawn prices, and training details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl relative"
              >
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-xs font-medium flex items-start gap-2">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{formError}</p>
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
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Prashanth Shetty"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Location / Town *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Kadri, Mangalore / Udupi / Bantwal"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Primary Crop Interest
                      </label>
                      <select
                        name="cropInterest"
                        value={formData.cropInterest}
                        onChange={(e) => setFormData({ ...formData, cropInterest: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      >
                        <option value="Milky & Oyster Mushroom Commercial Setup">
                          Milky & Oyster Mushroom Commercial Setup
                        </option>
                        <option value="White Button Mushroom (AC Insulated Shed)">
                          White Button Mushroom (AC Insulated Shed)
                        </option>
                        <option value="F1 Mushroom Spawn Bulk Supply Only">
                          F1 Mushroom Spawn Bulk Supply Only
                        </option>
                        <option value="Hands-on Cultivation Training Course">
                          Hands-on Cultivation Training Course
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Project Notes / Available Space
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. I have a 600 sq ft shed in Moodbidri and want to start with Milky & Oyster mushrooms. Need spawn and guidance on humidity setup."
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Anti-spam math captcha */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                        Security Verification: What is 4 + 5 = ? *
                      </span>
                      <span className="text-[10px] text-slate-500">Anti-spam check for human inquiries.</span>
                    </div>
                    <input
                      type="number"
                      required
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="Answer"
                      className="w-24 bg-white dark:bg-slate-850 border border-slate-300 dark:border-white/10 rounded-lg px-3 py-2 text-xs font-bold dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-[0.99] disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting Your Mangalore Project Details...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Request Mangalore Farm Blueprints & Consultation
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <HelpCircle size={12} /> Regional Clarifications
            </div>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Frequently Asked <span className="gradient-text font-black">Questions (FAQ)</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-xs sm:text-sm flex items-center justify-between gap-4 dark:text-white text-slate-900 hover:bg-slate-50 dark:hover:bg-white/[0.02]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-emerald-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Final Direct Contact CTA */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 uppercase tracking-tight">
                Ready to Build a High-Yield Mushroom Farm in Mangalore?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto mb-8 font-medium">
                Don&apos;t leave your agribusiness to trial and error. Connect with Organic Mushrooms Farm for turnkey shed blueprints, pure F1 spawn supply, and end-to-end commercial cultivation mentoring.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20start%20mushroom%20farming%20in%20Mangalore,%20Karnataka."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-white text-emerald-800 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-slate-100 transition-all shadow-lg hover:scale-105"
                >
                  <MessageCircle size={16} /> WhatsApp: +91 9203544140
                </a>
                <a
                  href="tel:9203544140"
                  className="px-8 py-3.5 rounded-full bg-emerald-950/40 hover:bg-emerald-950/60 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 border border-white/20 transition-all"
                >
                  <Phone size={16} /> Call Direct Line
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Interactive Chat & Sticky UI */}
      <AIChatWidget />
      <StickyTrainingButton />
      <StickyWhatsAppButton />
      <MobileBottomStickyBar />
      <HomeModals />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const MangaloreKarnatakaPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <MangaloreKarnatakaPageInner />
    </ModalProvider>
  );
};
