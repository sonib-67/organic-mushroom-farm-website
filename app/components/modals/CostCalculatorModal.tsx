'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calculator,
  CheckCircle2,
  TrendingUp,
  FileText,
  MessageCircle,
  Sparkles,
  Layers,
  ArrowRight,
  Info,
  Send,
  Building2,
  Coins,
} from 'lucide-react';
import { useAppModals } from './ModalContext';

export const CostCalculatorModal: React.FC = () => {
  const { activeModal, closeModal, modalData } = useAppModals();
  const isOpen = activeModal === 'quote_calculator';

  // Calculator Parameters
  const [variety, setVariety] = useState<string>(modalData?.variety || 'Button Mushroom');
  const [areaSqFt, setAreaSqFt] = useState<number>(modalData?.area || 1000);
  const [infraType, setInfraType] = useState<'Polyhouse' | 'Evaporative' | 'PUF_Chamber'>('PUF_Chamber');

  // Lead Form
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // Math security check
  const [captcha] = useState({ num1: 5, num2: 3 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  // Dynamic Calculations based on Variety, Area and Infra
  const calculation = useMemo(() => {
    let baseCapexPerSqFt = 0;
    let yieldPerSqFtPerMonth = 0; // in kg
    let pricePerKg = 0;
    let opexRatio = 0.45; // 45% of gross revenue for raw materials, electricity, spawn, labour

    if (infraType === 'Polyhouse') {
      baseCapexPerSqFt = 450;
    } else if (infraType === 'Evaporative') {
      baseCapexPerSqFt = 850;
    } else {
      // PUF Chamber (Standard Automated)
      baseCapexPerSqFt = 1450;
    }

    if (variety === 'Button Mushroom') {
      yieldPerSqFtPerMonth = 1.4; // Multi-tier rack system gives 1.4 kg per sq ft footprint per month
      pricePerKg = 130;
      opexRatio = 0.42;
    } else if (variety === 'Oyster Mushroom') {
      yieldPerSqFtPerMonth = 1.8;
      pricePerKg = 110;
      opexRatio = 0.35;
      baseCapexPerSqFt *= 0.7; // Oyster needs simpler racks & cooling
    } else if (variety === 'Milky Mushroom') {
      yieldPerSqFtPerMonth = 1.5;
      pricePerKg = 140;
      opexRatio = 0.38;
      baseCapexPerSqFt *= 0.75;
    } else {
      // Shiitake / Medicinal
      yieldPerSqFtPerMonth = 0.9;
      pricePerKg = 600;
      opexRatio = 0.32;
      baseCapexPerSqFt *= 1.3;
    }

    const totalCapex = Math.round(areaSqFt * baseCapexPerSqFt);
    const monthlyYieldKg = Math.round(areaSqFt * yieldPerSqFtPerMonth);
    const monthlyGrossRevenue = Math.round(monthlyYieldKg * pricePerKg);
    const monthlyOpex = Math.round(monthlyGrossRevenue * opexRatio);
    const monthlyNetProfit = Math.max(0, monthlyGrossRevenue - monthlyOpex);
    const paybackMonths = monthlyNetProfit > 0 ? (totalCapex / monthlyNetProfit).toFixed(1) : '12+';

    return {
      totalCapex,
      monthlyYieldKg,
      monthlyGrossRevenue,
      monthlyOpex,
      monthlyNetProfit,
      paybackMonths,
      pricePerKg,
    };
  }, [variety, areaSqFt, infraType]);

  if (!isOpen) return null;

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(captchaAnswer, 10) !== captcha.num1 + captcha.num2) {
      setCaptchaError('Please solve the security sum correctly.');
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
          service: 'TURNKEY_SETUP_QUOTE',
          mushroomVariety: variety,
          growingArea: `${areaSqFt} sq ft (${infraType})`,
          estimatedCapex: `₹${calculation.totalCapex.toLocaleString('en-IN')}`,
          estimatedProfit: `₹${calculation.monthlyNetProfit.toLocaleString('en-IN')} / month`,
          message: `Custom Turnkey Setup Calculation Request for ${variety} (${areaSqFt} sq ft, ${infraType}). Estimated CAPEX: ₹${calculation.totalCapex.toLocaleString('en-IN')}, Yield: ${calculation.monthlyYieldKg} kg/mo, Profit: ₹${calculation.monthlyNetProfit.toLocaleString('en-IN')}/mo. Additional note: ${formValues.message || 'Send detailed BOQ & PDF project report.'}`,
          subject: `Detailed BOQ & Quotation Request: ${formValues.name} (${variety} - ${areaSqFt} sq ft)`,
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit quote request. Please try again.');
      }

      setSubmitted(true);
      setApiError('');
    } catch (err: any) {
      console.error('Quote calculator submission error:', err);
      setApiError(err.message || 'Failed to send request. You can also export to WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  const whatsAppText = `Hi, I calculated a Mushroom Farm Setup on your website:%0A- Variety: ${variety}%0A- Area: ${areaSqFt} sq ft%0A- Infrastructure: ${infraType}%0A- Estimated CAPEX: ₹${calculation.totalCapex.toLocaleString('en-IN')}%0A- Est. Monthly Yield: ${calculation.monthlyYieldKg} kg%0A- Est. Net Profit: ₹${calculation.monthlyNetProfit.toLocaleString('en-IN')}/month%0APlease share the detailed BOQ & PDF quotation.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl my-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden text-slate-900 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-5 sm:p-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-white/20">
                <Calculator size={12} /> Instant Turnkey Estimator
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Project Cost & Profit Calculator
              </h3>
              <p className="text-xs text-blue-100 font-medium mt-0.5">
                Calculate live CAPEX, monthly harvest yield, and ROI for your mushroom farm
              </p>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close calculator modal"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shrink-0 ml-2"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-black dark:text-white text-slate-900 mb-2">
                  Quotation Request Sent!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Our engineering team has received your project specifications ({variety}, {areaSqFt} sq ft). We are preparing your official BOQ and Detailed Project Report (DPR).
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919203544140?text=${whatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle size={15} /> Chat on WhatsApp Now
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : !showQuoteForm ? (
              <>
                {/* Step 1: Variety Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    1. Select Mushroom Variety
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { name: 'Button Mushroom', badge: 'High Volume' },
                      { name: 'Oyster Mushroom', badge: 'Fast 25-Day' },
                      { name: 'Milky Mushroom', badge: 'Summer Heat' },
                      { name: 'Medicinal / Shiitake', badge: 'High Margin' },
                    ].map((v) => (
                      <button
                        type="button"
                        key={v.name}
                        onClick={() => setVariety(v.name)}
                        className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          variety === v.name
                            ? 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-xs'
                            : 'border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          {v.badge}
                        </span>
                        <span className="text-xs font-bold leading-tight">{v.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Infrastructure Type */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    2. Infrastructure & Climate Control
                  </label>
                  <div className="grid sm:grid-cols-3 gap-2.5">
                    {[
                      {
                        id: 'Polyhouse' as const,
                        title: 'Seasonal Polyhouse',
                        desc: 'Low Capex, bamboo/GI frame with shade net & misting.',
                      },
                      {
                        id: 'Evaporative' as const,
                        title: 'Evaporative Polyhouse',
                        desc: 'Cooling pad + fogging tunnels for 8-month cropping.',
                      },
                      {
                        id: 'PUF_Chamber' as const,
                        title: 'Automated PUF Chamber',
                        desc: 'Full 12-month commercial HVAC climate control.',
                      },
                    ].map((infra) => (
                      <button
                        type="button"
                        key={infra.id}
                        onClick={() => setInfraType(infra.id)}
                        className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          infraType === infra.id
                            ? 'border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-xs'
                            : 'border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold dark:text-white text-slate-900">{infra.title}</span>
                            {infraType === infra.id && <CheckCircle2 size={14} className="text-indigo-500" />}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">{infra.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Area Slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      3. Growing Area (Square Feet)
                    </label>
                    <span className="text-sm font-black text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      {areaSqFt.toLocaleString('en-IN')} sq. ft.
                    </span>
                  </div>

                  <input
                    type="range"
                    min={300}
                    max={10000}
                    step={100}
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />

                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1.5">
                    <span>300 sq ft (Mini)</span>
                    <span>1,000 sq ft (Commercial)</span>
                    <span>5,000 sq ft (Large)</span>
                    <span>10,000 sq ft (Industrial)</span>
                  </div>
                </div>

                {/* Live Calculated Results Box */}
                <div className="p-4 sm:p-5 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Financial Output Summary
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <Sparkles size={12} /> Payback: ~{calculation.paybackMonths} Months
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        Est. Setup CAPEX
                      </span>
                      <span className="text-sm sm:text-base font-black dark:text-white text-slate-900">
                        ₹{calculation.totalCapex.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        Monthly Harvest
                      </span>
                      <span className="text-sm sm:text-base font-black text-blue-600 dark:text-blue-400">
                        {calculation.monthlyYieldKg.toLocaleString('en-IN')} kg
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">
                        Monthly OPEX
                      </span>
                      <span className="text-sm sm:text-base font-black text-slate-600 dark:text-slate-300">
                        ₹{calculation.monthlyOpex.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold block mb-1">
                        Net Monthly Profit
                      </span>
                      <span className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400">
                        ₹{calculation.monthlyNetProfit.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowQuoteForm(true)}
                    className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <FileText size={16} /> Request Official BOQ & PDF Quote <ArrowRight size={15} />
                  </button>

                  <a
                    href={`https://wa.me/919203544140?text=${whatsAppText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shrink-0"
                  >
                    <MessageCircle size={16} /> WhatsApp Quote
                  </a>
                </div>
              </>
            ) : (
              /* Step 4: Capture Details for PDF & BOQ */
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/10">
                  <h4 className="text-sm font-bold dark:text-white text-slate-900">
                    Get Custom BOQ Quotation ({variety}, {areaSqFt} sq ft)
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowQuoteForm(false)}
                    className="text-xs text-blue-500 hover:underline font-bold"
                  >
                    ← Back to Calculator
                  </button>
                </div>

                {apiError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-3.5 rounded-xl text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{apiError}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Singhania"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Farm Location (City/State) *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Bhopal, Madhya Pradesh"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Specific Requirements or Land Status
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Existing shed available, power line available, subsidy assistance needed, etc."
                    className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                {/* Anti-spam Math */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/10">
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
                    } rounded-lg px-3 py-2 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter the correct sum"
                  />
                  {captchaError && <p className="text-red-500 text-[11px] mt-1 font-medium">{captchaError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Generating Official Quotation...
                    </span>
                  ) : (
                    <>
                      <span>Send Me Detailed BOQ & PDF Quote</span> <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
