import getPdf from '@/utils/get-pdfs';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import generateUrl from '@/utils/generate-url';
import MarcasEFotos from '@/components/marcas-e-fotos';
import InfosHome from '@/app/(homepage)/infos-home';
import MiniCards from '@/app/(homepage)/mini-cards';
import ManuaisSection from './manuaise-section';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { pdfs, marcas } = getPdf();

  const marcaKey = slug.toUpperCase();
  const listaPdfs = pdfs[marcaKey];

  if (!listaPdfs || listaPdfs.length === 0) return {};

  const marcaNome =
    marcas.find((m) => generateUrl(m) === slug) || slug.replace(/-/g, ' ');

  const title = `Manuais Técnicos ${marcaNome} | Loja do VRF`;
  const description = `Acesse os manuais técnicos de ${marcaNome}. Documentação completa de unidades condensadoras e evaporadoras.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/manuais-tecnicos/${slug}`,
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
      title,
      description,
      type: 'website',
      url: `https://lojadovrf.com.br/manuais-tecnicos/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const Manuais = async ({ params }: Props): Promise<React.ReactNode> => {
  const { slug } = await params;
  const { pdfs, marcas } = getPdf();

  const marcaKey = slug.toUpperCase();
  const listaPdfs = pdfs[marcaKey];

  if (!listaPdfs || listaPdfs.length === 0) {
    notFound();
  }

  const marcaNome =
    marcas.find((m) => generateUrl(m) === slug) || slug.replace(/-/g, ' ');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://lojadovrf.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Manuais Técnicos',
        item: 'https://lojadovrf.com.br/manuais-tecnicos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: marcaNome,
        item: `https://lojadovrf.com.br/manuais-tecnicos/${slug}`,
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Manuais Técnicos ${marcaNome}`,
    description: `Manuais técnicos de ${marcaNome} - Unidades condensadoras e evaporadoras`,
    url: `https://lojadovrf.com.br/manuais-tecnicos/${slug}`,
    about: {
      '@type': 'Brand',
      name: marcaNome,
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <section>
        <Image
          width={1860}
          height={650}
          src={`/imgs/manuais/capas/${marcaKey}.png`}
          alt={marcaNome}
          className='h-full w-full object-contain object-center'
        />
        <InfosHome />
        <MiniCards />
        <ManuaisSection pdf={listaPdfs} marca={marcaNome} />
      </section>
      <MarcasEFotos />
    </>
  );
};

export default Manuais;
