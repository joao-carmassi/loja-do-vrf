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
        'fixed right-3 bottom-3 bg-green-600 text-white  shadow-lg hover:bg-green-700 transition-colors cursor-pointer z-50 rounded-full',
        isOpen && 'rounded-lg'
      )}
    >
      <div className='relative'>
        <Link
          className='flex items-center gap-1 p-2'
          href='https://api.whatsapp.com/send/?phone=5511969189244&text=Oi%2C+gostaria+de+ajuda+de+um+especialista+para+selecionar+a+pe%C3%A7a+para+meu+VRF.&type=phone_number&app_absent=0'
          target='_blank'
        >
          <svg
            className='text-white inline'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            width='23'
            height='23'
            strokeWidth='2'
          >
            <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
            <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
          </svg>
          <p className={cn('text-sm font-semibold hidden', isOpen && 'block')}>
            Fale com um especialista
          </p>
        </Link>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size={'icon'}
          className={cn(
            'absolute -top-2 -left-2 w-4.5 h-4.5 rounded-full',
            !isOpen && 'hidden'
          )}
        >
          <X className='!size-2.5' />
        </Button>
      </div>
    </div>
  );
}

export default WhatsButton;
