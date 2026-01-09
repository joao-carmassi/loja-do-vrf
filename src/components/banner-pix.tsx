'use client';

import { CreditCard, Settings } from 'lucide-react';
import PixSvg from './svgs/pix-svg';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function BannerPix(): React.ReactNode {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const scrolled = () => window.scrollY > 0;
    const onScroll = () => {
      if (scrolled()) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={cn(
        'bg-black text-white p-1 hidden lg:block',
        hidden ? 'lg:hidden' : ''
      )}
    >
      <p className='text-center flex items-center justify-center text-[0.8rem] gap-1 font-semibold'>
        <Settings size={15} /> TODA LINHA DE PARTES E PEÇAS PARA VRF |{' '}
        <CreditCard size={15} /> PARCELAMENTO EM ATÉ 12 VEZES | <PixSvg /> 7% DE
        DESCONTO NO PIX
      </p>
    </div>
  );
}

export default BannerPix;
