const fs = require('fs');
let xml = fs.readFileSync('public/sitemap-main.xml', 'utf8');

// Regex to find <url> tags that don't have a <loc> tag
const emptyUrlRegex = /<url>(?:(?!<loc>).)*?<\/url>\n?/gs;

xml = xml.replace(emptyUrlRegex, '');

fs.writeFileSync('public/sitemap-main.xml', xml, 'utf8');
