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
  GraduationCap,
  Sprout,
  Layers,
  Clock,
  Briefcase,
  Award,
  Users,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Training Center Kothrud Pune | Organic Mushrooms Farm",
  description:
    "Kothrud, Pune मध्ये hands-on mushroom training center. Oyster आणि button mushroom cultivation शिका experts कडून. Practical + theory training, ₹299 पासून सुरू.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-training-center",
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
    title: "Mushroom Training Center Kothrud Pune | Organic Mushrooms Farm",
    description:
      "Kothrud, Pune मध्ये hands-on mushroom training center. Oyster आणि button mushroom cultivation शिका experts कडून. Practical + theory training, ₹299 पासून सुरू.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Training Center Kothrud Pune | Organic Mushrooms Farm",
    description:
      "Kothrud, Pune मध्ये hands-on mushroom training center. Oyster आणि button mushroom cultivation शिका experts कडून. Practical + theory training, ₹299 पासून सुरू.",
  },
};

const faqs = [
  {
    q: "Kothrud मध्ये training साठी किती वेळ लागतो?",
    a: "आमचं basic training एका दिवसात पूर्ण होतं, आणि advanced commercial module 2-3 दिवसांचं असतं.",
  },
  {
    q: "Training नंतर spawn कुठून मिळेल?",
    a: "Organic Mushrooms Farm कडून तुम्हाला lab-certified 100% pure spawn pan India delivery आणि Kothrud केंद्रावर थेट उपलब्ध करून दिलं जातं.",
  },
  {
    q: "कोथरूडमध्ये फ्लॅट किंवा टेरेसवर मशरूम लागवड सुरू करता येते का?",
    a: "होय, ऑयस्टर मशरूम लागवडीसाठी अगदी 10×10 ची छोटी खोली किंवा बाल्कनी पुरेशी असते, जिथे कमी खर्चात 50 ते 100 बॅग्ज सहज लावता येतात.",
  },
  {
    q: "विद्यार्थी आणि गृहिणींसाठी कोथरूड केंद्रावर विशेष सवलत व सोय आहे का?",
    a: "होय, कॉलेज विद्यार्थी, गृहिणी आणि सिनियर सिटिझन्ससाठी लवचिक वेळा, वीकेंड प्रॅक्टिकल बॅचेस आणि सुलभ ₹299 पासून सुरू होणारे कोर्सेस उपलब्ध आहेत.",
  },
  {
    q: "प्रशिक्षणानंतर तयार मशरूमच्या विक्रीसाठी काय मदत मिळते?",
    a: "कोथरूड, कर्वेनगर, एरंडवणे आणि डेक्कन परिसरातील स्थानिक भाजी मंडई, सुपरमार्केट्स आणि ऑर्गेनिक स्टोअर्स सोबत थेट मार्केट लिंकेज व बायबॅक मार्गदर्शन दिले जाते.",
  },
  {
    q: "बटन मशरूम आणि ऑयस्टर मशरूम लागवडीतील फरक काय शिकवला जातो?",
    a: "ऑयस्टर मशरूम साध्या तापमानात व कमी भांडवलात कसे पिकवायचे आणि बटन मशरूमसाठी कंपोस्टिंग व वातानुकूलित तापमान नियंत्रण कसे करायचे याचे प्रत्यक्ष प्रात्यक्षिक दाखवले जाते.",
  },
];

export default function MushroomTrainingCenterKothrudPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-training-center";

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
        name: "Mushroom Training Center Kothrud Pune | Organic Mushrooms Farm",
        description:
          "Kothrud, Pune मध्ये hands-on mushroom training center. Oyster आणि button mushroom cultivation शिका experts कडून. Practical + theory training, ₹299 पासून सुरू.",
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
            name: "Mushroom Training Center Kothrud",
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
      id="mushroom-training-center-kothrud-page"
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
            Kothrud Training Center
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
            <span>Kothrud, Karve Nagar, Erandwane & Deccan Gymkhana</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Kothrud, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Training Center
            </span>{" "}
            – Organic Mushrooms Farm
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>Hands-on Oyster व Button Mushroom प्रात्यक्षिक</span>
            <span>•</span>
            <span>विद्यार्थी व गृहिणींसाठी सोपे मॉड्यूल्स</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ₹299 पासून सुरू
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Mushroom training center in Kothrud Pune with hands-on bag making and harvesting"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Practical mushroom bag making, spawn mixing, and harvesting workshop in Kothrud, Pune.
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
              कोथरूडमधील परिपूर्ण मशरूम लागवड व प्रशिक्षण केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Kothrud हा Pune चा एक popular residential आणि educational area आहे, आणि इथल्या अनेक रहिवाशांना आता mushroom farming मध्ये interest वाढत आहे. Organic Mushrooms Farm तर्फे Kothrud परिसरातील लोकांसाठी संपूर्ण mushroom training center उपलब्ध आहे, जिथे तुम्ही oyster mushroom आणि button mushroom ची लागवड प्रत्यक्ष practical पद्धतीने शिकू शकता</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>आमचं training module बिगिनर्ससाठी सोपं ठेवलेलं आहे — spawn तयार करण्यापासून ते harvesting आणि packaging पर्यंत सगळं काही cover होतं. Kothrud, Karve Nagar, Erandwane या भागातील विद्यार्थी आणि गृहिणी दोघांनाही हे training उपयोगी पडतं, कारण कमी जागेत आणि कमी investment मध्ये हा business सुरू करता येतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमीत कमी खर्चात स्वतःचा शेती व्यवसाय सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम शेती प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            तपासा. लागवडीसाठी आवश्यक असलेले 100% शुद्ध{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम स्पॉन व बियाणे
            </Link>{" "}
            घरपोच मागवा. पुण्यातील इतर प्रसिद्ध केंद्रे पाहण्यासाठी{" "}
            <Link
              href="/locations/pune/government-mushroom-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              वाकड सरकारी प्रशिक्षण केंद्र
            </Link>
            ,{" "}
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
              विमान नगर R&D केंद्र
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी आणि कोर्स पॅकेजेस
            </Link>{" "}
            पहा.
          </p>
        </section>

        {/* Section 1: Curriculum & Practical Modules in Kothrud */}
        <section
          id="course-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. कोथरूड केंद्रावरील प्रत्यक्ष प्रात्यक्षिक अभ्यासक्रम
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या कोथरूड प्रशिक्षण केंद्रामध्ये विद्यार्थ्यांना व नवीन उद्योजकांना खालील सर्व टप्पे स्वतः हाताने करून शिकवले जातात:
          </p>

          <div className="grid sm:grid-cols-4 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>कच्चा माल व स्टेरिलायझेशन</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                गहू/भाताचा पेंढा निवड, उकळणे, स्टीमिंग किंवा केमिकल ट्रीटमेंटचे शास्त्रोक्त प्रमाण.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Sprout className="w-3.5 h-3.5 shrink-0" />
                <span>स्पॉनिंग व बॅग मेकिंग</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पीपी बॅग्जमध्ये लेयर किंवा मिक्स पद्धतीने 2% ते 3% स्पॉन भरण्याची प्रात्यक्षिक पद्धत.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>मायसेलियम व क्रॉपिंग रूम</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                20-28°C तापमान, 80-90% आर्द्रता व शुद्ध हवेचे वेंटिलेशन नियंत्रण व्यवस्थापन.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Award className="w-3.5 h-3.5 shrink-0" />
                <span>काढणी, पॅकेजिंग व विक्री</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                फ्लशिंग सायकल, योग्य वेळी काढणी, पंचिंग पाऊच पॅकेजिंग आणि स्थानिक बाजारपेठ विक्री.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Ideal for Kothrud Residents (Students, Homemakers, Working Professionals) */}
        <section
          id="who-can-join"
          aria-labelledby="audience-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Users className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="audience-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. कोथरूड, कर्वेनगर व एरंडवणे परिसरासाठी हे प्रशिक्षण का फायदेशीर आहे?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कोथरूड हा पुण्याचा प्रमुख शैक्षणिक व निवासी भाग असल्याने येथे मशरूम व्यवसायाला प्रचंड वाव आहे:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>विद्यार्थ्यांसाठी पार्ट-टाइम बिझनेस:</strong> कॉलेज सांभाळून दिवसातून केवळ 1 तास देऊन विद्यार्थी घरच्या घरी स्वतःचा पॉकेटमनी व व्यवसाय सुरू करू शकतात.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>गृहिणींसाठी होम-बेस्ड इन्कम:</strong> स्वयंपाकघरातील किंवा अतिरिक्त रिकाम्या खोलीत 100 बॅग्ज लावून दरमहा ₹10,000 ते ₹20,000 चा नफा सहज कमवता येतो.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्थानिक हाय-व्हॅल्यू मार्केट:</strong> कोथरूड, एरंडवणे, कर्वे पुतळा आणि डेक्कन भागातील उच्चभ्रू सोसायट्यांमध्ये ताज्या ऑयस्टर आणि बटन मशरूमला ₹200 ते ₹350 प्रति किलो भाव मिळतो.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कमी भांडवल आणि जागेची बचत:</strong> मशरूम लागवडीसाठी शेतीची जमीन लागत नाही; केवळ 100 ते 200 चौ. फूट जागा पुरेशी असते.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Viability & Buyback Linkage */}
        <section
          id="commercial-support"
          aria-labelledby="commercial-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="commercial-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. व्यावसायिक मदत, स्पॉन सप्लाय आणि बायबॅक सपोर्ट
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">100% व्हेरिफाईड स्पॉन:</strong>
              <span className="text-slate-600 dark:text-slate-300">हाय-यील्डिंग ऑयस्टर, बटन, मिल्की व कॉर्डिसेप्स स्पॉन थेट कोथरूड केंद्रावर उपलब्ध.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">लाइफटाइम व्हॉट्सॲप सपोर्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">पिकादरम्यान बुरशी किंवा किडीची समस्या आल्यास आमच्या तज्ज्ञांकडून त्वरित मार्गदर्शन.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">बायबॅक व ड्रायिंग सोय:</strong>
              <span className="text-slate-600 dark:text-slate-300">जादा उत्पादन झाल्यास ड्राय ऑयस्टर मशरूमच्या थेट खरेदीची व मूल्यवर्धनाची खात्री.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="kothrud-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (कोथरूड मशरूम प्रशिक्षण केंद्राविषयी वारंवार विचारले जाणारे प्रश्न)
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
              कोथरूड, कर्वेनगर व एरंडवणे परिसरातील नागरिकांसाठी नवीन बॅच सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              प्रत्यक्ष प्रात्यक्षिक, शुद्ध स्पॉन किट आणि विक्री मार्गदर्शनासह आजच मशरूम लागवड शिका.
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
                हँड्स-ऑन बॅग मेकिंग, सबस्ट्रेट स्टेरिलायझेशन, ई-मॅन्युअल व तज्ज्ञ सपोर्ट.
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
                प्रकल्प अहवाल (DPR), बँक सबसिडी मार्गदर्शन, बायबॅक लिंकेज व सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20कोथरूड/पुणे%20येथून%20आहे.%20मला%20मशरूम%20प्रशिक्षण%20आणि%20स्पॉनबद्दल%20माहिती%20हवी%20आहे."
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
