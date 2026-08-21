const data = `* Farm Infrastructure & Insulation: Build durable, energy-efficient mushroom growing rooms with premium PUF insulation panels and structural materials for optimal climate retention.
* Mushroom Growing & Cultivation: High-quality aluminum racks, shelving, and growing beds designed to maximize crop yield and optimize space in your commercial farm.
* Temperature & Climate Control: Maintain the perfect growing environment with advanced HVAC systems, chillers, and heaters for precision temperature management.
* Humidification & Fogging: Ensure ideal moisture levels for button and oyster mushrooms with high-pressure fogging systems and ultrasonic humidifiers.
* Ventilation & Air Management: Promote healthy crop cycles with industrial exhaust fans, blowers, and CO2 management systems for proper air circulation.
* Air Filtration & Clean-Air Systems: Prevent contamination with HEPA filters and clean-air solutions, essential for spawn running rooms and tissue culture labs.
* Water & Irrigation Systems: Efficient watering solutions including RO plants, micro-sprayers, and drip systems for consistent substrate hydration.
* Lighting Systems: Energy-efficient LED lighting setups tailored for specific mushroom growth stages and safe, comfortable harvesting.
* Power & Backup Systems: Uninterrupted power supply solutions including heavy-duty generators and inverters to safeguard your climate-controlled farm operations.
* Electrical & Automation: Smart control panels and automated timers to seamlessly manage climate, watering, and lighting with minimal manual effort.
* Sterilization & Hygiene: Industrial autoclaves, boilers, and sanitization chemicals to maintain a disease-free, 100% sterile farming environment.
* Pest & Disease Control: Safe, organic, and highly effective pest management solutions including insect traps, UV sanitizers, and bio-pesticides.
* Testing & Monitoring Instruments: Accurate sensors and digital meters for real-time monitoring of temperature, humidity, CO2 levels, and compost pH.
* Lab & Tissue Culture Setup: Complete laboratory equipment including Laminar Air Flow cabinets and incubators for high-quality, commercial spawn production.
* Substrate/Compost Preparation: Heavy-duty compost turners, mixers, and bunkers designed for fast, efficient, and large-scale substrate processing.
* Consumables & Raw Materials: Premium quality casing soil, nutritional supplements, and essential raw materials required for healthy mushroom cultivation.
* Spawn & Inoculation: High-yielding, disease-free mushroom spawn (seeds) and precision inoculation tools for faster mycelium colonization.
* Harvesting & Processing: Ergonomic picking trolleys, specialized cutting tools, and processing tables to streamline your daily mushroom harvesting.
* Grading & Quality Control: Accurate weighing scales and sorting machinery to ensure uniform sizing and premium, market-ready mushrooms.
* Drying & Value-Added Processing: Industrial dehydrators and processing machines for creating profitable mushroom powder, pickles, and dried varieties.
* Material Handling & Logistics: Pallet trucks, conveyors, and trolleys for smooth and safe movement of heavy compost, spawn, and harvested crops.
* Cold Storage & Refrigeration: Advanced cold room setups and insulated doors to extend the shelf life and preserve the freshness of your harvested mushrooms.
* Packaging: Food-grade punnets, breathable wrapping films, and vacuum sealing machines for attractive, retail-ready mushroom packaging.
* Safety & Worker Gear: Protective clothing, masks, gloves, and footwear to ensure complete hygiene and maximum safety for your farm staff.
* Waste Management & Disposal: Eco-friendly solutions and machinery for recycling spent mushroom substrate (SMS) into valuable organic fertilizer.
* Farm Management Software: Smart digital tools and applications to track daily yield, manage inventory, and monitor your farm's climate remotely.
* Research, Training & Demonstration: Educational cultivation kits and mini-setups perfect for agricultural institutes, online workshops, and beginner training.
* Mushroom Farm Accessories & Tools: Essential daily-use tools including portable hygrometers, spray bottles, and measuring equipment for everyday operations.
* Maintenance & Service Equipment: High-quality spare parts, toolkits, and servicing equipment to keep your farm machinery running smoothly without downtime.
* Complete Farm Setup: End-to-end turnkey solutions including structural planning, machinery supply, and installation for establishing a profitable commercial mushroom farm.`;

const parsed = data.split('\n').filter(Boolean).map(line => {
  const match = line.replace('* ', '').split(': ');
  return { title: match[0], desc: match.slice(1).join(': ') };
});
console.log(JSON.stringify(parsed, null, 2));
