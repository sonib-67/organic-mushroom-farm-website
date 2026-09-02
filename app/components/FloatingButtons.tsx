"use client";
import React, { useState, useEffect } from 'react';

import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronUp, MessageCircle, Calendar, Sprout, BookOpen, Home, Layers, ShoppingCart, Phone } from 'lucide-react';
import AIChatWidget from './AIChatWidget';
import StickyRazorpayButton from './StickyRazorpayButton';

const FloatingButtons = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handle = (e: any) => setMobileMenuOpen(e.detail);
    window.addEventListener('mobileMenuToggle', handle);
    return () => window.removeEventListener('mobileMenuToggle', handle);
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [currentHash, setCurrentHash] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    const onScroll = () => {
      if (pathname !== "/") return;
      const sections = ["farming-models", "compost-units", "market"];
      let active = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            active = "#" + section;
            break;
          }
        }
      }
      if (active) {
        setCurrentHash(active);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const isTrainingPage = pathname === "/training";
  const showTrainingCTA = ![
    "/training-checkout",
    "/payment-success",
    "/payment-cancelled",
    "/workshop",
  ].includes(pathname || "");

  if (pathname === "/workshop") return null;

  const mobileNavItems = [
    { label: "Book Consultant", href: "/book-consultant", icon: Calendar },
    { label: "Spawn (Seed)", href: "/spawn-seed", icon: Sprout },
    { label: "Training", href: "/training", icon: BookOpen },
    { label: "Setup (Turnkey)", href: "/#farming-models", icon: Home },
    { label: "Bags", href: "/#compost-units", icon: Layers },
    { label: "Fresh Mushroom", href: "/#market", icon: ShoppingCart },
    { label: "Call Us", href: "tel:+919203544140", icon: Phone },
  ];

  return (
    <>
      {/* Floating Buttons on Right Side */}
      <div className={`floating-button-wrapper fixed right-3 md:right-[30px] z-[99999] flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[65px] md:bottom-[20px] ${mobileMenuOpen ? "hidden lg:flex" : "flex"}`}>
        <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
          <motion.a
            href="https://wa.me/919203544140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Organic Mushrooms Farm on WhatsApp"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all z-10 shrink-0 group relative"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
            <MessageCircle size={24} className="md:w-[32px] md:h-[32px] relative z-10" />
          </motion.a>
          <span className="text-[9px] md:text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-sm leading-tight bg-white/70 dark:bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-black/10 dark:border-white/20">Chat on WhatsApp</span>
        </div>

        {/* Scroll To Top (Desktop) */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 md:w-12 md:h-12 glass rounded-full dark:text-slate-400 text-slate-600 flex items-center justify-center hover:dark:bg-white/10 bg-black/10 transition-all hidden md:flex pointer-events-auto"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </div>

      {/* Floating Buttons on Left Side */}
      <div
        className={`floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out ${mobileMenuOpen ? "bottom-[calc(100vh-160px)] z-[1000000] lg:bottom-[20px] lg:z-[99999]" : "bottom-[65px] md:bottom-[20px] z-[99999]"}`}
      >
        <div className="pointer-events-auto">
          <AIChatWidget />
        </div>
        
        {showTrainingCTA && (
          <div className={`flex-col gap-1.5 md:gap-3 items-start pointer-events-auto ${mobileMenuOpen ? "hidden lg:flex" : "flex"}`}>
            {/* Desktop Stack */}
            <div className="hidden md:flex flex-col gap-3 items-start">
              <div className="w-[140px] md:w-auto">
                <StickyRazorpayButton size="normal" />
              </div>
            </div>
            {/* Mobile Stack - Compactly sized to prevent overlapping core text */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]"
            >
              <StickyRazorpayButton size="small" />
            </motion.div>
          </div>
        )}
      </div>

      {/* Mobile Horizontal Sticky Bottom Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[110] md:hidden backdrop-blur-xl border-t dark:border-white/20 border-black/10 shadow-[0_-8px_32px_0_rgba(31,38,135,0.1)]`}
        style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)' }}
      >
        <div
          className={`overflow-x-auto scrollbar-hide snap-x flex items-center ${isTrainingPage ? "gap-1.5 p-2 px-3" : "gap-2 p-3 px-4"}`}
        >
          {mobileNavItems.map((item, i) => {
            const isExternal =
              item.href.startsWith("tel:") || item.href.startsWith("http");
            const isHashLink = item.href.includes("#");

            // Find if item is active:
            let isActive = false;
            if (isHashLink) {
              const hash = item.href.split("#")[1];
              isActive =
                pathname === "/" && currentHash === "#" + hash;
            } else {
              isActive = pathname === item.href;
            }

            const className = `snap-start shrink-0 flex items-center justify-center rounded-full border transition-all active:scale-95 ${
              isActive
                ? "bg-primary-start/20 text-primary-start border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)] font-bold"
                : "bg-linear-to-r from-blue-600/10 to-purple-600/10 dark:border-white/10 border-black/10 dark:text-white text-slate-900 hover:border-primary-start/40 active:bg-primary-start/20"
            } ${isTrainingPage ? "gap-1 px-3 py-1.5" : "gap-1.5 px-3.5 py-2"}`;
            
            const content = (
              <>
                <item.icon
                  size={isTrainingPage ? 11 : 13}
                  className={isActive ? "text-primary-start" : "text-primary-start"}
                />
                <span
                  className={`leading-tight tracking-tight font-semibold ${isTrainingPage ? "text-[9px]" : "text-[10px]"}`}
                >
                  {item.label}
                </span>
              </>
            );

            const handleItemClick = (e: React.MouseEvent) => {
              if (isHashLink) {
                e.preventDefault();
                const hash = item.href.split("#")[1];
                if (pathname === "/") {
                  const element = document.getElementById(hash);
                  if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                    setCurrentHash("#" + hash);
                    window.history.pushState(null, "", `/#${hash}`);
                  }
                } else {
                  navigate("/");
                  setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                      const offset = 100;
                      const bodyRect =
                        document.body.getBoundingClientRect().top;
                      const elementRect = element.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                      setCurrentHash("#" + hash);
                    }
                  }, 400);
                }
              }
            };

            if (isExternal) {
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={className}
                >
                  {content}
                </a>
              );
            }

            if (isHashLink) {
              return (
                <a
                  key={i}
                  href={item.href}
                  onClick={handleItemClick}
                  className={className}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={i} to={item.href} className={className}>
                {content}
              </Link>
            );
          })}
          <div className="shrink-0 w-4"></div> {/* Spacer for scroll end */}
        </div>
        {/* Safe area padding for iPhones */}
        <div className="h-[env(safe-area-inset-bottom,0px)] bg-black/20"></div>
      </div>
    </>
  );
};

export default FloatingButtons;
