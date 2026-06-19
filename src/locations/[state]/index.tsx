import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { resolveSEOContent, findStateBySlug } from '../../utils/locationHelpers';
import LocationTemplate from '../../components/LocationTemplate';
import { parseSEOPathname } from '../../utils/seoPathParser';
import LocationDetailsPage from '../../pages/LocationDetailsPage';

export default function StateIndexPage() {
  const { state } = useParams<{ state: string }>();
  const { pathname } = useLocation();

  // If this pathname matches any custom SEO target format, display LocationDetailsPage directly
  const parsed = parseSEOPathname(pathname);
  if (parsed && parsed.isCustomSEORoute) {
    return <LocationDetailsPage />;
  }

  if (!state) {
    return <Navigate to="/locations" replace />;
  }

  const stateObj = findStateBySlug(state);
  if (!stateObj) {
    // Elegant fallback to locations directory rather than abrupt blanking
    return <Navigate to="/locations" replace />;
  }

  const pageConfig = resolveSEOContent(state);
  if (!pageConfig) {
    return <Navigate to="/locations" replace />;
  }

  return (
    <LocationTemplate 
      pageConfig={pageConfig} 
      locationName={stateObj.state} 
      stateName={stateObj.state} 
    />
  );
}
