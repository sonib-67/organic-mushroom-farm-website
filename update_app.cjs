const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const imports = `import MachineryDirectoryPage from './pages/equipment-directory/MachineryDirectoryPage';
import EquipmentDirectoryPage from './pages/equipment-directory/EquipmentDirectoryPage';
import SafetyDirectoryPage from './pages/equipment-directory/SafetyDirectoryPage';
import InfrastructurePage from './pages/equipment-directory/InfrastructurePage';
import RawMaterialPage from './pages/equipment-directory/RawMaterialPage';
import SubstratePrepPage from './pages/equipment-directory/SubstratePrepPage';
import CompostUnitPage from './pages/equipment-directory/CompostUnitPage';
import SpawnProductionPage from './pages/equipment-directory/SpawnProductionPage';
import LaboratoryPage from './pages/equipment-directory/LaboratoryPage';
import ClimateControlPage from './pages/equipment-directory/ClimateControlPage';
import VentilationPage from './pages/equipment-directory/VentilationPage';
import WaterManagementPage from './pages/equipment-directory/WaterManagementPage';
import HarvestPostHarvestPage from './pages/equipment-directory/HarvestPostHarvestPage';
import ColdChainPage from './pages/equipment-directory/ColdChainPage';
import ProcessingPage from './pages/equipment-directory/ProcessingPage';
import MaterialHandlingPage from './pages/equipment-directory/MaterialHandlingPage';
import ElectricalPowerPage from './pages/equipment-directory/ElectricalPowerPage';
import CleaningBiosecurityPage from './pages/equipment-directory/CleaningBiosecurityPage';
import QualityControlPage from './pages/equipment-directory/QualityControlPage';
import SafetyAdditionalPage from './pages/equipment-directory/SafetyAdditionalPage';
import WasteManagementPage from './pages/equipment-directory/WasteManagementPage';
`;

const routes = `          <Route path="/equipment/complete-list/machinery" element={<MachineryDirectoryPage />} />
          <Route path="/equipment/complete-list/equipment" element={<EquipmentDirectoryPage />} />
          <Route path="/equipment/complete-list/safety" element={<SafetyDirectoryPage />} />
          <Route path="/equipment/complete-list/infrastructure" element={<InfrastructurePage />} />
          <Route path="/equipment/complete-list/raw-material" element={<RawMaterialPage />} />
          <Route path="/equipment/complete-list/substrate-preparation" element={<SubstratePrepPage />} />
          <Route path="/equipment/complete-list/compost-unit" element={<CompostUnitPage />} />
          <Route path="/equipment/complete-list/spawn-production" element={<SpawnProductionPage />} />
          <Route path="/equipment/complete-list/laboratory" element={<LaboratoryPage />} />
          <Route path="/equipment/complete-list/climate-control" element={<ClimateControlPage />} />
          <Route path="/equipment/complete-list/ventilation" element={<VentilationPage />} />
          <Route path="/equipment/complete-list/water-management" element={<WaterManagementPage />} />
          <Route path="/equipment/complete-list/harvest-post-harvest" element={<HarvestPostHarvestPage />} />
          <Route path="/equipment/complete-list/cold-chain" element={<ColdChainPage />} />
          <Route path="/equipment/complete-list/processing" element={<ProcessingPage />} />
          <Route path="/equipment/complete-list/material-handling" element={<MaterialHandlingPage />} />
          <Route path="/equipment/complete-list/electrical-power" element={<ElectricalPowerPage />} />
          <Route path="/equipment/complete-list/cleaning-biosecurity" element={<CleaningBiosecurityPage />} />
          <Route path="/equipment/complete-list/quality-control" element={<QualityControlPage />} />
          <Route path="/equipment/complete-list/safety-additional" element={<SafetyAdditionalPage />} />
          <Route path="/equipment/complete-list/waste-management" element={<WasteManagementPage />} />
`;

content = content.replace('import EquipmentCompleteListPage from "./pages/EquipmentCompleteListPage";', 'import EquipmentCompleteListPage from "./pages/EquipmentCompleteListPage";\n' + imports);
content = content.replace('<Route path="/equipment/complete-list" element={<EquipmentCompleteListPage />} />', '<Route path="/equipment/complete-list" element={<EquipmentCompleteListPage />} />\n' + routes);

fs.writeFileSync('src/App.tsx', content, 'utf8');
console.log("App.tsx updated");
