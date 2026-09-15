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
  Bus,
  Train,
  Clock,
  Sprout,
  ShieldCheck,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Farming Training Near Me – Swargate Pune | Organic Mushrooms Farm",
  description:
    "Swargate जवळ mushroom farming training शोधताय? Bus आणि Metro connectivity मुळे outstation students साठी सुद्धा सोयीस्कर. Same-day return practical training.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-near-me",
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
      "Mushroom Farming Training Near Me – Swargate Pune | Organic Mushrooms Farm",
    description:
      "Swargate जवळ mushroom farming training शोधताय? Bus आणि Metro connectivity मुळे outstation students साठी सुद्धा सोयीस्कर. Same-day return practical training.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-near-me",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Training Near Me – Swargate Pune | Organic Mushrooms Farm",
    description:
      "Swargate जवळ mushroom farming training शोधताय? Bus आणि Metro connectivity मुळे outstation students साठी सुद्धा सोयीस्कर. Same-day return practical training.",
  },
};

const faqs = [
  {
    q: "बाहेरून येणाऱ्या students साठी कोणती सुविधा आहे?",
    a: "Swargate bus stand आणि Pune railway station जवळ असल्यामुळे बारामती, सासवड, शिरवळ, सातारा, दौंड येथून same-day travel सोयीस्कर आहे. सकाळी येऊन संध्याकाळी परत जाता येते.",
  },
  {
    q: "Training कोणत्या दिवशी असते?",
    a: "दर आठवड्याला Saturday आणि Sunday दोन्ही दिवस intensive practical batches उपलब्ध आहेत. नोकरदार व विद्यार्थ्यांसाठी वीकेंड बॅचेस अत्यंत सोयीच्या ठरतात.",
  },
  {
    q: "स्वारगेट मेट्रो स्टेशनवरून ट्रेनिंग सेंटरला कसे पोहोचावे?",
    a: "स्वारगेट हे पुणे मेट्रो आणि पीएमपीएमएल बस सेवेचे मुख्य केंद्र आहे. इथून ट्रेनिंग लोकेशनवर पोहोचण्यासाठी थेट बस, मेट्रो आणि ऑटो रिक्षा सहज उपलब्ध होतात.",
  },
  {
    q: "एकाच दिवसात संपूर्ण कल्टिव्हेशन समजेल का?",
    a: "होय, बेसिक प्रॅक्टिकल बॅचमध्ये पेंढा निर्जंतुकीकरण, लेयर स्पॉनिंग, बॅग मेकिंग, तापमान व आर्द्रता व्यवस्थापन आणि काढणीचे हँड्स-ऑन प्रात्यक्षिक एकाच दिवसात पूर्ण शिकवले जाते.",
  },
  {
    q: "प्रशिक्षणानंतर बियाणे (Spawn) व साहित्य गावाकडे पोहोचेल का?",
    a: "नक्कीच! प्रशिक्षणार्थींना उच्च दर्जाचे फर्स्ट-जनरेशन लॅब-प्रमाणित स्पॉन, पीपी बॅग्ज व निर्जंतुकीकरण औषधे स्वारगेटवरून एसटी पार्सल किंवा थेट कुरिअरने घरपोच पाठवली जातात.",
  },
  {
    q: "प्रशिक्षणानंतर स्वतःचा फार्म सुरू करताना तज्ज्ञांचे मार्गदर्शन मिळते का?",
    a: "होय, सर्व विद्यार्थ्यांना 24x7 लाईफटाईम व्हॉट्सॲप सपोर्ट दिला जातो. तुमच्या शेडची रचना, बॅगची वाढ किंवा कोणत्याही रोगाच्या समस्येवर थेट तज्ज्ञांकडून मार्गदर्शन मिळते.",
  },
];

export default function MushroomFarmingTrainingNearMePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-near-me";

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
        name: "Mushroom Farming Training Near Me – Swargate Pune | Organic Mushrooms Farm",
        description:
          "Swargate जवळ mushroom farming training शोधताय? Bus आणि Metro connectivity मुळे outstation students साठी सुद्धा सोयीस्कर. Same-day return practical training.",
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
            name: "Farming Training Near Me",
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
      id="farming-training-near-me-page"
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
            Farming Training Near Me
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
            <span>Swargate, Baramati, Saswad & Daund Connectivity Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Swargate, Pune जवळ{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Farming Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>बस आणि मेट्रोने सुलभ प्रवास</span>
            <span>•</span>
            <span>Outstation विद्यार्थ्यांसाठी Same-Day Return</span>
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
              alt="Mushroom farming practical training near Swargate Pune for local and outstation students"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Practical mushroom cultivation session with easy access from Swargate bus stand and metro station.
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
              स्वारगेट आणि आसपासच्या ग्रामीण भागातील विद्यार्थ्यांसाठी सोयीस्कर प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Swargate हे Pune चं एक major transport hub आहे</strong>, जिथून <strong>बस आणि आता मेट्रोनेही सहज पोहोचता येतं</strong>. यामुळे <strong>फक्त Pune शहरातीलच नाही, तर बारामती, सासवड, दौंड सारख्या आसपासच्या गावांमधून येणाऱ्या students साठी सुद्धा training attend करणं सोपं झालं आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>&apos;Training near me&apos; शोधणाऱ्या अशा outstation विद्यार्थ्यांसाठी आमचं केंद्र उत्तम पर्याय आहे</strong>, कारण <strong>location सहज approachable आहे आणि same-day return प्रवास सुद्धा शक्य होतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमी जागेत आणि कमी भांडवलात स्वतःचा घरगुती किंवा व्यावसायिक शेती प्रकल्प सुरू करण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रशिक्षण मॉड्यूल्स (₹299 पासून)
            </Link>{" "}
            उपयुक्त ठरतात. तसेच शेजारच्या केंद्रांच्या माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              बावधन ट्रेनिंग सेंटर
            </Link>{" "}
            आणि घरबसल्या शिकण्यासाठी{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-online"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन ट्रेनिंग
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

        {/* Section 1: Strategic Swargate Connectivity & Outstation Advantage */}
        <section
          id="location-connectivity"
          aria-labelledby="connectivity-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Bus className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="connectivity-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. स्वारगेट बस डेपो व मेट्रो हबचा फायदा (Outstation Students Special)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुणे जिल्हा व लगतच्या तालुक्यांतून येणाऱ्या शेतकरी व तरुणांसाठी एका दिवसात ये-जा करण्याची सोय:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Bus className="w-3.5 h-3.5 shrink-0" />
                <span>Baramati & Daund Belt</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                बारामती, दौंड व इंदापूरहून एसटी बसने सकाळी स्वारगेटला पोहोचून सायंकाळी सहज परतीचा प्रवास.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Train className="w-3.5 h-3.5 shrink-0" />
                <span>Saswad & Shirwal Route</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                सासवड, जेजुरी आणि शिरवळ-सातारा रस्त्यावरील गावांसाठी स्वारगेट हे थेट आणि मध्यवर्ती केंद्र.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Metro Connectivity</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                पुणे मेट्रोच्या माध्यमातून पिंपरी, शिवाजीनगर आणि पुणे स्टेशनवरून काही मिनिटांत कनेक्टिव्हिटी.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Complete Hands-on 1-Day Syllabus */}
        <section
          id="practical-curriculum"
          aria-labelledby="curriculum-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sprout className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="curriculum-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. एका दिवसाच्या प्रॅक्टिकल बॅचमध्ये काय शिकायला मिळते?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            थिएरीपेक्षा 90% प्रत्यक्ष प्रात्यक्षिकावर भर:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>पेंढा निर्जंतुकीकरण प्रात्यक्षिक:</strong> उकळते पाणी व रासायनिक पद्धतीद्वारे पेंढा निर्जंतुक करण्याचे हँड्स-ऑन तंत्र.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>स्पॉनिंग व बॅग मेकिंग सराव:</strong> प्रमाणित{" "}
                <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  मशरूम स्पॉन बियाणे
                </Link>{" "}
                वापरून स्वतःच्या हाताने पीपी बॅग्ज भरण्याचे कौशल्य.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>तापमान व आर्द्रता व्यवस्थापन:</strong> 22°C ते 26°C तापमान आणि 80-85% आर्द्रता राखण्यासाठी देशी जुगाड शेड मॉडेल.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>काढणी, पॅकिंग व विक्री:</strong> मशरूमचे ताजे गुच्छ काढणे, मॉइश्चर-प्रूफ पॅकिंग आणि पुणे मंडई व स्थानिक बाजारात थेट विक्री.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Commercial Logistics & Raw Material Support */}
        <section
          id="raw-material"
          aria-labelledby="material-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="material-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. कच्चा माल पुरवठा व पोस्ट-ट्रेनिंग लाइफटाइम सपोर्ट
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            ट्रेनिंगनंतर तुमचा शेती प्रकल्प वेगाने सुरू करण्यासाठी संपूर्ण सहकार्य:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">एसटी पार्सल डिलिव्हरी:</strong>
              <span className="text-slate-600 dark:text-slate-300">स्वारगेट बस डेपोवरून सासवड, बारामती, दौंड व शिरवळला थेट एसटी पार्सलने स्पॉन पुरवठा.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">कमी भांडवलात सुरुवात:</strong>
              <span className="text-slate-600 dark:text-slate-300">अवघ्या ₹10,000 ते ₹15,000 मध्ये 100 बॅग्जचा प्रायोगिक घरगुती शेती प्रकल्प सुरू करता येतो.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">व्हॉट्सॲप मेंटॉरशिप:</strong>
              <span className="text-slate-600 dark:text-slate-300">पिकाच्या वाढीचे फोटो पाठवून तज्ज्ञांकडून नियमित सल्ला मिळवण्याची कायमस्वरूपी सुविधा.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
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
              Frequently Asked Questions (स्वारगेट मशरूम फार्मिंग ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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
              स्वारगेट, पुणे जवळील प्रॅक्टिकल बॅचमध्ये आजच जागा निश्चित करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              एकाच दिवसात संपूर्ण प्रक्रिया प्रत्यक्ष शिका, स्टार्टर किट मिळवा आणि स्वतःच्या शेतात किंवा घरी मशरूम उत्पादन सुरू करा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  प्रॅक्टिकल बेसिक बॅच (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                हँड्स-ऑन बॅग मेकिंग सराव, स्टार्टर स्पॉन किट, छापील गाईड व व्हॉट्सॲप सपोर्ट.
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
                बटन + ऑयस्टर शेड डिझाईन, नाबार्ड लोन सबसिडी, बी2बी लिंकेज व सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20स्वारगेट/पुणे%20येथून%20आहे.%20मला%20स्वारगेट%20जवळील%20मशरूम%20फार्मिंग%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
