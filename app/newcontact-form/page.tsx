import { Metadata } from 'next';
import { ContactFormPageContent } from '../components/contact/ContactFormPageContent';

export const metadata: Metadata = {
  title: 'Mushroom Farm Consultation & Advisory Desk (Preview) | Organic Mushrooms Farm',
  description:
    'Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, spawn, and turnkey setup.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Mushroom Farm Consultation & Advisory Desk (Preview)',
    description:
      'Starting a commercial mushroom farming business is highly lucrative. Consult our agri-tech specialists for expert guidance, training, spawn, and turnkey setup.',
    type: 'website',
    url: 'https://organicmushroomsfarm.com/newcontact-form',
  },
};

export default function NewContactFormPage() {
  return <ContactFormPageContent />;
}
