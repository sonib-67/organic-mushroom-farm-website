import { Metadata } from 'next';
import { HomePageContent } from '../components/home/HomePageContent';

export const metadata: Metadata = {
  title: 'Organic Mushrooms Farm | Turnkey Setup, Spawn & Training (New Preview)',
  description:
    'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Organic Mushrooms Farm | Turnkey Setup, Spawn & Training',
    description:
      'Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms.',
    url: 'https://organicmushroomsfarm.com/newhomepage',
  },
};

export default function NewHomePageRoute() {
  return <HomePageContent />;
}
