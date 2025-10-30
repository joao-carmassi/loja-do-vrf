import CarouselHome from './carosel-home';
import CarouselMarcasHome from './carousel-marcas-home';
import ImgsHome from './imgs-home';
import InfosHome from './infos-home';
import MostraProdutoMarcaHome from './mostra-produto-marca-home';
import CardsImgHome from './cards-img-home';

import type { Metadata } from 'next';

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
      title: '${} | Peças e Soluções para Refrigeração',
      description: `Encontre peças, compressores, motores e soluções para sistemas de refrigeração industrial e comercial. ${process.env.NEXT_PUBLIC_WEBSITE_NAME}: qualidade, agilidade e suporte técnico especializado.`,
    },
  };
};

export default function Home() {
  return (
    <main>
      <CarouselHome />
      <InfosHome />
      <ImgsHome />
      <MostraProdutoMarcaHome />
      <CarouselMarcasHome />
      <CardsImgHome />
    </main>
  );
}
