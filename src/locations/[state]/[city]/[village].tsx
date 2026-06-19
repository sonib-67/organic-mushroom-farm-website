import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { resolveSEOContent, findVillageBySlug, findCityBySlug, findStateBySlug } from '../../../utils/locationHelpers';
import LocationTemplate from '../../../components/LocationTemplate';
import { parseSEOPathname } from '../../../utils/seoPathParser';
import LocationDetailsPage from '../../../pages/LocationDetailsPage';

export default function VillagePage() {
  const { state, city, village } = useParams<{ state: string; city: string; village: string }>();
  const { pathname } = useLocation();

  // If this pathname matches any custom SEO target format, display LocationDetailsPage directly
  const parsed = parseSEOPathname(pathname);
  if (parsed && parsed.isCustomSEORoute) {
    return <LocationDetailsPage />;
  }

  if (!state || !city || !village) {
    return <Navigate to="/locations" replace />;
  }

  const stateObj = findStateBySlug(state);
  if (!stateObj) {
    return <Navigate to="/locations" replace />;
  }

  const cityObj = findCityBySlug(state, city);
  if (!cityObj) {
    return <Navigate to={`/${stateObj.slug}`} replace />;
  }

  const villageObj = findVillageBySlug(state, city, village);
  if (!villageObj) {
    return <Navigate to={`/${stateObj.slug}/${cityObj.slug}`} replace />;
  }

  const pageConfig = resolveSEOContent(state, city, village);
  if (!pageConfig) {
    return <Navigate to={`/${stateObj.slug}/${cityObj.slug}`} replace />;
  }

  return (
    <LocationTemplate 
      pageConfig={pageConfig} 
      locationName={villageObj.village} 
      stateName={stateObj.state} 
    />
  );
}
