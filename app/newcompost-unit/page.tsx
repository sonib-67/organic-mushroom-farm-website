import { Metadata } from 'next';
import { CompostUnitContent } from '../components/compost/CompostUnitContent';

export const metadata: Metadata = {
  title: 'The Heart of Button Mushroom Farming: Science of a Compost Unit (Preview)',
  description:
    'Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'The Heart of Button Mushroom Farming: Science of a Compost Unit (Preview)',
    description:
      'Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newcompost-unit',
  },
};

export default function NewCompostUnitPage() {
  return <CompostUnitContent />;
}
