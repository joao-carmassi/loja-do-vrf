import Image from 'next/image';

const cards = [
  {
    src: '/imgs/banners/mini_banner1.png',
    alt: 'Equipamentos de diagnóstico',
  },
  {
    src: '/imgs/banners/mini_banner2.png',
    alt: 'Especialistas técnicos',
  },
  {
    src: '/imgs/banners/mini_banner3.png',
    alt: 'Manuais técnicos',
  },
];

const MiniCards = () => {
  return (
    <section className='flex md:gap-6 md:px-12 md:pt-12 max-w-[95rem] mx-auto'>
      {cards.map((card, index) => (
        <div key={index} className='flex-1'>
          <Image
            src={card.src}
            alt={card.alt}
            width={450}
            height={230}
            className='w-full h-auto'
          />
        </div>
      ))}
    </section>
  );
};

export default MiniCards;
