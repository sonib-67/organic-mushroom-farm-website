import { Metadata } from 'next';
import { OfflineTrainingPageContent } from '../../components/training/OfflineTrainingPageContent';

export const metadata: Metadata = {
  title: 'Get Hands-On: Offline Practical Mushroom Farming Training (Preview)',
  description:
    'Hands-on physical mushroom farming workshop on a live commercial farm. Master substrate preparation, spawning, climate automation, and button mushroom composting.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Hands-On Offline Mushroom Farming Workshop: Live Commercial Training',
    description:
      'Experience live commercial mushroom farming. Learn hands-on spawning, pasteurization, HVAC systems, and business scaling.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newtraining/offline',
  },
};

export default function NewTrainingOfflinePage() {
  return <OfflineTrainingPageContent />;
}
