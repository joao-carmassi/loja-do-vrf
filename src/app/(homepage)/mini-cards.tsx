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
    <section className='flex md:gap-6 md:p-12 max-w-[95rem] mx-auto'>
      {cards.map((card, index) => (
        <div key={index} className='flex-1'>
          <Link href={card.link} target={card.target} rel='noopener noreferrer'>
            <Image
              src={card.src}
              alt={card.alt}
              width={450}
              height={230}
              className='w-full h-auto hover:scale-105 transition-transform duration-300'
            />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default MiniCards;
