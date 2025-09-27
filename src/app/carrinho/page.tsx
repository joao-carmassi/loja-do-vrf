import { Button } from '@/components/ui/button';
import TableCarrinho from './table-carrinho';
import { H1 } from '@/components/ui/h1';

const Carrinho = () => {
  return (
    <main>
      <section className='mx-auto max-w-[95rem] p-6 md:p-12 space-y-3 md:space-y-6'>
        <H1 className='text-center'>Carrinho de compras</H1>
        <TableCarrinho />
        <div className='flex justify-end gap-3'>
          <Button
            className='flex-1 w-full md:flex-none md:w-fit'
            variant={'outline'}
            size={'lg'}
          >
            Ver mais produtos
          </Button>
          <Button className='flex-1 w-full md:flex-none md:w-fit' size={'lg'}>
            Iniciar consulta
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Carrinho;
