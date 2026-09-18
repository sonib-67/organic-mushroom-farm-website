const fs = require('fs');

const origLayout = fs.readFileSync('app/layout.tsx', 'utf8');
fs.writeFileSync('app/layout.tsx.backup', origLayout);

const minimalLayout = `
import "@/app/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`;

fs.writeFileSync('app/layout.tsx', minimalLayout);
console.log('Created minimal layout');
