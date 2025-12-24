import CardProduto from '@/components/card-produto';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H2 } from '@/components/ui/h2';
import { Separator } from '@/components/ui/separator';
import getProdutos from '@/utils/get-produtos';
import itensPorCarrosel from '@/utils/items-per-category';
import shuffleArray from '@/utils/shuffle-array';
import Image from 'next/image';

const marcasPermitidas = ['midea', 'toshiba'];
const produtosPermitidos = ['compressores'];

const MostraProdutoMarcaHome = () => {
  const { produtos } = getProdutos;

  return (
    <section className='space-y-3 md:space-y-12'>
      {produtosPermitidos.map((produtoPermitido) => (
        <div
          key={produtoPermitido}
          className='mx-auto max-w-[95rem] px-6 md:px-12 border-b border-primary md:border-b-0 last:border-b-0'
        >
          <div className='md:bg-accent p-3 md:p-6 md:px-15 md:rounded-md space-y-6 md:space-y-9 '>
            <div className='flex items-center justify-center flex-col space-y-3 capitalize'>
              <H2 className='!text-3xl md:!text-4xl !text-foreground !font-bold'>
                {produtoPermitido}
              </H2>
              <Separator
                className='bg-primary max-w-20 pt-1'
                orientation='horizontal'
              />
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                skipSnaps: true,
              }}
            >
              <CarouselContent>
                {shuffleArray(produtos)
                  .filter(
                    (produto) =>
                      produto.categoria.toLowerCase() === produtoPermitido
                  )
                  .slice(0, itensPorCarrosel)
                  .map((produto, i) => (
                    <CarouselItem
                      className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                      key={i}
                    >
                      <CardProduto produto={produto} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className='-left-5 md:-left-12 text-primary' />
              <CarouselNext className='-right-5 md:-right-12 text-primary' />
            </Carousel>
          </div>
        </div>
      ))}
      {marcasPermitidas.map((marca) => (
        <div
          key={marca}
          className='mx-auto max-w-[95rem] px-6 md:px-12 border-b md:border-b-0 border-primary last:border-b-0'
        >
          <div className='md:bg-accent p-3 md:p-6 md:px-15 rounded-md space-y-6 md:space-y-9'>
            <div className='flex items-center justify-center flex-col space-y-3'>
              <Image
                height={50}
                width={250}
                alt={`Marca ${marca}`}
                src={`/imgs/marcas/${marca.toUpperCase()}.png`}
                className='w-32 md:w-56 h-fit'
              />
              <Separator
                className='bg-primary max-w-20 pt-1'
                orientation='horizontal'
              />
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                skipSnaps: true,
              }}
            >
              <CarouselContent>
                {shuffleArray(produtos)
                  .filter((produto) => produto.marca.toLowerCase() === marca)
                  .slice(0, itensPorCarrosel)
                  .map((produto, i) => (
                    <CarouselItem
                      className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                      key={i}
                    >
                      <CardProduto produto={produto} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className='-left-5 md:-left-12 text-primary' />
              <CarouselNext className='-right-5 md:-right-12 text-primary' />
            </Carousel>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MostraProdutoMarcaHome;
