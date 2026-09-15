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
  Clock,
  Laptop,
  Sprout,
  Users,
  Compass,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Training Center Near Me – Hinjewadi Pune | Organic Mushrooms Farm",
  description:
    "Hinjewadi मध्ये राहता आणि 'mushroom training near me' शोधताय? Organic Mushrooms Farm चं नजीकचं training center इथे आहे. IT professionals साठी weekend batch.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-training-center-near-me",
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
      "Mushroom Training Center Near Me – Hinjewadi Pune | Organic Mushrooms Farm",
    description:
      "Hinjewadi मध्ये राहता आणि 'mushroom training near me' शोधताय? Organic Mushrooms Farm चं नजीकचं training center इथे आहे. IT professionals साठी weekend batch.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-training-center-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Training Center Near Me – Hinjewadi Pune | Organic Mushrooms Farm",
    description:
      "Hinjewadi मध्ये राहता आणि 'mushroom training near me' शोधताय? Organic Mushrooms Farm चं नजीकचं training center इथे आहे. IT professionals साठी weekend batch.",
  },
};

const faqs = [
  {
    q: "Hinjewadi Phase जवळ center आहे का?",
    a: "हो, Hinjewadi Phase 1, Phase 2 आणि Phase 3 मधून सहज पोहोचता येईल अशा मध्यवर्ती ठिकाणी केंद्र आहे.",
  },
  {
    q: "Working professionals साठी कोणता batch best आहे?",
    a: "Saturday-Sunday weekend batch सर्वात जास्त popular आहे, ज्यामध्ये कामाचे तास सांभाळून प्रॅक्टिकल ट्रेनिंग पूर्ण करता येते.",
  },
  {
    q: "हिंजवडीतील आयटी प्रोफेशनल्ससाठी वेळ किती द्यावा लागतो?",
    a: "मशरूम फार्मिंगमध्ये ऑटोमेशन (टाइमर व फॉगर सिस्टीम) वापरल्यास दिवसाला केवळ 30 ते 45 मिनिटे वेळ देणे पुरेसे ठरते.",
  },
  {
    q: "ट्रेनिंगनंतर घरी किंवा फ्लॅटमध्ये मशरूम पिकवता येतात का?",
    a: "होय, घरातील रिकामी 10x10 खोली, बाल्कनी किंवा ड्राय बाल्कनीमध्ये 50 ते 100 बॅग्स लावून सहज ताजे ऑयस्टर मशरूम पिकवता येतात.",
  },
  {
    q: "स्पॉन (बियाणे) आणि ग्रोईंग मटेरियल हिंजवडीत थेट उपलब्ध होते का?",
    a: "होय, प्रशिक्षण केंद्रावरून किंवा थेट होम डिलिव्हरीद्वारे लॅब-सर्टिफाइड हाय-यिल्ड स्पॉन, पीपी बॅग्स आणि फॉर्मेलिन/बाविस्टीन उपलब्ध करून दिले जाते.",
  },
  {
    q: "उत्पादित मशरूमची हिंजवडी परिसरात विक्री कशी करावी?",
    a: "हिंजवडी, वाकड व बाणेरमधील मोठ्या रेसिडेन्शियल सोसायट्यांमध्ये व्हॉट्सॲप ग्रुप्सद्वारे ताज्या ऑयस्टर मशरूमला ₹250 ते ₹350/किलोचा थेट दर मिळतो.",
  },
];

export default function MushroomTrainingCenterNearMeHinjewadiPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-training-center-near-me";

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
        name: "Mushroom Training Center Near Me – Hinjewadi Pune | Organic Mushrooms Farm",
        description:
          "Hinjewadi मध्ये राहता आणि 'mushroom training near me' शोधताय? Organic Mushrooms Farm चं नजीकचं training center इथे आहे. IT professionals साठी weekend batch.",
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
            name: "Hinjewadi Training Center Near Me",
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
      id="mushroom-training-near-me-hinjewadi-page"
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
            Hinjewadi Training Center Near Me
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
            <span>Hinjewadi Phase 1, Phase 2, Phase 3, Wakad & Marunji, Pune</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Hinjewadi, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>IT Professionals साठी खास Weekend & Evening Batches</span>
            <span>•</span>
            <span>Side-Income आणि Future Agribusiness Guidance</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ट्रेनिंग मॉडेल्स
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Mushroom training center near me in Hinjewadi Pune for IT professionals"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Convenient mushroom farming practical training near Hinjewadi IT Park Phase 1, 2, and 3.
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
              हिंजवडी आयटी पार्कजवळील सोयीस्कर मशरूम प्रशिक्षण केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Hinjewadi IT Park मध्ये काम करणाऱ्या अनेक professionals ना side-income किंवा future business म्हणून mushroom farming मध्ये रस आहे, पण रोजच्या busy schedule मुळे लांब जाणं शक्य नसतं. म्हणूनच Organic Mushrooms Farm ने Hinjewadi परिसरातील लोकांसाठी जवळचं, सोयीस्कर training center तयार केलं आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>इथे तुम्हाला weekend किंवा evening slots मध्ये practical training मिळतं — कमी वेळेत जास्त शिकायला मिळेल अशा पद्धतीने curriculum design केलेला आहे. Phase 1, Phase 2, Phase 3 या भागातील रहिवाशांसाठी हे सर्वात जवळचं आणि trusted training center आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आपला साइड-बिझनेस किंवा फार्मिंग प्रवास सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            निवडा. दर्जेदार उत्पादनासाठी आवश्यक असणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              हाय-यिल्ड मशरूम स्पॉन
            </Link>{" "}
            थेट मागवून घ्या. परिसरातील इतर केंद्रे पाहण्यासाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              बाणेर फार्मिंग केंद्र
            </Link>
            ,{" "}
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
              हडपसर कल्टिव्हेशन केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              खराडी केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-development-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              विमान नगर R&D केंद्र
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी आणि पॅकेज तपशील
            </Link>{" "}
            तपासा.
          </p>
        </section>

        {/* Section 1: Specially Tailored for IT Professionals & Busy Schedules */}
        <section
          id="it-professionals-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Laptop className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. आयटी कर्मचारी व नोकरदारांसाठी खास डिझाइन केलेले मॉड्युल
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            व्यस्त दैनंदिन वेळापत्रकातून वेळ काढून शाश्वत साइड-इन्कम मिळवण्याचे अचूक मार्गदर्शन:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>वीकेंड बॅचेस (शनिवार-रविवार)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ऑफिसच्या सुट्टीच्या दिवशी सोयीस्कर वेळेत प्रत्यक्ष प्रॅक्टिकल hands-on बॅग मेकिंग व टेक्निक्स.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span>स्मार्ट ऑटोमेशन सेटअप</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                स्मार्ट प्लग आणि फॉगरने आर्द्रता आपोआप नियंत्रित होते, ज्यामुळे दिवसभर हजर राहण्याची गरज नसते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <TrendingUpIcon className="w-3.5 h-3.5 shrink-0" />
                <span>दरमहा ₹15,000 ते ₹30,000 उत्पन्न</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                फ्लॅटमधील रिकाम्या खोलीत 100 बॅग्स लावून पार्ट-टाइम कामातून हमखास पूरक नफा मिळवता येतो.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Local Community Sales & Society Demand in Hinjewadi-Wakad */}
        <section
          id="society-sales"
          aria-labelledby="sales-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="sales-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. हिंजवडी व वाकड परिसरातील प्रचंड स्थानिक मागणी आणि विक्री चॅनेल्स
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            मशरूम पिकवल्यानंतर विक्रीसाठी दूर जाण्याची गरज नसते; स्थानिक टाउनशिप्समध्येच उत्तम दर मिळतो:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हाय-एंड टाउनशिप्स मागणी:</strong> हिंजवडी फेज 1-3, मारुंजी, माण आणि वाकडमधील मोठ्या गेटेड कम्युनिटीजमध्ये ताजे ऑयस्टर मशरूम ₹250 ते ₹350/किलो विकले जाते.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>व्हॉट्सॲप आणि मायक्रो-मार्केटिंग:</strong> सोसायटी ग्रुप्सवर आदल्या दिवशी प्री-ऑर्डर घेऊन सकाळी ताज्या तोडणीनंतर थेट डिलिव्हरी मॉडेल शिकवले जाते.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सुकवलेले मशरूम बायबॅक:</strong> अतिरिक्त उत्पादन असल्यास उन्हात वाळवून ड्राय मशरूम थेट बायबॅक नेटवर्कद्वारे ₹600 ते ₹1000/किलोने विक्रीची खात्री.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्पॉन व मटेरियल उपलब्धता:</strong> ट्रेनिंग पूर्ण झाल्यावर हिंजवडी परिसरातील शेतकऱ्यांना उच्च दर्जाचे स्पॉन सातत्याने वेळेवर पुरवले जाते.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Location Connectivity */}
        <section
          id="location-connectivity"
          aria-labelledby="connectivity-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Users className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="connectivity-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. हिंजवडी फेज 1, 2 व 3 साठी जवळचे व सोयीस्कर ठिकाण
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Phase 1 & Wakad:</strong>
              <span className="text-slate-600 dark:text-slate-300">शिवाजी चौक व वाकड ब्रिजवरून 10 मिनिटांच्या अंतरावर सुलभ ॲक्सेस.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Phase 2 & Phase 3:</strong>
              <span className="text-slate-600 dark:text-slate-300">विप्रो, इन्फोसिस आणि टीसीएस सर्कलवरून थेट कनेक्टिव्हिटी.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कमी जागेत हाय-यील्ड:</strong>
              <span className="text-slate-600 dark:text-slate-300">भाड्याच्या किंवा स्वतःच्या फ्लॅटमध्ये कमी जागेत जास्तीत जास्त उत्पादन क्षमता.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="hinjewadi-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (हिंजवडी मशरूम ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              हिंजवडी, वाकड व मारुंजी परिसरातील नागरिकांसाठी वीकेंड बॅच सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              आपल्या सोयीनुसार शनिवार किंवा रविवारी प्रत्यक्ष प्रॅक्टिकल अनुभव घ्या आणि स्वतःचा गृहउद्योग सुरू करा.
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
                हँड्स-ऑन बॅग मेकिंग, सबस्ट्रेट स्टेरिलायझेशन, ई-बुक व व्हॉट्सॲप सपोर्ट.
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
                व्यावसायिक शेड डिझाइन, बँक सबसिडी DPR, बायबॅक लिंकेज आणि सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20हिंजवडी/पुणे%20येथून%20आहे.%20मला%20हिंजवडी%20मशरूम%20ट्रेनिंगविषयी%20माहिती%20हवी%20आहे."
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

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
