const fs = require('fs');
let content = fs.readFileSync('src/components/DynamicGreeting.tsx', 'utf8');

content = content.replace(
  "const slides = rawSlides.filter((slide): slide is { id: string, content: React.ReactNode } => slide !== null);",
  "const slides = rawSlides.filter((slide): slide is { id: string, content: any } => slide !== null);"
);

fs.writeFileSync('src/components/DynamicGreeting.tsx', content);
console.log("Patched DynamicGreeting.tsx");
