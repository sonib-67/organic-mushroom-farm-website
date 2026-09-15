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
  Clock,
  Compass,
  GraduationCap,
  Layers,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Course Near Me – Yerwada Pune | Organic Mushrooms Farm",
  description:
    "Yerwada भागात राहता आणि nearby mushroom course शोधताय? Organic Mushrooms Farm चं सोयीस्कर केंद्र इथे उपलब्ध आहे. वीकेंड प्रॅक्टिकल बॅचेस, हँड्स-ऑन सराव व शेफ लिंकेज.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-course-near-me",
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
    title: "Mushroom Course Near Me – Yerwada Pune | Organic Mushrooms Farm",
    description:
      "Yerwada भागात राहता आणि nearby mushroom course शोधताय? Organic Mushrooms Farm चं सोयीस्कर केंद्र इथे उपलब्ध आहे. वीकेंड प्रॅक्टिकल बॅचेस, हँड्स-ऑन सराव व शेफ लिंकेज.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-course-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Course Near Me – Yerwada Pune | Organic Mushrooms Farm",
    description:
      "Yerwada भागात राहता आणि nearby mushroom course शोधताय? Organic Mushrooms Farm चं सोयीस्कर केंद्र इथे उपलब्ध आहे. वीकेंड प्रॅक्टिकल बॅचेस, हँड्स-ऑन सराव व शेफ लिंकेज.",
  },
};

const faqs = [
  {
    q: "Course किती कालावधीचा आहे?",
    a: "आमचा basic hands-on course अर्धा दिवस ते एक दिवस इतक्या वेळेत पूर्ण होतो. ज्यांना लवचिक वेळेत शिकायचे आहे त्यांच्यासाठी 24x7 ॲक्सेस असलेला ऑनलाईन व्हिडिओ कोर्स आणि शनिवार-रविवारच्या विशेष वीकेंड बॅचेस देखील उपलब्ध आहेत.",
  },
  {
    q: "नंतर स्वतः सराव कसा करायचा हे शिकवलं जातं का?",
    a: "हो, कोर्स पूर्ण झाल्यानंतर घरी बाल्कनी, मोकळी खोली किंवा शेडमध्ये स्वतःहून स्टेप-बाय-स्टेप सराव कसा करायचा याबद्दल सविस्तर SOP गाईड, तापमान-आर्द्रता नियंत्रण आणि प्रॅक्टिकल मार्गदर्शन दिले जाते.",
  },
  {
    q: "येरवडा, विश्रांतवाडी व कल्याणी नगर परिसरातील रहिवाशांसाठी हे केंद्र का सोयीस्कर आहे?",
    a: "येरवडा हे पुणे स्टेशन, नगर रोड, संगमवाडी आणि विश्रांतवाडीच्या मध्यवर्ती भागात असल्यामुळे कमीत कमी प्रवासात थेट केंद्रावर पोहोचता येते. त्यामुळे व्यस्त व्यावसायिकांना लांबचा प्रवास करावा लागत नाही.",
  },
  {
    q: "या कोर्समध्ये कोणत्या मशरूम प्रकारांचे प्रात्यक्षिक दिले जाते?",
    a: "नवशिक्यांसाठी सोपे असलेले ऑयस्टर मशरूम (Dhingri) आणि व्यावसायिक पातळीवरील बटन मशरूम (White Button) या दोन्हीचे तापमान, स्पॉनिंग आणि उत्पादन तंत्र शिकवले जाते.",
  },
  {
    q: "प्रॅक्टिकल सरावासाठी आवश्यक बियाणे (Spawn) व साहित्य कसे मिळते?",
    a: "ट्रेनिंग दरम्यान प्रत्यक्ष प्रॅक्टिकल किट दिले जाते आणि नंतरच्या सरावासाठी आमच्या लॅबमधून ताजे मदर स्पॉन व पीपी बॅग्ज पुण्यात घरपोच उपलब्ध करून दिले जातात.",
  },
  {
    q: "प्रशिक्षणानंतर काही अडचण आल्यास मार्गदर्शन मिळते का?",
    a: "होय, सर्व प्रशिक्षणार्थींना समर्पित व्हॉट्सॲप सपोर्ट ग्रुपमध्ये जोडले जाते, जिथे पहिले उत्पादन निघेपर्यंत तज्ज्ञांचे थेट मार्गदर्शन मिळते.",
  },
];

export default function MushroomCourseNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-course-near-me";

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
        name: "Mushroom Course Near Me – Yerwada Pune | Organic Mushrooms Farm",
        description:
          "Yerwada भागात राहता आणि nearby mushroom course शोधताय? Organic Mushrooms Farm चं सोयीस्कर केंद्र इथे उपलब्ध आहे. वीकेंड प्रॅक्टिकल बॅचेस, हँड्स-ऑन सराव व शेफ लिंकेज.",
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
            name: "Mushroom Course Near Me",
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
      id="course-near-me-page"
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
            Course Near Me
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
            <span>Back to Pune Hub</span>
          </Link>
        </div>

        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Yerwada, Vishrantwadi, Kalyani Nagar & Pune Station Nearby Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Yerwada, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Course
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>सोयीस्कर वेळ व सोपे स्थान</span>
            <span>•</span>
            <span>अर्धा दिवस ते 1-दिवस प्रॅक्टिकल</span>
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
              alt="Mushroom cultivation hands-on course practical session near Yerwada Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Convenient and easily accessible mushroom training course for residents of Yerwada, Pune.
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
              येरवडा भागातील नागरिकांसाठी सहज पोहोचता येणारा प्रॅक्टिकल मशरूम कोर्स
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Yerwada हा नदीकाठचा आणि गजबजलेला भाग आहे, जिथे रोजच्या कामांमध्ये वेळ काढून लांब प्रवास करणं अनेकांना अवघड वाटतं.</strong> 'Course near me' शोधणाऱ्या Yerwada रहिवाशांसाठी आमचं training अगदी सोयीस्कर वेळेत आणि सहज पोहोचता येईल अशा ठिकाणी ठेवलेलं आहे.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Course मध्ये थोड्याच वेळात मूलभूत संकल्पना स्पष्ट होतात आणि पुढे स्वतःहून सराव कसा करायचा हे सुद्धा सांगितलं जातं.{" "}
            <Link
              href="/locations/pune/oyster-mushroom-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Kalyani Nagar
            </Link>{" "}
            आणि Vishrantwadi जवळच्या रहिवाशांसाठी सुद्धा हे केंद्र जवळचं आहे.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम ट्रेनिंग मॉड्युल्स
            </Link>{" "}
            मध्ये वाजवी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी रचना (₹299 ते ₹499)
            </Link>{" "}
            आणि घरबसल्या सरावासाठी उच्च दर्जाचे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम स्पॉन (बियाणे)
            </Link>{" "}
            दिले जाते.
          </p>
        </section>

        {/* Section 1: Convenient Location & Commute */}
        <section
          id="location-connectivity"
          aria-labelledby="location-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="location-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. सोयीस्कर ठिकाण: लांब प्रवासाचा त्रास नाही (Zero Commute Hassle)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुण्यातील गर्दी आणि ट्रॅफिकचा विचार करून प्रशिक्षण स्थळ मध्यवर्ती व जलद ॲक्सेसिबल निवडले आहे:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Yerwada & Vishrantwadi:</strong>
              <span className="text-slate-600 dark:text-slate-300">अहमदनगर रोड व आळंदी रोडने अवघ्या 10-15 मिनिटांत सोयीस्कर आगमन.</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Kalyani Nagar & KP:</strong>
              <span className="text-slate-600 dark:text-slate-300">नदीवरील पुलावरून थेट सहज प्रवेश. प्रीमियम कॅफे व हॉटेल व्हिजिटची संधी.</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">Pune Station & Sangamwadi:</strong>
              <span className="text-slate-600 dark:text-slate-300">बस व रिक्षाची 24 तास उपलब्धता. बाहेरून येणाऱ्यांसाठीही अत्यंत सोपे.</span>
            </div>
          </div>
        </section>

        {/* Section 2: Course Duration & Fast Practical Structure */}
        <section
          id="course-duration"
          aria-labelledby="duration-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="duration-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. कमी वेळात ठोस ज्ञान: अर्धा दिवस ते एक दिवसाचा हँड्स-ऑन कोर्स
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            व्यस्त नोकरदार, महिला आणि कॉलेज विद्यार्थ्यांचा वेळ वाचवण्यासाठी अभ्यासक्रम अत्यंत सूत्रबद्ध आणि प्रात्यक्षिक-केंद्रित (action-oriented) बनवला आहे:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सत्र 1 (पहिली 90 मिनिटे):</strong> मशरूमचे प्रकार (ऑयस्टर, बटन, मिल्की), लागवडीचे मूलभूत विज्ञान आणि पुणे परिसरातील हवामान अनुकूलता.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सत्र 2 (प्रत्यक्ष हँड्स-ऑन प्रॅक्टिकल):</strong> गव्हाच्या पेंढ्याचे निर्जंतुकीकरण, योग्य ओलावा राखणे, लेयर स्पॉनिंग आणि बॅग पॅकिंग.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सत्र 3 (क्रॉप केअर व हार्वेस्टिंग):</strong> 20-25 दिवसांचा मायसेलियम रन, फ्रूटिंग चेंबरमधील आर्द्रता, ताजी काढणी आणि 200g पन्नेट पॅकिंग.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>सत्र 4 (मार्केटिंग व शेफ लिंकेज):</strong> कोरेगाव पार्क व कल्याणी नगर मधील हॉस्पिटॅलिटी क्षेत्राला थेट सप्लाय करून ₹220 ते ₹280/किलो नफा कसा कमवायचा.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Self Practice at Home & Continuous Support */}
        <section
          id="home-practice"
          aria-labelledby="practice-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Layers className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="practice-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. कोर्सनंतर घरी स्वतः सराव कसा करावा? (Step-by-Step Home Cultivation)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कोर्स संपल्यावर प्रशिक्षणार्थींना वाऱ्यावर सोडले जात नाही, तर घरी स्वतःहून यशस्वी बॅच तयार करता यावी यासाठी संपूर्ण ब्ल्यू-प्रिंट दिली जाते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">रेडिमेड स्टार्टर किट:</strong>
              <span className="text-slate-600 dark:text-slate-300">पहिली बॅच घरी तयार करण्यासाठी शुद्ध बियाणे (स्पॉन) व बॅग्ज लगेच मिळतात.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">छापील मराठी SOP:</strong>
              <span className="text-slate-600 dark:text-slate-300">पाणी फवारण्याचे वेळापत्रक, तापमान मापन आणि कीड प्रतिबंधक सोपे उपाय.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">फोटो/व्हिडिओ सपोर्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">घरातील बॅग्जचे फोटो व्हॉट्सॲपवर पाठवून तज्ज्ञांकडून नियमित मॉनिटरिंग.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="course-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (येरवडा व पुणे येथील कोर्सविषयी वारंवार विचारले जाणारे प्रश्न)
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
              तुमच्या जवळच्या केंद्रात आजच मशरूम कोर्स सुरू करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              वेळ वाचवा, लांब प्रवास टाळा आणि येरवड्याजवळ थेट तज्ज्ञांकडून प्रात्यक्षिक मशरूम शेती शिका.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  ऑनलाइन बेसिक कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                घरच्या मोकळ्या वेळेत कधीही पहा. संपूर्ण व्हिडिओ आणि ई-बुक गाईड.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  व्यावसायिक मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                कमर्शियल शेड, तापमान नियंत्रण, प्रोजेक्ट रिपोर्ट आणि मार्केट लिंकेज.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="/training"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>कोर्स सुरू करा (₹299)</span>
            </Link>
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>फी तपशील तपासा</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20येरवडा%20पुणे%20जवळच्या%20मशरूम%20कोर्सची%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp वर बोला</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
