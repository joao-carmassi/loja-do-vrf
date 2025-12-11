/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from 'react';
import AsideEProdutos from '../produtos/[categoria]/asideEProdutos';
import getProdutos from '@/utils/getProdutos';
import ContainerPesquisa from './containerPesquisa';
import generateUrl from '@/utils/generateUrl';

interface Props {
  searchParams: Promise<{ q: string | undefined }>;
}

const filtraProdutos = (produtos: any[], termo: string | undefined) => {
  const t = generateUrl(termo || '');

  return produtos.filter((p) => {
    return (
      generateUrl(p.nome || '').includes(t) ||
      generateUrl(p.codigos || '').includes(t) ||
      generateUrl(p.sku || '').includes(t) ||
      generateUrl(p.categoria || '').includes(t) ||
      generateUrl(p.subcategoria || '').includes(t)
    );
  });
};

async function PagePesquisa({ searchParams }: Props): Promise<React.ReactNode> {
  const { q } = await searchParams;

  const produtosFiltrados = filtraProdutos(getProdutos.produtos, q);

  const marcas = Array.from(
    new Set(produtosFiltrados.map((produto) => produto.marca))
  );

  return (
    <main>
      <ContainerPesquisa q={q} />
      <Suspense>
        <AsideEProdutos marcas={marcas} produtosFiltrados={produtosFiltrados} />
      </Suspense>
    </main>
  );
}

export default PagePesquisa;
