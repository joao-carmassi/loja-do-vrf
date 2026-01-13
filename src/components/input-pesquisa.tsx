import { SearchIcon } from 'lucide-react';
import { Button } from './ui/button';
import { ButtonGroup } from './ui/button-group';
import { Input } from './ui/input';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import getProdutos from '@/utils/get-produtos';
import Link from 'next/link';
import generateUrl from '@/utils/generate-url';
import Image from 'next/image';

interface Props {
  mobile?: boolean;
}

function InputPesquisaProduto({ mobile }: Props): React.ReactNode {
  const [show, setShow] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const pathname = usePathname();
  const { produtos } = getProdutos;

  const filtrarProdutos = () => {
    if (inputValue.trim() === '') return [];
    const tokens = inputValue
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(generateUrl);

    return produtos.filter((produto) => {
      const sku = generateUrl(produto.sku);
      const nome = generateUrl(produto.nome);
      const id = generateUrl(produto.id);
      const marca = generateUrl(produto.marca);
      const combinado = `${sku} ${nome} ${id} ${marca}`;
      return tokens.every((t) => combinado.includes(t));
    });
  };

  const normalizarSemRemoverEspacos = (str: string) =>
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const destacarTexto = (
    texto: string,
    termoPesquisa: string
  ): React.ReactNode => {
    if (!termoPesquisa.trim()) return texto;

    const escaparRegex = (str: string) =>
      str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const termos = termoPesquisa
      .split(' ')
      .filter(Boolean)
      .filter((t) => t.length >= 2);

    if (termos.length === 0) return texto;

    const textoNormalizado = normalizarSemRemoverEspacos(texto);
    const matches: Array<{ start: number; end: number }> = [];

    termos.forEach((termo) => {
      const termoNormalizado = normalizarSemRemoverEspacos(termo);
      const termoEscapado = escaparRegex(termoNormalizado);
      const regex = new RegExp(`\\b${termoEscapado}`, 'gi');

      let match;
      while ((match = regex.exec(textoNormalizado)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
        });
      }
    });

    if (matches.length === 0) return texto;

    matches.sort((a, b) => a.start - b.start);
    const matchesFiltrados = matches.filter((match, index) => {
      if (index === 0) return true;
      const anterior = matches[index - 1];
      return match.start >= anterior.end;
    });

    const resultado: React.ReactNode[] = [];
    let posicaoAtual = 0;

    matchesFiltrados.forEach((match, index) => {
      if (match.start > posicaoAtual) {
        resultado.push(texto.slice(posicaoAtual, match.start));
      }
      resultado.push(
        <span key={`${match.start}-${index}`} className='font-black'>
          {texto.slice(match.start, match.end)}
        </span>
      );
      posicaoAtual = match.end;
    });

    if (posicaoAtual < texto.length) {
      resultado.push(texto.slice(posicaoAtual));
    }

    return resultado;
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInputValue('');
  }, [pathname]);

  return (
    <ButtonGroup
      className={cn(
        'w-full relative',
        mobile ? 'flex lg:hidden' : 'hidden lg:flex'
      )}
      key={pathname}
    >
      <Input
        key={pathname}
        onBlur={() =>
          setTimeout(() => {
            setShow(false);
          }, 200)
        }
        onFocus={(e) => {
          setShow(e.target.value.length > 0);
        }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShow(e.target.value.length > 0);
        }}
        className='bg-card h-10'
        placeholder='Digite o nome ou código da peça'
      />
      <div
        className={cn(
          'absolute top-full w-full bg-white inset-shadow-lg p-3 z-20 mt-3 rounded-lg max-h-[45vh] overflow-y-auto flex flex-col gap-3 drop-shadow',
          !show && 'hidden'
        )}
      >
        {filtrarProdutos().length > 0 ? (
          filtrarProdutos()
            .slice(0, 100)
            .map((produto) => (
              <Link
                key={produto.id}
                href={`/produto/${generateUrl(
                  `${produto.nome}-${produto.sku}`
                )}`}
                className='group flex gap-2 items-center border-b pb-2 last:border-0 last:pb-0'
              >
                <Image
                  width={48}
                  height={48}
                  src={`/imgs/produtos/${produto.id}.png`}
                  alt={produto.nome}
                  className='aspect-square object-contain object-center rounded-sm border border-primary size-12'
                />
                <div>
                  <p className='group-hover:underline text-sm font-semibold text-primary'>
                    {destacarTexto(produto.nome, inputValue)}
                  </p>
                  <p className='text-xs group-hover:underline text-muted-foreground font-normal'>
                    {destacarTexto(produto.codigos.join(', '), inputValue)}
                  </p>
                </div>
              </Link>
            ))
        ) : (
          <p className='text-sm p-1.5'>Nenhum produto encontrado.</p>
        )}
      </div>
      <Button variant='secondary' aria-label='Pesquisar'>
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
}

export default InputPesquisaProduto;
