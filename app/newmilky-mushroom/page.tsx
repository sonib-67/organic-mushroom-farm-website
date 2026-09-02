import { Metadata } from 'next';
import { MilkyMushroomPageContent } from '../components/services/MilkyMushroomPageContent';

export const metadata: Metadata = {
  title: 'Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming | Preview',
  description:
    'Discover why Milky mushrooms (Calocybe indica) are the perfect summer crop. Learn about their heat tolerance (30°C-35°C), high biological yield, and long shelf life.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Milky Mushrooms: The Ultimate Summer Crop for Profitable Farming',
    description:
      'Learn complete Milky Mushroom (Calocybe indica) cultivation method in India. High heat tolerance, casing soil recipe, and profit margins.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newmilky-mushroom',
  },
};

export default function NewMilkyMushroomPage() {
  return <MilkyMushroomPageContent />;
}
