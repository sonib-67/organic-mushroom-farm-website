import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registration Incomplete | Organic Mushroom Farm",
  description: "Training checkout registration was incomplete or cancelled.",
  robots: { index: false, follow: false },
};

export default function CancelPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const type = searchParams.type === "advanced" ? "advanced" : "basic";
  const isAdvanced = type === "advanced";
  
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden bg-transparent">
      <div className="z-10 w-full max-w-lg mx-auto px-4 py-8 flex flex-col items-center justify-center h-[100dvh]">
        <div className="backdrop-blur-xl bg-black/40 border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl relative z-10 text-white text-center w-full">
          <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-4 border border-red-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-400 drop-shadow-md">
            {isAdvanced ? "Advanced Registration Incomplete!" : "Basic Registration Incomplete!"}
          </h1>
          
          <h2 className="text-lg font-semibold text-gray-200 mb-4">
            {isAdvanced ? "Secure Spot (₹699 Only)" : "Complete Checkout (₹299 Only)"}
          </h2>
          
          <p className="text-sm text-gray-300 mb-6 px-2">
            {isAdvanced 
              ? "Your registration for the Advanced Commercial Cultivation Training was not completed. Don't miss out on master-level business secrets!"
              : "Your payment for the Basic Mushroom Cultivation Training was not completed. Start learning the fundamentals of mushroom growing today!"}
          </p>

          <div className="bg-black/30 rounded-xl p-4 text-left border border-white/10 mb-6">
            <h3 className="font-bold text-sm mb-3 text-purple-300">What's Included in {isAdvanced ? "₹699" : "₹299"}:</h3>
            <ul className="text-xs text-gray-300 space-y-2">
              {isAdvanced ? (
                <>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Oyster, Button & Milky Focus:</strong> Grow year-round in hot summers too.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Commercial Setup:</strong> Layout designs, low-cost sheds, & racks setup.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Climate Infrastructure:</strong> AC, foggers, exhaust & humidifier controls.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Pest & Disease Cure:</strong> Handle green mold, flies & bacterial blotch.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Marketing & Sales:</strong> Market selling, restaurant tie-ups, ads.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Bonus Benefits:</strong> Certified Certificate & private community support.</span></li>
                </>
              ) : (
                <>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Oyster & Button Focus:</strong> Simple, guided step-by-step growing manual.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Home scale setup:</strong> Easy setups in backyards or tiny rooms.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Substrate boiling & Prep:</strong> sterilization techniques.</span></li>
                  <li className="flex gap-2"><span>✅</span> <span><strong>Spawning, Bagging & Care:</strong> Packing bags without contamination.</span></li>
                </>
              )}
            </ul>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6 text-sm font-bold text-yellow-400">
            {isAdvanced ? "🔥 Commercial Level Expertise" : "🌱 Ideal for Beginners"}
            <span className="text-gray-400">|</span> 
            <span>One-Time Lifetime Fee</span>
          </div>

          <div className="flex flex-col gap-3">
            <Link 
              href={`/training-checkout?type=${type}`}
              className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-bold transition-all shadow-lg"
            >
              Pay ₹{isAdvanced ? "699" : "299"} & Register Again
            </Link>
            <Link 
              href="/training"
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg text-sm font-bold transition-all"
            >
              Back to Training Options
            </Link>
          </div>

          <div className="mt-8 border-t border-white/20 pt-4">
            <h4 className="text-xs font-bold text-gray-300 mb-1">Need Help? Contact Support</h4>
            <p className="text-[10px] text-gray-400">If you are facing issues with payment, please reach out to us and we will assist you.</p>
            <a href="https://wa.me/919203544140" className="inline-flex items-center justify-center gap-2 mt-2 py-1.5 px-4 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 text-xs font-bold hover:bg-green-500/30 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
