import React from 'react';
import type { Metadata } from 'next';
import FranchiseClient from './FranchiseClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Franchise Opportunity | Low Investment, High ROI",
  description: "Start a profitable mushroom franchise business with Organic Mushrooms Farm. Complete turnkey setup, training, marketing support, and guaranteed ROI.",
  keywords: "mushroom franchise, organic farming franchise, low investment franchise, agriculture franchise india, mushroom business ROI",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-franchise",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Franchise Opportunity | Low Investment, High ROI",
    description: "Start a profitable mushroom franchise business with Organic Mushrooms Farm. Complete turnkey setup, training, marketing support, and guaranteed ROI.",
    url: "https://organicmushroomsfarm.com/mushroom-franchise",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Franchise Opportunity | Low Investment, High ROI",
    description: "Start a profitable mushroom franchise business with Organic Mushrooms Farm. Complete turnkey setup, training, marketing support, and guaranteed ROI.",
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
      "@id": "https://organicmushroomsfarm.com/mushroom-franchise#webpage",
      url: "https://organicmushroomsfarm.com/mushroom-franchise",
      name: "Mushroom Franchise Opportunity | Low Investment, High ROI",
      description: "Start a profitable mushroom franchise business with Organic Mushrooms Farm. Complete turnkey setup, training, marketing support, and guaranteed ROI.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/mushroom-franchise#breadcrumb",
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
          name: "Mushroom Franchise",
          item: "https://organicmushroomsfarm.com/mushroom-franchise",
        },
      ],
    }
  ],
};

export default function MushroomFranchisePage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FranchiseClient />
    </main>
  );
}
