'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Map,
  MapPin,
  Building2,
  Sprout,
  CheckCircle2,
  Phone,
  MessageCircle,
  Search,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Thermometer,
  CloudRain,
  Sun,
  Layers,
  Send,
  Loader2,
  Award,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider, useAppModals } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

interface CityItem {
  city: string;
  state: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central' | 'Northeast';
  bestVarieties: string[];
  climateNote: string;
  routeUrl?: string;
  featured?: boolean;
}

const allCitiesData: CityItem[] = [
  // Rajasthan
  {
    city: 'Bikaner',
    state: 'Rajasthan',
    region: 'North',
    bestVarieties: ['Milky Mushroom', 'Button (Winter)', 'Oyster'],
    climateNote: 'Dry desert heat in summer (ideal for Milky), cold winter for Button.',
    routeUrl: '/cities/rajasthan/bikaner',
    featured: true,
  },
  {
    city: 'Jaipur',
    state: 'Rajasthan',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Milky Mushroom', 'Oyster'],
    climateNote: 'High hotel & restaurant B2B demand across Pink City.',
    routeUrl: '/cities/rajasthan/jaipur',
    featured: true,
  },
  {
    city: 'Udaipur',
    state: 'Rajasthan',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Booming luxury resort and hospitality market.',
    routeUrl: '/cities/rajasthan/udaipur',
    featured: true,
  },
  // Kerala
  {
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    region: 'South',
    bestVarieties: ['Oyster (Dhingri)', 'Milky Mushroom'],
    climateNote: 'Tropical humidity reduces fogger misting electricity by 60%.',
    routeUrl: '/cities/kerala/thiruvananthapuram',
    featured: true,
  },
  {
    city: 'Kochi',
    state: 'Kerala',
    region: 'South',
    bestVarieties: ['Oyster Mushroom', 'Milky Mushroom'],
    climateNote: 'High coastal moisture + premium export & supermarket demand.',
    routeUrl: '/cities/kerala/kochi',
  },
  // Karnataka
  {
    city: 'Mangalore',
    state: 'Karnataka',
    region: 'South',
    bestVarieties: ['Oyster Mushroom', 'Milky Mushroom'],
    climateNote: 'Rich paddy straw supply + year-round natural humidity.',
    routeUrl: '/cities/karnataka/mangalore',
    featured: true,
  },
  {
    city: 'Bangalore (Bengaluru)',
    state: 'Karnataka',
    region: 'South',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Portobello'],
    climateNote: 'Moderate climate + massive metro gourmet grocery consumption.',
    routeUrl: '/cities/karnataka/bangalore',
    featured: true,
  },
  {
    city: 'Mysuru (Mysore)',
    state: 'Karnataka',
    region: 'South',
    bestVarieties: ['Oyster Mushroom', 'Button (Winter)', 'Milky'],
    climateNote: 'Strong agricultural ecosystem and university research backing.',
    routeUrl: '/cities/karnataka/mysuru',
  },
  // West Bengal
  {
    city: 'Siliguri',
    state: 'West Bengal',
    region: 'East',
    bestVarieties: ['Button Mushroom', 'Oyster (Dhingri)'],
    climateNote: 'Sub-Himalayan foothill chill makes seasonal Button production ultra-low cost.',
    routeUrl: '/cities/west-bengal/siliguri',
    featured: true,
  },
  {
    city: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    bestVarieties: ['Oyster Mushroom', 'Paddy Straw Mushroom', 'Milky'],
    climateNote: 'Huge vegetable mandi turnover & abundant cheap paddy straw.',
    routeUrl: '/cities/west-bengal/kolkata',
  },
  // Maharashtra
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Shiitake'],
    climateNote: 'Highest wholesale mandi pricing in India with premium B2B chains.',
    routeUrl: '/cities/maharashtra/mumbai',
    featured: true,
  },
  {
    city: 'Pune',
    state: 'Maharashtra',
    region: 'West',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Excellent climate with modern agri-tech logistics corridor.',
    routeUrl: '/cities/maharashtra/pune',
  },
  {
    city: 'Nashik',
    state: 'Maharashtra',
    region: 'West',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Agri-capital of Maharashtra with well-developed cold storage chains.',
    routeUrl: '/cities/maharashtra/nashik',
  },
  {
    city: 'Nagpur',
    state: 'Maharashtra',
    region: 'West',
    bestVarieties: ['Milky Mushroom', 'Oyster', 'Button (Winter)'],
    climateNote: 'Central India logistics hub with excellent railway connectivity.',
    routeUrl: '/cities/maharashtra/nagpur',
  },
  {
    city: 'Aurangabad (Chhatrapati Sambhajinagar)',
    state: 'Maharashtra',
    region: 'West',
    bestVarieties: ['Oyster Mushroom', 'Milky Mushroom'],
    climateNote: 'Expanding industrial market with strong local food processing units.',
    routeUrl: '/cities/maharashtra/aurangabad',
  },
  // Delhi NCR & Haryana
  {
    city: 'New Delhi (NCR)',
    state: 'Delhi NCR',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Azadpur Mandi provides unlimited wholesale buying capacity.',
    routeUrl: '/cities/delhi/new-delhi',
    featured: true,
  },
  {
    city: 'Gurugram (Gurgaon)',
    state: 'Haryana',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Organic Exotic'],
    climateNote: 'Premium direct-to-consumer & luxury retail demand.',
    routeUrl: '/cities/haryana/gurugram',
  },
  {
    city: 'Faridabad',
    state: 'Haryana',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Close proximity to both Haryana farm belts and Delhi NCR markets.',
    routeUrl: '/cities/haryana/faridabad',
  },
  // Uttar Pradesh
  {
    city: 'Noida / Greater Noida',
    state: 'Uttar Pradesh',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Urban vertical indoor setups serving Western UP & Delhi.',
    routeUrl: '/cities/uttar-pradesh/noida',
  },
  {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Milky Mushroom', 'Oyster'],
    climateNote: 'Abundant wheat straw + high winter button consumption.',
    routeUrl: '/cities/uttar-pradesh/lucknow',
    featured: true,
  },
  {
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Major industrial consumer base with low substrate raw material cost.',
    routeUrl: '/cities/uttar-pradesh/kanpur',
  },
  {
    city: 'Agra',
    state: 'Uttar Pradesh',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Large tourism, restaurant, and catering consumption.',
    routeUrl: '/cities/uttar-pradesh/agra',
  },
  // Gujarat
  {
    city: 'Ahmedabad',
    state: 'Gujarat',
    region: 'West',
    bestVarieties: ['Milky Mushroom', 'Oyster', 'Button (Winter)'],
    climateNote: 'Rapidly rising vegetarian protein consumption and food processing.',
    routeUrl: '/cities/gujarat/ahmedabad',
    featured: true,
  },
  {
    city: 'Surat',
    state: 'Gujarat',
    region: 'West',
    bestVarieties: ['Milky Mushroom', 'Oyster Mushroom'],
    climateNote: 'High purchasing power and active culinary food markets.',
    routeUrl: '/cities/gujarat/surat',
  },
  {
    city: 'Rajkot',
    state: 'Gujarat',
    region: 'West',
    bestVarieties: ['Milky Mushroom', 'Oyster Mushroom'],
    climateNote: 'Saurashtra agricultural hub with great farmer entrepreneurship.',
    routeUrl: '/cities/gujarat/rajkot',
  },
  // Madhya Pradesh
  {
    city: 'Indore',
    state: 'Madhya Pradesh',
    region: 'Central',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Food capital of MP with huge street food and restaurant turnover.',
    routeUrl: '/cities/madhya-pradesh/indore',
    featured: true,
  },
  {
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    region: 'Central',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Central government horticulture schemes & subsidy access.',
    routeUrl: '/cities/madhya-pradesh/bhopal',
  },
  {
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    region: 'Central',
    bestVarieties: ['Oyster Mushroom', 'Button Mushroom'],
    climateNote: 'Jawaharlal Nehru Krishi Vishwavidyalaya agriculture research belt.',
    routeUrl: '/cities/madhya-pradesh/jabalpur',
  },
  {
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    region: 'Central',
    bestVarieties: ['Button Mushroom', 'Milky Mushroom'],
    climateNote: 'Low raw material cost for wheat straw and farm labor.',
    routeUrl: '/cities/madhya-pradesh/gwalior',
  },
  // Tamil Nadu & Andhra / Telangana
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    region: 'South',
    bestVarieties: ['Milky Mushroom', 'Oyster (Dhingri)'],
    climateNote: 'Warm coastal weather allows uninterrupted 12-month Milky yields.',
    routeUrl: '/cities/tamil-nadu/chennai',
    featured: true,
  },
  {
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    region: 'South',
    bestVarieties: ['Milky Mushroom', 'Oyster', 'Button (Foothills)'],
    climateNote: 'Near Nilgiri hills with high mushroom growing tradition and TNAU support.',
    routeUrl: '/cities/tamil-nadu/coimbatore',
  },
  {
    city: 'Tiruchirappalli (Trichy)',
    state: 'Tamil Nadu',
    region: 'South',
    bestVarieties: ['Milky Mushroom', 'Oyster Mushroom'],
    climateNote: 'Paddy straw abundance from Cauvery delta belt.',
    routeUrl: '/cities/tamil-nadu/tiruchirappalli',
  },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    region: 'South',
    bestVarieties: ['Button Mushroom', 'Milky', 'Oyster'],
    climateNote: 'Massive IT corridor demand for fresh organic button mushrooms.',
    routeUrl: '/cities/telangana/hyderabad',
    featured: true,
  },
  {
    city: 'Visakhapatnam (Vizag)',
    state: 'Andhra Pradesh',
    region: 'South',
    bestVarieties: ['Oyster Mushroom', 'Milky Mushroom'],
    climateNote: 'Coastal humidity makes Oyster bag cultivation very cost-efficient.',
    routeUrl: '/cities/andhra-pradesh/visakhapatnam',
  },
  {
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    region: 'South',
    bestVarieties: ['Oyster Mushroom', 'Milky Mushroom'],
    climateNote: 'Krishna delta agricultural hub with high local market demand.',
    routeUrl: '/cities/andhra-pradesh/vijayawada',
  },
  // Bihar, Jharkhand, Odisha, Assam
  {
    city: 'Patna',
    state: 'Bihar',
    region: 'East',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Bihar is India’s top mushroom producing state with huge state subsidies.',
    routeUrl: '/cities/bihar/patna',
    featured: true,
  },
  {
    city: 'Ranchi',
    state: 'Jharkhand',
    region: 'East',
    bestVarieties: ['Button Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Pleasant plateau climate supports multi-crop rotation.',
    routeUrl: '/cities/jharkhand/ranchi',
  },
  {
    city: 'Bhubaneswar',
    state: 'Odisha',
    region: 'East',
    bestVarieties: ['Paddy Straw Mushroom', 'Oyster', 'Milky'],
    climateNote: 'Odisha has the highest per capita consumption of Paddy Straw mushroom in India.',
    routeUrl: '/cities/odisha/bhubaneswar',
  },
  {
    city: 'Guwahati',
    state: 'Assam',
    region: 'Northeast',
    bestVarieties: ['Oyster Mushroom', 'Button (Winter)', 'Shiitake'],
    climateNote: 'Northeast gateway with rich organic agro-climate and high market prices.',
    routeUrl: '/cities/assam/guwahati',
  },
  {
    city: 'Raipur',
    state: 'Chhattisgarh',
    region: 'Central',
    bestVarieties: ['Oyster Mushroom', 'Milky Mushroom'],
    climateNote: 'Abundant paddy straw (Rice bowl of India) creates near-zero substrate cost.',
    routeUrl: '/cities/chhattisgarh/raipur',
  },
  {
    city: 'Chandigarh',
    state: 'Punjab / Haryana',
    region: 'North',
    bestVarieties: ['Button Mushroom', 'Oyster Mushroom'],
    climateNote: 'Premium institutional demand and proximity to Solan DMR research center.',
    routeUrl: '/cities/chandigarh',
  },
];

const regionalGuides = [
  {
    title: 'Hot & Dry Regions (West & North-West)',
    states: 'Rajasthan, Gujarat, Western MP, Northern Karnataka',
    icon: <Sun className="text-amber-500" size={24} />,
    bestVarieties: 'Milky Mushroom (Calocybe indica) & Seasonal Button in Winter',
    details:
      'Summer temperatures in these regions regularly touch 38°C to 44°C. While Button mushrooms require heavy AC chilling in summers, Milky mushrooms naturally thrive up to 35°C–38°C. In winter months (Nov to Feb), the natural temperature drops to 14°C–22°C, providing an ideal low-cost window for White Button cultivation.',
  },
  {
    title: 'Humid & Coastal Zones (South & Coastal Belts)',
    states: 'Kerala, Coastal Karnataka, Maharashtra, Tamil Nadu, Andhra, Odisha',
    icon: <CloudRain className="text-blue-500" size={24} />,
    bestVarieties: 'Oyster Mushroom (Pleurotus spp.) & Milky Mushroom',
    details:
      'High natural relative humidity (70%–85%) dramatically reduces electrical misting and fogger runtime. Oyster mushroom bags produce dense flushes within 18–22 days on locally available paddy straw and coconut coir with minimal capital investment.',
  },
  {
    title: 'Cool Foothills & Sub-Himalayan Belts',
    states: 'Siliguri/WB, Uttarakhand, Himachal, Assam, Northeast',
    icon: <Thermometer className="text-cyan-500" size={24} />,
    bestVarieties: 'White Button Mushroom (Agaricus bisporus) & Shiitake',
    details:
      'Lower ambient temperatures make composting and cold-shock pinhead triggering effortless. Farmers in these belts save up to ₹40,000 per month on refrigeration electricity, making seasonal White Button production highly lucrative.',
  },
  {
    title: 'Indo-Gangetic Fertile Plains (North & Central)',
    states: 'Uttar Pradesh, Bihar, Punjab, Haryana, Delhi NCR',
    icon: <Layers className="text-emerald-500" size={24} />,
    bestVarieties: 'Seasonal Rotational (Oyster/Milky in Monsoon, Button in Winter)',
    details:
      'Abundant availability of cheap wheat and paddy straw from local wheat-rice crop cycles. Proximity to massive wholesale mandis (Azadpur, Sahibabad, Patna) allows farmers to liquidate 200kg to 2,000kg of fresh harvest daily.',
  },
];

const faqs = [
  {
    q: 'क्या मेरे शहर या गांव में मशरूम की खेती की जा सकती है?',
    a: 'जी हां! मशरूम की खेती इनडोर (कमरे या शेड के अंदर) की जाती है। भारत के हर शहर में मौसम के अनुसार सही किस्म (गर्मियों में मिल्की, बरसात/तटीय में ढींगरी/ऑयस्टर और सर्दियों में व्हाइट बटन) चुनकर या इंसुलेटेड ऑटोमेटेड फार्म बनाकर 12 महीने सफल उत्पादन किया जा सकता है।',
  },
  {
    q: 'शहरी क्षेत्रों (Urban Cities) में जगह की कमी होने पर कैसे शुरू करें?',
    a: 'मशरूम की खेती वर्टिकल (रैक्स पर बहुमंजिला) होती है। केवल 1000 वर्ग फीट के बेसमेंट, खाली कमरे या छत पर बने शेड में 5 मंजिला लोहे/बांस के रैक लगाकर 4000 से 5000 बैग रखे जा सकते हैं, जिससे शहर के भीतर ही रोजाना ताजा हार्वेस्टिंग मिलती है।',
  },
  {
    q: 'क्या मुझे अपने शहर में स्पॉन (बीज) और ट्रेनिंग की सुविधा मिलेगी?',
    a: 'ऑर्गेनिक मशरूम्स फार्म पूरे भारत में सभी पिनकोड्स पर प्रीमियम लैब-सर्टिफाइड F1 मास्टर कल्चर स्पॉन की फास्ट कूरियर व ट्रांसपोर्ट डिलीवरी करता है। साथ ही, हमारे ऑनलाइन व ऑफलाइन प्रैक्टिकल प्रोग्राम के जरिए आप अपने शहर से ही एक्सपर्ट बन सकते हैं।',
  },
  {
    q: 'विभिन्न राज्यों में सब्सिडी और सरकारी बैंक लोन की क्या स्थिति है?',
    a: 'राष्ट्रीय बागवानी मिशन (NHM / MIDH), नाबार्ड (NABARD) और राज्य कृषि विभागों द्वारा मशरूम फार्म शेड व कम्पोस्ट यूनिट पर 40% से 50% तक की सब्सिडी दी जाती है। हमारी टीम बैंक अप्रूवल के लिए अनिवार्य DPR (विस्तृत प्रोजेक्ट रिपोर्ट) तैयार करके देती है।',
  },
  {
    q: 'उत्तर भारत और दक्षिण भारत के सबस्ट्रेट (भूसा) में क्या अंतर है?',
    a: 'उत्तर और पश्चिम भारत में गेहूं का भूसा (Wheat Straw) और सरसों की डंडी आसानी से मिलती है, जबकि पूर्व और दक्षिण भारत में धान का पुआल (Paddy/Rice Straw) और गन्ने की खोई (Bagasse) मुख्य रूप से उपयोग की जाती है। दोनों ही सबस्ट्रेट सही स्टरलाइजेशन के बाद 100% सफल उत्पादन देते हैं।',
  },
];

const CitiesIndiaPageInner: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openConsultationModal } = useAppModals();

  // Consultation Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cityState: '',
    variety: 'Button & Oyster Combo',
    farmType: 'Commercial Farm Setup',
    message: '',
  });
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const filteredCities = useMemo(() => {
    return allCitiesData.filter((item) => {
      const matchesSearch =
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bestVarieties.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(securityAnswer, 10) !== 15) {
      setFormError('Please solve the security calculation: 9 + 6 = 15');
      return;
    }

    if (!formData.name || !formData.phone) {
      setFormError('Please provide your name and WhatsApp contact number.');
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
          source: 'Pan-India City Setup Strategy Inquiry',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setFormError('Unable to submit inquiry. Please connect on WhatsApp: +91 9203544140');
      }
    } catch {
      setFormError('Network error. Please connect directly on WhatsApp: +91 9203544140');
    } finally {
      setSubmitting(false);
    }
  };

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
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate">
              Pan-India City Mushroom Farming Guide
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Map size={13} /> Pan-India Regional Blueprint
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Building2 size={13} /> 50+ City Setup Strategies
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px] font-bold uppercase tracking-wider">
                <Award size={13} /> Turnkey & Spawn Logistics
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black dark:text-white text-slate-900 tracking-tight leading-tight mb-6">
              Commercial Mushroom Farming Across India: <span className="gradient-text font-black">Find the Perfect Setup for Your City</span> 🌍
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-4xl mb-6">
              One of the most common questions aspiring agri-entrepreneurs ask is: <em>"Can I successfully grow mushrooms in my specific city?"</em> India is a vast country with diverse climates—from dry western deserts to humid southern coasts and chilly sub-Himalayan belts. With the right species selection and insulated climate control, your location is an advantage, not a barrier.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span className="font-semibold dark:text-slate-200 text-slate-800">
                    Oyster, Milky & White Button Species
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Substrate Guidance (Wheat & Paddy Straw)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Pan-India F1 Spawn Courier Supply</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20consult%20about%20starting%20a%20commercial%20mushroom%20farm%20in%20my%20city."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md"
                >
                  <MessageCircle size={14} /> WhatsApp City Consultant
                </a>
              </div>
            </div>
          </motion.div>
        </header>

        {/* 4 Regional Agro-Climatic Zones */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="border-l-4 border-emerald-500 pl-4 py-1 mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
              Climate Adaptability
            </span>
            <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
              1. A High-Yield Mushroom Variety for Every Indian Climate Zone
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Fungi are adaptable living organisms. The secret to profitability is matching local temperatures or using climate-insulated sheds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regionalGuides.map((rg, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      {rg.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900 leading-snug">
                        {rg.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        {rg.states}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-4 border border-slate-200/60 dark:border-white/5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 block mb-0.5">
                      Recommended Varieties:
                    </span>
                    <span className="text-xs font-bold dark:text-emerald-300 text-emerald-700">
                      {rg.bestVarieties}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {rg.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Urban vs Rural & Business Advantages */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <span className="text-[10px] uppercase font-black tracking-widest text-blue-600 dark:text-blue-400 block mb-1">
                    Space & Infrastructure
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight">
                    2. Urban or Rural? Location is Not a Limitation
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Unlike traditional field agriculture that requires acres of open land and fertile topsoil, mushroom cultivation is a <strong>100% indoor, vertical farming process</strong>.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Compact Footprint:</strong> An empty basement, small warehouse, or 1000 sq. ft. room can support up to 5,000 cultivation bags vertically.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Urban Logistics Edge:</strong> Growing near Tier-1/Tier-2 city centers reduces cold-chain transit time and gives direct access to high-margin luxury hotels, cafes, and gourmet supermarkets.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Rural Low-Cost Advantage:</strong> Rural setups enjoy ultra-cheap straw raw material, abundant farm labor, and easy access to 40%–50% state horticulture subsidies.</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-emerald-50/50 dark:from-slate-800 dark:to-emerald-950/20 border border-slate-200 dark:border-white/10 space-y-4">
                <h3 className="text-base font-black dark:text-white text-slate-900 flex items-center gap-2">
                  <TrendingUp className="text-emerald-500" size={18} />
                  Localized Substrate Optimization
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The raw agricultural biomass you use for pasteurization depends entirely on your geography:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">North & West India</strong>
                    <span className="text-slate-500 dark:text-slate-400">Wheat straw (गेहूं का भूसा), Mustard stalks, Soybean husk.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                    <strong className="block text-slate-900 dark:text-white font-bold mb-1">South & East India</strong>
                    <span className="text-slate-500 dark:text-slate-400">Paddy straw (धान का पुआल), Coconut coir, Sugarcane bagasse.</span>
                  </div>
                </div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles size={14} /> Both substrates provide over 80% to 100% biological efficiency with pure F1 master spawn!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Searchable City & State Directory */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14" id="city-directory">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2 inline-block">
              City-By-City Directory
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight">
              Explore Mushroom Farming Potential in Your City
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select your region or type your city name to see climate suitability, recommended varieties, and customized setup solutions.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-md mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full sm:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city, state, or variety..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Region Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
                  <Filter size={12} /> Region:
                </span>
                {['All', 'North', 'South', 'West', 'East', 'Central', 'Northeast'].map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedRegion === reg
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* City Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCities.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base font-black dark:text-white text-slate-900 flex items-center gap-1.5">
                        <MapPin size={15} className="text-emerald-500 shrink-0" />
                        {item.city}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {item.state} ({item.region} India)
                      </span>
                    </div>
                    {item.featured && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                        Popular Hub
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.bestVarieties.map((v, vIdx) => (
                      <span
                        key={vIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {v}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {item.climateNote}
                  </p>
                </div>

                <div className="border-t border-slate-100 dark:border-white/5 pt-3 flex items-center justify-between">
                  {item.routeUrl ? (
                    <Link
                      href={item.routeUrl}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      View City Guide <ChevronRight size={13} />
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20set%20up%20a%20commercial%20mushroom%20farm%20in%20${encodeURIComponent(item.city)},%20${encodeURIComponent(item.state)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                    >
                      Get City Setup Plan <ChevronRight size={13} />
                    </a>
                  )}
                  <span className="text-[10px] text-slate-400">Spawn & Setup Available</span>
                </div>
              </div>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="text-center py-12 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                No cities found matching &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                We provide turnkey setups, training, and certified spawn delivery across every city and village in India.
              </p>
              <a
                href={`https://wa.me/919203544140?text=Hi,%20I%20want%20to%20start%20mushroom%20farming%20in%20my%20city%20(${encodeURIComponent(searchQuery)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs"
              >
                <MessageCircle size={14} /> Inquire for Your Location on WhatsApp
              </a>
            </div>
          )}
        </section>

        {/* Localized Strategy Inquiry Form */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 text-white shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Tailored Local Feasibility
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Get a Free City-Specific Mushroom Farm Project Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tell us your city, available space, and preferred variety. Our senior agronomists will analyze local temperatures, substrate availability, and mandi market prices for you.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Climatic temperature & relative humidity analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>State horticulture subsidy & NABARD bank loan feasibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400" />
                    <span>Direct wholesale B2B mandi buyback & pricing advisory</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-2xl text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold">Inquiry Received!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our regional agronomy desk will connect with you on WhatsApp with a customized city project plan.
                    </p>
                    <a
                      href={`https://wa.me/919203544140?text=Hi,%20I%20submitted%20the%20city%20feasibility%20form%20for%20${encodeURIComponent(formData.cityState)}.%20Please%20guide%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle size={15} /> Chat on WhatsApp (9203544140)
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
                        placeholder="e.g. Rajesh Sharma"
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
                        <label className="block font-bold mb-1">Your City & State *</label>
                        <input
                          type="text"
                          required
                          value={formData.cityState}
                          onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                          placeholder="e.g. Jaipur, Rajasthan"
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold mb-1">Mushroom Variety</label>
                        <select
                          value={formData.variety}
                          onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          <option value="White Button Mushroom">White Button Mushroom</option>
                          <option value="Oyster (Dhingri) Mushroom">Oyster (Dhingri) Mushroom</option>
                          <option value="Milky (Calocybe) Mushroom">Milky (Calocybe) Mushroom</option>
                          <option value="Multi-Variety Commercial Farm">Multi-Variety Commercial Farm</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Security Check: 9 + 6 = ?</label>
                      <input
                        type="number"
                        required
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        placeholder="Enter 15"
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
                          <Send size={14} /> Request Free City Feasibility Plan
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
              शहर-वार मशरूम फार्मिंग से जुड़े मुख्य प्रश्न (FAQs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Common questions about city climates, substrate types, spawn delivery, and state subsidies.
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
              Ready to Build a High-Yield Mushroom Farm in Your City?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
              Connect with India’s leading commercial mushroom farm engineering and cultivation team at <strong>Organic Mushrooms Farm</strong>. Turnkey setups, certified spawn, and training across all states.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20start%20a%20commercial%20mushroom%20farm%20in%20my%20city."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp City Desk (9203544140)
              </a>
              <Link
                href="/training"
                className="px-8 py-3.5 rounded-full bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all border border-white/20"
              >
                <Award size={16} /> Explore Training Programs
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

export const CitiesIndiaPageContent: React.FC = () => {
  return (
    <ModalProvider>
      <CitiesIndiaPageInner />
    </ModalProvider>
  );
};
