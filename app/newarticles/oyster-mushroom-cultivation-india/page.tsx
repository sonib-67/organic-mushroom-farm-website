import { Metadata } from 'next';
import { OysterMushroomCultivationIndiaContent } from '../../components/articles/OysterMushroomCultivationIndiaContent';

export const metadata: Metadata = {
  title: 'Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business (Preview)',
  description:
    'Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Oyster Mushroom Cultivation in India: Low-Cost, High-Profit Agri-Business (Preview)',
    description:
      'Learn why Oyster Mushroom (Dhingri) cultivation is the ultimate low-cost, high-profit agri-business in India. Perfect for urban entrepreneurs and farmers.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newarticles/oyster-mushroom-cultivation-india',
  },
};

export default function NewOysterMushroomCultivationIndiaPage() {
  return <OysterMushroomCultivationIndiaContent />;
}
