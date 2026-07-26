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
    let timezone = 'UTC';
    try {
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
      // Ignore timezone errors
    }

    let gpsResolved = false;

    // Check GPS Permissions dynamically (if supported)
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      try {
        let isGranted = false;
        if (navigator.permissions && navigator.permissions.query) {
          const permission = await navigator.permissions.query({ name: 'geolocation' as PermissionName });
          if (permission.state === 'granted') {
            isGranted = true;
          }
        }
        
        if (isGranted) {
          const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
          });
          
          cachedLocation = {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            source: 'gps',
            timezone
          };
          console.log("[Location Tracker] GPS Location resolved");
          gpsResolved = true;
        }
      } catch (err) {
        // Silently catch permission or GPS errors (Safari sometimes throws on permissions.query)
        console.warn("[Location Tracker] GPS lookup or permission check failed.");
      }
    }

    if (gpsResolved && cachedLocation) {
      isFetchingLocation = false;
      return cachedLocation;
    }

    // Fallback to IP-based location
    try {
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
        console.log("[Location Tracker] IP Location resolved");
        isFetchingLocation = false;
        return cachedLocation;
      }
    } catch (err) {
      console.warn("[Location Tracker] IP lookup failed.");
    }
    
  } catch (error) {
    console.warn("[Location Tracker] Unexpected error getting location:", error instanceof Error ? error.message : error);
  }

  isFetchingLocation = false;
  return null;
};
