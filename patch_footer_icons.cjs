const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const customIcons = `
const PinterestIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5-.1-1.3-.1-3.3.1-4.7l1.7-7.2s-.4-1-.4-2.4c0-2.3 1.3-4 3-4 1.4 0 2.1 1.1 2.1 2.4 0 1.4-.9 3.6-1.4 5.6-.4 1.7.8 3.1 2.4 3.1 2.9 0 5-3.5 5-7.9 0-3.5-2.4-6-6.4-6-4.5 0-7.3 3.3-7.3 7 0 1.3.4 2.3 1 3 .1.1.1.3 0 .5l-.3 1.3c-.1.2-.2.3-.5.1-1.4-.7-2-2.3-2-3.8 0-3.3 2.6-7.4 8.4-7.4 4.7 0 7.9 3.4 7.9 7.4 0 4.9-2.8 8.6-6.9 8.6-1.3 0-2.6-.7-3-1.6l-.8 3.3c-.3 1.1-.9 2.2-1.4 3C10.5 21.9 11.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
  </svg>
);

const TelegramIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17 7.5a2.25 2.25 0 0 0-.126 4.095l4.762 1.49 11.082-9.66-8.995 10.155v4.542c0 .88.583 1.135 1.053 1.25.467.114 1.178-.052 1.545-.417l3.29-3.213 5.424 4.004a2.25 2.25 0 0 0 3.524-1.282l3.414-16.5a2.25 2.25 0 0 0-2.951-2.18z" />
  </svg>
);

const QuoraIcon = ({ size = 24, color = "currentColor", strokeWidth = 2, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM14.9 14.2c.4 1 1.7 3.3 3.1 3.3M9.7 13.9C8 12.8 7 11 7 9.1c0-3.3 2.2-5.1 5-5.1s5 1.8 5 5.1c0 2-1 3.9-2.8 5l-4.5 3.1" />
  </svg>
);
`;

code = code.replace('const App = () => {', customIcons + '\n\nconst App = () => {');
fs.writeFileSync('src/App.tsx', code);
console.log('Icons inserted into file');
