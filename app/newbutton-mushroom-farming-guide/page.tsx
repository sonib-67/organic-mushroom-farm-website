import { Metadata } from 'next';
import { ButtonMushroomContent } from '../components/button-mushroom/ButtonMushroomContent';

export const metadata: Metadata = {
  title: 'Button Mushroom Farming Guide | Spawn, Compost, Setup & Profit (New Preview)',
  description:
    'Complete commercial guide to button mushroom farming in India. Master grain spawn preparation, Phase-II compost formulation, casing soil, HVAC climate control, and economics.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Button Mushroom Farming Guide | Spawn, Compost, Setup & Profit',
    description:
      'Master the complete science and commercial business of white button mushroom (Agaricus bisporus) farming in India.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newbutton-mushroom-farming-guide',
  },
};

export default function NewButtonMushroomFarmingGuidePage() {
  return <ButtonMushroomContent />;
}
