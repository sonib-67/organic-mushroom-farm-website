const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');
content = content.replace(
  /  \},\s*\{\s*name: "Compost Production"/,
  `  },
  {
    name: "Services",
    isExternal: false,
    icon: BookOpen, // fallback icon
    subMenu: [
      { name: "Compost Production"`
);

fs.writeFileSync('src/App.tsx', content, 'utf8');
