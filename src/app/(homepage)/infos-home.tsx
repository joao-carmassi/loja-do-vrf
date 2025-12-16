'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { H3 } from '@/components/ui/h3';
import { CreditCard, Shield, Truck } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import ClockSvg from '@/components/ui/clock-svg';

const InfosHome = () => {
  return (
    <section className='py-6 md:p-6 border-b border-border'>
      <div className='max-w-[95rem] mx-auto '>
        {/* Desktop */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6 pb-0'>
          <div className='lg:col-span-1 flex items-center gap-3'>
            <Shield className='text-primary' size={35} />
            <div>
              <H3 className='!text-base !font-normal'>
                <span className='text-primary font-semibold block'>
                  ESPECIALISTAS TÉCNICOS
                </span>{' '}
                EM VRF
              </H3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Truck className='text-primary' size={35} />
            <div>
              <H3 className='!text-base !font-normal'>
                <span className='text-primary font-semibold block'>
                  FRETE GRÁTIS
                </span>{' '}
                PARA TODO BRASIL
              </H3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <ClockSvg />
            <div>
              <H3 className='!text-base !font-normal'>
                <span className='text-primary font-semibold block'>
                  MELHOR PRAZO DE ENTREGA
                </span>{' '}
                DO BRASIL EM PEÇAS MIDEA E TOSHIBA
              </H3>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <CreditCard className='text-primary' size={35} />
            <div>
              <H3 className='!text-base !font-normal'>
                <span className='text-primary font-semibold block'>
                  PARCELAMOS EM ATÉ 12X
                </span>{' '}
                NO CARTÃO DE CRÉDITO
              </H3>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className='md:hidden'
        >
          <CarouselContent>
            <CarouselItem className='grid place-items-center'>
              <div className='md:col-span-2 lg:col-span-1 flex items-center gap-3'>
                <Shield className='text-primary' size={35} />
                <div>
                  <H3 className='!text-base !font-normal'>
                    <span className='text-primary font-semibold block'>
                      ESPECIALISTAS TÉCNICOS
                    </span>{' '}
                    EM VRF
                  </H3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <div className='flex items-center gap-3'>
                <Truck className='text-primary' size={35} />
                <div>
                  <H3 className='!text-base !font-normal'>
                    <span className='text-primary font-semibold block'>
                      FRETE GRÁTIS
                    </span>{' '}
                    PARA TODO BRASIL
                  </H3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <div className='md:col-span-2 lg:col-span-1 flex items-center gap-3'>
                <ClockSvg />
                <div>
                  <H3 className='!text-base !font-normal'>
                    <span className='text-primary font-semibold block'>
                      MELHOR PRAZO DE ENTREGA
                    </span>{' '}
                    DO BRASIL EM PEÇAS MIDEA E TOSHIBA
                  </H3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='grid place-items-center'>
              <div className='md:col-span-2 lg:col-span-1 flex items-center gap-3'>
                <CreditCard className='text-primary' size={35} />
                <div>
                  <H3 className='!text-base !font-normal'>
                    <span className='text-primary font-semibold block'>
                      PARCELAMOS EM ATÉ 12X
                    </span>{' '}
                    NO CARTÃO DE CRÉDITO
                  </H3>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default InfosHome;
