import fs from 'fs';

let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const mappingString = `
  const customCityUrls: Record<string, string> = {
    "guwahati": "/cities/assam/guwahati",
    "mysuru": "/cities/karnataka/mysuru",
    "mangalore": "/cities/karnataka/mangalore",
    "thiruvananthapuram": "/cities/kerala/thiruvananthapuram",
    "madurai": "/cities/tamil-nadu/madurai",
    "nashik": "/cities/maharashtra/nashik",
    "dehradun": "/cities/uttarakhand/dehradun",
    "siliguri": "/cities/west-bengal/siliguri",
    "vadodara": "/cities/gujarat/vadodara",
    "amritsar": "/cities/punjab/amritsar",
    "bikaner": "/cities/rajasthan/bikaner",
    "udaipur": "/cities/rajasthan/udaipur"
  };
`;

// Insert the mapping string inside the SitemapPage component
content = content.replace('const SitemapPage = () => {', 'const SitemapPage = () => {\n' + mappingString);

// Find where city.slug is used
// to={`/mushroom-farming-${city.slug}`}
// Replace with: to={customCityUrls[city.slug] || `/mushroom-farming-${city.slug}`}
content = content.replace(/to=\{\`\/mushroom-farming-\$\{city.slug\}\`\}/g, 'to={customCityUrls[city.slug] || `/mushroom-farming-${city.slug}`}');

// Also do it for state if there's any? The aliases don't include state.
fs.writeFileSync('src/pages/SitemapPage.tsx', content, 'utf8');
