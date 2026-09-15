import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Thermometer,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  Phone,
  Droplets,
  TrendingUp,
  Layers,
  Store,
  ArrowLeft,
  Home,
  SunMedium,
  Grid,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Oyster Mushroom Training Near Me – Vishrantwadi Pune | Organic Mushrooms Farm",
  description:
    "Vishrantwadi जवळ oyster mushroom training शोधताय? Practical, nearby आणि affordable training इथे उपलब्ध आहे. White, grey, pink oyster mushroom जाती, vertical racks व कमी जागेतील उत्पादनाचे प्रशिक्षण.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-training-near-me",
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
      "Oyster Mushroom Training Near Me – Vishrantwadi Pune | Organic Mushrooms Farm",
    description:
      "Vishrantwadi जवळ oyster mushroom training शोधताय? Practical, nearby आणि affordable training इथे उपलब्ध आहे. White, grey, pink oyster mushroom जाती, vertical racks व कमी जागेतील उत्पादनाचे प्रशिक्षण.",
    url: "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-training-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Oyster Mushroom Training Near Me – Vishrantwadi Pune | Organic Mushrooms Farm",
    description:
      "Vishrantwadi जवळ oyster mushroom training शोधताय? Practical, nearby आणि affordable training इथे उपलब्ध आहे. White, grey, pink oyster mushroom जाती, vertical racks व कमी जागेतील उत्पादनाचे प्रशिक्षण.",
  },
};

const faqs = [
  {
    q: "वेगवेगळ्या oyster varieties शिकवल्या जातात का?",
    a: "हो, White (फ्लोरिडा ऑयस्टर), Grey (सजोर-काजू), आणि Pink (गुलाबी ऑयस्टर) या तिन्ही प्रमुख जातींची लागवड आणि हंगामनिहाय तापमान व्यवस्थापन सविस्तर शिकवले जाते.",
  },
  {
    q: "कमी जागेत जास्त उत्पादन कसं घ्यायचं?",
    a: "Vertical racks (उभे 4-थरी रॅक्स) आणि नायलॉन दोऱ्यांच्या साहाय्याने बॅग्ज हँगिंग करण्याची पद्धत शिकवली जाते, ज्यामुळे केवळ 10x10 च्या खोलीत 80 ते 100 बॅग्ज मावतात.",
  },
  {
    q: "विश्रांतवाडी केंद्रापर्यंत कसे पोहोचता येते?",
    a: "विश्रांतवाडी चौक, धानोरी, टिंगरे नगर, येरवडा आणि आळंदी रोड येथून आमचे प्रशिक्षण केंद्र अवघ्या 10 ते 15 मिनिटांच्या सोयीस्कर अंतरावर आहे.",
  },
  {
    q: "घरच्या घरी ऑयस्टर मशरूम सुरू करण्यासाठी किती खर्च येतो?",
    a: "केवळ ₹1,500 ते ₹2,500 च्या अल्प भांडवलात 20 ते 30 बॅग्जसह घरच्या घरी, बाल्कनीत किंवा छोट्या खोलीत पहिले उत्पादन सहज सुरू करता येते.",
  },
  {
    q: "विश्रांतवाडी व पूर्व पुण्यात ताज्या ऑयस्टर मशरूमला मागणी आहे का?",
    a: "होय, विश्रांतवाडी, टिंगरे नगर, कल्याणी नगर आणि कोरेगाव पार्कच्या सेंद्रिय दुकानांमध्ये, कॅफे आणि रेसिडेन्शियल सोसायट्यांमध्ये ताज्या ऑयस्टर मशरूमला ₹180 ते ₹240 प्रति किलोचा उत्कृष्ट दर मिळतो.",
  },
  {
    q: "प्रशिक्षणानंतर दर्जेदार स्पॉन (बियाणे) व कच्चा माल कुठे मिळेल?",
    a: "आमच्या लॅब-चाचणी केलेल्या मदर कल्चरमधून शुद्ध ऑयस्टर स्पॉन आणि लागणारा गव्हाचा पेंढा स्थानिक पातळीवर खरेदी करण्याचे थेट संपर्क दिले जातात.",
  },
];

export default function OysterMushroomTrainingNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-training-near-me";

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
        name: "Oyster Mushroom Training Near Me – Vishrantwadi Pune | Organic Mushrooms Farm",
        description:
          "Vishrantwadi जवळ oyster mushroom training शोधताय? Practical, nearby आणि affordable training इथे उपलब्ध आहे. White, grey, pink oyster mushroom जाती, vertical racks व कमी जागेतील उत्पादनाचे प्रशिक्षण.",
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
            name: "Oyster Mushroom Training Near Me",
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
      id="oyster-mushroom-training-near-me-page"
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
            className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px]"
          >
            Oyster Mushroom Training Near Me
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
            <span>Back to Pune Resources</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Vishrantwadi, Tingre Nagar & Dhanori Practical Training Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Vishrantwadi, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Oyster Mushroom Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>White, Grey व Pink ऑयस्टर प्रकार</span>
            <span>•</span>
            <span>कमी जागेत व्हर्टिकल रॅक्स तंत्र</span>
            <span>•</span>
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ऑयस्टर मशरूम मार्गदर्शक
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Oyster mushroom growing bags on vertical racks in Vishrantwadi near Dhanori Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Practical vertical bag cultivation system suitable for Vishrantwadi, Tingre Nagar, and Dhanori growers.
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
              विश्रांतवाडी व उत्तर-पूर्व पुण्यासाठी खात्रीशीर व जवळचे प्रशिक्षण केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Vishrantwadi हा भाग Dhanori आणि Lohegaon जवळचा एक वेगाने वाढणारा residential area आहे</strong>, जिथून oyster mushroom training साठी &apos;near me&apos; शोधणाऱ्या अनेक लोकांना जवळचं आणि विश्वासाचं केंद्र हवं असतं.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या training मध्ये{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              oyster mushroom च्या वेगवेगळ्या जाती (white, grey, pink)
            </Link>{" "}
            कशा वाढवायच्या हे शिकवलं जातं, सोबतच कमी जागेत जास्त उत्पादन कसं घ्यायचं याचे practical tips सुद्धा दिले जातात.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे केंद्र विशेषतः <strong>Vishrantwadi, Tingre Nagar, Yerawada, Alandi Road, Dhanori आणि Lohegaon</strong> मधील इच्छुकांसाठी केवळ 10-15 मिनिटांच्या सोयीस्कर अंतरावर आहे.
          </p>
        </section>

        {/* Section 1: Three Popular Oyster Varieties Covered */}
        <section
          id="oyster-varieties"
          aria-labelledby="varieties-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="varieties-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. प्रशिक्षणात शिकवल्या जाणाऱ्या 3 प्रमुख ऑयस्टर जाती
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्याच्या वेगवेगळ्या ऋतूंमध्ये तापमान बदलत असल्याने, हवामानानुसार योग्य ऑयस्टर जात निवडणे गरजेचे असते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <SunMedium className="w-3.5 h-3.5 shrink-0" />
                <span>White Oyster (फ्लोरिडा)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                22°C ते 28°C तापमानात वाढणारी लोकप्रिय जात. आकर्षक पांढरा रंग आणि सोसायट्यांमध्ये सर्वाधिक मागणी.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Thermometer className="w-3.5 h-3.5 shrink-0" />
                <span>Grey Oyster (सजोर-काजू)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                20°C ते 30°C सहन करणारी अत्यंत कणखर जात. जाड देठ आणि उच्च दर्जाचे कोरडे वजन (Dry Weight).
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Pink Oyster (गुलाबी ऑयस्टर)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                उन्हाळ्यात (26°C ते 32°C) अतिशय वेगाने येणारी जात. आकर्षक गुलाबी रंगामुळे कॅफे आणि शेफ्समध्ये विशेष मागणी.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Small Space & Vertical Racks Yield */}
        <section
          id="vertical-racks-yield"
          aria-labelledby="space-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Grid className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="space-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. कमी जागेत जास्त उत्पादन: व्हर्टिकल रॅक्स व हँगिंग मॉडेल
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शहरातील फ्लॅट्स किंवा छोट्या शेड्समध्ये जमिनीवर बॅग्ज न ठेवता उभ्या जागेचा (Vertical Space) वापर करून तिप्पट उत्पादन कसे घ्यायचे याचे प्रत्यक्ष तंत्र:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>नायलॉन दोऱ्यांचे हँगिंग मॉडेल:</strong> छताला हुक्स लावून एका दोरीवर 4 ते 5 बॅग्ज एकाखाली एक लटकवून मोफत व नैसर्गिक हवा खेळती ठेवणे.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>4-थरी जीआय/बांबू रॅक सिस्टीम:</strong> 10 बाय 10 च्या एका खोलीत 80 ते 100 बॅग्ज सहज बसवणे, ज्यातून दर 45 दिवसांत 35 ते 45 किलो फ्रेश मशरूम मिळतात.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्वस्त आद्रता नियंत्रण (Micro-Misters):</strong> केवळ ₹1,000 च्या टाईमर व मिस्टर नोझल्सच्या साहाय्याने 80-85% आर्द्रता राखणे.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Market Demand in Vishrantwadi, Yerawada & Kalyani Nagar */}
        <section
          id="local-market-demand"
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. स्थानिक मार्केट लिंकेज व सोसायटी विक्री
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            विश्रांतवाडी परिसर येरवडा, कल्याणी नगर आणि कोरेगाव पार्कच्या लगत असल्याने सेंद्रिय आणि ताजी उत्पादने खरेदी करणाऱ्या ग्राहकांची संख्या मोठी आहे:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कॅफे व हॉटेल्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">कल्याणी नगर व येरवडा मधील कॉन्टिनेन्टल रेस्टॉरंट्सना नियमित ऑयस्टर मशरूम सप्लाय.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सोसायटी थेट विक्री:</strong>
              <span className="text-slate-600 dark:text-slate-300">विश्रांतवाडीतील मोठ्या सोसायट्यांमध्ये व्हॉट्सॲपवरून आठवडी थेट ग्राहकोपयोगी पुरवठा.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">ड्राय मशरूम पावडर:</strong>
              <span className="text-slate-600 dark:text-slate-300">अतिरिक्त उत्पादन सुकवून सेंद्रिय स्टोअर्सना पावडर स्वरूपात ₹800-₹1,000/किग्रा विक्री.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="center-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (विश्रांतवाडी ट्रेनिंग सेंटरविषयी प्रश्न)
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
              आजच Vishrantwadi जवळील Oyster Mushroom Training मध्ये सहभागी व्हा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              कमी जागेत आणि कमी भांडवलात स्वतःचा मशरूम व्यवसाय सुरू करा. ऑयस्टर मशरूमच्या विविध जाती, व्हर्टिकल रॅक्स आणि स्थानिक विक्रीचे तंत्र प्रत्यक्ष शिका.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  मूलभूत ऑयस्टर प्रशिक्षण (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                घरी बसून ऑयस्टर मशरूम लागवड, व्हिडिओ ट्यूटोरियल्स, ई-बुक आणि सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  व्यावसायिक कमर्शियल कोर्स (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                कमर्शियल व्हर्टिकल फार्मिंग, व्हॅल्यू ॲडिशन, ड्रायिंग व थेट मार्केट लिंकेज.
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
              href="/locations/pune/oyster-mushroom-class"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Dhanori क्लास माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20विश्रांतवाडी%20पुणे%20येथील%20ऑयस्टर%20मशरूम%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp सल्ला मिळवा</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
