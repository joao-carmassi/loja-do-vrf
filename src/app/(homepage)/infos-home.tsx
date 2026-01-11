'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { H3 } from '@/components/ui/h3';
import Autoplay from 'embla-carousel-autoplay';
import GearSvg from '@/components/svgs/gear-svg';
import TruckSvg from '@/components/svgs/truck-svg';
import BoxSvg from '@/components/svgs/box-svg';
import CardSvg from '@/components/svgs/card-svg';

const InfoTecnicos = () => (
  <div className='lg:col-span-1 flex items-center gap-3'>
    <GearSvg className='text-primary' size={45} />
    <div>
      <H3 className='!text-base !font-normal leading-4.5'>
        <span className='text-primary font-semibold block'>
          ESPECIALISTAS TÉCNICOS EM VRF
        </span>{' '}
        <span className='text-xs'>EM VRF</span>
      </H3>
    </div>
  </div>
);

const InfoFreteGratis = () => (
  <div className='flex items-center gap-3'>
    <TruckSvg className='text-primary' size={55} />
    <div>
      <H3 className='!text-base !font-normal leading-4.5'>
        <span className='text-primary font-semibold block'>FRETE GRÁTIS</span>{' '}
        <span className='text-xs'>PARA TODO BRASIL</span>
      </H3>
    </div>
  </div>
);

const InfoPrazoEntrega = () => (
  <div className='flex items-center gap-3'>
    <BoxSvg className='text-primary' size={45} />
    <div>
      <H3 className='!text-base !font-normal leading-4.5'>
        <span className='text-primary font-semibold block'>
          MELHOR PRAZO DE ENTREGA
        </span>{' '}
        <span className='text-xs'>DO BRASIL EM PEÇAS MIDEA E TOSHIBA</span>
      </H3>
    </div>
  </div>
);

const InfoParcelamento = () => (
  <div className='flex items-center gap-3'>
    <CardSvg className='text-primary' size={45} />
    <div>
      <H3 className='!text-base !font-normal leading-4.5'>
        <span className='text-primary font-semibold block'>
          PARCELAMOS EM ATÉ 12X
        </span>{' '}
        <span className='text-xs'>NO CARTÃO DE CRÉDITO</span>
      </H3>
    </div>
  </div>
);

const InfosHome = () => {
  return (
    <section className='py-6 md:p-9'>
      <div className='max-w-[95rem] mx-auto '>
        {/* Desktop */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 pb-0'>
          <InfoTecnicos />
          <InfoFreteGratis />
          <InfoPrazoEntrega />
          <InfoParcelamento />
        </div>
        {/* Mobile */}
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className='md:hidden'
        >
          <CarouselContent>
            <CarouselItem className='grid place-items-center'>
              <InfoTecnicos />
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <InfoFreteGratis />
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <InfoPrazoEntrega />
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <InfoParcelamento />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default InfosHome;
