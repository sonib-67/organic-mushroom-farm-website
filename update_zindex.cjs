const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const leftSearch = 'className={`floating-button-wrapper fixed left-3 md:left-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out ${mobileMenuOpen ? "bottom-[87vh] lg:bottom-[20px]" : "bottom-[65px] md:bottom-[20px]"}`}';
const leftReplace = 'className={`floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out ${mobileMenuOpen ? "bottom-[80vh] z-[1000000] lg:bottom-[20px] lg:z-[99999]" : "bottom-[65px] md:bottom-[20px] z-[99999]"}`}';
if(content.includes(leftSearch)){
  content = content.replace(leftSearch, leftReplace);
  console.log("Updated left wrapper!");
}

const navbarSearch = '<div className="lg:hidden p-4 overflow-y-auto no-scrollbar pb-24 h-full">';
const navbarReplace = '<div className="lg:hidden p-4 overflow-y-auto no-scrollbar pb-32 h-full">';
if(content.includes(navbarSearch)){
  content = content.replace(navbarSearch, navbarReplace);
  console.log("Updated navbar padding!");
}

fs.writeFileSync('src/App.tsx', content);
