const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// A function to replace a specific regex pattern with a replacement
function replaceAll(regex, replacement) {
  content = content.replace(regex, replacement);
}

// Global text size reductions
replaceAll(/\btext-5xl\b/g, 'text-3xl');
replaceAll(/\btext-4xl\b/g, 'text-2xl');
replaceAll(/\btext-3xl\b/g, 'text-xl');
replaceAll(/\btext-2xl\b/g, 'text-lg');
replaceAll(/\bmd:text-5xl\b/g, 'md:text-3xl');
replaceAll(/\blg:text-5xl\b/g, 'lg:text-3xl');
replaceAll(/\bmd:text-4xl\b/g, 'md:text-2xl');
replaceAll(/\blg:text-4xl\b/g, 'lg:text-2xl');
replaceAll(/\bmd:text-3xl\b/g, 'md:text-xl');
replaceAll(/\blg:text-3xl\b/g, 'lg:text-xl');
replaceAll(/\btext-\[1\.5rem\]\b/g, 'text-lg');

// Text sizing for paragraphs and small items
replaceAll(/\btext-base\b/g, 'text-sm');
replaceAll(/\bmd:text-base\b/g, 'md:text-sm');
replaceAll(/\btext-lg\b/g, 'text-sm');
replaceAll(/\bmd:text-lg\b/g, 'md:text-sm');

// Button & Padding sizes
replaceAll(/\bpx-10\b/g, 'px-6');
replaceAll(/\bpx-8\b/g, 'px-5');
replaceAll(/\bpy-6\b/g, 'py-3');
replaceAll(/\bpy-4\b/g, 'py-2');
replaceAll(/\bmd:py-5\b/g, 'md:py-3');
replaceAll(/\bpy-3\.5\b/g, 'py-2');
replaceAll(/\bpy-3\b/g, 'py-2');
replaceAll(/\bp-8\b/g, 'p-5');
replaceAll(/\bp-6\b/g, 'p-4');
replaceAll(/\bp-5\b/g, 'p-3');
replaceAll(/\bp-4\b/g, 'p-3');
replaceAll(/\bmin-h-\[50px\]\b/g, 'min-h-[38px]');
replaceAll(/\bmin-h-\[44px\]\b/g, 'min-h-[34px]');

// Icons and specific structural sizes
replaceAll(/\bw-12 h-12\b/g, 'w-8 h-8');
replaceAll(/\bh-16 w-16\b/g, 'h-10 w-10');

// Gaps and margins
replaceAll(/\bmb-12\b/g, 'mb-8');
replaceAll(/\bmb-16\b/g, 'mb-10');
replaceAll(/\bmd:mb-16\b/g, 'md:mb-10');
replaceAll(/\bmb-10\b/g, 'mb-6');
replaceAll(/\bmb-8\b/g, 'mb-5');
replaceAll(/\bgap-12\b/g, 'gap-6');
replaceAll(/\bgap-8\b/g, 'gap-5');
replaceAll(/\bgap-10\b/g, 'gap-6');
replaceAll(/\bmd:gap-16\b/g, 'md:gap-8');
replaceAll(/\bmd:gap-12\b/g, 'md:gap-6');
replaceAll(/\bgap-y-12\b/g, 'gap-y-6');

fs.writeFileSync('src/App.tsx', content);
console.log('Replacements done!');
