import getProdutos from '@/utils/getProdutos';
import AsideEProdutos from './asideEProdutos';
import type { Metadata } from 'next';
import generateUrl from '@/utils/generateUrl';

interface Props {
  params: Promise<{
    marca: string;
  }>;
}

const Produtos = async ({ params }: Props) => {
  const { marca } = await params;

  const produtosFiltrados = getProdutos.produtos.filter(
    (produto) => generateUrl(produto.marca) === marca
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
  const { marca } = await params;
  const title = `Chiller | Produtos da marca ${marca}`;
  const description = `Veja todos os produtos da marca ${marca} disponíveis na Chiller. Peças originais, qualidade garantida e entrega para todo o Brasil.`;
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

  return marcas.map((marca) => ({ marca: generateUrl(marca) }));
}

export default Produtos;
