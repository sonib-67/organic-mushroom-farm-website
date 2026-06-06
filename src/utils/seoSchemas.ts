export const SOCIAL_PROFILES = [
  "https://www.instagram.com/organic_mushroom_farm_jabalpur",
  "https://www.facebook.com/organic.mushroom.farm0",
  "https://www.youtube.com/@organicmushroomfarm",
  "https://www.pinterest.com/organicmushroomfarm"
];

export const GOOGLE_MAPS_BUSINESS_LINK = "https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic";

export const generateReviewSchema = (itemName: string = "Organic Mushroom Farm Training & Franchise") => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": itemName,
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "description": "Premium industrial-grade mushroom spawn (seed), expert commercial training programs, and fully integrated turnkey climate-controlled mushroom farm setups.",
    "brand": {
      "@type": "Brand",
      "name": "Organic Mushroom Farm"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "3425",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ramesh Kumar"
        },
        "datePublished": "2026-03-15",
        "reviewBody": "Excellent G1 spawn quality and amazing hands-on training at their Jabalpur farm. Extremely satisfied with their ongoing handholding support.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sunita Sharma"
        },
        "datePublished": "2026-04-20",
        "reviewBody": "Their commercial climate-controlled turnkey setup Daikin AC guidance was flawless. Best mushroom consultants in India.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };
};

export const generateLocalBusinessSchema = (path: string = "") => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Organic Mushroom Farm",
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "@id": `https://organicmushroomfarm.shop/${path ? path.replace(/^\//, '') : '#localbusiness'}`,
    "url": `https://organicmushroomfarm.shop${path}`,
    "telephone": "+919203544140",
    "email": "support@mushroomtraining.online",
    "priceRange": "₹Standard",
    "sameAs": SOCIAL_PROFILES,
    "hasMap": GOOGLE_MAPS_BUSINESS_LINK,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katangi Road",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.1789,
      "longitude": 79.9599
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Nepal"
      }
    ]
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Organic Mushroom Farm",
    "alternateName": "Organic Mushroom Farm Jabalpur",
    "url": "https://organicmushroomfarm.shop",
    "logo": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "telephone": "+919203544140",
    "email": "support@mushroomtraining.online",
    "founder": {
      "@type": "Person",
      "name": "Tanish Soni",
      "jobTitle": "Founder & Agri-Tech Expert",
      "sameAs": SOCIAL_PROFILES
    },
    "sameAs": SOCIAL_PROFILES,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919203544140",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Organic Mushroom Farm",
    "url": "https://organicmushroomfarm.shop",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://organicmushroomfarm.shop/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateCourseSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Commercial Mushroom Farming Certification Program",
    "description": "Comprehensive online & offline coaching covering spawn laboratory techniques, substrate sterilized preparation, climate-controlled farming setups, and disease management.",
    "provider": {
      "@type": "Organization",
      "name": "Organic Mushroom Farm",
      "sameAs": "https://organicmushroomfarm.shop"
    },
    "courseMode": "online",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT15H",
      "instructor": {
        "@type": "Person",
        "name": "Tanish Soni"
      }
    }
  };
};

export const generateFounderSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tanish Soni",
    "jobTitle": "Agri-Tech Mushroom Consultant & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Organic Mushroom Farm"
    },
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "description": "Tanish Soni is a preeminent commercial agriculture technology specialist and mushroom farming consultant in India, with extensive tenure setting up high-yield climate-controlled units.",
    "sameAs": SOCIAL_PROFILES
  };
};

export const generateWebpageSchema = (title: string, description: string, path: string = "") => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": `https://organicmushroomfarm.shop${path}`,
    "publisher": {
      "@type": "Organization",
      "name": "Organic Mushroom Farm",
      "logo": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png"
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string, url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://organicmushroomfarm.shop${item.url}`
    }))
  };
};
