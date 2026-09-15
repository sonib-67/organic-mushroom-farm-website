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
  Plane,
  Building2,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Button Mushroom Training Center – Lohegaon Pune | Organic Mushrooms Farm",
  description:
    "Lohegaon, Airport जवळ button mushroom training center. Hotel आणि catering industry साठी मोठी मागणी असलेला mushroom. Compost तयार करणे, casing layer व temperature control चे सविस्तर मार्गदर्शन.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-center",
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
      "Button Mushroom Training Center – Lohegaon Pune | Organic Mushrooms Farm",
    description:
      "Lohegaon, Airport जवळ button mushroom training center. Hotel आणि catering industry साठी मोठी मागणी असलेला mushroom. Compost तयार करणे, casing layer व temperature control चे सविस्तर मार्गदर्शन.",
    url: "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Button Mushroom Training Center – Lohegaon Pune | Organic Mushrooms Farm",
    description:
      "Lohegaon, Airport जवळ button mushroom training center. Hotel आणि catering industry साठी मोठी मागणी असलेला mushroom. Compost तयार करणे, casing layer व temperature control चे सविस्तर मार्गदर्शन.",
  },
};

const faqs = [
  {
    q: "Button mushroom साठी temperature control किती important आहे?",
    a: "अतिशय महत्त्वाचे आहे. स्पॉन रनसाठी 22°C ते 25°C आणि फ्रूटिंग (मशरूम बहरण्यासाठी) 14°C ते 18°C तापमान आणि 85-90% आर्द्रता लागते. ट्रेनिंगमध्ये योग्य temperature range आणि ते कमी खर्चात राखण्याच्या सोप्या पद्धती प्रत्यक्ष शिकवल्या जातात.",
  },
  {
    q: "Hotels आणि catering services ला supply करण्याबाबत माहिती मिळते का?",
    a: "हो, Lohegaon, Viman Nagar आणि Pune Airport परिसरातील हॉटेल्स, लक्झरी रिसॉर्ट्स आणि केटरिंग सर्व्हिसेससोबत दीर्घकालीन सप्लाय करार (B2B supply contracts) कसे करावेत याबद्दल सविस्तर गाईडन्स दिली जाते.",
  },
  {
    q: "Compost तयार करणे आणि Casing layer चे प्रशिक्षण प्रत्यक्ष मिळते का?",
    a: "होय, गव्हाच्या पेंढ्यापासून हाय-क्वालिटी कंपोस्ट बनवणे, पाश्चरायझेशन टनेल तंत्रज्ञान आणि निर्जंतुक कॅसिंग मातीचा 3-4 सेमी थर कसा द्यायचा हे प्रत्यक्ष हाताने करून दाखवले जाते.",
  },
  {
    q: "लोहगाव व वाघोली भागातून सेंटरवर कसे पोहोचता येते?",
    a: "लोहगाव विमानतळ रोड, वाघोली किंवा धानोरीवरून आमचे केंद्र अवघ्या 15 ते 20 मिनिटांच्या सोयीस्कर अंतरावर आहे.",
  },
  {
    q: "घरामध्ये किंवा छोट्या शेडमध्ये लागवड करता येते का?",
    a: "होय, 10x12 फुटांच्या बंदिस्त खोलीत किंवा इन्सुलेटेड शेडमध्ये 4-थरी व्हर्टिकल रॅक सिस्टीम बसवून 50 ते 60 बॅग्सपासून दर 60 दिवसांत 45 ते 60 किलो फ्रेश बटन मशरूम उत्पादन घेता येते.",
  },
  {
    q: "प्रशिक्षणानंतर दर्जेदार बियाणे (Spawn) कुठे मिळेल?",
    a: "आमच्या लॅब-प्रमाणित युनिटमधून उच्च दर्जाचे बटन मशरूम स्पॉन थेट दिले जाते, ज्यामुळे निरोगी मायसेलियम आणि जास्तीत जास्त उत्पादन मिळते.",
  },
];

export default function ButtonMushroomTrainingCenterPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-center";

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
        name: "Button Mushroom Training Center – Lohegaon Pune | Organic Mushrooms Farm",
        description:
          "Lohegaon, Airport जवळ button mushroom training center. Hotel आणि catering industry साठी मोठी मागणी असलेला mushroom. Compost तयार करणे, casing layer व temperature control चे सविस्तर मार्गदर्शन.",
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
            name: "Button Mushroom Training Center",
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
      id="button-mushroom-training-center-page"
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
            Button Mushroom Training Center
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
            <Plane className="w-3.5 h-3.5 text-emerald-500" />
            <span>Lohegaon, Airport, Wagholi & Viman Nagar Commercial Agribusiness</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Lohegaon, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Button Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>हॉटेल व केटरिंग मार्केट लिंकेज</span>
            <span>•</span>
            <span>कंपोस्ट, कॅसिंग व तापमान नियंत्रण</span>
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
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Button mushroom indoor growing room and training facility near Lohegaon Pune Airport"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Indoor climate-controlled button mushroom facility serving growers in Lohegaon, Wagholi, and Viman Nagar Pune.
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
              लोहगाव, विमानतळ व पूर्व पुण्यासाठी विशेष बटन मशरूम ट्रेनिंग केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Lohegaon भाग Pune Airport जवळ असल्यामुळे इथे अनेक hotels, catering services आणि restaurants आहेत</strong>, जिथे button mushroom ची मागणी कायम उच्च स्तरावर असते.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमचं <strong>training center याच local demand लक्षात घेऊन</strong>{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom cultivation
            </Link>{" "}
            वर खास भर देतं —{" "}
            <Link
              href="/compost-unit"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              compost तयार करणं
            </Link>
            , casing layer, आणि temperature control या सगळ्या टप्प्यांची सविस्तर माहिती प्रत्यक्ष प्रात्यक्षिकासह दिली जाते.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Lohegaon, Wagholi, Dhanori आणि Viman Nagar</strong> जवळील इच्छुक शेतकरी, व्यावसायिक, नोकरदार व महिला उद्योजकांसाठी हे केंद्र अत्यंत उपयुक्त आणि जवळचे आहे.
          </p>
        </section>

        {/* Section 1: Core Cultivation Pillars (Compost, Casing, Temperature) */}
        <section
          id="cultivation-pillars"
          aria-labelledby="pillars-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="pillars-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. बटन मशरूम लागवडीचे 3 मुख्य वैज्ञानिक स्तंभ
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            बटन मशरूमचे भरघोस आणि दर्जेदार उत्पादन मिळवण्यासाठी खालील तीन तांत्रिक टप्पे अचूकपणे सांभाळणे अत्यंत गरजेचे असते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Droplets className="w-3.5 h-3.5 shrink-0" />
                <span>कंपोस्ट मेकिंग (Compost)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                गव्हाचा पेंढा, कोंबडी खत, जिप्सम व युरियाचे शास्त्रीय गुणोत्तर आणि 58-60°C पाश्चरायझेशन टनेल तंत्रज्ञान.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>कॅसिंग थर (Casing Soil)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                मायसेलियम जाळे पसरल्यावर निर्जंतुक कॉयर पिथ किंवा पीट मॉसचा 3-4 सेमी थर देऊन पिनहेड्स वेगाने वाढवणे.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px]">
                <Thermometer className="w-3.5 h-3.5 shrink-0" />
                <span>तापमान व आर्द्रता नियंत्रण</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                स्पॉन रनसाठी 22-25°C आणि फ्रूटिंग काळात 14-18°C व 85-90% RH चे स्वस्त ऑटोमेशन शिकवले जाते.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Airport, Hotel & Catering Market Linkage */}
        <section
          id="hotel-catering-demand"
          aria-labelledby="market-linkage-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Building2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-linkage-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. पुणे विमानतळ, हॉटेल्स व केटरिंग मार्केट लिंकेज
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            लोहगाव व विमाननगर पट्ट्यात अनेक नामांकित हॉटेल्स, कॉन्फरन्स सेंटर्स, वेडिंग लॉन्स आणि केटरिंग ऑपरेटर्स कार्यरत आहेत. बाजारातील शिळ्या मशरूमपेक्षा स्थानिक पातळीवर पिकवलेल्या ताज्या बटन मशरूमला हे खरेदीदार प्राधान्य देतात:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Store className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हॉस्पिटॅलिटी व रेस्टॉरंट्स सप्लाय:</strong> विमाननगर आणि नगर रोडवरील रेस्टॉरंट्सना दररोज सकाळी फ्रेश 200 ग्रॅम पनेट पॅक्स पुरवठा (₹200 - ₹240/किग्रा दर).
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>लक्झरी केटरिंग कंत्राटे:</strong> लग्न व कॉर्पोरेट इव्हेंट्ससाठी 50 ते 100 किलोचे बल्क ऑर्डर्स थेट मिळवण्याची रणनीती.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्थानिक रेसिडेन्शिअल सोसायट्या:</strong> लोहगाव व वाघोली परिसरातील मोठ्या गृहनिर्माण संस्थांमध्ये व्हॉट्सॲपवरून आठवडी थेट ग्राहकोपयोगी विक्री.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Why Choose This Center */}
        <section
          id="center-features"
          aria-labelledby="features-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="features-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. लोहगाव केंद्रात शिकण्याचे महत्त्वाचे फायदे
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white block">प्रत्यक्ष प्रात्यक्षिक अनुभव:</strong>
              <span className="text-slate-600 dark:text-slate-300">
                केवळ पुस्तकी ज्ञान न देता प्रत्यक्ष कंपोस्ट हाताळणी,{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  मशरूम स्पॉन
                </Link>{" "}
                मिसळणे आणि बहरलेले मशरूम तोडण्याचे प्रात्यक्षिक.
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white block">कमी गुंतवणुकीत सुरुवात:</strong>
              <span className="text-slate-600 dark:text-slate-300">
                मोठ्या AC प्लांटऐवजी स्थानिक कुलर, फॉगर्स व शेडनेट वापरून कमी बजेटमध्ये युनिट सुरू करण्याची पद्धत.
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white block">स्थानिक कच्चा माल पत्ते:</strong>
              <span className="text-slate-600 dark:text-slate-300">
                पुणे आणि शिरूर भागातील दर्जेदार पेंढा, निर्जंतुक बॅग्ज आणि केमिकल्स खरेदीचे थेट संपर्क.
              </span>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <strong className="text-slate-900 dark:text-white block">आजीवन व्हॉट्सॲप सपोर्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">
                पहिल्या बॅचदरम्यान तापमान, बुरशी किंवा किडींची समस्या आल्यास तज्ज्ञांकडून त्वरित मार्गदर्शन.
              </span>
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
              Frequently Asked Questions (लोहगाव ट्रेनिंग सेंटरविषयी प्रश्न)
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
              आजच Lohegaon जवळील बटन मशरूम ट्रेनिंग सेंटरमध्ये सहभागी व्हा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              हॉटेल आणि केटरिंग उद्योगात वाढणाऱ्या बटन मशरूमच्या मागणीचा फायदा घ्या. व्यावसायिक पद्धतीने कंपोस्टिंग, तापमान नियंत्रण आणि मार्केट लिंकेज शिकून स्वतःचा यशस्वी व्यवसाय उभा करा.
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
                नवशिक्यांसाठी होम-स्केल लागवड, तापमान नियंत्रण आणि डिजिटल मॅन्युअल.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल फार्म ब्लूप्रिंट (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                कमर्शियल व्हर्टिकल रॅक्स, पाश्चरायझेशन टनेल, बँक DPR आणि B2B हॉटेल लिंकेज.
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
              href="/locations/pune/button-mushroom-training-center-near-me"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Wadgaon Sheri सेंटर माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20लोहगाव%20पुणे%20येथील%20बटन%20मशरूम%20ट्रेनिंग%20सेंटरबाबत%20माहिती%20हवी%20आहे."
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
