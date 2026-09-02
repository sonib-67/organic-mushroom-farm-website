const fs = require('fs');
let code = fs.readFileSync('app/components/home/MushroomSEOSections.tsx', 'utf-8');
code = code.replace(/import \{ Link \} from 'react-router-dom';/g, "import Link from 'next/link';");
code = code.replace(/import \{ Link \} from "react-router-dom";/g, "import Link from 'next/link';");
fs.writeFileSync('app/components/home/MushroomSEOSections.tsx', code);
