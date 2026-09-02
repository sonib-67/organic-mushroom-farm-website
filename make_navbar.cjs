const fs = require('fs');

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');

let navItemsMatch = appTsx.match(/(const NAV_ITEMS = \[[\s\S]*?\];)/);
let navItems = navItemsMatch ? navItemsMatch[1] : '';

let navbarMatch = appTsx.match(/(const Navbar = \(\) => \{[\s\S]*?<\/nav>\s*\{.*?Mobile Menu Overlay.*?<\/AnimatePresence>\s*)/);
let navbarCode = navbarMatch ? navbarMatch[1] : '';

if(!navbarCode) {
    console.log("Could not extract Navbar");
    process.exit(1);
}

// Ensure the Navbar component closes properly
// The regex above stops at </AnimatePresence>. We need to add `</>\n  );\n};` to close the React Fragment and the function.
navbarCode += '\n    </>\n  );\n};';

// Let's replace react-router-dom Link with next/link
navbarCode = navbarCode.replace(/<Link\s+to=/g, '<Link href=');
navbarCode = navbarCode.replace(/<\/Link>/g, '</Link>');
navbarCode = navbarCode.replace(/location\.pathname/g, 'pathname');
navbarCode = navbarCode.replace(/location\.hash/g, 'hash');
// also `activeSection` state might be missing. We need to check if activeSection is in Navbar or global.
// Wait, `activeSection` is not defined in Navbar! It's in App.tsx!

fs.writeFileSync('nav_debug.txt', navbarCode);
