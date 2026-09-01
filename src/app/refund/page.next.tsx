
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Images, Camera, Play, Video, ArrowRight, X, ZoomIn, Info, HelpCircle, 
  ChevronDown, MessageCircle, FileText, Scale, Shield, AlertCircle, Phone, 
  Mail, MapPin, Search, Plus
} from 'lucide-react';
import SEO from '@/src/components/SEO';
import MushroomSEOSections from '@/src/components/MushroomSEOSections';

const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Refund Policy"
        description="Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm."
        url="/refund-policy"
      />
      <PageHero
        badge="Legal & Trust"
        title="Refund Policy & Guarantee"
        description="Transparent parameters for enrollment, consultancy credits, and project setup services."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-3 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Digital Training & Course Materials
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our Online Commercial Mushroom Training (priced at ₹399) provides
              instant access to proprietary video modules, premium SOP catalogs,
              and lifetime documentation resources. Because these materials are
              instantly downloadable and copyable, all payments for digital
              courses are <strong>strict and non-refundable</strong>.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. Practical Workshops
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              For our intensive 1-day offline workshops at Jabalpur (priced at
              ₹3000), we reserve seats and pre-order study kits/substrate
              ingredients. Cancellations requested over 72 hours prior to the
              event will be eligible for rescheduling to a future date at zero
              cost, but they are not eligible for cash refunds.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. Commercial Turnkey Projects
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Milestone payments made for climate-controlled PUF panel
              structures, Daikin refrigeration design, and industrial HVAC
              installations are guided by custom contracts. Once procurement is
              completed as per specifications, those specialized milestones are
              binding and non-refundable.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. Support & Handholding Guarantee
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              While biological yields are management-dependent, we offer a{" "}
              <strong>100% Support Guarantee</strong>. If your G1 spawn gets
              contaminated due to a technical lapse in our guide materials, we
              will replace the spawn batch absolutely free of charge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
