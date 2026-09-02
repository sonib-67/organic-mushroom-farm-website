import { Metadata } from 'next';
import { ButtonMushroomPageContent } from '../components/services/ButtonMushroomPageContent';

export const metadata: Metadata = {
  title: 'White Button Mushroom Cultivation & Commercial Services | Preview',
  description:
    'Comprehensive guide and turnkey commercial services for White Button Mushroom (Agaricus bisporus) farming in India. High-yield Phase-II compost, climate control AC systems, F1 spawn, and NHB subsidy support.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'White Button Mushroom Cultivation & Commercial Services',
    description:
      'Master the king of commercial mushroom farming with climate-controlled grow rooms, Phase-II pasteurized compost, and lab-certified F1 spawn.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newbutton-mushroom',
  },
};

export default function NewButtonMushroomPage() {
  return <ButtonMushroomPageContent />;
}
