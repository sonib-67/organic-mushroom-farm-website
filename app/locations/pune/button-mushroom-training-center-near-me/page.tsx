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
  Navigation,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Button Mushroom Training Center Near Me – Wadgaon Sheri Pune | Organic Mushrooms Farm",
  description:
    "Wadgaon Sheri जवळ button mushroom training center शोधताय? Organic Mushrooms Farm चं nearby केंद्र इथे उपलब्ध आहे. Compost preparation पासून harvesting पर्यंतचे सविस्तर प्रात्यक्षिक प्रशिक्षण.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-center-near-me",
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
      "Button Mushroom Training Center Near Me – Wadgaon Sheri Pune | Organic Mushrooms Farm",
    description:
      "Wadgaon Sheri जवळ button mushroom training center शोधताय? Organic Mushrooms Farm चं nearby केंद्र इथे उपलब्ध आहे. Compost preparation पासून harvesting पर्यंतचे सविस्तर प्रात्यक्षिक प्रशिक्षण.",
    url: "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-center-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Button Mushroom Training Center Near Me – Wadgaon Sheri Pune | Organic Mushrooms Farm",
    description:
      "Wadgaon Sheri जवळ button mushroom training center शोधताय? Organic Mushrooms Farm चं nearby केंद्र इथे उपलब्ध आहे. Compost preparation पासून harvesting पर्यंतचे सविस्तर प्रात्यक्षिक प्रशिक्षण.",
  },
};

const faqs = [
  {
    q: "Wadgaon Sheri मधून center किती दूर आहे?",
    a: "साधारण 15 ते 20 मिनिटांच्या सुलभ अंतरावर आहे. खराडी, कल्याणी नगर किंवा विमाननगरवरून नगर रोडने सहज पोहोचता येते.",
  },
  {
    q: "Compost preparation स्वतः शिकवलं जातं का?",
    a: "हो, गव्हाचा पेंढा, कोंबडी खत, जिप्सम आणि युरिया वापरून शास्त्रीय पद्धतीने कंपोस्ट कसं तयार करायचं हे प्रत्यक्ष हाताने व प्रात्यक्षिकासह दाखवलं जातं.",
  },
  {
    q: "नोकरदार लोकांसाठी वीकेंडला प्रॅक्टिकल बॅचेस असतात का?",
    a: "होय, वडगाव शेरी व खराडी आयटी पार्कमधील नोकरदार आणि व्यावसायिकांसाठी शनिवार आणि रविवारी विशेष हँड्स-ऑन बॅचेस आयोजित केल्या जातात.",
  },
  {
    q: "प्रशिक्षणानंतर दर्जेदार स्पॉन (बियाणे) खरेदी करता येते का?",
    a: "होय, आमच्या लॅब-सर्टिफाइड ब्रीडिंग युनिटमधून उच्च दर्जाचे बटन मशरूम स्पॉन थेट उपलब्ध करून दिले जाते किंवा घरपोच पाठवले जाते.",
  },
  {
    q: "कमीत कमी जागेत किती उत्पादन घेता येते?",
    a: "10x12 फुटांच्या खोलीत 4-थरी व्हर्टिकल रॅक्सवर 50 ते 60 बॅग्ज ठेवून दर 60 दिवसांच्या एका सायकलमध्ये 45 ते 60 किलो ताजे बटन मशरूम सहज पिकवता येतात.",
  },
  {
    q: "तयार बटन मशरूम विक्रीसाठी जवळची बाजारपेठ कोणती?",
    a: "वडगाव शेरी, खराडी, कल्याणी नगर व कोरेगाव पार्क येथील प्रीमियम रेस्टॉरंट्स, स्थानिक सोसायट्या, तसेच हडपसर भाजी बाजारात थेट घाऊक व किरकोळ विक्री करता येते.",
  },
];

export default function ButtonMushroomTrainingCenterNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/button-mushroom-training-center-near-me";

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
        name: "Button Mushroom Training Center Near Me – Wadgaon Sheri Pune | Organic Mushrooms Farm",
        description:
          "Wadgaon Sheri जवळ button mushroom training center शोधताय? Organic Mushrooms Farm चं nearby केंद्र इथे उपलब्ध आहे. Compost preparation पासून harvesting पर्यंतचे सविस्तर प्रात्यक्षिक प्रशिक्षण.",
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
            name: "Button Mushroom Training Center Near Me",
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
      id="button-mushroom-training-center-near-me-page"
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
            Button Mushroom Training Center Near Me
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
            <span>Wadgaon Sheri, Kharadi & Viman Nagar Agribusiness Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Wadgaon Sheri, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Button Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>हॅन्ड्स-ऑन प्रॅक्टिकल केंद्र</span>
            <span>•</span>
            <span>कंपोस्ट ते हार्वेस्टिंग सविस्तर मार्गदर्शन</span>
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
              alt="Mushroom cultivation area and practical training facility near Wadgaon Sheri Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Hands-on practical mushroom cultivation area & compost bedding facility accessible from Wadgaon Sheri, Pune.
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
              वडगाव शेरी व पूर्व पुण्यासाठी खात्रीशीर मशरूम ट्रेनिंग सेंटर
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Wadgaon Sheri हा Kharadi आणि Viman Nagar च्या मधला एक वेगाने वाढणारा area आहे</strong>, जिथून <em>&quot;button mushroom training center near me&quot;</em> शोधणाऱ्या लोकांची संख्या सतत वाढत आहे. आमचं केंद्र इथून सहज पोहोचण्यासारख्या <strong>15-20 मिनिटांच्या अंतरावर</strong> उपलब्ध आहे.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            या प्रशिक्षणामध्ये{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              button mushroom cultivation
            </Link>{" "}
            मधील{" "}
            <Link
              href="/compost-unit"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              compost preparation
            </Link>{" "}
            पासून ते थेट harvesting पर्यंतची संपूर्ण प्रक्रिया प्रत्यक्ष हाताने दाखवली जाते. नवीन रहिवासी, आयटी प्रोफेशनल आणि स्थानिक उद्योजकांसाठी हे एक अत्यंत विश्वासार्ह आणि जवळचं केंद्र बनलेलं आहे.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            हे केंद्र विशेषतः <strong>Wadgaon Sheri, Kharadi, Viman Nagar, Kalyani Nagar, Tingre Nagar, Dhanori आणि Wagholi</strong> परिसरातील इच्छुकांसाठी सोयीस्कर ठरते.
          </p>
        </section>

        {/* Section 1: Hands-on Practical Training Structure */}
        <section
          id="practical-training"
          aria-labelledby="practical-training-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="practical-training-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. प्रत्यक्ष प्रात्यक्षिक प्रशिक्षण (Hands-on Practical Training)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या ट्रेनिंग सेंटरमध्ये केवळ थिअरी नव्हे, तर प्रत्यक्ष हाताने काम करण्याचा अनुभव मिळतो:
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>कंपोस्ट मेकिंग व पाश्चरायझेशन</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                गव्हाचा पेंढा ओला करणे, पलटणींचे वेळापत्रक, नायट्रोजन बॅलन्स आणि पाश्चरायझेशन टनेलचे कार्य प्रत्यक्ष शिकणे.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>स्पॉनिंग आणि मायसेलियम रन</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                लॅब-सर्टिफाइड{" "}
                <Link
                  href="/spawn-seed"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  मशरूम स्पॉन
                </Link>{" "}
                कंपोस्ट बॅग्जमध्ये मिसळून 22-25°C वर स्पॉन रन करण्याची योग्य पद्धत.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>कॅसिंग माती थर व पिनहेडिंग</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                पीट मॉस किंवा कॉयर पिथचा 3-4 सेमी निर्जंतुक थर देऊन पिनहेड्स वेगाने कसे तयार करायचे याचे प्रॅक्टिकल ज्ञान.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <h3 className="text-[12px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>तापमान, आर्द्रता व फ्रूटिंग केअर</span>
              </h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                14°C ते 18°C तापमान आणि 85-90% आर्द्रतेचे ऑटोमेशन, फ्रूटिंग फ्लश काढणे आणि ग्रेडिंग-पॅकिंग.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Center Near Wadgaon Sheri */}
        <section
          id="why-choose-center"
          aria-labelledby="why-choose-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Navigation className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="why-choose-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. वडगाव शेरी जवळील या केंद्राची वैशिष्ट्ये
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            खराडी आणि विमाननगर परिसरातील नागरिकांसाठी हे केंद्र सर्वात जवळचे आणि अत्यंत सोयीचे आहे:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कमी अंतरावरील संपर्क:</strong> नगर रोड, खराडी बायपास आणि कल्याणी नगरवरून अवघ्या 15 ते 20 मिनिटांत प्रत्यक्ष भेट देऊन मार्गदर्शन घेता येते.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <Thermometer className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>प्रत्यक्ष लाईव्ह फार्म व्हिजिट:</strong> कार्यरत ग्रो रूम्स, व्हर्टिकल रॅक्स आणि ऑटोमॅटिक फॉगर्स चालू स्थितीत बघण्याची संधी.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कच्च्या मालाची स्थानिक उपलब्धता:</strong> पुण्यात लागणारे पेंढा, निर्जंतुक कंपोस्ट बॅग्ज, हायग्रोमीटर आणि स्पॉन सहज कुठून मिळवायचे याचे संपूर्ण पत्ते व संपर्क.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>आजीवन तांत्रिक सपोर्ट:</strong> पहिल्या बॅचपासून ते व्यावसायिक विस्तार होईपर्यंत आमच्या तज्ज्ञांकडून सातत्यपूर्ण पाठबळ.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: High Demand in Kharadi, Viman Nagar & Pune East */}
        <section
          id="pune-east-demand"
          aria-labelledby="east-demand-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Store className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="east-demand-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. पूर्व पुण्यातील हॉटेल्स व सोसायट्यांमध्ये मोठी मागणी
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            खराडी आयटी पार्क, विमाननगर, कल्याणी नगर आणि कोरेगाव पार्क हा परिसर पुण्यातील सर्वात मोठा फूड व हॉस्पिटॅलिटी हब मानला जातो. येथील फाईव्ह-स्टार हॉटेल्स, कॅफे, पिझ्झेरिया आणि स्थानिक सोसायट्यांमध्ये दररोज ताज्या बटन मशरूमला खूप मोठी मागणी असते.
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">प्रीमियम कॅफे व हॉटेल्स:</strong>
              <span className="text-slate-600 dark:text-slate-300">कोरेगाव पार्क व कल्याणी नगरमधील रेस्टॉरंट्सना थेट डेली डिलिव्हरी.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">आयटी रेसिडेन्शिअल सोसायट्या:</strong>
              <span className="text-slate-600 dark:text-slate-300">खराडी व वडगाव शेरीतील सोसायट्यांमध्ये व्हॉट्सॲप ग्रुपद्वारे थेट फार्म-फ्रेश विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">भाजी मंडई घाऊक बाजार:</strong>
              <span className="text-slate-600 dark:text-slate-300">वाघोली व हडपसर घाऊक बाजारात अतिरिक्त व्हॉल्यूमची त्वरित रोकड विक्री.</span>
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
              Frequently Asked Questions (ट्रेनिंग सेंटरविषयी विचारले जाणारे प्रश्न)
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
              आजच Wadgaon Sheri जवळच्या ट्रेनिंग सेंटरमध्ये नाव नोंदवा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              स्वतःचा बटन मशरूम व्यवसाय सुरू करण्यासाठी आमच्या प्रात्यक्षिक प्रशिक्षण वर्गात सहभागी व्हा. कंपोस्टिंगपासून ते पॅकिंग आणि स्थानिक विक्रीपर्यंत सर्व टप्प्यांचे व्यावहारिक ज्ञान मिळवा.
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
                नवशिक्यांसाठी ऑनलाईन व्हिडिओ सेशन्स, डिजिटल मॅन्युअल आणि व्हॉट्सॲप कन्सल्टेशन.
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
                मोठ्या स्तरावरील फार्म प्लॅनिंग, कंपोस्ट पाश्चरायझेशन टनेल, बँक DPR आणि मार्केट लिंकेज.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20वडगाव%20शेरी%20पुणे%20येथील%20बटन%20मशरूम%20ट्रेनिंग%20सेंटरबाबत%20माहिती%20हवी%20आहे."
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
