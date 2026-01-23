import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import BotoesCarrinho from './botoes-carrinho';
import TableCarrinho from './table-carrinho';

import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `${process.env.NEXT_PUBLIC_SITE_NAME || ''} | Carrinho de Compras`,
    description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na ${process.env.NEXT_PUBLIC_SITE_NAME || ''}. Finalize sua compra com segurança e agilidade.`,
    alternates: {
      canonical: '/carrinho',
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: `${process.env.NEXT_PUBLIC_SITE_NAME || ''} | Carrinho de Compras`,
      description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na ${process.env.NEXT_PUBLIC_SITE_NAME || ''}. Finalize sua compra com segurança e agilidade.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${process.env.NEXT_PUBLIC_SITE_NAME || ''} | Carrinho de Compras`,
      description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na ${process.env.NEXT_PUBLIC_SITE_NAME || ''}. Finalize sua compra com segurança e agilidade.`,
    },
  };
};

const Carrinho = () => {
  return (
    <main>
      <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-6 min-h-container-mobile lg:min-h-container'>
        <Breadcrumb className='col-span-2'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>carrinho</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className='scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide text-center'>
          Carrinho de compras
        </h1>
        <TableCarrinho />
        <BotoesCarrinho />
      </section>
    </main>
  );
};

export default Carrinho;
