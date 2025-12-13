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
import generateUrl from '@/utils/generateUrl';
import getProdutos from '@/utils/getProdutos';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { SearchIcon } from 'lucide-react';
import { ButtonGroup } from './ui/button-group';
import { Input } from './ui/input';

const navItens = [
  {
    categoria: 'placa',
    foto: '/imgs/nav/PLACAS.webp',
  },
  {
    categoria: 'motor',
    foto: '/imgs/nav/MOTORES-VENTILADORES.webp',
  },
  {
    categoria: 'compressor',
    foto: '/imgs/nav/COMPRESSORES.webp',
  },
  {
    categoria: 'sensor',
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
        setHidden('hidden');
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
        <div className='flex h-16 items-center justify-between gap-4 max-w-[95rem] mx-auto px-6 md:px-12'>
          <div className='flex-1 flex items-center justify-end gap-3'>
            {/* Mobile menu trigger */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className='group size-8 md:hidden text-card'
                  variant='ghost'
                  size='icon'
                >
                  <svg
                    className='pointer-events-none'
                    width={16}
                    height={16}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 12L20 12'
                      className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
                    />
                    <path
                      d='M4 12H20'
                      className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
                    />
                    <path
                      d='M4 12H20'
                      className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
                    />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='md:hidden translate-x-6'>
                <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categorias.map((categoria) => (
                  <DropdownMenuItem key={`${categoria}-celular`} asChild>
                    <Link href={`/produtos/${categoria}`} className='w-full'>
                      {categoria}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link className='flex gap-3 items-center' href='/'>
              <Image
                src='/imgs/logos/favicon.ico'
                alt='Logo'
                width={40}
                height={40}
                className='border-2 border-secondary p-1.5 rounded-full aspect-square h-full'
              />
              <Image
                src='/imgs/logos/logo.webp'
                alt='Loja do VRF'
                width={180}
                height={21}
                className='h-full'
              />
            </Link>
            <InputEscondeProdutos setSwitchValue={setSwitchValue} />
          </div>
          <ButtonGroup className='w-full max-w-[35%]'>
            <Input
              className='bg-card h-10'
              placeholder='Digite o nome ou código da peça'
            />
            <Button variant='secondary' aria-label='Pesquisar'>
              <SearchIcon />
            </Button>
          </ButtonGroup>
          <div className='flex-1 flex gap-3'>
            <Button className='!px-0' size={'sm'}>
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
            <Button className='!px-0 group' size={'sm'}>
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
            </Button>
            <BotaoCarrinho />
          </div>
        </div>
        {/* Produtos */}
        <div
          className={cn(
            'flex-1 flex items-center justify-center gap-6 w-full bg-card relative',
            switchValue ? '' : hidden
          )}
        >
          {/* Navigation menu */}
          <NavigationMenu viewport={false} className='max-md:hidden'>
            <NavigationMenuList className='gap-0'>
              <NavigationMenuItem className='!static'>
                <NavigationMenuTrigger className='uppercase text-primary text-[0.95rem] font-semibold flex items-center gap-1'>
                  <Image
                    src='/imgs/nav/categoria.webp'
                    alt='Menu Categoria'
                    width={20}
                    height={20}
                    className='h-4 w-fit'
                  />
                  Categorias
                </NavigationMenuTrigger>
                <NavigationMenuContent className='!top-[2.2rem]'>
                  {categorias.map((categoria) => (
                    <NavigationMenuLink
                      className='text-nowrap capitalize'
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
                    <NavigationMenuTrigger className='uppercase text-primary text-[0.95rem] font-semibold flex items-center gap-1'>
                      <Image
                        src={item.foto}
                        alt={item.categoria}
                        width={20}
                        height={20}
                        className='h-6 w-fit'
                      />
                      {item.categoria}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='grid grid-cols-2 gap-2 !w-[50rem] left-1/2 -translate-x-1/2 !top-[2.2rem]'>
                      <div className='grid grid-cols-2 h-fit gap-2'>
                        {itens[
                          item.categoria as keyof typeof itens
                        ]?.subcategorias.map((subcategoria) => (
                          <NavigationMenuLink
                            className='text-nowrap capitalize h-fit'
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
                        className='uppercase text-primary text-[0.95rem] font-semibold flex items-center gap-1'
                        href={`/produtos/${generateUrl(item.categoria)}`}
                      >
                        <Image
                          src={item.foto}
                          alt={item.categoria}
                          width={20}
                          height={20}
                          className='h-6 w-fit'
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
      </header>
      <div className='py-3.5' />
      <div className='py-13' />
    </>
  );
}

// itens[categoria as keyof typeof itens].subcategorias
//                       .length === 0 ? (
//                       <NavigationMenuLink
//                         className='text-nowrap capitalize'
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
//                             className='font-normal w-full justify-between capitalize px-2'
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
//                                 className='font-normal w-full justify-between capitalize px-2 hover:!ring-0'
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
