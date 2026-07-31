const fs = require('fs');

let seoContent = fs.readFileSync('src/utils/seoSchemas.ts', 'utf8');
seoContent = seoContent.replace(
  /export const SOCIAL_PROFILES = \[\n  "https:\/\/www.instagram.com\/organic_mushroom_farm_jabalpur",\n  "https:\/\/www.facebook.com\/organic.mushroom.farm0",\n  "https:\/\/www.youtube.com\/@organicmushroomfarm",\n  "https:\/\/www.pinterest.com\/organicmushroomfarm",\n  "https:\/\/www.linkedin.com\/in\/organic-mushroom-farm-29b970282\?utm_source=share_via&utm_content=profile&utm_medium=member_android",\n  "https:\/\/www.quora.com\/profile\/Organic-Mushroom-Farm-1\?ch=10&oid=3146591367&share=4e39c3cd&srid=5xCPIb&target_type=user",\n  "https:\/\/x.com\/mushroomfarmjbp"\n\];/,
  \`export const SOCIAL_PROFILES = [
  "https://www.instagram.com/organic_mushroom_farm_jabalpur",
  "https://www.facebook.com/organic.mushroom.farm0",
  "https://www.youtube.com/@organicmushroomfarm",
  "https://www.pinterest.com/organicmushroomfarm",
  "https://www.linkedin.com/in/organic-mushroom-farm-29b970282?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  "https://www.quora.com/profile/Organic-Mushroom-Farm-1?ch=10&oid=3146591367&share=4e39c3cd&srid=5xCPIb&target_type=user",
  "https://x.com/mushroomfarmjbp",
  "https://t.me/organicmushroomfarms"
];\`
);
fs.writeFileSync('src/utils/seoSchemas.ts', seoContent);

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(
  /              \{\n                label: "Twitter",\n                href: "https:\/\/x.com\/mushroomfarmjbp",\n              \},/,
  \`              {
                label: "Twitter",
                href: "https://x.com/mushroomfarmjbp",
              },
              {
                label: "Telegram",
                href: "https://t.me/organicmushroomfarms",
              },\`
);
fs.writeFileSync('src/App.tsx', appContent);
