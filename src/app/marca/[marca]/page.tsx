import getProdutos from '@/utils/getProdutos';
import AsideEProdutos from './asideEProdutos';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{
    marca: string;
  }>;
}

const Produtos = async ({ params }: Props) => {
  const { marca } = await params;

  const produtosFiltrados = getProdutos.produtos.filter(
    (produto) => produto.marca.toLowerCase() === marca
  );

  const categorias = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.categoria.toLowerCase()))
  );

  return (
    <main>
      <AsideEProdutos
        categorias={categorias}
        marca={marca}
        produtos={produtosFiltrados}
      />
    </main>
  );
};

export async function generateMetadata({
  params,
}: {
  params: { marca: string };
}): Promise<Metadata> {
  const marca = params.marca?.toUpperCase() || '';
  const title = `Produtos da marca ${marca} | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`;
  const description = `Veja todos os produtos da marca ${marca} disponíveis na ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Peças originais, qualidade garantida e entrega para todo o Brasil.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function generateStaticParams() {
  const { marcas } = getProdutos;

  return marcas.map((marca) => ({ marca: marca.toLowerCase() }));
}

export default Produtos;
