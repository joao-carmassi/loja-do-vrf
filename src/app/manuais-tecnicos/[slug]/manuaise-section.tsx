'use client';

import { Separator } from '@/components/ui/separator';
import { IPdf } from '@/interface/IPdf';
import { useEffect, useRef } from 'react';

interface Props {
  pdf: IPdf[];
  marca: string;
}

function ManuaisSection({ pdf, marca }: Props): React.ReactNode {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      refContainer.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 1000);
  }, []);

  return (
    <div
      ref={refContainer}
      className='flex flex-col gap-12 container p-6 md:p-12 md:pt-0 mx-auto max-w-[95rem]'
    >
      <h1 className='w-full text-center text-2xl font-bold md:text-3xl text-primary'>
        Manuais Técnicos - {marca}
      </h1>
      <div className='grid md:grid-cols-2 gap-12'>
        {pdf.some((pdf) => pdf.tipo === 'CONDENSADORA') && (
          <div className='flex flex-col gap-7'>
            <h2 className='text-xl font-semibold'>Unidade Condensadora</h2>
            <div>
              {pdf
                .filter((pdf) => pdf.tipo === 'CONDENSADORA')
                .map((pdf, idx) => (
                  <div key={idx}>
                    <Separator />
                    <a
                      href={`/pdfs/${pdf.documento}.pdf`}
                      download={`${pdf.documento}.pdf`}
                      className='my-2.5 grid gap-2.5 text-sm grid-cols-2 hover:underline'
                    >
                      <p>{pdf.documento}</p>
                      <p className='text-muted-foreground'>{pdf.modelo}</p>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        )}
        {pdf.some((pdf) => pdf.tipo === 'EVAPORADORA') && (
          <div className='flex flex-col gap-7'>
            <h2 className='text-xl font-semibold'>Unidade Evaporadora</h2>
            <div>
              {pdf
                .filter((pdf) => pdf.tipo === 'EVAPORADORA')
                .map((pdf, idx) => (
                  <div key={idx}>
                    <Separator />
                    <a
                      href={`/pdfs/${pdf.documento}.pdf`}
                      download={`${pdf.documento}.pdf`}
                      className='my-2.5 grid gap-2.5 text-sm grid-cols-2 hover:underline'
                    >
                      <p>{pdf.documento}</p>
                      <p className='text-muted-foreground'>{pdf.modelo}</p>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManuaisSection;
