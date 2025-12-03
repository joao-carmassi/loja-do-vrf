'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { H3 } from '@/components/ui/h3';
import { Cog, Github, PencilRuler, Truck } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const InfosHome = () => {
  return (
    <section className='p-6 border-b border-border'>
      <div className='max-w-[95rem] mx-auto '>
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 pb-0'>
          <div className='lg:col-span-1 flex items-center gap-3'>
            <PencilRuler className='text-primary' size={35} />
            <div>
              <H3 className='text-primary !text-base'>
                ESPECIALISTAS EM CHILLERS
              </H3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Truck className='text-primary' size={35} />
            <div>
              <H3 className='text-primary !text-base'>
                FRETE GRÁTIS PARA TODO BRASIL
              </H3>
            </div>
          </div>
          <div className='md:col-span-2 lg:col-span-1 flex items-center gap-3'>
            <Cog className='text-primary' size={35} />
            <div>
              <H3 className='text-primary !text-base'>
                ÚNICO E-COMMERCE DE PEÇAS DE COMPRESSOR CENTRIFUGO
              </H3>
            </div>
          </div>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className='md:hidden'
        >
          <CarouselContent>
            <CarouselItem className='grid place-items-center'>
              <div className='md:col-span-2 lg:col-span-1 flex items-center gap-3'>
                <PencilRuler className='text-primary' size={35} />
                <div>
                  <H3 className='text-primary !text-base'>
                    ESPECIALISTAS EM CHILLERS
                  </H3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <div className='flex items-center gap-3'>
                <Truck className='text-primary' size={35} />
                <div>
                  <H3 className='text-primary !text-base'>
                    FRETE GRÁTIS PARA TODO BRASIL
                  </H3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <div className='md:col-span-2 lg:col-span-1 flex items-center gap-3'>
                <Cog className='text-primary' size={35} />
                <div>
                  <H3 className='text-primary !text-base'>
                    ÚNICO E-COMMERCE DE PEÇAS DE <br />
                    COMPRESSOR CENTRIFUGO
                  </H3>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default InfosHome;
