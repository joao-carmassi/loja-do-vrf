import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import generateUrl from '@/utils/generate-url';
import getPdf from '@/utils/get-pdfs';
import Image from 'next/image';
import Link from 'next/link';

const ManuaisTecnicos = () => {
  const { marcas } = getPdf();

  return (
    <section className='p-6 md:p-12 min-h-container-mobile lg:min-h-container mx-auto max-w-[95rem]'>
      <div className=' space-y-6'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Manuais Técnicos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className='w-full text-center text-2xl font-medium md:text-start md:text-3xl text-primary'>
          Escolha o fabricante:
        </h1>
        <div className='grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3'>
          {marcas.map((marca) => (
            <Link
              className='drop-shadow-lg hover:scale-105 duration-300'
              key={marca}
              href={`/manuais-tecnicos/${generateUrl(marca)}`}
            >
              <Card>
                <CardHeader>
                  <Image
                    width={194}
                    height={42}
                    src={`/imgs/marcas/${marca}.png`}
                    alt={marca}
                    className='h-10 w-fit mx-auto'
                  />
                </CardHeader>
                <CardContent className='space-y-3'>
                  <Image
                    width={424}
                    height={283}
                    src={`/imgs/manuais/icons/${marca}.png`}
                    alt={marca}
                    className='aspect-3/2 h-full w-full object-contain object-center rounded-sm border border-border'
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManuaisTecnicos;
