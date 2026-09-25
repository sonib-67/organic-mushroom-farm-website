import React from "react";
import type { Metadata } from "next";
import OrganicTrainingGuideClient from "./OrganicTrainingGuideClient";

export const dynamic = "error";
export const revalidate = false;

const PAGE_URL = "https://organicmushroomsfarm.com/organic-mushroom-farming-training-india";

export const metadata: Metadata = {
  title: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
  description:
    "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
  alternates: {
    canonical: PAGE_URL,
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
    title: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
    description:
      "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
    url: PAGE_URL,
    siteName: "Organic Mushroom Farm",
    type: "article",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
    description:
      "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
  },
};

export default function OrganicMushroomFarmingTrainingIndiaPage() {
  const publishedDate = "2026-09-25T09:00:00+05:30";
  const modifiedDate = "2026-09-25T09:00:00+05:30";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": PAGE_URL,
          "url": PAGE_URL,
          "name": "The Guide to Mushroom Farming in India | Organic Mushroom Farm",
          "description":
            "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
          "breadcrumb": {
            "@id": `${PAGE_URL}#breadcrumb`,
          },
        },
        "headline": "The Complete Guide to 100% Organic Mushroom Farming: Training, Process & Profit (2026 Updated)",
        "description":
          "Learn how to start a profitable mushroom farm. Join Organic Mushroom Farm or hands-on, chemical-free mushroom cultivation training, natural composting, and business setups.",
        "datePublished": publishedDate,
        "dateModified": modifiedDate,
        "author": {
          "@type": "Organization",
          "name": "Organic Mushroom Farm",
          "url": "https://organicmushroomsfarm.com",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Organic Mushroom Farm",
          "url": "https://organicmushroomsfarm.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
          },
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://organicmushroomsfarm.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://organicmushroomsfarm.com/blog",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "The Guide to Mushroom Farming in India",
            "item": PAGE_URL,
          },
        ],
      },
      {
        "@type": "Course",
        "@id": `${PAGE_URL}#course`,
        "name": "Commercial Organic Mushroom Farm Training Program",
        "description":
          "7-day intensive hands-on practical masterclass covering organic button, oyster, and shiitake cultivation, chemical-free composting, steam pasteurization, bio-controls, and commercial marketing.",
        "provider": {
          "@type": "Organization",
          "name": "Organic Mushroom Farm",
          "url": "https://organicmushroomsfarm.com",
        },
        "educationalCredentialAwarded": "Certificate of Completion in Commercial Organic Mushroom Farming",
        "courseCode": "OMF-ORG-2026",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["onsite", "hybrid"],
          "courseWorkload": "PT35H",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is organic mushroom farming different from normal mushroom farming?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Normal farming uses synthetic urea in compost and toxic chemicals like formalin and bavistin to prevent diseases. Organic mushroom farming relies on natural steam pasteurization, bio-pesticides (like neem and Trichoderma), and chemical-free organic matter, making the final product 100% safe and healthy.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I grow organic mushrooms at home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely! Oyster mushrooms are incredibly easy to grow at home using organic wheat or paddy straw without any chemicals. For commercial scale, Organic Mushroom Farm provides complete training on setting up climate-controlled rooms.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you provide training for beginners?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, our 7-day comprehensive training program at Organic Mushroom Farm is designed for absolute beginners as well as existing farmers who want to shift from chemical to organic farming.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the cost of setting up an organic mushroom farm?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The cost depends on the scale (seasonal vs. climate-controlled). A basic seasonal organic setup can start from ₹50,000, while a commercial climate-controlled project can range from ₹15 Lakhs to ₹50 Lakhs. We help you design the best model for your budget.",
            },
          },
          {
            "@type": "Question",
            "name": "Do organic mushrooms sell at a higher price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Due to high consumer awareness regarding health and immunity, organic mushrooms attract a premium price, often selling for 30% to 50% more than chemically grown mushrooms in supermarkets.",
            },
          },
          {
            "@type": "Question",
            "name": "Where can I get pure organic mushroom spawn (seeds)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Right here! Organic Mushroom Farm produces high-vigour, 100% pure organic mushroom spawn in our sterile lab, available for pan-India delivery.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen pt-24 md:pt-28 pb-20 relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <OrganicTrainingGuideClient />
    </main>
  );
}
