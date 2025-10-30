import { TProduto } from '@/utils/getProdutos';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CarrinhoState {
  carrinho: Array<{ item: TProduto; quantidade: string }>;
  adicionarAoCarrinho: (produto: TProduto) => void;
  alterarQuantidade: (id: string, quantidade: string) => void;
  removerDoCarrinho: (id: string) => void;
  limparCarrinho: () => void;
}

const storeCarrinho = create<CarrinhoState>()(
  persist(
    (set) => ({
      carrinho: [] as Array<{ item: TProduto; quantidade: string }>,
      adicionarAoCarrinho: (produto: TProduto) =>
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
    }),
    {
      name: 'carrinho-storage',
      partialize: (state) => ({ carrinho: state.carrinho }),
    }
  )
);

export default storeCarrinho;
