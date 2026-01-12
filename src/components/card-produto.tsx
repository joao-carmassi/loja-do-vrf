import { IProduto } from '@/utils/get-produtos';
import Link from 'next/link';
import generateUrl from '@/utils/generate-url';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { H2 } from './ui/h2';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface Props {
  produto: IProduto;
  cardOnMenu?: boolean;
  ref?: React.Ref<HTMLDivElement> | undefined;
}

function CardProduto({ produto, cardOnMenu, ref }: Props): React.ReactNode {
  return (
    <div
      ref={ref}
      className={`lg:hover:scale-105 duration-300 ${
        !cardOnMenu ? 'lg:p-3' : ''
      }`}
    >
      <Card
        className={cn(
          'h-fit rounded-none',
          !cardOnMenu && 'border-none shadow-md inset-shadow-2xs'
        )}
        key={produto.id}
      >
        <Link
          className='flex flex-col gap-2'
          prefetch={false}
          href={`/produto/${generateUrl(`${produto.nome}-${produto.sku}`)}`}
        >
          <CardHeader className='md:px-8'>
            <Image
              width={214}
              height={214}
              src={`/imgs/produtos/${produto.id}.png`}
              alt={produto.nome}
              priority
              loading='eager'
              className='w-full h-full object-contain object-center aspect-square rounded-md border border-primary'
            />
          </CardHeader>
          <CardContent className='space-y-2 md:px-8'>
            <div>
              <H2 className='!text-base md:!text-lg !text-foreground !font-bold break-words line-clamp-2'>
                {produto.nome}
              </H2>
              <p className='text-muted-foreground text-sm break-words line-clamp-1'>
                sku: {produto.sku}
              </p>
              <p className='text-muted-foreground text-sm break-words line-clamp-1'>
                {produto.codigos.join(', ')}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className='grid md:grid-cols-2 gap-6 md:place-items-center mt-3'>
              <Image
                height={46}
                width={100}
                className='h-fit w-1/2 md:w-full'
                alt={`Marca ${produto.marca}`}
                src={`/imgs/marcas/${produto.marca}.png`}
              />
              <Button
                size='sm'
                variant='success'
                className='!py-5 w-full text-xs'
              >
                Consultar
              </Button>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}

export default CardProduto;
