'use client';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';
import storeCarrinho from '@/store/carrinho';
import { IProduto } from '@/utils/get-produtos';
import { ShoppingCart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  produto: IProduto;
}

function BotaoAdicionaCarrinho({ produto }: Props): React.ReactNode {
  const { adicionarAoCarrinho } = storeCarrinho();
  const [inputValue, setInputValue] = useState<number>(1);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='flex gap-3'>
      <ButtonGroup className='max-w-36 hidden md:flex'>
        <Button
          onClick={() => {
            if (inputValue > 1) setInputValue((prev) => prev - 1);
          }}
          className='border-primary rounded-full !border-r-none'
          variant={'outline'}
        >
          -
        </Button>
        <Input
          className='border-primary h-full text-center !focus-visible:ring-none !focus-visible:outline-none'
          value={inputValue}
          readOnly
          key={pathname}
        />
        <Button
          onClick={() => {
            setInputValue((prev) => prev + 1);
          }}
          className='border-primary rounded-full'
          variant={'outline'}
        >
          +
        </Button>
      </ButtonGroup>
      <Button
        variant={'success'}
        effect={'expandIcon'}
        iconPlacement='right'
        icon={ShoppingCart}
        className='w-full font-semibold text-lg'
        onClick={() => {
          adicionarAoCarrinho(produto, inputValue);
          router.push('/carrinho');
        }}
      >
        CONSULTAR ORÇAMENTO
      </Button>
    </div>
  );
}

export default BotaoAdicionaCarrinho;
