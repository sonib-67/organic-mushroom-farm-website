export const generateReviewSchema = (itemName: string = "Organic Mushroom Farm Training & Franchise") => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": itemName,
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "description": "Organic Mushroom Farm - Leading Mushroom Cultivation, Training, and Franchise in India.",
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
    }
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Organic Mushroom Farm",
    "image": "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378065/organicmushroomlogo-_qsflej.png",
    "telephone": "+919203544140",
    "url": "https://organicmushroomfarm.shop",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katangi",
      "addressLocality": "Jabalpur",
      "addressRegion": "MP",
      "addressCountry": "IN"
    }
  };
};
