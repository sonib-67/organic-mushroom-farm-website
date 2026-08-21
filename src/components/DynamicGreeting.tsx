import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicGreeting = () => {
  const [phase, setPhase] = useState<'welcome' | 'carousel'>('welcome');
  const [slideIndex, setSlideIndex] = useState(0);
  
  const [weather, setWeather] = useState<{ temp: number, humidity: number, locationStr: string } | null>(null);
  const [greeting, setGreeting] = useState({ text: 'Good Day', icon: '☀️' });

  // Initial Welcome Timer (8 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('carousel');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Determine Time Greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting({ text: 'Good Morning', icon: '🌅' });
    else if (hour >= 12 && hour < 17) setGreeting({ text: 'Good Afternoon', icon: '☀️' });
    else if (hour >= 17 && hour < 21) setGreeting({ text: 'Good Evening', icon: '🌇' });
    else setGreeting({ text: 'Good Night', icon: '🌙' });
  }, []);

  // Fetch Weather & Location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            
            // Fetch Weather from Open-Meteo (100% Free, No API Key)
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`;
            const wRes = await fetch(weatherUrl);
            const wData = await wRes.json();
            const temperature = wData.current.temperature_2m;
            const humidity = wData.current.relative_humidity_2m;
            
            // Free reverse geocoding via BigDataCloud (No API key needed for client-side IP-based or lat/lon)
            const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
            const geoData = await geoRes.json();
            
            const city = geoData.city || geoData.locality || "";
            let stateCode = "";
            if (geoData.principalSubdivisionCode) {
              const parts = geoData.principalSubdivisionCode.split('-');
              stateCode = parts.length > 1 ? parts[1] : parts[0];
            } else if (geoData.principalSubdivision) {
              stateCode = geoData.principalSubdivision.substring(0, 2).toUpperCase(); // Fallback for state short name
            }
            const country = geoData.countryCode || "";
            
            // Format: "Indore, MP, IN"
            const locationParts = [city, stateCode, country].filter(Boolean);
            const locationStr = locationParts.length > 0 ? locationParts.join(", ") : "Your Location";

            setWeather({ temp: temperature, humidity, locationStr });
          } catch (error) {
            console.error("Error fetching weather:", error);
          }
        },
        (error) => {
          console.error("Location access denied or error:", error);
        }
      );
    }
  }, []);

  // Carousel Loop (6 seconds per slide)
  useEffect(() => {
    if (phase === 'welcome') return;
    
    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        if (!weather) return 0; // If location is blocked/failed, stick to Greeting
        if (prev === 0) return 1; // Switch from Greeting -> Location & Weather
        if (prev === 1) return 2; // Switch from Location & Weather -> Suggestion
        return 1; // Switch from Suggestion -> BACK to Location & Weather (Looping as requested)
      });
    }, 6000); 
    
    return () => clearInterval(interval);
  }, [phase, weather]);

  // Suggestion Logic based on temperature
  const getSuggestion = (temp: number) => {
    if (temp < 15) return "Too cold, needs heating ❄️";
    if (temp >= 15 && temp < 20) return "Best for Button Mushroom 🍄";
    if (temp >= 20 && temp <= 30) return "Perfect for Oyster Mushroom 🍄";
    if (temp > 30 && temp <= 38) return "Ideal for Milky Mushroom 🌾";
    return "Too hot, needs cooling 🌡️";
  };

  const renderSlideContent = () => {
    if (phase === 'welcome') {
      return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          Welcome To Organic Mushroom Farm <span className="animate-pulse inline-block">🍄</span>
        </span>
      );
    }

    if (slideIndex === 0 || !weather) {
      return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          {greeting.text} <span className="animate-pulse inline-block">{greeting.icon}</span>
        </span>
      );
    }
    
    if (slideIndex === 1 && weather) {
      return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          {weather.locationStr}: {weather.temp}°C, Humidity {weather.humidity}% <span className="animate-pulse inline-block">🌡️</span>
        </span>
      );
    }
    
    if (slideIndex === 2 && weather) {
      return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          {getSuggestion(weather.temp)}
        </span>
      );
    }
  };

  return (
    <div className="relative text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300 mt-0.5 tracking-wide flex items-center h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${phase}-${slideIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center"
        >
          {renderSlideContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicGreeting;
