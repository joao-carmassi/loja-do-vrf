import getProdutos from '@/utils/get-produtos';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import generateUrl from '@/utils/generate-url';
import Image from 'next/image';
import { Separator } from './ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';
import { usePathname } from 'next/navigation';

function MenuMobile(): React.ReactNode {
  const { categorias, subcategorias: itens } = getProdutos;
  const pathname = usePathname();

  return (
    <Sheet key={pathname}>
      <SheetTrigger asChild>
        <Button
          className='group size-10 lg:hidden text-card border border-card'
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
      </SheetTrigger>
      <SheetContent side='left' className='overflow-y-auto'>
        <SheetHeader>
          <SheetTitle hidden>Menu</SheetTitle>
          <div className='flex flex-col gap-5 text-sm'>
            <Link href='/' className='flex gap-2 items-center'>
              <Image
                src='/imgs/logos/favicon.ico'
                alt='Logo'
                width={25}
                height={25}
                className='border-1 border-secondary p-1 rounded-full aspect-square'
              />
              <Image
                src='/imgs/logos/logo.webp'
                alt='Loja do VRF'
                width={120}
                height={14}
                className='invert'
              />
            </Link>
            <Separator />
            <div className='flex flex-col gap-3'>
              <Link
                className='flex items-center gap-2'
                href='/manuais-tecnicos'
              >
                <Image
                  src='/imgs/nav/logoManualCelular.webp'
                  alt='Manuais Técnicos'
                  width={15}
                  height={15}
                />
                Manuais Técnicos
              </Link>
              <Link
                className='flex items-center gap-2'
                href='/manuais-tecnicos'
              >
                <MessageSquareText
                  strokeWidth={1.5}
                  size={18}
                  className='text-[#004fa2]'
                />
                Central de Atendimento
              </Link>
            </div>
            <Separator />
            <div className='flex flex-col gap-3'>
              <h3 className='font-semibold'>Categorias:</h3>
              {categorias.map((categoria, i) => {
                const currentCategoria = itens[categoria as keyof typeof itens];
                return currentCategoria.subcategorias.length === 0 ? (
                  <Link
                    key={categoria + i}
                    href={`/produtos/${generateUrl(categoria)}`}
                    className='capitalize'
                  >
                    {categoria}
                  </Link>
                ) : (
                  <Accordion key={categoria + i} type='single' collapsible>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger className='py-0 capitalize'>
                        {categoria}
                      </AccordionTrigger>
                      <AccordionContent className='pt-3 flex flex-col gap-3'>
                        {currentCategoria.subcategorias.map((subcat, i) => (
                          <Link
                            key={subcat + i}
                            href={`/produtos/${generateUrl(
                              categoria
                            )}?subcategoria=${generateUrl(subcat)}`}
                            className='capitalize'
                          >
                            {subcat}
                          </Link>
                        ))}
                        <Separator />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MenuMobile;
