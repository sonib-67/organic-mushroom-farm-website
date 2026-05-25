import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { pixelTrack, pixelTrackCustom } from '../utils/pixel';
import { getUserLocation, type LocationData } from '../utils/location';

// To store session start time
const SESSION_KEY = 'omf_session_start';
const RETURNING_KEY = 'omf_returning_visitor';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const location = useLocation();
  const trackedPages = useRef<Set<string>>(new Set());
  const maxScroll = useRef<number>(0);
  const sessionStartTime = useRef<number>(Date.now());
  const clickHistory = useRef<{x: number, y: number, time: number}[]>([]);
  const userLoc = useRef<LocationData | null>(null);

  useEffect(() => {
    // Eagerly load location tracking in the background
    getUserLocation().then((loc) => {
      userLoc.current = loc;
    }).catch(() => {});
  }, []);

  // Analytics Helper
  const trackToAll = (eventName: string, data: any = {}) => {
    const finalData = { ...data, location: userLoc.current };

    // 1. Meta Pixel
    pixelTrackCustom(eventName, finalData);

    // 2. Google Analytics (GA4)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, finalData);
    }

    // 3. Google Tag Manager (dataLayer)
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...finalData });
    }
  };

  useEffect(() => {
    // 1. Check returning visitor
    const isReturning = localStorage.getItem(RETURNING_KEY) === 'true';
    if (!isReturning) {
      localStorage.setItem(RETURNING_KEY, 'true');
    }

    // 2. Session start
    if (!sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, Date.now().toString());
      trackToAll('SessionStart', {
        is_returning: isReturning,
        device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        referrer: document.referrer || '',
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct'
      });
    } else {
      sessionStartTime.current = parseInt(sessionStorage.getItem(SESSION_KEY) || Date.now().toString(), 10);
    }

    // Error Tracking
    const handleGlobalError = (event: ErrorEvent) => {
      trackToAll('JavaScriptError', { error_message: event.message, filename: event.filename, lineno: event.lineno });
    };
    const handlePromiseRejection = (event: PromiseRejectionEvent) => {
      trackToAll('PromiseRejection', { reason: String(event.reason) });
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handlePromiseRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handlePromiseRejection);
    };
  }, []);

  useEffect(() => {
    // Prevent duplicate PageView tracker if already run by index.html on first load,
    // but in SPA we need to track route changes.
    if (!trackedPages.current.has(location.pathname)) {
      if (trackedPages.current.size > 0) { 
        pixelTrack('PageView');
        if (typeof window !== 'undefined' && window.gtag) {
           window.gtag('event', 'page_view', { page_path: location.pathname });
        }
        if (typeof window !== 'undefined' && window.dataLayer) {
           window.dataLayer.push({ event: 'virtual_page_view', page_path: location.pathname });
        }
      }
      trackedPages.current.add(location.pathname);

      // Track if it's a specific landing page
      if (location.pathname.includes('/training') || location.pathname.includes('/consultant')) {
         trackToAll('LandingPageVisit', { page_path: location.pathname });
      }
    }

    maxScroll.current = 0;
  }, [location.pathname, location.search]);

  useEffect(() => {
    // 3. Scroll tracking
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll.current && scrollPercent % 25 === 0 && scrollPercent > 0) {
        maxScroll.current = scrollPercent;
        trackToAll('ScrollDepth', { depth: scrollPercent, page_path: location.pathname });
      }
    };

    // 4. Exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        trackToAll('ExitIntent', { page_path: location.pathname });
      }
    };

    // 5. Session duration & time on page on beforeUnload
    const handleBeforeUnload = () => {
      const durationSecs = Math.round((Date.now() - sessionStartTime.current) / 1000);
      trackToAll('SessionDuration', { duration_seconds: durationSecs, page_path: location.pathname });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  // 6. Global Copy Tracking
  useEffect(() => {
     const handleCopy = () => {
        const selectedText = window.getSelection()?.toString();
        if (selectedText && selectedText.length > 0) {
           trackToAll('CopyText', { text_length: selectedText.length, page_path: location.pathname });
        }
     };
     document.addEventListener('copy', handleCopy);
     return () => document.removeEventListener('copy', handleCopy);
  }, [location.pathname]);

  // 7. Global Click Event Delegation for Buttons, Links, Rage Clicks, Dead Clicks
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const now = Date.now();
      
      // Rage Click Detection
      clickHistory.current.push({ x: e.clientX, y: e.clientY, time: now });
      clickHistory.current = clickHistory.current.filter(c => now - c.time < 2000);
      if (clickHistory.current.length >= 4) {
         trackToAll('RageClick', { page_path: location.pathname });
         clickHistory.current = []; // Reset mechanism
      }

      const target = e.target as HTMLElement;
      
      // Determine if clicking on a generic non-interactive element -> might be a dead click if text is selected? Or just nothing happens.
      const clickableElement = target.closest('a, button, input, select, textarea, details, [role="button"]') as HTMLElement;
      
      if (!clickableElement) {
        // Also check elements that look like interactive components
        const btnClasses = ['accordion', 'faq', 'gallery-item', 'card'];
        const isInteractive = btnClasses.some((c) => target.className.includes && target.className.includes(c));
        if (isInteractive) {
           trackToAll('ElementInteraction', { type: target.className.substring(0, 30), page_path: location.pathname });
        } else {
           // Dead Click - click on standard text/background
           trackToAll('DeadClick', { tag: target.tagName, page_path: location.pathname });
        }
        return;
      }

      const text = (clickableElement.innerText || clickableElement.textContent || '').trim().toLowerCase().substring(0, 50);
      const href = clickableElement.getAttribute('href') || '';
      
      // WhatsApp Tracking
      if (href.includes('wa.me') || href.includes('api.whatsapp.com') || text.includes('whatsapp')) {
        trackToAll('WhatsAppLead', { source_page: location.pathname, text_clicked: text });
        pixelTrack('Contact');
      }
      // Call Us / Phone Tracking
      else if (href.startsWith('tel:') || text.includes('call us')) {
        trackToAll('PhoneClick', { source_page: location.pathname });
        pixelTrack('Contact');
      }
      // Email Tracking
      else if (href.startsWith('mailto:')) {
        trackToAll('EmailClick', { source_page: location.pathname });
        pixelTrack('Contact');
      }
      // Training buttons
      else if (text.includes('training') || text.includes('course')) {
        trackToAll('TrainingInterested', { type: text.includes('online') ? 'Online' : text.includes('offline') ? 'Offline' : 'General', page_path: location.pathname });
      }
      // Consultant / Booking
      else if (text.includes('book') || text.includes('consultant')) {
        trackToAll('ConsultantBooked', { page_path: location.pathname });
        pixelTrack('Schedule');
      }
      // Payment / Buying
      else if (text.includes('buy') || text.includes('pay') || text.includes('checkout')) {
         trackToAll('BuyButton_Clicked', { text_clicked: text, page_path: location.pathname });
      }
      // Download
      else if (text.includes('download') || href.endsWith('.pdf')) {
         trackToAll('PDFDownloaded', { link: href, page_path: location.pathname });
      }
      // General CTA
      else {
         trackToAll('ButtonClick', { text: text || 'icon-button', tag: clickableElement.tagName, link: href, page_path: location.pathname });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [location.pathname]);

  // 8. Global Form Tracking Delegation
  useEffect(() => {
    const startedForms = new Set<string>();

    const handleFormStart = (e: Event) => {
      const target = e.target as HTMLElement;
      const form = target.closest('form');
      if (form) {
        const formId = form.id || form.className || 'unnamed_form';
        if (!startedForms.has(formId)) {
          startedForms.add(formId);
          trackToAll('FormStart', { form_id: formId, page_path: location.pathname });
        }
      }
    };

    const handleFormSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      const formId = form.id || form.className || 'unnamed_form';
      
      trackToAll('FormSubmit', { form_id: formId, page_path: location.pathname });
      pixelTrack('Lead');
      
      if (form.className.toLowerCase().includes('contact')) {
        trackToAll('ContactFormSubmitted', { page_path: location.pathname });
      } else if (form.className.toLowerCase().includes('consultant') || location.pathname.includes('consultant')) {
        trackToAll('HighIntentLead', { page_path: location.pathname });
      }
    };

    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('input', handleFormStart);
    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('input', handleFormStart);
    };
  }, [location.pathname]);

  return null;
}

