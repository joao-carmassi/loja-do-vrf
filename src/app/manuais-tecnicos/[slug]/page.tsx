import { Separator } from '@/components/ui/separator';
import getPdf from '@/utils/get-pdfs';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import generateUrl from '@/utils/generate-url';
import MarcasEFotos from '@/components/marcas-e-fotos';
import InfosHome from '@/app/(homepage)/infos-home';
import MiniCards from '@/app/(homepage)/mini-cards';

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
        <div className='flex flex-col gap-12 container p-6 md:p-12 md:pt-0 mx-auto max-w-[95rem]'>
          <h1 className='w-full text-center text-2xl font-medium md:text-3xl text-primary'>
            Manuais Técnicos - {marcaNome}
          </h1>
          <div className='grid md:grid-cols-2 gap-12'>
            {listaPdfs.some((pdf) => pdf.tipo === 'CONDENSADORA') && (
              <div className='flex flex-col gap-7'>
                <h2 className='text-xl uppercase'>/ Unidade Condensadora</h2>
                <div>
                  {listaPdfs
                    .filter((pdf) => pdf.tipo === 'CONDENSADORA')
                    .map((pdf, idx) => (
                      <div key={idx}>
                        <Separator />
                        <a
                          href={`/pdfs/${pdf.documento}.pdf`}
                          download={`${pdf.documento}.pdf`}
                          className='my-2.5 grid gap-2.5 text-sm grid-cols-2 hover:underline'
                        >
                          <p>{pdf.documento}</p>
                          <p className='text-muted-foreground'>{pdf.modelo}</p>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {listaPdfs.some((pdf) => pdf.tipo === 'EVAPORADORA') && (
              <div className='flex flex-col gap-7'>
                <h2 className='text-xl uppercase'>/ Unidade Evaporadora</h2>
                <div>
                  {listaPdfs
                    .filter((pdf) => pdf.tipo === 'EVAPORADORA')
                    .map((pdf, idx) => (
                      <div key={idx}>
                        <Separator />
                        <a
                          href={`/pdfs/${pdf.documento}.pdf`}
                          download={`${pdf.documento}.pdf`}
                          className='my-2.5 grid gap-2.5 text-sm grid-cols-2 hover:underline'
                        >
                          <p>{pdf.documento}</p>
                          <p className='text-muted-foreground'>{pdf.modelo}</p>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <MarcasEFotos />
    </>
  );
};

export default Manuais;
