import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H2 } from '@/components/ui/h2';
import generateUrl from '@/utils/generateUrl';
import getProdutos from '@/utils/getProdutos';
import Image from 'next/image';
import Link from 'next/link';

const CarouselMarcasHome = () => {
  const { marcas } = getProdutos;

  return (
    <section className='md:px-12 mx-auto max-w-[95rem]'>
      <div className='bg-blue-100 md:rounded-lg p-3 md:p-6 space-y-3 md:space-y-6'>
        <H2 className='w-fit mx-auto'>Escolha pela marca</H2>
        <Carousel
          className=''
          opts={{
            align: 'start',
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {marcas.map((marca) => (
              <CarouselItem
                className='basis-1/2 md:basis-1/3 lg:basis-1/4 grid place-items-center'
                key={marca}
              >
                <div className='bg-muted aspect-square w-40 md:w-52 lg:w-60 rounded-full grid place-items-center'>
                  <Link
                    className='w-full h-full'
                    href={`/marca/${generateUrl(marca)}`}
                  >
                    <Image
                      width={240}
                      height={240}
                      src='https://picsum.photos/200'
                      alt=''
                      className='w-full h-full object-cover object-center rounded-full'
                    />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-0' />
          <CarouselNext className='right-0' />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselMarcasHome;
