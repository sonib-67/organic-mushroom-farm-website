import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const equipmentCategories = [
  { "title": "Farm Infrastructure & Insulation", "desc": "Build durable, energy-efficient mushroom growing rooms with PUF insulation panels and structural materials for optimal climate retention.", "link": "/equipment/infrastructure-and-insulation" },
  { "title": "Mushroom Growing & Cultivation", "desc": "High-quality aluminum racks, shelving, and growing beds designed to maximize crop yield and optimize space in your commercial farm.", "link": "/equipment/growing-racks-and-shelving" },
  { "title": "Temperature & Climate Control", "desc": "Maintain the perfect growing environment with advanced HVAC systems, chillers, and heaters for precision temperature management." },
  { "title": "Humidification & Fogging", "desc": "Ensure ideal moisture levels for button and oyster mushrooms with high-pressure fogging systems and ultrasonic humidifiers." },
  { "title": "Ventilation & Air Management", "desc": "Promote healthy crop cycles with industrial exhaust fans, blowers, and CO2 management systems for proper air circulation." },
  { "title": "Air Filtration & Clean-Air Systems", "desc": "Prevent contamination with HEPA filters and clean-air solutions, essential for spawn running rooms and tissue culture labs." },
  { "title": "Water & Irrigation Systems", "desc": "Efficient watering solutions including RO plants, micro-sprayers, and drip systems for consistent substrate hydration." },
  { "title": "Lighting Systems", "desc": "Energy-efficient LED lighting setups tailored for specific mushroom growth stages and safe, comfortable harvesting." },
  { "title": "Power & Backup Systems", "desc": "Uninterrupted power supply solutions including heavy-duty generators and inverters to safeguard your climate-controlled farm operations." },
  { "title": "Electrical & Automation", "desc": "Smart control panels and automated timers to seamlessly manage climate, watering, and lighting with minimal manual effort." },
  { "title": "Sterilization & Hygiene", "desc": "Industrial autoclaves, boilers, and sanitization chemicals to maintain a disease-free, 100% sterile farming environment." },
  { "title": "Pest & Disease Control", "desc": "Safe, organic, and highly effective pest management solutions including insect traps, UV sanitizers, and bio-pesticides." },
  { "title": "Testing & Monitoring Instruments", "desc": "Accurate sensors and digital meters for real-time monitoring of temperature, humidity, CO2 levels, and compost pH." },
  { "title": "Lab & Tissue Culture Setup", "desc": "Complete laboratory equipment including Laminar Air Flow cabinets and incubators for high-quality, commercial spawn production." },
  { "title": "Substrate/Compost Preparation", "desc": "Heavy-duty compost turners, mixers, and bunkers designed for fast, efficient, and large-scale substrate processing." },
  { "title": "Consumables & Raw Materials", "desc": "Premium quality casing soil, nutritional supplements, and essential raw materials required for healthy mushroom cultivation." },
  { "title": "Spawn & Inoculation", "desc": "High-yielding, disease-free mushroom spawn (seeds) and precision inoculation tools for faster mycelium colonization." },
  { "title": "Harvesting & Processing", "desc": "Ergonomic picking trolleys, specialized cutting tools, and processing tables to streamline your daily mushroom harvesting." },
  { "title": "Grading & Quality Control", "desc": "Accurate weighing scales and sorting machinery to ensure uniform sizing and premium, market-ready mushrooms." },
  { "title": "Drying & Value-Added Processing", "desc": "Industrial dehydrators and processing machines for creating profitable mushroom powder, pickles, and dried varieties." },
  { "title": "Material Handling & Logistics", "desc": "Pallet trucks, conveyors, and trolleys for smooth and safe movement of heavy compost, spawn, and harvested crops." },
  { "title": "Cold Storage & Refrigeration", "desc": "Advanced cold room setups and insulated doors to extend the shelf life and preserve the freshness of your harvested mushrooms." },
  { "title": "Packaging", "desc": "Food-grade punnets, breathable wrapping films, and vacuum sealing machines for attractive, retail-ready mushroom packaging." },
  { "title": "Safety & Worker Gear", "desc": "Protective clothing, masks, gloves, and footwear to ensure complete hygiene and maximum safety for your farm staff." },
  { "title": "Waste Management & Disposal", "desc": "Eco-friendly solutions and machinery for recycling spent mushroom substrate (SMS) into valuable organic fertilizer." },
  { "title": "Farm Management Software", "desc": "Smart digital tools and applications to track daily yield, manage inventory, and monitor your farm's climate remotely." },
  { "title": "Research, Training & Demonstration", "desc": "Educational cultivation kits and mini-setups perfect for agricultural institutes, online workshops, and beginner training." },
  { "title": "Mushroom Farm Accessories & Tools", "desc": "Essential daily-use tools including portable hygrometers, spray bottles, and measuring equipment for everyday operations." },
  { "title": "Maintenance & Service Equipment", "desc": "High-quality spare parts, toolkits, and servicing equipment to keep your farm machinery running smoothly without downtime." },
  { "title": "Complete Farm Setup", "desc": "End-to-end turnkey solutions including structural planning, machinery supply, and installation for establishing a profitable commercial mushroom farm." }
];

const EquipmentPageNew = () => {
  return (
    <>
      <Helmet>
        <title>Mushroom Farming Equipment & Setup Solutions | Organic Mushrooms Farm</title>
        <meta
          name="description"
          content="Discover top-quality mushroom farming equipment, from climate control and humidification to sterilization and cold storage. We provide complete farm setup solutions, turnkey projects, and advanced tools to boost your mushroom farm's yield and profitability."
        />
        <link rel="canonical" href="https://organicmushroomsfarm.com/equipment" />
      </Helmet>

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-slate-50 dark:bg-slate-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight mb-3">
              Mushroom Farming Equipment
            </h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium max-w-3xl mb-6">
              Discover top-quality equipment for your commercial mushroom farm. Select a category below to explore our advanced solutions designed to maximize your yield and profitability.
            </p>
            
            {/* Featured Banner for Complete Equipment List */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-700 dark:to-emerald-500 rounded-xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-md mb-8 md:mb-12">
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Mushroom Equipment Guide
                </h2>
                <p className="text-emerald-50 text-xs md:text-sm max-w-2xl leading-relaxed">
                  A complete equipment list covering everything used in mushroom cultivation — from a beginner's home setup to a fully automated commercial mushroom production plant.
                </p>
              </div>
              <Link 
                to="/equipment/complete-list"
                className="whitespace-nowrap px-6 py-2.5 bg-white text-emerald-700 text-sm md:text-base font-bold rounded-full hover:bg-emerald-50 hover:shadow-lg transition-all active:scale-95 w-full md:w-auto text-center"
              >
                View Complete List
              </Link>
            </div>
          </div>

          {/* Descriptions List as Interactive Cards */}
          <div className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-8">
            <h2 className="text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-4 md:mb-6">
              Equipment details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {equipmentCategories.map((cat, idx) => (
                <Link
                  key={idx}
                  to={(cat as any).link || "#"}
                  className="flex flex-col p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:border-primary-start dark:hover:border-primary-start hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-primary-start dark:group-hover:text-primary-start transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-start shrink-0"></span>
                      {cat.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-start dark:group-hover:text-primary-start transition-colors shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EquipmentPageNew;
