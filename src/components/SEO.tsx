import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url }) => {
  const defaultKeywords =
    "mushroom farming in India, mushroom training in India, mushroom farm setup India, button mushroom farming business, organic mushroom farm";

  const siteUrl = "https://organicmushroomfarm.shop";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Title */}
      <title>{title} | Organic Mushroom Farm India</title>

      {/* SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content="https://organicmushroomfarm.shop/" />

      {/* Twitter (no image as per your requirement) */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;