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

const formasDePagamento = [
  {
    nome: 'Visa',
    img: '/imgs/formas-de-pagamento/visa.svg',
  },
  {
    nome: 'Mastercard',
    img: '/imgs/formas-de-pagamento/mastercard.png',
  },
  {
    nome: 'Dinners',
    img: '/imgs/formas-de-pagamento/dinners.png',
  },
  {
    nome: 'American Express',
    img: '/imgs/formas-de-pagamento/american.png',
  },
  {
    nome: 'Elo',
    img: '/imgs/formas-de-pagamento/elo.png',
  },
  {
    nome: 'Hipercard',
    img: '/imgs/formas-de-pagamento/Hipercard.svg',
  },
  {
    nome: 'Boleto',
    img: '/imgs/formas-de-pagamento/boleto.png',
  },
  {
    nome: 'Pix',
    img: '/imgs/formas-de-pagamento/pix.png',
  },
];

function Footer(): React.ReactNode {
  return (
    <div className='md:border-t-2 border-secondary'>
      <div className='mx-auto max-w-[95rem] p-6 md:p-12 grid lg:grid-cols-[3fr_5fr] gap-6 place-items-center'>
        <div className='flex flex-col justify-center gap-6'>
          <Link className='flex gap-3 items-center mx-auto md:mx-0' href='/'>
            <Image
              src='/imgs/logos/favicon.ico'
              alt='Logo'
              className='border-3 lg:border-5 border-secondary p-1 rounded-full aspect-square size-12 lg:size-18'
              width={84}
              height={84}
            />
            <div className='w-[12rem] lg:w-[20rem]'>
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
            <p className='text-xs lg:text-sm text-center md:text-start'>
              A Loja do VRF e um e-commerce especializado em oferecer uma ampla
              linha de peças e componentes para LOJA DO VRF sistemas VRF. Nossa
              missão é proporcionar aos nossos clientes um atendimento ágil,
              1eficiente e de excelência.
            </p>
            <p className='text-xs lg:text-sm text-center md:text-start'>
              Nosso diferencial está em oferecer preços competitivos e o prazo
              de entrega mais curto do mercado, garantindo que nossos clientes
              tenham acesso rápido às soluções que precisam, com qualidade e
              economia.
            </p>
          </div>
        </div>
        <div className='w-full lg:border-l border-secondary lg:pl-6'>
          <div className='border-y border-border w-full mx-auto py-1 flex flex-wrap justify-center md:justify-between items-center gap-3'>
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
              <h3 className='font-bold text-primary md:text-lg mt-6'>
                Formas de pagamento:
              </h3>
              <div className='flex justify-between items-center gap-5 flex-wrap w-full mt-2'>
                {formasDePagamento.map((forma) => (
                  <Image
                    key={forma.nome}
                    src={forma.img}
                    alt={forma.nome}
                    width={60}
                    height={40}
                    className='h-7 w-fit'
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
