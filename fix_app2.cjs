const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
  /          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">\n\s*\{\n\s*type: "Seller",\n\s*title: "Fresh Organic Mushrooms",/,
  `          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2">
            {[
              {
                type: "Seller",
                title: "Fresh Organic Mushrooms",`
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
