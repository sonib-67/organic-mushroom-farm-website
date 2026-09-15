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
  Laptop,
  Landmark,
  FileText,
  Video,
  Layers,
  Award,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farming Training Government Online – Pune Camp | Organic Mushrooms Farm",
  description:
    "Pune Camp भागातील working professionals साठी online mushroom farming training, government scheme माहितीसोबत. घरबसल्या शिका.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-government-online",
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
      "Mushroom Farming Training Government Online – Pune Camp | Organic Mushrooms Farm",
    description:
      "Pune Camp भागातील working professionals साठी online mushroom farming training, government scheme माहितीसोबत. घरबसल्या शिका.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-government-online",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Training Government Online – Pune Camp | Organic Mushrooms Farm",
    description:
      "Pune Camp भागातील working professionals साठी online mushroom farming training, government scheme माहितीसोबत. घरबसल्या शिका.",
  },
};

const faqs = [
  {
    q: "Online training ची fee किती आहे?",
    a: "फक्त ₹299 मध्ये basic online training उपलब्ध आहे, ज्यामध्ये व्हिडिओ लेक्चर्स, मॅन्युअल पीडीएफ आणि व्हॉट्सॲप सपोर्ट समाविष्ट आहे.",
  },
  {
    q: "Online training नंतर doubt असेल तर?",
    a: "WhatsApp आणि email वर थेट तज्ज्ञ trainers कडून शंकांचे निरसन केले जाते. तसेच दर आठवड्याला लाईव्ह Q&A सेशन आयोजित केले जाते.",
  },
  {
    q: "शासकीय सबसिडी आणि नाबार्ड योजनांची माहिती ऑनलाइन मिळते का?",
    a: "होय, MIDH (राष्ट्रीय फलोत्पादन अभियान), नाबार्ड आणि जिल्हा उद्योग केंद्र (DIC) कडून मिळणाऱ्या 40% ते 50% सबसिडीसाठी आवश्यक DPR कसा तयार करावा याचे सखोल मार्गदर्शन दिले जाते.",
  },
  {
    q: "पुणे कॅम्प आणि एमजी रोड भागातील नोकरदारांसाठी ही बॅच कशी सोयीची आहे?",
    a: "सर्व लेक्चर्स रेकॉर्डेड स्वरूपात लाईफटाईम ॲक्सेससह उपलब्ध असल्याने तुम्ही ऑफिसनंतर किंवा वीकेंडला तुमच्या वेळेनुसार घरबसल्या शिकू शकता.",
  },
  {
    q: "ऑनलाइन ट्रेनिंग पूर्ण झाल्यावर सर्टिफिकेट मिळते का?",
    a: "होय, यशस्वीरित्या कोर्स पूर्ण केल्यानंतर डिजिटल वेरिफाइड ट्रेनिंग सर्टिफिकेट दिले जाते, जे बँक लोन व शासकीय अनुदानासाठी उपयुक्त ठरते.",
  },
  {
    q: "ऑनलाइन शिकल्यानंतर स्पॉन आणि साहित्य घरपोच मिळेल का?",
    a: "होय, पुणे कॅम्प, एम.जी. रोड, ढोले पाटील रोड आणि वानवडी परिसरात लॅब-प्रमाणित फर्स्ट-जनरेशन स्पॉन आणि स्टार्टर किट थेट कुरिअरने घरपोच पाठवले जाते.",
  },
];

export default function MushroomFarmingTrainingGovOnlinePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-government-online";

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
        name: "Mushroom Farming Training Government Online – Pune Camp | Organic Mushrooms Farm",
        description:
          "Pune Camp भागातील working professionals साठी online mushroom farming training, government scheme माहितीसोबत. घरबसल्या शिका.",
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
            name: "Training Government Online",
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
      id="training-gov-online-page"
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
            Govt Online Training
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
            <span>Pune Camp, MG Road, Dhole Patil Road & Cantonment</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Pune Camp येथील Working Professionals साठी{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Online Government Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>घरबसल्या शिका ₹299 मध्ये</span>
            <span>•</span>
            <span>शासकीय योजना व नाबार्ड सबसिडी माहिती</span>
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
              alt="Online government mushroom farming training for Pune Camp working professionals"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Self-paced online mushroom cultivation training with government subsidy guidance for Pune Camp professionals.
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
              पुणे कॅम्प परिसरातील व्यापारी व नोकरदारांसाठी ऑनलाइन शासकीय व व्यावसायिक प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Pune Camp हा भाग व्यापार आणि office-going लोकांनी भरलेला आहे, जिथे रोजच्या busy routine मुळे offline classes attend करणं अवघड जातं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>यासाठीच आमचं online training module उपलब्ध आहे, ज्यामध्ये government scheme ची माहिती, cultivation process आणि business model सगळं video lectures आणि live sessions द्वारे शिकवलं जातं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>₹299 च्या affordable fee मध्ये तुम्ही घरबसल्या संपूर्ण training पूर्ण करू शकता, आणि नंतर doubt-clearing साठी WhatsApp support सुद्धा मिळतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कामाच्या व्यग्र वेळेतही स्वतःचा कृषी-व्यवसाय शिकण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            अत्यंत उपयुक्त आहे. यासोबत उच्च गुणवत्तेचे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              शुद्ध स्पॉन बियाणे
            </Link>{" "}
            आणि स्टार्टर किट कुरिअरने पाठवले जाते. संबंधित इतर केंद्रांसाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-by-government"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              पुणे शासकीय प्रशिक्षण
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कोंढवा फार्मिंग ट्रेनिंग
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-offline"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मगरपट्टा ऑफलाइन ट्रेनिंग
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

        {/* Section 1: Online Course Features for Working Professionals */}
        <section
          id="online-features"
          aria-labelledby="features-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Laptop className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="features-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. पुणे कॅम्पमधील नोकरदारांसाठी ऑनलाइन ट्रेनिंगचे फायदे
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            दैनिक प्रवासाचा वेळ वाचवून घरबसल्या स्वतःच्या सोयीने प्रशिक्षण घ्या:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Video className="w-3.5 h-3.5 shrink-0" />
                <span>HD Video Lectures</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                प्रत्येक पायरीचे हाय-डेफिनिशन रेकॉर्डेड व्हिडिओ, जे तुम्ही केव्हाही पुन्हा पाहू शकता.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Landmark className="w-3.5 h-3.5 shrink-0" />
                <span>शासकीय योजना गाईड</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                MIDH व नाबार्डच्या 40-50% सबसिडीसाठी अर्ज कसा करावा याचे संपूर्ण मार्गदर्शन.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>प्रमाणित डिजिटल सर्टिफिकेट</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                बँक लोन व एमएसएमई रजिस्ट्रेशनसाठी उपयुक्त व्हेरिफाइड डिजिटल सर्टिफिकेट.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Government Subsidy & NABARD Project Report Guidance */}
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
              2. शासकीय योजना व नाबार्ड बँक सबसिडी तपशील
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कोर्समध्ये खालील महत्त्वाच्या शासकीय योजनांची माहिती व डीपीआर नमुने दिले जातात:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>MIDH (एकात्मिक फलोत्पादन विकास अभियान):</strong> हायटेक मशरूम युनिट आणि स्पॉन लॅब उभारणीसाठी 40% ते 50% थेट शासकीय अनुदान.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>नाबार्ड रिफायनान्स व बँक लोन:</strong> राष्ट्रीयीकृत बँकांकडून कमी व्याजदरावर शेड बांधकाम व एसी युनिट्ससाठी कर्ज मिळवण्याची प्रक्रिया.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>PMEGP व मुद्रा कर्ज योजना:</strong> सूक्ष्म कृषी प्रक्रिया उद्योगासाठी विनातारण ₹5 लाख ते ₹25 लाखांपर्यंत कर्ज व सबसिडी सहाय्य.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>तपशीलवार प्रकल्प अहवाल (DPR):</strong> बँकांना सादर करण्यासाठी आवश्यक बँक-अ‍ॅप्रुव्हेबल प्रोजेक्ट रिपोर्टचा फॉरमॅट.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Online Step-by-Step Learning Curriculum */}
        <section
          id="learning-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. ऑनलाइन कोर्सेसचा प्रत्यक्ष अभ्यासक्रम
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            थिएरी आणि प्रॅक्टिकल व्हिडिओंचा परिपूर्ण मिलाफ:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मॉड्यूल 1: कल्टीव्हेशन</strong>
              <span className="text-slate-600 dark:text-slate-300">पेंढा निर्जंतुकीकरण, लेयर स्पॉनिंग आणि बॅग्स हँगिंग/रॅकिंग तंत्र.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मॉड्यूल 2: हवामान</strong>
              <span className="text-slate-600 dark:text-slate-300">तापमान (22-26°C), आर्द्रता (80-85%) व व्हेंटिलेशनचे अचूक नियंत्रण.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मॉड्यूल 3: बिझनेस व विक्री</strong>
              <span className="text-slate-600 dark:text-slate-300">स्थानिक हॉटेल्स, सोसायट्या व सुपरमार्केट विक्री आणि व्हॅल्यू ॲडिशन.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="gov-online-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (पुणे कॅम्प ऑनलाइन शासकीय ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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
              पुणे कॅम्प व कॅन्टोन्मेंट परिसरातील नागरिकांसाठी ऑनलाइन बॅच उपलब्ध!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              घरबसल्या स्वतःच्या वेळेनुसार शिका, शासकीय योजनांची माहिती मिळवा आणि आजच यशस्वी मशरूम उत्पादक बना.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  ऑनलाइन बेसिक कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                व्हिडिओ लेक्चर्स, मॅन्युअल गाईड, स्टार्टर स्पॉन सपोर्ट आणि व्हॉट्सॲप हेल्पलाईन.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20पुणे%20कॅम्प/एमजी%20रोड%20येथून%20आहे.%20मला%20ऑनलाइन%20गव्हर्नमेंट%20मशरूम%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
