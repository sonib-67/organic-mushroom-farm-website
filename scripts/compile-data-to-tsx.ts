import fs from 'fs';
import path from 'path';

function loadStates(): any[] {
  const statesDir = path.resolve('./src/data/states');
  const utDir = path.resolve('./src/data/union-territories');
  const results: any[] = [];

  if (fs.existsSync(statesDir)) {
    const files = fs.readdirSync(statesDir);
    files
      .filter(f => f.endsWith('.json'))
      .forEach(f => results.push(JSON.parse(fs.readFileSync(path.join(statesDir, f), 'utf8'))));
  }

  if (fs.existsSync(utDir)) {
    const files = fs.readdirSync(utDir);
    files
      .filter(f => f.endsWith('.json'))
      .forEach(f => results.push(JSON.parse(fs.readFileSync(path.join(utDir, f), 'utf8'))));
  }

  return results;
}

function loadCities(): any[] {
  const dir = path.resolve('./src/data/cities');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  const allCities: any[] = [];
  files
    .filter(f => f.endsWith('.json'))
    .forEach(f => {
      const content = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (Array.isArray(content)) {
        allCities.push(...content);
      }
    });
  return allCities;
}

function loadVillages(): any[] {
  const dir = path.resolve('./src/data/villages');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  const allVillages: any[] = [];
  files
    .filter(f => f.endsWith('.json'))
    .forEach(f => {
      const content = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (Array.isArray(content)) {
        allVillages.push(...content);
      }
    });
  return allVillages;
}

async function run() {
  console.log("Compiling distributed database files into one central /src/data/cities.tsx for easy manual editing...");

  const states = loadStates();
  const cities = loadCities();
  const villages = loadVillages();

  let code = `/**
 * Central Location Database for Programmatic Local SEO
 * Feel free to manually edit, update, or add cities/states/villages below!
 */

export interface StateData {
  state: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  cities: string[];
}

export interface CityData {
  city: string;
  slug: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  faq: { q: string; q_id?: string; a: string }[];
  schema?: Record<string, any>;
}

export interface VillageData {
  village: string;
  slug: string;
  city: string;
  state: string;
  metaTitle?: string;
  metaDescription?: string;
}

// 28 Indian States & 8 Union Territories
export const StatesData: StateData[] = ${JSON.stringify(states, null, 2)};

// 900+ Cities with metadata, FAQs, and custom content
export const CitiesData: CityData[] = ${JSON.stringify(cities, null, 2)};

// 2700+ Villages mapped under their respective parent cities
export const VillagesData: VillageData[] = ${JSON.stringify(villages, null, 2)};
`;

  const targetPath = path.resolve('./src/data/cities.tsx');
  fs.writeFileSync(targetPath, code, 'utf8');

  console.log(`Successfully compiled and written central database to: ${targetPath}`);
  console.log(`- States included: ${states.length}`);
  console.log(`- Cities included: ${cities.length}`);
  console.log(`- Villages included: ${villages.length}`);
}

run().catch(console.error);
