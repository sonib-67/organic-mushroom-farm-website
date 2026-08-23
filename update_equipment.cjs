const fs = require('fs');
const file = 'src/pages/EquipmentCompleteListPage.tsx';
let content = fs.readFileSync(file, 'utf8');

const expandedData = `\nconst expandedEquipmentData = [
  {
    title: "1. Farm Infrastructure & Growing Room",
    items: [
      { name: "PUF/PPGL Insulated Wall & Ceiling Panels", use: "Insulates growing rooms to maintain stable temperature and reduce energy loss" },
      { name: "Insulated/Airlock Doors", use: "Seals room entry points to stop temperature/humidity leakage and contamination" },
      { name: "Air Shower", use: "Blasts filtered air on workers before room entry to remove surface contaminants" },
      { name: "Air Curtain", use: "Creates an air barrier at doorways to block dust, insects and outside air" },
      { name: "Hygienic Washable Flooring", use: "Provides a smooth, non-porous surface that can be fully washed and disinfected" },
      { name: "Floor Drainage Channels", use: "Channels wash-water and spillage out of growing rooms to keep floors dry" },
      { name: "Multi-Tier Growing Racks", use: "Stacks growing beds/bags vertically to maximize production per square foot" },
      { name: "Movable Racking System", use: "Allows racks to be relocated for flexible room layout and easy cleaning" },
      { name: "Rack Trolley", use: "Moves loaded racks/trays between rooms without manual lifting" },
      { name: "Hanging/Rope Support System", use: "Suspends grow bags vertically to save floor space and improve airflow" },
      { name: "Clean Room", use: "Provides a sterile, filtered-air zone for spawning and sensitive operations" },
      { name: "Service Corridor", use: "Connects growing rooms for staff and material movement without cross-contamination" },
      { name: "Raw Material Storage Racks", use: "Stores incoming raw materials in an organized, elevated, pest-free manner" },
      { name: "Finished Product Storage Racks", use: "Holds packed mushroom products safely before dispatch" },
      { name: "Dispatch Staging Area", use: "Temporary holding zone where packed orders are staged before loading for delivery" }
    ]
  },
  {
    title: "2. Raw Material & Grain Handling",
    items: [
      { name: "Grain Cleaner", use: "Removes dust, husk and foreign matter from grain before spawn production" },
      { name: "Grain Grader", use: "Separates grain by size to ensure uniform spawn colonization" },
      { name: "Grain Sieving Machine", use: "Screens grain to remove broken pieces and impurities" },
      { name: "Grain Washer", use: "Washes grain thoroughly to remove surface contamination before cooking" },
      { name: "Grain Dryer", use: "Reduces grain moisture to the correct level before sterilization" },
      { name: "Grain Storage Bin", use: "Stores cleaned grain safely, protected from moisture and pests" },
      { name: "Grain Silo", use: "Holds bulk grain for large-scale, continuous spawn production" },
      { name: "Grain Hopper", use: "Feeds grain into processing machines at a controlled, steady rate" },
      { name: "Raw Material Hopper", use: "Feeds raw substrate materials into mixing or shredding lines" },
      { name: "Belt Conveyor", use: "Transports raw material or grain between processing stations" },
      { name: "Screw Conveyor", use: "Moves bulk material horizontally/vertically through enclosed tubing" },
      { name: "Material Transfer Trolley", use: "Manually moves raw material batches between departments" },
      { name: "Pallets", use: "Supports bulk storage and safe forklift/trolley handling of materials" }
    ]
  },
  {
    title: "3. Substrate Preparation",
    items: [
      { name: "Pre-Wetting Tank", use: "Soaks raw substrate (straw etc.) to reach optimal moisture before composting" },
      { name: "Pre-Wetting Spray Line", use: "Sprays water evenly over substrate for consistent pre-wetting" },
      { name: "Substrate Moisture Meter", use: "Measures substrate moisture % to ensure correct hydration levels" },
      { name: "Substrate Screening/Sieving Machine", use: "Removes oversized particles and debris from prepared substrate" },
      { name: "Substrate Cooling System", use: "Cools hot substrate quickly after pasteurization to safe spawning temperature" },
      { name: "Substrate Transfer Conveyor", use: "Carries prepared substrate from mixing to bagging/filling stations" },
      { name: "Bag Loading Conveyor", use: "Feeds substrate directly into bags during automated filling" }
    ]
  },
  {
    title: "4. Compost Unit",
    items: [
      { name: "Compost Feeding Hopper", use: "Feeds raw compost material into mixers or conveyors at a steady rate" },
      { name: "Compost Transfer Conveyor", use: "Moves compost between turning, filling and tunnel stages" },
      { name: "Compost Elevator", use: "Lifts compost vertically into bunkers, tunnels or filling machines" },
      { name: "Aeration Blower", use: "Pumps controlled air into compost piles/tunnels for oxygen supply" },
      { name: "Aeration Pipes", use: "Distributes forced air evenly through the compost mass" },
      { name: "Air Diffusers/Spigots", use: "Releases air uniformly from pipes into the compost bed" },
      { name: "Aeration Ducting", use: "Channels air from blowers to aeration pipes across the tunnel/bunker" },
      { name: "Tunnel Winch", use: "Mechanically pulls filling equipment or covers across the tunnel" },
      { name: "Tunnel Filling Cassette", use: "Loads and levels compost evenly inside the tunnel" },
      { name: "Compost Temperature Probe System", use: "Continuously monitors internal compost temperature during composting" },
      { name: "Compost Moisture Meter", use: "Checks compost moisture levels to keep conditions ideal for pasteurization" },
      { name: "Filtered Fresh-Air Intake", use: "Draws outside air through filters into the tunnel/bunker system" },
      { name: "Recirculation Air System", use: "Reuses conditioned air inside the tunnel to save energy and maintain climate" },
      { name: "Motorized Air Dampers", use: "Automatically adjusts airflow direction and volume in ducting" },
      { name: "Casing Soil Mixer", use: "Blends casing soil ingredients into a uniform mixture" },
      { name: "Casing Soil Pasteurization Chamber", use: "Heat-treats casing soil to kill pests/pathogens before use" },
      { name: "Casing Soil Storage Hopper", use: "Stores prepared casing soil ready for spreading on beds" }
    ]
  },
  {
    title: "5. Spawn Production — Additional",
    items: [
      { name: "Grain Cleaner", use: "Cleans grain before it is cooked for spawn preparation" },
      { name: "Grain Mixer", use: "Mixes grain with supplements/nutrients before sterilization" },
      { name: "Bulk Spawn Incubator", use: "Provides controlled temperature for large batches of spawn to colonize" },
      { name: "Spawn Incubation Racks", use: "Holds spawn bottles/bags in organized rows during incubation" },
      { name: "Culture Bottle Washer", use: "Cleans and sanitizes culture bottles for reuse" },
      { name: "Spawn Storage Cold Room", use: "Stores finished spawn at low temperature to preserve viability" },
      { name: "Liquid Culture Tank", use: "Grows and stores liquid mycelium culture in bulk" },
      { name: "Liquid Culture Mixing System", use: "Mixes nutrient media evenly for liquid culture preparation" },
      { name: "Sterile Transfer Cart", use: "Moves sterilized materials between clean areas without contamination" }
    ]
  },
  {
    title: "6. Laboratory",
    items: [
      { name: "Hot Air Oven", use: "Dry-sterilizes glassware and heat-stable lab tools" },
      { name: "BOD Incubator", use: "Maintains precise temperature for culture growth studies" },
      { name: "Precision/Sensitive Balance", use: "Weighs lab ingredients and samples with high accuracy" },
      { name: "pH Meter", use: "Measures acidity/alkalinity of culture media and water" },
      { name: "Deep Freezer", use: "Stores culture stocks and samples at sub-zero temperatures long-term" },
      { name: "Distilled Water Unit", use: "Produces pure water for media preparation and lab use" },
      { name: "RO Water Purifier", use: "Filters water to remove minerals/contaminants for lab and process use" },
      { name: "Laboratory Refrigerator", use: "Stores media, reagents and cultures at controlled cool temperature" },
      { name: "Media Preparation Vessel", use: "Used to prepare and sterilize agar/nutrient media in bulk" },
      { name: "Culture Storage Cabinet", use: "Organizes and protects stored culture slants and stocks" },
      { name: "Glassware Washing Station", use: "Cleans lab glassware thoroughly before sterilization" },
      { name: "UV Sterilization Unit", use: "Uses UV light to disinfect surfaces and reduce airborne contamination" },
      { name: "Clean-Room HEPA Filtration", use: "Filters incoming air to remove contaminants from the lab environment" },
      { name: "Positive-Pressure System", use: "Keeps clean room air pressure higher than outside to prevent contaminant entry" },
      { name: "Laboratory Gas Stove/Burner", use: "Provides open flame for flame-sterilizing tools during transfers" }
    ]
  },
  {
    title: "7. Climate Control",
    items: [
      { name: "Dehumidifier", use: "Removes excess moisture from growing room air" },
      { name: "Heating System/Hot-Air Heater", use: "Raises room temperature during cold weather for optimal growth" },
      { name: "Humidity Controller", use: "Automatically maintains target humidity levels in growing rooms" },
      { name: "Temperature Controller/Thermostat", use: "Regulates room temperature within the ideal growth range" },
      { name: "Cooling Coil", use: "Removes heat from circulating air to cool the growing room" },
      { name: "Heating Coil", use: "Adds heat to circulating air to warm the growing room" },
      { name: "Remote Climate Monitoring System", use: "Lets operators check room conditions remotely via app/software" },
      { name: "Environmental Data Logger", use: "Records temperature, humidity and CO2 data over time for analysis" },
      { name: "Automatic Alarm System", use: "Alerts staff when climate parameters go outside safe limits" },
      { name: "Stage-Based Climate Controller", use: "Automatically adjusts climate settings for each growth stage (spawning, pinning, fruiting)" },
      { name: "Room Differential Pressure Sensor", use: "Monitors pressure difference between rooms to control airflow direction" },
      { name: "Airflow Sensor", use: "Measures air velocity to ensure correct ventilation rates" }
    ]
  },
  {
    title: "8. Ventilation & Air Management",
    items: [
      { name: "Fresh-Air Blower", use: "Pushes outside fresh air into growing rooms for gas exchange" },
      { name: "Return-Air Duct", use: "Carries used room air back to the air handling unit" },
      { name: "Fresh-Air Duct", use: "Delivers filtered fresh air into growing rooms" },
      { name: "Pre-Filter", use: "Captures large dust particles before finer filtration" },
      { name: "HEPA/Fine Air Filter", use: "Removes fine particles and spores from incoming air" },
      { name: "Motorized Damper", use: "Automatically regulates airflow volume through ducts" },
      { name: "Airflow Sensor", use: "Detects air speed to maintain consistent ventilation" },
      { name: "Differential Pressure Sensor", use: "Tracks pressure changes across filters and rooms" },
      { name: "Positive-Pressure System", use: "Maintains clean-to-dirty airflow direction to prevent contamination" },
      { name: "Air Balancing/Duct Control System", use: "Balances airflow evenly across multiple rooms/zones" }
    ]
  },
  {
    title: "9. Water Management",
    items: [
      { name: "Water Storage Tank", use: "Stores water reserves for farm-wide daily use" },
      { name: "Water Pump", use: "Moves water from source/storage to point of use" },
      { name: "Pressure Pump", use: "Boosts water pressure for spraying and cleaning systems" },
      { name: "RO Plant", use: "Removes dissolved impurities to produce clean process water" },
      { name: "UV Water Sterilizer", use: "Uses UV light to kill bacteria/pathogens in water" },
      { name: "Water Softener", use: "Removes hardness minerals to protect equipment and improve water quality" },
      { name: "Water Filtration Unit", use: "Filters out sediments and particles from water supply" },
      { name: "Water Chiller", use: "Cools water used for spraying or process cooling" },
      { name: "Automatic Dosing Pump", use: "Injects precise chemical/nutrient doses into water lines" },
      { name: "Water Pressure Controller", use: "Maintains consistent pressure across the water distribution system" },
      { name: "Water Flow Meter", use: "Measures water usage/flow rate for monitoring and control" },
      { name: "TDS Meter", use: "Checks total dissolved solids in water for quality control" },
      { name: "EC Meter", use: "Measures water's electrical conductivity to assess nutrient/salt content" },
      { name: "Water Quality Testing Kit", use: "Field-tests water for pH, chlorine and contamination levels" },
      { name: "Spray Nozzles", use: "Distributes fine water mist evenly for humidity/casing watering" },
      { name: "Misting Pipeline", use: "Carries water to spray nozzles across the growing room" },
      { name: "Drainage Channels", use: "Removes excess water and runoff from growing/processing areas" },
      { name: "Effluent Collection Tank", use: "Collects wastewater before treatment or disposal" }
    ]
  },
  {
    title: "10. Harvest & Post-Harvest — Additional",
    items: [
      { name: "Harvesting Knives", use: "Cuts mushrooms cleanly from the growing bed during harvest" },
      { name: "Harvesting Scissors", use: "Trims mushroom stems precisely during picking" },
      { name: "Food-Grade Harvest Crates", use: "Collects and transports harvested mushrooms hygienically" },
      { name: "Stainless-Steel Work Tables", use: "Provides a hygienic surface for sorting, trimming and packing" },
      { name: "Sorting Tables", use: "Used by workers to sort mushrooms by size/quality after harvest" },
      { name: "Collection Bins", use: "Gathers sorted mushrooms before weighing and packing" },
      { name: "Pre-Cooling Chamber", use: "Rapidly cools harvested mushrooms to extend shelf life" },
      { name: "Dispatch Staging Area", use: "Holds finished packed products ready for outbound delivery" },
      { name: "Check-Weigher", use: "Automatically verifies pack weight for accuracy and compliance" },
      { name: "Packaging Conveyor", use: "Moves packs through the packaging line automatically" },
      { name: "Labeling Machine", use: "Applies product labels automatically on packed mushrooms" },
      { name: "Batch Coding Machine", use: "Prints batch numbers on packs for traceability" },
      { name: "Date Coding Machine", use: "Prints manufacturing/expiry dates on packaging" },
      { name: "Barcode Printer", use: "Prints barcodes for inventory and retail tracking" },
      { name: "Barcode Scanner", use: "Scans barcodes for stock management and dispatch accuracy" }
    ]
  },
  {
    title: "11. Cold Chain",
    items: [
      { name: "Pre-Cooling Unit", use: "Quickly lowers mushroom temperature right after harvest" },
      { name: "Cold Room Temperature Controller", use: "Maintains precise storage temperature in the cold room" },
      { name: "Refrigerated Display/Dispatch Area", use: "Keeps products cold while staged for loading/sale" },
      { name: "Insulated Transport Boxes", use: "Maintains cold temperature during short-distance transport" },
      { name: "Cold Packs/Ice Packs", use: "Provides supplementary cooling during transport" },
      { name: "Cold-Chain Temperature Data Logger", use: "Tracks temperature throughout transport to ensure cold-chain compliance" }
    ]
  },
  {
    title: "12. Processing",
    items: [
      { name: "Mushroom Washing Unit", use: "Cleans harvested mushrooms before processing" },
      { name: "Mushroom Slicing Machine", use: "Cuts mushrooms into uniform slices for drying/processing" },
      { name: "Blanching Unit", use: "Briefly heat-treats mushrooms to stop enzyme activity before drying/freezing" },
      { name: "Steam Blancher", use: "Uses steam to blanch mushrooms quickly and evenly" },
      { name: "Pulverizer", use: "Grinds dried mushrooms into fine powder" },
      { name: "Solar Dryer", use: "Uses solar heat to dry mushrooms economically" },
      { name: "Hot-Air Dryer", use: "Uses controlled hot air to dry mushrooms uniformly" },
      { name: "Vacuum Packing Machine", use: "Removes air from packs to extend shelf life" },
      { name: "Stainless-Steel Processing Tables", use: "Provides a hygienic work surface for mushroom processing" }
    ]
  },
  {
    title: "13. Material Handling",
    items: [
      { name: "Forklift", use: "Lifts and moves heavy pallets/loads across the facility" },
      { name: "Pallet Truck", use: "Manually moves palletized goods over short distances" },
      { name: "Hand Trolley", use: "Transports small loads manually within the facility" },
      { name: "Platform Trolley", use: "Moves larger flat loads across production areas" },
      { name: "Material Handling Bins", use: "Holds and transports loose materials between stations" },
      { name: "Storage Pallets", use: "Supports stacked storage of goods for easy handling" },
      { name: "Conveyor Transfer System", use: "Automatically moves materials between processing stages" }
    ]
  },
  {
    title: "14. Electrical & Power",
    items: [
      { name: "DG Generator", use: "Supplies backup power during electricity outages" },
      { name: "Solar Power System", use: "Generates renewable power to reduce electricity costs" },
      { name: "UPS", use: "Provides instant backup power for critical control systems" },
      { name: "Battery Backup", use: "Stores power for short-duration outage protection" },
      { name: "Electrical Control Panel", use: "Centralizes control and monitoring of electrical circuits" },
      { name: "MCC Panel", use: "Controls and protects motors used across the facility" },
      { name: "VFD", use: "Adjusts motor speed to save energy and control equipment precisely" },
      { name: "Motor Starters", use: "Safely starts and stops electric motors" },
      { name: "Voltage Stabilizer", use: "Protects equipment from voltage fluctuations" },
      { name: "Automatic Changeover", use: "Switches power source automatically during outages" },
      { name: "Energy Meter", use: "Tracks electricity consumption for cost monitoring" },
      { name: "Surge Protection", use: "Shields equipment from voltage spikes and surges" },
      { name: "Earthing System", use: "Provides electrical safety grounding across the facility" },
      { name: "Emergency Lighting", use: "Lights key areas automatically during power failure" }
    ]
  },
  {
    title: "15. Cleaning & Biosecurity",
    items: [
      { name: "High-Pressure Washer", use: "Deep-cleans floors, racks and equipment with high-pressure water" },
      { name: "Foam Cleaning Machine", use: "Applies cleaning foam to surfaces for effective sanitation" },
      { name: "Floor Scrubber", use: "Mechanically scrubs and cleans large floor areas" },
      { name: "Steam Cleaner", use: "Uses high-temperature steam to sanitize surfaces without chemicals" },
      { name: "Shoe Sanitizing Station", use: "Disinfects footwear before entry into growing areas" },
      { name: "Hand-Wash Station", use: "Provides hygienic hand-washing before entering clean zones" },
      { name: "UV Sterilization Unit", use: "Disinfects surfaces and air using UV-C light" },
      { name: "Insect-Proof Screens", use: "Blocks insects from entering growing rooms through vents/windows" },
      { name: "Pest Monitoring Traps", use: "Tracks pest activity for early intervention" },
      { name: "Insect Light Trap", use: "Attracts and captures flying insects using light" }
    ]
  },
  {
    title: "16. Quality Control & Monitoring",
    items: [
      { name: "Temperature Data Logger", use: "Continuously records temperature trends for quality audits" },
      { name: "Humidity Data Logger", use: "Continuously records humidity trends for quality audits" },
      { name: "CO₂ Data Logger", use: "Tracks carbon dioxide levels for growth optimization" },
      { name: "Ammonia Detector", use: "Detects harmful ammonia buildup in compost/growing areas" },
      { name: "Air Quality Monitor", use: "Monitors overall air quality inside production areas" },
      { name: "Infrared Thermometer", use: "Takes quick, contactless surface temperature readings" },
      { name: "Compost Moisture Meter", use: "Confirms compost moisture stays within the ideal range" },
      { name: "Water Quality Testing Kit", use: "Verifies water safety and purity for process use" },
      { name: "EC Meter", use: "Checks electrical conductivity for nutrient/salt monitoring" },
      { name: "TDS Meter", use: "Measures dissolved solids for water quality checks" },
      { name: "Calibration Equipment", use: "Keeps sensors and meters accurate over time" },
      { name: "Batch/Production Tracking System", use: "Records and traces production batches for quality control" }
    ]
  },
  {
    title: "17. Safety (Additional)",
    items: [
      { name: "Emergency Eye-Wash Station", use: "Flushes eyes immediately in case of chemical exposure" },
      { name: "Safety Shower", use: "Rinses off chemical spills from the body in an emergency" },
      { name: "Electrical Insulation Mat", use: "Protects workers from electric shock near control panels" },
      { name: "Lockout/Tagout Kit", use: "Safely isolates machinery during maintenance to prevent accidental start-up" },
      { name: "Gas Detector", use: "Detects hazardous gas leaks (ammonia, CO2, etc.) in real time" },
      { name: "Smoke Detector", use: "Detects smoke early to prevent fire hazards" },
      { name: "Emergency Exit Lights", use: "Guides workers to exits safely during power failure" },
      { name: "Emergency Alarm/Siren", use: "Alerts entire facility during an emergency situation" },
      { name: "Fire Hose/Hydrant System", use: "Provides immediate water supply to fight fires" },
      { name: "Chemical Spill Kit", use: "Contains and cleans up chemical spills safely" },
      { name: "Chemical Storage Cabinet", use: "Stores hazardous chemicals securely and safely" },
      { name: "PPE Storage Cabinet", use: "Organizes and protects PPE gear for easy access" }
    ]
  },
  {
    title: "18. Waste & Environmental Management",
    items: [
      { name: "Spent Substrate Conveyor", use: "Transports used substrate out of growing rooms after harvest" },
      { name: "Spent Compost Crusher", use: "Breaks down spent compost for easier handling/recycling" },
      { name: "Organic Waste Shredder", use: "Shreds organic waste for composting or disposal" },
      { name: "Compost Recycling Unit", use: "Converts spent substrate into reusable compost" },
      { name: "Biofertilizer/Compost Unit", use: "Converts farm waste into organic biofertilizer" },
      { name: "Waste Storage Bins", use: "Temporarily holds waste before disposal/recycling" },
      { name: "Leachate Collection System", use: "Collects liquid runoff from waste/compost piles" },
      { name: "Effluent Treatment System", use: "Treats wastewater before safe discharge or reuse" },
      { name: "Wastewater Drainage System", use: "Channels treated/untreated wastewater away from the facility" }
    ]
  }
];\n`;

content = content.replace('];\n\nexport default function', '];\n' + expandedData + '\nexport default function');

const renderData = `
        {/* Expanded Equipment Section */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-slate-200 dark:border-slate-700">
          <div className="mb-8 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
              Expanded Infrastructure & Processing Directory
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
              Detailed list covering large-scale commercial setups, laboratories, climate systems, and waste management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {expandedEquipmentData.map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-slate-100 dark:bg-slate-700/50 px-3 py-2 md:px-4 md:py-2.5 border-b border-slate-200 dark:border-slate-700">
                  <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100">
                    {section.title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/80">
                        <th className="px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Equipment</th>
                        <th className="px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Use</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                      {section.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                          <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">
                            {item.name}
                          </td>
                          <td className="px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm text-slate-700 dark:text-slate-400 align-top">
                            {item.use}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </main>`;

content = content.replace('      </main>', renderData);
fs.writeFileSync(file, content, 'utf8');
console.log('Update complete');
