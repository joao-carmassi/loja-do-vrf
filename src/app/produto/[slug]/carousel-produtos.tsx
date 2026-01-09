'use client';
import { ReactNode, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './base-carousel-fotos-produto';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IProduto } from '@/utils/get-produtos';

const ITEMS = new Array(1).fill(null).map((_, index) => index + 1);

interface Props {
  className?: ReactNode;
  produto: IProduto;
}

export function CarouselProdutos({ className, produto }: Props) {
  const [index, setIndex] = useState(0);
  const [isPc, setIsPc] = useState(true);

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
      <Carousel
        index={index}
        onIndexChange={setIndex}
        className='flex-1 shadow-lg inset-shadow-2xs rounded-4xl border border-secondary/5'
      >
        <CarouselContent className='relative'>
          {ITEMS.map((item) => (
            <CarouselItem key={item}>
              <Image
                width={750}
                height={750}
                src={`/imgs/produtos/${produto.id}.png`}
                alt={produto.nome}
                className='w-full aspect-square object-contain object-center border-zinc-200 rounded-4xl bg-card dark:border-zinc-800'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* miniaturas */}
      {/* <div
        className={cn(
          'flex',
          thumbsPosition === 'left'
            ? 'flex-col lg:w-26 space-y-3'
            : 'flex-row w-full justify-start space-x-3'
        )}
      >
        {ITEMS.map((item) => (
          <button
            key={item}
            type='button'
            aria-label={`Go to slide ${item}`}
            onClick={() => setIndex(item - 1)}
            className='aspect-square w-full border border-primary/50 rounded-md flex items-center justify-center cursor-pointer max-h-28 max-w-28'
          >
            <Image
              width={100}
              height={100}
              src={`/imgs/produtos/${produto.id}.png`}
              alt={produto.nome}
              className='w-full h-full object-contain object-center rounded-md bg-card'
            />
          </button>
        ))}
      </div> */}
    </div>
  );
}
