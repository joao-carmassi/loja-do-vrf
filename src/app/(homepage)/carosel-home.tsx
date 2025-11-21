import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from '@/components/bannerCarousel';
import Image from 'next/image';

const CarouselHome = () => {
  return (
    <section>
      <Carousel autoPlay autoPlayInterval={7500}>
        <CarouselContent className='hidden md:flex'>
          <CarouselItem className='w-full h-fit bg-muted items-center justify-center'>
            <Image
              width={1800}
              height={500}
              src='/imgs/banners/WEB-02.png'
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-fit bg-muted items-center justify-center'>
            <Image
              width={1800}
              height={500}
              src='/imgs/banners/WEB-03.png'
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-fit bg-muted items-center justify-center'>
            <Image
              width={1800}
              height={500}
              src='/imgs/banners/WEB-04.png'
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselContent className='md:hidden'>
          <CarouselItem className='w-full h-fit bg-muted flex items-center justify-center'>
            <Image
              width={750}
              height={500}
              src='/imgs/banners/MOBILE-02.png'
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-fit bg-muted flex items-center justify-center'>
            <Image
              width={750}
              height={500}
              src='/imgs/banners/MOBILE-03.png'
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
          <CarouselItem className='w-full h-fit bg-muted flex items-center justify-center'>
            <Image
              width={750}
              height={500}
              src='/imgs/banners/MOBILE-04.png'
              alt=''
              className='w-full h-full object-cover object-center'
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </section>
  );
};

export default CarouselHome;
