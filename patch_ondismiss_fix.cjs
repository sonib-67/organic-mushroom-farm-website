const fs = require('fs');

// Fix SiteVisitConsultationPage.tsx
let siteVisit = fs.readFileSync('src/pages/SiteVisitConsultationPage.tsx', 'utf8');
siteVisit = siteVisit.replace(
  /fetch\('\/api\/send-cancellation-email'[\s\S]*?\.catch\(console\.error\);/m,
  ""
);
fs.writeFileSync('src/pages/SiteVisitConsultationPage.tsx', siteVisit);

// Fix WorkshopPage.tsx
let workshop = fs.readFileSync('src/pages/WorkshopPage.tsx', 'utf8');
workshop = workshop.replace(
  /fetch\('\/api\/send-cancellation-email'[\s\S]*?\.catch\(console\.error\);/m,
  ""
);
fs.writeFileSync('src/pages/WorkshopPage.tsx', workshop);

