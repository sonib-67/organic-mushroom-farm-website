import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Network } from 'lucide-react';

interface LinkItem {
  label: string;
  url: string;
}

interface InternalLinksProps {
  links: LinkItem[];
  title?: string;
}

export default function InternalLinks({ links, title = "Regional Agriculture Directories" }: InternalLinksProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!links || links.length === 0) return null;

  return (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 mb-16">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-start"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
            <Network size={20} />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold dark:text-white text-slate-900">{title}</h3>
            <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">
              Explore related services and neighboring networks in this zone.
            </p>
          </div>
        </div>
        <ChevronDown 
          size={20} 
          className={`dark:text-slate-400 text-slate-600 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 border-t dark:border-white/5 border-black/5 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {links.map((link, idx) => (
                  <Link 
                    key={idx} 
                    to={link.url}
                    className="group flex items-center gap-2 p-3 rounded-xl dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-start group-hover:scale-125 transition-transform" />
                    <span className="text-xs md:text-sm font-medium dark:text-slate-300 text-slate-705 group-hover:text-primary-start group-hover:dark:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
