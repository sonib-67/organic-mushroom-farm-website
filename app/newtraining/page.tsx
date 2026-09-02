import type { Metadata } from 'next';
import { TrainingPageContent } from '../components/training/TrainingPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Cultivation Training Program | Organic Mushrooms Farm',
  description:
    'Learn commercial mushroom farming in India. Choose online self-paced training (Basic ₹299, Commercial ₹699) or practical hands-on farm workshops in Jabalpur, MP.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function NewTrainingPage() {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <TrainingPageContent />
    </>
  );
}
