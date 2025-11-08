'use client';

import InputPesquisa from '@/components/InputPesquisa';
import { RootState } from '@/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import slugify from 'slugify';
import InputEscondeNav from './InputEscondeNav';

interface Props {
  categorias: string[];
  subcategorias: { [categoria: string]: string[] };
}

const ContainerHeader = ({ categorias, subcategorias }: Props) => {
  const [mounted, setMounted] = useState(false);
  const carrinho = useSelector((state: RootState) => state.carrinho);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  return (
    <div
      id='navBar'
      className='bg-secondary shadow-sm w-full z-40 gap-2 px-5 py-2.5'
    >
      <nav className='flex flex-col gap-3'>
        <div className='flex h-12 justify-center items-center'>
          <div className='h-full aspect-square'>
            <div className='h-full justify-center hidden items-center itens-pc lg:flex lg:w-64 md:w-44'>
              <Link
                prefetch={false}
                className='flex w-fit gap-3 items-center lg:justify-center'
                href='/'
              >
                <img
                  className='border-2 border-primary p-1.5 rounded-full aspect-square lg:h-9 md:h-6'
                  src={`${path}/assets/img/favicon.ico`}
                  alt='Iconi VRF'
                />
                <img
                  className='md:w-4/6'
                  src={`${path}/assets/img/logo.webp`}
                  alt='Lodo loja do VRF'
                />
              </Link>
            </div>
            <div className='block Itens-Celular lg:hidden'>
              <input
                id='my-drawer-3'
                type='checkbox'
                className='drawer-toggle drawers lg:hidden'
              />
              <label
                htmlFor='my-drawer-3'
                aria-label='open sidebar'
                className='btn btn-ghost btn-square border border-white lg:hidden z-40'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='h-6 text-white w-6 inline-block stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
              <div className='drawer-side z-50'>
                <label
                  htmlFor='my-drawer-3'
                  aria-label='close sidebar'
                  className='drawer-overlay'
                ></label>
                <div className='bg-base-200 p-0 w-72 join join-vertical max-w-[66%] menu min-h-full overflow-auto'>
                  <div className='flex bg-secondary h-5 justify-end text-white items-center px-5'></div>
                  <div className='collapse collapse-arrow border border-gray-400 rounded-none join-item'>
                    <input
                      className='min-h-14 px-4'
                      type='checkbox'
                      name='my-accordion-4'
                    />
                    <div className='collapse-title flex text-md text-secondary font-semibold items-center min-h-14 px-4'>
                      <div className='flex justify-center gap-1 items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          width='25'
                          height='25'
                          strokeWidth='1.5'
                          className='text-secondary'
                        >
                          <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4'></path>
                        </svg>
                        <p className='text-secondary'>Contato</p>
                      </div>
                    </div>
                    <div className='collapse-content flex flex-col'>
                      <ul className='dropdown-content p-0 rounded-md menu z-[1]'>
                        <li>
                          <a
                            target='_blank'
                            href='mailto:vendas@lojadovrf.com.br'
                            className='flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-start tracking-wide'
                          >
                            <span className='block font-normal'>
                              Troque mensagem por e-mail
                            </span>
                            <div className='flex gap-1 items-start'>
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
                        <hr />
                        <li>
                          <a
                            target='_blank'
                            href='https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças.'
                            className='flex flex-col p-2 rounded-none font-semibold gap-0 items-start tracking-wide'
                          >
                            <span className='block font-normal'>
                              Compre por whatsapp
                            </span>
                            <div className='flex gap-1 items-start'>
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
                        <hr />
                        <li>
                          <div className='flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-200 items-start tracking-wide'>
                            <span className='block font-normal'>
                              Horário de atendimento:
                            </span>
                            <div className='flex gap-1 items-start'>
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
                                <p>Segunda a sexta 9 as 17 horas</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {categorias.map((categoria) => (
                    <div key={categoria}>
                      {['PLACA', 'VALVULA DE EXPANSÃO', 'SENSOR'].includes(
                        categoria
                      ) ? (
                        <div key={categoria}>
                          <div className='collapse collapse-arrow border border-gray-400 rounded-none join-item'>
                            <input
                              className='min-h-14 px-4'
                              type='checkbox'
                              name='my-accordion-4'
                            />
                            <div className='collapse-title flex text-md text-secondary font-semibold items-center min-h-14 px-4'>
                              {categoria}
                            </div>
                            <div className='collapse-content flex flex-col pl-3'>
                              {subcategorias[categoria].map((subcategoria) => (
                                <Link
                                  prefetch={false}
                                  key={subcategoria}
                                  className='border-gray-300 font-semibold pl-2 py-2.5'
                                  href={`/produtos/${slugify(categoria, {
                                    strict: true,
                                    lower: true,
                                  })}?subproduto=${subcategoria}`}
                                >
                                  • {subcategoria}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={categoria}
                          className='collapse border border-gray-400 rounded-none join-item'
                        >
                          <div className='collapse-title flex text-md text-secondary font-semibold items-center min-h-14 px-4'>
                            <Link
                              prefetch={false}
                              href={`/produtos/${slugify(categoria, {
                                strict: true,
                                lower: true,
                              })}/`}
                            >
                              {categoria}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className='collapse border border-gray-400 rounded-none join-item'>
                    <div className='collapse-title flex text-md font-semibold items-center min-h-14 px-4'>
                      <Link
                        prefetch={false}
                        href='/manuais'
                        className='flex gap-2 group items-center'
                      >
                        <img
                          className='h-7'
                          src={`${path}/assets/img/nav/logoManualCelular.webp`}
                        />
                        <p className='text-secondary font-semibold group-hover:underline'>
                          MANUAIS
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-full lg:hidden'>
            <Link
              prefetch={false}
              href='/'
              className='flex h-full justify-center w-2/3 gap-2 items-center lg:hidden mx-auto py-2.5'
            >
              <img
                className='w-full'
                src={`${path}/assets/img/logo.webp`}
                alt='Loja Do VRF'
              />
            </Link>
          </div>
          <div className='gap-1 hidden items-center lg:flex'>
            <InputEscondeNav />
            <div className='lg:w-[25rem] md:w-72 ml-3 xl:w-[38rem]'>
              <InputPesquisa />
            </div>
            <div className='relative group hidden md:block'>
              <button className='btn btn-sm bg-secondary border-none h-fit m-1 text-left hover:bg-secondary pl-1 py-1.5'>
                <div className='flex justify-center gap-1 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    width='30'
                    height='30'
                    strokeWidth='1.5'
                    className='text-white'
                  >
                    <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4'></path>
                  </svg>
                  <p className='text-nowrap text-white font-normal leading-4'>
                    Contato
                    <span className='block font-semibold'>(11) 96918-9244</span>
                  </p>
                </div>
              </button>
              <ul className='absolute hidden group-hover:flex flex-col bg-base-100 p-0 rounded-md shadow w-fit menu z-50'>
                <li>
                  <a
                    target='_blank'
                    href='mailto:vendas@lojadovrf.com.br'
                    className='flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-start tracking-wide'
                  >
                    <span className='block font-normal'>
                      Troque mensagem por e-mail
                    </span>
                    <div className='flex gap-1 items-start'>
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
                <hr />
                <li>
                  <a
                    target='_blank'
                    href='https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças.'
                    className='flex flex-col p-2 rounded-none font-semibold gap-0 items-start tracking-wide'
                  >
                    <span className='block font-normal'>
                      Compre por whatsapp
                    </span>
                    <div className='flex gap-1 items-start'>
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
                <hr />
                <li>
                  <div className='flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-100 items-start tracking-wide'>
                    <span className='block font-normal'>
                      Horário de atendimento:
                    </span>
                    <div className='flex gap-1 items-start'>
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
                        <p className='text-nowrap'>
                          Segunda a sexta 9 as 17 horas
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-end items-center lg:gap-5'>
            <Link
              prefetch={false}
              href='/manuais'
              className='flex group items-center'
            >
              <img
                className='h-8'
                src={`${path}/assets/img/nav/manuais.webp`}
              />
              <p className='text-white group-hover:underline hidden leading-5 lg:block'>
                Manuais <span className='block font-semibold'>Técnico</span>
              </p>
            </Link>
            <div className='dropdown dropdown-end'>
              <Link
                prefetch={false}
                href='/carrinho'
                className='btn btn-circle btn-ghost border-2 border-white focus:border-secondary'
              >
                <div className='indicator'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 text-base-100 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <span className='badge badge-sm indicator-item'>
                    {carrinho.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex h-12 justify-center w-full items-center lg:hidden'>
          <div className='w-full'>
            <InputPesquisa />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContainerHeader;
