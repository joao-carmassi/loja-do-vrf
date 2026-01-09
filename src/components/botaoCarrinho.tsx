'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import storeCarrinho from '@/store/carrinho';
import ShoppingCartSvg from './svgs/shoping-cart-svg';

function BotaoCarrinho(): React.ReactNode {
  const { carrinho, checaCarrinho } = storeCarrinho();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    checaCarrinho();
  }, [checaCarrinho]);

  return (
    <Link className='relative' href='/carrinho'>
      <p className='absolute -top-1.5 -right-3 text-card text-sm'>
        {mounted ? carrinho.length : 0}
      </p>
      <ShoppingCartSvg size={35} className='text-secondary' />
    </Link>
  );
}

export default BotaoCarrinho;
