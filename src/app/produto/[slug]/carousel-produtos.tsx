'use client';

import { ReactNode, useState } from 'react';
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

  return (
    <div
      className={cn(
        'relative space-y-3 lg:space-y-0 lg:flex lg:flex-row-reverse lg:gap-3 ',
        { className },
      )}
    >
      {/* carrosel */}
      <Carousel
        index={index}
        onIndexChange={setIndex}
        className='flex-1 shadow-lg inset-shadow-2xs rounded-4xl border border-secondary/5 aspect-square'
      >
        <CarouselContent className='relative'>
          {ITEMS.map((item, i) => (
            <CarouselItem key={item}>
              {i === 0 ? (
                <Image
                  width={500}
                  height={500}
                  priority
                  loading='eager'
                  src={`/imgs/produtos/${produto.id}.png`}
                  alt={produto.nome}
                  className='w-full aspect-square object-contain object-center border-zinc-200 rounded-4xl bg-card dark:border-zinc-800'
                />
              ) : (
                <Image
                  width={500}
                  height={500}
                  src={`/imgs/produtos/${produto.id}.png`}
                  alt={produto.nome}
                  loading='eager'
                  className='w-full aspect-square object-contain object-center border-zinc-200 rounded-4xl bg-card dark:border-zinc-800'
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* miniaturas */}
      {/* <div
        className={cn(
          'flex lg:flex-col flex-row w-full justify-start space-x-3 lg:w-26 lg:space-y-3 lg:space-x-0',
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
