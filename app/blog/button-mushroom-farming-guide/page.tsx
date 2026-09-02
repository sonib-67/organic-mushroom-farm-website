import { Metadata } from 'next';
import { ButtonMushroomContent } from '../../components/button-mushroom/ButtonMushroomContent';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Button Mushroom Farming: Spawn, Compost & Setup',
  description:
    'Learn the complete process of commercial button mushroom farming in India. From grain spawn preparation and Phase-II bulk pasteurization to indoor climate control, casing, and profit margins.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/blog/button-mushroom-farming-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Button Mushroom Farming: Spawn, Compost & Setup',
    description:
      'Master the complete science and commercial business of white button mushroom (Agaricus bisporus) farming in India.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/blog/button-mushroom-farming-guide',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Organic Button Mushroom Farm Setup',
      },
    ],
  },
};

export default function BlogButtonMushroomFarmingGuidePage() {
  return <ButtonMushroomContent />;
}
