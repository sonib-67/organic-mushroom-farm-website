'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  X,
  GraduationCap,
  User,
  Settings,
  Leaf,
  Package,
  ChevronRight,
  Sparkles,
  Calculator,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppModals } from './ModalContext';

export const PromoModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const { openConsultationModal, openQuoteCalculatorModal, openQuickOrderModal } = useAppModals();

  useEffect(() => {
    const isHomePage = pathname === '/' || pathname === '/newhome' || pathname === '/next-home-preview';
    const hasSeenModal = typeof window !== 'undefined' ? sessionStorage.getItem('hasSeenPromoModalNextV1') : 'true';

    if (isHomePage && !hasSeenModal) {
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('hasSeenPromoModalNextV1', 'true');
        }
      }, 2500);

      return () => {
        clearTimeout(showTimer);
      };
    }
  }, [pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const menuItems = [
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: 'Mushroom Training',
      sub: 'Learn from industry experts',
      action: () => {
        setIsVisible(false);
      },
      href: '/training',
      color: 'green',
    },
    {
      icon: <User className="w-4 h-4" />,
      label: 'Book Free Consultation',
      sub: 'Get 1-on-1 expert agronomist advice',
      action: () => {
        setIsVisible(false);
        openConsultationModal({ category: 'Commercial Turnkey Farm Setup' });
      },
      color: 'blue',
    },
    {
      icon: <Calculator className="w-4 h-4" />,
      label: 'Cost & Profit Calculator',
      sub: 'Calculate live Turnkey CAPEX & Yield',
      action: () => {
        setIsVisible(false);
        openQuoteCalculatorModal({ variety: 'Button Mushroom' });
      },
      color: 'purple',
    },
    {
      icon: <Package className="w-4 h-4" />,
      label: 'Quick Order Spawn',
      sub: 'Lab certified pure grain spawn bags',
      action: () => {
        setIsVisible(false);
        openQuickOrderModal({ variety: 'Button Mushroom' });
      },
      color: 'yellow',
    },
    {
      icon: <Leaf className="w-4 h-4" />,
      label: 'Turnkey Farm Projects',
      sub: 'Complete commercial setup & DPR',
      action: () => {
        setIsVisible(false);
      },
      href: '/services/turnkey-setup',
      color: 'teal',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'blue':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'purple':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'teal':
        return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'yellow':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed inset-0 z-[99990] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[320px] sm:max-w-[360px] overflow-hidden bg-slate-900/90 backdrop-blur-3xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Liquid Background Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/30 rounded-full blur-[50px] pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/30 rounded-full blur-[50px] pointer-events-none"
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close promotion modal"
              className="absolute top-3 right-3 z-20 text-white/60 hover:text-white bg-white/5 hover:bg-white/20 border border-white/10 rounded-full p-1.5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="relative p-5 pb-3 flex flex-col items-center justify-center text-center z-10 mt-1">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 mb-2">
                <Sparkles size={11} /> Quick Launchpad
              </span>
              <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight">
                Explore Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Mushroom Solutions
                </span>
              </h3>
            </div>

            {/* Menu List */}
            <div className="relative z-10 p-3 pt-0 flex flex-col gap-2 max-h-[380px] overflow-y-auto">
              {menuItems.map((item, idx) => {
                const buttonContent = (
                  <div className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border ${getColorClasses(item.color)} shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </div>
                );

                if (item.href) {
                  return (
                    <Link key={idx} href={item.href} onClick={item.action} className="block">
                      {buttonContent}
                    </Link>
                  );
                }

                return (
                  <button key={idx} onClick={item.action} className="block w-full text-left">
                    {buttonContent}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-3 text-center border-t border-white/10 bg-white/5">
              <span className="text-[10px] text-slate-400 font-medium">
                Pan-India & Global Technical Assistance 📞
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
