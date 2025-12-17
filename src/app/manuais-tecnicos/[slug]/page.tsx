import React from 'react';

import { Separator } from '@/components/ui/separator';
import getPdf from '@/utils/get-pdfs';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const Manuais = async ({ params }: Props) => {
  const { slug } = await params;
  const { pdfs } = getPdf();

  const listaPdfs = pdfs[slug.toUpperCase()];

  return (
    <section className='min-h-container-mobile lg:min-h-container'>
      <Image
        width={1860}
        height={650}
        src={`/imgs/manuais/capas/${slug.toUpperCase()}.png`}
        alt={slug.replace(/-/g, ' ')}
        className='h-full w-full object-contain object-center'
      />
      <div className='container p-6 md:p-12 mx-auto max-w-[95rem]'>
        <div className='flex flex-col gap-12'>
          <Breadcrumb className='col-span-2'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/manuais-tecnicos'>
                  Manuais Técnicos
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{slug.replace(/-/g, ' ')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className='w-full text-center text-2xl font-medium md:text-3xl text-primary'>
            Manuais Técnicos
          </h1>
          {listaPdfs.some((pdf) => pdf.tipo === 'CONDENSADORA') && (
            <div className='flex flex-col gap-7'>
              <h2 className='text-xl uppercase'>/ Unidade Condensadora</h2>
              <div>
                {listaPdfs
                  .filter((pdf) => pdf.tipo === 'EVAPORADORA')
                  .map((pdf, idx) => (
                    <React.Fragment key={idx}>
                      <Separator />
                      <a
                        href={`/pdfs/${pdf.documento}.pdf`}
                        download={`${pdf.documento}.pdf`}
                        className='my-2.5 grid gap-2.5 text-sm sm:grid-cols-3 hover:underline'
                      >
                        <p className='text-muted-foreground'>{pdf.marca}</p>
                        <p>{pdf.documento}</p>
                        <p className='text-muted-foreground'>{pdf.modelo}</p>
                      </a>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          )}
          {listaPdfs.some((pdf) => pdf.tipo === 'EVAPORADORA') && (
            <div className='flex flex-col gap-7'>
              <h2 className='text-xl uppercase'>/ Unidade Evaporadora</h2>
              <div>
                {listaPdfs
                  .filter((pdf) => pdf.tipo === 'EVAPORADORA')
                  .map((pdf, idx) => (
                    <React.Fragment key={idx}>
                      <Separator />
                      <a
                        href={`/pdfs/${pdf.documento}.pdf`}
                        download={`${pdf.documento}.pdf`}
                        className='my-2.5 grid gap-2.5 text-sm sm:grid-cols-3 hover:underline'
                      >
                        <p className='text-muted-foreground'>{pdf.marca}</p>
                        <p>{pdf.documento}</p>
                        <p className='text-muted-foreground'>{pdf.modelo}</p>
                      </a>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Manuais;
