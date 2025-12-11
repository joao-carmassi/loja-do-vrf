import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

const geist = Inter({
  subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Loja do VRF`,
    description: `Soluções em climatização VRF com qualidade e confiança`,
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
        <Header />
        {children}
      </body>
    </html>
  );
}

// TODO: METADATA E H1
