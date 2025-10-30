import CardProduto from '@/components/cardProduto';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { H2 } from '@/components/ui/h2';
import getProdutos from '@/utils/getProdutos';

const MostraProdutoMarcaHome = () => {
  const { produtos, marcas } = getProdutos;

  return (
    <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-12'>
      {marcas.map((marca) => (
        <div
          key={marca}
          className='md:bg-secondary p-3 md:p-6 md:px-15 rounded-md space-y-3 md:space-y-6'
        >
          <H2 className='mx-auto w-fit'>{marca}</H2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent>
              {produtos
                .filter((produto) => produto.marca.toLowerCase() === marca)
                .map((produto, i) => (
                  <CarouselItem
                    className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                    key={i}
                  >
                    <CardProduto produto={produto} />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='-left-5 md:-left-12' />
            <CarouselNext className='-right-5 md:-right-12' />
          </Carousel>
        </div>
      ))}
    </section>
  );
};

export default MostraProdutoMarcaHome;
