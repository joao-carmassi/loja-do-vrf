import CarouselHome from './carosel-home';
import InfosHome from './infos-home';
import MostraProdutoMarcaHome from './mostra-produto-marca-home';
import { Separator } from '@/components/ui/separator';
import MiniCards from './mini-cards';
import MarcasEFotos from '@/components/marcas-e-fotos';

export default function Home(): React.ReactNode {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: process.env.NEXT_PUBLIC_SITE_NAME || '',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/imgs/logos/logo.png`,
    description: 'Soluções em climatização VRF com qualidade e confiança',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: process.env.NEXT_PUBLIC_SITE_NAME || '',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_SITE_URL}/produtos/{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <h1 className='hidden'>
        {process.env.NEXT_PUBLIC_SITE_NAME || ''} - Soluções em climatização VRF
        com qualidade e confiança
      </h1>
      <CarouselHome />
      <Separator className='bg-primary pt-1' />
      <InfosHome />
      <MiniCards />
      <MostraProdutoMarcaHome />
      <MarcasEFotos />
    </main>
  );
}
