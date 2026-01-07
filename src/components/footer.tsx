import Link from 'next/link';
import Image from 'next/image';
import MenuContato from './menu-contato';

const formasDeEnvio = [
  {
    nome: 'Correios',
    img: '/imgs/formas-de-envio/correiosEnvio.png',
  },
  {
    nome: 'Azul Cargo Express',
    img: '/imgs/formas-de-envio/Azul_Cargo_Express_logo.png',
  },
  {
    nome: 'Latam Cargo',
    img: '/imgs/formas-de-envio/LATAM_Cargo_logo.png',
  },
  {
    nome: 'Jadlog',
    img: '/imgs/formas-de-envio/jadlog.png',
  },
];

function Footer(): React.ReactNode {
  return (
    <div className='md:border-t-2 border-secondary'>
      <div className='mx-auto max-w-[95rem] p-6 md:p-12 flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col justify-center gap-6'>
          <Link className='flex gap-3 items-center mx-auto md:mx-0' href='/'>
            <Image
              src='/imgs/logos/favicon.ico'
              alt='Logo'
              className='border-3 lg:border-5 border-secondary p-1 rounded-full aspect-square size-12 lg:size-21'
              width={84}
              height={84}
            />
            <div className='w-[12rem] lg:w-[23rem]'>
              <Image
                src='/imgs/logos/logo.webp'
                alt='Loja do VRF'
                className='invert w-full'
                width={302}
                height={36}
              />
            </div>
          </Link>
          <div className='space-y-3'>
            <p className='text-sm lg:text-base text-center md:text-start'>
              A Loja do VRF e um e-commerce especializado em oferecer uma ampla
              linha de peças e componentes para LOJA DO VRF sistemas VRF. Nossa
              missão é proporcionar aos nossos clientes um atendimento ágil,
              1eficiente e de excelência.
            </p>
            <p className='text-sm lg:text-base text-center md:text-start'>
              Nosso diferencial está em oferecer preços competitivos e o prazo
              de entrega mais curto do mercado, garantindo que nossos clientes
              tenham acesso rápido às soluções que precisam, com qualidade e
              economia.
            </p>
          </div>
        </div>
        <div className='h-32 bg-secondary w-1 hidden md:block' />
        <div className='w-full'>
          <div className='border-y border-border w-full mx-auto py-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-3'>
            <MenuContato.Email footer />
            <MenuContato.Whatsapp footer />
            <MenuContato.HorarioAtendimento footer />
          </div>
          <div className='w-full flex flex-col lg:flex-row items-center md:items-start justify-between border-b border-border py-3'>
            <div className='w-full'>
              <h3 className='font-bold text-primary md:text-lg'>
                Meios de envio:
              </h3>
              <div className='flex justify-between items-center gap-5 flex-wrap w-full'>
                {formasDeEnvio.map((forma) => (
                  <Image
                    key={forma.nome}
                    src={forma.img}
                    alt={forma.nome}
                    width={115}
                    height={40}
                    className='h-8 w-fit'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
