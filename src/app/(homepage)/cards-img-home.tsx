import Image from 'next/image';

const CardsImgHome = () => {
  return (
    <section className='mx-auto max-w-[95rem] md:p-12 md:space-y-12'>
      {Array.from({ length: 2 }).map((_, i) => (
        <Image
          key={i}
          width={1200}
          height={300}
          src='https://picsum.photos/200'
          alt=''
          className='w-full h-80 object-cover object-center rounded-lg'
        />
      ))}
    </section>
  );
};

export default CardsImgHome;
