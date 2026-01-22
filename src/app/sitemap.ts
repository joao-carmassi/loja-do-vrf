import type { MetadataRoute } from 'next';
import produtosData from '@/data/produtos.json';
import getPdf from '@/utils/get-pdfs';
import generateUrl from '@/utils/generate-url';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const produtos = produtosData.data;

  // Extrair marcas únicas
  const marcas = [...new Set(produtos.map((p) => p.marca))];

  // Extrair categorias únicas
  const categorias = [...new Set(produtos.map((p) => p.categoria))];

  // Extrair marcas de manuais técnicos
  const { marcas: marcasManuais } = getPdf();

  // URLs estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl as string,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/carrinho`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/manuais-tecnicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // URLs de marcas
  const marcaUrls: MetadataRoute.Sitemap = marcas.map((marca) => ({
    url: `${baseUrl}/marca/${generateUrl(marca)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // URLs de categorias
  const categoriaUrls: MetadataRoute.Sitemap = categorias.map((categoria) => ({
    url: `${baseUrl}/produtos/${generateUrl(categoria)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // URLs de produtos
  const produtoUrls: MetadataRoute.Sitemap = produtos.map((produto) => ({
    url: `${baseUrl}/produto/${generateUrl(`${produto.nome}-${produto.sku}`)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // URLs de manuais técnicos por marca
  const manuaisUrls: MetadataRoute.Sitemap = marcasManuais.map((marca) => ({
    url: `${baseUrl}/manuais-tecnicos/${generateUrl(marca)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticUrls,
    ...marcaUrls,
    ...categoriaUrls,
    ...produtoUrls,
    ...manuaisUrls,
  ];
}
