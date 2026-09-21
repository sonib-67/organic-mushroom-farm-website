"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check, X, RotateCcw, Languages, Sparkles } from "lucide-react";

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

export interface CountryConfig {
  code: string;
  name: string;
  hindiName: string;
  flag: string;
  languages: LanguageOption[];
}

export const COUNTRIES: CountryConfig[] = [
  {
    code: "IN",
    name: "India",
    hindiName: "भारत",
    flag: "🇮🇳",
    languages: [
      { code: "hi", name: "Hindi", nativeName: "हिंदी" },
      { code: "en", name: "English", nativeName: "English" },
      { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
      { code: "bn", name: "Bengali", nativeName: "বাংলা" },
      { code: "mr", name: "Marathi", nativeName: "मराठी" },
      { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
      { code: "te", name: "Telugu", nativeName: "తెలుగు" },
      { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
      { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
      { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
      { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ" },
      { code: "ur", name: "Urdu", nativeName: "اردو" },
    ],
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    hindiName: "संयुक्त अरब अमीरात (UAE)",
    flag: "🇦🇪",
    languages: [
      { code: "ar", name: "Arabic", nativeName: "العربية" },
      { code: "en", name: "English", nativeName: "English" },
      { code: "ur", name: "Urdu", nativeName: "اردو" },
      { code: "hi", name: "Hindi", nativeName: "हिंदी" },
      { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
    ],
  },
  {
    code: "US",
    name: "United States",
    hindiName: "अमेरिका (USA)",
    flag: "🇺🇸",
    languages: [
      { code: "en", name: "English", nativeName: "English" },
      { code: "es", name: "Spanish", nativeName: "Español" },
    ],
  },
  {
    code: "NP",
    name: "Nepal",
    hindiName: "नेपाल",
    flag: "🇳🇵",
    languages: [
      { code: "ne", name: "Nepali", nativeName: "नेपाली" },
      { code: "hi", name: "Hindi", nativeName: "हिंदी" },
      { code: "en", name: "English", nativeName: "English" },
    ],
  },
  {
    code: "BD",
    name: "Bangladesh",
    hindiName: "बांग्लादेश",
    flag: "🇧🇩",
    languages: [
      { code: "bn", name: "Bengali", nativeName: "বাংলা" },
      { code: "en", name: "English", nativeName: "English" },
    ],
  },
  {
    code: "GB",
    name: "United Kingdom",
    hindiName: "यूके (UK)",
    flag: "🇬🇧",
    languages: [
      { code: "en", name: "English", nativeName: "English" },
      { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
    ],
  },
  {
    code: "CA",
    name: "Canada",
    hindiName: "कनाडा",
    flag: "🇨🇦",
    languages: [
      { code: "en", name: "English", nativeName: "English" },
      { code: "fr", name: "French", nativeName: "Français" },
      { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
    ],
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    hindiName: "सऊदी अरब",
    flag: "🇸🇦",
    languages: [
      { code: "ar", name: "Arabic", nativeName: "العربية" },
      { code: "en", name: "English", nativeName: "English" },
      { code: "ur", name: "Urdu", nativeName: "اردو" },
    ],
  },
  {
    code: "DE",
    name: "Germany",
    hindiName: "जर्मनी",
    flag: "🇩🇪",
    languages: [
      { code: "de", name: "German", nativeName: "Deutsch" },
      { code: "en", name: "English", nativeName: "English" },
    ],
  },
  {
    code: "GLOBAL",
    name: "Other Countries",
    hindiName: "अन्य देश (International)",
    flag: "🌍",
    languages: [
      { code: "en", name: "English", nativeName: "English" },
      { code: "hi", name: "Hindi", nativeName: "हिंदी" },
      { code: "es", name: "Spanish", nativeName: "Español" },
      { code: "fr", name: "French", nativeName: "Français" },
      { code: "ru", name: "Russian", nativeName: "Русский" },
      { code: "zh-CN", name: "Chinese", nativeName: "中文" },
      { code: "ja", name: "Japanese", nativeName: "日本語" },
    ],
  },
];

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export function CountryLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("IN");
  const [currentLangCode, setCurrentLangCode] = useState<string>("en");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Read cookies & localStorage on client mount
  useEffect(() => {
    try {
      const savedCountry = localStorage.getItem("omf_selected_country");
      if (savedCountry && COUNTRIES.some((c) => c.code === savedCountry)) {
        setSelectedCountryCode(savedCountry);
      }

      // Check cookie for googtrans
      const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
      if (match && match[1]) {
        setCurrentLangCode(match[1]);
      } else {
        const savedLang = localStorage.getItem("omf_selected_lang");
        if (savedLang) setCurrentLangCode(savedLang);
      }
    } catch (e) {
      console.warn("Storage access failed:", e);
    }
  }, []);

  // Initialize Google Translate script
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const activeCountry =
    COUNTRIES.find((c) => c.code === selectedCountryCode) || COUNTRIES[0];

  const applyTranslation = (langCode: string, countryCode: string) => {
    setIsTranslating(true);
    setCurrentLangCode(langCode);
    setSelectedCountryCode(countryCode);

    try {
      localStorage.setItem("omf_selected_country", countryCode);
      localStorage.setItem("omf_selected_lang", langCode);

      // Set cookie for Google Translate
      const domain = window.location.hostname;
      const expireDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

      const cookieVal = `/auto/${langCode}`;
      document.cookie = `googtrans=${cookieVal}; path=/; expires=${expireDate};`;
      document.cookie = `googtrans=${cookieVal}; path=/; domain=${domain}; expires=${expireDate};`;

      if (domain.includes(".")) {
        const rootDomain = domain.split(".").slice(-2).join(".");
        document.cookie = `googtrans=${cookieVal}; path=/; domain=.${rootDomain}; expires=${expireDate};`;
      }

      // Try triggering google select element
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event("change"));
        setTimeout(() => {
          setIsTranslating(false);
          setIsOpen(false);
        }, 500);
      } else {
        // Reload to apply cookie if element not ready
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    } catch (err) {
      console.error("Translation switch error:", err);
      setIsTranslating(false);
      setIsOpen(false);
    }
  };

  const handleResetToEnglish = () => {
    setIsTranslating(true);
    setCurrentLangCode("en");

    try {
      localStorage.removeItem("omf_selected_lang");

      // Clear cookies
      const domain = window.location.hostname;
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

      if (domain.includes(".")) {
        const rootDomain = domain.split(".").slice(-2).join(".");
        document.cookie = `googtrans=; path=/; domain=.${rootDomain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      }

      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = "en";
        combo.dispatchEvent(new Event("change"));
      }

      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (e) {
      window.location.reload();
    }
  };

  // Find active language display name
  const currentLangObj =
    activeCountry.languages.find((l) => l.code === currentLangCode) ||
    COUNTRIES.flatMap((c) => c.languages).find((l) => l.code === currentLangCode);

  const displayLangName = currentLangObj ? currentLangObj.nativeName : "English";

  return (
    <>
      {/* Hidden container for Google Translate Gadget */}
      <div
        id="google_translate_element"
        style={{ display: "none", visibility: "hidden", position: "absolute", top: -9999 }}
        aria-hidden="true"
      />

      {/* Language / Country Trigger Button - Clean Lucide Languages Translate Icon */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative p-1 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-all hover:scale-110 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center group focus:outline-none mr-0.5"
        title={`Translate / भाषा बदलें (${activeCountry.name} - ${displayLangName})`}
        aria-label="Translate Website - भाषा बदलें"
      >
        <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-sky-400 group-hover:rotate-6 transition-transform" />
        <span className="absolute -bottom-0.5 -right-0.5 text-[10px] sm:text-[11px] leading-none filter drop-shadow-sm select-none pointer-events-none">
          {activeCountry.flag}
        </span>
      </button>

      {/* Floating Modal for Country & Language Selection */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100002] bg-slate-950/60 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-5 pt-16 sm:pt-8 pb-16 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-700 via-indigo-700 to-emerald-700 text-white relative">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                    <Languages className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5">
                      <span>Select Country & Language</span>
                    </h3>
                    <p className="text-[11px] sm:text-xs text-emerald-200 font-medium">
                      देश और अपनी भाषा चुनें (Instant Translation)
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-red-600 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 border border-white/40"
                  title="Close (बंद करें)"
                  aria-label="Close translation menu"
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-5 max-h-[72vh] overflow-y-auto">
              {/* Step 1: Country Selection */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-[11px] font-bold flex items-center justify-center">
                      1
                    </span>
                    <span>Step 1: Choose Country (देश चुनें)</span>
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {activeCountry.flag} {activeCountry.name}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {COUNTRIES.map((country) => {
                    const isSelected = country.code === selectedCountryCode;
                    return (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => setSelectedCountryCode(country.code)}
                        className={`p-2.5 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-sm ring-2 ring-purple-500/20"
                            : "bg-slate-50/70 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 hover:border-purple-300"
                        }`}
                      >
                        <span className="text-xl sm:text-2xl shrink-0">{country.flag}</span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                            {country.name}
                          </p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                            {country.hindiName}
                          </p>
                        </div>
                        {isSelected && (
                          <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Language Selection for selected Country */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <span>Step 2: Choose Language for {activeCountry.name}</span>
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Instant Translate</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {activeCountry.languages.map((lang) => {
                    const isLangActive = currentLangCode === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => applyTranslation(lang.code, activeCountry.code)}
                        className={`p-3 rounded-2xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isLangActive
                            ? "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/40 border-emerald-500 shadow-md ring-2 ring-emerald-500/25"
                            : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:bg-emerald-50/40 dark:hover:bg-slate-750"
                        }`}
                      >
                        <div className="min-w-0">
                          <p
                            className={`text-xs sm:text-sm font-black ${
                              isLangActive
                                ? "text-emerald-900 dark:text-emerald-200"
                                : "text-slate-900 dark:text-white"
                            }`}
                          >
                            {lang.nativeName}
                          </p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {lang.name}
                          </p>
                        </div>
                        {isLangActive ? (
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px]">
                            ✓
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-mono">
                            {lang.code.toUpperCase()}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status & Reset to Original */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>
                    Current Language:{" "}
                    <strong className="text-slate-800 dark:text-white">
                      {displayLangName} ({currentLangCode.toUpperCase()})
                    </strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleResetToEnglish}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer active:scale-95"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to English (मूल भाषा)</span>
                </button>
              </div>

              {isTranslating && (
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 text-center text-xs font-bold text-purple-800 dark:text-purple-200 animate-pulse flex items-center justify-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                  <span>Translating website... Kripya 1 second pratiksha karein...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
