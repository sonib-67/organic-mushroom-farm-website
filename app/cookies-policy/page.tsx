import React from "react";
import type { Metadata } from "next";
import CookiesPolicyClient from "./CookiesPolicyClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cookies Policy | Organic Mushrooms Farm",
  description:
    "Learn how Organic Mushrooms Farm uses cookies and local storage to provide a fast, secure, and personalized experience for mushroom farming training and supplies.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/cookies-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cookies Policy | Organic Mushrooms Farm",
    description:
      "Learn how Organic Mushrooms Farm uses cookies and local storage to provide a fast, secure, and personalized experience.",
    url: "https://organicmushroomsfarm.com/cookies-policy",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookies Policy | Organic Mushrooms Farm",
    description:
      "Learn how Organic Mushrooms Farm uses cookies and local storage to provide a fast, secure, and personalized experience.",
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
      "@id": "https://organicmushroomsfarm.com/cookies-policy#webpage",
      url: "https://organicmushroomsfarm.com/cookies-policy",
      name: "Cookies Policy | Organic Mushrooms Farm",
      description:
        "Learn how Organic Mushrooms Farm uses cookies and local storage to provide a fast, secure, and personalized experience.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomsfarm.com/cookies-policy#breadcrumb",
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
          name: "Cookies Policy",
          item: "https://organicmushroomsfarm.com/cookies-policy",
        },
      ],
    },
  ],
};

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 relative z-10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CookiesPolicyClient />
    </main>
  );
}
