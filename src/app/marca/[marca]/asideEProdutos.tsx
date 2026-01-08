'use client';
import CardProduto from '@/components/card-produto';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { H1 } from '@/components/ui/h1';
import { Label } from '@/components/ui/label';
import { P } from '@/components/ui/p';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IProduto } from '@/utils/get-produtos';
import { itemsPorPagina } from '@/utils/items-per-category';
import { FilterIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  categorias: string[];
  marca: string;
  produtos: IProduto[];
}

function AsideEProdutos({
  categorias,
  marca,
  produtos,
}: Props): React.ReactNode {
  const [selectedCategorias, setSelectedCategorias] = useState<string>('');
  const refUltimoItem = useRef<HTMLDivElement | null>(null);
  const [quantidadeItems, setQuantidadeItems] =
    useState<number>(itemsPorPagina);

  const produtosFiltrados = selectedCategorias
    ? produtos.filter((produto) =>
        produto.categoria.includes(selectedCategorias)
      )
    : produtos;

  useEffect(() => {
    if (!refUltimoItem.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          quantidadeItems < produtosFiltrados.length
        ) {
          setQuantidadeItems((prev) => prev + itemsPorPagina);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(refUltimoItem.current);
    return () => observer.disconnect();
  }, [produtosFiltrados.length, quantidadeItems]);

  return (
    <section className='mx-auto max-w-[120rem] p-6 md:pl-0 min-h-container-mobile lg:min-h-container'>
      <div className='flex gap-3'>
        <aside className='px-8 min-w-56 sticky top-[5.75rem] h-fit hidden md:block space-y-6 overflow-y-auto max-h-container pb-12'>
          <div className='space-y-3 '>
            <P className='font-semibold'>Categoria:</P>
            <ul className='space-y-4'>
              <li className='flex items-center gap-2'>
                <Checkbox
                  id='todas'
                  checked={selectedCategorias === ''}
                  onCheckedChange={() => setSelectedCategorias('')}
                />
                <Label htmlFor='todas'>Todas</Label>
              </li>
              {categorias.map((categoria) => (
                <li key={categoria} className='flex items-center gap-2'>
                  <Checkbox
                    id={categoria}
                    checked={selectedCategorias === categoria}
                    onCheckedChange={() =>
                      setSelectedCategorias((prev) =>
                        prev === categoria ? '' : categoria
                      )
                    }
                  />
                  <Label htmlFor={categoria}>{categoria}</Label>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className='w-full space-y-3'>
          <Breadcrumb className='col-span-2'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{marca}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <H1 className='capitalize p-4 bg-secondary w-fit rounded-lg hidden'>
            {marca}
          </H1>
          <Image
            src={`/imgs/marcas/${marca.toUpperCase()}.png`}
            alt={marca}
            width={220}
            height={90}
            className='w-36 md:w-56'
          />
          <div className='flex justify-end'>
            <Sheet>
              <SheetTrigger asChild>
                <Button className='md:hidden' variant='outline' size={'sm'}>
                  <FilterIcon /> Filtros
                </Button>
              </SheetTrigger>
              <SheetContent className='w-fit pr-10 overflow-auto' side='left'>
                <SheetHeader>
                  <SheetTitle hidden>Filtros</SheetTitle>
                  <SheetDescription asChild>
                    <div className='space-y-3 '>
                      <P className='font-semibold'>Categoria:</P>
                      <ul className='space-y-4'>
                        <li className='flex items-center gap-2'>
                          <Checkbox
                            id='todasCelular'
                            checked={selectedCategorias === ''}
                            onCheckedChange={() => setSelectedCategorias('')}
                          />
                          <Label className='' htmlFor='todasCelular'>
                            Todas
                          </Label>
                        </li>
                        {categorias.map((categoria) => (
                          <li
                            key={categoria + 'Celular'}
                            className='flex items-center gap-2'
                          >
                            <Checkbox
                              id={categoria + 'Celular'}
                              checked={selectedCategorias === categoria}
                              onCheckedChange={() =>
                                setSelectedCategorias((prev) =>
                                  prev === categoria ? '' : categoria
                                )
                              }
                            />
                            <Label htmlFor={categoria + 'Celular'}>
                              {categoria}
                            </Label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {produtosFiltrados.slice(0, quantidadeItems).map((produto, i) => {
              const ultimoItem = i === quantidadeItems - 1;
              return (
                <CardProduto
                  ref={ultimoItem ? refUltimoItem : undefined}
                  key={produto.id}
                  produto={produto}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AsideEProdutos;
