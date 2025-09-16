import InputQuantidadeBotao from '@/components/InputQuantidadeBotao';
import SetaLink from '@/components/SetaLink';
import ProdutosSimilares from '@/app/produto/[sku]/SwiperProdutosSimilares';
import { IProdutos } from '@/interface/IProdutos';
import getProdutos from '@/utils/getProdutos';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import produtos from '@/data/db.json';
import { notFound } from 'next/navigation';
import IProdutosFiltrados from '@/interface/IProdutosFiltrados';
import slugify from 'slugify';

interface Props {
  params: Promise<{
    sku: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { sku } = await params;

  const todosProdutos = getProdutos.todos();
  const produto = todosProdutos.find(
    (p) => slugify(`${p.nome}-${p.sku}`, { strict: true, lower: true }) === sku
  ) as IProdutos;

  return {
    title: `${produto.nome} - Loja do VRF`,
    description: `Codigos compativeis: ${produto.codigos.join(', ')}`,
  };
}

async function PaginaProduto({ params }: Props) {
  const { sku } = await params;

  const produtos = getProdutos.porCategoria() as IProdutosFiltrados;
  const rawSku = sku;
  const todosProdutos = getProdutos.todos();
  const produto = todosProdutos.find(
    (p) =>
      slugify(`${p.nome}-${p.sku}`, { strict: true, lower: true }) === rawSku
  ) as IProdutos;

  if (!produto) {
    notFound();
  }

  const outraImagens = undefined;

  return (
    <main>
      <section>
        <div className='hidden md:block'>
          <div className='mt-5 px-10 lg:px-40 xl:px-52'>
            <SetaLink nome={produto.nome} />
          </div>
        </div>
        <div className='mt-5 md:mt-10 flex flex-col gap-5 px-10 lg:px-40 xl:px-52 bg-base-100 pb-14'>
          <div className='flex flex-col gap-y-10 gap-5 lg:gap-10 md:flex-row'>
            <div className='col-span-5 flex-col-reverse gap-5 md:flex-row flex items-start md:col-span-2 place-items-center'>
              <div className='h-24'>
                <div className='flex justify-center md:flex-col gap-3'>
                  <button
                    className='rounded-md duration-200 h-24 lg:h-32 border border-gray-400 hover:border-secondary aspect-square'
                    // @click="trocaImage(produto.id)"
                  >
                    <ExportedImage
                      placeholder='empty'
                      width={128}
                      height={128}
                      priority
                      className='rounded-md aspect-square'
                      src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/produtos/${produto.id}.png`}
                      alt='Imagem do produto'
                    />
                  </button>
                </div>
              </div>
              <div>
                <ExportedImage
                  placeholder='empty'
                  src={
                    outraImagens ||
                    `${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/produtos/${produto.id}.png`
                  }
                  className='w-[50rem] rounded-xl object-contain aspect-square'
                  alt='Imagem do produto'
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className='flex col-span-5 md:col-span-2 flex-col gap-4'>
              <Link
                prefetch={false}
                href={`/marca/${slugify(produto.marca, {
                  strict: true,
                  lower: true,
                })}`}
              >
                <ExportedImage
                  placeholder='empty'
                  loading='lazy'
                  className='w-28'
                  width={135}
                  height={45}
                  src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/marcas/${produto.marca}.png`}
                  alt={`Logo marca ${produto.marca}`}
                />
              </Link>
              <h1 className='text-2xl text-secondary lg:text-3xl font-semibold'>
                {produto.nome || 'Nome'}
              </h1>
              <h2 className='text-secondary border-secondary border rounded-md w-fit px-2 py-2 text-xs'>
                Códigos compatíveis: {produto.codigos.join(', ')}
              </h2>
              <p className='text-gray-400 text-xs'>SKU: {produto.sku}</p>
              <p className='text-green-600 text-xs font-semibold'>
                PARCELAMENTO EM ATÉ 12 VEZES
              </p>
              <p className='text-green-600 text-xs font-semibold'>
                7% DE DESCONTO NO PIX
              </p>
              <InputQuantidadeBotao produto={produto} />
              <p className='text-green-600 flex items-center gap-0.5 text-xs lowercase font-semibold'>
                <svg
                  className='inline'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  width='20'
                  height='20'
                  strokeWidth='1.25'
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  stroke='currentColor'
                >
                  <path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
                  <path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
                  <path d='M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5'></path>
                </svg>
                {produto.prazo || 'Prazo'}
              </p>
              <div className='flex-1'>
                <p className='font-semibold text-green-600 mb-5'>
                  Formas de envio:
                </p>
                <div className='grid gap-5 grid-cols-2 place-items-center'>
                  <ExportedImage
                    placeholder='empty'
                    alt=''
                    loading='lazy'
                    className='w-32'
                    src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/footer/correiosEnvio.png`}
                    width={128}
                    height={50}
                  />
                  <ExportedImage
                    placeholder='empty'
                    alt=''
                    loading='lazy'
                    className='w-28'
                    src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/footer/loggi.png`}
                    width={128}
                    height={50}
                  />
                  <ExportedImage
                    placeholder='empty'
                    alt=''
                    loading='lazy'
                    className='w-28'
                    src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/footer/Azul_Cargo_Express_logo.png`}
                    width={128}
                    height={50}
                  />
                  <ExportedImage
                    placeholder='empty'
                    alt=''
                    loading='lazy'
                    className='w-28'
                    src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/footer/LATAM_Cargo_logo.svg.png`}
                    width={128}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-5 border-y-2 py-10 border-secondary'>
            <h3 className='text-ms text-secondary font-semibold'>Descrição:</h3>
            <p
              dangerouslySetInnerHTML={{ __html: produto.descricao }}
              className='text-xs flex flex-col text-gray-600'
            ></p>
          </div>
          <div className='w-full col-span-full'>
            <h2 className='text-2xl text-secondary font-semibold'>
              Produtos Semelhantes...
            </h2>
            <div className='flex items-center mt-5 relative justify-between'>
              <ProdutosSimilares
                categoria={produto.categoria}
                produtos={produtos}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return produtos.data.map((produto) => ({
    sku: slugify(`${produto.nome}-${produto.sku}`, {
      strict: true,
      lower: true,
    }),
  }));
}

export default PaginaProduto;
