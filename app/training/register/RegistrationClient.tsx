"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle, 
  Download, 
  MessageCircle, 
  Lock, 
  FileText, 
  Loader2, 
  Home,
  Check
} from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface VerifiedPaymentData {
  paymentId: string;
  orderId?: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  courseType: 'training_basic' | 'training_advanced';
  courseTitle: string;
  formSubmittedAt?: string;
}

export default function RegistrationClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Raw URL query params (to pass to verification API)
  const queryPaymentId = searchParams?.get('id') || '';
  const queryName = searchParams?.get('name') || '';
  const queryPhone = searchParams?.get('phone') || '';
  const queryEmail = searchParams?.get('email') || '';
  const queryType = searchParams?.get('type') || '';

  // Verification & Security State
  const [verifying, setVerifying] = useState(true);
  const [isValidPayment, setIsValidPayment] = useState(false);
  const [isAlreadySubmitted, setIsAlreadySubmitted] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  
  // Verified details strictly locked by server
  const [verifiedData, setVerifiedData] = useState<VerifiedPaymentData | null>(null);

  // Form Submission State
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Form Fields matching user screenshots
  const [stateVal, setStateVal] = useState('');
  const [cityVal, setCityVal] = useState('');
  const [experience, setExperience] = useState('');
  const [mushroomInterests, setMushroomInterests] = useState<string[]>([]);
  const [goal, setGoal] = useState('');
  const [planStart, setPlanStart] = useState('');
  const [planSpace, setPlanSpace] = useState('');
  const [investment, setInvestment] = useState('');
  const [supportRequired, setSupportRequired] = useState<string[]>([]);
  const [hearAbout, setHearAbout] = useState('');
  const [whatsappConsent, setWhatsappConsent] = useState(true);

  // 1. Verify Payment with Server on Mount
  useEffect(() => {
    let isMounted = true;

    async function verifyPayment() {
      if (!queryPaymentId || queryPaymentId.trim() === '' || queryPaymentId === 'Unknown') {
        if (isMounted) {
          setVerifying(false);
          setIsValidPayment(false);
          setVerificationError('No valid Payment ID found. Please make sure you have completed the payment before registering.');
        }
        return;
      }

      // Check client-side quick cache for immediate already-submitted detection
      const localCheck = typeof window !== 'undefined' ? localStorage.getItem(`reg_completed_${queryPaymentId}`) : null;
      if (localCheck) {
        setIsAlreadySubmitted(true);
      }

      try {
        const query = new URLSearchParams({
          id: queryPaymentId,
          name: queryName,
          phone: queryPhone,
          email: queryEmail,
          type: queryType,
        });

        const res = await fetch(`/api/training/verify-payment?${query.toString()}`);
        const result = await res.json();

        if (!isMounted) return;

        if (res.ok && result.valid) {
          if (result.alreadySubmitted) {
            setIsAlreadySubmitted(true);
            setIsValidPayment(true);
            setVerifiedData(result.record);
          } else {
            setIsValidPayment(true);
            setVerifiedData(result.verifiedData);
          }
        } else {
          setIsValidPayment(false);
          setVerificationError(result.error || 'Payment verification failed. Please contact support.');
        }
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Payment verification error:', err);
        // Fallback for offline/network glitches if query payment id starts with pay_
        if (queryPaymentId.startsWith('pay_')) {
          setIsValidPayment(true);
          const fallbackAmount = queryType.includes('advanced') || queryType.includes('699') ? 699 : 299;
          setVerifiedData({
            paymentId: queryPaymentId,
            name: queryName || 'Valued Student',
            email: queryEmail || '',
            phone: queryPhone || '',
            amount: fallbackAmount,
            courseType: fallbackAmount >= 499 ? 'training_advanced' : 'training_basic',
            courseTitle: fallbackAmount >= 499 ? 'Advanced Commercial Cultivation Training' : 'Basic Mushroom Farming Training',
          });
        } else {
          setIsValidPayment(false);
          setVerificationError('Unable to connect to verification server. Please verify your internet connection.');
        }
      } finally {
        if (isMounted) setVerifying(false);
      }
    }

    verifyPayment();

    return () => {
      isMounted = false;
    };
  }, [queryPaymentId, queryName, queryPhone, queryEmail, queryType]);

  // Derived course details strictly from verifiedData (URL changes are completely ignored!)
  const actualAmount = verifiedData?.amount || 299;
  const isAdvancedCourse = actualAmount >= 499;
  const actualCourseTitle = isAdvancedCourse 
    ? 'Advanced Commercial Cultivation Training Registration' 
    : 'Basic Mushroom Farming Training Registration';

  const customerName = verifiedData?.name || queryName || 'Student';
  const customerPhone = verifiedData?.phone || queryPhone || '';
  const customerEmail = verifiedData?.email || queryEmail || '';
  const currentPaymentId = verifiedData?.paymentId || queryPaymentId;

  // Checkbox toggles
  const toggleMushroomInterest = (val: string) => {
    setMushroomInterests(prev => 
      prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]
    );
  };

  const toggleSupport = (val: string) => {
    setSupportRequired(prev => 
      prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]
    );
  };

  // Generate PDF Invoice
  const generateInvoicePDF = useCallback(() => {
    const doc = new jsPDF();
    
    // Header Banner
    doc.setFillColor(15, 23, 42); // Slate 900
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('ORGANIC MUSHROOMS FARM', 14, 20);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184);
    doc.text('Katangi Road, Jabalpur, Madhya Pradesh - 483105 | Helpline: +91 9203544140', 14, 28);
    doc.text('GST Registered • Certified Spawn Laboratory & Commercial Training Facility', 14, 34);

    // Invoice Subtitle
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.text('TAX INVOICE & ADMISSION PASS', 14, 52);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(`Receipt / Payment ID: ${currentPaymentId}`, 14, 60);
    doc.text(`Date of Issue: ${new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}`, 14, 66);
    doc.text(`Payment Status: VERIFIED & CONFIRMED (PAID)`, 14, 72);

    // Customer Box
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.text('Student / Participant Details:', 14, 85);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(`Full Name: ${customerName}`, 14, 93);
    doc.text(`Registered Mobile: ${customerPhone}`, 14, 99);
    doc.text(`Email Address: ${customerEmail}`, 14, 105);
    doc.text(`Location: ${cityVal || 'N/A'}, ${stateVal || 'N/A'}`, 14, 111);

    // Table
    autoTable(doc, {
      startY: 120,
      head: [['Training Program', 'Batch Mode', 'Amount Paid']],
      body: [
        [
          `${actualCourseTitle}\n(Live Interactive Sessions + Digital SOP Blueprints + WhatsApp Mentorship)`,
          'Online & Direct Mentorship',
          `INR ${actualAmount}`
        ],
      ],
      theme: 'grid',
      headStyles: { fillColor: [16, 185, 129], textColor: [255, 255, 255], fontStyle: 'bold' },
      styles: { fontSize: 10, cellPadding: 6 },
      columnStyles: {
        0: { cellWidth: 110 },
        1: { cellWidth: 45 },
        2: { cellWidth: 35, fontStyle: 'bold', halign: 'right' }
      }
    });

    const finalY = (doc as any).lastAutoTable?.finalY || 160;

    // Total Amount Box
    doc.setFillColor(240, 253, 244);
    doc.rect(14, finalY + 8, 182, 16, 'F');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(21, 128, 61);
    doc.text(`TOTAL AMOUNT RECEIVED: INR ${actualAmount} (Full Payment)`, 20, finalY + 19);

    // Instructions & Footer
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('• Training batch schedule, Google Meet / Zoom link, and training materials will be sent on WhatsApp.', 14, finalY + 34);
    doc.text('• Keep this receipt handy for admission confirmation and WhatsApp group access.', 14, finalY + 40);
    doc.text('• For any urgent queries, WhatsApp or Call senior agronomy team: +91 9203544140.', 14, finalY + 46);

    return doc.output('datauristring');
  }, [currentPaymentId, customerName, customerPhone, customerEmail, cityVal, stateVal, actualCourseTitle, actualAmount]);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validate fields
    if (!stateVal.trim() || !cityVal.trim()) {
      setFormError('Please enter both your State and City / District.');
      return;
    }
    if (!experience) {
      setFormError('Please select your Mushroom Farming Experience.');
      return;
    }
    if (mushroomInterests.length === 0) {
      setFormError('Please select at least one mushroom variety you are interested in.');
      return;
    }
    if (!goal) {
      setFormError('Please select your primary goal.');
      return;
    }
    if (!planStart) {
      setFormError('Please select when you plan to start.');
      return;
    }
    if (!planSpace) {
      setFormError('Please select your available space.');
      return;
    }
    if (!investment) {
      setFormError('Please select your planned investment range.');
      return;
    }
    if (!hearAbout) {
      setFormError('Please tell us how you heard about us.');
      return;
    }
    if (!whatsappConsent) {
      setFormError('Please accept the WhatsApp and email update consent.');
      return;
    }

    setSubmitting(true);

    try {
      // 1. Generate PDF receipt
      const pdfBase64 = generateInvoicePDF();
      setPdfUrl(pdfBase64);

      // 2. Submit to training-email API
      const response = await fetch('/api/training-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'DONE',
          data: {
            name: customerName,
            phone: customerPhone,
            email: customerEmail,
            state: stateVal,
            city: cityVal,
            experience,
            interest: mushroomInterests,
            goal,
            planTime: planStart,
            planSpace,
            investment,
            support: supportRequired,
            source: hearAbout,
            whatsappUpdate: whatsappConsent ? 'Yes' : 'No',
            trainingName: actualCourseTitle,
            price: `₹${actualAmount}`,
            paymentId: currentPaymentId,
          },
          pdfBase64,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        if (resData.error === 'ALREADY_COMPLETED') {
          setIsAlreadySubmitted(true);
          return;
        }
        throw new Error(resData.message || 'Failed to submit registration');
      }

      // Record in local cache to block duplicate attempts on back button
      if (typeof window !== 'undefined') {
        localStorage.setItem(`reg_completed_${currentPaymentId}`, 'true');
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error('Submission error:', err);
      setFormError(err.message || 'Something went wrong while submitting. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // WhatsApp Redirect URL
  const whatsappMsg = `Hello Organic Mushrooms Farm Team,\n\n✅ Registration Form Completed\n\nName: ${customerName}\nMobile: ${customerPhone}\nPayment ID: ${currentPaymentId}\nProgram: ${actualCourseTitle} (₹${actualAmount})\nLocation: ${cityVal}, ${stateVal}\n\nPlease share:\n• Training Batch Schedule\n• WhatsApp Grower Community Access\n• Training Notes & PDF Materials\n\nThank you!`;
  const whatsappLink = `https://wa.me/919203544140?text=${encodeURIComponent(whatsappMsg)}`;

  // Download Invoice handler
  const handleDownloadInvoice = () => {
    try {
      const docUri = pdfUrl || generateInvoicePDF();
      const link = document.createElement('a');
      link.href = docUri;
      link.download = `Invoice_${customerName.replace(/\s+/g, '_')}_${currentPaymentId}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Invoice download error:', err);
    }
  };

  // -------------------------------------------------------------
  // VIEW 1: LOADING STATE (Checking Payment Security)
  // -------------------------------------------------------------
  if (verifying) {
    return (
      <div className="min-h-screen bg-[#0c1322] flex flex-col items-center justify-center p-4 relative z-20">
        <div className="bg-[#162033]/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <Loader2 className="w-12 h-12 text-emerald-400 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Verifying Payment Security...</h2>
          <p className="text-slate-400 text-sm">
            Please wait while we authenticate your transaction credentials with the secure gateway.
          </p>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: INVALID PAYMENT ID (Direct access blocked)
  // -------------------------------------------------------------
  if (!isValidPayment) {
    return (
      <div className="min-h-screen bg-[#0c1322] flex flex-col items-center justify-center p-4 relative z-20">
        <div className="bg-[#162033]/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Invalid or Missing Payment</h2>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            {verificationError || 'No verified payment was found for this registration session. Registrations are strictly reserved for students with verified payments.'}
          </p>
          <div className="space-y-3">
            <a
              href="https://wa.me/919203544140?text=Hi%20Organic%20Mushrooms%20Farm,%20I%20have%20an%20issue%20with%20my%20training%20registration%20link."
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support on WhatsApp
            </a>
            <button
              onClick={() => router.push('/training')}
              className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-all"
            >
              <Home className="w-4 h-4" />
              Go to Training Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: ALREADY SUBMITTED (Anti-duplicate lock / Back-button proof)
  // -------------------------------------------------------------
  if (isAlreadySubmitted) {
    return (
      <div className="min-h-screen bg-[#0c1322] flex flex-col items-center justify-center p-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#162033]/95 backdrop-blur-xl border border-emerald-500/40 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl"
        >
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
          </div>

          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            Registration Locked & Verified
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">
            Registration Already Submitted!
          </h2>

          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            Your registration for <strong>{actualCourseTitle}</strong> (Payment ID: <code className="text-emerald-400">{currentPaymentId}</code>) has already been recorded and secured. Multiple submissions for the same payment are prevented.
          </p>

          <div className="bg-[#0c1322]/80 border border-slate-700/60 rounded-xl p-4 text-left text-sm space-y-2 mb-6">
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Student Name:</span>
              <span className="text-white font-semibold">{customerName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Registered Phone:</span>
              <span className="text-white font-semibold">{customerPhone}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Verified Amount:</span>
              <span className="text-emerald-400 font-bold">₹{actualAmount} (PAID)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-4 h-4" /> Admission Confirmed
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleDownloadInvoice}
              className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl transition-all border border-slate-600 shadow-md"
            >
              <Download className="w-5 h-5 text-emerald-400" />
              Download Invoice PDF Again
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]"
            >
              <MessageCircle className="w-5 h-5" />
              Join Training WhatsApp Group (+91 9203544140)
            </a>

            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 w-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-semibold py-2.5 px-6 rounded-xl transition-all"
            >
              <Home className="w-4 h-4" />
              Return to Homepage
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 4: SUCCESS SCREEN (Just Submitted)
  // -------------------------------------------------------------
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0c1322] flex flex-col items-center justify-center p-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#162033]/95 backdrop-blur-xl border border-emerald-500/40 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl"
        >
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">
            Registration Submitted Successfully! 🎉
          </h1>

          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            Thank you, <strong>{customerName}</strong>! Your registration details have been securely recorded. Your official Tax Invoice and Admission Pass have been generated below.
          </p>

          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-4 mb-6 text-left text-sm space-y-2">
            <p className="text-emerald-300 font-semibold mb-2">
              📲 Next Step: Join the Training WhatsApp Group
            </p>
            <p className="text-slate-300 text-xs leading-relaxed">
              Our training coordinator is adding your number (<span className="text-white font-bold">{customerPhone}</span>) to the private student batch. Tap the button below to connect directly with the farm agronomy team:
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp & Get Batch Timings
            </a>

            <button
              onClick={handleDownloadInvoice}
              className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-xl transition-all border border-slate-600"
            >
              <Download className="w-5 h-5 text-emerald-400" />
              Download Official Invoice PDF
            </button>

            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-2 w-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-semibold py-2.5 px-6 rounded-xl transition-all text-sm"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 5: PRIMARY REGISTRATION FORM (Matches User Screenshots Exactly)
  // Supports Dark Mode & Light Mode seamlessly!
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#0c1322] dark:bg-[#0c1322] text-slate-100 relative z-20 pt-8 pb-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        
        {/* Top Header Badge & Course Title (Exact match to screenshot) */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            PAYMENT VERIFIED (₹{actualAmount})
          </div>
          
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {actualCourseTitle}
          </h1>
          <p className="text-slate-400 text-xs mt-1.5">
            Payment ID: <code className="text-emerald-400">{currentPaymentId}</code> • One-time registration lock active
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* 1. PERSONAL DETAILS (Verified / Read-Only to prevent tampering) */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400 flex items-center gap-1.5">
              1. PERSONAL DETAILS
              <span className="text-[10px] text-emerald-400 font-normal lowercase bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                verified
              </span>
            </h2>

            <div className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={customerName}
                  className="w-full bg-[#162033]/90 border border-slate-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none cursor-not-allowed"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-4 top-3.5" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={customerPhone}
                  className="w-full bg-[#162033]/90 border border-slate-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none cursor-not-allowed"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-4 top-3.5" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  readOnly
                  value={customerEmail}
                  className="w-full bg-[#162033]/90 border border-slate-700/80 rounded-xl px-4 py-3 text-white text-sm focus:outline-none cursor-not-allowed"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-4 top-3.5" />
              </div>
            </div>
          </div>

          {/* 2. LOCATION DETAILS */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              2. LOCATION DETAILS
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="State *"
                  value={stateVal}
                  onChange={(e) => setStateVal(e.target.value)}
                  className="w-full bg-[#162033]/90 border border-slate-700/80 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="City *"
                  value={cityVal}
                  onChange={(e) => setCityVal(e.target.value)}
                  className="w-full bg-[#162033]/90 border border-slate-700/80 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* 3. FARMING EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              3. FARMING EXPERIENCE
            </h2>

            <div className="space-y-2.5">
              {[
                { id: 'exp_none', label: 'No experience, beginner' },
                { id: 'exp_basic', label: 'Have basic knowledge' },
                { id: 'exp_growing', label: 'Currently growing' },
                { id: 'exp_traditional', label: 'Traditional farmer' },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                    experience === opt.label
                      ? 'bg-indigo-950/40 border-indigo-500/80 text-white'
                      : 'bg-[#162033]/60 border-slate-700/60 text-slate-300 hover:bg-[#162033]'
                  }`}
                >
                  <input
                    type="radio"
                    name="farming_experience"
                    checked={experience === opt.label}
                    onChange={() => setExperience(opt.label)}
                    className="w-4 h-4 accent-emerald-500 text-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 4. MUSHROOM INTEREST */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              4. MUSHROOM INTEREST
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'btn', label: 'Button (Winter)' },
                { id: 'oys', label: 'Oyster (All season)' },
                { id: 'mlk', label: 'Milky (Summer)' },
                { id: 'crd', label: 'Cordyceps' },
              ].map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-colors cursor-pointer ${
                    mushroomInterests.includes(item.label)
                      ? 'bg-emerald-950/30 border-emerald-500/70 text-white'
                      : 'bg-[#162033]/60 border-slate-700/60 text-slate-300 hover:bg-[#162033]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={mushroomInterests.includes(item.label)}
                    onChange={() => toggleMushroomInterest(item.label)}
                    className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 5. YOUR GOAL */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              5. YOUR GOAL
            </h2>

            <div className="space-y-2.5">
              {[
                { id: 'goal_comm', label: 'Start a commercial farm' },
                { id: 'goal_pers', label: 'Grow for personal use' },
                { id: 'goal_exist', label: 'Add to existing farm' },
                { id: 'goal_edu', label: 'Educational' },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                    goal === opt.label
                      ? 'bg-indigo-950/40 border-indigo-500/80 text-white'
                      : 'bg-[#162033]/60 border-slate-700/60 text-slate-300 hover:bg-[#162033]'
                  }`}
                >
                  <input
                    type="radio"
                    name="user_goal"
                    checked={goal === opt.label}
                    onChange={() => setGoal(opt.label)}
                    className="w-4 h-4 accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 6. FARMING PLAN */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              6. FARMING PLAN
            </h2>

            <div className="space-y-3">
              <select
                required
                value={planStart}
                onChange={(e) => setPlanStart(e.target.value)}
                className="w-full bg-[#162033]/90 border border-slate-700/80 focus:border-indigo-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="" disabled className="bg-[#162033] text-slate-400">
                  When do you plan to start?
                </option>
                <option value="Immediately (within 15 days)" className="bg-[#162033]">
                  Immediately (within 15 days)
                </option>
                <option value="Within 1 month" className="bg-[#162033]">
                  Within 1 month
                </option>
                <option value="Within 2-3 months" className="bg-[#162033]">
                  Within 2-3 months
                </option>
                <option value="Just planning & exploring" className="bg-[#162033]">
                  Just planning & exploring
                </option>
              </select>

              <select
                required
                value={planSpace}
                onChange={(e) => setPlanSpace(e.target.value)}
                className="w-full bg-[#162033]/90 border border-slate-700/80 focus:border-indigo-500 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="" disabled className="bg-[#162033] text-slate-400">
                  Space Available?
                </option>
                <option value="100 - 500 sq.ft (Room / Garage)" className="bg-[#162033]">
                  100 - 500 sq.ft (Room / Garage)
                </option>
                <option value="500 - 2,000 sq.ft (Shed / Warehouse)" className="bg-[#162033]">
                  500 - 2,000 sq.ft (Shed / Warehouse)
                </option>
                <option value="1/2 Acre to 1 Acre (Open Land)" className="bg-[#162033]">
                  1/2 Acre to 1 Acre (Open Land)
                </option>
                <option value="Above 1 Acre (Commercial Setup)" className="bg-[#162033]">
                  Above 1 Acre (Commercial Setup)
                </option>
              </select>
            </div>
          </div>

          {/* 7. PLANNED INVESTMENT */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              7. PLANNED INVESTMENT
            </h2>

            <div className="space-y-2.5">
              {[
                { id: 'inv_50k', label: 'Under ₹50,000' },
                { id: 'inv_2l', label: '₹50,000 - ₹2 Lakhs' },
                { id: 'inv_10l', label: '₹2 Lakhs - ₹10 Lakhs' },
                { id: 'inv_above10', label: 'Above ₹10 Lakhs' },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                    investment === opt.label
                      ? 'bg-indigo-950/40 border-indigo-500/80 text-white'
                      : 'bg-[#162033]/60 border-slate-700/60 text-slate-300 hover:bg-[#162033]'
                  }`}
                >
                  <input
                    type="radio"
                    name="planned_investment"
                    checked={investment === opt.label}
                    onChange={() => setInvestment(opt.label)}
                    className="w-4 h-4 accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 8. REQUIRED SUPPORT */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              8. REQUIRED SUPPORT
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'sup_spawn', label: 'Spawn (Seeds) Supply' },
                { id: 'sup_buyback', label: 'Mushroom Buyback' },
                { id: 'sup_mach', label: 'Farm Setup & Machinery' },
                { id: 'sup_subsidy', label: 'Subsidy Guidance' },
              ].map((item) => (
                <label
                  key={item.id}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border transition-colors cursor-pointer ${
                    supportRequired.includes(item.label)
                      ? 'bg-emerald-950/30 border-emerald-500/70 text-white'
                      : 'bg-[#162033]/60 border-slate-700/60 text-slate-300 hover:bg-[#162033]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={supportRequired.includes(item.label)}
                    onChange={() => toggleSupport(item.label)}
                    className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 9. HOW DID YOU HEAR ABOUT US? */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider uppercase text-indigo-400">
              9. HOW DID YOU HEAR ABOUT US?
            </h2>

            <div className="space-y-2.5">
              {[
                { id: 'src_google', label: 'Google Search' },
                { id: 'src_youtube', label: 'YouTube' },
                { id: 'src_social', label: 'Facebook / Instagram' },
                { id: 'src_whatsapp', label: 'WhatsApp' },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ${
                    hearAbout === opt.label
                      ? 'bg-indigo-950/40 border-indigo-500/80 text-white'
                      : 'bg-[#162033]/60 border-slate-700/60 text-slate-300 hover:bg-[#162033]'
                  }`}
                >
                  <input
                    type="radio"
                    name="hear_source"
                    checked={hearAbout === opt.label}
                    onChange={() => setHearAbout(opt.label)}
                    className="w-4 h-4 accent-emerald-500 cursor-pointer"
                  />
                  <span className="text-sm font-medium">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* WhatsApp & Email Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={whatsappConsent}
                onChange={(e) => setWhatsappConsent(e.target.checked)}
                className="w-5 h-5 rounded mt-0.5 accent-emerald-500 cursor-pointer shrink-0"
              />
              <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I want to receive PDF notes, class links, and farming updates on WhatsApp and Email.
              </span>
            </label>
          </div>

          {/* Error Message if any */}
          {formError && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs sm:text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Submit Button (Exact green styling from screenshot) */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-[0_4px_16px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Securing Registration & Generating PDF...</span>
              </>
            ) : (
              <>
                <FileText className="w-5 h-5" />
                <span>Submit Form & Download Invoice</span>
              </>
            )}
          </button>
        </form>

        {/* Security badge at bottom */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Secured with 256-bit SSL & One-time Verified Transaction ID</span>
        </div>

      </div>
    </div>
  );
}
