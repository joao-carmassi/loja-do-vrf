import { H1 } from '@/components/ui/h1';

const CardsImgHome = () => {
  return (
    <section className='mx-auto max-w-[95rem] md:p-12 md:space-y-12'>
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          className='w-full bg-muted h-80 rounded-lg grid place-items-center'
          key={i}
        >
          <H1>{i + 1}</H1>
        </div>
      ))}
    </section>
  );
};

export default CardsImgHome;
