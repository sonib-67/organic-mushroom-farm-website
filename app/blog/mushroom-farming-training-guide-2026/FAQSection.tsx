"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Thermometer, TrendingUp, Sprout, Video } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Q1: Ek successful organic mushroom farm setup karne ke liye kitni jagah aur investment lagti hai?",
      icon: <Sprout className="w-5 h-5 text-emerald-500 shrink-0" />,
      answer: (
        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          <strong className="text-slate-900 dark:text-white">Answer:</strong> Ek basic setup aap 10x10 feet ke kamre se bhi shuru kar sakte hain (Oyster mushrooms ke liye). Lekin ek commercial Button mushroom farm jisme AC aur climate control ho, uske liye kam se kam 500-1000 square feet ka insulated shed aur shuruaati investment lagbhag ₹2 Lakh se ₹5 Lakh ke beech hoti hai, jo machinery aur scale par depend karta hai.
        </p>
      ),
    },
    {
      question: "Q2: Mushroom spawn contamination (Fungus/Kharab hona) ko kaise rokein?",
      icon: <ShieldCheck className="w-5 h-5 text-purple-500 shrink-0" />,
      answer: (
        <div className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-900 dark:text-white">Answer:</strong> Contamination ka sabse bada kaaran hygiene ki kami hoti hai. Ise rokne ke liye:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 marker:text-purple-500">
            <li>Spawn preparation hamesha HEPA filters wale Laminar Air Flow (LAF) hood ke niche karein.</li>
            <li>Compost ka pasteurization/sterilization ekdum perfect temperature (lagbhag 60°C) par karein.</li>
            <li>Farm ke andar jaane se pehle hands aur shoes ko sanitize karein. Sahi training course mein sterilization ki inhi barikiyon par practical knowledge di jati hai.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Q3: Maine nayi training li hai, main apna mushroom bechne ke liye best marketing kaise karu?",
      icon: <TrendingUp className="w-5 h-5 text-blue-500 shrink-0" />,
      answer: (
        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          <strong className="text-slate-900 dark:text-white">Answer:</strong> Sirf local sabji mandi par nirbhar na rahein. Apne aas-paas ke hotels, restaurants, aur supermarkets (B2B) se direct tie-up karein. Iske alawa, WhatsApp Marketing aur Meta Ads (Facebook/Insta) chala kar local radius (jaise 10-20 km) mein home delivery ka option dein. &ldquo;Fresh Organic Button Mushroom&rdquo; ki demand premium customers mein bahut high hai.
        </p>
      ),
    },
    {
      question: "Q4: Oyster, Milky, aur Button Mushroom mein se kiska training course best hai?",
      icon: <Thermometer className="w-5 h-5 text-amber-500 shrink-0" />,
      answer: (
        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          <strong className="text-slate-900 dark:text-white">Answer:</strong> Yeh aapke budget aur weather par nirbhar karta hai. Agar aapke paas capital kam hai aur AC ka kharcha nahi utha sakte, toh Oyster ya Milky mushroom best hai kyu ki yeh normal temperature par grow hote hain. Lekin agar aap maximum profit aur saal bhar ka business chahte hain, toh Button Mushroom cultivation training sabse best option hai.
        </p>
      ),
    },
    {
      question: "Q5: Kya online mushroom training webinars fayedamand hote hain?",
      icon: <Video className="w-5 h-5 text-teal-500 shrink-0" />,
      answer: (
        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          <strong className="text-slate-900 dark:text-white">Answer:</strong> Bilkul! Agar course ka curriculum properly structured hai aur usme live Q&A sessions, complete PDF guides, aur farm setup ke blueprints shamil hain, toh multi-week online training webinars bahut effective hote hain. Inse aap duniya ke best growers se ghar baithe advanced techniques (jaise climate control automation aur organic yield optimization) sikh sakte hain.
        </p>
      ),
    },
  ];

  return (
    <section className="mt-10 mb-8 pt-6 border-t border-slate-200 dark:border-slate-800" aria-labelledby="faq-heading">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
          <HelpCircle className="w-5 h-5" />
        </span>
        <div>
          <h2 id="faq-heading" className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white">
            💡 Expert Q&amp;A Section: Aapke Sabhi Sawalon Ke Jawab (Frequently Asked Questions)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Google ke naye algorithms Q&amp;A formats ko bahut pasand karte hain kyu ki yeh direct users ke intent ko solve karte hain. Yahan kuch sabse zaroori queries hain:
          </p>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                className="w-full px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-emerald-600 dark:text-emerald-400" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
