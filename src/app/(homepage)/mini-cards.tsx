'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    src: '/imgs/banners/mini_banner1.png',
    alt: 'Equipamentos de diagnóstico',
    link: '/produtos/diagnostico/',
    target: '_self',
  },
  {
    src: '/imgs/banners/mini_banner2.png',
    alt: 'Especialistas técnicos',
    link: 'https://wa.me/5511969189244?text=Ol%C3%A1!%0AVim%20atrav%C3%A9s%20do%20site%20da%20loja%20do%20VRF%20e%20preciso%20de%20pe%C3%A7as.',
    target: '_blank',
  },
  {
    src: '/imgs/banners/mini_banner3.png',
    alt: 'Manuais técnicos',
    link: '/manuais',
    target: '_self',
  },
];

const MiniCards = () => {
  return (
    <section className='md:p-12 max-w-[95rem] mx-auto'>
      <div className='md:gap-6 hidden md:flex'>
        {cards.map((card, index) => (
          <Link
            className='flex-1'
            key={index}
            href={card.link}
            target={card.target}
            rel='noopener noreferrer'
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={458}
              height={229}
              className='w-full h-auto hover:scale-105 transition-transform duration-300'
              priority
            />
          </Link>
        ))}
      </div>
      <div className='md:hidden space-y-1 py-6'>
        <h2 className='text-lg font-semibold px-6'>Aqui temos:</h2>
        <Carousel
          opts={{
            loop: true,
            skipSnaps: true,
            align: 'start',
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          className='pl-6'
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem className='basis-2/3' key={index}>
                <Link
                  className='flex-1'
                  href={card.link}
                  target={card.target}
                  rel='noopener noreferrer'
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={458}
                    height={229}
                    className='w-full h-auto'
                    priority
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default MiniCards;
