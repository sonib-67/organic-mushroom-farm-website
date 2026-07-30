import React, { useEffect, useRef } from 'react';
import { Languages } from 'lucide-react';

const GoogleTranslate = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    
    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      const addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'hi,en,as,bn,brx,doi,gu,kn,ks,kok,mai,ml,mni,mr,ne,or,pa,sa,sat,sd,ta,te,ur,es,fr,cy,gd,mi,zh-CN,zh-TW,ja,ko,ru,de,it,pt,ar,tr,fa,vi,id,ms,tl,sw,am,he,si,th',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      };
    }
    
    isLoaded.current = true;
  }, []);

  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition-all overflow-hidden shrink-0 cursor-pointer">
      <Languages size={20} className="text-slate-700 dark:text-slate-300 pointer-events-none" />
      <div 
        id="google_translate_element" 
        className="absolute inset-0 z-50 w-full h-full opacity-0 overflow-hidden"
      ></div>
    </div>
  );
};

export default GoogleTranslate;
