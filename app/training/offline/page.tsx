import { Metadata } from 'next';
import { OfflineTrainingPageContent } from '../../components/training/OfflineTrainingPageContent';

export const metadata: Metadata = {
  title: 'Offline Practical Mushroom Farming Training | Live Commercial Farm Workshop',
  description:
    'Hands-on physical mushroom farming workshop on a live commercial farm. Master substrate preparation, spawning, climate automation, and button mushroom composting with certification.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/training/offline',
  },
  openGraph: {
    title: 'Hands-On Offline Mushroom Farming Workshop: Live Commercial Training',
    description:
      'Experience live commercial mushroom farming. Learn hands-on spawning, pasteurization, HVAC systems, and business scaling.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/training/offline',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Offline Practical Mushroom Farming Training Workshop',
      },
    ],
  },
};

export default function TrainingOfflinePage() {
  return <OfflineTrainingPageContent />;
}
