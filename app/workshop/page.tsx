import React from "react";
import type { Metadata } from "next";
import WorkshopClientPage from "./WorkshopClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Mushroom Farming Live Workshop | Online Practical Training & Certification",
  description:
    "Join the 3-Hour Live Mushroom Farming Workshop by Organic Mushroom Farm. Learn button, oyster & milky mushroom cultivation, chemical-free composting, subsidies & B2B market links for ₹199.",
  alternates: {
    canonical: "https://organicmushroomsfarm.com/workshop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mushroom Farming Live Workshop | Online Practical Training & Certification",
    description:
      "Join the 3-Hour Live Mushroom Farming Workshop by Organic Mushroom Farm. Learn button, oyster & milky mushroom cultivation, chemical-free composting, subsidies & B2B market links for ₹199.",
    url: "https://organicmushroomsfarm.com/workshop",
    siteName: "Organic Mushroom Farm",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mushroom Farming Live Workshop | Online Practical Training & Certification",
    description:
      "Join the 3-Hour Live Mushroom Farming Workshop by Organic Mushroom Farm. Learn button, oyster & milky mushroom cultivation, chemical-free composting, subsidies & B2B market links for ₹199.",
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
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9203544140",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://organicmushroomsfarm.com/workshop#webpage",
      url: "https://organicmushroomsfarm.com/workshop",
      name: "Mushroom Farming Live Workshop | Online Practical Training & Certification",
      description:
        "Join the 3-Hour Live Mushroom Farming Workshop by Organic Mushroom Farm. Learn button, oyster & milky mushroom cultivation, chemical-free composting, subsidies & B2B market links for ₹199.",
      isPartOf: {
        "@id": "https://organicmushroomsfarm.com/#website",
      },
      breadcrumb: {
        "@id": "https://organicmushroomsfarm.com/workshop#breadcrumb",
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
    {
      "@type": "Event",
      "@id": "https://organicmushroomsfarm.com/workshop#event",
      name: "Commercial Mushroom Farming Live Interactive Workshop",
      description:
        "A 3-hour comprehensive live masterclass covering button, oyster, and milky mushroom cultivation, 100% natural substrate preparation, pest control, and government subsidies.",
      startDate: "2026-09-27T11:00:00+05:30",
      endDate: "2026-09-27T14:00:00+05:30",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "VirtualLocation",
        url: "https://organicmushroomsfarm.com/workshop",
      },
      organizer: {
        "@id": "https://organicmushroomsfarm.com/#organization",
      },
      offers: {
        "@type": "Offer",
        url: "https://organicmushroomsfarm.com/workshop",
        price: "199",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        validFrom: "2026-09-01T00:00:00+05:30",
      },
      performer: {
        "@type": "Organization",
        name: "Organic Mushroom Farm Cultivation Specialists",
      },
    },
    {
      "@type": "Course",
      "@id": "https://organicmushroomsfarm.com/workshop#course",
      name: "Commercial Mushroom Farming Masterclass Workshop",
      description:
        "Hands-on masterclass including button, oyster, milky mushroom cultivation techniques, climate control, and DPR subsidy calculation.",
      provider: {
        "@id": "https://organicmushroomsfarm.com/#organization",
      },
      educationalCredentialAwarded: "Certificate of Participation in Mushroom Cultivation",
    },
    {
      "@type": "FAQPage",
      "@id": "https://organicmushroomsfarm.com/workshop#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How will I receive the workshop link and login details?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Immediately upon completing your payment of ₹199, you will receive an instant confirmation on your WhatsApp number and Email. The private webinar link and calendar reminder will be sent 24 hours and 1 hour before the live session.",
          },
        },
        {
          "@type": "Question",
          name: "What if I cannot attend the live session due to personal emergency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every registered participant receives full 30-day access to the high-definition recorded session, along with all downloadable bonuses, PDF manuals, and Excel calculators.",
          },
        },
        {
          "@type": "Question",
          name: "What language will the workshop be conducted in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The workshop is delivered in easy-to-understand Hinglish (clear blend of Hindi & English) with visual slide presentations and farm photos so participants from all states in India can easily follow.",
          },
        },
        {
          "@type": "Question",
          name: "Is this suitable for a complete beginner with zero farming background?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! 70% of our attendees are complete beginners, engineers, salaried professionals, or hobbyists. We start from ground-level basics and guide you step-by-step into commercial operations.",
          },
        },
        {
          "@type": "Question",
          name: "Are there any hidden costs after the ₹199 registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "None whatsoever. The ₹199 registration fee includes the 3-hour live workshop, Q&A session, 30-day recording access, and all ₹4,999 worth of bonus materials and directories.",
          },
        },
        {
          "@type": "Question",
          name: "Will I get a certificate after completing the workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, you will receive an official digital Certificate of Participation from Organic Mushroom Farm that you can print, frame, or attach to project reports.",
          },
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
