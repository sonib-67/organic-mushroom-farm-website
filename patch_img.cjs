const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleSanDiegoMushroomFarming.tsx', 'utf8');

// Add import
if (!content.includes("framer-motion")) {
  content = content.replace(
    "import { Link } from 'react-router-dom';",
    "import { Link } from 'react-router-dom';\nimport { motion } from 'framer-motion';"
  );
}

// Add image
const imgHTML = `          
          <motion.figure 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <img 
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/v1788101706/san-diego-indoor-mushroom-farming-guide_tqx7v1.webp" 
              alt="Indoor mushroom farming setup in San Diego County with climate-controlled growing racks" 
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <figcaption className="mt-3 text-center text-xs md:text-sm text-slate-500 dark:text-slate-400 italic">
              A climate-controlled indoor mushroom farm setup designed for commercial mushroom cultivation in San Diego County.
            </figcaption>
          </motion.figure>
          
`;

content = content.replace(
  '<div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">',
  imgHTML + '<div className="text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed">'
);

fs.writeFileSync('src/pages/ArticleSanDiegoMushroomFarming.tsx', content);
