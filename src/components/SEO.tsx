import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOContext } from '../SEOContext';
import { 
  generateReviewSchema, 
  generateLocalBusinessSchema, 
  generateOrganizationSchema, 
  generateWebsiteSchema, 
  generateFounderSchema 
} from '../utils/seoSchemas';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  schemas?: object[];
}

const SEO: React.FC<SEOProps> = ({  title, description, keywords, url, schemas }) => { console.log("SEO rendered!");
  const defaultKeywords =
    "mushroom spawn, mushroom farming training, mushroom cultivation, dry mushroom, fresh mushroom, mushroom setup, organic mushroom farm, mushroom training India";

  const siteUrl = "https://organicmushroomfarm.shop";
  const location = useLocation();
  const path = location.pathname;
  console.log("SEO path:", path);
  const fullUrl = `${siteUrl}${path === "/" ? "" : path}`;

  const defaultSchemas = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(location.pathname),
    generateFounderSchema(),
    generateReviewSchema(title)
  ];

  const finalSchemas = schemas ? [...schemas, ...defaultSchemas] : defaultSchemas;

  const getOptimizedTitle = (baseTitle: string) => {
    const brandTerms = ["Organic Mushroom Farm", "Mushroom Farm", "India", "Global"];
    const hasBrand = brandTerms.some(term => baseTitle.toLowerCase().includes(term.toLowerCase()));
    
    // If it already has brand or is too long (Google usually truncates around 60 chars)
    if (hasBrand || baseTitle.length >= 50) {
      return baseTitle;
    }
    
    // If there's room, add short branding
    const shortSuffix = " | Organic Mushroom Farm";
    if (baseTitle.length + shortSuffix.length <= 60) {
      return `${baseTitle}${shortSuffix}`;
    }
    
    return baseTitle;
  };

  const optimizedTitle = getOptimizedTitle(title);

  const setSEO = useContext(SEOContext);
  if (setSEO && typeof window === 'undefined') {
    setSEO({
      title: optimizedTitle,
      description,
      keywords: keywords || defaultKeywords,
      fullUrl,
      finalSchemas
    });
  }

  return (
    <Helmet>
      {/* Title */}
      <title>{optimizedTitle}</title>

      {/* SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
      <meta property="og:image:alt" content="Organic Mushroom Farm" />

      {/* Twitter (no image as per your requirement) */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
      <meta name="twitter:image:alt" content="Organic Mushroom Farm" />

      {/* JSON-LD Schemas */}
      {finalSchemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
