import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from '@/components/bannerCarousel';
import { H1 } from '@/components/ui/h1';

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
                <H1>{index + 1}</H1>
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
