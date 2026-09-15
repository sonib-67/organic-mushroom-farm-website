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
  Wind,
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
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Oyster Mushroom Class – Dhanori Pune | Organic Mushrooms Farm",
  description:
    "Dhanori मधील beginners साठी छोटी, सोपी आणि affordable oyster mushroom class. घरच्या घरी कमी जागेत ऑयस्टर मशरूम लागवड, बियाणे स्पॉन व फ्रूटिंग बॅग्सचे प्रत्यक्ष प्रात्यक्षिक.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-class",
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
      "Oyster Mushroom Class – Dhanori Pune | Organic Mushrooms Farm",
    description:
      "Dhanori मधील beginners साठी छोटी, सोपी आणि affordable oyster mushroom class. घरच्या घरी कमी जागेत ऑयस्टर मशरूम लागवड, बियाणे स्पॉन व फ्रूटिंग बॅग्सचे प्रत्यक्ष प्रात्यक्षिक.",
    url: "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-class",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Oyster Mushroom Class – Dhanori Pune | Organic Mushrooms Farm",
    description:
      "Dhanori मधील beginners साठी छोटी, सोपी आणि affordable oyster mushroom class. घरच्या घरी कमी जागेत ऑयस्टर मशरूम लागवड, बियाणे स्पॉन व फ्रूटिंग बॅग्सचे प्रत्यक्ष प्रात्यक्षिक.",
  },
};

const faqs = [
  {
    q: "ही class नवशिक्यांसाठी (beginners) योग्य आहे का?",
    a: "हो, ही क्लास खास beginners आणि नोकरदार लोकांसाठीच डिझाईन केलेली आहे. कोणतीही शेतीची पार्श्वभूमी नसतानाही 2 तासांच्या प्रॅक्टिकल सेशनमध्ये संपूर्ण लागवड पद्धत सहज समजते.",
  },
  {
    q: "Class नंतर लगेच घरी सुरुवात करता येते का?",
    a: "हो, क्लासनंतर लगेचच तुम्ही स्वतःच्या घरी, बाल्कनीत किंवा छोट्या रूममध्ये पहिलं मशरूम बॅच सुरू करू शकता. लागणारे स्पॉन आणि ग्रोइंग बॅग्ज क्लासमध्येच दिले जातात.",
  },
  {
    q: "Dhanori मध्ये पेंढा आणि मशरूम बॅग्ज सहज मिळतील का?",
    a: "होय, धानोरी, विश्रांतवाडी आणि लोहगाव पट्ट्यात लागणारा गव्हाचा किंवा भाताचा पेंढा आणि पीपी बॅग्ज स्थानिक पातळीवर कुठे उपलब्ध होतात याचे संपर्क पत्ते दिले जातात.",
  },
  {
    q: "10x10 फुटांच्या खोलीत किंवा बाल्कनीत किती बॅग्ज बसतात?",
    a: "व्हर्टिकल हँगिंग किंवा 4-थरी रॅक सिस्टीम वापरल्यास 10x10 च्या एका छोट्या रूममध्ये 80 ते 100 बॅग्ज सहज मावतात, ज्यातून दरमहा 30 ते 45 किलो ऑयस्टर मशरूम मिळू शकतात.",
  },
  {
    q: "वेगवेगळ्या प्रकारच्या ऑयस्टर जाती (White, Grey, Pink) शिकवल्या जातात का?",
    a: "होय, फ्लोरिडा व्हाईट ऑयस्टर, ग्रे ऑयस्टर (Hypsizygus/Sajor-caju), आणि गुलाबी (Pink) ऑयस्टर या तिन्ही जातींची लागवड आणि तापमान नियंत्रण शिकवले जाते.",
  },
  {
    q: "तयार झालेले ऑयस्टर मशरूम स्थानिक मार्केट किंवा सोसायट्यांमध्ये कसे विकायचे?",
    a: "धानोरी, टिंगरे नगर आणि विमाननगर मधील हाउसिंग सोसायट्यांमध्ये व्हॉट्सॲप ग्रूप्सद्वारे ताज्या 200 ग्रॅम पॅकेट्सची थेट विक्री कशी करावी याचे सोपे मार्केटिंग तंत्र शिकवले जाते.",
  },
];

export default function OysterMushroomClassPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-class";

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
        name: "Oyster Mushroom Class – Dhanori Pune | Organic Mushrooms Farm",
        description:
          "Dhanori मधील beginners साठी छोटी, सोपी आणि affordable oyster mushroom class. घरच्या घरी कमी जागेत ऑयस्टर मशरूम लागवड, बियाणे स्पॉन व फ्रूटिंग बॅग्सचे प्रत्यक्ष प्रात्यक्षिक.",
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
            name: "Oyster Mushroom Class",
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
      id="oyster-mushroom-class-page"
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
            Oyster Mushroom Class
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
            <span>Dhanori, Tingre Nagar & Vishrantwadi Urban Cultivation Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Dhanori, Pune मधील{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Oyster Mushroom Class
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>सोपी, सुलभ आणि किफायतशीर क्लास</span>
            <span>•</span>
            <span>घरी बसून महिला व नवशिक्यांसाठी उत्तम</span>
            <span>•</span>
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ऑयस्टर मशरूम गाईड
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Fresh oyster mushroom cultivation bag and indoor growing session in Dhanori Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Home-scale oyster mushroom cultivation bags suitable for flats and apartments in Dhanori and Tingre Nagar, Pune.
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
              धानोरीतील नवशिक्यांसाठी छोटी, सोपी आणि परवडणारी क्लास
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Dhanori हा तुलनेने नवीन वाढणारा residential भाग आहे</strong>, जिथे अनेक तरुण कुटुंबं, गृहिणी आणि आयटी प्रोफेशनल्स नव्याने स्थायिक झाली आहेत.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            यांच्यासाठी आमची{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              oyster mushroom class
            </Link>{" "}
            एक सोपी आणि खात्रीशीर सुरुवात आहे — <strong>जास्त technical न जाता, सरळ आणि practical पद्धतीने</strong> oyster mushroom कसा वाढवायचा हे शिकवलं जातं.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            एका छोट्या 2 ते 3 तासांच्या session मध्येच तुम्ही घरी स्वतःचं पहिलं batch सुरू करण्याइतपत आत्मविश्वास आणि संपूर्ण ज्ञान मिळवू शकता.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे केंद्र विशेषतः <strong>Dhanori, Tingre Nagar, Vishrantwadi, Porwal Road, Lohegaon आणि Viman Nagar</strong> मधील नागरिकांसाठी अत्यंत जवळचे आणि सोयीस्कर आहे.
          </p>
        </section>

        {/* Section 1: Why Oyster Mushroom is Best for Home & Apartments */}
        <section
          id="why-oyster-mushroom"
          aria-labelledby="why-oyster-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Home className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="why-oyster-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. घरच्या घरी ऑयस्टर मशरूम का निवडावे? (Key Benefits)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            बटन मशरूमच्या तुलनेत ऑयस्टर मशरूम घरगुती स्तरावर पिकवण्यासाठी अत्यंत सोपा आणि किफायतशीर मानला जातो:
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>कंपोस्टची गरज नाही (No Composting)</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                केवळ उकळत्या पाण्यात किंवा चुन्याच्या पाण्यात निर्जंतुक केलेल्या गव्हाच्या पेंढ्यावर थेट लागवड करता येते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>सामान्य खोली तापमानात वाढ</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                पुण्यातील 22°C ते 30°C तापमानात महागड्या एसीशिवाय हे मशरूम वेगाने वाढते आणि 20 ते 25 दिवसांत तयार होते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>कमीत कमी जागा व शून्य दुर्गंधी</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                फ्लॅटच्या मोकळ्या बाल्कनीत किंवा कोपऱ्यात दोऱ्यांच्या साहाय्याने बॅग्ज लटकवून 100% दुर्गंधीमुक्त शेती करता येते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>पौष्टिक मूल्य व उच्च दर</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                प्रथिनांचा समृद्ध साठा आणि सोसायट्यांमध्ये ₹180 ते ₹220 प्रति किलो दराने थेट विक्रीची संधी.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: What You Will Learn in This Practical Class */}
        <section
          id="class-syllabus"
          aria-labelledby="syllabus-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="syllabus-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. या छोट्या प्रॅक्टिकल क्लासमध्ये काय शिकवले जाते?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            नवशिक्यांसाठी क्लासमध्ये स्टेप-बाय-स्टेप प्रात्यक्षिक अनुभव दिला जातो:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>पेंढा निर्जंतुकीकरण (Straw Sterilization):</strong> गरम पाण्याची पद्धत किंवा केमिकल ट्रीटमेंट करून पेंढा स्वच्छ व निर्जंतुक कसा करावा.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्पॉनिंग व बॅग भरणे:</strong>{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  दर्जेदार स्पॉन (बियाणे)
                </Link>{" "}
                थर पद्धतीने (Layer Spawning) पॉलिथिन बॅगमध्ये भरून छिद्रे पाडण्याचे प्रात्यक्षिक.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Thermometer className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मायसेलियम रन व फ्रूटिंग केअर:</strong> 15-18 दिवस अंधाऱ्या जागेत बॅग्ज ठेवणे आणि त्यानंतर पाणी फवारून ताजे मशरूम तोडणे.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Store className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>ड्रायिंग व व्हॅल्यू ॲडिशन:</strong> न विकलेले मशरूम उन्हात वाळवून ड्राय ऑयस्टर मशरूम आणि मशरूम पावडर तयार करून वर्षभर टिकवणे.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Local Demand in Dhanori & Pune North-East */}
        <section
          id="dhanori-demand"
          aria-labelledby="demand-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="demand-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. धानोरी, पोरवाल रोड व विमाननगर सोसायट्यांमध्ये थेट विक्री
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            धानोरी आणि पोरवाल रोड परिसरात 150 हून अधिक मोठ्या टाऊनशिप्स आणि गृहनिर्माण सोसायट्या आहेत. इथले रहिवासी केमिकल-मुक्त आणि ऑरगॅनिक अन्नाला प्राधान्य देतात:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सोसायटी व्हॉट्सॲप विक्री:</strong>
              <span className="text-slate-600 dark:text-slate-300">आपल्याच सोसायटीत फ्रेश हार्वेस्टिंगचे फोटो टाकून दर आठवड्याला 10-15 किलो थेट विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सेंद्रिय भाजीपाला स्टॉल्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">विश्रांतवाडी व विमाननगर येथील आठवडे सेंद्रिय बाजारात प्रीमियम दरात विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मशरूम पावडर व लोणचे:</strong>
              <span className="text-slate-600 dark:text-slate-300">अतिरिक्त उत्पादनाचे व्हॅल्यू ॲडेड प्रॉडक्ट्स बनवून वर्षभर नफा कमावणे.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="class-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (धानोरी क्लासविषयी वारंवार विचारले जाणारे प्रश्न)
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
              आजच Dhanori मधील Oyster Mushroom Class मध्ये नाव नोंदवा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              कोणत्याही मोठ्या गुंतवणुकीशिवाय घरच्या घरी स्वतःचे ताजे, विषमुक्त ऑयस्टर मशरूम पिकवा. एका साध्या आणि सोप्या सेशनमध्ये स्वतःचे पहिले बॅच सुरू करण्याचा आत्मविश्वास मिळवा.
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
                नवशिक्यांसाठी सोपी लागवड पद्धत, व्हिडिओ ट्यूटोरियल्स, ई-बुक आणि व्हॉट्सॲप सपोर्ट.
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
                व्यावसायिक शेड प्लॅनिंग, ड्रायिंग युनिट, ब्रँडिंग, पॅकेजिंग आणि थेट मार्केट लिंकेज.
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
              href="/locations/pune/button-mushroom-training-center"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Lohegaon सेंटर माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20धानोरी%20पुणे%20येथील%20ऑयस्टर%20मशरूम%20क्लासबाबत%20माहिती%20हवी%20आहे."
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
