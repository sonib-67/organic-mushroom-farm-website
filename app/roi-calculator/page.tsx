import React from 'react';
import type { Metadata } from 'next';
import ROIClient from './ROIClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farm ROI Calculator | Commercial Agribusiness Planner",
  description: "Calculate mushroom farm startup costs, monthly operating expenses, production yield, and profit recovery timeline in India.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/roi-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farm ROI Calculator | Commercial Agribusiness Planner",
    description: "Calculate mushroom farm startup costs, monthly operating expenses, production yield, and profit recovery timeline in India.",
    url: "https://organicmushroomsfarm.com/roi-calculator",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farm ROI Calculator | Commercial Agribusiness Planner",
    description: "Calculate mushroom farm startup costs, monthly operating expenses, production yield, and profit recovery timeline in India.",
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
      "@id": "https://organicmushroomsfarm.com/roi-calculator#webpage",
      url: "https://organicmushroomsfarm.com/roi-calculator",
      name: "Mushroom Farm ROI Calculator | Commercial Agribusiness Planner",
      description: "Calculate mushroom farm startup costs, monthly operating expenses, production yield, and profit recovery timeline in India.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/roi-calculator#breadcrumb",
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
          name: "ROI Calculator",
          item: "https://organicmushroomsfarm.com/roi-calculator",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Mushroom Farm ROI Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "Calculate commercial Return on Investment (ROI), total setup investment, monthly yield, and est. profit based on floor area and variety.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR"
      }
    }
  ],
};

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 px-4 relative z-10 selection:bg-emerald-500/30 selection:text-slate-900 dark:selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ROIClient />
    </main>
  );
}
