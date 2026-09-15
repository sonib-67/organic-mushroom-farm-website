import React from 'react';
import type { Metadata } from 'next';
import SitemapClient from './SitemapClient';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Site Directory | Organic Mushrooms Farm Locations & Services",
  description: "Complete architectural mapping of the Organic Mushrooms Farm platform. Navigate to main hubs, services, state directories, and all local training centers.",
  keywords: "sitemap, site directory, mushroom farm locations, training centers india, organic mushroom farm structure",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/site-directory",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Site Directory | Organic Mushrooms Farm Locations & Services",
    description: "Complete architectural mapping of the Organic Mushrooms Farm platform. Navigate to main hubs, services, state directories, and all local training centers.",
    url: "https://organicmushroomsfarm.com/site-directory",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Site Directory | Organic Mushrooms Farm Locations & Services",
    description: "Complete architectural mapping of the Organic Mushrooms Farm platform. Navigate to main hubs, services, state directories, and all local training centers.",
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
      "@id": "https://organicmushroomsfarm.com/site-directory#webpage",
      url: "https://organicmushroomsfarm.com/site-directory",
      name: "Site Directory | Organic Mushrooms Farm Locations & Services",
      description: "Complete architectural mapping of the Organic Mushrooms Farm platform. Navigate to main hubs, services, state directories, and all local training centers.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/site-directory#breadcrumb",
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
          name: "Site Directory",
          item: "https://organicmushroomsfarm.com/site-directory",
        },
      ],
    }
  ],
};

export default function SiteDirectoryPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SitemapClient />
    </main>
  );
}
