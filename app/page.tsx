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
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AIChatWidget } from './components/chat/AIChatWidget';
import { StickyTrainingButton } from './components/sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from './components/sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from './components/sticky/MobileBottomStickyBar';

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
      {/* Top Navbar */}
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
      <Testimonials />
      <Marketplace />
      <ResourcesAndSOPs />
      <MushroomSEOSections />
      <ComparisonTable />
      <StatesSection />
      <CTASection />
      <Footer />

      {/* Floating Buttons on Left Side (AI Assistant + Join Training) */}
      <div className="floating-button-wrapper fixed left-3 md:left-[30px] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px] z-[99999]">
        <div className="pointer-events-auto">
          <AIChatWidget />
        </div>
        
        <div className="flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto">
          {/* Desktop Stack */}
          <div className="hidden md:flex flex-col gap-3 items-start">
            <div className="w-[140px] md:w-auto">
              <StickyTrainingButton size="normal" />
            </div>
          </div>

          {/* Mobile Stack */}
          <div className="h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]">
            <StickyTrainingButton size="small" />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button on Right Side */}
      <StickyWhatsAppButton />

      {/* Mobile Horizontal Sticky Bottom Bar */}
      <MobileBottomStickyBar />
    </div>
  );
}
