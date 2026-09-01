
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

const CustomerSupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Customer Support"
        description="Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation."
        url="/support"
      />
      <PageHero
        badge="Helpdesk"
        title="Customer Support & Helpline"
        description="We are committed to providing seamless handholding and customer service for agri-entrepreneurs."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-3 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900 mb-6">
              Contact Channels & Operations
            </h2>
            <p className="dark:text-slate-400 text-slate-600 mb-5">
              Whether you are tracking a spawn shipment, solving commercial
              cooling ventilation errors, or applying for government NHB
              subsidies, our specialized desk is ready to assist you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="p-3 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-2">
                  📞 Direct Hotline
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Talk to senior technical advisors directly for instant
                  commercial support.
                </p>
                <a
                  href="tel:+919203544140"
                  className="text-primary-start font-bold text-sm hover:underline"
                >
                  +91 9203544140
                </a>
              </div>
              <div className="p-3 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                <h3 className="text-sm font-bold dark:text-white text-slate-900 mb-2">
                  💬 WhatsApp Support
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Fast tracking, photo sharing, invoice support, and SOP
                  questions.
                </p>
                <a
                  href="https://wa.me/919203544140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 rounded-lg text-white font-bold hover:bg-green-600 transition-colors text-sm"
                >
                  Send WhatsApp Message
                </a>
              </div>
            </div>

            <h2 className="dark:text-white text-slate-900 mt-10">
              Helpline Operational Timings
            </h2>
            <ul className="dark:text-slate-400 text-slate-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Monday to Sunday:</strong> 08:00 AM to 08:00 PM (IST)
              </li>
              <li>
                <strong>Email Assistance:</strong>{" "}
                support@mushroomtraining.online (Responded to within 4 working
                hours)
              </li>
              <li>
                <strong>Physical Farm Visit Address:</strong> Katangi Link Road,
                Jabalpur, Madhya Pradesh, India (Prior appointment required)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportPage;
