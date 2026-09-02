'use client';

import React from 'react';
import { motion } from 'motion/react';

interface BotAvatarProps {
  isAnimating: boolean;
}

export const BotAvatar: React.FC<BotAvatarProps> = ({ isAnimating }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl overflow-visible">
    <defs>
      <linearGradient id="nextHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="nextBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
      <radialGradient id="nextThrusterGrad">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Thruster / Hover Aura */}
    <motion.ellipse 
      cx="50" 
      cy="92" 
      rx="15" 
      ry="4" 
      fill="url(#nextThrusterGrad)"
      animate={isAnimating ? { scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] } : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: isAnimating ? 1 : 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "blur(2px)" }}
    />

    {/* Main Floating Group */}
    <motion.g 
      animate={isAnimating ? { y: [0, -5, 0] } : { y: [0, -3, 0], rotate: [0, -1, 1, 0] }}
      transition={{ duration: isAnimating ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Antenna Group */}
      <motion.g
        style={{ transformOrigin: "50px 20px" }}
        animate={isAnimating ? { rotate: [0, -15, 15, -10, 10, 0] } : { rotate: [0, -5, 5, 0] }}
        transition={{ duration: isAnimating ? 2 : 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna Stem */}
        <line x1="50" y1="20" x2="50" y2="4" stroke="#10b981" strokeWidth="3" />
        {/* Antenna Bulb */}
        <motion.circle 
          cx="50" 
          cy="4" 
          r="4.5" 
          fill="#10b981" 
          animate={{ fill: ["#10b981", "#fbbf24", "#38bdf8", "#10b981"], scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Body */}
      <motion.path 
        d="M 30 50 Q 50 60 70 50 L 75 75 Q 50 95 25 75 Z" 
        fill="url(#nextBodyGrad)"
        animate={isAnimating ? { scaleX: [1, 1.05, 1] } : { scaleX: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Chest Core Pulse */}
      <motion.circle 
        cx="50" 
        cy="65" 
        r="6" 
        fill="#ffffff" 
        opacity="0.8"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle cx="50" cy="65" r="3" fill="#38bdf8" />

      {/* Head Group */}
      <motion.g
        animate={isAnimating ? { rotate: [0, -8, 8, 0] } : { rotate: [0, 2, -2, 0] }}
        transition={{ duration: isAnimating ? 1.5 : 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50px 40px" }}
      >
        {/* Ears */}
        <motion.rect 
          x="15" 
          y="32" 
          width="6" 
          height="16" 
          rx="3" 
          fill="#0f172a" 
          animate={{ y: [0, -2, 0] }} 
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.rect 
          x="79" 
          y="32" 
          width="6" 
          height="16" 
          rx="3" 
          fill="#0f172a" 
          animate={{ y: [0, -2, 0] }} 
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Main Head Base */}
        <rect x="20" y="20" width="60" height="40" rx="20" fill="url(#nextHeadGrad)" />
        
        {/* Face Screen */}
        <rect x="25" y="30" width="50" height="20" rx="10" fill="#0f172a" />
        
        {/* Scanner Line */}
        <motion.line 
          x1="28" 
          y1="32" 
          x2="72" 
          y2="32" 
          stroke="#38bdf8" 
          strokeWidth="1" 
          opacity="0.6"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Eyes */}
        <motion.circle 
          cx="38" 
          cy="40" 
          r="4" 
          fill="#38bdf8" 
          animate={isAnimating ? { scaleY: [1, 0.2, 1], scaleX: [1, 1.2, 1] } : { scaleY: [1, 0, 1, 1, 1], cx: [38, 38, 35, 41, 38] }}
          transition={isAnimating ? { duration: 1, repeat: Infinity } : { duration: 6, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 1] }}
        />
        <motion.circle 
          cx="62" 
          cy="40" 
          r="4" 
          fill="#38bdf8" 
          animate={isAnimating ? { scaleY: [1, 0.2, 1], scaleX: [1, 1.2, 1] } : { scaleY: [1, 0, 1, 1, 1], cx: [62, 62, 59, 65, 62] }}
          transition={isAnimating ? { duration: 1, repeat: Infinity } : { duration: 6, repeat: Infinity, times: [0, 0.05, 0.1, 0.5, 1] }}
        />

        {/* Mouth / Lips */}
        <motion.rect
          x="44" 
          y="45" 
          width="12" 
          height="3" 
          rx="1.5" 
          fill="#38bdf8"
          style={{ transformOrigin: "50px 46.5px" }}
          animate={isAnimating ? { scaleY: [1, 2.5, 1, 1.8, 1], scaleX: [1, 0.8, 1, 0.9, 1] } : { scaleX: [1, 1.2, 1] }}
          transition={isAnimating ? { duration: 0.6, repeat: Infinity, ease: "easeInOut" } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.g>

      {/* Right Arm */}
      <motion.path 
        d="M 72 55 Q 85 60 80 75" 
        fill="none" 
        stroke="url(#nextBodyGrad)" 
        strokeWidth="8" 
        strokeLinecap="round" 
        style={{ transformOrigin: "72px 55px" }}
        animate={!isAnimating ? { rotate: [0, 8, -3, 0] } : { rotate: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Left Arm */}
      <motion.path 
        d="M 28 55 Q 15 60 20 75" 
        fill="none" 
        stroke="url(#nextBodyGrad)" 
        strokeWidth="8" 
        strokeLinecap="round"
        style={{ transformOrigin: "28px 55px" }}
        animate={!isAnimating ? { rotate: [0, -8, 3, 0] } : { rotate: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>
  </svg>
);
