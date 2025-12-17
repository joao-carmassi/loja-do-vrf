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
import { H1 } from '@/components/ui/h1';

import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Loja do VRF | Carrinho de Compras`,
    description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na Loja do VRF. Finalize sua compra com segurança e agilidade.`,
    alternates: {
      canonical: '/carrinho',
    },
    openGraph: {
      title: `Loja do VRF | Carrinho de Compras`,
      description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na Loja do VRF. Finalize sua compra com segurança e agilidade.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Loja do VRF | Carrinho de Compras`,
      description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na Loja do VRF. Finalize sua compra com segurança e agilidade.`,
    },
  };
};

const Carrinho = () => {
  return (
    <main>
      <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-6'>
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
        <H1 className='text-center'>Carrinho de compras</H1>
        <TableCarrinho />
        <BotoesCarrinho />
      </section>
    </main>
  );
};

export default Carrinho;
