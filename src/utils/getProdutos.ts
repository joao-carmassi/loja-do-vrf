import produtos from '../data/produtos.json';

const getProdutos = {
  produtos: produtos.data.map((produto) => ({
    ...produto,
    codigos: produto.id.split('_'),
  })),
  marcas: [
    ...new Set(produtos.data.map((produto) => produto.marca.toLowerCase())),
  ],
  categorias: [
    ...new Set(produtos.data.map((produto) => produto.categoria.toLowerCase())),
  ],
};

export type TProduto = (typeof getProdutos.produtos)[0];

export default getProdutos;
