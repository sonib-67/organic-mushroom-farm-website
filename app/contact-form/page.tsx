import { Metadata } from 'next';
import { ContactFormPageContent } from '../components/contact/ContactFormPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farm Expert Consultation & Inquiry | Organic Mushrooms Farm',
  description:
    'Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, spawn, and turnkey setup.',
  alternates: {
    canonical: 'https://organicmushroomsfarm.com/contact-form',
  },
  openGraph: {
    title: 'Mushroom Farm Expert Consultation & Inquiry | Organic Mushrooms Farm',
    description:
      'Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, spawn, and turnkey setup.',
    type: 'website',
    url: 'https://organicmushroomsfarm.com/contact-form',
    images: [
      {
        url: 'https://res.cloudinary.com/dnw4fpk2y/image/upload/c_fill,w_1200,ar_16:9,f_auto,q_auto/v1788255569/organic-button-mushroom-farm-setup_kwlyo0.png',
        width: 1200,
        height: 675,
        alt: 'Mushroom Farming Expert Consultation Organic Mushrooms Farm',
      },
    ],
  },
};

export default function ContactFormPage() {
  return <ContactFormPageContent />;
}
