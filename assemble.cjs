const fs = require('fs');

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');

const extract = (regex, defaultVal = '') => {
  const match = appTsx.match(regex);
  return match ? match[1] : defaultVal;
};

let navItems = extract(/(const NAV_ITEMS = \[[\s\S]*?\];)/);
let pinterest = extract(/(const PinterestIcon = [\s\S]*?<\/svg>\n\);)/);
let telegram = extract(/(const TelegramIcon = [\s\S]*?<\/svg>\n\);)/);
let quora = extract(/(const QuoraIcon = [\s\S]*?<\/svg>\n\);)/);

let navbarCode = fs.readFileSync('nav_debug.txt', 'utf8');

// Replace Router Link
navbarCode = navbarCode.replace(/<Link/g, '<NextLink');
navbarCode = navbarCode.replace(/<\/Link>/g, '</NextLink>');
navbarCode = navbarCode.replace(/to=\{/g, 'href={');
navbarCode = navbarCode.replace(/to="/g, 'href="');

let fullFile = `"use client";
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Instagram, Twitter, Linkedin, Facebook, Youtube, 
  Home, Info, Award, Zap, BookOpen, Layers, ShieldCheck, Calendar, Images, MapPin, MessageCircle, ChevronDown
} from 'lucide-react';
import DynamicGreeting from './DynamicGreeting';

${pinterest}
${telegram}
${quora}

${navItems}

${navbarCode}

export default Navbar;
`;

fullFile = fullFile.replace('const Navbar = () => {', 'const Navbar = () => {\n  const pathname = usePathname();\n  const location = { pathname, hash: "" };');

fs.writeFileSync('app/components/Navbar.tsx', fullFile);
console.log("Navbar assembled.");
