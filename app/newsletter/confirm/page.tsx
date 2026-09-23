"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, ArrowRight, Home, BookOpen, Sparkles, MailCheck, ShieldCheck } from "lucide-react";

function NewsletterConfirmContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "success";
  const email = searchParams.get("email") || "";
  const errorMsg = searchParams.get("error") || "";

  const isSuccess = status === "success";
  const isAlreadyActive = status === "already_active";
  const isError = status === "invalid" || status === "error";

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      {/* Top Banner */}
      <header className="border-b border-stone-800 bg-stone-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🍄</span>
            <div className="leading-tight">
              <span className="block font-black text-emerald-400 text-lg sm:text-xl tracking-tight">
                Organic Mushrooms Farm
              </span>
              <span className="block text-[11px] text-stone-400 font-medium">
                भारत का अग्रणी मशरूम अनुसंधान व प्रशिक्षण केंद्र
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-stone-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">होम पेज</span>
          </Link>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12 sm:py-16 flex items-center">
        <div className="w-full">
          {/* Card Container */}
          <div className="relative rounded-2xl bg-stone-900/90 border border-stone-800 p-6 sm:p-10 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Ambient Background Glow */}
            <div
              className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none ${
                isError ? "bg-rose-500" : "bg-emerald-500"
              }`}
            />

            {/* Status 1: Freshly Confirmed */}
            {isSuccess && (
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  सदस्यता सक्रिय (Verified Active)
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      🎉 आपकी सदस्यता सक्रिय हो चुकी है!
                    </h1>
                    <p className="text-xs sm:text-sm text-stone-400 font-medium mt-0.5">
                      Double Opt-in Verification Successful
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-stone-950/60 border border-stone-800 space-y-3">
                  <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                    बधाई हो! {email ? <strong className="text-emerald-300 font-semibold">{email}</strong> : "आपकी ईमेल"}{" "}
                    सफलतापूर्वक सत्यापित हो चुकी है। अब आपको हर 48 घंटे में सीधे इनबॉक्स में हमारा विशेष{" "}
                    <strong className="text-white">2-Day Farming Digest</strong> प्राप्त होगा।
                  </p>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    🌾 इसमें आपको कम लागत वाले आर्द्रता व तापमान जुगाड़, ग्रीन मोल्ड नियंत्रण के जैविक उपाय और ताज़ा थोक
                    मंडी भाव मिलेंगे। कोई स्पैम नहीं—केवल 100% व्यावहारिक देसी ज्ञान।
                  </p>
                </div>

                {/* Helpful Next Steps */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                    <MailCheck className="w-4 h-4 text-emerald-400" />
                    आगे क्या करें (Recommended Next Steps):
                  </div>
                  <ul className="text-xs sm:text-sm text-stone-400 space-y-1.5 list-disc list-inside">
                    <li>
                      हमने आपका <strong className="text-stone-300">वेलकम गाइड ईमेल</strong> भेज दिया है, उसे अपने
                      इनबॉक्स में चेक करें।
                    </li>
                    <li>
                      यदि ईमेल Spam या Promotions में दिखे, तो उसे{" "}
                      <strong className="text-emerald-300">'Move to Inbox'</strong> या 'Star' कर लें ताकि कोई भी मंडी
                      अपडेट छूटे नहीं।
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/training"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
                  >
                    <span>प्रैक्टिकल ट्रेनिंग बैच देखें (₹299 / ₹699)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span>फार्मिंग गाइड्स पढ़ें</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Status 2: Already Active */}
            {isAlreadyActive && (
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  ऑलरेडी एक्टिव (Already Subscribed)
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      आप पहले से ही सक्रिय सदस्य हैं!
                    </h1>
                    <p className="text-xs sm:text-sm text-stone-400 font-medium mt-0.5">
                      Your subscription is already confirmed and running
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-stone-950/60 border border-stone-800">
                  <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
                    {email ? <strong className="text-emerald-300">{email}</strong> : "आपकी ईमेल"} पहले से ही हमारे
                    सिस्टम में सक्रिय (Active) रूप से पंजीकृत है। आपको नियमित 2-डे फार्मिंग डाइजेस्ट मिलता रहेगा।
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all"
                  >
                    <Home className="w-4 h-4" />
                    <span>होम पेज पर जाएं</span>
                  </Link>
                  <Link
                    href="/mushroom-price-today"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-colors"
                  >
                    <span>आज के मंडी भाव देखें</span>
                  </Link>
                </div>
              </div>
            )}

            {/* Status 3: Invalid / Expired Link */}
            {isError && (
              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/80 border border-rose-600/40 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5" />
                  लिंक अमान्य या समाप्त (Link Expired)
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0">
                    <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      पुष्टि लिंक अमान्य या समाप्त हो गया है
                    </h1>
                    <p className="text-xs sm:text-sm text-rose-400/80 font-medium mt-0.5">
                      Verification link is invalid or expired
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {errorMsg ||
                      "यह लिंक 14 दिनों से अधिक पुराना हो सकता है या पहले ही उपयोग किया जा चुका है। सुरक्षा कारणों से पुराने लिंक स्वतः समाप्त हो जाते हैं।"}
                  </p>
                  <p className="text-xs text-stone-400">
                    कृपया हमारी वेबसाइट के होम पेज पर जाकर अपना ईमेल पुनः दर्ज करें ताकि आपको नया वेरिफिकेशन लिंक प्राप्त
                    हो सके।
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#newsletter-subscribe-section"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all"
                  >
                    <span>पुनः सब्सक्राइब करें (New Subscription)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    <span>होम पेज</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        Organic Mushrooms Farm • 2-Day Farmers' Technical Digest • All rights reserved
      </footer>
    </div>
  );
}

export default function NewsletterConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-950 flex items-center justify-center text-stone-400 text-sm">
          सत्यापन की पुष्टि की जा रही है...
        </div>
      }
    >
      <NewsletterConfirmContent />
    </Suspense>
  );
}
