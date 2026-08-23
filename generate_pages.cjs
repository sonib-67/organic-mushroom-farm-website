const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/pages/EquipmentCompleteListPage.tsx', 'utf8');

const match1 = content.match(/const equipmentData = (\[[\s\S]*?\]);\n\nconst expandedEquipmentData/);
const match2 = content.match(/const expandedEquipmentData = (\[[\s\S]*?\]);\n/); 

if (!match1 || !match2) {
  console.error("Failed to match arrays.");
  process.exit(1);
}

const equipmentData = eval(match1[1]);
const expandedEquipmentData = eval(match2[1]);

const outDir = path.join(__dirname, 'src', 'pages', 'equipment-directory');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const mainPagesInfo = [
  { file: 'MachineryDirectoryPage.tsx', route: 'machinery', title: 'Machinery Directory' },
  { file: 'EquipmentDirectoryPage.tsx', route: 'equipment', title: 'Equipment Directory' },
  { file: 'SafetyDirectoryPage.tsx', route: 'safety', title: 'Safety Material Directory' }
];

mainPagesInfo.forEach((info, idx) => {
  const data = equipmentData[idx];
  const displayTitle = data.title.replace(/SECTION [0-9]+: /, '');
  
  let jsx = `import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ${info.file.replace('.tsx', '')}() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="${displayTitle} | Organic Mushrooms Farm" description="Detailed list of ${displayTitle.toLowerCase()} for commercial mushroom farming." />
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          ${displayTitle}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Comprehensive directory covering all scale-wise requirements for ${displayTitle.toLowerCase()}.
        </p>
        <div className="space-y-8 md:space-y-12">
`;

  data.subcategories.forEach(sec => {
    jsx += `
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">${sec.title}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/80">
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Machinery/Equipment</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
`;
    sec.items.forEach(item => {
      jsx += `
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">${item.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">${item.use}</td>
                  </tr>`;
    });
    jsx += `
                </tbody>
              </table>
            </div>
          </div>`;
  });

  jsx += `
        </div>
      </main>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(outDir, info.file), jsx);
});

// Generate 18 sub pages
const expandedPagesInfo = [
  { file: 'InfrastructurePage.tsx', route: 'infrastructure', name: 'InfrastructurePage' },
  { file: 'RawMaterialPage.tsx', route: 'raw-material', name: 'RawMaterialPage' },
  { file: 'SubstratePrepPage.tsx', route: 'substrate-preparation', name: 'SubstratePrepPage' },
  { file: 'CompostUnitPage.tsx', route: 'compost-unit', name: 'CompostUnitPage' },
  { file: 'SpawnProductionPage.tsx', route: 'spawn-production', name: 'SpawnProductionPage' },
  { file: 'LaboratoryPage.tsx', route: 'laboratory', name: 'LaboratoryPage' },
  { file: 'ClimateControlPage.tsx', route: 'climate-control', name: 'ClimateControlPage' },
  { file: 'VentilationPage.tsx', route: 'ventilation', name: 'VentilationPage' },
  { file: 'WaterManagementPage.tsx', route: 'water-management', name: 'WaterManagementPage' },
  { file: 'HarvestPostHarvestPage.tsx', route: 'harvest-post-harvest', name: 'HarvestPostHarvestPage' },
  { file: 'ColdChainPage.tsx', route: 'cold-chain', name: 'ColdChainPage' },
  { file: 'ProcessingPage.tsx', route: 'processing', name: 'ProcessingPage' },
  { file: 'MaterialHandlingPage.tsx', route: 'material-handling', name: 'MaterialHandlingPage' },
  { file: 'ElectricalPowerPage.tsx', route: 'electrical-power', name: 'ElectricalPowerPage' },
  { file: 'CleaningBiosecurityPage.tsx', route: 'cleaning-biosecurity', name: 'CleaningBiosecurityPage' },
  { file: 'QualityControlPage.tsx', route: 'quality-control', name: 'QualityControlPage' },
  { file: 'SafetyAdditionalPage.tsx', route: 'safety-additional', name: 'SafetyAdditionalPage' },
  { file: 'WasteManagementPage.tsx', route: 'waste-management', name: 'WasteManagementPage' },
];

expandedEquipmentData.forEach((section, idx) => {
  const info = expandedPagesInfo[idx];
  const displayTitle = section.title.replace(/^[0-9]+\.\s*/, '');
  let jsx = `import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ${info.name}() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <SEO title="${displayTitle} | Organic Mushrooms Farm" description="Detailed equipment list for ${displayTitle}." />
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <Link to="/equipment/complete-list" className="text-primary-start hover:underline mb-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Complete List
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          ${displayTitle}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-12">
          Specialized directory detailing all necessary equipment and materials for ${displayTitle}.
        </p>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">Equipment & Working Process</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80">
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Equipment</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Working Process / Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
`;
  section.items.forEach(item => {
    jsx += `
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20">
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">${item.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-400 align-top">${item.use}</td>
                </tr>`;
  });
  jsx += `
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(outDir, info.file), jsx);
});

console.log("Files generated successfully!");
