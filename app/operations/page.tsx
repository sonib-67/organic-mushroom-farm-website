import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Settings,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
  Activity,
  PackageCheck,
  Users,
  Award,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm",
  description:
    "Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/operations",
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
      "Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm ⚙️",
    description:
      "Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.",
    url: "https://organicmushroomsfarm.com/operations",
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
    publishedTime: "2026-08-12T08:00:00+05:30",
    modifiedTime: "2026-08-12T08:00:00+05:30",
    authors: ["Organic Mushroom Farm Editorial Team"],
    section: "Farm Management",
  },
  twitter: {
    card: "summary",
    title:
      "Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm ⚙️",
    description:
      "Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.",
  },
};

export default function OperationsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/operations";
  const publishedDate = "2026-08-12T08:00:00+05:30";
  const modifiedDate = "2026-08-12T08:00:00+05:30";

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
          availableLanguage: ["en", "hi"],
        },
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
        name: "Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm",
        description:
          "Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.",
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
            name: "Operations",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm",
        description:
          "Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.",
        datePublished: publishedDate,
        dateModified: modifiedDate,
        mainEntityOfPage: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          name: "Organic Mushroom Farm Editorial Team",
        },
        publisher: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
      },
    ],
  };

  return (
    <main
      id="farm-operations-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[200px] sm:max-w-none">
            Farm Operations
          </li>
        </ol>
      </nav>

      {/* Main Article Container - Compact Editorial Flow Without Artificial Card Boxes */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <Settings className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Farm Management
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Calendar className="w-3 h-3" /> August 12, 2026
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3">
            Behind the Harvest: Why Seamless Operations <span className="gradient-text">Make or Break Your Mushroom Farm</span> ⚙️
          </h1>

          <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
            Growing mushrooms is one thing; running a smooth, predictable, and highly profitable farm day in and day out is another challenge entirely.
          </p>
        </header>

        {/* Clean Editorial Flow - No Artificial Boxes, Compact Text Size for Minimal Scrolling */}
        <div className="space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Whether you are managing a single grow room or an industrial-scale{" "}
            <Link href="/services/turnkey-setup" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              commercial facility
            </Link>, mushroom farm operations require military-grade discipline, strict hygiene, and well-defined workflows. A great setup or lab-certified{" "}
            <Link href="/spawn-seeds" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
              high-quality spawn
            </Link>{" "}
            won&apos;t mean much if your daily operational management is chaotic.
          </p>
          <p>
            Here is what goes into building a reliable operational framework that eliminates crop loss, keeps running costs low, and maximizes your harvest yield.
          </p>

          {/* Section 1 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> 1. Uncompromising Hygiene &amp; Sanitation Protocols
            </h2>
            <p className="mb-2">
              Contamination from green mold (Trichoderma) or bacterial blotch is the single biggest threat to a mushroom farm&apos;s bottom line. Operational excellence starts with rigid Standard Operating Procedures (SOPs).
            </p>
            <p>
              This includes worker sanitation, systematic room pasteurization between harvest cycles, and regular equipment sterilization. When cleanliness is built into daily habits, crop failures drop to near zero.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-500" /> 2. Precision Environmental Monitoring
            </h2>
            <p className="mb-2">
              Mushroom mycelium never sleeps, and its environmental needs change constantly across different growth stages. Daily operations demand meticulous monitoring of ambient temperature, humidity levels, air turnover, and CO₂ concentrations.
            </p>
            <p>
              Having structured daily check-routines—or automated monitoring systems—ensures that subtle environmental shifts are corrected long before they stunt growth or ruin cap quality in your{" "}
              <Link href="/services/button-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Button
              </Link>{" "}
              or{" "}
              <Link href="/services/oyster-mushroom" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Oyster
              </Link>{" "}
              crops.
            </p>
          </section>

          {/* Section 3 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <PackageCheck className="w-4 h-4 text-emerald-500" /> 3. Streamlined Post-Harvest Management
            </h2>
            <p className="mb-2">
              Fresh mushrooms are highly perishable crops. Your daily harvesting routine must be tightly integrated with post-harvest handling: immediate grading, proper chilling, hygienic packaging, and fast-track dispatch to buyers.
            </p>
            <p>
              Streamlining this operational pipeline protects crop freshness, extends shelf life, and ensures you command top market prices from wholesalers and retailers alike.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-500" /> 4. Resource &amp; Labor Efficiency
            </h2>
            <p className="mb-2">
              From labor scheduling during picking flushes to optimizing electricity usage for climate control, efficient operations directly protect your profit margins. Structuring clear workflows for your farm staff reduces waste, saves time, and keeps operational expenditures tightly in check.
            </p>
          </section>

          {/* Section 5 */}
          <section className="pt-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-emerald-500 pl-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-500" /> Scale Your Farm with Systemized Success
            </h2>
            <p className="mb-2">
              Building a thriving agricultural business is about shifting from reactive fire-fighting to proactive, system-driven management. When your day-to-day operations run like clockwork, high yields and consistent profits naturally follow. Master these workflows with our practical{" "}
              <Link href="/training" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                expert training courses
              </Link>.
            </p>
          </section>

          {/* Clean Glass CTA Box (Matching Original React Vite Glass Style) */}
          <section className="glass p-5 sm:p-6 rounded-2xl border dark:border-white/10 border-slate-200 text-center mt-6 bg-emerald-500/5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500" /> Ready to optimize your farm operations?
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-3.5 leading-relaxed">
              Master commercial-scale management and scale your yields with expert consultation, standard SOPs, and training from Organic Mushrooms Farm.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href="tel:9203544140"
                className="btn-primary w-full sm:w-auto px-5 py-2 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call / WhatsApp
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-xs border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" /> Book a Consultation
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
