const fs = require('fs');
let content = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf8');
content = content.replace(
/Pay & Join Now <ArrowRight/g,
`<span>Pay & Join Now</span> <ArrowRight`
);
content = content.replace(
/Pay & Join Now - ₹199 <ArrowRight/g,
`<span>Pay & Join Now - ₹199</span> <ArrowRight`
);
content = content.replace(
/>\s*Join Workshop Now\s*<\/button>/g,
`><span>Join Workshop Now</span></button>`
);
fs.writeFileSync('src/pages/WorkshopPage.tsx', content);
