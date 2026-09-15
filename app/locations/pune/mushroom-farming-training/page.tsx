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
  GraduationCap,
  Clock,
  Coins,
  Store,
  Layers,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Training in Kondhwa, Pune | Organic Mushrooms Farm",
  description:
    "Kondhwa Pune मधील तरुण आणि students साठी mushroom farming training. Career किंवा side-business म्हणून सुरुवात करा.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training",
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
      "Mushroom Farming Training in Kondhwa, Pune | Organic Mushrooms Farm",
    description:
      "Kondhwa Pune मधील तरुण आणि students साठी mushroom farming training. Career किंवा side-business म्हणून सुरुवात करा.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Training in Kondhwa, Pune | Organic Mushrooms Farm",
    description:
      "Kondhwa Pune मधील तरुण आणि students साठी mushroom farming training. Career किंवा side-business म्हणून सुरुवात करा.",
  },
};

const faqs = [
  {
    q: "College students training घेऊ शकतात का?",
    a: "हो, अनेक कॉलेज विद्यार्थी part-time training घेतात आणि हॉस्टेल किंवा घरातूनच 20-30 बॅग्जपासून छोट्या स्तरावर फायदेशीर side-business सुरू करतात.",
  },
  {
    q: "Training नंतर लगेच कमाई सुरू होते का?",
    a: "पहिल्या batch ची cultivation साधारण 25-30 दिवसांत तयार होते, त्यानंतर ताजे ऑयस्टर मशरूम थेट स्थानिक बाजारात विकून पहिल्याच महिन्यापासून कमाई सुरू करता येते.",
  },
  {
    q: "कोंढवा, एनआयबीएम व उंड्री भागातील विद्यार्थ्यांसाठी बॅचेस कधी असतात?",
    a: "कॉलेज आणि नोकरी सांभाळून शिकण्यासाठी शनिवार आणि रविवारी विशेष फ्लेक्सिबल वीकेंड बॅचेस आणि ऑनलाइन मॉड्यूल्स उपलब्ध आहेत.",
  },
  {
    q: "कमीत कमी किती भांडवलात हा व्यवसाय सुरू करता येतो?",
    a: "अवघ्या ₹2,000 ते ₹5,000 च्या सुरुवातीच्या भांडवलात विद्यार्थी 20 ते 50 बॅग्जचा प्रायोगिक घरगुती प्रकल्प सुरू करू शकतात.",
  },
  {
    q: "कोंढवा आणि आसपासच्या भागात तयार मशरूम कुठे विकता येतो?",
    a: "एनआयबीएम रोड, सॅलिसबरी पार्क, वानवडी आणि उंड्री परिसरातील उच्चभ्रू सोसायट्या, स्थानिक सुपरमार्केट आणि रेस्टॉरंट्समध्ये ₹240 ते ₹280 प्रति किलो सहज भाव मिळतो.",
  },
  {
    q: "प्रशिक्षणानंतर स्पॉन (बियाणे) व साहित्य घरपोच मिळेल का?",
    a: "होय, कोंढवा आणि उंड्री परिसरात लॅब-प्रमाणित फर्स्ट-जनरेशन स्पॉन, पीपी बॅग्ज आणि फॉर्मलिन/बाव्हिस्टिन थेट घरपोच पुरवले जाते.",
  },
];

export default function MushroomFarmingTrainingPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training";

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
        name: "Mushroom Farming Training in Kondhwa, Pune | Organic Mushrooms Farm",
        description:
          "Kondhwa Pune मधील तरुण आणि students साठी mushroom farming training. Career किंवा side-business म्हणून सुरुवात करा.",
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
            name: "Farming Training",
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
      id="farming-training-page"
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
            Farming Training
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact, Seamless & Translucent (Zero Black Boxes) */}
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
            <span>Kondhwa, NIBM Road, Undri & Pune Youth Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Kondhwa, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Farming Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>विद्यार्थी आणि तरुणांसाठी Side-Business संधी</span>
            <span>•</span>
            <span>कमी जागा आणि कमी भांडवलात सुरुवात</span>
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
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Mushroom farming practical training in Kondhwa Pune for college students and youth"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Practical mushroom cultivation and entrepreneurship guidance for college students and youth in Kondhwa.
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
              कोंढवा, एनआयबीएम आणि उंड्री भागातील तरुणांसाठी व्यावसायिक प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Kondhwa भागात अनेक students आणि तरुण राहतात जे education सोबतच काहीतरी practical skill शिकण्याच्या शोधात असतात</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Mushroom farming training हा त्यांच्यासाठी एक उत्तम पर्याय आहे — कमी जागा, कमी investment आणि लवकर results मिळणारा business</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>NIBM Road आणि Undri जवळच्या students साठी आमचं training सोयीस्कर वेळेत ठेवलं आहे, जेणेकरून college किंवा job सोबत सुद्धा शिकता येईल</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमी जागेत आणि अत्यंत कमी भांडवलात स्वतंत्र व्यवसाय उभारण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण मॉड्यूल्स (₹299 पासून)
            </Link>{" "}
            उपयुक्त ठरतात. यासोबत लागणारे उच्च दर्जाचे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              शुद्ध स्पॉन बियाणे
            </Link>{" "}
            आणि स्टार्टर किट घरपोच दिले जाते. शेजारच्या भागांमधील माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-offline"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मगरपट्टा ऑफलाइन ट्रेनिंग
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              स्वारगेट ट्रेनिंग
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी तपशील
            </Link>{" "}
            सुद्धा तपासू शकता.
          </p>
        </section>

        {/* Section 1: Student Entrepreneurship & Side-Business Model */}
        <section
          id="student-entrepreneurship"
          aria-labelledby="student-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="student-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. कॉलेज शिकता-शिकता मशरूम शेतीतून पॉकेटमनी आणि कमाई
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कोंढवा, एनआयबीएम आणि कॅम्प परिसरातील कॉलेज विद्यार्थ्यांसाठी खास बिझनेस मॉडेल:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Coins className="w-3.5 h-3.5 shrink-0" />
                <span>अतिशय कमी भांडवल</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                अवघ्या ₹2,000 ते ₹5,000 मध्ये 20-30 बॅग्जपासून स्वतःचा उत्पादन प्रकल्प सुरू करता येतो.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>दररोज फक्त 15-20 मिनिटे</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                सकाळी आणि संध्याकाळी फक्त स्प्रेने पाणी मारणे; अभ्यासाला पूर्ण वेळ मिळतो.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Store className="w-3.5 h-3.5 shrink-0" />
                <span>स्थानिक विक्रीत मोठा नफा</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                एक किलो मशरूमचा उत्पादन खर्च ₹45 ते ₹50, तर विक्री ₹220 ते ₹260 प्रति किलो.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Practical Syllabus */}
        <section
          id="course-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. ट्रेनिंगमध्ये काय शिकायला मिळते? (Step-by-Step Hands-on)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            थिएरीपेक्षा 90% प्रत्यक्ष प्रात्यक्षिकावर भर:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>पेंढा निर्जंतुकीकरण:</strong> उकळते पाणी किंवा केमिकल पद्धतीने घरातच पेंढा निर्जंतुक करण्याचे सोपे तंत्र.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्पॉनिंग व बॅग मेकिंग:</strong> उच्च दर्जाचे लॅब स्पॉन वापरून स्वतःच्या हाताने पीपी बॅग्ज भरण्याचा सराव.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मायसेलियम रन व वातावरण व्यवस्थापन:</strong> 15-18 दिवस अंधाऱ्या खोलीत बॅग ठेवणे आणि 80% आर्द्रता नियंत्रित करणे.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>काढणी व थेट विक्री:</strong> 25 ते 30 दिवसांत ताजे मशरूम काढून स्थानिक ग्राहकांना थेट विक्रीचे कौशल्य.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: NIBM, Undri & Kondhwa Marketing Opportunities */}
        <section
          id="marketing-opportunities"
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Store className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. कोंढवा, एनआयबीएम व उंड्री भागातील विक्री संधी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            या भागातील उच्चभ्रू गृहसंकुलांमध्ये ताज्या आणि ऑरगॅनिक मशरूमला नियमित मागणी असते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सोसायटी व्हॉट्सॲप ग्रुप्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">एनआयबीएम व उंड्रीमधील मोठ्या सोसायट्यांमध्ये थेट फ्रेश पॅकेट्स विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">स्थानिक सुपरमार्केट्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">स्थानिक भाजी विक्रेते व ऑरगॅनिक स्टोअर्ससोबत नियमित पुरवठा करार.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">रेस्टॉरंट्स व कॅफेज:</strong>
              <span className="text-slate-600 dark:text-slate-300">कोंढवा व वानवडी परिसरातील हॉटेल्सना नियमित होलसेल पुरवठा.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="training-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (कोंढवा मशरूम फार्मिंग ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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

        {/* Section 5: Training & Consultation CTA - Seamless & Translucent */}
        <section
          aria-labelledby="training-cta-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="training-cta-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              कोंढवा, पुणे परिसरातील तरुणांसाठी प्रॅक्टिकल बॅच आजच उपलब्ध!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              शिक्षणासोबत स्वतःचा स्वतंत्र कृषी-उद्योग सुरू करा, स्टार्टर किट मिळवा आणि पहिल्याच महिन्यापासून उत्पादन सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  बेसिक प्रॅक्टिकल कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                हँड्स-ऑन बॅग मेकिंग सराव, स्टार्टर स्पॉन किट, छापील गाईड व व्हॉट्सॲप सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                बटन + ऑयस्टर शेड डिझाईन, नाबार्ड लोन सबसिडी, बी2बी लिंकेज व सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20कोंढवा/पुणे%20येथून%20आहे.%20मला%20मशरूम%20फार्मिंग%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp वर शंका विचारा</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
