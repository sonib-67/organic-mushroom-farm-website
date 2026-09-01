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
  if (!compCode.endsWith(';')) compCode += ';';
  
  compCode = compCode.replace(/<Link\s+to=/g, '<Link href=');
  return compCode;
};

const pages = {
  'GalleryPage': 'src/app/gallery',
  'FAQPage': 'src/app/faq',
  'TermsOfServicePage': 'src/app/terms',
  'PrivacyPolicyPage': 'src/app/privacy',
  'RefundPolicyPage': 'src/app/refund',
  'ShippingPolicyPage': 'src/app/shipping',
  'CustomerSupportPage': 'src/app/support'
};

const baseImports = `
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Images, Camera, Play, Video, ArrowRight, X, ZoomIn, Info, HelpCircle, 
  ChevronDown, MessageCircle, FileText, Scale, Shield, AlertCircle, Phone, 
  Mail, MapPin, Search, Plus
} from 'lucide-react';
import SEO from '../../components/SEO';
import MushroomSEOSections from '../../components/MushroomSEOSections';
`;

for (const [compName, outDir] of Object.entries(pages)) {
  const compCode = getComponent(compName);
  if (compCode) {
    fs.mkdirSync(outDir, { recursive: true });
    // Use proper absolute paths for imports
    let finalCode = baseImports;
    if (compName === 'FAQPage' || compName === 'GalleryPage') {
       finalCode = finalCode.replace(/SEO from '\.\.\/\.\.\/components\/SEO'/g, "SEO from '../../src/components/SEO'");
       finalCode = finalCode.replace(/MushroomSEOSections from '\.\.\/\.\.\/components\/MushroomSEOSections'/g, "MushroomSEOSections from '../../src/components/MushroomSEOSections'");
    }
    
    fs.writeFileSync(`${outDir}/page.next.tsx`, finalCode + '\n' + compCode + `\n\nexport default ${compName};\n`);
    console.log(`Extracted ${compName}`);
  }
}
