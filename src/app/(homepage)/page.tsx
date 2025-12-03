import SwiperBanner from '@/app/(homepage)/SwiperBanner';
import SwiperCards from '@/app/(homepage)/SwiperCards';
import SwiperDados from '@/app/(homepage)/SwiperDados';
import SwiperMarcas from '@/app/(homepage)/SwiperMarcas';
import TituloMarca from '@/app/(homepage)/TituloCategoria';
import filtraMarcas from '@/utils/filtraMarcas';
import getProdutos from '@/utils/getProdutos';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import slugify from 'slugify';

const Home = () => {
  const marcas = filtraMarcas();
  const produtosMarcas = getProdutos.porMarca();
  const produtosCategoria = getProdutos.porCategoria();

  return (
    <main className='bg-base-100'>
      <h1 className='sr-only'>Loja do VRF</h1>
      <section>
        <SwiperBanner />
        <hr className='border-b-2 border-secondary hidden md:block' />
      </section>
      <section>
        <div className='border-b border-gray-300 md:mb-10'>
          <div className='grid-cols-2 gap-y-3 hidden lg:grid-cols-4 lg:w-10/12 md:grid mx-auto py-3'>
            <div className='flex border-gray-400 border-r h-full justify-center w-full gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                width='45'
                height='45'
                strokeWidth='1.5'
                className='text-secondary'
              >
                <path d='M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3'></path>
              </svg>
              <p>
                <span className='text-secondary block font-semibold'>
                  ESPECIALISTAS TÉCNICOS
                </span>
                EM VRF
              </p>
            </div>
            <div className='flex border-gray-400 h-full justify-center w-full gap-2 items-center lg:border-r'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                width='45'
                height='45'
                strokeWidth='1.5'
                className='text-secondary'
              >
                <path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
                <path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
                <path d='M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5'></path>
              </svg>
              <p>
                <span className='text-secondary block font-semibold'>
                  FRETE GRATIS
                </span>
                PARA TODO BRASIL
              </p>
            </div>
            <hr className='col-span-full border-gray-400 lg:hidden' />
            <div className='flex border-gray-400 border-r h-full justify-center w-full gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                viewBox='0 0 2200 2200'
                xmlSpace='preserve'
                width='40'
                height='40'
                className='text-secondary'
              >
                <g id='background'>
                  <rect fill='none' width='2200' height='2200' />
                </g>
                <g id='Objects'>
                  <g>
                    <path
                      fill='currentColor'
                      d='M1949.224,912.233c-38.435-90.869-93.445-172.466-163.503-242.523
		c-70.057-70.057-151.654-125.067-242.524-163.503c-75.751-32.04-155.277-51.356-237.127-57.677v-84.009h48.674
		c37.781,0,68.413-30.629,68.413-68.413c0-37.784-30.632-68.413-68.413-68.413h-217.153c-37.781,0-68.413,30.629-68.413,68.413
		c0,37.784,30.632,68.413,68.413,68.413h48.674v84.015c-135.115,10.471-263.973,56.334-375.777,134.218
		c-61.736,43.007-116.704,94.768-163.375,153.844c-38.499,48.732-70.776,101.728-96.265,157.983H351.947
		c-33.083,0-59.902,26.819-59.902,59.902s26.819,59.902,59.902,59.902h237.876c0.257,0.003,0.514,0.018,0.771,0.018
		c0.309,0,0.617-0.013,0.926-0.018h207.918c33.083,0,59.902-26.819,59.902-59.902s-26.819-59.902-59.902-59.902H685.04
		c16.434-29.238,35.155-57.227,56.082-83.715c39.381-49.849,85.759-93.523,137.847-129.807
		c108.033-75.257,235.008-115.035,367.2-115.035c86.863,0,171.096,16.999,250.358,50.524
		c76.589,32.395,145.386,78.783,204.48,137.877c59.093,59.094,105.481,127.89,137.877,204.48
		c33.526,79.263,50.525,163.495,50.525,250.358s-16.999,171.095-50.525,250.358c-32.395,76.589-78.784,145.386-137.877,204.479
		c-59.094,59.094-127.891,105.482-204.48,137.877c-79.262,33.526-163.495,50.525-250.358,50.525
		c-132.194,0-259.172-39.78-367.206-115.039c-52.087-36.286-98.465-79.96-137.845-129.809
		c-20.925-26.489-39.645-54.477-56.078-83.715h114.399c33.083,0,59.902-26.819,59.902-59.902s-26.819-59.902-59.902-59.902h-208.09
		c-0.713-0.009-1.425-0.017-2.14,0H420.54c-33.083,0-59.902,26.819-59.902,59.902s26.819,59.902,59.902,59.902h130.309
		c25.487,56.253,57.762,109.248,96.259,157.979c46.67,59.078,101.638,110.84,163.374,153.848
		c128.226,89.325,278.884,136.54,435.687,136.54c102.984,0,202.918-20.183,297.028-59.989
		c90.87-38.435,172.467-93.445,242.525-163.502c70.057-70.057,125.067-151.654,163.503-242.525
		c39.806-94.11,59.989-194.045,59.989-297.028S1989.03,1006.344,1949.224,912.233z'
                    />
                    <path
                      fill='currentColor'
                      d='M1578.561,845.206l-316.832,209.709c-44.754-4.471-91.092,10.392-125.301,44.602
		c-29.313,29.313-45.457,68.287-45.457,109.742c0,41.454,16.144,80.429,45.457,109.741c29.313,29.313,68.286,45.456,109.741,45.456
		c41.455,0,80.428-16.143,109.741-45.455c0.001-0.002-0.002,0.001,0-0.001c29.31-29.312,45.457-68.288,45.457-109.741
		c0-5.27-0.264-10.499-0.779-15.673l209.635-316.719C1623.959,856.113,1599.315,831.469,1578.561,845.206z M1271.196,1234.285
		C1271.195,1234.286,1271.195,1234.286,1271.196,1234.285c-13.801,13.8-36.255,13.801-50.055,0
		c-6.684-6.684-10.366-15.572-10.366-25.026c0-9.454,3.682-18.342,10.367-25.027c6.9-6.9,15.963-10.35,25.026-10.35
		c9.064,0,18.126,3.45,25.026,10.35c6.685,6.685,10.367,15.573,10.367,25.027
		C1281.562,1218.712,1277.88,1227.601,1271.196,1234.285z'
                    />
                    <path
                      fill='currentColor'
                      d='M895.27,1209.259c0-33.083-26.819-59.902-59.902-59.902H250.689
		c-33.083,0-59.902,26.819-59.902,59.902s26.819,59.902,59.902,59.902h584.679C868.451,1269.161,895.27,1242.342,895.27,1209.259z'
                    />
                  </g>
                </g>
              </svg>
              <p>
                <span className='text-secondary block font-semibold'>
                  MELHOR PRAZO DE ENTREGA
                </span>
                DO BRASIL EM PEÇAS MIDEA E TOSHIBA
              </p>
            </div>
            <div className='flex border-gray-400 h-full justify-center w-full gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                width='45'
                height='45'
                strokeWidth='1.5'
                className='text-secondary'
              >
                <path d='M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z'></path>
                <path d='M3 10l18 0'></path>
                <path d='M7 15l.01 0'></path>
                <path d='M11 15l2 0'></path>
              </svg>
              <p>
                <span className='text-secondary block font-semibold'>
                  PARCELAMOS EM ATÉ 12X
                </span>
                NO CARTÃO DE CRÉDITO
              </p>
            </div>
          </div>
          <div className='md:hidden py-5'>
            <SwiperDados />
          </div>
        </div>
        <div className='flex flex-row justify-between items-center lg:w-10/12 md:gap-5 md:w-11/12 mx-auto px-0'>
          <Link
            prefetch={false}
            aria-label='Link Pagina DIAGNÓSTICO'
            href={`/produtos/${slugify('DIAGNÓSTICO', {
              lower: true,
              strict: true,
            })}`}
            className='duration-200 md:hover:scale-105'
          >
            <ExportedImage
              priority
              placeholder='empty'
              alt=''
              width={500}
              height={250}
              src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/home/MINI BANNER 1.png`}
            />
          </Link>
          <a
            aria-label='Fale com um especialista'
            target='_blank'
            href='https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças.'
            className='duration-200 md:hover:scale-105'
          >
            <ExportedImage
              priority
              placeholder='empty'
              alt=''
              width={500}
              height={250}
              src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/home/MINI BANNER 2.png`}
            />
          </a>
          <Link
            prefetch={false}
            aria-label='Link pagina manuais'
            href='/manuais'
            className='duration-200 md:hover:scale-105'
          >
            <ExportedImage
              priority
              placeholder='empty'
              alt=''
              width={500}
              height={250}
              src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/home/MINI BANNER 3.png`}
            />
          </Link>
        </div>
      </section>
      {produtosCategoria['COMPRESSOR'] &&
        produtosCategoria['COMPRESSOR'].length > 0 && (
          <section className='containerCarrosel relative'>
            <hr className='border-secondary block md:hidden' />
            <div className='rounded-lg lg:w-10/12 md:bg-[#d4f1fd] md:my-16 md:px-0 md:relative md:w-11/12 mx-auto px-5'>
              <div className='grid md:pb-4 md:pt-5 pb-3 place-items-center pt-5'>
                <h2 className='font-bold text-3xl md:text-4xl'>COMPRESSORES</h2>
                <hr className='border-b-2 border-secondary rounded-xl w-16 mx-auto' />
              </div>
              <SwiperCards produtos={produtosCategoria['COMPRESSOR']} />
            </div>
          </section>
        )}
      {marcas
        .filter((marca) => ['MIDEA', 'TOSHIBA'].includes(marca))
        .map((marca) => (
          <section key={marca} className='containerCarrosel relative'>
            <hr className='border-secondary block md:hidden' />
            <div className='rounded-lg lg:w-10/12 md:bg-[#d4f1fd] md:my-16 md:px-0 md:relative md:w-11/12 mx-auto px-5'>
              <div className='grid md:pb-4 md:pt-5 pb-3 place-items-center pt-5'>
                <TituloMarca categoria={marca} />
                <hr className='border-b-2 border-secondary rounded-xl w-16 mx-auto' />
              </div>
              <SwiperCards produtos={produtosMarcas[marca]} />
            </div>
          </section>
        ))}
      <section>
        <div className='bg-[#d4f1fd] lg:w-10/12 md:mt-10 md:rounded-lg md:w-11/12 mx-auto py-10'>
          <div className='text-center'>
            <h2 className='text-3xl text-secondary font-semibold'>
              Escolha pela marca
            </h2>
          </div>
          <div className='w-10/12 mx-auto md:w-full pt-5 relative'>
            <SwiperMarcas marcas={marcas} />
          </div>
        </div>
      </section>
      <section className='grid place-items-center'>
        <a
          aria-label='Link whatsapp'
          className='grid w-full lg:w-10/12 md:my-16 md:w-11/12 mx-auto place-items-center'
          target='_blank'
          href='https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças.'
        >
          <div className='w-full'>
            <div className='hidden md:block'>
              <ExportedImage
                src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/home/final.png`}
                alt='NÃO ENCONTROU O QUE PROCURAVA? CLIQUE AQUI PARA FALAR COM UM DOS NOSSOS CONSULTORES'
                width={1550}
                height={400}
                placeholder='empty'
                className='w-full md:rounded-lg'
              />
            </div>
            <div className='md:hidden'>
              <ExportedImage
                src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/home/mobile4.png`}
                alt='NÃO ENCONTROU O QUE PROCURAVA? CLIQUE AQUI PARA FALAR COM UM DOS NOSSOS CONSULTORES'
                width={750}
                height={500}
                placeholder='empty'
                className='w-full'
              />
            </div>
          </div>
        </a>
      </section>

      <section className='flex flex-col justify-center w-full gap-5 items-center md:pb-16'>
        <div className='flex flex-col bg-secondary justify-center w-full items-center lg:w-10/12 md:py-20 md:rounded-lg md:w-11/12 mx-auto py-14'>
          <p className='text-lg text-white'>Estamos no instagram:</p>
          <a
            href='https://www.instagram.com/lojadovrf/'
            target='_blank'
            className='text-4xl text-white font-semibold md:text-5xl'
          >
            @lojadovrf
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
