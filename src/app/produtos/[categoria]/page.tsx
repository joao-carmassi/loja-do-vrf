import getProdutos from '@/utils/getProdutos';
import AsideProdutos from './asideEProdutos';

interface Props {
  params: {
    categoria: string;
  };
}

const ProdutosPage = async ({ params }: Props) => {
  const { categoria } = await params;

  const produtosFiltrados = getProdutos.produtos.filter(
    (produto) => produto.categoria.toLowerCase() === categoria
  );

  const subcategorias = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.subcategoria))
  );

  const marcas = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.marca))
  );

  return (
    <main>
      <AsideProdutos
        subcategorias={subcategorias}
        marcas={marcas}
        categoria={categoria}
        produtosFiltrados={produtosFiltrados}
      />
    </main>
  );
};

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { categoria: string };
}): Promise<Metadata> {
  const categoria = params.categoria?.toUpperCase() || '';
  const title = `Produtos da categoria ${categoria} | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`;
  const description = `Veja todos os produtos da categoria ${categoria} disponíveis na ${process.env.NEXT_PUBLIC_WEBSITE_NAME}. Peças originais, qualidade garantida e entrega para todo o Brasil.`;
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

export async function generateStaticParams({ params }: Props) {
  const { categoria } = await params;
  const { produtos } = getProdutos;

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria.toLowerCase() === categoria
  );

  const subcategorias = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.subcategoria))
  );

  return subcategorias.map((subcategoria) => ({
    subcategoria: subcategoria.toLowerCase(),
  }));
}

export default ProdutosPage;
