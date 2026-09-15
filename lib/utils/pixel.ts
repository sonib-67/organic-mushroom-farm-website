// Meta / FB Pixel tracking utility
export const trackPaymentStep = (step: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', step, data);
  }
};

export const pixelTrackCustom = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, data);
  }
};
