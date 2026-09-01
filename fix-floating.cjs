const fs = require('fs');
let code = fs.readFileSync('src/app/components/NextFloatingButtons.tsx', 'utf8');
let button = fs.readFileSync('sticky-button-temp.tsx', 'utf8');

// Remove import of StickyRazorpayButton
code = code.replace(/import StickyRazorpayButton.*\n/, '');

// Add lucide icons
code = code.replace(/import { MessageCircle, Phone, ArrowUp } from 'lucide-react';/, 
  "import { MessageCircle, Phone, ArrowUp, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Home, Sparkles, TrendingUp, X } from 'lucide-react';");

// Insert button code before NextFloatingButtons
code = code.replace(/const FloatingButtons = \(\) => {/, button + '\n\nconst FloatingButtons = () => {');

// Fix any react-router-dom Links in button
button = button.replace(/<Link\s+to=/g, '<Link href=');

fs.writeFileSync('src/app/components/NextFloatingButtons.tsx', code);
