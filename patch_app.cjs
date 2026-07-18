const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

const redirects = `
          {/* Legacy redirects */}
          <Route path="/cities" element={<Navigate to="/states" replace />} />
          <Route path="/project-specs" element={<Navigate to="/services/consultancy" replace />} />
          <Route path="/spawn-seeds" element={<Navigate to="/services/spawn-supply" replace />} />
          <Route path="/compost-unit" element={<Navigate to="/services/compost-production" replace />} />
          <Route path="/blog/mushroom-farming-training-online-offline-certificate" element={<Navigate to="/articles/mushroom-farming-training-online-offline-certificate" replace />} />
          <Route path="/blog/oyster-mushroom-cultivation-india" element={<Navigate to="/articles/oyster-mushroom-cultivation-india" replace />} />
          <Route path="/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026" element={<Navigate to="/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026" replace />} />
          <Route path="/blog/turnkey-commercial-setup" element={<Navigate to="/articles/turnkey-commercial-setup" replace />} />
          <Route path="/training/online" element={<Navigate to="/training" replace />} />
          <Route path="/training/offline" element={<Navigate to="/training" replace />} />
`;

appContent = appContent.replace('<Routes location={location}>', '<Routes location={location}>' + redirects);
fs.writeFileSync('src/App.tsx', appContent);
