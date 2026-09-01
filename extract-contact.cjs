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

let extractedCode = `
'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import SEO from '../../src/components/SEO';

`;

extractedCode += getComponent('LegacyContactPage');
extractedCode += '\n\nexport default LegacyContactPage;\n';

fs.mkdirSync('src/app/contact', { recursive: true });
fs.writeFileSync('src/app/contact/page.next.tsx', extractedCode);
console.log('Extracted Contact page!');
