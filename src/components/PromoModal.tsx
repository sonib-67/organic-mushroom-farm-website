import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X, Sprout, Briefcase, Settings, Leaf, Package } from 'lucide-react';
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
    
    // Using a new key so it triggers again for the user
    const hasSeenModal = sessionStorage.getItem('hasSeenPromoModalV3');

    if (!isExcluded && !hasSeenModal) {
      // Small delay before showing
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenPromoModalV3', 'true');
      }, 500);

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

  return (
    <AnimatePresence>
      {isVisible && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-black/5 dark:border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Graphic */}
            <div className="relative bg-gradient-to-br from-green-600 to-green-800 p-8 text-center overflow-hidden">
              <motion.div 
                className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-24 -left-24 w-48 h-48 bg-black/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors backdrop-blur-md z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: ["0px 10px 20px rgba(0,0,0,0.1)", "0px 20px 25px rgba(0,0,0,0.15)", "0px 10px 20px rgba(0,0,0,0.1)"]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-xl mb-4 border-4 border-green-500/30"
              >
                <Sprout className="w-10 h-10 text-green-600 dark:text-green-400" />
              </motion.div>
              
              <h2 className="relative z-10 text-3xl font-black text-white mb-2 tracking-tight">
                Explore Our Services
              </h2>
              <p className="relative z-10 text-green-100 text-sm font-medium">
                Everything you need for mushroom farming
              </p>
            </div>

            {/* Content List */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/50">
              <ul className="space-y-3">
                {[
                  { icon: <Briefcase className="w-5 h-5" />, label: 'Mushroom Training', path: '/training' },
                  { icon: <Settings className="w-5 h-5" />, label: 'Mushroom Consultant', path: '/book-consultant' },
                  { icon: <Settings className="w-5 h-5" />, label: 'Mushroom Turnkey Project (Setup)', path: '/services/turnkey-setup' },
                  { icon: <Leaf className="w-5 h-5" />, label: 'Fresh & Dry Mushroom', path: '/contact-form' },
                  { icon: <Package className="w-5 h-5" />, label: 'Mushroom Spawn', path: '/spawn-seed' },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.2 }}
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); handleLinkClick(item.path); }}
                      className="w-full flex items-center gap-4 p-3.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all group"
                    >
                      <motion.div 
                        className="flex-shrink-0 p-2.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        animate={{ 
                          rotate: [0, -5, 5, -5, 5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-green-700 dark:group-hover:text-green-400 text-left flex-grow transition-colors">
                        {item.label}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
