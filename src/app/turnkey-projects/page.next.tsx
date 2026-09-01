
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

const TurnkeyProjectsPage = () => {
  const [todayDate, setTodayDate] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    setTodayDate(new Date().toLocaleDateString());
  }, []);

  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null as string | null,
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: null });
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!formData.has("_subject")) {
      formData.append(
        "_subject",
        "Commercial Turnkey Mushroom Farm Enquiry - " + formData.get("name"),
      );
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        },
      );

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const errorText = await response.text();
        setFormState({
          submitting: false,
          succeeded: false,
          error: errorText || "Failed to submit form",
        });
      }
    } catch (err: any) {
      setFormState({
        submitting: false,
        succeeded: false,
        error: err.message || String(err),
      });
    }
  };

  const mushroomSetups = [
    {
      type: "Button Mushroom Setup (Agaricus bisporus)",
      description:
        "Our state-of-the-art commercial high-yield climate controlled units. Tailored for industrial scale, utilizing dense 80-100mm PUF panel walls, fully automated air handling units (AHU), and sophisticated chiller plants to maintain a constant 14-18°C temperature with automated composting support.",
      cost: "₹15 Lakhs - ₹1.5 Crore",
      keySpecs: [
        "Double tier MS/GI growing racks",
        "100mm Insulated PUF panel cold room doors",
        "High-pressure fogging humification",
        "Expert market and packing linkage",
      ],
      badge: "High Yield & Popular",
      icon: Layers,
    },
    {
      type: "Oyster Mushroom Setup (Pleurotus ostreatus)",
      description:
        "Elegant, cost-friendly, and perfect for highly rapid cultivation cycles. Features a low-overhead vertical structure utilizing suspension rope/hanging bags or modular compact steel frames. Highly productive with natural ventilation systems or basic air-cooling units for quick regional crops.",
      cost: "₹2 Lakhs - ₹10 Lakhs",
      keySpecs: [
        "Foliage suspended grow chambers",
        "Evaporative humidifier grids",
        "Optimal light diffusion layouts",
        "Extremely quick 28-day harvest cycles",
      ],
      badge: "Fast ROI",
      icon: Sprout,
    },
    {
      type: "Milky Mushroom Setup (Calocybe indica)",
      description:
        "Specially engineered for tropical and high-temperature regions. Uses durable agricultural row polyhouses, custom soil casing beds, and regional crop patterns. High temperature tolerance up to 35°C makes it extremely budget-friendly in power consumption and solar cooling designs.",
      cost: "₹3 Lakhs - ₹12 Lakhs",
      keySpecs: [
        "Naturally insulated crop polyhouse",
        "Sand-and-soil base casing parameters",
        "High solar ambient light design",
        "Long shelf-life post-harvest structure",
      ],
      badge: "Heat Tolerant",
      icon: Home,
    },
    {
      type: "Shiitake Mushroom Setup (Lentinula edodes)",
      description:
        "Advanced premium setup including autoclave sterilization chambers, specialized substrate bagging, and sterile laboratory inoculation rooms. High-yield production on sawdust blocks under precision photoperiod lighting (LED) and localized fine-mist water supply.",
      cost: "₹8 Lakhs - ₹35 Lakhs",
      keySpecs: [
        "High-pressure thermal autoclave unit",
        "HEPA filtered sterile inoculation booth",
        "Programmable humidity/irrigation controls",
        "Premium luxury market segment placement",
      ],
      badge: "Premium Margin",
      icon: ShieldCheck,
    },
    {
      type: "Enoki & Exotic Specialty Setup",
      description:
        "Precision-grade vertical bottle farming. Employs advanced smart environmental control units, sophisticated automated bottle-filling machinery, automated harvest cutting tools, and ultra-cooling sterilization setups. Intended for local luxury restaurants and worldwide commercial export channels.",
      cost: "₹25 Lakhs - ₹1.2 Crore",
      keySpecs: [
        "Sophisticated bottle culture mechanics",
        "Ultra-pure clean room air filters",
        "Dynamic temperature shock incubation",
        "Automated robot packing compatibility",
      ],
      badge: "Ultra Tech",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service"
        description="Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia."
        url="/turnkey-projects"
      />
      <PageHero
        badge="Commercial Turnkey Solutions"
        title="Commercial Farm Infrastructure"
        description="Ready-to-harvest mushroom units designed for high-yield precision and global export."
      />
      <CriticalParameters />

      <WhyChooseUs />

      {/* SEO-Optimized Commercial Farming Models Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">
              Infrastructure Models
            </div>
            <h2 className="mb-4 uppercase tracking-tight">
              Our Commercial{" "}
              <span className="gradient-text">Farming Models</span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
              Scale your operations and maximize your mushroom farm setup with
              our top-tier turnkey commercial structural designs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Standard Commercial Unit",
                cap: "10-15 tons/yr",
                investment: "₹15-20 Lakhs",
                icon: Home,
              },
              {
                title: "Industrial Unit",
                cap: "50+ tons/yr",
                investment: "₹60-80 Lakhs",
                icon: Layers,
              },
              {
                title: "Global Export Factory",
                cap: "200+ tons/yr",
                investment: "₹2 Cr+",
                icon: ShieldCheck,
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass p-3 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                  <model.icon size={28} />
                </div>
                <h3 className="dark:text-white text-slate-900 font-bold text-xl mb-2">
                  {model.title}
                </h3>
                <div className="text-primary-start font-black text-xs uppercase tracking-widest mb-6">
                  Commercial Capacity: {model.cap}
                </div>
                <div className="p-3 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 mb-5">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Est. Investment
                  </div>
                  <div className="text-sm font-bold dark:text-white text-slate-900">
                    {model.investment}
                  </div>
                </div>
                <a
                  href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20commercial%20turnkey%20mushroom%20farming.%20Please%20provide%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full py-2 rounded-xl text-xs font-bold uppercase tracking-widest block text-center"
                >
                  Enquire Details
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: SECTION FOR ALL TYPES OF MUSHROOM SETUP */}
      <section className="section-padding bg-slate-950/40 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">
              A to Z Project Portfolios
            </div>
            <h2 className="text-xl md:text-xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight uppercase">
              All Types of{" "}
              <span className="text-primary-start">Mushroom Farm Setup</span>
            </h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
              Our high-yield custom layouts focus on extreme climate automation,
              PUF panel cold rooms, and dynamic humification systems to
              guarantee max return on your commercial investment.
            </p>
          </div>

          <div className="space-y-10">
            {mushroomSetups.map((setup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 flex flex-col lg:flex-row gap-5 items-center hover:border-emerald-500/20 transition-all group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all">
                  <setup.icon size={36} />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="badge text-[9px] uppercase tracking-widest">
                      {setup.badge}
                    </span>
                    <h3 className="text-xl md:text-sm font-bold dark:text-white text-slate-900 tracking-tight">
                      {setup.type}
                    </h3>
                  </div>
                  <p className="dark:text-slate-400 text-slate-600 text-sm md:text-sm leading-relaxed">
                    {setup.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {setup.keySpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-emerald-500 shrink-0 mt-0.5"
                        />
                        <span className="text-xs font-semibold dark:text-slate-300 text-slate-700">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-auto shrink-0 bg-white/5 border border-white/10 rounded-[2rem] p-3 text-center space-y-4 lg:min-w-[240px]">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    Setup Investment Cost
                  </div>
                  <div className="text-xl font-extrabold text-primary-start">
                    {setup.cost}
                  </div>
                  <a
                    href={`https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20setting%20up%20a%20${encodeURIComponent(setup.type)}.%20Please%20share%20quotation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-primary-start hover:brightness-110 dark:text-white text-slate-900 w-full py-2 rounded-xl text-xs font-black uppercase tracking-widest block text-center transition-all"
                  >
                    Get Quotation
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: DYNAMIC INQUIRY FORM AT THE BOTTOM */}
      <section className="section-padding   relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.05),transparent_40%)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-5">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4">
              Instant Quotation & Project Planning
            </div>
            <h2 className="text-xl md:text-xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight uppercase">
              Turnkey Plant Setup Inquiry
            </h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-sm md:text-sm">
              Submit your project specifications below. Our tech specialists
              will outline custom layouts, calculate full machinery costs, and
              provide a comprehensive project brief.
            </p>
          </div>

          <div className="glass border dark:border-white/10 border-black/10 p-3 md:p-10 rounded-[2.5rem] shadow-2xl relative">
            {formState.succeeded ? (
              <motion.div
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 size={44} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold dark:text-white text-slate-900">
                      Enquiry Submitted Successfully!
                    </h3>
                  <p className="dark:text-slate-400 text-slate-600 text-sm max-w-sm mx-auto font-medium">
                    Thank you for submitting your project layout requirements.
                    Our lead engineer Tanish Soni will contact you via phone or
                    email shortly.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setFormState({
                      submitting: false,
                      succeeded: false,
                      error: null,
                    })
                  }
                  className="btn-outline px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <div className="space-y-6 text-center py-2">
                <h3 className="text-sm font-bold dark:text-white text-slate-900">Request Turnkey Details</h3>
                <p className="text-slate-500 text-sm mb-4">
                  For large scale and commercial setups, please provide your exact needs in our enquiry form.
                </p>
                <Link href="/enquiry"
                  className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-primary-start to-primary-end text-white font-bold tracking-wide hover:shadow-xl hover:scale-105 transition-all text-sm"
                >
                  Enquiry Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default TurnkeyProjectsPage;
