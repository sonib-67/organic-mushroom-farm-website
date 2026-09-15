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
  Factory,
  Briefcase,
  Users,
  Clock,
  Layers,
  IndianRupee,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farm Learning Center Pimpri-Chinchwad | Organic Mushrooms Farm",
  description:
    "Pimpri-Chinchwad industrial belt मध्ये side-income साठी mushroom farm learning center. Factory कामगार आणि गृहिणींसाठी सोपं training.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farm-learning-center",
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
      "Mushroom Farm Learning Center Pimpri-Chinchwad | Organic Mushrooms Farm",
    description:
      "Pimpri-Chinchwad industrial belt मध्ये side-income साठी mushroom farm learning center. Factory कामगार आणि गृहिणींसाठी सोपं training.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farm-learning-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farm Learning Center Pimpri-Chinchwad | Organic Mushrooms Farm",
    description:
      "Pimpri-Chinchwad industrial belt मध्ये side-income साठी mushroom farm learning center. Factory कामगार आणि गृहिणींसाठी सोपं training.",
  },
};

const faqs = [
  {
    q: "Factory shift नंतर training शक्य आहे का?",
    a: "हो, MIDC व फॅक्टरी कामगारांच्या शिफ्ट टाईमिंगनुसार खास evening (संध्याकाळी) आणि Sunday (रविवार) batches ठेवल्या आहेत.",
  },
  {
    q: "संपूर्ण family training घेऊ शकते का?",
    a: "हो, पिंपरी-चिंचवडमधील अनेक कुटुंबं एकत्र training घेतात, ज्यामुळे गृहिणी आणि कुटुंबातील सदस्य मिळून घरगुती business सहज सुरू करू शकतात.",
  },
  {
    q: "पिंपरी-चिंचवड, निगडी आणि आकुर्डी परिसरातील रहिवाशांसाठी केंद्र कसे सोयीचे आहे?",
    a: "निगडी, आकुर्डी, चिंचवड स्टेशन आणि पिंपरी मुख्य बाजारपेठेशी उत्तम लोकल ट्रेन व बस कनेक्टिव्हिटी असल्यामुळे केंद्रावर पोहोचणे अगदी सोपे आहे.",
  },
  {
    q: "नोकरी सांभाळून मशरूम फार्मिंगसाठी दिवसातून किती वेळ द्यावा लागतो?",
    a: "रोज फक्त 20 ते 30 मिनिटे! सकाळी कामावर जाण्यापूर्वी किंवा संध्याकाळी परतल्यावर पाणी फवारणी आणि हवेचे साधे नियमन पुरेसे असते.",
  },
  {
    q: "लहान फ्लॅट किंवा भाड्याच्या खोलीत मशरूम पिकवता येतात का?",
    a: "होय, 10 बाय 10 ची लहान जागा किंवा बाल्कनीच्या सावलीत व्हर्टिकल रॅक्स लावून ऑयस्टर मशरूमचे 50 ते 100 बॅग्ज सहज लावता येतात.",
  },
  {
    q: "PCMC परिसरात ताजा मशरूम विकण्यासाठी मार्केट कुठे आहे?",
    a: "पिंपरी भाजी मंडई, प्राधिकरण, हिंजवडी व चाकण जवळील निवासी सोसायट्या आणि स्थानिक रेस्टॉरंट्समध्ये ताजी ऑयस्टर व बटन मशरूम थेट रोख दराने विकली जातात.",
  },
];

export default function MushroomFarmLearningCenterPCMCPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farm-learning-center";

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
        name: "Mushroom Farm Learning Center Pimpri-Chinchwad | Organic Mushrooms Farm",
        description:
          "Pimpri-Chinchwad industrial belt मध्ये side-income साठी mushroom farm learning center. Factory कामगार आणि गृहिणींसाठी सोपं training.",
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
            name: "Learning Center Pimpri-Chinchwad",
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
      id="mushroom-farm-learning-center-pcmc-page"
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
            PCMC Learning Center
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
            <span>Pimpri, Chinchwad, Nigdi, Akurdi & Bhosari MIDC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Pimpri-Chinchwad येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Farm Learning Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>फॅक्टरी कामगार, नोकरदार व गृहिणींसाठी सोपे प्रशिक्षण</span>
            <span>•</span>
            <span>कमी भांडवलात साइड-इन्कमचा खात्रीशीर मार्ग</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              प्रशिक्षण मॉडेल्स
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Mushroom farm learning center in Pimpri Chinchwad Pune for side income"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Practical mushroom training for factory workers, homemakers and part-time learners in PCMC industrial township.
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
              पिंपरी-चिंचवड औद्योगिक पट्ट्यातील कुटुंबांसाठी अतिरिक्त उत्पन्नाची संधी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Pimpri-Chinchwad हा industrial township असल्यामुळे इथे अनेक कुटुंबं आधीच काही ना काही manufacturing किंवा factory work शी जोडलेली आहेत. यांच्यासाठी mushroom farming हा एक सोपा आणि low-investment side-business ठरू शकतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>आमचं learning center इथे विशेषतः part-time शिकणाऱ्यांसाठी डिझाईन केलेलं आहे — सकाळी किंवा संध्याकाळी काम झाल्यावर सहज शिकता येईल असे short sessions ठेवले आहेत</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Nigdi, Akurdi आणि Chinchwad जवळच्या रहिवाशांसाठी हे केंद्र पोहोचण्यास सोपं आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमी जागेत घरातूनच साइड-बिझनेस सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            उपयुक्त आहे. यासोबत लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              लॅब-सर्टिफाइड स्पॉन बियाणे
            </Link>{" "}
            थेट पुरवले जाते. शेजारील भागांसाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-by-government"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              वाघोली गव्हर्नमेंट ट्रेनिंग
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/government-mushroom-training-center-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कात्रज शासकीय केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-government-online"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              पुणे कॅम्प ऑनलाइन ट्रेनिंग
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी तपशील
            </Link>{" "}
            पाहू शकता.
          </p>
        </section>

        {/* Section 1: Why Mushroom Farming is Ideal for Industrial Belt */}
        <section
          id="industrial-side-income"
          aria-labelledby="industrial-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Factory className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="industrial-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. फॅक्टरी कामगार व नोकरदारांसाठी साइड-इन्कमचे फायदे
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पिंपरी-चिंचवड, भोसरी आणि चाकण औद्योगिक परिसरातील कुटुंबांसाठी मशरूम फार्मिंग का फायदेशीर ठरते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>शिफ्ट-फ्रेंडली वेळा</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पहिली, दुसरी किंवा जनरल शिफ्ट सांभाळून सकाळी किंवा संध्याकाळी फक्त 20 मिनिटांचे हलके काम.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <IndianRupee className="w-3.5 h-3.5 shrink-0" />
                <span>कमी भांडवल (₹3000-₹5000)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                मोठ्या गुंतवणुकीची गरज नाही; लहान बजेटमध्ये घरगुती स्तरावर प्रायोगिक युनिट सुरू करता येते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>कुटुंबाचा सक्रिय सहभाग</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                घरातील गृहिणी आणि ज्येष्ठ मंडळी दिवसा पाण्याच्या फवारणीचे सोपे काम सहज सांभाळू शकतात.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Practical Learning Curriculum */}
        <section
          id="learning-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. लर्निंग सेंटरवर काय शिकवले जाते?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            थोड्या वेळात अधिक समजेल असा प्रॅक्टिकल आणि रिझल्ट-ओरिएंटेड अभ्यासक्रम:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>घरात जागा नियोजन:</strong> बाल्कनी, मोकळी खोली किंवा गच्चीवरील सावलीच्या भागात व्हर्टिकल रॅक्स कसे लावावे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कच्चा माल व निर्जंतुकीकरण:</strong> गव्हाचा/तांदळाचा पेंढा गरम पाण्यात किंवा फॉर्मेलिन-बाविस्टिनने निर्जंतुक करण्याची कृती.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्पॉनिंग व बॅग भरणी:</strong> स्पॉन बियाणे थराथराने भरून बॅग्जना योग्य छिद्रे पाडण्याचा प्रत्यक्ष हँड्स-ऑन सराव.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्थानिक थेट विक्री:</strong> सोसायटी व्हॉट्सॲप ग्रुप्स, स्थानिक भाजी विक्रेते आणि रेस्टॉरंट्सना थेट विक्री करून नफा मिळवणे.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Batch Schedules & Family Batches */}
        <section
          id="batch-schedules"
          aria-labelledby="schedule-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="schedule-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. सोयीस्कर बॅचेस व फॅमिली ट्रेनिंग
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">इव्हनिंग बॅच (Evening Batch):</strong>
              <span className="text-slate-600 dark:text-slate-300">फॅक्टरी शिफ्ट संपल्यानंतर संध्याकाळी 6:30 ते 8:30 वेळेत विशेष सत्र.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">रविवार वीकेंड बॅच (Sunday Batch):</strong>
              <span className="text-slate-600 dark:text-slate-300">आठवड्याची सुट्टी सत्कारणी लावण्यासाठी सविस्तर हँड्स-ऑन प्रॅक्टिकल.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">फॅमिली एनरोलमेंट:</strong>
              <span className="text-slate-600 dark:text-slate-300">पती-पत्नी किंवा कुटुंबातील सदस्य एकत्र येऊन घरगुती युनिटचे नियोजन शिकू शकतात.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="pcmc-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (पिंपरी-चिंचवड मशरूम लर्निंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              पिंपरी, चिंचवड, निगडी व आकुर्डी परिसरातील रहिवाशांसाठी प्रवेश सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              नोकरी सांभाळून कुटुंबासाठी दरमहा ₹15,000 ते ₹25,000 अतिरिक्त उत्पन्नाचा घरगुती व्यवसाय सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  होम-ग्रोव्हर बेसिक कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                घराच्या लहान जागेत ऑयस्टर मशरूम उत्पादन, पीपी बॅग मेकिंग आणि स्टार्टर मार्गदर्शन.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल मास्टरक्लास + व्हॉट्सॲप सपोर्ट (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                मार्केटिंग स्ट्रॅटेजी, व्हर्टिकल रॅक्स डिझाईन आणि अधिकृत डिजिटल सर्टिफिकेट.
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
              <span>फी व बॅच माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20पिंपरी-चिंचवड/निगडी%20येथून%20आहे.%20मला%20मशरूम%20लर्निंग%20सेंटरविषयी%20माहिती%20हवी%20आहे."
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
