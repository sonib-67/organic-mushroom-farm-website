import { Metadata } from 'next';
import { OysterMushroomCultivationProcessContent } from '../../components/articles/OysterMushroomCultivationProcessContent';

export const metadata: Metadata = {
  title: 'Oyster Mushroom Cultivation in India | Complete Guide',
  description:
    "Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) India's fastest growing agribusiness. Guide for training, spawn, and bulk supply.",
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-process',
  },
  openGraph: {
    title: 'Oyster Mushroom Cultivation in India | Complete Guide',
    description:
      "Oyster Mushroom Cultivation (Dhingri Mushroom ki Kheti) India's fastest growing agribusiness. Guide for training, spawn, and bulk supply.",
    type: 'article',
    url: 'https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-process',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Oyster Mushroom Cultivation Process',
      },
    ],
  },
};

export default function OysterMushroomCultivationProcessPage() {
  return <OysterMushroomCultivationProcessContent />;
}
