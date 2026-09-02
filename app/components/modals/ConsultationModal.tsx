'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  Info,
  ShieldCheck,
  Send,
  Building2,
  GraduationCap,
  Briefcase,
  Sprout,
  MapPin,
} from 'lucide-react';
import { useAppModals } from './ModalContext';

export const ConsultationModal: React.FC = () => {
  const { activeModal, closeModal, modalData } = useAppModals();
  const isOpen = activeModal === 'consultation';

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // Math security check
  const [captcha] = useState({ num1: 4, num2: 5 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const [category, setCategory] = useState(modalData?.category || 'Commercial Turnkey Farm Setup');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          service: 'CONSULTATION',
          consultationCategory: category,
          budget: formValues.budget,
          preferredTime: formValues.preferredTime,
          message: `Consultation Request [${category}]: ${formValues.message || 'No additional note'} | Budget: ${formValues.budget || 'Not specified'} | Time: ${formValues.preferredTime || 'Anytime'}`,
          subject: `1-on-1 Consultation Request: ${formValues.name} (${category})`,
        }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit consultation request. Please try again.');
      }

      setSubmitted(true);
      setApiError('');
    } catch (err: any) {
      console.error('Consultation form error:', err);
      setApiError(err.message || 'Error scheduling consultation. You can also WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl my-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden text-slate-900 dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="relative p-5 sm:p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-white/20">
                <Sparkles size={12} /> Direct Agronomist Booking
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                Book Free Consultation
              </h3>
              <p className="text-xs text-emerald-100 font-medium mt-0.5">
                1-on-1 guidance for Turnkey Farm Setup, Training, Spawn & Jobs
              </p>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close consultation modal"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shrink-0 ml-2"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-black dark:text-white text-slate-900 mb-2">
                  Consultation Booked Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you! Our senior mushroom farming agronomist has received your request and will connect with you on WhatsApp/Phone at your requested slot.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20just%20booked%20a%20free%20consultation%20on%20the%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs inline-flex items-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle size={15} /> Open WhatsApp Now
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition-transform hover:scale-105"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {apiError && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 p-3.5 rounded-xl text-xs flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{apiError}</p>
                  </div>
                )}

                {/* Consultation Category Tabs */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Select Consultation Topic *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'Commercial Turnkey Farm Setup', label: 'Turnkey Farm Setup', icon: Building2 },
                      { id: 'Mushroom Cultivation Training', label: 'Training Courses', icon: GraduationCap },
                      { id: 'Spawn & Bulk Purchase', label: 'Spawn & Raw Material', icon: Sprout },
                      { id: 'Farm Site Visit & Audit', label: 'Site Visit Audit', icon: MapPin },
                      { id: 'Job & Agronomist Careers', label: 'Job / Careers', icon: Briefcase },
                      { id: 'General Subsidy & Business Plan', label: 'Subsidy & DPR Plan', icon: ShieldCheck },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setCategory(item.id)}
                        className={`p-2.5 rounded-xl text-left border text-xs font-bold transition-all flex flex-col justify-between gap-1.5 ${
                          category === item.id
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <item.icon size={16} />
                        <span className="text-[11px] leading-tight">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Sharma"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
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
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Your City / State *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Pune, Maharashtra"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                {/* Budget & Preferred Time */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Estimated Project Budget
                    </label>
                    <select
                      name="budget"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="Under ₹50,000">Under ₹50,000 (Home / Training)</option>
                      <option value="₹1 Lakh – ₹5 Lakhs">₹1 Lakh – ₹5 Lakhs (Semi-Commercial)</option>
                      <option value="₹5 Lakhs – ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs (Polyhouse Unit)</option>
                      <option value="₹15 Lakhs – ₹50 Lakhs">₹15 Lakhs – ₹50 Lakhs (Commercial PUF)</option>
                      <option value="₹50 Lakhs+ (Industrial)">₹50 Lakhs+ (Industrial Automation)</option>
                      <option value="Not Decided / Career Application">Not Decided / Career / Job Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      Preferred Call Time
                    </label>
                    <select
                      name="preferredTime"
                      className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM – 1 PM)</option>
                      <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM – 5 PM)</option>
                      <option value="Evening (5 PM - 8 PM)">Evening (5 PM – 8 PM)</option>
                      <option value="Immediate / As Soon As Possible">Immediate / ASAP on WhatsApp</option>
                    </select>
                  </div>
                </div>

                {/* Specific Queries */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Tell us about your land area, farming experience, or job resume details..."
                    className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
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
                    } rounded-lg px-3 py-2 text-xs sm:text-sm dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                    placeholder="Enter the correct sum"
                  />
                  {captchaError && <p className="text-red-500 text-[11px] mt-1 font-medium">{captchaError}</p>}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Booking Consultation...
                      </span>
                    ) : (
                      <>
                        <span>Confirm Consultation Booking</span> <Send size={15} />
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20book%20a%20free%20consultation%20with%20an%20agronomist."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shrink-0"
                  >
                    <MessageCircle size={16} /> WhatsApp Direct
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
