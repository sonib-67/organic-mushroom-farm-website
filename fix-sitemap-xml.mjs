import fs from 'fs';

const redirects = [
  '/on-site-consultation',
  '/site-directory',
  '/mushroom-farming-guwahati-assam',
  '/mushroom-farming-mysuru-karnataka',
  '/mushroom-farming-mangalore-karnataka',
  '/mushroom-farming-thiruvananthapuram-kerala',
  '/mushroom-farming-thiruvananthapuram',
  '/mushroom-farming-madurai-tamil-nadu',
  '/mushroom-farming-madurai',
  '/mushroom-farming-nashik-maharashtra',
  '/mushroom-farming-dehradun-uttarakhand',
  '/mushroom-farming-dehradun',
  '/mushroom-farming-siliguri-west-bengal',
  '/mushroom-farming-siliguri',
  '/mushroom-farming-vadodara-gujarat',
  '/mushroom-farming-vadodara',
  '/mushroom-farming-amritsar-punjab',
  '/mushroom-farming-amritsar',
  '/mushroom-farming-bikaner-rajasthan',
  '/mushroom-farming-bikaner',
  '/mushroom-farming-udaipur-rajasthan',
  '/mushroom-farming-udaipur'
];

let content = fs.readFileSync('public/sitemap-main.xml', 'utf8');

for (const alias of redirects) {
  const aliasTag = `<loc>https://organicmushroomfarm.shop${alias}</loc>`;
  // Remove the entire line containing the alias tag
  const regex = new RegExp(`[ \\t]*<url>\\s*<loc>https://organicmushroomfarm\\.shop${alias}</loc>\\s*</url>\\n?`, 'g');
  content = content.replace(regex, '');
  
  // Try simpler regex if it's not wrapped exactly like that
  const simplerRegex = new RegExp(`\\s*<loc>https://organicmushroomfarm\\.shop${alias}</loc>\\s*`, 'g');
  content = content.replace(simplerRegex, '');
}

fs.writeFileSync('public/sitemap-main.xml', content, 'utf8');
