import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const MushroomFarmingUsaGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <SEO 
        title="Mushroom Farming Usa Guide" 
        description="Mushroom Farming Usa Guide" 
        url="/mushroom-farming-usa-guide"
      />
      <h1 className="text-4xl font-bold dark:text-white text-slate-900">Mushroom Farming Usa</h1>
    </div>
  );
};

export default MushroomFarmingUsaGuide;
