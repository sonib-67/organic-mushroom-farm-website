export interface City {
  slug: string;
  name: string;
  group: 'A' | 'B' | 'C';
}

export interface Category {
  slug: string;
  name: string;
  keyword: string;
}

export const MP_CITIES: City[] = [
  { slug: 'indore', name: 'Indore', group: 'B' },
  { slug: 'bhopal', name: 'Bhopal', group: 'A' },
  { slug: 'jabalpur', name: 'Jabalpur', group: 'C' },
  { slug: 'gwalior', name: 'Gwalior', group: 'B' },
  { slug: 'ujjain', name: 'Ujjain', group: 'A' },
  { slug: 'sagar', name: 'Sagar', group: 'C' },
  { slug: 'dewas', name: 'Dewas', group: 'B' },
  { slug: 'satna', name: 'Satna', group: 'A' },
  { slug: 'ratlam', name: 'Ratlam', group: 'C' },
  { slug: 'rewa', name: 'Rewa', group: 'B' },
  { slug: 'murwara', name: 'Murwara', group: 'A' },
  { slug: 'singrauli', name: 'Singrauli', group: 'C' },
  { slug: 'burhanpur', name: 'Burhanpur', group: 'B' },
  { slug: 'khandwa', name: 'Khandwa', group: 'A' },
  { slug: 'bhind', name: 'Bhind', group: 'C' },
  { slug: 'chhindwara', name: 'Chhindwara', group: 'B' },
  { slug: 'guna', name: 'Guna', group: 'A' },
  { slug: 'shivpuri', name: 'Shivpuri', group: 'C' },
  { slug: 'vidisha', name: 'Vidisha', group: 'B' },
  { slug: 'chhatarpur', name: 'Chhatarpur', group: 'A' },
  { slug: 'damoh', name: 'Damoh', group: 'C' },
  { slug: 'mandsaur', name: 'Mandsaur', group: 'B' },
  { slug: 'khargone', name: 'Khargone', group: 'A' },
  { slug: 'neemuch', name: 'Neemuch', group: 'C' },
  { slug: 'pithampur', name: 'Pithampur', group: 'B' },
  { slug: 'hoshangabad', name: 'Hoshangabad', group: 'A' },
  { slug: 'itarsi', name: 'Itarsi', group: 'C' },
  { slug: 'sehore', name: 'Sehore', group: 'B' },
  { slug: 'betul', name: 'Betul', group: 'A' },
  { slug: 'seoni', name: 'Seoni', group: 'C' },
  { slug: 'datia', name: 'Datia', group: 'B' },
  { slug: 'nagda', name: 'Nagda', group: 'A' },
  { slug: 'balaghat', name: 'Balaghat', group: 'C' },
  { slug: 'mandla', name: 'Mandla', group: 'B' },
  { slug: 'dindori', name: 'Dindori', group: 'A' },
  { slug: 'tikamgarh', name: 'Tikamgarh', group: 'C' },
  { slug: 'panna', name: 'Panna', group: 'B' },
  { slug: 'anuppur', name: 'Anuppur', group: 'A' },
  { slug: 'umaria', name: 'Umaria', group: 'C' },
  { slug: 'sidhi', name: 'Sidhi', group: 'B' },
  { slug: 'shahdol', name: 'Shahdol', group: 'A' },
  { slug: 'rajgarh', name: 'Rajgarh', group: 'C' },
  { slug: 'agar-malwa', name: 'Agar Malwa', group: 'B' },
  { slug: 'alirajpur', name: 'Alirajpur', group: 'A' },
  { slug: 'barwani', name: 'Barwani', group: 'C' },
  { slug: 'ashoknagar', name: 'Ashoknagar', group: 'B' }
];

export const CATEGORIES: Category[] = [
  { slug: 'mushroom-training-center', name: 'Mushroom Training Center', keyword: 'mushroom training center near me' },
  { slug: 'government-&-free-training-guidance', name: 'Government & Free Training Guidance', keyword: 'government mushroom training center' },
  { slug: 'advanced-cultivation-courses', name: 'Advanced Cultivation Courses', keyword: 'mushroom growing training courses' },
  { slug: 'how-to-grow-mushrooms-at-home', name: 'How to Grow Mushrooms at Home', keyword: 'how to grow mushroom at home in hindi' },
  { slug: 'mushroom-types-&-price-info', name: 'Mushroom Types & Price Info', keyword: 'oyster mushroom price' },
  { slug: 'commercial-farm-setup-&-business', name: 'Commercial Farm Setup & Business', keyword: 'mushroom farm setup' },
  { slug: 'spawn-supply-&-growing-kits', name: 'Spawn Supply & Growing Kits', keyword: 'mushroom spawn supplier' },
  { slug: 'buy-fresh-&-dry-mushrooms', name: 'Buy Fresh & Dry Mushrooms', keyword: 'buy fresh mushroom online india' }
];
