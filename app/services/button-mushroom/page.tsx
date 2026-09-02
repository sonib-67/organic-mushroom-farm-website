import { Metadata } from 'next';
import { ButtonMushroomPageContent } from '../../components/services/ButtonMushroomPageContent';

export const metadata: Metadata = {
  title: 'White Button Mushroom Farming: Cultivation & Commercial Services | India',
  description:
    'Complete White Button Mushroom (Agaricus bisporus) cultivation guide and commercial project services in India. Setup climate-controlled AC grow rooms, Phase-II compost tunnels, order lab-tested F1 spawn, and get 25%-35% NHB subsidy support.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/services/button-mushroom',
  },
  openGraph: {
    title: 'White Button Mushroom Farming: Cultivation & Commercial Services',
    description:
      'Learn complete button mushroom cultivation science, Phase-II composting, climate control parameters, and commercial project setup with Organic Mushrooms Farm.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/services/button-mushroom',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'White Button Mushroom Commercial Farming',
      },
    ],
  },
};

export default function ServicesButtonMushroomPage() {
  return <ButtonMushroomPageContent />;
}
