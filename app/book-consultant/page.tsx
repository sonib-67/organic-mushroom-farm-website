import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import BookConsultantClient from "./BookConsultantClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Book 1-on-1 Mushroom Farming Business Call Consultation | ₹59",
  description:
    "Book a premium 1-on-1 call consultancy for ₹59. Get expert blueprint design, subsidy advice, and troubleshooting help direct from Katangi Road, Jabalpur.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/book-consultant",
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
    title: "Book 1-on-1 Mushroom Farming Business Call Consultation | ₹59 ⚡",
    description:
      "Book a premium 1-on-1 call consultancy for ₹59. Get expert blueprint design, subsidy advice, and troubleshooting help direct from Katangi Road, Jabalpur.",
    url: "https://organicmushroomsfarm.com/book-consultant",
    siteName: "Organic Mushroom Farm",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Book 1-on-1 Mushroom Farming Business Call Consultation | ₹59 ⚡",
    description:
      "Book a premium 1-on-1 call consultancy for ₹59. Get expert blueprint design, subsidy advice, and troubleshooting help direct from Katangi Road, Jabalpur.",
  },
};

export default function BookConsultantPage() {
  const pageUrl = "https://organicmushroomsfarm.com/book-consultant";

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
        name: "Book 1-on-1 Mushroom Farming Business Call Consultation | ₹59",
        description:
          "Book a premium 1-on-1 call consultancy for ₹59. Get expert blueprint design, subsidy advice, and troubleshooting help direct from Katangi Road, Jabalpur.",
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
            name: "Services",
            item: "https://organicmushroomsfarm.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Book 1-on-1 Consultation",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "1-on-1 Mushroom Farming Business Call Consultation",
        serviceType: "Agricultural Business Consulting",
        description:
          "Expert blueprint design, project setup planning, government subsidy navigation, and contamination troubleshooting for commercial mushroom cultivation.",
        provider: {
          "@id": "https://organicmushroomsfarm.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "59",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: pageUrl,
        },
      },
    ],
  };

  return (
    <main
      id="book-consultant-page"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 text-slate-800 dark:text-slate-200"
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
        className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-2"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li
            aria-current="page"
            className="text-slate-900 dark:text-slate-100 font-semibold"
          >
            1-on-1 Consultation
          </li>
        </ol>
      </nav>

      {/* Main Container - Compact Editorial Flow for Minimal Scrolling */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <BookConsultantClient />
      </div>
    </main>
  );
}
