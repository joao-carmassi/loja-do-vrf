import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';

const geist = Inter({
  subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Loja do VRF`,
    description: `Soluções em climatização VRF com qualidade e confiança`,
    metadataBase: new URL('https://lojadovrf.com.br'),
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: `Loja do VRF`,
      description: `Soluções em climatização VRF com qualidade e confiança`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Loja do VRF`,
      description: `Soluções em climatização VRF com qualidade e confiança`,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={geist.className} lang='pt-BR'>
      <body>
        <Toaster richColors position='bottom-right' />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

/* TODO 
  - Manuais

  - SEO
  - ANALYTICS
*/
