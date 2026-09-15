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
  Compass,
  Clock,
  Sprout,
  ShieldCheck,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Cultivation Training Near Me – Bavdhan Pune | Organic Mushrooms Farm",
  description:
    "Bavdhan जवळ mushroom cultivation training शोधताय? Organic Mushrooms Farm चं nearby केंद्र practical sessions सोबत उपलब्ध आहे. एका दिवसात spawn ते harvesting सराव.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-near-me",
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
      "Mushroom Cultivation Training Near Me – Bavdhan Pune | Organic Mushrooms Farm",
    description:
      "Bavdhan जवळ mushroom cultivation training शोधताय? Organic Mushrooms Farm चं nearby केंद्र practical sessions सोबत उपलब्ध आहे. एका दिवसात spawn ते harvesting सराव.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation Training Near Me – Bavdhan Pune | Organic Mushrooms Farm",
    description:
      "Bavdhan जवळ mushroom cultivation training शोधताय? Organic Mushrooms Farm चं nearby केंद्र practical sessions सोबत उपलब्ध आहे. एका दिवसात spawn ते harvesting सराव.",
  },
};

const faqs = [
  {
    q: "Bavdhan मधून center किती जवळ आहे?",
    a: "Bavdhan पासून training location साधारण 20-25 मिनिटांच्या अंतरावर आहे. चांदणी चौक किंवा मुंबई-बंगलोर हायवेने वारजे/कोथरूड जवळच्या केंद्रावर अतिशय जलद पोहोचता येते.",
  },
  {
    q: "एकाच दिवसात cultivation समजेल का?",
    a: "Basic cultivation process एका दिवसाच्या intensive session मध्ये पूर्णपणे समजावली जाते. यामध्ये प्रत्यक्ष हँड्स-ऑन पेंढा निर्जंतुकीकरण, स्पॉनिंग आणि बॅग मेकिंग सराव समाविष्ट असतो.",
  },
  {
    q: "Bhugaon आणि Pirangut भागातील शेतकऱ्यांना याचा कसा फायदा होतो?",
    a: "भुगाव, पिरंगुट, पौड आणि मुळशी पट्ट्यातील शेतकऱ्यांकडे शेतजमीन आणि पेंढा मुबलक उपलब्ध असतो. ते कमी खर्चात शेड उभारून व्यावसायिक बटन व ऑयस्टर शेती सुरू करू शकतात.",
  },
  {
    q: "ट्रेनिंगनंतर बियाणे (Spawn) आणि इतर साहित्य बावधनमध्ये घरपोच मिळेल का?",
    a: "होय, नोंदणीनंतर किंवा शेती सुरू करताना उच्च दर्जाचे फर्स्ट-जनरेशन स्पॉन, पीपी बॅग्ज, हायग्रोमीटर आणि फॉर्मलिन/बाव्हिस्टिन बावधन, भुगाव व पिरंगुट परिसरात कुरिअरने घरपोच उपलब्ध करून दिले जाते.",
  },
  {
    q: "आयटी व्यावसायिक किंवा नोकरदारांसाठी वीकेंड बॅचेस असतात का?",
    a: "होय, बावधन व हिंजवडीतील नोकरदारांसाठी दर शनिवार आणि रविवारी विशेष हँड्स-ऑन वीकेंड बॅचेस ठेवल्या जातात.",
  },
  {
    q: "प्रशिक्षणानंतर शेती सुरू करताना तांत्रिक मार्गदर्शन मिळते का?",
    a: "नक्कीच! प्रशिक्षणार्थींना लाईफटाईम व्हॉट्सॲप ग्रुप सपोर्ट मिळतो, जिथे तुम्ही तुमच्या शेडचे किंवा बॅगचे फोटो पाठवून तज्ज्ञांकडून थेट सल्ला मिळवू शकता.",
  },
];

export default function MushroomCultivationTrainingNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-near-me";

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
        name: "Mushroom Cultivation Training Near Me – Bavdhan Pune | Organic Mushrooms Farm",
        description:
          "Bavdhan जवळ mushroom cultivation training शोधताय? Organic Mushrooms Farm चं nearby केंद्र practical sessions सोबत उपलब्ध आहे. एका दिवसात spawn ते harvesting सराव.",
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
            name: "Training Near Me",
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
      id="cultivation-training-near-me-page"
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
            Training Near Me
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
            <span>Bavdhan, Bhugaon, Pirangut & Chandani Chowk Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Bavdhan, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Cultivation Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>अवघ्या 20-25 मिनिटांवर जवळचे केंद्र</span>
            <span>•</span>
            <span>एका दिवसात प्रॅक्टिकल समजून घ्या</span>
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
              alt="Mushroom cultivation practical training and hands-on session near Bavdhan Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Hands-on practical mushroom cultivation session accessible within 20-25 minutes from Bavdhan, Pune.
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
              बावधन, भुगाव व पिरंगुट जवळील रहिवाशांसाठी जवळचे आणि विश्वासाचे प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Bavdhan हा भाग गेल्या काही वर्षांत वेगाने वाढणारा residential area बनला आहे</strong>, आणि इथल्या नवीन रहिवाशांना cultivation बद्दल practical, जवळचं training हवं असतं. <strong>&apos;Near me&apos; शोधणाऱ्या अशा लोकांसाठी आमचं केंद्र सोयीस्कर आहे</strong> — इथे <strong>spawn पासून harvesting पर्यंतची संपूर्ण cultivation process प्रत्यक्ष करून दाखवली जाते</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Bavdhan, Bhugaon आणि Pirangut जवळच्या रहिवाशांसाठी हे जवळचं आणि भरवशाचं ठिकाण आहे</strong>, जिथे <strong>एका दिवसातच basic cultivation समजून घेता येतं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमी जागेत आणि कमी भांडवलात स्वतःचा घरगुती किंवा व्यावसायिक शेती प्रकल्प सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण मॉड्यूल्स (₹299 पासून)
            </Link>{" "}
            उपयुक्त ठरतात. तसेच शेजारच्या केंद्रांच्या माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-centre-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              वारजे ट्रेनिंग सेंटर
            </Link>{" "}
            आणि घरबसल्या शिकण्यासाठी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-classes-online"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन क्लासेस
            </Link>{" "}
            सुद्धा उपलब्ध आहेत.
          </p>
        </section>

        {/* Section 1: Strategic Location & Connectivity for Bavdhan Cluster */}
        <section
          id="location-connectivity"
          aria-labelledby="connectivity-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="connectivity-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. बावधन, चांदणी चौक व पिरंगुट पट्ट्यासाठी प्रवासाची सुलभता (20-25 Mins)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्याच्या पश्चिम पट्ट्यातील रहिवाशांसाठी जलद व सुटसुटीत रस्ता कनेक्टिव्हिटी:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Bavdhan & Chandani Chowk</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                चांदणी चौक फ्लायओव्हरवरून वारजे/कोथरूड मार्गे अवघ्या 20 ते 25 मिनिटांच्या सरळ रस्त्यावर.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Compass className="w-3.5 h-3.5 shrink-0" />
                <span>Bhugaon & Manas Lake</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                भुगाव आणि मानस लेक परिसरातील शेतकरी व व्यावसायिकांसाठी अत्यंत जवळचे व सोयीचे ठिकाण.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Pirangut & Paud Belt</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पिरंगुट औद्योगिक वसाहत आणि पौड परिसरातील कृषी उद्योजकांसाठी थेट हँड्स-ऑन बॅचेस.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Spawn-to-Harvest Practical in 1 Day */}
        <section
          id="practical-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sprout className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. स्पॉन ते पहिली काढणी: एका दिवसात संपूर्ण प्रात्यक्षिक प्रक्रिया
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            वेळ वाया न घालवता एकाच दिवसाच्या प्रॅक्टिकल सेशनमध्ये मास्टर व्हा:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>पेंढा निर्जंतुकीकरण (Substrate Sterilization):</strong> गरम पाण्यात उकळणे किंवा रासायनिक निर्जंतुकीकरण करून पेंढ्यातील बॅक्टेरिया नष्ट करण्याचे सोपे तंत्र.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>बियाणे पेरणे (Layer Spawning & Bag Making):</strong> पीपी बॅगमध्ये 3 ते 4 थरांमध्ये प्रमाणित{" "}
                <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  स्पॉन बियाणे
                </Link>{" "}
                भरून मायसेलियम वाढीसाठी योग्य छिद्रे पाडणे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मायसेलियम रन व वातावरण नियंत्रण:</strong> 15 ते 18 दिवस अंधाऱ्या खोलीत 22°C ते 26°C तापमान आणि 80-85% आर्द्रता राखणे.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>पिनहेडिंग ते काढणी (Harvesting & Packing):</strong> बॅग फाडणे, पाण्याचे हलके फवारे देणे, 4 ते 5 दिवसांत गुच्छ काढणे आणि योग्य पॅकिंग करणे.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Viability, Starter Kits & Local Market */}
        <section
          id="market-linkage"
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. स्टार्टर किट, स्थानिक विक्री आणि नफ्याचे गणित
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            बावधन आणि पश्चिम उपनगरांतील ग्राहकांपर्यंत थेट पोहोचण्याचे व्यावसायिक तंत्र:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">घरपोच स्टार्टर किट:</strong>
              <span className="text-slate-600 dark:text-slate-300">बावधन, भुगाव व पिरंगुटमध्ये दर्जेदार स्पॉन, बॅग्ज आणि छापील SOP थेट कुरिअरने उपलब्ध.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कमी खर्चात जास्त नफा:</strong>
              <span className="text-slate-600 dark:text-slate-300">₹45 ते ₹50/किग्रॅ उत्पादन खर्च आणि बावधन सोसायट्यांमध्ये ₹200 ते ₹280/किग्रॅ थेट विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सोसायटी डायरेक्ट सेलिंग:</strong>
              <span className="text-slate-600 dark:text-slate-300">बावधनमधील उच्चभ्रू अपार्टमेंट्स आणि ऑर्गेनिक स्टोअर्सना फ्रेश ऑयस्टर सप्लाय.</span>
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
              Frequently Asked Questions (बावधन मशरूम कल्टिव्हेशन ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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
              बावधन, पुणे जवळील प्रॅक्टिकल बॅचमध्ये आजच सहभागी व्हा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              एकाच दिवसात संपूर्ण प्रक्रिया प्रत्यक्ष शिका, स्टार्टर किट मिळवा आणि स्वतःच्या घरी मशरूम उत्पादन सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  प्रॅक्टिकल बेसिक बॅच (₹299)
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20बावधन/पुणे%20येथून%20आहे.%20मला%20बावधन%20जवळील%20मशरूम%20कल्टिव्हेशन%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
