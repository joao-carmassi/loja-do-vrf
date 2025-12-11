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
import getProdutos from '@/utils/getProdutos';
import Image from 'next/image';

const marcasPermitidas = ['midea', 'toshiba'];
const produtosPermitidos = ['compressor'];

const MostraProdutoMarcaHome = () => {
  const { produtos } = getProdutos;

  return (
    <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-12'>
      {produtosPermitidos.map((produtoPermitido) => (
        <div
          key={produtoPermitido}
          className='md:bg-accent p-3 md:p-6 md:px-15 rounded-md space-y-6 md:space-y-9'
        >
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
            }}
          >
            <CarouselContent>
              {produtos
                .filter(
                  (produto) =>
                    produto.categoria.toLowerCase() === produtoPermitido
                )
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
      ))}
      {marcasPermitidas.map((marca) => (
        <div
          key={marca}
          className='md:bg-accent p-3 md:p-6 md:px-15 rounded-md space-y-6 md:space-y-9'
        >
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
            <CarouselPrevious className='-left-5 md:-left-12 text-primary' />
            <CarouselNext className='-right-5 md:-right-12 text-primary' />
          </Carousel>
        </div>
      ))}
    </section>
  );
};

export default MostraProdutoMarcaHome;
