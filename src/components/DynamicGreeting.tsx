import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'welcome' | 'greeting' | 'weather_initial' | 'suggestion' | 'weather_final';

const DynamicGreeting = () => {
  const [phase, setPhase] = useState<Phase>('welcome');
  
  const [weather, setWeather] = useState<{ temp: number, humidity: number, locationStr: string } | null>(null);
  const [greeting, setGreeting] = useState({ text: 'Good Day', icon: '☀️' });

  // 1. Determine Time Greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting({ text: 'Good Morning', icon: '🌅' });
    else if (hour >= 12 && hour < 17) setGreeting({ text: 'Good Afternoon', icon: '☀️' });
    else if (hour >= 17 && hour < 21) setGreeting({ text: 'Good Evening', icon: '🌇' });
    else setGreeting({ text: 'Good Night', icon: '🌙' });
  }, []);

  // 2. Fetch Location (Precise GPS if available, otherwise IP fallback)
  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        // First check if precise GPS location was already saved by the user
        const savedPrecise = localStorage.getItem('preciseWeather');
        if (savedPrecise) {
          const preciseData = JSON.parse(savedPrecise);
          setWeather({
            temp: preciseData.temp,
            humidity: preciseData.humidity,
            locationStr: preciseData.locationStr
          });
          return; // Skip IP tracking if precise data exists
        }

        let lat, lon, countryCode;

        // Try primary IP API (ipwho.is)
        try {
          const ipRes = await fetch('https://ipwho.is/');
          const ipData = await ipRes.json();
          if (ipData.success) {
            lat = ipData.latitude;
            lon = ipData.longitude;
            countryCode = ipData.country_code;
          } else {
            throw new Error("Primary IP API Failed");
          }
        } catch (primaryError) {
          // Fallback to secondary IP API (ipapi.co) if primary fails
          const fbRes = await fetch('https://ipapi.co/json/');
          const fbData = await fbRes.json();
          lat = fbData.latitude;
          lon = fbData.longitude;
          countryCode = fbData.country_code || fbData.country;
        }

        if (lat && lon) {
          const locationParts = [countryCode].filter(Boolean); // ONLY Country in fallback
          const locationStr = locationParts.length > 0 ? locationParts.join(", ") : "Your Location";

          // Fetch Weather using coordinates
          const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`;
          const wRes = await fetch(weatherUrl);
          const wData = await wRes.json();
          
          setWeather({
            temp: wData.current.temperature_2m,
            humidity: wData.current.relative_humidity_2m,
            locationStr
          });
        }
      } catch (error) {
        console.error("Error fetching IP location or weather:", error);
      }
    };

    fetchLocationAndWeather();

    // Listen for custom event when user allows GPS on the Tracker page
    const handlePreciseUpdate = () => {
      const savedPrecise = localStorage.getItem('preciseWeather');
      if (savedPrecise) {
        const preciseData = JSON.parse(savedPrecise);
        setWeather({
          temp: preciseData.temp,
          humidity: preciseData.humidity,
          locationStr: preciseData.locationStr
        });
      }
    };

    window.addEventListener('preciseWeatherUpdated', handlePreciseUpdate);
    return () => window.removeEventListener('preciseWeatherUpdated', handlePreciseUpdate);
  }, []);

  // 3. Sequence Manager (Timers)
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'welcome') {
      timeout = setTimeout(() => setPhase('greeting'), 4000);
    } else if (phase === 'greeting') {
      timeout = setTimeout(() => {
        setPhase(weather ? 'weather_initial' : 'weather_final');
      }, 6000);
    } else if (phase === 'weather_initial') {
      timeout = setTimeout(() => setPhase('suggestion'), 6000);
    } else if (phase === 'suggestion') {
      timeout = setTimeout(() => setPhase('weather_final'), 6000);
    }
    // 'weather_final' phase stays permanently (does not trigger another timeout)

    return () => clearTimeout(timeout);
  }, [phase, weather]);

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

    if (phase === 'greeting' || (!weather && phase !== 'welcome')) {
      return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          {greeting.text} <span className="animate-pulse inline-block">{greeting.icon}</span>
        </span>
      );
    }
    
    if (phase === 'weather_initial' || phase === 'weather_final') {
      if (weather) {
        return (
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            {weather.locationStr}: {weather.temp}°C, Humidity {weather.humidity}% <span className="animate-pulse inline-block">🌡️</span>
          </span>
        );
      }
    }
    
    if (phase === 'suggestion' && weather) {
      return (
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          {getSuggestion(weather.temp)}
        </span>
      );
    }
    
    return null;
  };

  return (
    <div className="relative text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300 mt-0.5 tracking-wide flex items-center h-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
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
