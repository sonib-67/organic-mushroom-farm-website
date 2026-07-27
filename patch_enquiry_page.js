const fs = require('fs');
let content = fs.readFileSync('src/pages/EnquiryPage.tsx', 'utf8');

const targetStr = `<select required name="mushroom_variety" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Variety</option>
                            {varieties.map(v => <option key={v} value={v}>{v}</option>)}
                          </select>`;

const newStr = `<select required name="mushroom_variety" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/20 focus:border-primary-start">
                            <option value="">Select Variety</option>
                            {varieties.map(v => <option key={v} value={v}>{v}</option>)}
                            <option value="Multiple Varieties">Multiple Varieties / All Varieties</option>
                          </select>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, newStr); // this replaces the first occurrence? Wait, there are multiple matches for targetStr.
}

// Better to use regex for spawn form specifically.
