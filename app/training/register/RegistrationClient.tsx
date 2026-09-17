"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Loader2, Download, CheckSquare } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function RegistrationClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract payment details
  const paymentId = searchParams?.get('id') || 'Unknown';
  const nameParam = searchParams?.get('name') || '';
  const phoneParam = searchParams?.get('phone') || '';
  const emailParam = searchParams?.get('email') || '';
  const typeParam = searchParams?.get('type') || 'training_basic';

  const price = typeParam.includes('advanced') ? '699' : '299';
  const trainingName = typeParam.includes('advanced') ? 'Advanced Commercial Cultivation' : 'Basic Mushroom Farming Training';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

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
    declaration: false,
  });

  useEffect(() => {
    // If user lands here directly without search params, wait a moment to ensure client load
    setFormData(prev => ({
      ...prev,
      name: nameParam || prev.name,
      phone: phoneParam || prev.phone,
      email: emailParam || prev.email,
    }));
  }, [nameParam, phoneParam, emailParam]);

  const whatsappText = `Hello Organic Mushrooms Farm Team,\n\n✅ Payment Successful\n\nName: ${formData.name}\nMobile: ${formData.phone}\nEmail: ${formData.email}\nPayment ID: ${paymentId}\n\nI have successfully enrolled in the ${trainingName} (₹${price}).\n\nPlease share:\n• Training access details\n• Learning materials/PDF notes\n• Training schedule\n• WhatsApp support group link\n\nI am excited to start my mushroom farming journey.\n\nThank you.`;
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

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleCheckboxChange = (field: 'interest' | 'support', value: string) => {
    setFormData(prev => {
      const currentList = prev[field];
      if (currentList.includes(value)) {
        return { ...prev, [field]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...currentList, value] };
      }
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
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

    // Customer Details
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("Customer Details", 14, 55);
    
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(`Full Name: ${formData.name}`, 14, 63);
    doc.text(`Mobile Number: ${formData.phone}`, 14, 69);
    doc.text(`Email Address: ${formData.email}`, 14, 75);
    doc.text(`City: ${formData.city}`, 14, 81);
    doc.text(`State: ${formData.state}`, 14, 87);

    // Table
    autoTable(doc, {
      startY: 95,
      head: [['Description', 'Qty', 'Amount']],
      body: [
        [trainingName, '1', `INR ${price}`],
      ],
      theme: 'grid',
      headStyles: { fillColor: [79, 70, 229] },
      styles: { fontSize: 11, cellPadding: 5 }
    });

    const finalY = (doc as any).lastAutoTable.finalY || 130;
    
    // Total Amount
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`Total Paid: INR ${price}`, 14, finalY + 10);

    // Footer
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`Thank you for registering for our INR ${price} ${trainingName}.`, 14, finalY + 25);
    
    // doc.save is removed so it doesn't download immediately
    return doc.output('datauristring');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.state || !formData.city || !formData.experience || formData.interest.length === 0 || !formData.goal || !formData.planTime || !formData.planSpace || !formData.source || !formData.whatsappUpdate || !formData.declaration) {
      alert("Please fill in all mandatory fields before submitting.");
      return;
    }

    setLoading(true);

    // Use setTimeout to allow UI to render loading state before heavy PDF generation blocks thread
    setTimeout(async () => {
      try {
        // Generate PDF Base64 FIRST
        const pdfBase64 = generatePDF();
        setPdfUrl(pdfBase64);

      const res = await fetch("/api/training-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: 'DONE',
          data: {
            ...formData,
            trainingName: trainingName,
            price: price,
            paymentId: paymentId
          },
          pdfBase64: pdfBase64
        })
      });

      if (!res.ok) {
        throw new Error("Failed to submit form data");
      }

      // Show success
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting the form. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 100);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4 relative z-[99] pt-24 pb-12 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="dark:bg-black/30 bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center border dark:border-white/10 border-black/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500"></div>
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 mb-4 tracking-tight">Registration Submitted Successfully! 🎉</h1>
          <p className="dark:text-slate-300 text-slate-700 mb-6 leading-relaxed text-sm">
            Your registration details have been received successfully.
            Our team will share the training schedule, joining instructions and other important updates with you through WhatsApp and/or email.
          </p>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 rounded-xl p-4 mb-6">
            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-3">
              We are automatically redirecting you to WhatsApp to receive your training/joining details instantly.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-bold animate-pulse mb-4">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span> Redirecting to WhatsApp chat...
            </div>
            
            <a 
              href={whatsappUrl}
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-all mb-3 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]"
            >
              Chat with us on WhatsApp
            </a>
            
            {pdfUrl && (
              <button 
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = pdfUrl;
                  link.download = `Invoice_${formData.name.replace(/\s+/g, '_')}_${paymentId}.pdf`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold py-3 px-6 rounded-xl transition-all mb-3 shadow-md"
              >
                <Download className="w-5 h-5" />
                Download Invoice Again
              </button>
            )}
            
            <p className="text-xs text-slate-500 dark:text-slate-400">
              If not redirected automatically, click the button above to share details and start your journey.
            </p>
          </div>

          <button 
            onClick={() => router.push('/')}
            className="w-full bg-slate-200 dark:bg-white/10 hover:bg-slate-300 hover:dark:bg-white/20 text-slate-800 dark:text-white font-bold tracking-wide py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent relative z-[99] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="dark:bg-black/30 bg-white/40 backdrop-blur-xl border-x border-t dark:border-white/10 border-black/10 rounded-t-3xl p-6 sm:p-10 shadow-sm border-b-4 border-indigo-500">
          <h1 className="text-2xl sm:text-3xl font-black dark:text-white text-slate-900 tracking-tight mb-2">{trainingName}</h1>
          <h2 className="text-xl font-bold text-indigo-600 mb-4">Registration Form</h2>
          <p className="dark:text-slate-300 text-slate-600 text-sm">Please fill in the details below to complete your enrollment.</p>
        </div>

        <form onSubmit={handleSubmit} className="dark:bg-black/30 bg-white/40 backdrop-blur-xl border-x border-b dark:border-white/10 border-black/10 rounded-b-3xl shadow-lg p-6 sm:p-10 space-y-6">
          
          {/* Section 1: Personal Details */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(1)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">1</span> 
                Personal Details
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 1 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 1 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-1">Full Name*</label>
                      <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-2.5 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-1">Number*</label>
                      <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-2.5 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your number" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-1">Email Address*</label>
                      <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-2.5 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your email address" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 2: Location Details */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(2)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">2</span> 
                Location Details
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 2 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 2 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-1">State*</label>
                      <input type="text" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-2.5 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Select your state" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-1">City / District*</label>
                      <input type="text" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-2.5 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your city or district" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 3: Mushroom Farming Experience */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(3)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">3</span> 
                Mushroom Farming Experience
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 3 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 3 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">What is your current level of experience in mushroom farming?*</label>
                    {['Beginner – I am completely new to mushroom farming', 'Basic Knowledge – I have some knowledge', 'Experienced – I am already involved in mushroom farming'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="radio" name="experience" value={opt} checked={formData.experience === opt} onChange={e => { setFormData({...formData, experience: e.target.value}); setActiveAccordion(4); }} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 4: Mushroom Interest */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(4)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">4</span> 
                Mushroom Interest
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 4 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 4 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">Which mushroom are you interested in learning about?*</label>
                    {['Oyster Mushroom', 'Button Mushroom', 'Milky Mushroom', 'All of the above', 'Other'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="checkbox" checked={formData.interest.includes(opt)} onChange={() => handleCheckboxChange('interest', opt)} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 rounded focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 5: Farming Goal */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(5)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">5</span> 
                Your Farming Goal
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 5 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 5 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">Why are you joining this training?*</label>
                    {['I want to start a mushroom farming business', 'I want to learn mushroom farming', 'I want to start mushroom farming as a side business', 'I already have a farm and want to improve my production', 'I am exploring mushroom farming as a business opportunity', 'Other'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="radio" name="goal" value={opt} checked={formData.goal === opt} onChange={e => { setFormData({...formData, goal: e.target.value}); setActiveAccordion(6); }} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 6: Farming Plan */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(6)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">6</span> 
                Farming Plan
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 6 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 6 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">When are you planning to start mushroom farming?*</label>
                      {['Immediately', 'Within 1–3 months', 'Within 3–6 months', 'After 6 months', 'Not decided yet'].map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                          <input type="radio" name="planTime" value={opt} checked={formData.planTime === opt} onChange={e => setFormData({...formData, planTime: e.target.value})} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                          <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">Do you currently have space available for mushroom farming?*</label>
                      {['Yes', 'No', 'I am planning to arrange it'].map((opt, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                          <input type="radio" name="planSpace" value={opt} checked={formData.planSpace === opt} onChange={e => { setFormData({...formData, planSpace: e.target.value}); if (formData.planTime) setActiveAccordion(7); }} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                          <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 7: Investment Planning */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(7)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">7</span> 
                Investment Planning
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 7 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 7 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">What is your approximate planned investment?</label>
                    {['Below ₹25,000', '₹25,000–₹50,000', '₹50,000–₹1 Lakh', '₹1–5 Lakh', 'Not decided yet'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="radio" name="investment" value={opt} checked={formData.investment === opt} onChange={e => { setFormData({...formData, investment: e.target.value}); setActiveAccordion(8); }} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 8: Support Required */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(8)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">8</span> 
                Support Required
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 8 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 8 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">What type of support may you need after the training?</label>
                    {['Mushroom Farm Setup', 'Mushroom Spawn', 'Business Planning', 'Marketing Support', 'Government Subsidy Information', 'Consultancy', 'I am not sure yet'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="checkbox" checked={formData.support.includes(opt)} onChange={() => handleCheckboxChange('support', opt)} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 rounded focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 9: How Did You Hear About Us? */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(9)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">9</span> 
                How Did You Hear About Us?
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 9 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 9 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">How did you hear about our Mushroom Farming Training?*</label>
                    {['Google Search', 'Facebook', 'Instagram', 'YouTube', 'WhatsApp', 'Friend / Referral', 'Other'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="radio" name="source" value={opt} checked={formData.source === opt} onChange={e => { setFormData({...formData, source: e.target.value}); setActiveAccordion(10); }} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 10: Communication Preference */}
          <div className="border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden">
            <button type="button" onClick={() => toggleAccordion(10)} className="w-full dark:bg-white/5 bg-black/5 flex items-center justify-between p-4 sm:p-5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors text-left">
              <h3 className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">10</span> 
                Communication Preference
              </h3>
              <ChevronDown className={`w-5 h-5 dark:text-slate-400 text-slate-500 transition-transform ${activeAccordion === 10 ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeAccordion === 10 && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                  <div className="p-4 sm:p-5 border-t dark:border-white/10 border-black/10 space-y-3">
                    <label className="block text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">Would you like to receive training-related updates on WhatsApp?*</label>
                    {['Yes', 'No'].map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border rounded-xl hover:dark:bg-white/5 bg-black/5 cursor-pointer transition-colors">
                        <input type="radio" name="whatsappUpdate" value={opt} checked={formData.whatsappUpdate === opt} onChange={e => setFormData({...formData, whatsappUpdate: e.target.value})} className="w-4 h-4 text-indigo-600 dark:border-slate-600 border-slate-300 focus:ring-indigo-500" />
                        <span className="text-sm dark:text-slate-300 text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Declaration */}
          <div className="pt-6 border-t dark:border-white/10 border-black/10">
            <h3 className="font-bold dark:text-white text-slate-900 mb-4">Declaration</h3>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" required checked={formData.declaration} onChange={e => setFormData({...formData, declaration: e.target.checked})} className="w-5 h-5 mt-0.5 text-indigo-600 dark:border-slate-600 border-slate-300 rounded focus:ring-indigo-500" />
              <span className="text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                I confirm that the information provided above is correct. I understand that this registration is for the ₹{price} {trainingName}.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-green-500 hover:shadow-\[0_0_30px_rgba(99,102,241,0.4)\] text-white hover:scale-\[1.02\] active:scale-95 font-black text-lg py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-6 h-6 animate-spin" /> Processing & Generating Invoice...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Submit Now <Download className="w-5 h-5 ml-1" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
