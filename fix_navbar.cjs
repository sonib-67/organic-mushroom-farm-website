const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldStr = 'className={`floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out ${mobileMenuOpen ? "bottom-[80vh] z-[1000000] lg:bottom-[20px] lg:z-[99999]" : "bottom-[65px] md:bottom-[20px] z-[99999]"}`}';
const newStr = 'className={`floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none transition-all duration-300 ease-out ${mobileMenuOpen ? "bottom-[calc(100vh-130px)] z-[1000000] lg:bottom-[20px] lg:z-[99999]" : "bottom-[65px] md:bottom-[20px] z-[99999]"}`}';
content = content.replace(oldStr, newStr);

fs.writeFileSync('src/App.tsx', content);
