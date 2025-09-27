import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const items = [
  {
    id: '1',
    name: 'Alex Thompson',
  },
  {
    id: '2',
    name: 'Sarah Chen',
  },
  {
    id: '3',
    name: 'James Wilson',
  },
  {
    id: '4',
    name: 'Maria Garcia',
  },
  {
    id: '5',
    name: 'David Kim',
  },
];

export default function TableCarrinho() {
  return (
    <div>
      <Table>
        <TableHeader className='bg-transparent w-full'>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='w-2/3'>Produto</TableHead>
            <TableHead className='w-full hidden md:table-cell'>
              Quantidade
            </TableHead>
            <TableHead className='w-full'>Remover</TableHead>
          </TableRow>
        </TableHeader>
        <tbody aria-hidden='true' className='table-row h-2'></tbody>
        <TableBody className='[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg'>
          {items.map((item) => (
            <TableRow
              key={item.id}
              className='odd:bg-muted/50 odd:hover:bg-muted/50 border-none hover:bg-transparent'
            >
              <TableCell className='py-2.5 md:py-3 font-medium space-y-3 md:space-y-0'>
                <div className=' flex gap-3 items-center'>
                  <div className='h-14 aspect-square bg-black text-white grid place-items-center'>
                    {item.id}
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>lorem</p>
                  </div>
                </div>
                <div className='md:hidden'>{item.id}</div>
              </TableCell>
              <TableCell className='py-2.5 md:py-3 hidden md:table-cell'>
                {item.id}
              </TableCell>
              <TableCell className='py-2.5 md:py-3'>
                <Button variant={'link'} size={'sm'}>
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
