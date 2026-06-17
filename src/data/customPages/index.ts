import { SEOManualContent } from '../locationSEOContent';

/**
 * 📝 CUSTOM PAGES MANUAL OVERRIDES DIRECTORY (Mushroom Farm Custom Portal)
 * 
 * 🇮🇳 HINDI GUIDE (Aasan Shasbdo Mein):
 * Agar aap kisi bhi City, State, ya Village ke page ko CUSTOM CONTENT se badalna chahte hain,
 * toh aap is index.ts file mein bas us location aur page ka naam entry mein likh dein.
 * 
 * 👉 TARGET KEYS KA PATTERN:
 * 1. Specific Page ke liye syntax: "location_url-slug"
 *    - Example: Agar aapko '/mushroom-training-agra' badalna hai:
 *      * Location: agra
 *      * Keyword URL Part: mushroom-training
 *      * OVERRIDE KEY string: "agra_mushroom-training"
 * 2. Purane Location ke saare pages pe ek common content lagane ke liye syntax: "location"
 *    - Example: "patan" (Patan village ke sabhi 190+ pages par general text lag jaayega).
 * 
 * 👉 PAGES EDIT KARNE KI 2 METHODS:
 * Method A (Direct Entry): Niche "MANUAL_PAGE_OVERRIDES" map ke andar direct keys likhein.
 * Method B (Separate File): 
 *   - 'src/data/customPages/' folder mein new file banaein, eg: 'agra.ts'
 *   - Usme write karein: `export const agraTrainingContent: Partial<SEOManualContent> = { ... }`
 *   - Is file ke top pe import karke niche override map mein map kar dein.
 */

// ==========================================
// 📍 TEMPLATE 1: Patan Village Overrides
// ==========================================
export const patanVillageOverride: Partial<SEOManualContent> = {
  title: "Official Mushroom Spawn & Training in Patan Village",
  metaDesc: "Start high-yield oyster & button mushroom cultivation in Patan. Premium lab-tested spawn, guides, and commercial setups.",
  h1: "Patan Village Mushroom Farming Association",
  articleHtml: `
    <div class="prose max-w-none dark:prose-invert">
      <p>Welcome to the customized rural development page of Patan. Mushroom cultivation is a highly profitable home business for farmers, women, and youth in rural areas.</p>
      
      <h2>Available Support in Patan</h2>
      <ul>
        <li><strong>F1 Disease-Resistant Spawn:</strong> Oyster and Milky mushroom seeds delivered directly to local patan addresses.</li>
        <li><strong>Substrate guidance:</strong> Best methods to utilize local agricultural waste like wheat & paddy straw.</li>
        <li><strong>Free Call Counseling:</strong> Get guidance from certified growers.</li>
      </ul>
    </div>
  `
};

// ==========================================
// 📍 TEMPLATE 2: Agra Mushroom Training Overrides
// ==========================================
export const agraTrainingOverride: Partial<SEOManualContent> = {
  title: "Certified Mushroom Training Center in Agra (Offline / Online)",
  metaDesc: "Learn commercial button and oyster mushroom cultivation in Agra. Join our upcoming batch, practical hand-on demo, certificate included.",
  h1: "Practical Mushroom Cultivation Course in Agra, UP",
  articleHtml: `
    <div class="prose max-w-none dark:prose-invert">
      <p>Agra is emerging as an important cluster for protected agriculture and organic mushroom farming. Our specialized training program empowers local growers to set up climate-controlled mushroom rooms with low capital expenditure.</p>
      
      <h2>What You Will Learn in Agra Classes:</h2>
      <ol>
        <li><strong>Spawn and Substrate Preparation:</strong> Preparing raw materials using high-nitrogen organic additions.</li>
        <li><strong>Humidity & Temp Control:</strong> Crucial methods for Agra's hot summers to maintain standard 18-24°C in rooms.</li>
        <li><strong>Harvest & Packaging:</strong> Cold storage techniques for local Agra mandi delivery.</li>
      </ol>
      <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-yellow-500 mt-4">
        <strong>Batch Timings:</strong> New batch starts every Monday! Both Online Zoom classes and physical farm visits are available.
      </div>
    </div>
  `
};

// ==========================================
// 🎯 REGISTER ALL WORKABLE OVERRIDES HERE
// ==========================================
export const MANUAL_PAGE_OVERRIDES: Record<string, Partial<SEOManualContent>> = {
  // 1. Patan village general override (Sare path jo patan se matched hain, ispar redirect honge)
  "patan": patanVillageOverride,

  // 2. Agra specific Page Override
  // '/mushroom-training-agra' url hit hone pe ye specific content load hoga
  "agra_mushroom-training": agraTrainingOverride,
  "agra_mushroom-farming-training": agraTrainingOverride,
  "agra_mushroom-training-center": agraTrainingOverride,

  // Future manual pages override inputs yahan add karke direct update kar sakte hain!
  /*
  "surat_oyster-mushroom-spawn": {
    title: "Fresh Oyster Mushroom Spawn Supplier in Surat, Gujarat",
    h1: "Best Oyster Mushroom Culture & Seeds in Surat"
  },
  "mumbai_mushroom-farming": {
    title: "Urban Mushroom Micro-Farming Guide in Mumbai",
    h1: "Start Grow Oyster Mushrooms Indoors in Mumbai Apartments"
  }
  */
};

