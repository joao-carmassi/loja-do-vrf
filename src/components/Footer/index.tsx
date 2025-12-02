'use client';

import ExportedImage from 'next-image-export-optimizer';
import { useEffect, useState } from 'react';

const Footer = () => {
  function sobeTopoTela() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <footer>
      <hr className='border-secondary w-full md:hidden' />
      <div className='grid grid-cols-none border-secondary justify-between w-10/12 gap-x-5 gap-y-10 items-center lg:gap-x-10 lg:grid-cols-4 md:border md:grid-cols-2 md:mb-16 md:rounded-lg mx-auto px-5 py-8'>
        <div className='col-span-full'>
          <p className='text-center font-semibold mb-5'>Selos de segurança</p>
          <ExportedImage
            placeholder='empty'
            alt=''
            width={130}
            height={65}
            className='mx-auto w-32'
            src={`${path}/assets/img/footer/seguro.png`}
            loading='lazy'
          />
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <button onClick={() => sobeTopoTela()}>
            <ExportedImage
              placeholder='empty'
              className='w-full md:w-72 mx-auto'
              width={225}
              height={85}
              src={`${path}/assets/img/favicon.webp`}
              alt='Logo Loja do vrf'
              loading='lazy'
            />
          </button>
          <p className='text-center'>
            A Loja do VRF é um e-commerce especializado em oferecer uma ampla
            linha de peças e componentes para sistemas VRF. Nossa missão é
            proporcionar aos nossos clientes um atendimento ágil, eficiente e de
            excelência. Nosso diferencial está em oferecer preços competitivos e
            o prazo de entrega mais curto do mercado, garantindo que nossos
            clientes tenham acesso rápido às soluções que precisam, com
            qualidade e economia.
          </p>
        </div>
        <div className='flex-1'>
          <ul>
            <li>
              <a
                target='_blank'
                href='mailto:vendas@lojadovrf.com.br'
                className='flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-center tracking-wide'
              >
                <span className='block font-normal'>
                  Envie um e-mail agora mesmo
                </span>
                <div className='flex gap-1 items-center'>
                  <svg
                    className='inline'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    width='20'
                    height='20'
                    strokeWidth='2'
                  >
                    <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
                    <path d='M3 7l9 6l9 -6'></path>
                  </svg>
                  <p>vendas@lojadovrf.com.br</p>
                </div>
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças.'
                className='flex flex-col p-2 rounded-none font-semibold gap-0 items-center tracking-wide'
              >
                <span className='block font-normal'>
                  Envie uma mensagem por Whatsapp
                </span>
                <div className='flex gap-1 items-center'>
                  <svg
                    className='text-green-500 inline'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    width='20'
                    height='20'
                    strokeWidth='2'
                  >
                    <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
                    <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
                  </svg>
                  <p>(11) 96918-9244</p>
                </div>
              </a>
            </li>
            <li>
              <div className='flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-100 items-center tracking-wide'>
                <span className='block font-normal'>
                  Horário de atendimento:
                </span>
                <div className='flex gap-1 items-center'>
                  <svg
                    className='inline'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    width='24'
                    height='24'
                    strokeWidth='2'
                  >
                    <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
                    <path d='M12 12l3 -2'></path>
                    <path d='M12 7v5'></path>
                  </svg>
                  <div>
                    <p>Segunda à Sexta - 9 às 17 horas</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <p className='text-center font-semibold mb-5'>Meios de envio</p>
          <div className='grid grid-cols-2 gap-5 place-items-center'>
            <ExportedImage
              placeholder='empty'
              alt=''
              width={140}
              height={50}
              className='w-36'
              src={`${path}/assets/img/footer/correiosEnvio.png`}
              loading='lazy'
            />
            <ExportedImage
              placeholder='empty'
              alt=''
              width={140}
              height={50}
              className='w-32'
              src={`${path}/assets/img/footer/Azul_Cargo_Express_logo.png`}
              loading='lazy'
            />
            <ExportedImage
              placeholder='empty'
              alt=''
              width={140}
              height={50}
              className='w-32'
              src={`${path}/assets/img/footer/LATAM_Cargo_logo.svg.png`}
              loading='lazy'
            />
            <ExportedImage
              placeholder='empty'
              alt=''
              width={140}
              height={50}
              className='w-32'
              src={`${path}/assets/img/footer/jadlog.png`}
              loading='lazy'
            />
          </div>
        </div>
        <div className='flex flex-1 flex-col'>
          <div>
            <p className='text-center font-semibold mb-5'>
              Formas de pagamento
            </p>
            <ExportedImage
              placeholder='empty'
              alt=''
              width={100}
              height={50}
              className='mx-auto w-20'
              src={`${path}/assets/img/footer/pix-logo.png`}
              loading='lazy'
            />
          </div>
          <ExportedImage
            placeholder='empty'
            alt=''
            width={320}
            height={110}
            className='p-5'
            src={`${path}/assets/img/footer/pagamentos.png`}
            loading='lazy'
          />
        </div>
      </div>
      <div className='bg-base-200 p-5 text-base-content footer px-10'>
        <aside>
          <p>Copyright © 2024 - Todos os direitos reservados a Loja do VRF</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
