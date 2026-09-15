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
  Building2,
  Landmark,
  FileCheck,
  Percent,
  Clock,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Government Mushroom Training Center Wakad Pune | Organic Mushrooms Farm",
  description:
    "Wakad Pune मध्ये government-recognized mushroom training. सरकारी योजना आणि subsidy माहितीसोबत complete training. आजच चौकशी करा.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/government-mushroom-training-center",
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
      "Government Mushroom Training Center Wakad Pune | Organic Mushrooms Farm",
    description:
      "Wakad Pune मध्ये government-recognized mushroom training. सरकारी योजना आणि subsidy माहितीसोबत complete training. आजच चौकशी करा.",
    url: "https://organicmushroomsfarm.com/locations/pune/government-mushroom-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Government Mushroom Training Center Wakad Pune | Organic Mushrooms Farm",
    description:
      "Wakad Pune मध्ये government-recognized mushroom training. सरकारी योजना आणि subsidy माहितीसोबत complete training. आजच चौकशी करा.",
  },
};

const faqs = [
  {
    q: "Government training मध्ये काय वेगळं असतं?",
    a: "यामध्ये scheme eligibility, subsidy process, आणि DPR (Detailed Project Report) documentation याबद्दल detailed मार्गदर्शन दिलं जातं.",
  },
  {
    q: "Wakad केंद्रावर weekend batch आहे का?",
    a: "हो, working professionals आणि IT कर्मचाऱ्यांसाठी शनिवार-रविवार weekend आणि evening batches उपलब्ध आहेत.",
  },
  {
    q: "मशरूम फार्मिंगसाठी शासकीय अनुदान (Subsidy) किती मिळते?",
    a: "MIDH (National Horticulture Mission) आणि NHB अंतर्गत व्यावसायिक मशरूम युनिट्ससाठी 40% ते 50% पर्यंत क्रेडिट-लिंक्ड बॅक-एंडेड सबसिडी उपलब्ध असते.",
  },
  {
    q: "ट्रेनिंगनंतर शासकीय प्रमाणपत्राचा बँकेच्या कर्जासाठी उपयोग होतो का?",
    a: "होय, आमच्या केंद्राद्वारे दिला जाणारा कमर्शियल ट्रेनिंग सर्टिफिकेट आणि डीपीआर बँक लोन व सरकारी योजनांच्या मंजुरीसाठी पूर्णपणे ग्राह्य धरला जातो.",
  },
  {
    q: "वाकड आणि पिंपरी-चिंचवड परिसरातील लोकांसाठी केंद्र कसे सोयीचे आहे?",
    a: "वाकड हाय स्ट्रीट, भुमकर चौक, डांगे चौक आणि थेरगाववरून हे केंद्र अवघ्या 5 ते 10 मिनिटांच्या अंतरावर असल्याने नियमित भेट देणे अतिशय सोपे आहे.",
  },
  {
    q: "सुरुवातीला कमी जागेत सरकारी निकषांनुसार मशरूम युनिट उभारता येते का?",
    a: "नक्कीच! अगदी 100 ते 500 चौ. फूट जागेमध्ये शास्त्रोक्त पद्धतीने तापमान व आर्द्रता नियंत्रित करून व्यावसायिक ऑयस्टर किंवा मिल्की मशरूम युनिट सुरू करता येते.",
  },
];

export default function GovernmentMushroomTrainingCenterWakadPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/government-mushroom-training-center";

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
        name: "Government Mushroom Training Center Wakad Pune | Organic Mushrooms Farm",
        description:
          "Wakad Pune मध्ये government-recognized mushroom training. सरकारी योजना आणि subsidy माहितीसोबत complete training. आजच चौकशी करा.",
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
            name: "Government Mushroom Training Center Wakad",
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
      id="government-mushroom-training-wakad-page"
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
            Wakad Government Training Center
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
            <span>Wakad, Dange Chowk, Bhumkar Chowk & Hinjewadi Connectivity</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Wakad, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Government Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>KVK, NABARD आणि कृषी विभाग योजना मार्गदर्शन</span>
            <span>•</span>
            <span>40% ते 50% सबसिडी व DPR डॉक्युमेंटेशन</span>
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
              alt="Government-recognized mushroom training center in Wakad Pune with subsidy support"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Government guidelines structured curriculum, subsidy DPR, and practical training in Wakad, Pune.
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
              वाकडमधील शासकीय योजना आधारित मशरूम प्रशिक्षण केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Wakad हा Pune चा rapidly growing IT आणि residential hub आहे. इथल्या अनेक रहिवाशांना सरकारी योजनांच्या मदतीने mushroom farming सुरू करायची इच्छा असते, पण योग्य मार्गदर्शन मिळत नाही. Organic Mushrooms Farm चं Wakad केंद्र government training guidelines नुसार structured training देतं — ज्यामध्ये KVK, NABARD आणि राज्य कृषी विभागाच्या योजनांची माहिती सुद्धा दिली जाते</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>हे training विशेषतः त्या लोकांसाठी उपयोगी आहे ज्यांना subsidy घेऊन commercial scale वर business सुरू करायचा आहे. Hinjewadi आणि Baner जवळ राहणाऱ्या IT professionals नी सुद्धा weekend batches साठी नोंदणी केली आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शासकीय नियमांनुसार व्यावसायिक शेती शिकण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम शेती प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            निवडा. फार्मसाठी लागणारे उच्च दर्जाचे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              सर्टिफाइड मशरूम स्पॉन
            </Link>{" "}
            थेट ऑर्डर करा. पुण्यातील जवळची इतर केंद्रे पाहण्यासाठी{" "}
            <Link
              href="/locations/pune/mushroom-training-center-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              हिंजवडी ट्रेनिंग सेंटर
            </Link>
            ,{" "}
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
              फी आणि पॅकेज रचना
            </Link>{" "}
            तपासा.
          </p>
        </section>

        {/* Section 1: Government Guidelines & Subsidy Modules */}
        <section
          id="subsidy-guidelines"
          aria-labelledby="subsidy-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Landmark className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="subsidy-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. शासकीय योजना, NABARD आणि सबसिडी मार्गदर्शन
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            व्यावसायिक मशरूम प्रकल्प उभारणीसाठी शासकीय लाभ मिळवण्याचे सविस्तर टप्पे:
          </p>

          <div className="grid sm:grid-cols-4 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Percent className="w-3.5 h-3.5 shrink-0" />
                <span>MIDH/NHM सबसिडी</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                मशरूम स्पॉन लॅब, कंपोस्टिंग युनिट आणि शेड उभारणीवर 40% ते 50% शासकीय अनुदान.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <FileCheck className="w-3.5 h-3.5 shrink-0" />
                <span>बँक डीपीआर (DPR)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                नाबार्ड आणि राष्ट्रीयकृत बँकांच्या निकषांनुसार मंजूर होणारा अचूक प्रोजेक्ट रिपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>KVK मानके</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                कृषी विज्ञान केंद्राच्या वैज्ञानिक मानकांनुसार सबस्ट्रेट स्टेरिलायझेशन व तापमान नियंत्रण.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>सर्टिफिकेट व्हॅलिडिटी</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                मुद्रा लोन, PMEGP आणि ॲग्री-क्लिनिक योजनांसाठी वैध व्यावसायिक प्रमाणपत्र.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Wakad Strategic Connectivity & IT Batch Schedule */}
        <section
          id="wakad-connectivity"
          aria-labelledby="connectivity-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="connectivity-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. वाकड परिसरातील वर्किंग प्रोफेशनल्ससाठी फ्लेक्सिबल बॅचेस
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            वाकड आणि लगतच्या आयटी कॉरिडोअरमधील नागरिकांसाठी वेळेची परिपूर्ण सोय:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>वीकेंड बॅचेस (शनिवार व रविवार):</strong> आठवड्याच्या कामकाजावर कोणताही परिणाम न होता 2 दिवसांत संपूर्ण प्रात्यक्षिक प्रशिक्षण.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>संध्याकाळच्या इव्हनिंग बॅचेस:</strong> ऑफिस संपल्यानंतर थेट सहभागी होता येईल अशा विशेष सायंकालीन प्रात्यक्षिक सेशन्स.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हिंजवडी व बाणेर थेट कनेक्टिव्हिटी:</strong> वाकड-हिंजवडी फ्लायओव्हर, डांगे चौक आणि बाणेर-पाषाण रोडवरून अवघ्या काही मिनिटांत आगमन.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्थानिक मार्केट लिंकेज:</strong> वाकड, पिंपळे सौदागर आणि पिंपरी-चिंचवडमधील गृहनिर्माण सोसायट्यांमध्ये थेट विक्रीची हमी.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Scale Setup Breakdown */}
        <section
          id="commercial-scale"
          aria-labelledby="scale-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="scale-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. व्यावसायिक स्तरावरील मशरूम युनिटची उभारणी व नफा
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कमी भांडवल मॉडेल:</strong>
              <span className="text-slate-600 dark:text-slate-300">सरकारी अनुदानाचा लाभ घेऊन सुरुवातीला ₹25,000 ते ₹50,000 मध्ये मध्यम आकाराचा शेड तयार करता येतो.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">दर्जेदार स्पॉन पुरवठा:</strong>
              <span className="text-slate-600 dark:text-slate-300">लॅब-टेस्टेड ऑयस्टर, मिल्की आणि बटन मशरूम स्पॉन थेट वाकड केंद्रावर वेळेवर पुरवले जाते.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">बायबॅक आणि व्हॅल्यू ॲडिशन:</strong>
              <span className="text-slate-600 dark:text-slate-300">ड्राय मशरूम पावडर, पॅकेजिंग आणि थेट बायबॅक एग्रीमेंटमुळे हमखास विक्रीची खात्री.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="wakad-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (वाकड शासकीय मशरूम प्रशिक्षण केंद्राविषयी वारंवार विचारले जाणारे प्रश्न)
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
              वाकड, हिंजवडी व पिंपरी-चिंचवड परिसरातील नागरिकांसाठी नवीन बॅच सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              सरकारी योजना, नाबार्ड सबसिडी आणि प्रत्यक्ष व्यावसायिक प्रात्यक्षिकांसह आपला मशरूम व्यवसाय सुरू करा.
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
                हँड्स-ऑन बॅग मेकिंग, सबस्ट्रेट स्टेरिलायझेशन, ई-मॅन्युअल व सपोर्ट.
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
                सबसिडी DPR, बँक लोन डॉक्युमेंटेशन, बायबॅक लिंकेज व सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20वाकड/पुणे%20येथून%20आहे.%20मला%20शासकीय%20मशरूम%20प्रशिक्षण%20आणि%20सबसिडीबद्दल%20माहिती%20हवी%20आहे."
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
