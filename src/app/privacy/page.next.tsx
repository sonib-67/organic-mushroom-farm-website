
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

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | Organic Mushrooms Farm"
        description="Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm."
        url="/privacy"
      />
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your commercial data."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-3 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Data Collection
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We collect personal information such as your name, phone number,
              and email address when you register for commercial training, fill
              out an enquiry form, or contact us via WhatsApp.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. How We Use Data
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Your data is used to provide training access, respond to
              commercial consultancy queries, and send relevant updates about
              mushroom farming market trends globally. We do not sell your data
              to third parties.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. Data Protection
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We implement industry-standard security measures to protect your
              commercial information from unauthorized access or alteration.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. Third-Party Tools
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We use trusted third-party tools like WhatsApp for communication
              and Razorpay for secure payment processing. Each has its own
              privacy policy which you should review separately.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              5. Cookies Usage
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our website uses cookies to enhance your browsing experience and
              analyze site traffic. You can choose to disable cookies in your
              browser settings.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              6. Contact Info
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              If you have any questions regarding your privacy, please contact
              us at support@organicmushroomsfarm.com or call us at +91
              9203544140.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
