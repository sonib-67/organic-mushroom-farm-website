import React from 'react';
import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Service | Organic Mushrooms Farm",
  description: "Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Organic Mushrooms Farm",
    description: "Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects.",
    url: "https://organicmushroomsfarm.com/terms",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Organic Mushrooms Farm",
    description: "Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects.",
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
      "@id": "https://organicmushroomsfarm.com/terms#webpage",
      url: "https://organicmushroomsfarm.com/terms",
      name: "Terms of Service | Organic Mushrooms Farm",
      description: "Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/terms#breadcrumb",
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
          name: "Terms of Service",
          item: "https://organicmushroomsfarm.com/terms",
        },
      ],
    }
  ],
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TermsClient />
    </main>
  );
}
