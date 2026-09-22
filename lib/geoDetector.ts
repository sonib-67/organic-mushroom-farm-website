export interface GeoLocationInfo {
  city: string;
  state: string;
  country: string;
  language: "hi" | "en";
  ip: string;
}

const INDIAN_REGIONS: Record<string, { state: string; lang: "hi" | "en" }> = {
  MP: { state: "Madhya Pradesh", lang: "hi" },
  UP: { state: "Uttar Pradesh", lang: "hi" },
  DL: { state: "Delhi", lang: "hi" },
  HR: { state: "Haryana", lang: "hi" },
  RJ: { state: "Rajasthan", lang: "hi" },
  BR: { state: "Bihar", lang: "hi" },
  CG: { state: "Chhattisgarh", lang: "hi" },
  JH: { state: "Jharkhand", lang: "hi" },
  UK: { state: "Uttarakhand", lang: "hi" },
  HP: { state: "Himachal Pradesh", lang: "hi" },
  PB: { state: "Punjab", lang: "hi" },
  // Non-Hindi dominant regions -> default to clean English format
  MH: { state: "Maharashtra", lang: "en" },
  GJ: { state: "Gujarat", lang: "en" },
  KA: { state: "Karnataka", lang: "en" },
  TN: { state: "Tamil Nadu", lang: "en" },
  AP: { state: "Andhra Pradesh", lang: "en" },
  TS: { state: "Telangana", lang: "en" },
  KL: { state: "Kerala", lang: "en" },
  WB: { state: "West Bengal", lang: "en" },
  OR: { state: "Odisha", lang: "en" },
  OD: { state: "Odisha", lang: "en" },
  AS: { state: "Assam", lang: "en" },
  GA: { state: "Goa", lang: "en" }
};

const HINDI_STATES_SET = new Set([
  "madhya pradesh",
  "uttar pradesh",
  "delhi",
  "haryana",
  "rajasthan",
  "bihar",
  "chhattisgarh",
  "jharkhand",
  "uttarakhand",
  "himachal pradesh",
  "punjab"
]);

function isPrivateIp(ip: string): boolean {
  if (!ip) return true;
  return (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip === "unknown-ip" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("172.17.") ||
    ip.startsWith("172.18.") ||
    ip.startsWith("172.19.") ||
    ip.startsWith("172.20.") ||
    ip.startsWith("172.21.") ||
    ip.startsWith("172.22.") ||
    ip.startsWith("172.23.") ||
    ip.startsWith("172.24.") ||
    ip.startsWith("172.25.") ||
    ip.startsWith("172.26.") ||
    ip.startsWith("172.27.") ||
    ip.startsWith("172.28.") ||
    ip.startsWith("172.29.") ||
    ip.startsWith("172.30.") ||
    ip.startsWith("172.31.")
  );
}

/**
 * Detects city, state, country, and preferred language from incoming request
 */
export async function detectSubscriberLocation(req: Request): Promise<GeoLocationInfo> {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown-ip";

  // 1. Check Vercel / Cloudflare edge geolocation headers (Instant & accurate)
  const headerCity =
    req.headers.get("x-vercel-ip-city") ||
    req.headers.get("cf-ipcity") ||
    "";

  const headerRegionCode = (
    req.headers.get("x-vercel-ip-country-region") ||
    req.headers.get("cf-region-code") ||
    ""
  ).toUpperCase();

  const headerCountry = (
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("cf-ipcountry") ||
    "IN"
  ).toUpperCase();

  if (headerCity || headerRegionCode) {
    const regionInfo = INDIAN_REGIONS[headerRegionCode];
    const state = regionInfo ? regionInfo.state : (headerRegionCode || "All India");
    
    // Determine language based on region or country
    let language: "hi" | "en" = "hi";
    if (headerCountry !== "IN") {
      language = "en";
    } else if (regionInfo) {
      language = regionInfo.lang;
    } else if (!HINDI_STATES_SET.has(state.toLowerCase())) {
      language = "en";
    }

    return {
      city: headerCity ? decodeURIComponent(headerCity) : (regionInfo?.state ? `${regionInfo.state} Region` : "India"),
      state,
      country: headerCountry === "IN" ? "India" : headerCountry,
      language,
      ip
    };
  }

  // 2. If running locally or on server without headers, try fast non-blocking IP lookup if public IP
  if (!isPrivateIp(ip)) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 700); // 700ms strict timeout

      const res = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,regionName,region,country,countryCode`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && data.status === "success") {
          const regionCode = (data.region || "").toUpperCase();
          const regionInfo = INDIAN_REGIONS[regionCode];
          const state = data.regionName || regionInfo?.state || "India";
          const isIndia = (data.countryCode || "IN").toUpperCase() === "IN";
          
          let language: "hi" | "en" = "hi";
          if (!isIndia) {
            language = "en";
          } else if (regionInfo) {
            language = regionInfo.lang;
          } else if (!HINDI_STATES_SET.has(state.toLowerCase())) {
            language = "en";
          }

          return {
            city: data.city || state,
            state,
            country: data.country || "India",
            language,
            ip
          };
        }
      }
    } catch {
      // Ignore network timeout and fall back to default
    }
  }

  // 3. Fallback defaults (Madhya Pradesh / India)
  return {
    city: "Madhya Pradesh",
    state: "Madhya Pradesh",
    country: "India",
    language: "hi",
    ip
  };
}
