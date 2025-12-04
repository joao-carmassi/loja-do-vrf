'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const CarouselHome = () => {
  return (
    <section>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className='w-full h-fit bg-muted items-center justify-center'>
            <Image
              width={1800}
              height={500}
              src='/imgs/banners/WEB-03.png'
              alt=''
              className='w-full h-full object-cover object-center hidden md:block'
            />
            <Image
              width={750}
              height={500}
              src='/imgs/banners/MOBILE-03.png'
              alt=''
              className='w-full h-full object-cover object-center md:hidden'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-fit bg-muted items-center justify-center'>
            <Image
              width={1800}
              height={500}
              src='/imgs/banners/WEB-02.png'
              alt=''
              className='w-full h-full object-cover object-center hidden md:block'
            />
            <Image
              width={750}
              height={500}
              src='/imgs/banners/MOBILE-02.png'
              alt=''
              className='w-full h-full object-cover object-center md:hidden'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-fit bg-muted items-center justify-center'>
            <Image
              width={1800}
              height={500}
              src='/imgs/banners/WEB-04.png'
              alt=''
              className='w-full h-full object-cover object-center hidden md:block'
            />
            <Image
              width={750}
              height={500}
              src='/imgs/banners/MOBILE-04.png'
              alt=''
              className='w-full h-full object-cover object-center md:hidden'
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='left-6' />
        <CarouselNext className='right-6' />
      </Carousel>
    </section>
  );
};

export default CarouselHome;
