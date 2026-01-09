'use client';

import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function WhatsButton(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={cn(
        'fixed right-3 bottom-3 bg-linear-to-r from-green-500 to-green-700 text-white shadow-lg transition-colors cursor-pointer z-50 rounded-full'
      )}
    >
      <div className='relative'>
        <Link
          className={cn('flex items-center gap-2 p-1.5', isOpen && 'pr-5')}
          href='https://api.whatsapp.com/send/?phone=5511969189244&text=Oi%2C+gostaria+de+ajuda+de+um+especialista+para+selecionar+a+pe%C3%A7a+para+meu+VRF.&type=phone_number&app_absent=0'
          target='_blank'
        >
          <svg
            className='text-green-700 bg-white shadow-md rounded-full p-1 inline'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            width='35'
            height='35'
            strokeWidth='2'
          >
            <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
            <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
          </svg>
          <div
            className={cn('text-sm font-semibold hidden', isOpen && 'block')}
          >
            <p className='leading-4'>Fale com</p>
            <p className='leading-4'>um consultor</p>
          </div>
        </Link>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size={'icon'}
          className={cn(
            'absolute -top-1 -left-1 w-4.5 h-4.5 rounded-full',
            !isOpen && 'hidden'
          )}
          aria-label='Fechar botão do WhatsApp'
        >
          <X className='!size-2.5' />
        </Button>
      </div>
    </div>
  );
}

export default WhatsButton;
