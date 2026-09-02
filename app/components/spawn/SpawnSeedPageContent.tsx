'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sprout,
  ShoppingCart,
  TestTube,
  ShieldCheck,
  CheckCircle2,
  FlaskConical,
  Box,
  Factory,
  Wind,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Phone,
  MessageCircle,
  Sparkles,
  ThermometerSnowflake,
  Layers,
  Award,
  Truck,
  Flame,
  Send,
  Info,
  Clock,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const SpawnSeedPageContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // Math check for anti-spam
  const [captcha] = useState({ num1: 3, num2: 4 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const spawnVarieties = [
    {
      name: 'Button Mushroom Spawn',
      species: 'Agaricus bisporus',
      badge: 'Commercial Best Seller',
      bestFor: 'Controlled AC chambers & seasonal winter sheds',
      rate: '0.7% – 1% of compost weight',
      bioEfficiency: 'Up to 25% biological efficiency',
      desc: 'High-yielding F1 master hybrid culture grown on sterile whole wheat grains. Produces bright white, firm, heavyweight caps with dense shelf life.',
      features: ['First harvest in 35–40 days', 'Resistant to Mycogone wet bubble', 'Uniform flush pinhead density'],
      color: 'border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/5',
      badgeColor: 'bg-emerald-500 text-white',
    },
    {
      name: 'Oyster Mushroom Spawn',
      species: 'Pleurotus ostreatus / florida / djamor',
      badge: 'Fastest 21-Day Harvest',
      bestFor: 'Straw bags, home scale, commercial indoor rooms',
      rate: '2% – 3% of dry straw weight',
      bioEfficiency: '80% – 100% biological efficiency',
      desc: 'Aggressive vegetative mycelium that rapidly outcompetes green mold. Available in Grey, White Florida, Pink Flamingo, and Golden Yellow strains.',
      features: ['Fruiting in 20–25 days', 'Requires no casing soil', 'Summer & Winter acclimatized strains'],
      color: 'border-blue-500/40 dark:border-blue-500/30 bg-blue-500/5',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      name: 'Milky Mushroom Spawn',
      species: 'Calocybe indica',
      badge: 'High Temperature & Long Shelf Life',
      bestFor: 'Tropical climates (30°C – 38°C), summer farming',
      rate: '3% – 4% of dry substrate weight',
      bioEfficiency: '80% – 100% biological efficiency',
      desc: 'Robust tropical mushroom known for snow-white large fleshy stems and an exceptional 7–10 days room-temperature shelf life without chilling.',
      features: ['Thrives above 32°C summer heat', 'Excellent firm texture & high yield', 'Ideal for North & Central Indian summers'],
      color: 'border-purple-500/40 dark:border-purple-500/30 bg-purple-500/5',
      badgeColor: 'bg-purple-600 text-white',
    },
    {
      name: 'Gourmet & Medicinal Spawn',
      species: "Shiitake / Lion's Mane / Cordyceps",
      badge: 'Superfood Premium Yield',
      bestFor: 'Specialized climate rooms & saw-dust blocks',
      rate: 'Lab cultured pure mother grain',
      bioEfficiency: 'High-potency bioactive compounds',
      desc: 'Exotic high-value medicinal cultures for high-ticket gourmet supply. Maintained under strict cryogenic protocols with zero genetic attenuation.',
      features: ['Pure F1 laboratory mother cultures', 'Medical grade purity guarantee', 'Pre-booking required for custom batches'],
      color: 'border-amber-500/40 dark:border-amber-500/30 bg-amber-500/5',
      badgeColor: 'bg-amber-600 text-white',
    },
  ];

  const spawnTypes = [
    {
      title: 'Grain Spawn (Anaj Beej)',
      desc: 'Mycelium cultured on sterilized whole wheat or rye grains. Most widely used carrier in commercial Button, Oyster, and Milky farming for rapid inoculation and nutrient boost.',
      icon: Sprout,
    },
    {
      title: 'Sawdust Spawn',
      desc: 'Mycelium grown on supplemented hardwood sawdust. Best suited for inoculating hardwood bags, outdoor raised beds, and Shiitake sawdust fruiting blocks.',
      icon: Layers,
    },
    {
      title: 'Plug / Dowel Spawn',
      desc: 'Small wooden fluted dowels fully colonized by living mycelium. Designed specifically for hammering into felled hardwood logs for long-term outdoor cultivation.',
      icon: Box,
    },
  ];

  const qualityFeatures = [
    { icon: TestTube, title: 'Lab Tested F1 Hybrids', desc: '100% pure mother culture line' },
    { icon: ShieldCheck, title: 'Contamination-Free', desc: 'Zero Trichoderma or bacterial blotch' },
    { icon: Wind, title: 'Aggressive Colonization', desc: 'Spreads rapidly through substrate' },
    { icon: ThermometerSnowflake, title: 'Cold-Chain Delivery', desc: 'Carefully packaged with temperature guard' },
    { icon: Factory, title: 'Bulk Supply Capacity', desc: 'Tonnes supply for commercial units' },
  ];

  const compatibility = [
    {
      title: 'Seasonal & Indoor Rooms',
      desc: 'Performs reliably in dark domestic rooms, bamboo sheds, basements, and seasonal poly-huts with basic misting.',
    },
    {
      title: 'Evaporative Polyhouses',
      desc: 'Thrives in naturally ventilated tunnels fitted with cellulose cooling pads and high-pressure foggers.',
    },
    {
      title: 'Commercial PUF Chambers',
      desc: 'Unleashes maximum biological efficiency in automated HVAC units with strict CO2 (500–800 ppm) management.',
    },
  ];

  const faqs = [
    {
      q: 'What exactly is Mushroom Spawn (Mushroom Seed)?',
      a: 'Unlike flowering plants, mushrooms do not have seeds. Mushroom spawn is a carrier (sterilized wheat/rye grain or sawdust) that is completely colonized by pure, living mushroom mycelium. When mixed into pasteurized compost or straw substrate, it grows rapidly and yields fresh mushrooms.',
    },
    {
      q: 'How should I store mushroom spawn after receiving it?',
      a: 'Spawn must be stored in a clean, sanitized refrigerator at 4°C to 8°C (do NOT freeze). Keep the bags in a dark, dry condition away from direct sunlight or pungent chemicals. Button & Oyster spawn remain highly viable for 30–45 days under cold storage, but for maximum vigor, use within 15–20 days.',
    },
    {
      q: 'What is the recommended spawning rate (Beej ki Matra)?',
      a: 'For Button Mushrooms in compost: 0.7% to 1.0% of wet compost weight (approx. 700g to 1 kg per 100 kg compost). For Oyster Mushrooms in straw: 2% to 3% based on dry straw weight (approx. 100g to 150g per 5 kg wet straw bag). For Milky Mushrooms: 3% to 4% of dry substrate weight.',
    },
    {
      q: 'How do you deliver spawn across Indian states?',
      a: 'We ship fresh, newly inoculated batches via express surface/air courier (DTDC, Delhivery, Speed Post, Transport Cargo for bulk tonnes) with safe shock-absorbing packaging across Madhya Pradesh, UP, Maharashtra, Rajasthan, Bihar, Gujarat, Karnataka, and all Indian states.',
    },
    {
      q: 'Can I purchase directly online through credit card, UPI, or NetBanking?',
      a: 'Yes! You can instantly order through our secure Razorpay store or message us on WhatsApp (+91 9203544140) for customized bulk commercial pricing, dispatch dates, and transport logistics.',
    },
  ];

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          service: 'SPAWN',
          mushroomVariety: formValues.variety || 'Multiple Varieties',
          message: `Spawn Enquiry for ${formValues.variety || 'Spawn'}: ${formValues.message} | Quantity: ${formValues.quantity || 'N/A'} kg`,
          subject: `New Spawn & Seed Enquiry from ${formValues.name} (${formValues.variety || 'All Varieties'})`,
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setApiError('');
      form.reset();
    } catch (error: any) {
      console.error('Spawn enquiry submission error:', error);
      setApiError(error.message || 'Failed to submit enquiry. Please call or WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Sprout size={14} /> Certified Laboratory-Clean Mushroom Spawn
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              Premium Mushroom <span className="gradient-text font-black">Spawn (Seed)</span> India
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              The secret to bountiful organic mushrooms starts with the right genetics. High-yield, contamination-free, lab-tested F1 hybrid spawn for Button, Oyster, Milky, and medicinal mushrooms with Pan-India express delivery.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <ShoppingCart size={16} /> Buy Spawn Online (Razorpay) <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20Mushroom%20Spawn%20(Seed)%20in%20bulk/retail."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp for Bulk Pricing
              </a>
              <a
                href="#enquiry-form"
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
              >
                <Send size={16} /> Request Custom Quote
              </a>
            </div>
          </motion.div>
        </section>

        {/* Quality Badges */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {qualityFeatures.map((f, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md text-center flex flex-col items-center justify-center shadow-xs hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                  <f.icon size={20} />
                </div>
                <h4 className="font-bold text-xs dark:text-white text-slate-900 mb-0.5">{f.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is Mushroom Spawn Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <FlaskConical size={12} /> Biology & Science
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                What Exactly is <span className="gradient-text font-black">Mushroom Spawn?</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Unlike botanical plants that reproduce through flowers and true seeds, mushrooms reproduce through microscopic spores. In commercial farming, these spores are cultured in laminar airflow cleanrooms into vigorous <strong>mycelium</strong> (the white vegetative thread-like root system). This mycelium is then multiplied onto sterile carrier grains.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {spawnTypes.map((type, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                      <type.icon size={20} />
                    </div>
                    <h3 className="text-base font-bold dark:text-white text-slate-900 mb-1.5">{type.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spawn Varieties Cards */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Award size={12} /> Pure First-Generation Inoculum
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Available <span className="gradient-text font-black">Spawn Strains & Varieties</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              Pure F1 hybrid grain spawn prepared on premium sterilized wheat grain under HEPA class-100 cleanroom environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {spawnVarieties.map((v, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 rounded-3xl border ${v.color} backdrop-blur-md shadow-lg flex flex-col justify-between relative overflow-hidden`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${v.badgeColor}`}>
                      {v.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 italic">
                      {v.species}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 mb-1">{v.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">{v.desc}</p>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-100 dark:bg-white/5 mb-4 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Recommended Rate:</span>
                      <span className="font-bold dark:text-white text-slate-800">{v.rate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Efficiency:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{v.bioEfficiency}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-6">
                    {v.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
                  <a
                    href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold inline-flex items-center gap-1.5 hover:scale-105 transition-transform"
                  >
                    <ShoppingCart size={13} /> Order Now
                  </a>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20need%20details%20and%20pricing%20for%20${encodeURIComponent(
                      v.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 text-xs font-bold inline-flex items-center gap-1 hover:underline uppercase tracking-wider"
                  >
                    WhatsApp Enquiry <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Universal Compatibility */}
        <section className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Universal Infrastructure <span className="gradient-text font-black">Compatibility</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
                Our mycelial strains are selectively acclimatized to give maximum flushes across all farming environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
              {compatibility.map((c, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Sprout size={24} />
                  </div>
                  <h3 className="text-base font-bold dark:text-white text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storage, Transport & Best Practices */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-14">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <ThermometerSnowflake size={24} />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Spawn Storage Best Practices</h3>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Maintain 4°C – 8°C Cold Temp:</strong> Store in clean, sanitized domestic refrigerators. Never deep freeze.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Optimal Inoculation Window:</strong> Best used within 15 to 20 days of delivery for peak vegetative momentum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong>Visual Inspection:</strong> Genuine healthy spawn appears dense chalk-white with a pleasant sweet mushroom aroma.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Pan-India Courier & Cargo Logistics</h3>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Fast Dispatch:</strong> Fresh batches dispatched every Monday through Thursday to prevent weekend transit delays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Heavy-Duty PP Packaging:</strong> Double-sealed breathable autoclavable PP bags with micron air filters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Commercial Cargo:</strong> Full truckload and train cargo logistics available for large commercial farm deliveries.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Form Section: Start Your Project & Quote */}
        <section id="enquiry-form" className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Request Spawn <span className="gradient-text font-black">Quote & Availability</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Fill in your quantity requirements and delivery destination to receive direct dispatch dates and wholesale quotation.
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
                  Spawn Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed max-w-md mx-auto">
                  Thank you for your interest. Our production lab is reviewing batch availability for your location and will contact you shortly with tracking and payment options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl relative"
              >
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
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
                        placeholder="e.g. Ramesh Kumar"
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

                  <div className="grid md:grid-cols-3 gap-4">
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
                        Delivery City / State *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        placeholder="e.g. Jaipur, Rajasthan"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Spawn Variety *
                      </label>
                      <select
                        name="variety"
                        className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      >
                        <option value="Button Mushroom Spawn">Button Mushroom Spawn (Agaricus)</option>
                        <option value="Oyster Mushroom Spawn">Oyster Mushroom Spawn (Grey/Florida)</option>
                        <option value="Milky Mushroom Spawn">Milky Mushroom Spawn (Calocybe)</option>
                        <option value="Shiitake / Lion's Mane Spawn">Medicinal / Shiitake Spawn</option>
                        <option value="Multiple Varieties Combined">Multiple Varieties (Bulk)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Required Quantity (kg) & Farm Specifics
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="e.g. Need 50 kg Button spawn next week for 10 tonnes compost unit in Indore..."
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
                        Sending Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Request Spawn Quote</span> <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Mushroom Spawn <span className="gradient-text font-black">FAQs</span>
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

        {/* Bottom Banner */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">
              Ready to Order Certified Mushroom Spawn?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Order online directly or contact our technical agronomists for bulk farm quantities, inoculation ratios, and ongoing farm mentorship.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-xs md:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg"
              >
                <ShoppingCart size={16} /> Order on Razorpay Store
              </a>
              <a
                href="tel:+919203544140"
                className="px-8 py-4 rounded-2xl bg-emerald-950/60 border border-white/20 text-white font-black text-xs md:text-sm inline-flex items-center gap-2 hover:bg-emerald-950/80 transition-all"
              >
                <Phone size={16} /> Call +91 9203544140
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Elements */}
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
