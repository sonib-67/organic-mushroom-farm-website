/**
 * Structured Data (Schema.org) Builders for Local SEO
 */

export function buildBreadcrumbSchema(items: { label: string; url: string }[]): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.label,
      "item": `https://www.organicmushroomfarm.shop${item.url}`
    }))
  };
}

export function buildFAQSchema(faqs: { q: string; a: string }[]): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function buildLocalBusinessSchema(
  name: string,
  locality: string,
  region: string,
  tel = "+91-9203544140"
): Record<string, any> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "telephone": tel,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locality,
      "addressRegion": region,
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ]
  };
}
