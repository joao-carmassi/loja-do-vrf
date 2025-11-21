import getProdutos from '@/utils/getProdutos';
import AsideProdutos from './asideEProdutos';
import { Metadata } from 'next';
import generateUrl from '@/utils/generateUrl';
import { Suspense } from 'react';

interface Props {
  params: {
    categoria: string;
  };
}

const ProdutosPage = async ({ params }: Props) => {
  const { categoria } = await params;

  const produtosFiltrados = getProdutos.produtos.filter(
    (produto) => generateUrl(produto.categoria) === categoria
  );

  const subcategorias = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.subcategoria))
  );

  const marcas = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.marca))
  );

  return (
    <main>
      <Suspense>
        <AsideProdutos
          subcategorias={subcategorias}
          marcas={marcas}
          categoria={categoria}
          produtosFiltrados={produtosFiltrados}
        />
      </Suspense>
    </main>
  );
};

export async function generateMetadata({
  params,
}: {
  params: { categoria: string };
}): Promise<Metadata> {
  const { categoria } = await params;
  const title = `Chiller | Produtos da categoria ${categoria.toLocaleLowerCase()}`;
  const description = `Veja todos os produtos da categoria ${categoria.toLocaleLowerCase()} disponíveis na Chiller. Peças originais, qualidade garantida e entrega para todo o Brasil.`;

  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export async function generateStaticParams() {
  const { categorias } = getProdutos;

  return categorias.map((categoria) => ({
    categoria: generateUrl(categoria),
  }));
}

export default ProdutosPage;
