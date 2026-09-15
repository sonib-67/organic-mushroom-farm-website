import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Award, Calendar, CheckCircle2, Phone, BookOpen, Users, ArrowRight, HelpCircle } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Online vs Offline Mushroom Farming Training | Certificate Course 2026",
  description:
    "India ka sabse affordable mushroom training program! Sirf ₹299 mein online course. Offline training Jabalpur MP mein available. Get certified today.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/articles/mushroom-farming-training-online-offline-certificate",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Online vs Offline Mushroom Farming Training | Certificate Course 2026",
    description:
      "India ka sabse affordable mushroom training program! Sirf ₹299 mein online course. Offline training Jabalpur MP mein available. Get certified today.",
    url: "https://organicmushroomsfarm.com/articles/mushroom-farming-training-online-offline-certificate",
    siteName: "Organic Mushroom Farm",
    locale: "hi_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Online vs Offline Mushroom Farming Training | Certificate Course 2026",
    description:
      "India ka sabse affordable mushroom training program! Sirf ₹299 mein online course. Offline training Jabalpur MP mein available. Get certified today.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://organicmushroomsfarm.com/#organization",
      name: "Organic Mushroom Farm",
      url: "https://organicmushroomsfarm.com",
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
      "@type": "Article",
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-training-online-offline-certificate#article",
      url: "https://organicmushroomsfarm.com/articles/mushroom-farming-training-online-offline-certificate",
      headline: "Online Vs Offline Mushroom Farming Training | Certificate Course Guide",
      description: "India ka Sabse Affordable Mushroom Training Program | Sirf ₹299 Mein Online Course | Offline Training Jabalpur Mein Available",
      datePublished: "2026-06-01T00:00:00+00:00",
      author: {
        "@type": "Organization",
        name: "Organic Mushrooms Farm Team"
      },
      publisher: {
        "@id": "https://organicmushroomsfarm.com/#organization"
      },
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-training-online-offline-certificate#breadcrumb",
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
          item: "https://organicmushroomsfarm.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mushroom Farming Training Online & Offline",
        },
      ],
    },
  ],
};

export default function ArticleMushroomTrainingAffordable() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li>
              <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Articles
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate font-semibold">
              Online vs Offline Training
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-[11px] font-bold transition-colors uppercase tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles
          </Link>
        </div>

        {/* Article Container (Glassmorphism) */}
        <article className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            <Award size={12} />
            Mushroom Training Program
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
            Online Vs Offline Mushroom Farming Training | Certificate Course Guide
          </h1>
          
          <p className="text-[12px] md:text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            India ka Sabse Affordable Mushroom Training Program | Sirf ₹299 Mein Online Course | Offline Training Jabalpur Mein Available
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              June 01, 2026
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
              20 Min Read
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
              10,000+ Farmers Trained
            </span>
          </div>

          <div className="space-y-6 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <div className="bg-white/30 dark:bg-white/5 border border-black/5 dark:border-white/5 p-5 rounded-2xl">
              <h2 className="font-bold text-[13px] md:text-[14px] text-slate-900 dark:text-white mb-2">
                Mushroom Training Kya Hoti Hai? | What is Mushroom Farming Training?
              </h2>
              <p className="mb-3">
                Agar aap mushroom ki kheti shuru karna chahte hain aur nahi pata kahan se start karen — toh <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushroom training</Link> bilkul aapke liye hai. Mushroom farming training ek aisa program hota hai jisme aapko step-by-step sikhaya jata hai ki mushroom kaise ugayi jaati hai, spawn kaise use hota hai, fruiting kaise hoti hai, harvesting aur packing kaise karni hai — aur sabse important — mushroom se paise kaise kamaye jaate hain.
              </p>
              <p className="mb-3">
                <Link href="/" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">organicmushroomsfarm.com</Link> ke through aap do tarah ki training le sakte hain:
              </p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" /> <strong>Online Mushroom Training</strong> — sirf ₹299 mein, ghar baithe</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" /> <strong>Offline Mushroom Training</strong> — Jabalpur farm par aake, hands-on practical ke saath</li>
              </ul>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-3 border-l-4 border-emerald-500 pl-3">
              Mushroom Farming Training Kyun Zaroori Hai? | Why Training Matters
            </h2>
            <p>
              Bohot log sochte hain ki mushroom farming easy hai — bas spawn dalo, pani daalo, mushroom nikal aayegi. Lekin bina proper training ke:
            </p>
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                <span><strong>Contamination ki problem aati hai:</strong> Mold aur bacteria pura crop barbad kar dete hain.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                <span><strong>Spawn wastage:</strong> Sahi temperature aur humidity nahi hone par spawn waste ho jata hai.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                <span><strong>Fruiting issues:</strong> Proper pinheads nahi bante ya dry ho jate hain.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                <span><strong>Quality degradation:</strong> Mushrooms ka color aur shape kharab banta hai, jiski vajah se market rates nahi milte.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                <span><strong>Paise ka nuksan:</strong> Yield kharab hone par mehnat aur lagat dono doob jati hain.</span>
              </li>
            </ul>
            <p>
              Training ke baad aap in sab galtiyon se bach sakte hain aur pehle batch se hi profit kama sakte hain. Yahi reason hai ki <strong>10,000+ farmers aur entrepreneurs</strong> pehle training lete hain, phir farming shuru karte hain.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-3 border-l-4 border-emerald-500 pl-3">
              Online Mushroom Farming Training | Ghar Baithe Seekho — Sirf ₹299
            </h2>
            <p>
              Hamari online mushroom farming training course India ki sabse affordable aur comprehensive training hai. Ek video-based training program hai jisme aap apni speed se seekh sakte hain.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-2xl my-6">
              <h3 className="text-[13px] md:text-[14px] font-bold mb-3 text-emerald-800 dark:text-emerald-400 flex items-center gap-2">
                <BookOpen size={16} /> Online Mushroom Course Mein Kya Sikhoge?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10.5px]">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Mushroom farming introduction & potential</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Oyster mushroom cultivation step by step</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Button mushroom cultivation technique</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Milky mushroom (Calocybe indica) kheti</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Shiitake aur Reishi mushroom basics</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Spawn identify aur quality spawn key aspects</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Substrate preparation (paddy, wheat, sugarcane)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> Fruiting chamber building & temp/humidity setup</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+919203544140" className="inline-block bg-emerald-600 dark:bg-emerald-500 text-white font-bold text-[11px] px-6 py-3 rounded-xl hover:bg-emerald-700 transition-all text-center">
                Enroll Online @ ₹299
              </a>
              <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="inline-block bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-bold text-[11px] px-6 py-3 rounded-xl hover:bg-white/80 transition-all text-center">
                WhatsApp: 9203544140
              </a>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-12 mb-3 border-l-4 border-emerald-500 pl-3">
              Offline Mushroom Training — Jabalpur Farm Pe Aake Seekho
            </h2>
            <p>
              Jinhe practically farm dekhna hai, hands-on kaam karna hai, aur expert se seedha baat karni hai — unke liye hamari offline training Jabalpur, Madhya Pradesh mein available hai. <strong>Organic Mushrooms Farm Jabalpur</strong> mein ek live working farm hai jahan aap asli mushroom cultivation process dekhoge aur khud karoge. Yahan oyster, milky, aur button mushroom ki commercial cultivation hoti hai.
            </p>

            <div className="bg-white/30 dark:bg-white/5 border border-black/5 dark:border-white/5 p-5 rounded-2xl my-6">
              <h3 className="text-[13px] md:text-[14px] font-bold mb-4 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <Users size={16} /> Offline Mushroom Training Mein Kya Hoga?
              </h3>
              <ul className="space-y-2 text-[10.5px]">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Farm tour:</strong> Live production cycle rooms, structural setup setups check karein.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Substrate preparation:</strong> Straw wetting, chemical treatment process haath se seekhein.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Spawn inoculation:</strong> Sahi amount aur uniform seeding inoculation process techniques.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Fruiting chamber setup:</strong> Climate components, ventilation exhaust configurations.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Harvesting technique:</strong> Optimum picking indicators and gentle detachment demo.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Dry mushroom parameters:</strong> Wet yield optimization and solar/electric dehydration setups.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>Packaging & Branding:</strong> Modern labeling, moisture-blocking sealing variables.</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" /> <strong>1-on-1 Consultation:</strong> Personal layout budgeting planning sessions with experts.</li>
              </ul>
            </div>

            <h3 className="text-[13px] md:text-[14px] font-bold mt-8 mb-4">Offline Training Details Table</h3>
            <div className="overflow-x-auto border border-black/10 dark:border-white/10 rounded-2xl bg-white/30 dark:bg-black/20 mb-8">
              <table className="w-full text-left text-[10.5px]">
                <thead>
                  <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-bold">
                    <th className="p-3 uppercase tracking-wider">Detail</th>
                    <th className="p-3 uppercase tracking-wider">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5">
                    <td className="p-3 font-bold text-slate-900 dark:text-white border-r border-black/5 dark:border-white/5">Location</td>
                    <td className="p-3">Organic Mushrooms Farm, Jabalpur, Madhya Pradesh</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5">
                    <td className="p-3 font-bold text-slate-900 dark:text-white border-r border-black/5 dark:border-white/5">Duration</td>
                    <td className="p-3">1 to 3 Days (as per requirements & scale index)</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5">
                    <td className="p-3 font-bold text-slate-900 dark:text-white border-r border-black/5 dark:border-white/5">Language</td>
                    <td className="p-3">Hindi / Hinglish (Simple everyday terms)</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5">
                    <td className="p-3 font-bold text-slate-900 dark:text-white border-r border-black/5 dark:border-white/5">Certificate</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Yes — Stamped & Issued on Course Completion</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5">
                    <td className="p-3 font-bold text-slate-900 dark:text-white border-r border-black/5 dark:border-white/5">Scheduling Code</td>
                    <td className="p-3 font-bold text-orange-500">Call SMS / WhatsApp 9203544140 to schedule slot</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-12 mb-3 border-l-4 border-emerald-500 pl-3">
              Online vs Offline Mushroom Training — Comparison
            </h2>
            <div className="overflow-x-auto border border-black/10 dark:border-white/10 rounded-2xl bg-white/30 dark:bg-black/20 mb-8">
              <table className="w-full text-left text-[10.5px]">
                <thead>
                  <tr className="bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 text-emerald-700 dark:text-emerald-400 font-bold">
                    <th className="p-3 uppercase">Feature</th>
                    <th className="p-3 uppercase">Online Training ₹299</th>
                    <th className="p-3 uppercase">Offline Training Jabalpur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                  {[
                    ["Location", "Kahi se bhi (India/World)", "Jabalpur, Madhya Pradesh"],
                    ["Duration", "Self-paced (Lifetime access)", "1 - 3 Days Modules"],
                    ["Medium", "Detailed HD video segments", "Physical Live Demos + Hand-work"],
                    ["Certificate", "Yes (Digital copy)", "Yes (Physical signed/stamped certificate)"],
                    ["Cost", "₹299 only", "Affordable (Contact for batch pricing)"],
                    ["Hands-on", "No (Theory-based learning via Video)", "Yes (Full farm work experience)"],
                    ["Best For", "Beginners, Remote learners", "Serious commercial farmers, Farm setups"]
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/50 dark:hover:bg-white/5">
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                      <td className="p-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-12 mb-3 border-l-4 border-emerald-500 pl-3">
              Mushroom Training Certificates & Benefits
            </h2>
            <p>
              Kya training ke baad certificate milta hai? <strong>Bilkul!</strong> Chahe aap online course karein ya offline training lein — dono complete hone par aapko <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold">organicmushroomsfarm.com</Link> ki taraf se completion certificate milta hai. Yeh certificate bank loan processing, government scheme applications, subsidies (like NHB, NABARD), aur commercial identity build karne mein useful hota hai.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-12 mb-3 border-l-4 border-emerald-500 pl-3">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Q1: Kya training online lene se farm banana samajh aayega?",
                  a: "Haan. Humne course itna detail aur HD videos ke saath banaya hai ki temperature setting se lekar room preparation tak sab clear samajh aata hai."
                },
                {
                  q: "Q2: Kya mujhe certificate milega?",
                  a: "Haan. Online aur offline dono training ke baad Organic Mushrooms Farm ka official certificate milega. Ye government schemes aur loans mein useful hota hai."
                },
                {
                  q: "Q3: Training Hindi mein hogi ya English mein?",
                  a: "Training primarily Hindi aur Hinglish mein hogi — taaki koi bhi easily samajh sake. Koi technical background ki zaroorat nahi hai."
                },
                {
                  q: "Q4: Kya main training ke baad spawn order kar sakta hun?",
                  a: "Bilkul! Training ke baad hum spawn supply bhi karte hain. Pan-India delivery available hai — oyster, milky, button, shiitake sab varieties ka spawn."
                },
                {
                  q: "Q5: Kya online training mobile pe dekh sakte hain?",
                  a: "Haan, training completely mobile-friendly hai. Android ya iPhone — kisi bhi phone pe chal sakta hai. Lifetime access milta hai."
                }
              ].map((faq, i) => (
                <div key={i} className="pb-4 border-b border-black/5 dark:border-white/5">
                  <h4 className="font-bold text-[11.5px] text-slate-900 dark:text-white flex items-center gap-2">
                    <HelpCircle size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" /> {faq.q}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-[10.5px] pl-6 mt-1.5 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-12 mb-3 border-l-4 border-emerald-500 pl-3">
              Mushroom Training Available Hai In Cities Mein
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-[10.5px] mb-4">
              Online training ke through — India ke kisi bhi shehar se join karo:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-[9.5px] font-bold text-slate-600 dark:text-slate-400">
              {[
                "Jabalpur (MP farm visit)", "Bhopal (Online + offline)", "Indore (Online available)", "Delhi & NCR (Online)",
                "Mumbai (Online)", "Pune (Online)", "Hyderabad (Online)", "Bangalore (Online)",
                "Chennai (Online)", "Kolkata (Online)", "Lucknow (Online)", "Nagpur (Online)",
                "Raipur (Online)", "Gwalior (Online + offline)", "Chhindwara (Online/visit)", "Sagar (Online/visit)",
                "Satna (Online)", "Rewa (Online)"
              ].map((city, idx) => (
                <span key={idx} className="p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:text-slate-900 dark:hover:text-white transition-colors truncate">
                  ✨ {city}
                </span>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-emerald-600 text-center shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-black text-white mb-3">Start Your Mushroom Journey Today!</h3>
                <p className="text-emerald-50 mb-6 text-[11px] md:text-xs max-w-2xl mx-auto">
                  Enroll in India's most affordable training program and begin your path towards highly profitable commercial agriculture setup structures.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/training" className="inline-flex px-6 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-full transition-colors items-center gap-2 text-xs">
                    Enroll in Training <ArrowRight size={14} />
                  </Link>
                  <a href="tel:+919203544140" className="inline-flex px-6 py-3 bg-emerald-700 text-white hover:bg-emerald-800 font-bold rounded-full transition-colors items-center gap-2 text-xs border border-emerald-500">
                    <Phone size={14} /> WhatsApp: 9203544140
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2 justify-center">
              {["mushroom farming training certificate", "online mushroom farming course", "offline mushroom training jabalpur", "affordable mushroom training india"].map(tag => (
                <span key={tag} className="text-[9px] px-3 py-1 rounded-full bg-white/30 dark:bg-white/5 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 uppercase font-bold tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </article>
      </div>
    </main>
  );
}
