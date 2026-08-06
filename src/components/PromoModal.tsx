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
    const hasSeenModal = sessionStorage.getItem('hasSeenPromoModalV2');

    if (!isExcluded && !hasSeenModal) {
      // Small delay before showing
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenPromoModalV2', 'true');
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
            className="relative w-full max-w-md overflow-hidden bg-white rounded-3xl shadow-2xl"
            onClick={handleClose}
          >
            {/* Header / Graphic */}
            <div className="relative bg-gradient-to-br from-green-600 to-green-800 p-6 text-center">
              <button 
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1.5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-3"
              >
                <Sprout className="w-8 h-8 text-green-600" />
              </motion.div>
              
              <h2 className="text-2xl font-bold text-white mb-1">
                Explore Our Services
              </h2>
              <p className="text-green-100 text-sm">
                Everything you need for mushroom farming
              </p>
            </div>

            {/* Content List */}
            <div className="p-4 bg-gray-50/50">
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
                    transition={{ delay: 0.1 * index }}
                  >
                    <button
                      onClick={(e) => { e.stopPropagation(); handleLinkClick(item.path); }}
                      className="w-full flex items-center gap-4 p-3 bg-white border border-green-100 rounded-xl hover:border-green-500 hover:shadow-md transition-all group"
                    >
                      <motion.div 
                        className="flex-shrink-0 p-2 bg-green-50 text-green-600 rounded-lg"
                        animate={{ 
                          rotate: [0, -10, 10, -10, 10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-semibold text-gray-700 group-hover:text-green-700 text-left flex-grow">
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
