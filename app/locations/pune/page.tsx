import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Phone,
  ArrowRight,
  Compass,
} from "lucide-react";
import { puneBlogs } from "@/lib/data/puneBlogsData";
import { PUNE_BLOGS_PART_1 } from "@/lib/data/puneBlogs/puneBlogsPart1";
import { PUNE_BLOGS_PART_2 } from "@/lib/data/puneBlogs/puneBlogsPart2";
import { PUNE_BLOGS_PART_3 } from "@/lib/data/puneBlogs/puneBlogsPart3";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Pune Mushroom Farming Training & Resources | Organic Mushrooms Farm",
  description:
    "Discover top-rated mushroom farming training, commercial setup services, spawn suppliers, and expert guidance tailored for Pune. Learn to grow organic mushrooms successfully.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/locations/pune",
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
    title: "Pune Mushroom Farming Training & Resources | Organic Mushrooms Farm",
    description:
      "Discover top-rated mushroom farming training, commercial setup services, spawn suppliers, and expert guidance tailored for Pune. Learn to grow organic mushrooms successfully.",
    url: "https://organicmushroomsfarm.com/locations/pune",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Pune Mushroom Farming Training & Resources | Organic Mushrooms Farm",
    description:
      "Discover top-rated mushroom farming training, commercial setup services, spawn suppliers, and expert guidance tailored for Pune. Learn to grow organic mushrooms successfully.",
  },
};

// Build Area and Category lookup from part files for enhanced metadata display
const metadataLookup: Record<string, { area?: string; category?: string }> = {};
[...PUNE_BLOGS_PART_1, ...PUNE_BLOGS_PART_2, ...PUNE_BLOGS_PART_3].forEach((b) => {
  if (b.path) {
    metadataLookup[b.path] = { area: b.area, category: b.category };
  }
});

export default function PunePage() {
  const pageUrl = "https://organicmushroomsfarm.com/locations/pune";

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
        name: "Pune Mushroom Farming Training & Resources | Organic Mushrooms Farm",
        description:
          "Discover top-rated mushroom farming training, commercial setup services, spawn suppliers, and expert guidance tailored for Pune. Learn to grow organic mushrooms successfully.",
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
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: "Pune Mushroom Training Centers & Resources",
        description:
          "Directory of verified mushroom cultivation guides, training centers, and spawn resources in Pune.",
        itemListElement: puneBlogs.map((blog, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: blog.h1 || blog.title,
          url: `https://organicmushroomsfarm.com/locations/pune/${blog.slug}`,
        })),
      },
    ],
  };

  return (
    <main
      id="pune-resources-page"
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
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-2"
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Pune
          </li>
        </ol>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Pune District • 30+ Locality Training Centers & Guides</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Pune Mushroom Resources –{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              Organic Mushrooms Farm
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A complete directory of mushroom farming training, spawn suppliers, subsidy guides, and hands-on courses available for the Pune region.
          </p>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Pune mushroom farming training resources, commercial setups, and certified spawn supplies"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Certified commercial mushroom cultivation, hands-on workshops, and high-yield spawn distribution across Pune.
          </p>
        </div>

        {/* Executive Summary Card with Natural In-Text Internal Links */}
        <section
          aria-labelledby="pune-overview-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="pune-overview-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              पुणे परिसरातील व्यावसायिक मशरूम शेती व प्रशिक्षण मार्गदर्शक
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            पुणे हे महाराष्ट्राचे शैक्षणिक आणि औद्योगिक केंद्र असून येथे ऑयस्टर (Oyster), बटन (Button), आणि मिल्की (Milky) मशरूमला हॉटेल, सुपरमार्केट आणि स्थानिक सोसायट्यांमध्ये प्रचंड मागणी आहे. आपण नवशिके असाल किंवा व्यावसायिक शेतकरी, आमच्या{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम शेती प्रशिक्षण (₹299 पासून सुरू)
            </Link>{" "}
            द्वारे घरच्या घरी अगदी 100 ते 500 चौ. फूट जागेत बॅग मेकिंगपासून ते काढणीपर्यंतचे संपूर्ण शास्त्रोक्त प्रात्यक्षिक शिकू शकता.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            लागवडीसाठी आवश्यक असणारे 100% शुद्ध आणि लॅब-टेस्टेड{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              सर्टिफाइड मशरूम स्पॉन व बियाणे
            </Link>{" "}
            पुण्यातील कोणत्याही भागात थेट घरपोच उपलब्ध करून दिले जाते. संपूर्ण{" "}
            <Link
              href="/states/maharashtra"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              महाराष्ट्र राज्य मशरूम मार्गदर्शिका
            </Link>{" "}
            तपासा किंवा आपल्या परिसरातील सर्वात जवळचे केंद्र निवडा:{" "}
            <Link
              href="/locations/pune/mushroom-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कोथरूड केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/government-mushroom-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              वाकड सरकारी सबसिडी केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-training-center-near-me"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              हिंजवडी आयटी हब केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-farming-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              बाणेर फार्मिंग केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/best-mushroom-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              औंध ट्रेनिंग केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              हडपसर कल्टिव्हेशन केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              खराडी लाइव्ह फार्म केंद्र
            </Link>
            ,{" "}
            <Link
              href="/locations/pune/mushroom-development-and-training-center"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              विमान नगर R&D केंद्र
            </Link>
            , किंवा{" "}
            <Link
              href="/locations/pune/mushroom-cultivation-training-fees"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              कोर्स फी व पॅकेजेस
            </Link>
            .
          </p>
        </section>

        {/* Grid of Pune Guides - Compact, Minimal Scrolling, Zero Black Boxes */}
        <section aria-label="Pune Guides and Training Classes">
          <div className="flex items-center justify-between gap-2 mb-3 px-1">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>पुण्यातील सर्व 30 प्रशिक्षण केंद्रे व मार्गदर्शक (Locality Directory)</span>
            </h2>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              30 Guides
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {puneBlogs.map((blog) => {
              const meta = metadataLookup[blog.slug] || {};
              const areaName = meta.area || "Pune";

              return (
                <article key={blog.id} className="h-full">
                  <Link
                    href={`/locations/pune/${blog.slug}`}
                    className="h-full p-3 sm:p-3.5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs hover:border-emerald-500/40 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{areaName}</span>
                        </span>
                        <span className="text-[10px] text-slate-400">
                          #{blog.id}
                        </span>
                      </div>

                      <h3 className="text-[12.5px] font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                        {blog.h1 || blog.title}
                      </h3>

                      <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {blog.intro}
                      </p>
                    </div>

                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] flex items-center justify-between gap-1 mt-2.5 pt-2 border-t border-slate-200/40 dark:border-white/5">
                      <span>सविस्तर मार्गदर्शक वाचा</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Enrollment & Training CTA Section */}
        <section
          aria-labelledby="pune-cta-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="pune-cta-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              पुण्यात स्वतःची व्यावसायिक मशरूम शेती सुरू करा!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              तज्ज्ञांच्या थेट मार्गदर्शनाखाली प्रात्यक्षिक प्रशिक्षण, बँक सबसिडी DPR आणि बायबॅक सपोर्ट मिळवा.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  प्रॅक्टिकल फाउंडेशन कोर्स (₹299)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                हँड्स-ऑन बॅग मेकिंग, सबस्ट्रेट स्टेरिलायझेशन, ई-मॅन्युअल व सपोर्ट.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/training" className="hover:underline">
                  कमर्शियल मास्टरक्लास + DPR (₹499)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                सबसिडी DPR, बँक लोन डॉक्युमेंटेशन, बायबॅक लिंकेज व सर्टिफिकेट.
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
              <span>सर्व फी व पॅकेजेस पहा</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=नमस्कार,%20मी%20पुणे%20येथून%20आहे.%20मला%20मशरूम%20प्रशिक्षण%20आणि%20केंद्रांबद्दल%20माहिती%20हवी%20आहे."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp वर सल्ला घ्या</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
