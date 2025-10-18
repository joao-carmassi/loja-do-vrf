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
                  ENTREGAMOS
                </span>
                EM TODO BRASIL
              </p>
            </div>
            <hr className='col-span-full border-gray-400 lg:hidden' />
            <div className='flex border-gray-400 border-r h-full justify-center w-full gap-2 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='40'
                height='40'
                viewBox='0,0,256,256'
              >
                <g
                  fill='#080069'
                  fillRule='nonzero'
                  stroke='none'
                  strokeWidth='1'
                  strokeLinecap='butt'
                  strokeLinejoin='miter'
                  strokeMiterlimit='10'
                  strokeDasharray=''
                  strokeDashoffset='0'
                  fontFamily='none'
                  fontWeight='none'
                  fontSize='none'
                  textAnchor='none'
                  style={{ mixBlendMode: 'normal' }}
                >
                  <g transform='scale(8.53333,8.53333)'>
                    <path d='M15,1.09961c-1.025,0 -2.05008,0.38992 -2.83008,1.16992l-4.98047,4.98047h0.15039c1.27,0 2.45938,0.49062 3.35938,1.39063l3.49023,3.49023c0.45,0.44 1.17109,0.44 1.62109,0l3.49023,-3.49023c0.9,-0.9 2.08938,-1.39062 3.35938,-1.39062h0.15039l-4.98047,-4.98047c-0.78,-0.78 -1.80508,-1.16992 -2.83008,-1.16992zM5.68945,8.75l-3.41992,3.41992c-1.56,1.56 -1.56,4.10016 0,5.66016l3.41992,3.41992h1.65039c0.87,0 1.69078,-0.33922 2.30078,-0.94922l3.49023,-3.49023c1.03,-1.03 2.70828,-1.03 3.73828,0l3.49023,3.49023c0.61,0.61 1.43078,0.94922 2.30078,0.94922h1.65039l3.41992,-3.41992c1.56,-1.56 1.56,-4.10016 0,-5.66016l-3.41992,-3.41992h-1.65039c-0.87,0 -1.69078,0.33922 -2.30078,0.94922l-3.49023,3.49023c-0.51,0.51 -1.18914,0.77149 -1.86914,0.77149c-0.68,0 -1.35914,-0.26149 -1.86914,-0.77149l-3.49023,-3.49023c-0.61,-0.61 -1.43078,-0.94922 -2.30078,-0.94922zM15,17.53906c-0.2925,0 -0.58555,0.11008 -0.81055,0.33008l-3.49023,3.49023c-0.9,0.9 -2.08938,1.39063 -3.35938,1.39063h-0.15039l4.98047,4.98047c1.56,1.56 4.10016,1.56 5.66016,0l4.98047,-4.98047h-0.15039c-1.27,0 -2.45938,-0.49063 -3.35937,-1.39062l-3.49023,-3.49023c-0.225,-0.22 -0.51805,-0.33008 -0.81055,-0.33008z'></path>
                  </g>
                </g>
              </svg>
              <p>
                <span className='text-secondary block font-semibold'>
                  7% DE DESCONTO
                </span>
                NO PIX
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
                  PARCELAMOS EM 12X
                </span>
                NO CARTÃO DE CRÉDITO
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
