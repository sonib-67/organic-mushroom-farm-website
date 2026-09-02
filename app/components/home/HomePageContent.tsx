'use client';

import React from 'react';
import { Hero } from './Hero';
import { EcosystemFlow } from './EcosystemFlow';
import { WhyChooseUs } from './WhyChooseUs';
import { FarmingModels } from './FarmingModels';
import { MushroomComparison } from './MushroomComparison';
import { ROICalculator } from './ROICalculator';
import { CriticalParameters } from './CriticalParameters';
import { ProductionSOP } from './ProductionSOP';
import { CompostUnits } from './CompostUnits';
import { Testimonials } from './Testimonials';
import { Marketplace } from './Marketplace';
import { ResourcesAndSOPs } from './ResourcesAndSOPs';
import { MushroomSEOSections } from './MushroomSEOSections';
import { ComparisonTable } from './ComparisonTable';
import { StatesSection } from './StatesSection';
import { CTASection } from './CTASection';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

export const HomePageContent: React.FC = () => {
  return (
    <ModalProvider>
      <div className="w-full relative selection:bg-emerald-500 selection:text-white">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Sections */}
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

        {/* Interactive Modals (Consultation, Cost & Profit Calculator, Quick Spawn Order, Launchpad Promo) */}
        <HomeModals />

        {/* Floating AI Assistant & Join Training (Left Side) */}
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
    </ModalProvider>
  );
};
