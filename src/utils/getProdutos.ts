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
  subcategorias: {} as {
    [categoria: string]: {
      categoria: string;
      subcategorias: string[];
    };
  },
};

getProdutos.categorias.forEach((categoria) => {
  getProdutos.subcategorias[categoria] = {
    categoria,
    subcategorias: [
      ...new Set(
        getProdutos.produtos
          .filter(
            (produto) => produto.categoria.toLocaleLowerCase() === categoria
          )
          .map((produto) => produto.subcategoria.toLocaleLowerCase())
      ),
    ].filter(Boolean),
  };
});

export type IProduto = (typeof getProdutos.produtos)[0];

export default getProdutos;
