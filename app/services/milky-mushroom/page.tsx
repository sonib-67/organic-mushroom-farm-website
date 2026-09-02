import { Metadata } from 'next';
import { MilkyMushroomPageContent } from '../../components/services/MilkyMushroomPageContent';

export const metadata: Metadata = {
  title: 'Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming',
  description:
    'Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop in India. Learn about their 30°C-35°C heat tolerance, casing soil recipe, spawn booking, and high yield economics.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/services/milky-mushroom',
  },
  openGraph: {
    title: 'Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming',
    description:
      'Master the complete science and commercial business of white Milky mushroom (Calocybe indica) farming in India.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/services/milky-mushroom',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1508747703725-719ae2c73ee8?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 675,
        alt: 'Milky Mushroom Cultivation Services',
      },
    ],
  },
};

export default function ServicesMilkyMushroomPage() {
  return <MilkyMushroomPageContent />;
}
