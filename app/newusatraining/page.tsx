import type { Metadata } from 'next';
import { UsaTrainingPageContent } from '../components/training/UsaTrainingPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Cultivation Training USA & Global | Organic Mushrooms Farm',
  description:
    'Learn highly profitable organic mushroom farming for the US & global markets. Turnkey solutions, indoor climate control strategies, and business models for commercial growers.',
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

export default function NewUsaTrainingPage() {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <UsaTrainingPageContent />
    </>
  );
}
