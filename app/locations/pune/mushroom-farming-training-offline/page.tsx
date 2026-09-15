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
  Briefcase,
  Calendar,
  Layers,
  Sprout,
  TrendingUp,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farming Offline Training – Magarpatta Pune | Organic Mushrooms Farm",
  description:
    "Magarpatta City मधील corporate professionals साठी weekend offline mushroom farming training, संपूर्ण hands-on experience सोबत.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-offline",
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
      "Mushroom Farming Offline Training – Magarpatta Pune | Organic Mushrooms Farm",
    description:
      "Magarpatta City मधील corporate professionals साठी weekend offline mushroom farming training, संपूर्ण hands-on experience सोबत.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-offline",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Offline Training – Magarpatta Pune | Organic Mushrooms Farm",
    description:
      "Magarpatta City मधील corporate professionals साठी weekend offline mushroom farming training, संपूर्ण hands-on experience सोबत.",
  },
};

const faqs = [
  {
    q: "Offline training एका दिवसात पूर्ण होतं का?",
    a: "Basic offline training एका दिवसात पूर्ण होतं, ज्यामध्ये सबस्ट्रेट निर्जंतुकीकरण, स्पॉनिंग आणि बॅग मेकिंगचा प्रत्यक्ष सराव मिळतो. Advanced commercial module साठी 2-3 दिवस लागतात.",
  },
  {
    q: "Magarpatta मधून training location किती लांब आहे?",
    a: "Training location ची अचूक माहिती नोंदणीनंतर WhatsApp वर दिली जाते. मगरपट्टा, हडपसर, अमनोरा पार्क टाऊन आणि खराडी येथून केंद्रावर पोहोचणे अत्यंत सोयीचे आहे.",
  },
  {
    q: "आयटी प्रोफेशनल्ससाठी वीकेंड बॅचेस उपलब्ध आहेत का?",
    a: "होय, खास मगरपट्टा आणि सायबरसिटीमधील नोकरदारांसाठी दर शनिवार आणि रविवारी विशेष हँड्स-ऑन प्रॅक्टिकल बॅचेस आयोजित केल्या जातात.",
  },
  {
    q: "प्रशिक्षणात प्रत्यक्ष बॅग स्वतः हाताने भरता येते का?",
    a: "नक्कीच! प्रत्येक प्रशिक्षणार्थीला स्वतःच्या हाताने स्पॉन हाताळणे, थरांमध्ये स्पॉन पेरणे (layer spawning) आणि पीपी बॅग्ज पॅक करण्याचे 100% प्रॅक्टिकल करायला मिळते.",
  },
  {
    q: "ट्रेनिंगनंतर मगरपट्टा किंवा हडपसरमध्ये मशरूम विक्री कशी करावी?",
    a: "मगरपट्टा सिटी, अमनोरा आणि हडपसरमधील मोठ्या रेसिडेन्शियल सोसायट्यांमध्ये ताजा ऑयस्टर आणि बटन मशरूम ₹240 ते ₹300 प्रति किलो भावाने सहज विकला जातो. याचे थेट मार्केटिंग तंत्र वर्गात शिकवले जाते.",
  },
  {
    q: "प्रशिक्षणानंतर स्पॉन व कच्चा माल कुठे मिळेल?",
    a: "प्रशिक्षण केंद्रावरूनच लॅब-प्रमाणित फर्स्ट-जनरेशन स्पॉन, पीपी बॅग्ज आणि फॉर्मलिन/बाव्हिस्टिन थेट घरपोच मिळण्याची सुविधा उपलब्ध आहे.",
  },
];

export default function MushroomFarmingTrainingOfflinePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-offline";

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
        name: "Mushroom Farming Offline Training – Magarpatta Pune | Organic Mushrooms Farm",
        description:
          "Magarpatta City मधील corporate professionals साठी weekend offline mushroom farming training, संपूर्ण hands-on experience सोबत.",
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
            name: "Farming Training Offline",
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
      id="farming-training-offline-page"
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
            Farming Training Offline
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
            <span>Magarpatta City, Hadapsar, Amanora & Kharadi Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Magarpatta City, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Offline Mushroom Farming Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>Corporate Professionals साठी Weekend Batches</span>
            <span>•</span>
            <span>100% Hands-on Bag Making सराव</span>
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
              alt="Offline mushroom farming practical hands-on training for Magarpatta corporate professionals"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Weekend hands-on practical training session for corporate employees and entrepreneurs in Magarpatta City.
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
              मगरपट्टा सिटी मधील कॉर्पोरेट प्रोफेशनल्ससाठी प्रॅक्टिकल ऑफलाइन मशरूम शेती प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Magarpatta City मध्ये राहणारे बहुतेक लोक corporate जॉब करणारे professionals आहेत</strong>, ज्यांना <strong>ऑनलाइन शिकण्यापेक्षा प्रत्यक्ष hands-on experience जास्त आवडतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>आमचं offline training याची गरज पूर्ण करतं — एका दिवसात तुम्ही स्वतः spawn handle करता, bags तयार करता आणि संपूर्ण process जवळून बघता</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Weekend batch मध्ये नोंदणी करून तुम्ही एका Saturday किंवा Sunday मध्ये पूर्ण training पूर्ण करू शकता</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            प्रत्यक्ष फार्मवर येऊन मशरूम शेतीचे तंत्र शुद्ध पद्धतीने शिकण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑफलाइन व ऑनलाइन प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            अत्यंत सोयीचे आहे. यासोबत लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              शुद्ध स्पॉन बियाणे
            </Link>{" "}
            आणि स्टार्टर किट पुरवले जाते. तसेच शेजारच्या केंद्रांच्या माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              स्वारगेट ट्रेनिंग
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              बावधन ट्रेनिंग सेंटर
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी तपशील
            </Link>{" "}
            सुद्धा पाहू शकता.
          </p>
        </section>

        {/* Section 1: Tailored for Corporate Professionals & Weekend Schedules */}
        <section
          id="corporate-weekend"
          aria-labelledby="corporate-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="corporate-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. मगरपट्टा व आयटी प्रोफेशनल्ससाठी विशेष वीकेंड मॉडेल्स
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आयटी जॉबच्या व्यग्र वेळापत्रकातून वेळ काढून साईड-बिझनेस किंवा सेकंड इन्कम सुरू करण्यासाठी:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>शनिवार/रविवार 1-Day Batch</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                नोकरीला कोणताही अडथळा न येता एकाच वीकेंडमध्ये 6 तासांचे सखोल प्रात्यक्षिक.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>100% Hands-On Practical</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                फक्त प्रोजेक्टर लेक्चर नाही, तर स्वतः पेंढा भिजवणे, स्पॉनिंग करणे व बॅग्ज बांधणे.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>अतिरिक्त उत्पन्नाची संधी</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                घराच्या एका बंद खोलीत किंवा गॅलरीत दरमहा 30-50 किलो ताजे मशरूम उत्पादन.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Practical Syllabus in 1 Day */}
        <section
          id="offline-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sprout className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. ऑफलाइन प्रॅक्टिकल बॅचमध्ये काय शिकवले जाते?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            थिएरीपेक्षा 90% प्रत्यक्ष हाताने काम करण्याचे प्रात्यक्षिक:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सबस्ट्रेट निवड व निर्जंतुकीकरण:</strong> गव्हाचा/भाताचा पेंढा कापून उकळत्या पाण्यात किंवा ब्लीचिंग/बाव्हिस्टिनने निर्जंतुक करण्याचे प्रमाण.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्पॉन हाताळणी व लेयर स्पॉनिंग:</strong> उच्च दर्जाचे लॅब स्पॉन हाताळून पीपी बॅगमध्ये 4 ते 5 थरांमध्ये स्पॉनिंग करण्याचे थेट कौशल्य.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मायसेलियम रन व वातावरण व्यवस्थापन:</strong> 15-18 दिवस अंधाऱ्या खोलीत बॅग ठेवणे, नंतर हवा व 80-85% आर्द्रता नियंत्रित करणे.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>काढणी, सुरक्षित पॅकिंग व स्थानिक विक्री:</strong> ताजे मशरूम काढणे, वजन करणे आणि मगरपट्टा-अमनोरा परिसरातील सोसायट्यांमध्ये थेट विक्री.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Magarpatta & Hadapsar Market Potential */}
        <section
          id="market-potential"
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. मगरपट्टा व अमनोरा परिसरातील हाय-व्हॅल्यू मार्केट संधी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            मगरपट्टा, हडपसर आणि खराडी भागात ऑर्गॅनिक आणि ताज्या उत्पादनांना प्रचंड मागणी आहे:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">थेट सोसायटी विक्री:</strong>
              <span className="text-slate-600 dark:text-slate-300">गेटेड कम्युनिटीजमधील व्हॉट्सॲप ग्रुप्सवर ₹240-₹280/किग्रॅ दराने दररोज ताजी विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कॅफे व रेस्टॉरंट सप्लाय:</strong>
              <span className="text-slate-600 dark:text-slate-300">हडपसर व खराडीतील प्रीमियम कॅफेजसाठी नियमित फ्रेश ऑयस्टर मशरूम सप्लाय.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">ड्राय मशरूम पावडर:</strong>
              <span className="text-slate-600 dark:text-slate-300">उरलेल्या मशरूमची पावडर तयार करून ₹1,200 ते ₹1,500 प्रति किलो प्रीमियम विक्री.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="offline-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (मगरपट्टा ऑफलाइन मशरूम फार्मिंग ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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
              मगरपट्टा सिटी, पुणे जवळील प्रॅक्टिकल ऑफलाइन बॅचसाठी आजच नोंदणी करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              स्वतःच्या हाताने बॅग्ज बनवा, स्टार्टर किट मिळवा आणि वीकेंडच्या फावल्या वेळेत यशस्वी गृहउद्योग सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  ऑफलाइन बेसिक प्रॅक्टिकल (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                हँड्स-ऑन बॅग मेकिंग सराव, स्टार्टर स्पॉन किट, मॅन्युअल गाईड व व्हॉट्सॲप सपोर्ट.
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
                बटन + ऑयस्टर कमर्शियल शेड प्लॅन, नाबार्ड बँक सबसिडी प्रोजेक्ट रिपोर्ट आणि व्हेरिफायड सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20मगरपट्टा/पुणे%20येथून%20आहे.%20मला%20ऑफलाइन%20मशरूम%20फार्मिंग%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
