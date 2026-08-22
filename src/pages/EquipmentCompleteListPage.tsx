import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const equipmentData = [
  {
    title: "1. Beginner / Home-Scale Equipment",
    icon: "🟢",
    items: [
      { name: "Pressure Cooker", use: "Sterilizes grain spawn and small batches of substrate" },
      { name: "Still Air Box (SAB)", use: "Low-cost sterile workspace for culture transfers and inoculation" },
      { name: "Spray Bottle / Hand Mister", use: "Manual misting to maintain humidity in small grow spaces" },
      { name: "Digital Thermometer & Hygrometer", use: "Monitors temperature and humidity in the grow area" },
      { name: "Grow Bags / Spawn Bags (with filter patch)", use: "Holds substrate for colonization and fruiting" },
      { name: "Heat Sealer (Impulse Sealer)", use: "Seals grow bags and spawn bags" },
      { name: "Injection Port + Syringes", use: "Used to inoculate bags with liquid culture or spores" },
      { name: "Mini Grow Tent / Fruiting Chamber", use: "Provides a controlled humid space for fruiting at small scale" },
      { name: "LED Grow Light", use: "Provides low-intensity light needed for mushroom pinning" },
      { name: "Shelving Rack (wood/plastic)", use: "Organizes bags, trays, and jars in limited space" },
      { name: "Digital Timer", use: "Automates misting or lighting cycles" },
      { name: "Mixing Tub / Bucket", use: "Used to hand-mix substrate ingredients" },
      { name: "Alcohol Lamp / Torch", use: "Sterilizes small tools like scalpels and needles during transfers" },
      { name: "Isopropyl Alcohol & Disinfectant Spray", use: "Cleans surfaces and tools to prevent contamination" },
      { name: "Micropore Tape / Filter Patches", use: "Allows gas exchange while keeping contaminants out of jars/bags" }
    ]
  },
  {
    title: "2. Lab & Culture Equipment (Strain Development / Genetics)",
    icon: "🔵",
    items: [
      { name: "Laminar Flow Hood", use: "Provides HEPA-filtered sterile airflow for clean lab work" },
      { name: "Microscope (with mechanical stage)", use: "Identifies contaminants and studies spore/mycelium characteristics" },
      { name: "Autoclave (lab grade)", use: "Sterilizes agar media, tools, and liquid culture jars" },
      { name: "Magnetic Stirrer", use: "Mixes liquid culture nutrient solutions evenly" },
      { name: "Agar Petri Dishes & Media", use: "Used for culture isolation, cloning, and strain maintenance" },
      { name: "Culture Slants / Test Tubes", use: "Stores and preserves mushroom genetics long-term" },
      { name: "Scalpel & Surgical Blades", use: "Used for precise agar work and tissue cloning" },
      { name: "Centrifuge Tubes", use: "Used for liquid culture prep and sample storage" },
      { name: "Incubator (lab type)", use: "Maintains ideal temperature for culture and spawn colonization" },
      { name: "Refrigerator / Culture Storage Fridge", use: "Preserves master cultures and slants" }
    ]
  },
  {
    title: "3. Medium-Scale / Small Commercial Farm Equipment",
    icon: "🟡",
    items: [
      { name: "Larger Capacity Autoclave / Retort Sterilizer", use: "Sterilizes bulk grain spawn and substrate bags" },
      { name: "Straw Chopper / Shredder Machine", use: "Cuts straw into uniform small pieces for substrate prep" },
      { name: "Pasteurization Drum / Tank", use: "Pasteurizes substrate using hot water or steam" },
      { name: "Compost Mixer (drum/tumbler type)", use: "Mixes compost ingredients uniformly" },
      { name: "Semi-Automatic Bag Filling Machine", use: "Fills substrate into bags faster and more uniformly" },
      { name: "Humidifier (ultrasonic fogger)", use: "Maintains stable humidity in the grow/fruiting room" },
      { name: "Exhaust Fan / Ventilation System", use: "Exchanges fresh air and controls CO2 levels" },
      { name: "Small AC / Cooling Unit", use: "Regulates temperature in the fruiting room" },
      { name: "Walk-in Inoculation Chamber", use: "Enables clean bulk spawning of larger batches" },
      { name: "Small Cold Storage Room", use: "Keeps harvested mushrooms fresh before sale" },
      { name: "Weighing Scale", use: "Weighs mushrooms before packaging" },
      { name: "Basic Packaging Machine", use: "Packs mushrooms for local market sale" },
      { name: "Spawn Shaker Machine", use: "Breaks up colonized grain spawn for even distribution" },
      { name: "Bag Vacuum/Sealing Machine", use: "Removes air and seals bags for freshness" }
    ]
  },
  {
    title: "4. Composting Unit (For Button Mushroom / Large-Scale Farms)",
    icon: "🔴",
    items: [
      { name: "Compost Pre-Wetting Area", use: "Soaks raw straw/materials as the first step of composting" },
      { name: "Compost Turning Machine", use: "Mixes and aerates compost ingredients repeatedly" },
      { name: "Bunker Rooms (with aeration blowers)", use: "Provides controlled aeration for Phase-I composting" },
      { name: "Compost Tunnel (Phase II/III)", use: "Pasteurizes and conditions compost under controlled climate" },
      { name: "Bunker/Tunnel Filling Machine", use: "Automatically fills compost into bunkers or tunnels" },
      { name: "Compost Air Handling Unit (AHU)", use: "Controls temperature and airflow inside tunnels" },
      { name: "Front Loader / Bobcat", use: "Moves raw material and finished compost around the yard" }
    ]
  },
  {
    title: "5. Spawn Production Unit",
    icon: "🟣",
    items: [
      { name: "Grain Spawn Cooker/Boiler", use: "Cooks grain (wheat, rye, millet) for spawn preparation" },
      { name: "Industrial Autoclave", use: "Sterilizes large batches of grain spawn" },
      { name: "Automatic Inoculation Machine", use: "Inoculates sterilized grain with mother culture at scale" },
      { name: "Spawn Tank", use: "Stores and grows liquid culture/spawn in bulk" },
      { name: "Incubation Room/Racks", use: "Provides ideal conditions for spawn colonization" },
      { name: "Bottle Filling Line (for bottle cultivation)", use: "Automatically fills, sterilizes, and inoculates bottles (used for enoki, shimeji, etc.)" }
    ]
  },
  {
    title: "6. Substrate Preparation & Bag Filling (Commercial Scale)",
    icon: "⚙️",
    items: [
      { name: "Industrial Substrate Mixer", use: "Mixes large volumes of substrate ingredients uniformly" },
      { name: "Automatic Bag Filling & Sealing Machine", use: "High-speed bagging for bulk production" },
      { name: "Casing Soil Spreader Machine", use: "Spreads casing soil evenly over spawned beds/trays" },
      { name: "Steam Boiler (industrial)", use: "Supplies steam for large-scale sterilization/pasteurization" },
      { name: "Bag Breaking & Recycling Machine", use: "Removes spent substrate from bags after harvest for reuse/disposal" }
    ]
  },
  {
    title: "7. Climate Control & Growing Room Equipment",
    icon: "🌡️",
    items: [
      { name: "Industrial Air Conditioning System", use: "Precisely controls growing room temperature" },
      { name: "Automated Climate Control Computer", use: "Manages temperature, humidity, and CO2 together automatically" },
      { name: "Ventilation Ducts & Air Distribution System", use: "Distributes fresh air evenly across growing rooms" },
      { name: "Chiller Unit", use: "Cools growing rooms during warm seasons" },
      { name: "Water Pasteurization & Spray System", use: "Treats spray water to prevent water-borne infections" },
      { name: "Insulated Panel Growing Rooms", use: "Maintains stable internal climate year-round" },
      { name: "CO2 Sensor & Controller", use: "Monitors and regulates carbon dioxide levels for healthy fruiting" }
    ]
  },
  {
    title: "8. Harvesting, Grading & Packaging Equipment",
    icon: "🚜",
    items: [
      { name: "Harvesting Trolley/Trays", use: "Collects mushrooms during harvest" },
      { name: "Conveyor Belt System", use: "Transports harvested mushrooms for processing" },
      { name: "Grading & Sorting Machine", use: "Sorts mushrooms by size and quality" },
      { name: "Automatic Weighing & Packaging (MAP) Machine", use: "Packs mushrooms in bulk with extended shelf life" },
      { name: "Cold Storage / Cold Room (large)", use: "Stores bulk harvest at low temperature for freshness" },
      { name: "Refrigerated Transport Van", use: "Delivers fresh mushrooms to market without spoilage" }
    ]
  },
  {
    title: "9. Drying, Processing & Value Addition Equipment",
    icon: "🍄",
    items: [
      { name: "Mushroom Dryer / Dehydrator", use: "Dries mushrooms for long shelf life and export" },
      { name: "Mushroom Powder Grinding Machine", use: "Converts dried mushrooms into powder for supplements/food" },
      { name: "Canning Machine", use: "Preserves mushrooms in cans for long-term storage" },
      { name: "Pickling/Processing Unit", use: "Prepares mushroom pickles and other value-added products" },
      { name: "Freeze Dryer", use: "Preserves mushrooms while retaining texture, flavor & nutrients" }
    ]
  },
  {
    title: "10. Support, Safety & Infrastructure Equipment",
    icon: "🛡️",
    items: [
      { name: "Generator / Power Backup", use: "Ensures uninterrupted operation during power cuts" },
      { name: "Industrial Shed Structure", use: "Houses the composting, spawning, and growing units" },
      { name: "Effluent / Spent Compost Handling System", use: "Manages disposal or recycling of used compost" },
      { name: "PPE Kits (gloves, masks, gowns)", use: "Protects workers and maintains hygiene during handling" },
      { name: "Foot Bath / Disinfection Entry Point", use: "Prevents contamination entering growing areas" },
      { name: "Water Storage Tank & Supply Pump", use: "Provides consistent water supply for misting and processing" },
      { name: "Boiler Room", use: "Houses steam boiler equipment for the whole facility" }
    ]
  }
];

export default function EquipmentCompleteListPage() {
  return (
    <div className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
      <Helmet>
        <title>Mushroom Farming Equipment Complete List | Organic Mushroom Farm</title>
        <meta name="description" content="A complete equipment guide covering everything used in mushroom cultivation — from a beginner's home setup to a fully automated commercial mushroom production plant." />
        <link rel="canonical" href="https://organicmushroomsfarm.com/equipment/complete-list" />
      </Helmet>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-20 mt-16 md:mt-16">
        <div className="mb-6 md:mb-8">
          <Link to="/equipment" className="text-primary-start hover:underline mb-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Equipment
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight">
            Mushroom Farming Equipment <br />
            <span className="text-lg md:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mt-1 md:mt-2 block">
              Complete List (Home Scale to Fully Industrial)
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            A complete equipment guide covering everything used in mushroom cultivation — from a beginner's home setup to a fully automated commercial mushroom production plant.
          </p>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 italic">
            Note: The exact equipment required depends on farm scale (home / small commercial / fully industrial) and mushroom type being grown (button, oyster, milky, shiitake, enoki, etc.).
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {equipmentData.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-700/50 px-4 py-3 md:px-6 md:py-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 md:gap-3">
                  <span>{category.icon}</span>
                  {category.title}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/80">
                      <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-1/3">Equipment</th>
                      <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 w-2/3">Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                        <td className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-200 align-top">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm text-slate-700 dark:text-slate-400 align-top">
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
        
      </main>
    </div>
  );
}
