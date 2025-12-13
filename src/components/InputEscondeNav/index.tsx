'use client';

import './ContainerHeader.css';
import { useEffect } from 'react';

const InputEscondeProdutos = () => {
  useEffect(() => {
    const divInput = document.getElementById('idMenuBotao') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        divInput.classList.add('hidden');
      } else {
        divInput.classList.remove('hidden');
      }
    });
  }, []);

  return (
    <div id='idMenuBotao' className='hidden'>
      <input
        className='check-icon hidden'
        id='check-icon'
        name='check-icon'
        type='checkbox'
      />
      <label className='icon-menu' htmlFor='check-icon'>
        <div className='bar bar--1'></div>
        <div className='bar bar--2'></div>
        <div className='bar bar--3'></div>
      </label>
    </div>
  );
};

export default InputEscondeProdutos;
