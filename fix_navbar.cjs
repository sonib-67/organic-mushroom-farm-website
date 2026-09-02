const fs = require('fs');

let navbarCode = fs.readFileSync('app/components/Navbar.tsx', 'utf8');

// The original code had `const location = useLocation();` inside `Navbar`. We need to remove it because we already declared `const location = { pathname, hash: "" };`
navbarCode = navbarCode.replace(/const location = useLocation\(\);/g, '');

fs.writeFileSync('app/components/Navbar.tsx', navbarCode);
console.log("Navbar fixed.");
