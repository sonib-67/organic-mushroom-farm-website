"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  Award,
  BookOpen,
  Layers,
  ShieldCheck,
  TrendingUp,
  Sprout,
  ShoppingBag,
  Building,
  MapPin,
  Calendar,
  Zap,
  CheckCircle2,
  Info,
  HelpCircle,
  Clock,
  ArrowRight,
  GraduationCap
} from "lucide-react";
import { DynamicGreeting } from "./DynamicGreeting";
import { TrainingModal } from "./TrainingModal";

interface SubMenuItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  subMenu?: SubMenuItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "#hero",
    icon: Sprout,
  },
  {
    name: "About",
    href: "#why-choose-us",
    icon: Info,
    subMenu: [
      { name: "360° Infrastructure", href: "#why-choose-us", description: "Clean rooms, chillers, & automation" },
      { name: "Grower Testimonials", href: "#testimonials", description: "Real farm owner yield case studies" },
      { name: "Certified Specifications", href: "#trust-stats", description: "ISO standards & F1 spawn lab" },
    ],
  },
  {
    name: "Models & Pricing",
    href: "#commercial-models",
    icon: Building,
    badge: "Turnkey",
    subMenu: [
      { name: "Model A (18×70 ft - 2,500 Bags)", href: "#commercial-models", badge: "Popular", description: "Commercial 2-Room standard setup" },
      { name: "Model B (24×80 ft - 3,500 Bags)", href: "#commercial-models", description: "High-yield dual climate unit" },
      { name: "Model C (4-Room - 6,000 Bags)", href: "#commercial-models", description: "Industrial multi-room capacity" },
      { name: "Interactive Setup Estimator", href: "#commercial-models", description: "Custom room size & CapEx calculator" },
    ],
  },
  {
    name: "Species",
    href: "#species-comparison",
    icon: Sprout,
    subMenu: [
      { name: "White Button Mushroom", href: "#species-comparison", description: "18-22% BE, 14-16°C cold room" },
      { name: "Oyster Mushroom (Dhingri)", href: "#species-comparison", description: "100-120% BE, 22-26°C tropical" },
      { name: "Milky Mushroom", href: "#species-comparison", description: "100% BE, 30-35°C high heat" },
      { name: "Cordyceps militaris", href: "#species-comparison", description: "Biotech medicinal export crop" },
    ],
  },
  {
    name: "Financial ROI",
    href: "#roi-calculator",
    icon: TrendingUp,
    badge: "Live Tool",
  },
  {
    name: "Agronomy SOP",
    href: "#production-sop",
    icon: Layers,
    subMenu: [
      { name: "Microclimate Parameters", href: "#critical-parameters", description: "Temp, Humidity, CO2 & Lux requirements" },
      { name: "Commercial Production SOP", href: "#production-sop", description: "Phase-I to Phase-IV timeline" },
      { name: "Bulk Pasteurization Tunnels", href: "#compost-units", description: "2000 & 3000 bag compost units" },
      { name: "Technical Guides & FAQs", href: "#knowledge-hub", description: "Downloadable SOPs & DPR checklist" },
    ],
  },
  {
    name: "Marketplace",
    href: "#marketplace",
    icon: ShoppingBag,
    badge: "B2B Trade",
    subMenu: [
      { name: "F1 Grain Spawn (Seed)", href: "#marketplace", description: "Certified pure lab master culture" },
      { name: "Fresh Harvest Mandi Supply", href: "#marketplace", description: "Daily hotel & retail bulk supply" },
      { name: "Dry Mushroom & Export", href: "#marketplace", description: "Solar dehydrated grade-A export" },
    ],
  },
  {
    name: "28 States",
    href: "#states-directory",
    icon: MapPin,
  },
  {
    name: "Advisory & DPR",
    href: "#contact-consultation",
    icon: Phone,
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0" },
  { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur" },
  { label: "Twitter", href: "https://x.com/mushroomfarmjbp" },
  { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282" },
  { label: "Telegram", href: "https://t.me/organicmushroomfarms" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [isTrainingModalOpen, setIsTrainingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy
      const sections = [
        "hero",
        "trust-stats",
        "why-choose-us",
        "commercial-models",
        "species-comparison",
        "roi-calculator",
        "critical-parameters",
        "production-sop",
        "compost-units",
        "testimonials",
        "marketplace",
        "knowledge-hub",
        "states-directory",
        "contact-consultation",
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elRect = el.getBoundingClientRect().top;
        const targetPos = elRect - bodyRect - offset;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth",
        });
        setActiveSection(targetId);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Desktop & Mobile Capsule Navbar */}
      <header
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-[-2px]" : ""
        }`}
      >
        <nav
          className="w-full backdrop-blur-xl bg-white/80 dark:bg-slate-950/85 border border-purple-500/20 shadow-[0_8px_32px_0_rgba(124,58,237,0.12)] rounded-2xl sm:rounded-[2rem] px-3 sm:px-5 py-2 flex items-center justify-between transition-all"
        >
          {/* Logo & Dynamic Greeting */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl overflow-hidden bg-purple-500/10 border border-purple-500/30 flex items-center justify-center p-1 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                alt="Organic Mushroom Farm Logo"
                className="w-full h-full object-contain"
                width="80"
                height="80"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm md:text-base font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                  Organic <span className="gradient-text">Mushroom Farm</span>
                </span>
                <span className="hidden xl:inline-block text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ISO 9001
                </span>
              </div>
              <DynamicGreeting />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;

              return (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-[11px] xl:text-xs font-bold transition-all flex items-center gap-1 px-2.5 py-1.5 rounded-xl leading-tight ${
                      isActive
                        ? "text-purple-600 dark:text-purple-300 bg-purple-500/10 border border-purple-500/20 shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full bg-purple-600 text-white">
                        {item.badge}
                      </span>
                    )}
                    {hasSubMenu && (
                      <ChevronDown
                        size={12}
                        className="text-slate-400 group-hover:rotate-180 transition-transform duration-200"
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {hasSubMenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-[100]">
                      <div className="w-64 p-2 rounded-2xl bg-white dark:bg-slate-950 border border-purple-500/20 shadow-2xl backdrop-blur-2xl space-y-1">
                        {item.subMenu!.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={(e) => handleNavClick(e, sub.href)}
                            className="block p-2.5 rounded-xl hover:bg-purple-500/10 transition-colors group/sub"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/sub:text-purple-400 transition-colors">
                                {sub.name}
                              </span>
                              {sub.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            {sub.description && (
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                {sub.description}
                              </p>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2">
            {/* Training Modal Trigger Button */}
            <button
              onClick={() => setIsTrainingModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-purple-600/30 transition-all active:scale-95 cursor-pointer"
            >
              <GraduationCap size={14} />
              <span>Book Training</span>
              <span className="text-[10px] opacity-90 px-1 py-0.2 rounded bg-white/20">₹199</span>
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20want%20consultation%20for%20Commercial%20Mushroom%20Farm%20Setup."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5 transition-all"
              title="WhatsApp Advisory"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">Helpline: +91 9203544140</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white"
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Interactive Training Modal */}
      <TrainingModal
        isOpen={isTrainingModalOpen}
        onClose={() => setIsTrainingModalOpen(false)}
      />

      {/* Mobile Drawer (Gesture Drag + Rich Touch Navigation) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.25 }}
              onDragEnd={(e, info) => {
                if (info.offset.y > 70 || info.velocity.y > 300) {
                  setMobileMenuOpen(false);
                }
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
              className="relative w-full max-h-[88vh] flex flex-col bg-white dark:bg-slate-950 rounded-t-[2rem] border-t border-purple-500/20 shadow-2xl z-10 overflow-hidden pb-6"
            >
              {/* Drawer Top Handle */}
              <div
                className="w-full flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
              </div>

              {/* Drawer Header & Live Ticker */}
              <div className="px-4 py-2 border-b border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 p-0.5 border border-purple-500/20">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      Organic Mushroom Farm
                    </span>
                    <div className="text-[10px] text-emerald-400 font-semibold">● Katangi Road, Jabalpur</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable Navigation Grid */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {/* Masterclass Training CTA Banner inside Drawer */}
                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsTrainingModalOpen(true);
                  }}
                  className="p-4 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between cursor-pointer shadow-lg shadow-purple-600/25"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full w-fit">
                      <GraduationCap size={12} />
                      <span>Live Masterclass</span>
                    </div>
                    <div className="text-sm font-black">Book Training Program</div>
                    <div className="text-[11px] opacity-90">Basic ₹199 / Commercial ₹499</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Grid Navigation Cards */}
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item) => {
                    const hasSub = item.subMenu && item.subMenu.length > 0;
                    const isExpanded = expandedMobileMenu === item.name;
                    const IconComp = item.icon;

                    if (hasSub) {
                      return (
                        <div
                          key={item.name}
                          className="col-span-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-black/5 dark:border-white/5 overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setExpandedMobileMenu(isExpanded ? null : item.name)
                            }
                            className="w-full p-3 flex items-center justify-between text-left"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                <IconComp size={15} />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white">
                                  {item.name}
                                </div>
                                {item.badge && (
                                  <span className="text-[9px] text-purple-400 font-semibold">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                            <ChevronDown
                              size={14}
                              className={`text-slate-400 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="px-3 pb-3 pt-1 space-y-1 border-t border-black/5 dark:border-white/5"
                              >
                                {item.subMenu!.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={(e) => handleNavClick(e, sub.href)}
                                    className="block p-2 rounded-xl hover:bg-purple-500/10 text-xs font-semibold text-slate-700 dark:text-slate-300"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{sub.name}</span>
                                      {sub.badge && (
                                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-400 font-bold">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-black/5 dark:border-white/5 flex flex-col gap-1.5 hover:border-purple-500/30 transition-all"
                      >
                        <div className="w-7 h-7 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                          <IconComp size={15} />
                        </div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </div>
                        {item.badge && (
                          <span className="text-[9px] text-emerald-500 font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* Direct Helpline in Mobile Drawer */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-emerald-500 font-bold uppercase">
                      Katangi Road Farm Office
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      +91 9203544140
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919203544140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-emerald-500 text-white text-xs font-bold"
                  >
                    Chat
                  </a>
                </div>

                {/* Social Channels */}
                <div className="pt-2 border-t border-black/5 dark:border-white/10 flex flex-wrap justify-center gap-3">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-purple-400"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
