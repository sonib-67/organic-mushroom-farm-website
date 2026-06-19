/**
 * Location Helpers for Programmatic Local SEO
 * Powered by Vite's eager metadata globbing to load manually editable JSON files dynamically
 */

export interface StateData {
  state: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  cities: string[];
}

export interface CityData {
  city: string;
  slug: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  faq: { q: string; q_id?: string; a: string }[];
  schema?: Record<string, any>;
}

export interface VillageData {
  village: string;
  slug: string;
  city: string;
  state: string;
  metaTitle?: string;
  metaDescription?: string;
}

import { StatesData, CitiesData, VillagesData } from '../data/cities';

// Parse into indexable flat lists & maps
export const getStates = (): StateData[] => {
  return StatesData;
};

export const getCities = (): CityData[] => {
  return CitiesData;
};

export const getVillages = (): VillageData[] => {
  return VillagesData;
};

// --- Locator Engines ---

export const findStateBySlug = (stateSlug: string): StateData | undefined => {
  return getStates().find(s => s.slug === stateSlug.toLowerCase());
};

export const findCityBySlug = (stateSlug: string, citySlug: string): CityData | undefined => {
  // Safe validation matches either city slug & checks state slug directly
  const stateObj = findStateBySlug(stateSlug);
  if (!stateObj) return undefined;

  return getCities().find(
    c => c.slug === citySlug.toLowerCase() && 
    c.state.toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-') === stateObj.slug
  );
};

export const findVillageBySlug = (stateSlug: string, citySlug: string, villageSlug: string): VillageData | undefined => {
  const cityObj = findCityBySlug(stateSlug, citySlug);
  if (!cityObj) return undefined;

  return getVillages().find(
    v => v.slug === villageSlug.toLowerCase() && v.city.toLowerCase() === cityObj.city.toLowerCase()
  );
};

// --- Programmatic SEO Content Assembler ---

export interface ResolvedSEOPage {
  title: string;
  metaDescription: string;
  h1: string;
  h2s: string[];
  content: string;
  faqs: { q: string; a: string }[];
  schema: Record<string, any>;
  internalLinks: { label: string; url: string }[];
  breadcrumbs: { label: string; url: string }[];
  ctaText: string;
  ctaUrl: string;
}

export const resolveSEOContent = (
  stateSlug: string,
  citySlug?: string,
  villageSlug?: string
): ResolvedSEOPage | null => {
  const stateObj = findStateBySlug(stateSlug);
  if (!stateObj) return null;

  // Breadcrumbs Base
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Locations", url: "/locations" },
    { label: stateObj.state, url: `/${stateObj.slug}` }
  ];

  // Base CTAs
  const defaultCta = "Book Mushroom Consultancy Session";
  const defaultCtaUrl = "/book-consultant";

  // CASE 1: VILLAGE VIEW
  if (villageSlug) {
    const villageObj = findVillageBySlug(stateSlug, citySlug || '', villageSlug);
    if (!villageObj) return null;

    const cityObj = findCityBySlug(stateSlug, citySlug || '');
    const bLabel = cityObj ? cityObj.city : (citySlug || '');
    breadcrumbs.push({ label: bLabel, url: `/${stateObj.slug}/${citySlug}` });
    breadcrumbs.push({ label: villageObj.village, url: `/${stateObj.slug}/${citySlug}/${villageObj.slug}` });

    const title = `${villageObj.village} Mushroom Farming & Training Directory | Setup Cost ${stateObj.state}`;
    const metaDescription = `Looking for organic mushroom spawn seeds or training in ${villageObj.village}? Contact our local regional network serving ${villageObj.city} and ${stateObj.state} with expert advice.`;
    const h1 = `Organic Mushroom Farming & Spawn Seeds in ${villageObj.village}`;
    const h2s = [
      `Scientific Mushroom Cultivation Guidelines for ${villageObj.village}`,
      `Wholesale Spawn Delivery & Quality Seed Blocks`,
      `Agripreneurship Training Support Serving ${villageObj.city} Region`
    ];

    const content = `We are delighted to bring our pioneer organic mushroom solutions to ${villageObj.village}. Working in alignment with rural groups and active farmers of ${villageObj.city} district in ${stateObj.state}, our training hubs simplify starting Oyster, Milky, and Button farms. We deliver certified Grade-A F1 seeds, help draft detailed project sops, and offer buyback assistance for local sellers.`;

    const faqs = [
      {
        q: `Can I start a mushroom growing unit at home in ${villageObj.village}?`,
        a: `Absolutely! A small 10x10 feet indoor room in ${villageObj.village} is sufficient to start cultivating Oyster Mushrooms. Sourced from our sterile labs, start with as little as 10 crop bags.`
      },
      {
        q: `Who delivers organic spawn seeds in ${villageObj.village}?`,
        a: `We provide safe doorstep shipment of lab-tested F1 hybrid spawn seeds directly into ${villageObj.village} via our regional transport logistics.`
      }
    ];

    // Auto-linking related towns
    const internalLinks = getVillages()
      .filter(v => v.city.toLowerCase() === (cityObj?.city || '').toLowerCase() && v.slug !== villageObj.slug)
      .slice(0, 5)
      .map(v => ({
        label: `Mushroom Farming in ${v.village}`,
        url: `/${stateObj.slug}/${citySlug}/${v.slug}`
      }));

    return {
      title,
      metaDescription,
      h1,
      h2s,
      content,
      faqs,
      schema: {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": villageObj.village,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": villageObj.city,
          "addressRegion": stateObj.state,
          "addressCountry": "IN"
        }
      },
      internalLinks,
      breadcrumbs,
      ctaText: `Register Your Grow Unit in ${villageObj.village}`,
      ctaUrl: defaultCtaUrl
    };
  }

  // CASE 2: CITY VIEW
  if (citySlug) {
    const cityObj = findCityBySlug(stateSlug, citySlug);
    if (!cityObj) return null;

    breadcrumbs.push({ label: cityObj.city, url: `/${stateObj.slug}/${cityObj.slug}` });

    // Internal links: list villages in this city
    const relatedVillages = getVillages()
      .filter(v => v.city.toLowerCase() === cityObj.city.toLowerCase())
      .map(v => ({
        label: `Mushroom Unit in ${v.village}`,
        url: `/${stateObj.slug}/${cityObj.slug}/${v.slug}`
      }));

    // Sibling cities
    const siblingCities = getCities()
      .filter(c => c.state === stateObj.state && c.slug !== cityObj.slug)
      .slice(0, 4)
      .map(c => ({
        label: `Mushroom Training in ${c.city}`,
        url: `/${stateObj.slug}/${c.slug}`
      }));

    const computedFaqs = cityObj.faq.map(f => ({ q: f.q, a: f.a }));
    if (computedFaqs.length === 0) {
      computedFaqs.push({
        q: `What is the cost of setting up a commercial mushroom farm in ${cityObj.city}?`,
        a: `A professional climate-controlled room setup harboring 1,000 bags in ${cityObj.city} ranges from ₹1.5 Lakhs to ₹3 Lakhs, yielding up to 3 flushes with rapid return of investment.`
      });
    }

    return {
      title: cityObj.metaTitle || `${cityObj.city} Mushroom Farming: Certified Training & Spawn Seed Supply`,
      metaDescription: cityObj.metaDescription || `Pioneer mushroom setups in ${cityObj.city}, ${stateObj.state}. Order Grade-A white button & oyster spawns. Learn government subsidy guidelines and project models.`,
      h1: `Professional Mushroom Cultivation Hub in ${cityObj.city}`,
      h2s: [
        `High-Yield Smart Climate Grow Rooms in ${cityObj.city}`,
        `Hygienic Sort Sorghum F1 Spawn Seeds Distributor`,
        `Start Organic Farming Business with Expert Training`
      ],
      content: cityObj.content || `Deploying commercial agriculture in ${cityObj.city} enables massive yields. Our turnkey consultancies install PUF panels, premium cooling compressors, digital misters, and steam sterilization grids. Sourced from organic, soil-less substrates, maximize daily output safely with ongoing support.`,
      faqs: computedFaqs,
      schema: cityObj.schema || {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Organic Mushroom Farms ${cityObj.city}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cityObj.city,
          "addressRegion": stateObj.state,
          "addressCountry": "IN"
        }
      },
      internalLinks: [...relatedVillages, ...siblingCities],
      breadcrumbs,
      ctaText: `Download ${cityObj.city} Mushroom Business Plan`,
      ctaUrl: "/business-plan"
    };
  }

  // CASE 3: STATE VIEW
  const relatedCities = getCities()
    .filter(c => c.state.toLowerCase() === stateObj.state.toLowerCase() || stateObj.cities.includes(c.slug))
    .map(c => ({
      label: `Mushroom Farming in ${c.city}`,
      url: `/${stateObj.slug}/${c.slug}`
    }));

  const stateFaqs = [
    {
      q: `What assistance is available for mushroom cultivation in ${stateObj.state}?`,
      a: `Under national NHB policies and state schemes across ${stateObj.state}, farmers can secure up to 40% - 50% technical subsidy grants. We provide fully compliant design plans and certifications to help with bank approvals.`
    },
    {
      q: `Can Oyster and Button crops be grown year-round in ${stateObj.state}?`,
      a: `Yes! While Oyster and Milky mushrooms grow easily in natural seasonal temperatures, Button mushrooms can be farmed year-round by establishing cooling grow rooms.`
    }
  ];

  return {
    title: stateObj.metaTitle || `Mushroom Farming in ${stateObj.state} | Spawn Seeds, setups & Training`,
    metaDescription: stateObj.metaDescription || `Enter the profitable organic agriculture sector in ${stateObj.state}. Buy lab-tested Sorghum seeds, and learn low-cost room insulation secrets.`,
    h1: `Mushroom Farming, Spawn Seeds & Training in ${stateObj.state}`,
    h2s: [
      `State-Wide Spawn Distribution & Technical Support Net`,
      `How to Secure NHB Government Subsidies in ${stateObj.state}`,
      `Turnkey Crop Room Blueprint and Technical Installation`
    ],
    content: stateObj.description || `Discover scientific mushroom growing guides customized for ${stateObj.state}'s soil and temperature conditions. We serve all districts and small towns with rapid spawn delivery, hands-on masterclass courses, and custom machinery plans.`,
    faqs: stateFaqs,
    schema: {
      "@context": "https://schema.org",
      "@type": "AdministrativeArea",
      "name": stateObj.state,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": stateObj.state,
        "addressCountry": "IN"
      }
    },
    internalLinks: relatedCities,
    breadcrumbs,
    ctaText: `Connect with ${stateObj.state} Agronomist Advisor`,
    ctaUrl: "/on-site-consultation"
  };
};
