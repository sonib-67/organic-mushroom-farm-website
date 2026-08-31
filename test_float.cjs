const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Right Side
const rightSearch = '<div className="floating-button-wrapper fixed right-3 md:right-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[65px] md:bottom-[20px]">';
const rightReplace = '<div className={`floating-button-wrapper fixed right-3 md:right-[30px] z-[99999] flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[65px] md:bottom-[20px] ${mobileMenuOpen ? "hidden lg:flex" : "flex"}`}>';
if (content.includes(rightSearch)) {
  content = content.replace(rightSearch, rightReplace);
  console.log("Right side replaced!");
} else {
  console.log("Right side not found!");
}

// Left Side
const leftSearch1 = 'className={`floating-button-wrapper fixed left-3 md:left-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px]`}\n      >';
const leftReplace1 = 'className={`floating-button-wrapper fixed left-3 md:left-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out ${mobileMenuOpen ? "bottom-[87vh] lg:bottom-[20px]" : "bottom-[65px] md:bottom-[20px]"}`}\n      >';
if (content.includes(leftSearch1)) {
  content = content.replace(leftSearch1, leftReplace1);
  console.log("Left side wrapper replaced!");
} else {
  console.log("Left side wrapper not found!");
}

const leftSearch2 = '<div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">';
const leftReplace2 = '<div className={`flex-col gap-1.5 md:gap-3 items-start pointer-events-auto ${mobileMenuOpen ? "hidden lg:flex" : "flex"}`}>';
if (content.includes(leftSearch2)) {
  content = content.replace(leftSearch2, leftReplace2);
  console.log("Left side CTA replaced!");
} else {
  console.log("Left side CTA not found!");
}

fs.writeFileSync('src/App.tsx', content);
