import fs from 'fs';
import path from 'path';

// Define the locations manually here to avoid module resolution issues
const STATES = [
  "Andhra_Pradesh", "Arunachal_Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal_Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya_Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil_Nadu", "Telangana", "Tripura", "Uttar_Pradesh", "Uttarakhand", "West_Bengal", "Andaman_and_Nicobar_Islands", "Chandigarh", "Delhi", "Jammu_and_Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const CITIES = [
  "Visakhapatnam", "Vijayawada", "Guntur", "Itanagar", "Guwahati", "Patna", "Gaya", "Raipur", "Bhilai", "Panaji", "Ahmedabad", "Surat", "Vadodara", "Faridabad", "Gurugram", "Shimla", "Ranchi", "Jamshedpur", "Bengaluru", "Mysuru", "Kochi", "Thiruvananthapuram", "Bhopal", "Indore", "Jabalpur", "Mumbai", "Pune", "Nagpur", "Imphal", "Shillong", "Aizawl", "Kohima", "Bhubaneswar", "Cuttack", "Ludhiana", "Amritsar", "Jaipur", "Jodhpur", "Gangtok", "Chennai", "Coimbatore", "Hyderabad", "Warangal", "Agartala", "Lucknow", "Kanpur", "Varanasi", "Dehradun", "Kolkata", "Howrah", "Katangi"
];

const VILLAGES = [
  "Lepakshi", "Majuli", "Bodh_Gaya", "Chitrakote", "Aldona", "Gir_Forest", "Kurukshetra", "Malana", "Hampi", "Kumarakom", "Khajuraho", "Shani_Shingnapur", "Loktak_Lake", "Mawlynnong", "Dzukou", "Konark", "Anandpur_Sahib", "Sambhar_Lake", "Yuksom", "Mahabalipuram", "Ramappa", "Neermahal", "Vrindavan", "Shantiniketan"
];

const ALL_LOCATIONS = [
  ...STATES,
  ...CITIES,
  ...VILLAGES
].map(l => l.toLowerCase().replace(/_/g, '-'));

const extraPages = [
  '/careers',
  '/mushroom-price-today',
  '/mushroom-franchise'
];

const dynamicTemplates = [
  '/careers-',
  '/mushroom-training-',
  '/mushroom-farming-',
  '/mushroom-franchise-'
];

let generatedUrls = '';

const dateInfo = new Date().toISOString().split('T')[0];

extraPages.forEach(page => {
  generatedUrls += `
  <url>
    <loc>https://www.organicmushroomfarm.shop${page}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`;
});

ALL_LOCATIONS.forEach(loc => {
  dynamicTemplates.forEach(template => {
    generatedUrls += `
  <url>
    <loc>https://www.organicmushroomfarm.shop${template}${loc}</loc>
    <lastmod>${dateInfo}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.60</priority>
  </url>`;
  });
});

const sitemapPath = path.resolve('./public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

sitemapContent = sitemapContent.replace('</urlset>', `${generatedUrls}\n</urlset>`);
fs.writeFileSync(sitemapPath, sitemapContent);
console.log('Sitemap successfully updated with dynamic location pages.');
