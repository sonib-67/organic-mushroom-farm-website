import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { resolveSEOContent, findCityBySlug, findStateBySlug } from '../../utils/locationHelpers';
import LocationTemplate from '../../components/LocationTemplate';
import { parseSEOPathname } from '../../utils/seoPathParser';
import LocationDetailsPage from '../../pages/LocationDetailsPage';

export default function CityPage() {
  const { state, city } = useParams<{ state: string; city: string }>();
  const { pathname } = useLocation();

  // If this pathname matches any custom SEO target format, display LocationDetailsPage directly
  const parsed = parseSEOPathname(pathname);
  if (parsed && parsed.isCustomSEORoute) {
    return <LocationDetailsPage />;
  }

  if (!state || !city) {
    return <Navigate to="/locations" replace />;
  }

  const stateObj = findStateBySlug(state);
  if (!stateObj) {
    return <Navigate to="/locations" replace />;
  }

  const cityObj = findCityBySlug(state, city);
  if (!cityObj) {
    // If city is found in different state or mislabeled slug, fallback elegantly
    return <Navigate to={`/${stateObj.slug}`} replace />;
  }

  const pageConfig = resolveSEOContent(state, city);
  if (!pageConfig) {
    return <Navigate to={`/${stateObj.slug}`} replace />;
  }

  return (
    <LocationTemplate 
      pageConfig={pageConfig} 
      locationName={cityObj.city} 
      stateName={stateObj.state} 
    />
  );
}
