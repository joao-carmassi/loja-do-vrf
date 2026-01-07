/* eslint-disable react/jsx-no-comment-textnodes */
import CardProduto from '@/components/card-produto';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H2 } from '@/components/ui/h2';
import getProdutos from '@/utils/get-produtos';
import itensPorCarrosel from '@/utils/items-per-category';
import shuffleArray from '@/utils/shuffle-array';

const marcasPermitidas = ['midea', 'toshiba'];
const produtosPermitidos = ['compressores'];

const MostraProdutoMarcaHome = () => {
  const { produtos } = getProdutos;

  return (
    <section className='space-y-3 md:space-y-6'>
      {produtosPermitidos.map((produtoPermitido) => (
        <div
          key={produtoPermitido}
          className='mx-auto max-w-[95rem] px-6 md:px-12 py-6'
        >
          <div className='space-y-6'>
            <div className='flex items-center justify-between bg-linear-to-r from-primary to-secondary px-5 py-4 rounded-lg'>
              <div className='text-card font-bold text-xl md:text-2xl'>///</div>
              <H2 className='!text-2xl md:!text-3xl lg:!text-4xl !text-card !font-bold capitalize'>
                {produtoPermitido}
              </H2>
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
          className='mx-auto max-w-[95rem] px-6 md:px-12 pb-6 nth-last-[1]:pb-12 md:pb-6'
        >
          <div className='space-y-6'>
            <div className='flex items-center justify-between bg-linear-to-r from-primary to-secondary px-5 py-4 rounded-lg'>
              <div className='text-card font-bold text-xl md:text-2xl'>///</div>
              <H2 className='!text-2xl md:!text-3xl lg:!text-4xl !text-card !font-bold capitalize'>
                {marca}
              </H2>
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
