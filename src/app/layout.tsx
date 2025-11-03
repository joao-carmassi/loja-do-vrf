import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | Peças e Soluções para Refrigeração`,
    description: `Encontre peças, compressores, motores e soluções para sistemas de refrigeração industrial e comercial. ${process.env.NEXT_PUBLIC_WEBSITE_NAME}: qualidade, agilidade e suporte técnico especializado.`,
    openGraph: {
      title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | Peças e Soluções para Refrigeração`,
      description: `Encontre peças, compressores, motores e soluções para sistemas de refrigeração industrial e comercial. ${process.env.NEXT_PUBLIC_WEBSITE_NAME}: qualidade, agilidade e suporte técnico especializado.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} | Peças e Soluções para Refrigeração`,
      description: `Encontre peças, compressores, motores e soluções para sistemas de refrigeração industrial e comercial. ${process.env.NEXT_PUBLIC_WEBSITE_NAME}: qualidade, agilidade e suporte técnico especializado.`,
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
