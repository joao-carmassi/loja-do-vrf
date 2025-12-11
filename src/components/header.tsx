'use client';

import React from 'react';
import Logo from '@/components/logo';
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
import DialogPesquisaProdutos from './botaoPesquisa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import BotaoCarrinho from './botaoCarrinho';
import { ChevronRight } from 'lucide-react';

export default function Header(): React.ReactNode {
  const { categorias, subcategorias: itens } = getProdutos;
  const navItens = ['placa', 'motor', 'compressor', 'sensor'];

  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  return (
    <>
      <header className='border-b w-full fixed top-0 left-0 bg-white z-50'>
        <div className='flex h-16 items-center justify-between gap-4 max-w-[95rem] mx-auto px-6'>
          {/* Left side */}
          <div className='flex items-center gap-2'>
            {/* Mobile menu trigger */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className='group size-8 md:hidden'
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
            {/* Main nav */}
            <div className='flex items-center gap-6'>
              <Link href='/' className='text-primary hover:text-primary/90'>
                <Logo />
              </Link>
              {/* Navigation menu */}
              <NavigationMenu viewport={false} className='max-md:hidden'>
                <NavigationMenuList className='gap-0'>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className='capitalize'>
                      Categorias
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {categorias.map((categoria) =>
                        itens[categoria as keyof typeof itens].subcategorias
                          .length === 0 ? (
                          <NavigationMenuLink
                            className='text-nowrap capitalize'
                            key={`${categoria}-desktop-categorias`}
                            asChild
                          >
                            <Link href={`/produtos/${generateUrl(categoria)}`}>
                              {categoria}
                            </Link>
                          </NavigationMenuLink>
                        ) : (
                          <DropdownMenu
                            key={`${categoria}-dropdown`}
                            open={openDropdown === categoria}
                            onOpenChange={(open) => {
                              if (!open) setOpenDropdown(null);
                            }}
                          >
                            <DropdownMenuTrigger asChild>
                              <Button
                                className='font-normal w-full justify-between capitalize px-2'
                                size={'sm'}
                                variant={'ghost'}
                                onMouseEnter={() => setOpenDropdown(categoria)}
                                onMouseLeave={() => setOpenDropdown(null)}
                                aria-haspopup='menu'
                              >
                                {categoria}{' '}
                                <ChevronRight
                                  className={`${
                                    openDropdown === categoria
                                      ? 'rotate-180'
                                      : ''
                                  } duration-300`}
                                />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align='start'
                              side='right'
                              className='min-w-40'
                              sideOffset={0}
                              onMouseEnter={() => setOpenDropdown(categoria)}
                              onMouseLeave={() => setOpenDropdown(null)}
                            >
                              {itens[
                                categoria as keyof typeof itens
                              ].subcategorias.map((subcat) => (
                                <DropdownMenuItem
                                  key={`${categoria}-${subcat}`}
                                  asChild
                                >
                                  <Button
                                    className='font-normal w-full justify-between capitalize px-2 hover:!ring-0'
                                    size={'sm'}
                                    variant={'ghost'}
                                    asChild
                                  >
                                    <Link
                                      href={`/produtos/${generateUrl(
                                        categoria
                                      )}?subcategoria=${generateUrl(subcat)}`}
                                    >
                                      {subcat}
                                    </Link>
                                  </Button>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )
                      )}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {navItens.map((item) => {
                    return itens[item].subcategorias.length > 0 ? (
                      <NavigationMenuItem key={`${item}-desktop-unicos`}>
                        <NavigationMenuTrigger className='capitalize'>
                          {item}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {itens[item as keyof typeof itens]?.subcategorias.map(
                            (subcategoria) => (
                              <NavigationMenuLink
                                className='text-nowrap capitalize'
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
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={`${item}-desktop-unicos`}>
                        <Button variant='ghost' asChild>
                          <Link
                            className='capitalize'
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
          </div>
          {/* Right side */}
          <div className='flex items-center gap-2'>
            <DialogPesquisaProdutos />
            <BotaoCarrinho />
          </div>
        </div>
      </header>
      <div className='pt-16' />
    </>
  );
}
