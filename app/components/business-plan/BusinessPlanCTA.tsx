'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Calculator,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Loader2,
} from 'lucide-react';
import { useAppModals } from '../modals/ModalContext';

export const BusinessPlanCTA: React.FC = () => {
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    variety: 'Oyster Mushroom',
    budget: '₹50,000 - ₹2 Lakhs',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number.');
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
          category: 'Mushroom Business Plan Consultation',
          message: `Business Plan Lead: Variety=${formData.variety}, Budget=${formData.budget}, City=${formData.city}`,
        }),
      });

      if (!res.ok) {
        throw new Error('Could not submit inquiry');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError('Failed to submit. Please call or WhatsApp us directly at 9203544140.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass p-8 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-500 border border-emerald-500/20">
                <Sparkles size={13} /> Turnkey Farm Support Pan-India
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-tight">
                Ready to Build Your Profitable Mushroom Farm in 2026?
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you need certified F1 hybrid spawn, online/offline hands-on training, a bankable DPR project report,
                or a complete turnkey climate-controlled facility—Organic Mushrooms Farm provides end-to-end guidance.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Lab-Grade Certified Spawn Supply</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>DPR & Bank Loan Subsidy Support</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Hands-on Farm Training & SOPs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold dark:text-slate-200 text-slate-700">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Guaranteed Buyback & Market Connect</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => openQuoteCalculatorModal()}
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
                >
                  <Calculator size={16} />
                  <span>Calculate ROI & Cost</span>
                </button>
                <button
                  type="button"
                  onClick={() => openQuickOrderModal()}
                  className="px-5 py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 dark:text-white text-slate-900 text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
                >
                  <ShoppingBag size={16} />
                  <span>Order Spawn Bags</span>
                </button>
                <a
                  href="https://wa.me/919203544140?text=Hello%20Organic%20Mushrooms%20Farm,%20I%20want%20to%20discuss%20my%20mushroom%20farming%20business%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold border border-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>WhatsApp: 9203544140</span>
                </a>
              </div>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="lg:col-span-5">
              <div className="glass p-6 sm:p-8 rounded-3xl border dark:border-white/10 border-black/10 shadow-xl bg-white/70 dark:bg-black/70">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold dark:text-white text-slate-900">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Our senior agri-consultant will call you within 2 business hours with a custom project proposal.
                    </p>
                    <a
                      href="https://wa.me/919203544140?text=I%20just%20submitted%20the%20business%20plan%20form."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
                    >
                      <Phone size={14} /> <span>Connect on WhatsApp Instantly</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 block mb-1">
                        Instant Callback
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900">
                        Request Custom Project Proposal
                      </h3>
                    </div>

                    {error && (
                      <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 text-xs font-semibold">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Jabalpur, MP"
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">
                          Target Variety
                        </label>
                        <select
                          value={formData.variety}
                          onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                        >
                          <option value="Oyster Mushroom">Oyster Mushroom</option>
                          <option value="Button Mushroom">Button Mushroom</option>
                          <option value="Milky Mushroom">Milky Mushroom</option>
                          <option value="Shiitake / Exotic">Shiitake / Exotic</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-black/5 dark:bg-white/5 border dark:border-white/10 border-black/10 focus:outline-none focus:border-emerald-500 dark:text-white text-slate-900"
                        >
                          <option value="₹25k - ₹50k (Small Pilot)">₹25k - ₹50k (Small Pilot)</option>
                          <option value="₹50k - ₹2 Lakhs">₹50k - ₹2 Lakhs</option>
                          <option value="₹2 Lakhs - ₹5 Lakhs">₹2 Lakhs - ₹5 Lakhs</option>
                          <option value="₹5 Lakhs - ₹25 Lakhs+ (Turnkey)">₹5 Lakhs - ₹25 Lakhs+ (Turnkey)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Submit & Get Free Consultation</span>
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
