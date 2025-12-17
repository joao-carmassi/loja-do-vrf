import getProdutos from '@/utils/get-produtos';
import AsideEProdutos from './asideEProdutos';
import type { Metadata } from 'next';
import generateUrl from '@/utils/generate-url';

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
        name: `Marca ${marca}`,
        item: `https://lojadovrf.com.br/marca/${marca}`,
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
  params: Promise<{ marca: string }>;
}): Promise<Metadata> {
  const { marca } = await params;
  const title = `Loja do VRF | Produtos da marca ${marca}`;
  const description = `Veja todos os produtos da marca ${marca} disponíveis na Loja do VRF. Peças originais, qualidade garantida e entrega para todo o Brasil.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/marca/${marca}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
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
