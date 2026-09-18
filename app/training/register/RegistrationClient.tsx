"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle2, Loader2, CheckSquare, ShieldCheck, AlertTriangle, MessageCircle, Home } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function RegistrationClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentId = searchParams?.get('id') || 'Unknown';
  const tokenParam = searchParams?.get('token') || '';
  const nameParam = searchParams?.get('name') || '';
  const phoneParam = searchParams?.get('phone') || '';
  const emailParam = searchParams?.get('email') || '';
  const typeParam = searchParams?.get('type') || 'training_basic';

  const isAdvancedInitial = typeParam.includes('advanced');
  const initialPrice = isAdvancedInitial ? '699' : '299';
  const initialTrainingName = isAdvancedInitial 
    ? 'Advanced Commercial Cultivation' 
    : 'Basic Mushroom Farming Training';

  const [verifying, setVerifying] = useState(true);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [alreadySubmittedData, setAlreadySubmittedData] = useState<any>(null);
  const [verifiedPrice, setVerifiedPrice] = useState<string>(initialPrice);
  const [verifiedTrainingName, setVerifiedTrainingName] = useState<string>(initialTrainingName);
  const [tamperedAlert, setTamperedAlert] = useState<string | null>(null);

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

  // Verify payment status and guard against multiple submissions / tampering
  useEffect(() => {
    if (!paymentId || paymentId === 'Unknown') {
      setVerifying(false);
      return;
    }

    let isMounted = true;
    async function verifyPayment() {
      try {
        const queryParams = new URLSearchParams({
          id: paymentId,
          token: tokenParam,
          type: typeParam,
          name: nameParam,
          phone: phoneParam,
          email: emailParam
        });

        const res = await fetch(`/api/training-registration/verify?${queryParams.toString()}`);
        const data = await res.json();

        if (!isMounted) return;

        if (data.alreadySubmitted) {
          setAlreadySubmitted(true);
          setAlreadySubmittedData(data);
          setVerifying(false);
          return;
        }

        if (data.valid) {
          setVerifiedPrice(String(data.amount));
          setVerifiedTrainingName(data.planName);
          if (data.tampered) {
            setTamperedAlert(data.tamperMessage || `Payment verified as ₹${data.amount}. Training plan is locked to ${data.planName}.`);
          }
          if (data.customerName && !nameParam) {
            setFormData(prev => ({
              ...prev,
              name: data.customerName || prev.name,
              email: data.customerEmail || prev.email,
              phone: data.customerPhone || prev.phone
            }));
          }
        }
      } catch (err) {
        console.error("Verification error:", err);
      } finally {
        if (isMounted) setVerifying(false);
      }
    }

    verifyPayment();
    return () => { isMounted = false; };
  }, [paymentId, tokenParam, typeParam, nameParam, phoneParam, emailParam]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      name: nameParam || prev.name,
      phone: phoneParam || prev.phone,
      email: emailParam || prev.email,
    }));
  }, [nameParam, phoneParam, emailParam]);

  const whatsappText = `Hello Organic Mushrooms Farm Team,
✅ Payment Successful
Name: ${formData.name}
Mobile: ${formData.phone}
Email: ${formData.email}
Payment ID: ${paymentId}

I have successfully enrolled in the ${verifiedTrainingName} (₹${verifiedPrice}).

Please share:
• Training access details
• Learning materials/PDF notes
• Training schedule
• WhatsApp support group link

I am excited to start my mushroom farming journey.

Thank you.`;

  const whatsappUrl = `https://wa.me/919203544140?text=${encodeURIComponent(whatsappText)}`;

  useEffect(() => {
    if (isSubmitted && pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `Invoice_${formData.name.replace(/\s+/g, '_')}_${paymentId}.pdf`;
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

  // Instant native option handlers - 0ms delay, no re-render lag, no scroll jumps
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
    doc.text(`Payment ID: ${paymentId}`, 14, 36);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 42);

    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("Customer Details", 14, 55);

    doc.setFontSize(11);
    doc.text(`Full Name: ${formData.name}`, 14, 63);
    doc.text(`Mobile Number: ${formData.phone}`, 14, 69);
    doc.text(`Email Address: ${formData.email}`, 14, 75);
    doc.text(`City: ${formData.city}`, 14, 81);
    doc.text(`State: ${formData.state}`, 14, 87);

    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Amount']],
      body: [
        [verifiedTrainingName, `Rs. ${verifiedPrice}`],
        ['Tax (GST 18% included)', 'Included'],
        ['Total Paid', `Rs. ${verifiedPrice}`]
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

      const res = await fetch('/api/training-registration/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentId: paymentId,
          token: tokenParam,
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
            price: `Rs. ${verifiedPrice}`,
            trainingName: verifiedTrainingName,
            paymentId: paymentId,
          },
          pdfBase64: pdfBase64
        })
      });

      const resData = await res.json();

      if (res.status === 409 || resData.alreadySubmitted) {
        setAlreadySubmitted(true);
        setAlreadySubmittedData({
          planName: resData.record?.planName || verifiedTrainingName,
          amount: resData.record?.amount || Number(verifiedPrice),
          completedAt: resData.record?.completedAtFormatted || 'Earlier Today',
          customerName: resData.record?.customerName || formData.name,
          paymentId: paymentId
        });
        return;
      }

      if (res.ok) {
        setPdfUrl(String(doc.output('bloburl')));
        setIsSubmitted(true);
      } else {
        alert(resData.error || "Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please take a screenshot and send to WhatsApp: +91 9203544140");
    } finally {
      setLoading(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-transparent relative z-20 pointer-events-auto pt-16 px-4 flex flex-col items-center justify-center">
        <div className="text-center space-y-2">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mx-auto" />
          <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
            Verifying payment security & registration status...
          </p>
        </div>
      </div>
    );
  }

  if (alreadySubmitted) {
    return (
      <div className="min-h-screen bg-transparent relative z-20 pointer-events-auto pt-12 pb-10 px-4 flex flex-col items-center justify-center">
        <div className="max-w-md w-full text-center space-y-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Registration Already Completed!
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Your one-time registration form for this payment has already been recorded successfully.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 text-left text-xs space-y-1.5 border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Customer Name:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{alreadySubmittedData?.customerName || formData.name || 'Enrolled Student'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Payment ID:</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{paymentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Training Plan:</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{alreadySubmittedData?.planName || verifiedTrainingName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Amount Paid:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">₹{alreadySubmittedData?.amount || verifiedPrice} (Verified)</span>
            </div>
            {alreadySubmittedData?.completedAt && (
              <div className="flex justify-between border-t border-slate-200/40 dark:border-slate-700/40 pt-1.5 mt-1.5">
                <span className="text-slate-500 dark:text-slate-400">Completed At:</span>
                <span className="text-slate-600 dark:text-slate-400">{alreadySubmittedData.completedAt}</span>
              </div>
            )}
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            You do not need to fill out this form again. Our training team is preparing your batch details and joining link.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={whatsappUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageCircle size={15} />
              WhatsApp Support
            </a>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium py-2.5 px-4 rounded-xl transition-all"
            >
              <Home size={15} />
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-transparent relative z-20 pointer-events-auto pt-10 pb-6 px-4 flex flex-col items-center justify-center">
        <div className="text-center max-w-sm w-full space-y-2.5">
          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
          <h2 className="text-base font-bold dark:text-white text-slate-900">Registration Complete!</h2>
          <p className="text-[11px] dark:text-slate-300 text-slate-700">Your invoice is downloading automatically...</p>
          <p className="text-[10px] text-indigo-500 font-semibold">Redirecting to WhatsApp for course access...</p>
          <Loader2 className="w-4 h-4 animate-spin text-indigo-500 mx-auto mt-2" />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-transparent relative z-20 pointer-events-auto pt-4 pb-10 px-3"
      style={{ isolation: 'isolate' }}
    >
      <div className="max-w-md mx-auto">
        {/* Flat Minimal Header - No box, completely transparent so background design shines through */}
        <div className="text-center mb-3">
          <span className="inline-block text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Payment Verified (₹{verifiedPrice})
          </span>
          <h1 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
            {verifiedTrainingName} Registration
          </h1>
        </div>

        {/* Security Tamper Warning Banner if URL was altered */}
        {tamperedAlert && (
          <div className="mb-3 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-2 text-left">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-[11px] text-amber-700 dark:text-amber-300 leading-tight">
              {tamperedAlert}
            </div>
          </div>
        )}

        {/* 100% Flat & Box-Free Lightweight Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-slate-800 dark:text-slate-200">
          
          {/* 1. Personal Details */}
          <div className="space-y-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              1. Personal Details
            </h2>
            <div className="space-y-1.5">
              <input 
                type="text" 
                required 
                value={formData.name} 
                onChange={e => handleTextChange('name', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 px-0.5 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none" 
                placeholder="Full Name *" 
              />
              <input 
                type="tel" 
                required 
                value={formData.phone} 
                onChange={e => handleTextChange('phone', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 px-0.5 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none" 
                placeholder="Mobile Number *" 
              />
              <input 
                type="email" 
                required 
                value={formData.email} 
                onChange={e => handleTextChange('email', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 px-0.5 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none" 
                placeholder="Email Address *" 
              />
            </div>
          </div>

          {/* 2. Location Details */}
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              2. Location Details
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              <input 
                type="text" 
                required 
                value={formData.state} 
                onChange={e => handleTextChange('state', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 px-0.5 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none" 
                placeholder="State *" 
              />
              <input 
                type="text" 
                required 
                value={formData.city} 
                onChange={e => handleTextChange('city', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 px-0.5 text-xs dark:text-white text-slate-900 placeholder:text-slate-400/80 focus:outline-none focus:border-indigo-500 rounded-none" 
                placeholder="City *" 
              />
            </div>
          </div>

          {/* 3. Farming Experience */}
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              3. Farming Experience
            </h2>
            <div className="flex flex-col gap-1">
              {['No experience, beginner', 'Have basic knowledge', 'Currently growing', 'Traditional farmer'].map((opt) => (
                <label 
                  key={opt} 
                  className="flex items-center gap-2 cursor-pointer py-0.5 select-none touch-manipulation"
                >
                  <input 
                    type="radio" 
                    name="farming_experience"
                    checked={formData.experience === opt} 
                    onChange={() => handleRadioSelect('experience', opt)}
                    className="w-3.5 h-3.5 accent-indigo-600 cursor-pointer shrink-0" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 4. Mushroom Interest */}
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              4. Mushroom Interest
            </h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {['Button (Winter)', 'Oyster (All season)', 'Milky (Summer)', 'Cordyceps'].map((opt) => (
                <label 
                  key={opt} 
                  className="flex items-center gap-2 cursor-pointer py-0.5 select-none touch-manipulation"
                >
                  <input 
                    type="checkbox" 
                    checked={formData.interest.includes(opt)} 
                    onChange={() => handleCheckboxToggle('interest', opt)}
                    className="w-3.5 h-3.5 accent-indigo-600 rounded cursor-pointer shrink-0" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 5. Your Goal */}
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              5. Your Goal
            </h2>
            <div className="flex flex-col gap-1">
              {['Start a commercial farm', 'Grow for personal use', 'Add to existing farm', 'Educational'].map((opt) => (
                <label 
                  key={opt} 
                  className="flex items-center gap-2 cursor-pointer py-0.5 select-none touch-manipulation"
                >
                  <input 
                    type="radio" 
                    name="user_goal"
                    checked={formData.goal === opt} 
                    onChange={() => handleRadioSelect('goal', opt)}
                    className="w-3.5 h-3.5 accent-indigo-600 cursor-pointer shrink-0" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. Farming Plan */}
          <div className="space-y-1.5 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              6. Farming Plan
            </h2>
            <div className="flex flex-col gap-2">
              <select 
                value={formData.planTime} 
                onChange={e => handleTextChange('planTime', e.target.value)} 
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 text-xs dark:text-white text-slate-900 focus:outline-none focus:border-indigo-500 rounded-none cursor-pointer"
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
                className="w-full bg-transparent border-0 border-b border-black/20 dark:border-white/20 py-1 text-xs dark:text-white text-slate-900 focus:outline-none focus:border-indigo-500 rounded-none cursor-pointer"
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
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              7. Planned Investment
            </h2>
            <div className="flex flex-col gap-1">
              {['Under ₹50,000', '₹50,000 - ₹2 Lakhs', '₹2 Lakhs - ₹10 Lakhs', 'Above ₹10 Lakhs'].map((opt) => (
                <label 
                  key={opt} 
                  className="flex items-center gap-2 cursor-pointer py-0.5 select-none touch-manipulation"
                >
                  <input 
                    type="radio" 
                    name="planned_investment"
                    checked={formData.investment === opt} 
                    onChange={() => handleRadioSelect('investment', opt)}
                    className="w-3.5 h-3.5 accent-indigo-600 cursor-pointer shrink-0" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 8. Required Support */}
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              8. Required Support
            </h2>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              {['Spawn (Seeds) Supply', 'Mushroom Buyback', 'Farm Setup & Machinery', 'Subsidy Guidance'].map((opt) => (
                <label 
                  key={opt} 
                  className="flex items-center gap-2 cursor-pointer py-0.5 select-none touch-manipulation"
                >
                  <input 
                    type="checkbox" 
                    checked={formData.support.includes(opt)} 
                    onChange={() => handleCheckboxToggle('support', opt)}
                    className="w-3.5 h-3.5 accent-indigo-600 rounded cursor-pointer shrink-0" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 9. How did you hear about us? */}
          <div className="space-y-1 pt-1">
            <h2 className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              9. How did you hear about us?
            </h2>
            <div className="flex flex-col gap-1">
              {['Google Search', 'YouTube', 'Facebook / Instagram', 'WhatsApp'].map((opt) => (
                <label 
                  key={opt} 
                  className="flex items-center gap-2 cursor-pointer py-0.5 select-none touch-manipulation"
                >
                  <input 
                    type="radio" 
                    name="hear_source"
                    checked={formData.source === opt} 
                    onChange={() => handleRadioSelect('source', opt)}
                    className="w-3.5 h-3.5 accent-indigo-600 cursor-pointer shrink-0" 
                  />
                  <span className="text-[11px] dark:text-slate-300 text-slate-700 leading-tight">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 10. Updates Declaration */}
          <div className="pt-2">
            <label className="flex items-start gap-2 cursor-pointer py-0.5 select-none touch-manipulation">
              <input 
                type="checkbox" 
                checked={formData.declaration} 
                onChange={e => setFormData(prev => ({ ...prev, declaration: e.target.checked }))}
                className="w-3.5 h-3.5 mt-0.5 accent-indigo-600 rounded cursor-pointer shrink-0" 
              />
              <span className="text-[10px] dark:text-slate-400 text-slate-600 leading-normal">
                I want to receive PDF notes, class links, and farming updates on WhatsApp and Email.
              </span>
            </label>
          </div>

          {/* Submit Button - Compact, high performance */}
          <button 
            type="submit" 
            disabled={loading || !formData.declaration} 
            className="w-full bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg text-xs disabled:opacity-50 flex items-center justify-center gap-2 mt-3 cursor-pointer active:opacity-90 touch-manipulation"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckSquare className="w-3.5 h-3.5" />}
            {loading ? 'Submitting Details...' : 'Submit Form & Download Invoice'}
          </button>
        </form>
      </div>
    </div>
  );
}
