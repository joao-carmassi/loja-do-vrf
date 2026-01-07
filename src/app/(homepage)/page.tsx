import CarouselHome from './carosel-home';
import InfosHome from './infos-home';
import MostraProdutoMarcaHome from './mostra-produto-marca-home';
import { Separator } from '@/components/ui/separator';
import MiniCards from './mini-cards';

export default function Home(): React.ReactNode {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Loja do VRF',
    url: 'https://lojadovrf.com.br',
    logo: 'https://lojadovrf.com.br/imgs/logos/logo.png',
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
    name: 'Loja do VRF',
    url: 'https://lojadovrf.com.br',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://lojadovrf.com.br/produtos/{search_term_string}',
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
        Loja do VRF - Soluções em climatização VRF com qualidade e confiança
      </h1>
      <CarouselHome />
      <Separator className='bg-primary pt-1' />
      <InfosHome />
      <MiniCards />
      <MostraProdutoMarcaHome />
    </main>
  );
}
