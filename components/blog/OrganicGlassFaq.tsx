'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface OrganicGlassFaqProps {
  faqs: FaqItem[];
}

export default function OrganicGlassFaq({ faqs }: OrganicGlassFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="group rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:border-emerald-500/40 hover:bg-white/70 dark:hover:bg-zinc-900/70"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left text-zinc-900 dark:text-zinc-100 font-semibold text-base sm:text-lg focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <HelpCircle className="h-4 w-4" />
                </span>
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base border-t border-white/40 dark:border-white/5">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
