import Image from 'next/image';
import Link from 'next/link';

const CardsImgHome = () => {
  return (
    <section className='md:space-y-12 md:py-12'>
      <div className='mx-auto max-w-[95rem] md:px-12'>
        <Link href='https://wa.me/5511969189244?text=Ol%C3%A1!%0AVim%20atrav%C3%A9s%20do%20site%20da%20loja%20do%20VRF%20e%20preciso%20de%20pe%C3%A7as.'>
          <Image
            width={1420}
            height={370}
            src='/imgs/banners/contato.png'
            alt='Não encontrou a peça que procura? Fale conosco!'
            className='w-full object-cover object-center rounded-lg hidden md:block'
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
      <div className='mx-auto max-w-[95rem] md:px-12'>
        <Image
          width={1420}
          height={370}
          src='/imgs/banners/rede_social.png'
          alt='Siga-nos nas redes sociais!'
          className='w-full object-cover object-center rounded-lg hidden md:block'
        />
        <Image
          width={750}
          height={500}
          src='/imgs/banners/rede_social_mobile.png'
          alt=''
          className='w-full object-cover object-center md:hidden'
        />
      </div>
    </section>
  );
};

export default CardsImgHome;
