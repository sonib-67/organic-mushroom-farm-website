import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home,
  ChevronRight,
  MapPin,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "গুৱাহাটীত Best Mushroom Farm Setup & Training",
  description:
    "Start your agribusiness in Guwahati! আমি আগবঢ়াইছোঁ expert cultivation training, complete farm setup, আৰু premium quality spawn (বীজ) যোগান।",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cities/assam/guwahati",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "গুৱাহাটীত Best Mushroom Farm Setup & Training",
    description:
      "Start your agribusiness in Guwahati! আমি আগবঢ়াইছোঁ expert cultivation training, complete farm setup, আৰু premium quality spawn (বীজ) যোগান।",
    url: "https://organicmushroomsfarm.com/cities/assam/guwahati",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "গুৱাহাটীত Best Mushroom Farm Setup & Training",
    description:
      "Start your agribusiness in Guwahati! আমি আগবঢ়াইছোঁ expert cultivation training, complete farm setup, আৰু premium quality spawn (বীজ) যোগান।",
  },
};

export default function ArticleGuwahatiTrainingPage() {
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://organicmushroomsfarm.com/",
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
        name: "Assam",
        item: "https://organicmushroomsfarm.com/states/assam",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Guwahati",
        item: "https://organicmushroomsfarm.com/cities/assam/guwahati",
      },
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Guwahati ত mushroom farming ৰ খৰচ কিমান?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scale অনুযায়ী ভিন্ন হয় — ঘৰুৱা সৰু unit ৰ বাবে ₹10,000-₹25,000 ৰ পৰা আৰম্ভ কৰিব পাৰি, commercial scale ত বেছি বিনিয়োগ লাগে।",
        },
      },
      {
        "@type": "Question",
        name: "Kitna profit ho sakta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sahi management aur consistent demand ke saath monthly acha margin possible hai, especially fresh aur dry mushroom dono bech kar.",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom spawn ক'ত পাম?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "আমাৰ পৰা সমগ্ৰ Assam লৈ pan-India delivery ৰ সৈতে spawn ক্ৰয় কৰিব পাৰে।",
        },
      },
      {
        "@type": "Question",
        name: "Training kaise join karein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WhatsApp ৰ জৰিয়তে যোগাযোগ কৰি online বা offline training ৰ বাবে registration কৰিব পাৰে।",
        },
      },
      {
        "@type": "Question",
        name: "Online training uplabdh hai kya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, poori tarah online training available hai, Hindi aur Assamese dono mein support ke saath.",
        },
      },
      {
        "@type": "Question",
        name: "Offline training Guwahati ত পাম নে?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "হয়, Guwahati ত practical hands-on offline training ৰ ব্যৱস্থা আছে।",
        },
      },
      {
        "@type": "Question",
        name: "Kitni jagah chahiye?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chote scale ke liye 100-200 sq ft bhi kaafi hai, commercial ke liye zyada.",
        },
      },
      {
        "@type": "Question",
        name: "মহিলাসকলে mushroom farming আৰম্ভ কৰিব পাৰে নে?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "নিশ্চয়, ঘৰতে বহি নাৰীসকলে সহজেই এই ব্যৱসায় আৰম্ভ কৰিব পাৰে।",
        },
      },
      {
        "@type": "Question",
        name: "Chatra-chatri bhi shuru kar sakte hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai.",
        },
      },
      {
        "@type": "Question",
        name: "Government subsidy uplabdh hai kya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility criteria ke anusar kuch schemes ke through sahayata mil sakti hai, hum guidance dete hain.",
        },
      },
      {
        "@type": "Question",
        name: "কোনটো mushroom variety সৰ্বোত্তম?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oyster mushroom beginners ৰ বাবে আৰম্ভ কৰিবলৈ আটাইতকৈ সহজ।",
        },
      },
      {
        "@type": "Question",
        name: "Mushroom kaise bechein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local hotels, restaurants, organic stores, aur WhatsApp/social media ke through direct customers tak.",
        },
      },
      {
        "@type": "Question",
        name: "Aap consultancy dete hain kya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, production se leke marketing tak poori consultancy available hai.",
        },
      },
      {
        "@type": "Question",
        name: "Turnkey project bhi milta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, bade investors ke liye complete turnkey mushroom project setup diya jata hai.",
        },
      },
      {
        "@type": "Question",
        name: "Marketing support milega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, packaging, branding aur buyer connection mein poora support milta hai.",
        },
      },
      {
        "@type": "Question",
        name: "Guwahati ৰ কোনবোৰ অঞ্চলত সেৱা উপলব্ধ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Beltola, Dispur, Six Mile, Zoo Road, Maligaon, Jalukbari, Chandmari, Pan Bazar আৰু আশে-পাশৰ সকলো অঞ্চলত।",
        },
      },
      {
        "@type": "Question",
        name: "North Guwahati ya Rangia mein bhi service milegi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, North Guwahati, Rangia, Hajo, Sonapur samet nearby sabhi areas cover kiye jaate hain.",
        },
      },
      {
        "@type": "Question",
        name: "Dry mushroom ka shelf life kitna hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sahi storage ke saath dry mushroom mahino tak achhi quality mein rehta hai.",
        },
      },
      {
        "@type": "Question",
        name: "Medicinal mushroom farming profitable hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ha, Lion's Mane, Reishi jaise varieties premium price par bikte hain, margin zyada hota hai.",
        },
      },
      {
        "@type": "Question",
        name: "Business plan kaise milega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aapke scale ke hisaab se customized project report aur ROI analysis provide kiya jata hai.",
        },
      },
      {
        "@type": "Question",
        name: "Contact kaise karein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WhatsApp ke through direct sampark kar sakte hain, jo response sabse tez hota hai.",
        },
      },
    ],
  };

  const courseSchema = {
    "@type": "Course",
    name: "Mushroom Farming Training Guwahati",
    description:
      "Online aur offline mushroom farming training covering spawn handling, cultivation, harvesting, packaging aur marketing.",
    provider: {
      "@type": "Organization",
      name: "Organic Mushrooms Farm",
      sameAs: "https://organicmushroomsfarm.com",
    },
  };

  const localBusinessSchema = {
    "@type": "LocalBusiness",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guwahati",
      addressRegion: "Assam",
      addressCountry: "IN"
    },
    name: "Organic Mushrooms Farm - Guwahati",
    url: "https://organicmushroomsfarm.com/cities/assam/guwahati",
    telephone: "+919203544140",
    areaServed: [
      "Guwahati",
      "Beltola",
      "Dispur",
      "Six Mile",
      "Zoo Road",
      "Maligaon",
      "Jalukbari",
      "Chandmari",
      "Pan Bazar",
      "Ganeshguri",
      "Hatigaon",
      "Basistha",
      "Narengi",
      "Noonmati",
      "Khanapara",
      "North Guwahati",
      "Rangia",
      "Hajo",
      "Sonapur",
      "Boko",
      "Palasbari",
      "Nalbari",
      "Barpeta",
    ],
    description:
      "Mushroom farm setup, spawn supply, online aur offline training, fresh aur dry mushroom sale, consultancy aur turnkey mushroom projects in Guwahati, Assam.",
    priceRange: "₹₹",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      faqSchema,
      courseSchema,
      localBusinessSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen pt-4 sm:pt-6 pb-20 relative overflow-hidden bg-transparent dark:bg-transparent">
        {/* Ambient Background Colors */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[2%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-400/20 dark:bg-emerald-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute top-[10%] right-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-purple-400/20 dark:bg-purple-600/15 rounded-full blur-[100px] md:blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 mb-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <Link
              href="/"
              className="hover:text-emerald-500 flex items-center gap-1 transition-colors"
            >
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/states"
              className="hover:text-emerald-500 transition-colors"
            >
              States
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/states/assam"
              className="hover:text-emerald-500 transition-colors"
            >
              Assam
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Guwahati
            </span>
          </nav>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-6 md:p-10 lg:p-12 rounded-3xl border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden space-y-6 md:space-y-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

            <header className="text-center border-b dark:border-white/10 border-black/10 pb-6 md:pb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-3 md:mb-4">
                গুৱাহাটীত (Guwahati) Professional Mushroom Farming Training আৰু Farm Setup
              </h1>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-xs md:text-sm">
                Organic Mushrooms Farm — Guwahati, Assam Special Edition
              </p>
            </header>

            {/* Introduction */}
            <section aria-labelledby="intro-heading" className="space-y-3 md:space-y-4">
              <h2
                id="intro-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                গুৱাহাটীত Mushroom Business কিয় আৰম্ভ কৰিব?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Assam and Northeast India have a massive demand for fresh mushrooms. গুৱাহাটীত (in Guwahati) থকা হোটেল, ৰেষ্টুৰেণ্ট আৰু স্থানীয় বজাৰত <Link href="/mushroom-types" className="text-emerald-500 hover:underline">Oyster</Link> আৰু <Link href="/mushroom-types" className="text-emerald-500 hover:underline">Button</Link> মাচৰুমৰ চাহিদা দ্ৰুতভাৱে বৃদ্ধি পাইছে। If you are looking for a profitable business, mushroom farming is a great choice.
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Organic Mushroom Farm-এ গুৱাহাটীৰ কৃষক, মহিলা আৰু নিবনুৱা যুৱক-যুৱতীসকলৰ বাবে practical cultivation training (প্ৰশিক্ষণ) আৰু complete custom farm setup ৰ সুবিধা লৈ আহিছে। অসমৰ জলবায়ুৰ উপযোগী মাচৰুমৰ প্ৰজাতি আৰু উচ্চ মানদণ্ডৰ spawn (মাচৰুমৰ বীজ) আমি যোগান ধৰোঁ।
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                We provide full end-to-end support! উৎপাদিত মাচৰুম গুৱাহাটীৰ বজাৰত কেনেদৰে বিক্ৰী কৰিব (marketing and sales strategy), তাৰ সম্পূৰ্ণ প্ৰফেচনেল গাইডেন্স আমাৰ এক্সপাৰ্টসকলে প্ৰদান কৰে। Start your farm setup journey today!
              </p>
            </section>

            {/* Section 1 */}
            <section aria-labelledby="why-growing" className="space-y-3 md:space-y-4">
              <h2
                id="why-growing"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Guwahati ত Mushroom Farming কিয় বাঢ়ি আহিছে?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                গুৱাহাটীৰ কৃষি বজাৰত সলনি হোৱা এক ট্ৰেণ্ড লক্ষ্য কৰিব পাৰি — পৰম্পৰাগত খেতিৰ পৰা মানুহে এতিয়া কম খৰচী, কম সময়ৰ আৰু বেছি লাভজনক বিকল্পলৈ ঢাল খাই আছে। Mushroom farming ৰ কিছুমান স্পষ্ট কাৰণ:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 list-none">
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700 text-xs md:text-sm">কম স্থানৰ প্ৰয়োজন — এটা সৰু ঘৰৰ কোঠা বা shed ৰেও farming আৰম্ভ কৰিব পাৰি</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700 text-xs md:text-sm">কম বিনিয়োগ, দ্ৰুত ৰিটাৰ্ণ — মাত্ৰ ২৫-৩০ দিনতে প্ৰথম harvest পোৱা যায়</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700 text-xs md:text-sm">স্থানীয় বজাৰৰ চাহিদা — Guwahati ৰ hotel, restaurant, আৰু organic store সমূহত ক্ৰমান্বয়ে চাহিদা বাঢ়ি আছে</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700 text-xs md:text-sm">নাৰী আৰু ছাত্ৰৰ বাবে উপযুক্ত — ঘৰতে বহি part-time বা full-time ব্যৱসায় কৰিব পৰা যায়</span>
                </li>
                <li className="flex gap-2.5 items-start md:col-span-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="dark:text-slate-300 text-slate-700 text-xs md:text-sm">Assam Government ৰ কৃষি আঁচনি — কিছুমান subsidy আৰু training programme ৰ জৰিয়তে সহায় পোৱাৰ সুবিধাও আছে</span>
                </li>
              </ul>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed italic text-xs md:text-sm">
                Guwahati market mein already restaurants aur hotels ki demand badh rahi hai, isliye jo log abhi shuru karenge, unhe first-mover advantage milega.
              </p>
            </section>

            {/* Section 2 */}
            <section aria-labelledby="climate-heading" className="space-y-3 md:space-y-4">
              <h2
                id="climate-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Guwahati ৰ Climate — Mushroom Farming ৰ বাবে কিমান উপযুক্ত?
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                অসমৰ জলবায়ু — humid subtropical — mushroom farming ৰ বাবে প্ৰায় প্ৰাকৃতিকভাৱে উপযুক্ত। গুৱাহাটীত সাধাৰণতে:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <span className="dark:text-slate-300 text-slate-700"><strong>Humidity 70-90%</strong> — যিটো <Link href="/mushroom-types" className="text-emerald-500 hover:underline">oyster</Link> আৰু <Link href="/mushroom-types" className="text-emerald-500 hover:underline">button mushroom</Link> ৰ বাবে আদৰ্শ</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <span className="dark:text-slate-300 text-slate-700"><strong>Monsoon সময় (June-September)</strong> — natural humidity ৰ কাৰণে কম artificial control ৰ প্ৰয়োজন হয়</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <span className="dark:text-slate-300 text-slate-700"><strong>Winter (November-February)</strong> — <Link href="/mushroom-types" className="text-emerald-500 hover:underline">button mushroom</Link> আৰু <Link href="/mushroom-types" className="text-emerald-500 hover:underline">milky mushroom</Link> ৰ বাবে সৰ্বোত্তম সময়</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <span className="dark:text-slate-300 text-slate-700"><strong>গৰম গ্ৰীষ্মকাল</strong> — thermotolerant strain বা proper ventilation ৰ প্ৰয়োজন হয়</span>
                </li>
              </ul>
              <div className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs md:text-sm p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                Yehi wajah hai ki Guwahati, Nalbari, Barpeta aur Kamrup jaise districts mein mushroom cultivation naturally successful ho raha hai — kyunki weather already favourable hai, sirf sahi technique aur spawn quality chahiye.
              </div>
            </section>

            {/* Section 3 */}
            <section aria-labelledby="farm-setup-heading" className="space-y-3 md:space-y-4">
              <h2
                id="farm-setup-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Mushroom Farm Setup Services
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                আমি সম্পূৰ্ণ <Link href="/articles/turnkey-commercial-setup" className="text-emerald-500 hover:underline font-semibold">farm setup</Link> সেৱা আগবঢ়াওঁ — সৰু ঘৰুৱা unit ৰ পৰা বাণিজ্যিক scale লৈকে:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Production room ৰ design আৰু layout</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Humidity আৰু ventilation control system</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Racking system installation</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Steam sterilization unit guidance</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Quality spawn selection</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Complete SOP (Standard Operating Procedure)</span></li>
              </ul>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium text-xs md:text-sm">
                Chahe aapke paas 100 sq ft ka chota room ho ya 5000 sq ft ka commercial shed, hum Guwahati aur aas-paas ke Beltola, Basistha, Hatigaon jaise areas mein site visit ke basis par bhi customized setup plan deते hain.
              </p>
            </section>

            {/* Section 4 */}
            <section aria-labelledby="online-training-heading" className="space-y-3 md:space-y-4">
              <h2
                id="online-training-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Online Mushroom Training Program
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                দূৰৈত থকা মানুহৰ বাবে, বিশেষকৈ যিসকল ঘৰতে বহি শিকিব বিচাৰে, আমাৰ <Link href="/training" className="text-emerald-500 hover:underline font-semibold">Online Mushroom Training</Link> এক নিখুঁত বিকল্প:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Live আৰু recorded video class</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Hindi আৰু Assamese দুয়োটা ভাষাতে সহায়ক সাম্ভাৰ</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Spawn handling, composting, harvesting, packaging শিক্ষা</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Certificate প্ৰদান কৰা হয়</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">WhatsApp support group ত সন্মুখীন প্ৰশ্নৰ উত্তৰ</span></li>
              </ul>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs md:text-sm">
                Yeh training especially students, working professionals aur North Guwahati, Rangia, Hajo jaise thoda door ke areas ke logon ke liye best hai jo travel nahi kar sakte.
              </p>
            </section>

            {/* Section 5 */}
            <section aria-labelledby="offline-training-heading" className="space-y-3 md:space-y-4">
              <h2
                id="offline-training-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Offline Mushroom Training Program
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                যিসকলে হাতে-কামে শিকিব বিচাৰে, তেওঁলোকৰ বাবে আমি Guwahati ত <Link href="/training" className="text-emerald-500 hover:underline font-semibold">Offline Mushroom Training</Link> ৰো ব্যৱস্থা কৰোঁ:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Practical spawn inoculation demo</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Bag preparation আৰু sterilization hands-on</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Real farm visit</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Harvesting আৰু post-harvest handling</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Business setup guidance eke সময়তে</span></li>
              </ul>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs md:text-sm">
                Beltola, Zoo Road, Dispur aur aas-paas ke logon ke liye yeh sabse popular option hai kyunki practical exposure milta hai jo online se possible nahi.
              </p>
            </section>

            {/* Section 6 */}
            <section aria-labelledby="spawn-sale-heading" className="space-y-3 md:space-y-4">
              <h2
                id="spawn-sale-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Mushroom Spawn Sale আৰু Delivery
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                গুণগত spawn নথাকিলে ভাল harvest পোৱা কঠিন। আমি আগবঢ়াওঁ <Link href="/spawn-seed" className="text-emerald-500 hover:underline font-semibold">Mushroom Spawn Sale</Link>:
              </p>
              <ul className="grid grid-cols-2 gap-3 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700"><Link href="/mushroom-types" className="text-emerald-500 hover:underline">Oyster Mushroom</Link> Spawn</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700"><Link href="/mushroom-types" className="text-emerald-500 hover:underline">Button Mushroom</Link> Spawn</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700"><Link href="/mushroom-types" className="text-emerald-500 hover:underline">Milky Mushroom</Link> Spawn</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700"><Link href="/mushroom-types" className="text-emerald-500 hover:underline">Shiitake Mushroom</Link> Spawn</span></li>
              </ul>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs md:text-sm">
                সমগ্ৰ Assam ত — Guwahati, North Guwahati, Rangia, Hajo, Sonapur, Boko, Palasbari, Nalbari, Barpeta লৈকে — আমি pan-India delivery ৰ সৈতে spawn পঠাই দিওঁ, ভাল packaging আৰু viability guarantee ৰ সৈতে.
              </p>
            </section>

            {/* Section 7 */}
            <section aria-labelledby="fresh-sale-heading" className="space-y-3 md:space-y-4">
              <h2
                id="fresh-sale-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                <Link href="/contact" className="hover:text-emerald-500 transition-colors">Fresh Mushroom Sale</Link>
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                গুৱাহাটীৰ hotel, restaurant আৰু ঘৰুৱা গ্ৰাহকৰ বাবে আমি taza (fresh) <Link href="/mushroom-types" className="text-emerald-500 hover:underline">oyster</Link> আৰু <Link href="/mushroom-types" className="text-emerald-500 hover:underline">button</Link> mushroom সাপ্লাই কৰোঁ। Fatasil, Pan Bazar, Ganeshguri বজাৰত বহু chef এতিয়া consistent supply বিচাৰে — আৰু আমি সেয়া নিশ্চিত কৰিবলৈ পাৰোঁ।
              </p>
            </section>

            {/* Section 8 */}
            <section aria-labelledby="dry-sale-heading" className="space-y-3 md:space-y-4">
              <h2
                id="dry-sale-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                <Link href="/contact" className="hover:text-emerald-500 transition-colors">Dry Mushroom Sale</Link>
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Fresh mushroom ৰ লগতে আমি dry mushroom আৰু mushroom powder ও বিক্ৰী কৰোঁ — যিবোৰৰ shelf life বেছি আৰু online/offline দুয়ো মাধ্যমতে বাঢ়ি সহজে বিক্ৰী কৰিব পাৰি। ইয়াৰ চাহিদা বিশেষকৈ health-conscious consumer আৰু organic store সমূহত বাঢ়ি আছে।
              </p>
            </section>

            {/* Section 9 */}
            <section aria-labelledby="medicinal-heading" className="space-y-3 md:space-y-4">
              <h2
                id="medicinal-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Medicinal Mushroom ৰ সুযোগ
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Wellness ৰ প্ৰতি সজাগতা বাঢ়াৰ লগে লগে, <Link href="/mushroom-types" className="text-emerald-500 hover:underline">Lion's Mane</Link>, <Link href="/mushroom-types" className="text-emerald-500 hover:underline">Reishi</Link>, <Link href="/mushroom-types" className="text-emerald-500 hover:underline">Ganoderma</Link> আৰু <Link href="/mushroom-types" className="text-emerald-500 hover:underline">Cordyceps</Link> ৰ দৰে medicinal mushroom ৰ চাহিদাও বাঢ়িছে। এইবোৰ premium price ত বিক্ৰী হয় আৰু Guwahati ৰ urban educated customer সকলৰ মাজত জনপ্ৰিয়তা লাভ কৰি আছে।
              </p>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs md:text-sm italic">
                Hum in medicinal varieties ke liye bhi spawn aur training provide karte hain, jo commercial farmers ke liye high-margin opportunity ban sakti hai.
              </p>
            </section>

            {/* Section 10 */}
            <section aria-labelledby="consultancy-heading" className="space-y-3 md:space-y-4">
              <h2
                id="consultancy-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Mushroom Consultancy Services
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                যদি আপুনি ইতিমধ্যে farming কৰি আছে কিন্তু production বা marketing ত সমস্যা পাইছে, আমাৰ <Link href="/book-consultant" className="text-emerald-500 hover:underline font-semibold">consultancy</Link> সেৱাই সহায় কৰিব:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Production efficiency improvement</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Marketing আৰু distribution strategy</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Expansion planning</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Farm troubleshooting (contamination, low yield ইত্যাদি)</span></li>
              </ul>
            </section>

            {/* Section 11 */}
            <section aria-labelledby="turnkey-heading" className="space-y-3 md:space-y-4">
              <h2
                id="turnkey-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Turnkey Mushroom Projects
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Bade investors ya jo log Guwahati mein large-scale commercial farm shuru karna chahte hain, unke liye hum <Link href="/articles/turnkey-mushroom-farm-setup-india" className="text-emerald-500 hover:underline font-semibold">turnkey project</Link> deते hain — jismein farm design, infrastructure, equipment aur operational SOP sab kuch shamil hota hai. Aapko bas jagah aur investment chahiye, baaki setup hum sambhal lete hain.
              </p>
            </section>

            {/* Section 12 */}
            <section aria-labelledby="business-plan-heading" className="space-y-3 md:space-y-4">
              <h2
                id="business-plan-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Mushroom Business Plan &amp; ROI Analysis
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Kisi bhi mushroom business mein utarne se pehle proper planning zaroori hai. We offer specialized <Link href="/business-plan" className="text-emerald-500 hover:underline font-semibold">Mushroom Business Plan &amp; ROI Analysis</Link>:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Production capacity estimation</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Estimated investment details</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Operating cost (spawn, labour, packaging) planning</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Expected revenue and profit calculations</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Break-even timeline evaluation</span></li>
              </ul>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-xs md:text-sm">
                আমি প্ৰতিজন গ্ৰাহকৰ scale অনুযায়ী customized business plan আৰু project report প্ৰস্তুত কৰি দিওঁ, যিটো bank loan বা subsidy আবেদনতো ব্যৱহাৰ কৰিব পাৰি।
              </p>
            </section>

            {/* Section 13 */}
            <section aria-labelledby="subsidy-heading" className="space-y-3 md:space-y-4">
              <h2
                id="subsidy-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Government Subsidy Support
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                Assam ৰ কৃষক আৰু উদ্যোগীসকলে কৃষি আৰু startup সম্পৰ্কীয় বিভিন্ন কেন্দ্ৰীয় আৰু ৰাজ্যিক আঁচনিৰ পৰা সহায় পাব পাৰে, যদিহে তেওঁলোকে eligibility criteria পূৰণ কৰে। আমি সঠিক আঁচনি চিনাক্ত কৰা আৰু ডকুমেণ্টেচন প্ৰস্তুত কৰাত <Link href="/subsidy" className="text-emerald-500 hover:underline font-semibold">Government Subsidy Support</Link> ৰ যোগেদি সহায় কৰোঁ।
              </p>
            </section>

            {/* Section 14 */}
            <section aria-labelledby="marketing-heading" className="space-y-3 md:space-y-4">
              <h2
                id="marketing-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Mushroom Marketing Support
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-sm md:text-base">
                বহুতো কৃষকে ভাল mushroom উৎপাদন কৰিলেও সঠিক গ্ৰাহক নাপায়। আমি সহায় কৰোঁ:
              </p>
              <ul className="space-y-2 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">WhatsApp/Facebook/Instagram ৰ জৰিয়তে direct selling setup</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Hotel আৰু restaurant ৰ সৈতে সংযোগ</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Packaging আৰু branding পৰামৰ্শ</span></li>
                <li className="flex gap-2 items-center"><CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> <span className="dark:text-slate-300 text-slate-700">Local market ৰ সৈতে নেটৱৰ্কিং</span></li>
              </ul>
            </section>

            {/* Neighborhoods and Areas */}
            <section aria-labelledby="neighborhoods-heading" className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
              <h2
                id="neighborhoods-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Guwahati ৰ প্ৰধান অঞ্চলসমূহত Mushroom Farming
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Beltola</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Beltola অঞ্চলত ঘৰুৱা পৰিসৰত mushroom farming ক্ৰমান্বয়ে জনপ্ৰিয় হৈ পৰিছে, বিশেষকৈ গৃহিণী আৰু ছাত্ৰসকলৰ মাজত।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Dispur</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">ৰাজধানী অঞ্চল Dispur ত অফিচ কৰ্মচাৰী আৰু ব্যৱসায়ীসকলে part-time mushroom farming ক অতিৰিক্ত আয়ৰ উৎস হিচাপে গ্ৰহণ কৰি আছে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Six Mile</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Six Mile ৰ ব্যস্ত commercial এলেকাত restaurant আৰু hotel সমূহলৈ fresh mushroom supply ৰ ভাল সুযোগ আছে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Zoo Road</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Zoo Road অঞ্চলত ঘৰুৱা farming ইউনিটৰ পৰা স্থানীয় বজাৰলৈ সহজে supply চেইন গঢ়ি তোলা সম্ভৱ।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Maligaon</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">ৰেলৱে অঞ্চল Maligaon ত পৰিয়ালভিত্তিক farming উদ্যোগ বৃদ্ধি পাই আছে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Jalukbari</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">বিশ্ববিদ্যালয় অঞ্চল Jalukbari ত ছাত্ৰ-ছাত্ৰীসকলে project ভিত্তিক আৰু ব্যৱসায়িক দুয়োধৰণৰ mushroom farming ত আগ্ৰহ দেখুৱাইছে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Chandmari</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Chandmari ৰ ঘনবসতিপূৰ্ণ অঞ্চলত সৰু আকাৰৰ commercial unit স্থাপনৰ ভাল সুযোগ আছে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Pan Bazar</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Guwahati ৰ ব্যৱসায়িক কেন্দ্ৰ Pan Bazar ৰ পৰা fresh আৰু dry mushroom distribution সহজ হয়।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Ganeshguri</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Ganeshguri অঞ্চলত hotel আৰু restaurant চেইনৰ সৈতে সংযোগ স্থাপন কৰা সহজ, যিয়ে বজাৰ সৃষ্টি কৰিবলৈ সহায় কৰে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Hatigaon, Basistha আৰু Lalganesh</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600 font-medium">এই আৱাসিক অঞ্চলসমূহত ঘৰুৱা mushroom unit স্থাপন কৰি পৰিয়ালে অতিৰিক্ত আয় উপাৰ্জন কৰি আছে।</p>
                </div>
                <div className="glass p-4 sm:p-5 rounded-2xl border border-black/5 dark:border-white/5 col-span-1 md:col-span-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-1">Mushroom Farming in Narengi, Noonmati আৰু Khanapara</h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">এই অঞ্চলসমূহত শিল্পভিত্তিক জনসংখ্যাৰ কাৰণে সৰু আকাৰৰ farming ব্যৱসায় গ্ৰহণযোগ্য হৈ পৰিছে।</p>
                </div>
              </div>
            </section>

            {/* Nearby Towns */}
            <section aria-labelledby="nearby-towns-heading" className="space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
              <h2
                id="nearby-towns-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Guwahati ৰ ওচৰৰ Nearby Towns আৰু Villages ত Mushroom Farming
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Training in North Guwahati
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">ব্ৰহ্মপুত্ৰৰ সিপাৰে থকা North Guwahati ত কৃষিভিত্তিক পৰিয়ালসমূহে mushroom farming ক পৰম্পৰাগত খেতিৰ সৈতে সংযুক্ত কৰি আয় বৃদ্ধি কৰি আছে।</p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Farming in Rangia
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Rangia ৰ কৃষি বজাৰত mushroom spawn আৰু training ৰ চাহিদা বাঢ়ি আহিছে, বিশেষকৈ যুৱ কৃষকৰ মাজত।</p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Farming in Hajo
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">ঐতিহাসিক নগৰী Hajo ত পৰ্যটন আৰু স্থানীয় বজাৰ দুয়োটাৰে সুবিধা লৈ mushroom business আৰম্ভ কৰাৰ সুযোগ আছে।</p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Farming in Sonapur
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Sonapur Belt ত কৃষি জমিৰ সহজলভ্যতাৰ কাৰণে বাণিজ্যিক scale mushroom farming ৰ ভাল সম্ভাৱনা আছে।</p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Farming in Boko Region
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Boko অঞ্চলত পাহাৰীয়া আৰু আৰ্দ্ৰ পৰিৱেশে mushroom cultivation ক প্ৰাকৃতিকভাৱে সহায় কৰে।</p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Farming in Palasbari আৰু Chandrapur Area
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">নদীৰ পাৰৰ এই অঞ্চলসমূহত natural humidity ৰ সুবিধা লৈ কম খৰচত mushroom farming কৰিব পাৰি।</p>
                </div>
                <div className="p-4 rounded-xl dark:bg-white/5 bg-black/5 border border-black/5 dark:border-white/5 col-span-1 md:col-span-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-1 flex items-center gap-2">
                    <MapPin size={16} className="text-emerald-500 shrink-0" /> Mushroom Farming in Nalbari আৰু Barpeta ৰ সীমান্তবৰ্তী অঞ্চল
                  </h3>
                  <p className="text-xs dark:text-slate-400 text-slate-600">Kamrup জিলাৰ সীমান্তত থকা এই এলেকাসমূহৰ কৃষকসকলেও এতিয়া Guwahati ৰ পৰা spawn আৰু training সুবিধা লাভ কৰি আছে।</p>
                </div>
              </div>
            </section>

            {/* Success Factors */}
            <section aria-labelledby="success-heading" className="space-y-3 md:space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
              <h2
                id="success-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Farmers, Students, Women, Startups আৰু FPO সকলৰ বাবে সফলতাৰ সুযোগ
              </h2>
              <ul className="space-y-2.5 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={16} /> <span className="dark:text-slate-300 text-slate-700"><strong>কৃষকসকলৰ বাবে:</strong> পৰম্পৰাগত খেতিৰ লগত mushroom farming যোগ কৰি অতিৰিক্ত আয়</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={16} /> <span className="dark:text-slate-300 text-slate-700"><strong>ছাত্ৰ-ছাত্ৰীসকলৰ বাবে:</strong> কম বিনিয়োগত part-time ব্যৱসায়, project-based শিক্ষা</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={16} /> <span className="dark:text-slate-300 text-slate-700"><strong>গৃহিণী/নাৰীসকলৰ বাবে:</strong> ঘৰতে বহি self-employment</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={16} /> <span className="dark:text-slate-300 text-slate-700"><strong>Startup সকলৰ বাবে:</strong> scalable business model, quick ROI</span></li>
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0" size={16} /> <span className="dark:text-slate-300 text-slate-700"><strong>FPO (Farmer Producer Organisation) সকলৰ বাবে:</strong> group farming, bulk spawn purchase, collective marketing</span></li>
              </ul>
            </section>

            {/* Why Us */}
            <section aria-labelledby="why-us-heading" className="space-y-3 md:space-y-4 pt-6 border-t dark:border-white/10 border-black/10">
              <h2
                id="why-us-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 border-l-4 border-emerald-500 pl-4"
              >
                Kyun Chunein Organic Mushrooms Farm?
              </h2>
              <ul className="space-y-2.5 pl-0 list-none text-xs md:text-sm">
                <li className="flex gap-2.5 items-center"><CheckCircle2 className="text-emerald-500 shrink-0" size={18} /> <span className="dark:text-slate-300 text-slate-700">Jabalpur base se pura India mein spawn delivery ka experience</span></li>
                <li className="flex gap-2.5 items-center"><CheckCircle2 className="text-emerald-500 shrink-0" size={18} /> <span className="dark:text-slate-300 text-slate-700">Assam ke local weather aur market ko samajhne wali team</span></li>
                <li className="flex gap-2.5 items-center"><CheckCircle2 className="text-emerald-500 shrink-0" size={18} /> <span className="dark:text-slate-300 text-slate-700">Online aur offline dono training options</span></li>
                <li className="flex gap-2.5 items-center"><CheckCircle2 className="text-emerald-500 shrink-0" size={18} /> <span className="dark:text-slate-300 text-slate-700">Complete farm setup se lekar marketing tak ka support</span></li>
                <li className="flex gap-2.5 items-center"><CheckCircle2 className="text-emerald-500 shrink-0" size={18} /> <span className="dark:text-slate-300 text-slate-700">Transparent business plan aur ROI guidance</span></li>
                <li className="flex gap-2.5 items-center"><CheckCircle2 className="text-emerald-500 shrink-0" size={18} /> <span className="dark:text-slate-300 text-slate-700">WhatsApp par direct support</span></li>
              </ul>
            </section>

            {/* FAQs */}
            <section aria-labelledby="faqs-heading" className="space-y-4 pt-8 border-t dark:border-white/10 border-black/10">
              <h2
                id="faqs-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-2"
              >
                <HelpCircle className="text-emerald-500 shrink-0" size={24} />
                FAQs — গুৱাহাটী Mushroom Farming সম্পৰ্কীয় প্ৰশ্নোত্তৰ
              </h2>

              <div className="space-y-3">
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">1. Guwahati ত mushroom farming ৰ খৰচ কিমান?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Scale অনুযায়ী ভিন্ন হয় — ঘৰুৱা সৰু unit ৰ বাবে ₹10,000-₹25,000 ৰ পৰা আৰম্ভ কৰিব পাৰি, commercial scale ত বেছি বিনিয়োগ লাগে।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">2. Kitna profit ho sakta hai?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Sahi management aur consistent demand ke saath monthly acha margin possible hai, especially fresh aur dry mushroom dono bech kar.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">3. <Link href="/spawn-seed" className="hover:text-emerald-500 transition-colors">Mushroom spawn</Link> ক'ত পাম?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">আমাৰ পৰা সমগ্ৰ Assam লৈ pan-India delivery ৰ সৈতে spawn ক্ৰয় কৰিব পাৰে।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">4. <Link href="/training" className="hover:text-emerald-500 transition-colors">Training</Link> kaise join karein?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">WhatsApp ৰ জৰিয়তে যোগাযোগ কৰি online বা offline training ৰ বাবে registration কৰিব পাৰে।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">5. <Link href="/training" className="hover:text-emerald-500 transition-colors">Online training</Link> uplabdh hai kya?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Ha, poori tarah online training available hai, Hindi aur Assamese dono mein support ke saath.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">6. <Link href="/training" className="hover:text-emerald-500 transition-colors">Offline training</Link> Guwahati ত পাম নে?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">হয়, Guwahati ত practical hands-on offline training ৰ ব্যৱস্থা আছে।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">7. Kitni jagah chahiye?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Chote scale ke liye 100-200 sq ft bhi kaafi hai, commercial ke liye zyada.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">8. মহিলাসকলে mushroom farming আৰম্ভ কৰিব পাৰে নে?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">নিশ্চয়, ঘৰতে বহি নাৰীসকলে সহজেই এই ব্যৱসায় আৰম্ভ কৰিব পাৰে।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">9. Chatra-chatri bhi shuru kar sakte hain?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Bilkul, kam investment aur time mein students ke liye bhi yeh accha option hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">10. <Link href="/subsidy" className="hover:text-emerald-500 transition-colors">Government subsidy</Link> uplabdh hai kya?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Eligibility criteria ke anusar kuch schemes ke through sahayata mil sakti hai, hum guidance dete hain.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">11. কোনটো mushroom variety সৰ্বোত্তম?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed"><Link href="/mushroom-types" className="text-emerald-500 hover:underline">Oyster mushroom</Link> beginners ৰ বাবে আৰম্ভ কৰিবলৈ আটাইতকৈ সহজ।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">12. Mushroom kaise bechein?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Local hotels, restaurants, organic stores, aur WhatsApp/social media ke through direct customers tak.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">13. Aap <Link href="/book-consultant" className="hover:text-emerald-500 transition-colors">consultancy</Link> dete hain kya?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Ha, production se leke marketing tak poori consultancy available hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">14. <Link href="/articles/turnkey-commercial-setup" className="hover:text-emerald-500 transition-colors">Turnkey project</Link> bhi milta hai?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Ha, bade investors ke liye complete turnkey mushroom project setup diya jata hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">15. Marketing support milega?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Ha, packaging, branding aur buyer connection mein poora support milta hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">16. Guwahati ৰ কোনবোৰ অঞ্চলত সেৱা উপলব্ধ?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Beltola, Dispur, Six Mile, Zoo Road, Maligaon, Jalukbari, Chandmari, Pan Bazar আৰু আশে-পাশৰ সকলো অঞ্চলত।</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">17. North Guwahati ya Rangia mein bhi service milegi?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Ha, North Guwahati, Rangia, Hajo, Sonapur samet nearby sabhi areas cover kiye jaate hain.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">18. Dry mushroom ka shelf life kitna hota hai?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Sahi storage ke saath dry mushroom mahino tak achhi quality mein rehta hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">19. Medicinal mushroom farming profitable hai?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Ha, Lion's Mane, Reishi jaise varieties premium price par bikte hain, margin zyada hota hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">20. Business plan kaise milega?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">Aapke scale ke hisaab se customized project report aur ROI analysis provide kiya jata hai.</p>
                </div>
                <div className="dark:bg-white/5 bg-black/5 p-4 rounded-2xl border border-black/5 dark:border-white/5">
                  <h3 className="font-bold dark:text-white text-slate-950 text-xs md:text-sm mb-1">21. Contact kaise karein?</h3>
                  <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">WhatsApp ke through direct sampark kar sakte hain, jo response sabse tez hota hai.</p>
                </div>
              </div>
            </section>

            {/* Final Call to Action */}
            <section
              aria-labelledby="cta-heading"
              className="bg-linear-to-r from-emerald-500/20 to-teal-500/20 p-6 md:p-8 rounded-3xl mt-8 md:mt-12 border border-emerald-500/20 text-center"
            >
              <h2
                id="cta-heading"
                className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-3"
              >
                Guwahati ত Mushroom Farming আৰম্ভ কৰক আজিয়েই!
              </h2>
              <p className="dark:text-slate-300 text-slate-700 leading-relaxed mb-6 text-sm md:text-base">
                সঠিক প্ৰশিক্ষণ, উন্নত মানৰ Spawn আৰু আমাৰ অভিজ্ঞ Consultancy ৰ সৈতে অসমত এক লাভজনক কৃষি ব্যৱসায় স্থাপন কৰক।
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20 text-sm md:text-base"
                >
                  Contact Us <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/919203544140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-[#20ba56] transition-colors text-sm md:text-base"
                >
                  <MessageSquare size={18} /> WhatsApp Chat
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
