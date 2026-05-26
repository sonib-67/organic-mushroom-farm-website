export interface LocationData {
  country?: string;
  region?: string;
  city?: string;
  timezone?: string;
  lat?: number;
  lon?: number;
  source: 'gps' | 'ip' | 'unknown';
}

let cachedLocation: LocationData | null = null;
let isFetchingLocation = false;

/**
 * Get user location based on browser permissions or fallback to IP via server API
 */
export const getUserLocation = async (): Promise<LocationData | null> => {
  if (cachedLocation) return cachedLocation;
  if (isFetchingLocation) return null; // Avoid duplicate concurrent calls

  isFetchingLocation = true;
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Check GPS Permissions dynamically (if supported)
    if (typeof navigator !== 'undefined' && navigator.permissions && typeof navigator.permissions.query === 'function' && navigator.geolocation) {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        if (permission && permission.state === 'granted') {
          const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
          });
          
          cachedLocation = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            source: 'gps',
            timezone
          };
          console.log("[Location Tracker] GPS Location resolved:", cachedLocation);
          isFetchingLocation = false;
          return cachedLocation;
        }
      } catch (err) {
        console.warn("[Location Tracker] Permission query failed", err);
      }
    }

    // Fallback to IP-based location
    try {
      const res = await fetch('/api/location');
      const contentType = res.headers.get('content-type');
      if (res.ok && contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (data && !data.error) {
          cachedLocation = {
            country: data.country,
            region: data.region,
            city: data.city,
            timezone: data.timezone || timezone,
            lat: data.lat,
            lon: data.lon,
            source: data.source || 'ip'
          };
          console.log("[Location Tracker] IP Location resolved:", cachedLocation);
          isFetchingLocation = false;
          return cachedLocation;
        } else {
          console.warn("[Location Tracker] IP location returned an error:", data?.error || 'Unknown error');
        }
      } else {
        console.warn("[Location Tracker] IP location response was not JSON or failed. Status:", res.status);
      }
    } catch (fetchErr) {
      console.warn("[Location Tracker] IP location fetch failed:", fetchErr);
    }
    
  } catch (error) {
    console.error("[Location Tracker] Error getting location:", error);
  }

  isFetchingLocation = false;
  return null;
};
