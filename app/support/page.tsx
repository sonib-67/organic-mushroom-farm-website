import React from 'react';
import type { Metadata } from 'next';
import SupportClient from './SupportClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Customer Support & Helpline | Organic Mushrooms Farm",
  description: "Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/support",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Customer Support & Helpline | Organic Mushrooms Farm",
    description: "Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation.",
    url: "https://organicmushroomsfarm.com/support",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Customer Support & Helpline | Organic Mushrooms Farm",
    description: "Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation.",
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
      "@id": "https://organicmushroomsfarm.com/support#webpage",
      url: "https://organicmushroomsfarm.com/support",
      name: "Customer Support & Helpline | Organic Mushrooms Farm",
      description: "Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/support#breadcrumb",
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
          name: "Customer Support",
          item: "https://organicmushroomsfarm.com/support",
        },
      ],
    }
  ],
};

export default function SupportPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SupportClient />
    </main>
  );
}
