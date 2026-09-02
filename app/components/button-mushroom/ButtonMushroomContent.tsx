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

import { ButtonMushroomGuideHero } from './ButtonMushroomGuideHero';
import { ButtonMushroomWhyKing } from './ButtonMushroomWhyKing';
import { ButtonMushroomPhases } from './ButtonMushroomPhases';
import { ButtonMushroomClimateTable } from './ButtonMushroomClimateTable';
import { ButtonMushroomEconomics } from './ButtonMushroomEconomics';
import { ButtonMushroomDiseases } from './ButtonMushroomDiseases';
import { ButtonMushroomFAQ } from './ButtonMushroomFAQ';
import { ButtonMushroomCTA } from './ButtonMushroomCTA';

export const ButtonMushroomContent: React.FC = () => {
  return (
    <ModalProvider>
      <div className="w-full relative selection:bg-emerald-500 selection:text-white">
        {/* Top Navbar */}
        <Navbar />

        {/* Hero Banner & Executive Stats */}
        <ButtonMushroomGuideHero />

        {/* Why Button Mushroom is King */}
        <ButtonMushroomWhyKing />

        {/* 5-Phase Technical SOP (Spawn, Compost, Casing, Pinning, Harvesting) */}
        <ButtonMushroomPhases />

        {/* Precision Climate Matrix Cheat Sheet */}
        <ButtonMushroomClimateTable />

        {/* Financial Unit Economics (AC Chamber vs Seasonal Winter) */}
        <ButtonMushroomEconomics />

        {/* Pest & Disease Biosecurity Protocols */}
        <ButtonMushroomDiseases />

        {/* FAQs */}
        <ButtonMushroomFAQ />

        {/* Lead Capture & Turnkey CTA */}
        <ButtonMushroomCTA />

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <HomeModals />

        {/* Floating AI Chat & Join Training (Left) */}
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

        {/* Floating WhatsApp Button on Right */}
        <StickyWhatsAppButton />

        {/* Mobile Horizontal Sticky Bottom Bar */}
        <MobileBottomStickyBar />
      </div>
    </ModalProvider>
  );
};
