import { Metadata } from 'next';
import { OperationsContent } from '../components/operations/OperationsContent';

export const metadata: Metadata = {
  title: 'Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm (Preview)',
  description:
    'Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Behind the Harvest: Why Seamless Operations Make or Break Your Mushroom Farm (Preview)',
    description:
      'Discover why mushroom farm operations require strict hygiene, well-defined workflows, and precision monitoring for maximum harvest yields.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newoperations',
  },
};

export default function NewOperationsPage() {
  return <OperationsContent />;
}
