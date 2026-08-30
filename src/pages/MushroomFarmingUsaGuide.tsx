import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const MushroomFarmingUsaGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-900">
      <SEO 
        title="Mushroom Farming USA Guide"
        description="Comprehensive guide to mushroom farming in the USA. Learn about indoor farming, climate control, and state-by-state strategies."
        url="/mushroom-farming-usa-guide"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-none text-sm md:text-sm">
          <h1 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6">
            Mushroom Farming USA Guide
          </h1>
          
          <div className="text-slate-700 dark:text-slate-300 space-y-6">
            <p>
              Welcome to the ultimate guide for mushroom farming in the United States. Whether you are a hobbyist or looking to start a commercial operation, understanding the regional climates and market demands across the USA is crucial.
            </p>
            <p>
              Below you will find our state-specific guides to help you start your profitable mushroom farming business.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl mt-10 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-6 mt-0">
              Regional Farming Guides
            </h2>
            <ul className="space-y-6 list-none pl-0">
              <li className="border-b border-slate-100 dark:border-slate-700 pb-6 last:border-0 last:pb-0">
                <Link 
                  to="/how-to-start-indoor-mushroom-farm-california" 
                  className="group flex flex-col no-underline"
                >
                  <span className="text-sm md:text-lg font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-2">
                    How to Start a Profitable Indoor Mushroom Farm in California
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    California is the heart of the organic food and farm-to-table movement in the USA. Learn how to master indoor climate control and bypass California's unpredictable heatwaves and dry spells.
                  </span>
                </Link>
              </li>
            
              <li className="border-b border-slate-100 dark:border-slate-700 pb-6 last:border-0 last:pb-0">
                <Link 
                  to="/mushroom-farming-san-diego" 
                  className="group flex flex-col no-underline"
                >
                  <span className="text-sm md:text-lg font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-2">
                    San Diego Indoor Mushroom Farming: A Practical Guide to Building Your Own Farm
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    Learn how to set up a low-cost, high-yield indoor mushroom grow room tailored to Southern California's unique climate.
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MushroomFarmingUsaGuide;
