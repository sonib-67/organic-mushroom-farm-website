'use client';
import React, { useEffect } from 'react';
import SEO from '@/src/components/SEO';
import { Helmet } from 'react-helmet-async';

const BlogButtonMushroomFarming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const discoverImage = "https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png";

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50 dark:bg-slate-950">
      <SEO 
        title="The Ultimate Guide to Organic Button Mushroom Farming"
        description="Learn the complete process of organic button mushroom farming, from grain spawn preparation to advanced indoor climate control and harvesting."
      />
      <Helmet>
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:image" content={discoverImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          Button Mushroom Farming: From Spawn Preparation to Farm Setup
        </h1>

        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img 
            src={discoverImage} 
            alt="Organic Button Mushroom Farm Setup" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6">
          <p>
            The demand for fresh, organically grown produce is surging, and button mushrooms (Agaricus bisporus) are at the forefront of this agricultural shift. Known for their dense nutritional profile and culinary versatility, button mushrooms offer a highly profitable opportunity for modern growers. Whether you are building a boutique local farm or scaling a commercial operation, mastering the controlled indoor environment is the key to consistent, high-yield harvests.
          </p>
          <p>
            Here is the essential blueprint for establishing a successful organic button mushroom farm, starting from the microscopic level of spawn preparation up to full-scale climate management.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Phase 1: Mastering Spawn Preparation</h2>
          <p>
            Spawn is the foundational "seed" of your mushroom crop. High-quality, vigorous spawn dictates the health of your entire growing cycle. Preparing your own spawn ensures organic integrity and significantly reduces long-term operational costs.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Grain Selection:</strong> Wheat, sorghum, or rye grains are the standard carriers. They must be thoroughly washed and boiled until they are soft but still intact.</li>
            <li><strong>Sterilization:</strong> The boiled grains are mixed with calcium carbonate (chalk) and calcium sulfate (gypsum) to prevent clumping and adjust the pH. The mixture is packed into glass bottles or specialized spawn bags and sterilized in an autoclave at 121°C (15 psi) for 1.5 to 2 hours.</li>
            <li><strong>Inoculation and Incubation:</strong> Once cooled, the sterile grains are inoculated with a pure button mushroom culture in a sterile environment (using a laminar flow hood). The bags are then incubated in a dark room at 24°C to 26°C. Within 15 to 20 days, the white mycelium will completely colonize the grain, creating your active spawn.</li>
          </ul>

          <div className="my-10 rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255582/harvesting-fresh-button-mushrooms_xvnvf2.png" 
              alt="Harvesting fresh button mushrooms" 
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Phase 2: Organic Compost Formulation</h2>
          <p>Button mushrooms do not grow in standard soil; they require a highly specific, nutrient-dense compost.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>The Mix:</strong> A standard organic compost recipe includes wheat straw, horse manure, poultry manure, organic urea, gypsum, and wheat bran.</li>
            <li><strong>The Composting Process:</strong> The ingredients are wetted and arranged in long stacks. Over 25 to 30 days, the piles are mechanically turned at regular intervals. This aerobic fermentation breaks down complex carbohydrates and kills off competitive molds and harmful nematodes.</li>
            <li><strong>Pasteurization:</strong> For professional indoor setups, the compost undergoes a final steam pasteurization phase in a closed tunnel at 59°C to 60°C to ensure a perfectly clean growing medium.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Phase 3: Indoor Farm Setup & Climate Control</h2>
          <p>Button mushrooms are highly sensitive to their environment. A successful indoor farm relies on precise climate control systems.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Infrastructure:</strong> Use insulated growing rooms equipped with vertical metal or PVC shelving racks to maximize vertical space.</li>
            <li><strong>Temperature & Humidity:</strong> 
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>During the Spawn Run (when the mycelium spreads through the compost), the room must be kept at 23°C to 25°C with a relative humidity of 85-90%.</li>
                <li>During Fruiting (pinning and harvesting), the temperature must be drastically dropped to 15°C to 18°C, and fresh air (CO2 ventilation) must be introduced to trigger mushroom formation.</li>
              </ul>
            </li>
            <li><strong>Lighting:</strong> Unlike plants, button mushrooms do not require light to grow. The growing rooms can remain dark, which also helps lower energy costs.</li>
          </ul>
          
          <div className="my-10 rounded-xl overflow-hidden shadow-md">
             <img 
              src="https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255585/successful-organic-mushroom-farmer_gxpbc3.png" 
              alt="Successful organic mushroom farmer" 
              className="w-full h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Phase 4: Casing and Harvesting</h2>
          <p>Once the mycelium has fully colonized the compost, it is covered with a 1.5 to 2-inch layer of "casing soil" (a sterilized mixture of peat moss, coir, and chalk). Casing holds moisture and provides the microclimate necessary for the mushrooms to form "pins."</p>
          <p>Within 15 to 20 days after casing, the first flush of white button mushrooms will be ready to harvest. With a well-maintained climate, a single batch of compost can yield three to four successive flushes.</p>
          
        </div>
      </article>
    </div>
  );
};

export default BlogButtonMushroomFarming;
