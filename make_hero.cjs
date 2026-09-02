const fs = require('fs');
let heroCode = fs.readFileSync('/tmp/hero.txt', 'utf8');

// React Router to Next.js conversions
heroCode = heroCode.replace(/<Link/g, '<NextLink');
heroCode = heroCode.replace(/<\/Link>/g, '</NextLink>');
heroCode = heroCode.replace(/to=\{/g, 'href={');
heroCode = heroCode.replace(/to="/g, 'href="');
heroCode = heroCode.replace(/CheckCircle2/g, 'CheckCircle');

let fullFile = `"use client";
import React from 'react';
import NextLink from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle, ShieldCheck, Layers, TrendingUp, Zap } from 'lucide-react';

${heroCode}

export default Hero;
`;

fs.writeFileSync('app/components/home/Hero.tsx', fullFile);
console.log("Hero component fixed.");
