import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  locationName: string;
}

export default function FAQSection({ faqs, locationName }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-accordions" className="glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center text-primary-start">
          <MessageSquare size={20} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs dark:text-slate-400 text-slate-500 mt-1">
            Learn and master mushroom setups specifically for {locationName}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-sm md:text-base dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary-start/50"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-slate-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-sm dark:text-slate-300 text-slate-600 leading-relaxed border-t dark:border-white/5 border-black/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
