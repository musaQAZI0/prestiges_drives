import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactChannels from '@/components/ContactChannels';

export const metadata: Metadata = {
  title: 'Prestige Drives',
  description: 'Premium car rental services in Pakistan.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skipLink" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ContactChannels floating />
      </body>
    </html>
  );
}
