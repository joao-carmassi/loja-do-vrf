'use client';

import { memo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import ExportedImage from 'next-image-export-optimizer';

const SwiperBanner = () => {
  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 7500 }}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      className='relative swiper-container swiper-marcas swiperMarcas'
    >
      <SwiperSlide className='my-auto'>
        <div className='hidden lg:block'>
          <ExportedImage
            priority
            src={`${path}/assets/img/home/web2.png`}
            alt='Imagem produto'
            width={1850}
            height={420}
            placeholder='empty'
            className='w-full md:h-[26rem] object-center object-cover'
          />
        </div>
        <div className='lg:hidden'>
          <ExportedImage
            priority
            src={`${path}/assets/img/home/mobile1.png`}
            alt='Imagem produto'
            width={1020}
            height={420}
            placeholder='empty'
            className='w-full md:h-[26rem] object-center object-cover'
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className='my-auto'>
        <div className='hidden lg:block'>
          <ExportedImage
            priority
            src={`${path}/assets/img/home/web.png`}
            alt='Imagem produto'
            width={1850}
            height={420}
            placeholder='empty'
            className='w-full md:h-[26rem] object-center object-cover'
          />
        </div>
        <div className='lg:hidden'>
          <ExportedImage
            priority
            src={`${path}/assets/img/home/mobile2.png`}
            alt='Imagem produto'
            width={1020}
            height={420}
            placeholder='empty'
            className='w-full md:h-[26rem] object-center object-cover'
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className='my-auto'>
        <div className='hidden lg:block'>
          <ExportedImage
            priority
            src={`${path}/assets/img/home/web3.png`}
            alt='Imagem produto'
            width={1850}
            height={420}
            placeholder='empty'
            className='w-full md:h-[26rem] object-center object-cover'
          />
        </div>
        <div className='lg:hidden'>
          <ExportedImage
            priority
            src={`${path}/assets/img/home/mobile3.png`}
            alt='Imagem produto'
            width={1020}
            height={420}
            placeholder='empty'
            className='w-full md:h-[26rem] object-center object-cover'
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default memo(SwiperBanner);
