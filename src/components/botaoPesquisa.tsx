'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InputBuscaProduto from './inputBuscaProdutos';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const DialogPesquisaProdutos = () => {
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const route = useRouter();

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      setOpen(false);
      route.push(`/pesquisa?q=${inputValue.trim()}`);
    }
  };

  useEffect(() => {
    const openModalShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', openModalShortcut);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', openModalShortcut);
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, route]);

  return (
    <Dialog onOpenChange={setOpen} open={isOpen}>
      <Button
        aria-label='Botão abrir campo pesquisa'
        onClick={() => setOpen(true)}
        variant='outline'
        size='icon'
        className='rounded-full bg-muted hover:bg-primary hover:text-card hover:border-primary'
      >
        <Search className='h-4 w-4' />
      </Button>
      <DialogContent
        className='!w-full !max-w-full top-0 translate-y-0 h-16 p-3 border-0 rounded-none'
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle hidden>Pesquisar produto</DialogTitle>
          <InputBuscaProduto
            handleClick={handleClick}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPesquisaProdutos;
