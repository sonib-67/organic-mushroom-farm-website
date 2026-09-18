const fs = require('fs');

const registrationClientCode = `"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Loader2, CheckSquare } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function RegistrationClient() {
  const searchParams = useSearchParams();
  const paymentId = searchParams?.get('id') || 'Unknown';
  const nameParam = searchParams?.get('name') || '';
  const phoneParam = searchParams?.get('phone') || '';
  const emailParam = searchParams?.get('email') || '';
  const typeParam = searchParams?.get('type') || 'training_basic';

  const isAdvanced = typeParam.includes('advanced');
  const price = isAdvanced ? '699' : '299';
  const trainingName = isAdvanced 
    ? 'Advanced Commercial Cultivation' 
    : 'Basic Mushroom Farming Training';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: nameParam,
    phone: phoneParam,
    email: emailParam,
    state: '',
    city: '',
    experience: '',
    interest: [] as string[],
    goal: '',
    planTime: '',
    planSpace: '',
    investment: '',
    support: [] as string[],
    source: '',
    whatsappUpdate: '',
    declaration: true,
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      name: nameParam || prev.name,
      phone: phoneParam || prev.phone,
      email: emailParam || prev.email,
    }));
  }, [nameParam, phoneParam, emailParam]);

  const whatsappText = \`Hello Organic Mushrooms Farm Team,
✅ Payment Successful
Name: \${formData.name}
Mobile: \${formData.phone}
Email: \${formData.email}
Payment ID: \${paymentId}

I have successfully enrolled in the \${trainingName} (₹\${price}).

Please share:
• Training access details
• Learning materials/PDF notes
• Training schedule
• WhatsApp support group link

I am excited to start my mushroom farming journey.

Thank you.\`;

  const whatsappUrl = \`https://wa.me/919203544140?text=\${encodeURIComponent(whatsappText)}\`;

  useEffect(() => {
    if (isSubmitted && pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = \`Invoice_\${formData.name.replace(/\\s+/g, '_')}_\${paymentId}.pdf\`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [isSubmitted, pdfUrl, formData.name, paymentId]);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, whatsappUrl]);

  // Lag-free and jump-free option handlers
  const handleRadioSelect = useCallback((field: 'experience' | 'goal' | 'investment' | 'source', value: string) => {
    setFormData(prev => (prev[field] === value ? prev : { ...prev, [field]: value }));
  }, []);

  const handleCheckboxToggle = useCallback((field: 'interest' | 'support', value: string) => {
    setFormData(prev => {
      const list = prev[field];
      const nextList = list.includes(value) ? list.filter(item => item !== value) : [...list, value];
      return { ...prev, [field]: nextList };
    });
  }, []);

  const handleTextChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Organic Mushroom Farm", 14, 20);

    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text("Tax Invoice / Receipt", 14, 30);

    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(\`Payment ID: \${paymentId}\`, 14, 36);
    doc.text(\`Date: \${new Date().toLocaleDateString()}\`, 14, 42);

    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("Customer Details", 14, 55);

    doc.setFontSize(11);
    doc.text(\`Full Name: \${formData.name}\`, 14, 63);
    doc.text(\`Mobile Number: \${formData.phone}\`, 14, 69);
    doc.text(\`Email Address: \${formData.email}\`, 14, 75);
    doc.text(\`City: \${formData.city}\`, 14, 81);
    doc.text(\`State: \${formData.state}\`, 14, 87);

    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Amount']],
      body: [
        [trainingName, \`Rs. \${price}\`],
        ['Tax (GST 18% included)', 'Included'],
        ['Total Paid', \`Rs. \${price}\`]
      ],
      theme: 'grid',
      headStyles: { fillColor: [126, 34, 206] }
    });

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    const finalY = (doc as any).lastAutoTable.finalY + 20;
    doc.text("Thank you for choosing Organic Mushroom Farm.", 14, finalY);
    doc.text("For support, contact: +91 9203544140", 14, finalY + 6);

    return doc;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill your Personal Details.");
      return;
    }
    if (!formData.experience) {
      alert("Please select your Farming Experience.");
      return;
    }
    if (!formData.goal) {
      alert("Please select your Goal.");
      return;
    }

    setLoading(true);
    try {
      const doc = generatePDF();
      const pdfBase64 = doc.output('datauristring');

      const res = await fetch('/api/training-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'DONE',
          data: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            state: formData.state,
            city: formData.city,
            experience: formData.experience,
            interest: formData.interest,
            goal: formData.goal,
            planTime: formData.planTime,
            planSpace: formData.planSpace,
            investment: formData.investment,
            support: formData.support,
            source: formData.source,
            price: \`Rs. \${price}\`,
            trainingName: trainingName,
            paymentId: paymentId,
          },
          pdfBase64: pdfBase64
        })
      });

      if (res.ok) {
        setPdfUrl(doc.output('bloburl'));
        setIsSubmitted(true);
      } else {
        alert("Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please take a screenshot and send to WhatsApp: +91 9203544140");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-transparent relative z-[99] pt-12 pb-6 px-4 flex flex-col items-center justify-center">
        <div className="bg-transparent text-center max-w-sm w-full space-y-3">
          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
          <h2 className="text-lg font-bold dark:text-white text-slate-900">Registration Complete!</h2>
          <p className="text-xs dark:text-slate-300 text-slate-700">Your invoice is downloading...</p>
          <p className="text-[11px] text-indigo-500 font-medium">Redirecting to WhatsApp for course access...</p>
          <Loader2 className="w-5 h-5 animate-spin text-indigo-500 mx-auto mt-3" />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-transparent relative z-[99] pt-6 pb-12 px-3.5"
      style={{ scrollBehavior: 'auto' }}
    >
      <div className="max-w-lg mx-auto bg-transparent">
        {/* Top Minimal Header - No box, 100% transparent */}
        <div className="text-center mb-4 bg-transparent">
          <div className="text-[11px] font-bold text-green-500 tracking-wide uppercase">
            Payment Verified (₹{price})
          </div>
          <h1 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
            {trainingName} Registration
          </h1>
        </div>

        {/* Completely Box-Free Transparent Form */}
        <form onSubmit={handleSubmit} className="bg-transparent space-y-3.5">
          
          {/* 1. Personal Details */}
          <div className="space-y-1.5 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              1. Personal Details
            </h3>
            <div className="space-y-1.5 bg-transparent">
              <input 
                type="text" 
                required 
                value={formData.name} 
                onChange={e => handleTextChange('name', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none transition-colors" 
                placeholder="Full Name *" 
              />
              <input 
                type="tel" 
                required 
                value={formData.phone} 
                onChange={e => handleTextChange('phone', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none transition-colors" 
                placeholder="Mobile Number *" 
              />
              <input 
                type="email" 
                required 
                value={formData.email} 
                onChange={e => handleTextChange('email', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none transition-colors" 
                placeholder="Email Address *" 
              />
            </div>
          </div>

          {/* 2. Location Details */}
          <div className="space-y-1.5 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              2. Location Details
            </h3>
            <div className="grid grid-cols-2 gap-3 bg-transparent">
              <input 
                type="text" 
                required 
                value={formData.state} 
                onChange={e => handleTextChange('state', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none transition-colors" 
                placeholder="State *" 
              />
              <input 
                type="text" 
                required 
                value={formData.city} 
                onChange={e => handleTextChange('city', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none transition-colors" 
                placeholder="City *" 
              />
            </div>
          </div>

          {/* 3. Farming Experience */}
          <div className="space-y-1 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              3. Farming Experience
            </h3>
            <div className="flex flex-col gap-0.5 bg-transparent">
              {['No experience, beginner', 'Have basic knowledge', 'Currently growing', 'Traditional farmer'].map((opt) => (
                <div 
                  key={opt} 
                  onClick={(e) => { e.preventDefault(); handleRadioSelect('experience', opt); }}
                  className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
                >
                  <input 
                    type="radio" 
                    readOnly
                    tabIndex={-1}
                    checked={formData.experience === opt} 
                    className="w-3.5 h-3.5 accent-indigo-600 pointer-events-none" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Mushroom Interest */}
          <div className="space-y-1 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              4. Mushroom Interest
            </h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 bg-transparent">
              {['Button (Winter)', 'Oyster (All season)', 'Milky (Summer)', 'Cordyceps'].map((opt) => (
                <div 
                  key={opt} 
                  onClick={(e) => { e.preventDefault(); handleCheckboxToggle('interest', opt); }}
                  className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
                >
                  <input 
                    type="checkbox" 
                    readOnly
                    tabIndex={-1}
                    checked={formData.interest.includes(opt)} 
                    className="w-3.5 h-3.5 accent-indigo-600 rounded pointer-events-none" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Your Goal */}
          <div className="space-y-1 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              5. Your Goal
            </h3>
            <div className="flex flex-col gap-0.5 bg-transparent">
              {['Start a commercial farm', 'Grow for personal use', 'Add to existing farm', 'Educational'].map((opt) => (
                <div 
                  key={opt} 
                  onClick={(e) => { e.preventDefault(); handleRadioSelect('goal', opt); }}
                  className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
                >
                  <input 
                    type="radio" 
                    readOnly
                    tabIndex={-1}
                    checked={formData.goal === opt} 
                    className="w-3.5 h-3.5 accent-indigo-600 pointer-events-none" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Farming Plan */}
          <div className="space-y-1.5 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              6. Farming Plan
            </h3>
            <div className="flex flex-col gap-2 bg-transparent">
              <select 
                value={formData.planTime} 
                onChange={e => handleTextChange('planTime', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 focus:outline-none focus:border-indigo-500 rounded-none cursor-pointer"
              >
                <option value="" disabled className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">When do you plan to start?</option>
                <option value="Immediately (Within 1 month)" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Immediately (Within 1 month)</option>
                <option value="Within 3 months" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Within 3 months</option>
                <option value="Within 6 months" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Within 6 months</option>
                <option value="Just exploring right now" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Just exploring right now</option>
              </select>

              <select 
                value={formData.planSpace} 
                onChange={e => handleTextChange('planSpace', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/15 dark:border-white/15 py-1 text-xs dark:text-white text-slate-900 focus:outline-none focus:border-indigo-500 rounded-none cursor-pointer"
              >
                <option value="" disabled className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Space Available?</option>
                <option value="No space yet (Planning to rent)" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">No space yet (Planning to rent)</option>
                <option value="Small Room (100 - 500 sq ft)" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Small Room (100 - 500 sq ft)</option>
                <option value="Medium (500 - 2000 sq ft)" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Medium (500 - 2000 sq ft)</option>
                <option value="Large Commercial (2000+ sq ft)" className="dark:bg-slate-900 text-slate-800 dark:text-slate-200">Large Commercial (2000+ sq ft)</option>
              </select>
            </div>
          </div>

          {/* 7. Planned Investment */}
          <div className="space-y-1 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              7. Planned Investment
            </h3>
            <div className="flex flex-col gap-0.5 bg-transparent">
              {['Under ₹50,000', '₹50,000 - ₹2 Lakhs', '₹2 Lakhs - ₹10 Lakhs', 'Above ₹10 Lakhs'].map((opt) => (
                <div 
                  key={opt} 
                  onClick={(e) => { e.preventDefault(); handleRadioSelect('investment', opt); }}
                  className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
                >
                  <input 
                    type="radio" 
                    readOnly
                    tabIndex={-1}
                    checked={formData.investment === opt} 
                    className="w-3.5 h-3.5 accent-indigo-600 pointer-events-none" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 8. Required Support */}
          <div className="space-y-1 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              8. Required Support
            </h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 bg-transparent">
              {['Spawn (Seeds) Supply', 'Mushroom Buyback', 'Farm Setup & Machinery', 'Subsidy Guidance'].map((opt) => (
                <div 
                  key={opt} 
                  onClick={(e) => { e.preventDefault(); handleCheckboxToggle('support', opt); }}
                  className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
                >
                  <input 
                    type="checkbox" 
                    readOnly
                    tabIndex={-1}
                    checked={formData.support.includes(opt)} 
                    className="w-3.5 h-3.5 accent-indigo-600 rounded pointer-events-none" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 9. How did you hear about us? */}
          <div className="space-y-1 bg-transparent">
            <h3 className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">
              9. How did you hear about us?
            </h3>
            <div className="flex flex-col gap-0.5 bg-transparent">
              {['Google Search', 'YouTube', 'Facebook / Instagram', 'WhatsApp'].map((opt) => (
                <div 
                  key={opt} 
                  onClick={(e) => { e.preventDefault(); handleRadioSelect('source', opt); }}
                  className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
                >
                  <input 
                    type="radio" 
                    readOnly
                    tabIndex={-1}
                    checked={formData.source === opt} 
                    className="w-3.5 h-3.5 accent-indigo-600 pointer-events-none" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Updates Declaration */}
          <div className="pt-1 bg-transparent">
            <div 
              onClick={(e) => { e.preventDefault(); setFormData(prev => ({ ...prev, declaration: !prev.declaration })); }}
              className="flex items-center gap-2 cursor-pointer py-1 select-none touch-manipulation active:opacity-75"
            >
              <input 
                type="checkbox" 
                readOnly
                tabIndex={-1}
                checked={formData.declaration} 
                className="w-3.5 h-3.5 accent-indigo-600 rounded pointer-events-none" 
              />
              <span className="text-[10px] dark:text-slate-400 text-slate-600 leading-tight">
                I want to receive PDF notes, class links, and farming updates on WhatsApp and Email.
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading || !formData.declaration} 
            className="w-full bg-gradient-to-r from-indigo-600 to-green-600 hover:from-indigo-700 hover:to-green-700 text-white font-bold py-2 rounded-lg text-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-3 shadow-md shadow-indigo-500/20 active:scale-[0.99] touch-manipulation"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckSquare className="w-3.5 h-3.5" />}
            {loading ? 'Submitting Details...' : 'Submit Form & Download Invoice'}
          </button>
        </form>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('app/training/register/RegistrationClient.tsx', registrationClientCode);
console.log('Successfully wrote streamlined, box-free RegistrationClient.tsx');
