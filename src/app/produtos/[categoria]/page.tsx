import getProdutos from '@/utils/getProdutos';
import AsideEProdutos from './asideEProdutos';
import { Metadata } from 'next';
import generateUrl from '@/utils/generateUrl';

interface Props {
  params: Promise<{
    categoria: string;
  }>;
  searchParams: Promise<{
    subcategoria: string;
  }>;
}

const ProdutosPage = async ({ params, searchParams }: Props) => {
  const { categoria } = await params;
  const { subcategoria } = await searchParams;

  const produtosFiltrados = getProdutos.produtos.filter(
    (produto) => generateUrl(produto.categoria) === categoria
  );

  const subcategorias = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.subcategoria))
  );

  const marcas = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.marca))
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://lojadovrf.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoria,
        item: `https://lojadovrf.com.br/produtos/${categoria}`,
      },
    ],
  };

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AsideEProdutos
        subcategorias={subcategorias}
        marcas={marcas}
        categoria={categoria}
        produtosFiltrados={produtosFiltrados}
        subcategoria={subcategoria}
      />
    </main>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const title = `Loja do VRF | Produtos da categoria ${categoria.toLocaleLowerCase()}`;
  const description = `Veja todos os produtos da categoria ${categoria.toLocaleLowerCase()} disponíveis na Loja do VRF. Peças originais, qualidade garantida e entrega para todo o Brasil.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/produtos/${categoria}`,
    },
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
