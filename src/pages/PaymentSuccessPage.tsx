import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { pixelTrackCustom } from '../utils/pixel';
import SEO from '../components/SEO';

export default function PaymentSuccessPage() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const paymentId = searchParams.get('id') || 'N/A';
  const name = searchParams.get('name') || 'N/A';
  const phone = searchParams.get('phone') || 'N/A';
  const email = searchParams.get('email') || 'N/A';
  const type = searchParams.get('type') || 'training_basic';

  // Generate WhatsApp message based on course/service type
  let messageText = '';
  let courseOrServiceName = '';

  if (type === 'training_basic') {
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
• Learning materials/PDF notes
• Training schedule
• WhatsApp support group link

I am excited to start my mushroom farming journey.

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
• Complete course access
• Advanced cultivation modules
• Business & marketing guidance
• Training materials and resources
• Certificate details
• WhatsApp support group link

I am excited to learn advanced mushroom farming techniques and build a successful mushroom business.

Thank you.`;
  } else if (type === 'workshop') {
    courseOrServiceName = 'Mushroom Workshop (₹199)';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have successfully registered for the Mushroom Workshop (₹199).

Please share:
• Workshop joining link
• Date & timing details
• Workshop materials
• Important instructions before joining

Looking forward to attending the workshop.

Thank you.`;
  } else if (type === 'consultant') {
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
  } else {
    courseOrServiceName = 'Mushroom Cultivation Training';
    messageText = `Hello Organic Mushrooms Farm Team,

✅ Payment Successful

Name: ${name}
Mobile: ${phone}
Email: ${email}
Payment ID: ${paymentId}

I have successfully completed my payment. Please share my enrollment and training details.

Thank you.`;
  }

  const whatsappUrl = `https://wa.me/919203544140?text=${encodeURIComponent(messageText)}`;

  useEffect(() => {
    // Track page view for funnel logging
    pixelTrackCustom('PaymentSuccess_Viewed', { 
      payment_id: paymentId,
      name,
      phone,
      email,
      course_type: type,
      course_name: courseOrServiceName
    });

    // Automatically open WhatsApp chat after a small delay
    if (name !== 'N/A' || paymentId !== 'N/A') {
      const timer = setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [location.search, paymentId, name, phone, email, type, whatsappUrl, courseOrServiceName]);

  return (
    <div className="relative pt-24 pb-32 md:pt-32 lg:pb-0 overflow-hidden min-h-screen selection:bg-green-500/30 flex items-center justify-center">
      <SEO 
        title="Payment Success | Professional Mushroom Farming Training" 
        description="Your registration has been completed successfully. We have sent the confirmation to your mobile and email." 
        url="/payment-success"
      />
      <div className="w-full max-w-lg mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 1, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-5 md:p-8 rounded-2xl md:rounded-[2rem] border dark:border-green-500/20 border-green-500/20 relative overflow-hidden text-center"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-green-500/20 blur-[80px] pointer-events-none rounded-full"></div>

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] relative z-10"
          >
            <CheckCircle size={32} className="md:w-10 md:h-10" />
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight mb-2 md:mb-3 relative z-10">
            Payment Successful 🎉
          </h1>
          <h2>Done</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-1 font-medium">Thank you for joining our program</p>
          <p className="text-emerald-500 dark:text-emerald-400 text-xs md:text-sm mb-5 font-bold uppercase tracking-wider">{courseOrServiceName}</p>

          {/* Action Info */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 md:p-6 mb-5 text-center relative z-10">
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-3">
              We are automatically redirecting you to WhatsApp to receive your training/joining details instantly.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] text-green-600 dark:text-green-400 font-bold animate-pulse">Redirecting to WhatsApp chat...</span>
            </div>
            <a href={whatsappUrl}
               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-white font-bold rounded-xl hover:scale-105 transition-transform text-sm w-full">
                <MessageCircle size={18} /> Chat with us on WhatsApp
            </a>
            <p className="text-[11px] mt-4 text-slate-400 font-medium leading-relaxed">
              If not redirected automatically, click the button above to share details and start your journey.
            </p>
          </div>

          {/* Back to Home */}
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full px-4 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-slate-300 hover:text-white transition-all text-xs md:text-sm mt-2 relative z-10"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
