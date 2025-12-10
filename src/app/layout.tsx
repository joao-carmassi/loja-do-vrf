import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

const geist = Inter({
  subsets: ['latin'],
});

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Chiller`,
    description: `Peças para Chiller em um único lugar`,
    openGraph: {
      title: `Chiller`,
      description: `Peças para Chiller em um único lugar`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Chiller`,
      description: `Peças para Chiller em um único lugar`,
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
