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
  Utensils,
  Coffee,
  Package,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Oyster Mushroom Training Center – Kalyani Nagar Pune | Organic Mushrooms Farm",
  description:
    "Kalyani Nagar मध्ये खास oyster mushroom साठी specialized training center. Gourmet आणि cafe market साठी उपयुक्त. Wheat straw, sawdust substrate, व हाय-एंड रेस्टॉरंट सप्लायचे प्रशिक्षण.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-training-center",
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
      "Oyster Mushroom Training Center – Kalyani Nagar Pune | Organic Mushrooms Farm",
    description:
      "Kalyani Nagar मध्ये खास oyster mushroom साठी specialized training center. Gourmet आणि cafe market साठी उपयुक्त. Wheat straw, sawdust substrate, व हाय-एंड रेस्टॉरंट सप्लायचे प्रशिक्षण.",
    url: "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Oyster Mushroom Training Center – Kalyani Nagar Pune | Organic Mushrooms Farm",
    description:
      "Kalyani Nagar मध्ये खास oyster mushroom साठी specialized training center. Gourmet आणि cafe market साठी उपयुक्त. Wheat straw, sawdust substrate, व हाय-एंड रेस्टॉरंट सप्लायचे प्रशिक्षण.",
  },
};

const faqs = [
  {
    q: "Cafes ला supply करण्याबद्दल मार्गदर्शन मिळतं का?",
    a: "हो, local market आणि gourmet cafes मध्ये supply कसा सुरू करायचा, B2B शेफ कॉन्टॅक्ट्स कसे बनवायचे याबद्दल practical tips आणि मार्केटिंग धोरण दिले जाते.",
  },
  {
    q: "Oyster mushroom साठी कोणता substrate best आहे?",
    a: "Training मध्ये wheat straw (गव्हाचा पेंढा) आणि sawdust (लाकडाचा भुसा) आधारित substrate दोन्ही प्रत्यक्ष प्रात्यक्षिकासह दाखवले जातात. व्यावसायिक उत्पादनासाठी पेंढा सर्वात जलद उत्पादन देतो.",
  },
  {
    q: "कल्याणी नगर व कोरेगाव पार्कच्या कॅफेजमध्ये मशरूम कोणत्या दराने विकले जातात?",
    a: "प्रीमियम कॅफेज, इटालियन बिस्ट्रो आणि व्हेगन रेस्टॉरंट्समध्ये दर्जेदार ताजे ऑयस्टर मशरूम ₹220 ते ₹280 प्रति किलो दराने खरेदी केले जातात.",
  },
  {
    q: "फ्रेश ऑयस्टर मशरूमची शेल्फ-लाईफ (Shelf-life) किती दिवस असते?",
    a: "सामान्य तापमानात 24 ते 36 तास, तर 4°C ते 8°C च्या व्हेंटिलेटेड चिलर किंवा फ्रिजमध्ये 200 ग्रॅम पन्नेट पॅकिंगमध्ये 5 ते 7 दिवस टवटवीत टिकवता येते.",
  },
  {
    q: "कमी जागेत किंवा गोडाऊनमध्ये व्यावसायिक सेटअप कसा सुरू करावा?",
    a: "15x20 फुटांच्या खोलीत किंवा शेडमध्ये 4-थरी रॅक सिस्टीम, एक्झॉस्ट फॅन आणि ह्युमिडिफायर लावून दरमहा 80 ते 120 किलो नियमित उत्पादन सहज घेता येते.",
  },
  {
    q: "ट्रेनिंगनंतर स्पॉन व टेक्निकल बॅकअप कसा मिळतो?",
    a: "आमच्या लॅब-प्रमाणित कल्चरमधून उच्च-उत्पादक ऑयस्टर स्पॉन (बियाणे) पुरवले जाते आणि व्हॉट्सॲपवर बॅच पूर्ण होईपर्यंत 100% हँड-होल्डिंग टेक्निकल सपोर्ट मिळतो.",
  },
];

export default function OysterMushroomTrainingCenterPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/oyster-mushroom-training-center";

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
        name: "Oyster Mushroom Training Center – Kalyani Nagar Pune | Organic Mushrooms Farm",
        description:
          "Kalyani Nagar मध्ये खास oyster mushroom साठी specialized training center. Gourmet आणि cafe market साठी उपयुक्त. Wheat straw, sawdust substrate, व हाय-एंड रेस्टॉरंट सप्लायचे प्रशिक्षण.",
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
            name: "Oyster Mushroom Training Center",
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
      id="oyster-mushroom-training-center-page"
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
            Oyster Mushroom Training Center
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
            <span>Kalyani Nagar, Koregaon Park & Viman Nagar Gourmet Mushroom Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Kalyani Nagar, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Oyster Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>खास Gourmet & Cafe Market वर लक्ष केंद्रित</span>
            <span>•</span>
            <span>Substrate तंत्रज्ञान व B2B पुरवठा</span>
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
              alt="Gourmet oyster mushroom cultivation and harvest crates in Kalyani Nagar Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Commercial oyster mushroom harvest batches packaged for upscale cafes and restaurants in Kalyani Nagar and Koregaon Park, Pune.
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
              कल्याणी नगर भागात खास Gourmet आणि Cafe Market साठी Specialized Training
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Kalyani Nagar भागात अनेक cafes आणि restaurants आहेत जिथे oyster mushroom ची मागणी सतत वाढत आहे.</strong> हीच संधी ओळखून आमचं training center खास oyster mushroom cultivation वर focused आहे — कोणत्या substrate वर सर्वात चांगलं उत्पादन येतं, कशी quality maintain करायची आणि local cafes/restaurants ला कसं supply करायचं, हे सगळं शिकवलं जातं.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Kalyani Nagar आणि Koregaon Park जवळच्या entrepreneurs साठी ही एक अत्यंत फायदेशीर business opportunity ठरू शकते.</strong>
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे केंद्र विशेषतः <strong>Kalyani Nagar, Koregaon Park, Wadgaon Sheri, Viman Nagar, Yerawada आणि Magarpatta</strong> मधील व्यावसायिक आणि नवउद्योजकांसाठी अत्यंत जवळचे व सोयीचे आहे.
          </p>
        </section>

        {/* Section 1: High-End HoReCa & Gourmet Demand */}
        <section
          id="gourmet-demand"
          aria-labelledby="demand-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Coffee className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="demand-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. कल्याणी नगर व कोरेगाव पार्क मधील HoReCa व कॅफे मार्केट
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्यातील पूर्व उपनगरांमध्ये पाश्चात्त्य आणि व्हेगन खाद्यसंस्कृती वेगाने लोकप्रिय होत आहे:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Utensils className="w-3.5 h-3.5 shrink-0" />
                <span>इटालियन व कॉन्टिनेन्टल बिस्ट्रो</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                पास्ता, रिसोट्टो आणि गॉरमेट पिझ्झासाठी ताज्या ऑयस्टर मशरूमची दैनिक 5 ते 10 किलोची नियमित खरेदी.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>प्रीमियम विक्री दर (₹220-₹280)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                सामान्य भाजी मंडईपेक्षा हॉरेका सेक्टरमध्ये उच्च दर्जाच्या अनब्लेमिश्ट मशरूमला 30-40% जादा दर मिळतो.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Package className="w-3.5 h-3.5 shrink-0" />
                <span>डायरेक्ट B2B सप्लाय करार</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                मध्यस्थांशिवाय (No Middlemen) थेट शेफ्सशी करार करून दर आठवड्याला 50 ते 100 किलोचा शाश्वत पुरवठा.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Substrate Science - Wheat Straw vs Sawdust */}
        <section
          id="substrate-science"
          aria-labelledby="substrate-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="substrate-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. सबस्ट्रेट निवड व तंत्रज्ञान: Wheat Straw vs Sawdust
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            गॉरमेट क्वालिटीचे जाड देठ आणि रुंद छत्र्या (Caps) मिळवण्यासाठी योग्य माध्यम निवडणे अत्यंत महत्त्वाचे आहे:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>गव्हाचा पेंढा (Wheat Straw - फास्टेस्ट यील्ड):</strong> मायसेलियम वेगाने पसरते (15-18 दिवस). 1 किलो कोरड्या पेंढ्यावर 800 ग्रॅम ते 1 किलो ताजे ऑयस्टर मशरूम मिळतात.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>लाकडाचा भुसा (Hardwood Sawdust - डेंस टेक्सचर):</strong> शेल्फ-लाईफ 2 दिवसांनी वाढते आणि मशरूमचा स्वाद अधिक गडद होतो. किंग ऑयस्टर आणि पिंक ऑयस्टरसाठी उत्तम.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>वैज्ञानिक निर्जंतुकीकरण व पाश्चरायझेशन:</strong> रासायनिक निर्जंतुकीकरण (Bavistin + Formalin) व उष्णजल निर्जंतुकीकरणाचे सुरक्षित व अचूक प्रमाण.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Commercial Packaging & Fresh Cold Chain */}
        <section
          id="packaging-cold-chain"
          aria-labelledby="packaging-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Store className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="packaging-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. पॅकेजिंग, शेल्फ-लाईफ आणि कोल्ड चेन व्यवस्थापन
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कॅफेज आणि सेंद्रिय दुकानांना पुरवठा करताना पॅकेजिंगची गुणवत्ता हीच तुमची ब्रँड ओळख ठरते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">200g पन्नेट ट्रे पॅकिंग:</strong>
              <span className="text-slate-600 dark:text-slate-300">मायक्रो-परफोरेटेड क्लिंग फिल्म वापरून मशरूम 5-7 दिवस फ्रेश आणि पांढरे ठेवणे.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सकाळचे हार्वेस्टिंग व डिलिव्हरी:</strong>
              <span className="text-slate-600 dark:text-slate-300">पहाटे 6 वाजता हार्वेस्ट करून सकाळी 9 च्या आत रेस्टॉरंट किचनमध्ये थेट ताजी डिलिव्हरी.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">किचन वेस्टपासून कंपोस्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">वापरलेल्या मशरूम बॅग्जचे उत्कृष्ट ऑरगॅनिक कंपोस्ट बनवून नर्सरींना विक्री.</span>
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
              Frequently Asked Questions (कल्याणी नगर सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              आजच Kalyani Nagar मधील Oyster Mushroom Training Center मध्ये नाव नोंदवा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              गॉरमेट कॅफे मार्केटला लक्ष्य करून व्यावसायिक ऑयस्टर मशरूम फार्मिंग सुरू करा. प्रगत सबस्ट्रेट पद्धती, शेल्फ-लाईफ व्यवस्थापन आणि थेट रेस्टॉरंट पुरवठ्याचे कौशल्य आत्मसात करा.
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
                घरगुती ऑयस्टर मशरूम लागवड, व्हिडिओ ट्यूटोरियल्स, ई-बुक आणि मार्गदर्शन.
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
                HoReCa पुरवठा करार, कोल्ड चेन पॅकेजिंग, शेड प्लॅनिंग आणि डायरेक्ट B2B मार्केटिंग.
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
              href="/locations/pune/oyster-mushroom-training-near-me"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Vishrantwadi सेंटर माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20कल्याणी%20नगर%20पुणे%20येथील%20ऑयस्टर%20मशरूम%20ट्रेनिंग%20सेंटरबाबत%20माहिती%20हवी%20आहे."
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
