import { Metadata } from 'next';
import { OysterMushroomCultivationProcessContent } from '../../components/articles/OysterMushroomCultivationProcessContent';

export const metadata: Metadata = {
  title: 'Oyster Mushroom Cultivation in India | Complete Guide (Preview)',
  description:
    "Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) India's fastest growing agribusiness. Guide for training, spawn, and bulk supply.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Oyster Mushroom Cultivation in India | Complete Guide (Preview)',
    description:
      "Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) India's fastest growing agribusiness. Guide for training, spawn, and bulk supply.",
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newarticles/oyster-mushroom-cultivation-process',
  },
};

export default function NewOysterMushroomCultivationProcessPage() {
  return <OysterMushroomCultivationProcessContent />;
}
