'use client';

import { CarouselProdutos } from './carousel-produtos';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import getProdutos from '@/utils/get-produtos';
import generateUrl from '@/utils/generate-url';
import { notFound, useParams } from 'next/navigation';
import MarkdownToHtml from '@/components/ui/markdownToHtml';
import Link from 'next/link';
import BotaoAdicionaCarrinho from './botao-adiciona-carrinho';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
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
import itensPorCarrosel from '@/utils/items-per-category';
import { useMemo, useState, useEffect } from 'react';

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

const Produtos = (): React.ReactNode => {
  const params = useParams();
  const slug = params.slug as string;

  const produto = useMemo(() => {
    return getProdutos.produtos.find(
      (prod) => generateUrl(`${prod.nome}-${prod.sku}`) === slug,
    );
  }, [slug]);

  if (!produto) notFound();

  const [produtosRelacionados, setProdutosRelacionados] = useState(() => {
    return getProdutos.produtos
      .filter(
        (prod) =>
          prod.categoria === produto.categoria && prod.sku !== produto.sku,
      )
      .slice(0, itensPorCarrosel);
  });

  useEffect(() => {
    const produtosFiltrados = getProdutos.produtos.filter(
      (prod) =>
        prod.categoria === produto.categoria && prod.sku !== produto.sku,
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProdutosRelacionados(
      shuffleArray(produtosFiltrados).slice(0, itensPorCarrosel),
    );
  }, [produto]);

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
        new Date().setFullYear(new Date().getFullYear() + 1),
      )
        .toISOString()
        .split('T')[0],
      seller: {
        '@type': 'Organization',
        name: process.env.NEXT_PUBLIC_SITE_NAME || '',
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
        item: process.env.NEXT_PUBLIC_SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: produto.categoria,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/produtos/${generateUrl(
          produto.categoria,
        )}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: produto.nome,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/produto/${slug}`,
      },
    ],
  };

  return (
    <main
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
      }}
    >
      <style>
        {`
          img {
            pointer-events: none;
            -webkit-user-drag: none;
          }
          * {
            user-select: none !important;
          }
        `}
      </style>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className='mx-auto p-6 md:p-12 max-w-[95rem] flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12'>
        <CarouselProdutos produto={produto} />
        <div className='space-y-4 lg:space-y-6'>
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
          <h1 className='scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide'>
            {produto.nome}
          </h1>
          <div className='flex flex-col-reverse md:flex-row gap-4'>
            <div className='space-y-1'>
              <p className='text-xs border border-secondary rounded-full w-fit py-1.5 px-3'>
                Códigos compatíveis: {produto.codigos.join(', ')}
              </p>
              <p className='text-sm text-muted-foreground ml-3.5'>
                SKU: {produto.sku}
              </p>
            </div>
          </div>
          <p className='text-sm'>
            PARCELAMENTO EM ATÉ <span className='font-bold'>12 VEZES</span>
          </p>
          <p className='text-sm'>
            <span className='font-bold'>7%</span> DE DESCONTO NO PIX
          </p>
          <BotaoAdicionaCarrinho produto={produto} />
          <p className='text-sm'>
            *Necessário confirmação de disponibilidade no estoque
          </p>
          <div className='space-y-3'>
            <p className='text-sm font-bold'>Formas de envio:</p>
            <ul className='flex flex-wrap gap-4'>
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
        <Separator className='md:col-span-2 pb-1 bg-border' />
        <div className='md:col-span-2'>
          <h2 className='scroll-m-20 text-xl tracking-wide text-foreground font-bold'>
            Descrição:
          </h2>
          <MarkdownToHtml markdown={produto.descricao} />
          <p className='font-bold pt-4'>
            {process.env.NEXT_PUBLIC_SITE_NAME || ''}: Transformando desafios
            térmicos em soluções de precisão!
          </p>
        </div>
        <Separator className='md:col-span-2 pb-1 bg-border' />
        <div className='md:col-span-2 space-y-6'>
          <h3 className='scroll-m-20 md:text-xl lg:text-2xl font-semibold tracking-tight block text-2xl text-primary'>
            Confira mais produtos:
          </h3>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              skipSnaps: true,
            }}
          >
            <CarouselContent>
              {produtosRelacionados.map((produto) => (
                <CarouselItem
                  className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                  key={produto.sku}
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
