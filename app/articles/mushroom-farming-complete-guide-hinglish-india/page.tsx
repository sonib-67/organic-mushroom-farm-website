import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BookOpen,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Info,
  Phone,
  ArrowRight,
  Sprout,
  ShoppingCart,
  Award,
  AlertCircle,
  HelpCircle,
  Gift,
  DollarSign,
  Calendar,
  User,
  Settings,
  Check,
  ChevronRight,
  MessageCircle,
  Layers,
  ClipboardList,
  ShieldAlert,
  Sliders,
  Star,
  Users,
  ExternalLink,
  Globe,
  PlayCircle,
  BookMarked
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "From Zero to Mushroom Farmer | Complete Hinglish Guide",
  description:
    "India's ultimate guide to starting a successful mushroom business: Covers spawn, offline/online training, setup cost margins, buyback guarantee, & city-wise guides.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/articles/mushroom-farming-complete-guide-hinglish-india",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "From Zero to Mushroom Farmer | Complete Hinglish Guide",
    description:
      "India's ultimate guide to starting a successful mushroom business: Covers spawn, offline/online training, setup cost margins, buyback guarantee, & city-wise guides.",
    url: "https://organicmushroomsfarm.com/articles/mushroom-farming-complete-guide-hinglish-india",
    siteName: "Organic Mushroom Farm",
    locale: "hi_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "From Zero to Mushroom Farmer | Complete Hinglish Guide",
    description:
      "India's ultimate guide to starting a successful mushroom business: Covers spawn, offline/online training, setup cost margins, buyback guarantee, & city-wise guides.",
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
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-complete-guide-hinglish-india#article",
      url: "https://organicmushroomsfarm.com/articles/mushroom-farming-complete-guide-hinglish-india",
      headline: "From Zero to Mushroom Farmer | Complete Hinglish Guide",
      description: "India's ultimate guide to starting a successful mushroom business: Covers spawn, offline/online training, setup cost margins, buyback guarantee, & city-wise guides.",
      datePublished: "2026-06-22T00:00:00+00:00",
      author: {
        "@type": "Organization",
        name: "Expert Team"
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
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-complete-guide-hinglish-india#breadcrumb",
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
          name: "Complete Hinglish Guide",
        },
      ],
    },
  ],
};

const costMatrix = [
  { type: "Starter (Home Unit)", investment: "₹8,000 – ₹25,000", bags: "200 – 500 bags", suitable: "Beginners, students, home income" },
  { type: "Medium Commercial", investment: "₹50,000 – ₹2,00,000", bags: "1,000 – 2,000 bags", suitable: "Serious growers, side business" },
  { type: "Large / Climate-Controlled", investment: "₹2,00,000 – ₹5,00,000+", bags: "2,000+ bags", suitable: "Full-time commercial farming" }
];

const profitEstimates = [
  { size: "500 bags (Home Unit)", investment: "₹10,000 – ₹25,000", cycle: "40 - 45 din", profit: "₹3,000 – ₹8,000 per cycle" },
  { size: "2,000 bags (Medium)", investment: "₹50,000 – ₹1,00,000", cycle: "40 - 45 din, 6+ cycle/year", profit: "₹20,000 – ₹40,000 per month" },
  { size: "5,000+ bags (Commercial)", investment: "₹2,00,000+", cycle: "Year-round (controlled)", profit: "₹60,000 – ₹1,50,000+ per month" }
];

const statesCoverage = [
  { state: "Madhya Pradesh", cities: "Jabalpur, Bhopal, Indore, Gwalior, Ujjain" },
  { state: "Maharashtra", cities: "Mumbai, Pune, Nagpur, Nashik" },
  { state: "Uttar Pradesh", cities: "Lucknow, Kanpur, Varanasi, Agra, Noida" },
  { state: "Bihar", cities: "Patna, Gaya, Muzaffarpur" },
  { state: "Rajasthan", cities: "Jaipur, Jodhpur, Udaipur, Kota" },
  { state: "Gujarat", cities: "Ahmedabad, Surat, Vadodara, Rajkot" },
  { state: "Karnataka", cities: "Bengaluru, Mysuru, Hubli" },
  { state: "Tamil Nadu", cities: "Chennai, Coimbatore, Madurai" },
  { state: "West Bengal", cities: "Kolkata, Siliguri, Durgapur" },
  { state: "Telangana", cities: "Hyderabad, Warangal" },
  { state: "Andhra Pradesh", cities: "Visakhapatnam, Vijayawada, Guntur" },
  { state: "Punjab", cities: "Ludhiana, Amritsar, Jalandhar" },
  { state: "Haryana", cities: "Gurugram, Faridabad, Panchkula" },
  { state: "Kerala", cities: "Kochi, Thiruvananthapuram, Kozhikode" },
  { state: "Odisha", cities: "Bhubaneswar, Cuttack" },
  { state: "Jharkhand", cities: "Ranchi, Jamshedpur, Dhanbad" },
  { state: "Chhattisgarh", cities: "Raipur, Bilaspur" },
  { state: "Assam", cities: "Guwahati, Dibrugarh" },
  { state: "Himachal Pradesh", cities: "Shimla, Solan" },
  { state: "Uttarakhand", cities: "Dehradun, Haridwar" },
  { state: "Goa", cities: "Panaji, Margao" },
  { state: "Delhi NCR", cities: "New Delhi, Noida, Gurugram, Faridabad" },
  { state: "Jammu & Kashmir / Ladakh", cities: "Srinagar, Jammu, Leh" },
  { state: "North East States", cities: "Tripura, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Arunachal Pradesh" }
];

const globalCoverage = [
  { country: "UAE 🇦🇪", hubs: "Dubai, Abu Dhabi, Sharjah" },
  { country: "UK 🇬🇧", hubs: "London, Birmingham, Manchester" },
  { country: "USA 🇺🇸", hubs: "New York, California, Texas" },
  { country: "Canada 🇨🇦", hubs: "Toronto, Vancouver" },
  { country: "Nepal 🇳🇵", hubs: "Kathmandu, Pokhara" },
  { country: "Bangladesh 🇧🇩", hubs: "Dhaka, Chittagong" }
];

const faqsList = [
  {
    q: "Mushroom farming start karne ke liye kitni jagah chahiye?",
    a: "Sirf 200-500 sq ft ka enclosed, ventilated room ya shed bhi kaafi hai — bade khet ki zaroorat nahi."
  },
  {
    q: "Sabse kam investment mein kaunsi mushroom shuru kar sakte hain?",
    a: "Oyster mushroom (Dhingri) beginners ke liye sabse aasan aur sasti hai — paddy straw par ugayi ja sakti hai aur 40-45 din mein ready ho jaati hai."
  },
  {
    q: "Training online hi kaafi hai ya offline bhi karni chahiye?",
    a: "Online training (₹299) foundation ke liye accha start hai. Agar aap commercial level par jaana chahte hain, to offline hands-on training (Jabalpur) recommended hai."
  },
  {
    q: "Buyback guarantee kaise kaam karti hai?",
    a: "Aap mushroom produce karte hain, aur hum (market rate, quality grade ke hisaab se) wo mushroom kharid lete hain — isse aapki marketing ki tension kam ho jaati hai. Current rate ke liye direct contact karein."
  },
  {
    q: "Medicinal mushroom (Reishi, Cordyceps) ka training bhi milta hai?",
    a: "Haan, local edible mushroom ke sath-sath medicinal mushroom cultivation ki training, spawn aur buyback support bhi available hai."
  },
  {
    q: "Kya aap pan India delivery karte hain?",
    a: "Haan — spawn, dry mushroom aur training material pure India mein deliver hota hai, aur kuch products UAE, UK, USA, Canada, Nepal, Bangladesh tak bhi pahunchte hain."
  }
];

export default function ArticleUltimateGuideHinglish() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 relative z-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Graphic Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] left-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-500/20 mb-6">
          ✨ COMPLETE EXHAUSTIVE ULTIMATE HINGLISH GUIDE
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
          From Zero to Mushroom Farmer | Complete Hinglish Guide
        </h1>
        <p className="dark:text-slate-300 text-slate-700 text-[11px] md:text-[12px] font-semibold max-w-3xl mx-auto leading-relaxed mb-6">
          Mushroom farming aaj ke time mein India ke sabse tezi se badhne wale agribusiness models mein se ek ban chuka hai. Is ek hi guide mein sab kuch bina bhari technical words ke simple Hinglish mein seekhein! 🍄
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] dark:text-slate-400 text-slate-600 font-medium">
          <span className="flex items-center gap-1.5"><User size={14} className="text-emerald-500" /> By <strong>Expert Team</strong></span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5"><Calendar size={14} className="text-emerald-500" /> Published: June 22, 2026</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1.5 font-bold uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Read Time: 12 Mins</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
        <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-sm space-y-10">
          
          {/* Section 1: Intro Text */}
          <section className="space-y-4">
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed first-letter:text-4xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-emerald-500">
              Chahe aap ek student ho, koi farmer ho, ghar baithi housewife ho ya phir naukri chhod ke apna khud ka business start karna chahta ho — mushroom farming ek aisa option hai jisme kam jagah, kam paisa aur kam time mein achha income generate kiya ja sakta hai.
            </p>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed">
              <strong>Organic Mushrooms Farm, Jabalpur (Madhya Pradesh)</strong> se hum pure India mein — har state, har shakar, har gaon tak — apni services pahuncha rahe hain. Sath hi humara network UAE, UK, USA, Canada, Nepal aur Bangladesh tak pahunch chuka hai. Is ek hi blog mein hum sab kuchh cover kar rahe hain: local edible mushroom se lekar high value medicinal mushroom tak, <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">online aur offline mushroom training</Link>, complete farm setup, turnkey project model, mushroom buyback guarantee, har variety ka <Link href="/spawn-seed" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">mushroom spawn</Link>, aur fresh-dry mushroom ka business — sab simple Hinglish mein, bina kisi bhari-bharkam technical jargon ke.
            </p>
          </section>
          
          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 2: Edible Mushrooms */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">1</span>
              Local Edible Mushrooms — Beginners ka First Step
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed mb-4">
              Khane wale mushrooms (edible mushrooms) ki demand India mein tezi se badh rahi hai, hotels se lekar direct consumers tak.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-black/5 dark:bg-white/[0.02] p-4 rounded-xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] text-slate-900 dark:text-white mb-2">Oyster Mushroom (Dhingri)</h3>
                  <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed mb-3">
                    Sabse easy aur kam budget mein shuru hone wali variety. Ise wheat ya paddy straw (bhusa/parali) par ugaya jata hai aur 40-45 din mein harvest ready hoti hai. Newcomers ke liye best.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-center bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 py-1 rounded">Beginner Friendly</span>
              </div>
              <div className="bg-black/5 dark:bg-white/[0.02] p-4 rounded-xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] text-slate-900 dark:text-white mb-2">Button Mushroom</h3>
                  <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed mb-3">
                    Market mein sabse zyada bikne wala white mushroom. Ise ugane ke liye compost (khad) aur proper temperature control ki zaroorat hoti hai. Seasonal farming winters mein hoti hai.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-center bg-blue-500/10 text-blue-700 dark:text-blue-400 py-1 rounded">High Demand</span>
              </div>
              <div className="bg-black/5 dark:bg-white/[0.02] p-4 rounded-xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] text-slate-900 dark:text-white mb-2">Milky Mushroom</h3>
                  <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed mb-3">
                    Garmiyon (Summers) ke liye sabse best. Jab temperatures high hote hain, tab milky mushroom easily survive karti hai. Iska size bada aur shelf-life zyada hoti hai.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-center bg-amber-500/10 text-amber-700 dark:text-amber-400 py-1 rounded">Summer Special</span>
              </div>
            </div>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 3: Cost and Setup Size */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">2</span>
              Mushroom Setup Cost — Kitna Paisa Lagega?
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed mb-4">
              Mushroom business ka ek bohot bada advantage ye hai ki aap isko directly apne budget aur space ke anusaar start kar sakte hain. <Link href="/roi-calculator" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">ROI Calculator</Link> use karke exact figures plan karein.
            </p>
            <div className="overflow-x-auto rounded-xl border dark:border-white/5 border-black/5 bg-white/30 dark:bg-white/[0.01]">
              <table className="w-full text-left text-[10px]">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-white/5 border-b dark:border-white/10 border-black/10">
                    <th className="p-3 font-bold text-slate-900 dark:text-white">Setup Type</th>
                    <th className="p-3 font-bold text-slate-900 dark:text-white">Investment Range</th>
                    <th className="p-3 font-bold text-slate-900 dark:text-white">Capacity</th>
                    <th className="p-3 font-bold text-slate-900 dark:text-white">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-white/5 divide-black/5 font-medium">
                  {costMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/[0.02]">
                      <td className="p-3 font-semibold dark:text-white text-slate-900">{item.type}</td>
                      <td className="p-3 dark:text-emerald-400 text-emerald-600 font-mono font-bold">{item.investment}</td>
                      <td className="p-3 dark:text-slate-300 text-slate-700">{item.bags}</td>
                      <td className="p-3 dark:text-slate-400 text-slate-600">{item.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 4: Medicinal Mushrooms */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">3</span>
              Medicinal Mushrooms — High Value Products
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-black/5 dark:bg-white/[0.02] p-4 rounded-xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] text-emerald-700 dark:text-emerald-400 mb-2">Reishi / Ganoderma</h3>
                  <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed mb-3">
                    Duniya bhar mein 'immortality mushroom' ke naam se jaani jaati hai. Market price range generally ₹3,000-₹5,000 per kg tak ja sakta hai, quality aur processing ke hisaab se.
                  </p>
                </div>
                <span className="text-[9px] font-bold text-center bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 py-1 rounded">₹3,000-₹5,000/kg</span>
              </div>
              <div className="bg-black/5 dark:bg-white/[0.02] p-4 rounded-xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] text-emerald-700 dark:text-emerald-400 mb-2">Cordyceps Mushroom</h3>
                  <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed mb-3">
                    Isko 'soft gold' bhi kaha jaata hai. Cultivation thoda technical hai lekin per-kg return dusri mushrooms ke mukable kaafi zyada ho sakta hai. Serious growers ke liye premium opportunity hai.
                  </p>
                </div>
                <span className="text-[9px] font-bold text-center bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 py-1 rounded">Premium Segment</span>
              </div>
              <div className="bg-black/5 dark:bg-white/[0.02] p-4 rounded-xl border dark:border-white/5 border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-[12px] text-emerald-700 dark:text-emerald-400 mb-2">Lion's Mane</h3>
                  <p className="text-[10px] dark:text-slate-400 text-slate-600 leading-relaxed mb-3">
                    Focus aur brain-health wellness segment mein iski demand tezi se badh rahi hai — especially functional food aur coffee products mein. Cultivation simple substrate technique se ho sakti hai.
                  </p>
                </div>
                <span className="text-[9px] font-bold text-center bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 py-1 rounded">Brain & Focus Segment</span>
              </div>
            </div>
            <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 flex gap-2">
              <AlertCircle size={14} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-amber-700 dark:text-amber-400 leading-relaxed">
                <strong>Note:</strong> Yeh content general wellness jaankari ke liye hai, koi medical claim nahi hai — koi bhi health-related decision lene se pehle qualified doctor se sampark karein.
              </p>
            </div>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 5: Training */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">4</span>
              Training — Beginner se Expert Tak
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed mb-4">
              Sabse zyada beginners isi wajah se fail hote hain ki unhone bina training ke seedha farming shuru kar di. Contamination aur humidity control jaise basic mistakes hi sabse zyada nuksan karti hain.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-black/5 dark:border-white/5 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Fast-track Option</span>
                  <h3 className="font-black text-[14px] text-slate-900 dark:text-white mt-3 mb-1">Online Training</h3>
                  <div className="text-[12px] font-extrabold text-emerald-600 dark:text-emerald-400 mb-4">Fee: ₹299 Only</div>
                  <ul className="space-y-2 mb-4 text-[10px] dark:text-slate-300 text-slate-600">
                    <li className="flex items-start gap-1.5"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Ghar baithe, mobile ya laptop se access.</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Spawn making, bag filling, humidity control.</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Beginners ke liye low-cost entry point.</li>
                  </ul>
                </div>
                <Link href="/workshop" className="inline-flex justify-center bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-[10px] px-4 py-2 rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white transition-colors">Enroll Online</Link>
              </div>
              <div className="border border-black/5 dark:border-white/5 p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] flex flex-col justify-between">
                <div>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">In-Person Masterclass</span>
                  <h3 className="font-black text-[14px] text-slate-900 dark:text-white mt-3 mb-1">Offline Training — Jabalpur</h3>
                  <div className="text-[12px] font-extrabold text-emerald-600 dark:text-emerald-400 mb-4">Hands-on Experience</div>
                  <ul className="space-y-2 mb-4 text-[10px] dark:text-slate-300 text-slate-600">
                    <li className="flex items-start gap-1.5"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Actual farm visit karke live demo dekhna.</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Direct sawaal-jawab with trainers.</li>
                    <li className="flex items-start gap-1.5"><CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" /> Commercial setup plan karne walon ke liye best.</li>
                  </ul>
                </div>
                <Link href="/contact" className="inline-flex justify-center border border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-[10px] px-4 py-2 rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Register for Jabalpur</Link>
              </div>
            </div>
            <p className="mt-4 text-[10px] dark:text-slate-400 text-slate-600 text-center bg-black/5 dark:bg-white/[0.02] p-3 rounded-xl">
              📍 Pure India se — <strong>MP, Maharashtra, UP, Bihar, Rajasthan, Gujarat</strong> — har state se students join kar rahe hain.
            </p>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 6: Buyback Guarantee & Services */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">5</span>
              Services: Turnkey Projects & Buyback Guarantee
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2">Turnkey Mushroom Farm Projects</h3>
                <p className="text-[10.5px] dark:text-slate-300 text-slate-700 leading-relaxed mb-3">
                  Agar aapke paas land/space hai aur aap ek professional commercial mushroom farm (climate-controlled) setup karna chahte hain, toh humari <Link href="/turnkey-projects" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Turnkey Services</Link> aapke liye hain. Project report, construction, spawn supply se lekar training sab ek package mein.
                </p>
              </div>
              <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/10">
                <h3 className="font-bold text-[13px] text-slate-900 dark:text-white mb-2">Mushroom Buyback Guarantee</h3>
                <p className="text-[10.5px] dark:text-slate-300 text-slate-700 leading-relaxed mb-3">
                  Naye growers ki chinta hoti hai — <em>'bechenge kahan?'</em>. Hum Buyback Support provide karte hain jisme aapka produced mushroom (fresh ya dry) hum se connect ho kar market rate par bik sakta hai. Sales channel ki tension khatam.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 7: Profit Metrics */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">6</span>
              Kitni Kamai Ho Sakti Hai?
            </h2>
            <div className="overflow-x-auto rounded-xl border dark:border-white/5 border-black/5 bg-white/30 dark:bg-white/[0.01]">
              <table className="w-full text-left text-[10px]">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-white/5 text-slate-900 dark:text-white font-bold">
                    <th className="p-3">Unit Size</th>
                    <th className="p-3">Approx. Investment</th>
                    <th className="p-3">Cycle Time</th>
                    <th className="p-3">Approx Monthly Profit*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5 text-[10px] font-medium">
                  {profitEstimates.map((item, id) => (
                    <tr key={id} className="hover:bg-black/5 dark:hover:bg-white/[0.02]">
                      <td className="p-3 font-semibold text-slate-900 dark:text-white">{item.size}</td>
                      <td className="p-3 dark:text-slate-300 text-slate-700">{item.investment}</td>
                      <td className="p-3 dark:text-slate-300 text-slate-700">{item.cycle}</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-black">{item.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[9px] dark:text-slate-500 text-slate-500 italic bg-black/5 dark:bg-white/[0.02] p-3 rounded-lg">
              * Yeh figures industry-average estimates hain. Actual profit aapke variety, local market rate aur quality par depend karta hai.
            </p>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 8: India and Global Coverage */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0">7</span>
                India Ke Har State aur Top City Mein Service
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[10px]">
                {statesCoverage.map((item, id) => (
                  <div key={id} className="border border-black/5 dark:border-white/5 p-3 rounded-lg bg-white/40 dark:bg-white/[0.01]">
                    <div className="font-extrabold text-emerald-700 dark:text-emerald-400 mb-1">{item.state}</div>
                    <div className="dark:text-slate-400 text-slate-600 font-mono text-[9px] leading-relaxed">{item.cities}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-2xl p-5">
              <h3 className="text-[14px] font-black dark:text-white text-slate-900 mb-3 flex items-center gap-2">
                <Globe className="text-emerald-500" size={16} /> Global Reach — International Customers
              </h3>
              <p className="dark:text-slate-300 text-slate-700 text-[10.5px] leading-relaxed mb-4">
                India ke alawa, hamari training, spawn aur dry mushroom ki demand in countries mein bhi hai:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-[10px] font-medium">
                {globalCoverage.map((item, id) => (
                  <div key={id} className="bg-white/50 dark:bg-white/[0.02] p-3 rounded-lg border dark:border-white/5 border-black/5">
                    <div className="font-bold dark:text-white mb-1">{item.country}</div>
                    <div className="text-[9px] dark:text-slate-400 text-slate-600">{item.hubs}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Section 9: FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="text-emerald-500 shrink-0" size={20} /> FAQ — Aksar Puche Jaane Wale Sawaal
            </h2>
            <div className="space-y-2">
              {faqsList.map((faq, i) => (
                <details key={i} className="group rounded-xl border dark:border-white/5 border-black/5 bg-white/40 dark:bg-white/[0.02] overflow-hidden">
                  <summary className="cursor-pointer p-4 font-bold text-slate-900 dark:text-white text-[11px] list-none flex justify-between items-center outline-none">
                    {faq.q}
                    <ChevronRight size={14} className="text-emerald-500 transition-transform group-open:rotate-90 shrink-0 ml-2" />
                  </summary>
                  <div className="p-4 pt-0 text-[10.5px] dark:text-slate-300 text-slate-700 leading-relaxed border-t dark:border-white/5 border-black/5 mt-2 pt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-3xl p-6 md:p-8 text-center space-y-4">
            <h2 className="text-[16px] md:text-xl font-black dark:text-white text-slate-900">
              Apna Mushroom Farming Safar Aaj Hi Shuru Karein!
            </h2>
            <p className="dark:text-slate-300 text-slate-700 text-[11px] leading-relaxed max-w-2xl mx-auto">
              Agar aap India ke kisi bhi state se ho ya international grower ho — <strong>Organic Mushrooms Farm, Jabalpur</strong> aapke har step par sath hai.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
              <a
                href="https://wa.me/919203544140"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold px-6 py-3 rounded-full shadow-lg transition-transform text-[11px]"
              >
                <MessageCircle size={16} /> WhatsApp: 9203544140
              </a>
              <Link
                href="/workshop"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-3 rounded-full shadow-lg transition-transform text-[11px]"
              >
                ⚡ Join ₹299 Masterclass
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
