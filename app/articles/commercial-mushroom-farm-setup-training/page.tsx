import { Metadata } from 'next';
import { CommercialSetupTrainingContent } from '../../components/articles/CommercialSetupTrainingContent';

export const metadata: Metadata = {
  title: 'Commercial Mushroom Farm Setup & Training: A Complete Guide',
  description:
    'Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.',
  keywords: 'commercial mushroom farm setup, mushroom cultivation training, AC room mushroom farming setup, oyster mushroom cultivation, milky mushroom farming',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/articles/commercial-mushroom-farm-setup-training',
  },
  openGraph: {
    title: 'Commercial Mushroom Farm Setup & Training: A Complete Guide',
    description:
      'Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/articles/commercial-mushroom-farm-setup-training',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Commercial Mushroom Farm Setup',
      },
    ],
  },
};

export default function CommercialMushroomFarmSetupTrainingPage() {
  return <CommercialSetupTrainingContent />;
}
