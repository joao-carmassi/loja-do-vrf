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
      <div className='bg-accent md:rounded-lg p-3 md:p-6 space-y-3 md:space-y-6'>
        <H2 className='w-fit mx-auto'>Escolha pela marca</H2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {marcas.map((marca) => (
              <CarouselItem
                className='basis-1/2 md:basis-1/3 lg:basis-1/4 grid place-items-center'
                key={marca}
              >
                <Link className='p-3' href={`/marca/${generateUrl(marca)}`}>
                  <div className='bg-card aspect-square w-40 md:w-52 lg:w-60 rounded-full flex items-center justify-center shadow hover:scale-105 duration-300'>
                    <Image
                      width={160}
                      height={47}
                      src={`/imgs/marcas/${marca.toUpperCase()}.png`}
                      alt={`Marca ${marca}`}
                      className='w-32 md:w-40 h-fit'
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-0 text-primary' />
          <CarouselNext className='right-0 text-primary' />
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselMarcasHome;
