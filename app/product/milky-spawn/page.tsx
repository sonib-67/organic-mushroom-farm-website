import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sprout,
  TestTube,
  Wind,
  ShieldCheck,
  Factory,
  ShoppingCart,
  CheckCircle2,
  FlaskConical,
  Box,
  Phone,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Home,
  ThermometerSun,
  Layers,
  Sparkles,
  HelpCircle,
  MessageSquare,
  Award,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Milky Mushroom Spawn (Seed) | High Yield Calocybe Indica Spawn India",
  description:
    "Buy high-quality Milky Mushroom Spawn (Calocybe indica). Lab-tested, contamination-free, heat-tolerant summer mushroom spawn with pan-India delivery.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/product/milky-spawn",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Milky Mushroom Spawn (Seed) | High Yield Calocybe Indica Spawn India",
    description:
      "Buy high-quality Milky Mushroom Spawn (Calocybe indica). Lab-tested, contamination-free, heat-tolerant summer mushroom spawn with pan-India delivery.",
    url: "https://organicmushroomsfarm.com/product/milky-spawn",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Milky Mushroom Spawn (Seed) | High Yield Calocybe Indica Spawn India",
    description:
      "Buy high-quality Milky Mushroom Spawn (Calocybe indica). Lab-tested, contamination-free, heat-tolerant summer mushroom spawn with pan-India delivery.",
  },
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://organicmushroomsfarm.com/product/milky-spawn#product",
  name: "Milky Mushroom Spawn",
  description:
    "Premium quality Milky Mushroom Spawn (Calocybe indica) from Organic Mushrooms Farm. Pure F1 mother culture on sterilized grains, heat-tolerant up to 35°C.",
  url: "https://organicmushroomsfarm.com/product/milky-spawn",
  brand: {
    "@type": "Brand",
    name: "Organic Mushrooms Farm",
  },
  sku: "OMF-SPAWN-MILKY-01",
  mpn: "MILKY-SPAWN-F1",
  category: "Agricultural Spawn & Seeds",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "25",
  },
  offers: {
    "@type": "Offer",
    price: "600.00",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://organicmushroomsfarm.com/product/milky-spawn",
    seller: {
      "@type": "Organization",
      name: "Organic Mushrooms Farm",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "100.00",
        currency: "INR",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "IN",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 1,
          unitCode: "d",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 3,
          maxValue: 7,
          unitCode: "d",
        },
      },
    },
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "Spawn & Seeds",
      item: "https://organicmushroomsfarm.com/spawn-seeds",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Milky Mushroom Spawn",
      item: "https://organicmushroomsfarm.com/product/milky-spawn",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is mushroom spawn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mushroom spawn is essentially the 'seed' for mushrooms. It consists of sterilized material (usually wheat or rye grains) fully colonized by the living mycelium of a specific mushroom strain.",
      },
    },
    {
      "@type": "Question",
      name: "How should I store Milky Mushroom spawn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spawn must be stored in a clean refrigerator strictly at 4°C (39°F) to pause its growth without killing the mycelium. Do not freeze the spawn. Avoid storing it near volatile chemicals.",
      },
    },
    {
      "@type": "Question",
      name: "What is the shelf life of the spawn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When stored correctly at 4°C, Button, Milky, and Oyster spawn can remain viable for 30 to 45 days. However, for maximum vigor, we recommend using it within 15 days of receipt.",
      },
    },
    {
      "@type": "Question",
      name: "How much spawn do I need for mushroom cultivation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The general golden rule is 0.5% to 1% of the wet weight of your substrate for button mushrooms, or 4% to 5% of dry substrate weight for oyster and milky mushrooms (approx 500g spawn per 10kg dry straw).",
      },
    },
    {
      "@type": "Question",
      name: "Why is Milky mushroom spawn ideal for summer farming in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calocybe indica naturally thrives at temperatures between 25°C and 35°C, making it ideal for tropical Indian summers across Madhya Pradesh, Uttar Pradesh, Maharashtra, Tamil Nadu, and Bihar without needing expensive chillers.",
      },
    },
    {
      "@type": "Question",
      name: "Is casing soil mandatory for Milky mushroom cultivation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, casing is essential for milky mushrooms. A 2 to 3 cm layer of pasteurized casing soil (pH 7.5 to 8.2) triggers pinhead formation and retains critical moisture for heavy stem development.",
      },
    },
  ],
};

export default function MilkySpawnPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8 pt-2"
        >
          <Link href="/" className="hover:text-emerald-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/spawn-seeds"
            className="hover:text-emerald-500 transition-colors"
          >
            Spawn & Seeds
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">
            Milky Mushroom Spawn
          </span>
        </nav>

        {/* 1. Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-5">
              <Sparkles size={14} /> Mushroom Spawn India • Summer Specialist
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Milky Mushroom{" "}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Spawn (Seed)
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              High-yield, lab-tested spawn for professional and beginner mushroom
              farmers. Pure culture <em>Calocybe indica</em> strain built for
              thriving summer harvests, thick fleshy stems, and outstanding shelf
              life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-lg shadow-purple-500/20 hover:brightness-110 active:scale-95 transition-all text-sm"
              >
                <ShoppingCart size={17} /> Buy Now (₹600)
              </a>
              <a
                href="#start-project"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-white/40 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all text-sm"
              >
                Start Your Project
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Strain
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Calocybe indica
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Optimum Temp
                </div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  25°C – 35°C
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Substrate
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Wheat / Paddy Straw
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Shelf Life
                </div>
                <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                  Up to 15 Days
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What is Mushroom Spawn */}
        <section className="mb-16">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-md">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                What is Mushroom Spawn?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Mushroom spawn is exactly like the seed used for planting crops,
                but it consists of mycelium (the vegetative growth of fungi)
                propagated on a sterile base material. It is the powerhouse that
                inoculates your compost or substrate.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Grain Spawn",
                  desc: "Mycelium grown on sterilized grains (like wheat or rye). Ideal for fast colonization in compost and straw.",
                },
                {
                  title: "Sawdust Spawn",
                  desc: "Mycelium grown on hardwood sawdust. Best suited for inoculating logs or outdoor beds.",
                },
                {
                  title: "Plug Spawn",
                  desc: "Small wooden dowels covered in mycelium. Perfect for long-term log cultivation.",
                },
              ].map((type, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                    <Sprout size={18} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Spawn Quality */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Our Spawn{" "}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Quality
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Manufactured in ISO-certified cleanrooms for unmatched purity.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { icon: TestTube, text: "Strictly Lab Tested" },
              { icon: Sprout, text: "High Yield Performance" },
              { icon: Wind, text: "Fast Colonization" },
              { icon: ShieldCheck, text: "Contamination-Free" },
              { icon: Factory, text: "Commercial-Grade" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center group hover:bg-white/80 dark:hover:bg-white/[0.06] transition-all"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform mb-3">
                  <feature.icon size={20} />
                </div>
                <div className="text-slate-900 dark:text-white font-semibold text-xs sm:text-sm">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Milky Mushroom Spawn Deep Technical Profile */}
        <section className="mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/20 via-white/50 to-emerald-950/20 dark:from-purple-950/40 dark:via-white/[0.02] dark:to-emerald-950/30 border border-purple-500/20">
            <div className="max-w-3xl mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-600 dark:text-purple-300">
                Calocybe indica Agronomy
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
                Why Milky Mushroom Spawn is the Summer Game-Changer
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                While commercial{" "}
                <Link
                  href="/services/button-mushroom"
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  Button mushrooms
                </Link>{" "}
                require massive chilling infrastructure in the Indian summer,{" "}
                <Link
                  href="/services/milky-mushroom"
                  className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                >
                  Milky mushrooms
                </Link>{" "}
                thrive effortlessly in temperatures between 25°C and 35°C.
                Farmers in{" "}
                <Link
                  href="/states/madhya-pradesh"
                  className="text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Madhya Pradesh
                </Link>
                , Uttar Pradesh, Maharashtra, and across central India achieve 80%
                to 100% biological efficiency with basic room ventilation and
                pasteurized straw.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <ThermometerSun size={16} className="text-amber-500" /> Heat
                  Resilience
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Operates perfectly at 28°C–35°C without heavy cooling
                  equipment, reducing electricity overheads significantly.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <Layers size={16} className="text-emerald-500" /> Casing
                  Protocol
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Requires 2–3 cm pasteurized casing soil on bag top after
                  20-day incubation to initiate firm, solid white button pinheads.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <Award size={16} className="text-purple-500" /> Long Shelf
                  Life
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Dense cellular stem structure resists browning, giving 3–5
                  days at room temperature and up to 15 days refrigerated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Available Spawn Types (Preserved 100% from original page) */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Available Spawn Types
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Fresh master batches inoculated under strict laminar flow
              standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Oyster Spawn */}
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Oyster Mushroom Spawn
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 flex-grow leading-relaxed">
                Pleurotus species. Exceptionally fast-growing and adaptive to
                various temperatures. Perfect for beginners and experts alike
                who want reliable bag colonization in straw substrates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" /> Summer
                  &amp; Winter Strains
                </li>
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" /> First
                  harvest in 21 days
                </li>
              </ul>
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-slate-800 dark:text-slate-200 mt-auto"
              >
                Bulk Order
              </a>
            </div>

            {/* Button Spawn */}
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-purple-500/30 relative flex flex-col md:-translate-y-2 shadow-xl shadow-purple-500/5">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-emerald-500 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                Best Seller
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Button Mushroom Spawn
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 flex-grow leading-relaxed">
                Agaricus bisporus. High-yielding F1 hybrids designed for
                controlled commercial setups ensuring large, firm white caps and
                resilient compost colonisation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" /> Up to
                  25% biological efficiency
                </li>
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" /> Disease
                  resistant strain
                </li>
              </ul>
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-emerald-500 text-white hover:brightness-110 transition-all mt-auto shadow-md"
              >
                Bulk Order
              </a>
            </div>

            {/* Milky Spawn (Featured) */}
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-emerald-500/30 relative flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-[10px] font-black uppercase tracking-wider text-white shadow-md">
                Featured Product
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Milky Mushroom Spawn
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 flex-grow leading-relaxed">
                Calocybe indica. Tropical strain requiring high heat. Popular for
                its tremendous shelf life and meaty texture. Perfect companion
                for Indian summer crop rotation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" /> Thrives
                  above 30°C
                </li>
                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                  <CheckCircle2 size={14} className="text-emerald-500" />{" "}
                  Outstanding shelf life (15 days)
                </li>
              </ul>
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10 transition-all text-slate-800 dark:text-slate-200 mt-auto"
              >
                Bulk Order
              </a>
            </div>
          </div>
        </section>

        {/* 6. Bulk Orders & Need Training Highlights */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-purple-500/20 bg-purple-500/5 relative text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                Bulk Orders
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Best pricing for commercial farms and large-scale growers.
                Ensure consistent supply of fresh mother culture with chilled
                pan-India transit.
              </p>
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-md hover:brightness-110 transition-all"
              >
                Order Now <ArrowRight size={16} />
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] relative text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                Need Training?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Learn how to use spawn correctly to maximize your yield per kg
                of substrate, casing soil sterilization, and humidity
                management.
              </p>
              <Link
                href="/training"
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              >
                Start Learning <BookOpen size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Why Partner With Us */}
        <section className="mb-16 p-6 sm:p-10 rounded-3xl bg-slate-900/40 dark:bg-black/40 border border-black/5 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Partner{" "}
                <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                  With Us?
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Your farm&apos;s success begins in our laboratory. We don&apos;t
                just sell spawn; we provide the foundation for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <FlaskConical size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">
                      Expert Production
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      Maintained by mycologists ensuring zero genetic
                      degradation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Sprout size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">
                      Fresh Batch Supply
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      Spawn flows directly from incubator to you. No stale
                      storage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Box size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">
                      Bulk Availability
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      Capacity to supply tonnes of consistent spawn for large
                      commercial units.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-purple-500/20 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Need Technical Support?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                We don&apos;t just ship seeds. All our buyers have access to our
                technical helplines for guidance on spawning and incubation.
              </p>
              <a
                href="tel:9203544140"
                className="w-full py-3 rounded-xl font-bold flex justify-center items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 transition-all text-sm"
              >
                <Phone size={16} /> Call Expert: 9203544140
              </a>
            </div>
          </div>
        </section>

        {/* 8. Universal Compatibility */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Universal{" "}
              <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Compatibility
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Our strains are adapted to perform uniformly across all setups.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
              <Home
                size={28}
                className="text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1.5">
                Indoor Farming
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Highly capable in seasonal rooms, bamboo huts, and modified
                spare rooms.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
              <Wind
                size={28}
                className="text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1.5">
                Polyhouse Farming
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Thrives in naturally ventilated setups with basic evaporative
                cooling pads.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-center">
              <Factory
                size={28}
                className="text-purple-600 dark:text-purple-400 mx-auto mb-3"
              />
              <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1.5">
                Commercial Units
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Maximum potential unleashed in climate-controlled PUF panel
                bunkers.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Call to Action Section */}
        <section className="text-center mb-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 via-slate-900/30 to-emerald-900/30 border border-purple-500/20 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                Ready to Start Mushroom Farming?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Secure your high-yield spawn today and experience unparalleled
                growth rates and cap quality.
              </p>
              <a
                href="https://pages.razorpay.com/stores/st_SA0SZB78s0M2Ku"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-emerald-500 text-white shadow-lg hover:brightness-110 transition-all"
              >
                Buy Spawn Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* 10. FAQ Section */}
        <section className="mb-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-2">
              <HelpCircle size={13} /> Support &amp; Knowledge
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is mushroom spawn?",
                a: "Mushroom spawn is essentially the 'seed' for mushrooms. It consists of sterilized material (usually wheat or rye grains) fully colonized by the living mycelium of a specific mushroom strain.",
              },
              {
                q: "How should I store the spawn?",
                a: "Spawn must be stored in a clean refrigerator strictly at 4°C (39°F) to pause its growth without killing the mycelium. Do not freeze the spawn. Avoid storing it near volatile chemicals.",
              },
              {
                q: "What is the shelf life of the spawn?",
                a: "When stored correctly at 4°C, Button, Milky, and Oyster spawn can remain viable for 30 to 45 days. However, for maximum vigor, we recommend using it within 15 days of receipt.",
              },
              {
                q: "How much spawn do I need?",
                a: "The general golden rule is 0.5% to 1% of the wet weight of your substrate for button mushrooms, or 4% to 5% of dry substrate weight for oyster and milky mushrooms (e.g., 500g spawn per 10kg dry straw).",
              },
              {
                q: "Why is Milky mushroom spawn ideal for summer farming in India?",
                a: "Calocybe indica naturally thrives at temperatures between 25°C and 35°C, making it ideal for tropical Indian summers across Madhya Pradesh, Uttar Pradesh, Maharashtra, Tamil Nadu, and Bihar without needing expensive chillers.",
              },
              {
                q: "Is casing soil mandatory for Milky mushroom cultivation?",
                a: "Yes, casing is essential for milky mushrooms. A 2 to 3 cm layer of pasteurized casing soil (pH 7.5 to 8.2) triggers pinhead formation and retains critical moisture for heavy stem development.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-white/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 overflow-hidden transition-colors hover:border-purple-500/20"
              >
                <summary className="cursor-pointer select-none p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="text-purple-600 dark:text-purple-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 border-t border-black/5 dark:border-white/5 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 11. Contact / Master Enquiry Section (#start-project) */}
        <section id="start-project" className="mb-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Start Your Project
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
                Connect with our lead engineers &amp; mycologists to discuss your
                farm capacity, regional climate feasibility, and spawn dispatch.
              </p>

              <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 max-w-lg mx-auto">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Need Spawn / Seed Supply?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
                  Click the button below to specify your spawn variety (Milky,
                  Button, Oyster, Shiitake) and order quantity via our master
                  enquiry form.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/enquiry"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-emerald-500 text-white font-bold text-sm hover:shadow-lg transition-all"
                  >
                    Enquiry Now
                  </Link>
                  <a
                    href="https://wa.me/919203544140?text=Hi%2C%20I%20want%20to%20inquire%20about%20Milky%20Mushroom%20Spawn%20(Seed)%20supply."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} /> WhatsApp: 9203544140
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center py-6 border-t border-black/5 dark:border-white/5 text-slate-500 text-xs font-medium">
          &ldquo;Order premium spawn today and boost your mushroom yield.&rdquo;
        </div>
      </main>
    </div>
  );
}
