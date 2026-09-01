const fs = require('fs');

function convertComponent(inputFile, outputFile, importsToAdd) {
  let code = fs.readFileSync(inputFile, 'utf-8');
  
  // Replace react-router-dom Link usage
  code = code.replace(/<Link\s+to=/g, '<Link href=');
  code = code.replace(/const location = useLocation\(\);/g, 'const pathname = usePathname();');
  code = code.replace(/location\.pathname/g, 'pathname');

  // Add necessary imports
  let finalCode = `'use client';\n\n`;
  finalCode += `import React, { useState, useEffect } from 'react';\n`;
  finalCode += `import Link from 'next/link';\n`;
  finalCode += `import { usePathname } from 'next/navigation';\n`;
  finalCode += `import { motion, AnimatePresence } from 'motion/react';\n`;
  finalCode += importsToAdd + '\n';
  finalCode += `import DynamicGreeting from '../../src/components/DynamicGreeting';\n\n`;
  finalCode += code;
  finalCode += `\nexport default ${code.match(/const (\w+) =/)[1]};\n`;

  fs.writeFileSync(outputFile, finalCode);
}

const navbarImports = `import { Menu, X, ChevronDown, Phone, MapPin, ExternalLink, MessageCircle, Mail } from 'lucide-react';`;
convertComponent('next-navbar-temp.tsx', 'app/components/NextNavbar.tsx', navbarImports);

const footerImports = `import { Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Youtube, Send, MapPin, ExternalLink, ChevronDown } from 'lucide-react';`;
convertComponent('next-footer-temp.tsx', 'app/components/NextFooter.tsx', footerImports);

const floatingImports = `import { MessageCircle, Phone, ArrowUp } from 'lucide-react';\nimport StickyRazorpayButton from '../../src/components/StickyRazorpayButton';`;
convertComponent('next-floating-temp.tsx', 'app/components/NextFloatingButtons.tsx', floatingImports);

console.log('Components converted!');
