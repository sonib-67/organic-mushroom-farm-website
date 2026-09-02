'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'consultation' | 'quote_calculator' | 'quick_order' | null;

interface ModalContextType {
  activeModal: ModalType;
  modalData?: any;
  openConsultationModal: (initialData?: { category?: string; message?: string }) => void;
  openQuoteCalculatorModal: (initialData?: { variety?: string; area?: number }) => void;
  openQuickOrderModal: (initialData?: { variety?: string; quantity?: number }) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<any>(null);

  const openConsultationModal = (initialData?: { category?: string; message?: string }) => {
    setModalData(initialData || null);
    setActiveModal('consultation');
  };

  const openQuoteCalculatorModal = (initialData?: { variety?: string; area?: number }) => {
    setModalData(initialData || null);
    setActiveModal('quote_calculator');
  };

  const openQuickOrderModal = (initialData?: { variety?: string; quantity?: number }) => {
    setModalData(initialData || null);
    setActiveModal('quick_order');
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        modalData,
        openConsultationModal,
        openQuoteCalculatorModal,
        openQuickOrderModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useAppModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useAppModals must be used within a ModalProvider');
  }
  return context;
};
