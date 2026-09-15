import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  TrendingUp,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Sprout,
  HelpCircle,
  Truck,
  GraduationCap,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Oyster Mushroom Cultivation in India | Complete Step-by-Step Guide",
  description:
    "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
  alternates: {
    canonical:
      "https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-process",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "Oyster Mushroom Cultivation Complete Guide for India: High-Profit Agri-Business 🍄",
    description:
      "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
    url: "https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-process",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Cultivation Guide",
  },
  twitter: {
    card: "summary",
    title:
      "Oyster Mushroom Cultivation Complete Guide for India: High-Profit Agri-Business 🍄",
    description:
      "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
  },
};

export default function ArticleOysterCultivationProcessPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-process";
  const publishedDate = "2026-08-12T08:00:00+05:30";
  const modifiedDate = "2026-08-12T08:00:00+05:30";

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
          availableLanguage: ["en", "hi"],
        },
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
        name: "Oyster Mushroom Cultivation in India | Complete Step-by-Step Guide",
        description:
          "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
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
            name: "Articles",
            item: "https://organicmushroomsfarm.com/articles",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Oyster Cultivation Process",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Oyster Mushroom Cultivation Complete Guide for India: High-Profit Agri-Business",
        description:
          "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Editorial Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Kya main ghar par Oyster Mushroom uga sakta hu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Haan, bilkul! Ek chhota 10x10 ft ka kamra bhi kaafi hai. Hum complete training aur spawn provide karte hain.",
            },
          },
          {
            "@type": "Question",
            name: "Mushroom spawn delivery kahan hoti hai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pan India — MP, Maharashtra, UP, Bihar, Gujarat, Rajasthan, sabhi jagah speed post aur transport se spawn deliver hota hai.",
            },
          },
          {
            "@type": "Question",
            name: "Start karne me kitna kharcha aayega?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Small scale par ₹3,000-₹5,000 se start kiya ja sakta hai. Training aur support hamare paas available hai.",
            },
          },
          {
            "@type": "Question",
            name: "Tayaar mushroom kahan bechenge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Local market, hotels, restaurants, sabji mandi me fresh bikta hai. Dry karke hume ya export buyers ko bhi bech sakte hain.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main
      id="oyster-cultivation-process-article-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <span className="text-slate-500 dark:text-slate-400">Articles</span>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Oyster Cultivation Process
          </li>
        </ol>
      </nav>

      {/* Main Article Container - Compact Editorial Flow Without Artificial Card Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Complete Guide
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 7 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Oyster Mushroom Cultivation <span className="gradient-text">Complete Guide for India</span> 🍄
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Mushroom Farming Training | Mushroom Spawn / Seed Supply | Bulk &amp; Retail Mushroom | Pan India Delivery
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Oyster Mushroom Cultivation (ढींगरी मशरूम की खेती) आज भारत का सबसे तेज़ी से बढ़ने वाला एग्री-बिजनेस बन चुका है। चाहे आप किसान हों, छात्र, गृहिणी, रिटायर्ड प्रोफेशनल, या स्टार्टअप फाउंडर —{" "}
            <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              Oyster Mushroom Farming
            </Link>{" "}
            कम लागत, कम जगह, और 25-30 दिनों में मुनाफा देने वाला सबसे बेहतरीन बिजनेस मॉडल है।
          </p>
          <p>
            मध्य प्रदेश (जबलपुर, भोपाल, इंदौर), महाराष्ट्र (पुणे, नागपुर), उत्तर प्रदेश (लखनऊ, वाराणसी), बिहार (पटना), राजस्थान, गुजरात, छत्तीसगढ़ और पूरे भारत में ऑयस्टर मशरूम की मांग तेज़ी से बढ़ रही है।
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Oyster Mushroom Kya Hota Hai? – Introduction &amp; Market Demand
            </h2>
            <p className="mb-2">
              ऑयस्टर मशरूम (Pleurotus ostreatus), जिसे भारत में ढींगरी (Dhingri) मशरूम कहा जाता है, एक बहुत ही पौष्टिक, स्वादिष्ट, और आसानी से उगने वाला खाद्य मशरूम है। इसमें 20-30% प्रोटीन, विटामिन डी, बी-कॉम्प्लेक्स, आयरन, पोटैशियम, और एंटीऑक्सीडेंट्स भरपूर मात्रा में होते हैं।
            </p>
            <p className="mb-2">
              भारत में मशरूम की मार्केट आज 2,000+ करोड़ रुपये से अधिक की है और सालाना 15-20% की दर से बढ़ रही है। होटल्स, रेस्टोरेंट्स, सुपरमार्केट्स, आयुर्वेद, और एक्सपोर्ट मार्केट में ऑयस्टर मशरूम की भारी मांग है।
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Oyster Mushroom Cultivation Kyu Karein? – Top Reasons
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 my-2">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Kam Jagah Me Shuru:</strong> 100-200 sq ft ka kamra bhi kaafi hai. Zameen ki zaroorat nahi.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Kam Lagat:</strong> Sirf ₹3,000-₹5,000 se shuru karein. Sabse affordable agri-business.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Fast Return:</strong> 25-30 dino me pehli harvest ready ho jaati hai. Saal me 8-10 cycles.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">High Profit:</strong> Lagat ₹30-40/kg, bikri ₹100-250/kg (Fresh), Dry ₹600-1000/kg.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">100% Organic:</strong> Kheti ke residue (bhoosa, kuttal) se ugta hai. Koi chemical nahi.</div>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                <div><strong className="text-slate-900 dark:text-white font-semibold">Govt Subsidy:</strong> NHB, MIDH, RKVY, PMFME ke tehat 40-50% subsidy milti hai.</div>
              </div>
            </div>
          </section>

          {/* Section 3: Profit Table */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Cost vs Income: Oyster Mushroom Profit Calculator
            </h2>
            <div className="overflow-x-auto my-2">
              <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-lg">
                <thead className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                  <tr>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Scale / Capacity</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Investment</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Monthly Yield</th>
                    <th className="p-2 border-b border-slate-200 dark:border-slate-800">Monthly Profit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="p-2 font-medium">Small (50 Bags)</td>
                    <td className="p-2">₹3,000 - ₹5,000</td>
                    <td className="p-2">50 - 75 Kg</td>
                    <td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">₹4,000 - ₹8,000</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Medium (100-200 Bags)</td>
                    <td className="p-2">₹8,000 - ₹15,000</td>
                    <td className="p-2">150 - 300 Kg</td>
                    <td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">₹12,000 - ₹25,000</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Commercial (500+ Bags)</td>
                    <td className="p-2">₹30,000 - ₹60,000</td>
                    <td className="p-2">750 - 1,500 Kg</td>
                    <td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">₹40,000 - ₹80,000</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Large Farm (1,000+ Bags)</td>
                    <td className="p-2">₹1,00,000+</td>
                    <td className="p-2">1,500 - 3,000 Kg</td>
                    <td className="p-2 text-emerald-600 dark:text-emerald-400 font-semibold">₹1,20,000 - ₹2,00,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              * Note: Profit estimates fresh market rate (₹120-180/Kg) aur proper farm management par aadharit hain.
            </p>
          </section>

          {/* Section 4: Materials & Setup */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Materials &amp; Setup: Required Inputs
            </h2>
            <div className="space-y-2 mt-2 mb-2 pl-2">
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">1. Mushroom Spawn (Seed):</strong> शुद्ध, लैब-सर्टिफाइड ग्रेन स्पॉन। सफेद (Florida/Sajor-caju), ग्रे, पिंक, येलो वैराइटीज। स्पॉन फ्रेश होना चाहिए, बिना किसी कंटैमिनेशन के।
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">2. Substrate (माध्यम):</strong> गेहूं का भूसा (Wheat Straw), धान का पुआल (Paddy Straw), गन्ने की खोई (Bagasse), या कॉटन वेस्ट।
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">3. Equipments &amp; Consumables:</strong> पॉलीप्रोपाइलीन (PP) बैग्स (14x20 ya 16x22 inch), ड्रम/स्टीमर, स्प्रेयर, हाइग्रोमीटर (नमी मापने के लिए), थर्मामीटर।
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Step-by-Step 5-Phase Cultivation Process */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Step-by-Step 5-Phase Cultivation Process
            </h2>
            <div className="space-y-3 mt-2 mb-2 pl-2">
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Step 1: Substrate Preparation (भूसा तैयार करना)</strong>
                भूसे को 2-3 इंच टुकड़ों में काटें। 12-16 घंटे पानी में भिगोएं। इसके बाद हॉट वाटर (75-80°C पर 2 घंटे) या रासायनिक विधि (Bavistin + Formalin) से स्टेरिलाइज़ करें। फिर 65% नमी तक छाया में सुखाएं।
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Step 2: Spawning / Beej Bharna (स्पॉन मिलाना)</strong>
                सबस्ट्रेट का तापमान 25-28°C होने पर उसमें 2-3% स्पॉन (सूखे भूसे के वजन का) मिलाएं। लेयर विधि या थोक मिक्सिंग विधि से पीपी बैग्स में भरें और रबर बैंड से बांधकर 10-15 छेद करें।
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Step 3: Incubation / Dark Room (मायसेलियम रन)</strong>
                बैग्स को अंधेरे, हवादार कमरे में रखें। तापमान 25-28°C और आर्द्रता 70-80% रखें। 15-20 दिनों में पूरा बैग सफेद फफूंद (मायसेलियम) से भर जाएगा।
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Step 4: Fruiting Room (मशरूम उगाना)</strong>
                मायसेलियम पूरा फैलने के बाद पॉलीथिन हटाएं या काटें। रोशनी, ताजी हवा (Fresh Air) और 80-90% नमी बनाए रखें। 5-7 दिनों में छोटे मशरूम (पिनहेड्स) निकलने लगेंगे।
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Step 5: Harvesting / Katai (तुड़ाई व पैकेजिंग)</strong>
                जब मशरूम की कैप पूरी तरह खुल जाए, तो हल्के हाथ से घुमाकर तोड़ें। एक बैग से 3 बार तुड़ाई (फ्लश) मिलती है। 1 किलो सूखे भूसे से 700 से 1200 ग्राम फ्रेश मशरूम निकलता है।
              </div>
            </div>
          </section>

          {/* Section 6: Training & Spawn Services */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3">
              Mushroom Farming Training &amp; Spawn Supply
            </h2>
            <p className="mb-2">
              हम सिर्फ जानकारी नहीं देते, बल्कि आपको एक सफल मशरूम उत्पादक बनाते हैं। हमारी{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                practical training courses
              </Link>{" "}
              और शुद्ध लैब-सर्टिफाइड{" "}
              <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                organic mushroom spawn
              </Link>{" "}
              के साथ अपना व्यवसाय शुरू करें। यदि आप बड़े पैमाने पर काम करना चाहते हैं, तो हमारी{" "}
              <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                turnkey commercial farm setup
              </Link>{" "}
              सेवाएं और{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Button mushroom
              </Link>{" "}
              प्रोजेक्ट्स भी उपलब्ध हैं।
            </p>
          </section>

          {/* Section 7: FAQs */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-emerald-500" /> Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-2 mt-2 mb-2 pl-2">
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Q: Kya main ghar par Oyster Mushroom uga sakta hu?</strong>
                A: Haan, bilkul! Ek chhota 10x10 ft ka kamra bhi kaafi hai. Hum complete training aur spawn provide karte hain.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Q: Mushroom spawn delivery kahan hoti hai?</strong>
                A: Pan India — MP, Maharashtra, UP, Bihar, Gujarat, Rajasthan, sabhi jagah speed post aur transport se deliver hota hai.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Q: Start karne me kitna kharcha aayega?</strong>
                A: Small scale par ₹3,000-₹5,000 se shuru kiya ja sakta hai. Complete guidance hamare paas available hai.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-semibold block">Q: Tayaar mushroom kahan bechenge?</strong>
                A: Local market, hotels, restaurants, sabji mandi me fresh bikta hai. Dry karke hume ya export buyers ko bhi bech sakte hain.
              </div>
            </div>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to Start Your Mushroom Business?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Book training, order high-quality spawn, or get expert farm consultation today. Pan India service available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call / WhatsApp: +91 9203544140
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Book Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
