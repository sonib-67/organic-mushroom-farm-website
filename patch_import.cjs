const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf8');

if (!code.includes('getDoc,')) {
  code = code.replace(
    'getDocs, query, where } from "firebase/firestore";',
    'getDocs, getDoc, query, where } from "firebase/firestore";'
  );
  fs.writeFileSync('server.ts', code);
}
