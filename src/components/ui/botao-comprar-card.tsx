'use client';

import { IProduto } from '@/utils/get-produtos';
import { Button } from './button';
import storeCarrinho from '@/store/carrinho';
import { toast } from 'sonner';

interface Props {
  produto: IProduto;
  children?: React.ReactNode;
}

function BotaoComprarCarrinho({ produto, children }: Props): React.ReactNode {
  const { adicionarAoCarrinho } = storeCarrinho();
  const handleClick = () => {
    adicionarAoCarrinho(produto);
    toast.success('Produto adicionado ao carrinho!');
  };

  return (
    <Button
      onClick={handleClick}
      className='w-fit absolute top-1/2 left-1/2 -translate-1/2 hidden group-hover:block z-40 hover:bg-secondary'
    >
      {children || 'Comprar'}
    </Button>
  );
}

export default BotaoComprarCarrinho;
