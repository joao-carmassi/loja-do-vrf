import { H1 } from '@/components/ui/h1';
import { CarouselProdutos } from './carousel-produtos';
import { H2 } from '@/components/ui/h2';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const Produtos = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <main>
      <section className='mx-auto p-6 md:p-12 max-w-[95rem] flex flex-col md:grid md:grid-cols-[1fr_33%] gap-6 md:gap-12'>
        <CarouselProdutos />
        <div className='space-y-3'>
          <H1>{slug}</H1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            laborum excepturi et? Fugiat accusantium expedita deserunt enim nam?
            Corrupti, at quis ut explicabo nam doloremque eos maiores in nobis
            aperiam.
          </p>
          <Button className='w-full'>Adicionar ao carrinho</Button>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            minima natus eius obcaecati dolores voluptate, odio corporis fugit
            aliquam. Hic illo neque itaque impedit quis corporis esse optio
            maiores ab.
          </p>
        </div>
        <div className='md:col-span-2 space-y-3'>
          <H2>Descricao:</H2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            necessitatibus tenetur repellendus autem saepe. Quos qui eligendi
            autem eveniet esse obcaecati, quibusdam nobis soluta debitis, nisi
            corporis dolor exercitationem saepe.
          </p>
        </div>
        <Carousel
          className='md:col-span-2'
          opts={{
            align: 'start',
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, i) => (
              <CarouselItem
                className='basis-1/2 md:basis-1/3 lg:basis-1/5'
                key={i}
              >
                <Card>
                  <CardHeader>
                    <div className='w-full aspect-square bg-muted grid place-items-center rounded-md border-secondary'>
                      <H1>{i + 1}</H1>
                    </div>
                  </CardHeader>
                  <CardContent className=''>
                    <p>Marca</p>
                    <div>
                      <H2 className='!text-base'>Produto {i + 1}</H2>
                      <p>Card Content</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='-left-5 md:-left-12' />
          <CarouselNext className='-right-5 md:-right-12' />
        </Carousel>
      </section>
    </main>
  );
};

export default Produtos;
