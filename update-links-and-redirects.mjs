import fs from 'fs';
import path from 'path';

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

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      for (const { source, destination } of redirects) {
        // Replace exact link matches: to="/source" -> to="/destination"
        const linkRegex = new RegExp(`to="${source}"`, 'g');
        if (linkRegex.test(content)) {
          content = content.replace(linkRegex, `to="${destination}"`);
          changed = true;
          console.log(`Updated link ${source} to ${destination} in ${fullPath}`);
        }

        // Replace canonical / SEO URL matches
        const urlRegex = new RegExp(`url="${source}"`, 'g');
        if (urlRegex.test(content)) {
          content = content.replace(urlRegex, `url="${destination}"`);
          changed = true;
          console.log(`Updated URL ${source} to ${destination} in ${fullPath}`);
        }
        
        // Match specific string literal
        const stringRegex = new RegExp(`"${source}"`, 'g');
        if (stringRegex.test(content)) {
          // Careful not to replace inside App.tsx Route definitions for source yet
          if (!fullPath.includes('App.tsx') && !fullPath.includes('evaluate-duplicates.mjs') && !fullPath.includes('update-links')) {
            content = content.replace(stringRegex, `"${destination}"`);
            changed = true;
            console.log(`Updated string literal ${source} to ${destination} in ${fullPath}`);
          }
        }
        
        // Also check template literals with /mushroom-farming-...
        // Wait, some links in SitemapPage.tsx are `to={\`/mushroom-farming-\${city.slug}\`}`
        // If city.slug maps to these, we should fix the city.slug in locationsData.ts or the sitemap logic.
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDirectory('src');
