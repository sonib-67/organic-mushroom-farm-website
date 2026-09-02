import { Metadata } from 'next';
import { OperationsContent } from '../components/operations/OperationsContent';

export const metadata: Metadata = {
  title: 'Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm | Organic Mushrooms Farm',
  description:
    'Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/operations',
  },
  openGraph: {
    title: 'Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm',
    description:
      'Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/operations',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Farm Operations',
      },
    ],
  },
};

export default function OperationsPage() {
  return <OperationsContent />;
}
