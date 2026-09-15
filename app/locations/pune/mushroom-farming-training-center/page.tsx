import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Phone,
  ArrowLeft,
  Briefcase,
  TrendingUp,
  PackageCheck,
  Building2,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farming Training Center Baner Pune | Organic Mushrooms Farm",
  description:
    "Baner Pune मध्ये complete mushroom farming training center. Business angle सोबत spawn, packaging आणि selling याबद्दल practical माहिती.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-center",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Mushroom Farming Training Center Baner Pune | Organic Mushrooms Farm",
    description:
      "Baner Pune मध्ये complete mushroom farming training center. Business angle सोबत spawn, packaging आणि selling याबद्दल practical माहिती.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Training Center Baner Pune | Organic Mushrooms Farm",
    description:
      "Baner Pune मध्ये complete mushroom farming training center. Business angle सोबत spawn, packaging आणि selling याबद्दल practical माहिती.",
  },
};

const faqs = [
  {
    q: "Training मध्ये business plan पण शिकवला जातो का?",
    a: "हो, profit calculation, operational cost, shed construction, आणि स्थानिक हायपरलोकल मार्केटिंग strategy दोन्ही सविस्तर कव्हर होतात.",
  },
  {
    q: "Investment किती लागेल farming सुरू करायला?",
    a: "सुरुवात फक्त काही हजार रुपयांमध्ये (₹5,000 ते ₹15,000) घरातील एका खोलीत करता येते, training मध्ये exact financial breakdown दिला जातो.",
  },
  {
    q: "बाणेर-पाषाण लिंक रोड आणि बालेवाडी परिसरातील लोकांसाठी केंद्र कसे सोयीचे आहे?",
    a: "बाणेर हायस्ट्रीट, बाणेर-पाषाण लिंक रोड, बालेवाडी आणि हिंजवडी फेज-1 वरून हे केंद्र अवघ्या 10 ते 15 मिनिटांच्या अंतरावर असल्याने नियमित व्हिजिट्स आणि वीकेंड बॅचेससाठी अत्यंत सोयीस्कर आहे.",
  },
  {
    q: "उत्पादित मशरूमचे पॅकेजिंग आणि शेल्फ लाईफ कसे वाढवावे?",
    a: "प्रशिक्षणात 200g परफोरेटेड पाऊच पॅकिंग, डिहायड्रेटरने सुकवणे (Solar/Electric Dehydration), आणि कोल्ड स्टोरेज तंत्राद्वारे ताजेपणा टिकवण्याचे प्रॅक्टिकल धडे दिले जातात.",
  },
  {
    q: "स्पॉन (बियाणे) खरेदी करण्यासाठी बाणेर केंद्रावर सुविधा आहे का?",
    a: "होय, लॅब-सर्टिफाइड ऑयस्टर, मिल्की आणि बटन मशरूम स्पॉन थेट आमच्या बाणेर केंद्रावरून तसेच घरपोच कुरिअरने उपलब्ध करून दिले जाते.",
  },
  {
    q: "नोकरी सांभाळून पार्ट-टाइम मशरूम फार्मिंग शक्य आहे का?",
    a: "नक्कीच! ऑटोमेटेड फॉगर आणि टायमर सिस्टीम वापरून दिवसाला केवळ 30 ते 45 मिनिटे वेळ देऊन दरमहा ₹15,000 ते ₹30,000 अतिरिक्त नफा कमावता येतो.",
  },
];

export default function MushroomFarmingTrainingCenterBanerPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-center";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://organicmushroomsfarm.com/#organization",
        name: "Organic Mushroom Farm",
        url: "https://organicmushroomsfarm.com",
        logo: {
          "@type": "ImageObject",
          url: "https://organicmushroomsfarm.com/images/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9203544140",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Katangi Road",
          addressLocality: "Jabalpur",
          addressRegion: "Madhya Pradesh",
          postalCode: "483105",
          addressCountry: "IN",
        },
        sameAs: ["https://wa.me/919203544140"],
      },
      {
        "@type": "WebSite",
        "@id": "https://organicmushroomsfarm.com/#website",
        url: "https://organicmushroomsfarm.com",
        name: "Organic Mushroom Farm",
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Mushroom Farming Training Center Baner Pune | Organic Mushrooms Farm",
        description:
          "Baner Pune मध्ये complete mushroom farming training center. Business angle सोबत spawn, packaging आणि selling याबद्दल practical माहिती.",
        isPartOf: {
          "@id": "https://organicmushroomsfarm.com/#website",
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://organicmushroomsfarm.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "States",
            item: "https://organicmushroomsfarm.com/states",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Maharashtra",
            item: "https://organicmushroomsfarm.com/states/maharashtra",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Pune",
            item: "https://organicmushroomsfarm.com/locations/pune",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Mushroom Farming Training Center Baner",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main
      id="mushroom-farming-training-baner-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/states"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              States
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/states/maharashtra"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Maharashtra
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/locations/pune"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Pune
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[220px]"
          >
            Baner Farming Training Center
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact, Minimal Scrolling & Zero Black Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Back Link to Pune Directory */}
        <div className="pt-1">
          <Link
            href="/locations/pune"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Pune Training Centers</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Baner, Baner-Pashan Link Road, Balewadi & Hinjawadi Phase-1</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Baner, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Farming Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>संपूर्ण बिझनेस मॉडेल: स्पॉन ते लोकल रिटेल विक्री</span>
            <span>•</span>
            <span>प्रॉफिट कॅल्क्युलेशन व पॅकेजिंग तंत्रज्ञान</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              सर्व कोर्सेस तपासा
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Complete mushroom farming business training center in Baner Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Complete mushroom farming business model, spawn sourcing, packaging, and commercial sales in Baner, Pune.
          </p>
        </div>

        {/* Executive Summary Card - Exact Core Content from React Vite */}
        <section
          aria-labelledby="intro-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="intro-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              बाणेरमधील व्यावसायिक मशरूम शेती प्रशिक्षण केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Baner हा Pune मधला एक upscale आणि business-minded area आहे, जिथे अनेकजण स्वतःचा side-business किंवा full-time farming venture सुरू करण्याचा विचार करतात. Organic Mushrooms Farm चं Baner training center फक्त cultivation नाही, तर संपूर्ण business model शिकवतं — स्पॉन सोर्सिंग, ग्रोइंग, पॅकेजिंग आणि लोकल मार्केटमध्ये विक्री कशी करायची हे सगळं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>आमच्या trainers ना स्वतःच्या farm वरचा प्रत्यक्ष अनुभव आहे, त्यामुळे theory सोबत practical insights सुद्धा मिळतात. Baner-Pashan road वरील रहिवाशांसाठी हे केंद्र अगदी जवळ आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            स्वतःचा आधुनिक ॲग्री-बिझनेस सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम शेती प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            जॉईन करा. फार्मसाठी लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              सर्टिफाइड मशरूम स्पॉन बियाणे
            </Link>{" "}
            थेट मागवा. पुण्यातील इतर केंद्रे पाहण्यासाठी{" "}
            <Link
              href="/locations/pune/best-mushroom-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              औंध ट्रेनिंग केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              हडपसर कल्टिव्हेशन सेंटर
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              खराडी लाइव्ह फार्म केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-development-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              विमान नगर R&D सेंटर
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कोर्स फी व स्ट्रक्चर
            </Link>{" "}
            तपासा.
          </p>
        </section>

        {/* Section 1: Complete 360-Degree Business Model */}
        <section
          id="business-model"
          aria-labelledby="business-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="business-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. 360° व्यावसायिक मशरूम बिझनेस मॉडेल
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            फक्त उगवणे नव्हे तर फायदेशीर विक्रीपर्यंतचा प्रत्येक टप्पा शास्त्रोक्त पद्धतीने शिकवला जातो:
          </p>

          <div className="grid sm:grid-cols-4 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>स्पॉन सोर्सिंग</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                दर्जेदार मदर स्पॉन आणि कमर्शियल स्पॉनमधील फरक, साठवणूक आणि हाय-यिल्ड निवड.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>कमी खर्चात शेड रचना</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                बांबू, ग्रीन नेट, किंवा रिकाम्या खोल्यांमध्ये कमी खर्चात तापमान व आर्द्रता व्यवस्थापन.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <PackageCheck className="w-3.5 h-3.5 shrink-0" />
                <span>पॅकेजिंग व ब्रँडिंग</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                200 ग्रॅम पुनेट, परफोरेटेड पाऊच, वजन आणि FSSAI लेबलिंग मानकांचे पालन.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>स्थानिक विक्री चॅनेल्स</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                बाणेर, बालेवाडी सोसायट्यांमध्ये व्हॉट्सॲप ग्रुप्स, किराणा व सेंद्रिय दुकानांमध्ये थेट सप्लाय.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Investment Breakdown & Profit Projections */}
        <section
          id="investment-profit"
          aria-labelledby="investment-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="investment-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. भांडवली गुंतवणूक आणि नफ्याचे गणित (ROI Breakdown)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            मोठ्या गुंतवणुकीची गरज नाही; कमी भांडवलात टप्प्याटप्प्याने व्यवसाय वाढवण्याची सोपी योजना:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मायक्रो/होम सेटअप (₹5,000 ते ₹15,000):</strong> 50 ते 100 बॅग्सपासून सुरुवात करून दरमहा 50 ते 100 किलो ताजे ऑयस्टर मशरूम उत्पादन (अपेक्षित नफा: ₹12,000 ते ₹20,000/महिना).
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कमर्शियल शेड सेटअप (₹50,000 ते ₹1.5 लाख):</strong> 500 ते 1000 बॅग्सचा व्यावसायिक शेड, फॉगर, रॅक्स आणि डिहायड्रेटर (अपेक्षित नफा: ₹50,000 ते ₹1,00,000/महिना).
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>उत्पादन खर्च प्रति किलो:</strong> पेंढा, स्पॉन, वीज व पाणी मिळून ऑयस्टर मशरूमचा सरासरी उत्पादन खर्च फक्त ₹50 ते ₹65/किलो येतो.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>विक्री दर व नफा मार्जिन:</strong> स्थानिक सोसायट्यांमध्ये ₹200 ते ₹300/किलो सहज विक्री होते, म्हणजेच 200% ते 300% पर्यंत निव्वळ नफा मार्जिन मिळते.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Baner, Balewadi & Hinjawadi Professional Opportunities */}
        <section
          id="location-advantages"
          aria-labelledby="location-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Building2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="location-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. बाणेर, बालेवाडी व हिंजवडी आयटी कर्मचाऱ्यांसाठी साइड-बिझनेस संधी
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">वेळेची लवचिकता:</strong>
              <span className="text-slate-600 dark:text-slate-300">ऑटोमेटेड टायमरमुळे सकाळी 15 मिनिटे आणि संध्याकाळी 15 मिनिटे देणे पुरेसे ठरते.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">हाय-परचेसिंग पॉवर:</strong>
              <span className="text-slate-600 dark:text-slate-300">बाणेर व पाषाणमधील नागरिक आरोग्यासाठी ऑरगॅनिक आणि प्रोटीनयुक्त मशरूमला प्राधान्य देतात.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">स्थानिक रेस्टॉरंट्स नेटवर्क:</strong>
              <span className="text-slate-600 dark:text-slate-300">बालेवाडी हायस्ट्रीटवरील कॅफे आणि रेस्टॉरंट्समध्ये दैनंदिन फ्रेश सप्लाय करार शक्य.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="baner-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (बाणेर मशरूम शेती प्रशिक्षण केंद्रविषयी वारंवार विचारले जाणारे प्रश्न)
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1"
              >
                <h3 className="text-[12px] font-bold text-slate-900 dark:text-white">
                  Q{idx + 1}: {faq.q}
                </h3>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Training & Enrollment CTA - Translucent & Compact */}
        <section
          aria-labelledby="training-cta-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="training-cta-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              बाणेर, पाषाण व बालेवाडी परिसरातील नागरिकांसाठी नवीन बॅच सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              स्वतःचा यशस्वी मशरूम व्यवसाय सुरू करण्यासाठी प्रत्यक्ष अनुभवी शेतकऱ्यांकडून व्यावसायिक मार्गदर्शन मिळवा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  प्रॅक्टिकल फाउंडेशन कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                हँड्स-ऑन बॅग मेकिंग, स्पॉनिंग, गाईडबुक आणि व्हॉट्सॲप सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल मास्टरक्लास + DPR (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                बिझनेस प्लॅन, बँक सबसिडी DPR, मार्केटिंग स्ट्रॅटेजी आणि डिजिटल सर्टिफिकेट.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="/training"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>प्रशिक्षण सुरू करा (₹299)</span>
            </Link>
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>फी तपशील तपासा</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20बाणेर/पुणे%20येथून%20आहे.%20मला%20बाणेर%20मशरूम%20फार्मिंग%20ट्रेनिंगविषयी%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp वर सल्ला घ्या</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
