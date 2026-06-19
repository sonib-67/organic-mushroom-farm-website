import React from 'react';
import { Phone, MessageCircle, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  heading: string;
  sub: string;
  ctaText: string;
  ctaUrl: string;
  phone?: string;
}

export default function CTASection({ 
  heading, 
  sub, 
  ctaText, 
  ctaUrl, 
  phone = "+919203544140" 
}: CTASectionProps) {
  
  const formattedPhone = phone.replace(/[^\d+]/g, '');

  return (
    <section className="section-padding px-4 py-16 dark:bg-white/[0.02] bg-black/[0.02] rounded-[3rem] border dark:border-white/5 border-black/5 mb-16 relative overflow-hidden text-center">
      {/* Decorative ambient blobs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-start/10 blur-xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 blur-xl rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 leading-tight mb-6 tracking-tight">
          <span className="gradient-text">{heading}</span>
        </h2>
        
        <p className="text-sm md:text-base dark:text-slate-400 text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          {sub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href={`https://wa.me/${formattedPhone.replace('+', '')}?text=Hello,%20I%20am%20interested%20in%20Mushroom%20Farming`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Message on WhatsApp</span>
          </a>
          
          <a 
            href={`tel:${formattedPhone}`} 
            className="px-8 py-3.5 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-slate-900 font-bold hover:dark:bg-white/5 hover:bg-black/5 transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            <span>Talk to Advisor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
