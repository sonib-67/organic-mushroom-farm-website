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
  Award,
  ShieldCheck,
  Headphones,
  Sprout,
  Users,
  Compass,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Best Mushroom Training Center in Aundh, Pune | Organic Mushrooms Farm",
  description:
    "Aundh Pune मधलं सर्वोत्तम mushroom training center कोणतं? Organic Mushrooms Farm चे verified trainers, hands-on practical session आणि certification.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/best-mushroom-training-center",
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
      "Best Mushroom Training Center in Aundh, Pune | Organic Mushrooms Farm",
    description:
      "Aundh Pune मधलं सर्वोत्तम mushroom training center कोणतं? Organic Mushrooms Farm चे verified trainers, hands-on practical session आणि certification.",
    url: "https://organicmushroomsfarm.com/locations/pune/best-mushroom-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Best Mushroom Training Center in Aundh, Pune | Organic Mushrooms Farm",
    description:
      "Aundh Pune मधलं सर्वोत्तम mushroom training center कोणतं? Organic Mushrooms Farm चे verified trainers, hands-on practical session आणि certification.",
  },
};

const faqs = [
  {
    q: "Training नंतर ongoing support मिळतो का?",
    a: "हो, WhatsApp support आणि follow-up guidance दिली जाते. पीक घेताना येणाऱ्या अडचणी, मायसेलियम रन, आणि तापमान नियंत्रणावर तज्ज्ञांकडून मार्गदर्शन मिळते.",
  },
  {
    q: "Certificate मिळतं का training नंतर?",
    a: "हो, यशस्वी प्रशिक्षणाअंती शासकीय व व्यावसायिक प्रोजेक्टसाठी उपयुक्त अधिकृत completion certificate दिलं जातं.",
  },
  {
    q: "औंध केंद्रावर प्रत्यक्ष प्रॅक्टिकल बॅग मेकिंग शिकवले जाते का?",
    a: "होय, प्रत्येक विद्यार्थ्याला प्रत्यक्ष स्वतःच्या हाताने सबस्ट्रेट तयार करणे, स्पॉनिंग (बियाणे मिसळणे) आणि बॅग्स पॅक करण्याचे संपूर्ण प्रात्यक्षिक दिले जाते.",
  },
  {
    q: "औंध, आयटीआय रोड व डीपी रोडवरून केंद्रावर पोहोचणे सोपे आहे का?",
    a: "होय, औंध ITI Road, DP Road, बाणेर, पाषाण आणि शिवाजीनगरवरून PMPML बसेस व स्थानिक वाहनांची उत्तम कनेक्टिव्हिटी उपलब्ध आहे.",
  },
  {
    q: "प्रशिक्षणानंतर मशरूम विक्रीसाठी बायबॅक असिस्टन्स (Buyback Assistance) मिळते का?",
    a: "होय, उत्पादित केलेल्या ताज्या व सुकवलेल्या ऑयस्टर मशरूमच्या स्थानिक विक्रीसाठी तसेच बी2बी बायबॅक नेटवर्कसाठी पूर्ण मदत दिली जाते.",
  },
  {
    q: "औंध परिसरातील नोकरदारांसाठी वीकेंड बॅचेस उपलब्ध आहेत का?",
    a: "होय, हिंजवडी व बाणेर परिसरातील IT प्रोफेशनल्ससाठी शनिवार व रविवारी सोयीस्कर वेळेत विशेष प्रॅक्टिकल वीकेंड बॅचेस आयोजित केल्या जातात.",
  },
];

export default function BestMushroomTrainingCenterAundhPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/best-mushroom-training-center";

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
        name: "Best Mushroom Training Center in Aundh, Pune | Organic Mushrooms Farm",
        description:
          "Aundh Pune मधलं सर्वोत्तम mushroom training center कोणतं? Organic Mushrooms Farm चे verified trainers, hands-on practical session आणि certification.",
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
            name: "Best Mushroom Training Center Aundh",
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
      id="best-mushroom-training-aundh-page"
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
            Aundh Best Training Center
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
            <span>Aundh, ITI Road, DP Road, Baner & Pashan, Pune</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Aundh, Pune मधील{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Best Mushroom Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>2021 पासून प्रत्यक्ष व्यावसायिक शेतीचा अनुभव</span>
            <span>•</span>
            <span>स्पॉन सप्लाय, ट्रबलशूटिंग आणि बायबॅक असिस्टन्स</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ट्रेनिंग मॉडेल्स
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png"
              alt="Best mushroom training center in Aundh Pune near ITI Road and DP Road"
              width={600}
              height={315}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Certified mushroom farming training, hands-on practice, and verified mentorship in Aundh, Pune.
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
              औंधमधील सर्वोत्तम प्रशिक्षण केंद्राचे निकष आणि प्रत्यक्ष अनुभव
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>सर्वोत्तम training center शोधताना लोक trainer चा अनुभव, hands-on practice, आणि नंतरचा support किती मिळतो हे बघतात. Organic Mushrooms Farm चं Aundh केंद्र या तिन्ही बाबतीत पुढे आहे — आमचे trainers स्वतः 2021 पासून commercial farming करत आहेत, त्यामुळे फक्त पुस्तकी ज्ञान नाही तर real farm experience शिकवला जातो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Training नंतर spawn supply, troubleshooting support आणि buyback assistance सुद्धा दिली जाते, जे इतर अनेक केंद्रांमध्ये मिळत नाही. Aundh, ITI Road आणि DP Road जवळच्या रहिवाशांसाठी हे एक trusted नाव बनलं आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            घरगुती किंवा व्यावसायिक शेती सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण (₹299 पासून)
            </Link>{" "}
            आजच सुरू करा. आवश्यक असणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              उच्च प्रतीचे मशरूम स्पॉन बियाणे
            </Link>{" "}
            आणि ग्रोईंग किट्स घरपोच उपलब्ध आहेत. पुण्यातील इतर ट्रेनिंग लोकेशन्ससाठी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              खराडी लाइव्ह फार्म केंद्र
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
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी आणि पॅकेजेस
            </Link>{" "}
            तपासा.
          </p>
        </section>

        {/* Section 1: The 3 Core Pillars Making Aundh Center the Best */}
        <section
          id="three-pillars"
          aria-labelledby="pillars-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Award className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="pillars-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. औंध केंद्र सर्वोत्तम का ठरते? (3 मुख्य आधारस्तंभ)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            केवळ क्लासरूम लेक्चर्स देणाऱ्या संस्थांपेक्षा आमचे केंद्र पुढील तीन बाबींमुळे अग्रगण्य आहे:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>2021 पासून कमर्शियल शेतकरी</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ट्रेनर्स स्वतः व्यावसायिक पातळीवर दररोज शेकडो किलो उत्पादन घेतात, त्यामुळे प्रत्यक्ष समस्यांचे अचूक समाधान मिळते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Sprout className="w-3.5 h-3.5 shrink-0" />
                <span>लॅब-प्युअर स्पॉन सप्लाय</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                प्रशिक्षणादरम्यान आणि नंतरही उच्च उगवणक्षमता (High-yield) असलेले फर्स्ट-जनरेशन स्पॉन थेट उपलब्ध करून दिले जाते.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Headphones className="w-3.5 h-3.5 shrink-0" />
                <span>लाईफटाईम मेंटॉरशिप</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                कोर्स संपल्यानंतरही व्हॉट्सॲपवर मायसेलियम रन, कंटामिनेशन नियंत्रण व विक्री संदर्भात सातत्यपूर्ण मार्गदर्शन मिळते.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Buyback & Market Linkage Assistance */}
        <section
          id="buyback-assistance"
          aria-labelledby="buyback-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="buyback-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. मार्केटिंग, विक्री आणि बायबॅक असिस्टन्स
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            मशरूम पिकवणे सोपे आहे, परंतु त्याला योग्य दर मिळवून देणे सर्वात महत्त्वाचे असते:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>औंध, बाणेर व पाषाण हाय-एंड मार्केट:</strong> स्थानिक प्रीमियम सोसायट्यांमध्ये ताजे ऑयस्टर मशरूम ₹250 ते ₹350/किलो विकण्याचे थेट चॅनेल्स शिकवले जातात.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>ड्राय मशरूम बायबॅक नेटवर्क:</strong> उरलेले ताजे मशरूम उन्हात किंवा ड्रायरमध्ये सुकवून ₹600 ते ₹1000/किलो दराने फार्मा व हर्बल कंपन्यांना विकण्याची सोय.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हॉटेल्स व रेस्टॉरंट्स टाय-अप:</strong> बाणेर-बालेवाडी हायस्ट्रीटवरील रेस्टॉरंट्ससाठी नियमित सप्लाय करार (B2B supply contracts) कसे करावेत यावर प्रॅक्टिकल गाईडन्स.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>ब्रँडिंग व FSSAI लायसन्स:</strong> स्वतःचा मशरूम ब्रँड तयार करणे, पॅकेजिंग आणि अन्न सुरक्षा परवाना मिळवण्यासाठी संपूर्ण साह्य.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Ideal for ITI Road, DP Road, Baner & Pashan Residents */}
        <section
          id="location-advantages"
          aria-labelledby="location-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Users className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="location-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. औंध परिसरातील रहिवासी व व्यावसायिकांसाठी सुलभ पर्याय
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">ITI Road व DP Road:</strong>
              <span className="text-slate-600 dark:text-slate-300">औंधमधील मुख्य रस्त्यांवरून थेट कनेक्टिव्हिटी आणि शांत प्रशिक्षण वातावरण.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">बाणेर व पाषाण अंतर:</strong>
              <span className="text-slate-600 dark:text-slate-300">अवघ्या 10 ते 15 मिनिटांच्या अंतरावर असल्याने वीकेंड बॅचेससाठी अत्यंत सोयीस्कर.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">लहान जागेत हाय-रिटर्न:</strong>
              <span className="text-slate-600 dark:text-slate-300">घरातील 10x10 फुटांच्या रिकाम्या खोलीत किंवा बाल्कनीत दरमहा ₹15,000+ नफा मिळवणे शक्य.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="aundh-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (औंध मशरूम ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              औंध, बाणेर व पाषाण परिसरातील प्रशिक्षणार्थींसाठी थेट प्रवेश सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              प्रमाणित मशरूम शेतकऱ्यांकडून प्रत्यक्ष मार्गदर्शन मिळवा आणि व्यावसायिक यश संपादन करा.
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
                हँड्स-ऑन बॅग मेकिंग, सबस्ट्रेट स्टेरिलायझेशन, गाईडबुक व व्हॉट्सॲप सपोर्ट.
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
                व्यावसायिक शेड प्लॅनिंग, बँक सबसिडी DPR, बायबॅक लिंकेज आणि सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20औंध/पुणे%20येथून%20आहे.%20मला%20औंध%20बेस्ट%20मशरूम%20ट्रेनिंग%20सेंटरविषयी%20माहिती%20हवी%20आहे."
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
