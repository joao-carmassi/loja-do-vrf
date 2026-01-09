'use client';

import { Button } from '@/components/ui/button';
import storeCarrinho from '@/store/carrinho';
import { IProduto } from '@/utils/get-produtos';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  produto: IProduto;
}

function BotaoAdicionaCarrinho({ produto }: Props): React.ReactNode {
  const { adicionarAoCarrinho } = storeCarrinho();
  const router = useRouter();

  return (
    <Button
      variant={'success'}
      effect={'expandIcon'}
      iconPlacement='right'
      icon={ShoppingCart}
      className='w-full font-semibold text-lg'
      onClick={() => {
        adicionarAoCarrinho(produto);
        router.push('/carrinho');
      }}
    >
      Comprar
    </Button>
  );
}

export default BotaoAdicionaCarrinho;
