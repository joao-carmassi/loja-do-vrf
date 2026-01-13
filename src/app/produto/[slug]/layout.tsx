import getProdutos from '@/utils/get-produtos';
import generateUrl from '@/utils/generate-url';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const produto = getProdutos.produtos.find(
    (prod) => generateUrl(`${prod.nome}-${prod.sku}`) === slug
  );
  if (!produto) return {};
  const title = `${produto.nome} ${produto.marca} Loja do VRF`;
  const description =
    produto.descricao
      ?.replace(/[#*\-]/g, '')
      .split('\n')[0]
      ?.trim() ||
    `Compre ${produto.nome} da marca ${produto.marca} em Loja do VRF.`;
  const images: string[] = [];
  return {
    title,
    description,
    alternates: {
      canonical: `/produto/${slug}`,
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
      images,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}

const ProdutoLayout = async ({
  children,
  params,
}: Props): Promise<React.ReactNode> => {
  const { slug } = await params;

  const produto = getProdutos.produtos.find(
    (prod) => generateUrl(`${prod.nome}-${prod.sku}`) === slug
  );

  if (!produto) notFound();

  return <>{children}</>;
};

export default ProdutoLayout;
