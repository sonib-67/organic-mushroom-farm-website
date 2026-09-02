import { Metadata } from 'next';
import { OnlineTrainingPageContent } from '../../components/training/OnlineTrainingPageContent';

export const metadata: Metadata = {
  title: 'Master Mushroom Farming from Anywhere: Ultimate Online Training | Organic Mushrooms Farm',
  description:
    'Learn commercial mushroom farming online. Master Oyster, Milky, and White Button mushroom cultivation with step-by-step video training, certification, and lifetime advisory support.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/training/online',
  },
  openGraph: {
    title: 'Master Mushroom Farming from Anywhere: Join the Ultimate Online Training',
    description:
      'Learn the exact techniques, scientific knowledge, and confidence to succeed in commercial mushroom farming from day one with our online training.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/training/online',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Online Mushroom Farming Training Program',
      },
    ],
  },
};

export default function TrainingOnlinePage() {
  return <OnlineTrainingPageContent />;
}
