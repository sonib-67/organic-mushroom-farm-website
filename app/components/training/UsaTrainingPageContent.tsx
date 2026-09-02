'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Home,
  Award,
  ArrowRight,
  BookOpen,
  Clock,
  ShieldCheck,
  ThermometerSnowflake,
  Sparkles,
  ChevronDown,
  X,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';

export const UsaTrainingPageContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutPlan, setCheckoutPlan] = useState<{ name: string; price: string } | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

  const faqs = [
    {
      q: 'Do I need a large farm to take this online mushroom cultivation course?',
      a: 'No! Our Basic Cultivation module teaches you how to start a profitable mushroom business in small spaces like a spare room, garage, or basement using strictly controlled indoor environments.',
    },
    {
      q: 'Are the climate control methods suitable for my local weather?',
      a: 'Absolutely. The Advanced Commercial Training covers automated HVAC, humidifiers, and fogger systems that help you maintain the perfect fruiting temperatures indoors, regardless of how hot, cold, dry, or humid your outside weather conditions are.',
    },
    {
      q: 'How can I sell my mushrooms locally?',
      a: "The advanced program includes a dedicated module on B2B sales and marketing strategies. You will learn exactly how to approach local farmer's markets, organic grocery stores, and local restaurants for highly profitable wholesale tie-ups.",
    },
    {
      q: 'What payment methods are accepted for international students?',
      a: 'We accept all major global credit cards, debit cards, and PayPal. For your convenience and global accessibility, our course pricing is clearly listed in USD ($).',
    },
    {
      q: 'Is mushroom farming a profitable business model?',
      a: "Yes, specialty organic mushrooms like Oyster and Button carry a premium price tag ($10–$25/lb) at farmer's markets and organic stores worldwide. Our Advanced Commercial Training covers specific marketing and sales strategies to help you connect with high-paying local buyers, restaurants, and wholesalers to maximize your profit margins.",
    },
    {
      q: 'Do I need a large agricultural property to get started?',
      a: 'Not at all. Our step-by-step guides focus heavily on controlled indoor environments. The Basic Cultivation plan is perfect for utilizing small spaces like a spare bedroom, while the Advanced Plan teaches you how to scale up using vertical racking systems in commercial warehouses, basements, or large sheds.',
    },
    {
      q: 'Where will I get the equipment and mushroom spawn in my country?',
      a: 'Our training teaches you the fundamental universal principles of substrate preparation, sterilization, and climate control. The equipment required (like humidifiers, HEPA filters, and HVAC units) can be easily sourced from local hardware stores or global online retailers like Amazon. We also guide you on how to identify and select high-quality spawn from reliable regional suppliers near you.',
    },
    {
      q: 'How much time does it take to maintain a mushroom grow room daily?',
      a: 'Once your automated climate systems (covered in our Advanced Plan) are set up, daily maintenance is minimal. For a basic home setup, it takes less than 30 minutes a day to monitor humidity, temperature, and fresh air exchange.',
    },
    {
      q: 'Which mushroom varieties are best to grow in my specific climate?',
      a: 'We cover cultivation techniques for multiple varieties to ensure global success. For colder regions, traditional Button, Oyster, and Shiitake mushrooms are excellent choices. If you live in a hotter, tropical, or arid climate, our Advanced program includes training on high-temperature varieties like Milky Mushrooms, ensuring you can grow successfully no matter where you are located on the map.',
    },
    {
      q: 'Will I receive ongoing support after purchasing the course?',
      a: 'Absolutely. We understand that hands-on farming comes with unique challenges. Enrolling in our Advanced Commercial Training gives you exclusive access to our private community and ongoing technical support to help you troubleshoot any contamination issues or climate control problems as you scale your farm.',
    },
    {
      q: 'Are the climate control metrics easy to understand for international growers?',
      a: 'Yes, the training is designed to be universally applicable. We explain the exact science behind perfect humidity, airflow, and temperature control, making it easy to adapt the settings on your local thermostats and hygrometers, whether you measure in Celsius or Fahrenheit.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar />

      <main className="pt-24 md:pt-32 pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Award size={14} /> Global Commercial Curriculum
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black dark:text-white text-slate-900 mb-4 tracking-tight uppercase">
              Mushroom Cultivation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">
                Training USA & Global
              </span>
            </h1>

            {/* Region Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6 w-full max-w-sm mx-auto">
              <span className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs md:text-sm shadow-lg shadow-blue-500/25 leading-tight flex-1">
                <Globe size={14} /> USA & Global (USD)
              </span>
              <Link
                href="/training"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold text-xs md:text-sm transition-all hover:scale-105 active:scale-95 leading-tight flex-1 shadow-xs"
              >
                <Globe size={14} /> India (₹ INR)
              </Link>
            </div>

            <p className="max-w-2xl mx-auto text-xs md:text-sm dark:text-slate-400 text-slate-600 font-medium leading-relaxed">
              Mushroom farming is a highly profitable agribusiness worldwide. From dry desert heat to freezing winters, our training teaches you to master indoor climate control, vertical farming, and grow high-demand organic mushrooms year-round.
            </p>
          </div>

          {/* Pricing & Plans Section */}
          <div className="mb-14">
            <h2 className="text-lg md:text-2xl font-black text-center dark:text-white text-slate-900 mb-6 uppercase tracking-tight">
              Choose Your <span className="gradient-text font-black">Training Program</span>
            </h2>

            {paymentSuccess && (
              <div className="max-w-xl mx-auto border border-emerald-500/50 rounded-3xl p-8 text-center bg-emerald-500/10 backdrop-blur-md mb-8">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-2">Payment Successful!</h3>
                <p className="text-sm dark:text-slate-300 text-slate-700 mb-4">
                  Welcome to Organic Mushroom Farm Training. Your transaction reference is{' '}
                  <strong>{paymentSuccess}</strong>.
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                  We have received your enrollment and will email you the course login credentials shortly.
                </p>
                <button
                  onClick={() => setPaymentSuccess(null)}
                  className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                >
                  Back to Plans
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Plan 1: Basic ($39) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl p-6 sm:p-7 flex flex-col relative border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xl transition-all"
              >
                <div className="mb-3">
                  <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block">
                    Beginner / Home Scale
                  </span>
                  <h3 className="text-lg md:text-xl font-black dark:text-white text-slate-900 leading-tight">
                    Basic Cultivation Training
                  </h3>
                </div>

                <div className="mb-3 flex items-baseline gap-1.5 border-b border-slate-200 dark:border-white/10 pb-3">
                  <span className="text-3xl md:text-4xl font-black dark:text-white text-slate-900">$39</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">(One-Time Fee)</span>
                </div>

                <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 mb-4 flex items-center gap-1.5">
                  <Home size={14} /> Ideal For: Beginners, Homesteaders & Hobbyists
                </p>

                <div className="flex-grow">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">Key Learnings:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Oyster & Button mushroom indoor home setup.',
                      'Substrate boiling, lime soaking & basic sterilization.',
                      'Simple temperature, humidity & fresh air exchange control.',
                      'Harvesting protocols and domestic fresh storage.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setCheckoutPlan({ name: 'Basic Cultivation Mushroom Training', price: '39.00' })}
                  className="w-full mt-auto bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 text-white dark:text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md hover:scale-[1.01] active:scale-95"
                >
                  Enroll Now ($39 USD)
                </button>
              </motion.div>

              {/* Plan 2: Advanced Commercial ($97) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl p-6 sm:p-7 flex flex-col relative border-2 border-blue-500 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/20 backdrop-blur-md shadow-2xl transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-b-xl shadow-lg flex items-center gap-1">
                  <Sparkles size={12} /> Best Value
                </div>

                <div className="mb-3">
                  <span className="bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 inline-block shadow-xs">
                    Commercial Scale
                  </span>
                  <h3 className="text-lg md:text-xl font-black dark:text-white text-slate-900 leading-tight">
                    Advanced Commercial Master Training
                  </h3>
                </div>

                <div className="mb-3 flex items-baseline gap-1.5 border-b border-blue-500/30 pb-3">
                  <span className="text-3xl md:text-4xl font-black text-blue-600 dark:text-cyan-400">$97</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">(One-Time Fee)</span>
                </div>

                <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4 flex items-center gap-1.5">
                  <TrendingUp size={14} /> Ideal For: Entrepreneurs & Commercial Growers
                </p>

                <div className="flex-grow">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-blue-500 dark:text-cyan-400 mb-2.5">
                    Key Learnings:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Commercial farm layout, vertical racking systems & HVAC setup.',
                      'High-yield varieties (Button, Oyster, Milky, Shiitake) + Pest control.',
                      'Automated foggers, climate timers & environmental sensors.',
                      "Sales strategies for US Farmer's Markets, organic groceries & restaurants.",
                      'Official Certificate of Completion & Private Global Community Access.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm dark:text-slate-300 text-slate-700">
                        <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setCheckoutPlan({ name: 'Advanced Commercial Mushroom Training', price: '97.00' })}
                  className="w-full mt-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.01] active:scale-95"
                >
                  Enroll Now ($97 USD)
                </button>
              </motion.div>
            </div>
          </div>

          {/* Blueprint & Why Indoor Content Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
              <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-3 leading-tight">
                Build a Highly Profitable Organic Mushroom Farm: A Global Blueprint
              </h3>
              <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600 mb-3 leading-relaxed">
                The demand for fresh, locally grown organic mushrooms is skyrocketing worldwide. From bustling local
                farmer&apos;s markets to high-end restaurants and organic grocery chains (Whole Foods, Sprouts), buyers
                are constantly looking for premium-quality Oyster, Button, Lion&apos;s Mane, and specialty mushrooms.
              </p>
              <p className="text-xs md:text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                Our comprehensive online mushroom cultivation training program is specifically designed to help you tap
                into this lucrative agricultural market, no matter where you live. Whether you want to start a small
                homestead project in your basement or launch a full-scale commercial indoor mushroom farm, we provide
                the exact blueprints, climate control strategies, and scalable business models you need to succeed globally.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-1">
                Why Choose Indoor Mushroom Cultivation?
              </h3>

              <div className="flex gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                  <ThermometerSnowflake size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold dark:text-white text-slate-900 mb-1">Year-Round Harvest</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    With the right indoor climate setup, you become completely independent of outside weather
                    conditions. This allows for continuous, predictable income, whether you face freezing winters or
                    scorching summers.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <Home size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold dark:text-white text-slate-900 mb-1">High Yield, Small Space</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    You don&apos;t need acres of expensive agricultural land. Our training teaches you how to grow
                    hundreds of pounds of mushrooms in a standard spare room, garage, or custom grow tent using vertical
                    farming techniques.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold dark:text-white text-slate-900 mb-1">Fast Return on Investment (ROI)</h4>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    Unlike traditional crop farming, mushrooms have a rapid 3-4 week growth cycle. With our
                    step-by-step mushroom farming business plan, you can start seeing cash flow on your investment in
                    just a matter of weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive FAQs Section */}
          <div className="max-w-3xl mx-auto mb-14">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 uppercase tracking-tight">
                Frequently Asked <span className="gradient-text font-black">Questions (FAQs)</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Everything you need to know about international enrollment and global mushroom farming.
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
                        <span className="text-blue-500 shrink-0">Q:</span>
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
                          isOpen ? 'rotate-180 text-blue-500' : ''
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
          </div>
        </div>
      </main>

      {/* Checkout Modal */}
      <AnimatePresence>
        {checkoutPlan && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#121824] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200 dark:border-white/10 p-6 md:p-8"
            >
              <button
                onClick={() => setCheckoutPlan(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full">
                  International Enrollment
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-1">{checkoutPlan.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Total Investment: <strong className="text-blue-500">${checkoutPlan.price} USD</strong>
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPaymentSuccess('USA-' + Math.random().toString(36).substring(2, 9).toUpperCase());
                  setCheckoutPlan(null);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-wide">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  Proceed to Secure Checkout <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Footer */}
      <Footer />

      {/* Floating Elements (AI, Sticky buttons, Mobile Bottom Bar) */}
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
