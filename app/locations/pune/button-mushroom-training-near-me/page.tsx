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
  Clock,
  Home,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Button Mushroom Training Near Me – Mohammadwadi Pune | Organic Mushrooms Farm",
  description:
    "Mohammadwadi, NIBM Road जवळ button mushroom training. Growing residential area साठी सोयीस्कर वेळेत training. Basic equipment, spawn sourcing व batch care चे सविस्तर मार्गदर्शन.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-near-me",
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
      "Button Mushroom Training Near Me – Mohammadwadi Pune | Organic Mushrooms Farm",
    description:
      "Mohammadwadi, NIBM Road जवळ button mushroom training. Growing residential area साठी सोयीस्कर वेळेत training. Basic equipment, spawn sourcing व batch care चे सविस्तर मार्गदर्शन.",
    url: "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Button Mushroom Training Near Me – Mohammadwadi Pune | Organic Mushrooms Farm",
    description:
      "Mohammadwadi, NIBM Road जवळ button mushroom training. Growing residential area साठी सोयीस्कर वेळेत training. Basic equipment, spawn sourcing व batch care चे सविस्तर मार्गदर्शन.",
  },
};

const faqs = [
  {
    q: "Evening batch उपलब्ध आहे का?",
    a: "हो, working professional लोकांसाठी evening slots आणि weekend batches उपलब्ध आहेत, ज्यामुळे तुम्ही नोकरी सांभाळून हे प्रशिक्षण सहज पूर्ण करू शकता.",
  },
  {
    q: "कोणती basic equipment लागते?",
    a: "Training मध्ये संपूर्ण equipment list दिली जाते. यात प्रामुख्याने हायग्रोमीटर (तापमान व आर्द्रता मोजण्यासाठी), स्प्रेअर, प्लास्टिक शीट्स, स्पॉन, निर्जंतुक कंपोस्ट बॅग्ज आणि रॅक्सचा समावेश असतो. हे साहित्य पुण्यात सहज कुठे मिळेल याचे मार्गदर्शनही केले जाते.",
  },
  {
    q: "अपार्टमेंट किंवा फ्लॅटमधील लहान खोलीत बटन मशरूम पिकवता येतात का?",
    a: "होय, Mohammadwadi आणि NIBM परिसरातील अनेक रहिवासी 10x10 फुटांची अतिरिक्त खोली, बाल्कनी किंवा बेसमेंटमध्ये लहान ग्रो टेंट उभारून दरमहा 40 ते 50 किलो बटन मशरूमचे यशस्वी उत्पादन घेत आहेत.",
  },
  {
    q: "पहिल्या बॅचसाठी दर्जेदार स्पॉन (बियाणे) कुठे मिळेल?",
    a: "आमच्या लॅब-सर्टिफाइड फार्मवरून शुद्ध व उच्च उत्पादनक्षम बटन मशरूम स्पॉन थेट कुरिअरद्वारे Mohammadwadi, Kondhwa आणि संपूर्ण पुण्यात 2-3 दिवसांत घरपोच पोहोचवले जाते.",
  },
  {
    q: "बटन मशरूमसाठी तापमान कसे नियंत्रित करावे?",
    a: "फ्रूटिंग दरम्यान 14°C ते 18°C तापमान आवश्यक असते. हिवाळ्यात पुण्यात हे तापमान नैसर्गिकरित्या मिळते. इतर ऋतूंमध्ये इन्सुलेशन किंवा लहान पोर्टेबल कुलर/एसी वापरून सहज नियंत्रण करता येते.",
  },
  {
    q: "प्रशिक्षण पूर्ण झाल्यावर विक्रीसाठी बाजारपेठ कशी शोधावी?",
    a: "Mohammadwadi, Salunke Vihar, NIBM आणि Wanowrie परिसरातील स्थानिक सोसायट्या, ऑरगॅनिक स्टोअर्स, तसेच मार्केट यार्डमधील व्यापाऱ्यांना थेट पुरवठा करण्याचे प्रॅक्टिकल मार्केटिंग तंत्र प्रशिक्षणात शिकवले जाते.",
  },
];

export default function ButtonMushroomTrainingNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-near-me";

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
        name: "Button Mushroom Training Near Me – Mohammadwadi Pune | Organic Mushrooms Farm",
        description:
          "Mohammadwadi, NIBM Road जवळ button mushroom training. Growing residential area साठी सोयीस्कर वेळेत training. Basic equipment, spawn sourcing व batch care चे सविस्तर मार्गदर्शन.",
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
            name: "Button Mushroom Training Near Me",
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
      id="button-mushroom-training-near-me-page"
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
            Button Mushroom Training Near Me
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
            <span>Mohammadwadi, NIBM Road & South Pune Urban Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Mohammadwadi, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Button Mushroom Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>सोयीस्कर Evening व Weekend बॅचेस</span>
            <span>•</span>
            <span>अर्बन मशरूम फार्मिंग</span>
            <span>•</span>
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              बटन मशरूम गाईड
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Harvesting fresh button mushrooms in indoor room near Mohammadwadi Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Indoor button mushroom cultivation setup & harvesting practice for urban growers in Mohammadwadi, Pune.
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
              मोहम्मदवाडी व NIBM रोड परिसरात सोयीस्कर वेळेत बटन मशरूम प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Mohammadwadi हा NIBM Road जवळचा एक वेगाने वाढणारा residential area आहे</strong>, जिथे नवीन apartments आणि societies मोठ्या प्रमाणावर उभ्या होत आहेत. इथल्या रहिवाशांसाठी आमचं training सोयीस्कर वेळेत — विशेषतः <strong>evening आणि weekend slots</strong> मध्ये ठेवलं आहे.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            या प्रशिक्षणामध्ये{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom growing
            </Link>{" "}
            साठी लागणारी <strong>basic equipment list</strong>, उच्च दर्जाच्या{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              स्पॉनचे सोर्सिंग (Mushroom Spawn)
            </Link>
            , आणि पहिल्या बॅचची अचूक काळजी कशी घ्यायची हे प्रत्यक्ष सोप्या भाषेत शिकवलं जातं.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे प्रशिक्षण विशेषतः <strong>Mohammadwadi, NIBM Annexe, Kondhwa, Wanowrie, Salunke Vihar आणि Undri</strong> भागातील नोकरदार वर्ग, व्यावसायिक, गृहिणी व युवा शेती-उद्योजकांसाठी अत्यंत फायदेशीर ठरत आहे.
          </p>
        </section>

        {/* Section 1: Practical Urban & Residential Setup */}
        <section
          id="urban-setup"
          aria-labelledby="urban-setup-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Home className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="urban-setup-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. घरामध्ये किंवा अपार्टमेंटमध्ये बटन मशरूम शेती कशी करावी?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            बटन मशरूम (<em>White Button Mushroom</em>) साठी मोठ्या शेताची गरज नसते. बंदिस्त वातावरण, योग्य तापमान आणि स्वच्छता असल्यास तुम्ही खालील जागांवर यशस्वी उत्पादन घेऊ शकता:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>10x10 Spare Room</span>
              </strong>
              <span className="text-slate-600 dark:text-slate-300 leading-relaxed block">
                कोणतीही मोकळी खोली किंवा गॅरेजमध्ये 4 थरांचे रॅक लावून 50 ते 60 कंपोस्ट बॅग्ज सहज ठेवता येतात.
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Basement किंवा शेड</span>
              </strong>
              <span className="text-slate-600 dark:text-slate-300 leading-relaxed block">
                तळघरात नैसर्गिकरित्या तापमान कमी व आर्द्रता जास्त राहते, ज्यामुळे ऊर्जेचा खर्च खूप कमी होतो.
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>पोर्टेबल ग्रो टेंट</span>
              </strong>
              <span className="text-slate-600 dark:text-slate-300 leading-relaxed block">
                अपार्टमेंट फ्लॅट्समध्ये स्वच्छतेसाठी मायक्रो-क्लायमेट ग्रो टेंट वापरून घरगुती ताज्या मशरूमचे उत्पादन घेता येते.
              </span>
            </div>
          </div>
        </section>

        {/* Section 2: Basic Equipment & Temperature Control */}
        <section
          id="equipment-control"
          aria-labelledby="equipment-control-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Thermometer className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="equipment-control-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. आवश्यक साहित्य (Basic Equipment List) आणि तापमान नियंत्रण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            प्रशिक्षणात सांगितल्यानुसार खालील मूलभूत साधनांच्या मदतीने कोणतीही व्यक्ती पहिल्याच प्रयत्नात भरघोस पीक घेऊ शकते:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Thermometer className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>डिजिटल थर्मो-हायग्रोमीटर:</strong> खोलीतील तापमान (14-18°C) आणि सापेक्ष आर्द्रता (85-90%) सतत मॉनिटर करण्यासाठी अत्यंत महत्त्वाचे उपकरण.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>अल्ट्रासोनिक फॉगर / स्प्रेअर:</strong> कंपोस्ट बेड आणि हवेत योग्य ओलावा टिकवण्यासाठी सूक्ष्म पाण्याचे तुषार सोडणारे फॉगर्स.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Wind className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>एक्झॉस्ट फॅन व HEPA फिल्टर:</strong> फ्रूटिंग स्टेजमध्ये कार्बन डायऑक्साइड (CO2) बाहेर काढून ताजी हवा (Fresh Air Exchange) पुरवण्यासाठी.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सॅनिटायझेशन व हायजिन किट:</strong> ट्रायकोडर्मा किंवा हिरव्या बुरशीपासून संरक्षण करण्यासाठी फॉर्मेलिन / स्पिरिट सॅनिटायझेशन पद्धती.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Step-by-Step Training Syllabus & Batches */}
        <section
          id="syllabus"
          aria-labelledby="syllabus-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="syllabus-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. प्रशिक्षण अभ्यासक्रम (Training Syllabus)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>मॉड्यूल 1: कंपोस्ट व बॅग तयारी</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                पाश्चरायझेशन पद्धत, रेडीमेड कंपोस्ट बॅग्सची निवड आणि स्पॉन मिक्सिंगचे प्रमाण.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>मॉड्यूल 2: स्पॉन रन आणि मायसेलियम</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                22°C ते 25°C तापमानात 12 ते 15 दिवसांत संपूर्ण कंपोस्ट पांढरे शुभ्र होईपर्यंतची काळजी.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>मॉड्यूल 3: कॅसिंग सॉईल व पिनहेड निर्मिती</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                निर्जंतुक कॅसिंग मातीचा थर लावणे, पाण्याचा फवारा आणि छोट्या पिनहेड्सचे रक्षण.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>मॉड्यूल 4: तोडणी, पॅकिंग व विक्री</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                पहिली, दुसरी व तिसरी तोडणी (flushes), 200 ग्रॅम पनेट पॅकिंग आणि स्थानिक सोसायटींमध्ये थेट विक्री.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Local Demand & Sales in Mohammadwadi, NIBM & Pune */}
        <section
          id="local-market"
          aria-labelledby="local-market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Store className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="local-market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              4. स्थानिक बाजारपेठ आणि विक्री संधी (High-Profit Local Market)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            NIBM, Salunke Vihar, आणि Mohammadwadi मधील उच्चभ्रू सोसायट्यांमध्ये ताज्या आणि केमिकल-फ्री ऑरगॅनिक बटन मशरूमला प्रचंड मागणी आहे. सुपरमार्केटमध्ये येणारे मशरूम 2 ते 3 दिवस जुने असतात, त्यामुळे <strong>फार्म-फ्रेश बटन मशरूम</strong> थेट ₹200 ते ₹250 प्रति किलो सहज विकले जातात.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            शिवाय, मोठ्या प्रमाणावर उत्पादन झाल्यास जवळच असलेल्या हडपसर भाजी मंडई किंवा गुलटेकडी मार्केट यार्डमध्ये दररोज घाऊक विक्री करता येते.
          </p>
        </section>

        {/* Section 5: FAQs */}
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
              Frequently Asked Questions (बटन मशरूम ट्रेनिंग - वारंवार विचारले जाणारे प्रश्न)
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

        {/* Section 6: Training & Consultation CTA - Seamless & Translucent */}
        <section
          aria-labelledby="training-cta-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="training-cta-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              आजच Mohammadwadi, Pune बटन मशरूम ट्रेनिंगमध्ये नाव नोंदवा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              घरच्या घरी किंवा व्यावसायिक स्तरावर बटन मशरूम शेती सुरू करण्यासाठी आमचे ऑनलाईन व ऑफलाईन ट्रेनिंग प्रोग्रॅम्स उपलब्ध आहेत. सोयीस्कर इव्हनिंग व वीकेंड स्लॉट्ससह त्वरित सुरुवात करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  मूलभूत मशरूम प्रशिक्षण (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                नवशिक्यांसाठी घरबसल्या ऑनलाईन व्हिडिओ लेक्चर्स, डिजिटल गाईड आणि व्हॉट्सॲप सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  व्यावसायिक कमर्शियल ब्लूप्रिंट (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                मोठ्या स्तरावरील फार्म सेटअप, तापमान नियंत्रण, बँक प्रोजेक्ट रिपोर्ट आणि खात्रीशीर स्थानिक मार्केट लिंकेज.
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
              href="/locations/pune/button-mushroom-class"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Manjri क्लास माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20मोहम्मदवाडी%20पुणे%20येथील%20बटन%20मशरूम%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
