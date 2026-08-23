const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

if (!content.includes('import TestPaymentPage')) {
  // Find last import
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.slice(0, insertIndex) + 'import TestPaymentPage from "./pages/TestPaymentPage";\n' + content.slice(insertIndex);
}

if (!content.includes('<Route path="/test-payment"')) {
  // Find <Routes location={location}>
  const routesIndex = content.indexOf('<Routes location={location}>');
  const insertIndex = content.indexOf('>', routesIndex) + 1;
  content = content.slice(0, insertIndex) + '\n          <Route path="/test-payment" element={<TestPaymentPage />} />' + content.slice(insertIndex);
}

if (!content.includes('name: "Test ₹1"')) {
  // Add to NAV_ITEMS
  // const NAV_ITEMS = [ ... ];
  // Find the end of NAV_ITEMS
  const navItemsStart = content.indexOf('const NAV_ITEMS = [');
  // It's a bit tricky, let's just insert before the final closing brace of NAV_ITEMS if possible.
  // Wait, I can search for "name: "Contact"" or something and insert after.
}

fs.writeFileSync('src/App.tsx', content, 'utf8');
