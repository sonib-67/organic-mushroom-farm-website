const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// I need to check where `mobileMenuOpen` is used.
// If the floating buttons are at the bottom of Navbar, it's fine.
// But if they are at the bottom of `App`, `mobileMenuOpen` is not defined!
