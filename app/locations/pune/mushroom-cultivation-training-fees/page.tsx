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
  TrendingUp,
  ArrowLeft,
  CreditCard,
  FileCheck2,
  Clock,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Mushroom Cultivation Training Fees – Koregaon Park Pune | Organic Mushrooms Farm",
  description:
    "Koregaon Park मधील लोकांसाठी transparent mushroom cultivation training fees. कोणतेही hidden charges नाहीत. Basic online कोर्स ₹299, कमर्शियल मास्टरक्लास ₹499 व ऑफलाइन हँड्स-ऑन प्रॅक्टिकल.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-fees",
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
      "Mushroom Cultivation Training Fees – Koregaon Park Pune | Organic Mushrooms Farm",
    description:
      "Koregaon Park मधील लोकांसाठी transparent mushroom cultivation training fees. कोणतेही hidden charges नाहीत. Basic online कोर्स ₹299, कमर्शियल मास्टरक्लास ₹499 व ऑफलाइन हँड्स-ऑन प्रॅक्टिकल.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-fees",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Cultivation Training Fees – Koregaon Park Pune | Organic Mushrooms Farm",
    description:
      "Koregaon Park मधील लोकांसाठी transparent mushroom cultivation training fees. कोणतेही hidden charges नाहीत. Basic online कोर्स ₹299, कमर्शियल मास्टरक्लास ₹499 व ऑफलाइन हँड्स-ऑन प्रॅक्टिकल.",
  },
};

const faqs = [
  {
    q: "Offline training मध्ये materials cost included आहे का?",
    a: "हो, आमच्या offline hands-on training fee मध्येच आवश्यक basic materials, प्रॅक्टिकल प्रक्रियेसाठी स्पॉन (spawn), पीपी बॅग्ज आणि छापील SOP गाईडची किंमत समाविष्ट असते. कोणतेही छुपे शुल्क (No Hidden Charges) आकारले जात नाही.",
  },
  {
    q: "Refund policy आहे का?",
    a: "हो, प्रशिक्षणाच्या स्पेसिफिक अटी व नियम नोंदणीच्या वेळीच स्पष्टपणे सांगितले जातात. जर बॅचच्या 48 तास आधी संपर्क केला, तर पुढील उपलब्ध बॅचमध्ये मोफत री-शेड्युलिंग किंवा पॉलिसीनुसार परतावा मिळतो.",
  },
  {
    q: "Basic Online Course (₹299) आणि Commercial Masterclass (₹499) मध्ये काय फरक आहे?",
    a: "₹299 चा बेसिक कोर्स घरच्या घरी बाल्कनी किंवा खोलीत ऑयस्टर मशरूम पिकवण्यासाठी उत्तम आहे. तर ₹499 च्या व्यावसायिक कोर्समध्ये बटन व ऑयस्टर दोन्हीचे व्यावसायिक शेड प्लॅनिंग, तापमान नियंत्रण, प्रोजेक्ट रिपोर्ट आणि मार्केट लिंकेज समाविष्ट आहे.",
  },
  {
    q: "प्रशिक्षणानंतर कोर्स पूर्णत्वाचे प्रमाणपत्र (Certificate) मिळते का?",
    a: "होय, कोर्स यशस्वीरीत्या पूर्ण केल्यानंतर 'Organic Mushrooms Farm Certified Mushroom Grower' चे डिजिटल व्हेरिफायड प्रमाणपत्र दिले जाते, जे बँक लोन व सबसिडीसाठी उपयुक्त ठरते.",
  },
  {
    q: "ट्रेनिंगनंतर बॅकअप सपोर्ट कसा आणि किती काळ मिळतो?",
    a: "सर्व प्रशिक्षणार्थींना समर्पित व्हॉट्सॲप सपोर्ट ग्रुपमध्ये जोडले जाते, जिथे पहिले बॅच पूर्ण होईपर्यंत दररोज तज्ज्ञांकडून थेट तांत्रिक शंकांचे निरसन केले जाते.",
  },
  {
    q: "कोरेगाव पार्क व कल्याणी नगर परिसरातील इच्छुकांसाठी ऑफलाइन सेशन्स कधी होतात?",
    a: "नोकरदार व्यक्ती, व्यावसायिक आणि गृहिणींसाठी दर शनिवार व रविवारी विशेष वीकेंड प्रॅक्टिकल बॅचेस आयोजित केल्या जातात.",
  },
];

export default function MushroomCultivationTrainingFeesPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-cultivation-training-fees";

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
        name: "Mushroom Cultivation Training Fees – Koregaon Park Pune | Organic Mushrooms Farm",
        description:
          "Koregaon Park मधील लोकांसाठी transparent mushroom cultivation training fees. कोणतेही hidden charges नाहीत. Basic online कोर्स ₹299, कमर्शियल मास्टरक्लास ₹499 व ऑफलाइन हँड्स-ऑन प्रॅक्टिकल.",
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
            name: "Mushroom Cultivation Training Fees",
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
      id="training-fees-page"
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
            Training Fees
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
            <span>Koregaon Park, Bund Garden & Camp Transparent Pricing</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Koregaon Park, Pune येथे{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Mushroom Cultivation Training Fees
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>100% पारदर्शक फी रचना</span>
            <span>•</span>
            <span>कोणतेही Hidden Charges नाहीत</span>
            <span>•</span>
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              सर्व कोर्सेस फी तपशील
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1787977978/mushroomcultivationarea_j6tozj.webp"
              alt="Hands-on mushroom cultivation training practical session and workshop in Koregaon Park Pune"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Transparent hands-on training packages including materials and starter spawn in Koregaon Park, Pune.
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
              कोरेगाव पार्क मधील लोकांसाठी पूर्णपणे पारदर्शक व वाजवी फी रचना
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Training निवडताना fees किती आहे आणि त्यामध्ये नक्की काय काय included आहे हे जाणून घेणं गरजेचं असतं.</strong> Koregaon Park सारख्या premium भागातील ग्राहक विशेषतः value-for-money कडे लक्ष देतात.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              training packages
            </Link>{" "}
            मध्ये fees पूर्णपणे transparent ठेवलेली आहे — <strong>basic online training ₹299 पासून सुरू होतं</strong>, तर offline hands-on training साठी वेगळं package उपलब्ध आहे ज्यामध्ये materials,{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              दर्जेदार spawn (बियाणे)
            </Link>{" "}
            आणि follow-up support सुद्धा included आहे.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>कोणतेही hidden charges नाहीत, सगळं आधीच स्पष्ट सांगितलं जातं.</strong> हे केंद्र Koregaon Park, Kalyani Nagar, Camp, Bund Garden, Boat Club Road आणि Yerawada मधील नागरिकांसाठी अत्यंत सोयीचे आहे.
          </p>
        </section>

        {/* Section 1: Transparent Pricing Packages */}
        <section
          id="pricing-packages"
          aria-labelledby="packages-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <CreditCard className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="packages-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. आमच्या प्रशिक्षण पॅकेजेसची सविस्तर फी रचना
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            तुमच्या वेळेनुसार आणि बजेटनुसार योग्य पॅकेज निवडा:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
            {/* Package 1 */}
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Self-Paced
                  </span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    ₹299
                  </span>
                </div>
                <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">
                  Basic Foundation
                </h3>
                <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  घरच्या घरी ऑयस्टर मशरूम लागवड सुरू करण्यासाठी उपयुक्त.
                </p>
                <ul className="text-[10.5px] text-slate-600 dark:text-slate-300 space-y-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>HD व्हिडिओ लेक्चर्स व ई-बुक</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>स्टेप-बाय-स्टेप बॅग मेकिंग SOP</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>व्हॉट्सॲप बेसिक ग्रुप सपोर्ट</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/training"
                className="mt-2 text-center text-[11px] font-bold py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                ₹299 मध्ये सामील व्हा
              </Link>
            </div>

            {/* Package 2 */}
            <div className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.01] space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                    सर्वाधिक पसंती
                  </span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    ₹499
                  </span>
                </div>
                <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">
                  Commercial Masterclass
                </h3>
                <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  बटन व ऑयस्टर दोन्हीचे व्यावसायिक शेड व मार्केट मॉडेल.
                </p>
                <ul className="text-[10.5px] text-slate-600 dark:text-slate-300 space-y-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>बटन + ऑयस्टर संपूर्ण गाईड</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>कंपोस्ट व टेम्परेचर कंट्रोल चार्ट</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>प्रोजेक्ट रिपोर्ट व बँक सबसिडी गाईड</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>व्हेरिफायड डिजिटल सर्टिफिकेट</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/training"
                className="mt-2 text-center text-[11px] font-bold py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                ₹499 मध्ये नाव नोंदवा
              </Link>
            </div>

            {/* Package 3 */}
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    In-Person
                  </span>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">
                    Custom Fee
                  </span>
                </div>
                <h3 className="text-[12px] font-bold text-slate-900 dark:text-white mb-1">
                  Offline Hands-on Farm
                </h3>
                <p className="text-[10.5px] text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                  थेट फार्मवर प्रत्यक्ष प्रात्यक्षिक व किटसह प्रशिक्षण.
                </p>
                <ul className="text-[10.5px] text-slate-600 dark:text-slate-300 space-y-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>मटेरिअल्स व स्पॉन किट समाविष्ट</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>प्रत्यक्ष पेंढा निर्जंतुकीकरण व स्पॉनिंग</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span>कन्सल्टंटशी वन-ऑन-वन चर्चा</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919203544140?text=नमस्कार,%20मला%20कोरेगाव%20पार्क%20पुणे%20येथील%20ऑफलाइन%20फार्म%20ट्रेनिंगच्या%20फीबाबत%20माहिती%20हवी%20आहे."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center text-[11px] font-bold py-1.5 rounded-lg border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
              >
                फी तपशील विचारा
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: What is Included in Training Fees */}
        <section
          id="whats-included"
          aria-labelledby="included-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <FileCheck2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="included-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. फीमध्ये नक्की काय काय समाविष्ट आहे? (Zero Hidden Costs)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या प्रशिक्षण शुल्कात खालील सर्व बाबी आधीच समाविष्ट केलेल्या असतात:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>कच्चा माल व प्रात्यक्षिक किट:</strong> ऑफलाइन सत्रात वापरला जाणारा गव्हाचा पेंढा, निर्जंतुकीकरण साहित्य आणि प्रात्यक्षिक बॅग्ज.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मशरूम बियाणे (Spawn):</strong> प्रत्यक्ष सरावासाठी आवश्यक शुद्ध लॅब-प्रमाणित स्पॉन.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>मराठी/इंग्रजी SOP गाईड व चार्ट्स:</strong> तापमान, आर्द्रता, CO2 लेव्हल आणि पेस्ट कंट्रोलचे तक्ते.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>लाईफटाईम कम्युनिटी ॲक्सेस:</strong> पुणे विभागातील अनुभवी ग्रोअर्स आणि स्थानिक खरेदीदारांशी नेटवर्किंग संधी.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Value for Money & Return on Investment */}
        <section
          id="roi-value"
          aria-labelledby="roi-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="roi-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. Value-for-Money: गुंतवणुकीचा परतावा (ROI) कसा मिळतो?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            केवळ ₹299 ते ₹499 चे अल्प प्रशिक्षण शुल्क पहिल्याच बॅचमध्ये 10 पटीने वसूल होऊ शकते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">नुकसान टाळणे:</strong>
              <span className="text-slate-600 dark:text-slate-300">अयोग्य निर्जंतुकीकरणामुळे बॅग्ज खराब होणे व स्पॉन वाया जाणे वैज्ञानिक पद्धतीमुळे 100% टळते.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">थेट शेफ लिंकेज:</strong>
              <span className="text-slate-600 dark:text-slate-300">कोरेगाव पार्क व कल्याणी नगर मधील कॅफेजशी करार करून ₹220-₹280/किग्रा प्रीमियम विक्री.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सरकारी सबसिडी:</strong>
              <span className="text-slate-600 dark:text-slate-300">प्रमाणपत्राच्या आधारे राष्ट्रीय फलोत्पादन अभियान (MIDH) अंतर्गत 40% ते 50% सबसिडी मिळवणे.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="fees-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (प्रशिक्षण फी व अटींविषयी वारंवार विचारले जाणारे प्रश्न)
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
              आजच पारदर्शक व योग्य फीमध्ये आपले मशरूम प्रशिक्षण बुक करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              कोणतेही छुपे शुल्क न देता परिपूर्ण प्रॅक्टिकल ज्ञान मिळवा. ऑनलाइन व ऑफलाइन दोन्ही पर्यायांसह उपलब्ध.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  मूलभूत प्रशिक्षण (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                नवशिक्यांसाठी घरगुती लागवड गाईड, ई-बुक आणि बेसिक सपोर्ट.
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
              <span>प्रशिक्षण सुरू करा (₹299)</span>
            </Link>
            <Link
              href="/locations/pune/oyster-mushroom-training-center"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Kalyani Nagar सेंटर माहिती</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मला%20कोरेगाव%20पार्क%20पुणे%20येथील%20मशरूम%20ट्रेनिंगच्या%20फीबाबत%20सविस्तर%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp वर फी विचारा</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
