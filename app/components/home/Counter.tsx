'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface CounterProps {
  value: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ value, duration = 1.5 }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
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
            const prefix = value.match(/^[^\d]*/)?.[0] || "";
            setDisplayValue(`${prefix}${current}`);
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
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
