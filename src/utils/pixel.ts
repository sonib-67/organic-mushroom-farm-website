export const PIXEL_ID = '925374987123460';

// Type definitions for Meta Pixel
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const isBrowser = typeof window !== 'undefined';

// Enable debug mode to log events to console
const DEBUG_MODE = true;

const logEvent = (action: string, eventName: string, data?: any) => {
  if (DEBUG_MODE) {
    console.log(`[Meta Pixel] ${action}: ${eventName}`, data || '');
  }
};

const pushEventToDB = (eventName: string, data?: any) => {
  if (!isBrowser) return;
  try {
    const sessionId = sessionStorage.getItem('omf_session_start') || '';
    const utms = Object.fromEntries(new URLSearchParams(window.location.search).entries());
    
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name: eventName,
        event_data: data || {},
        session_id: sessionId,
        url: window.location.href,
        user_agent: navigator.userAgent,
        utm_params: utms
      })
    }).catch(() => {}); // silently fail to not interrupt UX
  } catch (e) {}
};

/**
 * Wait for fbq to be available
 */
const ensureFbq = (): boolean => {
  if (!isBrowser) return false;
  if (!window.fbq) {
    console.warn('[Meta Pixel] fbq not found yet.');
    return false;
  }
  return true;
};

/**
 * Standard Events
 */
export const pixelTrack = (eventName: string, data?: any) => {
  pushEventToDB(eventName, data);
  if (!ensureFbq()) return;
  logEvent('Track Standard', eventName, data);
  if (data) {
    window.fbq('track', eventName, data);
  } else {
    window.fbq('track', eventName);
  }
};

/**
 * Custom Events
 */
export const pixelTrackCustom = (eventName: string, data?: any) => {
  pushEventToDB(eventName, data);
  if (!ensureFbq()) return;
  logEvent('Track Custom', eventName, data);
  if (data) {
    window.fbq('trackCustom', eventName, data);
  } else {
    window.fbq('trackCustom', eventName);
  }
};

/**
 * Advanced Payment Tracking Helper
 */
export const trackPaymentStep = (step: 'InitiateCheckout' | 'AddPaymentInfo' | 'PaymentPending' | 'PaymentProcessing' | 'PaymentSuccess' | 'Purchase' | 'PaymentFailed' | 'PaymentCancelled' | 'RefundInitiated' | 'RefundCompleted', data: {
  value?: number;
  currency?: string;
  order_id?: string;
  payment_id?: string;
  content_name?: string;
  content_category?: string;
  user_email?: string;
  user_phone?: string;
}) => {
  pixelTrackCustom(step, data);
  if (step === 'Purchase') {
    pixelTrack('Purchase', {
      value: data.value,
      currency: data.currency || 'INR',
      content_name: data.content_name,
      content_ids: data.order_id ? [data.order_id] : [],
      content_type: 'product',
    });
  } else if (step === 'InitiateCheckout') {
    pixelTrack('InitiateCheckout', {
      value: data.value,
      currency: data.currency || 'INR',
      content_name: data.content_name,
    });
  } else if (step === 'AddPaymentInfo') {
    pixelTrack('AddPaymentInfo', {
      value: data.value,
      currency: data.currency || 'INR',
    });
  }
};

/**
 * Server-Side event payload helper (returns payload to be sent to Conversions API)
 */
export const buildCapiPayload = (eventName: string, eventData: any, userParams: any, reqUrl: string, clientIp: string, clientUserAgent: string) => {
  return {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: reqUrl,
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: clientUserAgent,
          ...userParams
        },
        custom_data: eventData
      }
    ]
  };
};

/**
 * Server-Side event sender (Can be called from API routes)
 */
export const sendCapiEvent = async (eventName: string, eventData: any, userParams: any, reqUrl: string, clientIp: string, clientUserAgent: string, accessToken?: string) => {
  const token = accessToken || process.env.META_CAPI_TOKEN;
  if (!token) {
    if (DEBUG_MODE) console.warn('[Meta CAPI] Missing Token, skipped sending event:', eventName);
    return;
  }
  const payload = buildCapiPayload(eventName, eventData, userParams, reqUrl, clientIp, clientUserAgent);
  try {
    const res = await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, access_token: token })
    });
    const result = await res.json();
    if (DEBUG_MODE) console.log(`[Meta CAPI] ${eventName} sent:`, result);
    return result;
  } catch (error) {
    console.error(`[Meta CAPI] Error:`, error);
  }
};
