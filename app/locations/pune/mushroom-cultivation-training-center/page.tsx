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
  Hammer,
  Microscope,
  Layers,
  ThermometerSnowflake,
  Clock,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Cultivation Training Center Hadapsar Pune | Organic Mushrooms Farm",
  description:
    "Hadapsar मध्ये hands-on mushroom cultivation training center. Lab-style practical sessions, spawn handling आणि harvesting techniques शिका.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-center",
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
      "Mushroom Cultivation Training Center Hadapsar Pune | Organic Mushrooms Farm",
    description:
      "Hadapsar मध्ये hands-on mushroom cultivation training center. Lab-style practical sessions, spawn handling आणि harvesting techniques शिका.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-center",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation Training Center Hadapsar Pune | Organic Mushrooms Farm",
    description:
      "Hadapsar मध्ये hands-on mushroom cultivation training center. Lab-style practical sessions, spawn handling आणि harvesting techniques शिका.",
  },
};

const faqs = [
  {
    q: "Hands-on session मध्ये काय करावं लागतं?",
    a: "Substrate तयार करणं, उकळत्या पाण्याने किंवा स्टीमने निर्जंतुकीकरण, spawn mixing (बियाणे मिसळणे) आणि bag filling प्रत्यक्ष शिकवलं जातं.",
  },
  {
    q: "किती bags स्वतः तयार करायला मिळतात?",
    a: "प्रत्येक विद्यार्थ्याला किमान 5 ते 10 bags स्वतःच्या हाताने तयार करायला दिल्या जातात आणि त्या बॅग्स इनक्युबेशनसाठी घरी नेण्याची सुविधा असते.",
  },
  {
    q: "मगरपट्टा आणि मुंढवा परिसरातील IT प्रोफेशनल्ससाठी वीकेंड बॅच उपलब्ध आहे का?",
    a: "होय, Magarpatta Cybercity, SP Infocity आणि Mundhwa परिसरातील कर्मचाऱ्यांसाठी शनिवार व रविवारी सोयीस्कर वेळेत विशेष प्रॅक्टिकल वीकेंड बॅचेस घेतल्या जातात.",
  },
  {
    q: "पहिल्या फ्लशची काढणी (Harvesting) कधी आणि कशी होते?",
    a: "स्पॉनिंगनंतर 18 ते 22 दिवसांत मायसेलियम पसरून पिनहेड्स फुटतात आणि 25 व्या दिवशी पहिला ताजा फ्लश तोडणीसाठी तयार होतो.",
  },
  {
    q: "हडपसर केंद्रावर प्रत्यक्ष पोहोचण्यासाठी कोणते वाहतूक मार्ग उपलब्ध आहेत?",
    a: "हडपसर गाडीतळ, सोलापूर हायवे, मगरपट्टा कॉर्नर आणि मुंढवा ब्रिजवरून PMPML बसेस, रिक्षा आणि कॅबची सुलभ कनेक्टिव्हिटी आहे.",
  },
  {
    q: "प्रशिक्षणानंतर स्पॉन बियाणे व बॅग मेकिंग मटेरियल कुठे मिळेल?",
    a: "आमच्या केंद्रावर लॅब-सर्टिफाइड ऑयस्टर व बटन स्पॉन, पीपी बॅग्स, फॉर्मेलिन/बाविस्टिन, थर्मामीटर आणि हायग्रोमीटर थेट उपलब्ध करून दिले जातात.",
  },
];

export default function MushroomCultivationTrainingCenterHadapsarPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-center";

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
        name: "Mushroom Cultivation Training Center Hadapsar Pune | Organic Mushrooms Farm",
        description:
          "Hadapsar मध्ये hands-on mushroom cultivation training center. Lab-style practical sessions, spawn handling आणि harvesting techniques शिका.",
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
            name: "Cultivation Training Center Hadapsar",
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
      id="mushroom-cultivation-training-hadapsar-page"
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
            Hadapsar Cultivation Center
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
            <span>Hadapsar, Magarpatta Cybercity, Mundhwa & SP Infocity</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Hadapsar, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Cultivation Training Center
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>100% हँड्स-ऑन सबस्ट्रेट मेकिंग व स्पॉन हँडलिंग</span>
            <span>•</span>
            <span>प्रत्येक विद्यार्थ्याला 5 ते 10 बॅग्सचा प्रत्यक्ष सराव</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              सर्व बॅचेस तपासा
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Hands-on mushroom cultivation training center in Hadapsar Pune near Magarpatta"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Practical hands-on mushroom cultivation, substrate pasteurization, and bag making in Hadapsar, Pune.
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
              हडपसरमधील 100% हँड्स-ऑन प्रॅक्टिकल मशरूम कल्टिव्हेशन प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Cultivation शिकणं म्हणजे फक्त theory ऐकणं नाही — प्रत्यक्ष हातात spawn घेऊन, substrate तयार करून काम करणं गरजेचं असतं. Hadapsar मधलं आमचं training center याच hands-on पद्धतीवर भर देतं</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>इथे तुम्ही स्वतः bags तयार कराल, temperature आणि humidity कशी control करायची शिकाल, आणि पहिल्या flush पर्यंतची संपूर्ण process प्रत्यक्ष अनुभवाल</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Magarpatta आणि Mundhwa जवळच्या IT आणि industrial कर्मचाऱ्यांसाठी हे केंद्र सहज उपलब्ध आहे, weekend batches सोबत</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            स्वतःचा उत्पादन प्रकल्प सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रॅक्टिकल ट्रेनिंग (₹299 पासून)
            </Link>{" "}
            नक्की जॉईन करा. प्रशिक्षणासाठी लागणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              फर्स्ट जनरेशन स्पॉन बियाणे
            </Link>{" "}
            आणि मायकोलॉजी किट्स त्वरित मिळतात. पुण्यातील इतर ट्रेनिंग लोकेशन्ससाठी{" "}
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
              विमान नगर R&D सेंटर
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farm-learning-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              पिंपरी-चिंचवड लर्निंग केंद्र
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

        {/* Section 1: Hands-On Bag Making Workflow */}
        <section
          id="hands-on-workflow"
          aria-labelledby="workflow-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Hammer className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="workflow-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. हडपसर केंद्रावरील हँड्स-ऑन प्रॅक्टिकल पायऱ्या
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            विद्यार्थी केवळ निरीक्षणासाठी नव्हे, तर स्वतःच्या हाताने काम करून परिपूर्ण कौशल्य मिळवतात:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>सबस्ट्रेट निर्जंतुकीकरण</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                गव्हाचा किंवा भाताचा पेंढा 65-70°C गरम पाण्यात किंवा रासायनिक पद्धतीने 12 तास निर्जंतुक करणे.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Microscope className="w-3.5 h-3.5 shrink-0" />
                <span>स्पॉन मिक्सिंग व लेअरिंग</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पीपी बॅगमध्ये 2-3% प्रमाणात बियाणे थराथराने (Layering method) अचूकपणे भरण्याचे तंत्र.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <ThermometerSnowflake className="w-3.5 h-3.5 shrink-0" />
                <span>क्लायमेट व आर्द्रता नियंत्रण</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                तापमान 22-28°C व आर्द्रता 80-90% राखण्यासाठी स्वस्त थर्मामीटर व हायग्रोमीटर वापरणे.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Weekend Batches for IT & Industrial Professionals */}
        <section
          id="weekend-batches"
          aria-labelledby="weekend-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="weekend-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. मगरपट्टा व मुंढवा आयटी/इंडस्ट्रियल कर्मचाऱ्यांसाठी वीकेंड बॅचेस
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            नोकरी न सोडता अतिरिक्त साइड-इन्कम आणि आधुनिक ॲग्री-बिझनेस सुरू करण्यासाठी विशेष व्यवस्था:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>शनिवार व रविवार सोयीस्कर वेळा:</strong> 2 ते 3 तासांचे कॉम्पॅक्ट प्रॅक्टिकल सेशन्स ज्यामुळे ऑफिस रूटीनवर परिणाम होत नाही.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्वतः तयार केलेल्या 5-10 बॅग्स घरी घेऊन जाणे:</strong> प्रशिक्षणार्थींनी स्वतः तयार केलेल्या बॅग्स घरी ठेवून प्रत्यक्ष 25 दिवसांत मशरूम उगवताना पाहू शकतात.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मगरपट्टा व अमानोरा टाउनशिप्समध्ये स्थानिक विक्री:</strong> शेजारील गेटेड कम्युनिटीज, सुपरमार्केट्स आणि ऑर्गेनिक स्टोअर्समध्ये ताजे ऑयस्टर मशरूम ₹200 ते ₹300/किलो विकता येतात.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>लाईफटाईम व्हॉट्सॲप सपोर्ट:</strong> बॅग्समध्ये मायसेलियम रन आणि पिनहेडिंगदरम्यान शंका निरसनासाठी तज्ज्ञ मार्गदर्शक थेट संपर्कात असतात.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: First Flush & Harvesting Techniques */}
        <section
          id="harvesting-techniques"
          aria-labelledby="harvest-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="harvest-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. पहिल्या फ्लशची काढणी, पॅकिंग व साठवणूक
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">ट्विस्टिंग तंत्राने काढणी:</strong>
              <span className="text-slate-600 dark:text-slate-300">बॅग्समधील सबस्ट्रेट खराब न होता गुच्छ हलक्या हाताने क्लॉकवाईज फिरवून स्वच्छ तोडणे.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">परफोरेटेड पाऊच पॅकिंग:</strong>
              <span className="text-slate-600 dark:text-slate-300">मशरूम्सना श्वास घेता यावा म्हणून 200 ग्रॅमच्या हवेशीर पाऊचमध्ये ब्रँडेड पॅकिंग करणे.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">2रा व 3रा फ्लश मिळवणे:</strong>
              <span className="text-slate-600 dark:text-slate-300">पहिल्या तोडणीनंतर बॅग्स स्वच्छ करून पुन्हा पाणी फवारून 8-10 दिवसांत पुढील पीक घेणे.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="hadapsar-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (हडपसर मशरूम कल्टिव्हेशन ट्रेनिंग सेंटरविषयी वारंवार विचारले जाणारे प्रश्न)
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
              हडपसर, मगरपट्टा व मुंढवा परिसरातील विद्यार्थ्यांसाठी प्रत्यक्ष बॅच सुरू!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              स्वतःच्या हाताने बॅग्स भरून आणि मशरूम उगवून प्रत्यक्ष आत्मविश्वासाने शेती किंवा व्यवसाय सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  हँड्स-ऑन प्रॅक्टिकल कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                सबस्ट्रेट मेकिंग, 5 बॅग्स प्रत्यक्ष स्पॉनिंग, गाईड बुक आणि व्हॉट्सॲप सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल फार्मिंग मास्टरक्लास (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                बटन व ऑयस्टर संपूर्ण प्रोजेक्ट, बँक सबसिडी DPR आणि अधिकृत डिजिटल सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20हडपसर/मगरपट्टा%20येथून%20आहे.%20मला%20हँड्स-ऑन%20मशरूम%20कल्टिव्हेशन%20ट्रेनिंगविषयी%20माहिती%20हवी%20आहे."
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
