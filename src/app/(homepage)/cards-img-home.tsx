import Image from 'next/image';

const CardsImgHome = () => {
  return (
    <section className='mx-auto max-w-[95rem] md:p-12 md:space-y-12'>
      <Image
        width={1420}
        height={370}
        src='/imgs/banners/01-WEB.png'
        alt=''
        className='w-full object-cover object-center rounded-lg hidden md:block'
      />
      <Image
        width={660}
        height={440}
        src='/imgs/banners/01-MOBILE.png'
        alt=''
        className='w-full object-cover object-center md:hidden'
      />
    </section>
  );
};

export default CardsImgHome;
