import React from 'react';
import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy | Organic Mushrooms Farm",
  description: "Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Organic Mushrooms Farm",
    description: "Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm.",
    url: "https://organicmushroomsfarm.com/privacy",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Organic Mushrooms Farm",
    description: "Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm.",
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
      "@id": "https://organicmushroomsfarm.com/privacy#webpage",
      url: "https://organicmushroomsfarm.com/privacy",
      name: "Privacy Policy | Organic Mushrooms Farm",
      description: "Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/privacy#breadcrumb",
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
          name: "Privacy Policy",
          item: "https://organicmushroomsfarm.com/privacy",
        },
      ],
    }
  ],
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PrivacyClient />
    </main>
  );
}
