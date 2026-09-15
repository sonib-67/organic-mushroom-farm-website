import React from 'react';
import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Careers | Jobs at Organic Mushrooms Farm | Hiring Now",
  description: "Join India's leading organic mushrooms farm. We are hiring for Farm Supervisors, Sales Executives, Digital Marketing, and providing Agriculture Internships.",
  keywords: "agriculture jobs india, mushroom farm jobs, farming jobs, online agriculture internship, remote digital marketing jobs",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers | Jobs at Organic Mushrooms Farm | Hiring Now",
    description: "Join India's leading organic mushrooms farm. We are hiring for Farm Supervisors, Sales Executives, Digital Marketing, and providing Agriculture Internships.",
    url: "https://organicmushroomsfarm.com/careers",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Careers | Jobs at Organic Mushrooms Farm | Hiring Now",
    description: "Join India's leading organic mushrooms farm. We are hiring for Farm Supervisors, Sales Executives, Digital Marketing, and providing Agriculture Internships.",
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
      "@id": "https://organicmushroomsfarm.com/careers#webpage",
      url: "https://organicmushroomsfarm.com/careers",
      name: "Careers | Jobs at Organic Mushrooms Farm | Hiring Now",
      description: "Join India's leading organic mushrooms farm. We are hiring for Farm Supervisors, Sales Executives, Digital Marketing, and providing Agriculture Internships.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/careers#breadcrumb",
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
          name: "Careers",
          item: "https://organicmushroomsfarm.com/careers",
        },
      ],
    }
  ],
};

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CareersClient />
    </main>
  );
}
