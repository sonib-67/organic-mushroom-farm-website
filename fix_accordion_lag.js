const fs = require('fs');

const filePath = 'app/training/register/RegistrationClient.tsx';
let code = fs.readFileSync(filePath, 'utf8');

// Replace the accordion motion divs completely with simple divs.
// Instead of a global replace that might break the success screen, we target the specific string
const motionStr = "<motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className=\"overflow-hidden\">";

code = code.split(motionStr).join('<div className="overflow-hidden animate-in fade-in duration-200">');

// We need to replace the corresponding closing tags. 
// But how do we distinguish `</motion.div>` for accordions from `</motion.div>` for the success screen?
// Actually, I can just replace `AnimatePresence` wrapper.
code = code.split('<AnimatePresence>').join('');
code = code.split('</AnimatePresence>').join('');

// For the `</motion.div>`:
// Each accordion block looks like:
// {activeAccordion === 1 && (
//   <div className="overflow-hidden animate-in fade-in duration-200">
//     <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-4">
//       ...
//     </div>
//   </motion.div>
// )}

// We can replace `</motion.div>\n              )}` with `</div>\n              )}`
code = code.replace(/<\/motion\.div>\s*\)\}/g, '</div>\n              )}');

fs.writeFileSync(filePath, code);
