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
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "telephone": "+919203544140",
    "email": "support@mushroomtraining.online",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katangi Road",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482002",
      "addressCountry": "IN"
    },
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

export const GLOBAL_FAQS = [
  {
    q: "What is the duration of this commercial mushroom farming training course?",
    a: "Our online mushroom training course offers lifetime on-demand access to premium step-by-step video modules, allowing you to learn at your personal speed. For offline physical training at our central farm in Jabalpur (Madhya Pradesh), we conduct intensive 2 to 3-day practical commercial sessions covering commercial bulk composting, spawning, and harvesting hands-on."
  },
  {
    q: "Do I need prior agricultural experience to join your mushroom cultivation course?",
    a: "No prior experience in agriculture is required at all! This mushroom cultivation training is developed and designed structurally from scratch for absolute beginners. We cover basic biology, room preparation, substrate sterilization, hygienic standards, temperature monitoring, and commercial packaging, guiding you step-by-step."
  },
  {
    q: "Is there any certificate provided upon completion of the training?",
    a: "Yes, absolutely. Once you complete our commercial training modules, you will receive our professional, certified mushroom cultivation training credential. This certificate helps you secure agricultural loans, pitch to retail store chains, and satisfy safety compliance procedures for your company startup."
  },
  {
    q: "How can I locate certified mushroom training near me in my state?",
    a: "Whether you seek mushroom training in Madhya Pradesh, Uttar Pradesh, Delhi, Maharashtra, or Rajasthan, you can easily access our high-value online training portal globally. For those looking for practical mushroom growing training nearby, our offline practical academy offers masterclasses that students from all across India visit monthly."
  },
  {
    q: "What are the hot state-wise opportunities for mushroom training in Madhya Pradesh and Uttar Pradesh?",
    a: "Madhya Pradesh and Uttar Pradesh are top tier regions for mushroom cultivation due to high local availability of wheat straw, which reduces raw composting costs. In Bihar, Haryana, and Punjab, students can start with relatively simple semi-closed setups and ramp up to automated commercial climate-controlled farms."
  },
  {
    q: "Can I truly start a premium commercial mushroom business with low investment?",
    a: "Yes, organic oyster and milky varieties make for a solid low investment farming business setup. Beginners can launch their first crop in a simple insulated room or temporary bamboo structure with an investment of ₹10,000 to ₹15,000. For large industrial button mushrooms, our clients scale up to modern pasteurization tunnels and climate-insulated growth sections."
  },
  {
    q: "Is a government subsidy available for a mushroom cultivation business setup globally/in India?",
    a: "Yes, several states offer rich subsidies of up to 40% to 50% under National Horticulture Board (NHB) and Rashtriya Krishi Vikas Yojana (RKVY) schemes. Our comprehensive mushroom business training guides you through preparing your project report and technical documentation needed to secure state subsidies."
  },
  {
    q: "What are the core differences between online and offline practical training?",
    a: "Online mushroom training gives you flexible lifetime access to HD videos, charts, SOP templates, and technical forums at an extremely nominal cost. Offline practical training takes place at our high-yield farm, offering hands-on compost heap turning, inoculation (spawning) practice, casing formulation, and real-time environment sensor training."
  },
  {
    q: "What key mushroom types are covered in this crop cultivation syllabus?",
    a: "Our certified mushroom cultivation training covers White Button Mushrooms (commercial composting focus), Oyster Mushrooms (beginner-friendly substrate hydration), Milky Mushrooms (high-temperature tolerance), and specialty medicinal/decorative strains like Ganoderma."
  },
  {
    q: "How can I source pure quality first-generation mushroom spawn (seed) pan India?",
    a: "We manufacture high-grade F1 laboratory-tested hybrid spawn in-house and supply them safely in thermal boxes to farmers in Uttar Pradesh, Delhi, Bihar, West Bengal, Maharashtra, Rajasthan, Karnataka, and beyond. We guarantee high mycelium colonization rates and contamination-free deliveries."
  },
  {
    q: "Do you assist with commercial business registration, licenses, and marketing?",
    a: "Yes! Part of our professional agriculture business training India roadmap includes training on FSSAI food licensing, local MSME registration, packaging guidelines, branding, and establishing direct global and domestic B2B links with leading supermarket chains and dried export traders."
  },
  {
    q: "Is commercial button mushroom cultivation more profitable than oyster?",
    a: "Commercial button mushrooms enjoy persistent high-volume demand in hotels, restaurant kitchens, and supermarkets, making them highly profitable at scale. Oyster mushrooms are simpler to grow with lower operating costs, offering higher profit margins on local retail sales with minimal risk."
  },
  {
    q: "What temperature and climate controls are required for high-yield commercial cultivation?",
    a: "White button mushrooms require 22°C - 25°C for the early spawn run (mycelium growth) and 14°C - 18°C with high relative humidity (85%-90%) and fresh air exchange for maximum pinning. We teach you how to build cost-effective automated climate growth chambers during our program."
  },
  {
    q: "What post-training support do you offer to students when they launch their farm?",
    a: "Our students gain exclusive access to our VIP WhatsApp support channel, direct telephone consultation with master agriculturalists, commercial product marketing support, bulk spawn discounts, and diagnostic troubleshooting assistance for any mycelium growth issues."
  },
  {
    q: "How can agricultural beginners start successfully in Rajasthan, Haryana, and Punjab?",
    a: "In arid regions like Rajasthan, indoor farming protects crops from intense heat waves. In Haryana and Punjab, abundant wheat straw compost material offers high cost optimization potentials. Our tailored plans optimize water use and energy efficiency based on local regional logistics."
  },
  {
    q: "Why is high-quality compost referred to as the heart of professional button mushroom training?",
    a: "Button mushrooms can only feed on complex, pasteurized chemical blocks of composted straw, gypsum, and urea. Our course provides the exact proportions to complete compost fermentation safely, eliminating wild molds and maximizing organic matter intake."
  },
  {
    q: "What are the major b2b market linkages available after completing agriculture business training in India?",
    a: "We connect our trained network with dry mushroom exporters, local wholesale Mandis, retail supermarkets, pharmaceuticals buying medicinal Ganoderma, and local agri-cooperatives. We also train you in sun-drying or cold-dehydrating techniques to preserve surplus crops safely."
  },
  {
    q: "How does the quality of spawn (seed) impact overall yield?",
    a: "Low-quality, aged, or contaminated seeds can lead to complete mycelium failure or weak pinning. Sourcing fresh, pure F1 grain spawn ensures aggressive mycelium colonization, which naturally crowd out competing molds and boost your overall harvest yield by up to 25%."
  },
  {
    q: "What are the common pests/diseases in commercial setups, and how are they managed?",
    a: "Green mold, wet bubble disease, and flies can impact yield under low hygienic standards. Our training focuses extensively on strict sanitation protocols, organic pesticide formulas, and correct pasteurization of composting layers to keep crops perfectly clean."
  },
  {
    q: "Why is your program recognized as the best mushroom training institute in India?",
    a: "We combine decades of real commercial farming experience with high-tech laboratory infrastructure and an easy-to-learn educational style. Rather than just offering simple theories, we provide validated scientific SOPs, live support, reliable seed supply chains, and actual turnkey consulting globally."
  }
];

export const generateGlobalFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://organicmushroomfarm.shop/#faq",
    "mainEntity": GLOBAL_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
};

const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  "shippingRate": {
    "@type": "MonetaryAmount",
    "value": "100.00",
    "currency": "INR"
  },
  "shippingDestination": {
    "@type": "DefinedRegion",
    "addressCountry": "IN"
  },
  "deliveryTime": {
    "@type": "ShippingDeliveryTime",
    "handlingTime": {
      "@type": "QuantitativeValue",
      "minValue": 0,
      "maxValue": 1,
      "unitCode": "d"
    },
    "transitTime": {
      "@type": "QuantitativeValue",
      "minValue": 3,
      "maxValue": 7,
      "unitCode": "d"
    }
  }
};

const MERCHANT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  "applicableCountry": "IN",
  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
  "merchantReturnDays": 7,
  "returnMethod": "https://schema.org/ReturnByMail",
  "returnFees": "https://schema.org/FreeReturn"
};

export const generateGlobalProductsSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://organicmushroomfarm.shop/#itemlist",
    "name": "Mushroom Products & Courses",
    "url": "https://organicmushroomfarm.shop/",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Oyster Mushroom Spawn",
          "description": "Premium quality Oyster Mushroom Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/oyster-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/oyster-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "500.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Button Mushroom Spawn",
          "description": "Premium quality Button Mushroom Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/button-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/button-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "800.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Milky Mushroom Spawn",
          "description": "Premium quality Milky Mushroom Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/milky-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/milky-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "600.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Shiitake Mushroom Spawn",
          "description": "Premium quality Shiitake Mushroom Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/shiitake-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/shiitake-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "1200.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Reishi / Ganoderma Mushroom Spawn",
          "description": "Premium quality Reishi / Ganoderma Mushroom Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/reishi-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/reishi-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "1500.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Lion's Mane Mushroom Spawn",
          "description": "Premium quality Lion's Mane Mushroom Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/lions-mane-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/lions-mane-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "1400.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Product",
          "name": "Cordyceps Militaris Spawn",
          "description": "Premium quality Cordyceps Militaris Spawn from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/cordyceps-spawn.jpg",
          "url": "https://organicmushroomfarm.shop/product/cordyceps-spawn",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "2000.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Product",
          "name": "Fresh Oyster Mushroom",
          "description": "Premium quality Fresh Oyster Mushroom from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/fresh-oyster.jpg",
          "url": "https://organicmushroomfarm.shop/product/fresh-oyster",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "200.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "Product",
          "name": "Dry Shiitake Mushroom",
          "description": "Premium quality Dry Shiitake Mushroom from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/dry-shiitake.jpg",
          "url": "https://organicmushroomfarm.shop/product/dry-shiitake",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "1800.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "Product",
          "name": "Dry Reishi Mushroom",
          "description": "Premium quality Dry Reishi Mushroom from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/dry-reishi.jpg",
          "url": "https://organicmushroomfarm.shop/product/dry-reishi",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "2500.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 11,
        "item": {
          "@type": "Product",
          "name": "Dry Oyster Mushroom",
          "description": "Premium quality Dry Oyster Mushroom from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/dry-oyster.jpg",
          "url": "https://organicmushroomfarm.shop/product/dry-oyster",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "1000.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 12,
        "item": {
          "@type": "Product",
          "name": "Dry Lion's Mane Mushroom",
          "description": "Premium quality Dry Lion's Mane Mushroom from Organic Mushroom Farm.",
          "image": "https://organicmushroomfarm.shop/images/dry-lions-mane.jpg",
          "url": "https://organicmushroomfarm.shop/product/dry-lions-mane",
          "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "25" },
          "offers": {
            "@type": "Offer",
            "price": "3000.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Organic Mushroom Farm" },
            "shippingDetails": SHIPPING_DETAILS,
            "hasMerchantReturnPolicy": MERCHANT_RETURN_POLICY
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 13,
        "item": {
          "@type": "Course",
          "name": "Oyster Mushroom Cultivation Training",
          "description": "Oyster Mushroom Cultivation Training - Professional mushroom farming training online and offline.",
          "url": "https://organicmushroomfarm.shop/courses/oyster",
          "provider": { "@type": "Organization", "name": "Organic Mushroom Farm", "url": "https://organicmushroomfarm.shop/" },
          "inLanguage": ["hi", "en"],
          "courseMode": ["online", "offline"],
          "offers": {
            "@type": "Offer",
            "price": "1999.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 14,
        "item": {
          "@type": "Course",
          "name": "Button Mushroom Cultivation Training",
          "description": "Button Mushroom Cultivation Training - Professional mushroom farming training online and offline.",
          "url": "https://organicmushroomfarm.shop/courses/button",
          "provider": { "@type": "Organization", "name": "Organic Mushroom Farm", "url": "https://organicmushroomfarm.shop/" },
          "inLanguage": ["hi", "en"],
          "courseMode": ["online", "offline"],
          "offers": {
            "@type": "Offer",
            "price": "4999.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 15,
        "item": {
          "@type": "Course",
          "name": "All Varieties Mushroom Farming Course",
          "description": "All Varieties Mushroom Farming Course - Professional mushroom farming training online and offline.",
          "url": "https://organicmushroomfarm.shop/courses/all-varieties",
          "provider": { "@type": "Organization", "name": "Organic Mushroom Farm", "url": "https://organicmushroomfarm.shop/" },
          "inLanguage": ["hi", "en"],
          "courseMode": ["online", "offline"],
          "offers": {
            "@type": "Offer",
            "price": "9999.00",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      }
    ]
  };
};

export const generateGlobalServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://organicmushroomfarm.shop/#service",
    "name": "Mushroom Farm Setup Service",
    "serviceType": "Mushroom Farm Turnkey Setup",
    "description": "Complete turnkey mushroom farm setup service.",
    "provider": { "@id": "https://organicmushroomfarm.shop/#business" },
    "areaServed": { "@type": "Country", "name": "India" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://organicmushroomfarm.shop"
    }
  };
};
