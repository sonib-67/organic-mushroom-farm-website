const fs = require('fs');

const code = fs.readFileSync('src/App.tsx', 'utf8');

const getComponent = (name) => {
  const startRegex = new RegExp(`^const ${name} = \\(\\) => {`, 'm');
  const match = code.match(startRegex);
  if (!match) return '';
  const startIndex = match.index;
  
  let openBraces = 0;
  let i = startIndex;
  let started = false;
  
  while (i < code.length) {
    if (code[i] === '{') {
      openBraces++;
      started = true;
    } else if (code[i] === '}') {
      openBraces--;
    }
    
    i++;
    
    if (started && openBraces === 0) {
      break;
    }
  }
  
  let compCode = code.substring(startIndex, i);
  // Add a trailing semicolon if missing
  if (!compCode.endsWith(';')) compCode += ';';
  
  // Replace react-router-dom Link with next/link
  compCode = compCode.replace(/<Link\s+to=/g, '<Link href=');
  return compCode;
};

const componentsToExtract = [
  'Hero',
  'EcosystemFlow',
  'WhyChooseUs',
  'FarmingModels',
  'MushroomComparison',
  'ROICalculator',
  'CriticalParameters',
  'ProductionSOP',
  'ComparisonTable',
  'CTASection',
  'StatesSection',
  'HomePage'
];

let extractedCode = `
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Menu, X, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Youtube, 
  Send, CheckCircle2, TrendingUp, Users, Sprout, ShieldCheck, Calculator, 
  BookOpen, Clock, ShoppingCart, Award, ArrowRight, ExternalLink, ChevronDown, 
  ChevronUp, MessageCircle, MapPin, Briefcase, Play, Download, Layers, Shield, 
  Zap, Info, Quote, Home, Waves, Calendar, Globe, Sparkles, ArrowLeft, Images
} from 'lucide-react';
`;

// Add imports that might be needed
const neededImportsRegex = /import\s+[^'"]+\s+from\s+['"][^'"]+['"];/g;
const imports = code.match(neededImportsRegex);
const externalImports = imports.filter(i => !i.includes('./') && !i.includes('react-router-dom') && !i.includes('lucide-react') && !i.includes('motion'));
// We only want a few specific internal imports
extractedCode += `import SEO from '../../src/components/SEO';\n`;
extractedCode += `import MushroomSEOSections from '../../src/components/MushroomSEOSections';\n`;

for (const comp of componentsToExtract) {
  extractedCode += '\n\n' + getComponent(comp);
}

extractedCode += '\n\nexport default HomePage;\n';

fs.writeFileSync('src/app/page.next.tsx', extractedCode);
console.log('Extracted Home components!');
