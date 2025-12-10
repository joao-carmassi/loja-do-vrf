'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

function ContainerPesquisa({ q }: { q: string | undefined }): React.ReactNode {
  const route = useRouter();
  const [inputValue, setInputValue] = useState(q || '');
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    if (inputValue.trim() !== '') {
      route.push(`/pesquisa?q=${inputValue.trim()}`);
    }
  }, [inputValue, route]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputValue, route, handleClick]);

  return (
    <div
      className={`flex items-center h-full w-full max-w-xl mx-auto pt-6 md:pt-12`}
    >
      <div className='w-full relative'>
        <Input
          ref={inputRef}
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
            inputRef.current?.focus();
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
}

export default ContainerPesquisa;
