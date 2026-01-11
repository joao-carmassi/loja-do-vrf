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
import BotaoCarrinho from './botaoCarrinho';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import CardProduto from './card-produto';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import shuffleArray from '@/utils/shuffle-array';
import itensPorCarrosel from '@/utils/items-per-category';
import InputEscondeProdutos from './InputEscondeNav';
import MenuMobile from './menu-mobile';
import InputPesquisaProduto from './input-pesquisa';
import { Separator } from './ui/separator';

const navItens = ['Placas', 'Motores', 'Compressores', 'Sensores'];

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
        <div className='flex h-16 items-center justify-between gap-4 max-w-[95rem] mx-auto px-6 lg:px-12'>
          <div className='flex-1 flex items-center lg:justify-start gap-3'>
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
          <div className='flex-1 flex items-center justify-end lg:justify-end gap-3'>
            <div className='flex-1'>
              <InputEscondeProdutos setSwitchValue={setSwitchValue} />
            </div>
            <div className='flex flex-1 items-center justify-between'>
              <Button
                className='!px-0 group hidden lg:flex'
                size={'sm'}
                asChild
              >
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
        </div>
        <Separator
          className={cn(
            'bg-secondary w-full hidden lg:block',
            switchValue ? '' : hidden
          )}
        />
        <div className='max-w-[95rem] px-6 lg:px-12 mx-auto hidden lg:block'></div>
        {/* Produtos */}
        <div
          className={cn(
            'flex-1 items-center justify-center gap-6 w-full relative hidden lg:flex bg-primary py-1',
            switchValue ? '' : hidden
          )}
        >
          {/* Navigation menu */}
          <NavigationMenu viewport={false} className='max-md:hidden'>
            <NavigationMenuList className='gap-0'>
              <NavigationMenuItem className='!static'>
                <NavigationMenuTrigger className='bg-primary text-card text-[0.95rem] font-semibold flex items-center gap-1'>
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
                return itens[item].subcategorias.length > 0 ? (
                  <NavigationMenuItem
                    className='!static'
                    key={`${item}-desktop-unicos`}
                  >
                    <NavigationMenuTrigger className='bg-primary text-card text-[0.95rem] font-semibold flex items-center gap-1'>
                      {item}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className='grid grid-cols-2 gap-2 !w-[50rem] left-1/2 -translate-x-1/2 !top-[2.2rem]'>
                      <div className='grid grid-cols-2 h-fit gap-2'>
                        {itens[item as keyof typeof itens]?.subcategorias.map(
                          (subcategoria) => (
                            <NavigationMenuLink
                              className='text-nowrap h-fit'
                              key={`${item}-${subcategoria}-desktop-unicos`}
                              asChild
                            >
                              <Link
                                href={`/produtos/${generateUrl(
                                  item
                                )}?subcategoria=${generateUrl(subcategoria)}`}
                              >
                                {subcategoria}
                              </Link>
                            </NavigationMenuLink>
                          )
                        )}
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
                            skipSnaps: true,
                          }}
                        >
                          <CarouselContent>
                            {shuffleArray(produtos)
                              .filter(
                                (produto) =>
                                  produto.categoria.toLowerCase() ===
                                  item.toLowerCase()
                              )
                              .slice(0, itensPorCarrosel)
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
                    <Button size='sm' variant='ghost' asChild>
                      <Link
                        className='text-card text-[0.95rem] font-semibold flex items-center gap-1'
                        href={`/produtos/${generateUrl(item)}`}
                      >
                        {item}
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
      <div className='py-16 lg:py-13 bg-primary' />
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
