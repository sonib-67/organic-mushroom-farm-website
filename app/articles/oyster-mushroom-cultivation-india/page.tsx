import { Metadata } from 'next';
import { OysterMushroomCultivationIndiaContent } from '../../components/articles/OysterMushroomCultivationIndiaContent';

export const metadata: Metadata = {
  title: 'Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business | Organic Mushrooms Farm',
  description:
    'Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-india',
  },
  openGraph: {
    title: 'Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business',
    description:
      'Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/articles/oyster-mushroom-cultivation-india',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Oyster Mushroom Cultivation',
      },
    ],
  },
};

export default function OysterMushroomCultivationIndiaPage() {
  return <OysterMushroomCultivationIndiaContent />;
}
