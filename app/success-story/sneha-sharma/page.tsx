import React from 'react';
import { Metadata } from 'next';
import SnehaSharmaClient from './ClientPage';

export const metadata: Metadata = {
  title: "Project Specs: Sneha Sharma | Organic Mushrooms Farm",
  description: "Detailed project specifications, equipment used, and ROI for Sneha Sharma's commercial mushroom farming setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/success-story/sneha-sharma",
  },
  robots: "index, follow",
  openGraph: {
    title: "Project Specs: Sneha Sharma | Organic Mushrooms Farm",
    description: "Detailed project specifications, equipment used, and ROI for Sneha Sharma's commercial mushroom farming setup.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Project Specs: Sneha Sharma | Organic Mushrooms Farm",
    description: "Detailed project specifications, equipment used, and ROI for Sneha Sharma's commercial mushroom farming setup.",
  }
};

export default function SnehaSharmaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Project Specs: Sneha Sharma | Organic Mushrooms Farm",
    "description": "Detailed project specifications, equipment used, and ROI for Sneha Sharma's commercial mushroom farming setup.",
    "url": "https://organicmushroomsfarm.com/success-story/sneha-sharma",
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
          "name": "Sneha Sharma",
          "item": "https://organicmushroomsfarm.com/success-story/sneha-sharma"
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
        <SnehaSharmaClient />
      </main>
    </>
  );
}
