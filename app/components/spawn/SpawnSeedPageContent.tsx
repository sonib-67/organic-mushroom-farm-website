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
  Phone,
  MessageCircle,
  Sparkles,
  ThermometerSnowflake,
  Layers,
  Award,
  Truck,
  Send,
  Info,
  Calculator,
  Microscope,
  Sun,
  Flame,
  AlertTriangle,
  RefreshCw,
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

  // Interactive Calculator State
  const [calcVariety, setCalcVariety] = useState<'button' | 'oyster' | 'milky' | 'shiitake'>('button');
  const [calcSubstrateKg, setCalcSubstrateKg] = useState<number>(500);

  // Math check for anti-spam
  const [captcha] = useState({ num1: 4, num2: 5 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Calculator logic
  const calculateSpawnNeeds = () => {
    switch (calcVariety) {
      case 'button': {
        const spawnKg = Math.max(1, Math.round(calcSubstrateKg * 0.008 * 10) / 10); // ~0.8% of wet compost
        const expectedYieldKg = Math.round(calcSubstrateKg * 0.20); // ~20% bio efficiency
        const bagsCount = Math.round(calcSubstrateKg / 10); // 10kg bags
        const daysToFirstFlush = '35 – 40 Days';
        return { spawnKg, expectedYieldKg, bagsCount, daysToFirstFlush, rateStr: '0.7% – 1.0% (wet compost weight)' };
      }
      case 'oyster': {
        const spawnKg = Math.max(1, Math.round(calcSubstrateKg * 0.025 * 10) / 10); // ~2.5% of dry straw
        const expectedYieldKg = Math.round(calcSubstrateKg * 0.85); // ~85% on dry straw
        const bagsCount = Math.round(calcSubstrateKg / 1.5); // 1.5kg dry straw per bag (approx 5kg wet)
        const daysToFirstFlush = '20 – 25 Days';
        return { spawnKg, expectedYieldKg, bagsCount, daysToFirstFlush, rateStr: '2.0% – 3.0% (dry straw weight)' };
      }
      case 'milky': {
        const spawnKg = Math.max(1, Math.round(calcSubstrateKg * 0.035 * 10) / 10); // ~3.5% of dry straw
        const expectedYieldKg = Math.round(calcSubstrateKg * 0.90); // ~90% bio efficiency
        const bagsCount = Math.round(calcSubstrateKg / 1.5);
        const daysToFirstFlush = '40 – 45 Days (with casing)';
        return { spawnKg, expectedYieldKg, bagsCount, daysToFirstFlush, rateStr: '3.0% – 4.0% (dry straw weight)' };
      }
      case 'shiitake': {
        const spawnKg = Math.max(1, Math.round(calcSubstrateKg * 0.03 * 10) / 10); // ~3% of sawdust weight
        const expectedYieldKg = Math.round(calcSubstrateKg * 0.40); // ~40% bio efficiency
        const bagsCount = Math.round(calcSubstrateKg / 2.5); // 2.5kg sawdust block
        const daysToFirstFlush = '60 – 75 Days';
        return { spawnKg, expectedYieldKg, bagsCount, daysToFirstFlush, rateStr: '2.5% – 3.5% (sawdust weight)' };
      }
    }
  };

  const calcResult = calculateSpawnNeeds();

  const spawnVarieties = [
    {
      name: 'White Button Mushroom Spawn',
      species: 'Agaricus bisporus',
      badge: 'Commercial Best Seller',
      bestFor: 'AC Grow Rooms & Seasonal Winter Sheds',
      rate: '0.7% – 1.0% of wet compost weight',
      bioEfficiency: '18% – 22% biological efficiency',
      tempOptimum: 'Vegetative: 22°C–25°C | Fruiting: 14°C–18°C',
      desc: 'High-yielding F1 master hybrid culture grown on sterile whole wheat grains. Produces bright white, firm, heavyweight caps with thick stems and outstanding retail shelf life.',
      features: [
        'First flush harvest in 35–40 days after spawning',
        'Strong natural resistance against Mycogone (Wet Bubble)',
        'Dense, uniform pinhead flushes with tight velum veil',
        'Certified zero free ammonia tolerance (<5 ppm)',
      ],
      color: 'border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/5',
      badgeColor: 'bg-emerald-500 text-white',
    },
    {
      name: 'Oyster Mushroom Spawn (Dhingri)',
      species: 'Pleurotus ostreatus / florida / sajor-caju / djamor',
      badge: 'Fastest 21-Day Harvest',
      bestFor: 'Straw bags, home scale, commercial indoor rooms',
      rate: '2.0% – 3.0% of dry straw weight',
      bioEfficiency: '80% – 100% biological efficiency',
      tempOptimum: 'Grey/Florida: 20°C–28°C | Pink/Golden: 25°C–32°C',
      desc: 'Aggressive vegetative mycelium that rapidly outcompetes wild mold. Available in White Florida, Grey Pearl, Pink Flamingo, and Golden Yellow strains acclimatized to Indian microclimates.',
      features: [
        'Rapid first flush in 20–25 days from spawning',
        'Requires zero casing soil layer (low operational cost)',
        'Ideal for direct drying, value-added powder, and fresh retail',
        'High tolerance to humidity fluctuations (80%–90% RH)',
      ],
      color: 'border-blue-500/40 dark:border-blue-500/30 bg-blue-500/5',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      name: 'Milky Mushroom Spawn (Doodh Chhata)',
      species: 'Calocybe indica',
      badge: 'High Temperature & Long Shelf Life',
      bestFor: 'Tropical climates (30°C – 38°C), summer farming',
      rate: '3.0% – 4.0% of dry substrate weight',
      bioEfficiency: '85% – 100% biological efficiency',
      tempOptimum: 'Vegetative: 25°C–30°C | Fruiting: 30°C–38°C',
      desc: 'Robust tropical mushroom famous for snow-white large fleshy stems and an exceptional 7–10 days room-temperature shelf life without mandatory refrigeration.',
      features: [
        'Thrives in severe 32°C–38°C Indian summer heatwaves',
        'Firm, fibrous texture preferred by commercial caterers & hotels',
        'High market price realization during non-button summer months',
        'High resistance to bacterial soft rot when properly cased',
      ],
      color: 'border-purple-500/40 dark:border-purple-500/30 bg-purple-500/5',
      badgeColor: 'bg-purple-600 text-white',
    },
    {
      name: 'Gourmet & Medicinal Spawn (Shiitake / Reishi / Lion’s Mane)',
      species: 'Lentinula edodes / Ganoderma lucidum / Hericium erinaceus',
      badge: 'Superfood Premium Value',
      bestFor: 'Specialized climate rooms, hardwood sawdust blocks',
      rate: '2.5% – 4.0% on enriched sawdust carrier',
      bioEfficiency: 'High bioactive polysaccharide / cordycepin potency',
      tempOptimum: 'Strain dependent: 18°C–24°C | 85%–95% RH',
      desc: 'Exotic high-ticket medicinal and gourmet cultures maintained in cryogenic laboratory vaults. Specially formulated on supplemented hardwood sawdust and whole sorghum grains.',
      features: [
        'Pure F1 cryogenic laboratory mother lines',
        'Medical-grade bioactive purity guarantee',
        'Commands ₹800 – ₹2,500/kg dry gourmet wholesale prices',
        'Pre-booking available for customized commercial batch lots',
      ],
      color: 'border-amber-500/40 dark:border-amber-500/30 bg-amber-500/5',
      badgeColor: 'bg-amber-600 text-white',
    },
  ];

  const spawnTypes = [
    {
      title: 'Grain Spawn (Anaj Beej)',
      desc: 'Living mycelium cultured on triple-sterilized whole wheat or sorghum grains. Provides immediate dense food reservoirs and rapid point-inoculation throughout pasteurized compost or straw substrates.',
      icon: Sprout,
      badge: 'Most Popular',
    },
    {
      title: 'Sawdust Spawn',
      desc: 'Mycelium grown on enriched hardwood sawdust mixed with wheat bran and calcium sulfate. Engineered specifically for inoculating hardwood fruiting blocks and outdoor Shiitake beds.',
      icon: Layers,
      badge: 'Hardwood Specialists',
    },
    {
      title: 'Plug / Dowel Spawn',
      desc: 'Fluted hardwood dowels fully impregnated with active vegetative mycelium. Tailored for hammering into freshly felled hardwood logs (Oak, Mango, Poplar) for multi-year outdoor harvesting.',
      icon: Box,
      badge: 'Outdoor Log Cultivation',
    },
    {
      title: 'Liquid Master Culture',
      desc: 'Nutrient-rich sterilized liquid broth suspended with vigorous living mycelium threads in sterile Luer-lock syringes. Used by commercial labs and advanced growers to inoculate master grain jars.',
      icon: FlaskConical,
      badge: 'Laboratory Inoculum',
    },
  ];

  const qualityFeatures = [
    { icon: TestTube, title: 'Lab Tested F1 Hybrids', desc: '100% pure first-generation mother culture' },
    { icon: ShieldCheck, title: 'Zero Contamination', desc: 'No Trichoderma, green mold or wet bubble' },
    { icon: Wind, title: 'Aggressive Colonization', desc: 'Outcompetes wild spores within 10–14 days' },
    { icon: ThermometerSnowflake, title: 'Cold-Chain Delivery', desc: 'Shock-proof temperature insulated packing' },
    { icon: Factory, title: 'Commercial Tonne Capacity', desc: 'Daily batch supply for large farm units' },
  ];

  const laboratoryProtocols = [
    {
      step: '01',
      title: 'Cleanroom Inoculation',
      desc: 'All transfers take place in Class-100 Laminar Air Flow workstations fitted with 0.3-micron HEPA filtration units.',
    },
    {
      step: '02',
      title: 'Triple-Stage Autoclave',
      desc: 'Grains are pressure-sterilized at 121°C (15 PSI) for 120 minutes to eliminate 100% of endospores, bacteria, and wild fungi.',
    },
    {
      step: '03',
      title: 'Micron-Filter PP Bags',
      desc: 'Spawn is packed in heavy-gauge autoclavable polypropylene bags featuring a 0.2 µm gas-exchange hydrophobic filter patch.',
    },
    {
      step: '04',
      title: 'Incubation QC Testing',
      desc: 'Every batch is monitored in darkened 24°C incubation vaults for 14 days and spot-tested for mycelial density before dispatch.',
    },
  ];

  const faqs = [
    {
      q: 'What exactly is Mushroom Spawn (Mushroom Seed)?',
      a: 'Unlike botanical plants that produce true seeds, mushrooms reproduce through microscopic spores. In commercial agriculture, mushroom spawn refers to sterilized agricultural grains (such as whole wheat, rye, or sorghum) that are completely colonized by pure, living mushroom mycelium. When mixed into pasteurized compost or straw substrate, this mycelium aggressively spreads and initiates fruiting bodies (mushrooms).',
    },
    {
      q: 'Why is F1 Master Hybrid Spawn superior to multi-transferred spawn?',
      a: 'F1 (First Generation) spawn is inoculated directly from pure mother test-tube slants. When spawn is sub-cultured repeatedly (F2, F3, F4), it suffers from genetic degeneration (senescence), resulting in weak mycelium, vulnerability to green mold (Trichoderma), delayed pinhead formation, and lower flush weights. Our lab supplies exclusively certified F1 master spawn.',
    },
    {
      q: 'How should I store mushroom spawn after delivery?',
      a: 'Upon delivery, inspect the spawn bags immediately. Store unopened bags in a sanitized domestic refrigerator at 4°C to 8°C in darkness. Do NOT freeze the spawn, as freezing ruptures living fungal cell walls. Button, Oyster, and Milky spawn remain vigorous for 30–45 days at 4°C–8°C. For maximum vegetative momentum, inoculate within 15–20 days of delivery.',
    },
    {
      q: 'What are the recommended spawning rates (Beej ki Matra)?',
      a: '• Button Mushroom: 0.7% to 1.0% of wet pasteurized compost weight (approx. 700g – 1 kg per 100 kg compost).\n• Oyster Mushroom: 2.0% to 3.0% of dry straw weight (approx. 100g – 150g per 5 kg wet straw bag).\n• Milky Mushroom: 3.0% to 4.0% of dry straw weight with casing soil.\n• Shiitake: 2.5% to 3.5% of sterilized sawdust block weight.',
    },
    {
      q: 'How do you ship mushroom spawn across Indian states?',
      a: 'We dispatch fresh, newly inoculated batches every Monday through Thursday via express surface/air courier (DTDC, Delhivery, Speed Post, Safechem) and road cargo for bulk tonnes. Each consignment is packed in shock-proof, temperature-insulated cartons to prevent heat buildup during transit.',
    },
    {
      q: 'How can I buy online directly or get bulk farm pricing?',
      a: 'You can purchase directly online through our secure Razorpay store with instant UPI, Debit/Credit Card, and NetBanking, or contact our agronomists on WhatsApp (+91 9203544140) for commercial wholesale discounts (>50 kg orders), recurring supply contracts, and dispatch tracking.',
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
          message: `Spawn & Seed Enquiry for ${formValues.variety || 'Spawn'}: ${formValues.message} | Quantity Required: ${
            formValues.quantity || 'N/A'
          } kg`,
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
        {/* Breadcrumb & Top Indicator */}
        <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mb-4">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Mushroom Spawn (Seeds)</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Sprout size={14} /> Certified Laboratory-Clean Mushroom Inoculum
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase max-w-5xl mx-auto leading-tight">
              The Foundation of Every Great Harvest: <br />
              <span className="gradient-text font-black">Premium Organic Mushroom Spawn</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
              In commercial mushroom farming, genetic vigor defines your harvest ceiling. High-yield, contamination-free, lab-tested F1 hybrid spawn for White Button, Oyster, Milky, and Medicinal mushrooms with cold-chain Pan-India express delivery.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-emerald-600/25"
              >
                <ShoppingCart size={16} /> Buy Spawn Online (Razorpay) <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20order%20Mushroom%20Spawn%20(Seed)%20in%20bulk/retail."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={16} /> WhatsApp Bulk Pricing
              </a>
              <a
                href="#spawn-calculator"
                className="px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-900 dark:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
              >
                <Calculator size={16} /> Spawn Calculator
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

        {/* Original Article Essence & Technical Depth */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-md shadow-xl">
            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 tracking-tight m-0">
                  Genetics Make All The Difference In Commercial Farming
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 mb-0">
                  Why starting with laboratory-certified F1 grain spawn is the single most important investment.
                </p>
              </div>

              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                Every successful mushroom farm, whether a home-scale project or an industrial multi-tier climate-controlled AC facility, starts with one critical decision: <strong>the quality of your biological seed (spawn)</strong>. In fungal biology, spawn is the living vegetative vehicle that dictates colonization speed, disease resistance, flush density, and crop profitability.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
                    <ShieldCheck size={18} /> Zero Contamination
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                    Cultivated in Class-100 cleanrooms to eliminate Trichoderma (Green Mold), Neurospora, and bacterial blotch before they reach your farm.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm mb-2">
                    <Sparkles size={18} /> High Mycelial Vigor
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                    Aggressive vegetative growth overtakes pasteurized wheat straw or compost quickly, initiating early pinheads and heavier flush weights.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm mb-2">
                    <Award size={18} /> 100% Organic Origins
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed m-0">
                    Propagated on non-GMO certified grains without chemical stimulants, allowing you to market final harvests at premium organic rates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                <AlertTriangle size={20} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-0.5">Avoid Degenerated Multi-Generation Spawn:</strong>
                  Using weak or repeated-subculture (F3/F4) spawn is the fastest way to lose crop cycles. Weak spawn struggles to colonize substrates, inviting airborne competitor molds that destroy your entire batch.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Spawn Requirement & Yield Calculator */}
        <section id="spawn-calculator" className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-slate-900/5 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Calculator size={13} /> Interactive Farm Planning Tool
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Mushroom Spawn & <span className="gradient-text font-black">Yield Calculator</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select your variety and enter substrate/compost weight to calculate exact spawn requirements and expected harvest volume.
              </p>
            </div>

            {/* Variety Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {[
                { id: 'button', label: 'Button (Agaricus)' },
                { id: 'oyster', label: 'Oyster (Dhingri)' },
                { id: 'milky', label: 'Milky (Calocybe)' },
                { id: 'shiitake', label: 'Shiitake / Exotic' },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setCalcVariety(v.id as any)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                    calcVariety === v.id
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            {/* Substrate Input Slider & Field */}
            <div className="bg-white dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-white/10 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <label className="text-xs sm:text-sm font-bold dark:text-white text-slate-800">
                  {calcVariety === 'button'
                    ? 'Total Wet Phase-II Compost (in Kilograms)'
                    : 'Total Dry Straw / Substrate (in Kilograms)'}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="10"
                    max="10000"
                    step="10"
                    value={calcSubstrateKg}
                    onChange={(e) => setCalcSubstrateKg(Math.max(10, Number(e.target.value) || 0))}
                    className="w-24 px-3 py-1.5 text-right font-black text-sm bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-300 dark:border-white/20 text-emerald-600 dark:text-emerald-400 focus:outline-none"
                  />
                  <span className="text-xs font-bold text-slate-500">KG</span>
                </div>
              </div>

              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={calcSubstrateKg}
                onChange={(e) => setCalcSubstrateKg(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-bold">
                <span>50 kg (Pilot trial)</span>
                <span>1,000 kg (Small commercial)</span>
                <span>5,000 kg (Full commercial unit)</span>
              </div>
            </div>

            {/* Calculations Output Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Required Spawn
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {calcResult.spawnKg} <span className="text-xs font-bold">kg</span>
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Rate: {calcResult.rateStr}</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Estimated Bags
                </span>
                <span className="text-xl sm:text-2xl font-black dark:text-white text-slate-800">
                  ~{calcResult.bagsCount} <span className="text-xs font-bold">bags</span>
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Standard bag packing</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Expected Crop Yield
                </span>
                <span className="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400">
                  ~{calcResult.expectedYieldKg} <span className="text-xs font-bold">kg</span>
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Total across 3 flushes</span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  First Flush Time
                </span>
                <span className="text-base sm:text-lg font-black dark:text-white text-slate-800">
                  {calcResult.daysToFirstFlush}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">From spawning day</span>
              </div>
            </div>

            {/* Quick Action Links with calculated query */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/919203544140?text=Hi,%20I%20used%20the%20calculator%20and%20want%20to%20order%20${calcResult.spawnKg}%20kg%20of%20${encodeURIComponent(
                  calcVariety.toUpperCase()
                )}%20Spawn%20for%20my%20farm.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-transform hover:scale-105"
              >
                <MessageCircle size={16} /> Order {calcResult.spawnKg} kg via WhatsApp
              </a>
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-105"
              >
                <ShoppingCart size={16} /> Buy on Razorpay Store
              </a>
            </div>
          </div>
        </section>

        {/* Spawn Strains & Commercial Varieties Cards */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-3">
              <Award size={12} /> Pure Inoculum Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Commercial Spawn Strains & <span className="gradient-text font-black">Genetics Catalog</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
              Pure F1 hybrid master cultures cultured on sterile whole wheat grains inside class-100 cleanroom facilities.
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

                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 mb-4 text-xs space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-slate-500 uppercase font-bold">Recommended Rate:</span>
                      <span className="font-bold dark:text-white text-slate-800">{v.rate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-slate-500 uppercase font-bold">Bio Efficiency:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{v.bioEfficiency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-slate-500 uppercase font-bold">Temperature:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{v.tempOptimum}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-6">
                    {v.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
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
                    <ShoppingCart size={13} /> Order on Razorpay
                  </a>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20need%20pricing%20and%20availability%20for%20${encodeURIComponent(
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

        {/* Carrier Types Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="p-6 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <FlaskConical size={12} /> Formulation Formats
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Mushroom Spawn <span className="gradient-text font-black">Carrier Mediums</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Different cultivation substrates require specialized carrier mediums for optimum colonization speed.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {spawnTypes.map((type, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                        <type.icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                        {type.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1.5">{type.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Quality Control Protocols */}
        <section className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Microscope size={12} /> Sterile Cleanroom Standard
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Our 4-Stage Laboratory <span className="gradient-text font-black">Quality Protocol</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl mx-auto font-medium">
                Engineered to deliver zero contamination and vigorous mycelial colonization to farms across India.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {laboratoryProtocols.map((proto, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md shadow-xs relative"
                >
                  <span className="text-3xl font-black text-emerald-500/20 absolute top-4 right-5">{proto.step}</span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                    <FlaskConical size={20} />
                  </div>
                  <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-1">{proto.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{proto.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Storage, Transport & Best Practices */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <ThermometerSnowflake size={24} />
              </div>
              <h3 className="text-lg font-bold dark:text-white text-slate-900 mb-2">Spawn Storage Best Practices</h3>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Maintain 4°C – 8°C Cold Temp:</strong> Store in clean, sanitized domestic refrigerators.
                    Never deep freeze, as ice crystals rupture living mycelial hyphae.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Optimal Inoculation Window:</strong> Best used within 15 to 20 days of delivery for peak
                    vegetative momentum and fastest colonization.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Visual Inspection:</strong> Genuine healthy spawn appears dense chalk-white with a fresh,
                    pleasant mushroom aroma. Avoid bags with green, black, or pink coloration.
                  </span>
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
                  <span>
                    <strong>Scheduled Dispatch:</strong> Fresh batches dispatched every Monday through Thursday to
                    prevent weekend courier transit delays.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Heavy-Duty PP Packaging:</strong> Double-sealed breathable autoclavable PP bags with 0.2 µm
                    hydrophobic air filter patches.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Commercial Cargo:</strong> Full truckload and train cargo logistics available for commercial
                    farm orders (&gt;100 kg to multi-tonne consignments).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <section id="enquiry-form" className="py-12 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Request Spawn <span className="gradient-text font-black">Quote & Dispatch Dates</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Enter your quantity requirements and delivery location to receive direct batch dispatch schedules and wholesale quotation.
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
                  Thank you for your interest. Our production lab team is checking fresh batch availability for your location and will contact you via WhatsApp / Call with tracking and payment options.
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
                        placeholder="e.g. Indore, Madhya Pradesh"
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
                        <option value="Shiitake / Lion's Mane Spawn">Shiitake / Medicinal Spawn</option>
                        <option value="Multiple Varieties Combined">Multiple Varieties (Bulk Consignment)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Quantity (in kg) & Specific Requirements
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      placeholder="e.g. Need 50 kg White Button spawn for 10 tonnes compost batch on next Monday..."
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
                        Checking Batch Availability...
                      </span>
                    ) : (
                      <>
                        <span>Request Spawn Quote & Dispatch Schedule</span> <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
              Mushroom Spawn <span className="gradient-text font-black">FAQs</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Common questions about mushroom seed genetics, storage, and commercial application.
            </p>
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
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm dark:text-slate-400 text-slate-600 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1 pl-8 whitespace-pre-line">
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

        {/* Bottom CTA Banner */}
        <section className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">
              Ready to Order Certified Mushroom Spawn?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              Order directly through our Razorpay online store, or contact our master agronomists for bulk commercial supply, scheduled deliveries, and farm mentorship.
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
