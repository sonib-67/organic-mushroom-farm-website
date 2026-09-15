"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, CloudSun, Wind, Droplets } from "lucide-react";

export const DynamicGreeting = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [weather, setWeather] = useState<{
    temp?: number;
    humidity?: number;
    dewPoint?: number;
    windSpeed?: number;
    uvIndex?: number;
    rain?: number;
    cloudCover?: number;
    airPressure?: number;
    locationStr: string;
  } | null>(null);

  const [greeting, setGreeting] = useState({ text: "Good Day", icon: "☀️" });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting({ text: "Good Morning", icon: "🌅" });
    else if (hour >= 12 && hour < 17) setGreeting({ text: "Good Afternoon", icon: "☀️" });
    else if (hour >= 17 && hour < 21) setGreeting({ text: "Good Evening", icon: "🌇" });
    else setGreeting({ text: "Good Night", icon: "🌙" });
  }, []);

  useEffect(() => {
    const fetchLocationAndWeather = async () => {
      try {
        const savedPrecise = localStorage.getItem("preciseWeather");
        if (savedPrecise) {
          const preciseData = JSON.parse(savedPrecise);
          setWeather(preciseData);
          return;
        }

        let lat = 28.6139;
        let lon = 77.209;
        let country = "India";

        try {
          const ipRes = await fetch("https://get.geojs.io/v1/ip/geo.json");
          const ipData = await ipRes.json();
          if (ipData.latitude && ipData.longitude) {
            lat = ipData.latitude;
            lon = ipData.longitude;
            country = ipData.country || "India";
          }
        } catch {
          // fallback default
        }

        const locationStr = country || "India";
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,wind_speed_10m,uv_index,precipitation,cloud_cover,surface_pressure`;
        const wRes = await fetch(weatherUrl);
        const wData = await wRes.json();

        setWeather({
          temp: wData.current?.temperature_2m ?? 24,
          humidity: wData.current?.relative_humidity_2m ?? 75,
          dewPoint: wData.current?.dew_point_2m ?? 18,
          windSpeed: wData.current?.wind_speed_10m ?? 8,
          uvIndex: wData.current?.uv_index ?? 4,
          rain: wData.current?.precipitation ?? 0,
          cloudCover: wData.current?.cloud_cover ?? 20,
          airPressure: wData.current?.surface_pressure ?? 1012,
          locationStr,
        });
      } catch (error) {
        console.error("Error fetching IP location or weather:", error);
      }
    };

    fetchLocationAndWeather();

    const handlePreciseUpdate = () => {
      const savedPrecise = localStorage.getItem("preciseWeather");
      if (savedPrecise) {
        setWeather(JSON.parse(savedPrecise));
        setSlideIndex(0);
      }
    };

    window.addEventListener("preciseWeatherUpdated", handlePreciseUpdate);
    return () => window.removeEventListener("preciseWeatherUpdated", handlePreciseUpdate);
  }, []);

  useEffect(() => {
    if (!weather) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [weather]);

  return (
    <div className="w-full bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-1.5 px-4 text-xs font-medium z-30 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 truncate">
          <span className="text-sm">{greeting.icon}</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            {greeting.text}!
          </span>
          <span className="hidden sm:inline text-slate-500 dark:text-slate-400">
            Welcome to Organic Mushrooms Farm
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
            <MapPin size={13} className="text-emerald-500" />
            <span>{weather?.locationStr || "India"}</span>
          </div>

          {weather && (
            <div className="h-5 overflow-hidden relative min-w-[120px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold"
                >
                  {slideIndex === 0 && (
                    <>
                      <CloudSun size={13} className="text-amber-500" />
                      <span>{Math.round(weather.temp ?? 24)}°C</span>
                    </>
                  )}
                  {slideIndex === 1 && (
                    <>
                      <Droplets size={13} className="text-blue-500" />
                      <span>{Math.round(weather.humidity ?? 75)}% Humidity</span>
                    </>
                  )}
                  {slideIndex === 2 && (
                    <>
                      <Wind size={13} className="text-cyan-500" />
                      <span>{Math.round(weather.windSpeed ?? 8)} km/h Wind</span>
                    </>
                  )}
                  {slideIndex === 3 && (
                    <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px] uppercase tracking-wider">
                      ● Live Climate
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicGreeting;
