import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';

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
    <html lang='pt-BR'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
