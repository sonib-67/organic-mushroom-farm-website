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
  Landmark,
  ShieldCheck,
  FileCheck,
  Languages,
  Layers,
  Sprout,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Government Mushroom Training Center Near Me – Katraj Pune | Organic Mushrooms Farm",
  description:
    "Katraj आणि Sinhagad Road जवळ government-style mushroom training center शोधताय? Organic Mushrooms Farm इथे उपलब्ध आहे.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/government-mushroom-training-center-near-me",
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
      "Government Mushroom Training Center Near Me – Katraj Pune | Organic Mushrooms Farm",
    description:
      "Katraj आणि Sinhagad Road जवळ government-style mushroom training center शोधताय? Organic Mushrooms Farm इथे उपलब्ध आहे.",
    url: "https://organicmushroomsfarm.com/locations/pune/government-mushroom-training-center-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Government Mushroom Training Center Near Me – Katraj Pune | Organic Mushrooms Farm",
    description:
      "Katraj आणि Sinhagad Road जवळ government-style mushroom training center शोधताय? Organic Mushrooms Farm इथे उपलब्ध आहे.",
  },
};

const faqs = [
  {
    q: "Katraj केंद्रावर कोणत्या भाषेत training दिलं जातं?",
    a: "मराठी, हिंदी आणि English तिन्ही भाषांमध्ये सुलभ भाषेत प्रॅक्टिकल आणि थेअरी training दिलं जातं.",
  },
  {
    q: "छोट्या जमिनीवर सुद्धा farming शक्य आहे का?",
    a: "हो, अगदी 100 sq ft जागेत किंवा घराच्या पडवीत 50 ते 100 बॅग्जपासून mushroom farming सुरू करता येते.",
  },
  {
    q: "शासकीय नियमांनुसार (Government Guidelines) अभ्यासक्रम आहे का?",
    a: "हो, आयसीएआर (ICAR) आणि कृषी विज्ञान केंद्र (KVK) च्या अधिकृत मार्गदर्शक तत्त्वांनुसार परिपूर्ण वैज्ञानिक अभ्यासक्रम शिकवला जातो.",
  },
  {
    q: "कात्रज, धनकवडी व सिंहगड रोडवरून केंद्रावर पोहोचणे सोयीचे आहे का?",
    a: "होय, कात्रज चौक, स्वारगेट बस स्टँड आणि सिंहगड रस्त्यावरून थेट पीएमपीएमएल (PMPML) बसेस आणि वाहतूक साधनांची उत्तम सोय आहे.",
  },
  {
    q: "ट्रेनिंगनंतर बँक लोन व शासकीय सबसिडीसाठी मदत मिळते का?",
    a: "हो, नाबार्ड (NABARD) व राष्ट्रीय फलोत्पादन अभियान (MIDH) च्या 40% ते 50% अनुदानासाठी आवश्यक बँक-मान्य DPR आणि प्रमाणपत्र सहाय्य दिले जाते.",
  },
  {
    q: "प्रशिक्षणानंतर स्पॉन (बियाणे) व बॅग्ज कुठून मिळतील?",
    a: "केंद्रावरूनच शेतकऱ्यांना उच्च प्रतीचे लॅब-सर्टिफाइड स्पॉन, पीपी बॅग्ज आणि फॉर्मलिन थेट वाजवी दरात उपलब्ध करून दिले जाते.",
  },
];

export default function GovernmentMushroomTrainingCenterNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/government-mushroom-training-center-near-me";

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
        name: "Government Mushroom Training Center Near Me – Katraj Pune | Organic Mushrooms Farm",
        description:
          "Katraj आणि Sinhagad Road जवळ government-style mushroom training center शोधताय? Organic Mushrooms Farm इथे उपलब्ध आहे.",
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
            name: "Government Training Center Near Me",
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
      id="govt-training-center-near-me-page"
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
            Govt Center Near Me
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
            <span>Katraj, Sinhagad Road, Dhankawadi & Bibwewadi</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Katraj, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Government Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>शेतकरी व लहान जागाधारकांसाठी आदर्श</span>
            <span>•</span>
            <span>ICAR & KVK मार्गदर्शक तत्त्वांनुसार अभ्यासक्रम</span>
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
              alt="Government style mushroom training center near Katraj Sinhagad road Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Structured government-standard hands-on training for farmers and small landowners near Katraj and Sinhagad Road.
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
              कात्रज, सिंहगड रोड आणि परिसरातील शेतकरी व नवउद्योजकांसाठी सरकारी मानकांनुसार प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Katraj हा भाग Sinhagad Road आणि आसपासच्या semi-rural परिसराला जोडणारा महत्त्वाचा point आहे, आणि इथून अनेक शेतकरी कुटुंबं आणि छोटे जमीनधारक training साठी येतात</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>&apos;Government training center near me&apos; शोधणाऱ्या लोकांसाठी आमचं केंद्र योग्य पर्याय आहे, कारण इथे सरकारी guidelines नुसार structured curriculum शिकवला जातो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Katraj, Dhankawadi, Bibwewadi या भागातील शेतकऱ्यांसाठी हे केंद्र अगदी जवळ आणि सोयीस्कर आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शासकीय नियमांनुसार व्यावसायिक कौशल्य प्राप्त करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण मॉड्यूल्स (₹299 पासून)
            </Link>{" "}
            अत्यंत सोयीचे आहेत. यासोबत लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              शुद्ध स्पॉन बियाणे
            </Link>{" "}
            आणि स्टार्टर किट थेट पुरवले जाते. तसेच शासकीय व इतर शेजारील केंद्रांच्या माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-by-government"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              पुणे शासकीय प्रशिक्षण
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-government-online"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन शासकीय प्रशिक्षण
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कोंढवा प्रशिक्षण
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

        {/* Section 1: Strategic Location & Connectivity for Semi-Rural Pune */}
        <section
          id="location-connectivity"
          aria-labelledby="location-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Landmark className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="location-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. कात्रज, सिंहगड रोड व धनकवडी भागातील शेतकऱ्यांसाठी का महत्त्वाचे?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शहरी आणि ग्रामीण भागाच्या सीमारेषेवरील लोकांसाठी कमी जागेत भरपूर नफा देणारा उद्योग:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Sprout className="w-3.5 h-3.5 shrink-0" />
                <span>100 sq ft जागेत सुरुवात</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                मोठी शेती नसली तरी घरामागील रिकामी खोली किंवा शेडमध्ये 100 बॅग्ज सहज लावता येतात.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Languages className="w-3.5 h-3.5 shrink-0" />
                <span>मराठी, हिंदी व इंग्रजीत शिक्षण</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                स्थानिक शेतकरी आणि नवउद्योजकांसाठी अगदी सोप्या व व्यावहारिक भाषेत शिकवले जाते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>सरकारी मानकांचे पालन</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                आयसीएआर आणि कृषी विद्यापीठाच्या अधिकृत पद्धतींनुसार प्रात्यक्षिक प्रशिक्षण.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Structured Curriculum & Hands-on Training */}
        <section
          id="curriculum-structure"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. प्रशिक्षण केंद्रावर काय शिकवले जाते?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शेतकऱ्यांना स्वावलंबी बनवणारा थेट प्रात्यक्षिक अभ्यासक्रम:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कच्चा माल व निर्जंतुकीकरण:</strong> सोयाबीन भुसा, गव्हाचा किंवा भाताचा पेंढा निर्जंतुक करण्याचे रासायनिक व वाफेचे शास्त्रीय तंत्र.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>लेयर स्पॉनिंग व बॅग बांधणी:</strong> पीपी बॅगमध्ये स्पॉन भरण्याचे अचूक प्रमाण आणि रबर बँडने पॅक करण्याचे प्रत्यक्ष काम.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कमी खर्चाचे शेड डिझाईन:</strong> बांबू, ताडपत्री व ग्रीन नेट वापरून ₹15,000 ते ₹20,000 मध्ये नैसर्गिक तापमान-नियंत्रित शेड उभारणी.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>काढणी, पॅकिंग व विक्री:</strong> काढणीनंतर 200 ग्रॅमच्या ट्रे किंवा छिद्रित पाऊचमध्ये पॅक करून पुणे मार्केटमध्ये पुरवठा.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: NABARD, Subsidy & Loan Assistance */}
        <section
          id="subsidy-assistance"
          aria-labelledby="subsidy-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <FileCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="subsidy-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. नाबार्ड सबसिडी व शासकीय अनुदान सहाय्य
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कात्रज केंद्रावरून प्रशिक्षण पूर्ण करणाऱ्या शेतकरी व युवकांना योजनांचा लाभ घेण्यासाठी सर्वतोपरी सहाय्य केले जाते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">40-50% MIDH सबसिडी:</strong>
              <span className="text-slate-600 dark:text-slate-300">हायटेक शेड व लॅब उभारणीसाठी कृषी विभागाकडून मिळणारे थेट अनुदान.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">बँक-मान्य DPR:</strong>
              <span className="text-slate-600 dark:text-slate-300">कर्ज मंजुरीसाठी आवश्यक नफा-तोटा व खर्चाचा तपशीलवार प्रकल्प अहवाल.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">व्हेरिफाइड सर्टिफिकेट:</strong>
              <span className="text-slate-600 dark:text-slate-300">जिल्हा उद्योग केंद्र (DIC) व मुद्रा लोन अर्जासाठी वैध प्रमाणपत्र.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="govt-center-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (कात्रज गव्हर्नमेंट मशरूम ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              कात्रज, सिंहगड रोड व पुणे परिसरातील शेतकऱ्यांसाठी आजच नावनोंदणी सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              सरकारी मानकांनुसार प्रत्यक्ष प्रशिक्षण घ्या, स्टार्टर किट मिळवा आणि कमी खर्चात शेतीपूरक व्यवसाय सुरू करा.
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
                हँड्स-ऑन बॅग मेकिंग, स्टार्टर स्पॉन किट, छापील गाईड व व्हॉट्सॲप सपोर्ट.
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
                बटन + ऑयस्टर शेड प्लॅनिंग, नाबार्ड बँक सबसिडी DPR आणि व्हेरिफायड डिजिटल सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20कात्रज/सिंहगड%20रोड%20येथून%20आहे.%20मला%20गव्हर्नमेंट%20मशरूम%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
