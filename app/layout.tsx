import type { Metadata } from 'next';
import { Inter, Noto_Sans_Khmer, Public_Sans } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/auth/AuthProvider';
import GovBar from '@/components/moeys/GovBar';
import Header from '@/components/moeys/Header';
import Footer from '@/components/moeys/Footer';
import ScrollToTop from '@/components/moeys/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ['khmer'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-khmer',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  title: 'MoEYS Cambodia - Primary Education Department',
  description: 'Ministry of Education, Youth and Sport - Primary Education Department official portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${notoSansKhmer.variable} ${publicSans.variable} font-[family-name:var(--font-public-sans)]`}>
        <AuthProvider>
          <div className="bg-slate-50 min-h-screen flex flex-col">
            <GovBar />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
