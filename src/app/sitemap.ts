import type { MetadataRoute } from 'next';
import slugify from 'slugify';
import produtosData from '@/data/produtos.json';

const baseUrl = 'https://lojadovrf.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const produtos = produtosData.data;

  // Extrair marcas únicas
  const marcas = [...new Set(produtos.map((p) => p.marca))];

  // Extrair categorias únicas
  const categorias = [...new Set(produtos.map((p) => p.categoria))];

  // URLs estáticas
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/carrinho`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
  ];

  // URLs de marcas
  const marcaUrls: MetadataRoute.Sitemap = marcas.map((marca) => ({
    url: `${baseUrl}/marca/${slugify(marca, { lower: true, strict: true })}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // URLs de categorias
  const categoriaUrls: MetadataRoute.Sitemap = categorias.map((categoria) => ({
    url: `${baseUrl}/produtos/${slugify(categoria, {
      lower: true,
      strict: true,
    })}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // URLs de produtos
  const produtoUrls: MetadataRoute.Sitemap = produtos.map((produto) => ({
    url: `${baseUrl}/produto/${produto.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticUrls, ...marcaUrls, ...categoriaUrls, ...produtoUrls];
}
