import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Droplets, Thermometer, AlertCircle, RefreshCw, Navigation } from 'lucide-react';

const ClimateTrackerPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [climateData, setClimateData] = useState<{
    city: string;
    state: string;
    country: string;
    temp: number;
    humidity: number;
  } | null>(null);

  const requestLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          // Free reverse geocoding via BigDataCloud
          const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
          const geoData = await geoRes.json();

          const city = geoData.city || geoData.locality || "Unknown City";
          let stateCode = "";
          if (geoData.principalSubdivisionCode) {
            const parts = geoData.principalSubdivisionCode.split('-');
            stateCode = parts.length > 1 ? parts[1] : parts[0];
          } else if (geoData.principalSubdivision) {
            stateCode = geoData.principalSubdivision;
          }
          const country = geoData.countryCode || "Unknown Country";

          // Fetch Weather
          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`;
          const wRes = await fetch(weatherUrl);
          const wData = await wRes.json();
          const temp = wData.current.temperature_2m;
          const humidity = wData.current.relative_humidity_2m;

          const newData = { city, state: stateCode, country, temp, humidity };
          setClimateData(newData);
          
          // Format location string for the header greeting
          const locationParts = [city, stateCode].filter(Boolean);
          const locationStr = locationParts.length > 0 ? locationParts.join(", ") : "Your Location";
          
          // Save to localStorage
          localStorage.setItem('preciseWeather', JSON.stringify({
            temp,
            humidity,
            locationStr
          }));
          
          // Dispatch custom event to update DynamicGreeting header immediately
          window.dispatchEvent(new Event('preciseWeatherUpdated'));

        } catch (err) {
          setError("Failed to fetch climate data. Please try again.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        setError("Location access denied or unavailable. Please allow location permissions in your browser.");
        setLoading(false);
        console.error(geoError);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Helmet>
        <title>Live Mushroom Farm Climate Tracker | GPS Temperature & Humidity</title>
        <meta
          name="description"
          content="Track real-time temperature and humidity for your organic mushroom farm worldwide. Use our smart GPS location tracker to control climate, optimize button mushroom spawn preparation, and maximize your yield!"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-900 to-green-900 pt-28 pb-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MapPin size={32} className="text-emerald-400" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Live Mushroom Farm Climate Tracker
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Track real-time temperature and humidity for your organic mushroom farm worldwide. Use our smart GPS location tracker to control climate and maximize your yield!
          </p>

          <button
            onClick={requestLocation}
            disabled={loading}
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 transform hover:-translate-y-1"
          >
            {loading ? (
              <>
                <RefreshCw className="animate-spin" size={24} />
                Tracking Location...
              </>
            ) : (
              <>
                <Navigation size={24} />
                Check My Farm's Climate
              </>
            )}
          </button>
        </div>
      </section>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
        {/* Results Card */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 flex items-start gap-4 animate-fade-in">
            <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-red-800">Tracking Failed</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        )}

        {climateData && !error && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 transform transition-all animate-fade-in border border-gray-100">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wide uppercase mb-4">
                Live Data Connected
              </span>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <MapPin size={24} className="text-emerald-500" />
                {climateData.city}, {climateData.state}, {climateData.country}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-xl p-6 flex flex-col items-center justify-center border border-orange-100">
                <Thermometer size={48} className="text-orange-500 mb-4" />
                <p className="text-gray-500 font-medium mb-1">Temperature</p>
                <p className="text-5xl font-black text-gray-800">{climateData.temp}°C</p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center justify-center border border-blue-100">
                <Droplets size={48} className="text-blue-500 mb-4" />
                <p className="text-gray-500 font-medium mb-1">Relative Humidity</p>
                <p className="text-5xl font-black text-gray-800">{climateData.humidity}%</p>
              </div>
            </div>
          </div>
        )}

        {/* SEO Content Section */}
        <div className="prose prose-emerald max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart GPS Temperature & Humidity Tracker for Global Mushroom Farmers</h2>
          <p className="mb-8 text-lg">
            Mushroom cultivation is a precise science where even the slightest weather shifts can impact your entire crop. Whether you are running an indoor fruiting chamber or an outdoor organic mushroom farm, precise climate control is non-negotiable for a high yield. Our Live GPS Temperature and Humidity Tracker is a smart tool designed for mushroom growers worldwide, providing real-time weather and micro-climate data based exactly on your location.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">How Our Real-Time Location Tracking Works</h3>
          <p className="mb-8">
            Our advanced GPS tracking system detects your current location to measure live atmospheric conditions. No matter where you are in the world—be it North America, Europe, Asia, or Australia—this tool accurately calculates the surrounding air moisture (relative humidity) and heat (temperature) levels.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Why Accurate Climate Tracking is Crucial for Mushroom Farming</h3>
          <p className="mb-4">Different mushroom varieties require highly specific environmental conditions to thrive:</p>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span><strong>Button Mushroom Cultivation:</strong> During button mushroom spawn preparation and mycelium running, the temperature must stay between 22°C and 25°C. However, the fruiting stage requires a strict drop to 14°C to 18°C alongside 80-90% humidity.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">•</span>
              <span><strong>Oyster & Shiitake Mushrooms:</strong> While their temperature ranges differ, they also rely on high relative humidity (RH) to prevent pinning abortion and dry caps.</span>
            </li>
          </ul>
          <p className="mb-8">
            If humidity drops suddenly or a heatwave hits, your crop is at risk of drying out or falling prey to contamination like green mold. Our online climate tracker keeps you alert, allowing you to instantly adjust your greenhouse, grow tent, or fruiting chamber environment.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits of Our Global Temperature Tool</h3>
          <ul className="space-y-4 mb-10">
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Pinpoint Accuracy:</strong> Exact location-based weather data integrated with GPS tracking.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Global Accessibility:</strong> Accurate climate readings for any country, state, or city worldwide.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Optimize Your Yield:</strong> Manage ventilation, misting, and cooling at the right time to maximize your mushroom harvest.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Prevent Diseases:</strong> Monitor excess humidity and overheating to prevent fungal infections like bacterial blotch and cobweb mold.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong>Smart Agriculture:</strong> Streamline organic farming and modern digital agriculture with ease.</span>
            </li>
          </ul>

          <div className="bg-emerald-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Start Tracking Your Farm's Climate Today</h3>
            <p className="text-emerald-800 mb-6">
              Allow location access to check your farm's live environment with a single click. Equip yourself with accurate data to make your mushroom growing process even more successful.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all"
            >
              Start Tracking Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClimateTrackerPage;
