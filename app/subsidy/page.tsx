import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Banknote, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Subsidy in India | MIDH, NHB & NABARD",
  description:
    "Complete guide on mushroom farming subsidy in India. Learn about MIDH (40%), NHB, NABARD loans, MUDRA, and state-wise schemes like Bihar. Get up to 50% subsidy.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/subsidy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Subsidy in India",
    description:
      "Complete guide on mushroom farming subsidy in India. Learn about MIDH, NHB, NABARD loans, MUDRA, and state-wise schemes. Get up to 50% subsidy.",
    url: "https://organicmushroomsfarm.com/subsidy",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Subsidy in India",
    description:
      "Complete guide on mushroom farming subsidy in India. Learn about MIDH, NHB, NABARD loans, MUDRA, and state-wise schemes.",
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
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/subsidy#webpage",
      url: "https://organicmushroomsfarm.com/subsidy",
      name: "Mushroom Farming Subsidy in India | MIDH, NHB & NABARD",
      description: "Complete guide on mushroom farming subsidy in India. Learn about MIDH, NHB, NABARD loans, MUDRA, and state-wise schemes. Get up to 50% subsidy.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/subsidy#breadcrumb",
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
          name: "Subsidy",
        },
      ],
    },
  ],
};

export default function SubsidyPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[10.5px] md:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide flex-wrap">
            <li>
              <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400 dark:text-slate-500">/</li>
            <li aria-current="page" className="text-slate-800 dark:text-slate-200 truncate">
              Mushroom Farming Subsidy
            </li>
          </ol>
        </nav>

        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold text-[9px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Govt. Grants
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Mushroom Farming Subsidy in India
            </h1>
            <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Discover the top government subsidies for mushroom cultivation. Learn how to apply for MIDH, NHB, NABARD loans, and MUDRA to get up to 50% financial assistance for your commercial mushroom project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* MIDH */}
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all">
              <h2 className="text-base md:text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <Banknote size={16} /> MIDH Scheme
              </h2>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-4">
                Mission for Integrated Development of Horticulture. Best for general commercial setup.
              </p>
              <ul className="space-y-2 mb-6 text-[9px] md:text-[10px] text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Subsidy:</strong> 40% (General) / 50% (Hilly/SC/ST)</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Max Support:</strong> ₹8 Lakh per unit (General), ₹10 Lakh (Hilly/Scheduled)</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Project Size:</strong> Up to ₹20 Lakhs</li>
              </ul>
              <div className="bg-emerald-500/5 p-4 rounded-xl mb-4 text-[9px] md:text-[10px]">
                <p className="font-bold mb-1 text-slate-800 dark:text-slate-200">Benefits:</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Promotes holistic growth of horticulture sector</li>
                  <li>Good for spawn making unit, compost unit & cultivation</li>
                </ul>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400">
                <strong>How to Apply:</strong> Visit your district horticulture office or apply online at the state agriculture portal.
              </p>
            </div>

            {/* NHB */}
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all">
              <h2 className="text-base md:text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <Banknote size={16} /> NHB Scheme
              </h2>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-4">
                National Horticulture Board - Ideal for large scale, high-tech commercial farming projects.
              </p>
              <ul className="space-y-2 mb-6 text-[9px] md:text-[10px] text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Subsidy:</strong> 40% (General) / 50% (Hilly/SC/ST)</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Max Project Cost:</strong> Above ₹20 Lakhs</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Cap:</strong> Max subsidy up to ₹30 Lakhs</li>
              </ul>
              <div className="bg-emerald-500/5 p-4 rounded-xl mb-4 text-[9px] md:text-[10px]">
                <p className="font-bold mb-1 text-slate-800 dark:text-slate-200">Benefits:</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Ideal for AC mushroom farming & cold storage</li>
                  <li>Focuses on post-harvest management</li>
                </ul>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400">
                <strong>How to Apply:</strong> Online via the NHB website. Requires In-Principle Approval (IPA) before starting.
              </p>
            </div>
            
            {/* NABARD */}
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all">
              <h2 className="text-base md:text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <Banknote size={16} /> NABARD Loan Scheme
              </h2>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-4">
                Provides re-finance assistance and subsidies via banks.
              </p>
              <ul className="space-y-2 mb-6 text-[9px] md:text-[10px] text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Subsidy:</strong> Often back-ended subsidy</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Financing:</strong> Up to 85% of project cost</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Repayment:</strong> 3 to 7 years</li>
              </ul>
              <div className="bg-emerald-500/5 p-4 rounded-xl mb-4 text-[9px] md:text-[10px]">
                <p className="font-bold mb-1 text-slate-800 dark:text-slate-200">Benefits:</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Supports small to large scale businesses</li>
                  <li>Linked with subsidy schemes like MIDH</li>
                </ul>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400">
                <strong>How to Apply:</strong> Apply through NABARD-supported banks with a detailed project report (DPR).
              </p>
            </div>

            {/* MUDRA */}
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all">
              <h2 className="text-base md:text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <Banknote size={16} /> MUDRA Loan
              </h2>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-4">
                Pradhan Mantri Mudra Yojana - Best scheme for small or oyster mushroom farming startups.
              </p>
              <ul className="space-y-2 mb-6 text-[9px] md:text-[10px] text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Shishu:</strong> Up to ₹50,000</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Kishor:</strong> Up to ₹5 lakh</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Tarun:</strong> Up to ₹10 lakh</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Collateral:</strong> Not required</li>
              </ul>
              <div className="bg-emerald-500/5 p-4 rounded-xl mb-4 text-[9px] md:text-[10px]">
                <p className="font-bold mb-1 text-slate-800 dark:text-slate-200">Benefits:</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                  <li>Easy loan approval & Ideal for beginners</li>
                  <li>No security required</li>
                </ul>
              </div>
              <p className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400">
                <strong>How to Apply:</strong> Apply through any bank, NBFC, or online Mudra portal.
              </p>
            </div>
          </div>

          {/* PM Kisan Sampada / Bihar / Extras */}
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-[13px] md:text-[14px] font-bold mb-2 text-emerald-700 dark:text-emerald-400">PM Kisan Sampada Yojana</h3>
                <p className="text-[10px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  Supports mushroom processing and value addition. Focuses on food processing units including mushroom drying, packaging, and cold storage to help increase profit through processing and support export-oriented business.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] md:text-[14px] font-bold mb-2 text-emerald-700 dark:text-emerald-400">Bihar MIDH Subsidy</h3>
                <p className="text-[10px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  Special state-level support offering <strong>50% subsidy</strong> (maximum ₹1 lakh per unit on a project cost up to ₹2 lakh). Promotes local mushroom production and is easy for small farmers to access.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] md:text-[14px] font-bold mb-2 text-emerald-700 dark:text-emerald-400">Extra Subsidy for Women/SC/ST</h3>
                <p className="text-[10px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  An additional <strong>10% subsidy</strong> is available under MIDH and NHB schemes to encourage inclusive farming and provide higher financial support.
                </p>
              </div>
            </div>
          </div>

          {/* Agriculture Infrastructure Fund & State */}
          <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-6 md:p-8 rounded-[1.5rem] shadow-sm border border-black/5 dark:border-white/5">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-base md:text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400">Agriculture Infrastructure Fund (AIF)</h3>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-3">Supports infrastructure development.</p>
                <ul className="space-y-2 mb-4 text-[9px] md:text-[10px] text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Interest Subsidy:</strong> 3% on loans</li>
                  <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0"/> <strong>Use:</strong> Cold storage, mushroom growing units</li>
                </ul>
                <p className="text-[9px] md:text-[10px] text-slate-600 dark:text-slate-400">
                  <strong>Benefits:</strong> Reduces loan burden and provides long-term financing support.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold mb-3 text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <MapPin size={16} /> State Government Schemes
                </h3>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 mb-3">
                  Many states provide additional subsidies. Farmers should contact their State Horticulture Department for region-specific schemes:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-[9px] md:text-[10px] text-slate-700 dark:text-slate-300 font-medium">
                  <li>• <Link href="/states/madhya-pradesh" className="hover:text-emerald-600 hover:underline">Madhya Pradesh</Link></li>
                  <li>• <Link href="/states/uttar-pradesh" className="hover:text-emerald-600 hover:underline">Uttar Pradesh</Link></li>
                  <li>• <Link href="/states/maharashtra" className="hover:text-emerald-600 hover:underline">Maharashtra</Link></li>
                  <li>• <Link href="/states/rajasthan" className="hover:text-emerald-600 hover:underline">Rajasthan</Link></li>
                  <li>• <Link href="/states/karnataka" className="hover:text-emerald-600 hover:underline">Karnataka</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-lg sm:text-xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            FAQ – Mushroom Farming Subsidy India
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 rounded-2xl border border-black/5 dark:border-white/5">
              <h4 className="text-[12px] font-bold text-slate-800 dark:text-slate-200 mb-2">What is the subsidy for mushroom farming in India?</h4>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Farmers can get 40% to 50% subsidy under schemes like MIDH and NHB, depending on their category and location.
              </p>
            </div>
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 rounded-2xl border border-black/5 dark:border-white/5">
              <h4 className="text-[12px] font-bold text-slate-800 dark:text-slate-200 mb-2">How to apply for mushroom farming subsidy?</h4>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                You can apply through your local District/State Horticulture Department or via banks linked with NABARD.
              </p>
            </div>
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 rounded-2xl border border-black/5 dark:border-white/5">
              <h4 className="text-[12px] font-bold text-slate-800 dark:text-slate-200 mb-2">Which scheme is best for mushroom farming?</h4>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                MIDH is best for small farmers and standard commercial units, while NHB is suitable for large-scale, high-tech commercial units over ₹20 Lakhs.
              </p>
            </div>
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 rounded-2xl border border-black/5 dark:border-white/5">
              <h4 className="text-[12px] font-bold text-slate-800 dark:text-slate-200 mb-2">Can I get a loan without collateral?</h4>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Yes, under the MUDRA loan scheme, no collateral is required for loans up to ₹10 Lakhs.
              </p>
            </div>
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs p-5 rounded-2xl border border-black/5 dark:border-white/5">
              <h4 className="text-[12px] font-bold text-slate-800 dark:text-slate-200 mb-2">Is mushroom farming profitable in India?</h4>
              <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Yes, mushroom farming is a high-profit, low-investment agribusiness with strong market demand and excellent government support.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto bg-emerald-600 dark:bg-emerald-700/80 p-8 md:p-12 rounded-[2rem] text-center shadow-xl relative overflow-hidden text-white backdrop-blur-md">
            <h3 className="text-lg md:text-xl font-bold mb-3 relative z-10">Need Help with Your DPR?</h3>
            <p className="mb-6 max-w-xl mx-auto relative z-10 text-[10px] md:text-[11px] text-emerald-50">
              A perfect Project Report is the key to getting your subsidy approved. Our experts draft bankable DPRs that meet NHB and MIDH standards.
            </p>
            <a
              href="tel:+919203544140"
              className="inline-flex items-center gap-2 bg-white text-emerald-900 hover:bg-emerald-50 px-6 py-3 rounded-full font-bold text-[10px] md:text-[11px] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Call Now <ArrowRight size={14} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
