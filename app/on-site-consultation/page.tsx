import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import SiteVisitClient from './SiteVisitClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'On-Site Mushroom Farm Visit & Consultation (₹500) | Jabalpur M.P.',
  description:
    'Book an on-site commercial mushroom farm visit at Organic Mushrooms Farm, Katangi, Jabalpur. Inspect 2000-bag tunnels, growing rooms, climate control & get 1-on-1 founder guidance.',
  keywords: [
    'mushroom farm visit',
    'on site mushroom consultation',
    'jabalpur mushroom farm',
    'commercial mushroom visit jabalpur',
    'organic mushrooms farm katangi',
    'mushroom cultivation practical visit',
  ],
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/on-site-consultation',
  },
  openGraph: {
    title: 'On-Site Mushroom Farm Visit & Consultation (₹500) | Jabalpur M.P.',
    description:
      'Experience operational commercial mushroom farming in Jabalpur. Inspect bulk tunnels, climate rooms, and consult 1-on-1 with senior farm experts.',
    url: 'https://organicmushroomsfarm.com/on-site-consultation',
    siteName: 'Organic Mushrooms Farm',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'On-Site Mushroom Farm Visit & Consultation (₹500)',
    description:
      'Direct commercial mushroom farm visit at Katangi, Jabalpur. Book your ₹500 slot for practical plant inspection and founder guidance.',
  },
};

export default function OnSiteConsultationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://organicmushroomsfarm.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://organicmushroomsfarm.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'On Site Visit Consultation',
            item: 'https://organicmushroomsfarm.com/on-site-consultation',
          },
        ],
      },
      {
        '@type': 'Service',
        name: 'On-Site Mushroom Farm Visit & Practical Consultation',
        description:
          'In-person commercial mushroom cultivation facility visit, bulk pasteurization tunnel walkthrough, and 1-on-1 business setup consultation in Jabalpur, Madhya Pradesh.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Organic Mushrooms Farm',
          telephone: '+919203544140',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Katangi Road',
            addressLocality: 'Jabalpur',
            addressRegion: 'Madhya Pradesh',
            postalCode: '483105',
            addressCountry: 'IN',
          },
          url: 'https://organicmushroomsfarm.com',
        },
        offers: {
          '@type': 'Offer',
          price: '500',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
          url: 'https://organicmushroomsfarm.com/on-site-consultation',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-16 sm:pt-20 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense
        fallback={
          <div className="w-full max-w-4xl mx-auto py-20 text-center text-xs text-slate-400">
            Loading farm visit consultation...
          </div>
        }
      >
        <SiteVisitClient />
      </Suspense>
    </main>
  );
}
