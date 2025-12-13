'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { Badge } from './ui/badge';
import storeCarrinho from '@/store/carrinho';

function BotaoCarrinho(): React.ReactNode {
  const { carrinho, checaCarrinho } = storeCarrinho();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    checaCarrinho();
  }, [checaCarrinho]);

  return (
    <Button
      asChild
      size='icon'
      className='rounded-full relative border-2 border-card'
    >
      <Link href='/carrinho'>
        <Badge
          variant={'default'}
          className='h-5 min-w-5 rounded-full px-1 absolute -top-1.5 -right-1.5 bg-card text-foreground'
        >
          {mounted ? carrinho.length : 0}
        </Badge>
        <ShoppingCart />
      </Link>
    </Button>
  );
}

export default BotaoCarrinho;
