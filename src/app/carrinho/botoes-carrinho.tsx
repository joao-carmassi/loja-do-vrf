'use client';

import { Button } from '@/components/ui/button';
import storeCarrinho from '@/store/carrinho';
import Link from 'next/link';

function BotoesCarrinho(): React.ReactNode {
  const { carrinho } = storeCarrinho();

  if (carrinho.length === 0) return null;

  return (
    <div className='flex justify-end gap-3'>
      <Button
        asChild
        className='flex-1 w-full md:flex-none md:w-fit'
        variant={'outline'}
        size={'lg'}
      >
        <Link href='/'>Ver mais produtos</Link>
      </Button>
      <Button
        onClick={() => {
          alert('Iniciando consulta');
        }}
        className='flex-1 w-full md:flex-none md:w-fit'
        size={'lg'}
      >
        Iniciar consulta
      </Button>
    </div>
  );
}

export default BotoesCarrinho;
