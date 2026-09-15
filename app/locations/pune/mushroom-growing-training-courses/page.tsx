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
  Layers,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Growing Training Courses – Shivajinagar Pune | Organic Mushrooms Farm",
  description:
    "Shivajinagar Pune मध्ये beginner ते advanced level पर्यंतचे structured mushroom growing training courses. 3-level प्रॅक्टिकल गाईड, हँड्स-ऑन बॅचेस, सबसिडी व मार्केट लिंकेज.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-growing-training-courses",
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
      "Mushroom Growing Training Courses – Shivajinagar Pune | Organic Mushrooms Farm",
    description:
      "Shivajinagar Pune मध्ये beginner ते advanced level पर्यंतचे structured mushroom growing training courses. 3-level प्रॅक्टिकल गाईड, हँड्स-ऑन बॅचेस, सबसिडी व मार्केट लिंकेज.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-growing-training-courses",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Growing Training Courses – Shivajinagar Pune | Organic Mushrooms Farm",
    description:
      "Shivajinagar Pune मध्ये beginner ते advanced level पर्यंतचे structured mushroom growing training courses. 3-level प्रॅक्टिकल गाईड, हँड्स-ऑन बॅचेस, सबसिडी व मार्केट लिंकेज.",
  },
};

const faqs = [
  {
    q: "तीन levels चे वेगळे चार्ज होतात का?",
    a: "हो, प्रत्येक level ची fee वेगळी आहे (Beginner Level ₹299, Advanced Masterclass ₹499), तसेच विद्यार्थ्यांसाठी आणि शेतकऱ्यांसाठी combo packages सुद्धा उपलब्ध आहेत.",
  },
  {
    q: "एकाच दिवसात सर्व तीन levels पूर्ण करता येतात का?",
    a: "नाही, प्रत्येक level साठी स्वतंत्र session ठेवलेला असतो, जेणेकरून concept पक्का होईल आणि प्रॅक्टिकल सराव स्वतःच्या हाताने पूर्ण करता येईल.",
  },
  {
    q: "Shivajinagar रेल्वे स्टेशन आणि मेट्रो स्टेशनवरून केंद्र किती अंतरावर आहे?",
    a: "शिवाजीनगर लोकल रेल्वे स्थानक आणि सिव्हिल कोर्ट/शिवाजीनगर मेट्रो स्थानकावरून हे केंद्र अवघ्या 5 ते 10 मिनिटांच्या चालण्याच्या अंतरावर आहे, ज्यामुळे वाहतुकीचा त्रास होत नाही.",
  },
  {
    q: "Beginner लेव्हलमध्ये कोणत्या मशरूमचे प्रात्यक्षिक दिले जाते?",
    a: "सुरुवातीच्या Beginner लेव्हलमध्ये घरच्या घरी कमी जागेत व कमी भांडवलात करता येणाऱ्या ऑयस्टर मशरूमचे (Dhingri) प्रत्यक्ष हँड्स-ऑन बॅग मेकिंग, पेंढा निर्जंतुकीकरण व स्पॉनिंग शिकवले जाते.",
  },
  {
    q: "Intermediate व Advanced लेव्हलमध्ये कमर्शियल फार्मिंग व प्रोजेक्ट रिपोर्ट मिळतो का?",
    a: "होय, तापमान नियंत्रित बटन मशरूम शेड उभारणी, वातानुकूलित (AC) चेंबर डिझाईन, नाबार्ड (NABARD) बँक लोन सबसिडी प्रोजेक्ट रिपोर्ट आणि स्थानिक मार्केट विक्री तंत्र यात सखोल शिकवले जाते.",
  },
  {
    q: "प्रशिक्षणानंतर बियाणे (Spawn) व कच्चा माल कुठे मिळेल?",
    a: "आमच्या लॅबमधून उच्च दर्जाचे फर्स्ट-जनरेशन ऑयस्टर व बटन मशरूम स्पॉन, पीपी बॅग्ज आणि फॉर्मलिन/बाव्हिस्टिन शिवाजीनगर केंद्रावर किंवा घरपोच कुरिअरने उपलब्ध करून दिले जाते.",
  },
];

export default function MushroomGrowingTrainingCoursesPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-growing-training-courses";

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
        name: "Mushroom Growing Training Courses – Shivajinagar Pune | Organic Mushrooms Farm",
        description:
          "Shivajinagar Pune मध्ये beginner ते advanced level पर्यंतचे structured mushroom growing training courses. 3-level प्रॅक्टिकल गाईड, हँड्स-ऑन बॅचेस, सबसिडी व मार्केट लिंकेज.",
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
            name: "Mushroom Growing Training Courses",
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
      id="growing-courses-page"
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
            Growing Training Courses
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
            <span>Shivajinagar, FC Road, Deccan & Central Pune Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Shivajinagar, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Growing Training Courses
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>Beginner ते Advanced 3-Level स्ट्रक्चर</span>
            <span>•</span>
            <span>प्रत्यक्ष प्रॅक्टिकल बॅग मेकिंग</span>
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
              alt="Structured mushroom growing training courses practical batch in Shivajinagar Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Hands-on mushroom cultivation sessions and level-wise training modules at Shivajinagar, Pune.
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
              शिवाजीनगर, पुणे येथील सुव्यवस्थित 3-पातळी मशरूम ग्रोईंग कोर्सेस
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Shivajinagar हा Pune चा central आणि व्यापारी दृष्टीने महत्त्वाचा भाग आहे</strong>, त्यामुळे इथे वेगवेगळ्या पातळीचे आणि गरजांचे विद्यार्थी येतात. म्हणूनच आमचे courses तीन levels मध्ये structured केलेले आहेत — <strong>Beginner, Intermediate आणि Advanced</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            प्रत्येक level मध्ये नवीन skills आणि depth वाढत जाते, ज्यामुळे एकदा basic शिकल्यानंतर तुम्ही पुढच्या level कडे सहज जाऊ शकता. <strong>Shivajinagar, Deccan आणि FC Road जवळच्या लोकांसाठी हे केंद्र मध्यवर्ती आणि पोहोचायला सोपं आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            तुम्ही नवशिक्या असाल किंवा कमर्शियल फार्मर, आमच्या{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम प्रशिक्षण कार्यशाळा
            </Link>{" "}
            आणि परवडणाऱ्या{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ट्रेनिंग फी (₹299 पासून)
            </Link>{" "}
            द्वारे स्वतःचा फायदेशीर कृषी व्यवसाय सुरू करू शकता.
          </p>
        </section>

        {/* Section 1: 3-Tier Course Structure (Beginner, Intermediate, Advanced) */}
        <section
          id="course-levels"
          aria-labelledby="levels-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="levels-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. तीन-पातळी अभ्यासक्रम रचना (3-Level Structured Curriculum)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            प्रत्येक विद्यार्थ्याच्या अनुभवानुसार आणि व्यवसायाच्या उद्दिष्टांनुसार तयार केलेली सुस्पष्ट रचना:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            {/* Level 1: Beginner */}
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Level 1: Beginner (₹299)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                घरगुती ऑयस्टर मशरूम शेती. गव्हाच्या पेंढ्याचे निर्जंतुकीकरण, मायक्रो-परफोरेटेड बॅग भरणे, स्पॉनिंग (बियाणे पेरणे) आणि मायसेलियम रन मॉनिटरिंग.
              </p>
            </div>

            {/* Level 2: Intermediate */}
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Level 2: Intermediate</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                सेमी-कमर्शियल ऑयस्टर व मिल्की मशरूम. आर्द्रता नियंत्रक फॉगर्स, व्हेंटिलेशन व CO2 मॅनेजमेंट, काढणी तंत्र, सुकवणे (Dehydration) व ब्रँडिंग.
              </p>
            </div>

            {/* Level 3: Advanced */}
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Level 3: Advanced Masterclass</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                हाय-टेक{" "}
                <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  बटन मशरूम
                </Link>{" "}
                प्रकल्प, एसी चेंबर्स, कॉम्पोस्ट पाश्चरायझेशन टनेल, बँक लोन सबसिडी प्रोजेक्ट रिपोर्ट आणि थेट बी2बी हॉटेल सप्लाय चेन.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Strategic Shivajinagar Central Location */}
        <section
          id="location-advantages"
          aria-labelledby="location-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="location-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. शिवाजीनगर मध्यवर्ती केंद्राचे प्रवासातील फायदे (Zero Commute Stress)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्याच्या कोणत्याही भागातून जलद व सोयीस्कर वाहतूक सुविधा:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>रेल्वे व मेट्रो कनेक्टिव्हिटी:</strong> शिवाजीनगर लोकल स्टेशन व मेट्रो स्टेशनवरून अवघ्या 5 मिनिटांवर, ज्यामुळे लोणावळा, तळेगाव, देहूरोड आणि पिंपरी-चिंचवडहून येणाऱ्यांना अतिशय सोयीचे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मध्यवर्ती बस स्थानक:</strong> पीएमपीएल (PMPML) बस स्थानकामुळे कोथरूड, स्वारगेट, कात्रज, हडपसर आणि वारजे भागातील शिकणाऱ्यांसाठी थेट बस सेवा.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>विद्यार्थी व व्यावसायिकांसाठी उपयुक्त:</strong> फर्ग्युसन कॉलेज (FC Road), गरवारे कॉलेज, सिम्बायोसिस आणि सीओईपी (COEP) जवळील विद्यार्थ्यांसाठी{" "}
                <Link
                  href="/locations/pune/mushroom-education-courses"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  शैक्षणिक कोर्सेस
                </Link>{" "}
                आणि वीकेंड बॅचेस.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Economics, Raw Materials & Market Linkage */}
        <section
          id="market-linkage"
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. व्यावसायिक गणित, कच्चा माल पुरवठा व नफा मिळवण्याचे तंत्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            फक्त थिअरी नाही तर प्रत्यक्षात नफा कमवून देणारी व्यावसायिक माहिती:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">उत्पादन खर्च व नफा:</strong>
              <span className="text-slate-600 dark:text-slate-300">₹40 ते ₹50 प्रति किलो उत्पादन खर्च आणि बाजारात ₹200 ते ₹280/किग्रा विक्री दर.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">शुद्ध बियाणे (Spawn):</strong>
              <span className="text-slate-600 dark:text-slate-300">प्रशिक्षणादरम्यान आणि नंतर थेट फार्मवरून प्रमाणित{" "}
                <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  स्पॉन बियाणे
                </Link>{" "}
                पुरवठा.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">स्थानिक मार्केट लिंकेज:</strong>
              <span className="text-slate-600 dark:text-slate-300">पुण्यातील एफसी रोड रेस्टॉरंट्स, स्थानिक मंडई, सुपरमार्केट आणि सोसायटी ग्रुप्सना थेट विक्री.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="growing-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (शिवाजीनगर मशरूम ग्रोईंग कोर्सेसविषयी वारंवार विचारले जाणारे प्रश्न)
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
              शिवाजीनगर, पुणे केंद्रावर आजच ग्रोईंग कोर्समध्ये प्रवेश मिळवा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Beginner ते Advanced लेव्हलची संपूर्ण प्रॅक्टिकल तयारी, स्टार्टर किट आणि तज्ज्ञांचे निरंतर मार्गदर्शन मिळवा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  Beginner Growing Level (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                घरगुती ऑयस्टर मशरूम शेती, बॅग मेकिंग सराव, स्टार्टर किट व छापील गाईड.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  Commercial Masterclass (₹499)
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20पुणे%20येथून%20आहे.%20मला%20शिवाजीनगर%20येथील%20मशरूम%20ग्रोईंग%20कोर्सेस%20(Beginner%20/%20Advanced)%20बद्दल%20माहिती%20हवी%20आहे."
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
