import getProdutos, { IProduto } from '@/utils/get-produtos';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CarrinhoState {
  carrinho: Array<{ item: IProduto; quantidade: string }>;
  adicionarAoCarrinho: (produto: IProduto) => void;
  alterarQuantidade: (id: string, quantidade: string) => void;
  removerDoCarrinho: (id: string) => void;
  limparCarrinho: () => void;
  checaCarrinho: () => void;
  geraListaDeOrcamento: () => string;
}

const { produtos } = getProdutos;

const storeCarrinho = create<CarrinhoState>()(
  persist(
    (set, get) => ({
      carrinho: [] as Array<{ item: IProduto; quantidade: string }>,
      adicionarAoCarrinho: (produto: IProduto) =>
        set((state) => ({
          carrinho: [
            ...state.carrinho.filter((item) => item.item.id !== produto.id),
            {
              item: produto,
              quantidade: '1',
            },
          ],
        })),
      alterarQuantidade: (id: string, quantidade: string) =>
        set((state) => ({
          carrinho: state.carrinho.map((produto) =>
            produto.item.id === id
              ? { ...produto, quantidade: quantidade }
              : produto
          ),
        })),
      removerDoCarrinho: (id: string) =>
        set((state) => ({
          carrinho: state.carrinho.filter((produto) => produto.item.id !== id),
        })),
      limparCarrinho: () => set({ carrinho: [] }),
      checaCarrinho: () => {
        set((state) => {
          const carrinhoAtualizado = state.carrinho.filter(
            (produtoNoCarrinho) =>
              produtos.some(
                (produtoDisponivel) =>
                  produtoDisponivel.id === produtoNoCarrinho.item.id
              )
          );
          return { carrinho: carrinhoAtualizado };
        });
      },
      geraListaDeOrcamento: () => {
        const carrinho = get().carrinho;
        let lista = `Olá, gostaria de fazer uma cotação:%0A%0A*${
          carrinho.length >= 2 ? 'Produtos' : 'Produto'
        }:*`;
        carrinho.forEach((item) => {
          lista += `%0A%0A*Nome:* ${item.item.nome}%0A*Quantidade:* ${
            item.quantidade
          }%0A*Codigo:* ${item.item.codigos.join(', ')}%0A*Sku:* ${
            item.item.sku
          }`;
        });
        return lista;
      },
    }),
    {
      name: 'carrinho-storage',
      partialize: (state) => ({ carrinho: state.carrinho }),
    }
  )
);

export default storeCarrinho;
