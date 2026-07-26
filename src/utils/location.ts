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
    if (typeof navigator !== 'undefined' && navigator.permissions && navigator.geolocation) {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        if (permission.state === 'granted') {
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
        console.warn("Permission query failed", err);
      }
    }

    // Fallback to IP-based location
    const res = await fetch('/api/location');
    if (res.ok) {
      const data = await res.json();
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
    }
    
  } catch (error) {
    console.error("[Location Tracker] Error getting location:", error);
  }

  isFetchingLocation = false;
  return null;
};
