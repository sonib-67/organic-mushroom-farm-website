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
  Navigation,
  Building,
  Layers,
  ThermometerSnowflake,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Cultivation Training Centre Near Me – Warje Pune | Organic Mushrooms Farm",
  description:
    "Warje, NH4 जवळ राहणाऱ्यांसाठी nearby mushroom cultivation training centre. Easy access, direct racks & ventilation farm setup आणि practical training.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-centre-near-me",
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
      "Mushroom Cultivation Training Centre Near Me – Warje Pune | Organic Mushrooms Farm",
    description:
      "Warje, NH4 जवळ राहणाऱ्यांसाठी nearby mushroom cultivation training centre. Easy access, direct racks & ventilation farm setup आणि practical training.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-centre-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation Training Centre Near Me – Warje Pune | Organic Mushrooms Farm",
    description:
      "Warje, NH4 जवळ राहणाऱ्यांसाठी nearby mushroom cultivation training centre. Easy access, direct racks & ventilation farm setup आणि practical training.",
  },
};

const faqs = [
  {
    q: "Highway जवळ असल्याचा फायदा काय?",
    a: "कुठूनही गाडीने किंवा bus ने सहज पोहोचता येतं, वेळ वाचतो. NH4/Mumbai-Bangalore हायवे जवळ असल्यामुळे कोथरूड, बावधन, कात्रज, सिंहगड रोड आणि हिंजवडीवरून थेट ट्रॅफिकशिवाय पोहोचता येते.",
  },
  {
    q: "Actual farm setup दाखवला जातो का?",
    a: "हो, racks, lighting आणि ventilation चं प्रत्यक्ष demo दिलं जातं. प्रत्यक्ष शेडमध्ये उभं राहून तापमान, ह्युमिडिटी, कार्बन डायऑक्साइड (CO2) मॅनेजमेंट आणि फवारणी कशी करायची हे शिकवले जाते.",
  },
  {
    q: "Warje Malwadi व Karve Nagar भागातून येण्यासाठी वाहतूक कशी आहे?",
    a: "वारजे माळवाडी, कर्वे पुतळा आणि कर्वे नगरमधून नियमित पीएमपीएल (PMPML) बसेस, ऑटोरिक्षा आणि बाईकने 5 ते 10 मिनिटांत केंद्रावर पोहोचता येते.",
  },
  {
    q: "ट्रेनिंगमध्ये कोणत्या प्रकारच्या मशरूमचे प्रत्यक्ष प्रात्यक्षिक असते?",
    a: "कमी खर्चात जास्त नफा देणाऱ्या ऑयस्टर मशरूमचे (Dhingri) संपूर्ण हँड्स-ऑन प्रॅक्टिकल, पेंढा निर्जंतुकीकरण, स्पॉनिंग आणि कमर्शियल बटन मशरूम शेड डिझाईन प्रात्यक्षिक दिले जाते.",
  },
  {
    q: "नोकरदार लोकांसाठी वीकेंडला (शनिवार/रविवार) बॅचेस उपलब्ध आहेत का?",
    a: "होय, आयटी कर्मचारी, शासकीय व खाजगी नोकरदारांसाठी दर शनिवार आणि रविवारी विशेष सकाळ व दुपारच्या लवचिक बॅचेस आयोजित केल्या जातात.",
  },
  {
    q: "प्रशिक्षणानंतर घरच्या घरी शेती करण्यासाठी बियाणे आणि साहित्य इथेच मिळेल का?",
    a: "होय, केंद्रावर उच्च दर्जाचे प्रयोगशाळा-प्रमाणित स्पॉन (Spawn), पीपी बॅग्ज, वॉटर मिस्टिंग नोझल्स आणि हायग्रोमीटर थेट उपलब्ध करून दिले जातात.",
  },
];

export default function MushroomCultivationTrainingCentreNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-centre-near-me";

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
        name: "Mushroom Cultivation Training Centre Near Me – Warje Pune | Organic Mushrooms Farm",
        description:
          "Warje, NH4 जवळ राहणाऱ्यांसाठी nearby mushroom cultivation training centre. Easy access, direct racks & ventilation farm setup आणि practical training.",
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
            name: "Training Centre Near Me",
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
      id="training-centre-near-me-page"
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
            Training Centre Near Me
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
            <span>Warje, NH4 Highway, Karve Nagar & Sinhagad Road Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Warje, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Cultivation Training Centre
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>NH4 हायवे लगत सोयीस्कर केंद्र</span>
            <span>•</span>
            <span>प्रत्यक्ष रॅक व व्हेंटिलेशन डेमो</span>
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
              alt="Practical mushroom cultivation training center and rack setup near Warje Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Direct farm rack structure, ventilation demonstration, and practical training center near Warje, Pune.
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
              वारजे, एनएच4 जवळ राहणाऱ्यांसाठी जवळचे प्रॅक्टिकल मशरूम ट्रेनिंग सेंटर
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Warje हा भाग NH4 highway ला जोडलेला असल्यामुळे travel च्या दृष्टीने अत्यंत सोयीस्कर आहे</strong>. इथून ये-जा करणाऱ्या नोकरदार आणि व्यावसायिकांसाठी आमचं training centre एक उत्तम पर्याय आहे, <strong>कारण highway मुळे कुठूनही सहज पोहोचता येतं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Training मध्ये <strong>cultivation केवळ theory स्वरूपात नाही, तर actual setup दाखवून शिकवलं जातं — कोणत्या प्रकारचं racks वापरायचं, कोणतं तापमान योग्य असतं</strong>, हे सगळं प्रत्यक्ष बघायला मिळतं. <strong>Warje Malwadi आणि Karve Nagar जवळच्या रहिवाशांसाठी हे केंद्र अगदी सोपं reach आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            तुम्ही नवशिक्या असाल किंवा शेतकरी, आमच्या परवडणाऱ्या{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण कार्यशाळा
            </Link>{" "}
            आणि सुटसुटीत{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी पॅकेजेस (₹299 पासून)
            </Link>{" "}
            चा लाभ घेऊन स्वतःचे मशरूम युनिट उभारू शकता. तसेच घरबसल्या शिकण्यासाठी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-classes-online"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन क्लासेस
            </Link>{" "}
            सुद्धा उपलब्ध आहेत.
          </p>
        </section>

        {/* Section 1: NH4 Highway Connectivity & Easy Access */}
        <section
          id="highway-connectivity"
          aria-labelledby="highway-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Navigation className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="highway-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. एनएच4 हायवे कनेक्टिव्हिटी व जलद प्रवासाची सोय (Fast Highway Access)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्याच्या पश्चिम उपनगरांमधून वाहतूक कोंडीशिवाय सहज पोहोचण्याचे केंद्र:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Building className="w-3.5 h-3.5 shrink-0" />
                <span>Warje & Malwadi</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                वारजे उड्डाणपूल, माळवाडी आणि कर्वे पुतळ्यावरून अवघ्या 5 ते 8 मिनिटांच्या अंतरावर.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>Kothrud & Bavdhan</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                चांदणी चौक आणि एनएच4 हायवेने कोथरूड व बावधनवरून 12 ते 15 मिनिटांत थेट प्रवेश.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Katraj & Sinhagad Rd</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                नवीन कात्रज बोगदा व नवले ब्रिजवरून सिंहगड रोड व कात्रजचे शेतकरी सहज भेट देऊ शकतात.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Actual Farm Setup, Racks & Climate Control Demo */}
        <section
          id="farm-setup-demo"
          aria-labelledby="setup-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <ThermometerSnowflake className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="setup-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. प्रत्यक्ष फार्म सेटअप: रॅक डिझाईन, तापमान व व्हेंटिलेशन डेमो
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुस्तकी ज्ञानापलीकडे जाऊन प्रत्यक्ष शेडमध्ये जाऊन अनुभवा:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मजबूत व किफायतशीर रॅक सिस्टीम:</strong> बांबू, लाकडी किंवा जीआय पाईप्सचे 4 ते 5 टियर रॅक्स कसे बनवावेत, जेणेकरून कमी जागेत जास्तीत जास्त बॅग्स ठेवता येतील.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>तापमान व आर्द्रता (Humidity) नियंत्रण:</strong> वारजे भागातील हवामानानुसार 22°C ते 28°C तापमान व 80-85% आर्द्रता राखण्यासाठी फॉगर्स आणि ज्यूट कर्टनचे नियोजन.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>योग्य वायुवीजन (Ventilation & CO2 Control):</strong> मशरूमच्या टोप्या मोठ्या आणि दांड्या लहान राहण्यासाठी फ्रेश एअर व्हेंटिलेशनचे प्रत्यक्ष प्रात्यक्षिक.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हायजीन व निर्जंतुकीकरण कक्ष:</strong> शेडमध्ये रोग किंवा कीड पसरू नये म्हणून फूट बाथ आणि स्प्रेइंगची खबरदारी.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Spawn, Substrate & Commercial Economics */}
        <section
          id="farm-economics"
          aria-labelledby="economics-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="economics-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. कच्चा माल पुरवठा व स्थानिक मार्केट लिंकेज (Profit Blueprint)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            केंद्रावरून मिळणारा थेट कच्चा माल आणि विक्रीची साधने:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">प्रमाणित स्पॉन पुरवठा:</strong>
              <span className="text-slate-600 dark:text-slate-300">वारजे केंद्रावरून थेट शेतकर्‍यांना दर्जेदार{" "}
                <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  स्पॉन बियाणे
                </Link>{" "}
                उपलब्ध.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कमी खर्चात सेटअप:</strong>
              <span className="text-slate-600 dark:text-slate-300">केवळ 100 ते 150 स्क्वेअर फूट जागेत ₹15,000 ते ₹20,000 मध्ये पहिला युनिट सुरू करता येतो.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">मार्केट लिंकेज:</strong>
              <span className="text-slate-600 dark:text-slate-300">वारजे, कोथरूड व कर्वे नगरमधील गृहनिर्माण सोसायट्यांमध्ये थेट ₹200 ते ₹260 प्रति किलो विक्री.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="centre-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (वारजे मशरूम ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              वारजे, पुणे जवळील केंद्रावर प्रत्यक्ष ट्रेनिंगसाठी आजच सीट बुक करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              प्रत्यक्ष रॅक व फार्म सेटअप पाहा, स्वतःच्या हाताने बॅग बनवा आणि तज्ज्ञ मार्गदर्शनाखाली तुमचा व्यवसाय सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  हँड्स-ऑन प्रॅक्टिकल बॅच (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                प्रत्यक्ष शेड व्हिजिट, बॅग मेकिंग सराव, स्टार्टर किट व छापील मार्गदर्शिका.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल फार्म मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                बटन + ऑयस्टर शेड उभारणी, नाबार्ड बँक कर्ज सबसिडी रिपोर्ट व अधिकृत प्रमाणपत्र.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20वारजे/पुणे%20जवळून%20आहे.%20मला%20वारजे%20येथील%20मशरूम%20कल्टिव्हेशन%20ट्रेनिंग%20सेंटरबाबत%20माहिती%20हवी%20आहे."
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
