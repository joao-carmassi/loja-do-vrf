'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import generateUrl from '@/utils/generate-url';
import getProdutos from '@/utils/get-produtos';
import Image from 'next/image';
import Link from 'next/link';
import AutoScroll from 'embla-carousel-auto-scroll';

const MarcasEFotos = () => {
  const { marcas } = getProdutos;

  return (
    <section className='md:space-y-12 md:pb-12 lg:pb-24'>
      <div>
        <Link
          target='_blank'
          href='https://wa.me/5511969189244?text=Ol%C3%A1!%0AVim%20atrav%C3%A9s%20do%20site%20da%20loja%20do%20VRF%20e%20preciso%20de%20pe%C3%A7as.'
          aria-label='Não encontrou oque procurava? Clique e fale com um especialista'
        >
          <Image
            width={1860}
            height={490}
            src='/imgs/banners/contato.png'
            alt='Não encontrou a peça que procura? Fale conosco!'
            className='w-full object-cover object-center hidden md:block'
          />
          <Image
            width={750}
            height={500}
            src='/imgs/banners/contato_mobile.png'
            alt=''
            className='w-full object-cover object-center md:hidden'
          />
        </Link>
      </div>
      <div className='space-y-3 md:space-y-6 py-12 md:py-6 lg:py-12'>
        <h2 className='scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide w-fit mx-auto'>
          Está buscando as <br /> peças pela marca?
        </h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            skipSnaps: true,
          }}
          plugins={[
            AutoScroll({ stopOnMouseEnter: true, stopOnInteraction: false }),
          ]}
        >
          <CarouselContent>
            {marcas.map((marca) => (
              <CarouselItem
                className='basis-1/3 md:basis-1/4 lg:basis-1/7 grid place-items-center'
                key={marca}
              >
                <Link
                  className='p-1.5 md:p-3 w-full'
                  href={`/marca/${generateUrl(marca)}`}
                >
                  <div className='w-full aspect-video grid place-items-center hover:scale-105 duration-300 bg-gradient-to-t from-secondary/25 to-secondary/10 border border-secondary/50 rounded-sm px-3 md:p-6'>
                    <Image
                      width={160}
                      height={47}
                      src={`/imgs/marcas/${marca.toUpperCase()}.png`}
                      alt={`Marca ${marca}`}
                      className='w-full h-fit'
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className='mx-auto max-w-[95rem] md:px-12'>
        <Link
          aria-label='Siga-nos nas redes sociais!'
          target='_blank'
          href='https://www.instagram.com/lojadovrf/'
        >
          <Image
            width={1420}
            height={370}
            src='/imgs/banners/rede_social.png'
            alt='Siga-nos nas redes sociais!'
            className='w-full object-cover object-center rounded-4xl hidden md:block'
          />
          <Image
            width={750}
            height={500}
            src='/imgs/banners/rede_social_mobile.png'
            alt=''
            className='w-full object-cover object-center md:hidden'
          />
        </Link>
      </div>
    </section>
  );
};

export default MarcasEFotos;
