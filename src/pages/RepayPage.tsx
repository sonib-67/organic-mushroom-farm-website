import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

const RepayPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'INITIAL' | 'PROCESSING' | 'SUCCESS' | 'FAILED'>('INITIAL');

  useEffect(() => {
    if (!orderId) {
      setError("Invalid order link.");
      setLoading(false);
      return;
    }

    const initiateRepayment = async () => {
      try {
        const response = await fetch('/api/repay-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ oldOrderId: orderId })
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || "Failed to initialize repayment.");
          setLoading(false);
          return;
        }

        const options = {
          key: data.key_id,
          amount: data.amount,
          currency: data.currency,
          name: data.name,
          description: data.description,
          order_id: data.order_id,
          prefill: data.prefill,
          notes: data.notes,
          theme: data.theme,
          handler: function (response: any) {
            setStatus('SUCCESS');
            setTimeout(() => {
              navigate('/');
            }, 3000);
          },
          modal: {
            ondismiss: function () {
              setStatus('FAILED');
              setError("Payment was cancelled.");
            }
          }
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.on('payment.failed', function (response: any) {
          setStatus('FAILED');
          setError(response.error.description || "Payment failed.");
        });
        
        setLoading(false);
        setStatus('PROCESSING');
        razorpay.open();

      } catch (err) {
        console.error("Repayment Error:", err);
        setError("An unexpected error occurred.");
        setLoading(false);
      }
    };

    // Load razorpay script if not already loaded
    if (!(window as any).Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = initiateRepayment;
      document.body.appendChild(script);
    } else {
      initiateRepayment();
    }
  }, [orderId, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
        >
          {loading && (
            <div className="flex flex-col items-center">
              <Loader2 className="w-12 h-12 text-purple-600 animate-spin mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">Preparing secure checkout...</h2>
              <p className="text-gray-500 mt-2">Please wait a moment.</p>
            </div>
          )}

          {!loading && status === 'PROCESSING' && !error && (
            <div className="flex flex-col items-center">
              <Loader2 className="w-12 h-12 text-purple-600 animate-spin mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">Awaiting Payment</h2>
              <p className="text-gray-500 mt-2">Please complete the payment in the Razorpay window.</p>
            </div>
          )}

          {status === 'SUCCESS' && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">Thank you for your payment. Redirecting to home...</p>
            </div>
          )}

          {error && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Payment Failed</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </motion.div>
      </div>
          </div>
  );
};

export default RepayPage;
