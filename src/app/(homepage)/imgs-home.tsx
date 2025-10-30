import Image from 'next/image';

const ImgsHome = () => {
  return (
    <section className='flex md:gap-6 md:px-12 md:pt-6 max-w-[95rem] mx-auto'>
      <div className='aspect-video w-full grid place-items-center bg-muted'>
        <Image
          width={210}
          height={210}
          src='https://picsum.photos/200'
          alt=''
          className='w-full aspect-video object-cover object-center'
        />
      </div>
      <div className='aspect-video w-full grid place-items-center bg-muted'>
        <Image
          width={210}
          height={210}
          src='https://picsum.photos/200'
          alt=''
          className='w-full aspect-video object-cover object-center'
        />
      </div>
      <div className='aspect-video w-full grid place-items-center bg-muted'>
        <Image
          width={210}
          height={210}
          src='https://picsum.photos/200'
          alt=''
          className='w-full aspect-video object-cover object-center'
        />
      </div>
    </section>
  );
};

export default ImgsHome;
