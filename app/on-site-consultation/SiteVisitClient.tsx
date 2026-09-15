'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendClientPaymentNotification } from '@/lib/clientPaymentNotification';
import {
  MapPin,
  Calendar,
  User,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Info,
  Check,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';

export default function SiteVisitClient() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [todayDate, setTodayDate] = useState('');
  const [agreeLocation, setAgreeLocation] = useState(true);

  useEffect(() => {
    // Lazily load Razorpay checkout script if needed
    if (typeof window !== 'undefined' && !(window as any).Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
    const today = new Date().toISOString().split('T')[0];
    setTodayDate(today);
    // Pre-fill tomorrow as sensible default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData((prev) => ({
      ...prev,
      preferredDate: prev.preferredDate || tomorrow.toISOString().split('T')[0],
    }));
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length !== 10 || !formData.preferredDate) {
      return;
    }
    setLoading(true);

    const customerEmail =
      formData.email.trim() ||
      `${formData.name.replace(/\s+/g, '').toLowerCase() || 'visitor'}@organicmushroomsfarm.com`;

    try {
      const response = await fetch('/api/start-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'site_visit_consultation',
          name: formData.name,
          email: customerEmail,
          mobile: formData.phone,
          preferredDate: formData.preferredDate,
        }),
      });

      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Failed to initiate on-site visit session');

      // Send INITIATED notification to admin
      sendClientPaymentNotification({
        name: formData.name,
        phone: formData.phone,
        email: customerEmail,
        preferredDate: formData.preferredDate,
        productType: 'On Site Visit Consultation Slot',
        amount: '₹500',
        status: 'INITIATED',
        orderId: payload.order_id,
      });

      // Configure Razorpay checkout options
      const options = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency || 'INR',
        order_id: payload.order_id,
        name: payload.name || 'Organic Mushrooms Farm',
        description: payload.description || 'On Site Visit Consultation Slot (₹500)',
        prefill: {
          name: formData.name,
          contact: formData.phone,
          email: customerEmail,
        },
        notes: payload.notes || {},
        theme: payload.theme || { color: '#059669' },
        handler: function (razorpayResponse: any) {
          const paymentId = razorpayResponse.razorpay_payment_id || '';

          // Send DONE notification to admin & dispatch GST invoice to customer
          sendClientPaymentNotification({
            name: formData.name,
            phone: formData.phone,
            email: customerEmail,
            preferredDate: formData.preferredDate,
            productType: 'On Site Visit Consultation Slot',
            amount: '₹500',
            status: 'DONE',
            orderId: payload.order_id,
            paymentId: paymentId,
          });

          // Redirect to /payment-success page
          router.push(
            `/payment-success?id=${encodeURIComponent(paymentId)}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(customerEmail)}&type=on_site&amount=500&date=${encodeURIComponent(formData.preferredDate)}`
          );
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            // Send CANCELLED notification to admin and customer
            sendClientPaymentNotification({
              name: formData.name,
              phone: formData.phone,
              email: customerEmail,
              preferredDate: formData.preferredDate,
              productType: 'On Site Visit Consultation Slot',
              amount: '₹500',
              status: 'CANCELLED',
              orderId: payload.order_id,
            });

            // Redirect to /payment-cancelled page
            router.push(
              `/payment-cancelled?amount=500&currency=INR&productName=${encodeURIComponent('On Site Visit Consultation')}&productType=on_site&from=%2Fon-site-consultation&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(customerEmail)}&date=${encodeURIComponent(formData.preferredDate)}`
            );
          },
        },
      };

      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (err: any) {
          console.error('Payment failed:', err);
          setLoading(false);

          // Send FAILED notification
          sendClientPaymentNotification({
            name: formData.name,
            phone: formData.phone,
            email: customerEmail,
            preferredDate: formData.preferredDate,
            productType: 'On Site Visit Consultation Slot',
            amount: '₹500',
            status: 'FAILED',
            orderId: payload.order_id,
            paymentId: err?.error?.metadata?.payment_id,
          });

          // Redirect to /payment-cancelled page
          router.push(
            `/payment-cancelled?amount=500&currency=INR&productName=${encodeURIComponent('On Site Visit Consultation')}&productType=on_site&from=%2Fon-site-consultation&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(customerEmail)}&date=${encodeURIComponent(formData.preferredDate)}`
          );
        });
        rzp.open();
      } else {
        alert('Payment gateway is loading. Please try again in 3 seconds.');
        setLoading(false);
      }
    } catch (err: any) {
      console.error(err);
      alert('Unable to initiate visit booking: ' + (err.message || 'Please check your connection and try again.'));
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          <li>
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Services
            </span>
          </li>
          <li>/</li>
          <li className="font-semibold text-emerald-600 dark:text-emerald-400 truncate">
            On Site Visit Consultation
          </li>
        </ol>
      </nav>

      {/* Main Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 p-4 sm:p-6 text-white relative">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/20 backdrop-blur-md border border-white/30 text-white">
              <MapPin className="w-3 h-3 text-emerald-200" />
              Katangi, Jabalpur (M.P.) • Direct Farm Visit
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-950/40 text-emerald-100 border border-emerald-400/30">
              <Clock className="w-3 h-3" /> Slot Fee: ₹500
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
            On-Site Farm Visit & Practical Consultation
          </h1>
          <p className="text-xs sm:text-[13px] text-emerald-50 mt-1 max-w-2xl leading-relaxed">
            Experience real commercial mushroom operations. Inspect 2000-bag pasteurization tunnels, climate-controlled growing rooms, and consult 1-on-1 with our founder.
          </p>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {/* Left Column: What You Get & Farm Details (md:col-span-7) */}
          <div className="p-4 sm:p-6 space-y-4 md:col-span-7">
            <div>
              <h2 className="text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                What You Experience in This On-Site Visit
              </h2>

              <ul className="space-y-2 text-xs sm:text-[12.5px] text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Commercial Facility Tour:</strong> Walk inside button and oyster growing chambers and observe airflow, humidity, and temperature systems live.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Compost Tunnel Walkthrough:</strong> Inspect our 2000 & 3000-bag bulk pasteurization tunnels, boiler connections, and aeration floor design.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Founder 1-on-1 Discussion:</strong> Direct guidance on capital investment (CapEx), operating expenses (OpEx), DPR preparation, and NHB/MIDH 40% subsidy schemes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">Bio-Security & Contamination:</strong> Learn sanitation routines, casing soil preparation, and how to prevent green mold before it strikes.
                  </span>
                </li>
              </ul>
            </div>

            {/* Farm Location & Contact Strip */}
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-3 sm:p-3.5 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Farm Location:</strong>
                  <p className="text-[11.5px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                    Organic Mushrooms Farm, Katangi Road, Jabalpur, Madhya Pradesh - 483105, India
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/80 dark:border-slate-700/80 text-[11.5px]">
                <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Helpline: <strong className="text-slate-900 dark:text-white">+91 9203544140</strong></span>
                </div>
                <a
                  href="https://wa.me/919203544140?text=Hi%20Organic%20Mushrooms%20Farm,%20I%20want%20to%20inquire%20about%20the%20On-Site%20Farm%20Visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Practical Visiting Note */}
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] text-emerald-900 dark:text-emerald-300">
              <Info className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Visiting Days & Timings:</strong> Monday to Saturday, 10:00 AM – 5:00 PM. Prior booking ensures our senior consultant is reserved exclusively for your session.
              </span>
            </div>
          </div>

          {/* Right Column: Booking Form (md:col-span-5) */}
          <div className="p-4 sm:p-6 md:col-span-5 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    Reserve Visit Slot
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Official booking & pass confirmation
                  </p>
                </div>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                  ₹500 Only
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                    10-Digit Mobile (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })
                      }
                      placeholder="10-digit mobile number"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email Address (For GST Invoice) */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address <span className="text-[10px] font-normal text-slate-400">(for GST Invoice PDF)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@gmail.com"
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Preferred Visit Date */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Planned Visit Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="date"
                      required
                      min={todayDate}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreeLocation}
                      onChange={(e) => setAgreeLocation(e.target.checked)}
                      className="w-3.5 h-3.5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 dark:border-slate-700 mt-0.5"
                    />
                    <span className="text-[10.5px] text-slate-600 dark:text-slate-400 leading-snug">
                      I understand that this is an in-person visit at Katangi, Jabalpur (M.P.) on the selected date.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    loading ||
                    !formData.name.trim() ||
                    formData.phone.length !== 10 ||
                    !formData.preferredDate ||
                    !agreeLocation
                  }
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold text-xs sm:text-[13px] py-2.5 px-4 rounded-xl shadow-md hover:shadow-emerald-500/25 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Initiating Secure Payment...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Pay ₹500 & Confirm Visit Slot</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Bottom Security Highlights */}
            <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Razorpay Verified
              </span>
              <span>100% Secure Checkout</span>
              <span>Instant Pass & GST Bill</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
