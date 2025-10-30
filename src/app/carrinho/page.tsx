import BotoesCarrinho from './botoes-carrinho';
import TableCarrinho from './table-carrinho';
import { H1 } from '@/components/ui/h1';

import type { Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Carrinho de Compras | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
    description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Finalize sua compra com segurança e agilidade.`,
    openGraph: {
      title: `Carrinho de Compras | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
      description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Finalize sua compra com segurança e agilidade.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Carrinho de Compras | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
      description: `Veja e gerencie os produtos adicionados ao seu carrinho de compras na ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Finalize sua compra com segurança e agilidade.`,
    },
  };
};

const Carrinho = () => {
  return (
    <main>
      <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-6'>
        <H1 className='text-center'>Carrinho de compras</H1>
        <TableCarrinho />
        <BotoesCarrinho />
      </section>
    </main>
  );
};

export default Carrinho;
