import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const redirects = [
  { source: '/on-site-consultation', destination: '/site-visit-consultation' },
  { source: '/site-directory', destination: '/sitemap' },
  { source: '/mushroom-farming-guwahati-assam', destination: '/cities/assam/guwahati' },
  { source: '/mushroom-farming-mysuru-karnataka', destination: '/cities/karnataka/mysuru' },
  { source: '/mushroom-farming-mangalore-karnataka', destination: '/cities/karnataka/mangalore' },
  { source: '/mushroom-farming-thiruvananthapuram-kerala', destination: '/cities/kerala/thiruvananthapuram' },
  { source: '/mushroom-farming-thiruvananthapuram', destination: '/cities/kerala/thiruvananthapuram' },
  { source: '/mushroom-farming-madurai-tamil-nadu', destination: '/cities/tamil-nadu/madurai' },
  { source: '/mushroom-farming-madurai', destination: '/cities/tamil-nadu/madurai' },
  { source: '/mushroom-farming-nashik-maharashtra', destination: '/cities/maharashtra/nashik' },
  { source: '/mushroom-farming-dehradun-uttarakhand', destination: '/cities/uttarakhand/dehradun' },
  { source: '/mushroom-farming-dehradun', destination: '/cities/uttarakhand/dehradun' },
  { source: '/mushroom-farming-siliguri-west-bengal', destination: '/cities/west-bengal/siliguri' },
  { source: '/mushroom-farming-siliguri', destination: '/cities/west-bengal/siliguri' },
  { source: '/mushroom-farming-vadodara-gujarat', destination: '/cities/gujarat/vadodara' },
  { source: '/mushroom-farming-vadodara', destination: '/cities/gujarat/vadodara' },
  { source: '/mushroom-farming-amritsar-punjab', destination: '/cities/punjab/amritsar' },
  { source: '/mushroom-farming-amritsar', destination: '/cities/punjab/amritsar' },
  { source: '/mushroom-farming-bikaner-rajasthan', destination: '/cities/rajasthan/bikaner' },
  { source: '/mushroom-farming-bikaner', destination: '/cities/rajasthan/bikaner' },
  { source: '/mushroom-farming-udaipur-rajasthan', destination: '/cities/rajasthan/udaipur' },
  { source: '/mushroom-farming-udaipur', destination: '/cities/rajasthan/udaipur' }
];

for (const { source, destination } of redirects) {
  // Find the exact <Route path="source" element={<Component />} />
  const routeRegex = new RegExp(`<Route[\\s]+path="${source}"[\\s]+element=\\{<([^ \\/>]+)([^>]*)>\\}[\\s]*\\/>`, 'g');
  content = content.replace(routeRegex, `<Route path="${source}" element={<Navigate to="${destination}" replace />} />`);
}

// Ensure Navigate is imported
if (!content.includes('Navigate')) {
  content = content.replace('import { BrowserRouter as Router, Routes, Route', 'import { BrowserRouter as Router, Routes, Route, Navigate');
}

fs.writeFileSync('src/App.tsx', content, 'utf8');
