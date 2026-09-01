
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Users, Target, BookOpen, ExternalLink, Calendar,
  ArrowRight, ShieldCheck, MapPin, Play, Leaf, Award, Briefcase, Zap, Layers,
  Phone, Mail, MessageCircle, Star, Sparkles, Sprout
} from 'lucide-react';
import SEO from '@/src/components/SEO';
import MushroomSEOSections from '@/src/components/MushroomSEOSections';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="End-to-End Mushroom Farming Services | From Training to Turnkey Projects"
        description="Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide."
        url="/services"
      />
      <PageHero
        badge="Expert Setup Solutions"
        title="Our Comprehensive Commercial Services"
        description="Tailored commercial infrastructure and support systems for the modern mushroom farmer globally."
      />
      <EcosystemFlow />
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                id: "spawn-supply",
                title: "Organic Hybrid Spawn Supply",
                desc: "Top-tier genetics for maximum yield and disease resistance.",
                icon: Sprout,
              },
              {
                id: "compost-production",
                title: "Industrial Compost Production",
                desc: "Standardized Phase II & Phase III compost for commercial success.",
                icon: Layers,
              },
              {
                id: "consultancy",
                title: "Technical Setup Consultancy",
                desc: "Expert guidance from climate control to disease management.",
                icon: Info,
              },
              {
                id: "marketing-support",
                title: "Global Marketing Support",
                desc: "Connecting farmers with B2B buyers and export channels.",
                icon: TrendingUp,
              },
              {
                id: "cold-chain",
                title: "Cold Chain Logistics",
                desc: "Ensuring freshness from farm to market with specialized storage.",
                icon: Zap,
              },
              {
                id: "subsidy",
                title: "Subsidy Guidance",
                desc: "Legal and documentation support for government schemes.",
                icon: ShieldCheck,
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-3 rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={26} />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold text-xl mb-4">
                    {s.title}
                  </h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                  {s.desc}
                </p>
                <Link href={`/services/${s.id}`}
                  className="text-primary-start font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                  aria-label={`Learn more about ${s.title}`}
                  title={`Learn more about ${s.title}`}
                >
                  Learn More <span className="sr-only">about {s.title}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
};

export default ServicesPage;
