'use client';
import { ReactNode, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './base-carousel-fotos-produto';
import { cn } from '@/lib/utils';

const ITEMS = new Array(4).fill(null).map((_, index) => index + 1);

interface Props {
  className?: ReactNode;
}

export function CarouselProdutos({ className }: Props) {
  const [index, setIndex] = useState(0);
  const [isPc, setIsPc] = useState(false);

  const thumbsPosition = isPc ? 'left' : 'bottom';

  useEffect(() => {
    const verificaLargura = () => {
      if (window.innerWidth >= 1024) {
        setIsPc(true);
      } else {
        setIsPc(false);
      }
    };

    verificaLargura();
    window.addEventListener('resize', verificaLargura);
    return () => window.removeEventListener('resize', verificaLargura);
  }, []);

  return (
    <div
      className={cn(
        'relative w-full',
        thumbsPosition === 'left' ? 'flex flex-row-reverse gap-3' : 'space-y-3',
        { className }
      )}
    >
      {/* carrosel */}
      <Carousel index={index} onIndexChange={setIndex} className='flex-1'>
        <CarouselContent className='relative'>
          {ITEMS.map((item) => (
            <CarouselItem key={item}>
              <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                {item}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* miniaturas */}
      <div
        className={cn(
          'flex',
          thumbsPosition === 'left'
            ? 'flex-col lg:w-26 space-y-3'
            : 'flex-row w-full justify-center space-x-3'
        )}
      >
        {ITEMS.map((item) => (
          <button
            key={item}
            type='button'
            aria-label={`Go to slide ${item}`}
            onClick={() => setIndex(item - 1)}
            className='aspect-square w-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center'
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
