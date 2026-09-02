"use client";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, useInView } from 'motion/react';
import { Zap, Waves, Info, TrendingUp } from 'lucide-react';

const Counter = ({
  value,
  duration = 1.5,
}: {
  value: string;
  duration?: number;
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      // Check if it's a number or a range
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      if (!isNaN(numericValue) && !value.includes("–")) {
        let start = 0;
        const end = numericValue;
        const totalFrames = Math.min(60, duration * 60);
        let frame = 0;

        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const current = Math.round(end * progress);

          if (frame === totalFrames) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            // Keep the prefix/suffix if it exists (like < 1000)
            const prefix = value.match(/^[^d]*/)?.[0] || "";
            setDisplayValue(`${prefix}${current}`);
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
      } else if (value.includes("–")) {
        // For ranges like 14–18, let's just fade it in or do a simpler animation
        setDisplayValue(value);
      } else {
        setDisplayValue(value);
      }
    }
  }, [value, isInView, duration]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 1, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-sm md:text-sm font-bold dark:text-white text-slate-900 tracking-tighter"
    >
      {displayValue}
    </motion.span>
  );
};

const CriticalParameters = () => {
  const params = [
    {
      label: "Production Temp",
      value: "14–18",
      unit: "°C",
      icon: Zap,
      color: "text-blue-400",
    },
    {
      label: "Air Humidity",
      value: "85–95",
      unit: "%",
      icon: Waves,
      color: "text-cyan-400",
    },
    {
      label: "CO₂ Level",
      value: "< 1000",
      unit: "ppm",
      icon: Info,
      color: "text-green-400",
    },
    {
      label: "Spawn Run Temp",
      value: "24–26",
      unit: "°C",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <div className="badge mx-auto mb-4">Precision Metrics</div>
          <h2 className="mb-4 text-[18px] md:text-xl uppercase tracking-tight">
            <Link to="/mushroom-types" className="hover:text-current transition-colors">
              Critical{" "}
              <span className="gradient-text">
                Parameters for High-Yield Production
              </span>
            </Link>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 text-[13px] md:text-sm">
            Scientific boundaries for consistent commercial yields in organic
            mushroom farming across India and USA.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {params.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ translateZ: 20 }}
              className="glass p-3 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group"
            >
              <div className="w-8 h-8 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:text-white transition-all">
                <p.icon size={22} className={p.color} />
              </div>
              <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">
                {p.label}
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <Counter value={p.value} />
                <span className="text-[14px] font-black text-slate-500">
                  {p.unit}
                </span>
              </div>
              <div className="mt-4 h-1 w-12 dark:bg-white/10 bg-black/10 rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className={`h-full bg-linear-to-r ${i % 2 === 0 ? "from-primary-start to-primary-mid" : "from-accent to-brand-purple"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriticalParameters;
