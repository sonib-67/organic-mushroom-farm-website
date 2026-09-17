const fs = require('fs');

const filePath = 'app/training/register/RegistrationClient.tsx';
let code = fs.readFileSync(filePath, 'utf8');

const motionStr = "<motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className=\"overflow-hidden\">";

code = code.split(motionStr).join('<div className="overflow-hidden animate-in fade-in duration-200">');

code = code.split('<AnimatePresence>').join('');
code = code.split('</AnimatePresence>').join('');

code = code.replace(/<\/motion\.div>\s*\)\}/g, '</div>\n              )}');

fs.writeFileSync(filePath, code);
