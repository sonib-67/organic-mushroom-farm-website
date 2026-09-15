import React from 'react';
import { Metadata } from 'next';
import RajeshKumarClient from './ClientPage';

export const metadata: Metadata = {
  title: "Project Specs: Rajesh Kumar | Organic Mushrooms Farm",
  description: "Detailed project specifications, equipment used, and ROI for Rajesh Kumar's commercial mushroom farming setup.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/success-story/rajesh-kumar",
  },
  robots: "index, follow",
  openGraph: {
    title: "Project Specs: Rajesh Kumar | Organic Mushrooms Farm",
    description: "Detailed project specifications, equipment used, and ROI for Rajesh Kumar's commercial mushroom farming setup.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Project Specs: Rajesh Kumar | Organic Mushrooms Farm",
    description: "Detailed project specifications, equipment used, and ROI for Rajesh Kumar's commercial mushroom farming setup.",
  }
};

export default function RajeshKumarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Project Specs: Rajesh Kumar | Organic Mushrooms Farm",
    "description": "Detailed project specifications, equipment used, and ROI for Rajesh Kumar's commercial mushroom farming setup.",
    "url": "https://organicmushroomsfarm.com/success-story/rajesh-kumar",
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
          "name": "Rajesh Kumar",
          "item": "https://organicmushroomsfarm.com/success-story/rajesh-kumar"
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
        <RajeshKumarClient />
      </main>
    </>
  );
}
