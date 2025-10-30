'use client';

import { Button } from '@/components/ui/button';
import storeCarrinho from '@/store/carrinho';
import { TProduto } from '@/utils/getProdutos';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  produto: TProduto;
}

function BotaoAdicionaCarrinho({ produto }: Props): React.ReactNode {
  const { adicionarAoCarrinho } = storeCarrinho();
  const router = useRouter();

  return (
    <Button
      effect={'expandIcon'}
      iconPlacement='right'
      icon={ShoppingCart}
      className='w-full'
      onClick={() => {
        adicionarAoCarrinho(produto);
        router.push('/carrinho');
      }}
    >
      Adicionar ao carrinho
    </Button>
  );
}

export default BotaoAdicionaCarrinho;
