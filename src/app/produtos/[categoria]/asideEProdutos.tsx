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
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import generateUrl from '@/utils/generateUrl';
import { IProduto } from '@/utils/getProdutos';
import { FilterIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  subcategorias?: string[];
  marcas: string[];
  categoria?: string;
  produtosFiltrados: IProduto[];
  subcategoria?: string | null;
}

function AsideEProdutos({
  subcategorias,
  marcas,
  categoria,
  produtosFiltrados,
  subcategoria,
}: Props): React.ReactNode {
  const [subcategoriaSelecionada, setSubcategoriaSelecionada] = useState('');
  const [marcaSelecionada, setMarcaSelecionada] = useState('');
  const router = useRouter();

  const handleSubcategoriaChange = (subcategoria: string) => {
    setSubcategoriaSelecionada((prev) =>
      prev === subcategoria ? '' : subcategoria
    );
  };

  const handleMarcaChange = (marca: string) => {
    setMarcaSelecionada((prev) => (prev === marca ? '' : marca));
  };

  const produtosFiltradosFinal = produtosFiltrados.filter((produto) => {
    const matchesSubcategoria = subcategoriaSelecionada
      ? generateUrl(produto.subcategoria) === subcategoriaSelecionada
      : true;
    const matchesMarca = marcaSelecionada
      ? produto.marca === marcaSelecionada
      : true;
    return matchesSubcategoria && matchesMarca;
  });

  useEffect(() => {
    if (subcategoria && categoria && subcategorias) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSubcategoriaSelecionada(subcategoria);
    }
  }, [subcategoria, router, categoria, subcategorias]);

  return (
    <section className='mx-auto max-w-[120rem] p-6 md:pl-0'>
      <div className='flex'>
        <aside className='px-8 min-w-64 space-y-6 sticky top-[5.75rem] h-fit hidden md:block'>
          {subcategorias && subcategorias.length > 1 && (
            <div className='space-y-3'>
              <P className='font-semibold'>Subcategoria:</P>
              <ul className='space-y-4'>
                <li className='flex items-center gap-2'>
                  <Checkbox
                    checked={subcategoriaSelecionada === ''}
                    onCheckedChange={() => handleSubcategoriaChange('')}
                    id='todosSubcategoria'
                  />
                  <Label className='' htmlFor='todosSubcategoria'>
                    Todos
                  </Label>
                </li>
                {subcategorias.map((subcategoria) => {
                  const id = generateUrl(subcategoria);
                  return (
                    <li className='flex items-center gap-2' key={subcategoria}>
                      <Checkbox
                        id={id}
                        checked={subcategoriaSelecionada === id}
                        onCheckedChange={() => handleSubcategoriaChange(id)}
                      />
                      <Label className='capitalize' htmlFor={id}>
                        {subcategoria.toLocaleLowerCase()}
                      </Label>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {marcas.length > 1 && subcategorias && subcategorias.length > 1 && (
            <Separator />
          )}
          <>
            <div className='space-y-3 '>
              <P className='font-semibold'>Marca:</P>
              <ul className='space-y-4'>
                <li className='flex items-center gap-2'>
                  <Checkbox
                    checked={marcaSelecionada === ''}
                    onCheckedChange={() => handleMarcaChange('')}
                    id='todosMarca'
                  />
                  <Label className='' htmlFor='todosMarca'>
                    Todos
                  </Label>
                </li>
                {marcas.map((marca) => (
                  <li className='flex items-center gap-2' key={marca}>
                    <Checkbox
                      id={marca}
                      checked={marcaSelecionada === marca}
                      onCheckedChange={() => handleMarcaChange(marca)}
                    />
                    <Label className='capitalize' htmlFor={marca}>
                      {marca.toLocaleLowerCase()}
                    </Label>
                  </li>
                ))}
              </ul>
            </div>
          </>
        </aside>
        <div className='w-full space-y-3'>
          <Breadcrumb className='col-span-2'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoria}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <H1 className='capitalize hidden'>{categoria}</H1>
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
                    <div className='space-y-6'>
                      {subcategorias && subcategorias.length > 1 && (
                        <div className='space-y-3 '>
                          <P className='font-semibold'>Subcategoria:</P>
                          <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                              <Checkbox
                                checked={subcategoriaSelecionada === ''}
                                onCheckedChange={() =>
                                  handleSubcategoriaChange('')
                                }
                                id='todosSubcategoriaCelular'
                              />
                              <Label
                                className=''
                                htmlFor='todosSubcategoriaCelular'
                              >
                                Todos
                              </Label>
                            </li>
                            {subcategorias.map((subcategoria) => {
                              const id = generateUrl(subcategoria);
                              return (
                                <li
                                  className='flex items-center gap-2'
                                  key={id}
                                >
                                  <Checkbox
                                    id={id + 'Celular'}
                                    checked={subcategoriaSelecionada === id}
                                    onCheckedChange={() =>
                                      handleSubcategoriaChange(id)
                                    }
                                  />
                                  <Label
                                    className='capitalize'
                                    htmlFor={id + 'Celular'}
                                  >
                                    {subcategoria.toLocaleLowerCase()}
                                  </Label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                      {marcas.length > 1 &&
                        subcategorias &&
                        subcategorias.length > 1 && <Separator />}
                      <>
                        <div className='space-y-3 '>
                          <P className='font-semibold'>Marca:</P>
                          <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                              <Checkbox
                                checked={marcaSelecionada === ''}
                                onCheckedChange={() => handleMarcaChange('')}
                                id='todosMarca'
                              />
                              <Label className='' htmlFor='todosMarca'>
                                Todos
                              </Label>
                            </li>
                            {marcas.map((marca) => (
                              <li
                                className='flex items-center gap-2'
                                key={marca}
                              >
                                <Checkbox
                                  id={marca}
                                  checked={marcaSelecionada === marca}
                                  onCheckedChange={() =>
                                    handleMarcaChange(marca)
                                  }
                                />
                                <Label className='capitalize' htmlFor={marca}>
                                  {marca.toLocaleLowerCase()}
                                </Label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {produtosFiltradosFinal.length > 0 ? (
              produtosFiltradosFinal.map((produto) => (
                <CardProduto key={produto.id} produto={produto} />
              ))
            ) : (
              <P className='w-full'>
                Nenhum produto encontrado para os filtros selecionados.
              </P>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AsideEProdutos;
