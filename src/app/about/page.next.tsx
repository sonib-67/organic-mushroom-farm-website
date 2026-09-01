
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

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeDo = [
    {
      title: "Commercial Mushroom Production",
      desc: "We produce premium quality button and oyster mushrooms using scientific organic methods in our state-of-the-art facility.",
      icon: Sprout,
    },
    {
      title: "Online Mushroom Training",
      desc: "Comprehensive digital modules for beginners. Start your commercial journey for just ₹399 with lifetime access.",
      icon: Play,
      price: "₹399",
    },
    {
      title: "Offline Practical Training",
      desc: "Hands-on practical sessions in our Jabalpur farm. Intensive commercial workshop at ₹3000 per person.",
      icon: Users,
      price: "₹3000",
    },
    {
      title: "Commercial Farm Setup",
      desc: "Complete turnkey solutions from shed insulation to climate control and global marketing support.",
      icon: Home,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Organic Mushrooms Farm | India's Mushroom Training Experts"
        description="Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally."
      />
      <PageHero
        badge="Our Commercial Journey"
        title="About Organic Mushrooms Farm | Global Setup Experts"
        description="Empowering modern India and global markets through sustainable, high-yield organic mushroom cultivation."
      />

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 1, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              
            >
              <div className="badge mb-4">Who We Are</div>
              <h2 className="mb-6 uppercase tracking-tight">
                Our Mission &{" "}
                <span className="gradient-text">
                  Vision for Organic Agriculture
                </span>
              </h2>
              <div className="space-y-6">
                <div className="glass p-3 border dark:border-white/5 border-black/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:scale-110 transition-transform">
                    <Briefcase size={60} />
                  </div>
                  <h3 className="dark:text-white text-slate-900 text-sm font-bold mb-2">
                      Our Mission
                    </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                    Our startup is dedicated to{" "}
                    <strong>
                      helping people start commercial mushroom farming
                      businesses
                    </strong>{" "}
                    with minimal risk and maximum precision. We bridge the gap
                    between theoretical knowledge and commercial success in
                    button and oyster mushroom production.
                  </p>
                </div>
                <div className="glass p-3 border dark:border-white/5 border-black/5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={60} />
                  </div>
                  <h3 className="dark:text-white text-slate-900 text-sm font-bold mb-2">
                      Our Vision
                    </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm leading-relaxed">
                    We aim to lead the revolution in{" "}
                    <strong>
                      promoting organic agriculture and self-employment
                    </strong>{" "}
                    across Madhya Pradesh, India, and internationally. Our
                    vision is to make every farmer a successful global
                    agri-entrepreneur through sustainable practices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-5 py-2 rounded-xl font-bold flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} /> Contact Us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="badge mx-auto mb-4">What We Do</div>
            <h2 className="uppercase tracking-tight">
              Core{" "}
              <span className="gradient-text">
                Mushroom Operations & Consultancy
              </span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 mt-4 max-w-2xl mx-auto">
              Providing end-to-end support for commercial{" "}
              <strong>button mushroom farming in India and globally</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-3 rounded-3xl border dark:border-white/5 border-black/5 text-center flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mx-auto mb-6">
                  <item.icon size={26} />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold text-sm mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                {item.price && (
                  <div className="text-xl font-black gradient-text mb-4">
                    {item.price}
                  </div>
                )}
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-start font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  Enquire Now <ArrowRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="badge mb-4">The Commercial Advantage</div>
              <h2 className="mb-5 uppercase tracking-tight">
                Why Choose{" "}
                <span className="gradient-text">
                  Us for Turnkey Projects?
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Expert Guidance",
                    desc: "Scientific methods and professional mentorship for high commercial yield.",
                    icon: Award,
                  },
                  {
                    title: "Beginner Friendly",
                    desc: "No background required. We train you from scratch for commercial success.",
                    icon: BookOpen,
                  },
                  {
                    title: "Affordable Pricing",
                    desc: "Best-in-class commercial training and setup at competitive rates globally.",
                    icon: Zap,
                  },
                  {
                    title: "Lifetime Support",
                    desc: "Continuous technical guidance even after commercial farm setup.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mb-4">
                      <item.icon size={20} />
                    </div>
                    <h4 className="dark:text-white text-slate-900 font-bold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
          </div>
          </div>
        </div>
      </section>

      {/* SEO Natural Text Section */}
      <section className="section-padding dark:bg-black/40 bg-slate-100/40">
        <div className="max-w-4xl mx-auto px-4 prose prose-invert text-center">
          <h3 className="text-xl md:text-sm font-bold dark:text-white text-slate-900 mb-5 uppercase tracking-tight leading-loose">
            Pioneering Commercial{" "}
            <span className="gradient-text">Organic Mushrooms Farm Katangi</span>{" "}
            & <Link href="/cities/madhya-pradesh/jabalpur" className="text-primary-start hover:underline">Jabalpur</Link>
          </h3>
          <p className="dark:text-slate-400 text-slate-600 text-sm md:text-sm leading-relaxed">
            Our commercial <strong>organic mushrooms farm in Katangi</strong>{" "}
            road, Jabalpur, serves as a model for aspiring farmers across the
            region and globe. We are proud to provide the most reliable{" "}
            <strong>mushroom training in Madhya Pradesh</strong>, focusing on
            the specific environmental needs of Central India and international
            exports. From climate-controlled grow rooms to industrial compost
            preparation, our <strong><Link href="/cities/madhya-pradesh/jabalpur" className="text-primary-start hover:underline">mushroom farming in Jabalpur</Link></strong>{" "}
            solutions ensure that you enter the global market with a competitive
            edge. Join us to build a sustainable commercial future with
            professional <strong>button mushroom farming in India</strong>.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;
