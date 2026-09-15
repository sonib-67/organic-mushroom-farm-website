import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Thermometer,
  Wind,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  Phone,
  Droplets,
  TrendingUp,
  Clock,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title:
    "Indoor Mushroom Farming Guide USA (San Diego) | Organic Mushrooms Farm",
  description:
    "Learn how to start a highly profitable indoor organic mushroom farm in San Diego, California. Step-by-step guide on climate control, substrates, and commercial setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-farming-san-diego",
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
      "Indoor Mushroom Farming Guide USA (San Diego) | Organic Mushrooms Farm",
    description:
      "Learn how to start a highly profitable indoor organic mushroom farm in San Diego, California. Step-by-step guide on climate control, substrates, and commercial setup.",
    url: "https://organicmushroomsfarm.com/mushroom-farming-san-diego",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title:
      "Indoor Mushroom Farming Guide USA (San Diego) | Organic Mushrooms Farm",
    description:
      "Learn how to start a highly profitable indoor organic mushroom farm in San Diego, California. Step-by-step guide on climate control, substrates, and commercial setup.",
  },
};

const faqs = [
  {
    q: "How much money do I need to start a small mushroom farm in my garage?",
    a: "Starting a home-scale mushroom grow room is surprisingly affordable. You can set up a basic grow tent, a simple humidifier, exhaust fans, and initial substrate/spawn for under $500. Commercial setups with automated HVAC and vertical racking will require a larger investment but offer significantly higher returns.",
  },
  {
    q: "Do I need special permits to grow and sell mushrooms in California?",
    a: "For small-scale sales at local farmer's markets (like the Little Italy Mercato or Vista Farmer's Market), you typically need a standard business license and a Certified Producer's Certificate (CPC) from the county agricultural commissioner.",
  },
  {
    q: "Can I grow mushrooms year-round in hot climates?",
    a: "Yes! Because you are growing indoors, outside weather does not matter. By using proper insulation and a mini-split AC, you can maintain the perfect 65°F environment for Oyster mushrooms 365 days a year.",
  },
  {
    q: "How do I find buyers for my gourmet mushrooms?",
    a: "The demand in Southern California is huge. Start by bringing fresh samples to local farm-to-table chefs, joining community-supported agriculture (CSA) boxes, and setting up a booth at weekend farmer's markets in Encinitas or Carlsbad.",
  },
  {
    q: "What is the biggest challenge for beginner mushroom growers?",
    a: "Contamination is the biggest hurdle. If your sterilization process is weak, aggressive green mold (Trichoderma) can ruin your harvest. Proper training in sterile lab techniques and clean room protocols is highly recommended before you start.",
  },
  {
    q: "What is the best substrate for Oyster mushrooms?",
    a: "Oyster mushrooms are aggressive colonizers and grow beautifully on pasteurized wheat straw, hardwood sawdust, or even sterilized cardboard and coffee grounds.",
  },
  {
    q: "How can I learn the step-by-step process of commercial cultivation?",
    a: "Trial and error in mushroom farming can lead to expensive crop failures. Learning from experts is the fastest way to profitability.",
  },
];

export default function MushroomFarmingSanDiegoPage() {
  const pageUrl =
    "https://organicmushroomsfarm.com/mushroom-farming-san-diego";

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
          areaServed: ["US", "IN"],
          availableLanguage: ["en", "hi"],
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
        name: "Indoor Mushroom Farming Guide USA (San Diego) | Organic Mushrooms Farm",
        description:
          "Learn how to start a highly profitable indoor organic mushroom farm in San Diego, California. Step-by-step guide on climate control, substrates, and commercial setup.",
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
            name: "USA Guide",
            item: "https://organicmushroomsfarm.com/mushroom-farming-usa-guide",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "San Diego Indoor Farming",
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
      id="san-diego-guide-page"
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
              href="/mushroom-farming-usa-guide"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              USA Guide
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            San Diego Guide
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>Southern California Micro-Agribusiness</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            San Diego Indoor Mushroom Farming:{" "}
            <span className="gradient-text text-emerald-600 dark:text-emerald-400">
              A Practical Guide to Building Your Own Farm
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-slate-500 text-xs font-medium">
            <span>Published: August 30, 2026</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <Link
              href="/how-to-start-indoor-mushroom-farm-california"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              California Playbook
            </Link>
          </div>
        </header>

        {/* Featured Photo with Caption */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.02] max-w-[340px] sm:max-w-[400px]">
            <Image
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788101706/san-diego-indoor-mushroom-farming-guide_tqx7v1.webp"
              alt="Indoor mushroom farming setup in San Diego County with climate-controlled growing racks"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 italic">
            A climate-controlled indoor mushroom farm setup designed for commercial mushroom cultivation in San Diego County.
          </p>
        </div>

        {/* Executive Summary Card */}
        <section
          aria-labelledby="sd-intro-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="sd-intro-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-tight"
            >
              The San Diego County Agribusiness Boom
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            San Diego County is famous for its thriving agricultural scene, farm-to-table restaurants, and year-round organic farmer’s markets. While avocados and citrus have traditionally dominated areas like Fallbrook, Carlsbad, Encinitas, and Vista, a new, highly profitable agricultural trend is taking over: indoor organic mushroom farming.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Whether you live in the breezy coastal neighborhoods of Del Mar or the warmer inland valleys of Escondido, growing high-value specialty crops like{" "}
            <Link
              href="/services/oyster-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Oyster
            </Link>
            , Shiitake, and{" "}
            <Link
              href="/services/button-mushroom"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Button mushrooms
            </Link>{" "}
            is an incredible business opportunity. Because mushrooms are grown indoors under controlled climates, you do not need acres of expensive California farmland. A spare garage in San Marcos or a small basement in Chula Vista is more than enough to launch a commercial mushroom cultivation business.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            In this comprehensive guide, we will explore exactly how you can set up a low-cost, high-yield indoor mushroom grow room tailored to Southern California&apos;s unique climate.
          </p>
        </section>

        {/* Section 1: Why Indoor Cultivation */}
        <section
          id="why-indoor-socal"
          aria-labelledby="why-indoor-socal-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Droplets className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="why-indoor-socal-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              1. Why Indoor Mushroom Cultivation is Perfect for Southern California
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Unlike traditional crops that rely on rainfall and sunlight, mushrooms thrive in dark, humid, and temperature-controlled environments. By building an indoor fruiting chamber, local growers can bypass the region&apos;s dry Santa Ana winds and occasional heatwaves.
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Drought-Resistant Farming:</strong> California constantly faces water restrictions. Indoor mushroom farming uses up to 90% less water than traditional soil-based agriculture.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>High Profit Margins Per Square Foot:</strong> You can stack vertical shelving in a 10x10 foot spare room and produce hundreds of pounds of gourmet mushrooms every month to sell to local restaurants in Downtown San Diego or La Jolla.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Rapid Growth Cycles:</strong> Varieties like the Pink Oyster or Blue Oyster mushroom can go from substrate to harvest in just 3 to 4 weeks.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2: Setting Up Grow Room */}
        <section
          id="grow-room-setup"
          aria-labelledby="grow-room-setup-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Thermometer className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="grow-room-setup-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              2. Setting Up Your Climate-Controlled Grow Room
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            To successfully grow mushrooms in dry areas like Vista or Fallbrook, you need to trick the fungi into thinking they are in a damp, autumn forest. Here is the essential equipment you need for your home scale or commercial farm setup:
          </p>

          <div className="space-y-2">
            <h3 className="text-[12.5px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-500" />
              <span>Humidity and Moisture Control</span>
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">
              Mushrooms require 80% to 95% relative humidity. In San Diego, natural humidity rarely stays this high.
            </p>
            <ul className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Ultrasonic Foggers:</strong> Connect a commercial humidifier or ultrasonic fogger to a digital humidistat. This automated system will release fine mist into the air whenever the room gets too dry.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Waterproof Surfaces:</strong> Line your grow tent or room with heavy-duty plastic sheeting to prevent mold on your drywall.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-200/40 dark:border-white/5">
            <h3 className="text-[12.5px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5 text-emerald-500" />
              <span>Temperature and Fresh Air Exchange (FAE)</span>
            </h3>
            <ul className="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>HVAC Systems:</strong> Most gourmet mushrooms fruit best between 60°F and 75°F. A simple mini-split AC unit ensures your room stays cool during hot California summers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Exhaust Fans:</strong> Mushrooms inhale oxygen and exhale carbon dioxide (CO2). If CO2 builds up, your mushrooms will grow deformed. Install an inline exhaust fan with a HEPA filter to pull in clean, fresh oxygen while expelling stale air.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Best Varieties */}
        <section
          id="varieties-socal"
          aria-labelledby="varieties-socal-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="varieties-socal-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              3. Best Mushroom Varieties for Local Markets
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Choosing the right{" "}
            <Link
              href="/spawn-seed"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              spawn (mushroom seeds)
            </Link>{" "}
            is critical. Here are the most profitable varieties for local California growers:
          </p>

          <ul className="space-y-2 text-[11.5px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Oyster Mushrooms:</strong> (Pearl, Blue, and Golden Oysters). These are incredibly resilient, grow rapidly, and are in high demand at local vegan cafes and organic grocery stores.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Button and Cremini Mushrooms:</strong> The staple of American cooking. These require a specific compost-based substrate but offer a massive, guaranteed wholesale market.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Milky Mushrooms:</strong> Ideal if you are growing in warmer inland areas like El Cajon without heavy air conditioning, as they prefer higher temperatures.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4: Substrate Preparation */}
        <section
          id="substrate-prep"
          aria-labelledby="substrate-prep-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-2.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="substrate-prep-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              4. Substrate Preparation and Sterilization
            </h2>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Mushrooms do not grow in dirt; they grow in organic matter called substrate. In San Diego County, you can easily source local agricultural waste like hardwood sawdust, wheat straw, or coffee grounds from local cafes.
          </p>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            To prevent green mold or bacterial blotch, you must sterilize or pasteurize your substrate using a steam barrel or pressure cooker before packing your grow bags. Proper hygiene is the secret to a high-yielding crop.
          </p>
        </section>

        {/* Section 5: FAQs */}
        <section
          id="san-diego-faqs"
          aria-labelledby="faqs-heading"
          className="rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3.5"
        >
          <div className="flex items-center gap-2 border-b border-slate-200/50 dark:border-white/10 pb-2">
            <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0" />
            <h2
              id="faqs-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions (FAQs) About Mushroom Farming
            </h2>
          </div>

          <div className="space-y-3">
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

        {/* Section 6: Commercial Agribusiness Training & Blueprint CTA (No Black Box) */}
        <section
          aria-labelledby="turn-space-profitable-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs space-y-3"
        >
          <div className="space-y-1">
            <h3
              id="turn-space-profitable-heading"
              className="text-[14px] font-bold text-slate-900 dark:text-white"
            >
              Turn Your Space Into a Highly Profitable Business Today!
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Are you ready to start your own indoor mushroom farm in San Diego, or anywhere else in the world? We provide comprehensive, step-by-step Mushroom Farming Training Programs tailored for both hobbyists and serious entrepreneurs.
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              Our globally recognized online courses will teach you the exact commercial methodologies for climate automation, substrate formulation, disease management, and marketing strategies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/usatraining" className="hover:underline">
                  Basic Cultivation Training ($39)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Perfect for beginners setting up their first home grow tent.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-200/50 dark:border-white/5 bg-white/30 dark:bg-white/[0.02] space-y-1">
              <div className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <Link href="/usatraining" className="hover:underline">
                  Advanced Commercial Training ($97)
                </Link>
              </div>
              <p className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Our best-selling blueprint for entrepreneurs looking to build a large-scale, automated indoor farm and dominate local wholesale markets.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <Link
              href="/usatraining"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Join Basic Training ($39)</span>
            </Link>
            <Link
              href="/usatraining"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1"
            >
              <span>Get Commercial Blueprint ($97)</span>
            </Link>
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20Indoor%20Mushroom%20Farming%20in%20San%20Diego."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Advice</span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
