"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  PhoneCall,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  ArrowRight
} from "lucide-react";

export const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    farmScale: "Commercial Turnkey (2,000 - 3,500 Bags)",
    interest: "Complete Farm Setup & Turnkey AC Room",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send via WhatsApp
    const text = `*New Commercial Setup Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*State/City:* ${formData.state}\n*Scale:* ${formData.farmScale}\n*Interest:* ${formData.interest}\n*Message:* ${formData.message || "Please provide consultation and quotation."}`;
    const waUrl = `https://wa.me/919203544140?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");

    setIsSubmitted(true);
  };

  return (
    <section id="contact-consultation" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-linear-to-br from-purple-950/60 via-slate-900 to-slate-950 border border-purple-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Col: Info & Direct Call */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Direct Agronomy Advisory</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Ready to Build Your <span className="gradient-text">Commercial Farm?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our senior agronomists and engineering team at Jabalpur. We provide custom CAD civil layouts, HVAC tonnage calculations, bank-ready DPRs for 40-50% subsidies, and guaranteed spawn supply contracts.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 text-sm text-slate-200">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct WhatsApp & Calling Helpline</div>
                    <a href="tel:+919203544140" className="font-bold text-white hover:text-purple-300 transition-colors">
                      +91 9203544140
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-200">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Primary Commercial Farm & Bio-Lab</div>
                    <div className="font-bold text-white">
                      Katangi Road, Jabalpur, Madhya Pradesh - 483105, India
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-200">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Official Agronomy Support</div>
                    <a href="mailto:support@organicmushroomsfarm.com" className="font-bold text-white hover:text-blue-300 transition-colors">
                      support@organicmushroomsfarm.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Consultation Enquiry Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 shadow-2xl">
              <h3 className="text-lg font-black text-white mb-2">
                Request Free Turnkey Consultation & DPR
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill this quick form to receive an instant commercial blueprint on WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Thank You! Inquiry Sent.</h4>
                  <p className="text-xs text-slate-300">
                    We have redirected your details to our WhatsApp team (+91 9203544140). Our agronomist will respond within 15 minutes.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-purple-400 underline hover:text-purple-300 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">State / District</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Indore, Madhya Pradesh"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Intended Farm Scale</label>
                      <select
                        value={formData.farmScale}
                        onChange={(e) => setFormData({ ...formData, farmScale: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500"
                      >
                        <option>Home / Small Scale (500 - 1,000 Bags)</option>
                        <option>Commercial Turnkey (2,000 - 3,500 Bags)</option>
                        <option>Industrial Multi-Room (6,000+ Bags)</option>
                        <option>Pasteurization Tunnel Only (Phase-II)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-purple-500"
                    >
                      <option>Complete Farm Setup & Turnkey AC Room</option>
                      <option>Live Training Program (₹199 / ₹499)</option>
                      <option>High-Yield F1 Spawn Supply (Wholesale)</option>
                      <option>NABARD / NHB Subsidy DPR Project Report</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Additional Notes</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your available land, budget, or specific species..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-purple-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/30"
                  >
                    <span>Submit & Get Instant WhatsApp Blueprint</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
