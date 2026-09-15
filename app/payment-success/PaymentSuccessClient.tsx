'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { sendClientPaymentNotification } from '@/lib/clientPaymentNotification';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Mail, Phone, Calendar, ArrowLeft } from 'lucide-react';

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const paymentId = searchParams?.get('id') || 'N/A';
  const name = searchParams?.get('name') || 'Customer';
  const phone = searchParams?.get('phone') || 'N/A';
  const email = searchParams?.get('email') || 'N/A';
  const type = searchParams?.get('type') || 'consultant';
  const amountParam = searchParams?.get('amount') || '59';

  const [redirectCount, setRedirectCount] = useState(3);
  const [autoRedirecting, setAutoRedirecting] = useState(true);

  let courseOrServiceName = 'Mushroom Consultancy Call (₹59)';
  let messageText = '';

  if (type === 'consultant') {
    courseOrServiceName = 'Mushroom Consultancy Call (₹59)';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have successfully booked a Mushroom Consultancy Call (₹59).

Please share:
• Call schedule
• Meeting link or contact details
• Consultancy process
• Required information before the call

Looking forward to discussing my mushroom farming project.

Thank you.`;
  } else if (type === 'training_basic') {
    courseOrServiceName = 'Basic Mushroom Training Program (₹299)';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have successfully enrolled in the Basic Mushroom Training Program (₹299).

Please share:
• Training access details
• Learning materials / PDF notes
• Training schedule
• WhatsApp support group link

Thank you.`;
  } else if (type === 'training_advanced') {
    courseOrServiceName = 'Advance Mushroom Cultivation Training Program (₹699)';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have successfully enrolled in the Advance Mushroom Cultivation Training Program (₹699).

Please share:
• Complete course access & modules
• Business & marketing guidance
• Training materials and resources
• Certificate details
• WhatsApp support group link

Thank you.`;
  } else if (type === 'workshop') {
    courseOrServiceName = 'Live Mushroom Workshop (₹199)';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have successfully registered for the Live Mushroom Workshop (₹199).

Please share:
• Workshop joining link
• Date & timing details
• Workshop materials

Thank you.`;
  } else if (type === 'on_site') {
    const dateParam = searchParams?.get('date') || 'Preferred Date';
    courseOrServiceName = 'On-Site Farm Visit Consultation (₹500)';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}
Visit Date: ${dateParam}

I have successfully booked an On-Site Farm Visit Consultation (₹500) at Katangi, Jabalpur.

Please share:
• Visiting hours & arrival confirmation
• Farm address & Google Maps location route
• Preparations or information needed before the visit

Thank you.`;
  } else {
    courseOrServiceName = 'Organic Mushroom Farm Service';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have completed payment. Please share my booking/order details.

Thank you.`;
  }

  const whatsappUrl = `https://wa.me/919203544140?text=${encodeURIComponent(messageText)}`;

  useEffect(() => {
    // Ensure payment notification and GST invoice are sent reliably
    if (paymentId && paymentId !== 'N/A' && email && email !== 'N/A') {
      sendClientPaymentNotification({
        name,
        phone,
        email,
        productType: courseOrServiceName,
        amount: amountParam.startsWith('₹') ? amountParam : `₹${amountParam}`,
        status: 'DONE',
        paymentId,
      });
    }

    // Only auto-redirect if we have valid payment details
    if (paymentId !== 'N/A' && autoRedirecting) {
      const interval = setInterval(() => {
        setRedirectCount((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            if (typeof window !== 'undefined') {
              window.location.href = whatsappUrl;
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [whatsappUrl, paymentId, autoRedirecting]);

  return (
    <div className="w-full max-w-xl mx-auto py-8 sm:py-12 px-4 text-center">
      {/* Top Success Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 mb-4">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
        Payment Verified & Confirmed
      </div>

      {/* Main Success Card */}
      <div className="bg-white dark:bg-slate-900 border border-emerald-500/30 dark:border-emerald-500/20 rounded-2xl p-6 sm:p-8 shadow-xl text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500" />

        {/* Icon & Title */}
        <div className="text-center pb-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3 shadow-md">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Payment Successful 🎉
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 uppercase tracking-wider">
            {courseOrServiceName}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Thank you, <strong>{name}</strong>! Your booking has been registered.
          </p>
        </div>

        {/* Transaction Summary */}
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4 my-4 space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Payment ID</span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">{paymentId}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Amount Paid</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{amountParam}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Customer Mobile</span>
            <span className="font-medium text-slate-900 dark:text-white">{phone}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Customer Email</span>
            <span className="font-medium text-slate-900 dark:text-white">{email}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
            <span>Status</span>
            <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> PAID / CONFIRMED
            </span>
          </div>
        </div>

        {/* Invoice & Notifications Banner */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-xl p-3.5 text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <p>
              Official GST invoice with authorized signature has been emailed to <strong>{email}</strong> and farm operations team.
            </p>
          </div>
          <div className="flex items-start gap-2 pt-1">
            <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <p>
              Our founder consultant will call you directly at <strong>{phone}</strong> on your scheduled slot.
            </p>
          </div>
        </div>

        {/* WhatsApp Auto-Redirect Strip */}
        <div className="mt-5 text-center space-y-3">
          {redirectCount > 0 && autoRedirecting ? (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Opening WhatsApp chat in {redirectCount}s to confirm your slot...
              <button
                onClick={() => setAutoRedirecting(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline text-[10px] ml-1"
              >
                Cancel auto-open
              </button>
            </p>
          ) : (
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Click below to connect directly with the farm founder on WhatsApp:
            </p>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Connect on WhatsApp (+91 9203544140)
          </a>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
          <Link
            href={type === 'on_site' ? '/on-site-consultation' : '/book-consultant'}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {type === 'on_site' ? 'Visit Details' : 'Consultation Details'}
          </Link>
          <Link
            href="/"
            className="font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
          >
            Back to Home <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
