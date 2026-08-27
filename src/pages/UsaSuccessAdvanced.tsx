import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const UsaSuccessAdvanced = () => {
  const [searchParams] = useSearchParams();
  const transactionId = searchParams.get("id");

  return (
    <div className="min-h-screen pt-32 pb-20 text-center px-4">
      <div className="max-w-xl mx-auto glass border border-blue-500/50 rounded-3xl p-8 text-center bg-blue-500/5">
        <h1 className="text-xl md:text-3xl font-bold text-blue-500 mb-4">Advanced Commercial Plan - Payment Successful!</h1>
        <p className="text-sm dark:text-slate-300 text-slate-700 mb-4">Your Transaction ID: <strong>{transactionId}</strong></p>
        <p className="text-sm text-blue-500 font-semibold mb-6">Welcome to the Advanced Commercial Training. We have received your enrollment and will email you the next steps shortly.</p>
        <Link to="/" className="inline-block px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
export default UsaSuccessAdvanced;
