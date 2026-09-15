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
  Sprout,
  FileCheck,
  TrendingUp,
  Layers,
  Clock,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farming Training by Government – Wagholi Pune | Organic Mushrooms Farm",
  description:
    "Wagholi भागातील शेतकऱ्यांसाठी government scheme आधारित mushroom farming training. Subsidy आणि yojana माहितीसोबत.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-by-government",
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
      "Mushroom Farming Training by Government – Wagholi Pune | Organic Mushrooms Farm",
    description:
      "Wagholi भागातील शेतकऱ्यांसाठी government scheme आधारित mushroom farming training. Subsidy आणि yojana माहितीसोबत.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-by-government",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Training by Government – Wagholi Pune | Organic Mushrooms Farm",
    description:
      "Wagholi भागातील शेतकऱ्यांसाठी government scheme आधारित mushroom farming training. Subsidy आणि yojana माहितीसोबत.",
  },
};

const faqs = [
  {
    q: "शेतकऱ्यांसाठी वेगळी batch आहे का?",
    a: "हो, वाघोली व परिसरातील शेतकरी समुदायासाठी विशेष weekday morning batch आणि लवचिक प्रॅक्टिकल वेळापत्रक उपलब्ध आहे.",
  },
  {
    q: "Subsidy साठी मदत मिळते का?",
    a: "Training मध्ये application process, DPR बनवणे आणि कागदपत्रांची पूर्तता सविस्तर समजावली जाते, ज्यामुळे शासकीय कृषी विभागाकडून अनुदानाची मंजुरी घेणे सोपे होते.",
  },
  {
    q: "वाघोली परिसरातील शेतकऱ्यांना पारंपारिक पिकांसोबत याचा कसा फायदा होतो?",
    a: "सोयाबीन, गहू आणि उसाच्या शेतीतून निघणारा पेंढा/भुसा मशरूमसाठी मोफत मिळतो, ज्यामुळे कच्च्या मालाचा खर्च शून्य होतो आणि दरमहा नियमित रोख नफा मिळतो.",
  },
  {
    q: "नाबार्ड व राष्ट्रीय फलोत्पादन अभियान (MIDH) कडून किती अनुदान मिळते?",
    a: "मशरूम युनिट उभारणी, स्पॉन लॅब व कंपोस्ट युनिटसाठी सामान्य प्रवर्गासाठी 40% आणि महिला व अनुसूचित जाती/जमाती शेतकऱ्यांसाठी 50% पर्यंत भांडवली सबसिडी दिली जाते.",
  },
  {
    q: "प्रशिक्षणानंतर सरकारी बँक कर्जासाठी सर्टिफिकेट ग्राह्य धरले जाते का?",
    a: "होय, कोर्स पूर्ण झाल्यावर मिळणारे व्हेरिफाइड डिजिटल सर्टिफिकेट राष्ट्रीयीकृत बँका, डीआयसी (DIC) आणि मुद्रा लोनसाठी अधिकृत मानले जाते.",
  },
  {
    q: "वाघोली, लोणीकंद आणि शिक्रापूर भागात स्पॉन व कच्चा माल कसा मिळेल?",
    a: "आमच्या लॅबमधून फर्स्ट-जनरेशन शुद्ध स्पॉन बियाणे, पीपी बॅग्ज आणि तांत्रिक किट थेट वाघोली केंद्रावरून किंवा कुरिअरद्वारे उपलब्ध करून दिले जाते.",
  },
];

export default function MushroomFarmingTrainingByGovWagholiPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-by-government";

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
        name: "Mushroom Farming Training by Government – Wagholi Pune | Organic Mushrooms Farm",
        description:
          "Wagholi भागातील शेतकऱ्यांसाठी government scheme आधारित mushroom farming training. Subsidy आणि yojana माहितीसोबत.",
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
            name: "Training by Government",
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
      id="training-by-govt-wagholi-page"
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
            Govt Training Wagholi
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
            <span>Wagholi, Lonikand, Bakori Road & Pune-Nagar Highway</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Wagholi, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Government Scheme आधारित Mushroom Farming Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>शेतकऱ्यांसाठी विशेष सबसिडी व योजना मार्गदर्शन</span>
            <span>•</span>
            <span>अतिरिक्त उत्पन्नाचा खात्रीशीर मार्ग</span>
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
              alt="Government scheme based mushroom farming training in Wagholi Pune for farmers"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Subsidy-aligned practical mushroom training for farmers and agri-entrepreneurs in Wagholi and Pune-Nagar Road.
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
              वाघोली आणि पुणे-नगर रोड परिसरातील शेतकऱ्यांसाठी सरकारी योजना संलग्न प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Wagholi आणि आसपासचा परिसर अजूनही बऱ्यापैकी farming-oriented आहे, आणि इथल्या शेतकऱ्यांना सरकारी yojana चा फायदा घेऊन mushroom farming सुरू करायची इच्छा असते</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>आमचं training या government schemes नुसार align केलेलं आहे — म्हणजे तुम्हाला training सोबतच कोणत्या subsidy साठी apply करायचं, कागदपत्रं कोणती लागतात, हे सुद्धा समजेल</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>पारंपरिक शेतीसोबत mushroom farming एक additional income source म्हणून कसं वापरता येईल, यावर विशेष भर दिला जातो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमी जागेत शाश्वत शेतीपूरक व्यवसाय सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              व्यावसायिक प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            उपयुक्त आहे. यासोबत लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              लॅब-सर्टिफाइड स्पॉन बियाणे
            </Link>{" "}
            आणि आवश्यक साहित्य उपलब्ध करून दिले जाते. शेजारील भागांसाठी{" "}
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
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कोंढवा फार्मिंग ट्रेनिंग
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी तपशील
            </Link>{" "}
            तपासू शकता.
          </p>
        </section>

        {/* Section 1: Traditional Farming Integration & Waste-to-Wealth */}
        <section
          id="farming-integration"
          aria-labelledby="farming-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sprout className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="farming-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. पारंपारिक पिकांसोबत अतिरिक्त कमाई (Additional Income Source)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            वाघोली व लोणीकंद परिसरातील शेतकऱ्यांसाठी शेतातील अवशेषांपासून भरघोस नफा मिळवण्याचे तंत्र:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>शून्य खर्चात पेंढा वापर</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                सोयाबीन भुसा, गव्हाचा पेंढा किंवा ज्वारीचे काड वापरून लागवड खर्चात 60% बचत होते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>रोज फक्त 30 मिनिटे वेळ</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पारंपारिक शेतीचे काम सांभाळून घरात किंवा शेडमध्ये केवळ पाणी फवारणी आणि हवेचे नियंत्रण.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>दरमहा नियमित रोख कमाई</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पहिल्या 25-28 दिवसांनंतर दर आठवड्याला ताजा माल तोडून थेट स्थानिक बाजारात रोख विक्री.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Government Subsidy Schemes & Document Preparation */}
        <section
          id="government-subsidies"
          aria-labelledby="subsidy-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Landmark className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="subsidy-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. शासकीय योजना व सबसिडी अर्ज प्रक्रिया
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            ट्रेनिंगमध्ये शेतकऱ्यांना योजनांचा लाभ घेण्यासाठी खालील बाबींचे सखोल मार्गदर्शन केले जाते:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>MIDH (एकात्मिक फलोत्पादन अभियान):</strong> मशरूम उत्पादक शेड, निर्जंतुकीकरण कक्ष आणि स्पॉन लॅबसाठी 40% ते 50% थेट अनुदान.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>नाबार्ड व कृषी पतसंस्था कर्ज:</strong> कमी व्याजदरात बँक कर्ज मिळवण्यासाठी लागणारा अचूक DPR (Detailed Project Report).
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>आवश्यक कागदपत्रे:</strong> 7/12 उतारा, 8-अ, आधार कार्ड, बँक पासबुक, शेतीचा नकाशा आणि प्रशिक्षण प्रमाणपत्र.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>महाडीबीटी (MahaDBT) पोर्टल अर्ज:</strong> कृषी विभागाच्या पोर्टलवर ऑनलाईन अर्ज सादर करण्याची थेट माहिती.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Morning Practical Batches for Farmers */}
        <section
          id="practical-batches"
          aria-labelledby="batches-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <FileCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="batches-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. शेतकऱ्यांसाठी विशेष मॉर्निंग प्रॅक्टिकल बॅचेस
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शेतकऱ्यांचे सकाळचे काम लक्षात घेऊन सोयीस्कर वेळापत्रक:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मॉर्निंग प्रॅक्टिकल बॅच:</strong>
              <span className="text-slate-600 dark:text-slate-300">सकाळी 8:30 ते 11:00 या वेळेत हँड्स-ऑन बॅग मेकिंग व निर्जंतुकीकरण सराव.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कमी खर्चाचे शेड मार्गदर्शन:</strong>
              <span className="text-slate-600 dark:text-slate-300">स्थानिक बांबू व शेडनेट वापरून कमी खर्चात शेड उभारण्याचे तंत्र.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">स्थानिक बाजारपेठ जोडणी:</strong>
              <span className="text-slate-600 dark:text-slate-300">वाघोली, खराडी, हडपसर व लोणीकंद येथील भाजी मंडई व हॉटेल्सना थेट पुरवठा.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="wagholi-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (वाघोली गव्हर्नमेंट स्कीम मशरूम ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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
              वाघोली व पुणे-नगर महामार्ग परिसरातील शेतकरी बांधवांसाठी नोंदणी सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              सरकारी योजनांचा लाभ घ्या, शेतातील पेंढ्यापासून दरमहा नियमित रोख नफा कमवा आणि आधुनिक कृषी-उद्योजक बना.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  शेतकरी बेसिक कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                पेंढा निर्जंतुकीकरण, हँड्स-ऑन बॅग मेकिंग, स्टार्टर स्पॉन आणि व्हॉट्सॲप हेल्पलाईन.
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
                MIDH व नाबार्ड सबसिडी DPR, बँक लोन प्लॅनिंग, आणि व्हेरिफायड डिजिटल सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20वाघोली/पुणे-नगर%20रोड%20येथून%20आहे.%20मला%20गव्हर्नमेंट%20स्कीम%20मशरूम%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
