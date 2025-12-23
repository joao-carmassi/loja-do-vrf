'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import generateUrl from '@/utils/generate-url';
import getProdutos from '@/utils/get-produtos';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import BotaoCarrinho from './botaoCarrinho';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import CardProduto from './card-produto';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import BannerPix from './banner-pix';
import { cn } from '@/lib/utils';
import shuffleArray from '@/utils/shuffle-array';
import itemsPerCategory from '@/utils/items-per-category';
import InputEscondeProdutos from './InputEscondeNav';
import MenuContato from './menu-contato';
import MenuMobile from './menu-mobile';
import InputPesquisaProduto from './input-pesquisa';

const navItens = [
  {
    categoria: 'Placas',
    foto: '/imgs/nav/PLACAS.webp',
  },
  {
    categoria: 'Motores',
    foto: '/imgs/nav/MOTORES-VENTILADORES.webp',
  },
  {
    categoria: 'Compressores',
    foto: '/imgs/nav/COMPRESSORES.webp',
  },
  {
    categoria: 'Sensores',
    foto: '/imgs/nav/SENSORES.webp',
  },
];

export default function Header(): React.ReactNode {
  const { categorias, subcategorias: itens, produtos } = getProdutos;
  const [hidden, setHidden] = useState<string>('');
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  useEffect(() => {
    const scrolled = () => window.scrollY > 0;
    const onScroll = () => {
      if (scrolled()) {
        setHidden('lg:hidden');
      } else {
        setHidden('');
      }
    };
    onScroll();
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  // const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <>
      <header className='w-full fixed top-0 z-50 bg-primary'>
        <BannerPix />
        <div className='flex h-16 items-center justify-between gap-4 max-w-[95rem] mx-auto px-6 lg:px-12'>
          <div className='flex-1 flex items-center lg:justify-end gap-3'>
            {/* Mobile menu */}
            <MenuMobile />
            <Link className='flex gap-3 items-center' href='/'>
              <Image
                src='/imgs/logos/favicon.ico'
                alt='Logo'
                width={40}
                height={40}
                className='border-2 border-secondary p-1.5 rounded-full aspect-square h-full hidden lg:block'
              />
              <Image
                src='/imgs/logos/logo.webp'
                alt='Loja do VRF'
                width={180}
                height={21}
                className='h-full hidden lg:block'
              />
            </Link>
            <InputEscondeProdutos setSwitchValue={setSwitchValue} />
          </div>
          <div className='w-full lg:max-w-[35%]'>
            <InputPesquisaProduto />
            <Link aria-label='Homepage' href='/'>
              <Image
                src='/imgs/logos/logo.webp'
                alt='Loja do VRF'
                width={500}
                height={60}
                className='h-full mx-auto lg:hidden'
              />
            </Link>
          </div>
          <div className='flex-1 flex justify-end lg:justify-start gap-3'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='!px-0 hidden lg:flex' size={'sm'}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    className='text-white !size-7'
                  >
                    <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4'></path>
                  </svg>
                  <div>
                    <p className='text-start text-xs'>Contato</p>
                    <p className='font-semibold text-xs'>(11) 96918-9244</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='gap-0 p-0'>
                <DropdownMenuItem className='p-0'>
                  <MenuContato.Email />
                </DropdownMenuItem>
                <DropdownMenuSeparator className='my-0' />
                <DropdownMenuItem className='p-0'>
                  <MenuContato.Whatsapp />
                </DropdownMenuItem>
                <DropdownMenuSeparator className='my-0' />
                <DropdownMenuItem className='p-0'>
                  <MenuContato.HorarioAtendimento />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className='!px-0 group hidden lg:flex' size={'sm'} asChild>
              <Link href='/manuais-tecnicos'>
                <Image
                  src='/imgs/nav/manuais.webp'
                  alt='Manuais Técnicos'
                  width={33}
                  height={33}
                />
                <div>
                  <p className='text-start text-xs group-hover:underline'>
                    Manuais
                  </p>
                  <p className='font-semibold text-xs group-hover:underline'>
                    Técnicos
                  </p>
                </div>
              </Link>
            </Button>
            <BotaoCarrinho />
          </div>
        </div>
        {/* Produtos */}
        <div
          className={cn(
            'flex-1 items-center justify-center gap-6 w-full bg-card relative hidden lg:flex',
            switchValue ? '' : hidden
          )}
        >
          {/* Navigation menu */}
          <NavigationMenu viewport={false} className='max-md:hidden'>
            <NavigationMenuList className='gap-0'>
              <NavigationMenuItem className='!static'>
                <NavigationMenuTrigger className='text-primary text-[0.95rem] font-semibold flex items-center gap-1'>
                  <Image
                    src='/imgs/nav/categoria.webp'
                    alt='Menu Categoria'
                    width={20}
                    height={20}
                    className='h-4 w-fit'
                    aria-hidden
                  />
                  Categorias
                </NavigationMenuTrigger>
                <NavigationMenuContent className='!top-[2.2rem]'>
                  {categorias.map((categoria) => (
                    <NavigationMenuLink
                      className='text-nowrap'
                      key={`${categoria}-desktop-categorias`}
                      asChild
                    >
                      <Link href={`/produtos/${generateUrl(categoria)}`}>
                        {categoria}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navItens.map((item) => {
                return itens[item.categoria].subcategorias.length > 0 ? (
                  <NavigationMenuItem
                    className='!static'
                    key={`${item.categoria}-desktop-unicos`}
                  >
                    <NavigationMenuTrigger className='text-primary text-[0.95rem] font-semibold flex items-center gap-1'>
                      <Image
                        src={item.foto}
                        alt={item.categoria}
                        width={20}
                        height={20}
                        className='h-6 w-fit'
                        aria-hidden
                      />
                      {item.categoria}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='grid grid-cols-2 gap-2 !w-[50rem] left-1/2 -translate-x-1/2 !top-[2.2rem]'>
                      <div className='grid grid-cols-2 h-fit gap-2'>
                        {itens[
                          item.categoria as keyof typeof itens
                        ]?.subcategorias.map((subcategoria) => (
                          <NavigationMenuLink
                            className='text-nowrap h-fit'
                            key={`${item.categoria}-${subcategoria}-desktop-unicos`}
                            asChild
                          >
                            <Link
                              href={`/produtos/${generateUrl(
                                item.categoria
                              )}?subcategoria=${generateUrl(subcategoria)}`}
                            >
                              {subcategoria}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className='w-full'>
                        <Carousel
                          className='w-full'
                          plugins={[
                            Autoplay({
                              delay: 3000,
                            }),
                          ]}
                          opts={{
                            align: 'start',
                            loop: true,
                          }}
                        >
                          <CarouselContent>
                            {shuffleArray(produtos)
                              .filter(
                                (produto) =>
                                  produto.categoria.toLowerCase() ===
                                  item.categoria.toLowerCase()
                              )
                              .slice(0, itemsPerCategory)
                              .map((produto, i) => (
                                <CarouselItem className='basis-1/2' key={i}>
                                  <CardProduto produto={produto} cardOnMenu />
                                </CarouselItem>
                              ))
                              .slice(0, 10)}
                          </CarouselContent>
                        </Carousel>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={`${item}-desktop-unicos`}>
                    <Button variant='ghost' asChild>
                      <Link
                        className='text-primary text-[0.95rem] font-semibold flex items-center gap-1'
                        href={`/produtos/${generateUrl(item.categoria)}`}
                      >
                        <Image
                          src={item.foto}
                          alt={item.categoria}
                          width={20}
                          height={20}
                          className='h-6 w-fit'
                          aria-hidden
                        />
                        {item.categoria}
                      </Link>
                    </Button>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='bg-primary w-full lg:hidden px-6 py-3'>
          <InputPesquisaProduto mobile />
        </div>
      </header>
      <div className='py-3.5 hidden lg:block' />
      <div className='py-16 lg:py-13' />
    </>
  );
}

// itens[categoria as keyof typeof itens].subcategorias
//                       .length === 0 ? (
//                       <NavigationMenuLink
//                         className='text-nowrap'
//                         key={`${categoria}-desktop-categorias`}
//                         asChild
//                       >
//                         <Link href={`/produtos/${generateUrl(categoria)}`}>
//                           {categoria}
//                         </Link>
//                       </NavigationMenuLink>
//                     ) : (
//                       <DropdownMenu
//                         key={`${categoria}-dropdown`}
//                         open={openDropdown === categoria}
//                         onOpenChange={(open) => {
//                           if (!open) setOpenDropdown(null);
//                         }}
//                       >
//                         <DropdownMenuTrigger asChild>
//                           <Button
//                             className='font-normal w-full justify-between px-2'
//                             size={'sm'}
//                             variant={'ghost'}
//                             onMouseEnter={() => setOpenDropdown(categoria)}
//                             onMouseLeave={() => setOpenDropdown(null)}
//                             aria-haspopup='menu'
//                           >
//                             {categoria}{' '}
//                             <ChevronRight
//                               className={`${
//                                 openDropdown === categoria ? 'rotate-180' : ''
//                               } duration-300`}
//                             />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent
//                           align='start'
//                           side='right'
//                           className='min-w-40'
//                           sideOffset={0}
//                           onMouseEnter={() => setOpenDropdown(categoria)}
//                           onMouseLeave={() => setOpenDropdown(null)}
//                         >
//                           {itens[
//                             categoria as keyof typeof itens
//                           ].subcategorias.map((subcat) => (
//                             <DropdownMenuItem
//                               key={`${categoria}-${subcat}`}
//                               asChild
//                             >
//                               <Button
//                                 className='font-normal w-full justify-between px-2 hover:!ring-0'
//                                 size={'sm'}
//                                 variant={'ghost'}
//                                 asChild
//                               >
//                                 <Link
//                                   href={`/produtos/${generateUrl(
//                                     categoria
//                                   )}?subcategoria=${generateUrl(subcat)}`}
//                                 >
//                                   {subcat}
//                                 </Link>
//                               </Button>
//                             </DropdownMenuItem>
//                           ))}
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     )
