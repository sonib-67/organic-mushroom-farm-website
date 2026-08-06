import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Sprout, GraduationCap, User, Settings, Leaf, Package, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PromoModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const excludedPaths = [
    '/training',
    '/training/online',
    '/training/offline',
    '/workshop',
    '/spawn-seed',
    '/spawn-seeds',
    '/book-consultant',
    '/site-visit-consultation',
    '/training-checkout',
  ];

  useEffect(() => {
    const isExcluded = excludedPaths.some(path => location.pathname === path || location.pathname.startsWith(path + '/'));
    
    // Using a new key so it triggers again for the updated design
    const hasSeenModal = sessionStorage.getItem('hasSeenPromoModalV6');

    if (!isExcluded && !hasSeenModal) {
      // 2 seconds delay before showing so the website loads fast
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenPromoModalV6', 'true');
      }, 2000);

      return () => {
        clearTimeout(showTimer);
      };
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleLinkClick = (path: string) => {
    setIsVisible(false);
    navigate(path);
  }

  const menuItems = [
    { 
      icon: <GraduationCap className="w-5 h-5" />, 
      label: 'Mushroom Training', 
      sub: 'Learn from industry experts',
      path: '/training',
      color: 'green'
    },
    { 
      icon: <User className="w-5 h-5" />, 
      label: 'Mushroom Consultant', 
      sub: 'Get expert guidance',
      path: '/book-consultant',
      color: 'blue'
    },
    { 
      icon: <Settings className="w-5 h-5" />, 
      label: 'Turnkey Project (Setup)', 
      sub: 'End-to-end project setup',
      path: '/services/turnkey-setup',
      color: 'purple'
    },
    { 
      icon: <Leaf className="w-5 h-5" />, 
      label: 'Fresh & Dry Mushroom', 
      sub: 'Premium quality products',
      path: '/contact-form',
      color: 'teal'
    },
    { 
      icon: <Package className="w-5 h-5" />, 
      label: 'Mushroom Spawn', 
      sub: 'High quality spawn & seeds',
      path: '/spawn-seed',
      color: 'yellow'
    },
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'green': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'blue': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'purple': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'teal': return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
      case 'yellow': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-white/10 text-white border-white/20';
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] overflow-hidden bg-black/40 backdrop-blur-3xl rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Liquid Glass Background Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/30 rounded-full blur-[50px] pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/30 rounded-full blur-[50px] pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-[40px] pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, -180, 0],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 right-1/4 w-36 h-36 bg-yellow-500/20 rounded-full blur-[40px] pointer-events-none"
            />

            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-white/60 hover:text-white bg-white/5 hover:bg-white/20 border border-white/10 rounded-full p-2 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Area */}
            <div className="relative p-6 pb-4 flex flex-col items-center justify-center text-center z-10 mt-2">
              <h2 className="text-3xl font-extrabold text-white leading-tight tracking-tight">
                Explore Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 drop-shadow-sm">Services</span>
              </h2>
              <p className="text-slate-300 text-[13px] mt-3 max-w-[200px] leading-relaxed font-medium">
                Everything you need for mushroom farming
              </p>
            </div>

            {/* Content List */}
            <div className="p-5 pt-2 relative z-10 space-y-2.5">
              {menuItems.map((item, index) => (
                <motion.button 
                  key={index}
                  onClick={(e) => { e.stopPropagation(); handleLinkClick(item.path); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.1 }}
                  className="w-full flex items-center gap-3 p-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl transition-all group text-left"
                >
                  <div className={`flex-shrink-0 p-2.5 rounded-xl border ${getColorClasses(item.color)} transition-colors`}>
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-white text-[13px] group-hover:text-green-300 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </motion.button>
              ))}
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
