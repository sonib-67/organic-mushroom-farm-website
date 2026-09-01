
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

const ShippingPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Shipping Policy"
        description="Learn about the shipping and delivery guidelines of premium mushroom spawn (seed) and industrial farming equipment at Organic Mushrooms Farm."
        url="/shipping-policy"
      />
      <PageHero
        badge="Logistics & Delivery"
        title="Spawn Shipping & Logistics"
        description="How we safely package and ship high-grade G1 mushroom seed and equipment globally."
      />
      <section className="section-padding pt-0 pb-32">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert">
          <div className="glass p-3 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10">
            <h2 className="dark:text-white text-slate-900">
              1. Cold Chain & Insulated Packaging
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              Our First-Generation (G1) premium quality, certified mushroom
              spawn is a living organism. To maintain viability and prevent
              high-temperature exposure during transit, all spawn batches are
              packed in{" "}
              <strong>
                heavy-gauge insulated polystyrene boxes with commercial ice-gel
                packs
              </strong>
              . This guarantees that they remain below 25°C throughout
              transport.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              2. Processing & Lead Times
            </h2>
            <ul className="dark:text-slate-400 text-slate-600 space-y-2 list-disc pl-5">
              <li>
                <strong>Spawn Shipping:</strong> Shipped within 24 to 48 hours
                of order confirmation.
              </li>
              <li>
                <strong>Technical Equipment:</strong> Sensors, climate
                controllers, and customized racks are processed in 3–5 working
                days of engineering checklist completion.
              </li>
            </ul>

            <h2 className="dark:text-white text-slate-900 mt-10">
              3. Delivery Coverage (Pan-India & Global)
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              We partner with premier carriers (Delhivery, BlueDart, DTDC, and
              air express logistics) to deliver to all 28 States and 8 Union
              Territories in India. We also arrange phytosanitary certified
              export shipping to UAE, United Kingdom, United States, Canada,
              Nepal, and adjacent markets.
            </p>

            <h2 className="dark:text-white text-slate-900 mt-10">
              4. Handling & Damage Claims
            </h2>
            <p className="dark:text-slate-400 text-slate-600">
              If your package is damaged or delayed heavily, leading to spawn
              contamination or temperature damage, please record an unboxing
              video and send it to our official WhatsApp support number{" "}
              <strong>+91 9203544140</strong> within 24 hours of delivery. We
              will issue a replacement shipment immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPolicyPage;
