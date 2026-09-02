import { Metadata } from 'next';
import { CommercialSetupTrainingContent } from '../../components/articles/CommercialSetupTrainingContent';

export const metadata: Metadata = {
  title: 'Commercial Mushroom Farm Setup & Training: A Complete Guide (Preview)',
  description:
    'Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Commercial Mushroom Farm Setup & Training: A Complete Guide (Preview)',
    description:
      'Learn how to start a commercial mushroom farm. Detailed guide on AC & non-AC setup, oyster, milky, shiitake cultivation, and mushroom training.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newarticles/commercial-mushroom-farm-setup-training',
  },
};

export default function NewCommercialMushroomFarmSetupTrainingPage() {
  return <CommercialSetupTrainingContent />;
}
