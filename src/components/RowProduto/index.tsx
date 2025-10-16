import { IProdutos } from '@/interface/IProdutos';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import slugify from 'slugify';

interface Props {
  produto: IProdutos;
  imgSize: string;
  pesquisa?: string;
}

const RowProduto = ({
  produto,
  imgSize,
  pesquisa = '',
}: Props): React.ReactNode => {
  function destacarTexto(texto: string, termoPesquisa: string) {
    if (!termoPesquisa.trim()) return texto;

    const termos = termoPesquisa.split(' ').filter(Boolean);

    // Cria um array de objetos com as posições e termos encontrados
    const matches: Array<{ start: number; end: number; termo: string }> = [];

    termos.forEach((termo) => {
      const regex = new RegExp(termo, 'gi');
      let match;
      while ((match = regex.exec(texto)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          termo: match[0],
        });
      }
    });

    // Ordena por posição e remove sobreposições
    matches.sort((a, b) => a.start - b.start);
    const matchesFiltrados = matches.filter((match, index) => {
      if (index === 0) return true;
      const anterior = matches[index - 1];
      return match.start >= anterior.end;
    });

    if (matchesFiltrados.length === 0) return texto;

    // Constrói o texto final com destacos
    let resultado = '';
    let posicaoAtual = 0;

    matchesFiltrados.forEach((match) => {
      // Adiciona texto antes do match
      resultado += texto.slice(posicaoAtual, match.start);
      // Adiciona o match destacado
      resultado += `<span class="font-bold">${match.termo}</span>`;
      posicaoAtual = match.end;
    });

    // Adiciona o resto do texto
    resultado += texto.slice(posicaoAtual);

    return resultado;
  }

  function deixaNomeDoProdutoIgualPesquisaNegrito() {
    return destacarTexto(produto.nome, pesquisa);
  }

  function deixaCodigoDoProdutoIgualPesquisaNegrito() {
    const codigo = produto.codigos.join(', ');
    return destacarTexto(codigo, pesquisa);
  }

  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Link
      prefetch={false}
      href={`/produto/${slugify(`${produto.nome}-${produto.sku}`, {
        lower: true,
        strict: true,
      })}`}
      className='flex items-center gap-3'
    >
      <ExportedImage
        width={60}
        height={60}
        placeholder='empty'
        src={`${path}/assets/img/produtos/${produto.id}.png`}
        alt=''
        className={`block object-contain aspect-square border border-secondary rounded-sm ${imgSize}`}
      />
      <div>
        <h2
          dangerouslySetInnerHTML={{
            __html: deixaNomeDoProdutoIgualPesquisaNegrito(),
          }}
          className='break-all text-secondary font-semibold'
        />
        <p
          dangerouslySetInnerHTML={{
            __html: deixaCodigoDoProdutoIgualPesquisaNegrito(),
          }}
          className='text-gray-600'
        />
      </div>
    </Link>
  );
};

export default RowProduto;
