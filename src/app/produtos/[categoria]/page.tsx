import getProdutos from '@/utils/get-produtos';
import AsideEProdutos from './asideEProdutos';
import { Metadata } from 'next';
import generateUrl from '@/utils/generate-url';

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
    (produto) => generateUrl(produto.categoria) === categoria,
  );

  const subcategorias = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.subcategoria)),
  );

  const marcas = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.marca)),
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: process.env.NEXT_PUBLIC_SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoria,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/produtos/${categoria}`,
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
  const title = `${categoria}: Modelos e Preços Oficiais`;
  const description = `Veja todos os produtos da categoria ${categoria} disponíveis na ${process.env.NEXT_PUBLIC_SITE_NAME || ''}. Peças originais, qualidade garantida e entrega para todo o Brasil.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/produtos/${categoria}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: { title, description, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default ProdutosPage;
