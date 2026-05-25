import React, { useState } from 'react';
import { ShieldCheck, Send, RotateCw, Database, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const WebhookTestPage = () => {
  const [formData, setFormData] = useState({
    customer_name: 'Jane Doe',
    customer_email: 'jane@example.com',
    customer_phone: '9876543210',
    razorpay_order_id: 'order_TEST123',
    razorpay_payment_id: 'pay_TEST123',
    product_type: 'training',
    payment_status: 'done',
  });

  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer organic_secret_123'
        },
        body: JSON.stringify({
          transactions: [formData]
        })
      });

      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      setResponse({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-start/10 text-primary-start font-bold uppercase tracking-widest text-xs mb-4">
            <ShieldCheck size={16} /> Automation Controller
          </div>
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-slate-900 tracking-tight mb-4">
            Webhook Controller <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400">Trigger simulated or live transactions through the Supabase & Nodemailer pipeline.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass border dark:border-white/10 border-black/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 dark:text-white text-slate-900 flex items-center gap-2">
              <Database size={20} className="text-primary-start" /> Create Transaction
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Customer Name</label>
                  <input
                    type="text"
                    value={formData.customer_name}
                    onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Customer Email</label>
                  <input
                    type="email"
                    value={formData.customer_email}
                    onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Customer Phone</label>
                <input
                  type="text"
                  value={formData.customer_phone}
                  onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                  className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Order ID</label>
                  <input
                    type="text"
                    value={formData.razorpay_order_id}
                    onChange={(e) => setFormData({ ...formData, razorpay_order_id: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Payment ID</label>
                  <input
                    type="text"
                    value={formData.razorpay_payment_id}
                    onChange={(e) => setFormData({ ...formData, razorpay_payment_id: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Product Type</label>
                  <select
                    value={formData.product_type}
                    onChange={(e) => setFormData({ ...formData, product_type: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                  >
                    <option value="training">training</option>
                    <option value="consultant">consultant</option>
                    <option value="spawn_button">spawn_button</option>
                    <option value="dry_mushroom">dry_mushroom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Payment Status</label>
                  <select
                    value={formData.payment_status}
                    onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border dark:border-white/10 border-black/10 rounded-lg px-4 py-2 dark:text-white text-slate-900 text-sm focus:outline-none focus:border-primary-start"
                  >
                    <option value="done">done</option>
                    <option value="pending">pending</option>
                    <option value="failed">failed</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 btn-primary py-3 rounded-lg flex items-center justify-center gap-2 font-bold shadow-lg disabled:opacity-50"
              >
                {loading ? <RotateCw size={18} className="animate-spin" /> : <Send size={18} />}
                Execute Webhook Pipeline
              </button>
            </form>
          </div>

          <div className="glass border dark:border-white/10 border-black/10 rounded-3xl p-6 md:p-8 flex flex-col">
            <h2 className="text-xl font-bold mb-6 dark:text-white text-slate-900 flex items-center gap-2">
              <Mail size={20} className="text-accent" /> Execution Response
            </h2>
            
            <div className="flex-1 bg-[#1e1e1e] rounded-xl p-4 overflow-y-auto w-full relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-[11px] md:text-sm font-mono text-green-400 mt-6 whitespace-pre-wrap">
                {response ? JSON.stringify(response, null, 2) : '// Awaiting incoming webhook array...'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebhookTestPage;
