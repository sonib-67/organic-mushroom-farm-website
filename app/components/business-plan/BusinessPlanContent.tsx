'use client';

import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { AIChatWidget } from '../chat/AIChatWidget';
import { StickyTrainingButton } from '../sticky/StickyTrainingButton';
import { StickyWhatsAppButton } from '../sticky/StickyWhatsAppButton';
import { MobileBottomStickyBar } from '../sticky/MobileBottomStickyBar';
import { ModalProvider } from '../modals/ModalContext';
import { HomeModals } from '../modals/HomeModals';

import { BusinessPlanHero } from './BusinessPlanHero';
import { BusinessPlanVarieties } from './BusinessPlanVarieties';
import { BusinessPlanPillars } from './BusinessPlanPillars';
import { BusinessPlanFinancials } from './BusinessPlanFinancials';
import { BusinessPlanMarketing } from './BusinessPlanMarketing';
import { BusinessPlanSubsidies } from './BusinessPlanSubsidies';
import { BusinessPlanMistakesAndRoadmap } from './BusinessPlanMistakesAndRoadmap';
import { BusinessPlanFAQ } from './BusinessPlanFAQ';
import { BusinessPlanCTA } from './BusinessPlanCTA';

export const BusinessPlanContent: React.FC = () => {
  return (
    <ModalProvider>
      <div className="w-full relative selection:bg-emerald-500 selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero & Overview */}
        <BusinessPlanHero />

        {/* Step 1: Variety Selection */}
        <BusinessPlanVarieties />

        {/* Step 2-9: Operational SOP & Infrastructure Pillars */}
        <BusinessPlanPillars />

        {/* Unit Economics, CAPEX & OPEX Financials */}
        <BusinessPlanFinancials />

        {/* 5-Tier Marketing & Sales Distribution */}
        <BusinessPlanMarketing />

        {/* Government Subsidies & Bank Loans */}
        <BusinessPlanSubsidies />

        {/* Costly Mistakes & 5-Phase Roadmap */}
        <BusinessPlanMistakesAndRoadmap />

        {/* Real-World FAQs */}
        <BusinessPlanFAQ />

        {/* Conversion & Consultation CTA */}
        <BusinessPlanCTA />

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
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
