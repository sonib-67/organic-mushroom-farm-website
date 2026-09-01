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
  
  // Replace react-router-dom Link with next/link
  compCode = compCode.replace(/<Link\s+to=/g, '<Link href=');
  return compCode;
};

const pages = {
  'MushroomTraining': 'src/app/mushroom-training',
  'ServicesPage': 'src/app/services',
  'TurnkeyProjectsPage': 'src/app/turnkey-projects',
  'AboutPage': 'src/app/about'
};

const baseImports = `
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, Users, Target, BookOpen, ExternalLink, Calendar,
  ArrowRight, ShieldCheck, MapPin, Play, Leaf, Award, Briefcase, Zap, Layers,
  Phone, Mail, MessageCircle, Star, Sparkles, Sprout
} from 'lucide-react';
import SEO from '../../src/components/SEO';
import MushroomSEOSections from '../../src/components/MushroomSEOSections';
`;

for (const [compName, outDir] of Object.entries(pages)) {
  const compCode = getComponent(compName);
  if (compCode) {
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(`${outDir}/page.next.tsx`, baseImports + '\n' + compCode + `\n\nexport default ${compName};\n`);
    console.log(`Extracted ${compName}`);
  } else {
    console.log(`Could not find ${compName}`);
  }
}
