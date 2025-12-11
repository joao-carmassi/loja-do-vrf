'use client';

import { Button } from '@/components/ui/button';
import storeCarrinho from '@/store/carrinho';
import Link from 'next/link';

function BotoesCarrinho(): React.ReactNode {
  const { carrinho, geraListaDeOrcamento } = storeCarrinho();

  if (carrinho.length === 0) return null;

  return (
    <div className='flex flex-col-reverse md:flex-row justify-end gap-3'>
      <Button
        asChild
        className='w-full md:flex-none md:w-fit border border-green-600 text-green-600 hover:bg-green-50 hover:text-green-600'
        variant={'outline'}
        size={'lg'}
      >
        <Link href='/'>Ver mais produtos</Link>
      </Button>
      <Button
        onClick={() => {
          const lista = geraListaDeOrcamento();
          const url = `https://wa.me/5512996233750?text=${lista}`;
          window.open(url, '_blank');
        }}
        className='w-full md:flex-none md:w-fit bg-green-600 hover:bg-green-700'
        size={'lg'}
      >
        Iniciar consulta
      </Button>
    </div>
  );
}

export default BotoesCarrinho;
