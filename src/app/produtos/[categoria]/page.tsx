import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { H1 } from '@/components/ui/h1';
import { H2 } from '@/components/ui/h2';
import { Label } from '@/components/ui/label';
import { P } from '@/components/ui/p';
import { Separator } from '@/components/ui/separator';

interface Props {
  params: Promise<{
    categoria: string;
  }>;
}

const Produtos = async ({ params }: Props) => {
  const { categoria } = await params;

  return (
    <main>
      <section className='mx-auto max-w-[120rem] px-6 py-6 md:pl-0 md:pr-6 md:py-12'>
        <div className='flex'>
          <aside className='px-8 w-64 space-y-6 sticky top-6 h-fit hidden md:block'>
            <div className='space-y-3 '>
              <P className='font-semibold'>Subcategoria:</P>
              <ul className='space-y-4'>
                <li className='flex items-center gap-2'>
                  <Checkbox id='subcategoria1' />
                  <Label className='uppercase' htmlFor='subcategoria1'>
                    subcategoria
                  </Label>
                </li>
                <li className='flex items-center gap-2'>
                  <Checkbox id='subcategoria2' />
                  <Label className='uppercase' htmlFor='subcategoria2'>
                    subcategoria
                  </Label>
                </li>
                <li className='flex items-center gap-2'>
                  <Checkbox id='subcategoria3' />
                  <Label className='uppercase' htmlFor='subcategoria3'>
                    subcategoria
                  </Label>
                </li>
              </ul>
            </div>
            <Separator />
            <div className='space-y-3 '>
              <P className='font-semibold'>Marca:</P>
              <ul className='space-y-4'>
                <li className='flex items-center gap-2'>
                  <Checkbox id='marca1' />
                  <Label className='uppercase' htmlFor='marca1'>
                    Marca
                  </Label>
                </li>
                <li className='flex items-center gap-2'>
                  <Checkbox id='marca2' />
                  <Label className='uppercase' htmlFor='marca2'>
                    Marca
                  </Label>
                </li>
                <li className='flex items-center gap-2'>
                  <Checkbox id='marca3' />
                  <Label className='uppercase' htmlFor='marca3'>
                    Marca
                  </Label>
                </li>
              </ul>
            </div>
          </aside>
          <div className='w-full space-y-3 md:space-y-6'>
            <H1 className='capitalize'>{categoria}</H1>
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
