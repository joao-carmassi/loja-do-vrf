import './cardProduto.css';
import { TProduto } from '@/utils/getProdutos';
import { Card, CardContent, CardHeader } from '../ui/card';
import { H2 } from '../ui/h2';
import Link from 'next/link';
import generateUrl from '@/utils/generateUrl';
import Image from 'next/image';

interface Props {
  produto: TProduto;
}

function CardProduto({ produto }: Props): React.ReactNode {
  return (
    <Link
      prefetch={false}
      className='hover:scale-105 duration-300'
      href={`/produto/${generateUrl(`${produto.nome}-${produto.sku}`)}`}
    >
      <Card className='h-fit' key={produto.id}>
        <CardHeader>
          <Image
            width={214}
            height={214}
            src={`/imgs/produtos/${produto.id}.png`}
            alt={produto.nome}
            className='w-full h-full object-cover object-center aspect-square rounded-md border border-primary'
          />
        </CardHeader>
        <CardContent className='space-y-2'>
          <Image
            height={10}
            width={44}
            className='h-fit w-12'
            alt={`Marca ${produto.marca}`}
            src={`/imgs/marcas/${produto.marca.toUpperCase()}.png`}
          />
          <div>
            <H2 className='!text-base break-words limitaTexto2Linhas'>
              Produto {produto.nome}
            </H2>
            <p className='text-muted-foreground text-sm break-words limitaTexto'>
              sku: {produto.sku}
            </p>
            <p className='text-muted-foreground text-sm break-words limitaTexto'>
              {produto.codigos.join(', ')}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CardProduto;
