'use client';

import React from 'react';
import { ConsultationModal } from './ConsultationModal';
import { CostCalculatorModal } from './CostCalculatorModal';
import { QuickOrderModal } from './QuickOrderModal';
import { PromoModal } from './PromoModal';

export const HomeModals: React.FC = () => {
  return (
    <>
      <ConsultationModal />
      <CostCalculatorModal />
      <QuickOrderModal />
      <PromoModal />
    </>
  );
};
