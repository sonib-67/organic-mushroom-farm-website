import React from 'react';
import { Metadata } from 'next';
import AmitSinghalClient from './ClientPage';

export const metadata: Metadata = {
  title: "Project Specs: Amit Singhal | Organic Mushrooms Farm",
  description: "Detailed project specifications, equipment used, and ROI for Amit Singhal's commercial mushroom farming setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/success-story/amit-singhal",
  },
  robots: "index, follow",
  openGraph: {
    title: "Project Specs: Amit Singhal | Organic Mushrooms Farm",
    description: "Detailed project specifications, equipment used, and ROI for Amit Singhal's commercial mushroom farming setup.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Project Specs: Amit Singhal | Organic Mushrooms Farm",
    description: "Detailed project specifications, equipment used, and ROI for Amit Singhal's commercial mushroom farming setup.",
  }
};

export default function AmitSinghalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Project Specs: Amit Singhal | Organic Mushrooms Farm",
    "description": "Detailed project specifications, equipment used, and ROI for Amit Singhal's commercial mushroom farming setup.",
    "url": "https://organicmushroomsfarm.com/success-story/amit-singhal",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://organicmushroomsfarm.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Success Stories",
          "item": "https://organicmushroomsfarm.com/success-stories"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Amit Singhal",
          "item": "https://organicmushroomsfarm.com/success-story/amit-singhal"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <AmitSinghalClient />
      </main>
    </>
  );
}
