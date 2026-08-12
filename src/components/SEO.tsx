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
  const finalTitle = title.includes("Organic Mushrooms Farm") ? title : (title.length > 35 ? title : `${title} | Organic Mushrooms Farm`);
  const defaultKeywords =
    "mushroom spawn, mushroom farming training, mushroom cultivation, dry mushroom, fresh mushroom, mushroom setup, organic mushrooms farm, mushroom training India";

  const siteUrl = "https://organicmushroomsfarm.com";
  const location = useLocation();
  const path = location.pathname;

  const metaMap: Record<string, string> = {};
  const finalDescription = metaMap[path] || description;

  console.log("SEO path:", path);
  
  const canonicalPath = path === "/" ? "" : path;
  const fullUrl = `${siteUrl}${canonicalPath}`;
  const defaultSchemas = [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(location.pathname),
    generateFounderSchema(),
    generateReviewSchema(title)
  ];

  const finalSchemas = schemas ? [...schemas, ...defaultSchemas] : defaultSchemas;

  const setSEO = useContext(SEOContext);
  if (setSEO && typeof window === 'undefined') {
    setSEO({
      title: finalTitle,
      description: finalDescription,
      keywords: keywords || defaultKeywords,
      fullUrl,
      finalSchemas
    });
  }

  return (
    <Helmet>
      {/* Title */}
      <title>{finalTitle}</title>

      {/* SEO */}
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
      <meta property="og:image:alt" content="Organic Mushrooms Farm" />

      {/* Twitter (no image as per your requirement) */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content="https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png" />
      <meta name="twitter:image:alt" content="Organic Mushrooms Farm" />

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
