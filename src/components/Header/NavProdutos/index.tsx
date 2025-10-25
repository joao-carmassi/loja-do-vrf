'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import slugify from 'slugify';
import SwiperNavProdutos from './SwiperNavProdutos';
import getProdutos from '@/utils/getProdutos';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { mudaHidden } from '@/store/slices/abreNav';

interface Props {
  categorias: string[];
  subcategorias: { [categoria: string]: string[] };
}

const NavProdutos = ({ categorias, subcategorias }: Props) => {
  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;
  const dispatch = useDispatch();
  const abreNav = useSelector((state: RootState) => state.abreNav);

  const produtos = getProdutos.porCategoria();

  const itemsNav = [
    {
      nome: 'PLACA',
      link: 'placa',
      foto: 'PLACAS',
    },
    {
      nome: 'MOTOR VENTILADOR',
      link: 'motor',
      foto: 'MOTORES VENTILADORES',
    },
    {
      nome: 'COMPRESSOR',
      link: 'compressor',
      foto: 'COMPRESSORES',
    },
    {
      nome: 'SENSOR',
      link: 'sensor',
      foto: 'SENSORES',
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        dispatch(mudaHidden(false));
      } else {
        dispatch(mudaHidden(true));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const categoriaNav = document.querySelectorAll('.categoriaNav');
    const ContainerCategoriaNav = document.querySelector(
      '.ContainerCategoriaNav'
    ) as HTMLElement;
    const FilhoCategoriaNav = document.querySelectorAll('.FilhoCategoriaNav');

    categoriaNav.forEach((categoria) => {
      categoria.addEventListener('mouseover', (e) => {
        const pai = e.currentTarget as HTMLDivElement;
        const filho = pai.querySelector(
          '.FilhoCategoriaNav'
        ) as HTMLElement | null;

        FilhoCategoriaNav.forEach((filhoNav) => {
          if (filhoNav.id === filho?.id || filho === null) {
            filhoNav.classList.add('hidden');
          }
        });

        if (filho) {
          filho.classList.remove('hidden');
        }
      });
    });
    ContainerCategoriaNav.addEventListener('mouseleave', () => {
      FilhoCategoriaNav.forEach((filho) => {
        filho.classList.add('hidden');
      });
    });
  }, []);

  return (
    <div className='hidden md:block'>
      <nav
        className={`bg-base-100 shadow-sm text-white ContainerCategoriaNav py-1 ${
          abreNav.hidden ? 'hidden' : ''
        } ${abreNav.block ? 'lg:block' : ''}`}
        id='navBar'
      >
        <div className='relative'>
          <ul className='flex justify-center text-secondary gap-10 items-center'>
            <li className='categoriaNav relative' id='categoria'>
              <div>
                <p className='flex justify-center font-semibold gap-1 items-center tracking-wide'>
                  <img
                    className='h-4 inline'
                    src={`${path}/assets/img/nav/categoria.webp`}
                  />
                  CATEGORIAS
                </p>
                <div
                  id='filhoNav'
                  className='bg-white shadow-md absolute FilhoCategoriaNav right-1/2 top-[1.7rem] translate-x-1/2 z-10 hidden'
                >
                  <ul className='flex flex-col h-fit py-2 relative'>
                    {categorias.map((categoria) => (
                      <li className='categoriaNav' key={categoria}>
                        <Link
                          prefetch={false}
                          href={`/produtos/${slugify(categoria, {
                            strict: true,
                            lower: true,
                          })}`}
                        >
                          <p className='bg-base-100 text-nowrap font-semibold link-hover px-5 py-2'>
                            {categoria}
                          </p>
                        </Link>
                        <div
                          id='filhoCategoria'
                          className='bg-base-100 absolute FilhoCategoriaNav left-[12.8rem] top-0 '
                        >
                          {subcategorias[categoria].length > 0 && (
                            <div className='h-[26rem] shadow-md px-5 py-3'>
                              <Link
                                prefetch={false}
                                href={`/produtos/${slugify(categoria, {
                                  strict: true,
                                  lower: true,
                                })}`}
                                className='text-lg text-nowrap font-semibold'
                              >
                                <h3 className='pb-3'>{categoria}:</h3>
                              </Link>
                              <hr className='border-secondary pb-3' />
                              <ul className='grid grid-flow-col grid-rows-7 gap-x-16 gap-y-3'>
                                {subcategorias[categoria].map(
                                  (subcategoria, index) => (
                                    <li className='w-fit' key={index}>
                                      <Link
                                        prefetch={false}
                                        href={`/produtos/${slugify(categoria, {
                                          strict: true,
                                          lower: true,
                                        })}?subproduto=${subcategoria}`}
                                        className='text-nowrap font-semibold link-hover'
                                      >
                                        {subcategoria}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {itemsNav.map((item) => (
              <li className='categoriaNav' key={item.nome}>
                <Link
                  prefetch={false}
                  href={`/produtos/${slugify(item.link, {
                    strict: true,
                    lower: true,
                  })}`}
                  className='flex justify-center font-semibold gap-1 items-center tracking-wide'
                >
                  <img
                    className='h-5 inline'
                    src={`${path}/assets/img/nav/${item.foto}.webp`}
                  />
                  {item.nome}
                </Link>
                {['PLACA', 'SENSOR'].includes(item.nome) ? (
                  <div
                    id='filhoNav'
                    className='bg-base-100 text-secondary w-[55vw] absolute FilhoCategoriaNav min-w-[55rem] right-1/2 top-[1.79rem] translate-x-1/2 z-10 hidden'
                  >
                    <div className='flex h-[21rem] justify-between shadow-md'>
                      <ul className='grid grid-flow-col grid-rows-7 p-5 gap-x-9 gap-y-5'>
                        {subcategorias[item.nome].map((subcategoria) => (
                          <li
                            className='flex h-fit justify-center items-center'
                            key={subcategoria}
                          >
                            <Link
                              prefetch={false}
                              href={`/produtos/${slugify(item.nome, {
                                lower: true,
                                strict: true,
                              })}?subproduto=${subcategoria}`}
                              className='text-nowrap font-semibold link-hover'
                            >
                              {subcategoria}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className='flex justify-center w-[30rem] items-center'>
                        <div className='flex justify-center w-[29rem] items-center px-10 relative'>
                          <SwiperNavProdutos produtos={produtos[item.nome]} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavProdutos;
