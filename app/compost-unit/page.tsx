import { Metadata } from 'next';
import { CompostUnitContent } from '../components/compost/CompostUnitContent';

export const metadata: Metadata = {
  title: 'The Heart of Button Mushroom Farming: Science of a Compost Unit | Organic Mushrooms Farm',
  description:
    'Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/compost-unit',
  },
  openGraph: {
    title: 'The Heart of Button Mushroom Farming: Science of a Compost Unit',
    description:
      'Discover why understanding and investing in proper compost infrastructure is the most critical step for your button mushroom agri-business.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/compost-unit',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Compost Unit',
      },
    ],
  },
};

export default function CompostUnitPage() {
  return <CompostUnitContent />;
}
