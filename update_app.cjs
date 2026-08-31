const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// replace the old component declaration
const oldBackgroundStr = `const Background3D = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="blob blob-1 absolute w-[600px] h-[600px] bg-primary-start/10 top-[-100px] left-[-100px] blur-[120px] rounded-full"></div>
    <div className="blob blob-2 absolute w-[500px] h-[500px] bg-accent/10 bottom-[-50px] right-[-100px] blur-[120px] rounded-full"></div>
    <div className="blob blob-1 absolute w-[400px] h-[400px] bg-primary-start/5 top-[40%] left-[20%] blur-[100px] rounded-full"></div>
  </div>
);`;
content = content.replace(oldBackgroundStr, '');

// import MyceliumBackground
if (!content.includes('import { MyceliumBackground }')) {
  content = content.replace('import DynamicGreeting from "./components/DynamicGreeting";', 'import DynamicGreeting from "./components/DynamicGreeting";\nimport { MyceliumBackground } from "./components/MyceliumBackground";');
}

// Replace in JSX
content = content.replace('<Background3D />', '<MyceliumBackground />');

fs.writeFileSync('src/App.tsx', content);
