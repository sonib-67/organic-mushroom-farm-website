const fs = require('fs');

let code = fs.readFileSync('app/training/register/RegistrationClient.tsx', 'utf8');

const returnStartIndex = code.indexOf('return (');
const codeBeforeReturn = code.substring(0, returnStartIndex);

const newReturn = `return (
    <div className="min-h-screen bg-transparent relative z-[99] pt-12 pb-6 px-4">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-transparent space-y-4">
          
          <div className="space-y-4">
            
            {/* 1. Personal Details */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">1. Personal Details</h3>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">Full Name*</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">Number*</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Enter your number" />
                </div>
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">Email Address*</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Enter your email address" />
                </div>
              </div>
            </div>

            {/* 2. Location */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">2. Location Details</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">State*</label>
                  <input type="text" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="State" />
                </div>
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">City / District*</label>
                  <input type="text" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="City" />
                </div>
              </div>
            </div>

            {/* 3. Experience */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">3. Farming Experience</h3>
              <div className="flex flex-col gap-1">
                {['No experience, complete beginner', 'Have basic knowledge', 'Currently growing mushrooms', 'Traditional farmer looking to diversify'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="experience" value={opt} checked={formData.experience === opt} onChange={e => setFormData({...formData, experience: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Interest */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">4. Mushroom Interest (Select all that apply)</h3>
              <div className="grid grid-cols-2 gap-1">
                {['Button Mushroom (Winter)', 'Oyster Mushroom (All season)', 'Milky Mushroom (Summer)', 'Cordyceps (Medicinal)'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="checkbox" value={opt} checked={formData.interest.includes(opt)} onChange={() => handleCheckboxChange('interest', opt)} className="w-3 h-3 text-indigo-600 rounded focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Goal */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">5. Your Goal</h3>
              <div className="flex flex-col gap-1">
                {['Start a commercial farm for profit', 'Grow for personal use / hobby', 'Add mushroom unit to existing farm', 'Educational purpose'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="goal" value={opt} checked={formData.goal === opt} onChange={e => setFormData({...formData, goal: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 6. Plan */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">6. Farming Plan</h3>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">When do you plan to start?</label>
                  <select required value={formData.planTime} onChange={e => setFormData({...formData, planTime: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="" disabled>Select timeline</option>
                    <option value="Immediately (Within 1 month)">Immediately (Within 1 month)</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="Just exploring right now">Just exploring right now</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold dark:text-slate-300 text-slate-700 mb-1">Space Available?</label>
                  <select required value={formData.planSpace} onChange={e => setFormData({...formData, planSpace: e.target.value})} className="w-full bg-white/5 dark:bg-black/5 border dark:border-white/10 border-black/10 rounded-md px-2 py-1.5 text-xs dark:text-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="" disabled>Select space available</option>
                    <option value="No space yet (Planning to rent/buy)">No space yet (Planning to rent/buy)</option>
                    <option value="Small Room (100 - 500 sq ft)">Small Room (100 - 500 sq ft)</option>
                    <option value="Medium (500 - 2000 sq ft)">Medium (500 - 2000 sq ft)</option>
                    <option value="Large Commercial (2000+ sq ft)">Large Commercial (2000+ sq ft)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 7. Investment */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">7. Planned Investment Budget</h3>
              <div className="flex flex-col gap-1">
                {['Under ₹50,000 (Small Scale)', '₹50,000 - ₹2 Lakhs (Medium Scale)', '₹2 Lakhs - ₹10 Lakhs (Commercial)', 'Above ₹10 Lakhs (Large Scale/Turnkey)'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="investment" value={opt} checked={formData.investment === opt} onChange={e => setFormData({...formData, investment: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 8. Support */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">8. Required Support (Select all that apply)</h3>
              <div className="grid grid-cols-2 gap-1">
                {['Mushroom Spawn (Seeds) Supply', 'Dry/Fresh Mushroom Buyback', 'Farm Setup & Machinery', 'Government Subsidy Guidance'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="checkbox" value={opt} checked={formData.support.includes(opt)} onChange={() => handleCheckboxChange('support', opt)} className="w-3 h-3 text-indigo-600 rounded focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 9. Source */}
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm border-b border-black/10 dark:border-white/10 pb-1">9. How did you hear about us?</h3>
              <div className="flex flex-col gap-1">
                {['Google Search', 'YouTube', 'Facebook / Instagram', 'WhatsApp / Referral'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer p-1">
                    <input type="radio" required name="source" value={opt} checked={formData.source === opt} onChange={e => setFormData({...formData, source: e.target.value})} className="w-3 h-3 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-xs dark:text-slate-300 text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 10. Consent */}
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

fs.writeFileSync('app/training/register/RegistrationClient.tsx', codeBeforeReturn + newReturn);
