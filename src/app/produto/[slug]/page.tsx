import { H1 } from '@/components/ui/h1';
import { CarouselProdutos } from './carousel-produtos';
import { H2 } from '@/components/ui/h2';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import getProdutos from '@/utils/get-produtos';
import generateUrl from '@/utils/generate-url';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MarkdownToHtml from '@/components/ui/markdownToHtml';
import Link from 'next/link';
import BotaoAdicionaCarrinho from './botao-adiciona-carrinho';
import Image from 'next/image';
import { Truck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { H3 } from '@/components/ui/h3';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import CardProduto from '@/components/card-produto';
import shuffleArray from '@/utils/shuffle-array';
import itemsPerCategory from '@/utils/items-per-category';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const formasDeEnvio = [
  {
    nome: 'Azul Cargo Express',
    img: '/imgs/formas-de-envio/Azul_Cargo_Express_logo.png',
  },
  {
    nome: 'Correios',
    img: '/imgs/formas-de-envio/correiosEnvio.png',
  },
  {
    nome: 'Latam Cargo',
    img: '/imgs/formas-de-envio/LATAM_Cargo_logo.png',
  },
  {
    nome: 'Jadlog',
    img: '/imgs/formas-de-envio/jadlog.png',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const produto = getProdutos.produtos.find(
    (prod) => generateUrl(`${prod.nome}-${prod.sku}`) === slug
  );
  if (!produto) return {};
  const title = `${produto.nome} ${produto.marca} Loja do VRF`;
  const description =
    produto.descricao
      ?.replace(/[#*\-]/g, '')
      .split('\n')[0]
      ?.trim() ||
    `Compre ${produto.nome} da marca ${produto.marca} em Loja do VRF.`;
  const images: string[] = [];
  return {
    title,
    description,
    alternates: {
      canonical: `/produto/${slug}`,
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
      images,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

const Produtos = async ({ params }: Props) => {
  const { slug } = await params;

  const produto = getProdutos.produtos.find(
    (prod) => generateUrl(`${prod.nome}-${prod.sku}`) === slug
  );

  if (!produto) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: produto.nome,
    description:
      produto.descricao
        ?.replace(/[#*\-]/g, '')
        .split('\n')[0]
        ?.trim() || `${produto.nome} - ${produto.marca}`,
    brand: {
      '@type': 'Brand',
      name: produto.marca,
    },
    sku: produto.sku,
    category: produto.categoria,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      priceCurrency: 'BRL',
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'Loja do VRF',
      },
    },
  };

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
        name: produto.categoria,
        item: `https://lojadovrf.com.br/produtos/${generateUrl(
          produto.categoria
        )}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: produto.nome,
        item: `https://lojadovrf.com.br/produto/${slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className='mx-auto p-6 md:p-12 max-w-[95rem] flex flex-col md:grid md:grid-cols-[1fr_33%] gap-6 md:gap-12'>
        <CarouselProdutos produto={produto} />
        <div className='space-y-4'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/produtos/${generateUrl(produto.categoria)}${
                    produto.subcategoria &&
                    `?subcategoria=${generateUrl(produto.subcategoria)}`
                  }`}
                >
                  {produto.categoria}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{produto.nome}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link className='block' href={`/marca/${generateUrl(produto.marca)}`}>
            <Image
              className='h-fit w-28'
              height={20}
              width={112}
              alt={produto.marca}
              src={`/imgs/marcas/${produto.marca}.png`}
            />
          </Link>
          <H1 className='!text-2xl md:!text-3xl text-primary'>
            {produto.nome}
          </H1>
          <p className='text-primary text-sm border border-primary rounded-md w-fit p-1.5'>
            Códigos compatíveis: {produto.codigos.join(', ')}
          </p>
          <p className='text-sm text-muted-foreground'>sku: {produto.sku}</p>
          <p className='text-green-600 text-sm font-bold'>
            Em até 12x no cartão de crédito
          </p>
          <p className='text-green-600 text-sm'>
            <span className='font-bold'>7% DE DESCONTO</span> pagando com Pix
          </p>
          <BotaoAdicionaCarrinho produto={produto} />
          <p className='text-green-600 text-sm font-bold flex items-center gap-1.5'>
            <Truck />
            Consulte a Disponibilidade
          </p>
          <p className='text-green-600 text-sm font-bold'>Formas de envio:</p>
          <div>
            <ul className='flex flex-wrap gap-4 justify-between'>
              {formasDeEnvio.map((forma) => (
                <li key={forma.nome} title={forma.nome}>
                  <Image
                    src={forma.img}
                    alt={forma.nome}
                    width={100}
                    height={100}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className='bg-primary md:col-span-2' />
        <div className='md:col-span-2'>
          <H2 className='!text-lg'>Descricao:</H2>
          <MarkdownToHtml markdown={produto.descricao} />
          <p className='font-bold pt-4 text-primary'>
            Loja do VRF: Transformando desafios térmicos em soluções de
            precisão!
          </p>
        </div>
        <Separator className='bg-primary md:col-span-2' />
        <div className='md:col-span-2 space-y-6'>
          <H3 className='block !text-2xl !text-primary'>
            Produtos Semelhantes...
          </H3>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: true,
            }}
          >
            <CarouselContent>
              {shuffleArray(getProdutos.produtos)
                .filter(
                  (prod) =>
                    prod.categoria === produto.categoria &&
                    prod.sku !== produto.sku
                )
                .slice(0, itemsPerCategory)
                .map((produto, i) => (
                  <CarouselItem
                    className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                    key={i}
                  >
                    <CardProduto produto={produto} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='-left-5 md:-left-12 text-primary' />
            <CarouselNext className='-right-5 md:-right-12 text-primary' />
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Produtos;
