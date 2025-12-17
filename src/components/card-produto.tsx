import { IProduto } from '@/utils/get-produtos';
import Link from 'next/link';
import generateUrl from '@/utils/generate-url';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';
import { H2 } from './ui/h2';
import BotaoComprarCarrinho from './ui/botao-comprar-card';

interface Props {
  produto: IProduto;
  cardOnMenu?: boolean;
}

function CardProduto({ produto, cardOnMenu }: Props): React.ReactNode {
  return (
    <div
      className={`hover:scale-105 duration-300 ${!cardOnMenu ? 'md:p-3' : ''}`}
    >
      <Card className='h-fit relative group' key={produto.id}>
        <Link
          prefetch={false}
          href={`/produto/${generateUrl(`${produto.nome}-${produto.sku}`)}`}
        >
          <CardHeader>
            <Image
              width={214}
              height={214}
              src={`/imgs/produtos/${produto.id}.png`}
              alt={produto.nome}
              className='w-full h-full object-contain object-center aspect-square rounded-md border border-primary'
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
              <H2 className='!text-base break-words line-clamp-2'>
                Produto {produto.nome}
              </H2>
              <p className='text-muted-foreground text-sm break-words line-clamp-1'>
                sku: {produto.sku}
              </p>
              <p className='text-muted-foreground text-sm break-words line-clamp-1'>
                {produto.codigos.join(', ')}
              </p>
            </div>
          </CardContent>
        </Link>
        {!cardOnMenu && (
          <BotaoComprarCarrinho produto={produto}>Comprar</BotaoComprarCarrinho>
        )}
      </Card>
    </div>
  );
}

export default CardProduto;
