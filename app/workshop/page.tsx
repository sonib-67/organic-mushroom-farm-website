import React from "react";
import type { Metadata } from "next";
import WorkshopClientPage from "./WorkshopClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Workshop | Online & Offline Training",
  description:
    "Join our comprehensive mushroom farming workshop. Practical training on button, oyster, and milky mushrooms for beginners and commercial growers.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/workshop",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mushroom Farming Workshop | Online & Offline Training",
    description:
      "Join our comprehensive mushroom farming workshop. Practical training on button, oyster, and milky mushrooms for beginners and commercial growers.",
    url: "https://organicmushroomsfarm.com/workshop",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Workshop | Online & Offline Training",
    description:
      "Join our comprehensive mushroom farming workshop. Practical training on button, oyster, and milky mushrooms for beginners and commercial growers.",
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
      "@id": "https://organicmushroomsfarm.com/workshop#webpage",
      url: "https://organicmushroomsfarm.com/workshop",
      name: "Mushroom Farming Workshop | Online & Offline Training",
      description:
        "Join our comprehensive mushroom farming workshop. Practical training on button, oyster, and milky mushrooms for beginners and commercial growers.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/workshop#breadcrumb",
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
          name: "Workshop",
          item: "https://organicmushroomsfarm.com/workshop",
        },
      ],
    },
  ],
};

export default function WorkshopPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 relative z-20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WorkshopClientPage />
    </main>
  );
}
