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

const banners = [
  {
    srcWeb: '/imgs/banners/banner_carousel1.png',
    srcMobile: '/imgs/banners/banner_carousel_mobile1.png',
    alt: 'Linha completa de peças VRF em um único lugar',
  },
  {
    srcWeb: '/imgs/banners/banner_carousel2.png',
    srcMobile: '/imgs/banners/banner_carousel_mobile2.png',
    alt: 'Placas e módulos para VRF',
  },
  {
    srcWeb: '/imgs/banners/banner_carousel3.png',
    srcMobile: '/imgs/banners/banner_carousel_mobile3.png',
    alt: 'Toda linha de compressores novos e originais com 3 meses de garantia',
  },
];

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
          {banners.map((banner, index) => (
            <CarouselItem key={index}>
              <div className='w-full'>
                <Image
                  src={banner.srcWeb}
                  alt={banner.alt}
                  height={400}
                  width={1800}
                  className='hidden object-cover sm:block w-full'
                />
                <Image
                  src={banner.srcMobile}
                  alt={banner.alt}
                  height={260}
                  width={390}
                  className='block object-cover sm:hidden w-full'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-6' />
        <CarouselNext className='right-6' />
      </Carousel>
    </section>
  );
};

export default CarouselHome;
