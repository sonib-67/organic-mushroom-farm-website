# Schema.org JSON-LD Markup for Organic Mushroom Farm

Here are the 5 corrected and complete JSON-LD schema blocks as requested. All required and optional fields have been included according to your specifications.

### 1. LocalBusiness Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store", "FoodEstablishment"],
  "name": "Organic Mushroom Farm",
  "legalName": "Agrimotion Engineering Private Limited",
  "alternateName": ["Organic Mushroom Farm India", "organicmushroomfarm.shop"],
  "description": "Agrimotion Engineering Private Limited — India's leading mushroom project setup company providing turnkey solutions for mushroom farming. Mushroom spawn (all varieties), training courses, fresh and dry mushrooms, and complete farm infrastructure setup.",
  "url": "https://organicmushroomfarm.shop/",
  "telephone": "+919203544140",
  "logo": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
  "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Nake Katangi",
    "addressLocality": "Jabalpur",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "483105",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.1815,
    "longitude": 79.9864
  },
  "priceRange": "₹₹",
  "servesCuisine": ["Mushroom", "Organic Food", "Medicinal Mushroom"],
  "hasMap": "https://maps.google.com/?cid=YOUR_CID_HERE",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://twitter.com/OrganicMushroomFarm",
    "https://organicmushroomfarm.shop/"
  ],
  "knowsAbout": [
    "Mushroom Spawn",
    "Mushroom Farming",
    "Medicinal Mushrooms",
    "Oyster Mushroom Cultivation",
    "Button Mushroom Farming",
    "Mushroom Farm Setup"
  ],
  "areaServed": "IN",
  "currenciesAccepted": "INR",
  "paymentAccepted": ["Cash", "UPI", "Bank Transfer", "Online Payment"],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919203544140",
      "contactType": "customer service",
      "areaServed": "IN"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+919203544140",
      "contactType": "WhatsApp",
      "areaServed": "IN"
    }
  ]
}
</script>
```

### 2. ItemList — Mushroom Spawn Products
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mushroom Spawn Products",
  "description": "High-yield mushroom spawn covering Oyster, Button, Milky, Shiitake, Reishi, Lion's Mane, and Cordyceps varieties.",
  "url": "https://organicmushroomfarm.shop/",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Oyster Mushroom Spawn (Pleurotus ostreatus)",
        "description": "White, Pink, Grey varieties available. 200g, 400g, 1kg, 5kg, 10kg+.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Button Mushroom Spawn (Agaricus bisporus)",
        "description": "CO2-resilient variety Button Mushroom Spawn for high yield production.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Milky Mushroom Spawn (Calocybe indica)",
        "description": "Heat-tolerant tropical Milky Mushroom Spawn.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "Shiitake Mushroom Spawn (Lentinula edodes)",
        "description": "Sawdust and grain spawn for Shiitake Mushroom.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "Reishi / Ganoderma Spawn (Ganoderma lucidum)",
        "description": "Medicinal Reishi and Ganoderma Spawn available in bulk.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Product",
        "name": "Lion's Mane Spawn (Hericium erinaceus)",
        "description": "Medicinal and gourmet Lion's Mane Mushroom Spawn.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Product",
        "name": "Cordyceps Militaris Spawn",
        "description": "High-value medicinal Cordyceps Militaris Spawn.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "1500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    }
  ]
}
</script>
```

### 3. ItemList — Fresh & Dry Mushroom Products
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Fresh & Dry Mushrooms — All Varieties",
  "description": "Premium fresh and dry mushrooms including Oyster, Shiitake, Reishi, Lion's Mane, and more.",
  "url": "https://organicmushroomfarm.shop/",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Fresh Oyster Mushroom (White, Pink, Grey)",
        "description": "Fresh Oyster mushrooms available in bulk and retail.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "100",
            "maxPrice": "300"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Dry Shiitake Mushroom",
        "description": "Export grade, vacuum packed dry Shiitake Mushroom.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "500",
            "maxPrice": "2500"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Dry Reishi / Ganoderma Mushroom",
        "description": "Whole, sliced, powder; UAE/UK/USA export quality.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "500",
            "maxPrice": "3000"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "Dry Oyster Mushroom",
        "description": "Food-grade vacuum packed crisp Dry Oyster Mushroom.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "200",
            "maxPrice": "1000"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "Dry Lion's Mane Mushroom",
        "description": "Whole and powder forms, medicinal/gourmet Dry Lion's Mane.",
        "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
        "url": "https://organicmushroomfarm.shop/",
        "brand": { "@type": "Brand", "name": "Organic Mushroom Farm" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "INR",
            "minPrice": "500",
            "maxPrice": "3000"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://organicmushroomfarm.shop/",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "100", "currency": "INR" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "businessDays": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"] },
              "transitTime": { "@type": "QuantitativeValue", "minValue": "3", "maxValue": "7", "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": "7"
          }
        }
      }
    }
  ]
}
</script>
```

### 4. ItemList — Training Courses
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mushroom Training Courses",
  "description": "Professional mushroom farming training.",
  "url": "https://organicmushroomfarm.shop/",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Oyster Mushroom Cultivation Training",
        "description": "Online and offline course for beginners.",
        "url": "https://organicmushroomfarm.shop/",
        "courseWorkload": "PT10H",
        "coursePrerequisites": "No prior experience required",
        "inLanguage": ["en", "hi"],
        "educationalCredentialAwarded": "Certificate of Completion — Mushroom Cultivation",
        "provider": { "@type": "Organization", "name": "Organic Mushroom Farm" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "url": "https://organicmushroomfarm.shop/",
          "courseMode": ["online", "offline"],
          "location": {
            "@type": "Place",
            "name": "Organic Mushroom Farm",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Nake Katangi",
              "addressLocality": "Jabalpur",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "483105",
              "addressCountry": "IN"
            }
          },
          "startDate": "2026-06-01",
          "repeatFrequency": "P1M"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "INR", "minPrice": "299", "maxPrice": "1500" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Button Mushroom Cultivation Training",
        "description": "Compost prep, spawning, casing, and crop management.",
        "url": "https://organicmushroomfarm.shop/",
        "courseWorkload": "PT15H",
        "coursePrerequisites": "No prior experience required",
        "inLanguage": ["en", "hi"],
        "educationalCredentialAwarded": "Certificate of Completion — Mushroom Cultivation",
        "provider": { "@type": "Organization", "name": "Organic Mushroom Farm" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "url": "https://organicmushroomfarm.shop/",
          "courseMode": ["online", "offline"],
          "location": {
            "@type": "Place",
            "name": "Organic Mushroom Farm",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Nake Katangi",
              "addressLocality": "Jabalpur",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "483105",
              "addressCountry": "IN"
            }
          },
          "startDate": "2026-06-01",
          "repeatFrequency": "P1M"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "INR", "minPrice": "500", "maxPrice": "2000" }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "All Varieties Mushroom Farming Course",
        "description": "Covers all 7 varieties plus business/marketing module.",
        "url": "https://organicmushroomfarm.shop/",
        "courseWorkload": "PT25H",
        "coursePrerequisites": "No prior experience required",
        "inLanguage": ["en", "hi"],
        "educationalCredentialAwarded": "Certificate of Completion — Mushroom Cultivation",
        "provider": { "@type": "Organization", "name": "Organic Mushroom Farm" },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "url": "https://organicmushroomfarm.shop/",
          "courseMode": ["online", "offline"],
          "location": {
            "@type": "Place",
            "name": "Organic Mushroom Farm",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Nake Katangi",
              "addressLocality": "Jabalpur",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "483105",
              "addressCountry": "IN"
            }
          },
          "startDate": "2026-06-01",
          "repeatFrequency": "P1M"
        },
        "offers": {
          "@type": "Offer",
          "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "INR", "minPrice": "1000", "maxPrice": "5000" }
        }
      }
    }
  ]
}
</script>
```

### 5. LocalBusiness with AggregateRating + Reviews
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Organic Mushroom Farm",
  "url": "https://organicmushroomfarm.shop/",
  "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ramesh Kumar" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "The mushroom spawn quality is exceptional. I ordered Oyster spawn and the yield was fantastic. Fast delivery across India.",
      "datePublished": "2024-03-15"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Anita Verma" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Attended the online mushroom training course. Very detailed and professional. They covered everything from cultivation to marketing.",
      "datePublished": "2024-04-10"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Suresh Patel" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4.5" },
      "reviewBody": "Organic Mushroom Farm helped me with complete farm setup service. Great turnkey infrastructure and expert handholding.",
      "datePublished": "2024-05-02"
    }
  ]
}
</script>
```

---

## Where to Place Each Block

1. **LocalBusiness Schema (Block 1):** Place this in the `<head>` of your **Homepage** (`index.html`) AND your **Contact/About Us** pages. This defines your core identity and location to Google Map search and Knowledge Panel.
2. **ItemList — Mushroom Spawn Products (Block 2):** Place this in the `<head>` of your **Spawn Shop / Spawn Category page**. This helps Google show rich product lists for "Mushroom Spawn India".
3. **ItemList — Fresh & Dry Mushroom Products (Block 3):** Place this in the `<head>` of your **Fresh & Dry Mushrooms / Retail Category page**.
4. **ItemList — Training Courses (Block 4):** Place this in the `<head>` of your **Training & Courses page**. This allows Google to show Rich Results for courses.
5. **LocalBusiness with AggregateRating + Reviews (Block 5):** Place this in the `<head>` of your **Homepage**, or any dedicated **Testimonials / Reviews page**. This is how you get the golden star ratings next to your site in Google Search results.

> Note: To add these to specific pages in your React app, you can pass these JSON objects to the `<SEO>` component's `schemas` prop that was added earlier!
