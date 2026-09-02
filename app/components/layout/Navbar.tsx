'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Info,
  Award,
  Zap,
  BookOpen,
  Layers,
  ShieldCheck,
  Calendar,
  Images,
  MapPin,
  MessageCircle,
  Phone,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { DynamicGreeting } from './DynamicGreeting';

interface SubMenuItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  subMenu?: SubMenuItem[];
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  {
    name: 'About',
    href: '/about',
    icon: Info,
    subMenu: [
      { name: 'Our Story', href: '/about' },
      { name: 'Success Stories', href: '/success-stories' },
    ],
  },
  {
    name: 'Training',
    href: '/training',
    icon: Award,
  },
  {
    name: 'Equipment',
    href: '/equipment',
    icon: Zap,
  },
  {
    name: 'Learning',
    href: '/mushroom-types',
    icon: BookOpen,
    subMenu: [
      { name: 'Mushroom Types', href: '/mushroom-types' },
      { name: 'Business Plan', href: '/business-plan' },
      { name: 'ROI Calculator', href: '/roi-calculator' },
      { name: 'Daily Prices', href: '/mushroom-price-today' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    icon: Layers,
    subMenu: [
      { name: 'Spawn Supply', href: '/spawn-seed' },
      { name: 'Compost Production', href: '/services/compost-production' },
      { name: 'Consultancy', href: '/services/consultancy' },
      { name: 'Marketing Support', href: '/services/marketing-support' },
      { name: 'Cold Chain', href: '/services/cold-chain' },
      { name: 'Government Subsidy', href: '/subsidy' },
      { name: 'Franchise', href: '/mushroom-franchise' },
    ],
  },
  {
    name: 'Turnkey Projects',
    href: '/turnkey-projects',
    icon: ShieldCheck,
  },
  {
    name: 'Workshop',
    href: '/workshop',
    icon: Calendar,
  },
  { name: 'Gallery', href: '/gallery', icon: Images },
  { name: 'Live Weather', href: '/mushroom-farm-climate-tracker', icon: MapPin },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'FAQ', href: '/faq', icon: MessageCircle },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
    subMenu: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'On Site Visit', href: '/on-site-consultation' },
      { name: 'Call Now', href: 'tel:9203544140' },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }
    window.dispatchEvent(new CustomEvent('mobileMenuToggle', { detail: mobileMenuOpen }));
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname === '/workshop') return null;

  return (
    <>
      {/* Top Floating Glass Capsule Navbar */}
      <nav
        id="main-navbar"
        className={`fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl z-50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] py-2.5 md:py-2 px-3 sm:px-5 md:px-6 lg:px-4 xl:px-5 transition-all duration-300 rounded-[2rem] ${
          isScrolled ? 'translate-y-[-2px]' : ''
        }`}
        style={{
          background:
            'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Dynamic Greeting */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 group shrink-0" id="navbar-brand-logo">
            <img
              src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
              alt="Organic Mushrooms Farm"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 shrink-0 object-contain group-hover:scale-110 transition-transform"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <span className="text-[14px] xs:text-[16px] sm:text-sm md:text-xl lg:text-[12px] xl:text-[15px] 2xl:text-sm font-bold tracking-tight dark:text-white text-slate-900 leading-tight">
                Organic <span className="gradient-text font-black">Mushroom Farm</span>
              </span>
              <DynamicGreeting />
            </div>
          </Link>

          {/* Desktop & Action Items */}
          <div className="flex items-center gap-2 xl:gap-4 ml-auto">
            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 overflow-x-auto no-scrollbar">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href) && item.href !== '/';
                const hasSubMenu = item.subMenu && item.subMenu.length > 0;

                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg leading-tight ${
                        isActive
                          ? 'dark:text-white text-slate-900 dark:bg-white/10 bg-black/5'
                          : 'dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900'
                      }`}
                    >
                      {item.name}
                      {hasSubMenu && (
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                      )}
                    </Link>

                    {/* Submenu Dropdown */}
                    {hasSubMenu && (
                      <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-[100]">
                        <div className="glass p-2 min-w-[200px] rounded-xl border dark:border-white/10 border-black/10 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                          {item.subMenu!.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2.5 text-[12px] font-bold dark:text-slate-300 text-slate-700 hover:text-slate-900 dark:hover:text-white hover:dark:bg-white/10 hover:bg-black/5 rounded-lg transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {isActive && (
                      <motion.div
                        layoutId="nav-active-indicator"
                        className="absolute -bottom-1 left-2 right-2 xl:left-3 xl:right-3 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Toggle Hamburger Button */}
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden dark:text-white text-slate-900 p-2 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Exact match with user Screenshot) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9998] lg:hidden flex flex-col justify-end" id="mobile-navigation-drawer">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-[12px]"
            />

            {/* Sliding Drawer Card */}
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.2 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 60 || info.velocity.y > 200) {
                  setMobileMenuOpen(false);
                }
              }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                duration: 0.2,
              }}
              style={{ willChange: 'transform' }}
              className="relative w-full max-h-[85vh] flex flex-col bg-white dark:bg-[#18181b] rounded-t-[2rem] shadow-2xl pb-safe z-[9999] overflow-hidden border-t dark:border-white/10 border-black/10"
            >
              {/* Soft Top Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald-500/10 dark:from-emerald-400/5 to-transparent pointer-events-none" />

              {/* Drawer Pull Handle */}
              <div
                className="w-full flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing relative z-20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
              </div>

              {/* Header with Inline Live Ticker Marquee */}
              <div className="flex items-center gap-3 px-4 pb-3 pt-1 w-full relative z-20">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden p-0.5 shadow-xs">
                    <img
                      src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png"
                      alt="Farm Logo"
                      className="w-full h-full object-contain"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>

                {/* Capsule Live Ticker */}
                <div className="flex-1 overflow-hidden h-7 bg-slate-100 dark:bg-slate-800/90 rounded-full flex items-center shadow-inner border border-slate-200/80 dark:border-slate-700">
                  <div className="w-full overflow-hidden flex items-center h-full">
                    <motion.div
                      className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase flex items-center h-full pt-0.5"
                      animate={{ x: [0, -600] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      style={{ willChange: 'transform' }}
                    >
                      <span className="mx-4">India 24.4°C, Hum 88% 🌡️</span>
                      <span className="mx-4">•</span>
                      <span className="mx-4">NEW BATCH OPENS SOON 🍄</span>
                      <span className="mx-4">•</span>
                      <span className="mx-4">TURNKEY SETUP CONSULTATION 📞</span>
                      <span className="mx-4">•</span>
                      <span className="mx-4">India 24.4°C, Hum 88% 🌡️</span>
                      <span className="mx-4">•</span>
                      <span className="mx-4">NEW BATCH OPENS SOON 🍄</span>
                    </motion.div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="shrink-0 dark:text-white text-slate-900 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Grid Menu Content (2 Columns Cards as in screenshot) */}
              <div className="flex-1 overflow-y-auto px-4 pb-8 pt-1 hide-scrollbar relative z-20">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(item.href) && item.href !== '/';
                    const hasSubMenu = item.subMenu && item.subMenu.length > 0;
                    const isExpanded = expandedMobileMenu === item.name;

                    const baseCardClass = `relative w-full overflow-hidden rounded-2xl border transition-colors duration-150 ${
                      isActive
                        ? 'border-emerald-500/50 bg-emerald-50 dark:bg-emerald-500/10'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                    }`;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.15, ease: 'easeOut' }}
                        className={hasSubMenu ? 'col-span-2 sm:col-span-1' : 'col-span-1'}
                      >
                        {hasSubMenu ? (
                          <div className={baseCardClass}>
                            <button
                              onClick={() => {
                                setExpandedMobileMenu((prev) => (prev === item.name ? null : item.name));
                              }}
                              className="w-full flex items-center justify-between p-2.5"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    isActive
                                      ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                                      : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                  }`}
                                >
                                  {item.icon && <item.icon size={12} />}
                                </div>
                                <span
                                  className={`text-[11px] font-bold ${
                                    isActive
                                      ? 'text-emerald-600 dark:text-emerald-400'
                                      : 'text-slate-800 dark:text-slate-200'
                                  }`}
                                >
                                  {item.name}
                                </span>
                              </div>
                              <ChevronDown
                                size={12}
                                className={`transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180' : ''
                                } ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}
                              />
                            </button>
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden bg-white/50 dark:bg-slate-950/40"
                                >
                                  <div className="px-3 py-1 flex flex-col gap-0.5 border-t border-slate-100 dark:border-slate-800">
                                    {item.subMenu!.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block py-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 pl-6 relative"
                                      >
                                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`${baseCardClass} flex flex-col items-start justify-center p-2.5 min-h-[60px]`}
                          >
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center mb-1.5 ${
                                isActive
                                  ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {item.icon && <item.icon size={12} />}
                            </div>
                            <span
                              className={`text-[11px] font-bold ${
                                isActive
                                  ? 'text-emerald-600 dark:text-emerald-400'
                                  : 'text-slate-800 dark:text-slate-200'
                              }`}
                            >
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
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
