import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import EcosystemFlow from '../components/home/EcosystemFlow';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FarmingModels from '../components/home/FarmingModels';
import MushroomComparison from '../components/home/MushroomComparison';
import ROICalculator from '../components/home/ROICalculator';
import CriticalParameters from '../components/home/CriticalParameters';
import ProductionSOP from '../components/home/ProductionSOP';
import CompostUnits from '../components/home/CompostUnits';

export const metadata: Metadata = {
  title: 'Organic Mushrooms Farm | Setup, Spawn & Training',
  description:
    'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NextHomePreview() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />
      <CompostUnits />
      {/* Homepage migration will be added section-by-section */}
    </main>
  );
}
