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
  FlaskConical,
  Microscope,
  Compass,
  Layers,
  ThermometerSnowflake,
  TrendingUp,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Development and Training Center Viman Nagar | Organic Mushrooms Farm",
  description:
    "Viman Nagar Pune मध्ये नवीन mushroom varieties आणि advanced techniques शिकण्यासाठी development व training center.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-development-and-training-center",
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
      "Mushroom Development and Training Center Viman Nagar | Organic Mushrooms Farm",
    description:
      "Viman Nagar Pune मध्ये नवीन mushroom varieties आणि advanced techniques शिकण्यासाठी development व training center.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-development-and-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Development and Training Center Viman Nagar | Organic Mushrooms Farm",
    description:
      "Viman Nagar Pune मध्ये नवीन mushroom varieties आणि advanced techniques शिकण्यासाठी development व training center.",
  },
};

const faqs = [
  {
    q: "Exotic mushroom varieties training मध्ये cover होतात का?",
    a: "हो, advanced batch मध्ये Lion's Mane, Shiitake, Reishi (Ganoderma) आणि King Oyster सारख्या उच्च मूल्याच्या exotic प्रजातींचे सखोल प्रशिक्षण दिले जाते.",
  },
  {
    q: "हे center फक्त beginners साठी आहे का?",
    a: "नाही, हे विशेषतः intermediate आणि advanced learners, ॲग्री-स्टार्टअप्स आणि रिसर्चर्ससाठी डिझाईन केलेले आधुनिक R&D व ट्रेनिंग सेंटर आहे.",
  },
  {
    q: "विमान नगर केंद्रावर नवीन स्ट्रेन्सचे टिशू कल्चर व लॅब टेक्निक्स शिकता येतात का?",
    a: "हो, लॅमिनार एअर फ्लो (LAF), ऑटोकलेव्ह स्टेरिलायझेशन, पीईटी डिश कल्चर, स्पॉन मास्टर बॉटल निर्मिती आणि लॅब स्वच्छता प्रोटोकॉलचे प्रत्यक्ष प्रात्यक्षिक दिले जाते.",
  },
  {
    q: "एक्झॉटिक मशरूमसाठी पुणे शहरात मार्केट व खरेदीदार कसे मिळतात?",
    a: "कल्याणी नगर, कोरेगाव पार्क, विमान नगर आणि बाणेर परिसरातील फाईन-डाइनिंग रेस्टॉरंट्स, सुपरमार्केट्स आणि वेलनेस सेंटर्समध्ये हे मशरूम ₹800 ते ₹2500 प्रति किलो दराने विकले जातात.",
  },
  {
    q: "पुणे एअरपोर्ट व नगर रोडवरून केंद्रावर पोहोचणे सोयीचे आहे का?",
    a: "हो, विमान नगर केंद्र पुणे आंतरराष्ट्रीय विमानतळापासून अवघ्या 5 मिनिटांवर आणि फिनिक्स मार्केटसिटी व नगर रोडवरून सहज चालत येण्याजोग्या अंतरावर आहे.",
  },
  {
    q: "प्रशिक्षणानंतर लॅब इक्विपमेंट व प्युअर कल्चर स्पॉन कुठून मिळतील?",
    a: "आमच्या रिसर्च लॅबमधून फर्स्ट-जनरेशन प्युअर कल्चर स्लांट्स, लिक्विड कल्चर (LC) सिरिंज आणि प्रमाणित एक्झॉटिक स्पॉन थेट उपलब्ध करून दिले जातात.",
  },
];

export default function MushroomDevelopmentAndTrainingCenterVimanNagarPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-development-and-training-center";

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
        name: "Mushroom Development and Training Center Viman Nagar | Organic Mushrooms Farm",
        description:
          "Viman Nagar Pune मध्ये नवीन mushroom varieties आणि advanced techniques शिकण्यासाठी development व training center.",
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
            name: "Development & Training Center Viman Nagar",
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
      id="mushroom-development-center-viman-nagar-page"
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
            Viman Nagar R&D Center
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
            <span>Viman Nagar, Kalyani Nagar, Pune Airport & Nagar Road</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Viman Nagar, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Development and Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>नवीन एक्झॉटिक व्हरायटीज व आधुनिक लॅब तंत्रज्ञान</span>
            <span>•</span>
            <span>R&D, उद्योजक व संशोधकांसाठी विशेष अभ्यासक्रम</span>
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
              alt="Mushroom development and training center in Viman Nagar Pune for exotic varieties and advanced cultivation"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Advanced R&D cultivation, strain testing, and high-value exotic mushroom training in Viman Nagar, Pune.
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
              विमान नगरमधील संशोधक, उद्योजक आणि प्रगत उत्पादकांसाठी संशोधन व प्रशिक्षण केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Viman Nagar केंद्र थोडं वेगळ्या audience साठी आहे — ज्यांना फक्त basic oyster किंवा button mushroom नाही, तर lion&apos;s mane, shiitake सारख्या exotic varieties आणि नवीन cultivation techniques explore करायच्या आहेत</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>इथे आम्ही नवीन strains वर experiments सुद्धा करतो आणि त्याचे results training मध्ये share करतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Airport जवळच्या या भागातील entrepreneurs आणि researchers साठी हे केंद्र R&D आणि learning दोन्हीसाठी उपयुक्त आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            प्रगत व्यावसायिक तंत्रज्ञान शिकण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              अडव्हान्स मास्टरक्लास प्रशिक्षण (₹499)
            </Link>{" "}
            उपयुक्त आहे. यासोबत लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              लॅब-प्युअर स्पॉन बियाणे
            </Link>{" "}
            आणि मायकोलॉजी साधने पुरवली जातात. पुण्यातील इतर केंद्रांच्या माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-farm-learning-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              पिंपरी-चिंचवड लर्निंग सेंटर
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-by-government"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              वाघोली गव्हर्नमेंट ट्रेनिंग
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/government-mushroom-training-center-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कात्रज शासकीय केंद्र
            </Link>{" "}
            किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फी तपशील
            </Link>{" "}
            पाहू शकता.
          </p>
        </section>

        {/* Section 1: High-Value Exotic Mushroom Cultivation */}
        <section
          id="exotic-varieties"
          aria-labelledby="exotic-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <FlaskConical className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="exotic-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. एक्झॉटिक मशरूम व्हरायटीज (Lion&apos;s Mane, Shiitake & Reishi)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पारंपारिक मशरूमपेक्षा 5 ते 10 पट जास्त नफा देणाऱ्या औषधी व प्रीमियम व्हरायटीजचे उत्पादन:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Microscope className="w-3.5 h-3.5 shrink-0" />
                <span>Lion&apos;s Mane (हर्बेरियम)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                मेंदूचे आरोग्य व स्मरणशक्ती वाढवणारे औषधी मशरूम; बाजारात ₹1200 ते ₹2000 प्रति किलो दर.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Shiitake (शिताके)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                हार्डवुड सॉडस्ट ब्लॉक्सवर लागवड; आंतरराष्ट्रीय हॉटेल्स आणि हाय-एंड रेस्टॉरंट्समध्ये भारी मागणी.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <ThermometerSnowflake className="w-3.5 h-3.5 shrink-0" />
                <span>Ganoderma / Reishi</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                आयुर्वेदिक व इम्युनिटी सप्लिमेंट्ससाठी वापर; ड्राय फॉर्ममध्ये ₹2500+ प्रति किलो भाव.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Laboratory R&D & Strain Experimentation */}
        <section
          id="research-development"
          aria-labelledby="rd-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="rd-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. आधुनिक R&D लॅब प्रात्यक्षिक व स्ट्रेन टेस्टिंग
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            विमान नगर केंद्रावर संशोधक व स्टार्टअप्सना शिकवले जाणारे प्रगत वैज्ञानिक तंत्रज्ञान:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>टिशू कल्चर व पेट्री डिश मायसेलियम:</strong> ताज्या फ्रूटिंग बॉडीवरून क्लोनिंग करून प्युअर कल्चर अगर (MEA/PDA) वर जतन करणे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मास्टर लिक्विड कल्चर (Liquid Culture):</strong> जलद वाढीसाठी न्यूट्रिएंट ब्रोथमध्ये मायसेलियम मल्टिप्लिकेशन तंत्र.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>हार्डवुड सॉडस्ट सबस्ट्रेट फॉर्म्युलेशन:</strong> लाकडाचा भुसा, गव्हाचा कोंडा आणि जिप्समचे अचूक पोषण मिश्रण व स्टेरिलायझेशन.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>HVAC व सेन्सर आधारित क्लायमेट चेंबर:</strong> तापमान, आर्द्रता (RH 85-95%) व CO2 चे सेन्सर आधारित अचूक ऑटोमेशन.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Premium Market Linkages & Airport Advantage */}
        <section
          id="market-linkages"
          aria-labelledby="market-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="market-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. प्रीमियम मार्केट जोडणी व विमानतळ कनेक्टिव्हिटी
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">फाईन-डाइनिंग व कॅफेज:</strong>
              <span className="text-slate-600 dark:text-slate-300">कोरेगाव पार्क व कल्याणी नगरमधील लक्झरी रेस्टॉरंट्सना ताजे एक्झॉटिक मशरूम थेट पुरवठा.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">एअर कार्गो एक्स्पोर्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">पुणे विमानतळ जवळ असल्याने मुंबई, दिल्ली, बंगळुरू किंवा आंतरराष्ट्रीय स्तरावर ताजी निर्यात.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">व्हॅल्यू ॲडिशन व एक्स्ट्रॅक्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">ड्रायिंग, मशरूम पावडर, कॅप्सूल आणि टिंचर बनवून औषधी ब्रँडिंग करण्याचे मार्गदर्शन.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="viman-nagar-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (विमान नगर मशरूम डेव्हलपमेंट व ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              विमान नगर, कल्याणी नगर व पुणे शहर परिसरातील संशोधक व नवउद्योजकांसाठी प्रवेश सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              पारंपारिक शेतीच्या पुढे जाऊन प्रगत एक्झॉटिक व्हरायटीजचे उत्पादन शिका आणि हाय-व्हॅल्यू ॲग्री-स्टार्टअप सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  एक्झॉटिक प्रॅक्टिकल कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                हँड्स-ऑन सॉडस्ट सबस्ट्रेट मेकिंग, मायसेलियम ग्रोइंग व इनक्युबेशन गाईड.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  अडव्हान्स R&D मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                टिशू कल्चर, लॅब स्टेरिलायझेशन, क्लायमेट चेंबर ऑटोमेशन आणि व्हेरिफायड डिजिटल सर्टिफिकेट.
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
              <span>फी व मॉडेल तपासा</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20विमान%20नगर/कल्याणी%20नगर%20येथून%20आहे.%20मला%20मशरूम%20डेव्हलपमेंट%20व%20एक्झॉटिक%20ट्रेनिंगविषयी%20माहिती%20हवी%20आहे."
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
