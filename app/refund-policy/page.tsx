import React from 'react';
import type { Metadata } from 'next';
import RefundClient from './RefundClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Refund Policy | Organic Mushrooms Farm",
  description: "Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund Policy | Organic Mushrooms Farm",
    description: "Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm.",
    url: "https://organicmushroomsfarm.com/refund-policy",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Refund Policy | Organic Mushrooms Farm",
    description: "Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm.",
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
      "@id": "https://organicmushroomsfarm.com/refund-policy#webpage",
      url: "https://organicmushroomsfarm.com/refund-policy",
      name: "Refund Policy | Organic Mushrooms Farm",
      description: "Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/refund-policy#breadcrumb",
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
          name: "Refund Policy",
          item: "https://organicmushroomsfarm.com/refund-policy",
        },
      ],
    }
  ],
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RefundClient />
    </main>
  );
}
