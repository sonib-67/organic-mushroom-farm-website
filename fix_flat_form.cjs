const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

// 1. Remove motion imports
code = code.replace(/import { motion, AnimatePresence } from 'motion\/react';/g, '');
code = code.replace(/import { motion } from 'motion\/react';/g, '');

// 2. Remove accordion state
code = code.replace(/const \[activeAccordion, setActiveAccordion\] = useState<number \| null>\(1\);\n/g, '');
code = code.replace(/const toggleAccordion = \(index: number\) => {\n    setActiveAccordion\(activeAccordion === index \? null : index\);\n  };\n/g, '');

// 3. Remove auto-accordion triggers
code = code.replace(/setActiveAccordion\(\d+\);?/g, '');
code = code.replace(/if \(formData\.planTime\)/g, '');

// 4. Flatten the HTML by removing accordion wrappers.
// I will use regex or string replacement to replace all accordion logic.
// The accordion wrapper structure is:
// <div className="border dark:border-white/10 border-black/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-lg overflow-hidden">
//   <button ... onClick={() => toggleAccordion(X)} ...>...</button>
//   {activeAccordion === X && (
//     <div className="overflow-hidden animate-in fade-in duration-200">
//       <div className="p-2 border-t dark:border-white/10 border-black/10 space-y-2">
//         ... content ...
//       </div>
//     </div>
//   )}
// </div>

// First, strip all the wrapping logic.
// Because regex on HTML is tricky, let's just do a series of replaces.

for (let i = 1; i <= 10; i++) {
  // Remove the activeAccordion condition and wrappers
  const conditionStr = `{activeAccordion === ${i} && (`;
  code = code.replace(conditionStr, '');
  
  // Remove the animate-in div
  code = code.replace(/<div className="overflow-hidden animate-in fade-in duration-200">\s*<div className="p-2[^"]*">/, '<div className="space-y-2 mb-3">');
  
  // Remove the closing tags for the condition
  // It usually ends with:
  //       </div>
  //     </div>
  //   )}
  // </div>
  // Let's just find `)}` and remove it. But we need to be careful.
}

fs.writeFileSync('app/training/register/RegistrationClient.tsx', code);
