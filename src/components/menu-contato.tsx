const Email = () => (
  <a
    target='_blank'
    href='mailto:vendas@lojadovrf.com.br'
    className='flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-start tracking-wide'
  >
    <span className='block font-normal'>Envie um e-mail agora mesmo</span>
    <div className='flex gap-1 items-center'>
      <svg
        className='inline'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        width='20'
        height='20'
        strokeWidth='2'
      >
        <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
        <path d='M3 7l9 6l9 -6'></path>
      </svg>
      <p>vendas@lojadovrf.com.br</p>
    </div>
  </a>
);

const Whatsapp = () => (
  <a
    target='_blank'
    href='https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças.'
    className='flex flex-col p-2 rounded-none font-semibold gap-0 items-start tracking-wide'
  >
    <span className='block font-normal'>Envie uma mensagem por Whatsapp</span>
    <div className='flex gap-1 items-center'>
      <svg
        className='text-green-500 inline'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        width='20'
        height='20'
        strokeWidth='2'
      >
        <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
        <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
      </svg>
      <p>(11) 96918-9244</p>
    </div>
  </a>
);

const HorarioAtendimento = () => (
  <div className='flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-100 items-start tracking-wide'>
    <span className='block font-normal'>Horário de atendimento:</span>
    <div className='flex gap-1 items-center'>
      <svg
        className='inline'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        width='24'
        height='24'
        strokeWidth='2'
      >
        <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
        <path d='M12 12l3 -2'></path>
        <path d='M12 7v5'></path>
      </svg>
      <div>
        <p className='text-nowrap'>Segunda à Sexta - 9 às 17 horas</p>
      </div>
    </div>
  </div>
);

const MenuContato = {
  Email,
  Whatsapp,
  HorarioAtendimento,
};

export default MenuContato;
