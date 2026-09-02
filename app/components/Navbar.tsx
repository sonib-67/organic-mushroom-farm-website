"use client";
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Instagram, Twitter, Linkedin, Facebook, Youtube, 
  Home, Info, Award, Zap, BookOpen, Layers, ShieldCheck, Calendar, Images, MapPin, MessageCircle, ChevronDown
} from 'lucide-react';
import DynamicGreeting from './DynamicGreeting';

const PinterestIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5-.1-1.3-.1-3.3.1-4.7l1.7-7.2s-.4-1-.4-2.4c0-2.3 1.3-4 3-4 1.4 0 2.1 1.1 2.1 2.4 0 1.4-.9 3.6-1.4 5.6-.4 1.7.8 3.1 2.4 3.1 2.9 0 5-3.5 5-7.9 0-3.5-2.4-6-6.4-6-4.5 0-7.3 3.3-7.3 7 0 1.3.4 2.3 1 3 .1.1.1.3 0 .5l-.3 1.3c-.1.2-.2.3-.5.1-1.4-.7-2-2.3-2-3.8 0-3.3 2.6-7.4 8.4-7.4 4.7 0 7.9 3.4 7.9 7.4 0 4.9-2.8 8.6-6.9 8.6-1.3 0-2.6-.7-3-1.6l-.8 3.3c-.3 1.1-.9 2.2-1.4 3C10.5 21.9 11.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
  </svg>
);
const TelegramIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17 7.5a2.25 2.25 0 0 0-.126 4.095l4.762 1.49 11.082-9.66-8.995 10.155v4.542c0 .88.583 1.135 1.053 1.25.467.114 1.178-.052 1.545-.417l3.29-3.213 5.424 4.004a2.25 2.25 0 0 0 3.524-1.282l3.414-16.5a2.25 2.25 0 0 0-2.951-2.18z" />
  </svg>
);
const QuoraIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM14.9 14.2c.4 1 1.7 3.3 3.1 3.3M9.7 13.9C8 12.8 7 11 7 9.1c0-3.3 2.2-5.1 5-5.1s5 1.8 5 5.1c0 2-1 3.9-2.8 5l-4.5 3.1" />
  </svg>
);

const NAV_ITEMS = [
  { name: "Home", href: "/", isExternal: false, icon: Home },
  {
    name: "About",
    href: "/about",
    isExternal: false,
    icon: Info,
    subMenu: [
      { name: "Our Story", href: "/about" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    name: "Training",
    href: "/training",
    isExternal: false,
    icon: Award,
  },
  {
    name: "Equipment",
    href: "/equipment",
    isExternal: false,
    icon: Zap,
  },
  {
    name: "Learning",
    href: "/mushroom-types",
    isExternal: false,
    icon: BookOpen,
    subMenu: [
      { name: "Mushroom Types", href: "/mushroom-types" },
      { name: "Business Plan", href: "/business-plan" },
      { name: "ROI Calculator", href: "/roi-calculator" },
      { name: "Daily Prices", href: "/mushroom-price-today" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    isExternal: false,
    icon: Layers,
    subMenu: [
      { name: "Spawn Supply", href: "/spawn-seed" },
      { name: "Compost Production", href: "/services/compost-production" },
      { name: "Consultancy", href: "/services/consultancy" },
      { name: "Marketing Support", href: "/services/marketing-support" },
      { name: "Cold Chain", href: "/services/cold-chain" },
      { name: "Government Subsidy", href: "/subsidy" },
      { name: "Franchise", href: "/mushroom-franchise" },
    ],
  },
  {
    name: "Turnkey Projects",
    href: "/turnkey-projects",
    isExternal: false,
    icon: ShieldCheck,
  },
  {
    name: "Workshop",
    href: "/workshop",
    isExternal: false,
    icon: Calendar,
  },
  { name: "Gallery", href: "/gallery", isExternal: false, icon: Images },
  { name: "Live Weather", href: "/mushroom-farm-climate-tracker", isExternal: false, icon: MapPin },
  { name: "Blog", href: "/blog", isExternal: false, icon: BookOpen },
  { name: "FAQ", href: "/faq", isExternal: false, icon: MessageCircle },
  {
    name: "Contact",
    href: "/contact",
    isExternal: false,
    icon: Phone,
    subMenu: [
      { name: "Contact Us", href: "/contact" },
      { name: "On Site Visit", href: "/on-site-consultation" },
      { name: "Call Now", href: "tel:9203544140" }
    ]
  }
];

const Navbar = () => {
  const pathname = usePathname();
  const location = { pathname, hash: "" };
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const handleScrollSpy = () => {
      setActiveSection(null);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: mobileMenuOpen }));
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  if (location.pathname === "/workshop") return null;

  return (
    <>
      <nav
        className={`fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl z-50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] py-2.5 md:py-2 px-3 sm:px-5 md:px-6 lg:px-4 xl:px-5 transition-all duration-300 rounded-[2rem] ${isScrolled ? "translate-y-[-2px]" : ""}`}
        style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)' }}
      >
        <div className="flex items-center justify-between">
          <NextLink
            href="/"
            className="flex items-center gap-1.5 sm:gap-3 group shrink-0"
          >
            <img
              src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
              alt="Organic Mushrooms Farm"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 shrink-0 object-contain group-hover:scale-110 transition-transform"
             width="120" height="120" />
            <div className="flex flex-col">
              <span className="text-[14px] xs:text-[16px] sm:text-sm md:text-xl lg:text-[12px] xl:text-[15px] 2xl:text-sm font-bold tracking-tight dark:text-white text-slate-900 leading-tight">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
              <DynamicGreeting />
            </div>
          </NextLink>

          <div className="flex items-center gap-2 xl:gap-4 ml-auto">

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 overflow-x-auto no-scrollbar">
            {NAV_ITEMS.map((item) => {
              const isHashLink = item.href.includes("#");
              const hash = isHashLink ? item.href.split("#")[1] : null;

              const isActive = isHashLink
                ? location.pathname === "/" && activeSection === hash
                : location.pathname === item.href &&
                  !location.hash &&
                  activeSection === null;

              const linkProps =
                isHashLink && location.pathname === "/"
                  ? {
                      href: `#${hash}`,
                      onClick: (e: any) => {
                        e.preventDefault();
                        const element = document.getElementById(hash!);
                        if (element) {
                          const offset = 100;
                          const bodyRect =
                            document.body.getBoundingClientRect().top;
                          const elementRect =
                            element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                          window.history.pushState(null, "", `/#${hash}`);
                        }
                      },
                    }
                  : { href: item.href };

              if (isHashLink) {
                return (
                  <div key={item.name} className="relative">
                    {location.pathname === "/" ? (
                      <a
                        {...linkProps}
                        className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <NextLink
                        href={item.href}
                        className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                      >
                        {item.name}
                      </NextLink>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-2 right-2 xl:left-3 xl:right-3 h-0.5 gradient-bg rounded-full"
                      />
                    )}
                  </div>
                );
              }

              const hasSubMenu =
                (item as any).subMenu && (item as any).subMenu.length > 0;

              return (
                <div key={item.name} className="relative group">
                  <NextLink
                    href={item.href}
                    className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`}
                  >
                    {item.name}
                    {hasSubMenu && (
                      <ChevronDown
                        size={14}
                        className="group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </NextLink>
                  {hasSubMenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-[100]">
                      <div className="glass p-2 min-w-[200px] rounded-xl border dark:border-white/10 border-black/10 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)]">
                        {(item as any).subMenu!.map((sub: any) => (
                          <NextLink
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-[12px] font-bold dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white hover:dark:bg-white/10 bg-black/10 rounded-lg transition-all"
                          >
                            {sub.name}
                          </NextLink>
                        ))}
                      </div>
                    </div>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 gradient-bg rounded-full"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden dark:text-white text-slate-900 p-2 focus:outline-none"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden flex flex-col justify-end">
            {/* NO BLUR Overlay - Solid 70% opacity black */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/30 dark:bg-black/40 backdrop-blur-[12px]"
            />

            {/* Fast Sliding Drawer with Drag - SOLID COLORS, NO BLUR */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.2 }}
              onDragEnd={(e, info) => {
                if (info.offset.y > 60 || info.velocity.y > 200) {
                  setMobileMenuOpen(false);
                }
              }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.2,
              }}
              style={{ willChange: "transform" }}
              className="relative w-full max-h-[85vh] flex flex-col bg-white dark:bg-[#18181b] rounded-t-[2rem] shadow-2xl pb-safe z-[9999] overflow-hidden"
            >
              {/* STATIC Soft Top Gradient (Instead of animated glow) */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 dark:from-emerald-400/5 to-transparent pointer-events-none" />

              {/* Drawer Handle */}
              <div 
                className="w-full flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing relative z-20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
              </div>

              {/* Header with Inline Live Ticker */}
              <div className="flex items-center gap-3 px-4 pb-3 pt-1 w-full relative z-20">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-6 h-6 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden p-0.5">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Farm Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[13px] font-bold tracking-tight dark:text-white text-slate-900 hidden sm:block">
                    Menu
                  </span>
                </div>
                
                <div className="flex-1 overflow-hidden h-7 bg-white dark:bg-slate-800 rounded-full flex items-center shadow-inner border border-slate-200 dark:border-slate-700">
                   <div className="w-full overflow-hidden flex items-center h-full">
                     <motion.div 
                       className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase flex items-center h-full pt-0.5"
                       animate={{ x: [0, -600] }}
                       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                       style={{ willChange: "transform" }}
                     >
                       <span className="mx-4">India 24.4°C, Hum 88% 🌡️</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">New Batch Opens Soon 🍄</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">Turnkey Setup Consultation 📞</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">India 24.4°C, Hum 88% 🌡️</span>
                       <span className="mx-4">•</span>
                       <span className="mx-4">New Batch Opens Soon 🍄</span>
                     </motion.div>
                   </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="shrink-0 dark:text-white text-slate-900 p-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Grid Menu Content */}
              <div className="flex-1 overflow-y-auto px-4 pb-8 pt-1 hide-scrollbar relative z-20">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item, i) => {
                    const isHashLink = item.href.includes("#");
                    const hash = isHashLink ? item.href.split("#")[1] : null;
                    const isActive = isHashLink
                      ? location.pathname === "/" && activeSection === hash
                      : location.pathname === item.href &&
                        !location.hash &&
                        activeSection === null;

                    const hasSubMenu = (item as any).subMenu && (item as any).subMenu.length > 0;
                    const isExpanded = expandedMobileMenu === item.name;

                    const baseCardClass = `relative w-full overflow-hidden rounded-2xl border transition-colors duration-150 ${isActive ? "border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/10" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"}`;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.15, ease: "easeOut" }}
                        className={hasSubMenu ? "col-span-2 sm:col-span-1" : "col-span-1"}
                      >
                        {hasSubMenu ? (
                          <div className={baseCardClass}>
                            <button
                              onClick={() => {
                                setExpandedMobileMenu((prev) =>
                                  prev === item.name ? null : item.name,
                                );
                              }}
                              className="w-full flex items-center justify-between p-2.5"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}>
                                  {item.icon && <item.icon size={12} />}
                                </div>
                                <span className={`text-[11px] font-bold ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"}`}>
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown
                                size={12}
                                className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""} ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}
                              />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden  dark:bg-slate-900/50"
                                >
                                  <div className="px-3 py-1 flex flex-col gap-0.5 border-t border-slate-100 dark:border-slate-700">
                                    {(item as any).subMenu.map((sub: any, subI: number) => (
                                      <NextLink
                                        key={sub.name}
                                        href={sub.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400 pl-6 relative"
                                      >
                                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        {sub.name}
                                      </NextLink>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <NextLink
                            href={item.href}
                            onClick={(e) => {
                              if (isHashLink && location.pathname === "/") {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                const element = document.getElementById(hash);
                                if (element) {
                                  const offset = 80;
                                  const bodyRect = document.body.getBoundingClientRect().top;
                                  const elementRect = element.getBoundingClientRect().top;
                                  const offsetPosition = (elementRect - bodyRect) - offset;
                                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                  window.history.pushState(null, "", `/#${hash}`);
                                }
                              } else {
                                setMobileMenuOpen(false);
                              }
                            }}
                            className={`${baseCardClass} flex flex-col items-start justify-center p-2.5 min-h-[60px]`}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1.5 ${isActive ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}>
                              {item.icon && <item.icon size={12} />}
                            </div>
                            <span className={`text-[11px] font-bold ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"}`}>
                              {item.name}
                            </span>
                          </NextLink>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Social Links */}
                <div className="mt-6 mb-2 flex justify-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/organic.mushroom.farm0", icon: Facebook },
                    { label: "Instagram", href: "https://www.instagram.com/organic_mushroom_farm_jabalpur", icon: Instagram },
                    { label: "Twitter", href: "https://x.com/mushroomfarmjbp", icon: Twitter },
                    { label: "YouTube", href: "https://www.youtube.com/@organicmushroomfarm", icon: Youtube },
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/organic-mushroom-farm-29b970282?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
                    { label: "Pinterest", href: "https://www.pinterest.com/organicmushroomfarm", icon: PinterestIcon },
                    { label: "Telegram", href: "https://t.me/organicmushroomfarms", icon: TelegramIcon },
                    { label: "Quora", href: "https://www.quora.com/profile/Organic-Mushroom-Farm-1?ch=10&oid=3146591367&share=4e39c3cd&srid=5xCPIb&target_type=user", icon: QuoraIcon }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all active:scale-95"
                      aria-label={social.label}
                    >
                      <social.icon size={18} strokeWidth={2} />
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
