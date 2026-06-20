import { ALL_LOCATIONS } from '../data/locationsData';
import { SEO_KEYWORDS, SEOKeyword } from '../data/seoKeywordsData';
import { ALLOWED_JABALPUR_SLUGS } from '../data/customPages/jabalpur';

// Pre-sort locations by descending length to prevent sub-string matching bugs
const SORTED_LOCATIONS = [...ALL_LOCATIONS].sort((a, b) => b.length - a.length);

const SYNTHETIC_KEYWORDS: Record<string, SEOKeyword> = {
  'mushroom-farming': { id: 9001, keyword: 'mushroom farming', url: '/mushroom-farming', category: 'Business & Farming', priority: 'High' },
  'mushroom-training': { id: 9002, keyword: 'mushroom training', url: '/mushroom-training', category: 'Training & Courses', priority: 'High' },
  'mushroom-franchise': { id: 9003, keyword: 'mushroom franchise', url: '/mushroom-franchise', category: 'Business & Farming', priority: 'High' },
  'careers': { id: 9004, keyword: 'mushroom farming careers', url: '/careers', category: 'Business & Farming', priority: 'Medium' }
};

export interface ParsedSEORoute {
  locationSlug: string; 
  keywordInfo: SEOKeyword;
  isCustomSEORoute: boolean;
}

export function parseSEOPathname(pathname: string): ParsedSEORoute | null {
  // Normalize the pathname: lowercased, remove trailing/leading slashes
  let cleanPath = pathname.toLowerCase().trim().replace(/^\/+|\/+$/g, '');
  if (!cleanPath) return null;

  // Handle locations route prefix (e.g. /locations/jabalpur/mushroom-training-center)
  if (cleanPath.startsWith('locations/')) {
    cleanPath = cleanPath.slice('locations/'.length).replace(/^\/+|\/+$/g, '');
  }

  // 1. Check if the path is exactly one of the 193 baseline SEO URLs with no location suffix/prefix
  const exactMatch = SEO_KEYWORDS.find(k => {
    const kClean = k.url.toLowerCase().replace(/^\/+|\/+$/g, '');
    return cleanPath === kClean;
  });

  if (exactMatch) {
    return {
      locationSlug: 'india', // fallback representational location
      keywordInfo: exactMatch,
      isCustomSEORoute: true
    };
  }

  // Check if exactly a synthetic benchmark url
  if (SYNTHETIC_KEYWORDS[cleanPath]) {
    return {
      locationSlug: 'india',
      keywordInfo: SYNTHETIC_KEYWORDS[cleanPath],
      isCustomSEORoute: true
    };
  }

  // 2. Scan the pathname for any defined location slug (city/state/village)
  for (const loc of SORTED_LOCATIONS) {
    // We check if the cleanest path contains the location slug as a distinct token
    // Handled formats: 
    // - /mumbai/mushroom-training-center (loc = mumbai, remainder = mushroom-training-center)
    // - /mushroom-training-center/mumbai (loc = mumbai, remainder = mushroom-training-center)
    // - /mushroom-training-center-mumbai (loc = mumbai, remainder = mushroom-training-center)
    
    const index = cleanPath.indexOf(loc);
    if (index !== -1) {
      // Ensure it is a complete token bounding match (be preceded/followed by - or / or string boundary)
      const borderPrev = index === 0 ? true : ['-', '/'].includes(cleanPath[index - 1]);
      const borderNext = (index + loc.length) === cleanPath.length ? true : ['-', '/'].includes(cleanPath[index + loc.length]);

      if (borderPrev && borderNext) {
        // Extract the remainder text by deleting the location token and cleaning separators
        let remainder = '';
        if (cleanPath.startsWith(loc + '/')) {
          remainder = cleanPath.slice((loc + '/').length);
        } else if (cleanPath.startsWith(loc + '-')) {
          remainder = cleanPath.slice((loc + '-').length);
        } else if (cleanPath.endsWith('/' + loc)) {
          remainder = cleanPath.slice(0, cleanPath.length - ('/' + loc).length);
        } else if (cleanPath.endsWith('-' + loc)) {
          remainder = cleanPath.slice(0, cleanPath.length - ('-' + loc).length);
        } else {
          // Fallback replacement if it's placed somewhere else
          remainder = cleanPath.replace(loc, '').replace(/-+/g, '-').replace(/\/+/g, '/');
        }

        // Clean up leading/trailing hyphens or slashes from remainder
        remainder = remainder.replace(/^[-/]+|[-/]+$/g, '');

        // Check if this remainder matches any of our baseline SEO keyword URLs
        const matchedKeyword = SEO_KEYWORDS.find(k => {
          const kClean = k.url.toLowerCase().replace(/^\/+|\/+$/g, '');
          return remainder === kClean;
        });

        if (matchedKeyword) {
          if (loc === 'jabalpur' && !ALLOWED_JABALPUR_SLUGS.includes(remainder)) {
            return null;
          }
          return {
            locationSlug: loc,
            keywordInfo: matchedKeyword,
            isCustomSEORoute: true
          };
        }

        // Check if remainder matches any of our synthetic keywords
        if (SYNTHETIC_KEYWORDS[remainder]) {
          if (loc === 'jabalpur' && !ALLOWED_JABALPUR_SLUGS.includes(remainder)) {
            return null;
          }
          return {
            locationSlug: loc,
            keywordInfo: SYNTHETIC_KEYWORDS[remainder],
            isCustomSEORoute: true
          };
        }
      }
    }
  }

  return null;
}
