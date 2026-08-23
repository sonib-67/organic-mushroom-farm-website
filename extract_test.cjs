const fs = require('fs');
const content = fs.readFileSync('src/pages/EquipmentCompleteListPage.tsx', 'utf8');

const match1 = content.match(/const equipmentData = (\[[\s\S]*?\]);\n\nconst expandedEquipmentData/);
const match2 = content.match(/const expandedEquipmentData = (\[[\s\S]*?\]);\n\nexport default/);

if (match1 && match2) {
  console.log("Found both matches!");
} else {
  console.log("Failed to match arrays.");
}
