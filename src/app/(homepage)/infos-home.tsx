'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { H3 } from '@/components/ui/h3';
import { Github } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const InfosHome = () => {
  return (
    <section className='max-w-[95rem] mx-auto'>
      <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 p-6 pb-0'>
        <div className='flex items-center gap-3'>
          <Github className='text-primary' size={35} />
          <div>
            <H3 className='text-primary !text-base'>ESPECIALISTAS TÉCNICOS</H3>
            <p>lorem</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Github className='text-primary' size={35} />
          <div>
            <H3 className='text-primary !text-base'>ESPECIALISTAS TÉCNICOS</H3>
            <p>lorem</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Github className='text-primary' size={35} />
          <div>
            <H3 className='text-primary !text-base'>ESPECIALISTAS TÉCNICOS</H3>
            <p>lorem</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Github className='text-primary' size={35} />
          <div>
            <H3 className='text-primary !text-base'>ESPECIALISTAS TÉCNICOS</H3>
            <p>lorem</p>
          </div>
        </div>
      </div>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className='md:hidden py-6'
      >
        <CarouselContent>
          <CarouselItem className='grid place-items-center'>
            <div className='flex items-center gap-3'>
              <Github className='text-primary' size={35} />
              <div>
                <H3 className='text-primary !text-base'>
                  ESPECIALISTAS TÉCNICOS
                </H3>
                <p>lorem</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='grid place-items-center'>
            <div className='flex items-center gap-3'>
              <Github className='text-primary' size={35} />
              <div>
                <H3 className='text-primary !text-base'>
                  ESPECIALISTAS TÉCNICOS
                </H3>
                <p>lorem</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='grid place-items-center'>
            <div className='flex items-center gap-3'>
              <Github className='text-primary' size={35} />
              <div>
                <H3 className='text-primary !text-base'>
                  ESPECIALISTAS TÉCNICOS
                </H3>
                <p>lorem</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className='grid place-items-center'>
            <div className='flex items-center gap-3'>
              <Github className='text-primary' size={35} />
              <div>
                <H3 className='text-primary !text-base'>
                  ESPECIALISTAS TÉCNICOS
                </H3>
                <p>lorem</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default InfosHome;
