import type { Metadata } from 'next';
import './globals.css';
import './performance.css';
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
