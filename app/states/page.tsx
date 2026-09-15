import React from 'react';
import type { Metadata } from 'next';
import StatesClient from './StatesClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Centers & Resources by State | India",
  description: "Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides.",
  keywords: "mushroom farming states, agriculture states india, mushroom training centers, local mushroom guides, state wise mushroom farm",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Centers & Resources by State | India",
    description: "Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides.",
    url: "https://organicmushroomsfarm.com/states",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Centers & Resources by State | India",
    description: "Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides.",
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
      "@id": "https://organicmushroomsfarm.com/states#webpage",
      url: "https://organicmushroomsfarm.com/states",
      name: "Mushroom Farming Centers & Resources by State | India",
      description: "Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/states#breadcrumb",
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
      ],
    }
  ],
};

export default function StatesPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StatesClient />
    </main>
  );
}
