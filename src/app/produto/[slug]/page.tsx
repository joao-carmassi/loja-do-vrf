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
import getProdutos from '@/utils/getProdutos';
import generateUrl from '@/utils/generateUrl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MarkdownToHtml from '@/components/ui/markdownToHtml';
import CardProduto from '@/components/cardProduto';
import Link from 'next/link';
import BotaoAdicionaCarrinho from './botao-adiciona-carrinho';
import Image from 'next/image';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const formasDeEnvio = [
  {
    nome: 'Azul Cargo Express',
    img: '/imgs/formas-de-envio/cargo.png',
  },
  {
    nome: 'Correios',
    img: '/imgs/formas-de-envio/correios.png',
  },
  {
    nome: 'Latam Cargo',
    img: '/imgs/formas-de-envio/latam.png',
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const produto = getProdutos.produtos.find(
    (prod) => generateUrl(`${prod.nome}-${prod.sku}`) === slug
  );
  if (!produto) return {};
  const title = `${produto.nome} | ${produto.marca} | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`;
  const description =
    produto.descricao
      ?.replace(/[#*\-]/g, '')
      .split('\n')[0]
      ?.trim() ||
    `Compre ${produto.nome} da marca ${produto.marca} me ${process.env.NEXT_PUBLIC_WEBSITE_NAME}.`;
  const images: string[] = [];
  return {
    title,
    description,
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

  return (
    <main>
      <section className='mx-auto p-6 md:p-12 max-w-[95rem] flex flex-col md:grid md:grid-cols-[1fr_33%] gap-6 md:gap-12'>
        <CarouselProdutos />
        <div className='space-y-3'>
          <Link href={`/marca/${generateUrl(produto.marca)}`}>
            <p>{produto.marca}</p>
          </Link>
          <H1>{produto.nome}</H1>
          <p className='text-primary text-sm border border-primary rounded-md w-fit p-1.5'>
            Códigos compatíveis: {produto.codigos.join(', ')}
          </p>
          <p className='text-sm text-muted-foreground'>sku: {produto.sku}</p>
          <p className='text-green-600 text-sm font-bold'>
            PARCELAMENTO EM ATÉ 12 VEZES
          </p>
          <p className='text-green-600 text-sm font-bold'>
            7% DE DESCONTO NO PIX
          </p>
          <BotaoAdicionaCarrinho produto={produto} />
          <p className='text-green-600 text-sm font-bold'>4 - 14 DIAS ÚTEIS</p>
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
        <div className='md:col-span-2 space-y-3'>
          <H2>Descricao:</H2>
          <MarkdownToHtml markdown={produto.descricao} />
        </div>
        <Carousel
          className='md:col-span-2'
          opts={{
            align: 'start',
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {getProdutos.produtos
              .filter((prod) => prod.categoria === produto.categoria)
              .map((produto, i) => (
                <CarouselItem
                  className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                  key={i}
                >
                  <CardProduto produto={produto} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className='-left-5 md:-left-12' />
          <CarouselNext className='-right-5 md:-right-12' />
        </Carousel>
      </section>
    </main>
  );
};

export default Produtos;
