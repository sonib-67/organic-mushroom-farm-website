export const initAnalytics = () => {
  if (typeof window === 'undefined') return;
  
  // Only initialize once
  if ((window as any)._analyticsInitialized) return;
  (window as any)._analyticsInitialized = true;

  // Init Meta Pixel
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if(f.fbq) return; 
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if(!f._fbq) f._fbq = n; 
    n.push = n; 
    n.loaded = !0; 
    n.version = '2.0';
    n.queue = []; 
    t = b.createElement(e); 
    t.async = !0;
    t.src = v; 
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  
  (window as any).fbq('init', '925374987123460');
};

export const trackPageView = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

export const trackPurchase = (value: number, currency: string = "INR", items?: any[]) => {
  if (typeof window !== 'undefined') {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Purchase', { currency, value });
    }
    if ((window as any).gtag && items) {
      (window as any).gtag('event', 'purchase', {
        value,
        currency,
        items
      });
    }
  }
};

export const trackInitiateCheckout = (value: number, currency: string = "INR") => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout', { currency, value });
  }
};
