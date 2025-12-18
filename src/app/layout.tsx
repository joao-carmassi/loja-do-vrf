import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';
import Script from 'next/script';
import WhatsButton from '@/components/whats-button';

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
      <head>
        {/* validação Search Console */}
        <meta
          name='google-site-verification'
          content='SMw3-MM57gpZMebeF8HUm_gFDefjn4vJWOVAJPU0dNo'
        />
        {/* Google Tag Manager */}
        <Script id='gtm-script' strategy='afterInteractive'>
          {`
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NH8KCRNP');
            `}
        </Script>
        {/* gtag.js */}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-YCYT1J0CEJ'
          strategy='afterInteractive'
          id='gtag-script'
        />
        <Script id='gtag-config' strategy='afterInteractive'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YCYT1J0CEJ');
            `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-NH8KCRNP'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Toaster richColors position='bottom-right' />
        <Header />
        {children}
        <WhatsButton />
        <Footer />
      </body>
    </html>
  );
}

/* TODO 
  - Favicon
  - Menu de busca
*/
