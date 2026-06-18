export const STATES = [
  "Andhra_Pradesh", "Arunachal_Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal_Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya_Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil_Nadu", "Telangana", "Tripura", "Uttar_Pradesh", "Uttarakhand", "West_Bengal", "Andaman_and_Nicobar_Islands", "Chandigarh", "Delhi", "Jammu_and_Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const CITIES = [
  "Visakhapatnam", "Vijayawada", "Guntur", "Itanagar", "Guwahati", "Patna", "Gaya", "Raipur", "Bhilai", "Panaji", "Ahmedabad", "Surat", "Vadodara", "Faridabad", "Gurugram", "Shimla", "Ranchi", "Jamshedpur", "Bengaluru", "Mysuru", "Kochi", "Thiruvananthapuram", "Bhopal", "Indore", "Jabalpur", "Mumbai", "Pune", "Nagpur", "Imphal", "Shillong", "Aizawl", "Kohima", "Bhubaneswar", "Cuttack", "Ludhiana", "Amritsar", "Jaipur", "Jodhpur", "Gangtok", "Chennai", "Coimbatore", "Hyderabad", "Warangal", "Agartala", "Lucknow", "Kanpur", "Varanasi", "Dehradun", "Kolkata", "Howrah", "Bhopal", "Katangi"
];

export const VILLAGES = [
  "Lepakshi", "Majuli", "Bodh_Gaya", "Chitrakote", "Aldona", "Gir_Forest", "Kurukshetra", "Malana", "Hampi", "Kumarakom", "Khajuraho", "Shani_Shingnapur", "Loktak_Lake", "Mawlynnong", "Dzukou", "Konark", "Anandpur_Sahib", "Sambhar_Lake", "Yuksom", "Mahabalipuram", "Ramappa", "Neermahal", "Vrindavan", "Shantiniketan"
];

export const ALL_LOCATIONS = [
  ...STATES,
  ...CITIES,
  ...VILLAGES
].map(l => l.toLowerCase().replace(/_/g, '-'));
