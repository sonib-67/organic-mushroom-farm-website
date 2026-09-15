import React from 'react';
import type { Metadata } from 'next';
import PriceClient from './PriceClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Price Today in India | Live Wholesale & Retail Rates",
  description: "Get the latest daily wholesale and retail pricing for premium commercial mushrooms (Button, Oyster, Milky) across major Indian markets and states.",
  keywords: "mushroom price today, wholesale mushroom rate, button mushroom price, oyster mushroom price, live mushroom mandi rates",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/mushroom-price-today",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Price Today in India | Live Wholesale & Retail Rates",
    description: "Get the latest daily wholesale and retail pricing for premium commercial mushrooms (Button, Oyster, Milky) across major Indian markets and states.",
    url: "https://organicmushroomsfarm.com/mushroom-price-today",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Price Today in India | Live Wholesale & Retail Rates",
    description: "Get the latest daily wholesale and retail pricing for premium commercial mushrooms (Button, Oyster, Milky) across major Indian markets and states.",
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
      "@id": "https://organicmushroomsfarm.com/mushroom-price-today#webpage",
      url: "https://organicmushroomsfarm.com/mushroom-price-today",
      name: "Mushroom Price Today in India | Live Wholesale & Retail Rates",
      description: "Get the latest daily wholesale and retail pricing for premium commercial mushrooms (Button, Oyster, Milky) across major Indian markets and states.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/mushroom-price-today#breadcrumb",
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
          name: "Mushroom Price Today",
          item: "https://organicmushroomsfarm.com/mushroom-price-today",
        },
      ],
    }
  ],
};

export default function MushroomPriceTodayPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PriceClient />
    </main>
  );
}
