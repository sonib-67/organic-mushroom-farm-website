import { Metadata } from 'next';
import { TurnkeySetupPageContent } from '../../components/services/TurnkeySetupPageContent';

export const metadata: Metadata = {
  title: 'Turnkey Commercial Mushroom Farm Setup | EPC Project Solutions',
  description:
    'Complete turnkey EPC commercial mushroom farm setup in India. Climate-controlled grow rooms, Phase-II compost tunnels, Daikin HVAC systems, bankable DPR, and 25%-35% NHB government subsidy support.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/services/turnkey-setup',
  },
  openGraph: {
    title: 'Turnkey Commercial Mushroom Farm Setup | EPC Project Solutions',
    description:
      'India’s leading turnkey EPC mushroom project company. Complete farm design, PUF cold rooms, compost pasteurization units, and technical advisory across India.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/services/turnkey-setup',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1200',
        width: 1200,
        height: 675,
        alt: 'Turnkey Commercial Mushroom Farm Setup',
      },
    ],
  },
};

export default function ServicesTurnkeySetupPage() {
  return <TurnkeySetupPageContent />;
}
