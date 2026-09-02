import React from 'react';
import type { Metadata } from 'next';
import { Hero } from './components/home/Hero';
import { EcosystemFlow } from './components/home/EcosystemFlow';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { FarmingModels } from './components/home/FarmingModels';
import { MushroomComparison } from './components/home/MushroomComparison';
import { ROICalculator } from './components/home/ROICalculator';
import { CriticalParameters } from './components/home/CriticalParameters';
import { ProductionSOP } from './components/home/ProductionSOP';
import { CompostUnits } from './components/home/CompostUnits';
import { Testimonials } from './components/home/Testimonials';
import { Marketplace } from './components/home/Marketplace';
import { ResourcesAndSOPs } from './components/home/ResourcesAndSOPs';
import { MushroomSEOSections } from './components/home/MushroomSEOSections';
import { ComparisonTable } from './components/home/ComparisonTable';
import { StatesSection } from './components/home/StatesSection';
import { CTASection } from './components/home/CTASection';

export const metadata: Metadata = {
  title: "Organic Mushrooms Farm | Setup, Spawn & Training",
  description: "Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.",
  openGraph: {
    title: "Organic Mushrooms Farm | Setup, Spawn & Training",
    description: "Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.",
    url: "https://organicmushroomsfarm.com",
    siteName: "Organic Mushrooms Farm",
    locale: "en_IN",
    type: "website",
  },
};

export default function NextHomePage() {
  return (
    <div className="w-full">
      <Hero />
      <EcosystemFlow />
      <WhyChooseUs />
      <FarmingModels />
      <MushroomComparison />
      <ROICalculator />
      <CriticalParameters />
      <ProductionSOP />
      <CompostUnits />
      <Testimonials />
      <Marketplace />
      <ResourcesAndSOPs />
      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
    </div>
  );
}
