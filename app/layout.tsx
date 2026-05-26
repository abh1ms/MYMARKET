import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import ClickToCallButton from '@/components/click-to-call-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Market | Premium Supermarket in HSR Layout, Bangalore',
  description: 'Fresh groceries, organic produce, imported foods, dairy, meat, seafood, and bakery items delivered fast in HSR Layout.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ClickToCallButton />
      </body>
    </html>
  );
}