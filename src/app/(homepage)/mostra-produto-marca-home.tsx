import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H1 } from '@/components/ui/h1';
import { H2 } from '@/components/ui/h2';

const MostraProdutoMarcaHome = () => {
  return (
    <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-12'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className='md:bg-secondary p-3 md:p-6 md:px-15 rounded-md space-y-3 md:space-y-6'
        >
          <H2 className='mx-auto w-fit'>Marca</H2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, i) => (
                <CarouselItem
                  className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                  key={i}
                >
                  <Card>
                    <CardHeader>
                      <div className='w-full aspect-square bg-muted grid place-items-center rounded-md border-secondary'>
                        <H1>{i + 1}</H1>
                      </div>
                    </CardHeader>
                    <CardContent className=''>
                      <p>Marca</p>
                      <div>
                        <H2 className='!text-base'>Produto {i + 1}</H2>
                        <p>Card Content</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='-left-5 md:-left-12' />
            <CarouselNext className='-right-5 md:-right-12' />
          </Carousel>
        </div>
      ))}
    </section>
  );
};

export default MostraProdutoMarcaHome;
