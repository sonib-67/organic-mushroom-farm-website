import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Calendar,
  HelpCircle,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "बीकानेर में सफल मशरूम व्यापार: Setup & Training Guide",
  description:
    "बीकानेर (राजस्थान) में कम लागत और कम पानी में अपना मशरूम बिज़नेस शुरू करें! हम आपको बेहतरीन ट्रेनिंग प्रोग्राम, हाई-यील्ड स्पॉन और पूरा फार्म सेटअप देते हैं।",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "बीकानेर में सफल मशरूम व्यापार: Setup & Training Guide",
    description:
      "बीकानेर (राजस्थान) में कम लागत और कम पानी में अपना मशरूम बिज़नेस शुरू करें! हम आपको बेहतरीन ट्रेनिंग प्रोग्राम, हाई-यील्ड स्पॉन और पूरा फार्म सेटअप देते हैं।",
    url: "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "बीकानेर में सफल मशरूम व्यापार: Setup & Training Guide",
    description:
      "बीकानेर (राजस्थान) में कम लागत और कम पानी में अपना मशरूम बिज़नेस शुरू करें! हम आपको बेहतरीन ट्रेनिंग प्रोग्राम, हाई-यील्ड स्पॉन और पूरा फार्म सेटअप देते हैं।",
  },
};

export default function BikanerTrainingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan#webpage",
        url: "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan",
        name: "बीकानेर में सफल मशरूम व्यापार: Setup & Training Guide",
        description:
          "बीकानेर (राजस्थान) में कम लागत और कम पानी में अपना मशरूम बिज़नेस शुरू करें! हम आपको बेहतरीन ट्रेनिंग प्रोग्राम, हाई-यील्ड स्पॉन और पूरा फार्म सेटअप देते हैं।",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://organicmushroomsfarm.com/#website",
          url: "https://organicmushroomsfarm.com",
          name: "Organic Mushrooms Farm",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan#breadcrumb",
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
            name: "Rajasthan",
            item: "https://organicmushroomsfarm.com/states/rajasthan",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Bikaner",
            item: "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "बीकानेर में mushroom farming की लागत कितनी है?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "स्केल के हिसाब से अलग होती है — घरेलू छोटी यूनिट के लिए ₹10,000-₹25,000 से शुरुआत की जा सकती है, कमर्शियल स्केल के लिए ज़्यादा निवेश चाहिए।",
            },
          },
          {
            "@type": "Question",
            name: "क्या students padhai ke saath mushroom training kar sakte hain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "हां, ऑनलाइन ट्रेनिंग इस तरह डिज़ाइन की गई है कि स्टूडेंट्स कॉलेज की पढ़ाई के साथ-साथ भी सीख सकें।",
            },
          },
          {
            "@type": "Question",
            name: "मशरूम स्पॉन बीकानेर में कहां मिलेगा?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Organic Mushrooms Farm से पैन-इंडिया डिलीवरी के साथ बीकानेर और आसपास के सभी इलाकों में स्पॉन मिलता है।",
            },
          },
          {
            "@type": "Question",
            name: "मशरूम फार्मिंग सीखने के बाद कौन-कौन से करियर विकल्प हैं?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "प्रोडक्शन, स्पॉन सप्लाई, फ्रेश और ड्राई मशरूम बिज़नेस, और कंसल्टेंसी जैसे कई करियर विकल्प मशरूम फार्मिंग सीखने के बाद खुलते हैं।",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan#localbusiness",
        name: "Organic Mushrooms Farm",
        image: "https://organicmushroomsfarm.com/logo.png",
        url: "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan",
        areaServed: [
          "बीकानेर",
          "Gangashahar",
          "Mukta Prasad Nagar",
          "Pawanpuri",
          "Karni Nagar",
          "Rani Bazar",
          "Jai Narayan Vyas Colony",
          "Shastri Nagar",
          "Lalgarh",
          "Nokha",
          "Deshnoke",
          "Kolayat",
          "Lunkaransar",
          "Napasar",
          "Shri Dungargarh",
          "Khajuwala",
          "Kolayat Rural Region",
          "Sujangarh",
          "Bikampur",
        ],
        description:
          "बीकानेर में मशरूम फार्म सेटअप, स्पॉन सप्लाई, स्टूडेंट्स और किसानों के लिए ऑनलाइन-ऑफलाइन ट्रेनिंग, फ्रेश और ड्राई मशरूम सेल, कंसल्टेंसी और टर्नकी मशरूम प्रोजेक्ट्स।",
        priceRange: "₹₹",
      },
      {
        "@type": "Course",
        "@id": "https://organicmushroomsfarm.com/mushroom-farming-bikaner-rajasthan#course",
        name: "मशरूम फार्मिंग ट्रेनिंग बीकानेर",
        description:
          "स्टूडेंट्स, किसानों और उद्यमियों के लिए स्पॉन कल्टिवेशन, हार्वेस्टिंग, पैकेजिंग और मार्केटिंग को कवर करने वाली ऑनलाइन और ऑफलाइन मशरूम फार्मिंग ट्रेनिंग।",
        provider: {
          "@type": "Organization",
          name: "Organic Mushrooms Farm",
          sameAs: "https://organicmushroomsfarm.com",
        },
      },
    ],
  };

  const faqs = [
    {
      q: "1. बीकानेर में mushroom farming की लागत कितनी है?",
      a: "स्केल रे मुजब अलग-अलग होवे है — घरेलू स्तर माथे छोटी यूनिट सारु ₹10,000 सु ₹25,000 सु सरू कर सको हो, व्यावसायिक स्तर सारु मोटो निवेश चाईजे।",
    },
    {
      q: "2. कितना मुनाफा हो सकता है?",
      a: "सही सार-संभाल और लगातार मांग रे सागे हर महीने घणो चोखो मार्जिन बणा सको हो.",
    },
    {
      q: (
        <>
          3.{" "}
          <Link
            href="/spawn-seed"
            className="hover:text-emerald-500 transition-colors"
          >
            Mushroom spawn
          </Link>{" "}
          कहां मिलेगा?
        </>
      ),
      a: "थारे अण म्हाने सु पूरे राजस्थान और भारत में चोखी डिलीवरी रे सागे बीज मिल जावेगो.",
    },
    {
      q: (
        <>
          4.{" "}
          <Link
            href="/training"
            className="hover:text-emerald-500 transition-colors"
          >
            Training
          </Link>{" "}
          कैसे join करें?
        </>
      ),
      a: "व्हाट्सएप रे माध्यम सु सीधा संपर्क कर'र ऑनलाइन या ऑफलाइन ट्रेनिंग सारु रजिस्ट्रेशन करवा सको हो.",
    },
    {
      q: "5. क्या students padhai ke saath training kar sakte hain?",
      a: "बिल्कुल सा, ऑनलाइन ट्रेनिंग इण तरां सु बणाई है के टाबर कॉलेज रे सागे-सागे आसानी सु सीख सके.",
    },
    {
      q: (
        <>
          6. बीकानेर में{" "}
          <Link
            href="/training"
            className="hover:text-emerald-500 transition-colors"
          >
            offline training
          </Link>{" "}
          मिलेगी?
        </>
      ),
      a: "हाजी, बीकानेर में प्रैक्टिकल ट्रेनिंग सारु ऑफलाइन सुविदावां री पूरी व्यवस्था है.",
    },
    {
      q: "7. कितनी जगह चाहिए?",
      a: "छोटे स्तर सारु 100-200 sq ft बहुत है, बड़े बिजनेस सारु मोटी जगह चाईजे.",
    },
    {
      q: "8. क्या महिलाएं mushroom farming शुरू कर सकती हैं?",
      a: "बिल्कुल सा, घर बैठे लुगायां आ काम घणी सहेली तरां सु सरू कर सके है.",
    },
    {
      q: "9. क्या यह students के लिए career विकल्प बन सकता है?",
      a: "हां, प्रोडक्शन, स्पॉन सप्लाई, कंसल्टेंसी और मार्केटिंग जिया घणा रस्ता खुले है.",
    },
    {
      q: (
        <>
          10. क्या{" "}
          <Link
            href="/subsidy"
            className="hover:text-emerald-500 transition-colors"
          >
            government subsidy
          </Link>{" "}
          उपलब्ध है?
        </>
      ),
      a: "पात्रता रे मुजब योजनावां रो लाभ मिल सके है, म्हे थारी पूरी मदद करां हां.",
    },
    {
      q: "11. कौन सी mushroom variety सबसे अच्छी है?",
      a: (
        <>
          नया कल्टीवेटर्स सारु{" "}
          <Link
            href="/mushroom-types"
            className="text-emerald-500 hover:underline"
          >
            ऑयस्टर मशरूम (Oyster Mushroom)
          </Link>{" "}
          सबसे सहेलो और बढ़िया विकल्प है.
        </>
      ),
    },
    {
      q: "12. Mushroom kaise bechein?",
      a: "लोकल होटल, रेस्टोरेंट, ऑर्गेनिक स्टोर और व्हाट्सएप/सोशल मीडिया रे सु डायरेक्ट गिराहकां तक.",
    },
    {
      q: (
        <>
          13. क्या आप{" "}
          <Link
            href="/book-consultant"
            className="hover:text-emerald-500 transition-colors"
          >
            consultancy
          </Link>{" "}
          देते हैं?
        </>
      ),
      a: "हांजी, मशरूम कल्टीवेशन सु ले'र मार्केटिंग तक पूरी कंसल्टेंसी सुविदावां उपलब्ध है.",
    },
    {
      q: (
        <>
          14.{" "}
          <Link
            href="/articles/turnkey-commercial-setup"
            className="hover:text-emerald-500 transition-colors"
          >
            Turnkey project
          </Link>{" "}
          भी मिलता है?
        </>
      ),
      a: "हां, मोटा इन्वेस्टर्स सारु कंपलीट टर्नकी मशरूम प्रोजेक्ट सेटअप दियो जावे है.",
    },
    {
      q: "15. Marketing support मिलेगा?",
      a: "हांजी, पैकिंग, ब्रांडिंग और बायर्स री ओळखाण करवाण में पूरो सहयोग मिलेगो.",
    },
    {
      q: "16. बीकानेर के किन इलाकों में सेवा उपलब्ध है?",
      a: "गंगाशहर, मुक्ता प्रसाद नगर, पवनपुरी, करणी नगर, राणी बाजार, जय नारायण व्यास कॉलोनी, शास्त्री नगर, लालगढ़ और आसपास रे सगळी इलाकां में.",
    },
    {
      q: "17. क्या Nokha या Deshnoke में भी सेवा मिलेगी?",
      a: "हांजी बिल्कुल, नोखा, देशनोक, कोलायत, लूणकरणसर जिया सगळा नजीकी इलाका म्हे कवर करां हां.",
    },
    {
      q: "18. Dry mushroom की shelf life कितनी होती है?",
      a: "बढ़िया सार-संभाल रे सागे सूखा मशरूम कई महीनों तक खराब कोनी होवे.",
    },
    {
      q: "19. क्या medicinal mushroom farming profitable है?",
      a: "हां, लायंस मेन और रिशी जिया औषधीय मशरूम प्रीमियम भाव माथे बिके है, अणमें मोटो मुनाफो है.",
    },
    {
      q: (
        <>
          20.{" "}
          <Link
            href="/business-plan"
            className="hover:text-emerald-500 transition-colors"
          >
            Business plan
          </Link>{" "}
          कैसे मिलेगा?
        </>
      ),
      a: "थारे बजट और स्केल रे मुजब म्हे थारे सारु कस्टमाइज्ड प्रोजेक्ट रिपोर्ट और आरओआई एनालिसिस बणा'र देवां हां.",
    },
    {
      q: (
        <>
          21.{" "}
          <Link
            href="/contact"
            className="hover:text-emerald-500 transition-colors"
          >
            Contact
          </Link>{" "}
          कैसे करें?
        </>
      ),
      a: "व्हाट्सएप रे माध्यम सु सीधा संपर्क कर सको हो, जिणरो जवाब सबसे बेगो (fast) मिलेगो.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen pt-24 sm:pt-28 pb-20 relative overflow-hidden font-sans">
        {/* Ambient Background Colors */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <article className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-emerald-500 flex items-center gap-1 transition-colors"
            >
              Home
            </Link>
            <ArrowRight size={14} className="shrink-0" />
            <Link
              href="/states"
              className="hover:text-emerald-500 transition-colors"
            >
              States
            </Link>
            <ArrowRight size={14} className="shrink-0" />
            <Link
              href="/states/rajasthan"
              className="hover:text-emerald-500 transition-colors"
            >
              Rajasthan
            </Link>
            <ArrowRight size={14} className="shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white">
              Bikaner
            </span>
          </nav>

          <div className="glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-7">
            {/* Header / Intro */}
            <header className="text-center border-b dark:border-white/10 border-black/10 pb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-3.5 border border-emerald-500/20">
                <MapPin size={14} /> बीकानेर विशेष (Rajasthani Blog)
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold dark:text-white text-slate-900 leading-tight mb-3">
                बीकानेर में लो-बजट (Low-Budget) मशरूम फार्मिंग: प्रैक्टिकल ट्रेनिंग और सेटअप सपोर्ट
              </h1>
              <h2 className="text-sm sm:text-base md:text-lg font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-4">
                बीकानेर में कम बजट (Low Budget) के साथ मशरूम फार्म कैसे लगाएं?
              </h2>
              <p className="text-[#7C3AED] dark:text-purple-400 font-semibold tracking-wider uppercase text-xs">
                Organic Mushrooms Farm — Bikaner, Rajasthan Special Edition
              </p>
            </header>

            {/* परिचय */}
            <section className="space-y-3.5">
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
                राजस्थान के बीकानेर क्षेत्र में पानी की कमी अक्सर पारंपरिक खेती में रुकावट बनती है। लेकिन मशरूम कल्टीवेशन (Mushroom cultivation) एक ऐसा शानदार विकल्प है, जिसे बंद कमरों में, बहुत कम पानी और छोटी सी जगह में किया जा सकता है। यह यहाँ के किसानों और युवाओं के लिए कम निवेश में ज्यादा मुनाफे (high profit with low investment) का एक बेहतरीन जरिया है।
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
                Organic Mushroom Farm बीकानेर के लोगों को इस व्यवसाय से जोड़ने के लिए विशेष ट्रेनिंग प्रोग्राम्स चला रहा है। हम आपको कम लागत में एक बढ़िया फार्म तैयार करने का पूरा लेआउट और सेटअप (farm layout and setup) देते हैं। इसके साथ ही, बेस्ट क्वालिटी का स्पॉन (premium mushroom seeds) भी सीधे आपके लोकेशन पर उपलब्ध कराते हैं।
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm sm:text-base">
                फसल तैयार होने के बाद सबसे जरूरी होता है उसे सही दाम पर बेचना। बीकानेर की मंडियों, रेस्टोरेंट्स और राजस्थान के अन्य शहरों में (in local mandis and other cities of Rajasthan) अपने मशरूम को कैसे सेल करें, इसके लिए हमारी टीम आपको पूरा सेल्स और मार्केटिंग सपोर्ट (sales and marketing support) भी देती है। आज ही अपने बिज़नेस की शुरुआत करें!
              </p>
            </section>

            {/* क्यों है */}
            <section className="space-y-3 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                Mushroom Farming सिर्फ खेती नहीं, एक स्किल क्यों है?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs sm:text-sm">
                आजकल पूरे देस रे भणाई आळा संसथावां (educational institutions) में टाबरां ने इसा काम री चीजां (practical skills) सिखावण माथे जोर दियो जा रह्यो है, जणसु वे खुद रो रोजगार (self-employment) खड़ो कर सके। मशरूम फार्मिंग इणरो एक बड़ो और घणो चोखो उदाहरण है, क्यूंकि इणमें एक सागे ई सगळी चीजां शामिल है:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs sm:text-sm">
                {[
                  "आधुनिक खेती (Modern Agriculture)",
                  "बिजनेस री योजना बणावणी (Business Planning)",
                  "फूड प्रोसेसिंग (Food Processing)",
                  "खुद री ब्रांडिंग (Branding)",
                  "मार्केटिंग और बिक्री (Marketing)",
                  "उद्यमशीलता (Entrepreneurship)",
                ].map((skill, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300 text-slate-700">{skill}</span>
                  </li>
                ))}
              </ul>
              <p className="dark:text-slate-400 text-slate-600 font-medium text-xs mt-1">
                ओ हुनर इसो है जो आगे जा&apos;र थे कोई भी काम धंधो करो, थारे हमेशा काम आवेगो।
              </p>
            </section>

            {/* करियर विकल्प */}
            <section className="space-y-3 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                Mushroom Farming सीखने के बाद कौन-कौन से करियर विकल्प?
              </h2>
              <div className="grid md:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-900 mb-1 text-xs sm:text-sm">
                    <Link
                      href="/articles/turnkey-commercial-setup"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      मशरूम प्रोडक्शन
                    </Link>{" "}
                    (Mushroom Production)
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    बड़े पैमाने माथे मशरूम कल्टीवेशन सरू कर&apos;र खुद रो उत्पादन रो व्यापार बणावणो।
                  </p>
                </div>
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-900 mb-1 text-xs sm:text-sm">
                    <Link
                      href="/spawn-seed"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      मशरूम स्पॉन सप्लाई
                    </Link>{" "}
                    (Mushroom Spawn Supply)
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    चोखी क्वालिटी रो बीज बणाणो और बेेचणो — ओ एक बारो-मास चालण वालो पक्को धंधो है।
                  </p>
                </div>
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-900 mb-1 text-xs sm:text-sm">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      ताजा मशरूम रो धंधो
                    </Link>{" "}
                    (Fresh Mushroom Business)
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    बीकानेर और आस-पास रा रेस्टोरेंट, होटल और सब्जी री दुकानदारां ने ताजा मशरूम सप्लाई करणो।
                  </p>
                </div>
                <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-900 mb-1 text-xs sm:text-sm">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      सूखा मशरूम रो काम
                    </Link>{" "}
                    (Dry Mushroom Processing)
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    मशरूम ने सुखा&apos;र उणरो पाउडर बणाणो या वैल्यु एडेड प्रोडक्ट्स बणा&apos;र देश-विदेश में बेचणो।
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5 mt-2">
                <h3 className="font-bold dark:text-white text-slate-900 mb-1 text-xs sm:text-sm">
                  <Link
                    href="/book-consultant"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    मशरूम कंसल्टेंसी
                  </Link>{" "}
                  (Mushroom Consultancy)
                </h3>
                <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                  बीकानेर रा किसाणां और नवयुवकां ने मशरूम बिजनेस सरू करवाण में मदद देवणी — ओ एक ज्ञान-आधारित (knowledge-based) चोखो करियर है।
                </p>
              </div>
            </section>

            {/* ऑनलाइन व ऑफलाइन ट्रेनिंग */}
            <section className="space-y-3 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                Mushroom Training (सिखलाई सुविदावां)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1.5">
                    <Link
                      href="/training"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Online Mushroom Training
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 mb-2 leading-relaxed">
                    टाबर कदेई भी और कठे सु भी सीख सके है — भणाई-लिखाई रे सागे-सागे। इण ट्रेनिंग में म्हे सिखास्यां:
                  </p>
                  <ul className="text-xs dark:text-slate-300 text-slate-700 space-y-1 mb-3">
                    <li>• मशरूम उगावणो (Mushroom Cultivation)</li>
                    <li>• स्पॉन (बीज) सार-संभाल (Spawn Management)</li>
                    <li>• फसल री देखभाल (Crop Care)</li>
                    <li>• मशरूम तोड़नो (Harvesting) &amp; पैकिंग करणो</li>
                    <li>• मार्केटिंग और बिजनेस रो विकास</li>
                  </ul>
                  <p className="text-[11px] dark:text-slate-400 text-slate-600 italic mb-3">
                    सरल मारवाड़ी/हिंदी भासा में पूरी ट्रेनिंग दी जावे है, जाकि थे कॉलेज री पढ़ाई डिस्टर्ब कर्या बिना ही घर बैठ्या आखा काम ने सीख सको।
                  </p>
                  <Link
                    href="/training"
                    className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1"
                  >
                    Online Training Details <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="p-5 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1.5">
                    <Link
                      href="/training"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Offline Mushroom Training
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 mb-2 leading-relaxed">
                    इणमें थारे सारु प्रैक्टिकल क्लासेज होसी:
                  </p>
                  <ul className="text-xs dark:text-slate-300 text-slate-700 space-y-1 mb-3">
                    <li>• लाइव डेमो (Live Demonstrations)</li>
                    <li>• मशरूम रो बेड तैयार करणो (Bed Preparation)</li>
                    <li>• बीज (Spawn) हाथ सु लगावणो (Spawn Handling)</li>
                    <li>• मशरूम री तोड़ाई (Harvesting)</li>
                    <li>• पूरे फार्म रो मैनेजमेंट (Farm Management)</li>
                  </ul>
                  <p className="text-[11px] dark:text-slate-400 text-slate-600 italic mb-3">
                    गंगाशहर, पवनपुरी, करणी नगर और राणी बाजार रा टाबर प्रैक्टिकल हुनर सीखण सारु ऑफलाइन ट्रेनिंग ने घणी पसंद करे है।
                  </p>
                  <Link
                    href="/training"
                    className="text-xs text-emerald-500 hover:underline font-bold flex items-center gap-1"
                  >
                    Offline Schedule <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* वैराइटी */}
            <section className="space-y-3 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                Students को कौन-कौन सी{" "}
                <Link
                  href="/mushroom-types"
                  className="text-emerald-500 hover:underline"
                >
                  Mushroom Varieties
                </Link>{" "}
                पता होनी चाहिए
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {[
                  { name: "ऑयस्टर मशरूम", sub: "Oyster — सबसे आसान" },
                  { name: "बटन मशरूम", sub: "Button — सबसे लोकप्रिय" },
                  { name: "मिल्की मशरूम", sub: "Milky — गर्मियों में बेस्ट" },
                  { name: "शिटाके मशरूम", sub: "Shiitake — प्रीमियम गोर्मे" },
                  { name: "लायंस मेन मशरूम", sub: "Lion's Mane — वैलनेस" },
                  { name: "रिशी मशरूम", sub: "Reishi — औषधीय" },
                  { name: "टर्की टेल मशरूम", sub: "Turkey Tail — गुणकारी" },
                  { name: "कोर्डिसेप्स मशरूम", sub: "Cordyceps — कीमती वीआईपी" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5 text-center text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <Link
                      href="/mushroom-types"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <span className="block text-[10px] text-slate-500 font-normal mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* फार्म सेटअप व स्पॉन सप्लाई */}
            <section className="space-y-4 pt-4 border-t dark:border-white/10 border-black/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                    <Link
                      href="/articles/turnkey-commercial-setup"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Mushroom Farm Setup
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    एक बढ़िया ढांचा आळे मशरूम फार्म में ग्रोइंग रूम (Growing Room), हवा रो आवण-जावण (Ventilation), नमी नियंत्रण (Humidity Control), स्टोरेज एरिया और चोखो बीज शामिल होवे है। जय नारायण व्यास कॉलोनी, शास्त्री नगर और लालगढ़ जिया इलाकां में म्हे खुद आ&apos;र थारी जगह देख&apos;र थारे मुजब कस्टमाइज्ड प्लान बणा&apos;र देवां हां।
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                    <Link
                      href="/spawn-seed"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Mushroom Spawn Supply
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed">
                    नीरो और चोखो स्पॉन (Healthy Spawn) ही बढ़िया पैदवार री नींव है। म्हे ऑयस्टर, बटन और मिल्की मशरूम स्पॉन बीकानेर, नोखा, देशनोक, कोलायत, लूणकरणसर, नापासर, श्रीडूंगरगढ़, खाजूवाला और पूरे राजस्थान में Pan-India delivery सागे पुचावां हां।
                  </p>
                </div>
              </div>
            </section>

            {/* फ्रेश सेल, ड्राई बिजनेस, व अन्य सेवाएं */}
            <section className="space-y-4 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                व्यापारिक सेवाएं और अवसर
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="glass p-4 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Fresh Mushroom Sale
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    ताजा मशरूम थे होटल और रेस्टोरेंट, रिटेल मार्केट, ऑर्गेनिक स्टोर और सब्जी री बड़ी दुकानां माथे सप्लाई कर सको हो। बीकानेर शहर री वधती मांग सु व्यापार रा नवा रस्ता खुल्या है।
                  </p>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
                    <Link
                      href="/contact"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Dry Mushroom Business
                    </Link>
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    सूखा मशरूम, मशरूम पाउडर, न्यूट्रिशनल फूड प्रोडक्ट्स और औषधीय खाद्य पदार्थ बना कर आप लम्बे समय तक चलने वाला हाई-मार्जिन बिजनेस चला सकते हैं।
                  </p>
                </div>
                <div className="glass p-4 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
                    <Link
                      href="/mushroom-types"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Medicinal Mushroom
                    </Link>{" "}
                    के अवसर
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                    सेहत और तंदुरुस्ती सारु जागरूकता वधण सु लायंस मेन, रिशी और कोर्डिसेप्स जिया औषधीय मशरूमां री मांग घणी वध रही है और आं री कीमत भी घणी चोखी (Premium Price) मिले है।
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-4 text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/book-consultant"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Mushroom Consultancy
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                    कंसल्टेंसी सर्विस में फार्म प्लानिंग, तकनीकी सलाह, मार्केट री समझ और व्यापार रो वधाव शामिल है। जे टाबर कंसल्टेंसी क्षेत्रां में जाणो चाहवे, अणरे सारु ओ ज्ञान-आधारित करियर रो घणो चोखो रस्तो है।
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/articles/turnkey-commercial-setup"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Turnkey Mushroom Projects
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                    मोटा इन्वेस्टर्स सारु म्हे{" "}
                    <Link
                      href="/articles/turnkey-commercial-setup"
                      className="text-emerald-500 hover:underline font-semibold"
                    >
                      टर्नकी प्रोजेक्ट
                    </Link>{" "}
                    (Turnkey Project) री सुविदा देवां हां — जिणमें ढांचा बणाण री योजना, फार्म रो नक़्शो, मशीनरी री सलाह और ऑपरेशनल सिस्टम शामिल है।
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/business-plan"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Business Plan &amp; ROI Analysis
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                    मशरूम बिजनेस सरू करण सु पे&apos;ली बजट, मार्केट मांग, उत्पादन क्षमता, कमाई रा मौका और रोज़ रो खर्चो रो हिसाब लगाणो जरूरी है। म्हे{" "}
                    <Link
                      href="/business-plan"
                      className="text-emerald-500 hover:underline font-semibold"
                    >
                      कस्टमाइज्ड बिजनेस प्लान और प्रोजेक्ट रिपोर्ट
                    </Link>{" "}
                    बणा&apos;र देवां हां।
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    <Link
                      href="/subsidy"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Government Subsidy Opportunities
                    </Link>
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                    पात्र किसान, स्टार्टअप्स और उद्यमी खेती-बाड़ी, फूड प्रोसेसिंग और खुद रा रोजगार सु जुड़ी{" "}
                    <Link
                      href="/subsidy"
                      className="text-emerald-500 hover:underline font-semibold"
                    >
                      सरकारी योजनावां
                    </Link>{" "}
                    रो लाभ योग्यता रे आधार माथे ले सके है।
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                    Mushroom Marketing Support
                  </h3>
                  <p className="dark:text-slate-300 text-slate-700 leading-relaxed">
                    मार्केटिंग सपोर्ट में खुद रो ब्रांड बणाणो, ग्राहक जोडणा, रिटेल पार्टनर्स सु जुड़ाव, ऑनलाइन प्रमोशन और रेस्टोरेंट्स में डायरेक्ट सप्लाई शामिल है। मजबूत मार्केटिंग सु थारो धंधो जोर सु वधसी।
                  </p>
                </div>
              </div>
            </section>

            {/* बीकानेर के प्रमुख इलाके */}
            <section className="space-y-4 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                बीकानेर के प्रमुख इलाकों में Mushroom Farming
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Mushroom Farming in Gangashahar",
                    desc: "गंगाशहर में घरेलू मशरूम यूनिट लोकां रे बीच घणा लोकप्रिया हो रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Mukta Prasad Nagar",
                    desc: "मुक्ता प्रसाद नगर में कॉलेज रा टाबर और युवा पार्ट-टाइम मशरूम बिजनेस कानी वध रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Pawanpuri",
                    desc: "पवनपुरी रा परिवार फालतू कमाई सारु घर बैठे छोटे स्तर माथे मशरूम री खेती कर रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Karni Nagar",
                    desc: "करणी नगर में व्यावसायिक (commercial) मशरूम यूनिट बणाण री घणी चोखी संभावना है।",
                  },
                  {
                    title: "Mushroom Farming in Rani Bazar",
                    desc: "रानी बाजार री मंडी और व्यापारिक केंद्र सु ताज़ा और सूखा मशरूमां री सप्लाई आसानी सु हो सके है।",
                  },
                  {
                    title: "Mushroom Farming in Jai Narayan Vyas Colony",
                    desc: "यूनिवर्सिटी सु जुड़्योड़ो ओ इलाको जयनारायण व्यास कॉलोनी में टाबर प्रोजेक्ट और बिजनेस दोनूं री तरां मशरूम कल्टीवेशन में रूचि ले रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Shastri Nagar",
                    desc: "शास्त्री नगर रा पढ़्या-लिख्या परिवारां में ऑर्गेनिक मशरूम प्रोडक्ट्स री मांग जोर सोर सु वध रही है।",
                  },
                  {
                    title: "Mushroom Farming in Lalgarh",
                    desc: "ऐतिहासिक लालगढ़ इलाको, सैलानियों (पर्यटन) और लोकल बाजार रो फायदो उठा'र मशरूम व्यापार सारु घणो चोखो अवसर देवे है।",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="glass p-4 rounded-2xl border border-white/5"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* आसपास के कस्बे */}
            <section className="space-y-4 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                बीकानेर के आसपास के कस्बों और गांवों में Mushroom Farming
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "Mushroom Training in Nokha",
                    desc: "नोखा कस्बा रा किसान अब अपणी पारंपरिक खेती रे सागे मशरूम री खेती भी सरू कर रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Deshnoke",
                    desc: "धार्मिक और पर्यटन स्थल देशनोक में लोकल दुकानां और सैलानियां ने ताजा मशरूम सप्लाई करण रो चोखो मौको है।",
                  },
                  {
                    title: "Mushroom Farming in Kolayat",
                    desc: "कोलायत क्षेत्र रा किसान भाई कम जगह में घणी कमाई देण आळी मशरूम खेती कानी कदम वधा रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Lunkaransar",
                    desc: "लूणकरणसर रा किसान परिवार अब मशरूम स्पॉन (बीज) और ट्रेनिंग री सुविदावां रो पूरो लाभ ले रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Napasar Region",
                    desc: "नापासर इलाके में सामूहिक खेती (group farming) और एक सागे बीज खरीदण री कानी किसाणां रो ध्यान वध रह्या है।",
                  },
                  {
                    title: "Mushroom Farming in Shri Dungargarh Belt",
                    desc: "श्रीडूंगरगढ़ बेल्ट में कुदरती वातावरण रो फायदो उठा'र घणे कम खर्चे में मशरूम री खेती करी जा सके है।",
                  },
                  {
                    title: "Mushroom Farming in Khajuwala Area",
                    desc: "सीमावर्ती इलाका खाजूवाला में खेती री जमीन होण सु व्यावसायिक स्तर माथे कल्टीवेशन री घणी चोखी संभावना है।",
                  },
                  {
                    title: "Mushroom Farming in Sujangarh और Bikampur",
                    desc: "सुजानगढ़ और बीकमपुर जिया नजीक इलाकां रा किसान भी अब स्पॉन और ट्रेनिंग री सुविदावां रो चोखो लाभ उठा रह्या है।",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl dark:bg-white/5 bg-black/5 border border-white/5"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1 flex items-center gap-1.5">
                      <MapPin size={14} className="text-emerald-500 shrink-0" />
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* अवसर */}
            <section className="space-y-3 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-3">
                Students, Farmers, Women और Startups के लिए अवसर
              </h2>
              <ul className="space-y-2 pl-0 list-none text-xs sm:text-sm">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700">
                    <strong>स्टूडेंट्स सारु</strong> — पढ़ाई रे सागे-सागे हुनर और पार्ट-टाइम कमाई रो साधन।
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700">
                    <strong>किसाणां सारु</strong> — पारंपरिक खेती रे सागे फालतू मोटी आवक।
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700">
                    <strong>लुगायां सारु</strong> — घर बैठे खुद रो रोजगार (self-employment)।
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700">
                    <strong>स्टार्टअप्स सारु</strong> — वधवा योग्य बिजनेस मॉडल और जल्दी पैसा वापसी (ROI)।
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700">
                    <strong>एफपीओ सारु</strong> — सामूहिक खेती, भारी मात्रा में बीज री खरीद और सामूहिक मार्केटिंग।
                  </span>
                </li>
              </ul>
            </section>

            {/* क्यों चुनें */}
            <section className="p-5 md:p-6 rounded-[2rem] dark:bg-emerald-950/20 bg-emerald-50/50 border border-emerald-500/10 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Kyun Chunein Organic Mushrooms Farm?
              </h3>
              <ul className="space-y-2 pl-0 list-none text-xs sm:text-sm">
                {[
                  "जबलपुर सु आखा भारत (pan-India) में चोखो बीज डिलीवरी रो मोटो अनुभव।",
                  "बीकानेर रा स्टूडेंट्स और लोकल बाजार री नब्ज ने समझण आळी टीम।",
                  "ऑनलाइन और ऑफलाइन दोनूं री तरां री ट्रेनिंग सुविदावां।",
                  "फार्म सेटअप सु ले'र माल बेचण (marketing) तक पूरो साथ।",
                  "साफ-सुथरो बिजनेस प्लान और आरओआई री पूरी समझ।",
                  "व्हाट्सएप (WhatsApp) माथे सीधा सपोर्ट।",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="dark:text-slate-300 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="space-y-4 pt-4 border-t dark:border-white/10 border-black/10">
              <h2 className="text-lg sm:text-xl font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <HelpCircle className="text-emerald-500 shrink-0" size={20} />
                <span>FAQs — बीकानेर Mushroom Farming से जुड़े सवाल-जवाब</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl dark:bg-white/5 bg-black/5 border border-white/5 space-y-1.5"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      {faq.q}
                    </h3>
                    <div className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <footer className="pt-6 border-t dark:border-white/10 border-black/10 text-center space-y-3">
              <h3 className="text-base sm:text-lg font-bold dark:text-white text-slate-900">
                Ready to Grow Your Agribusiness in Bikaner?
              </h3>
              <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                सही शुरुआत ही बड़ी सफलता की कुंजी है। आज ही अपने नजदीकी बीकानेर केंद्र से संपर्क करें और मशरूम फार्मिंग क्रांति का हिस्सा बनें!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="https://wa.me/919203544140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Phone size={16} />
                  <span>WhatsApp Support: 9203544140</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full dark:bg-white/5 bg-black/5 dark:text-white text-slate-900 font-semibold border dark:border-white/10 border-black/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm"
                >
                  <Calendar size={16} />
                  <span>Contact Us</span>
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </>
  );
}
