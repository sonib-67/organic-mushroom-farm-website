import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, MapPin, Globe, CheckCircle2, Info, Phone, ArrowRight, Calendar, User } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What is Mushroom Farming? Complete Beginner Guide India 2026-2027",
  description:
    "Mushroom farming in India 2026-2027: Complete beginner guide for mushroom cultivation (mushroom ki kheti), training, spawn, and business plan.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/articles/mushroom-farming-beginner-guide-india-2026-2027",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "What is Mushroom Farming? Complete Beginner Guide India 2026-2027",
    description:
      "Mushroom farming in India 2026-2027: Complete beginner guide for mushroom cultivation (mushroom ki kheti), training, spawn, and business plan.",
    url: "https://organicmushroomsfarm.com/articles/mushroom-farming-beginner-guide-india-2026-2027",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "What is Mushroom Farming? Complete Beginner Guide India 2026-2027",
    description:
      "Mushroom farming in India 2026-2027: Complete beginner guide for mushroom cultivation (mushroom ki kheti), training, spawn, and business plan.",
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
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-beginner-guide-india-2026-2027#article",
      url: "https://organicmushroomsfarm.com/articles/mushroom-farming-beginner-guide-india-2026-2027",
      headline: "What is Mushroom Farming? Complete Beginner Guide India 2026-2027",
      description: "Mushroom farming in India 2026-2027: Complete beginner guide for mushroom cultivation (mushroom ki kheti), training, spawn, and business plan.",
      datePublished: "2026-05-02T00:00:00+00:00",
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
      "@id": "https://organicmushroomsfarm.com/articles/mushroom-farming-beginner-guide-india-2026-2027#breadcrumb",
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
          name: "Mushroom Farming Beginner Guide India 2026-2027",
        },
      ],
    },
  ],
};

export default function ArticleBeginnerGuide() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
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
              Beginner Guide India 2026-2027
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
          <div className="inline-block px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
            Educational Guide
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            What is Mushroom Farming? Complete Beginner Guide India 2026-2027
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-10 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <Calendar size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              May 02, 2026
            </span>
            <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
              <User size={14} className="text-emerald-600 dark:text-emerald-500" /> 
              Organic Mushrooms Farm Team
            </span>
          </div>

          <div className="space-y-8 text-[11px] md:text-[11.5px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            <p className="text-[12px] md:text-[13px] first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-emerald-600 dark:first-letter:text-emerald-400">
              <Link href="/blog/commercial-mushroom-farming-india" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Mushroom farming</Link> aaj India mein sabse fast-growing agriculture business ban chuka hai. Chahe aap Jabalpur mein ho ya Delhi mein — mushroom ki kheti se ghar baithe lakhon kama sakte hain. Is article mein hum step-by-step sikhenge ki kaise aap 2026-2027 mein ek kamyab mushroom business shuru kar sakte hain.
            </p>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4 flex items-center gap-2">
              <Info className="text-emerald-600 dark:text-emerald-400" size={20} /> 
              Mushroom Farming Kya Hoti Hai?
            </h2>
            <p>
              Mushroom farming ek controlled environment mein mushrooms ugaane ka business hai. Isme zameen ki zaroorat nahi, bahut kam paani lagta hai, aur 30 din mein pehli income shuru ho jaati hai. Yeh ek "Vertical Farming" model hai jo kam space mein high yield deta hai. <Link href="/blog/mushroom-farming-training-online-offline-certificate" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Professional training</Link> lene se success rate kaafi badh jata hai.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/30 dark:bg-black/20 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="text-[13px] font-bold text-slate-900 dark:text-white mb-4">▸ Mushroom Ke Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong><Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Oyster Mushroom:</Link></strong> India mein sabse zyada demand aur beginner-friendly choice.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong><Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Button Mushroom:</Link></strong> Hotels ki first choice, commercial setups ke liye best.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Shiitake:</strong> Export ke liye best premium grade mushroom.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Reishi:</strong> Medicinal properties ke saath highest market price.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span><strong>Milky Mushroom:</strong> High temperature tolerance, South India ke liye perfect.</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                <img 
                  src="https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png" 
                  alt="Different types of mushrooms India" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 uppercase tracking-tighter">
              Mushroom Farming in India — Major Cities & Growth Hubs 2026-2027
            </h2>
            <p>
              India ke major cities mein mushroom ki demand supply se 3 guna zyada ho chuki hai. Chahe woh IT hubs hon ya industrial clusters, organic food ki demand har jagah badh rahi hai. Niche diye gaye sheheron mein mushroom business ki current status dekhein:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/30 dark:bg-black/20 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-3">
                  <MapPin size={16} className="text-emerald-600 dark:text-emerald-400" /> Jabalpur, Bhopal, Indore
                </div>
                <p className="text-[10px] mb-2">Madhya Pradesh mushroom farming ka emerging hub ban chuka hai. <strong>Jabalpur</strong> mein Organic Mushrooms Farm ka headquarter hone se local farmers ko <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">best quality spawn</Link> aur technical support mil raha hai.</p>
                <ul className="text-[10px] space-y-1 italic text-slate-500">
                  <li>• <strong>Jabalpur:</strong> Farmers yahan monthly Rs.30,000-50,000 tak kama rahe hain.</li>
                  <li>• <strong>Bhopal:</strong> Urban consumers fresh button mushroom ke liye premium pay karte hain.</li>
                  <li>• <strong>Indore:</strong> Industrial groups aur hotels medicinal mushrooms mein invest kar rahe hain.</li>
                </ul>
              </div>

              <div className="bg-white/30 dark:bg-black/20 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-3">
                  <MapPin size={16} className="text-emerald-600 dark:text-emerald-400" /> Delhi, Mumbai, Pune, Kolkata
                </div>
                <p className="text-[10px] mb-2">Bade sheheron mein consumption record-breaking hai. <strong>Delhi NCR</strong> mein Azadpur Mandi se daily 50+ tonnes mushroom circulate hota hai.</p>
                <ul className="text-[10px] space-y-1 italic text-slate-500">
                  <li>• <strong>Mumbai & Pune:</strong> IT professionals Oyster mushroom ko meat substitute ki tarah use kar rahe hain.</li>
                  <li>• <strong>Kolkata:</strong> Traditional Bengali dishes mein mushroom ki khapat sabse zyada hoti hai.</li>
                  <li>• <strong>Delhi:</strong> Hotel industry aur cloud kitchens sabse bada client base hain.</li>
                </ul>
              </div>

              <div className="bg-white/30 dark:bg-black/20 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-3">
                  <MapPin size={16} className="text-emerald-600 dark:text-emerald-400" /> Chennai, Hyderabad, Lucknow
                </div>
                <p className="text-[10px] mb-2">Tier-2 cities mein lifestyle changes ki wajah se mushroom ab daily diet ka hissa banta ja raha hai.</p>
                <ul className="text-[10px] space-y-1 italic text-slate-500">
                  <li>• <strong>Hyderabad:</strong> High consumption of mushroom-based snacks and biryanis.</li>
                  <li>• <strong>Lucknow:</strong> UP ka sabse bada market, Kanpur ko bhi supply karta hai.</li>
                  <li>• <strong>Jaipur:</strong> Hospitality sector aur high-end restaurants ki continuous demand.</li>
                </ul>
              </div>

              <div className="bg-white/30 dark:bg-black/20 p-5 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-3">
                  <MapPin size={16} className="text-emerald-600 dark:text-emerald-400" /> Nagpur, Patna, Raipur, Ranchi
                </div>
                <p className="text-[10px] mb-2">Central aur East India mein naye entrepreneurs ke liye yeh "Golden Era" hai kyunki competition abhi low hai.</p>
                <ul className="text-[10px] space-y-1 italic text-slate-500">
                  <li>• <strong>Patna & Ranchi:</strong> Low labor cost aur high demand ki wajah se profit margin high hai.</li>
                  <li>• <strong>Nagpur:</strong> Transport hub hone ki wajah se logistics cost kam padti hai.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-emerald-500 pl-4 uppercase tracking-tighter">
              Mushroom Farming Kaise Shuru Karein? (Detailed Step-by-Step)
            </h2>
            <p>
              Mushroom cultivation koi rocket science nahi hai, lekin isme discipline aur accuracy ki zaroorat hoti hai. <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Turn-key setup</Link> solutions se aap asani se shuru kar sakte hain:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 font-black text-sm">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-[12px] md:text-[13px]">Infrastructure & Setup Phase</h3>
                  <p className="mt-1">Aapko ek 10x10 feet ka kamra chahiye jisse aap "Grow Room" kehte hain.</p>
                  <ul className="list-disc pl-4 mt-2 space-y-1 text-[10.5px]">
                    <li><strong>Insulation:</strong> Deewarein insulated honi chahiye (Temperature: 20-28°C).</li>
                    <li><strong>Humidity:</strong> Mushrooms ko 80-90% humidity chahiye. Automatic foggers best hain.</li>
                    <li><strong>Ventilation:</strong> Fresh air exchange (FAE) zaroori hai CO2 levels ko kam rakhne ke liye.</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 font-black text-sm">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-[12px] md:text-[13px]">Substrate Preparation (Casing & Mixing)</h3>
                  <p className="mt-1">Mushroom maati (soil) mein nahi, balki substrate par ugte hain. Oyster ke liye gehun ka bhusa (wheat straw) best hai. Use garam paani mein 3-4 ghante ubalen taaki saare bacteria khatam ho jayein.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 font-black text-sm">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-[12px] md:text-[13px]">Spawn Inoculation (High Quality Seeds)</h3>
                  <p className="mt-1">Jab substrate thanda ho jaye, tab usme <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">Lab-Certified High Quality Spawn</Link> milayein. Hamesha dhyaan rakhein ki spawn fresh ho. Organic Mushrooms Farm Jabalpur Pan-India door-step delivery provide karta hai.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 font-black text-sm">4</div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-[12px] md:text-[13px]">Spawn Run & Pinning</h3>
                  <p className="mt-1">Bags ko andhere kamre mein 15-20 din ke liye rakh dein. Jab bag poora safed ho jaye, tab usme chote-chote pins nikalne shuru honge. Yahi phase sabse critical hota hai humidity maintain karne ke liye.</p>
                </div>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 uppercase tracking-tighter">
              Mushroom Business Plan & Marketing 2026-2027
            </h2>
            <p>Mushroom ugana toh asaan hai, lekin use bechna ek art hai. Sirf Mandi par depend na rahein, <Link href="/blog/mushroom-farming-business-practical-guide" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">direct-to-consumer sales</Link> (WhatsApp status, local groups), Hotel & Cafe tie-ups, aur value addition (dry powder) par focus karein.</p>

            <div className="my-8 flex items-start gap-3 bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/20">
              <Globe className="text-emerald-600 dark:text-emerald-400 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-emerald-900 dark:text-emerald-100 mb-1">Global Scope & Export Opportunities</h3>
                <p className="text-[10px] md:text-[11px] text-emerald-800 dark:text-emerald-200">
                  The international market is booming. USA leads with an $18 billion industry. UK and Australia have massive demand for organic varieties. Dubai is a major destination for Indian fresh buttons, while Germany and Japan pay premium rates for Shiitake and Reishi strains.
                </p>
              </div>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4 text-center uppercase tracking-widest">
              Profit Table - Monthly Income Overview
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-black/20 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-100/50 dark:bg-slate-800/50">
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-black uppercase text-[10px] tracking-widest text-slate-500">Scale</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-black uppercase text-[10px] tracking-widest text-slate-500">Investment</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-black uppercase text-[10px] tracking-widest text-slate-500">Expected Profit</th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">100 Bags</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800">Rs. 20,000</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">Rs. 8,000 - 15,000</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 font-bold text-slate-900 dark:text-white">500 Bags</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800">Rs. 75,000</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-bold">Rs. 40,000 - 60,000</td>
                  </tr>
                  <tr className="hover:bg-white/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 font-bold text-slate-900 dark:text-white">2000 Bags</td>
                    <td className="p-3">Rs. 2,50,000</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">Rs. 1.5 - 2.5 Lakhs</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[9px] text-slate-500 italic text-center">*Estimated figures, actual results may vary based on management quality.</p>
            </div>

            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-900 dark:text-white flex gap-1"><span className="text-emerald-600">Q:</span> Kya ghar pe mushroom farming ho sakti hai?</p>
                <p className="pl-4">Haan! Sirf ek chhota kamra chahiye. Bahut log apne storeroom ya balcony mein mushroom farming shuru karte hain.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white flex gap-1"><span className="text-emerald-600">Q:</span> Kya Training zaroori hai?</p>
                <p className="pl-4">Bilkul. Technical knowledge ke bina crop fail ho sakti hai. Hum Jabalpur mein practical workshops aur online certificate courses dete hain.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white flex gap-1"><span className="text-emerald-600">Q:</span> Kitne din mein income shuru hogi?</p>
                <p className="pl-4">Mushroom ka cycle bahut short hota hai. 25-35 din mein pehli harvest aur income aapke haath mein hoti hai.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white flex gap-1"><span className="text-emerald-600">Q:</span> Government subsidy milti hai?</p>
                <p className="pl-4">Haan! NABARD, NHB aur MIDH ke through 40% se 50% tak ki subsidy milti hai. Hum documentation mein poori help karte hain.</p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-emerald-600 text-center shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-black text-white mb-3">Aaj Hi Shuru Karein</h3>
                <p className="text-emerald-50 mb-6 text-[11px] md:text-xs">
                  Start your commercial mushroom journey with <strong>Organic Mushrooms Farm Jabalpur</strong>. Quality spawn, turn-key setups, and expert mentorship.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+919203544140" className="inline-flex px-6 py-3 bg-white text-emerald-800 hover:bg-emerald-50 font-bold rounded-full transition-colors items-center gap-2 text-xs">
                    <Phone size={14} /> Call Now: 9203544140
                  </a>
                  <Link href="/" className="inline-flex px-6 py-3 bg-emerald-700 text-white hover:bg-emerald-800 font-bold rounded-full transition-colors items-center gap-2 text-xs border border-emerald-500">
                    Visit Shop <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="mt-6 text-[10px] font-bold text-emerald-200 tracking-widest uppercase">
                  "Mushroom farming sirf kheti nahi — yeh aapka sapna hai!" 🍄
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-2 justify-center">
              {["mushroom farming", "mushroom cultivation india", "oyster mushroom", "button mushroom", "mushroom spawn", "mushroom ki kheti", "mushroom business plan", "organic mushrooms farm"].map(tag => (
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
