import React from 'react';
import type { Metadata } from 'next';
import MadhyaPradeshClient from './MadhyaPradeshClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Madhya Pradesh Mushroom Farming | Cities Pages",
  description: "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
  keywords: "madhya pradesh mushroom farming, mushroom training jabalpur, indore mushroom farm, bhopal mushroom resources, gwalior mushroom",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/states/madhya-pradesh",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Madhya Pradesh Mushroom Farming | Cities Pages",
    description: "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
    url: "https://organicmushroomsfarm.com/states/madhya-pradesh",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Madhya Pradesh Mushroom Farming | Cities Pages",
    description: "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
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
      "@id": "https://organicmushroomsfarm.com/states/madhya-pradesh#webpage",
      url: "https://organicmushroomsfarm.com/states/madhya-pradesh",
      name: "Madhya Pradesh Mushroom Farming | Cities Pages",
      description: "Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Madhya Pradesh to start your successful business.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/states/madhya-pradesh#breadcrumb",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Madhya Pradesh",
          item: "https://organicmushroomsfarm.com/states/madhya-pradesh",
        },
      ],
    }
  ],
};

export default function MadhyaPradeshPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MadhyaPradeshClient />
    </main>
  );
}
