const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

const componentMap = {
  "/cities": "<StatesPage />",
  "/project-specs": "<ServiceDetailPage defaultId='consultancy' />",
  "/spawn-seeds": "<ServiceDetailPage defaultId='spawn-supply' />",
  "/compost-unit": "<ServiceDetailPage defaultId='compost-production' />",
  "/blog/mushroom-farming-training-online-offline-certificate": "<ArticleTrainingOnlineOffline />",
  "/blog/oyster-mushroom-cultivation-india": "<ArticleOysterCultivation />",
  "/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026": "<ArticleGharParMushroomFarming />",
  "/blog/turnkey-commercial-setup": "<ArticleTurnkeyCommercialSetup />",
  "/training/online": "<TrainingPage />",
  "/training/offline": "<TrainingPage />",
  "/site-visit-consultation": "<SiteVisitConsultationPage />",
  "/services/milky-mushroom": "<MushroomTypeDetails defaultSlug='milky-mushroom' />",
  "/services/turnkey-setup": "<ServiceDetailPage defaultId='consultancy' />",
  "/services/oyster-mushroom": "<MushroomTypeDetails defaultSlug='oyster-mushroom' />",
  "/services/button-mushroom": "<MushroomTypeDetails defaultSlug='button-mushroom' />",
  "/articles/oyster-mushroom-cultivation-process": "<ArticleOysterCultivation />",
  "/articles/white-button-mushroom-business-plan": "<ArticleBusinessPlanIndia />",
  "/operations": "<PanIndiaOperations />"
};

for (const [path, comp] of Object.entries(componentMap)) {
    // Some routes might already be added as <Route path="..." element={<comp />} /> by the previous script
    // So let's just do a clean replace for ALL of them. We'll search for <Route path="..." ... /> and replace it.
    const regexStr = `<Route[\\s]*path="${path.replace(/\\/g, '\\\\')}"[\\s]*element=\\{[^}]+\\}[\\s]*(?:\\/|><\\/Route)>`;
    const regex = new RegExp(regexStr, 'g');
    if (appContent.match(regex)) {
        appContent = appContent.replace(regex, `<Route path="${path}" element={${comp}} />`);
    } else {
        const toInsert = `          <Route path="${path}" element={${comp}} />\n`;
        appContent = appContent.replace('{/* Legacy redirects */}', '{/* Legacy redirects */}\n' + toInsert);
    }
}

fs.writeFileSync('src/App.tsx', appContent);
