import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { H1 } from '@/components/ui/h1';
import { H2 } from '@/components/ui/h2';
import { Label } from '@/components/ui/label';
import { P } from '@/components/ui/p';

interface Props {
  params: Promise<{
    marca: string;
  }>;
}

const Produtos = async ({ params }: Props) => {
  const { marca } = await params;

  return (
    <main>
      <section className='mx-auto max-w-[120rem] px-6 py-6 md:pl-0 md:pr-6 md:py-12'>
        <div className='flex'>
          <aside className='px-8 w-64 space-y-6 sticky top-6 h-fit hidden md:block'>
            <div className='space-y-3 '>
              <P className='font-semibold'>Categoria:</P>
              <ul className='space-y-4'>
                <li className='flex items-center gap-2'>
                  <Checkbox id='categoria1' />
                  <Label className='uppercase' htmlFor='categoria1'>
                    categoria
                  </Label>
                </li>
                <li className='flex items-center gap-2'>
                  <Checkbox id='categoria2' />
                  <Label className='uppercase' htmlFor='categoria2'>
                    categoria
                  </Label>
                </li>
                <li className='flex items-center gap-2'>
                  <Checkbox id='categoria3' />
                  <Label className='uppercase' htmlFor='categoria3'>
                    categoria
                  </Label>
                </li>
              </ul>
            </div>
          </aside>
          <div className='w-full space-y-3 md:space-y-6'>
            <H1 className='capitalize p-4 bg-secondary w-fit rounded-lg'>
              {marca}
            </H1>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
              {Array.from({ length: 100 }).map((_, i) => (
                <Card key={i}>
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Produtos;
