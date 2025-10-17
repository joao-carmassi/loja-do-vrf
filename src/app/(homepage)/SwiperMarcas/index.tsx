'use client';

import './SwiperMarcas.css';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';
import { memo, useEffect, useState } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import slugify from 'slugify';

interface SwiperMarcasProps {
  marcas: string[];
}

const SwiperMarcas = ({ marcas }: SwiperMarcasProps) => {
  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Swiper
      slidesPerView={2}
      loop={true}
      navigation={true}
      modules={[Navigation, Virtual]}
      className='w-10/12 swiper-container swiper-marcas'
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {marcas
        .filter((marca) => marca !== 'MONTREAL')
        .map((marca) => (
          <SwiperSlide key={marca} className='my-auto'>
            <div className='flex h-fit justify-center duration-200 items-center md:hover:scale-105 py-2'>
              <Link
                prefetch={false}
                className='bg-white rounded-full shadow-md w-8/12 aspect-square relative'
                href={`/marca/${slugify(marca, { strict: true, lower: true })}`}
              >
                <ExportedImage
                  placeholder='empty'
                  loading='lazy'
                  width={220}
                  height={100}
                  className='w-10/12 -translate-y-1/2 absolute right-1/2 top-1/2 translate-x-1/2'
                  src={`${path}/assets/img/marcas/${marca}.png`}
                  alt={`Logo ${marca}`}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default memo(SwiperMarcas);
