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
  Video,
  Clock,
  Languages,
  Laptop,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Cultivation Online Classes – Karve Nagar Pune | Organic Mushrooms Farm",
  description:
    "Karve Nagar मधील विद्यार्थी आणि गृहिणींसाठी flexible online mushroom cultivation classes. कधीही, कुठूनही शिका. Substrate preparation ते पहिल्या harvest पर्यंत step-by-step व्हिडिओ.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-classes-online",
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
      "Mushroom Cultivation Online Classes – Karve Nagar Pune | Organic Mushrooms Farm",
    description:
      "Karve Nagar मधील विद्यार्थी आणि गृहिणींसाठी flexible online mushroom cultivation classes. कधीही, कुठूनही शिका. Substrate preparation ते पहिल्या harvest पर्यंत step-by-step व्हिडिओ.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-classes-online",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation Online Classes – Karve Nagar Pune | Organic Mushrooms Farm",
    description:
      "Karve Nagar मधील विद्यार्थी आणि गृहिणींसाठी flexible online mushroom cultivation classes. कधीही, कुठूनही शिका. Substrate preparation ते पहिल्या harvest पर्यंत step-by-step व्हिडिओ.",
  },
};

const faqs = [
  {
    q: "Classes कधी सुरू होतात?",
    a: "Online classes लगेच registration नंतर सुरू होतात, कोणत्याही ठराविक date किंवा बॅचची वाट बघायची गरज नाही. तुमच्या सवडीनुसार तुम्ही व्हिडिओ मॉड्यूल्स पाहू शकता.",
  },
  {
    q: "भाषेची अडचण येते का?",
    a: "नाही, सगळं content मराठी, हिंदी आणि English मध्ये सहज समजेल असं ठेवलेलं आहे, जेणेकरून तांत्रिक वैज्ञानिक संकल्पना सर्वांना सहज आत्मसात करता येतील.",
  },
  {
    q: "ऑनलाइन क्लास केल्यावर प्रॅक्टिकल किट आणि बियाणे (Spawn) घरी मिळेल का?",
    a: "होय, नोंदणीनंतर तुमच्या कर्वे नगर किंवा पुण्याच्या पत्त्यावर उच्च दर्जाचे मशरूम स्पॉन, पीपी बॅग्ज, निर्जंतुकीकरण साहित्य आणि छापील मराठी मार्गदर्शिका कुरिअरने पाठवली जाते.",
  },
  {
    q: "शंका किंवा प्रश्न असल्यास सपोर्ट कसा मिळतो?",
    a: "सर्व प्रशिक्षणार्थींना थेट व्हॉट्सॲप आणि फोन कॉल सपोर्ट दिला जातो. तुमच्या मशरूम बॅगचे फोटो किंवा व्हिडिओ पाठवून तुम्ही थेट तज्ज्ञांकडून मार्गदर्शन मिळवू शकता.",
  },
  {
    q: "गृहिणी आणि कॉलेज विद्यार्थ्यांसाठी कोर्सचा कालावधी किती असतो?",
    a: "हा सेल्फ-पेस्ड (Self-paced) व्हिडिओ कोर्स आहे. तुम्ही दररोज 30 ते 45 मिनिटे देऊन 3 ते 5 दिवसांत संपूर्ण प्रात्यक्षिक आणि व्यवसाय गणित सहज शिकू शकता.",
  },
  {
    q: "ऑनलाइन क्लास पूर्ण केल्यावर अधिकृत प्रमाणपत्र (Certificate) मिळते का?",
    a: "होय, कोर्स मॉड्यूल्स पूर्ण केल्यानंतर तुम्हाला डिजिटल व्हेरिफायड सर्टिफिकेट आणि कमर्शियल प्रोजेक्ट रिपोर्ट पीडीएफ स्वरूपात दिली जाते.",
  },
];

export default function MushroomCultivationClassesOnlinePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-classes-online";

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
        name: "Mushroom Cultivation Online Classes – Karve Nagar Pune | Organic Mushrooms Farm",
        description:
          "Karve Nagar मधील विद्यार्थी आणि गृहिणींसाठी flexible online mushroom cultivation classes. कधीही, कुठूनही शिका. Substrate preparation ते पहिल्या harvest पर्यंत step-by-step व्हिडिओ.",
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
            name: "Online Classes",
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
      id="online-classes-page"
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
            Online Classes
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
            <span>Karve Nagar, Kothrud, Warje & Pune Online Learning Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Karve Nagar, Pune येथील{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Cultivation Online Classes
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>कधीही, कुठूनही सवडीने शिका</span>
            <span>•</span>
            <span>मराठी, हिंदी व English मध्ये</span>
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
              alt="Flexible online mushroom cultivation classes for students and homemakers in Karve Nagar Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Step-by-step self-paced video modules and online practical guidance for Karve Nagar residents.
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
              कर्वे नगर मधील विद्यार्थी आणि गृहिणींसाठी लवचिक ऑनलाइन मशरूम प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Karve Nagar मध्ये अनेक students आणि गृहिणी राहतात</strong> ज्यांचा रोजचा वेळ आधीच classes, घरकाम किंवा अभ्यासात गुंतलेला असतो. त्यांच्यासाठी आमच्या online classes अगदी flexible ठेवल्या आहेत — <strong>कोणत्याही वेळी, स्वतःच्या सवडीने तुम्ही modules पूर्ण करू शकता</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Class मध्ये <strong>substrate preparation पासून पहिल्या harvest पर्यंतचे सगळे टप्पे step-by-step video स्वरूपात दिले आहेत</strong>, जे <strong>हिंदी, मराठी आणि English तिन्ही भाषांमध्ये समजावलेले आहेत</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            घरबसल्या स्वतःच्या मोकळ्या वेळेत उच्च दर्जाचे मशरूम उत्पादन शिकण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन प्रशिक्षण मॉड्यूल्स (₹299 पासून)
            </Link>{" "}
            अत्यंत सोयीचे ठरतात. यासोबतच तुम्हाला आवश्यक असणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              शुद्ध स्पॉन बियाणे
            </Link>{" "}
            आणि घरपोच स्टार्टर किट पुरवले जाते.
          </p>
        </section>

        {/* Section 1: Online Class Features & Flexibility */}
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
              1. ऑनलाइन क्लासेसचे प्रमुख वैशिष्ट्ये व लवचिकता (Self-Paced Learning)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कर्वे नगर, कोथरूड, वारजे आणि आसपासच्या रहिवाशांसाठी वेळ आणि प्रवासाचा खर्च वाचवणारे मॉडेल:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Zero Commute Time</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ट्रॅफिकमध्ये अडकण्याची गरज नाही. घरातल्या शांततेत मोबाईल किंवा लॅपटॉपवर कधीही क्लास अटेंड करा.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Languages className="w-3.5 h-3.5 shrink-0" />
                <span>3 प्रादेशिक भाषा</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                मराठी, हिंदी आणि इंग्रजीत सोप्या भाषेत व्हिडिओ धडे. कोणतीही भाषेची अडचण नाही.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Video className="w-3.5 h-3.5 shrink-0" />
                <span>Lifetime Video Access</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पुन्हा पुन्हा रिवाइंड करून प्रॅक्टिकलचे बारकावे समजून घेण्याची मोकळीक.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Curriculum from Substrate to Harvest */}
        <section
          id="online-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Video className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. सबस्ट्रेट ते पहिली काढणी: स्टेप-बाय-स्टेप व्हिडिओ अभ्यासक्रम
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            प्रत्यक्ष फार्मवर चित्रित केलेले हाय-डेफिनिशन व्हिडिओ प्रात्यक्षिके:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मॉड्यूल 1: पेंढा निवड व रासायनिक/उकळते निर्जंतुकीकरण:</strong> घरच्या घरी उपलब्ध भांड्यांमध्ये पेंढा कसा निर्जंतुक करावा.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मॉड्यूल 2: लेयर स्पॉनिंग व मायसेलियम रन:</strong> पीपी बॅग भरणे, बियाणे पेरणे आणि अंधाऱ्या खोलीत 15 दिवस तापमान टिकवणे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मॉड्यूल 3: पिनहेडिंग, आर्द्रता व प्रकाश व्यवस्था:</strong> बॅग फाडणे/कापणे, स्प्रेअरने पाणी देणे आणि योग्य आर्द्रता राखणे.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मॉड्यूल 4: योग्य काढणी (Harvesting) व पॅकिंग:</strong> मशरूम न तुटता अलगद काढणे, वजन करणे आणि स्थानिक कर्वे नगर/कोथरूड मार्केटमध्ये विक्री.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Home Delivery of Starter Kit & Remote WhatsApp Mentorship */}
        <section
          id="kit-and-mentorship"
          aria-labelledby="kit-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="kit-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. घरपोच स्टार्टर किट व 24x7 व्हॉट्सॲप तज्ज्ञ मेंटॉरशिप
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            ऑनलाइन शिकतानाही तुम्हाला कधीही एकटे वाटणार नाही अशा प्रकारची मदत:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">घरपोच प्रॅक्टिकल किट:</strong>
              <span className="text-slate-600 dark:text-slate-300">कर्वे नगर भागात कुरिअरने 1 किलो ताजे स्पॉन, पीपी बॅग्स आणि छापील SOP चार्ट घरपोच मिळतात.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">फोटो/व्हिडिओ सल्ला:</strong>
              <span className="text-slate-600 dark:text-slate-300">मायसेलियम पांढरा झाला की नाही किंवा बुरशी लागली का, हे फोटो पाठवून लगेच तपासा.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">स्थानिक ग्राहक नेटवर्क:</strong>
              <span className="text-slate-600 dark:text-slate-300">पुण्यातील स्थानिक सोसायट्यांमध्ये घरगुती मशरूम विक्रीसाठी थेट मार्केटिंग टिप्स.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="online-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (कर्वे नगर ऑनलाइन मशरूम क्लासेसविषयी वारंवार विचारले जाणारे प्रश्न)
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
              घरबसल्या तुमच्या वेळेनुसार आजच ऑनलाइन क्लास सुरू करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              लगेच नोंदणी करा, व्हिडिओ मॉड्यूल्स पहा आणि घरपोच स्टार्टर किट मिळवून पहिली मशरूम बॅग तयार करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  ऑनलाइन बेसिक व्हिडिओ कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                संपूर्ण व्हिडिओ मॉड्यूल्स, ई-बुक्स, डाऊनलोड करण्यायोग्य गाईड्स व व्हॉट्सॲप सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  ऑनलाइन कमर्शियल मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                बटन + ऑयस्टर शेड उभारणी, नाबार्ड लोन सबसिडी प्रोजेक्ट रिपोर्ट आणि डिजिटल सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20कर्वे%20नगर%20पुणे%20येथून%20आहे.%20मला%20ऑनलाइन%20मशरूम%20कल्टिव्हेशन%20क्लासेसबाबत%20माहिती%20हवी%20आहे."
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
