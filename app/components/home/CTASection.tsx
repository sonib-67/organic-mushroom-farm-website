'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: "",
  });

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="home-inquiry"
    >
      <div className="absolute inset-0 gradient-bg opacity-5 -z-10 blur-[120px]"></div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass p-3 md:p-12 lg:p-16 rounded-[3rem] border dark:border-white/10 border-black/10 relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-primary-start/10 blur-[80px] rounded-full group-hover:bg-primary-start/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-all duration-700"></div>

          <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Column: Context & Info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="badge">Direct Inquiry</div>
              <h2 className="text-xl md:text-xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight">
                Start Your Commercial{" "}
                <span className="gradient-text">Mushroom Project</span> Today
              </h2>
              <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                Connect directly with India's most trusted commercial mushroom
                agriculture consultants. Submit your details to get a customized
                site feasibility evaluation & project setup design model layout
                matching your resource availability.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  "Free pre-feasibility site evaluation guidance",
                  "Direct commercial G1 spawn delivery options",
                  "Subsidy assistance (NHB, NABARD & State-wise)",
                  "Complete HVAC, compost unit & lab setups",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-start/10 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle2 size={14} className="text-primary-start" />
                    </div>
                    <span className="text-sm dark:text-slate-300 text-slate-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700/20 pt-6 flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20starting%20mushroom%20farming.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto px-6 py-2 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-black"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919203544140"
                  className="btn-outline w-full sm:w-auto px-6 py-2 rounded-xl text-center text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2"
                >
                  Call +91 9203544140
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form / Success Screen */}
            <div className="lg:col-span-7">
              <div className="glass p-3 md:p-3 rounded-[2rem] border dark:border-white/5 border-black/5 dark:bg-slate-900/40 bg-white/40 backdrop-blur-xl">
                {formState.succeeded ? (
                  <motion.div
                    initial={{ opacity: 1, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto scale-110 border border-green-500/20">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold dark:text-white text-slate-900">
                        Inquiry Received!
                      </h3>
                      <p className="dark:text-slate-400 text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                        Thank you for your response. Our commercial farming
                        expert specialists will review your project scale and
                        contact you within 2 to 4 working hours.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setFormState({
                          submitting: false,
                          succeeded: false,
                          error: "",
                        })
                      }
                      className="px-6 py-2.5 rounded-lg text-xs bg-primary-start/10 hover:bg-primary-start/20 text-primary-start transition-colors font-bold uppercase tracking-wider"
                    >
                      Send Another Query
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-6 text-center">
                    <h3 className="text-sm font-bold dark:text-white text-slate-900">
                      Send Instant Inquiry
                    </h3>
                    <p className="text-slate-500 text-sm font-semibold mb-6">
                      Have questions about Mushroom Farming, Spawn, or Turnkey Projects? 
                      Submit your detailed requirements via our dedicated enquiry form and our experts will get back to you!
                    </p>
                    <Link
                      href="/enquiry"
                      className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-sm"
                    >
                      Enquiry Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
