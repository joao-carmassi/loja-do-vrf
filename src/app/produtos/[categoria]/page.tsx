import getProdutos from '@/utils/getProdutos';
import AsideProdutos from './asideEProdutos';
import { Metadata } from 'next';
import generateUrl from '@/utils/generateUrl';

interface Props {
  params: {
    categoria: string;
  };
  searchParams: {
    q?: string;
  };
}

const ProdutosPage = async ({ params, searchParams }: Props) => {
  const { categoria } = await params;
  const { q } = await searchParams;

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
      <AsideProdutos
        q={q}
        subcategorias={subcategorias}
        marcas={marcas}
        categoria={categoria}
        produtosFiltrados={produtosFiltrados}
      />
    </main>
  );
};

export async function generateMetadata({
  params,
}: {
  params: { categoria: string };
}): Promise<Metadata> {
  const { categoria } = await params;
  const title = `Produtos da categoria ${categoria.toLocaleLowerCase()} | ${
    process.env.NEXT_PUBLIC_WEBSITE_NAME
  }`;
  const description = `Veja todos os produtos da categoria ${categoria.toLocaleLowerCase()} disponíveis na ${
    process.env.NEXT_PUBLIC_WEBSITE_NAME
  }. Peças originais, qualidade garantida e entrega para todo o Brasil.`;

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
