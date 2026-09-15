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
  Eye,
  Briefcase,
  Layers,
  Sprout,
  Users,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Cultivation and Training Center – Kharadi Pune | Organic Mushrooms Farm",
  description:
    "Kharadi Pune मध्ये cultivation आणि training दोन्ही एकाच ठिकाणी. प्रत्यक्ष चालू असलेला farm बघा आणि शिका.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-and-training-center",
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
      "Mushroom Cultivation and Training Center – Kharadi Pune | Organic Mushrooms Farm",
    description:
      "Kharadi Pune मध्ये cultivation आणि training दोन्ही एकाच ठिकाणी. प्रत्यक्ष चालू असलेला farm बघा आणि शिका.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-and-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation and Training Center – Kharadi Pune | Organic Mushrooms Farm",
    description:
      "Kharadi Pune मध्ये cultivation आणि training दोन्ही एकाच ठिकाणी. प्रत्यक्ष चालू असलेला farm बघा आणि शिका.",
  },
};

const faqs = [
  {
    q: "Live farm visit training मध्ये included आहे का?",
    a: "हो, training fee मध्येच संपूर्ण live farm visit included आहे. यामध्ये चालू ग्रोईंग रूम्स, रॅक्स आणि ह्युमिडिटी सिस्टिम्स थेट पाहायला मिळतात.",
  },
  {
    q: "Kharadi center मध्ये group training होतं का?",
    a: "हो, individual आणि group दोन्ही batches उपलब्ध आहेत. IT कंपन्यांचे ग्रुप्स, शेतकरी मंडळे आणि नवउद्योजकांसाठी स्वतंत्र बॅचेस घेतल्या जातात.",
  },
  {
    q: "EON Free Zone व खराडी IT पार्कमधील कर्मचाऱ्यांसाठी वीकेंड बॅच उपलब्ध आहे का?",
    a: "होय, EON IT Park, WTC आणि खराडी परिसरातील IT प्रोफेशनल्ससाठी शनिवार व रविवारी सोयीस्कर वेळेत विशेष प्रॅक्टिकल बॅचेस आयोजित केल्या जातात.",
  },
  {
    q: "लाईव्ह फार्म व्हिजिटदरम्यान प्रत्यक्ष काय काय पाहायला मिळते?",
    a: "थेट मशरूम बॅग्सचे इनक्युबेशन, पिनहेड्स फुटण्याची क्रिया, फॉगर व ह्युमिडिफायर सिस्टिम, व्हर्टिकल रॅक्स डिझाईन आणि स्वच्छ तोडणी (Harvesting) प्रत्यक्ष दिसते.",
  },
  {
    q: "खराडी व नगर रोडवरून केंद्रावर पोहोचण्यासाठी ट्रान्सपोर्ट पर्याय कोणते आहेत?",
    a: "खराडी बायपास, EON IT पार्क, वाघोली आणि हडपसरवरून PMPML बसेस, ऑटो आणि कॅबची थेट कनेक्टिव्हिटी उपलब्ध आहे.",
  },
  {
    q: "स्वतःचे कमर्शियल फार्म सुरू करण्यासाठी प्रोजेक्ट रिपोर्ट (DPR) व सपोर्ट मिळतो का?",
    a: "होय, प्रशिक्षणासोबत बँक लोन व सबसिडीसाठी लागणारा सविस्तर प्रोजेक्ट रिपोर्ट (DPR), व्हॉट्सॲप मेन्टॉरशिप आणि स्पॉन सप्लाय हमी दिली जाते.",
  },
];

export default function MushroomCultivationAndTrainingCenterKharadiPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-and-training-center";

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
        name: "Mushroom Cultivation and Training Center – Kharadi Pune | Organic Mushrooms Farm",
        description:
          "Kharadi Pune मध्ये cultivation आणि training दोन्ही एकाच ठिकाणी. प्रत्यक्ष चालू असलेला farm बघा आणि शिका.",
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
            name: "Cultivation & Training Center Kharadi",
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
      id="mushroom-cultivation-training-kharadi-page"
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
            Kharadi Cultivation & Training
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
            <span>Kharadi, EON IT Park, WTC & Nagar Road, Pune</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Kharadi, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Cultivation and Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>क्लासरूम थेअरीसोबत प्रत्यक्ष चालू फार्म व्हिजिट</span>
            <span>•</span>
            <span>IT प्रोफेशनल्स व नवउद्योजकांसाठी प्रत्यक्ष अनुभव</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              प्रशिक्षण मॉडेल्स
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Live mushroom cultivation and practical training center in Kharadi Pune near EON IT Park"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Live operational farm visits, commercial rack setups, and practical cultivation training in Kharadi, Pune.
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
              खराडीमधील चालू फार्मवर प्रत्यक्ष अनुभव आणि परिपूर्ण व्यावसायिक प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Kharadi मधलं हे केंद्र वेगळं आहे कारण इथे फक्त classroom training नाही, तर एक प्रत्यक्ष चालू असलेला mushroom farm सुद्धा बघायला मिळतो. विद्यार्थी live farm operations बघू शकतात — racks कसे लावलेले आहेत, watering schedule कसा असतो, आणि disease management कसं केलं जातं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>EON IT Park जवळच्या professionals साठी ही एक unique संधी आहे, theory आणि real farm visit दोन्ही एकत्र मिळतं. यामुळे confidence वाढतो आणि स्वतःचा farm सुरू करताना doubts कमी राहतात</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            स्वतःचा व्यावसायिक किंवा घरगुती प्रकल्प सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            सुरू करा. सोबत लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              उच्च प्रतीचे स्पॉन बियाणे
            </Link>{" "}
            आणि मायकोलॉजी किट्स उपलब्ध आहेत. पुण्यातील इतर केंद्रांसाठी{" "}
            <Link
              href="/locations/pune/mushroom-development-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              विमान नगर R&D सेंटर
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farm-learning-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              पिंपरी-चिंचवड केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-by-government"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              वाघोली शासकीय योजना
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी तपशील
            </Link>{" "}
            तपासा.
          </p>
        </section>

        {/* Section 1: Live Farm vs Traditional Classroom Training */}
        <section
          id="live-farm-experience"
          aria-labelledby="live-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Eye className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="live-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. प्रत्यक्ष चालू फार्म व्हिजिटचे महत्त्व
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            केवळ पुस्तकी ज्ञानापेक्षा डोळ्यांसमोर चालू असलेला फार्म पाहिल्याने उत्पादनातील प्रत्यक्ष बारकावे स्पष्ट होतात:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>व्हर्टिकल रॅक लेआउट</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                कमी जागेत 4 ते 5 थरांचे बांबू किंवा लोखंडी अँगल रॅक्स लावून जास्तीत जास्त बॅग्स ठेवण्याची अचूक रचना.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Sprout className="w-3.5 h-3.5 shrink-0" />
                <span>वॉटरिंग व फॉगर शेड्युल</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                हवामानानुसार दिवसातून किती वेळा, किती दाबाने आणि कसे पाणी फवारावे याचे थेट वेळापत्रक.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>कंटामिनेशन प्रिव्हेंशन</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                हिरवी बुरशी (Trichoderma) किंवा माश्यांचा प्रादुर्भाव रोखण्यासाठी स्वच्छतेचे कडक नियम.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Perfect for IT Professionals at EON & WTC */}
        <section
          id="it-professionals"
          aria-labelledby="it-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="it-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. EON IT पार्क व कॉर्पोरेट प्रोफेशनल्ससाठी विशेष संधी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            खराडी, मगरपट्टा आणि कल्याणी नगर परिसरातील नोकरदार वर्गासाठी मशरूम फार्मिंग हा आदर्श ॲग्री-स्टार्टअप पर्याय का आहे:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>आठवड्याला फक्त 3-4 तास व्यवस्थापन:</strong> ऑटोमेटेड टायमर, फॉगर आणि सेन्सर्स वापरून नोकरी सांभाळून फार्म सुरळीत चालवता येतो.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हाय ROI आणि 25-30 दिवसांत पहिली तोडणी:</strong> ऑयस्टर मशरूमची पहिली काढणी अवघ्या 22 ते 25 दिवसांत सुरू होते.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>थेट निवासी सोसायट्यांमध्ये प्रीमियम विक्री:</strong> खराडी, विमान नगर आणि मगरपट्टा येथील उच्चभ्रू सोसायट्यांमध्ये ताजे मशरूम ₹200 ते ₹300/किलो विकले जातात.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>वीकेंड प्रॅक्टिकल बॅचेस:</strong> ऑफिसच्या वेळा सांभाळून शनिवार आणि रविवारी हँड्स-ऑन सेशन पूर्ण करता येतात.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Batch Options & Group Training */}
        <section
          id="batch-options"
          aria-labelledby="batches-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Users className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="batches-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. व्यक्तिगत व ग्रुप ट्रेनिंग पर्याय
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">वन-ऑन-वन ट्रेनिंग:</strong>
              <span className="text-slate-600 dark:text-slate-300">वैयक्तिक लक्ष देऊन तुमच्या जागेनुसार कस्टम फार्म प्लॅनिंग व डिझाईन.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कॉर्पोरेट व ग्रुप बॅच:</strong>
              <span className="text-slate-600 dark:text-slate-300">मित्रपरिवार किंवा सहकाऱ्यांसोबत एकत्र येऊन कमर्शियल युनिट सुरू करण्यासाठी.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">प्रॅक्टिकल बॅग मेकिंग:</strong>
              <span className="text-slate-600 dark:text-slate-300">विद्यार्थ्यांना स्वतःच्या हाताने स्पॉनिंग व बॅग भरून घरी नेण्याची सुविधा.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="kharadi-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (खराडी कल्टिव्हेशन व ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              खराडी, हडपसर व वाघोली परिसरातील प्रशिक्षणार्थींसाठी प्रवेश सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              प्रत्यक्ष चालू फार्मवर शिकून 100% आत्मविश्वासाने स्वतःचा आधुनिक मशरूम फार्म सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  बेसिक प्रॅक्टिकल + फार्म व्हिजिट (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                चालू फार्मची फेरफटका, ऑयस्टर बॅग मेकिंग आणि स्टार्टर गाईड.
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
                व्यावसायिक शेड डिझाईन, सबसिडी प्रोजेक्ट रिपोर्ट आणि डिजिटल सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20खराडी/पुणे%20येथून%20आहे.%20मला%20खराडी%20कल्टिव्हेशन%20व%20ट्रेनिंग%20सेंटरविषयी%20माहिती%20हवी%20आहे."
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
