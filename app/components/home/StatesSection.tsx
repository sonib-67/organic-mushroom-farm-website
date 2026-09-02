'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';

export const StatesSection: React.FC = () => {
  const allStates = [
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Bihar",
    "Delhi",
    "Rajasthan",
    "Gujarat",
    "Punjab",
    "Haryana",
    "Chhattisgarh",
    "Jharkhand",
    "West Bengal",
    "Uttarakhand",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Andhra Pradesh",
    "Kerala",
    "Himachal Pradesh",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="badge mx-auto mb-4">Global & National Service Area</div>
        <h2 className="mb-4 uppercase tracking-tight">
          Active Commercial Project{" "}
          <span className="gradient-text">
            Hubs Globally
          </span>
        </h2>
        <p className="max-w-3xl mx-auto mb-6 font-medium leading-relaxed dark:text-slate-400 text-slate-600">
          We provide commercial mushroom farming training and turnkey setup
          services across all states of India and key international markets,
          ensuring precision and high yield for every climate zone globally.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {allStates.map((state) => (
            <a
              key={state}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state + " India")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass border dark:border-white/5 border-black/5 rounded-full text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-primary-start hover:bg-primary-start/20 transition-all"
            >
              {state}
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pan-india-global-operations"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-bg font-extrabold text-sm text-white shadow-lg shadow-primary-start/20 hover:scale-105 transition-all"
          >
            <Globe size={16} className="animate-spin-slow" />
            <span>Pan India & Global Operations</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Visually Hidden SEO Content Container */}
        <div
          className="sr-only absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 border-0 pointer-events-none opacity-0"
          aria-hidden="true"
        >
          <p>
            Our expert teams provide <strong>mushroom training in India</strong>{" "}
            and <strong>mushroom farm setup India</strong> services in Madhya
            Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, Rajasthan,
            Gujarat, Punjab, Haryana, Chhattisgarh, Jharkhand, and other major
            regions. We are committed to building the most successful{" "}
            <strong>button mushroom farming business</strong> network globally.
          </p>
          <p>
            <strong>
              Serving Pan India Cities, Towns & Villages for Commercial Mushroom
              Setups:
            </strong>{" "}
            Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata,
            Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal,
            Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad,
            Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivli,
            Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi
            Mumbai, Allahabad, Howrah, Ranchi, Gwalior, Jabalpur, Coimbatore,
            Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh,
            Solapur, Hubli-Dharwad, Bareilly, Moradabad, Mysore, Gurgaon,
            Aligarh, Jalandhar, Tiruchirappalli, Bhubaneswar, Salem,
            Mira-Bhayandar, Warangal, Thiruvananthapuram, Bhiwandi, Saharanpur,
            Guntur, Amravati, Bikaner, Noida, Jamshedpur, Bhilai, Cuttack,
            Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, Asansol,
            Rourkela, Nanded, Kolhapur, Ajmer, Akola, Gulbarga, Jamnagar,
            Ujjain, Loni, Siliguri, Jhansi, Ulhasnagar, Jammu,
            Sangli-Miraj-Kupwad, Mangalore, Erode, Belgaum, Kurnool, Ambattur,
            Rajahmundry, Tirunelveli, Malegaon, Gaya, Udaipur, Kakinada,
            Davanagere, Kozhikode, Maheshtala, Rajpur Sonarpur, Bokaro, South
            Dumdum, Bellary, Patiala, Gopalpur, Agartala, Bhagalpur,
            Muzaffarnagar, Bhatpara, Panihati, Latur, Dhule, Rohtak, Korba,
            Bhilwara, Brahmapur, Muzaffarpur, Ahmednagar, Mathura, Kollam,
            Avadi, Kadapa, Rajahmundry, Bilaspur, Shahjahanpur, Satara, Bijapur,
            Rampur, Shivamogga, Chandrapur, Junagadh, Thrissur, Alwar,
            Bardhaman, Kulti, Nizamabad, Parbhani, Tumkur, Khammam,
            Uzhavarkarai, Bihar Sharif, Panipat, Darbhanga, Bally, Aizawl,
            Dewas, Ichalkaranji, Karnal, Bathinda, Jalna, Eluru, Barasat, Kirari
            Suleman Nagar, Purnia, Satna, Mau, Sonipat, Farrukhabad, Sagar,
            Rourkela, Durg, Imphal, Ratlam, Hapur, Arrah, Anantapur, Karimnagar,
            Etawah, Ambernath, North Dumdum, Bharatpur, Begusarai, New Delhi,
            Gandhidham, Baranagar, Tiruvottiyur, Pondicherry, Sikar,
            Thoothukudi, Rewa, Mirzapur, Raichur, Pali, Ramagundam, Silchar.
          </p>
        </div>
      </div>
    </section>
  );
};
