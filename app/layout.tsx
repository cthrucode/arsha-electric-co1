import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { business } from './data';

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: 'Arsha Electric.co | Electrician in Silver Spring, MD', template: '%s | Arsha Electric.co' },
  description: 'Electrical, low-voltage, and smart home solutions serving Silver Spring, Maryland and the DMV.',
  openGraph: { title: 'Arsha Electric.co', description: 'Electrical, low-voltage, and smart home solutions in the DMV.', url: business.url, siteName: 'Arsha Electric.co', locale: 'en_US', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
