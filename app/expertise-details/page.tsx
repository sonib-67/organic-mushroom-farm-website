import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ChevronRight,
  Award,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Expertise | Organic Mushrooms Farm",
  description:
    "Detailed insights into our precision engineering, expert training, and quality guarantee.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/expertise-details",
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
    title: "Our Expertise | Organic Mushrooms Farm",
    description:
      "Detailed insights into our precision engineering, expert training, and quality guarantee.",
    url: "https://organicmushroomsfarm.com/expertise-details",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Our Expertise | Organic Mushrooms Farm",
    description:
      "Detailed insights into our precision engineering, expert training, and quality guarantee.",
  },
};

export default function ExpertiseDetailsPage() {
  const pageUrl = "https://organicmushroomsfarm.com/expertise-details";

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
        name: "Our Expertise | Organic Mushrooms Farm",
        description:
          "Detailed insights into our precision engineering, expert training, and quality guarantee.",
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
            name: "Our Expertise",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main
      id="expertise-details-page"
      className="min-h-screen bg-transparent pt-20 sm:pt-24 pb-12 text-slate-800 dark:text-slate-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pt-2 pb-2">
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
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            Our Expertise
          </li>
        </ol>
      </nav>

      {/* Main Content Article - Compact & Seamless (No Black Boxes) */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
        {/* Page Hero Header */}
        <header className="text-center pt-2 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Our Core Value</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
            Bridging <span className="gradient-text text-emerald-600 dark:text-emerald-400">Technology</span> &amp; Cultivation
          </h1>

          <p className="text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            See how we help you start and grow a successful commercial mushroom farm with precision climate engineering and lifetime grower support.
          </p>
        </header>

        {/* Section 1: Precision Engineering */}
        <section
          id="precision-engineering"
          aria-labelledby="engineering-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="engineering-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Precision Engineering
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Automated climate control and thermal efficiency.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            Our farms use smart sensors to check and adjust the temperature and humidity automatically. In our custom{" "}
            <Link
              href="/services/turnkey-setup"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              turnkey setups
            </Link>
            , high-precision microcontrollers ensure optimal microclimates for commercial harvests.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Automated CO2 Management:</strong> Smart exhaust systems automatically trigger when CO2 levels exceed optimal thresholds (e.g., &gt;1200ppm during spawn run, &lt;800ppm during cropping).
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Humidity Control:</strong> Special humidifiers keep the air moist, which is essential for growing high-quality mushrooms.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span>
                <strong>Thermal Efficiency:</strong> 80-100mm Polyurethane Foam (PUF) panels ensure complete thermal isolation, drastically reducing electrical operating costs.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2: Expert Training */}
        <section
          id="expert-training"
          aria-labelledby="training-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="training-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Expert Training
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Hands-on practical curriculum and ongoing consultation.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            We teach you everything you need to know with hands-on training. Whether you join our comprehensive{" "}
            <Link
              href="/training"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              mushroom farming training
            </Link>{" "}
            online or visit our facilities, you gain field-tested operational knowledge.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span>
                <strong>Physical Training Center (Jabalpur):</strong> Learn directly on a working farm at our central{" "}
                <Link
                  href="/cities/madhya-pradesh/jabalpur"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Jabalpur
                </Link>{" "}
                campus. Practice making beds, adding seeds, and harvesting.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span>
                <strong>Online Certification:</strong> Learn the basics online, including how to make compost, review{" "}
                <Link
                  href="/sops"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  production SOPs
                </Link>
                , and identify crop diseases.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
              <span>
                <strong>Lifetime Support:</strong> Our training doesn&apos;t end after certification. Graduates receive ongoing consultation and troubleshooting access.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3: Quality Guarantee */}
        <section
          id="quality-guarantee"
          aria-labelledby="guarantee-heading"
          className="rounded-2xl p-4 border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-xs space-y-3"
        >
          <div className="flex items-center gap-2.5 border-b border-slate-200/50 dark:border-white/10 pb-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2
                id="guarantee-heading"
                className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight"
              >
                Quality Guarantee
              </h2>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                Commercial durability, certified spawn, and compliance.
              </p>
            </div>
          </div>

          <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300">
            We use high-quality materials to make sure your farm lasts and produces a lot. Every commercial component is verified for heavy-duty agricultural operations.
          </p>

          <ul className="space-y-2 text-[12px] text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                <strong>ISI-Grade Infrastructure:</strong> We build strong metal shelves that can hold heavy mushroom beds for many years.
              </span>
            </li>
            <li className="flex items-start gap-2 border-b border-slate-200/40 dark:border-white/5 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                <strong>Premium Hybrid Spawn:</strong> Our lab-purified{" "}
                <Link
                  href="/spawn-seed"
                  className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                >
                  mushroom spawn
                </Link>{" "}
                grows fast, resists diseases, and delivers exceptional harvest flushes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              <span>
                <strong>Compliance Ready:</strong> Our materials and structural blueprints are fully compliant with government subsidy requirements (NHB/MIDH). Learn more via our{" "}
                <Link
                  href="/contact"
                  className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
                >
                  consultation team
                </Link>.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4: Direct Consultation CTA (No Black Box) */}
        <section
          aria-labelledby="expertise-consult-heading"
          className="rounded-2xl p-4 sm:p-5 border border-emerald-500/30 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h3
              id="expertise-consult-heading"
              className="text-[13.5px] font-bold text-slate-900 dark:text-white"
            >
              Consult with Our Farm Engineers
            </h3>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-lg">
              Get customized blueprints, subsidy documentation, and technical equipment sizing tailored to your land and capital budget.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/919203544140?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20farming%20expertise%20and%20turnkey%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-sm bg-emerald-600 hover:bg-emerald-700 text-white border-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/40 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get Advice</span>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
