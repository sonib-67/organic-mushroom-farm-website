/**
 * Programmatic SEO Metadata Generator
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  url: string;
  ogImage?: string;
}

export function generateLocationMetadata(
  locationName: string,
  stateName: string,
  customTitle?: string,
  customDesc?: string
): SEOMetadata {
  const formattedLoc = locationName
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const title = customTitle || `${formattedLoc} Mushroom Farming | spawn Seeds, Training & Farm Setup`;
  const description = customDesc || `Launch a high-yield commercial mushroom farming unit in ${formattedLoc}, ${stateName}. Source laboratory F1 spawn seeds and schedule expert agronomist guidance.`;
  
  const keywords = [
    `mushroom farming in ${formattedLoc}`,
    `mushroom spawn supplier ${formattedLoc}`,
    `mushroom cultivation training ${formattedLoc}`,
    `mushroom setup cost ${stateName}`,
    `buy mushroom spawn online`
  ].join(', ');

  return {
    title,
    description,
    keywords,
    url: `https://www.organicmushroomfarm.shop/${locationName.toLowerCase()}`
  };
}
