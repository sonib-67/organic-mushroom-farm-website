import { Metadata } from 'next';
import { TurnkeySetupPageContent } from '../components/services/TurnkeySetupPageContent';

export const metadata: Metadata = {
  title: 'Turnkey Commercial Mushroom Farm Setup | EPC Project Solutions | Preview',
  description:
    'Complete turnkey EPC commercial mushroom farm setup solutions. Pre-engineered climate-controlled grow rooms, Phase-II compost pasteurization tunnels, Daikin HVAC, and 25%-35% NHB subsidy support.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Turnkey Commercial Mushroom Farm Setup | EPC Project Solutions',
    description:
      'Complete turnkey commercial mushroom farm setup solutions across India. Insulated grow rooms, compost infrastructure, and government subsidy assistance.',
    type: 'article',
    url: 'https://organicmushroomsfarm.com/newturnkey-setup',
  },
};

export default function NewTurnkeySetupPage() {
  return <TurnkeySetupPageContent />;
}
