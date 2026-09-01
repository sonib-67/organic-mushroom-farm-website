
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

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service | Organic Mushrooms Farm"
        description="Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects."
        url="/terms"
      />
      <PageHero
        badge="Legal"
        title="Terms of Service"
        description="Our standardized commercial service agreement for training and farm setups."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-3 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Commercial Service Agreement
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              By enrolling in our training programs or contracting our
              commercial farm setup services, you agree to abide by the terms
              and conditions outlined below. Organic Mushrooms Farm provides
              technical consultancy and educational resources for mushroom
              farming business success.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. Payment Terms
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our current pricing for training is standardized at ₹399 for
              Online access and ₹3000 for Offline practical workshops.
              Commercial Turnkey project payments are structured in phases as
              per the project quotation provided.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. No Refund Policy
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Due to the digital nature of training materials and the resource
              allocation required for commercial workshops, all payments for
              training and consultancy are non-refundable. Please ensure your
              suitability for the program before making payments.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. User Responsibilities
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Users are responsible for maintaining the confidentiality of their
              training portal access. For commercial farm setups, the client
              must ensure site readiness and electricity requirements as per our
              technical specifications.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              5. Limitation of Liability
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              While we provide high-precision SOPs and infrastructure,
              biological yields depend on local commercial management. Organic
              Mushroom Farm is not liable for fluctuations in biological yields
              or market price changes of mushrooms globally.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              6. Governing Law
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              These terms are governed by and construed in accordance with the
              laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in Jabalpur, Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
