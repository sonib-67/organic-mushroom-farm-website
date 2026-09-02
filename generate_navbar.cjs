const fs = require('fs');

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');

const extract = (regex, defaultVal = '') => {
  const match = appTsx.match(regex);
  return match ? match[1] : defaultVal;
};

let navItems = extract(/(const NAV_ITEMS = \[[\s\S]*?\];)/);
let navbarCode = extract(/(const Navbar = \(\) => \{[\s\S]*?<\/nav>\s*\{.*?Mobile Menu Overlay.*?<\/AnimatePresence>\s*)/);
if(!navbarCode) {
    console.log("Could not extract Navbar");
    process.exit(1);
}
navbarCode += '\n    </>\n  );\n};';

let pinterest = extract(/(const PinterestIcon = [\s\S]*?<\/svg>\n\);)/);
let telegram = extract(/(const TelegramIcon = [\s\S]*?<\/svg>\n\);)/);
let quora = extract(/(const QuoraIcon = [\s\S]*?<\/svg>\n\);)/);

// Clean up react router stuff
navbarCode = navbarCode.replace(/<Link/g, '<NextLink');
navbarCode = navbarCode.replace(/<\/Link>/g, '</NextLink>');
navbarCode = navbarCode.replace(/to=\{/g, 'href={');
navbarCode = navbarCode.replace(/to="/g, 'href="');

// Fix `location` usage
navbarCode = navbarCode.replace(/location\.pathname/g, 'pathname');
navbarCode = navbarCode.replace(/location\.hash/g, "''"); // Next.js doesn't expose hash easily in server, we just use pathname for now. Or we can just mock hash.
// Actually, activeSection depends on hash. We'll leave it as `const hash = isHashLink ? item.href.split("#")[1] : null;`
// And `location.pathname` becomes `pathname`

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

// Insert the pathname hook at the beginning of Navbar
fullFile = fullFile.replace('const Navbar = () => {', 'const Navbar = () => {\n  const pathname = usePathname();');
fullFile = fullFile.replace(/location\.pathname/g, 'pathname');
fullFile = fullFile.replace(/location\.hash/g, '""'); // Mock location.hash as empty string since we don't have it easily in Next.js router hook.
fullFile = fullFile.replace(/window\.location\.hash/g, '""');

fs.writeFileSync('app/components/Navbar.tsx', fullFile);
console.log("Navbar written.");
