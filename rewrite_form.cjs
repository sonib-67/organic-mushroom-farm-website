const fs = require('fs');

const fullCode = `"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle2, Loader2, CheckSquare } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function RegistrationClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

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
    setFormData(prev => ({
      ...prev,
      name: nameParam || prev.name,
      phone: phoneParam || prev.phone,
      email: emailParam || prev.email,
    }));
  }, [nameParam, phoneParam, emailParam]);

  const whatsappText = \`Hello Organic Mushrooms Farm Team,\n\n✅ Payment Successful\n\nName: \${formData.name}\nMobile: \${formData.phone}\nEmail: \${formData.email}\nPayment ID: \${paymentId}\n\nI have successfully enrolled in the \${trainingName} (₹\${price}).\n\nPlease share:\n• Training access details\n• Learning materials/PDF notes\n• Training schedule\n• WhatsApp support group link\n\nI am excited to start my mushroom farming journey.\n\nThank you.\`;
  const whatsappUrl = \`https://wa.me/919203544140?text=\${encodeURIComponent(whatsappText)}\`;

  useEffect(() => {
    if (isSubmitted && pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = \`Invoice_\${formData.name.replace(/\\s+/g, '_')}_\${paymentId}.pdf\`;
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
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Organic Mushroom Farm", 14, 20);
    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text("Tax Invoice / Receipt", 14, 30);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(\`Payment ID: \${paymentId}\`, 14, 36);
    doc.text(\`Date: \${new Date().toLocaleDateString()}\`, 14, 42);
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text("Customer Details", 14, 55);
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(\`Full Name: \${formData.name}\`, 14, 63);
    doc.text(\`Mobile Number: \${formData.phone}\`, 14, 69);
    doc.text(\`Email Address: \${formData.email}\`, 14, 75);
    doc.text(\`City: \${formData.city}\`, 14, 81);
    doc.text(\`State: \${formData.state}\`, 14, 87);
    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Amount']],
      body: [
        [trainingName, \`Rs. \${price}\`],
        ['Tax (GST 18% included)', 'Included'],
        ['Total Paid', \`Rs. \${price}\`]
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
    setLoading(true);
    try {
      const doc = generatePDF();
      const pdfBase64 = doc.output('datauristring');
      const res = await fetch('/api/training-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'DONE',
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
            price: \`Rs. \${price}\`,
            trainingName: trainingName,
            paymentId: paymentId,
          },
          pdfBase64: pdfBase64
        })
      });
      if (res.ok) {
        setPdfUrl(doc.output('bloburl'));
        setIsSubmitted(true);
      } else {
        alert("Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please take a screenshot and send to WhatsApp: +91 9203544140");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-transparent relative z-[99] pt-12 pb-6 px-4 flex flex-col items-center justify-center">
        <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 rounded-2xl text-center max-w-sm w-full space-y-4 shadow-xl">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-xl font-bold dark:text-white text-slate-900">Registration Complete!</h2>
          <p className="text-sm dark:text-slate-300 text-slate-700">Your invoice is downloading...</p>
          <p className="text-xs text-indigo-500 font-medium">Redirecting to WhatsApp for course access...</p>
          <Loader2 className="w-6 h-6 animate-spin text-indigo-500 mx-auto mt-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent relative z-[99] pt-12 pb-6 px-4">
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-transparent space-y-4">
          <div className="space-y-4">
            
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">1. Personal Details</h3>
              <div className="space-y-2">
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Full Name*" />
                <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Mobile Number*" />
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Email Address*" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">2. Location Details</h3>
              <div className="grid grid-cols-2 gap-2">
                <input type="text" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="State*" />
                <input type="text" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="City*" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">3. Farming Experience</h3>
              <div className="flex flex-col gap-1">
                {['No experience, beginner', 'Have basic knowledge', 'Currently growing', 'Traditional farmer'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="experience" value={opt} checked={formData.experience === opt} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">4. Mushroom Interest</h3>
              <div className="grid grid-cols-2 gap-1">
                {['Button (Winter)', 'Oyster (All season)', 'Milky (Summer)', 'Cordyceps'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="checkbox" value={opt} checked={formData.interest.includes(opt)} onChange={() => handleCheckboxChange('interest', opt)} className="w-3 h-3 text-indigo-600 rounded focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">5. Your Goal</h3>
              <div className="flex flex-col gap-1">
                {['Start a commercial farm', 'Grow for personal use', 'Add to existing farm', 'Educational'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="goal" value={opt} checked={formData.goal === opt} onChange={e => setFormData({...formData, goal: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">6. Farming Plan</h3>
              <div className="flex flex-col gap-2">
                <select required value={formData.planTime} onChange={e => setFormData({...formData, planTime: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  <option value="" disabled>When do you plan to start?</option>
                  <option value="Immediately (Within 1 month)">Immediately (Within 1 month)</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Within 6 months">Within 6 months</option>
                  <option value="Just exploring right now">Just exploring right now</option>
                </select>
                <select required value={formData.planSpace} onChange={e => setFormData({...formData, planSpace: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  <option value="" disabled>Space Available?</option>
                  <option value="No space yet (Planning to rent)">No space yet (Planning to rent)</option>
                  <option value="Small Room (100 - 500 sq ft)">Small Room (100 - 500 sq ft)</option>
                  <option value="Medium (500 - 2000 sq ft)">Medium (500 - 2000 sq ft)</option>
                  <option value="Large Commercial (2000+ sq ft)">Large Commercial (2000+ sq ft)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">7. Planned Investment</h3>
              <div className="flex flex-col gap-1">
                {['Under ₹50,000', '₹50,000 - ₹2 Lakhs', '₹2 Lakhs - ₹10 Lakhs', 'Above ₹10 Lakhs'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="investment" value={opt} checked={formData.investment === opt} onChange={e => setFormData({...formData, investment: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">8. Required Support</h3>
              <div className="grid grid-cols-2 gap-1">
                {['Spawn (Seeds) Supply', 'Mushroom Buyback', 'Farm Setup & Machinery', 'Subsidy Guidance'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="checkbox" value={opt} checked={formData.support.includes(opt)} onChange={() => handleCheckboxChange('support', opt)} className="w-3 h-3 text-indigo-600 rounded focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">9. How did you hear about us?</h3>
              <div className="flex flex-col gap-1">
                {['Google Search', 'YouTube', 'Facebook / Instagram', 'WhatsApp'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="source" value={opt} checked={formData.source === opt} onChange={e => setFormData({...formData, source: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">10. Updates</h3>
              <label className="flex items-center gap-2 cursor-pointer p-1">
                <input type="checkbox" required checked={formData.declaration} onChange={e => setFormData({...formData, declaration: e.target.checked})} className="w-3 h-3 text-indigo-600 rounded focus:ring-indigo-500" />
                <span className="text-xs dark:text-slate-300 text-slate-700 leading-tight">I want to receive PDF notes, class links, and farming updates on WhatsApp and Email.</span>
              </label>
            </div>

          </div>

          <button type="submit" disabled={loading || !formData.declaration} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-indigo-500/30">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckSquare className="w-4 h-4" />}
            {loading ? 'Submitting Details...' : 'Submit Form & Download Invoice'}
          </button>
        </form>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('app/training/register/RegistrationClient.tsx', fullCode);
