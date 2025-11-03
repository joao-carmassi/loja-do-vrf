'use client';

import { Search, X } from 'lucide-react';
import { ClassNameValue } from 'tailwind-merge';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type Props = {
  inputValue: string;
  handleClick: () => void;
  setInputValue: (value: string) => void;
  className?: ClassNameValue;
};

const InputBuscaProduto = ({
  inputValue,
  handleClick,
  setInputValue,
  className,
}: Props) => {
  const inputReff = useRef<null | HTMLInputElement>(null);

  return (
    <div
      className={`flex items-center h-full w-full max-w-xl mx-auto ${className}`}
    >
      <div className='w-full relative'>
        <Input
          ref={inputReff}
          id='search'
          placeholder='Digite o nome do produto...'
          className='flex-1 h-10 rounded-none'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          aria-label='Limpar campo de busca'
          onClick={() => {
            setInputValue('');
            inputReff.current?.focus();
          }}
          className='rounded-full w-4.5 h-4.5 absolute top-1/2 -translate-y-1/2 right-3 hover:bg-foreground hover:text-background'
          variant={'outline'}
          size={'icon'}
        >
          <X className='!size-2.5' />
        </Button>
      </div>
      <Button
        aria-label='Pesquisar'
        onClick={handleClick}
        size='sm'
        className='h-10 rounded-none'
      >
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default InputBuscaProduto;
