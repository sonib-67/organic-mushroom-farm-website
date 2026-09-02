'use client';

import React, { useState } from 'react';
import {
  Phone,
  Calculator,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  Send,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const ButtonMushroomCTA: React.FC = () => {
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    farmScale: 'Commercial PUF Chamber (2,000+ sq ft)',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and contact phone number.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          location: formData.city,
          category: 'Button Mushroom Commercial Setup Inquiry',
          message: `Button Mushroom Lead: Farm Scale=${formData.farmScale}, City=${formData.city}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError('Could not submit inquiry. Please call or WhatsApp us directly at 9203544140.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass p-8 sm:p-12 rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Sparkles size={13} /> Turnkey Farm Engineering Pan-India
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-tight">
                Plan Your Turnkey Commercial Button Mushroom Facility
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                From precision HVAC chamber designing, Phase-II bulk pasteurization tunnels, and lab-grade F1 master spawn
                to bankable DPR project reports—Organic Mushrooms Farm provides end-to-end commercial solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>Lab-Certified F1 Hybrid Spawn</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>DPR & Bank Loan Subsidy Support</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>Chiller & AHU Climate Sizing</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>Buyback & B2B Market Connect</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => openQuoteCalculatorModal()}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <Calculator size={15} />
                  <span>Calculate Setup Cost</span>
                </button>
                <button
                  type="button"
                  onClick={() => openQuickOrderModal()}
                  className="px-5 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 dark:text-white text-slate-900 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <ShoppingBag size={15} />
                  <span>Order Master Spawn</span>
                </button>
                <a
                  href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20want%20to%20discuss%20Button%20Mushroom%20Commercial%20Setup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <Phone size={15} />
                  <span>WhatsApp: 9203544140</span>
                </a>
              </div>
            </div>

            {/* Right: Lead Capture Form */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-3xl border dark:border-white/10 border-black/10 shadow-xl bg-white/70 dark:bg-black/70">
                {submitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold dark:text-white text-slate-900">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Our commercial farm engineer will call you shortly with technical and financial specifications.
                    </p>
                    <a
                      href="https://wa.me/919203544140?text=I%20just%20submitted%20Button%20Mushroom%20inquiry."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
                    >
                      <Phone size={13} /> <span>WhatsApp Connect</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 block mb-0.5">
                        Technical Advisory
                      </span>
                      <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                        Request Project Consultation
                      </h3>
                    </div>

                    {error && (
                      <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500 text-xs font-semibold">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-semibold dark:text-slate-300 text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Verma"
                        className="w-full px-3 py-2 rounded-xl text-xs bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold dark:text-slate-300 text-slate-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3 py-2 rounded-xl text-xs bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold dark:text-slate-300 text-slate-700 mb-1">
                          Location / State
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Pune, MH"
                          className="w-full px-3 py-2 rounded-xl text-xs bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold dark:text-slate-300 text-slate-700 mb-1">
                        Proposed Facility Model
                      </label>
                      <select
                        value={formData.farmScale}
                        onChange={(e) => setFormData({ ...formData, farmScale: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl text-xs bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                      >
                        <option value="Commercial PUF Chamber (2,000+ sq ft)">
                          Commercial PUF Chamber (2,000+ sq ft)
                        </option>
                        <option value="Large Turnkey Facility (5,000+ sq ft with Tunnel)">
                          Large Turnkey Facility (5,000+ sq ft with Tunnel)
                        </option>
                        <option value="Seasonal Winter Bamboo Shed (Nov - Feb)">
                          Seasonal Winter Bamboo Shed (Nov - Feb)
                        </option>
                        <option value="Spawn & Ready Compost Supply Only">
                          Spawn & Ready Compost Supply Only
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-1 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Request Callback & DPR Guidance</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
