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
        <CarouselContent>
          {[
            ...Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                className='w-full h-80 md:h-[26rem] bg-muted flex items-center justify-center'
                key={index}
              >
                <Image
                  width={1280}
                  height={416}
                  src='https://picsum.photos/200'
                  alt=''
                  className='w-full h-full object-cover object-center'
                />
              </CarouselItem>
            )),
          ]}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </section>
  );
};

export default CarouselHome;
