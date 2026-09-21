"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ChevronDown, Check, X, RotateCcw, Languages, Sparkles } from "lucide-react";

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
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<"country" | "language">("country");
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("IN");
  const [currentLangCode, setCurrentLangCode] = useState<string>("en");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setCurrentStep("country");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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

  // Aggressively suppress Google Translate top toolbar banner and keep body at top: 0
  useEffect(() => {
    if (typeof window === "undefined") return;

    const suppressBanner = () => {
      // Keep document body and html fixed at top 0
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.setProperty("top", "0px", "important");
      }
      if (document.documentElement.style.top && document.documentElement.style.top !== "0px") {
        document.documentElement.style.setProperty("top", "0px", "important");
      }

      // Hide all Google banner frames and overlays
      const banners = document.querySelectorAll<HTMLElement>(
        ".goog-te-banner-frame, iframe.goog-te-banner-frame, iframe.skiptranslate, body > .skiptranslate, body > div.skiptranslate, [class*='VIpgJd'], #goog-gt-tt"
      );
      banners.forEach((el) => {
        el.style.setProperty("display", "none", "important");
        el.style.setProperty("visibility", "hidden", "important");
        el.style.setProperty("height", "0", "important");
        el.style.setProperty("opacity", "0", "important");
        el.style.setProperty("pointer-events", "none", "important");
      });
    };

    suppressBanner();
    const interval = setInterval(suppressBanner, 400);

    const observer = new MutationObserver(() => {
      suppressBanner();
    });
    observer.observe(document.body, { childList: true, attributes: true, subtree: true });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
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
        onClick={() => {
          setCurrentStep("country");
          setIsOpen(true);
        }}
        className="relative p-1 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-all hover:scale-110 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center group focus:outline-none mr-0.5"
        title={`Translate / भाषा बदलें (${activeCountry.name} - ${displayLangName})`}
        aria-label="Translate Website - भाषा बदलें"
      >
        <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-sky-400 group-hover:rotate-6 transition-transform" />
        <span className="absolute -bottom-0.5 -right-0.5 text-[10px] sm:text-[11px] leading-none filter drop-shadow-sm select-none pointer-events-none">
          {activeCountry.flag}
        </span>
      </button>

      {/* Floating Modal for Country & Language Selection - Portal to document.body ensures perfect screen centering */}
      {mounted && isOpen && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={() => {
            setIsOpen(false);
            setCurrentStep("country");
          }}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[82vh] my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 bg-gradient-to-r from-purple-700 via-indigo-700 to-emerald-700 text-white relative shrink-0">
              <div className="flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  {/* Small Header Icon requested by user */}
                  <div className="w-6 h-6 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                    <Languages className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-xs sm:text-sm text-white tracking-tight truncate">
                      {currentStep === "country"
                        ? "Choose Your Country (देश चुनें)"
                        : `Choose Language for ${activeCountry.name}`}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-emerald-200 font-medium truncate">
                      {currentStep === "country"
                        ? "Step 1 of 2: Pehle apna desh chunein"
                        : `${activeCountry.hindiName} ki bhasha chunein (Instant Translation)`}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentStep("country");
                  }}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-red-600 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 border border-white/40"
                  title="Close (बंद करें)"
                  aria-label="Close translation menu"
                >
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
              {currentStep === "country" ? (
                /* STEP 1: COUNTRIES VIEW */
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200">
                      Select Your Country / अपना देश चुनें:
                    </span>
                    <span className="text-[11px] text-purple-600 dark:text-purple-400 font-bold">
                      Tap country to view languages →
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    {COUNTRIES.map((country) => {
                      const isSelected = country.code === selectedCountryCode;
                      return (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountryCode(country.code);
                            try {
                              localStorage.setItem("omf_selected_country", country.code);
                            } catch {}
                            setCurrentStep("language");
                          }}
                          className={`p-2.5 sm:p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all cursor-pointer hover:scale-[1.02] active:scale-95 ${
                            isSelected
                              ? "bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-sm ring-2 ring-purple-500/20"
                              : "bg-slate-50/80 dark:bg-slate-800/60 border-slate-200/90 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 hover:border-purple-300"
                          }`}
                        >
                          <span className="text-2xl sm:text-3xl shrink-0">{country.flag}</span>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                              {country.name}
                            </p>
                            <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate">
                              {country.hindiName}
                            </p>
                          </div>
                          <span className="text-slate-400 text-xs shrink-0 font-bold">→</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* STEP 2: LANGUAGES VIEW (Country list disappears, languages appear!) */
                <div>
                  {/* Back to Country Button */}
                  <div className="mb-3.5 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep("country")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-950/60 dark:hover:bg-purple-900/80 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-800 text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-xs"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>← Change Country (वापस देश बदलें)</span>
                    </button>

                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                      <span>{activeCountry.flag}</span>
                      <span>{activeCountry.name}</span>
                    </span>
                  </div>

                  <div className="mb-2.5 flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span>Choose Your Language (अपनी भाषा चुनें):</span>
                    </span>
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Instant</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    {activeCountry.languages.map((lang) => {
                      const isLangActive = currentLangCode === lang.code;
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            applyTranslation(lang.code, activeCountry.code);
                          }}
                          className={`p-3 rounded-2xl border text-left flex items-center justify-between gap-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-95 ${
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
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
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
              )}

              {/* Status & Reset to Original */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                  <span>
                    Selected:{" "}
                    <strong className="text-slate-800 dark:text-white">
                      {activeCountry.flag} {displayLangName} ({currentLangCode.toUpperCase()})
                    </strong>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleResetToEnglish}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold transition-all cursor-pointer active:scale-95"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset English</span>
                </button>
              </div>

              {isTranslating && (
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-800 text-center text-xs font-bold text-purple-800 dark:text-purple-200 animate-pulse flex items-center justify-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                  <span>Translating website... Please wait a moment...</span>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
