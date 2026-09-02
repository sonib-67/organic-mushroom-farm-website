import { Metadata } from 'next';
import { OnlineTrainingPageContent } from '../../components/training/OnlineTrainingPageContent';

export const metadata: Metadata = {
  title: 'Master Mushroom Farming from Anywhere: Ultimate Online Training (Preview)',
  description:
    'Learn the exact techniques, scientific knowledge, and confidence to succeed in commercial mushroom farming from day one with our online training.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Master Mushroom Farming from Anywhere: Join the Ultimate Online Training',
    description:
      'Learn the exact techniques, scientific knowledge, and confidence to succeed in commercial mushroom farming from day one with our online training.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newtraining/online',
  },
};

export default function NewTrainingOnlinePage() {
  return <OnlineTrainingPageContent />;
}
