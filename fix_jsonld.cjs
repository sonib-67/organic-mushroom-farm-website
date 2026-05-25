const fs = require('fs');

const products = [
  {name: "Oyster Mushroom Spawn", listCat: "Spawn", id: "oyster-spawn", price: "500.00"},
  {name: "Button Mushroom Spawn", listCat: "Spawn", id: "button-spawn", price: "800.00"},
  {name: "Milky Mushroom Spawn", listCat: "Spawn", id: "milky-spawn", price: "600.00"},
  {name: "Shiitake Mushroom Spawn", listCat: "Spawn", id: "shiitake-spawn", price: "1200.00"},
  {name: "Reishi / Ganoderma Mushroom Spawn", listCat: "Spawn", id: "reishi-spawn", price: "1500.00"},
  {name: "Lion's Mane Mushroom Spawn", listCat: "Spawn", id: "lions-mane-spawn", price: "1400.00"},
  {name: "Cordyceps Militaris Spawn", listCat: "Spawn", id: "cordyceps-spawn", price: "2000.00"},
  {name: "Fresh Oyster Mushroom", listCat: "Mushroom", id: "fresh-oyster", price: "200.00"},
  {name: "Dry Shiitake Mushroom", listCat: "Mushroom", id: "dry-shiitake", price: "1800.00"},
  {name: "Dry Reishi Mushroom", listCat: "Mushroom", id: "dry-reishi", price: "2500.00"},
  {name: "Dry Oyster Mushroom", listCat: "Mushroom", id: "dry-oyster", price: "1000.00"},
  {name: "Dry Lion's Mane Mushroom", listCat: "Mushroom", id: "dry-lions-mane", price: "3000.00"},
];

const courses = [
  {name: "Oyster Mushroom Cultivation Training", id: "oyster", price: "1999.00"},
  {name: "Button Mushroom Cultivation Training", id: "button", price: "4999.00"},
  {name: "All Varieties Mushroom Farming Course", id: "all-varieties", price: "9999.00"},
];

let itemsLength = 0;

const itemListElement = [];

products.forEach(p => {
  itemsLength++;
  itemListElement.push({
    "@type": "ListItem",
    "position": itemsLength,
    "item": {
      "@type": "Product",
      "name": p.name,
      "description": `Premium quality ${p.name} from Organic Mushroom Farm.`,
      "image": `https://organicmushroomfarm.shop/images/${p.id}.jpg`,
      "url": `https://organicmushroomfarm.shop/product/${p.id}`,
      "brand": {"@type": "Brand", "name": "Organic Mushroom Farm"},
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "25"
      },
      "review": {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Verified Customer" }
      },
      "offers": {
        "@type": "Offer",
        "price": p.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {"@type": "Organization", "name": "Organic Mushroom Farm"},
        "url": `https://organicmushroomfarm.shop/product/${p.id}`,
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": { "@type": "MonetaryAmount", "value": "100.00", "currency": "INR" },
          "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "IN" },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "d" },
            "transitTime": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 7, "unitCode": "d" }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "IN",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 7,
          "returnMethod": "https://schema.org/ReturnByMail",
          "returnFees": "https://schema.org/FreeReturn"
        }
      }
    }
  });
});

courses.forEach(c => {
  itemsLength++;
  itemListElement.push({
    "@type": "ListItem",
    "position": itemsLength,
    "item": {
      "@type": "Course",
      "name": c.name,
      "description": `${c.name} - Professional mushroom farming training online and offline.`,
      "url": `https://organicmushroomfarm.shop/courses/${c.id}`,
      "provider": {
        "@type": "Organization",
        "name": "Organic Mushroom Farm",
        "url": "https://organicmushroomfarm.shop/"
      },
      "inLanguage": ["hi", "en"],
      "courseMode": ["online", "offline"],
      "offers": {
        "@type": "Offer",
        "price": c.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `https://organicmushroomfarm.shop/courses/${c.id}`
      }
    }
  });
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://organicmushroomfarm.shop/#business",
      "name": "Organic Mushroom Farm",
      "legalName": "Agrimotion Engineering Private Limited",
      "alternateName": ["Organic Mushroom Farm India", "organicmushroomfarm.shop"],
      "description": "India's leading mushroom project setup company providing turnkey solutions for button mushroom farming, training, and spawn supply.",
      "url": "https://organicmushroomfarm.shop/",
      "telephone": "+919203544140",
      "email": "contact@organicmushroomfarm.shop",
      "logo": {
        "@type": "ImageObject",
        "url": "https://organicmushroomfarm.shop/logo.png",
        "width": 1200,
        "height": 630
      },
      "image": "https://organicmushroomfarm.shop/images/farm-logo.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Naka Katangi",
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
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mushroom Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mushroom Training" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mushroom Spawn Seeds" }},
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mushroom Infrastructure Setup" }}
        ]
      },
      "sameAs": [
        "https://www.organicmushroomfarm.shop"
      ],
      "priceRange": "₹500 - ₹50000",
      "servesCuisine": "Organic Mushrooms & Farming Supplies",
      "currenciesAccepted": "INR, USD, GBP, AED",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://organicmushroomfarm.shop/#organization",
      "name": "Organic Mushroom Farm",
      "url": "https://organicmushroomfarm.shop/",
      "logo": "https://organicmushroomfarm.shop/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919203544140",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["Hindi", "English"]
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://organicmushroomfarm.shop/#itemlist",
      "name": "Mushroom Products & Courses",
      "url": "https://organicmushroomfarm.shop/",
      "itemListElement": itemListElement
    },
    {
      "@type": "Service",
      "@id": "https://organicmushroomfarm.shop/#service",
      "name": "Mushroom Farm Setup Service",
      "serviceType": "Mushroom Farm Turnkey Setup",
      "description": "Complete turnkey mushroom farm setup service.",
      "provider": { "@id": "https://organicmushroomfarm.shop/#business" },
      "areaServed": { "@type": "Country", "name": "India" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "url": "https://organicmushroomfarm.shop" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://organicmushroomfarm.shop/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://organicmushroomfarm.shop" },
        { "@type": "ListItem", "position": 2, "name": "Mushroom Spawn", "item": "https://organicmushroomfarm.shop/spawn" },
        { "@type": "ListItem", "position": 3, "name": "Training", "item": "https://organicmushroomfarm.shop/training" },
        { "@type": "ListItem", "position": 4, "name": "Fresh & Dry Mushrooms", "item": "https://organicmushroomfarm.shop/mushrooms" }
      ]
    }
  ]
};

const scriptContent = `    <!-- ✅ Schema.org JSON-LD — organicmushroomfarm.shop -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
`;

let html = fs.readFileSync('index.html', 'utf8');

const startMarker2 = `<!-- ✅ Schema.org JSON-LD — organicmushroomfarm.shop -->`;
const endMarker = `<!-- ✅ Google AdSense -->`;

const startIndex = html.indexOf(startMarker2);
const endIndex = html.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = html.substring(0, startIndex) + scriptContent + "    " + html.substring(endIndex);
  fs.writeFileSync('index.html', newHtml);
  console.log("Successfully replaced JSON-LD in index.html");
} else {
  console.error("Could not find markers.", {startIndex, endIndex});
}
