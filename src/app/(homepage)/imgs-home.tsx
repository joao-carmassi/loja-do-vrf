import { H1 } from '@/components/ui/h1';

const ImgsHome = () => {
  return (
    <section className='flex md:gap-6 md:px-12 md:pt-6 max-w-[95rem] mx-auto'>
      <div className='aspect-video w-full grid place-items-center bg-muted'>
        <H1>1</H1>
      </div>
      <div className='aspect-video w-full grid place-items-center bg-muted'>
        <H1>2</H1>
      </div>
      <div className='aspect-video w-full grid place-items-center bg-muted'>
        <H1>3</H1>
      </div>
    </section>
  );
};

export default ImgsHome;
