const fs = require('fs');
const path = require('path');

let appTsxPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf-8');

// Find all routes mapped to the same component
let routeMatches = [...content.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z0-9_]+)\s*\/>\}\s*\/>/g)];

let componentRoutes = {};
routeMatches.forEach(match => {
    let routePath = match[1];
    let component = match[2];
    if (!componentRoutes[component]) {
        componentRoutes[component] = [];
    }
    componentRoutes[component].push(routePath);
});

let replacements = 0;
for (let comp in componentRoutes) {
    let routes = componentRoutes[comp];
    if (routes.length > 1) {
        // Decide canonical: usually the one starting with /cities/ or /locations/ or /states/ or /articles/
        let canonical = routes.find(r => r.startsWith('/cities/') || r.startsWith('/locations/') || r.startsWith('/states/') || r.startsWith('/articles/')) || routes[0];
        
        // For non-canonical routes, change element to <Navigate to="canonical" replace />
        routes.forEach(r => {
            if (r !== canonical) {
                let badRouteRegex = new RegExp(`<Route\\s+path="${r.replace(/\//g, '\\/')}"\\s+element=\\{<${comp}\\s*\\/>\\}\\s*\\/>`, 'g');
                content = content.replace(badRouteRegex, `<Route path="${r}" element={<Navigate to="${canonical}" replace />} />`);
                replacements++;
            }
        });
    }
}

if (replacements > 0) {
    fs.writeFileSync(appTsxPath, content);
    console.log(`Replaced ${replacements} duplicate routes with redirects in App.tsx`);
} else {
    console.log("No duplicate routes found.");
}
