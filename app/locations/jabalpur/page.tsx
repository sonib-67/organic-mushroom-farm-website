import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  BookOpen,
  Sprout,
  GraduationCap,
} from "lucide-react";
import { jabalpurResources } from "./jabalpurData";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Jabalpur Mushroom Resources & Farming Training Guides | Organic Mushrooms Farm",
  description:
    "A complete list of mushroom farming training, spawn suppliers, guides, and courses available for the Jabalpur region. Hands-on cultivation, spawn supply, and commercial farm setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/locations/jabalpur",
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
    title: "Jabalpur Mushroom Resources & Farming Training Guides | Organic Mushrooms Farm",
    description:
      "A complete list of mushroom farming training, spawn suppliers, guides, and courses available for the Jabalpur region. Hands-on cultivation, spawn supply, and commercial farm setup.",
    url: "https://organicmushroomsfarm.com/locations/jabalpur",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jabalpur Mushroom Resources & Farming Training Guides | Organic Mushrooms Farm",
    description:
      "A complete list of mushroom farming training, spawn suppliers, guides, and courses available for the Jabalpur region. Hands-on cultivation, spawn supply, and commercial farm setup.",
  },
};

export default function JabalpurResourcesPage() {
  const pageUrl = "https://organicmushroomsfarm.com/locations/jabalpur";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Jabalpur Mushroom Resources & Farming Training Guides | Organic Mushrooms Farm",
        description:
          "A complete list of mushroom farming training, spawn suppliers, guides, and courses available for the Jabalpur region.",
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
            name: "Madhya Pradesh",
            item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Jabalpur",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        name: "Jabalpur Mushroom Resources & Farming Guides",
        description:
          "Directory of verified mushroom cultivation guides, training centers, and spawn resources in Jabalpur.",
        numberOfItems: jabalpurResources.length,
        itemListElement: jabalpurResources.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.title,
          url: `https://organicmushroomsfarm.com${item.href}`,
        })),
      },
    ],
  };

  return (
    <main
      id="jabalpur-resources-page"
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
              href="/states/madhya-pradesh"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Madhya Pradesh
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Jabalpur
          </li>
        </ol>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-1 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Jabalpur Region • Verified Cultivation Guides & Centers</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Jabalpur Mushroom Resources
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A complete list of mushroom farming training, spawn suppliers, guides, and courses available for the Jabalpur region.
          </p>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png"
              alt="Jabalpur mushroom farming training resources, commercial setups, and certified spawn supplies"
              width={600}
              height={338}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            Katangi Road, Jabalpur Headquarter: Certified commercial cultivation, practical workshops, and pure mushroom spawn supply.
          </p>
        </div>

        {/* Executive Overview Card with Natural In-Text Internal Links */}
        <section
          aria-labelledby="jabalpur-overview-heading"
          className="rounded-2xl p-3.5 sm:p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="jabalpur-overview-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              जबलपुर एवं मध्य प्रदेश मशरूम उत्पादन, प्रशिक्षण व संसाधन केंद्र
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            जबलपुर (कटंगी रोड) स्थित हमारा मुख्य फार्म बटन (White Button), ओएस्टर (Dhingri), और मिल्की (Milky) मशरूम के व्यावसायिक उत्पादन का प्रमुख केंद्र है। यदि आप घर की खाली जगह, कमरे या शेड में कम लागत में खेती शुरू करना चाहते हैं, तो हमारे{" "}
            <Link
              href="/training"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मशरूम फार्मिंग प्रैक्टिकल प्रशिक्षण कार्यक्रम
            </Link>{" "}
            में भाग ले सकते हैं। प्रशिक्षण में कम्पोस्ट निर्माण, तापमान-आर्द्रता नियंत्रण, बैग भराई तथा रोग प्रबंधन का प्रत्यक्ष अभ्यास कराया जाता है।
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            उच्च पैदावार के लिए 100% शुद्ध और फ्रेश{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              प्रमाणित मशरूम स्पॉन (बीज)
            </Link>{" "}
            जबलपुर और पूरे मध्य प्रदेश में सुरक्षित डिलीवरी के साथ उपलब्ध है। व्यावसायिक फार्म सेटअप लागत एवं मुनाफे की गणना के लिए{" "}
            <Link
              href="/roi-calculator"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              इंटरएक्टिव ROI कैलकुलेटर
            </Link>{" "}
            देखें या हमारे{" "}
            <Link
              href="/states/madhya-pradesh"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              मध्य प्रदेश स्टेट गाइड
            </Link>{" "}
            पर विस्तृत जानकारी प्राप्त करें।
          </p>
        </section>

        {/* Grid of Jabalpur Guides - Compact, Minimal Scrolling, Clean Glass Design */}
        <section aria-label="Jabalpur Resources and Guides Directory">
          <div className="flex items-center justify-between gap-2 mb-3 px-1">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>जबलपुर संसाधन, प्रशिक्षण एवं मार्गदर्शिका निर्देशिका</span>
            </h2>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              {jabalpurResources.length} Guides
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {jabalpurResources.map((item) => (
              <article key={item.id} className="h-full">
                <Link
                  href={item.href}
                  className="h-full p-3 sm:p-3.5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs hover:border-emerald-500/40 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>Jabalpur</span>
                      </span>
                      <span className="text-[10px] text-slate-400">Guide #{item.id}</span>
                    </div>

                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-slate-200/40 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[10.5px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] text-slate-400">View Resource</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
