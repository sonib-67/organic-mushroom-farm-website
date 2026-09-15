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
  Laptop,
  Video,
  Download,
  Users,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Online Training – Pashan Pune | Organic Mushrooms Farm",
  description:
    "Pashan Pune मधील रहिवाशांसाठी घरबसल्या online mushroom farming training. Video lectures, live Q&A आणि practical guidance एकत्र.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-online",
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
      "Mushroom Farming Online Training – Pashan Pune | Organic Mushrooms Farm",
    description:
      "Pashan Pune मधील रहिवाशांसाठी घरबसल्या online mushroom farming training. Video lectures, live Q&A आणि practical guidance एकत्र.",
    url: "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-online",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "mr_IN",
  },
  twitter: {
    card: "summary",
    title:
      "Mushroom Farming Online Training – Pashan Pune | Organic Mushrooms Farm",
    description:
      "Pashan Pune मधील रहिवाशांसाठी घरबसल्या online mushroom farming training. Video lectures, live Q&A आणि practical guidance एकत्र.",
  },
};

const faqs = [
  {
    q: "Online training मध्ये practical part कसा cover होतो?",
    a: "Video demonstrations सोबत, तुम्ही घरीच छोटी practice करून शिकू शकता आणि doubts live session मध्ये विचारू शकता. सबस्ट्रेट निर्जंतुकीकरणापासून स्पॉनिंग व बॅग मेकिंगचे क्लोज-अप व्हिडिओ दिले जातात.",
  },
  {
    q: "Internet नीट नसेल तर?",
    a: "सगळे videos download करून नंतरही बघता येतात, त्यामुळे सतत internet गरजेचं नाही. तुम्ही ऑफलाइन सेव्ह करून तुमच्या मोकळ्या वेळेत कधीही उजळणी करू शकता.",
  },
  {
    q: "पाषाण, बाणेर व सूस रोड परिसरात प्रात्यक्षिक किट घरपोच मिळेल का?",
    a: "होय, पाषाण, बावधन आणि सूस रोड भागात 1 किलो उच्च दर्जाचे लॅब-सर्टिफाईड मशरूम स्पॉन, पीपी बॅग्ज, फॉर्मलिन/बाव्हिस्टिन आणि छापील गाईड थेट कुरिअरने घरपोच दिली जाते.",
  },
  {
    q: "घराच्या टेरेसवर किंवा बाल्कनीत ऑयस्टर मशरूम शेती करता येते का?",
    a: "नक्कीच! पाषाण परिसरातील अनेक गृहिणी व नोकरदारांनी घराच्या टेरेसवर शेडनेट लावून किंवा मोकळ्या बाल्कनीमध्ये 20 ते 50 बॅग्ज लावून यशस्वी घरगुती शेती सुरू केली आहे.",
  },
  {
    q: "लाईव्ह डाऊट क्लिअरिंग सेशन कधी असतात?",
    a: "दर आठवड्याला तज्ज्ञांसोबत थेट लाईव्ह Q&A वेबिनार आणि 24x7 व्हॉट्सॲप सपोर्ट उपलब्ध असतो, जेणेकरून कोणत्याही समस्येचे तात्काळ निराकरण होते.",
  },
  {
    q: "कोर्स पूर्ण केल्यानंतर अधिकृत सर्टिफिकेट मिळते का?",
    a: "होय, सर्व व्हिडिओ मॉड्यूल्स पूर्ण केल्यावर तुम्हाला डिजिटल व्हेरिफायड सर्टिफिकेट आणि बँक लोनसाठी आवश्यक असणारा प्रोजेक्ट रिपोर्ट पीडीएफ स्वरूपात मिळतो.",
  },
];

export default function MushroomFarmingTrainingOnlinePage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/locations/pune/mushroom-farming-training-online";

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
        name: "Mushroom Farming Online Training – Pashan Pune | Organic Mushrooms Farm",
        description:
          "Pashan Pune मधील रहिवाशांसाठी घरबसल्या online mushroom farming training. Video lectures, live Q&A आणि practical guidance एकत्र.",
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
            name: "Farming Training Online",
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
      id="farming-training-online-page"
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
            Farming Training Online
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
            <span>Pashan, Bavdhan, Sus Road & Pune Online Learning Hub</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Pashan, Pune येथील रहिवाशांसाठी{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Online Mushroom Farming Training
            </span>
          </h1>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-slate-500 text-xs font-medium">
            <span>घरबसल्या उच्च दर्जाचे व्हिडिओ लेक्चर्स</span>
            <span>•</span>
            <span>लाईव्ह Q&A आणि डाऊनलोड करण्यायोग्य PDF</span>
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
              alt="Online mushroom farming training video lectures and practical guidance for Pashan residents"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Self-paced recorded video lectures, live doubt-clearing sessions, and downloadable PDF guides for Pashan residents.
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
              पाषाण, बावधन व सूस रोड रहिवाशांसाठी घरबसल्या ऑनलाइन मशरूम फार्मिंग प्रशिक्षण
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Pashan भाग टेकड्यांनी वेढलेला आणि तुलनेने शांत residential area आहे</strong>, जिथून city च्या मध्यभागी जाणं रोज शक्य नसतं. <strong>अशा वेळी online training हा सर्वांत सोपा पर्याय ठरतो</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            आमच्या online module मध्ये <strong>तुम्हाला recorded video lectures, live doubt-clearing sessions आणि downloadable PDF guides मिळतात</strong>, जेणेकरून <strong>तुम्ही स्वतःच्या वेळेनुसार शिकू शकता</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            <strong>Pashan, Bavdhan आणि Sus Road भागातील अनेक गृहिणींनी आधीच हे online training पूर्ण केलं आहे</strong> आणि <strong>घरच्या टेरेसवर छोट्या प्रमाणात farming सुरू केली आहे</strong>.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            घरबसल्या स्वतःच्या मोकळ्या वेळेत उच्च दर्जाचे मशरूम उत्पादन शिकण्यासाठी आमचे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन प्रशिक्षण मॉड्यूल्स (₹299 पासून)
            </Link>{" "}
            अत्यंत सोयीचे ठरतात. यासोबतच तुम्हाला आवश्यक असणारे{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              शुद्ध स्पॉन बियाणे
            </Link>{" "}
            आणि घरपोच स्टार्टर किट पुरवले जाते. तसेच जवळच्या केंद्राच्या माहितीसाठी{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              बावधन ट्रेनिंग सेंटर
            </Link>{" "}
            आणि{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-classes-online"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              ऑनलाइन क्लासेस
            </Link>{" "}
            सुद्धा पाहू शकता.
          </p>
        </section>

        {/* Section 1: Online Course Flexibility & Video Features */}
        <section
          id="course-features"
          aria-labelledby="features-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Laptop className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="features-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. ऑनलाइन ट्रेनिंगचे घटक व सोयी (Recorded Videos + Live Support)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पाषाण, सूस रोड आणि बाणेर परिसरातील गृहिणी व नोकरदारांसाठी खास डिझाईन केलेले मॉडेल:
          </p>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-1 text-[11px]">
            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Video className="w-3.5 h-3.5 shrink-0" />
                <span>Recorded HD Lectures</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                फार्मवरील प्रत्यक्ष चित्रीकरणासह हाय-डेफिनिशन प्रॅक्टिकल व्हिडिओ लेक्चर्स.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>Live Doubt-Clearing</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                साप्ताहिक थेट लाईव्ह वेबिनार्स आणि व्हॉट्सॲपवर त्वरित शंका निरसन.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01] space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <Download className="w-3.5 h-3.5 shrink-0" />
                <span>Downloadable Guides</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                ऑफलाइन सेव्ह करण्यासाठी संपूर्ण मराठी व इंग्रजी पीडीएफ मॅन्युअल्स.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Home Terrace & Balcony Farming Architecture */}
        <section
          id="terrace-farming"
          aria-labelledby="terrace-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="terrace-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. पाषाणमध्ये घराच्या टेरेस किंवा बाल्कनीत शेती कशी सुरू करावी?
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            कमी जागेत आणि कमी खर्चात उच्च उत्पादन मिळवण्याची शास्त्रीय पद्धत:
          </p>

          <div className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>जागेची निवड व शेडनेट कव्हर:</strong> टेरेसवर 75% ग्रीन शेडनेट लावून किंवा बाल्कनीच्या एका सावलीच्या कोपऱ्यात 10 बाय 10 फुटांची जागा तयार करणे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>पेंढा निर्जंतुकीकरण व स्पॉनिंग:</strong> घरात उपलब्ध असणाऱ्या ड्रममध्ये पेंढा उकळून निर्जंतुक करणे आणि थरांमध्ये स्पॉन पेरणे.
              </span>
            </div>
            <div className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>तापमान व आर्द्रता नियंत्रण:</strong> पाषाणच्या हवामानानुसार हॅन्ड स्प्रेअरने दिवसातून 2-3 वेळा पाणी मारून 80% आर्द्रता टिकवणे.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>काढणी व स्थानिक विक्री:</strong> 20 ते 25 दिवसांत ताजे ऑयस्टर मशरूम काढून स्वतःच्या सोसायटीत किंवा पाषाण-बाणेर मार्केटमध्ये ₹220 ते ₹260 प्रति किलो विक्री.
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Home Delivery of Kits & Direct WhatsApp Mentorship */}
        <section
          id="starter-kits"
          aria-labelledby="kits-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="kits-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. घरपोच स्टार्टर किट व 24x7 मेंटॉरशिप (Complete Beginner Support)
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            ऑनलाइन शिकतानाही तुम्हाला पूर्ण वैयक्तिक मार्गदर्शन मिळते:
          </p>

          <div className="grid sm:grid-cols-3 gap-2 pt-1 text-[11px]">
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">घरपोच स्पॉन किट:</strong>
              <span className="text-slate-600 dark:text-slate-300">पाषाण, बावधन व सूस रोड भागात कुरिअरने उच्च दर्जाचे स्पॉन व पीपी बॅग्ज 48 तासांत मिळतात.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">फोटो/व्हिडिओ तपासणी:</strong>
              <span className="text-slate-600 dark:text-slate-300">तुमच्या बॅगची वाढ योग्य होत आहे की नाही, हे व्हॉट्सॲपवर फोटो पाठवून तपासून घ्या.</span>
            </div>
            <div className="p-2.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.01]">
              <strong className="text-slate-900 dark:text-white block mb-0.5">सर्टिफिकेट व प्रोजेक्ट रिपोर्ट:</strong>
              <span className="text-slate-600 dark:text-slate-300">कोर्स पूर्ण केल्यावर अधिकृत डिजिटल सर्टिफिकेट व बँक लोनसाठी प्रोजेक्ट रिपोर्ट उपलब्ध.</span>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section
          id="online-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (पाषाण ऑनलाइन मशरूम फार्मिंग ट्रेनिंगविषयी वारंवार विचारले जाणारे प्रश्न)
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
              पाषाणमध्ये घरबसल्या मशरूम शेतीचे व्यावसायिक धडे आजच गिरवा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              नोंदणी करा, व्हिडिओ मॉड्यूल्स ॲक्सेस करा, स्टार्टर किट मागवा आणि घरच्या टेरेसवर मशरूम उत्पादन सुरू करा.
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
                रेकॉर्डेड व्हिडिओ मॉड्यूल्स, ई-बुक्स, डाऊनलोड करण्यायोग्य पीडीएफ गाईड्स व व्हॉट्सॲप सपोर्ट.
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
                बटन + ऑयस्टर कमर्शियल शेड प्लॅन, नाबार्ड बँक सबसिडी प्रोजेक्ट रिपोर्ट आणि व्हेरिफायड सर्टिफिकेट.
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
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20पाषाण/पुणे%20येथून%20आहे.%20मला%20ऑनलाइन%20मशरूम%20फार्मिंग%20ट्रेनिंगबाबत%20माहिती%20हवी%20आहे."
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
