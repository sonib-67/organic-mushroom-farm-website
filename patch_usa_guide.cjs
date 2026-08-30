const fs = require('fs');
let content = fs.readFileSync('src/pages/MushroomFarmingUsaGuide.tsx', 'utf8');

const newLink = `
              <li className="border-b border-slate-100 dark:border-slate-700 pb-6 last:border-0 last:pb-0">
                <Link 
                  to="/mushroom-farming-san-diego" 
                  className="group flex flex-col no-underline"
                >
                  <span className="text-sm md:text-lg font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-2">
                    Starting an Indoor Mushroom Farm in San Diego
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    Learn how to set up a low-cost, high-yield indoor mushroom grow room tailored to Southern California's unique climate.
                  </span>
                </Link>
              </li>
`;

content = content.replace("</ul>", newLink + "            </ul>");
fs.writeFileSync('src/pages/MushroomFarmingUsaGuide.tsx', content);
