import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ArticleWhatIsMushroomSpawn = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black">
      <SEO 
        title="What is Mushroom Spawn? Complete Beginner Guide (2026-27)"
        description="Everything you need to know about mushroom spawn, types of spawn, identification, and how to use it in India."
      />
      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Header Background */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-br from-green-900 to-slate-900 -z-10" />
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[url('https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/grid.svg')] opacity-20 -z-10" />
        
        <div className="container mx-auto px-6 lg:px-12 xl:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/70 text-xs font-mono uppercase tracking-widest mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/articles/mushroom-farming-beginner-guide-india-2026-2027" className="hover:text-white transition-colors">Articles</Link>
            <ChevronRight size={12} />
            <span>Mushroom Spawn Guide</span>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-16 border border-slate-200 shadow-2xl relative z-10"
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-3 py-1 rounded-full bg-primary-start/10 text-primary-start text-xs font-bold uppercase tracking-wider">
                  Complete Guide
                </span>
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Clock size={16} />
                  <span>8 min read</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                What is Mushroom Spawn? Complete Beginner Guide (2026–27)
              </h1>

              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary-start prose-a:no-underline hover:prose-a:underline">
                
                <h2 className="text-2xl mt-12 mb-6">Introduction — The Foundation of Mushroom Farming</h2>
                
                <p>
                  If you want to start mushroom farming — whether you are in Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, Patna, Ranchi, Bhopal, Indore, Jabalpur, Nagpur, Raipur, Surat, Vadodara, Chandigarh, Dehradun, Guwahati, Bhubaneswar, or anywhere else across India — the first thing you must understand is <strong>MUSHROOM SPAWN</strong>.
                </p>
                <p>
                  Just like seeds are essential for a crop, spawn is the essential starter material for mushroom cultivation. Many beginners search for 'mushroom seeds' online — but technically, mushrooms do not grow from seeds. What they are actually looking for is spawn: a substrate colonized with mushroom mycelium that acts as the 'seed' of the mushroom world.
                </p>
                <p>This complete guide covers everything you need to know:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>What mushroom spawn is and how it works</li>
                  <li>The 4 main types of spawn — grain, sawdust, liquid, and plug</li>
                  <li>How to identify high-quality spawn</li>
                  <li>Step-by-step spawning process with table</li>
                  <li>Profit calculation table by mushroom variety</li>
                  <li>Where to buy quality spawn across India and globally</li>
                </ul>

                <h2 className="text-2xl mt-12 mb-6">What is Mushroom Spawn? | Mushroom Seeds Explained</h2>
                
                <p>
                  Mushroom spawn is a biological starter material in which mushroom mycelium (the root-like network of fungal threads) has already been cultivated on a carrier substrate such as grain, sawdust, or straw. When you introduce spawn into a fresh substrate, the mycelium spreads, colonizes the material, and eventually produces mushroom fruiting bodies.
                </p>
                <p>
                  Think of spawn as the 'seed + germinated seedling' of mushrooms — it gives your crop a head start and dramatically increases your success rate compared to starting from spores.
                </p>
                <p>
                  Spawn is the critical input for every mushroom variety grown commercially across India and the world — Oyster (<em>Pleurotus ostreatus</em>), Button (<em>Agaricus bisporus</em>), Milky (<em>Calocybe indica</em>), Shiitake (<em>Lentinula edodes</em>), Reishi (<em>Ganoderma lucidum</em>), and more.
                </p>

                <h2 className="text-2xl mt-12 mb-6">4 Types of Mushroom Spawn | Which One Should You Use?</h2>
                
                <p>Choosing the right type of spawn is critical to your success. Here is a breakdown of all four types along with their best use cases:</p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse bg-white border border-slate-200">
                    <thead className="bg-[#1f3a2c] text-white">
                      <tr>
                        <th className="p-4 font-bold border border-slate-300">Spawn Type</th>
                        <th className="p-4 font-bold border border-slate-300">Description</th>
                        <th className="p-4 font-bold border border-slate-300">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold">Grain Spawn</td>
                        <td className="p-4 border border-slate-200">Mycelium grown on wheat/sorghum/corn grains — fast colonization</td>
                        <td className="p-4 border border-slate-200">Oyster, Button, Milky Mushroom</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold bg-slate-50">Sawdust Spawn</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">Mycelium colonized on hardwood sawdust</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">Shiitake, Reishi, Maitake</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold">Liquid Spawn</td>
                        <td className="p-4 border border-slate-200">Mycelium suspended in liquid nutrient solution — fastest spread</td>
                        <td className="p-4 border border-slate-200">Commercial farms, large-scale production</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold bg-slate-50">Plug Spawn</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">Wooden dowels colonized with mycelium</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">Log cultivation (Shiitake, Oyster)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">1. Grain Spawn — Most Popular for Beginners</h3>
                <p>
                  Grain spawn is produced by colonizing sterilized grains (wheat, sorghum/jowar, corn, rye) with mushroom mycelium. Each grain is coated in mycelium, creating thousands of colonization points when mixed into substrate. This makes colonization fast, even, and efficient.
                </p>
                <p>
                  Grain spawn is the go-to choice for Oyster mushroom cultivation, Button mushroom farming, and Milky mushroom production. It is widely used across India — from Madhya Pradesh and Uttar Pradesh to Maharashtra, Karnataka, Tamil Nadu, West Bengal, Punjab, and every northeastern state.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                  <li>Fastest colonization of all spawn types</li>
                  <li>Easiest to use — simply mix into pasteurized substrate</li>
                  <li>Best for beginners starting mushroom farming from scratch</li>
                  <li>Available Pan India — <Link to="/spawn">order online from organicmushroomfarm.shop</Link></li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">2. Sawdust Spawn — Best for Wood-Loving Varieties</h3>
                <p>
                  Sawdust spawn uses colonized hardwood sawdust (oak, teak, beech) as the carrier. It is specifically designed for wood-decomposing species like Shiitake and Reishi — mushrooms that naturally grow on dead or dying trees.
                </p>
                <p>
                  This type of spawn is gaining popularity in India, especially among farmers targeting premium export markets in UAE, Saudi Arabia, UK, USA, and Canada, where demand for Shiitake and Reishi is very high.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">3. Liquid Spawn — Advanced Commercial Farming</h3>
                <p>
                  Liquid spawn (also called liquid culture) contains mushroom mycelium suspended in a sterile liquid nutrient solution. It offers the fastest colonization speed and is ideal for large-scale commercial mushroom farms. Labs and advanced growers in cities like Pune, Bengaluru, Hyderabad, and Delhi use liquid spawn for high-volume production.
                </p>
                <p>
                  While more complex to handle and store, liquid spawn significantly reduces cycle times and increases yield consistency when used correctly.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">4. Plug Spawn — For Log Cultivation</h3>
                <p>
                  Plug spawn consists of small wooden dowels (pegs) that have been colonized with mycelium. They are hammered into holes drilled in fresh-cut hardwood logs. This method is traditional for Shiitake log cultivation and is popular in hilly states like Himachal Pradesh, Uttarakhand, Meghalaya, Sikkim, Nagaland, Mizoram, and Arunachal Pradesh.
                </p>

                <h2 className="text-2xl mt-12 mb-6">How to Identify High-Quality Mushroom Spawn</h2>
                
                <p>
                  The quality of your spawn directly determines the quality and quantity of your harvest. Poor spawn leads to contamination, crop failure, and wasted investment. Here is how to evaluate spawn before use:
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-green-700">Signs of Good Quality Spawn:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                  <li>Fully white or off-white mycelium throughout the bag — no bare patches</li>
                  <li>Clean earthy or mushroomy smell — no sour, ammonia, or rotten odor</li>
                  <li>Mycelium firmly coats every grain — grains should not be loose or bare</li>
                  <li>No visible condensation or excess moisture inside the bag</li>
                  <li>Properly sealed, undamaged packaging</li>
                  <li>Produced within the last 30-45 days — check manufacture date</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-red-700">Signs of Contaminated or Poor-Quality Spawn:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                  <li>Green patches — Trichoderma mold (the most common contaminant in mushroom farms)</li>
                  <li>Black, orange, or pink discoloration — bacterial contamination</li>
                  <li>Sour or fermented smell — substrate has gone anaerobic</li>
                  <li>Dry, shriveled, or hard grains — spawn is too old</li>
                  <li>Watery liquid pooling at the bottom — mycelium breakdown</li>
                </ul>

                <div className="bg-primary-start/10 border-l-4 border-primary-start p-6 rounded-r-xl my-8">
                  <p className="font-bold text-slate-900 m-0">Pro Tip:</p>
                  <p className="text-slate-700 mt-2 mb-0">
                    Always source spawn from a certified lab or trusted supplier. <strong>Organic Mushroom Farm</strong> (Jabalpur, Madhya Pradesh) supplies high-quality, lab-certified grain spawn, sawdust spawn, and more — with Pan India delivery to all states and cities. <Link to="/spawn" className="text-primary-start hover:underline font-bold">Visit our spawn store</Link> or call/WhatsApp <strong>9203544140</strong>.
                  </p>
                </div>

                <h2 className="text-2xl mt-12 mb-6">How to Use Mushroom Spawn | Step-by-Step Cultivation Guide</h2>
                
                <p>
                  The following process applies to grain spawn for Oyster mushroom cultivation — the most beginner-friendly and profitable mushroom to grow in India. This method works across all Indian states and climates with minor adjustments for temperature and humidity.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse bg-white border border-slate-200">
                    <thead className="bg-[#1f3a2c] text-white">
                      <tr>
                        <th className="p-4 font-bold border border-slate-300 w-16 text-center">Step</th>
                        <th className="p-4 font-bold border border-slate-300">Action</th>
                        <th className="p-4 font-bold border border-slate-300">Key Tip</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      {[
                        ["1", "Prepare substrate (paddy straw, wheat straw or sawdust)", "Pasteurize at 80-90°C for 1-2 hours"],
                        ["2", "Cool substrate to room temperature", "Must reach 28-30°C before spawning"],
                        ["3", "Mix spawn into substrate in sterile conditions", "Use 2-3% spawn rate by weight"],
                        ["4", "Pack into polybags and seal", "No air gaps — compact well"],
                        ["5", "Incubation period — keep in dark at 25-28°C", "15-20 days for full mycelium run"],
                        ["6", "Open bags, maintain 80-90% humidity", "Mushroom pins appear in 5-7 days"],
                        ["7", "Harvest before caps fully open", "Cut at base with clean knife"]
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="p-4 border border-slate-200 font-bold text-center">{row[0]}</td>
                          <td className="p-4 border border-slate-200">{row[1]}</td>
                          <td className="p-4 border border-slate-200 font-medium text-slate-900">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Temperature &amp; Humidity Quick Reference:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                  <li><strong>Incubation (colonization):</strong> 24-28°C, 70% humidity, dark</li>
                  <li><strong>Fruiting (pinning &amp; development):</strong> 18-24°C, 80-90% humidity, indirect light</li>
                  <li><strong>Harvesting:</strong> Before caps flatten out — typically 3-5 days after pins appear</li>
                </ul>

                <h2 className="text-2xl mt-12 mb-6">Mushroom Spawn Profit Calculator | How Much Can You Earn?</h2>
                
                <p>
                  The following table provides approximate profit estimates based on current Indian market rates (2026-27). Actual returns depend on your location, scale, substrate quality, and market access.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full text-left border-collapse bg-white border border-slate-200">
                    <thead className="bg-[#1f3a2c] text-white">
                      <tr>
                        <th className="p-4 font-bold border border-slate-300">Mushroom Variety</th>
                        <th className="p-4 font-bold border border-slate-300">Spawn Cost (per kg)</th>
                        <th className="p-4 font-bold border border-slate-300">Yield (per kg spawn)</th>
                        <th className="p-4 font-bold border border-slate-300">Estimated Profit</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold">Oyster Mushroom</td>
                        <td className="p-4 border border-slate-200">Rs. 150–200</td>
                        <td className="p-4 border border-slate-200">4–6 kg</td>
                        <td className="p-4 border border-slate-200 font-bold text-green-700">Rs. 600–1,200</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold bg-slate-50">Button Mushroom</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">Rs. 200–300</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">3–5 kg</td>
                        <td className="p-4 border border-slate-200 bg-slate-50 font-bold text-green-700">Rs. 500–1,000</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold">Milky Mushroom</td>
                        <td className="p-4 border border-slate-200">Rs. 200–250</td>
                        <td className="p-4 border border-slate-200">5–8 kg</td>
                        <td className="p-4 border border-slate-200 font-bold text-green-700">Rs. 800–1,500</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-slate-200 font-bold bg-slate-50">Shiitake Mushroom</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">Rs. 300–400</td>
                        <td className="p-4 border border-slate-200 bg-slate-50">2–4 kg</td>
                        <td className="p-4 border border-slate-200 bg-slate-50 font-bold text-green-700">Rs. 1,000–2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                  <p className="font-bold text-amber-900 m-0">Key Insight:</p>
                  <p className="text-amber-800 mt-2 mb-0">
                    Oyster mushroom is the most beginner-friendly and profitable mushroom in India. With a harvest cycle of just 25-30 days and minimal infrastructure requirements, it is ideal for farmers starting with limited space — even a 10x10 ft room is enough to begin. Metro cities like Delhi, Mumbai, Bengaluru, Hyderabad, and Chennai command retail prices of Rs. 150-200 per kg for fresh Oyster mushrooms.
                  </p>
                </div>

                <h2 className="text-2xl mt-12 mb-6">Mushroom Market in India — Why Now is the Best Time to Start</h2>
                
                <p>
                  India's mushroom market was valued at USD 1.58 billion in 2026 and is projected to reach USD 5.29 billion by 2035, growing at a CAGR of 12.84%. This explosive growth is driven by rising health awareness, increasing demand for plant-based protein, urban dietary shifts, and government support for mushroom cultivation as a sustainable agribusiness.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4">Key demand drivers in India today:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
                  <li>Rising vegetarian and vegan population seeking high-protein alternatives</li>
                  <li>Restaurant and hotel industry (HoReCa) sourcing fresh mushrooms year-round</li>
                  <li>Export demand from UAE, Saudi Arabia, UK, USA, Canada, and Southeast Asia</li>
                  <li>Government schemes and Krishi Vigyan Kendras (KVKs) promoting mushroom training</li>
                  <li>E-commerce platforms making direct farm-to-customer sales possible</li>
                </ul>

                <h2 className="text-2xl mt-12 mb-6">Where to Buy Mushroom Spawn in India | Pan India Spawn Supplier</h2>
                <p>
                  <strong>Organic Mushroom Farm</strong>, based in Jabalpur, Madhya Pradesh, is a trusted spawn supplier and mushroom farming resource serving customers across all Indian states and internationally. We deliver quality spawn to:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-black text-slate-900 mb-2">North India</h4>
                    <p className="text-sm text-slate-600">Delhi, Chandigarh, Lucknow, Agra, Varanasi, Kanpur, Meerut, Allahabad (Prayagraj), Gorakhpur, Dehradun, Shimla, Jammu, Srinagar, Amritsar, Ludhiana, Ambala, Faridabad, Gurgaon, Noida</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-black text-slate-900 mb-2">Central India</h4>
                    <p className="text-sm text-slate-600">Jabalpur, Bhopal, Indore, Gwalior, Rewa, Satna, Ujjain, Chhindwara, Sagar, Raipur, Bilaspur, Korba, Durg, Bhilai</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-black text-slate-900 mb-2">West India</h4>
                    <p className="text-sm text-slate-600">Mumbai, Pune, Nagpur, Nashik, Aurangabad, Kolhapur, Solapur, Amravati, Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Gandhinagar, Jaipur, Jodhpur, Udaipur, Kota, Ajmer, Bikaner</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-black text-slate-900 mb-2">South India</h4>
                    <p className="text-sm text-slate-600">Bengaluru, Chennai, Hyderabad, Coimbatore, Kochi, Thiruvananthapuram, Madurai, Visakhapatnam, Vijayawada, Guntur, Mysuru, Mangaluru, Hubli-Dharwad, Tiruchirappalli, Salem, Tirunelveli</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 md:col-span-2">
                    <h4 className="font-black text-slate-900 mb-2">East &amp; Northeast India</h4>
                    <p className="text-sm text-slate-600">Kolkata, Bhubaneswar, Cuttack, Guwahati, Patna, Ranchi, Dhanbad, Jamshedpur, Gaya, Muzaffarpur, Imphal, Shillong, Agartala, Aizawl, Kohima, Itanagar, Gangtok</p>
                  </div>
                </div>

                <div className="bg-[#1f3a2c] text-white p-8 rounded-2xl my-8">
                  <h3 className="text-2xl font-black mb-4">International Delivery</h3>
                  <p className="text-white/80">UAE, Saudi Arabia, UK, USA, Canada, Nepal, Bhutan, Bangladesh — <Link to="/training" className="text-[#a8e5af] hover:underline font-bold">contact us</Link> for international spawn supply and online mushroom farming training.</p>
                </div>

                <h2 className="text-2xl mt-12 mb-6">Our Services | Organic Mushroom Farm — Jabalpur, MP</h2>
                <p>We offer four core services designed to support mushroom farmers at every stage of their journey:</p>
                
                <div className="space-y-6 my-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                      <div className="w-6 h-6 rounded bg-primary-start/10 text-primary-start flex items-center justify-center text-sm">1</div>
                      Spawn Supply (Mushroom Seeds)
                    </h4>
                    <p className="text-slate-600 pl-8">Lab-certified grain spawn, sawdust spawn, and liquid culture for Oyster, Button, Milky, Shiitake, Reishi, and more. Fresh batches, contamination-free, and delivered Pan India.</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                      <div className="w-6 h-6 rounded bg-primary-start/10 text-primary-start flex items-center justify-center text-sm">2</div>
                      Mushroom Farming Training
                    </h4>
                    <p className="text-slate-600 pl-8">Online and offline training programs for beginners and intermediate farmers. Learn substrate preparation, spawning, environmental control, pest management, harvesting, and post-harvest handling. Physical training available at our Jabalpur farm.</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                      <div className="w-6 h-6 rounded bg-primary-start/10 text-primary-start flex items-center justify-center text-sm">3</div>
                      Farm Setup Assistance
                    </h4>
                    <p className="text-slate-600 pl-8">Planning a new mushroom farm? We provide end-to-end setup guidance — shed design, equipment sourcing, substrate setup, and first-batch supervision. Available for farms across India.</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                      <div className="w-6 h-6 rounded bg-primary-start/10 text-primary-start flex items-center justify-center text-sm">4</div>
                      Fresh &amp; Dry Mushroom Sales Support
                    </h4>
                    <p className="text-slate-600 pl-8">Already farming? We help you connect with buyers and markets. Guidance on drying, packaging, and selling fresh or dried mushrooms at the best price — locally and for export.</p>
                  </div>
                </div>

                <h2 className="text-2xl mt-12 mb-6">Frequently Asked Questions (FAQ)</h2>
                
                <div className="space-y-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Q1: What is the difference between mushroom spawn and mushroom seeds?</h3>
                    <p className="text-slate-600">Mushrooms do not technically have seeds. Spawn is a pre-colonized material (grains or sawdust covered in mycelium) that acts like seeds. When people search for 'mushroom seeds' online, they are almost always looking for mushroom spawn.</p>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Q2: How many mushrooms can I get from 1 kg of spawn?</h3>
                    <p className="text-slate-600">With Oyster mushroom grain spawn, you can typically expect 4-6 kg of mushrooms per 1 kg of spawn across 3-4 harvests (flushes). The complete crop cycle takes approximately 25-30 days from spawning to first harvest.</p>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Q3: Can I make spawn at home?</h3>
                    <p className="text-slate-600">Yes, but it requires a fully sterile lab environment — a pressure cooker, laminar flow hood, sterilized media, and clean technique. For beginners, buying ready-made quality spawn is strongly recommended. Home-made spawn without proper sterilization almost always leads to contamination and failed crops.</p>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Q4: How much space do I need to start mushroom farming?</h3>
                    <p className="text-slate-600">You can start mushroom farming with as little as 100 sq ft (10x10 feet) of covered space. Thousands of farmers across India — in Madhya Pradesh, Bihar, Uttar Pradesh, Maharashtra, Andhra Pradesh, and more — run profitable micro-farms from small rooms or sheds.</p>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Q5: What is organic mushroom farming?</h3>
                    <p className="text-slate-600">Organic mushroom farming means growing mushrooms without synthetic fertilizers, pesticides, or chemical additives — using only natural substrates (straw, sawdust, bran) and clean water. Organic-certified mushrooms command premium prices both domestically and in export markets like UAE, UK, USA, and Canada.</p>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Q6: How big is the mushroom market in India?</h3>
                    <p className="text-slate-600">India's mushroom market was valued at USD 1.58 billion in 2027 and is forecast to reach USD 5.29 billion by 2035 at a CAGR of 12.84%. The sector is driven by health trends, restaurant demand, and government support for agri-entrepreneurship.</p>
                  </div>
                </div>

              </div>

              {/* Call to Action Inside Article */}
              <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-[#1f3a2c] to-[#0f2a1c] rounded-3xl text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/grid.svg')] opacity-20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-4">Ready to start growing?</h3>
                  <p className="text-white/80 mb-8 max-w-xl mx-auto">
                    Get premium quality, lab-certified mushroom spawn delivered to your door anywhere in India.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/spawn" className="h-14 px-8 bg-[#a8e5af] hover:bg-white text-[#0f2a1c] font-bold rounded-xl flex items-center justify-center transition-colors">
                      View Spawn Pricing
                    </Link>
                    <a href="https://wa.me/919203544140" target="_blank" rel="noopener noreferrer" className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm border border-white/10">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleWhatIsMushroomSpawn;
