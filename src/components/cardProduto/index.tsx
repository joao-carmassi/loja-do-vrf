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
      className='hover:scale-105 duration-300'
      href={`/produto/${generateUrl(`${produto.nome}-${produto.sku}`)}`}
    >
      <Card className='h-fit' key={produto.id}>
        <CardHeader>
          <Image
            width={214}
            height={214}
            src='https://picsum.photos/200'
            alt=''
            className='w-full h-full object-cover object-center aspect-square rounded-md border border-secondary'
          />
        </CardHeader>
        <CardContent className=''>
          <p>{produto.marca}</p>
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
