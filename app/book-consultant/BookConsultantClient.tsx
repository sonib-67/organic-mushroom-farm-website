'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendClientPaymentNotification } from '@/lib/clientPaymentNotification';
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  X,
  Zap,
  Briefcase,
  Layers,
  MessageCircle,
  Calendar,
  Sparkles,
  Phone,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function BookConsultantClient() {
  const router = useRouter();
  const [modalState, setModalState] = useState<'idle' | 'form' | 'cancelled' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', preferredDate: '' });
  const [todayDate, setTodayDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Lazily load Razorpay checkout script
    if (typeof window !== 'undefined') {
      const existingScript = document.getElementById('razorpay-checkout-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'razorpay-checkout-script';
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
      }
      setTodayDate(new Date().toISOString().split('T')[0]);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/start-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: 'consultation',
          name: formData.name,
          email: formData.email,
          mobile: formData.phone,
          preferredDate: formData.preferredDate,
        }),
      });

      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'Failed to initiate consultation order');

      // Send initiated notification to admin
      sendClientPaymentNotification({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        preferredDate: formData.preferredDate,
        productType: 'Expert 1-on-1 Business Consultation Slot',
        amount: '₹59',
        status: 'INITIATED',
        orderId: payload.order_id,
      });

      const options = {
        key: payload.key_id,
        amount: payload.amount,
        currency: payload.currency,
        order_id: payload.order_id,
        name: payload.name,
        description: payload.description,
        prefill: payload.prefill,
        notes: payload.notes,
        theme: payload.theme,
        handler: function (razorpayResponse: any) {
          const paymentId = razorpayResponse.razorpay_payment_id || '';

          // Send success notification to admin and invoice to customer
          sendClientPaymentNotification({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            preferredDate: formData.preferredDate,
            productType: 'Expert 1-on-1 Business Consultation Slot',
            amount: '₹59',
            status: 'DONE',
            orderId: payload.order_id,
            paymentId: paymentId,
          });

          // Redirect to dedicated /payment-success page
          router.push(
            `/payment-success?id=${encodeURIComponent(paymentId)}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email)}&type=consultant&amount=59`
          );
        },
        modal: {
          ondismiss: function () {
            // Send cancelled notification to admin and customer
            sendClientPaymentNotification({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              preferredDate: formData.preferredDate,
              productType: 'Expert 1-on-1 Business Consultation Slot',
              amount: '₹59',
              status: 'CANCELLED',
              orderId: payload.order_id,
            });

            // Redirect to dedicated /payment-cancelled page
            router.push(
              `/payment-cancelled?amount=59&currency=INR&productName=${encodeURIComponent('1-on-1 Consultation')}&productType=consultant&from=%2Fbook-consultant&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email)}&date=${encodeURIComponent(formData.preferredDate)}`
            );
          },
        },
      };

      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on('payment.failed', function (err: any) {
          console.error('Payment failed:', err);

          sendClientPaymentNotification({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            preferredDate: formData.preferredDate,
            productType: 'Expert 1-on-1 Business Consultation Slot',
            amount: '₹59',
            status: 'FAILED',
            orderId: payload.order_id,
            paymentId: err?.error?.metadata?.payment_id,
          });

          // Redirect to dedicated /payment-cancelled page
          router.push(
            `/payment-cancelled?amount=59&currency=INR&productName=${encodeURIComponent('1-on-1 Consultation')}&productType=consultant&from=%2Fbook-consultant&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email)}&date=${encodeURIComponent(formData.preferredDate)}`
          );
        });
        rzp.open();
      } else {
        alert('Payment system is loading. Please try again in a few seconds.');
        setModalState('idle');
      }
    } catch (error: any) {
      console.error(error);
      alert('Error: ' + (error.message || 'Unknown error') + '. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsappLink = () => {
    const text =
      'New Consultant Booking 🎉\n\nName: ' +
      formData.name +
      '\nMobile: ' +
      formData.phone +
      '\nEmail: ' +
      formData.email +
      '\nDate: ' +
      formData.preferredDate +
      '\n\nPayment Status: Paid ₹59';
    return 'https://wa.me/919203544140?text=' + encodeURIComponent(text);
  };

  return (
    <div className="space-y-4">
      {/* Top Badge & Live Indicator */}
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping inline-block" />
          <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Premium 1-on-1 Consultation
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
          <Clock className="w-3 h-3" /> Live Phone / Video Call
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
          <CheckCircle2 className="w-3 h-3" /> Guaranteed Expert Callback
        </span>
      </div>

      {/* Hero Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
          1-on-1 Business <span className="text-blue-600 dark:text-blue-400">Call Consultancy</span> ⚡
        </h1>
        <p className="text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
          Get direct, actionable solutions from commercial farm founders in Jabalpur to eliminate costly mistakes, optimize climate parameters, and build a profitable mushroom business.
        </p>
      </div>

      {/* Direct CTA Action Button */}
      <div className="pt-1">
        <button
          onClick={() => setModalState('form')}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-500/30 transition-all cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-current" /> Book Consultation Now — ₹59 Only
        </button>
      </div>

      {/* Content Section - Minimal Editorial Structure without Bulky Card Boxes */}
      <section className="pt-2 text-xs sm:text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-300 space-y-3">
        <p>
          Whether you are planning a{" "}
          <Link
            href="/services/turnkey-setup"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            commercial turnkey farm setup
          </Link>
          , seeking high-yielding{" "}
          <Link
            href="/spawn-seeds"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            mushroom spawn
          </Link>
          , applying for central &amp; state{" "}
          <Link
            href="/subsidy"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            government subsidies
          </Link>
          , or joining certified{" "}
          <Link
            href="/training"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            mushroom cultivation training
          </Link>
          , this 1-on-1 session gives you clear, unfiltered guidance tailored to your exact budget and region.
        </p>

        {/* What's Included */}
        <div className="pt-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-blue-500 pl-3">
            What Is Covered in the Consultation Call
          </h2>
          <div className="space-y-2 pl-2">
            <div>
              <strong className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Custom Project Blueprint:
              </strong>
              <span>
                Tailored setup strategy designed around your available space (10x10 room to 10,000 sq ft commercial facility), budget, and local ambient climate.
              </span>
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Subsidy, Loan &amp; DPR Guidance:
              </strong>
              <span>
                Actionable step-by-step guidance on National Horticulture Board (NHB), MIDH, NABARD schemes, and preparing bankable DPRs.
              </span>
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Spawn Sourcing &amp; Raw Material Selection:
              </strong>
              <span>
                Direct links to verified master spawn laboratories, quality wheat/paddy straw, and contamination-free substrate prep methods.
              </span>
            </div>
            <div>
              <strong className="text-slate-900 dark:text-white font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" /> Contamination Troubleshooting &amp; Disease Control:
              </strong>
              <span>
                Fast diagnostic protocols to solve green mold (Trichoderma), yellow molds, flies, and humidity/ventilation imbalances.
              </span>
            </div>
          </div>
        </div>

        {/* Who Is This For */}
        <div className="pt-2">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 border-l-4 border-blue-500 pl-3">
            Who Should Book This Consultation?
          </h2>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>
              <strong className="text-slate-900 dark:text-white">First-time growers:</strong> Avoid losing crops to temperature swings, poor pasteurization, or spurious spawn.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Commercial expanders:</strong> Scale up to 2000-bag or 3000-bag pasteurization tunnels and climate-controlled chambers.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Agri-investors:</strong> Build automated button, oyster, or milky mushroom farms with clear ROI timelines.
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom Action Strip */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <button
          onClick={() => setModalState('form')}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer"
        >
          <Zap className="w-3.5 h-3.5" /> Book Slot (₹59)
        </button>
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
          <span>Need immediate assistance?</span>
          <a
            href="tel:9203544140"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" /> +91 9203544140
          </a>
          <Link
            href="/contact"
            className="text-slate-600 dark:text-slate-300 hover:underline inline-flex items-center gap-1"
          >
            Contact Farm <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Booking Form Modal */}
      {modalState === 'form' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 w-full max-w-md relative text-left shadow-2xl text-xs sm:text-[13px]">
            <button
              onClick={() => setModalState('idle')}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full p-1.5 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Book 1-on-1 Consultation
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
              Enter your contact details to proceed with the secure Razorpay payment.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-slate-300 mb-1 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-slate-300 mb-1 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-slate-300 mb-1 uppercase tracking-wider">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 dark:text-slate-300 mb-1 uppercase tracking-wider">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={todayDate}
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 text-xs"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>{loading ? 'Initiating Payment...' : 'Proceed to Pay ₹59 via Razorpay'}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cancelled State Modal */}
      {modalState === 'cancelled' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 w-full max-w-sm relative text-center shadow-2xl text-xs">
            <button
              onClick={() => setModalState('idle')}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full p-1.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/60 text-red-500 flex items-center justify-center mx-auto mb-3">
              <X className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Payment Incomplete
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Your consultation booking was not completed. You can try again to reserve your slot.
            </p>
            <div className="space-y-2">
              <button
                onClick={() => setModalState('form')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" /> Try Again (₹59)
              </button>
              <button
                onClick={() => setModalState('idle')}
                className="w-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-2 rounded-lg transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success State Modal */}
      {modalState === 'success' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 w-full max-w-sm relative text-center shadow-2xl text-xs">
            <button
              onClick={() => setModalState('idle')}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full p-1.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-500 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Consultation Booked 🎉
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Thank you! Our expert consultant will connect with you on your preferred date: <strong>{formData.preferredDate}</strong>.
            </p>
            <a
              href={generateWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 rounded-lg shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" /> Share on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
