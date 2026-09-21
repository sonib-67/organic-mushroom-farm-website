export interface FarmMachine {
  id: string;
  name: string;
  category: string;
  model: string;
  capacity: string;
  power: string;
  description: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  roomAssociation?: 'growing_room' | 'compost_yard' | 'spawn_lab' | 'processing' | 'boiler_room' | 'cold_storage' | 'general';
}

export interface EquipmentCategory {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  iconName: string;
  roomAssociation: 'growing_room' | 'compost_yard' | 'spawn_lab' | 'processing' | 'boiler_room' | 'cold_storage' | 'general';
  machinery: FarmMachine[];
}

export const FARM_EQUIPMENT_DATA: EquipmentCategory[] = [
  {
    id: 1,
    slug: 'compost-preparation',
    name: '1. Compost Preparation Machinery',
    subtitle: 'Phase I, II & III Compost Yard & Bunker Systems',
    iconName: 'Tractor',
    roomAssociation: 'compost_yard',
    machinery: [
      {
        id: 'comp-1',
        name: 'Heavy-Duty Compost Turner Machine',
        category: 'Compost Preparation Machinery',
        model: 'CT-3200 Pro-Drive',
        capacity: '40 - 60 Tons/Hour',
        power: '45 kW Diesel / Electric 3-Phase',
        description: 'Commercial automatic self-propelled compost turner equipped with hydraulic drum lifters and high-torque flail rotors for intensive oxygenation and blending.',
        keyFeatures: [
          'Uniform water spray bar with metered dosing',
          'Heavy flail blades for straw shredding & aerobic microbial boost',
          'Heavy-duty rubber crawler tracks for muddy yards',
          'Variable hydrostatic travel speed'
        ],
        specs: {
          'Drum Width': '3.2 Meters',
          'Working Speed': '0 - 18 m/min',
          'Weight': '6,800 kg',
          'Fuel/Power': '75 HP Turbo Diesel or 45 kW Electric'
        },
        roomAssociation: 'compost_yard'
      },
      {
        id: 'comp-2',
        name: 'Aerated Bunker Floor & Spigot Air Nozzles',
        category: 'Compost Preparation Machinery',
        model: 'SpigotFloor-B400',
        capacity: '150 - 500 Tons per Bunker',
        power: '15 - 22 kW High-Pressure Blower',
        description: 'Engineered concrete bunker aeration flooring with precision polypropylene spigot nozzles providing computer-controlled positive air aeration.',
        keyFeatures: [
          'High-pressure centrifugal fan with VFD control',
          'Even oxygen distribution preventing anaerobic dead zones',
          'Heavy axle wheel load capacity (up to 15 tons per axle)',
          'Automated cyclical pulse aeration timer'
        ],
        specs: {
          'Nozzle Pitch': '300 mm x 300 mm grid',
          'Static Pressure': '3500 - 5000 Pa',
          'Material': 'High-Impact Polypropylene & Heavy Cast Iron',
          'Temperature Range': 'Ambient to 85°C'
        },
        roomAssociation: 'compost_yard'
      },
      {
        id: 'comp-3',
        name: 'Pre-Wetting Straw Bale Breaker & Feeder Line',
        category: 'Compost Preparation Machinery',
        model: 'BBF-9000 Turbo',
        capacity: '20 Tons/Hour',
        power: '22 kW',
        description: 'Automatic round & square straw bale de-twining, breaking, and wetting line with high-volume recycling water dunk basin.',
        keyFeatures: [
          'Twine cut and auto-retraction system',
          'Dual contra-rotating shredding rotors',
          'Submerged water soaking pit conveyor',
          'Integrated chicken manure & gypsum blending auger'
        ],
        specs: {
          'Conveyor Width': '1200 mm',
          'Bale Size': 'Round 1.8m or Square 2.4m',
          'Water Recycle Pump': '7.5 kW Slurry Submersible',
          'Chassis': 'Hot-dip Galvanized Steel'
        },
        roomAssociation: 'compost_yard'
      },
      {
        id: 'comp-4',
        name: 'Compost Cassette Filling Conveyor System',
        category: 'Compost Preparation Machinery',
        model: 'CCF-45 Telescopic',
        capacity: '45 Tons/Hour',
        power: '11 kW Motor with VFD',
        description: 'Telescopic swiveling conveyor line used to load Phase-II pasteurization tunnels and Phase-III bulk incubation tunnels uniformly.',
        keyFeatures: [
          '360-degree swivel turntable with motorized boom extension',
          'Chevron rubber belt preventing compost rollback',
          'Even bed height leveling distributor drum',
          'Mobile castor chassis with hydraulic leveling jacks'
        ],
        specs: {
          'Reach Length': '14 - 24 Meters Telescopic',
          'Belt Width': '650 mm Chevron Cleated',
          'Drop Height': '1.2 to 5.5 Meters Adjustable',
          'Automation': 'Radio Remote Controller'
        },
        roomAssociation: 'compost_yard'
      },
      {
        id: 'comp-5',
        name: 'Phase II & III Pasteurization Tunnel Air System',
        category: 'Compost Preparation Machinery',
        model: 'TunAir-Scada Pro',
        capacity: '50 - 200 Tons Compost/Batch',
        power: '30 kW High Static Blower + Glycol Heat Exchanger',
        description: 'Closed-loop climate control system for Phase-II pasteurization (58°C - 60°C) and Phase-III bulk spawn running with fresh air purging.',
        keyFeatures: [
          'Stainless steel SS304 central air ducting',
          'Steam injection valves & chilled water cooling coil',
          'Four 4-wire Pt100 core temperature compost probes',
          'Positive pressure HEPA-filtered cleanroom tunnel exit'
        ],
        specs: {
          'Air Volume': '25,000 m³/hr',
          'Static Pressure': '2,800 Pa',
          'Control Accuracy': '± 0.2°C Temperature Differential',
          'Material': 'Insulated Double Wall SS304'
        },
        roomAssociation: 'compost_yard'
      },
      {
        id: 'comp-6',
        name: 'Bulk Spawn Inoculation Hopper for Tunnel Compost',
        category: 'Compost Preparation Machinery',
        model: 'SpwnMix-Pro 12',
        capacity: '30 Tons/Hour',
        power: '5.5 kW',
        description: 'Precision metering hopper that gently blends grain spawn at calibrated ratios (0.5% - 1.5%) into bulk cooled compost prior to Phase-III incubation.',
        keyFeatures: [
          'Gentle grain dispenser preserving mycelium viability',
          'Load-cell based gravimetric dosing rate',
          'Sanitary food-grade SS304 contact parts',
          'HEPA air curtain over mixing chute'
        ],
        specs: {
          'Hopper Volume': '800 Liters',
          'Dosing Rate': '0.3% to 2.0% Adjustable',
          'Contact Metal': 'Stainless Steel 304',
          'Enclosure': 'IP66 Washdown Safe'
        },
        roomAssociation: 'compost_yard'
      }
    ]
  },
  {
    id: 2,
    slug: 'spawn-laboratory',
    name: '2. Spawn Laboratory Equipment',
    subtitle: 'Mother Culture, Grain Spawn & Inoculation Cleanrooms',
    iconName: 'FlaskConical',
    roomAssociation: 'spawn_lab',
    machinery: [
      {
        id: 'spawn-1',
        name: 'Class 100 Laminar Air Flow Workstation',
        category: 'Spawn Laboratory Equipment',
        model: 'LAF-6000 Horizon',
        capacity: '4-Operator Double Bench',
        power: '1.2 kW (230V 50Hz)',
        description: 'ISO-5 Cleanroom Grade Horizontal Laminar Airflow bench equipped with H14 HEPA filters providing 99.999% particulate-free sterility for tissue culture and spawn transfers.',
        keyFeatures: [
          'H14 HEPA Filter tested at 0.3 micron efficiency',
          'Stainless Steel SS304 seamless seamless table top',
          'Integrated UV-C germicidal lamp with auto-shutoff timer',
          'Digital differential Dwyer magnehelic pressure gauge'
        ],
        specs: {
          'Air Velocity': '0.45 m/s ± 20%',
          'Dimensions': '1800 x 750 x 1400 mm',
          'Noise Level': '< 60 dB(A)',
          'Pre-Filter': 'Washable Polyurethane 10 Micron'
        },
        roomAssociation: 'spawn_lab'
      },
      {
        id: 'spawn-2',
        name: 'High-Pressure Vertical Laboratory Autoclave',
        category: 'Spawn Laboratory Equipment',
        model: 'SterilMax-250L',
        capacity: '250 Liters (80 - 100 Spawn Bottles)',
        power: '9 kW 3-Phase Electric',
        description: 'Microprocessor controlled vertical pressure sterilizer engineered for continuous sterilization of grain substrate bottles, PP bags, and liquid broth.',
        keyFeatures: [
          'PID temperature controller up to 134°C (2.2 Bar)',
          'Automatic steam purging and vacuum pulse drying',
          'Dual spring-loaded safety valves & low-water cutoff',
          'Radial locking lid with silicone heat-resistant gasket'
        ],
        specs: {
          'Chamber Volume': '250 Liters',
          'Working Pressure': '1.2 to 2.2 Bar (15 - 30 psi)',
          'Chamber Material': 'SS316L Surgical Grade Steel',
          'Cycle Time': '45 - 90 Minutes Programmed'
        },
        roomAssociation: 'spawn_lab'
      },
      {
        id: 'spawn-3',
        name: 'Microbial Rotary Shaker Incubator',
        category: 'Spawn Laboratory Equipment',
        model: 'Shak-Incub 450',
        capacity: '48 x 500ml Erlenmeyer Flasks',
        power: '1.5 kW',
        description: 'Orbital shaking refrigerated incubator dedicated to large-scale liquid mycelium culture multiplication and mother spawn preparation.',
        keyFeatures: [
          'Orbital motion 30 - 300 RPM with digital tachometer',
          'Refrigerated hermetic compressor (4°C to 60°C)',
          'Triple eccentric balanced drive for vibration-free running',
          'Optically clear glass inner viewing door'
        ],
        specs: {
          'Orbital Orbit': '25 mm Diameter',
          'Temp Accuracy': '± 0.1°C',
          'Platform Size': '600 x 600 mm',
          'Timer': 'Continuous or 0 - 999 Hours'
        },
        roomAssociation: 'spawn_lab'
      },
      {
        id: 'spawn-4',
        name: 'Stainless Steel Grain Boiling & Washing Kettle',
        category: 'Spawn Laboratory Equipment',
        model: 'GBK-500 Tilting',
        capacity: '500 Liters (approx 200 kg dry wheat/sorghum)',
        power: '18 kW Electric or Steam Jacketed',
        description: 'Motorized planetary tilting kettle with steam jacket for controlled par-boiling of grain seeds with calcium carbonate/gypsum additives.',
        keyFeatures: [
          'Hydraulic motorized 90-degree tilting pouring spout',
          'Dimpled heating jacket for rapid boiling without scorching',
          'Perforated de-watering screen tray and bottom drain',
          'Variable speed anchor mixer with Teflon scrapers'
        ],
        specs: {
          'Batch Time': '35 Minutes',
          'Inner Shell': 'SS304 4mm thickness',
          'Tilt Mechanism': 'Hydraulic cylinder 1.5 kW',
          'Water Discharge': '2 inch sanitary butterfly valve'
        },
        roomAssociation: 'spawn_lab'
      },
      {
        id: 'spawn-5',
        name: 'Dynamic Cleanroom Interlocking Pass Box',
        category: 'Spawn Laboratory Equipment',
        model: 'PassBox-Dynamic 600',
        capacity: '600 x 600 x 600 mm Internal',
        power: '250W',
        description: 'Dynamic HEPA-purged transfer chamber preventing cross-contamination when passing sterilized spawn bags into the ultra-clean inoculation theater.',
        keyFeatures: [
          'Electromagnetic double-door interlocking mechanism',
          'Internal H14 HEPA filter with 0.3 micron clean shower',
          'Timed germicidal UV light sterilization cycle',
          'Stainless steel 304 interior with radiused coved corners'
        ],
        specs: {
          'Cleanliness': 'Class 100 / ISO 5',
          'UV Lamp': '15W Germicidal 254nm',
          'Interlock': 'Magnetic sensor with buzzer alarm',
          'Power': 'Single Phase 220V'
        },
        roomAssociation: 'spawn_lab'
      }
    ]
  },
  {
    id: 3,
    slug: 'substrate-preparation',
    name: '3. Substrate Preparation — Oyster/Milky',
    subtitle: 'Straw Shredding, Chemical/Steam Pasteurization & Mixing',
    iconName: 'Wheat',
    roomAssociation: 'processing',
    machinery: [
      {
        id: 'sub-1',
        name: 'Industrial Biomass Straw Shredder & Chaff Cutter',
        category: 'Substrate Preparation — Oyster/Milky',
        model: 'StrawCut-800 Pro',
        capacity: '1.5 - 2.5 Tons/Hour',
        power: '11 kW (15 HP) 3-Phase Electric',
        description: 'High-speed rotary hammer cutter specifically designed to chop dry wheat, paddy straw, and soybean stalk into uniform 2-3 cm mushroom substrate sizes.',
        keyFeatures: [
          'Hardened manganese alloy blades with dual cutting edges',
          'Integrated cyclone dust separator and pneumatic bagger',
          'Safety feeder guard with anti-jam reversing switch',
          'Interchangeable bottom screens (15mm, 25mm, 35mm)'
        ],
        specs: {
          'Straw Cut Size': '20 - 35 mm Uniform',
          'Rotor Speed': '2,400 RPM',
          'Feed Opening': '450 x 300 mm',
          'Frame': '10 mm Mild Steel Reinforced'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'sub-2',
        name: 'Atmospheric Steam Substrate Pasteurization Chamber',
        category: 'Substrate Preparation — Oyster/Milky',
        model: 'SteamChamber-4000',
        capacity: '4,000 kg Substrate / Batch',
        power: 'Steam Heated via Central Boiler',
        description: 'Heavy insulated stainless steel tunnel chamber with perforated false bottom for bulk thermal pasteurization at 75°C - 85°C for 4-6 hours.',
        keyFeatures: [
          'Double PUF insulation panels (80mm thick) saving 35% steam',
          'Perforated distribution grid guaranteeing zero cold pockets',
          'Pneumatic rapid clamp insulated access doors on both ends',
          'Multi-channel PT100 temperature loggers with auto steam shutoff'
        ],
        specs: {
          'Dimensions': '6.0m x 2.2m x 2.4m',
          'Operating Temp': '65°C to 95°C',
          'Steam Infeed': '1.5 inch BSP 4 Bar line',
          'Insulation': 'High-density Rockwool & Polyurethane'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'sub-3',
        name: 'Heavy Ribbon Substrate Mixer with Infeed Conveyor',
        category: 'Substrate Preparation — Oyster/Milky',
        model: 'RibMix-3000L',
        capacity: '3,000 Liters / Batch (10-12 min cycle)',
        power: '15 kW Geared Motor',
        description: 'Double helical ribbon batch blender for thorough homogeneous blending of chopped straw, wheat bran, gypsum, lime, and water.',
        keyFeatures: [
          'Dual counter-current helical ribbons for non-clumping blend',
          'Integrated water spray manifold with flow counter meter',
          'Pneumatic bomb-bay full bottom discharge gate',
          'Safety interlocked top access grates'
        ],
        specs: {
          'Shaft Speed': '28 RPM Heavy Torque',
          'Discharge Time': '45 Seconds',
          'Drive': 'Helical Bevel Gearbox SEW-Eurodrive',
          'Vessel Material': 'Corrosion-Resistant SS304 Clad'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'sub-4',
        name: 'Auto-Dosing Substrate Moisture Analyzer & Hydrator',
        category: 'Substrate Preparation — Oyster/Milky',
        model: 'HydroDose-Pro',
        capacity: 'Continuous In-line Analysis',
        power: '0.75 kW',
        description: 'Microwave/NIR based real-time continuous moisture sensor that automatically adjusts spray valve opening to achieve exact 65% target hydration.',
        keyFeatures: [
          'High accuracy ± 0.5% moisture measurement',
          'Proportional PID water injection control valve',
          'Digital LED readout with target limit alarms',
          'RS-485 Modbus telemetry connection to central SCADA'
        ],
        specs: {
          'Measurement Range': '35% to 85% Moisture Content',
          'Sensor Type': 'High-Frequency Microwave Resonator',
          'Operating Pressure': '2 to 6 Bar Water Infeed',
          'Enclosure': 'IP67 Stainless Steel'
        },
        roomAssociation: 'processing'
      }
    ]
  },
  {
    id: 4,
    slug: 'bag-filling-production',
    name: '4. Mushroom Bag Filling & Production',
    subtitle: 'Semi-Automatic Packing, Ring Capping & Bag Sealing',
    iconName: 'PackagePlus',
    roomAssociation: 'processing',
    machinery: [
      {
        id: 'bag-1',
        name: 'Automatic Rotary Mushroom Bagging & Inoculation Machine',
        category: 'Mushroom Bag Filling & Production',
        model: 'AutoBag-1800 Super',
        capacity: '1,200 - 1,800 Bags/Hour',
        power: '4.5 kW + 0.6 MPa Pneumatic Air',
        description: 'Full-cycle automated bag opener, auger compression filler, spawn metering, and neck-ring capping unit for commercial scale production.',
        keyFeatures: [
          'Adjustable bag height from 250mm to 550mm',
          'Precision auger packing density control preventing loose beds',
          'Automated central inoculation hole punch',
          'Touchscreen HMI with batch bag counters'
        ],
        specs: {
          'Bag Dimensions': 'Width 15-25 cm, Length 35-65 cm',
          'Packing Density': 'Adjustable 0.45 - 0.70 kg/dm³',
          'Air Consumption': '350 Liters/min at 6 Bar',
          'Speed': '25 to 30 bags per minute'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'bag-2',
        name: 'Pneumatic Ring Press & Cotton Plug Capper',
        category: 'Mushroom Bag Filling & Production',
        model: 'RingCap-Pneu800',
        capacity: '900 Bags/Hour',
        power: 'Pneumatic (6 Bar)',
        description: 'Foot-pedal or sensor-actuated ergonomic collar ring press that tightens breathable PP collars and non-absorbent breathable caps onto bag necks.',
        keyFeatures: [
          'Dual pneumatic cylinder with smooth stroke dampening',
          'Interchangeable mandrel rings (38mm, 42mm, 50mm)',
          'Stainless steel working table with bag height elevator',
          'Zero electrical fire hazard in dusty substrate environments'
        ],
        specs: {
          'Working Pressure': '4 - 7 Bar',
          'Table Height': '850 mm Ergonomic',
          'Weight': '45 kg',
          'Frame': 'SS304 Polished Stainless'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'bag-3',
        name: 'Continuous Heavy-Duty Band Heat Sealer',
        category: 'Mushroom Bag Filling & Production',
        model: 'BandSeal-CBS1100',
        capacity: '0 - 16 Meters/Minute Belt Speed',
        power: '750W Heater + 200W Conveyor',
        description: 'Continuous horizontal/vertical band sealer for sealing PP and HDPE mushroom cultivation bags with micro-pore filter strips.',
        keyFeatures: [
          'Teflon heating bands with rapid warm-up PID control',
          'Integrated date coding embosser wheel',
          'Adjustable conveyor height and conveyor tilt',
          'Heavy cooling block for instant airtight seal set'
        ],
        specs: {
          'Sealing Width': '10 - 12 mm Solid Seam',
          'Temperature Range': '0 - 300°C',
          'Max Conveyor Load': '10 kg single package / 30 kg total',
          'Speed': 'Up to 20 bags/min'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'bag-4',
        name: 'Cleated Incline Substrate Feeding Conveyor',
        category: 'Mushroom Bag Filling & Production',
        model: 'InclineFeed-6M',
        capacity: '5 Tons/Hour',
        power: '2.2 kW Motor with Gearbox',
        description: 'Sanitary food-grade PVC cleated incline conveyor elevating prepared substrate from the mixer directly into multiple bagging hoppers.',
        keyFeatures: [
          'High T-cleats (50mm) preventing substrate back-slide',
          'Stainless steel infeed hopper with anti-bridging agitator',
          'Emergency pull-cord stop wires along both sides',
          'Lockable swivel caster wheels for easy mobility'
        ],
        specs: {
          'Belt Width': '500 mm White Food Grade PVC',
          'Discharge Height': '2.6 to 3.4 Meters',
          'Angle of Incline': 'Up to 45 Degrees',
          'Motor': 'IP65 Washdown with Inverter Drive'
        },
        roomAssociation: 'processing'
      }
    ]
  },
  {
    id: 5,
    slug: 'commercial-growing-room',
    name: '5. Commercial Mushroom Growing Room',
    subtitle: 'Climate Control, Shelving, AHU, Humidifiers & Lighting',
    iconName: 'Warehouse',
    roomAssociation: 'growing_room',
    machinery: [
      {
        id: 'grow-1',
        name: 'Dutch Standard Aluminum 6-Tier Shelving Racks',
        category: 'Commercial Mushroom Growing Room',
        model: 'DutchRack-6T Pro',
        capacity: '400 - 600 m² Growing Area per Room',
        power: 'Passive Heavy Structural Load (up to 120 kg/m²)',
        description: 'High-tensile marine grade anodized aluminum shelving system designed specifically for industrial button and specialty mushroom cultivation.',
        keyFeatures: [
          'High-strength extruded aluminum alloy (zero corrosion)',
          'Side guides engineered for motorized compost filling & winch pulling',
          'Modular tier height (60cm - 65cm clearance between beds)',
          'Perforated aluminum or polypropylene sliding bottom mesh'
        ],
        specs: {
          'Number of Tiers': '4 to 7 Tiers (Standard 6 Tiers)',
          'Bed Width': '1.20 Meters or 1.34 Meters Dutch Standard',
          'Length': 'Up to 36 Meters continuous run',
          'Load Capacity': '120 kg per square meter of compost & casing'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'grow-2',
        name: 'Precision Mushroom Air Handling Unit (AHU)',
        category: 'Commercial Mushroom Growing Room',
        model: 'MushroomAHU-15000',
        capacity: '15,000 m³/hr Airflow',
        power: '7.5 kW VFD Fan + DX Cooling / Glycol Chiller',
        description: 'Dedicated environmental climate processor balancing cooling, heating, fresh air intake, CO2 control, and air recirculation.',
        keyFeatures: [
          'Direct-drive plug fan with backward curved blades and EC/VFD control',
          'Double-skinned 50mm polyurethane insulated sandwich panels',
          'Antimicrobial epoxy coated cooling and heating coils',
          'Motorized fresh air and exhaust dampers with Belimo actuators'
        ],
        specs: {
          'Air Volume': '8,000 to 18,000 m³/hr',
          'Cooling Capacity': '35 - 65 kW Thermal',
          'Static External Pressure': '450 - 650 Pa',
          'Air Filtration': 'G4 Pre-Filter + F7/F9 Medium Efficiency Filter'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'grow-3',
        name: 'Industrial Ultrasonic Cold Mist Humidifier',
        category: 'Commercial Mushroom Growing Room',
        model: 'UltraMist-24L',
        capacity: '24 Liters/Hour (95% RH Maintain)',
        power: '2.4 kW 220V',
        description: 'Piezoelectric high-frequency ultrasonic fogger creating 1-5 micron microscopic dry mist particles that humidify without wetting mushroom caps.',
        keyFeatures: [
          'Dry cold fog (sub-5 micron) prevents bacterial blotch and water stains',
          'Stainless steel SS304 water tank and mist chamber',
          'Automatic water level float valve with low-water cutoff',
          'Multi-port PVC ducting overhead mist distribution'
        ],
        specs: {
          'Mist Output': '24,000 ml/hr',
          'Particle Size': '1 - 5 Microns',
          'Relative Humidity Range': '50% to 99% RH ± 2%',
          'Water Supply': 'RO Demineralized Water Infeed Required'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'grow-4',
        name: 'Motorized Overhead CO2 Exhaust & Fresh Air Damper',
        category: 'Commercial Mushroom Growing Room',
        model: 'Damper-FreshAir 600',
        capacity: '0 - 100% Modulating Airflow',
        power: '24V DC Belimo Actuator',
        description: 'Modulating air dampers linked to multi-point NDIR CO2 sensors to expel dense carbon dioxide and introduce filtered ambient oxygen.',
        keyFeatures: [
          'Proportional 0-10V signal modulating actuator',
          'Airtight silicone blade edge seals (Class 4 low leakage)',
          'Integrated bug-screen and weather louvre hood',
          'HEPA intake hood prevent pest and phorid fly ingress'
        ],
        specs: {
          'Damper Size': '600 x 600 mm',
          'Torque': '10 Nm Actuator',
          'Signal': '4-20mA / 0-10V / Modbus RS485',
          'Material': 'Extruded Aerodynamic Aluminum Blades'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'grow-5',
        name: 'IP67 Waterproof LED Mushroom Photoperiod Lighting',
        category: 'Commercial Mushroom Growing Room',
        model: 'MushLux-IP67 Pro',
        capacity: '36W per Tube (140 lm/W)',
        power: '36W (Universal 110-240V)',
        description: 'Vapor-proof and chemical-resistant LED batten lights calibrated with specific 450nm-660nm light spectrum for pinhead stimulation.',
        keyFeatures: [
          'IP67 / IP69K certified steam and pressure washdown proof',
          'Ammonia and high humidity resistant PMMA tube housing',
          'Flicker-free dimmable ballast with digital timer',
          'Daisy-chain fast waterproof click connectors'
        ],
        specs: {
          'Length': '1200 mm',
          'Color Temp': '4000K Neutral / 6500K Cool White (Pinhead Boost)',
          'Lifespan': '> 50,000 Hours L70',
          'Beam Angle': '180 Degrees Wide Spread'
        },
        roomAssociation: 'growing_room'
      }
    ]
  },
  {
    id: 6,
    slug: 'button-mushroom-specialized',
    name: '6. Button Mushroom Specialized Equipment',
    subtitle: 'Ruffling Machines, Casing Mixers, Winches & Harvesting Lorries',
    iconName: 'Settings2',
    roomAssociation: 'growing_room',
    machinery: [
      {
        id: 'btn-1',
        name: 'Self-Propelled Compost Ruffling Machine',
        category: 'Button Mushroom Specialized Equipment',
        model: 'RuffleMaster-140',
        capacity: 'Fits standard 1.2m - 1.4m Dutch Beds',
        power: '1.5 kW Geared Electric Drive',
        description: 'High-speed rotary vertical tines that scratch and ruffle Phase-III compost post-casing to promote even mycelial intertwining and synchronised pinhead flush.',
        keyFeatures: [
          'Variable scratching depth control (0 - 45mm)',
          'Dual drive wheels running directly along shelf side-rails',
          'Spring-loaded safety reverse clutch',
          'Emergency trip wire stops'
        ],
        specs: {
          'Bed Width': '1.20 - 1.40 m',
          'Speed': '15 meters / min',
          'Ruffling Rotor': 'Hardened Stainless Steel Spring Tines',
          'Weight': '85 kg Lightweight Aluminum'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'btn-2',
        name: 'Casing Soil Pasteurization & Peat Moss Mixer',
        category: 'Button Mushroom Specialized Equipment',
        model: 'CaseMix-2000L',
        capacity: '2,000 Liters / Batch',
        power: '11 kW Motor + Direct Steam Ports',
        description: 'Paddle mixer with live low-pressure steam injection ports for blending peat moss, spent compost, coir pith, and lime at 65°C.',
        keyFeatures: [
          'Bi-directional heavy paddle design preventing soil compaction',
          'Live steam injection manifold for biological pasteurization',
          'Hydraulic bottom dump discharge hatch',
          'Water flow meter for exact water saturation'
        ],
        specs: {
          'Batch Time': '15 - 20 Minutes',
          'Tank Thickness': '6 mm Heavy Carbon Steel or SS304',
          'Steam Requirement': '80 kg/hr dry saturated steam',
          'Discharge Height': '1,200 mm for hopper cart access'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'btn-3',
        name: 'Hydraulic Compost & Casing Winch Puller',
        category: 'Button Mushroom Specialized Equipment',
        model: 'WinchPull-10T',
        capacity: '10 Ton Pulling Force',
        power: '5.5 kW Hydraulic Power Pack',
        description: 'Heavy hydraulic pulling winch used to pull the heavy polypropylene sliding netting along the aluminum shelves during compost loading and emptying.',
        keyFeatures: [
          'Variable pulling speed (1 - 12 meters/minute)',
          'High tensile steel aircraft cable drum with auto-level winder',
          'Automatic hydraulic pressure relief against bed jams',
          'Anchoring clamp system fitting Dutch rack upright columns'
        ],
        specs: {
          'Traction Force': '100 kN (10 Tons)',
          'Cable Diameter': '12 mm High-Tensile Aircraft Cable',
          'Motor': '5.5 kW 400V 3-Phase',
          'Mount': 'Quick-mount trolley with pneumatic wheels'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'btn-4',
        name: 'Ergonomic 3-Tier Mushroom Picking Lorries / Trolleys',
        category: 'Button Mushroom Specialized Equipment',
        model: 'HarvTrolley-3T',
        capacity: 'Up to 250 kg (Harvester + 6 Crates)',
        power: 'Manual or Electric Motorized Drive',
        description: 'Specialized mobile picker platforms that hook onto shelf side-rails, allowing pickers to harvest high tiers comfortably without ladders.',
        keyFeatures: [
          'Ergonomic adjustable footrest and cushioned swivel seat',
          'Multi-shelf crate holder for grade 1, grade 2, and stem trimmings',
          'Smooth nylon side-bearing wheels rolling on bed aluminum extrusions',
          'Dual safety handbrakes and fall-prevention harness anchor'
        ],
        specs: {
          'Platform Height': 'Adjustable for tiers 2 to 7',
          'Weight': '38 kg Aluminum Alloy',
          'Max Payload': '250 kg',
          'Accessories': 'Integrated digital weighing scale mount & LED headlight'
        },
        roomAssociation: 'growing_room'
      }
    ]
  },
  {
    id: 7,
    slug: 'cold-chain',
    name: '7. Cold Chain',
    subtitle: 'Blast Pre-Chillers, PUF Cold Rooms & Reefer Transport',
    iconName: 'Snowflake',
    roomAssociation: 'cold_storage',
    machinery: [
      {
        id: 'cold-1',
        name: 'Blast Rapid Pre-Chiller Unit',
        category: 'Cold Chain',
        model: 'BlastChill-1500',
        capacity: '1,500 kg Fresh Mushrooms / Batch',
        power: '18.5 kW Copeland / Bitzer Scroll Compressor',
        description: 'Forced-air rapid cooling room designed to pull mushroom core temperature down from 22°C to 3°C in under 45 minutes to lock in freshness.',
        keyFeatures: [
          'High-velocity axial cooling blowers preventing cap discoloration',
          'Stops mushroom stem elongation and cap opening immediately',
          'Microprocessor defrost controller with electric heaters',
          'Food grade SS304 inner cladding'
        ],
        specs: {
          'Target Temp': '+2°C to +4°C in 45 minutes',
          'Refrigerant': 'R404A / R448A Eco-friendly',
          'Air Circulation': '18,000 m³/hr',
          'Door': 'Heavy-duty insulated swing door with heater strip'
        },
        roomAssociation: 'cold_storage'
      },
      {
        id: 'cold-2',
        name: 'Commercial PUF Insulated Cold Storage Chamber',
        category: 'Cold Chain',
        model: 'ColdVault-100T',
        capacity: '10 to 50 Tons Storage',
        power: '22 kW Dual Compressor Redundant System',
        description: '100mm high-density Polyurethane Foam (PUF) walk-in holding cold room with automated humidity maintenance for multi-day mushroom storage.',
        keyFeatures: [
          '100mm thick tongue-and-groove camlock PUF panels (40 kg/m³ density)',
          'Dual redundant refrigeration units (automatic switchover on fault)',
          'Ultrasonic micro-humidity injection keeping relative humidity at 92%',
          'Heavy anti-skid aluminum chequered floor'
        ],
        specs: {
          'Operating Temp': '+1°C to +4°C Constant',
          'Humidity': '88% - 94% RH Controlled',
          'Panels': 'Pre-painted Galvanized Steel (PPGI) or SS304',
          'Data Logging': '24/7 Cloud SMS temperature alerts'
        },
        roomAssociation: 'cold_storage'
      },
      {
        id: 'cold-3',
        name: 'Refrigerated Transport Delivery Van Unit',
        category: 'Cold Chain',
        model: 'ReeferVan-ThermoMax',
        capacity: '1.5 - 3.5 Tons Cargo Load',
        power: 'Vehicle Engine Driven + 230V Electric Standby',
        description: 'Insulated refrigerated container mounted on commercial chassis with standby plug-in electric motor for intercity cold chain transit.',
        keyFeatures: [
          'Thermo-King / Carrier refrigeration evaporator',
          'Dual power: road engine compressor & warehouse plug-in',
          'Temperature digital cabin display with GPS route tracking',
          'Insulated rear roll-up door with strip curtain'
        ],
        specs: {
          'Temperature Range': '-2°C to +8°C',
          'Cargo Volume': '12 - 20 m³',
          'Box Insulation': '80mm Injection Polyurethane',
          'Standby Motor': '3 kW 230V Single Phase'
        },
        roomAssociation: 'cold_storage'
      },
      {
        id: 'cold-4',
        name: 'Wireless IoT Multi-Point Temperature & RH Loggers',
        category: 'Cold Chain',
        model: 'IoT-LogPro 4G',
        capacity: '16 Sensor Network Mesh',
        power: 'Rechargeable Lithium Battery (1 Year Life)',
        description: 'Wireless Zigbee / 4G data loggers deployed throughout the cold storage rooms and delivery trucks providing HACCP compliant audit reports.',
        keyFeatures: [
          'NIST traceable calibrated digital temperature & RH probes',
          'Instant WhatsApp & SMS alerts upon threshold breach',
          'Cloud dashboard with automated PDF compliance reports',
          'Encrypted onboard memory storing 100,000 data points'
        ],
        specs: {
          'Temp Accuracy': '± 0.2°C',
          'Battery Life': '12 Months on 15-minute log interval',
          'Connectivity': '4G LTE + Wi-Fi + BLE 5.0',
          'Enclosure': 'IP67 Waterproof Submersible'
        },
        roomAssociation: 'cold_storage'
      }
    ]
  },
  {
    id: 8,
    slug: 'mushroom-packaging',
    name: '8. Mushroom Packaging',
    subtitle: 'Tray Wrapping, MAP Gas Flushing & Checkweighing Lines',
    iconName: 'Boxes',
    roomAssociation: 'processing',
    machinery: [
      {
        id: 'pack-1',
        name: 'Automatic Cling-Film Punnet Tray Wrapping Machine',
        category: 'Mushroom Packaging',
        model: 'WrapPro-60 Ultra',
        capacity: '45 - 60 Trays / Minute',
        power: '3.5 kW',
        description: 'High-speed automatic tray stretch film wrapper that wraps pre-punneted 200g/250g fresh mushrooms neatly with bottom heating sealing plate.',
        keyFeatures: [
          'Sensor tray detection (no tray, no film feed)',
          'Electric film stretch mechanism saving up to 25% film consumption',
          'Fast changeover between 200g, 250g, and 500g punnet sizes',
          'Stainless steel washdown grade chassis'
        ],
        specs: {
          'Tray Dimensions': 'L (100-350mm) x W (90-230mm) x H (10-130mm)',
          'Film Width': '350 - 500 mm Stretch Film',
          'Speed': 'Up to 3,600 trays per hour',
          'Control': 'PLC with Color Touchscreen HMI'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'pack-2',
        name: 'Modified Atmosphere Packaging (MAP) Gas Flush Sealer',
        category: 'Mushroom Packaging',
        model: 'MAP-Seal 2400',
        capacity: '15 - 25 Cycles / Minute',
        power: '4 kW + Nitrogen/CO2 Infeed',
        description: 'Vacuum gas flushing tray sealer replacing ambient air with calibrated O2/CO2/N2 gas blend, extending fresh mushroom shelf-life from 4 days to 14 days.',
        keyFeatures: [
          'Busch high-capacity vacuum pump',
          'Precision gas proportioning blender (CO2, N2, O2 balance)',
          'Automatic film contour cutting around tray lip with scrap rewinder',
          'Zero oxygen leakage heat seal heads'
        ],
        specs: {
          'Residual Oxygen': '< 0.5% after gas flushing',
          'Gas Consumption': '15 - 30 Liters per cycle',
          'Chamber Material': 'Anodized Aluminum & SS304',
          'Cycles': 'Up to 1,200 trays/hour'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'pack-3',
        name: 'Dynamic High-Speed In-Line Checkweigher & Rejector',
        category: 'Mushroom Packaging',
        model: 'CheckWeigh-CW300',
        capacity: 'Up to 90 Packs / Minute',
        power: '600W',
        description: 'Continuous belt checkweigher that verifies exact tray net weight (e.g. 200g ± 2g) and pneumatically blows underweight/overweight packs off the line.',
        keyFeatures: [
          'High-sensitivity German load cell with digital filter',
          'Air-blast or pneumatic flipper arm rejector',
          'Real-time weight distribution histogram display',
          'Feedback signal to upstream filling line'
        ],
        specs: {
          'Weighing Range': '10g to 1,200g',
          'Accuracy': '± 0.2g',
          'Belt Speed': 'Up to 60 meters/min',
          'Data Interface': 'USB / Ethernet / Modbus TCP'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'pack-4',
        name: 'Continuous Inkjet (CIJ) Batch & Expiry Date Coder',
        category: 'Mushroom Packaging',
        model: 'InkJet-Pro 700',
        capacity: 'Up to 280 Meters / Minute Line Speed',
        power: '120W',
        description: 'Non-contact high-speed continuous inkjet printer applying batch numbers, packing time, MRP, and QR codes onto plastic film or punnet labels.',
        keyFeatures: [
          'Quick-drying food grade MEK / Ethanol inks',
          'Automatic printhead wash and nozzle seal preventing ink clogs',
          'Prints 1 to 5 lines of alphanumeric text and 2D Datamatrix / QR codes',
          'IP55 splashproof stainless steel housing'
        ],
        specs: {
          'Print Height': '1.5 mm to 12 mm',
          'Throw Distance': '2 mm to 20 mm from product',
          'Ink Colors': 'Black, Blue, White',
          'Connectivity': 'Ethernet, RS-232, USB'
        },
        roomAssociation: 'processing'
      }
    ]
  },
  {
    id: 9,
    slug: 'dry-mushroom-processing',
    name: '9. Dry Mushroom Processing',
    subtitle: 'Commercial Dehydrators, Pulverizers & Vacuum Sealers',
    iconName: 'Flame',
    roomAssociation: 'processing',
    machinery: [
      {
        id: 'dry-1',
        name: 'Industrial Heat Pump Mushroom Dehydrator Dryer',
        category: 'Dry Mushroom Processing',
        model: 'DryPump-500 Pro',
        capacity: '500 kg Fresh Mushroom / Batch',
        power: '12 kW Heat Pump (Delivers 36 kW Thermal)',
        description: 'Closed-loop heat pump condensation dryer that dries oyster, shiitake, and button mushrooms at 45°C - 60°C while conserving all aroma and vitamins.',
        keyFeatures: [
          'COP > 3.5 energy efficiency (saves up to 70% electricity vs resistance heaters)',
          'Closed-loop moisture extraction (retains mushroom natural umami and color)',
          'Stainless steel SS304 trolley system with 96 food grade mesh trays',
          'Multi-stage programmable drying curve (warm-up, dewatering, curing)'
        ],
        specs: {
          'Temperature Range': '35°C to 75°C Adjustable',
          'Moisture Removal': '35 Liters / Hour',
          'Tray Area': '65 m² Total Surface',
          'Chamber Wall': '100mm Polyurethane Fire-Retardant Panels'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'dry-2',
        name: 'Stainless Steel Water-Cooled Mushroom Pulverizer',
        category: 'Dry Mushroom Processing',
        model: 'PulverMax-80M',
        capacity: '80 - 150 kg/Hour',
        power: '7.5 kW Motor (2,850 RPM)',
        description: 'High-speed pin-mill grinder equipped with continuous water-cooling jacket to prevent heat buildup when grinding dried mushrooms into fine powder.',
        keyFeatures: [
          'Circulating water jacket keeps grinding chamber cool (< 40°C)',
          'Prevents scorching of medicinal mushroom terpenes and polysaccharides',
          'Interchangeable sieves from 60 mesh to 200 ultra-fine mesh',
          'Cyclone dust collector with pulse bag filter'
        ],
        specs: {
          'Fineness': '60 to 200 Mesh (75 - 250 Microns)',
          'Cooling Water': '15 Liters/min chiller connection',
          'Material': 'Full SS316 Food & Pharma Grade',
          'Noise': '< 75 dB with sound acoustic hood'
        },
        roomAssociation: 'processing'
      },
      {
        id: 'dry-3',
        name: 'Double-Chamber Commercial Vacuum Packaging Machine',
        category: 'Dry Mushroom Processing',
        model: 'DoubleVac-800',
        capacity: '4 - 8 Pouches / Minute',
        power: '2.2 kW High Vacuum Pump',
        description: 'Heavy dual-chamber vacuum sealing machine for packing dry whole mushrooms and mushroom powder in nitrogen-flushed heavy foil barrier pouches.',
        keyFeatures: [
          'Double swinging lid chamber (pack one side while the other seals)',
          'Gas-flushing nozzle kit for nitrogen gas cushion packaging',
          'Heavy 10mm wide double sealing wires',
          'Heavy duty Busch vacuum pump generating 99.9% vacuum'
        ],
        specs: {
          'Sealing Bar Length': '800 mm x 4 Bars (2 per chamber)',
          'Chamber Depth': '180 mm',
          'Cycle Time': '20 - 35 Seconds',
          'Body': 'SS304 Heavy Gauge Plate'
        },
        roomAssociation: 'processing'
      }
    ]
  },
  {
    id: 10,
    slug: 'electrical-automation',
    name: '10. Electrical & Automation',
    subtitle: 'Central SCADA, IoT Sensors, VFDs & Cloud Alert Panels',
    iconName: 'Cpu',
    roomAssociation: 'general',
    machinery: [
      {
        id: 'elec-1',
        name: 'Central Multi-Room PLC SCADA Master Panel',
        category: 'Electrical & Automation',
        model: 'SCADA-FarmMaster 24',
        capacity: 'Controls up to 24 Growing Rooms + Utilities',
        power: '1.5 kW Control Circuitry (24V DC Internal)',
        description: 'Industrial Siemens / Schneider PLC automation rack with 15-inch color capacitive touchscreen HMI for centralized farm supervision.',
        keyFeatures: [
          'Pre-programmed Dutch mushroom growth curves for all stages',
          'Automated control loops for cooling, heating, steam, fresh air, and humidification',
          'Historical trending graphs for Temp, RH, CO2, and compost core temperatures',
          'Remote smartphone app connectivity with biometric user roles'
        ],
        specs: {
          'Processor': 'Siemens S7-1500 / Schneider Modicon M241',
          'Display': '15.6 Inch Full HD Industrial Touch Panel',
          'Communication': 'Profinet, Modbus TCP/IP, BACnet',
          'Enclosure': 'IP65 Rittal Double Door Steel Cabinet'
        },
        roomAssociation: 'general'
      },
      {
        id: 'elec-2',
        name: 'Industrial NDIR Carbon Dioxide (CO2) Sensor Probe',
        category: 'Electrical & Automation',
        model: 'CO2-Sense Pro IP65',
        capacity: '0 - 10,000 ppm Range',
        power: '24V DC / 4-20mA Output',
        description: 'Heated dual-wavelength non-dispersive infrared (NDIR) CO2 transmitter with hydrophobic filter membrane resistant to 100% condensing humidity.',
        keyFeatures: [
          'Heated optical sensor cell prevents moisture condensation errors',
          'Dual-wavelength compensation ensuring zero drift over years',
          'Quick-disconnect waterproof bayonet connector',
          'Sub-ppm measurement precision during pinning stages'
        ],
        specs: {
          'Measurement Range': '0 to 5,000 ppm / 10,000 ppm',
          'Accuracy': '± (30 ppm + 3% of reading)',
          'Operating RH': '0 to 100% Non-condensing & condensing with heater',
          'Output': '4-20 mA & RS485 Modbus RTU'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'elec-3',
        name: 'Multi-Motor Variable Frequency Drive (VFD) Bank',
        category: 'Electrical & Automation',
        model: 'VFD-DriveArray 80kW',
        capacity: 'Controls 12 Fan & Pump Motors',
        power: '80 kW Combined Output',
        description: 'Clean energy motor speed control array adjusting AHU circulation fan RPM and water pump speeds to match exact microclimate requirements.',
        keyFeatures: [
          'Danfoss / ABB VLT HVAC drives with built-in bypass contactors',
          'Reduces electrical power consumption of fan motors by up to 40%',
          'Soft-start ramp preventing air duct pressure shocks',
          'Built-in harmonic filters and EMC suppression chokes'
        ],
        specs: {
          'Efficiency': '> 98.2%',
          'Protection': 'Overcurrent, Phase loss, Under/Overvoltage, Motor Thermal',
          'Cooling': 'Forced filtered air cooling with thermal cutoff',
          'Enclosure': 'IP54 Standard Floor Standing Cabinet'
        },
        roomAssociation: 'general'
      }
    ]
  },
  {
    id: 11,
    slug: 'material-handling',
    name: '11. Material Handling',
    subtitle: 'Forklifts, Hand Pallet Trucks, Harvest Crates & Scissor Lifts',
    iconName: 'Truck',
    roomAssociation: 'general',
    machinery: [
      {
        id: 'mat-1',
        name: 'Electric Walkie Stacker & Battery Forklift',
        category: 'Material Handling',
        model: 'VoltStack-1500',
        capacity: '1,500 kg Payload (Lift height up to 4.5m)',
        power: '24V / 210Ah Lithium-Iron Phosphate Battery',
        description: 'Zero-emission electric warehouse stacker with tight turning radius for navigating narrow corridor aisles between growing rooms.',
        keyFeatures: [
          'Zero fumes or emissions (critical around growing room air intakes)',
          'Lithium LiFePO4 battery with fast 2-hour opportunity charging',
          'Proportional hydraulic valve for ultra-gentle mushroom pallet lowering',
          'Electromagnetic regenerative braking'
        ],
        specs: {
          'Turning Radius': '1,350 mm Tight Isle Clearance',
          'Fork Length': '1,150 mm Standard Pallets',
          'Travel Speed': '5.5 km/h with load',
          'Mast': 'Triplex Full Free Lift 4.5m'
        },
        roomAssociation: 'general'
      },
      {
        id: 'mat-2',
        name: 'High-Lift Hydraulic Mobile Scissor Platform',
        category: 'Material Handling',
        model: 'ScissorLift-5M Pro',
        capacity: '350 kg (2 Technicians + Tools)',
        power: '24V DC Electric Motor Pump',
        description: 'Self-propelled compact scissor lift used for shelf maintenance, duct inspection, and high-tier shelf loading.',
        keyFeatures: [
          'Narrow chassis (780mm wide) passing through standard room doors',
          'Non-marking solid polyurethane tires',
          'Pothole protection mechanism and tilt sensor alarm',
          'Extendable roll-out platform deck (900mm extension)'
        ],
        specs: {
          'Working Height': 'Up to 6.5 Meters',
          'Platform Size': '1,650 x 740 mm (+900mm extension)',
          'Gradeability': '25%',
          'Weight': '1,300 kg'
        },
        roomAssociation: 'growing_room'
      },
      {
        id: 'mat-3',
        name: 'Food-Grade Perforated Plastic Harvest Crates',
        category: 'Material Handling',
        model: 'Crate-MushPro 15',
        capacity: '15 Liters (approx 5-6 kg mushrooms)',
        power: 'Manual Stackable',
        description: 'Heavy-duty virgin HDPE perforated plastic crates engineered with smooth rounded interior ribs to avoid bruising delicate button caps.',
        keyFeatures: [
          'Perforated sides and base for continuous cold air blast ventilation',
          'Cross-stackable and nestable when empty to save 60% floor space',
          'High temperature wash resistant (up to 95°C chemical sanitization)',
          'Smooth corners preventing mycelium and organic soil traps'
        ],
        specs: {
          'Outer Dimensions': '540 x 360 x 140 mm',
          'Tare Weight': '850 grams',
          'Material': '100% Virgin Food Contact Certified HDPE',
          'Load Stacking': 'Up to 12 Crates high loaded'
        },
        roomAssociation: 'general'
      }
    ]
  },
  {
    id: 12,
    slug: 'hygiene-sanitation',
    name: '12. Hygiene & Sanitation',
    subtitle: 'Air Showers, Boot Washers, Foam Stations & UV-C Sterilizers',
    iconName: 'ShieldCheck',
    roomAssociation: 'general',
    machinery: [
      {
        id: 'hyg-1',
        name: 'Automatic Double-Sided Sole & Boot Wash Station',
        category: 'Hygiene & Sanitation',
        model: 'CleanBoot-Pro 200',
        capacity: 'Throughput 15 Persons / Minute',
        power: '1.1 kW Motor + Water/Chemical Infeed',
        description: 'Pass-through motorized rotating brush station that scrubs boots with sanitizing foaming detergent before personnel enter growing corridors.',
        keyFeatures: [
          'Automatic optical sensor startup when worker steps onto grating',
          'Contra-rotating nylon bristled brushes cleaning soles and boot sides',
          'Venturi chemical proportioner injecting precise disinfectant ratio',
          'Walk-through turnstile release only after full cleaning cycle'
        ],
        specs: {
          'Material': 'Stainless Steel 304 Heavy Gauge',
          'Water Drain': 'DN50 Floor Drain Connection',
          'Cycle Time': '4 - 6 Seconds per person',
          'Dimensions': '1800 x 950 x 1250 mm'
        },
        roomAssociation: 'general'
      },
      {
        id: 'hyg-2',
        name: 'High-Velocity Personnel Cleanroom Air Shower',
        category: 'Hygiene & Sanitation',
        model: 'AirShower-HEPA 16N',
        capacity: 'Single / Dual Person Chamber',
        power: '3 kW High-Velocity Centrifugal Fans',
        description: 'Chamber located at the entry to the spawn lab and growing corridor with 16 adjustable nozzles blowing 25 m/s HEPA air to dislodge spore particles.',
        keyFeatures: [
          'Microprocessor programmed interlocked magnetic doors',
          '16 stainless steel multi-directional air nozzles',
          'Two-stage filtration: G4 Pre-filter + 99.99% H14 HEPA',
          'Emergency panic button inside chamber releasing both doors'
        ],
        specs: {
          'Nozzle Velocity': '23 - 28 m/s',
          'Shower Duration': '0 - 99 Seconds Adjustable (Default 15s)',
          'Construction': 'Double Wall SS304 or PPGI Coated Steel',
          'Lighting': 'Recessed LED with automatic sensor'
        },
        roomAssociation: 'spawn_lab'
      },
      {
        id: 'hyg-3',
        name: 'High-Pressure Foam & Hot Water Washdown Station',
        category: 'Hygiene & Sanitation',
        model: 'FoamJet-150 Bar',
        capacity: 'Water Flow 15 Liters/min at 150 Bar',
        power: '5.5 kW Heavy Triplex Ceramic Plunger Pump',
        description: 'Stationary high-pressure foam sanitizing unit with stainless steel hose reel for deep post-crop cookout cleaning of growing rooms.',
        keyFeatures: [
          'Generates clinging dense foam for prolonged chemical contact time',
          'Dual lance: high-pressure wash lance & low-pressure foam cannon',
          'Stainless steel spring-rewind hose reel with 25-meter high-pressure hose',
          'Thermal relief valve preventing pump overheating'
        ],
        specs: {
          'Operating Pressure': '30 to 150 Bar Adjustable',
          'Max Water Temp': 'Up to 80°C hot water infeed',
          'Pump': 'Nickel-plated brass manifold with ceramic pistons',
          'Hose': '25m Non-marking blue food grade wire-braided'
        },
        roomAssociation: 'general'
      }
    ]
  },
  {
    id: 13,
    slug: 'boiler-steam-system',
    name: '13. Boiler & Steam System',
    subtitle: 'Biomass/Wood/Diesel Boilers, Steam Manifolds & Water Softeners',
    iconName: 'Gauge',
    roomAssociation: 'boiler_room',
    machinery: [
      {
        id: 'boil-1',
        name: 'Biomass Briquette / Multi-Fuel Industrial Steam Boiler',
        category: 'Boiler & Steam System',
        model: 'SteamGen-1000B',
        capacity: '1,000 kg/Hour Steam Generation',
        power: '7.5 kW Feedwater Pump + Induced Draft Fan',
        description: 'High-efficiency 3-pass wet-back horizontal steam boiler supplying dry saturated steam for substrate pasteurization, room cookout, and heating.',
        keyFeatures: [
          'Eco-friendly biomass briquette, wood pellet, or diesel firing',
          'Thermal efficiency > 84% with economizer waste heat recovery',
          'Twin safety relief valves and dual reflex water level gauge glasses',
          'Automated soot-blowing ports'
        ],
        specs: {
          'Design Pressure': '10.54 kg/cm² (10 Bar / 150 psi)',
          'Operating Pressure': '6.0 to 8.5 Bar',
          'Heating Surface': '32 m²',
          'Fuel Type': 'Agricultural Biomass Briquettes, Wood, Agro-Waste'
        },
        roomAssociation: 'boiler_room'
      },
      {
        id: 'boil-2',
        name: 'Insulated High-Pressure Steam Distribution Manifold',
        category: 'Boiler & Steam System',
        model: 'SteamDist-8Zone',
        capacity: 'Distributes 8 High-Pressure Steam Lines',
        power: 'Passive Pressure Vessel',
        description: 'Engineered steam header manifold with pneumatic modulating control valves and thermostatic moisture traps distributing steam across the farm.',
        keyFeatures: [
          'Seamless ASTM A106 Grade B carbon steel pressure pipe',
          '100mm ceramic wool insulation jacket with embossed aluminum cladding',
          'Spirax Sarco thermodynamic steam traps removing all liquid condensate',
          'Independent pressure regulating valves (PRV) for each growing zone'
        ],
        specs: {
          'Working Pressure': '10 Bar Steam Rating',
          'Main Inlet': 'DN100 (4 inch) Flanged',
          'Zonal Outlets': '8 x DN50 (2 inch) Isolation Valve ports',
          'Code Compliance': 'ASME Section I & Indian Boiler Regulations (IBR)'
        },
        roomAssociation: 'boiler_room'
      },
      {
        id: 'boil-3',
        name: 'Fully Automatic Dual-Bed Water Softener Plant',
        category: 'Boiler & Steam System',
        model: 'SoftWater-Auto 5000',
        capacity: '5,000 Liters / Hour',
        power: '100W Electronic Multiport Valve',
        description: 'Ion-exchange softening plant reducing water total hardness to < 5 ppm to prevent calcium scale buildup in boiler tubes and humidifiers.',
        keyFeatures: [
          'FRP corrosion-proof composite pressure vessels',
          'High-exchange food grade cation exchange resin',
          'Automatic volume-metric regeneration controller based on water usage',
          'Heavy brine saturator tank with safety salt grid'
        ],
        specs: {
          'Raw Water Hardness': 'Up to 800 ppm treated to < 5 ppm',
          'Flow Rate': '5 m³/hr Continuous',
          'Resin Volume': '200 Liters Premium Polystyrene Cation Resin',
          'Operating Pressure': '2.0 to 5.0 Bar'
        },
        roomAssociation: 'boiler_room'
      }
    ]
  },
  {
    id: 14,
    slug: 'turnkey-commercial-farm',
    name: '14. Large Commercial/Turnkey Farm',
    subtitle: 'PEB Steel Structures, Agronomy Blueprint & Turnkey Engineering',
    iconName: 'Layers',
    roomAssociation: 'general',
    machinery: [
      {
        id: 'turn-1',
        name: 'Pre-Engineered Building (PEB) Commercial Farm Shed',
        category: 'Large Commercial/Turnkey Farm',
        model: 'TurnkeyPEB-5000M',
        capacity: '1,000 to 5,000 kg Daily Mushroom Yield',
        power: 'Master Grid Substation Integration',
        description: 'Complete industrial structural steel pre-engineered facility integrating cleanroom growing chambers, central service corridor, and processing bays.',
        keyFeatures: [
          'Thermal insulated roof and walls (PIR / PUF sandwich panels)',
          'Internal hermetic clean corridors preventing cross-contamination',
          'Sloped anti-bacterial drainage trenches throughout each growing chamber',
          'Engineered for seismic zone 4 and 160 km/h wind loads'
        ],
        specs: {
          'Building Area': '1,500 to 6,000 m²',
          'Insulation R-Value': 'R-30 Thermal Envelope',
          'Fire Rating': 'Class B1 Flame Retardant PIR Core',
          'Design Lifespan': '30+ Years Commercial Industrial Warranty'
        },
        roomAssociation: 'general'
      },
      {
        id: 'turn-2',
        name: 'Master Central Operations & Agronomy Control Room',
        category: 'Large Commercial/Turnkey Farm',
        model: 'AgroControl-VideoWall',
        capacity: 'Monitors entire 24/7 commercial plant operations',
        power: '3 kW Continuous with Dual Online UPS',
        description: 'Command center equipped with multi-screen monitoring video walls, camera feeds, environmental tracking, and yield predictive analytics.',
        keyFeatures: [
          'Real-time status of all 14 equipment categories and machine run-hours',
          'Predictive maintenance alerts for compressors, blowers, and boilers',
          'Harvest batch traceability database from spawn bottle to retail punnet',
          'Automated energy & yield optimization AI algorithms'
        ],
        specs: {
          'Displays': '4 x 55-inch Ultra-Narrow Bezel 4K Video Wall',
          'Workstations': 'Dual Redundant SCADA Server with RAID-10 Storage',
          'UPS': '6 kVA Online Double Conversion UPS (4-Hour Battery Backup)',
          'Data Storage': '10-Year Cloud & Local Synchronized Data Retention'
        },
        roomAssociation: 'general'
      },
      {
        id: 'turn-3',
        name: 'Automated Effluent Treatment & Spent Substrate Station',
        category: 'Large Commercial/Turnkey Farm',
        model: 'EcoRecycle-Plant 20',
        capacity: '20,000 Liters Water / Day + 15 Tons Spent Substrate',
        power: '15 kW',
        description: 'Environmental sustainability plant treating wash water for farm recycling and converting spent mushroom compost (SMC) into premium organic bio-fertilizer.',
        keyFeatures: [
          'Biological aeration tank with membrane bioreactor (MBR)',
          'Spent substrate bagging station for value-added retail compost sales',
          'Zero Liquid Discharge (ZLD) closed-loop environmental compliance',
          'Automated slurry separator screw press'
        ],
        specs: {
          'Treated Water Quality': 'BOD < 10 mg/l, COD < 50 mg/l (Irrigation Grade)',
          'Screw Press Output': 'Moisture reduced to < 45% for direct bagging',
          'Odor Control': 'Biofilter bark bed scrubber',
          'Compliance': 'State Pollution Control Board (SPCB) Standards'
        },
        roomAssociation: 'general'
      }
    ]
  }
];
