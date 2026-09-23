import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Layers,
  Droplets,
  Thermometer,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Scale,
  Sparkles,
  ChevronRight,
  RefreshCw,
  FlaskConical,
  Award,
  BookOpen,
} from "lucide-react";

export const dynamic = "error"; // Guarantees page is SSG / static
export const revalidate = false;

const PAGE_URL =
  "https://organicmushroomsfarm.com/blog/how-to-make-button-mushroom-compost-100kg-wheat-straw-long-method";

export const metadata: Metadata = {
  title:
    "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
  description:
    "Master the complete 28-day long method button mushroom composting process using 100kg wheat straw. Includes precise formulation matrix, turning schedule, moisture calibration, and quality verification tests.",
  alternates: {
    canonical: PAGE_URL,
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
      "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
    description:
      "Master the complete 28-day long method button mushroom composting process using 100kg wheat straw with exact ingredients, turns, and quality checks.",
    url: PAGE_URL,
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title:
      "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
    description:
      "Step-by-step 28-day long method guide to making button mushroom compost with 100kg wheat straw base, precise formula, and turning schedule.",
  },
};

export default function HowToMakeButtonMushroomCompostPage() {
  const publishedDate = "2026-09-23T04:30:00+05:30";
  const modifiedDate = "2026-09-23T04:30:00+05:30";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": PAGE_URL,
          "url": PAGE_URL,
          "name":
            "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
          "description":
            "Exhaustive guide to button mushroom compost preparation using 100kg wheat straw via the 28-day long method.",
          "breadcrumb": {
            "@id": `${PAGE_URL}#breadcrumb`,
          },
        },
        "headline":
          "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
        "description":
          "Achieving high yields in button mushroom (Agaricus bisporus) cultivation depends entirely on the quality of compost. Learn the exact 100kg wheat straw formulation, precision spraying, and 28-day turning schedule.",
        "datePublished": publishedDate,
        "dateModified": modifiedDate,
        "author": {
          "@type": "Organization",
          "name": "Expert Team - Organic Mushroom Farm",
          "url": "https://organicmushroomsfarm.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Organic Mushroom Farm",
          "url": "https://organicmushroomsfarm.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://organicmushroomsfarm.com/icon.png",
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        "name":
          "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
        "description":
          "Step-by-step 28-day scientific composting procedure for 100 kg wheat straw to cultivate Agaricus bisporus (button mushroom).",
        "totalTime": "P28D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "INR",
          "value": "1800",
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Wheat Straw",
            "requiredQuantity": "100 kg",
          },
          {
            "@type": "HowToSupply",
            "name": "Chicken Manure",
            "requiredQuantity": "40 - 45 kg",
          },
          {
            "@type": "HowToSupply",
            "name": "Wheat Bran (Chokar)",
            "requiredQuantity": "5 - 10 kg",
          },
          {
            "@type": "HowToSupply",
            "name": "Urea",
            "requiredQuantity": "1.2 - 1.5 kg",
          },
          {
            "@type": "HowToSupply",
            "name": "Single Super Phosphate (SSP)",
            "requiredQuantity": "1.5 kg",
          },
          {
            "@type": "HowToSupply",
            "name": "Gypsum",
            "requiredQuantity": "3.5 - 4 kg",
          },
          {
            "@type": "HowToSupply",
            "name": "Water",
            "requiredQuantity": "250 - 300 Litres",
          },
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Wooden Formwork Frame (5ft x 5ft)",
          },
          {
            "@type": "HowToTool",
            "name": "Garden Hose with Precision Spray Nozzle",
          },
          {
            "@type": "HowToTool",
            "name": "Long-stem Compost Thermometer",
          },
          {
            "@type": "HowToTool",
            "name": "Agricultural Pitchfork",
          },
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Phase 1: Precision Spraying & Pre-Conditioning (Day 0 to Day 2)",
            "text":
              "Spread 100 kg wheat straw evenly over a sanitized hard floor. Apply continuous uniform water spray over 48 hours while trampling to attain 70%-75% moisture.",
            "url": `${PAGE_URL}#phase-1`,
          },
          {
            "@type": "HowToStep",
            "name": "Phase 2: Homogeneous Mixing & Stack Formation (Day 3)",
            "text":
              "Blend damp straw uniformly with chicken manure, wheat bran, urea, and SSP. Form a compact 5ft x 5ft heap. Core self-heating will reach 70°C–75°C within 24 hours.",
            "url": `${PAGE_URL}#phase-2`,
          },
          {
            "@type": "HowToStep",
            "name": "Phase 3: The Structured Turning Schedule (Days 6 to 28)",
            "text":
              "Execute strict turns on Days 6, 10, 13 (add Gypsum), 16, 19, 22, 25 (sanitation mist if needed), and Day 28 (final maturation turn) to eliminate ammonia and aerate.",
            "url": `${PAGE_URL}#phase-3`,
          },
          {
            "@type": "HowToStep",
            "name": "Phase 4: Empirical Quality Verification",
            "text":
              "Verify dark brown/black color, sweet earthy odor (zero ammonia), 65%-68% moisture, and pH 7.2-7.5 prior to spawning.",
            "url": `${PAGE_URL}#quality-check`,
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://organicmushroomsfarm.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://organicmushroomsfarm.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name":
              "How to Make Button Mushroom Compost Using 100kg Wheat Straw (Long Method)",
            "item": PAGE_URL,
          },
        ],
      },
    ],
  };

  const formulationMatrix = [
    {
      ingredient: "Wheat Straw",
      quantity: "100 kg",
      function: "Primary structural carbon source (cellulose/lignin matrix).",
      highlight: "Base Material",
    },
    {
      ingredient: "Chicken Manure",
      quantity: "40 - 45 kg",
      function:
        "Primary organic nitrogen source to fuel microbial multiplication.",
      highlight: "Organic N Source",
    },
    {
      ingredient: "Wheat Bran (Chokar)",
      quantity: "5 - 10 kg",
      function:
        "Readily available carbohydrates for early fungal/bacterial energy.",
      highlight: "Carb Booster",
    },
    {
      ingredient: "Urea",
      quantity: "1.2 - 1.5 kg",
      function:
        "Inorganic nitrogen supplement to accelerate rapid fermentation.",
      highlight: "Inorganic N",
    },
    {
      ingredient: "Single Super Phosphate (SSP)",
      quantity: "1.5 kg",
      function:
        "Supplies phosphorus for structural energy transfer and mycelial strength.",
      highlight: "Phosphorus & Energy",
    },
    {
      ingredient: "Gypsum",
      quantity: "3.5 - 4 kg",
      function:
        "Buffers pH, flocculates colloids, and eliminates grease/stickiness.",
      highlight: "Added at 3rd Turn",
    },
    {
      ingredient: "Water",
      quantity: "250 - 300 Litres",
      function:
        "Maintains vital microbial hydration and metabolic transport.",
      highlight: "Precision Spraying",
    },
  ];

  const turningTimeline = [
    {
      turn: "1st Turning",
      day: "Day 6",
      action:
        "Break open the stack completely, mix inside-out, and rebuild. Spray a light mist of water if pockets appear dry.",
      badge: "Aeration & Inversion",
    },
    {
      turn: "2nd Turning",
      day: "Day 10",
      action:
        "Break down and re-stack to equalize moisture gradients and reactive heat zones throughout the pile.",
      badge: "Heat Equalization",
    },
    {
      turn: "3rd Turning",
      day: "Day 13",
      action:
        "Evenly broadcast and incorporate Gypsum (3.5 – 4 kg) throughout the layers to stabilize pH and break any matted, greasy textures.",
      badge: "Gypsum Addition",
    },
    {
      turn: "4th Turning",
      day: "Day 16",
      action:
        "Standard aerobic restack cycle. Disperse core heat and exchange inner and outer compost sections.",
      badge: "Standard Aerobic Cycle",
    },
    {
      turn: "5th Turning",
      day: "Day 19",
      action:
        "Standard aerobic restack cycle. Accelerates thermophilic actinomycetes and break-down of residual organic nitrogen.",
      badge: "Thermophilic Breakdown",
    },
    {
      turn: "6th Turning",
      day: "Day 22",
      action:
        "Standard aerobic restack cycle. Moisture check; straw fibers begin noticeably softening and darkening.",
      badge: "Fiber Softening",
    },
    {
      turn: "7th Turning",
      day: "Day 25",
      action:
        "Protective sanitation turn. If a pest or competitive mold infestation is suspected, apply a mild aqueous mist of Formalin (40–50 ml) and Bavistin (~5g) dissolved in water during the mixing process.",
      badge: "Protective Sanitation",
    },
    {
      turn: "8th Turning",
      day: "Day 28",
      action:
        "The final maturation turn before spawning. Aerate thoroughly to let residual ammonia escape completely and cool to ambient 24°C–25°C.",
      badge: "Final Spawning Ready",
    },
  ];

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 selection:bg-emerald-500 selection:text-white">
      {/* Structured JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header Container */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 mb-6 flex-wrap"
        >
          <Link
            href="/"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link
            href="/blog"
            className="hover:text-emerald-400 transition-colors"
          >
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 truncate max-w-[260px] sm:max-w-md font-medium">
            How to Make Button Mushroom Compost Using 100kg Wheat Straw
          </span>
        </nav>

        {/* Badge & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <SproutIcon className="w-3.5 h-3.5" /> Long Method Composting (28 Days)
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> September 2026
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 12 Min Read
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-400" /> Verified Standard
          </span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          How to Make Button Mushroom Compost Using{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            100kg Wheat Straw
          </span>{" "}
          (Long Method)
        </h1>

        {/* Excerpt / Lead */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light border-l-4 border-emerald-500 pl-4 bg-slate-900/40 py-3 rounded-r-lg">
          Achieving high yields in button mushroom (<em>Agaricus bisporus</em>)
          cultivation depends entirely on one foundational element:{" "}
          <strong className="text-white font-semibold">
            the quality of your compost
          </strong>
          . Composting is a controlled biochemical transformation driven by
          thermophilic bacteria and fungi that convert raw agricultural waste into
          a selective growth medium.
        </p>

        <p className="mt-4 text-slate-300 leading-relaxed">
          If you are starting with exactly{" "}
          <strong className="text-emerald-300 font-semibold">100 kg of wheat straw</strong>
          , precision matters. In this exhaustive guide, we break down the exact raw
          material mathematics, moisture calibration via precision spraying, and
          the rigid 28-day turning schedule required to eliminate ammonia
          toxicity and prepare a nitrogen-rich substrate.
        </p>
      </header>

      {/* Main Content Body */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Precision Formulation Matrix */}
        <section
          id="formulation-matrix"
          className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Precision Formulation Matrix for 100kg Wheat Straw
              </h2>
              <p className="text-sm text-slate-400">
                Calibrated Carbon-to-Nitrogen (C:N) ratio formulation
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            To maintain an optimal Carbon-to-Nitrogen (C:N) ratio, raw wheat
            straw must be fortified with specific organic manures and chemical
            amendments. Below is the exact proportion required for a{" "}
            <span className="text-emerald-400 font-semibold">100 kg base material</span>{" "}
            batch:
          </p>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/90 text-slate-200 text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-4 sm:px-6 font-semibold">
                    Raw Material / Ingredient
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-semibold">
                    Exact Quantity
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-semibold">
                    Biochemical Function
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-sm">
                {formulationMatrix.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-800/40 transition-colors odd:bg-slate-900/50 even:bg-slate-900/20"
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {item.ingredient}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-300 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-300 leading-relaxed">
                      {item.function}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Expert Note Box */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-1">
                Expert Note on Additives
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Formalin and Bavistin</strong> are strictly reserved
                for post-composting disease management during later turns.
                Ingredients like <em>Cocopeat</em> and <em>Vermicompost</em> do{" "}
                <strong>not</strong> belong in the initial compost batch; they
                are used exclusively for preparing the{" "}
                <span className="text-amber-200 underline underline-offset-2">
                  &apos;Casing Soil&apos;
                </span>{" "}
                much later in the cultivation cycle.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Step-by-Step Long Method Composting Workflow */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Step-by-Step Long Method Composting Workflow (28 Days)
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              A rigid, biologically calibrated procedure to achieve optimal
              pasteurization, conversion of lignin-cellulose, and complete
              ammonia evacuation.
            </p>
          </div>

          {/* Phase 1 */}
          <div
            id="phase-1"
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500/10 border-b border-l border-emerald-500/30 rounded-bl-xl text-xs font-semibold text-emerald-400">
              Days 0 – 2
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Phase 1: Day 0 to Day 2 — Precision Spraying & Pre-Conditioning
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-2 text-slate-300 leading-relaxed space-y-4">
                <p>
                  Spread your <strong className="text-white">100 kg of wheat straw</strong>{" "}
                  evenly across a clean, sanitized hard floor. Instead of
                  traditional pooling or soaking, apply a continuous, uniform
                  water spray over 48 hours while systematically trampling or
                  pressing down with your feet.
                </p>
                <p>
                  The target moisture threshold is{" "}
                  <strong className="text-emerald-300">70% to 75%</strong>. If you
                  compress a handful of straw tightly, it should feel thoroughly
                  wet, but <em>zero water droplets</em> should run down your
                  fingers. Precision spraying prevents nutrient leaching and
                  stops the lower layers from becoming waterlogged.
                </p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <Droplets className="w-4 h-4" /> Moisture Target: 70% – 75%
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Continuous 48h uniform spray
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Systematic foot trampling
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero water pooling/leaching
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div
            id="phase-2"
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-teal-500/10 border-b border-l border-teal-500/30 rounded-bl-xl text-xs font-semibold text-teal-400">
              Day 3
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Phase 2: Day 3 — Homogeneous Mixing & Stack Formation (Heap Building)
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-2 text-slate-300 leading-relaxed space-y-4">
                <p>
                  Blend the pre-conditioned, damp straw uniformly with{" "}
                  <strong className="text-white">Chicken Manure (40-45 kg)</strong>,{" "}
                  <strong className="text-white">Wheat Bran (5-10 kg)</strong>,{" "}
                  <strong className="text-white">Urea (1.2-1.5 kg)</strong>, and{" "}
                  <strong className="text-white">SSP (1.5 kg)</strong>.
                </p>
                <p>
                  Use a wooden frame formwork to construct a compact rectangular
                  stack or heap measuring roughly{" "}
                  <span className="text-teal-300 font-semibold">5 feet wide by 5 feet high</span>{" "}
                  (length depends on the total volume). Within 24 hours of
                  stacking, thermophilic bacteria will trigger self-heating,
                  sending core temperatures soaring to{" "}
                  <strong className="text-amber-400">70°C–75°C</strong> to initiate
                  the natural breakdown process.
                </p>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                  <Thermometer className="w-4 h-4" /> Core Temp: 70°C – 75°C
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Dimensions: 5ft wide x 5ft high
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Wood formwork compaction
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Thermophilic bacteria activation
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div
            id="phase-3"
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                3
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Phase 3: Days 6 to 28 — The Structured Turning Schedule
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8">
              Turning is the heartbeat of aerobic composting. It redistributes
              unfermented outer layers to the scorching core, expels toxic
              anaerobic gases like ammonia, and infuses fresh oxygen. Execute the
              turns strictly according to this timeline:
            </p>

            {/* Timeline Cards */}
            <div className="space-y-4">
              {turningTimeline.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                        Turn
                      </span>
                      <span className="text-base font-bold text-emerald-300">
                        #{index + 1}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-bold text-white text-base">
                          {item.turn}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                          {item.day}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: How to Verify Compost Readiness */}
        <section
          id="quality-check"
          className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How to Verify Compost Readiness (The Ultimate Test)
              </h2>
              <p className="text-sm text-slate-400">
                Empirical parameters before introducing button mushroom spawn
                (seeds)
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            By Day 28, the raw straw morphology should vanish. Your finished
            compost must feature these exact empirical characteristics before you
            introduce the button mushroom spawn (seeds):
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Check 1 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Color & Texture
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Dark brown to chocolate-black color with a crumbly, soft
                  texture that easily separates and does not stick together.
                </p>
              </div>
            </div>

            {/* Check 2 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Odor Check (Zero Ammonia)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Completely free of sharp, pungent ammonia smells. It should have
                  a sweet, earthy, woodland aroma reminiscent of rich forest
                  humus.
                </p>
              </div>
            </div>

            {/* Check 3 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Moisture Calibration
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Maintains a 65%–68% moisture content. A firm hand-squeeze
                  should yield dampness on your palms without dripping water
                  drops.
                </p>
              </div>
            </div>

            {/* Check 4 */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  pH Stability
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Neutral to slightly alkaline pH range (around 7.2 to 7.5),
                  which is safe for rapid and uncontaminated mycelial colonization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps & CTA */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-slate-900 border border-emerald-500/40 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Ready to Spawn Your Compost?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Once your compost passes all empirical checks on Day 28, cool it to
            below 25°C before mixing high-purity master grain spawn at 0.5%–0.75%
            of wet compost weight.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/spawn-seed"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              Order Lab-Grade Spawn Seeds <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/training"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all inline-flex items-center gap-2 border border-slate-700"
            >
              <BookOpen className="w-4 h-4" /> Join Hands-On Training
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}

function SproutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}
