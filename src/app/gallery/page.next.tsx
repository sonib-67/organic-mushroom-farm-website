
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

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    {
      src: "/images/rakeshsoniorganicmushroomfarmexperttraininer.webp",
      category: "Expert Training",
      alt: "Rakesh Soni Expert Mushroom Farming Trainer",
    },
    {
      src: "/images/mushroom360viewimage.jpeg",
      category: "Farm View",
      alt: "Commercial Mushroom Farm 360 Degree View",
    },
    {
      src: "/images/buttonmushroomspawn.webp",
      category: "Premium Spawn",
      alt: "High Quality Button Mushroom Spawn Seeds",
    },
    {
      src: "/images/buttonmushroomroommaking.webp",
      category: "Farm Construction",
      alt: "Button Mushroom Growing Room Construction Process",
    },
    {
      src: "/images/butoonmushroomvsoystermushroom.webp",
      category: "Mushroom Guide",
      alt: "Detailed Comparison Between Button Mushroom and Oyster Mushroom",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
      category: "Commercial Infrastructure",
      alt: "Commercial Infrastructure Setup Mushroom Farm",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
      category: "All Types Mushroom",
      alt: "All Types High Yield Mushroom Farm",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
      category: "Mushroom Harvesting",
      alt: "Mushroom Harvesting Process Commercial",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
      category: "Enoki Setup",
      alt: "Indoor Mushroom Farming Enoki Setup",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378183/Screenshot_2026-01-17_141353_v8rgpt.png",
      category: "Organic Spawn",
      alt: "Organic Quality Spawn Seed Supply",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
      category: "Commercial Training",
      alt: "Mushroom Farming Training Students Offline",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
      category: "Harvest Process",
      alt: "Mushroom Harvest India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378144/img_9856_er5mbe.png",
      category: "Turnkey Infrastructure",
      alt: "Turnkey Project Mushroom Facility India",
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378148/img_6985_inr8qh.png",
      category: "Industrial Compost",
      alt: "Industrial Mushroom Compost Production",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Commercial Organic Mushrooms Farm Gallery | Project Photos & Setup"
        description="View photos of our commercial button mushroom farm in Katangi Road, Jabalpur, training sessions, and successful turnkey farming project setups across India."
        url="/gallery"
      />
      <PageHero
        badge="Commercial Ecosystem Tour"
        title="Visualizing Success"
        description="A glimpse into our commercial farms, expert training sessions, and high-quality organic produce."
      />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass border dark:border-white/10 border-black/10"
              >
                <img loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                 width="800" height="600" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6">
                    <span className="badge text-[10px]">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default GalleryPage;
